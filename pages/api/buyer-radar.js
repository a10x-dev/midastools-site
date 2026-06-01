// Buyer-Radar — MidasTools' second REAL AI money-tool.
// You type the service you sell ("video editing", "logo design"); it finds
// REAL, recent Reddit posts where someone is asking to HIRE that — across
// r/forhire AND niche communities — then Claude classifies true buyer-intent
// (vs. freelancers advertising / people just asking advice), ranks them, and
// drafts a non-spammy reply for each. The money outcome: real warm leads.
//
// Pipe: Reddit blocks unauthenticated JSON from datacenter IPs (403), so we
// use Firecrawl's /v2/search (Google-equivalent index) with tbs=qdr:m for
// freshness. Validated 2026-06-01: real [Hiring]/"looking to hire" posts come
// back; the raw mix is noisy, so the Claude classification layer IS the tool.
//
// Two infra deps, both auto-upgrade the moment their env var exists on Vercel:
//   FIRECRAWL_API_KEY  -> real lead fetching (without it: honest "manual mode"
//                         that hands the user click-ready Reddit search URLs).
//   ANTHROPIC_API_KEY  -> Claude classification + reply drafting (without it:
//                         returns the raw matches with a generic reply skeleton).
//
// Cost control: per-IP daily search cap in KV (Pro skips). Each search runs at
// most 3 Firecrawl queries, so a free anonymous tool can never bleed money.

import { readKV, writeKV } from '../../lib/kv-store';

const MODEL = 'claude-haiku-4-5-20251001';
const MODEL_PRO = 'claude-sonnet-4-6';
const FREE_DAILY_SEARCH_CAP = 5; // per IP per day, only for non-Pro
const FIRECRAWL_URL = 'https://api.firecrawl.dev/v2/search';
const PER_QUERY_LIMIT = 8;
const MAX_RAW = 18; // cap results sent to the LLM (cost + latency)

async function isProCode(code) {
  const c = String(code || '').trim().toUpperCase();
  if (!/^MIDAS-[A-F0-9]{8}$/.test(c)) return false;
  try {
    const rec = await readKV(`pro-code:${c}`);
    return !!(rec && rec.email);
  } catch { return false; }
}

function getIp(req) {
  const fwd = req.headers['x-forwarded-for'] || '';
  return (fwd.split(',')[0] || req.socket?.remoteAddress || 'unknown').trim();
}

function clamp(s, n = 120) {
  return String(s || '').trim().replace(/\s+/g, ' ').slice(0, n);
}

// Build buyer-intent search queries from the service the user sells.
// Phrasing avoids verb-only templates ("need someone to {service}") so noun
// services ("AI consulting") read correctly too.
function buildQueries(service) {
  const s = service.toLowerCase();
  return [
    `site:reddit.com looking to hire ${s}`,
    `site:reddit.com ("need a ${s}" OR "looking for a ${s}" OR "recommend a ${s}")`,
    `site:reddit.com/r/forhire [Hiring] ${s}`,
  ];
}

function subFromUrl(url) {
  const m = String(url || '').match(/\/r\/([A-Za-z0-9_]+)/);
  return m ? m[1] : '';
}

async function firecrawlSearch(query, key) {
  try {
    const resp = await fetch(FIRECRAWL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'User-Agent': 'midastools-buyer-radar/1.0',
      },
      body: JSON.stringify({ query, limit: PER_QUERY_LIMIT, tbs: 'qdr:m' }),
    });
    if (!resp.ok) return [];
    const json = await resp.json();
    const items = json?.data?.web || (Array.isArray(json?.data) ? json.data : []) || [];
    return items.map(r => ({
      title: String(r.title || '').slice(0, 160),
      url: String(r.url || ''),
      snippet: String(r.description || r.snippet || '').slice(0, 300),
    }));
  } catch {
    return [];
  }
}

// Hard seller-tells in the THREAD TITLE. We drop these deterministically,
// regardless of snippet, because the lead's link points AT this thread — even
// if a buyer commented, we won't send the user into a freelancer's "for hire"
// thread. NB: "[HIRE]" (someone wanting to hire) is a BUYER tag and must NOT
// match here; only "[FOR HIRE]" / "for hire" / "need clients/work" do.
const TITLE_SELLER_RE = /\[for\s?hire\]|\bfor hire\b|need clients?\b|need work\b|looking for (work|clients)|available for (work|hire|projects)/i;

// Dedupe by Reddit thread URL (strip query/fragment), keep first seen, and drop
// threads whose title is clearly a freelancer advertising themselves.
function dedupe(rows) {
  const seen = new Set();
  const out = [];
  for (const r of rows) {
    if (!r.url || !/reddit\.com\/r\//i.test(r.url)) continue;
    if (TITLE_SELLER_RE.test(r.title || '')) continue;
    const key = r.url.split('?')[0].split('#')[0].replace(/\/$/, '');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ ...r, url: key, subreddit: subFromUrl(r.url) });
  }
  return out;
}

