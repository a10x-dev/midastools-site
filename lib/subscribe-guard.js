// Subscribe abuse guard — added 2026-07-14 after a bot sprayed the public
// subscribe form with fake/taunt addresses (midas.is.trash400@scam.exposed,
// armando.please618@stop.scamming, random-string@zoho/aol/proton, ...). Every
// fake fired a welcome email that HARD BOUNCED, degrading our Resend sender
// reputation — the same reputation the med-spa cold outbound rides on.
//
// Design rule: NEVER block a real human signup (the free-tool flywheel is the
// top of the funnel). All checks are high-precision; the per-IP rate limiter is
// the catch-all for anything that mutates (trash400/410, random strings).
//
//   validateEmail(email)  -> { ok, reason }   (pure, no I/O)
//   checkRateLimit(ip)    -> { ok, count }     (KV-backed, async)

import { readKV, writeKV } from './kv-store';

// local@domain.tld — requires a dotted domain and a real-looking alpha TLD.
// Deliberately permissive on the local part (real emails have +, ., -, digits).
const EMAIL_RE = /^[^\s@"'()<>,;:\\[\]]{1,64}@[^\s@.]+(\.[^\s@.]+)+$/;

// Scam/taunt/junk word set. Matched against WHOLE dot/@-delimited tokens only
// (not substrings) so real surnames like "Descamps" (contains "scam") or
// "Trashon" (contains "trash") are NOT blocked. Token-exact + the rate limiter
// together cover mutated variants (trash400, scam616) because the burst gets
// throttled per-IP.
const SCAM_TOKENS = new Set([
  'scam', 'scammer', 'scamming', 'fraud', 'fraudster', 'phishing', 'phish',
  'trash', 'garbage', 'junkmail', 'spammer', 'exposed', 'fuckyou',
]);

// Suspicious TLDs seen in the attack + obvious non-deliverable ones.
const BAD_TLDS = new Set(['exposed', 'scamming', 'scam', 'fraud', 'phishing', 'invalid', 'test']);

// Common disposable / temp-mail providers. Not exhaustive by design — the rate
// limiter is the real defense — but blocks the cheapest throwaway sources.
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', '10minutemail.com', 'tempmail.com',
  'temp-mail.org', 'throwawaymail.com', 'trashmail.com', 'getnada.com',
  'dispostable.com', 'yopmail.com', 'fakeinbox.com', 'sharklasers.com',
  'maildrop.cc', 'mailnesia.com', 'mintemail.com', 'mohmal.com',
  'emailondeck.com', 'spam4.me', 'grr.la', 'guerrillamail.info',
]);

export function validateEmail(rawEmail) {
  const email = String(rawEmail || '').trim().toLowerCase();
  if (!email || email.length > 254) return { ok: false, reason: 'length' };
  if (!EMAIL_RE.test(email)) return { ok: false, reason: 'format' };

  const [local, domain] = email.split('@');
  const domainParts = domain.split('.');
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-z]+$/.test(tld)) return { ok: false, reason: 'tld' };
  if (BAD_TLDS.has(tld)) return { ok: false, reason: `bad-tld:${tld}` };

  if (DISPOSABLE_DOMAINS.has(domain)) return { ok: false, reason: 'disposable' };

  // Whole-token scan across local + domain segments.
  const tokens = `${local}.${domain}`.split(/[.+_-]/).filter(Boolean);
  for (const t of tokens) {
    if (SCAM_TOKENS.has(t)) return { ok: false, reason: `scam-token:${t}` };
  }

  return { ok: true, reason: null };
}

const RL_WINDOW_SEC = 3600; // 1 hour
const RL_MAX = 3;           // max accepted signups per IP per window

// Per-IP throttle. A real human signs up once; the Jul-14 bot fired ~12 in 30s.
// TTL refreshes on each hit → a persistent attacker stays blocked as long as
// they keep trying. Fails OPEN (allows) if IP is unknown or KV is down, so a
// KV blip can never block real signups.
export async function checkRateLimit(ip) {
  if (!ip) return { ok: true, count: 0 };
  const key = `sub-rl:${ip}`;
  let count = 0;
  try {
    const cur = await readKV(key);
    count = typeof cur === 'number' ? cur : (cur && cur.count) || 0;
  } catch {
    return { ok: true, count: 0 }; // KV read failed → don't punish real users
  }
  if (count >= RL_MAX) return { ok: false, count };
  try {
    await writeKV(key, count + 1, RL_WINDOW_SEC);
  } catch { /* non-fatal */ }
  return { ok: true, count: count + 1 };
}

export { SCAM_TOKENS, BAD_TLDS, DISPOSABLE_DOMAINS };
