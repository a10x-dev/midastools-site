# Decisions Log

Append-only. Each non-trivial bet gets a Pre-Flight Check entry per the framework at `~/.claude/projects/.../memory/framework_pre_flight_check.md`. Skip only for trivial/operational work.

---

## 2026-05-06 17:55 · trend-watch-cron-v1

**Bet:** Build a daily trend-detection script that pulls AI signals from 6 free public sources (HN, Reddit, Anthropic+OpenAI+Google AI blog RSS, ProductHunt, GitHub trending), scores by recency × engagement, emails Armando a digest of the top 5. If signal proves strong over 3 days, add an auto-drafting layer that uses Claude API to generate ChatGPT-citation-pattern blog drafts for me to review + ship.

**Cost:**
- Build: ~2 hours (1 hr Phase 1 local script + 1 hr setup + iteration)
- Maintenance: ~10 min/week to read digest + decide what to draft
- $0/mo (no paid APIs; Vercel cron free tier later if promoted)
- Reputation: low. Internal infra, no public commitment.

**Evidence pulled:**
- `.founder/playbooks/chatgpt-citation-playbook.md` (just shipped this session) — calls for "1 monthly listicle in the sequel pattern" → trend-watch is the input that surfaces what to write about.
- `feedback_motion_vs_progress` (memory) — motion ≠ progress; shipping content into a dark channel doesn't move KPIs. Risk: the cron could become content-treadmill busywork if conversion isn't tracked.
- `feedback_full_autonomy` (memory) — Armando granted full autonomy this session ("you are the CEO this is your call"). Auto-publish on my discretion.
- Existing tooling pattern: `.founder/tools/audit-signal-monitor.py`, `metrics-snapshot.py`, `read-replies.py` all follow the same shape — local Python, file-based state, exit-code 10 for SIGNAL. Trend-watch fits this pattern naturally.
- Web/skip: I did not Firecrawl-search "AI trend monitoring tools" since this is internal infra not a buyer-facing decision; the framework doesn't require web search for every internal decision.

**Inversion (most likely failure):** the digest produces 5 trends/day none of which are good enough to draft a post about. After week 1 I stop reading the digest. 2 hours wasted, content-treadmill avoided. The ONE assumption that blows this up: that public-data sources surface novel trends BEFORE they're saturated. Counter: by the time something hits HN front page, 100 other writers already have it indexed.

**ICP / Buyer reality:** N/A directly (internal infra). Self-honesty proxy: the consumer of the digest is me. Will I act on it? Only if signal-to-noise is high. Risk: I over-engineer scoring to feel productive while not converting digests to posts. Mitigation: track posts-shipped-from-digest as the success metric, kill if 0 over 14 days.

**Reversibility:** **Two-way door.** Local Python script, no public commitment, no money out. `git rm .founder/tools/trend-watch.py` undoes it. Auto-drafting layer is also two-way (drafts land in `.founder/drafts/`, never auto-publish in v1).

**Alternatives considered:**
- (a) Manual scan once a week (cheapest, ~15 min). Beats nothing-day; loses if I forget to scan.
- (b) Vercel cron + Resend digest email (more reliable than manual). Higher build cost than (c).
- (c) **Local Python script + run manually for 3 days, then promote to Vercel cron if signal holds.** Smallest reversible step that still moves the needle. **PICKED.**
- (d) Subscribe to Exploding Topics / BuzzSumo (~$50/mo for trend tooling). Saves build time but adds recurring cost; rejected at our stage.
- (e) Auto-publish the drafts the cron generates. Maximum velocity, maximum quality risk. The framework's Q5 (one-way door — published posts hit crawlers immediately + errors propagate) argues against. Per Armando "no human review" directive, I can decide — picking AGENT review (drafts queue in `.founder/drafts/`, I edit, then ship) for v1. Promote to auto-publish only after 5+ drafts ship without quality issues.

**Confidence: 65%.** Framework threshold met (≥60%). Going.

The 35% downside breakdown:
- 20%: signal-to-noise on public AI feeds is too low; digest is mostly noise.
- 10%: draft quality from auto-Claude is not citation-pattern-compliant out of the box; needs manual rewrite that defeats the time savings.
- 5%: I forget to read the digest after week 1.

**Decision: GO.** Phase 1 only tonight (local trend-watch.py). Phase 2 (auto-draft layer) deferred to next session, gated on Phase 1 producing at least 1 actionable trend in 3 days.

**Auditable outcome by:** 2026-05-13 (T+7 days).
- ✅ if 1+ blog post shipped from a trend-watch surfaced trend by May 13
- ❌ if 0 posts shipped → kill the cron, accept manual scanning instead

**Lessons committed to capture by May 13:** noise floor of public feeds, false-positive rate of scoring algo, time-from-trend-detection-to-published-post.