function buildSystemPrompt(service) {
  return [
    `You are a world-class lead-qualification analyst for a freelancer who sells: "${service}".`,
    'You are given raw Reddit search results (title + snippet + subreddit + url). For EACH result, decide who the POSTER is. Only ONE category is a lead: a BUYER.',
    '',
    'A BUYER is someone with money who wants to HIRE/PAY someone else for this service. Buyer-tells: "[Hiring]", "looking to hire", "need a/need someone to", "want to pay someone", "ISO a ___", "can anyone recommend someone I can hire", "budget is $X", "willing to pay".',
    '',
    'DROP everything else. Be especially ruthless about SELLERS — freelancers advertising THEMSELVES — because mistaking a seller for a buyer destroys trust. Seller-tells (DROP on ANY of these): "[For Hire]", "for hire", "I am a / I\'m a", "I offer", "my services", "available for work", "open for projects", "need clients", "looking for work", "looking for clients", "DM me", "hire me", "my rates", "my portfolio", "X years of experience", "taking on new clients". A title like "Need Clients" or "Need Work" is a SELLER (they need clients = they sell), NOT a buyer.',
    'Also DROP: ADVICE/discussion posts (how-to, "is X worth it", opinion) with no intent to hire, and anything IRRELEVANT to the service.',
    'Note: subreddits named "*_forhire" or "HireAn*" contain BOTH buyers and sellers — judge each post by its actual text, not the subreddit.',
    '',
    'Keep ONLY genuine BUYERS. For each buyer:',
    '- intent: integer 0-100 — strength + recency of hire-intent ("[Hiring], budget $X, start now" = 90+; a vague "might need help eventually" = 45). Do NOT output any lead below 50 — if your honest score is under 50, drop it.',
    '- why: ONE short sentence quoting the buyer signal.',
    '- reply: a SHORT (2-4 sentence) reply the freelancer can post/DM. Open by referencing THEIR specific need, lead with credibility not a pitch, end with a low-friction question. Sound like a sharp helpful human, NOT a copy-paste ad. No "I am a professional X with N years". Use a [bracket] only where the user must add a personal specific (e.g. a portfolio link).',
    '',
    'When in ANY doubt about buyer vs seller vs advice, DROP. A short list of real buyers beats a long list of noise. It is far better to return 2 real buyers than 6 with a seller mixed in.',
    'Return ONLY minified JSON (no markdown, no commentary): {"leads":[{"url":"string","intent":int,"why":"string","reply":"string"}]} sorted by intent descending. If there are no real buyers, return {"leads":[]}.',
  ].join('\n');
}

function buildUserPrompt(rows) {
  const lines = rows.map((r, i) =>
    `[${i}] r/${r.subreddit} | ${r.title}\n    ${r.snippet}\n    ${r.url}`
  ).join('\n');
  return `RAW REDDIT RESULTS:\n${lines}\n\nClassify and return JSON only.`;
}

function safeParseJson(text) {
  if (!text) return null;
  let t = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  try { return JSON.parse(t); } catch {}
  const m = t.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch { return null; } }
  return null;
}

