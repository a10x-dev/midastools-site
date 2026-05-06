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

---

## 2026-05-06 21:15 · world-cup-ai-prompts-experiment

**Bet:** Ship a parallel-experiment seasonal product: `/world-cup-ai-prompts` landing page (10 free prompts + 20 email-gated) + `/world-cup-scorecard-generator` (interactive text/HTML scorecard generator users screenshot for socials). Position 5 weeks pre-kickoff (June 11) to capture pre-tournament search/citation window. Test demand before committing to a paid pack.

**Cost:**
- Build: ~2.5 hours (landing 45 min + generator 90 min + sitemap + cross-link 15 min)
- $0/mo (no paid APIs; HTML-rendered scorecard, no DALL-E)
- Reputation: low-medium. IP risk on "FIFA World Cup" trademark — must use "World Cup" generically + skip FIFA logos / team logos / player photos.

**Evidence pulled:**
- `chatgpt-citation-playbook` (just shipped) — listicle + named-entity + recent-date pattern works. World Cup content checks all 3 (10-prompt list, named players/teams, June 2026 date).
- `feedback_protect_flywheel` + `feedback_email_gate_tools` — free tool that captures emails fits the existing flywheel without disturbing homepage.
- Memory: 14 existing free generators drive most of our traffic. Adding +1 themed for a major sports event aligns with the proven pattern.
- Web/timing: 2026 FIFA World Cup runs June 11 - July 19, 2026. We're at T-36 days. Pre-tournament search peaks 1-2 weeks before kickoff. Now is prime seeding.
- Past customer profile (Shantae IT Director / Arnaud French finance) does NOT match soccer-fan-buyer. Free generator is top-of-funnel diversification, not a buyer-profile match. ROI is brand awareness + email captures + (possibly) niche $9 pack sales.

