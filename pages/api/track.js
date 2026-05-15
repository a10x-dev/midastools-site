// Client-side event tracking endpoint.
//
// Storage: Upstash KV (post-2026-05-14 migration). Single key 'track-events'
// stores rolling array of last 5000 events. Sub-100ms read+write, no eviction,
// no death cycle. Provisioned via Vercel Marketplace integration
// upstash-kv-coffee-xylophone — same KV instance the subscribers store uses.
//
// Migration log:
//   2026-05-15 — Migrated /api/track from jsonblob → Upstash KV.
//   jsonblob had 16 deaths in 47 days (MTBF collapsed to <26h). Reddit P4b
//   campaign launched May 14 needs durable attribution data — kept losing
//   events on every blob rotation. KV migration closes the architectural
//   debt declared P0 post-May-14.
//
// Earlier (deprecated, removed 2026-05-15):
//   jsonblob primary (16 deaths Apr→May, see git log + pages/api/track.js
//   git history for full death trail). Retired entirely; no fallback —
//   if KV is unreachable, the event is dropped (consistent with the
//   prior fire-and-forget pattern).
//
// Events captured: page_view, scroll_depth, time_on_page, cta_click, custom.
// Each event includes the visitor's current attribution (UTM + referrer) so
// we can correlate behavior to traffic source without tying it to an email.
//
// Auth: none. Fire-and-forget client beacon. Accept the load risk for zero
// friction; rate-limit at the visitor level via IP if it becomes a problem.
//
// Read events back via GET /api/track-events?key=<TRACK_READ_KEY>.

import { readKV, writeKV } from '../../lib/kv-store';

const KV_KEY = 'track-events';
const MAX_EVENTS = 5000; // rolling window

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const eventType = (body.event || 'unknown').slice(0, 50);

  const enriched = {
    event: eventType,
    page_path: (body.page_path || '').slice(0, 200),
    payload: body.payload || {},
    attribution: body.attribution || null,
    session_id: (body.session_id || '').slice(0, 64),
    server_country: req.headers['x-vercel-ip-country'] || '',
    server_region: req.headers['x-vercel-ip-country-region'] || '',
    user_agent: (req.headers['user-agent'] || '').slice(0, 200),
    referer: (req.headers.referer || '').slice(0, 300),
    ts: new Date().toISOString(),
  };

  try {
    const data = await readKV(KV_KEY);
    const events = Array.isArray(data?.events) ? data.events : [];
    events.push(enriched);
    const trimmed = events.length > MAX_EVENTS ? events.slice(-MAX_EVENTS) : events;
    await writeKV(KV_KEY, { events: trimmed });
  } catch (err) {
    console.warn('[track] write failed:', err.message);
    // fall through — fire-and-forget
  }
  return res.status(204).end();
}
