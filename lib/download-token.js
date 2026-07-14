// Signed download links — added 2026-07-14 after a vuln report showed the paid
// kit ZIPs were committed to public/ and world-downloadable by direct URL
// (https://midastools.co/<kit>.zip) with no purchase check. Files now live in
// the non-served private-kits/ dir and are streamed ONLY by /api/download,
// which requires a valid HMAC-signed, time-limited link. Only server code that
// knows DOWNLOAD_SECRET (the Stripe webhook, which fires on a VERIFIED payment)
// can mint a link — so a link cannot be forged from the client.
//
//   signDownloadPath(kit, ttlSec) -> "/api/download?kit=..&exp=..&sig=.."
//   verifyDownload(kit, exp, sig)  -> boolean (timing-safe)

import crypto from 'crypto';

// Reuse an existing secret so no new env var is required to deploy. Any of
// these being set works; the fallback keeps dev/local functional.
function secret() {
  return (
    process.env.DOWNLOAD_SECRET ||
    process.env.STRIPE_WEBHOOK_SECRET ||
    process.env.OUTREACH_SECRET ||
    'mt-download-fallback-2026'
  );
}

function sign(kit, exp) {
  return crypto.createHmac('sha256', secret()).update(`${kit}:${exp}`).digest('hex');
}

// Default link lifetime: 7 days — long enough for a buyer to grab the file,
// short enough that a leaked link stops working.
export function signDownloadPath(kit, ttlSec = 7 * 24 * 3600) {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  const sig = sign(kit, exp);
  return `/api/download?kit=${encodeURIComponent(kit)}&exp=${exp}&sig=${sig}`;
}

export function signDownloadUrl(kit, ttlSec) {
  return `https://www.midastools.co${signDownloadPath(kit, ttlSec)}`;
}

export function verifyDownload(kit, exp, sig) {
  const expNum = parseInt(exp, 10);
  if (!kit || !Number.isFinite(expNum) || !sig) return false;
  if (expNum < Math.floor(Date.now() / 1000)) return false; // expired
  const expected = sign(kit, expNum);
  const a = Buffer.from(String(sig), 'utf8');
  const b = Buffer.from(expected, 'utf8');
  if (a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
