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

import { readSubscribers, writeSubscribers } from '../../lib/subscribers';
import { validateEmail } from '../../lib/subscribe-guard';

const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';

export default async function handler(req, res) {
  if (req.query.key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const apply = req.query.apply === 'true';

  try {
    const subs = await readSubscribers();
    const flagged = [];

    const cleaned = subs.map((s) => {
      const bad = !validateEmail(s.email).ok;
      const alreadyOut = s.unsubscribed === true;
      if (bad && !alreadyOut) {
        flagged.push({ email: s.email, reason: validateEmail(s.email).reason });
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
