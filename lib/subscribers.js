// Subscriber storage — durability ladder (post-2026-05-14 KV migration):
//   1. PRIMARY: Upstash KV (Vercel-managed Redis, auto-injected env vars,
//      provisioned 2026-05-14 via Marketplace integration upstash-kv-coffee-xylophone)
//   2. SAFETY-NET FALLBACK: GitHub Gist (write-through for 48h after migration,
//      then read-only emergency restore source)
//   3. LAST RESORT: hardcoded FALLBACK_SUBSCRIBERS (deploy-time snapshot,
//      only used if BOTH KV and gist are unreachable)
//
// Migration log:
//   2026-05-14 — Upstash KV provisioned, 37 subs seeded from gist. Dual-write
//     to KV (primary) + gist (safety net). After 48h clean run, drop the gist
//     write-through and keep gist as periodic backup only.
//
// Earlier (deprecated, removed 2026-05-14):
//   jsonblob primary (3 deaths in May alone, 16 total) — retired entirely
//   gist primary (Apr→May) — demoted to safety net behind KV

import { readGist, writeGist } from './gist-store';
import { readKV, writeKV, hasKvCreds } from './kv-store';

const KV_KEY = 'subscribers';
const GIST_ID = 'b460cc98bbc21692f1f209e852c551b5';
const GIST_FILE = 'subscribers.json';
// Legacy export — kept so callers that import BLOB_ID don't break.
// Set to null because the jsonblob is fully retired; null = "no jsonblob layer".
const BLOB_ID = null;

// Hardcoded fallback — last known good subscriber list (updated each deploy)
// Only used if BOTH KV and gist are unreachable.
const FALLBACK_SUBSCRIBERS = [
  { email: "kmcphe3799@aol.com", source: "site", date: "2026-04-08T00:00:00Z" },
  { email: "cbrannan@criterioncounsel.com", source: "site", date: "2026-04-08T00:00:00Z" },
  { email: "dustinsitzes@hotmail.com", source: "site", date: "2026-04-08T00:00:00Z" },
  { email: "fonz.o.425@gmail.com", source: "site", date: "2026-04-08T00:00:00Z" },
  { email: "dyeaegr9440@wowway.com", source: "site", date: "2026-04-09T00:00:00Z" },
  { email: "tsimmons@stamhealth.org", source: "site", date: "2026-04-09T00:00:00Z" },
  { email: "antosoler@outlook.es", source: "site", date: "2026-04-10T00:00:00Z" },
  { email: "pastordoug@valleygrace.net", source: "site", date: "2026-04-10T00:00:00Z" },
  { email: "tamarasimmons78@yahoo.com", source: "site", date: "2026-04-11T00:00:00Z" },
  { email: "rkmadhu@yahoo.com", source: "site", date: "2026-04-12T00:00:00Z" },
  { email: "anthony.solis@yahoo.com", source: "site", date: "2026-04-15T18:17:00Z" },
  { email: "hiedeh@tavassoli.com", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "skylarmerc@aol.com", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "ballweg_nicole@yahoo.com", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "info@ac-printmedia.de", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "atredesign83@orange.fr", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "josievaldez818@yahoo.com", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "williamsmith1074@live.com", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "shannon.heenan@lakecountyca.gov", source: "site", date: "2026-04-15T00:00:00Z" },
  { email: "juan.dylan@yahoo.com", source: "site", date: "2026-04-17T07:07:00Z" },
];

export async function readSubscribers() {
  // PRIMARY: Upstash KV
  const kvData = await readKV(KV_KEY);
  if (kvData && Array.isArray(kvData.subscribers) && kvData.subscribers.length) {
    return kvData.subscribers;
  }

  // SAFETY NET: GitHub Gist (in case KV is down or empty)
  const gistData = await readGist(GIST_ID, GIST_FILE);
  if (gistData && Array.isArray(gistData.subscribers) && gistData.subscribers.length) {
    return gistData.subscribers;
  }

  // LAST RESORT: hardcoded fallback
  console.warn('[subscribers] KV + gist both empty/failed, returning hardcoded fallback');
  return FALLBACK_SUBSCRIBERS;
}

export async function writeSubscribers(subscribers) {
  const payload = { subscribers };

  // PRIMARY: Upstash KV
  const kvResult = await writeKV(KV_KEY, payload);

  // SAFETY NET: GitHub Gist (dual-write for 48h; drop after clean run)
  // Fires regardless of KV outcome — if KV is broken we still want the gist updated
  let gistResult = { success: false };
  try {
    gistResult = await writeGist(GIST_ID, GIST_FILE, payload);
  } catch (err) {
    console.warn('[subscribers] gist safety-net write failed (non-fatal):', err.message);
    gistResult = { success: false, error: err.message };
  }

  // Success if EITHER write succeeded — KV-only is fine; gist-only is fine for 48h transition
  if (kvResult.success || gistResult.success) {
    return {
      success: true,
      kvSuccess: kvResult.success,
      gistSuccess: gistResult.success,
      kvError: kvResult.error || null,
      gistError: gistResult.error || null,
    };
  }

  return {
    success: false,
    error: `KV: ${kvResult.error || 'unknown'} | Gist: ${gistResult.error || 'unknown'}`,
    kvError: kvResult.error || null,
    gistError: gistResult.error || null,
  };
}

// Keepalive: write current subscribers back to storage. Now mostly a noop
// because KV doesn't evict, but keeps the gist safety-net fresh during the
// 48h transition and validates the write-path daily.
export async function keepAlive() {
  const subs = await readSubscribers();
  return writeSubscribers(subs);
}

export { BLOB_ID, FALLBACK_SUBSCRIBERS, hasKvCreds };
