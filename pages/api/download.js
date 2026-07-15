// Gated kit download — added 2026-07-14. Serves paid ZIPs that were moved out
// of public/ (where they were world-downloadable) into private-kits/. Requires
// a valid HMAC-signed, time-limited link minted by the Stripe webhook on a
// verified payment. No valid signature -> 403.
//
//   GET /api/download?kit=<file.zip>&exp=<unix>&sig=<hmac>

import fs from 'fs';
import path from 'path';
import { verifyDownload } from '../../lib/download-token';

// Allowlist — the only files this route will ever serve. Defense-in-depth
// against path traversal on top of the HMAC gate. Keep in sync with
// private-kits/ contents.
const ALLOWED = new Set([
  'ai-image-prompt-pack.zip', 'ai-prompt-mega-pack.zip', 'ai-video-prompt-pack.zip',
  'content-creator-kit.zip', 'ecommerce-kit.zip', 'email-marketing-kit.zip',
  'freelancer-kit.zip', 'notion-templates-kit.zip', 'openclaw-starter-kit.zip',
  'presentation-kit.zip', 'real-estate-kit.zip', 'resume-career-kit.zip',
  'saas-founder-kit.zip', 'small-business-kit.zip', 'social-media-kit.zip',
  'team-adoption-kit.zip',
]);

export default function handler(req, res) {
  const { kit, exp, sig } = req.query;
  const file = String(kit || '');

  if (!ALLOWED.has(file)) {
    return res.status(404).json({ error: 'Not found' });
  }
  if (!verifyDownload(file, exp, sig)) {
    return res.status(403).json({ error: 'Invalid or expired download link. Check your purchase email for a fresh link, or contact hello@midastools.co.' });
  }

  // path.basename strips any traversal; ALLOWED already guarantees safety.
  const filePath = path.join(process.cwd(), 'private-kits', path.basename(file));
  if (!fs.existsSync(filePath)) {
    console.error(`[download] file missing on disk: ${filePath}`);
    return res.status(500).json({ error: 'File temporarily unavailable — contact hello@midastools.co.' });
  }

  const stat = fs.statSync(filePath);
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
  res.setHeader('Cache-Control', 'private, no-store');
  fs.createReadStream(filePath).pipe(res);
}

export const config = { api: { responseLimit: false } };
