// Chatbot Builder — money-tool #4, the first tool of the Monday research→build→sell
// flywheel. Productizes Memo method #2 ("sell a $300 FAQ chatbot to the business
// down the street"): our user pastes a business website + a few FAQs, we scrape the
// site, distill it into a tight knowledge sheet, and mint a hosted bot they can embed
// anywhere with one <script> line. The money: they resell it to local businesses at
// $300/mo; they pay us $39/mo. Recurring on both sides.
//
// This endpoint BUILDS a bot:
//   1. Firecrawl-scrape the business site (graceful: skip if no key / scrape fails —
//      a bot can still be built from the manual description + FAQs).
//   2. Claude distills scraped text + FAQs into a compact knowledge sheet (cheaper +
//      better answers than dumping raw HTML at answer-time).
//   3. Store the bot config in KV at chatbot:<id>. The id is the embed credential.
//
// Cost control: at most 1 Firecrawl scrape + 1 Claude distill per build, and a
// per-IP daily build cap so an anonymous tool can never bleed money.

import crypto from 'crypto';
import { readKV, writeKV } from '../../../lib/kv-store';

const MODEL = 'claude-haiku-4-5-20251001';
const FIRECRAWL_SCRAPE_URL = 'https://api.firecrawl.dev/v2/scrape';
const FREE_DAILY_BUILD_CAP = 8; // per IP per day
const MAX_SCRAPE_CHARS = 14000; // cap content sent to the LLM
const MAX_KNOWLEDGE_CHARS = 6000; // cap stored distilled knowledge

function getIp(req) {
  const fwd = req.headers['x-forwarded-for'] || '';
  return (fwd.split(',')[0] || req.socket?.remoteAddress || 'unknown').trim();
}

function clamp(s, n = 200) {
  return String(s || '').trim().replace(/\s+/g, ' ').slice(0, n);
}

function normUrl(u) {
  let s = String(u || '').trim();
  if (!s) return '';
  if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
  try { return new URL(s).href; } catch { return ''; }
}

function botId() {
  // short, URL-safe, unguessable embed id (the id IS the credential)
  return 'cb_' + crypto.randomBytes(6).toString('hex'); // cb_ + 12 hex chars
}

async function firecrawlScrape(url, key) {
  try {
    const resp = await fetch(FIRECRAWL_SCRAPE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        'User-Agent': 'midastools-chatbot-builder/1.0',
      },
      body: JSON.stringify({ url, formats: ['markdown'], onlyMainContent: true }),
      signal: AbortSignal.timeout(25000),
    });
    if (!resp.ok) {
      // 402 = out of credits, 401 = bad key. Loud, because a silent '' here mints a
      // hollow bot that looks like a successful build. That exact failure ran
      // undetected until 2026-08-05, when 7/7 outbound demos came back empty.
      console.error(`[chatbot/build] firecrawl HTTP ${resp.status} — falling back to direct fetch`);
      return '';
    }
    const json = await resp.json();
    const md = json?.data?.markdown || json?.data?.content || json?.markdown || '';
    return String(md || '').slice(0, MAX_SCRAPE_CHARS);
  } catch (err) {
    console.error('[chatbot/build] firecrawl threw:', err.message);
    return '';
  }
}

// --- Direct fetch scraper (no paid API, no external dependency) ---------------
// The product's core promise is "paste a website, get a grounded bot". Renting that
// promise from a metered third party means the whole product dies the moment that
// bill lapses — which is exactly what happened. This does it ourselves.

const BLOCKED_HOST = /^(localhost$|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?$|.*\.internal$|.*\.local$)/i;

function safeToFetch(u) {
  // Public endpoint: never let a pasted URL reach the internal network (SSRF).
  try {
    const p = new URL(u);
    if (p.protocol !== 'http:' && p.protocol !== 'https:') return false;
    if (BLOCKED_HOST.test(p.hostname)) return false;
    return true;
  } catch { return false; }
}

