// Inbound reply storage — Resend Inbound parsed emails land here.
// Same jsonblob pattern as lib/subscribers.js (with the same death-tolerance trade-offs).
// Self-heals on 404; logs the new blob ID so we can update BLOB_ID on next deploy.

const BLOB_ID = '019dfa62-6add-7890-9835-9a0d7d6a1d0c';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

export async function readReplies() {
  try {
    const res = await fetch(BLOB_URL, {
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Blob returned ${res.status}`);
    const data = await res.json();
    return Array.isArray(data.replies) ? data.replies : [];
  } catch (err) {
    console.error('Inbound replies read failed:', err.message);
    return [];
  }
}

export async function appendReply(reply) {
  const existing = await readReplies();
  const updated = [...existing, reply];
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ replies: updated }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      if (res.status === 404) {
        const healed = await selfHealCreateBlob(updated);
        return healed;
      }
      throw new Error(`Blob write returned ${res.status}`);
    }
    return { success: true, count: updated.length };
  } catch (err) {
    console.error('Inbound replies write failed:', err.message);
    return { success: false, error: err.message };
  }
}

async function selfHealCreateBlob(replies) {
  try {
    const res = await fetch('https://jsonblob.com/api/jsonBlob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ replies }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Blob create returned ${res.status}`);
    const newBlobId =
      res.headers.get('x-jsonblob-id') ||
      res.headers.get('location')?.split('/').pop();
    console.error(`[inbound-replies] BLOB DIED — healed into new blob ${newBlobId}. Update BLOB_ID constant.`);
    return { success: true, healed: true, newBlobId };
  } catch (err) {
    console.error('Inbound replies self-heal failed:', err.message);
    return { success: false, error: err.message };
  }
}

export { BLOB_URL, BLOB_ID };
