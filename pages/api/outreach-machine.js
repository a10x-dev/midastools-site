// The Outreach Machine — MidasTools' first REAL AI money-tool.
// Generates a personalized cold email + LinkedIn DM + 3-touch follow-up
// sequence designed to book calls. This is the money outcome: clients.
//
// Design goal: works TODAY with zero dependency (strong framework fallback),
// and auto-upgrades to genuine Claude personalization the moment an
// ANTHROPIC_API_KEY env var exists on Vercel. The API key is the only piece
// of infra that can't be self-provisioned (it's metered spend on the owner's
// Anthropic account). Everything else ships now.
//
// Cost control: when the real LLM is used, we rate-limit per IP per day via KV
// so a free, anonymous tool can never bleed money. Template mode is free to run
// and unmetered.

import { readKV, writeKV } from '../../lib/kv-store';

// Haiku 4.5 — cheap + fast + plenty good for the free tier.
// Pro Pass holders get Sonnet 4.6 for the highest-stakes generations.
const MODEL = 'claude-haiku-4-5-20251001';
const MODEL_PRO = 'claude-sonnet-4-6';
const FREE_DAILY_LLM_CAP = 8; // per IP per day, only enforced for non-Pro users
const MAX_LEN = 1200; // clamp user inputs

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

function clamp(s, n = MAX_LEN) {
  return String(s || '').trim().slice(0, n);
}

const TONE_LABEL = {
  direct: 'direct and confident, no fluff',
  warm: 'warm, human, and genuinely curious',
  bold: 'bold and pattern-interrupting, slightly irreverent',
  professional: 'polished, credible, and professional',
};

function buildSystemPrompt() {
  return [
    'You are the best cold-outreach copywriter in the world. You write emails and DMs that get REPLIES, not just opens, because every line earns the next one.',
    'You write for solo operators, founders, freelancers, agencies and consultants who need to book sales calls.',
    'Hard rules:',
    '- NEVER open with "I hope this finds you well", "My name is", or "I wanted to reach out". Open with a specific, surprising, prospect-relevant observation.',
    '- Email body: 4–6 sentences MAX. Tight. Every sentence pulls its weight.',
    '- End on a low-friction micro-commitment CTA (e.g. "Worth a look, or off base?"), never "let\'s hop on a 30-min call".',
    '- Use the prospect details to personalize concretely. If a detail is missing, insert a clearly-marked [BRACKET] placeholder the user can fill in 5 seconds — never invent fake facts.',
    '- Sound like a sharp human, not corporate marketing. No buzzwords, no "synergy", no emoji unless the tone calls for it.',
    'Return ONLY valid minified JSON (no markdown, no commentary) with this exact shape:',
    '{"subject":"string (email subject line, <55 chars, curiosity or specificity, no clickbait)","email":"string (the full email body, plain text, use \\n for line breaks)","dm":"string (a LinkedIn/X DM version, 2–4 sentences, even tighter than the email)","followups":[{"when":"string e.g. \'Day 3\'","message":"string, 2–3 sentences, a new angle, never \'just bumping this\'"}]}',
    'Always return exactly 3 followups, each with a genuinely different angle (e.g. social proof, a relevant resource, a graceful break-up).',
  ].join('\n');
}

function buildUserPrompt({ offer, prospect, channel, tone }) {
  return [
    `WHAT I SELL + THE OUTCOME I DELIVER:\n${offer}`,
    '',
    `WHO I'M REACHING OUT TO (name / role / company / anything I pasted from their site or LinkedIn):\n${prospect || '(no specific prospect given — write a strong template with [BRACKET] placeholders for personalization)'}`,
    '',
    `PRIMARY CHANNEL: ${channel === 'linkedin' ? 'LinkedIn DM (lead with the DM, still include an email version)' : channel === 'both' ? 'Both email and LinkedIn DM' : 'Cold email'}`,
    `TONE: ${TONE_LABEL[tone] || TONE_LABEL.direct}`,
    '',
    'Write the outreach now. Return JSON only.',
  ].join('\n');
}

function safeParseJson(text) {
  if (!text) return null;
  // strip code fences if the model wrapped them
  let t = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  try {
    return JSON.parse(t);
  } catch {
    // try to extract the first {...} block
    const m = t.match(/\{[\s\S]*\}/);
    if (m) {
      try { return JSON.parse(m[0]); } catch { return null; }
    }
    return null;
  }
}