// No-Firecrawl honest fallback: hand the user click-ready Reddit searches so
// the tool is still genuinely useful before the env key is wired.
function manualMode(service) {
  const queries = buildQueries(service);
  const searchUrls = queries.map(q => {
    const inner = q.replace(/^site:reddit\.com\/?/, '').trim();
    return {
      label: inner.startsWith('r/forhire') ? 'r/forhire [Hiring] posts (past month)' : `Reddit (past month): ${inner.replace(/^\(|\)$/g, '').slice(0, 64)}`,
      // tbs=qdr:m must be its own URL param, NOT inside q, or Google treats it as literal text.
      url: `https://www.google.com/search?tbs=qdr:m&q=${encodeURIComponent(q)}`,
    };
  });
  return { mode: 'manual', service, searchUrls };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const service = clamp(req.body?.service);
  if (!service || service.length < 3) {
    return res.status(400).json({ error: 'Tell us the service you sell — e.g. "video editing" or "logo design".' });
  }

  const firecrawlKey = process.env.FIRECRAWL_API_KEY;

  // No Firecrawl key → honest manual mode (still useful, zero cost).
  if (!firecrawlKey) {
    return res.status(200).json({ ...manualMode(service), engine: 'manual' });
  }

  const pro = await isProCode(req.body?.proCode);
  const model = pro ? MODEL_PRO : MODEL;

  // Per-IP daily cap protects Firecrawl spend (Pro skips).
  const ip = getIp(req);
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `br-rl:${ip}:${day}`;
  let used = 0;
  if (!pro) {
    try { const rl = await readKV(rlKey); used = (rl && rl.count) || 0; } catch {}
    if (used >= FREE_DAILY_SEARCH_CAP) {
      return res.status(429).json({
        error: 'daily_limit',
        message: `You've used your ${FREE_DAILY_SEARCH_CAP} free buyer searches today. Go Pro for unlimited.`,
      });
    }
  }

  // 1) Fetch real Reddit results across query variants.
  const queries = buildQueries(service);
  const batches = await Promise.all(queries.map(q => firecrawlSearch(q, firecrawlKey)));
  const raw = dedupe(batches.flat()).slice(0, MAX_RAW);

  // Count the search against the cap regardless of result count (it cost credits).
  if (!pro) { try { await writeKV(rlKey, { count: used + 1 }); } catch {} }

  if (raw.length === 0) {
    return res.status(200).json({
      leads: [], engine: 'no-results', service,
      message: `No fresh Reddit posts found for "${service}" in the last month. Try a broader term (e.g. "video editing" instead of a sub-niche), or check back — new buyers post daily.`,
      remaining: pro ? null : Math.max(0, FREE_DAILY_SEARCH_CAP - used - 1),
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No Claude key → return raw matches with a generic reply skeleton (degraded
  // but honest: still real threads, just unfiltered + no tailored reply).
  if (!apiKey) {
    const leads = raw.slice(0, 10).map(r => ({
      url: r.url, subreddit: r.subreddit, title: r.title, snippet: r.snippet,
      intent: null,
      why: 'Matched your service in a recent Reddit post (enable AI to filter buyers vs sellers).',
      reply: `Hi — saw your post about ${service}. I do exactly this. [Add one specific line about their need + your portfolio link.] Happy to share a couple relevant samples — want me to?`,
    }));
    return res.status(200).json({ leads, engine: 'raw', service, remaining: pro ? null : Math.max(0, FREE_DAILY_SEARCH_CAP - used - 1) });
  }

  // 2) Claude classifies buyers, scores intent, drafts replies.
  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 2200,
        system: buildSystemPrompt(service),
        messages: [{ role: 'user', content: buildUserPrompt(raw) }],
      }),
    });

    if (!resp.ok) {
      const leads = raw.slice(0, 8).map(r => ({ url: r.url, subreddit: r.subreddit, title: r.title, snippet: r.snippet, intent: null, why: 'Recent match (AI filter unavailable).', reply: `Hi — saw your post about ${service}. I do exactly this. [Add a specific line + portfolio link.] Want a couple relevant samples?` }));
      return res.status(200).json({ leads, engine: 'raw-fallback', service, remaining: pro ? null : Math.max(0, FREE_DAILY_SEARCH_CAP - used - 1) });
    }

    const data = await resp.json();
    const text = data?.content?.[0]?.type === 'text' ? data.content[0].text : '';
    const parsed = safeParseJson(text);

    // Map Claude's verdicts back onto the raw rows (so we keep title/subreddit/snippet).
    const byUrl = new Map(raw.map(r => [r.url.split('?')[0].replace(/\/$/, ''), r]));
    let leads = [];
    if (parsed && Array.isArray(parsed.leads)) {
      leads = parsed.leads
        .map(l => {
          const key = String(l.url || '').split('?')[0].replace(/\/$/, '');
          const src = byUrl.get(key);
          if (!src) return null;
          return {
            url: src.url,
            subreddit: src.subreddit,
            title: src.title,
            snippet: src.snippet,
            intent: Math.max(0, Math.min(100, parseInt(l.intent, 10) || 0)),
            why: String(l.why || '').slice(0, 240),
            reply: String(l.reply || '').slice(0, 800),
          };
        })
        .filter(Boolean)
        .filter(l => l.intent >= 50) // belt-and-suspenders: drop weak/ambiguous leads the prompt should already exclude
        .sort((a, b) => b.intent - a.intent);
    }

    return res.status(200).json({
      leads,
      engine: pro ? 'ai-pro' : 'ai',
      pro,
      service,
      scanned: raw.length,
      remaining: pro ? null : Math.max(0, FREE_DAILY_SEARCH_CAP - used - 1),
    });
  } catch (err) {
    console.error('[buyer-radar] LLM error (non-fatal):', err.message);
    const leads = raw.slice(0, 8).map(r => ({ url: r.url, subreddit: r.subreddit, title: r.title, snippet: r.snippet, intent: null, why: 'Recent match (AI filter errored).', reply: `Hi — saw your post about ${service}. I do exactly this. [Add a specific line + portfolio link.] Want a couple samples?` }));
    return res.status(200).json({ leads, engine: 'raw-error', service, remaining: pro ? null : Math.max(0, FREE_DAILY_SEARCH_CAP - used - 1) });
  }
}
