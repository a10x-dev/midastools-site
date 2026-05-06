// Client-side event tracking endpoint.
//
// Events captured: page_view, scroll_depth, time_on_page, cta_click, custom.
// Each event includes the visitor's current attribution (UTM + referrer) so
// we can correlate behavior to traffic source without tying it to an email.
//
// Storage: separate jsonblob (track-events) so a flood of events can't kill
// the subscribers blob. Same self-heal pattern.
//
// Auth: none. This is a fire-and-forget client beacon. We accept the load
// risk in exchange for zero friction; rate-limit at the visitor level via
// IP if it becomes a problem.

const TRACK_BLOB_ID = '019dfe20-8487-7349-ac62-b5faa8ba73ab';
const TRACK_BLOB_URL = `https://jsonblob.com/api/jsonBlob/${TRACK_BLOB_ID}`;
const MAX_EVENTS_IN_BLOB = 5000; // Trim oldest if we exceed this

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
    server_country: req.headers['x-vercel-ip-country'] || '',
    server_region: req.headers['x-vercel-ip-country-region'] || '',
    user_agent: (req.headers['user-agent'] || '').slice(0, 200),
    referer: (req.headers.referer || '').slice(0, 300),
    ts: new Date().toISOString(),
  };

  try {
    // Read existing events
    const readRes = await fetch(TRACK_BLOB_URL, {
      signal: AbortSignal.timeout(4000),
    });
    let existing = [];
    if (readRes.ok) {
      const data = await readRes.json();
      existing = Array.isArray(data.events) ? data.events : [];
    }
    existing.push(enriched);
    if (existing.length > MAX_EVENTS_IN_BLOB) {
      existing = existing.slice(-MAX_EVENTS_IN_BLOB);
    }

    const writeRes = await fetch(TRACK_BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: existing }),
      signal: AbortSignal.timeout(4000),
    });
    if (!writeRes.ok) {
      // Self-heal on 404
      if (writeRes.status === 404) {
        const healed = await fetch('https://jsonblob.com/api/jsonBlob', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events: [enriched] }),
        });
        const newId = healed.headers.get('x-jsonblob-id');
        console.warn(`[track] track blob died, healed into ${newId}`);
      }
    }
    return res.status(204).end();
  } catch (err) {
    console.warn('[track] write failed:', err.message);
    return res.status(204).end(); // Fire-and-forget — never block the client
  }
}
