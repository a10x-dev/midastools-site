// HD art release endpoint — the paid side of the Art Machine's $4.99 Sell-It Pack.
//
// Two flows:
//   1. ?session_id=cs_...&meta=1   — called by the tool page right after Stripe's
//      redirect. Verifies the checkout session with Stripe directly (does NOT
//      depend on the webhook having fired), flips the held-back HD record to
//      paid, extends its TTL to 30 days, and returns { ok, token, subject, style }.
//   2. ?token=art_...              — serves the actual HD JPEG. Only when paid.
//      &inline=1 renders in-page; default is a download attachment.
//
// The webhook (stripe-webhook.js art-hd branch) is the backup fulfillment path:
// it also flips paid + emails the download link, so a closed tab still gets
// the file.

import Stripe from 'stripe';
import { readKV, writeKV } from '../../lib/kv-store';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const TOKEN_RE = /^art_[a-f0-9]{24}$/;
const PAID_TTL = 30 * 24 * 3600; // paid files live 30 days (stated in the receipt email)

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { session_id: sessionId, token, meta, inline } = req.query;

  // Flow 1: verify a just-completed Stripe checkout and unlock the HD record.
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(String(sessionId));
      if (session.payment_status !== 'paid') {
        return res.status(402).json({ ok: false, error: 'not_paid' });
      }
      const t = String(session.client_reference_id || '').trim();
      if (!TOKEN_RE.test(t)) {
        return res.status(400).json({ ok: false, error: 'bad_token' });
      }
      const rec = await readKV(`hd:${t}`);
      if (!rec || !rec.b64) {
        // Paid but the held-back file expired (48h window) — extremely unlikely
        // for the redirect flow (seconds after generation). Honest fallback.
        return res.status(410).json({ ok: false, error: 'expired', message: 'Your payment went through but the file expired. Reply to your receipt email and we\'ll regenerate it free.' });
      }
      if (!rec.paid) {
        rec.paid = true;
        rec.paid_at = new Date().toISOString();
        rec.stripe_session = session.id;
        await writeKV(`hd:${t}`, rec, PAID_TTL);
      }
      if (meta) {
        return res.status(200).json({ ok: true, token: t, subject: rec.subject || '', style: rec.style || '' });
      }
      // No meta flag: fall through to serving the file via the token below.
      return serveFile(res, rec, inline);
    } catch (err) {
      console.error('[hd-download] session verify error:', err.message);
      return res.status(502).json({ ok: false, error: 'verify_failed' });
    }
  }

  // Flow 2: serve the HD file for a paid token.
  if (token) {
    const t = String(token).trim();
    if (!TOKEN_RE.test(t)) return res.status(400).json({ error: 'bad_token' });
    const rec = await readKV(`hd:${t}`);
    if (!rec || !rec.b64) {
      return res.status(410).json({ error: 'expired', message: 'This download link has expired. Reply to your receipt email and we\'ll regenerate your HD file free.' });
    }
    if (!rec.paid) {
      return res.status(403).json({ error: 'locked', message: 'This HD file hasn\'t been unlocked yet.' });
    }
    return serveFile(res, rec, inline);
  }

  return res.status(400).json({ error: 'missing_params' });
}

function serveFile(res, rec, inline) {
  const buf = Buffer.from(rec.b64, 'base64');
  res.setHeader('Content-Type', rec.mime || 'image/jpeg');
  res.setHeader('Content-Length', buf.length);
  res.setHeader('Cache-Control', 'private, max-age=3600');
  res.setHeader(
    'Content-Disposition',
    inline ? 'inline' : 'attachment; filename="midastools-art-hd.jpg"'
  );
  return res.status(200).send(buf);
}
