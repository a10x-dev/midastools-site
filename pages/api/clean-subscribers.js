// Subscriber list cleanup — added 2026-07-14 after a bot injected fake/taunt
// addresses (midas.is.trash*@scam.exposed, *@stop.scamming, random-string@...)
// that got stored BEFORE the abuse guard existed. Those addresses hard-bounce
// on every nurture drip, degrading Resend sender reputation.
//
// This scans the live subscriber list and marks anything the abuse guard would
// now reject as unsubscribed+bounced, so it's excluded from all future sends
// (nurture filters on `!s.unsubscribed && validateEmail(s.email).ok`).
//
// Key-gated, dry-run by default. Idempotent — re-running is a no-op.
//   GET /api/clean-subscribers?key=SECRET            -> dry run (report only)
//   GET /api/clean-subscribers?key=SECRET&apply=true -> mark + persist
//   &bounced=a@x.com,b@y.com  -> ALSO suppress these explicit addresses even
//     if they pass validation (for pasting hard-bounce reports from Resend —
//     random-string addresses bounce but pass format validation).

import { readSubscribers, writeSubscribers } from '../../lib/subscribers';
import { validateEmail } from '../../lib/subscribe-guard';

const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';

export default async function handler(req, res) {
  if (req.query.key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const apply = req.query.apply === 'true';
  const bouncedList = new Set(
    String(req.query.bounced || '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );

  try {
    const subs = await readSubscribers();
    const flagged = [];

    const cleaned = subs.map((s) => {
      const emailLc = String(s.email || '').trim().toLowerCase();
      const invalid = !validateEmail(s.email).ok;
      const explicitBounce = bouncedList.has(emailLc);
      const alreadyOut = s.unsubscribed === true;
      if ((invalid || explicitBounce) && !alreadyOut) {
        flagged.push({ email: s.email, reason: invalid ? validateEmail(s.email).reason : 'explicit-bounce' });
        return { ...s, unsubscribed: true, bounced: true, cleaned_at: new Date().toISOString() };
      }
      return s;
    });

    const activeCount = cleaned.filter((s) => !s.unsubscribed && validateEmail(s.email).ok).length;

    if (apply && flagged.length > 0) {
      const w = await writeSubscribers(cleaned);
      if (!w.success) {
        return res.status(500).json({ error: 'write failed', detail: w.error, flagged });
      }
    }

    return res.status(200).json({
      applied: apply,
      total: subs.length,
      flagged_count: flagged.length,
      active_after: activeCount,
      flagged,
      note: apply
        ? (flagged.length ? 'Flagged addresses marked unsubscribed+bounced and persisted.' : 'Nothing to clean.')
        : 'Dry run — add &apply=true to persist.',
    });
  } catch (err) {
    console.error('clean-subscribers error:', err);
    return res.status(500).json({ error: 'Failed', detail: err.message });
  }
}
