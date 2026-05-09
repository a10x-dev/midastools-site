// Subscriber storage keepalive — writes subscribers back to jsonblob daily
// to prevent the ~30-day inactivity eviction. Called by Vercel cron.
// GET /api/keepalive?key=mt-outreach-2026

import { Resend } from 'resend';
import { readSubscribers, writeSubscribers, BLOB_ID } from '../../lib/subscribers';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = 'iam+midas@armando.mx';

export default async function handler(req, res) {
  if (req.query.key !== (process.env.OUTREACH_SECRET || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const subs = await readSubscribers();
  const writeResult = await writeSubscribers(subs);

  const healed = writeResult.healed === true;
  const newBlobId = writeResult.newBlobId;

  // If the write healed a dead blob, notify Armando so we can update the constant
  if (healed && newBlobId) {
    try {
      await resend.emails.send({
        from: 'MidasTools <updates@midastools.co>',
        to: NOTIFY_EMAIL,
        subject: `🔧 Subscriber blob auto-healed — update BLOB_ID to ${newBlobId}`,
        html: `
          <h2>Self-heal triggered</h2>
          <p>The jsonblob at <code>${BLOB_ID}</code> returned 404, so a new blob was auto-created.</p>
          <p><strong>New blob ID:</strong> <code>${newBlobId}</code></p>
          <p><strong>Subscribers preserved:</strong> ${subs.length}</p>
          <p>Update <code>lib/subscribers.js</code> BLOB_ID constant to <code>${newBlobId}</code> on next deploy.</p>
        `,
      });
    } catch (e) {
      console.error('Notify failed:', e.message);
    }
  }

  return res.status(200).json({
    ok: writeResult.success,
    subscribers: subs.length,
    blobId: BLOB_ID,
    healed,
    newBlobId: newBlobId || null,
    writeError: writeResult.error || null,
    hasGistToken: !!process.env.GH_GIST_TOKEN,
    timestamp: new Date().toISOString(),
  });
}
