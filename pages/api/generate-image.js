// ── RETIRED 2026-07-19 — The Art Machine (Google AI / Gemini image generation).
//
// The Google AI implementation has been REMOVED (not just guarded). This route
// no longer contains any code that reaches generativelanguage.googleapis.com.
// It was a legacy free-tool from the pre-pivot era; the live product is the
// Chatbot Builder, which runs on Anthropic/Claude — not Google.
//
// A stray Gemini bill prompted stripping the implementation entirely so no code
// path here can ever spend on Google again. To re-enable an image product,
// restore from git history AND separately re-provision a GEMINI_API_KEY.

export default async function handler(req, res) {
  return res.status(410).json({ error: 'retired', message: 'This tool has been retired.' });
}
