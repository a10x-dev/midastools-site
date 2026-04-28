# Pivot Evolution Memo — From "Coaches" to "Solo Service Pros"
**Date:** 2026-04-28 (Session 132, post 20-sub deep audit)
**Author:** Pair-mode synthesis
**Predecessor:** `.founder/deliverables/pivot-decision-2026-04-28.md` (the original coach pivot)

---

## TL;DR

The 20-sub deep audit changes the pivot framing — but doesn't kill it.

**Original pivot (this morning):** *"AI productivity stack for solo coaches and consultants."*

**Recommended evolution:** *"AI productivity stack for solo service professionals — coaches, agents, pastors, lawyers, designers, freelance experts."*

Same DFY thesis. Wider funnel. Matches the actual subscriber base (which has 1 coach-shaped sub out of 20 — but 6+ solo-service-professional shaped subs).

**No site changes tonight.** Awaiting Armando's call before we touch homepage / `/for-coaches` / add `/for-solo-pros`.

---

## What the 20-sub audit revealed

| Segment | Count | Subs |
|---|---|---|
| Verified business / org domains | 5 | Criterion Counsel (law) · Stamford Health · Valley Grace (church) · AC Printmedia (DE print shop) · Lake County CA gov |
| Verified personal-brand pro | 1 | tavassoli.com (real estate, North Vancouver BC) |
| Likely-identifiable consumer | 3 | Nicole Ballweg (TDS Telecom WI) · Fonz O (Seattle eastside) · atredesign83 (FR designer) |
| Unverifiable / common-name consumer | 11 | Yahoo + AOL + Hotmail + Live cohort |

**Key insight:** The data doesn't show a "coach niche." It shows a **solo-service-professional pattern** — one realtor, one pastor (also IT instructor), one IP lawyer, one print-shop owner, one freelance designer, one telecom PM. Different industries, same shape: solo or small-team operators who'd buy DFY content/branding output.

**Zero subs self-identify as "coach" or "consultant" by domain or visible role.** The "coach" framing might pass for the 11 unverifiable consumers (since aspiring coaches use Yahoo emails too), but it actively excludes the 6 verified business subs we already have.

---

## The strategic call

| Option | What changes | Pros | Cons |
|---|---|---|---|
| **A: Keep coach pivot exactly as-is** | Nothing — homepage stays, `/for-coaches` stays | Zero churn. Already shipped. | Excludes 6 of 20 verified subs from the positioning. Wastes the Pastor Doug, Hiedeh, cbrannan pilot signals. |
| **B: Replace "coaches" with "solo pros" everywhere** | Homepage hero rewrite #2 in 24h, `/for-coaches` becomes `/for-solo-pros`, all SEO work re-aimed | Captures actual ICP exactly. Honest. | Throws away the SEO cluster we just started building for "coaches" terms. Confusing whiplash for the 23 subs who got the coach_pivot broadcast 2 hours ago. |
| **C ⭐ Add `/for-solo-pros` as a sister page, keep `/for-coaches` intact** | New landing at `/for-solo-pros`, homepage hero adjusted to softer "for solo service pros and experts," coach-specific SEO content lives at `/for-coaches`, broader content lives at `/for-solo-pros` | Both audiences served. Coach SEO compounds. Solo-pro audience captured. Doug, Negar, cbrannan all fit `/for-solo-pros`. | More pages to maintain. Risk of diluting the message. |

**Recommendation: C.** Coach is a SEO-dense lane (high-volume queries: "ChatGPT prompts for coaches", "AI tools for life coaches") — don't kill that work. Solo-pros is a broader funnel that captures the rest. Run both. Crosslink.

---

## Top 3 warm-pilot drafts (READY FOR YOUR APPROVAL)

All drafts live at `.founder/sales/{name}-pilot-outreach-2026-04-28.md`.

### 1. ⭐⭐⭐ Negar Tavassoli (`hiedeh@tavassoli.com`) — REPLACES bad draft

