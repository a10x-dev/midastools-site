// Subscriber storage with fallback resilience
// Primary: jsonblob | Fallback: hardcoded snapshot | Backup: email notification on failure

// Blob death log (jsonblob evicts after ~24-72h idle, keepalive self-heals into a new blob):
//   019d9b51-c4f5-73de-8735-05b1e751723e — died 2026-05-03 (10th death), 20 subs migrated →
const BLOB_ID = '019dee81-1159-7259-86d1-88c201cf5451';
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
    console.error('Jsonblob read failed, using fallback:', err.message);
    return FALLBACK_SUBSCRIBERS;
  }
}

export async function writeSubscribers(subscribers) {
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subscribers }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      // Self-heal: if blob is dead (404), auto-create a replacement so we don't lose data
      if (res.status === 404) {
        const healed = await selfHealCreateBlob(subscribers);
        if (healed.success) return healed;
      }
      throw new Error(`Blob write returned ${res.status}`);
    }
    return { success: true };
  } catch (err) {
    console.error('Jsonblob write failed:', err.message);
    return { success: false, error: err.message };
  }
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
