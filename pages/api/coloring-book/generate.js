// Coloring Book Machine — the generation workhorse. Three modes:
//   preview : free, IP-capped, ONE watermarked line-art sample (sell the quality)
//   page    : PAID (token), one print-res clean line-art page (300 DPI when placed)
//   cover   : PAID (token), one full-color cover with the title overlaid
//
// Spend discipline: preview is IP + global-free capped; paid generation is bounded
// per sale by the token's pages_allowed (set at /start) and backstopped by a high
// global-paid cap. Each individual request is ONE generation (~9s) so it never
// approaches the function timeout — the page orchestrates the loop client-side.

import Jimp from 'jimp';
import { readKV, writeKV } from '../../../lib/kv-store';
import { geminiImage } from '../../../lib/gemini';

export const config = { maxDuration: 60 };

const PREVIEW_PER_IP = 3;        // free samples per IP/day
const GLOBAL_FREE_CAP = 200;     // ≈ $8/day ceiling on free previews
const GLOBAL_PAID_CAP = 2000;    // runaway backstop on paid gens (≈70 books/day)
const COVER_CAP = 2;             // covers per paid job

const LINE = 'Black and white line art coloring book page. Clean bold black outlines on a pure white background. Absolutely no shading, no grayscale, no color, and no fill — only crisp outlines to color in. Centered full-page composition with even margins.';

const STYLE_WRAP = {
  'bold-easy': (s) => `A simple, bold-and-easy coloring page of ${s}. Thick clean outlines, large simple shapes, lots of open space, minimal fine detail — easy for young children, beginners and seniors. ${LINE}`,
  kids: (s) => `A fun, playful children's coloring page of ${s}. Friendly cartoon style, clear medium-weight outlines, cheerful and cute. ${LINE}`,
  detailed: (s) => `An intricate, detailed adult coloring page of ${s}. Fine elegant linework, rich decorative detail, beautiful and relaxing to color. ${LINE}`,
  mandala: (s) => `A symmetrical mandala-style coloring page inspired by ${s}. Ornate radial patterns, fine geometric and floral detail, perfectly balanced and centered. ${LINE}`,
};

// Generic per-page variation when theme expansion failed (fail-open from /start).
const VARIATIONS = [
  'playing happily', 'sleeping peacefully', 'in a simple natural scene', 'with a friendly smile',
  'surrounded by stars and clouds', 'with a balloon', 'among flowers', 'in a playful pose',
  'with a little decorative border', 'celebrating', 'exploring', 'resting under a tree',
];

const coverPrompt = (theme, style) =>
  `A vibrant, colorful, eye-catching COVER illustration for a coloring book about "${theme}". Cheerful, professional published-book cover art, full color, bright and inviting, ${
    style === 'detailed' || style === 'mandala' ? 'elegant and decorative for adults' : 'fun and friendly for children'
  }. Keep the upper third relatively clear for a title. Highly detailed and polished. Vertical book-cover composition.`;

const getIp = (req) => {
  const fwd = req.headers['x-forwarded-for'] || '';
  return (fwd.split(',')[0] || req.socket?.remoteAddress || 'unknown').trim();
};

const day = () => new Date().toISOString().slice(0, 10);

