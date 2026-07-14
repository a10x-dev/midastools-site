// TEMPORARY verification endpoint — 2026-07-14. Mints a signed download link
// server-side (using DOWNLOAD_SECRET) so the full /api/download path can be
// verified end-to-end without exposing the secret. DELETE after verifying.
import { signDownloadPath } from '../../lib/download-token';

const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';

export default function handler(req, res) {
  if (req.query.key !== SECRET_KEY) return res.status(401).json({ error: 'Unauthorized' });
  const kit = 'ai-prompt-mega-pack.zip';
  return res.status(200).json({
    link: signDownloadPath(kit, 600), // 10-min link, just for this test
    secret_source: process.env.DOWNLOAD_SECRET ? 'DOWNLOAD_SECRET' :
      (process.env.STRIPE_WEBHOOK_SECRET ? 'STRIPE_WEBHOOK_SECRET' : 'fallback'),
  });
}