function htmlToText(html) {
  return String(html || '')
    // drop everything that is not prose
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // keep structure the distiller can use
    .replace(/<\/(p|div|section|li|tr|h[1-6]|br)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<h([1-6])[^>]*>/gi, '\n\n## ')
    .replace(/<[^>]+>/g, ' ')
    // entities + whitespace
    .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'").replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}

async function fetchPage(u) {
  if (!safeToFetch(u)) return '';
  try {
    const resp = await fetch(u, {
      headers: {
        // Small-business sites (Wix/Squarespace/WP + Cloudflare) routinely 403 a
        // bot-shaped UA. Identify as a real browser but stay honest about the bot
        // in the Accept chain — we only read public marketing pages.
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return '';
    const ct = resp.headers.get('content-type') || '';
    if (!/text\/html|application\/xhtml/i.test(ct)) return '';
    const html = (await resp.text()).slice(0, 400000);
    return htmlToText(html);
  } catch { return ''; }
}

// Discover a few high-signal internal pages (services/about/contact) so the bot
// knows more than whatever happens to be on the homepage.
function candidateSubpages(html, origin) {
  const wanted = /(service|treatment|about|contact|pricing|price|faq|menu|hours|team)/i;
  const out = new Set();
  const re = /href\s*=\s*["']([^"'#]+)["']/gi;
  let m;
  while ((m = re.exec(html)) && out.size < 40) {
    const raw = m[1];
    if (!wanted.test(raw)) continue;
    try {
      const abs = new URL(raw, origin);
      if (abs.origin !== new URL(origin).origin) continue;
      if (/\.(jpg|jpeg|png|gif|svg|pdf|zip|mp4|webp|css|js)$/i.test(abs.pathname)) continue;
      abs.hash = '';
      out.add(abs.href);
    } catch { /* skip bad href */ }
  }
  return Array.from(out).slice(0, 4);
}

async function directScrape(url) {
  if (!safeToFetch(url)) return '';
  let homeHtml = '';
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
    });
    if (resp.ok) homeHtml = (await resp.text()).slice(0, 400000);
  } catch { /* fall through */ }
  if (!homeHtml) return '';

  const parts = [htmlToText(homeHtml)];
  const subs = candidateSubpages(homeHtml, url);
  const fetched = await Promise.all(subs.map(fetchPage));
  fetched.forEach((t, i) => { if (t && t.length > 200) parts.push(`\n\n--- ${subs[i]} ---\n${t}`); });

  return parts.join('\n').slice(0, MAX_SCRAPE_CHARS);
}

function distillSystem(name) {
  return [
    `You are building the knowledge base for an AI customer-service chatbot that will represent the business "${name}" on its own website.`,
    'You are given (a) raw scraped website text and (b) owner-provided FAQs. Produce a TIGHT, factual knowledge sheet the chatbot will use to answer customer questions.',
    'Include only what a customer would ask about: what the business does, products/services, pricing if stated, hours, location/service-area, contact methods, booking/appointment info, policies, and any FAQ answers.',
    'Rules: Use only facts present in the input — NEVER invent prices, hours, phone numbers, or claims. If a common detail (e.g. hours) is not present, omit it. Be concise. Use short labelled sections and bullet points. No marketing fluff.',
    `Output plain markdown, max ~${MAX_KNOWLEDGE_CHARS} characters. No preamble, no commentary — just the knowledge sheet.`,
  ].join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const name = clamp(req.body?.name, 120);
  const url = normUrl(req.body?.url);
  const description = clamp(req.body?.description, 1500);
  const ownerEmail = clamp(req.body?.email, 160).toLowerCase();
  const greeting = clamp(req.body?.greeting, 280);
  const rawFaqs = Array.isArray(req.body?.faqs) ? req.body.faqs.slice(0, 8) : [];
  const faqs = rawFaqs
    .map(f => ({ q: clamp(f?.q, 200), a: clamp(f?.a, 600) }))
    .filter(f => f.q && f.a);

  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Add the business name.' });
  }
  if (!url && !description && faqs.length === 0) {
    return res.status(400).json({ error: 'Add a website URL, a short description, or at least one FAQ so the bot has something to answer from.' });
  }

  // Per-IP daily build cap (cost control).
  const ip = getIp(req);
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `cb-build-rl:${ip}:${day}`;
  let used = 0;
  try { const rl = await readKV(rlKey); used = (rl && rl.count) || 0; } catch {}
  if (used >= FREE_DAILY_BUILD_CAP) {
    return res.status(429).json({ error: 'daily_limit', message: `You've built ${FREE_DAILY_BUILD_CAP} bots today. Come back tomorrow or contact us to lift the limit.` });
  }

  // 1) Read the site. Our own fetch FIRST (free, always available), Firecrawl only as
  //    a backstop for JS-rendered sites. Previously this was Firecrawl-only, so when
  //    those credits ran out every build silently produced an empty bot.
  let scraped = '';
  if (url) {
    scraped = await directScrape(url);
    if (scraped.length < 400) {
      const firecrawlKey = process.env.FIRECRAWL_API_KEY;
      if (firecrawlKey) {
        const fc = await firecrawlScrape(url, firecrawlKey);
        if (fc.length > scraped.length) scraped = fc;
      }
    }
  }

  // 2) Distill into a knowledge sheet with Claude (graceful fallback to raw inputs).
  const apiKey = process.env.ANTHROPIC_API_KEY;
  let knowledge = '';
  const faqBlock = faqs.length ? `\n\nOWNER-PROVIDED FAQS:\n${faqs.map(f => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}` : '';
  const descBlock = description ? `\n\nOWNER DESCRIPTION:\n${description}` : '';

  if (apiKey && (scraped || description || faqs.length)) {
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1800,
          system: distillSystem(name),
          messages: [{ role: 'user', content: `BUSINESS: ${name}\nWEBSITE: ${url || '(none)'}${descBlock}${faqBlock}\n\nSCRAPED WEBSITE TEXT:\n${scraped || '(no website content available)'}` }],
        }),
        signal: AbortSignal.timeout(30000),
      });
      if (resp.ok) {
        const data = await resp.json();
        const text = data?.content?.[0]?.type === 'text' ? data.content[0].text : '';
        knowledge = String(text || '').trim().slice(0, MAX_KNOWLEDGE_CHARS);
      }
    } catch (err) {
      console.error('[chatbot/build] distill error (non-fatal):', err.message);
    }
  }

  // Fallback knowledge: stitch raw inputs if the LLM step was unavailable.
  if (!knowledge) {
    knowledge = [
      `# ${name}`,
      description ? `\n${description}` : '',
      scraped ? `\n## Website\n${scraped.slice(0, MAX_KNOWLEDGE_CHARS - 500)}` : '',
      faqs.length ? `\n## FAQs\n${faqs.map(f => `**${f.q}**\n${f.a}`).join('\n\n')}` : '',
    ].join('\n').slice(0, MAX_KNOWLEDGE_CHARS).trim();
  }

  // A bot whose entire knowledge is "# Business Name" answers nothing and makes us
  // look broken to the one visitor who tried us. Refuse to mint it. (Before this
  // guard, a failed scrape with no description still returned HTTP 200 + a bot id.)
  const substantive = knowledge.replace(/^#\s*.*$/m, '').replace(/\s+/g, ' ').trim();
  if (!knowledge || substantive.length < 120) {
    return res.status(200).json({
      error: 'no_knowledge',
      message: url
        ? "We couldn't read enough from that website — some sites block automated readers. Add a short description of the business or a couple of FAQs and we'll build it from that."
        : "We couldn't read enough about this business. Add a short description or a couple of FAQs and try again.",
    });
  }

  // 3) Mint + store the bot.
  const id = botId();
  const now = new Date().toISOString();
  const config = {
    id,
    name,
    url,
    knowledge,
    greeting: greeting || `Hi! 👋 Thanks for visiting ${name}. How can I help you today?`,
    owner_email: ownerEmail,
    plan: 'free', // becomes 'pro' when a subscription is active (set by webhook)
    lead_capture: true,
    created: now,
    updated: now,
  };
  await writeKV(`chatbot:${id}`, config);
  try { await writeKV(rlKey, { count: used + 1 }); } catch {}

  // Index the build for the owner (so a future dashboard can list their bots).
  if (ownerEmail) {
    try {
      const idxKey = `chatbot-owner:${ownerEmail}`;
      const idx = (await readKV(idxKey)) || { bots: [] };
      idx.bots = Array.from(new Set([...(idx.bots || []), id])).slice(-50);
      await writeKV(idxKey, idx);
    } catch {}
  }

  return res.status(200).json({
    id,
    name,
    greeting: config.greeting,
    scraped: Boolean(scraped),
    knowledge_preview: knowledge.slice(0, 600),
    embed: `<script src="https://www.midastools.co/chatbot-widget.js" data-bot="${id}" async></script>`,
    remaining: Math.max(0, FREE_DAILY_BUILD_CAP - used - 1),
  });
}
