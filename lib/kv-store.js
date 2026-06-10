// Upstash KV (Redis-compatible) primary subscriber storage.
//
// Provisioned 2026-05-14 via Vercel Marketplace integration
// (resource: upstash-kv-coffee-xylophone). Env vars are auto-injected
// by Vercel — no token management on our side.
//
// Why KV not gist:
//   - Native Vercel integration, no token-add step that can be missed
//   - Sub-100ms read/write latency (vs ~300ms GitHub API)
//   - No 5000-event cap, no eviction policy
//   - Built-in HA + persistence
//
// API:
//   await readKV(key) -> parsed JSON or null on failure
//   await writeKV(key, value) -> { success, error? }
//
// Values are JSON-stringified before SET, parsed on GET.

const REST_URL = () => process.env.KV_REST_API_URL || '';
const REST_TOKEN = () => process.env.KV_REST_API_TOKEN || '';

function hasCreds() {
  return Boolean(REST_URL() && REST_TOKEN());
}

export async function readKV(key) {
  if (!hasCreds()) {
    console.warn('[kv-store] KV_REST_API_URL or KV_REST_API_TOKEN missing, skipping KV read');
    return null;
  }
  try {
    const res = await fetch(`${REST_URL()}/get/${encodeURIComponent(key)}`, {
      headers: {
        Authorization: `Bearer ${REST_TOKEN()}`,
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.warn(`[kv-store] read ${key} HTTP ${res.status}`);
      return null;
    }
    const body = await res.json();
    if (body.result === null || body.result === undefined) return null;
    if (typeof body.result === 'string') {
      try {
        return JSON.parse(body.result);
      } catch {
        return body.result;
      }
    }
    return body.result;
  } catch (err) {
    console.warn(`[kv-store] read error: ${err.message}`);
    return null;
  }
}

export async function writeKV(key, value, ttlSeconds = null) {
  if (!hasCreds()) {
    return { success: false, error: 'KV_REST_API_URL or KV_REST_API_TOKEN not set' };
  }
  try {
    const body = JSON.stringify(value);
    // Optional expiry (Upstash REST: ?EX=<seconds>) — used for large ephemeral
    // values (e.g. held-back HD art files) so they can't fill the KV store.
    const ttlParam = Number.isFinite(ttlSeconds) && ttlSeconds > 0 ? `?EX=${Math.floor(ttlSeconds)}` : '';
    const res = await fetch(`${REST_URL()}/set/${encodeURIComponent(key)}${ttlParam}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${REST_TOKEN()}`,
        'Content-Type': 'text/plain',
      },
      body,
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      const text = await res.text();
      console.warn(`[kv-store] write ${key} HTTP ${res.status}: ${text.slice(0, 200)}`);
      return { success: false, error: `HTTP ${res.status}` };
    }
    return { success: true };
  } catch (err) {
    console.warn(`[kv-store] write error: ${err.message}`);
    return { success: false, error: err.message };
  }
}

export function hasKvCreds() {
  return hasCreds();
}
