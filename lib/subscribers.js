// Subscriber storage — durability ladder:
//   1. PRIMARY: GitHub Gist (durable, free, never evicts) — reliable since 2026-05-03
//   2. FALLBACK: jsonblob (DEAD AS OF 2026-05-08, kept only for redundant-write attempt)
//   3. LAST RESORT: hardcoded FALLBACK_SUBSCRIBERS (deploy-time snapshot)
//
// ⚠️ The jsonblob fallback is producing more bugs than it prevents. When it briefly
// holds stale state (from a past keepalive write) before dying, it can return a count
// that disagrees with the gist truth-source — which has caused at least one
// false-positive PING-WORTHY alert (Session 37, May 8 2026). Slated for retirement
// post-May-14 strategic decision, not now (would change subscribe flow during reply
// windows). When you do retire it: delete the FALLBACK path in readSubscribers,
// the redundant-write in writeSubscribers, and the selfHealCreateBlob helper.
//
// jsonblob death log (kept for archaeology):
//   019d9b51-c4f5-73de-8735-05b1e751723e — died 2026-05-03 (10th death), 20 subs migrated →
//   019dee81-1159-7259-86d1-88c201cf5451 — died 2026-05-06 (11th death), 0 live records →
//   019dfe1f-deb7-7d5a-98b3-f8fa20e8aa2a — died 2026-05-08 (12th death, "Blob not found") →
//   (no successor — jsonblob path is non-functional; gist + FALLBACK_SUBSCRIBERS only)

import { readGist, writeGist } from './gist-store';

const GIST_ID = 'b460cc98bbc21692f1f209e852c551b5';
const GIST_FILE = 'subscribers.json';
const BLOB_ID = '019dfe1f-deb7-7d5a-98b3-f8fa20e8aa2a';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

// Hardcoded fallback — last known good subscriber list (updated each deploy)
// This ensures drip/broadcast NEVER fails even when jsonblob dies
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
  // PRIMARY: GitHub Gist
  const gistData = await readGist(GIST_ID, GIST_FILE);
  if (gistData && Array.isArray(gistData.subscribers)) {
    return gistData.subscribers.length ? gistData.subscribers : FALLBACK_SUBSCRIBERS;
  }
  // FALLBACK: jsonblob (kept for redundancy during transition)
  try {
    const res = await fetch(BLOB_URL, {
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Blob returned ${res.status}`);
    const data = await res.json();
    const subs = data.subscribers || [];
    if (subs.length === 0) return FALLBACK_SUBSCRIBERS;
    return subs;
  } catch (err) {
    console.error('[subscribers] gist + jsonblob both failed, using hardcoded fallback:', err.message);
    return FALLBACK_SUBSCRIBERS;
  }
}

export async function writeSubscribers(subscribers) {
  // PRIMARY: GitHub Gist (durable)
  const gistResult = await writeGist(GIST_ID, GIST_FILE, { subscribers });
  // ALSO write to jsonblob (redundancy during transition; remove after 1 week of clean gist runs)
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subscribers }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok && res.status === 404) {
      // Don't bother self-healing the jsonblob anymore — gist is primary
      console.warn('[subscribers] jsonblob 404, but gist write succeeded:', gistResult.success);
    }
  } catch (err) {
    console.warn('[subscribers] jsonblob redundant write failed (non-fatal):', err.message);
  }
  // Return gist's success — it's primary now
  return gistResult.success ? { success: true } : { success: false, error: gistResult.error };
}

// Self-heal: when primary blob is 404, POST a new one. Returns the new blob ID
// so the ops layer can notify and we update the constant on next deploy.
async function selfHealCreateBlob(subscribers) {
  try {
    const res = await fetch('https://jsonblob.com/api/jsonBlob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subscribers }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Blob create returned ${res.status}`);
    const location = res.headers.get('x-jsonblob-id') || res.headers.get('location')?.split('/').pop();
    return { success: true, healed: true, newBlobId: location };
  } catch (err) {
    console.error('Jsonblob self-heal failed:', err.message);
    return { success: false, error: err.message };
  }
}

// Keepalive: write current subscribers back to the blob, preventing the ~30-day
// inactivity eviction that has killed us 8 times. Call daily via cron.
export async function keepAlive() {
  const subs = await readSubscribers();
  return writeSubscribers(subs);
}

export { BLOB_URL, BLOB_ID, FALLBACK_SUBSCRIBERS };