// Strong framework fallback — used when there's no API key, or if the LLM
// errors. Not as personalized as the real model, but a genuinely usable,
// proven cold-outreach skeleton with clearly-marked placeholders.
function templateFallback({ offer, prospect, channel, tone }) {
  const hasProspect = prospect && prospect.trim().length > 2;
  const them = hasProspect ? prospect.trim().split('\n')[0].slice(0, 80) : '[their company]';
  const offerLine = offer.trim().replace(/\s+/g, ' ').slice(0, 220);

  const subjectByTone = {
    direct: `Quick idea for ${hasProspect ? them : '[their company]'}`,
    warm: `Loved what ${hasProspect ? them : '[their company]'} is doing`,
    bold: `${hasProspect ? them : '[their company]'} is leaving money on the table`,
    professional: `Re: growth at ${hasProspect ? them : '[their company]'}`,
  };

  const email =
`${tone === 'bold' ? `Most teams like ${them} lose deals they never even see — here's the one I noticed.` : `I was looking at ${them} and noticed [specific observation — paste a line from their site/LinkedIn here].`}

I help [your ideal customer] ${offerLine ? offerLine.replace(/^i (help|do|sell|offer)\s+/i, '') : '[the outcome you deliver]'}.

For ${them}, that likely means [the one concrete result they'd care about most].

No pitch deck, no long call — if it's relevant I'll send a 2-minute example built for ${them} specifically.

Worth a look, or off base?`;

  const dm =
`Hi [first name] — noticed [specific thing about ${them}]. I help [ideal customer] ${offerLine ? offerLine.slice(0, 120) : '[the outcome]'}. Happy to send a quick example tailored to ${them} — want me to?`;

  const followups = [
    {
      when: 'Day 3',
      message: `Following up with something useful instead of a nudge: [share a relevant result, mini case study, or one specific idea for ${them}]. Even if the timing's off, this should be worth the 30 seconds.`,
    },
    {
      when: 'Day 7',
      message: `Last one from me — I put together a quick example of what this could look like for ${them}: [link or 2 bullet points]. If it's interesting, reply and I'll walk you through it. If not, no hard feelings.`,
    },
    {
      when: 'Day 12 (break-up)',
      message: `I'll close the loop on my end — assuming this isn't a priority right now. If that changes, just reply "later" and I'll reach back out next quarter. Either way, rooting for ${them}.`,
    },
  ];

  return { subject: subjectByTone[tone] || subjectByTone.direct, email, dm, followups };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const offer = clamp(req.body?.offer);
  const prospect = clamp(req.body?.prospect);
  const channel = ['email', 'linkedin', 'both'].includes(req.body?.channel) ? req.body.channel : 'email';
  const tone = TONE_LABEL[req.body?.tone] ? req.body.tone : 'direct';

  if (!offer || offer.length < 5) {
    return res.status(400).json({ error: 'Tell us what you sell — even one sentence is enough.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No key → free framework engine, zero cost, no metering.
  if (!apiKey) {
    return res.status(200).json({ result: templateFallback({ offer, prospect, channel, tone }), engine: 'framework' });
  }

  const pro = await isProCode(req.body?.proCode);
  const model = pro ? MODEL_PRO : MODEL;

  // Metered LLM path: protect spend with a per-IP daily cap (Pro skips it).
  const ip = getIp(req);
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `om-rl:${ip}:${day}`;
  let used = 0;
  if (!pro) {
    try {
      const rl = await readKV(rlKey);
      used = (rl && rl.count) || 0;
    } catch { /* if KV read fails, fail open but still try LLM */ }

    if (used >= FREE_DAILY_LLM_CAP) {
      return res.status(429).json({
        error: 'daily_limit',
        message: `You've used your ${FREE_DAILY_LLM_CAP} free AI generations today. Go Pro for unlimited.`,
      });
    }
  }

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
        max_tokens: 1800,
        system: buildSystemPrompt(),
        messages: [{ role: 'user', content: buildUserPrompt({ offer, prospect, channel, tone }) }],
      }),
    });

    if (!resp.ok) {
      // Never block the user — fall back to the framework engine.
      return res.status(200).json({ result: templateFallback({ offer, prospect, channel, tone }), engine: 'framework-fallback' });
    }

    const data = await resp.json();
    const text = data?.content?.[0]?.type === 'text' ? data.content[0].text : '';
    const parsed = safeParseJson(text);

    if (!parsed || !parsed.email) {
      return res.status(200).json({ result: templateFallback({ offer, prospect, channel, tone }), engine: 'framework-fallback' });
    }

    // Normalize shape
    const result = {
      subject: String(parsed.subject || '').slice(0, 120),
      email: String(parsed.email || ''),
      dm: String(parsed.dm || ''),
      followups: Array.isArray(parsed.followups)
        ? parsed.followups.slice(0, 3).map(f => ({ when: String(f.when || '').slice(0, 40), message: String(f.message || '') }))
        : [],
    };

    // Increment the daily counter for free users (fire-and-forget safe).
    if (!pro) { try { await writeKV(rlKey, { count: used + 1 }); } catch { /* non-fatal */ } }

    return res.status(200).json({
      result,
      engine: pro ? 'ai-pro' : 'ai',
      pro,
      remaining: pro ? null : Math.max(0, FREE_DAILY_LLM_CAP - used - 1),
    });
  } catch (err) {
    console.error('[outreach-machine] LLM error (non-fatal):', err.message);
    return res.status(200).json({ result: templateFallback({ offer, prospect, channel, tone }), engine: 'framework-error' });
  }
}
