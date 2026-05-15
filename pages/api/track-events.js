// Read endpoint for the track-events KV store.
//
// Replaces the prior pattern of monitoring tools curl'ing jsonblob URLs
// directly. KV creds are server-side-only (Vercel-managed), so the
// tools/cron pipeline reads through this Vercel-hosted proxy.
//
// Auth: shared key match against process.env.TRACK_READ_KEY OR the
// site's outreach key (mt-outreach-2026) — same pattern as
// /api/keepalive + /api/nurture for consistency. Read-only; cannot
// mutate the store.
//
// Query params:
//   key=<auth>          required
//   limit=<n>           optional, return only last n events (default: all)
//
// Response:
//   200 { events: [...], count: N, stored: M, fetched_at: ISO }
//   401 unauthorized
//
// Created 2026-05-15 as part of jsonblob → KV migration.

import { readKV } from '../../lib/kv-store';

const KV_KEY = 'track-events';
const PUBLIC_FALLBACK_KEY = 'mt-outreach-2026'; // matches /api/keepalive convention

export default async function handler(req, res) {
  const providedKey = (req.query.key || '').toString();
  const expected = process.env.TRACK_READ_KEY || PUBLIC_FALLBACK_KEY;
  if (providedKey !== expected) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  const data = await readKV(KV_KEY);
  const all = Array.isArray(data?.events) ? data.events : [];

  let events = all;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isFinite(limit) && limit > 0 && limit < all.length) {
    events = all.slice(-limit);
  }

  return res.status(200).json({
    ok: true,
    events,
    count: events.length,
    stored: all.length,
    fetched_at: new Date().toISOString(),
  });
}
