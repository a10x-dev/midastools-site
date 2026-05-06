// Durable JSON storage backed by GitHub private gists.
//
// Why: jsonblob has died 11 times in 6 weeks (per memory + DECISIONS.md).
// GitHub Gists are durable, free, and GitHub doesn't evict private gists.
// We already have a token with gist scope.
//
// Auth: process.env.GH_GIST_TOKEN in Vercel production. The /api/* routes
// run server-side so the token never reaches the browser.
//
// API:
//   await readGist(gistId, filename) -> parsed JSON or null on failure
//   await writeGist(gistId, filename, data) -> { success, error? }
//
// Pattern: callers use this as PRIMARY store + keep a jsonblob fallback
// for safety. Once we trust the gist (no failures for 1 week), retire
// the jsonblob fallback.

const GIST_API = 'https://api.github.com/gists';

function getToken() {
  return process.env.GH_GIST_TOKEN || '';
}

export async function readGist(gistId, filename) {
  const token = getToken();
  if (!token) {
    console.warn('[gist-store] GH_GIST_TOKEN not set, skipping gist read');
    return null;
  }
  try {
    const res = await fetch(`${GIST_API}/${gistId}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'midastools-gist-store/1.0',
      },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) {
      console.warn(`[gist-store] read ${gistId} HTTP ${res.status}`);
      return null;
    }
    const data = await res.json();
    const file = data.files?.[filename];
    if (!file) {
      console.warn(`[gist-store] file ${filename} not found in gist ${gistId}`);
      return null;
    }
    if (file.truncated && file.raw_url) {
      // Large files come truncated; fetch raw content
      const rawRes = await fetch(file.raw_url, {
        signal: AbortSignal.timeout(6000),
      });
      if (!rawRes.ok) return null;
      const text = await rawRes.text();
      try {
        return JSON.parse(text);
      } catch {
        return null;
      }
    }
    try {
      return JSON.parse(file.content);
    } catch {
      console.warn(`[gist-store] failed to parse JSON in ${filename}`);
      return null;
    }
  } catch (err) {
    console.warn(`[gist-store] read error: ${err.message}`);
    return null;
  }
}

export async function writeGist(gistId, filename, data) {
  const token = getToken();
  if (!token) {
    return { success: false, error: 'GH_GIST_TOKEN not set' };
  }
  try {
    const res = await fetch(`${GIST_API}/${gistId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'midastools-gist-store/1.0',
      },
      body: JSON.stringify({
        files: { [filename]: { content: JSON.stringify(data) } },
      }),
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) {
      const body = await res.text();
      console.warn(`[gist-store] write ${gistId} HTTP ${res.status}: ${body.slice(0, 200)}`);
      return { success: false, error: `HTTP ${res.status}` };
    }
    return { success: true };
  } catch (err) {
    console.warn(`[gist-store] write error: ${err.message}`);
    return { success: false, error: err.message };
  }
}
