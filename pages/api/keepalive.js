// Subscriber storage keepalive + health probe.
// GET /api/keepalive?key=mt-outreach-2026
//
// Post-2026-05-14 migration: primary storage is Upstash KV (Vercel marketplace
// integration). Gist remains as a 48h safety net. Response surfaces health of
// BOTH layers so we can verify the migration end-to-end.

import { Resend } from 'resend';
import { readSubscribers, writeSubscribers, hasKvCreds } from '../../lib/subscribers';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = 'iam+midas@armando.mx';

export default async function handler(req, res) {
  if (req.query.key !== (process.env.OUTREACH_SECRET || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const subs = await readSubscribers();
  const writeResult = await writeSubscribers(subs);

  // Surface fine-grained health
  const kvOk = writeResult.kvSuccess === true;
  const gistOk = writeResult.gistSuccess === true;
  const hasKv = hasKvCreds();
  const hasGist = !!process.env.GH_GIST_TOKEN;

  // Alert Armando if KV is misconfigured (since this is the new primary)
  if (!hasKv) {
    try {
      await resend.emails.send({
        from: 'MidasTools <updates@midastools.co>',
        to: NOTIFY_EMAIL,
        subject: '🚨 KV creds missing in Vercel env — subscriber writes degraded',
        html: `
          <h2>Upstash KV environment variables not set</h2>
          <p>The subscriber write-path can't reach Upstash KV. Falling back to gist
          safety-net only. Check that the Upstash for Redis marketplace integration
          is still installed under <code>artificialhq/midas-tools-kit</code>.</p>
          <p>Expected env vars: <code>KV_REST_API_URL</code>, <code>KV_REST_API_TOKEN</code></p>
        `,
      });
    } catch (e) {
      console.error('KV-alert email failed:', e.message);
    }
  }

  return res.status(200).json({
    ok: writeResult.success === true,
    subscribers: subs.length,
    storage: {
      primary: 'upstash-kv',
      kvOk,
      gistOk,
      kvError: writeResult.kvError || null,
      gistError: writeResult.gistError || null,
      hasKvCreds: hasKv,
      hasGistToken: hasGist,
    },
    // Legacy fields (kept for back-compat with /api/keepalive consumers):
    healed: false,
    newBlobId: null,
    writeError: writeResult.error || null,
    hasGistToken: hasGist,
    timestamp: new Date().toISOString(),
  });
}