**Inversion (most likely failure):** product feels weak vs ESPN/Sofascore/FIFA Plus apps. No one shares because output is text-only and uninspiring. Backup failure: no one searches "world cup AI prompts" — niche too small. ONE assumption that blows it up: that USERS want to CREATE custom scorecards (vs just screenshotting ESPN's official scorecard). Counter mitigation: framing emphasizes "AI-generated commentary" + "personalized take", which ESPN doesn't do.

**ICP / Buyer reality:**
- Free-tool user: any World Cup viewer who wants AI-flavored shareable content (broad, low-intent).
- Paid product (deferred): small biz/creators doing World Cup marketing — bars, restaurants, sports merch sellers, content creators. ~$9 micro-pack ticket if shipped.
- Strongest NO: free tools from ESPN/Sofascore + IG/TikTok native stickers already cover the share-graphic need.

**Reversibility:** Two-way door entirely. Free pages, no Stripe products committed yet, no public press, easy to delete after the tournament if zero engagement.

**Alternatives considered:**
- (a) Full interactive generator + image generation via DALL-E (~$0.04/image, would compound to real cost at scale). Rejected — too expensive for unproven demand.
- (b) Just a blog post with 30 prompts, no interactive tool. Lower build cost (~30 min) but lower share-virality — no "create" verb.
- (c) Wait until June 1 (T-10d) when pre-tournament search is peaking. Rejected — citation indexes need time to crawl + rank; shipping now lets us be in ChatGPT/Bing's index by the time queries spike.
- (d) **Landing page (10 free prompts, 20 email-gated) + simple HTML-rendered scorecard generator (no image gen).** PICKED. Smallest reversible step that still tests both vectors (search demand + share virality).

**Confidence: 65%.** Above threshold. Going.

The 35% downside breakdown:
- 18%: too niche; sub-100 visitors over 6 weeks
- 10%: scorecard quality is uninspiring without image generation; low share rate
- 7%: IP/brand framing tightrope — we slip and use "FIFA" or a player photo accidentally

**Decision: GO.** Smaller scope (no paid product, no DALL-E). If 50+ email captures in 14 days → ship $9 paid micro-pack + investigate DALL-E image gen. If <10 captures → kill, accept the 2.5 hours as cheap data.

**Auditable outcome by:** 2026-05-20 (T+14 days, mid-tournament-buildup).
- ✅ if 50+ email captures attributable to /world-cup-ai-prompts
- ⚠️ if 10-50 → sustain free, do not invest in paid
- ❌ if <10 → kill the pages, log lessons

**IP guardrails (committed in code):**
- Use "World Cup" generically (it's a descriptive term, not a unique trademark in our context — but no FIFA logo, no team logos, no player photos)
- Generate stylized text-only output; no image gen of named players
- Disclaimer: "Independent fan project, not affiliated with FIFA"

---

## 2026-05-06 22:00 · jsonblob-to-github-gist-migration + trend-watch-phase-2

**Bet (combined):** Two related infra ships in one go. (1) Migrate subscribers blob + inbound-replies blob from jsonblob (11 deaths in 6 weeks) to GitHub Gist storage (durable, free, we have a token with gist scope). (2) Build Phase 2 of trend-watch: auto-draft layer that takes a top trend from the daily digest + uses Claude API to generate a citation-pattern-compliant blog draft, lands in `.founder/drafts/`, ships to publish only after my agent-review.

**Cost:**
- Migration: ~90 min (build lib/gist-store.js + migrate subscribers.js + inbound-replies.js + add ANTHROPIC_API_KEY... wait, that's for Phase 2)
- Phase 2: ~60 min (Claude API integration + draft template + smoke test)
- Total: ~2.5 hrs
- $0/mo (GitHub Gist free; Claude API costs ~$0.05 per draft generated, expected <$5/mo)

**Evidence pulled:**
- Memory + DECISIONS · trend-watch-cron-v1 originally gated Phase 2 on "May 13 audit, 1+ actionable trend." Today's first run already produced 4/5 actionable angles incl. 1622-pt Chrome AI story. **Armando is overriding the gate based on the obvious-quality signal.** Valid override; logging for transparency.
- Memory · jsonblob has died 11 times. Every death is data loss between deaths. Already lost 3 paying customers' attribution data. Continuing to build on jsonblob risks losing the auto-attribution + reply data shipped tonight.
- GitHub Gist API: 5k req/hour authenticated, 256KB+ per gist, durable forever. Token at `.founder/.gh_gist_token` already has gist scope (used by our gist-publishing work).
- Phase 2 risk: factual hallucinations in auto-drafts. Mitigation: agent review (me, not auto-publish) + prompt design forcing "no fabricated stats" rule.

**Inversion (most likely failure):**
- Migration: GitHub token doesn't have gist scope in Vercel production. Code falls back to jsonblob, no improvement. Mitigation: test the token locally before deploying.
- Phase 2: Claude generates plausible-sounding but factually wrong drafts; I miss the errors in review; ChatGPT cites them; we get blacklisted. Mitigation: every draft requires me to verify all named-entity claims before ship. Hard rule in DECISIONS.md.

**ICP / Buyer reality:** N/A both internal infra.

**Reversibility:**
- Migration: two-way (keep jsonblob fallback wired in; gist becomes primary, jsonblob stays as backup for 1 week).
- Phase 2: two-way (drafts in .founder/drafts/, never auto-publish).

**Alternatives considered:**
- Vercel KV ($20/mo, requires Pro plan upgrade) — rejected; cost is 13% of LTM revenue, GitHub Gist is free.
- Upstash Redis (free tier) — viable but requires Armando to sign up + paste new creds; blocks on his action.
- Skip migration, just keepalive jsonblob more aggressively — band-aid, doesn't fix root cause.
- Skip Phase 2, wait for May 13 audit — Armando overrode this; signal-quality already obvious.
- Auto-publish drafts from Phase 2 — rejected per chatgpt-citation-playbook risk + Q3 inversion.

**Confidence: 70%.** Above threshold. Going.

Downside breakdown (30%):
- 12%: migration fails because token scope is wrong; have to defer to next session
- 10%: auto-drafts are too generic/wrong-tone; I have to rewrite from scratch (saves no time)
- 8%: agent review takes too long, becomes the new bottleneck

**Decision: GO.** Both ships in this session.

**Auditable outcome by:** 2026-05-13 (T+7 days).
- ✅ Migration: 0 jsonblob deaths impact (subscribers blob doesn't lose data even if jsonblob dies)
- ✅ Phase 2: 1+ blog post shipped from auto-draft via review-then-publish flow
- ❌ if either fails → rollback the relevant component, log lessons
