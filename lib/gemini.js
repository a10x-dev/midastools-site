// ── RETIRED 2026-07-19 — Google AI (Gemini) implementation removed.
//
// The Art Machine (pages/api/generate-image.js) and the Coloring Book Machine
// (pages/api/coloring-book/*) — the only callers — are hard-410'd (CEO-era pivot
// to the Chatbot Builder, which runs on Anthropic/Claude, NOT Google). A stray
// Gemini bill prompted removing the network code entirely so no code path can
// reach generativelanguage.googleapis.com, even if a 410 guard is ever deleted.
//
// The exports below are kept as inert stubs ONLY so the two (dead) importing
// routes still resolve at build time. They make ZERO external calls.
//
// To fully re-enable an image product: restore from git history AND (separately)
// re-provision a GEMINI_API_KEY. Nothing here touches Google anymore.

export function getGeminiKey() {
  return null; // implementation removed — no key is read, no Google call is made
}

// Inert. Was: one Gemini image generation. Now throws so any (guarded-off) caller
// fails loudly instead of silently spending.
export async function geminiImage() {
  const e = new Error('retired: Gemini image generation has been removed');
  e.code = 'retired';
  throw e;
}

// Inert. Was: Gemini text theme-expansion. Returns null so its (dead) caller
// takes its documented fail-open fallback path without any external call.
export async function geminiPageSubjects() {
  return null;
}
