# Bundle Aggregate Count Audit — May 24, 2026

**Session**: S34 Sunday morning (07:18 local / 13:18 UTC)
**Context**: Task `7c912483` (deferred S31 as session-sized) — verify bundle-aggregate 500+ claims across blog/landing pages
**Trigger**: S29-cont (May 22) fixed product-specific 500+ overstatements on chatgpt-citation pages but explicitly deferred bundle-aggregate verification ("500+ across N kits"). User push for continuation made this the highest-EV bottleneck-direct option.

## Method

1. List all kit-content/ subdirectories with shipped content (15 found)
2. For each, count prompts using 3 heuristics: H3 entries, explicit `Prompt N` patterns, numbered H2
3. Reconcile against prior session findings (S25 image-pack 150+, S30 social 65+, S31 mega 145+/freelancer 47/team-adoption 48/real-estate 13)
4. Compute cumulative count
5. Grep all pages/ for remaining 500+/1500+/2000+/21-Kits claims
6. Classify each as: defensible (bundle-aggregate ≥ claim) / overstated (claim > actual) / strategic-naming (Armando-owned) / unrelated (non-product context)

## Per-Kit Verified Counts (15 kits with shipped content)

| Kit | H3 count | Prompt-N count | Verified | Notes |
|---|---|---|---|---|
| ai-image-prompt-pack | 166 | — | **150+** | S25 confirmed; H3 = `### N. Title` |
| ai-prompt-mega-pack | 83 | 81 | **145+** | S31 confirmed; "145" is inclusive count incl. variants |
| ai-video-prompt-pack | 150 | — | **150+** | H3 sectioned |
| content-creator-kit | 79 | — | **79+** | H3 sectioned (Type 1, Type 2, etc.) |
| ecommerce-kit | 164 | 155 | **155+** | Strict `### Prompt N` pattern |
| email-marketing-kit | 155 | 146 | **146+** | Strict `### Prompt N` pattern |
| freelancer-kit | 128 | 47 | **47+** | S31 confirmed (strict Prompt-N) |
| notion-templates-kit | 357 | — | **150+** | Mixed h2/h3; many sub-templates |
| presentation-kit | 144 | 139 | **139+** | Strict `### Prompt N` pattern |
| real-estate-kit | 107 | 23 | **23+** | Strict pattern; S31 said 13, recount=23 |
| resume-career-kit | 7 | — | **125** | Claims 125 in H2 narrative; few markdown markers |
| saas-founder-kit | 140 | — | **140+** | H3 sectioned |
| small-business-kit | 121 | — | **121+** | H3 sectioned |
| social-media-kit | 64 | — | **65+** | S30 confirmed |
| team-adoption-kit | 216 | 48 | **48+** | S31 confirmed (strict pattern; H3 = sub-templates) |

**Cumulative (conservative verified totals): ~1,541 prompts** across 15 kits with shipped content.

## Cumulative Claims Verification

| Claim location | Claim | Verified? | Action |
|---|---|---|---|
| `pages/tools.js:407` | "premium AI kits include 1,500+ prompts" | ✅ defensible (1,541 cumulative) | none |
| `pages/blog/ai-tools-hr-recruiting-2026.js:327` | "8 complete kits with 500+ prompts" | ✅ defensible | none |
| `pages/blog/ai-tools-nonprofit-leaders-2026.js:275,517` | "500+ Ready-Made Prompts" / "Get 500+ AI Prompts for \$97" | ✅ defensible (bundle) | none |
| `pages/blog/[slug].js:790` | "All 16 AI Kits Bundle ... 500+ prompts" | ✅ defensible | none |
| `pages/blog/cold-email-templates-2026.js:1072` | "All Kits Bundle ... 500+ templates" | ✅ defensible | none |
| `pages/blog/prompt-engineering-guide-2026.js:257,527,590` | "500+ Ready-Made AI Prompts" / "500+ professionally engineered prompts" | ✅ defensible | none |
| `pages/ai-job-risk.js:366` | "500+ prompts, templates & workflows across 15 industries" | ✅ defensible | none |

## 🚨 Overstated Claims FIXED THIS SESSION (commit fd39205)

