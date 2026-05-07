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

## 2026-05-07 15:15 · stripe-ai-economy-citation-page

**Bet:** Ship `/blog/stripe-ai-economy-2026-data` — a citation-eligible blog post packaging 10 Stripe Sessions 2026 data points (Cursor $1B->$2B in 3mo, AI co's grew 575% in 2026, top consumer wallet $371/mo, 42-country year-1 distribution, John Collison's Solow paradox framing). Modeled after `/blog/best-ai-tools-may-2026` and `/blog/viral-ai-art-trends-april-2026` (the proven ChatGPT-citation page). Cross-linked from `/blog/best-ai-tools-may-2026` and `/blog/ramp-ai-adoption-playbook-2026` to compound citation cluster.

**Cost:**
- Build: ~30 minutes (page draft + sitemap + cross-links + commit/push)
- Maintenance: quarterly refresh per chatgpt-citation-playbook (~10 min/quarter)
- $0 ongoing
- Reputation: low-moderate. Stripe Sessions 2026 quotes are verbatim from Armando's shared briefing. If Stripe disputes, simple correction; the data is consistent with public Stripe Sessions content.

**Evidence pulled:**
- Armando shared the Stripe Sessions 2026 briefing as raw input — primary source.
- `.founder/playbooks/chatgpt-citation-playbook.md` (May 6) — 8 structural elements (URL slug = natural-language query, numbered listicle, named entities everywhere, specific factual claims with numbers, recent dates, strong opening, internal linking, named-entity micro-structure). All 8 present.
- Existing GSC data: `/blog/ramp-ai-adoption-playbook-2026` earned 387 imp/2.3% CTR with very similar structural shape — proves the format earns Google CTR even before ChatGPT citation kicks in.
- Cross-page linking from 2 high-CTR cluster members (best-ai-tools-may + ramp-playbook) accelerates crawl + indexing.

**Inversion (most likely failure):** ChatGPT/Perplexity don't cite the page within 14d AND Google indexes but doesn't rank. If both, the named-entity density isn't enough — Stripe Sessions 2026 is a heavily-covered topic, and we're a 35-day-old domain competing against TechCrunch/Stratechery/The Information. Counter: our angle (action-oriented for solo operators / SMBs) isn't covered by mainstream press; we're filling a niche.

**ICP / Buyer reality:** Solo operators, coaches, consultants, SMB owners — the Solow-paradox argument (#10 in the list) maps directly to our `/ai-audit` ($997 productized) thesis. Cross-link to `/ai-audit` embedded in the Sources & Related Reading section. Mega Pack ($29) and Bundle ($97) CTAs in mid-page block.

**Reversibility:** **Two-way door.** `git revert` undoes the deploy. Page can be unpublished at any time; sitemap entry removable. No money out, no public commitment beyond a published blog post.

**Alternatives considered:**
- (a) Save the Stripe data as a wiki page only and DON'T ship a public page. Cheapest, but loses the highest-value lever (a freshly-dated citation page on a hot search cluster). Rejected.
- (b) Ship the page but skip cross-linking. Saves 5 min, loses cluster-compounding effect. Rejected.
- (c) Ship the page + cross-link + IndexNow submit. PICKED.
- (d) Pair-experiment: ship Spanish version simultaneously to test the global-from-day-1 thesis directly. Tempting but premature — let's first prove the English page earns citations before doubling the maintenance surface.

**Confidence: 70%.** Framework threshold met. The 30% downside breakdown:
- 15%: page indexes but doesn't earn ChatGPT citations within 14d (would suggest the citation pattern needs more than just structural compliance — also needs domain authority / topic-cluster depth we don't yet have).
- 10%: Stripe Sessions 2026 numbers I quoted are subtly wrong (e.g., "575%" should be "475%" in some context). Mitigation: Armando's briefing was the primary source; I quoted verbatim. If discovered, edit the page within 1 hour.
- 5%: Google flags the page as duplicative content (it overlaps with TechCrunch/Stratechery coverage). Lower likelihood given our action-oriented angle.

**Decision: GO.** Live at `https://www.midastools.co/blog/stripe-ai-economy-2026-data` (Vercel deploying as of 15:15). IndexNow submitted (HTTP 202). Sitemap updated.

**Auditable outcome by:** 2026-05-21 (T+14 days).
- ✅ if page indexed in GSC by May 14 AND ≥1 ChatGPT-citation visit (utm_source=chatgpt.com) in track-events blob by May 21
- 🟡 partial if indexed but no ChatGPT visits — keep page live, refresh content after first GSC impressions land
- ❌ kill if not indexed by May 21 (would indicate domain-authority issue requiring orthogonal fix)

