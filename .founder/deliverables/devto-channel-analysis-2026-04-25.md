# Dev.to Channel Analysis — Apr 25, 2026

**Snapshot**: 64 published articles · 695 total views · 3 reactions · 1 comment
**Window**: Feb 23 → Apr 25 (~60 days)
**Per-post avg**: 10.9 views lifetime · 0.05 reactions · 0.02 comments

## TL;DR (3 bullets)
- Dev.to delivers ~12 visits/day from the entire 64-post backlog — roughly 2x our GSC click volume but still tiny in absolute terms. **Confirmed but small channel.**
- **Top 5 posts (38% of all views) share a pattern: opinion / comparison / coined term. Tutorials underperform 5–15x.** Our 3 newly-syndicated tutorial-format posts (Resume/Email/SaaS) will likely underperform the Opus 4.7 post (already 25 views in 48h).
- Engagement is essentially zero (3 reactions on 64 posts). We've never engaged with the Dev.to community, so the algorithm has no reason to surface us. This is the highest-leverage unfixed gap.

## The winners

| # | Title | Views | Format | Date |
|---|---|---:|---|---|
| 1 | VSDD: The AI Coding Methodology Actually Worth Stealing | 162 | Coined-term + opinion | Mar 1 |
| 2 | Vapi vs Bland AI vs Retell AI: Which Voice AI Platform | 100 | 3-way comparison | Feb 27 |
| 3 | How to Sell AI to Local Businesses (No Demo, Deck, Website) | 40 | Contrarian how-to | Mar 1 |
| 4 | If AI Writes Your Code, Should Session Be Part of Commit? | 39 | Provocative question | Mar 2 |
| 5 | How to Build a Vapi Voice Agent from Scratch | 30 | Specific build guide | Feb 26 |

**Top 5 = 371 views = 53% of all 64-post traffic.** Power-law distribution — pick formats that win, drop tutorials.

## Format performance (rough split)

| Format | Avg views | Sample posts |
|---|---:|---|
| Comparison ("X vs Y vs Z") | ~70 | Vapi vs Bland vs Retell (100), VSDD (162) |
| Provocative question | ~30 | "Should session be in commit?" (39) |
| Contrarian how-to | ~25 | "Sell AI without demo" (40), "$5k VA replaced" (0) |
| Specific build guide | ~15 | Vapi from scratch (30), WhatsApp bot (10) |
| Generic tutorial | ~5 | Most "How to use AI for X" posts |
| Reflection / journal | ~3 | "97 sessions $0 revenue", "I built 22 tools" |

## What this means for the 3 we just shipped (Apr 25)

- **AI Resume Prompts** — generic tutorial format. **Predicted lifetime views: 5–15.** Our Opus 4.7 post format (specific model + comparison frame) already has 25 in 48h.
- **AI Email Prompts** — same. **Predicted: 5–15.**
- **SaaS Founder Prompts** — slightly better (audience-specific) but still tutorial. **Predicted: 10–25.**

If the prediction holds, the 3 of them combined will deliver ~30 views in 30 days. The Opus 4.7 post alone will likely beat that.

## Recommendations

🟢 **HIGH CONFIDENCE — change the format mix immediately**
1. Next Dev.to post should be a **comparison**: "Claude Opus 4.7 vs GPT-5.4 vs Gemini 3.1: I Ran 14 Reasoning Tasks Across All 3 — Here's What Won." Direct, opinion-strong, comparison. Funnels to the same Opus 4.7 blog + Mega Pack.
2. Or a **contrarian opinion**: "Stop Using ChatGPT for Resumes. Use This Prompt Stack Instead." Resume traffic but in the format that wins.

🟡 **MEDIUM CONFIDENCE — community engagement loop**
3. Spend 15 min/day commenting on 3 trending Dev.to posts in our space (AI, prompts, frontend). 0 reactions on 64 posts means the algorithm doesn't trust us. Reciprocal engagement is the unlock.

🔴 **LOW CONFIDENCE — tag strategy**
4. Pull tag distribution analysis next week. We may be tagging into low-traffic communities.

## What I'm tracking now

Built `.founder/tools/devto-stats.py --save` (idempotent, runs anytime).
Snapshot history at `.founder/content/devto/STATS_HISTORY.md` — one row per snapshot for trend tracking.

**Next snapshot**: Apr 27 (48h Δ on the 3 new posts) — will tell us if the prediction holds and whether we need to ship the comparison post immediately.

## Caveats

- View counts are page_views_count from Dev.to's own analytics — they include bots, organic referrals, search hits, and direct visits. They DO NOT distinguish unique humans.
- "Reactions" includes hearts, unicorns, bookmarks — Dev.to's positive reactions only.
- Per-post lifetime view distribution is heavily front-loaded (most views in first 7 days), so older posts may have plateaued already.