- **Real estate agent** at Sutton Group-West Coast Realty, North Vancouver BC
- Pitch: free $149 Listing Optimizer pilot — 3 MLS rewrites + 4 IG captions + 1 neighborhood guide
- Cost: 6-8 hours, ~$10 API
- Probability: ~40-50%
- Upside: realtor case study unlocks Plan B real estate sub-vertical; Sutton Group North Van office has 50+ agents (referral path)

### 2. ⭐⭐ Doug Courter (`pastordoug@valleygrace.net`)

- **Tech-literate pastor + adjunct IT instructor + missions-org board president** in Hagerstown MD
- Pitch: 3-option menu — sermon prep month / missions newsletter / IT lecture month
- Cost: 5-6 hours, ~$8 API
- Probability: ~40-50%
- Upside: church/ministry vertical case study + community-college instructor referral path

### 3. ⭐ C. Brannan @ Criterion Counsel (`cbrannan@criterioncounsel.com`)

- **IP / brand-protection law firm** in Woodland Hills CA
- Pitch: 4 LinkedIn posts on counterfeit takedowns + case study landing page + competitive positioning brief
- Cost: 6-8 hours, ~$10 API
- Probability: ~15-20% (lower because cbrannan may not have authority; gateway pitch)
- Upside: highest-LTV customer if it converts ($300-$500/mo retainer plausible)

---

## What I'm asking you (Armando) to decide

| Q | Options | My pick |
|---|---|---|
| 1. Pivot framing | A (keep coaches) / B (replace with solo pros) / **C (add solo-pros as sister)** | **C** |
| 2. Send Hiedeh outreach | Yes / No / Edit first | Yes, Apr 30 morning, recommend Option C send method (your personal Gmail vs hello@) |
| 3. Send Pastor Doug outreach | Yes / No / Edit first | Yes, Apr 30 morning, parallel to Hiedeh |
| 4. Send cbrannan outreach | Yes / No / Edit first | Yes, but Apr 30 mid-week (Wed AM is best for law firms) |
| 5. Update `/for-solo-pros` page | Build now / Defer / Skip | **Build only after we have 1 successful pilot** (Hiedeh or Doug) — case study before page |
| 6. Bottom-5 subs (kmcphe, dyeaegr, skylarmerc, williamsmith, juan.dylan) | Keep in nurture / Remove | Keep in nurture — they signed up. Just don't waste manual minutes on them. |

---

## The bigger lesson (memory-worthy)

**Subscribers are intel, not audience.** The 5 minutes of web research we did per sub revealed a pattern (solo service pros) that 4 weeks of theoretical niche-scoring couldn't. Going forward:

1. Every new sub auto-runs through `subscriber-enricher.py`
2. Before any 1:1 outreach: read the JSON profile FIRST
3. Strategic decisions should be data-driven from sub forensics, not theory-driven from market research

This is now codified in:
- `.founder/playbooks/subscriber-intel-playbook.md` (operating manual)
- `.founder/tools/subscriber-enricher.py` (the tool)
- Memory: `feedback_research_subscribers_first.md` (durable rule)

---

## Confidence summary

| Claim | Confidence |
|---|---|
| Coach-only framing is too narrow | 🟢 HIGH (only 0 of 20 self-identify as coach) |
| "Solo service pros" is a better umbrella | 🟢 HIGH (6+ verified subs fit this shape) |
| Option C (add `/for-solo-pros` sister page) is the right move | 🟡 MEDIUM (depends on willingness to maintain two pages) |
| Hiedeh outreach is the right top pilot | 🟢 HIGH |
| Pastor Doug is a strong second pilot | 🟢 HIGH |
| cbrannan is worth attempting despite lower odds | 🟡 MEDIUM (asymmetric upside) |
| The 11 unverifiable consumer subs may have higher signal we can't extract without paid APIs | 🟡 MEDIUM (Clearbit ~$99/mo would unlock this) |

---

*End of memo. Awaiting Armando's call on the 6 questions above.*
