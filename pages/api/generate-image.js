// The Art Machine — MidasTools' first IMAGE-output money-tool.
//
// Why this exists: our biggest audience is art-seekers (Ghibli / pet portraits /
// action figures). Every existing "art generator" on the site outputs a TEXT
// PROMPT and sends the user to ChatGPT/Midjourney to make the actual image —
// we capture $0 of the value at peak intent. This route closes that loop: it
// generates the actual image in-product (the Lensa model), so we own the result
// the visitor came for.
//
// Spend discipline (the load-bearing safety): real image gen costs ~$0.039/gen
// (gemini-2.5-flash-image, smoke-tested). So we run a HARD per-IP daily cap AND
// a HARD global daily cap so a viral/bot spike can never run the Gemini bill
// away. Mirrors the om-rl:/lm-rl: KV rate-limit pattern from the other tools.
//
// Activation gate (deliberate): reads GEMINI_API_KEY from env first. That env
// var is NOT in Vercel prod yet — so this route ships INERT in production until
// the key is added (one action). Until then it returns { error:'not_configured' }
// and the page shows an early-access waitlist. Local dev falls back to the
// on-disk .founder/.gemini_key so it can be tested before the env var is set.

import fs from 'fs';
import { readKV, writeKV } from '../../lib/kv-store';

export const config = { maxDuration: 60 };

const MODEL = 'gemini-2.5-flash-image'; // smoke-tested: 6.6s, 1024x1024, ~$0.039/gen
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const FREE_PER_IP_CAP = 4;      // images per IP per day (anonymous) — gates spend per visitor
const GLOBAL_DAILY_CAP = 120;   // hard ceiling across ALL users/day ≈ $4.80/day max — kills runaway/bot spend
const MAX_SUBJECT = 600;

// Style presets wrap the user's plain-English subject into a full art prompt.
// Each ends square-composition for the 1024x1024 output shape.
const STYLES = {
  ghibli: {
    label: 'Studio Ghibli',
    wrap: (s) => `A soft, hand-painted Studio Ghibli style illustration of ${s}. Warm cinematic light, gentle watercolor textures, lush detail, cozy and whimsical anime film-still aesthetic. Square composition. Beautiful, highly detailed.`,
  },
  petportrait: {
    label: 'Pet Portrait',
    wrap: (s) => `A charming, professional pet portrait of ${s}. Painterly, warm studio lighting, rich detail in the fur, expressive eyes, tasteful softly-blurred background. Gallery-quality, adorable and flattering. Square composition. Highly detailed.`,
  },
  pixar: {
    label: '3D Animated',
    wrap: (s) => `A polished 3D animated character render of ${s}, modern Pixar/Dreamworks film style. Soft global illumination, big expressive features, vibrant colors, cinematic depth of field. Square composition. Highly detailed, charming.`,
  },
  watercolor: {
    label: 'Watercolor',
    wrap: (s) => `A delicate watercolor painting of ${s}. Loose expressive brushwork, soft color washes, paper texture, airy negative space, fine-art aesthetic. Square composition. Beautiful and detailed.`,
  },
  anime: {
    label: 'Anime',
    wrap: (s) => `A vibrant modern anime illustration of ${s}. Clean line art, cel shading, dynamic lighting, expressive eyes, detailed background, key-visual quality. Square composition. Highly detailed.`,
  },
  oil: {
    label: 'Oil Painting',
    wrap: (s) => `A rich classical oil painting of ${s}. Visible brushstrokes, deep dramatic lighting, warm museum-quality palette, fine detail and texture. Square composition. Masterful and detailed.`,
  },
  popart: {
    label: 'Pop Art',
    wrap: (s) => `A bold pop-art portrait of ${s}. Bright saturated colors, high contrast, graphic comic-style shading, halftone texture, Warhol-inspired energy. Square composition. Striking and detailed.`,
  },
  cyberpunk: {
    label: 'Cyberpunk',
    wrap: (s) => `A cinematic cyberpunk scene of ${s}. Neon-lit, moody atmosphere, rain-slicked reflections, futuristic detail, dramatic teal-and-magenta lighting. Square composition. Highly detailed, atmospheric.`,
  },
};

function getGeminiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  // Local-dev fallback only (.founder/ is gitignored, not deployed to Vercel).
  try {
    const k = fs.readFileSync('.founder/.gemini_key', 'utf8').trim();
    if (k) return k;
  } catch { /* not present in prod */ }
  return null;
}

function getIp(req) {
  const fwd = req.headers['x-forwarded-for'] || '';
  return (fwd.split(',')[0] || req.socket?.remoteAddress || 'unknown').trim();
}

function clamp(s, n = MAX_SUBJECT) {
  return String(s || '').trim().slice(0, n);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const subject = clamp(req.body?.subject);
  const styleId = STYLES[req.body?.style] ? req.body.style : 'ghibli';
  const style = STYLES[styleId];

  if (!subject || subject.length < 3) {
    return res.status(400).json({ error: 'Describe what you want — even a few words works (e.g. "my orange tabby cat on a windowsill").' });
  }

  const apiKey = getGeminiKey();
  if (!apiKey) {
    // Inert in prod until GEMINI_API_KEY is set in Vercel env. UI shows waitlist.
    return res.status(200).json({
      error: 'not_configured',
      message: 'The Art Machine is launching this week. Drop your email and you\'ll be first in.',
    });
  }

  const ip = getIp(req);
  const day = new Date().toISOString().slice(0, 10);
  const ipKey = `img-rl:${ip}:${day}`;
  const globalKey = `img-global:${day}`;

  // Per-IP cap
  let ipUsed = 0;
  try {
    const rl = await readKV(ipKey);
    ipUsed = (rl && rl.count) || 0;
  } catch { /* fail open on read */ }
  if (ipUsed >= FREE_PER_IP_CAP) {
    return res.status(429).json({
      error: 'daily_limit',
      message: `You've made your ${FREE_PER_IP_CAP} free images today. Come back tomorrow — or grab the HD pack when it drops.`,
    });
  }

  // Global cap — hard spend ceiling, fail CLOSED if KV unreadable (protect the bill)
  let globalUsed = 0;
  try {
    const g = await readKV(globalKey);
    globalUsed = (g && g.count) || 0;
  } catch {
    return res.status(503).json({ error: 'busy', message: 'The Art Machine is at capacity right now — try again in a bit.' });
  }
  if (globalUsed >= GLOBAL_DAILY_CAP) {
    return res.status(503).json({ error: 'busy', message: 'The Art Machine hit today\'s free limit (we\'re a tiny team). Try again tomorrow — or grab the HD pack.' });
  }

  const prompt = style.wrap(subject);

  try {
    const resp = await fetch(`${ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      signal: AbortSignal.timeout(55000),
    });

    if (!resp.ok) {
      const t = await resp.text().catch(() => '');
      console.error('[generate-image] gemini HTTP', resp.status, t.slice(0, 300));
      return res.status(502).json({ error: 'gen_failed', message: 'The art engine hiccuped. Try again — it usually works on the second go.' });
    }

    const data = await resp.json();
    let b64 = null, mime = 'image/png';
    for (const cand of data.candidates || []) {
      for (const part of cand.content?.parts || []) {
        if (part.inlineData?.data) {
          b64 = part.inlineData.data;
          mime = part.inlineData.mimeType || mime;
          break;
        }
      }
      if (b64) break;
    }

    if (!b64) {
      // Usually a safety block on the subject. Don't burn the user's cap for it.
      console.warn('[generate-image] no image in response (likely safety block)');
      return res.status(200).json({
        error: 'no_image',
        message: 'The engine couldn\'t make that one (sometimes it\'s the wording). Try rephrasing — describe the subject, setting, and mood.',
      });
    }

    // Success — now (and only now) increment both counters.
    try { await writeKV(ipKey, { count: ipUsed + 1 }); } catch { /* non-fatal */ }
    try { await writeKV(globalKey, { count: globalUsed + 1 }); } catch { /* non-fatal */ }

    return res.status(200).json({
      image: `data:${mime};base64,${b64}`,
      engine: 'gemini',
      style: styleId,
      remaining: Math.max(0, FREE_PER_IP_CAP - ipUsed - 1),
    });
  } catch (err) {
    console.error('[generate-image] error:', err.message);
    return res.status(502).json({ error: 'gen_failed', message: 'The art engine timed out. Try again — it\'s usually quick.' });
  }
}