**Lessons committed to capture by May 21:**
- Time-from-publish-to-first-citation for fresh-data citation pages
- Whether named-entity density alone is sufficient or whether topical-cluster depth dominates
- Whether cross-linking from 2 already-cited pages moves the needle on time-to-first-citation

## 2026-05-07 16:05 · agentic-commerce-citation-page

**Bet:** Ship `/blog/agentic-commerce-stripe-2026` as a separate focused page (not bloating sister page) with 10 signals from Stripe Sessions 2026's agentic-commerce demos: Alpha Vantage $0.04 stablecoin demo, Tempo CLI, Stripe CLI usage surge, agent docs traffic +10x, OpenClaw name-check, Will Gaybrick API review demo, John Collison's switching-cost argument, shopping-into-chat-windows, token-budget-to-money-spending bridge, agent economy framing.

**Cost:** ~30 min build + push. $0 ongoing. Reputation low (verbatim from Armando's primary-source briefing).

**Evidence pulled:**
- Armando shared the full Stripe Sessions 2026 agentic-commerce briefing chunk as raw input.
- `.founder/playbooks/chatgpt-citation-playbook.md` — 8 structural elements (URL slug = NL query, listicle 7-15 items, named entities, factual claims with numbers, recent dates, strong opening, internal linking, named-entity micro-structure). All 8 present.
- Sister page `/blog/stripe-ai-economy-2026-data` (shipped 90 min earlier) was already at 15 data points — the playbook ceiling. Adding more would dilute citation eligibility per ChatGPT-citation pattern.
- OpenClaw name-checked in Stripe keynote AND we sell adjacent content on midastools.co (/blog/openclaw-setup-guide-2026, /blog/openclaw-vs-chatgpt-autonomous-agent, /openclaw-cost-calculator). Cross-link compounds.
- 'Agentic commerce' is a brand-new search cluster Stripe just announced. Being first to publish a structured listicle with named entities = highest citation-eligibility window we'll ever have on this topic.

**Inversion (most likely failure):** Cluster fragmentation — both pages compete for the same query rather than complementing. Counter: the queries differ ("AI economy data 2026" vs "agentic commerce" vs "Tempo CLI" vs "Alpha Vantage demo Stripe"). Cross-links flow citation signal both ways.

**ICP / Buyer reality:** Solopreneurs preparing their products for agent-readability is a real concern surfacing in our subscriber pool (per existing `/ai-audit` thesis). The 4-step "what to ship this quarter" closer maps to /ai-audit ($997 productized advice on workflow/agent rebuild). Mega Pack ($29) and Bundle ($97) CTAs in mid-page block.

**Reversibility:** Two-way door. `git revert` undoes deploy. Page can be unpublished any time.

**Alternatives considered:**
- (a) Expand sister page from 15 → 20-25 data points. Rejected — exceeds playbook 7-15 ceiling, dilutes the page's existing citation eligibility.
- (b) Skip the agentic-commerce content entirely and just save as wiki. Rejected — first-mover citation window for "agentic commerce" search cluster won't last; competing pages are being written this week.
- (c) Ship a focused 10-signal page + cross-link to sister. PICKED.
- (d) Spanish version simultaneously. Rejected — separate non-trivial bet, premature before English version proves citation eligibility.

**Confidence: 70%.** Same as sister-page bet — same data quality, same playbook compliance, same fundamental thesis on ChatGPT-citation eligibility. Slight upside vs sister: this page has stronger funnel alignment with our existing OpenClaw blog content + /openclaw-cost-calculator free tool.

**Decision: GO.** Live at HTTP 200. IndexNow submitted (HTTP 202). Sitemap entry priority 0.9 weekly.

**Auditable outcome by:** 2026-05-21 (T+14 days).
- ✅ if BOTH pages indexed in GSC by May 14 AND ≥1 ChatGPT-citation visit (utm_source=chatgpt.com) on EITHER page by May 21
- 🟡 partial if only one indexes; iterate the laggard
- ❌ kill the laggard (consolidate into the survivor) if not indexed by May 21

**Lessons committed to capture by May 21:**
- Whether 2 sister pages compound or cannibalize each other in citation signal
- Whether OpenClaw name-check in the page funnels traffic to /blog/openclaw-setup-guide-2026
- First-mover advantage on a brand-new search cluster (agentic commerce) — measure days-to-first-citation