async function bumpGlobal(key, cap) {
  let used = 0;
  try { const g = await readKV(key); used = (g && g.count) || 0; }
  catch { return false; } // fail CLOSED — protect the bill
  if (used >= cap) return false;
  try { await writeKV(key, { count: used + 1 }); } catch { /* non-fatal */ }
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const mode = String(req.body?.mode || '').trim();

  // ---------- FREE PREVIEW ----------
  if (mode === 'preview') {
    const theme = String(req.body?.theme || '').trim().slice(0, 120);
    const style = STYLE_WRAP[req.body?.style] ? req.body.style : 'bold-easy';
    if (!theme || theme.length < 3) return res.status(400).json({ error: 'Describe your theme first.' });

    const ip = getIp(req);
    const ipKey = `cbk-prev:${ip}:${day()}`;
    let ipUsed = 0;
    try { const r = await readKV(ipKey); ipUsed = (r && r.count) || 0; } catch { /* fail open */ }
    if (ipUsed >= PREVIEW_PER_IP) {
      return res.status(429).json({ error: 'preview_limit', message: `You've used your ${PREVIEW_PER_IP} free previews today. Make your full book to keep going.` });
    }
    if (!(await bumpGlobal(`cbk-gfree:${day()}`, GLOBAL_FREE_CAP))) {
      return res.status(503).json({ error: 'busy', message: 'Previews are at capacity for today — try again tomorrow, or make your full book now.' });
    }

    let img;
    try { img = await geminiImage(STYLE_WRAP[style](theme)); }
    catch (e) {
      if (e.code === 'not_configured') return res.status(200).json({ error: 'not_configured', message: 'The Coloring Book Machine is warming up — check back shortly.' });
      console.error('[cbook/preview]', e.code, e.detail || e.message);
      return res.status(502).json({ error: 'gen_failed', message: 'The engine hiccuped — try once more.' });
    }
    if (!img) return res.status(200).json({ error: 'no_image', message: "Couldn't draw that one — try rephrasing your theme." });

    try { await writeKV(ipKey, { count: ipUsed + 1 }); } catch { /* non-fatal */ }

    try {
      const base = await Jimp.read(Buffer.from(img.b64, 'base64'));
      // Core processing: clean to B&W + downscale. The low res (≈82 DPI at print
      // size) is itself the anti-theft — a single 700px sample can't print a book.
      base.greyscale().contrast(0.7).resize(700, 700);
      // Fontless "sample" marker bar (loadFont is unreliable in serverless trace).
      try { base.composite(new Jimp(700, 52, 0xea580ccc), 0, 700 - 52); } catch { /* mark optional */ }
      const out = await base.quality(80).getBufferAsync(Jimp.MIME_JPEG);
      return res.status(200).json({ image: `data:image/jpeg;base64,${out.toString('base64')}`, remaining: Math.max(0, PREVIEW_PER_IP - ipUsed - 1) });
    } catch (e) {
      console.error('[cbook/preview] jimp', e.message);
      return res.status(200).json({ image: `data:${img.mime};base64,${img.b64}`, remaining: Math.max(0, PREVIEW_PER_IP - ipUsed - 1) });
    }
  }

  // ---------- PAID page / cover ----------
  const token = String(req.body?.token || '').trim();
  if (!/^cbk_[a-f0-9]{28}$/.test(token)) return res.status(400).json({ error: 'bad token' });

  let job;
  try { job = await readKV(`cbook:${token}`); } catch { job = null; }
  if (!job) return res.status(404).json({ error: 'not_found', message: 'This book session expired. Start a new one.' });
  if (!job.paid) return res.status(402).json({ error: 'unpaid', message: 'Complete your purchase to generate the full book.' });

  if (!(await bumpGlobal(`cbk-gpaid:${day()}`, GLOBAL_PAID_CAP))) {
    return res.status(503).json({ error: 'busy', message: 'The machine is briefly at capacity — your page will retry automatically.' });
  }

  // ----- COVER -----
  if (mode === 'cover') {
    if ((job.cover_used || 0) >= COVER_CAP) return res.status(429).json({ error: 'cover_limit' });
    let img;
    try { img = await geminiImage(coverPrompt(job.theme, job.style)); }
    catch (e) { console.error('[cbook/cover]', e.code, e.detail || e.message); return res.status(502).json({ error: 'gen_failed', message: 'Cover engine hiccuped — retry.' }); }
    if (!img) return res.status(200).json({ error: 'no_image', message: 'Cover failed — retry.' });

    job.cover_used = (job.cover_used || 0) + 1;
    try { await writeKV(`cbook:${token}`, job, 48 * 3600); } catch { /* non-fatal */ }

    try {
      const cover = await Jimp.read(Buffer.from(img.b64, 'base64'));
      cover.cover(2125, 2750); // 8.5x11 ratio, ~250 DPI, full-bleed crop
      // Title overlay is best-effort: bundled fonts don't always load in the
      // serverless trace. If they fail, deliver clean cover art — the buyer adds
      // the title in KDP Cover Creator anyway (which is the recommended flow).
      try {
        const band = new Jimp(2125, 520, 0x00000099);
        const tFont = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
        band.print(tFont, 80, 60, { text: (job.title || 'Coloring Book').toUpperCase(), alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 2125 - 160, 300);
        if (job.subtitle) {
          const sFont = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          band.print(sFont, 80, 380, { text: job.subtitle, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 2125 - 160, 120);
        }
        cover.composite(band, 0, 90);
      } catch (fe) { console.warn('[cbook/cover] title overlay skipped:', fe.message); }
      const out = await cover.quality(90).getBufferAsync(Jimp.MIME_JPEG);
      return res.status(200).json({ image: `data:image/jpeg;base64,${out.toString('base64')}` });
    } catch (e) {
      console.error('[cbook/cover] jimp', e.message);
      return res.status(200).json({ image: `data:${img.mime};base64,${img.b64}` });
    }
  }

  // ----- INTERIOR PAGE -----
  const index = parseInt(req.body?.index, 10);
  if (!Number.isFinite(index) || index < 0 || index >= job.pageCount) return res.status(400).json({ error: 'bad index' });
  if ((job.pages_used || 0) >= (job.pages_allowed || 0)) {
    return res.status(429).json({ error: 'page_limit', message: 'This book has reached its page limit.' });
  }

  const subject = (Array.isArray(job.subjects) && job.subjects[index])
    ? job.subjects[index]
    : `${job.theme}, ${VARIATIONS[index % VARIATIONS.length]}`;

  let img;
  try { img = await geminiImage(STYLE_WRAP[job.style](subject)); }
  catch (e) { console.error('[cbook/page]', e.code, e.detail || e.message); return res.status(502).json({ error: 'gen_failed', message: 'Page hiccuped — it will retry.' }); }
  if (!img) return res.status(200).json({ error: 'no_image', message: 'That page failed — retrying with a fresh draw usually works.' });

  job.pages_used = (job.pages_used || 0) + 1;
  try { await writeKV(`cbook:${token}`, job, 48 * 3600); } catch { /* non-fatal */ }

  try {
    const page = await Jimp.read(Buffer.from(img.b64, 'base64'));
    page.greyscale().contrast(0.72).resize(2048, 2048); // ~300 DPI at 6.8" placement
    const out = await page.quality(92).getBufferAsync(Jimp.MIME_JPEG);
    return res.status(200).json({ image: `data:image/jpeg;base64,${out.toString('base64')}`, index });
  } catch (e) {
    console.error('[cbook/page] jimp', e.message);
    return res.status(200).json({ image: `data:${img.mime};base64,${img.b64}`, index });
  }
}
