// ── RETIRED 2026-07-19 — Outreach Machine (legacy free tool).
//
// Implementation REMOVED (not just guarded). This route no longer contains any
// code that calls a paid API (was Anthropic/Claude). It was a pre-pivot free
// tool; the live product is the Chatbot Builder (pages/api/chatbot/*), which
// keeps its own Anthropic implementation. Stripping this dead code so no path
// here can ever spend, even if a guard is deleted. Restore from git to revive.

export default async function handler(req, res) {
  return res.status(410).json({ error: 'retired', message: 'This tool has been retired.' });
}
