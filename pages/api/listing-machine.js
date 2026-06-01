// The Listing Machine — MidasTools' money-tool for people who SELL online.
// Paste a product (an AI-art print, a digital download, a handmade item, a
// dropship SKU) and get a ready-to-publish, SEO-optimized listing: a
// scroll-stopping title, platform-correct tags/keywords, a benefit-driven
// description, scannable bullets, and a price-positioning tip.
//
// Why this tool: our real, growing audience (~10 homepage signups/day) is
// art-sellers, Etsy/print-on-demand/Gumroad/Shopify sellers, and side-hustlers
// — people who already make things and need them to SELL. A listing that ranks
// and converts is the money outcome for them. Same engine + Pro Pass as the
// Outreach Machine; different ICP, the one we actually convert.
//
// Same spend discipline as the Outreach Machine: strong free framework fallback,
// auto-upgrades to real Claude when ANTHROPIC_API_KEY exists, per-IP daily cap
// so a free anonymous tool can never bleed money.

import { readKV, writeKV } from '../../lib/kv-store';

const MODEL = 'claude-haiku-4-5-20251001';   // free tier — cheap, fast, plenty good
const MODEL_PRO = 'claude-sonnet-4-6';       // Pro Pass — best model
const FREE_DAILY_LLM_CAP = 8;                 // per IP per day, non-Pro only
const MAX_LEN = 1200;

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

const PLATFORM_LABEL = {
  etsy: 'Etsy (title ≤140 chars front-loaded with the top search phrase; tags MUST be exactly 13 multi-word phrases ≤20 chars each; buyers search by occasion, style, recipient, material)',
  shopify: 'Shopify store product page (clear benefit-led title; tags are storefront collection/keyword terms; description can be richer, brand-voiced)',
  amazon: 'Amazon (title with brand + key features + size; tags are backend search keywords; bullets are the 5 key product-feature bullets buyers scan)',
  gumroad: 'Gumroad / digital products (outcome-led title; tags are discovery keywords; description sells the transformation + what they get instantly)',
  ebay: 'eBay (title packed with the exact keywords buyers type, ≤80 chars; tags are item-specifics keywords; concise factual description)',
};

const VIBE_LABEL = {
  cozy: 'warm, cozy, inviting — emotional and lifestyle-driven',
  premium: 'premium, elevated, minimal — confident and aspirational',
  playful: 'fun, playful, bold — energetic with personality',
  clean: 'clear, professional, trustworthy — straightforward and credible',
};

function buildSystemPrompt() {
  return [
    'You are the best e-commerce listing copywriter and marketplace-SEO strategist in the world. You write product listings that RANK in marketplace search AND convert browsers into buyers.',
    'You write for solo sellers: Etsy shops, print-on-demand and AI-art sellers, digital-download creators, dropshippers, handmade makers, and side-hustlers.',
    'Hard rules:',
    '- The TITLE must front-load the single highest-intent search phrase a real buyer would type, then stack secondary keywords naturally. Respect the platform format. No keyword-stuffing gibberish.',
    '- TAGS/keywords must be real search phrases buyers use (style + use-case + recipient + occasion + material), not generic single words. Match the platform count + length rules exactly.',
    '- The DESCRIPTION leads with the buyer outcome/feeling, then specifics (what they get, sizes/formats, how it ships or downloads), and ends with a soft nudge to buy. Skim-friendly, short paragraphs.',
    '- BULLETS are 5 scannable benefit/feature lines a buyer can read in 3 seconds.',
    '- If a real detail is missing, insert a clearly-marked [BRACKET] placeholder the seller fills in 5 seconds — NEVER invent fake facts, fake reviews, fake dimensions, or fake materials.',
    '- Sound like a sharp human seller, not corporate marketing. No fluff, no "elevate your space" clichés unless genuinely apt.',
    'Return ONLY valid minified JSON (no markdown, no commentary) with this exact shape:',
    '{"title":"string (the listing title, platform-correct length)","tags":["string", "... real multi-word search phrases; exactly 13 for Etsy, 8-13 otherwise"],"description":"string (full description, plain text, use \\n for line breaks)","bullets":["string","... exactly 5 scannable benefit bullets"],"pricetip":"string (one or two sentences of concrete price-positioning advice for this specific product + platform)"}',
  ].join('\n');
}

function buildUserPrompt({ product, audience, platform, vibe }) {
  return [
    `THE PRODUCT I'M SELLING (be specific — what it is, format/size, what makes it good):\n${product}`,
    '',
    `WHO BUYS IT + KEYWORDS I WANT TO RANK FOR (optional):\n${audience || '(none given — infer the most likely buyer and the search phrases they would actually type)'}`,
    '',
    `MARKETPLACE / PLATFORM: ${PLATFORM_LABEL[platform] || PLATFORM_LABEL.etsy}`,
    `BRAND VIBE: ${VIBE_LABEL[vibe] || VIBE_LABEL.clean}`,
    '',
    'Write the complete, ready-to-publish listing now. Return JSON only.',
  ].join('\n');
}

