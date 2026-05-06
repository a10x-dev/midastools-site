// Inbound reply storage — Resend Inbound parsed emails land here.
// Durability ladder (matches lib/subscribers.js):
//   1. PRIMARY: GitHub Gist (durable)
//   2. FALLBACK: jsonblob (legacy, retain during transition)
//
// Replies are gold — losing one means losing a real prospect's reply.
// GitHub Gist storage prevents the jsonblob death cycle from impacting these.

import { readGist, writeGist } from './gist-store';

const GIST_ID = '10655e586c8c60a1d498f77efa937fc1';
const GIST_FILE = 'replies.json';
const BLOB_ID = '019dfa62-6add-7890-9835-9a0d7d6a1d0c';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

export async function readReplies() {
  // PRIMARY: GitHub Gist
  const gistData = await readGist(GIST_ID, GIST_FILE);
  if (gistData && Array.isArray(gistData.replies)) {
    return gistData.replies;
  }
  // FALLBACK: jsonblob
  try {
    const res = await fetch(BLOB_URL, {
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Blob returned ${res.status}`);
    const data = await res.json();
    return Array.isArray(data.replies) ? data.replies : [];
  } catch (err) {
    console.error('[inbound-replies] gist + jsonblob both failed:', err.message);
    return [];
  }
}

export async function appendReply(reply) {
  const existing = await readReplies();
  const updated = [...existing, reply];

  // PRIMARY: GitHub Gist (durable)
  const gistResult = await writeGist(GIST_ID, GIST_FILE, { replies: updated });

  // ALSO write to jsonblob (redundancy during transition)
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ replies: updated }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok && res.status !== 404) {
      console.warn('[inbound-replies] jsonblob redundant write returned:', res.status);
    }
  } catch (err) {
    console.warn('[inbound-replies] jsonblob redundant write failed (non-fatal):', err.message);
  }

  if (gistResult.success) {
    return { success: true, count: updated.length };
  }
  return { success: false, error: gistResult.error };
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
