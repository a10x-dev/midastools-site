// Shared Gemini helpers for the Coloring Book Machine.
// Intentionally separate from pages/api/generate-image.js (the Art Machine) so
// this new product can't regress the live one. Same key resolution: env first,
// gitignored local file as a dev fallback.

import fs from 'fs';

const IMAGE_MODEL = 'gemini-2.5-flash-image'; // ~$0.039/gen, 1024x1024, smoke-tested
const TEXT_MODEL = 'gemini-2.5-flash';        // cheap text expansion; fails OPEN if unavailable
const BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

export function getGeminiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  try {
    const k = fs.readFileSync('.founder/.gemini_key', 'utf8').trim();
    if (k) return k;
  } catch { /* not present in prod */ }
  return null;
}

// Generate one image. Returns { b64, mime } on success, or null (safety block / no image).
// Throws on transport/HTTP failure so callers can distinguish "try again" from "rephrase".
export async function geminiImage(prompt, { timeoutMs = 55000 } = {}) {
  const key = getGeminiKey();
  if (!key) { const e = new Error('not_configured'); e.code = 'not_configured'; throw e; }

  const resp = await fetch(`${BASE}/${IMAGE_MODEL}:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (!resp.ok) {
    const t = await resp.text().catch(() => '');
    const e = new Error(`gemini ${resp.status}`);
    e.code = 'http';
    e.detail = t.slice(0, 300);
    throw e;
  }

  const data = await resp.json();
  for (const cand of data.candidates || []) {
    for (const part of cand.content?.parts || []) {
      if (part.inlineData?.data) {
        return { b64: part.inlineData.data, mime: part.inlineData.mimeType || 'image/png' };
      }
    }
  }
  return null; // no image = likely safety block on the subject
}

// Expand a theme into N distinct page subjects. Fails OPEN: returns null on any
// error so the caller can fall back to generic rotation (book still generates).
export async function geminiPageSubjects(theme, count, audience) {
  const key = getGeminiKey();
  if (!key) return null;
  const n = Math.max(1, Math.min(40, count | 0));
  const prompt = `You are designing a coloring book on the theme: "${theme}" for a ${audience} audience.
List exactly ${n} DISTINCT subjects, one per line, numbered 1 to ${n}. Each is a single short noun phrase describing ONE scene or object to draw on a coloring page (e.g. "a smiling baby triceratops eating a leaf"). Keep them varied, concrete, and on-theme. No intros, no extra text — just the ${n} numbered lines.`;
  try {
    const resp = await fetch(`${BASE}/${TEXT_MODEL}:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      signal: AbortSignal.timeout(25000),
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('\n');
    const lines = text
      .split('\n')
      .map((l) => l.replace(/^\s*\d+[.)]\s*/, '').replace(/^[-*]\s*/, '').trim())
      .filter((l) => l.length > 2);
    if (lines.length >= Math.ceil(n * 0.6)) return lines.slice(0, n);
    return null;
  } catch {
    return null;
  }
}