function safeParseJson(text) {
  if (!text) return null;
  let t = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  try {
    return JSON.parse(t);
  } catch {
    const m = t.match(/\{[\s\S]*\}/);
    if (m) { try { return JSON.parse(m[0]); } catch { return null; } }
    return null;
  }
}

// Strong free framework fallback — used when there's no API key, or the LLM errors.
function templateFallback({ product, audience, platform, vibe }) {
  const p = product.trim().replace(/\s+/g, ' ');
  const short = p.slice(0, 70);
  const isEtsy = platform === 'etsy';

  const title = isEtsy
    ? `${short} | [Top Keyword Buyers Search] | [Style] [Recipient] Gift`
    : `${short} — [Key Benefit] for [Ideal Buyer]`;

  const baseTags = [
    '[main search phrase]', '[style] [product type]', '[occasion] gift',
    'gift for [recipient]', '[material or format]', '[color or theme]',
    '[use case]', '[room or setting]', 'personalized [product]',
    '[aesthetic] decor', 'instant download', 'unique [product] gift',
    '[niche] lover gift',
  ];
  const tags = isEtsy ? baseTags.slice(0, 13) : baseTags.slice(0, 10);

  const description =
`[Open with the feeling/outcome the buyer wants — what this ${short.toLowerCase()} does for them.]

WHAT YOU GET:
• [Exactly what's included — files/sizes/quantity]
• [Format or materials]
• [Delivery: instant download / ships in X days]

WHY YOU'LL LOVE IT:
• [Benefit 1 — the main reason to buy]
• [Benefit 2 — what makes yours different]

Perfect for [use case / recipient / occasion]. [Soft nudge: "Add to cart and [outcome] today."]`;

  const bullets = [
    `[Headline benefit — the #1 reason a buyer clicks Buy]`,
    `[What's included — be specific: files, sizes, quantity]`,
    `[What makes it different from other ${short.toLowerCase()} listings]`,
    `[Who it's perfect for / best occasion or use]`,
    `[Delivery + guarantee — instant download or ship time, easy returns]`,
  ];

  const pricetip = isEtsy
    ? `Check the top 5 Etsy results for your main keyword. Price within ~10–15% of them; if yours is higher, the title + first photo must justify it in 2 seconds. Digital downloads convert well at a low entry price that you raise after your first ~20 reviews.`
    : `Anchor against the closest competitor for "${short}". Lead with the value, not the discount — a slightly higher price with a stronger listing usually outsells a race to the bottom.`;

  return { title, tags, description, bullets, pricetip };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const product = clamp(req.body?.product);
  const audience = clamp(req.body?.audience);
  const platform = PLATFORM_LABEL[req.body?.platform] ? req.body.platform : 'etsy';
  const vibe = VIBE_LABEL[req.body?.vibe] ? req.body.vibe : 'clean';

  if (!product || product.length < 5) {
    return res.status(400).json({ error: 'Tell us what you sell — even one line is enough.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ result: templateFallback({ product, audience, platform, vibe }), engine: 'framework' });
  }

  const pro = await isProCode(req.body?.proCode);
  const model = pro ? MODEL_PRO : MODEL;

  const ip = getIp(req);
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `lm-rl:${ip}:${day}`;
  let used = 0;
  if (!pro) {
    try {
      const rl = await readKV(rlKey);
      used = (rl && rl.count) || 0;
    } catch { /* fail open */ }

    if (used >= FREE_DAILY_LLM_CAP) {
      return res.status(429).json({
        error: 'daily_limit',
        message: `You've used your ${FREE_DAILY_LLM_CAP} free AI listings today. Go Pro for unlimited.`,
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
        messages: [{ role: 'user', content: buildUserPrompt({ product, audience, platform, vibe }) }],
      }),
    });

    if (!resp.ok) {
      return res.status(200).json({ result: templateFallback({ product, audience, platform, vibe }), engine: 'framework-fallback' });
    }

    const data = await resp.json();
    const text = data?.content?.[0]?.type === 'text' ? data.content[0].text : '';
    const parsed = safeParseJson(text);

    if (!parsed || !parsed.title) {
      return res.status(200).json({ result: templateFallback({ product, audience, platform, vibe }), engine: 'framework-fallback' });
    }

    const result = {
      title: String(parsed.title || '').slice(0, 200),
      tags: Array.isArray(parsed.tags) ? parsed.tags.slice(0, 13).map(t => String(t || '').slice(0, 40)).filter(Boolean) : [],
      description: String(parsed.description || ''),
      bullets: Array.isArray(parsed.bullets) ? parsed.bullets.slice(0, 6).map(b => String(b || '')).filter(Boolean) : [],
      pricetip: String(parsed.pricetip || '').slice(0, 600),
    };

    if (!pro) { try { await writeKV(rlKey, { count: used + 1 }); } catch { /* non-fatal */ } }

    return res.status(200).json({
      result,
      engine: pro ? 'ai-pro' : 'ai',
      pro,
      remaining: pro ? null : Math.max(0, FREE_DAILY_LLM_CAP - used - 1),
    });
  } catch (err) {
    console.error('[listing-machine] LLM error (non-fatal):', err.message);
    return res.status(200).json({ result: templateFallback({ product, audience, platform, vibe }), engine: 'framework-error' });
  }
}