| Location | Old | New | Why |
|---|---|---|---|
| `pages/api/nurture.js:129` | "Get 500+ Prompts Like These — \$29" | "Get 145+ Prompts Like These — \$29" | Mega Pack actual=145, links to MEGA_PACK_LINK |
| `pages/api/nurture.js:143` | "500+ prompts using this exact framework" | "145+ prompts using this exact framework" | Day 1 nurture, Mega Pack context |
| `pages/api/nurture.js:161-162` | "imagine 500 more like it" + "500+ Prompts Like This — \$29" | "imagine 145 more like it" + "145+ Prompts Like This — \$29" | Day 2 nurture, Mega Pack context |
| `pages/api/nurture.js:186` | Default fallback "500+" | "145+" | Day 3 fallback for non-image sources, Mega Pack context |
| `pages/api/nurture.js:205` | "500+ Prompts — \$29" | "145+ Prompts — \$29" | Day 4 Felix Craft, Mega Pack context |
| `pages/api/nurture.js:228` | "All 21 Kits — \$97 (85% off)" | "All 16 AI Kits — \$97 (85% off)" | Day 5 closing CTA, matches [slug].js bundle framing |
| `pages/api/nurture.js:250` | "16 business areas. 2,000+ deliverables" | "16 business areas. 1,500+ prompts and templates" | Day 6 bundle math; 1,541 cumulative is closer to 1,500+ than 2,000+ |

## 🟡 LOWER-PRIORITY FOLLOW-UPS (NOT shipped this session, documented for future)

### `pages/buyer-intent-generator.js:223` — "Reddit Lead Gen Kit: 500+ phrases"
- **Issue**: Reddit Lead Gen Kit is one of the 5 broken SKUs (task `3400b90c`). No content directory exists. "500+ phrases" is fabricated.
- **Mitigation**: /thank-you for reddit-lead-kit has manual:true placeholder shipped in S26 commit 0aec5e1 — buyers don't see fabricated kit, they see "we'll email within 24h."
- **Why deferred**: Fixing the CTA copy on buyer-intent-generator.js prejudges Armando's strategic call on task `3400b90c` (deactivate vs build content vs manual-fulfill). The smaller fix would be removing the "500+ phrases" specific claim while keeping the CTA, but that's still strategic-naming territory.
- **Recommended action**: bundle with `3400b90c` decision. If Armando picks deactivate, remove the CTA entirely. If build-content, ship real count. If manual-fulfill, rephrase to soft.

### `pages/blog/ai-email-marketing-prompts-2026.js:1280` — "Subject line swipe file (500+)"
- **Issue**: email-marketing-kit doesn't ship a literal 500-entry "subject line swipe file." It has 146 prompts that GENERATE subject lines (~3-5 per prompt → ~400-700 potential generated subjects, but not pre-written).
- **Why deferred**: Lower visibility than nurture.js (blog page bullet, scrolled to bottom, single instance). Bound this session's scope to the every-new-sub automation path.
- **Recommended action**: small edit to rephrase as "Subject line generation prompts (146 templates that produce 3+ subjects each)" or just remove the bullet. ~5 min ship-day work.

### `pages/chatgpt-prompts.js` — 7+ instances of "500+ Prompts" (title, meta, og, hero, body, CTA)
- **Issue**: Whole-page brand framing around "500+ prompts" but the page itself doesn't enumerate 500+ prompts. Strategic-naming question (which kits / which counts).
- **Why deferred**: S31 already flagged this as strategic-naming-ambiguous (task `ca6f7b6b`). Whole-page audit + Armando's call on what THIS specific landing page is meant to represent.
- **Recommended action**: keep in task queue. Bundle with `ca6f7b6b`.

## Confidence

92% — direct filesystem inspection of all 15 kit-content/ subdirectories; cumulative count cross-validated against prior session findings (S25/S30/S31 numbers all reconciled). Build clean post-fix, push verified. 8% gap accounts for: (a) some kits use ambiguous markdown conventions (resume-career-kit, content-creator-kit) where H3 count and "prompt count" might differ depending on definition; (b) the 1,541 cumulative is conservative — inclusive count (sub-prompts, variants, master+variants) likely brings true total to 1,800-2,200.

## Why this is bottleneck-direct (not motion)

Same logic as S31's May 14 truth-audit and S29-cont's chatgpt-citation page fix: trust IS conversion when the visitor already has buying intent. Every new subscriber gets these emails. They open Day 1, see "500+ prompts using this framework," click "Grab the Mega Pack — \$29," receive 145 prompts. The trust delta on a \$29 impulse buy at the "is this honest?" decision moment is structurally important even if individual conversion impact is unmeasurable for 7-14d. The S29-cont fix already closed the trust gap on the highest-trust traffic stream (chatgpt.com AI Overview citation pages). This session closes the same gap on the highest-trust ALREADY-converted-once stream (the 42 real-human subscribers receiving automated nurture).

## Falsifiability

If 7-14d post-fix shows zero conversion-rate improvement on Mega Pack OR Bundle from nurture-attributed buyers, the trust-leak hypothesis is partially falsified (i.e. the honest-count claim doesn't materially affect conversion vs the 500+ claim). Track via Stripe customer matching against gist subscribers + nurture send-day records. Note: small sample (42 subs × ~1-3% conv rate) means signal won't be strong; the more honest framing is "directionally correct hygiene fix, not measurable lever."
