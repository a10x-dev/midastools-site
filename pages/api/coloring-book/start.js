// Coloring Book Machine — create a job and hand back a Stripe checkout URL.
//
// Flow: the visitor configures a book (theme/style/pages/trim/title), we expand
// the theme into N distinct page subjects (cheap Gemini text, fails open), store
// the job in KV keyed by an unguessable token with paid=false, and return a
// Stripe Payment Link carrying ?client_reference_id=<token>. The webhook flips
// paid=true on that token; the page then orchestrates per-page generation and
// assembles the PDF in the browser. Spend per sale is bounded by pages_allowed.

import crypto from 'crypto';
import { writeKV } from '../../../lib/kv-store';
import { geminiPageSubjects } from '../../../lib/gemini';

export const config = { maxDuration: 60 };

const PLINK_URL = 'https://buy.stripe.com/eVq7sK2BV9v34Cw0pscMM0E'; // $9.99 Coloring Book Machine
const MIN_PAGES = 10;
const MAX_PAGES = 30;
const ALLOWED_STYLES = ['bold-easy', 'kids', 'detailed', 'mandala'];
const ALLOWED_TRIMS = ['8.5x11', '8.5x8.5'];

const AUDIENCE = {
  'bold-easy': 'beginners, young kids and seniors who want bold, simple, low-stress designs',
  kids: 'children aged 4-10 who want fun, playful, friendly scenes',
  detailed: 'adults who want intricate, detailed, relaxing designs',
  mandala: 'adults who want symmetrical mandala and pattern designs',
};

const clamp = (s, n) => String(s || '').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const theme = clamp(req.body?.theme, 120);
  const title = clamp(req.body?.title, 120) || (theme ? `${theme} Coloring Book` : 'Coloring Book');
  const subtitle = clamp(req.body?.subtitle, 120);
  const style = ALLOWED_STYLES.includes(req.body?.style) ? req.body.style : 'bold-easy';
  const trim = ALLOWED_TRIMS.includes(req.body?.trim) ? req.body.trim : '8.5x11';
  let pageCount = parseInt(req.body?.pageCount, 10);
  if (!Number.isFinite(pageCount)) pageCount = 20;
  pageCount = Math.max(MIN_PAGES, Math.min(MAX_PAGES, pageCount));

  if (!theme || theme.length < 3) {
    return res.status(400).json({ error: 'Describe your coloring book theme (e.g. "cute baby dinosaurs for toddlers").' });
  }

  // Expand the theme into distinct page subjects (fails open → page route rotates generic variations).
  let subjects = null;
  try {
    subjects = await geminiPageSubjects(theme, pageCount, AUDIENCE[style]);
  } catch { subjects = null; }

  const token = 'cbk_' + crypto.randomBytes(14).toString('hex');
  const job = {
    paid: false,
    theme, title, subtitle, style, trim, pageCount,
    subjects: subjects || null,            // null → page route falls back to rotation
    pages_allowed: Math.ceil(pageCount * 1.25) + 1, // buffer absorbs one retry/regeneration
    pages_used: 0,
    cover_used: 0,
    created: new Date().toISOString(),
  };

  try {
    const w = await writeKV(`cbook:${token}`, job, 48 * 3600); // jobs expire in 48h
    if (!w || !w.success) throw new Error('kv write failed');
  } catch (e) {
    console.error('[coloring-book/start] kv error:', e.message);
    return res.status(503).json({ error: 'Could not start your book right now — please try again in a moment.' });
  }

  return res.status(200).json({
    token,
    pageCount,
    checkoutUrl: `${PLINK_URL}?client_reference_id=${token}`,
    subjectsReady: !!subjects,
  });
}
