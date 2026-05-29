# Gist Portfolio Backlink Sweep

Purpose: When shipping a new persona-targeted gist into an existing portfolio, add bidirectional sister-link cross-references to the 3 highest-audience-overlap older gists, AND run an opportunistic truth-audit on those same older gists while editing.

When to use: /audience already represented in your gist portfolio (e.g. content-creator, dev, finance, B2B). NOT for first-of-its-kind audience gists.

---

When to use: After publishing any new gist that targets a persona/audience already represented in your gist portfolio (e.g. content-creator, dev, finance, B2B). NOT for first-of-its-kind audience gists.
---
1. Identify the 3 older gists with highest audience overlap with the new gist's persona. Check Resources sections of candidates — if they have no link to the new gist, they're candidates.
2. PATCH each via `update-gist.sh` to add a sister-link line in their Resources section: "Sister gist — <New gist title> — <one-sentence why this audience would want it>"
3. While the file is open for editing, grep for stale numeric claims in the same file (counts, prices, SKU info). Fix any divergences against current source-of-truth in the same PATCH.
4. Verify each PATCH via curl on the raw gist URL — confirm sister-link appears exactly once + truth-fixes are live.
5. Run IndexNow on each updated gist's URL (auto-fires from update-gist.sh).
6. Commit all changes in one commit message documenting both the cross-links and the opportunistic truth-fixes. Honest accounting: cross-link EV is small (~1-3 incremental visits over 30d per gist), but truth-fixes compound across portfolio trust.
