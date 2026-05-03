# $297 Audience Re-Stratification — Day 39 / Audit Window T+24h

**Author:** research-analyst (autonomous)
**Date:** 2026-05-03
**Status:** Findings — not a directive. Decisions logged at bottom.
**Method:** Re-read all 20 enriched subscriber JSONs with $297 wallet-match logic vs the original $997 wallet-match logic from Session 148.

---

## Executive Summary

- 🟡 **Audience-product-fit hypothesis softens at $297, but does not invert.** The list still contains zero research-validated "yes I would pay $297 for an AI workflow audit" prospects beyond the 3 already pitched. The other 17 subs remain UNKNOWN — not unviable, not viable.
- 🟢 **At $297, free-provider personal addresses (14 subs) are no longer auto-disqualified.** $297 sits in the personal-development consumer-spend range (Masterclass tier, Coursera plus tier, Udemy bundles). A solo coach using `tamarasimmons78@yahoo.com` could plausibly buy a $297 personal-spend training product. We just have no signal on whether ANY of them have that intent.
- 🔴 **Plan A broadcast alone is unlikely to clear the $997 revenue KPI.** Expected reply rate on a $297 hard-sell broadcast to 20 unverified subscribers ≈ 1-3% best case. That probabilistically yields 0-1 sale, not a portfolio's-worth of conversations.
- 🟡 **Strategic implication: Plan A and Plan B should run in PARALLEL, not SEQUENTIAL.** Current schedule says "Plan B fires on June 9 if Plan A nets 0 sales 30 days post-launch." Recommend: Plan A ships May 10, Plan B prospect-research begins May 11 (not June 9), Plan B first-pitch fires by May 15. Two parallel acquisition channels, one shared $297 SKU.
- 🟢 **The reply-handling playbook already has the $297 SKU embedded in Reply Type C** (price-objection handler). This means the $297 SKU could fire BEFORE May 10 if any of the 3 audit prospects pushes back on price. Pre-build at § 9 of the spec is good for this scenario too — ship-day is no longer a fixed date.

---

## Re-Stratified Subscriber List — $997 vs $297 Wallet-Match

| Tier | Email | Domain class | Verified role/biz | $997? | $297? | Status |
|------|-------|--------------|-------------------|-------|-------|--------|
| **A** | hiedeh@tavassoli.com | custom | REALTOR (Sutton, North Vancouver) | YES | YES | Pitched Apr 28, in window |
| **A** | pastordoug@valleygrace.net | custom | Pastor + IT instructor (Hagerstown MD) | YES | YES | Pitched Apr 28, in window |
| **A** | cbrannan@criterioncounsel.com | custom | IP law firm staff (Woodland Hills CA) | YES | YES | Pitched Apr 28, in window |
| **B** | info@ac-printmedia.de | custom (parked) | German print media co — site is dormant default page | NO | MAYBE | Domain might be inactive business; no recent web presence found |
| **B** | tsimmons@stamhealth.org | custom (enterprise) | Stam Health — large hospital | NO | LEAN-NO | Even at $297 enterprise employees rarely expense to unknown vendors without procurement |
| **B** | shannon.heenan@lakecountyca.gov | gov | County government employee | NO | LEAN-NO | Compliance gates — procurement, not personal spend |
| **C** | kmcphe3799@aol.com | free | unknown | NO | UNKNOWN | Numeric suffix, AOL = older demographic likely |
| **C** | dustinsitzes@hotmail.com | free | unknown | NO | UNKNOWN | First-last format, possibly real person |
| **C** | fonz.o.425@gmail.com | free | unknown | NO | UNKNOWN | Area code 425 = Seattle |
| **C** | dyeaegr9440@wowway.com | free | unknown | NO | UNKNOWN | wowway = WideOpenWest ISP, residential |
| **C** | antosoler@outlook.es | free | unknown (Spain) | NO | UNKNOWN | Spanish-language sub |
| **C** | tamarasimmons78@yahoo.com | free | unknown | NO | UNKNOWN | Possibly 1978-born retiree |
| **C** | rkmadhu@yahoo.com | free | unknown | NO | UNKNOWN | Initials-name, possibly Indian-origin |
| **C** | anthony.solis@yahoo.com | free | unknown | NO | UNKNOWN | First-last format |
| **C** | skylarmerc@aol.com | free | unknown | NO | UNKNOWN | AOL = older demographic |
| **C** | ballweg_nicole@yahoo.com | free | unknown | NO | UNKNOWN | First-last format |
| **C** | atredesign83@orange.fr | free (France) | unknown | NO | UNKNOWN | "atredesign" hints at design biz, but no domain |
| **C** | josievaldez818@yahoo.com | free | unknown | NO | UNKNOWN | Area code 818 = LA |
| **C** | williamsmith1074@live.com | free | unknown | NO | UNKNOWN | Common name + numeric — low credibility |
| **C** | juan.dylan@yahoo.com | free | unknown | NO | UNKNOWN | First-last format |

**Tier counts:**
- Tier A (verified custom-domain prospects, viable at both prices): **3** — all pitched
- Tier B (custom-domain but marginal/wrong-rails): **3**
- Tier C (free-provider personal addresses, unverified): **14**

---

## Why $297 doesn't unlock the 14 free-provider subs (as much as I'd hoped)

I went into this analysis expecting the $297 price point to flip 5-8 of the free-provider subs from "non-viable" to "viable." After re-reading each enriched JSON, the answer is more humble: **$297 makes them ELIGIBLE but not EVIDENCE-BACKED.** The enriched data has zero positive signals on any of them — no LinkedIn, no website, no industry hint, no recent activity. The only data point is "they signed up for a free prompt pack at midastools.co between March and April."

The honest read: a $297 broadcast to 14 unknown personal addresses is **not a credibly-targeted play, it's a Hail Mary.** That's still better than zero shots — but it's not a portfolio of qualified prospects.

**What WOULD make Tier C viable** (none currently met):
- LinkedIn validation showing they're a solo professional in a vertical that pays $297 for AI training (coaches, consultants, real estate, freelance writers, agency owners, etc.)
- An open-rate signal from prior nurture emails indicating active engagement
- A single one-to-one personalized outreach attempt with industry-specific framing — gets a reply or doesn't, that's the qualifier

The current `.founder/tools/subscriber-enricher.py` doesn't do LinkedIn lookup. Manual research at 5 min/sub × 14 = 70 minutes — **that's the actionable next step IF Plan A ships May 10**, not a blocker for shipping it.

---

## Strategic Implications

### Plan A is worth shipping but is unlikely to clear KPI alone

The May 10 broadcast goes to ~20 active subs. With 3 already-pitched-at-$997 prospects (probably non-responsive, but might reply when the price drops to $297) + 17 unverified (1-3% reply rate ceiling for hard-sell broadcasts), we're looking at:
- **Best case:** 1 sale + 2-3 conversations
- **Median case:** 0 sales + 1 conversation
- **Worst case:** 0 sales + 0 conversations

Even the best case ($297 sale + 2 conversations) **doesn't clear the $997 KPI target** unless one conversation converts to the $997 audit upgrade.

### Plan B should start in parallel, not 30 days later

Current schedule: "Plan B fires June 9 if Plan A nets 0 sales 30 days post-launch."

This is the wrong sequencing. Reasons:
1. **Plan A's expected outcome is 0-1 sale, NOT 5-10 sales.** 30 days of waiting on a probabilistically-empty broadcast is a wasted month at this stage.
2. **Plan B (cold LinkedIn outbound to solo coaches) targets the audience our $997 hero was built for** — which is exactly the audience our existing list does NOT contain. Running them in parallel tests both the SKU pricing AND the new acquisition channel simultaneously.
3. **A 30-day delay on Plan B during which we already know Tier C is only ELIGIBLE but not VALIDATED** is just paying for hope.

### Recommended sequencing (proposed change)

| Date | Plan A (existing list, $297) | Plan B (cold LinkedIn, solo coaches) |
|------|-------------------------------|--------------------------------------|
| May 6 | Send 3 audit follow-ups | — |
| May 10 | If 0 audit replies → ship $297 SKU + broadcast to 20 subs | Begin 50-prospect LinkedIn research |
| May 11-15 | Reply-handling on broadcast | Personalize 50 cold DMs |
| May 15 | Day-5 broadcast metrics → continue or kill | Send first 25 cold DMs |
| May 22 | If 0 sales → kill broadcast cadence (no D2 send) | Send second 25 cold DMs + reply-handle wave 1 |
| May 29 | Plan A retro: kept or killed | Wave 1 reply-handling complete; Plan B retro |

Under this sequencing, if the $297 SKU itself is the wrong shape, **we know by May 22** instead of June 9. That's a 17-day acceleration on the kill-or-iterate signal.

---

## Decision Log Items

`DECISION_LOG: Plan A vs Plan B sequencing | A) Sequential per current schedule (B fires June 9) B) Parallel starting May 11 C) Plan B only, kill Plan A | B parallel | Plan A's expected outcome is 0-1 sale; 30-day wait for that signal is wasted time when Plan B targets a different audience entirely; running both tests SKU-pricing and acquisition-channel simultaneously | By May 22, we know whether Plan A's broadcast worked AND have first cold-LinkedIn reply data — 17-day acceleration vs sequential`

`DECISION_LOG: Tier C re-stratification at $297 | A) Drop them from broadcast (still non-viable) B) Include in broadcast unchanged (eligible but unverified) C) Spend 70min on LinkedIn lookups before broadcast to upgrade some to Tier A | B include unchanged | $297 = personal-spend tier, free-provider addresses are eligible; LinkedIn-lookup work is better spent on Plan B's 50 cold prospects than on 14 weak existing subs | Plan A broadcast May 10 reaches all 20 subs; replies tell us which Tier C are real`

---

## What I Did NOT Do (Deliberately)

- Did NOT send a Telegram update to Armando (per `armando-async-asks` — saving for May 10 decision pair session or sooner if a reply lands).
- Did NOT do the 70min × 14 LinkedIn lookups on Tier C subs. That's higher-leverage as Plan B prospect research, not Plan A targeting.
- Did NOT pitch any Tier B/C sub at $997 today. The window is still open on the 3 fired Apr 28 — wait for that signal first.
- Did NOT modify the Plan A broadcast (it's already targeted to all 20 active subs — the right call given Tier C analysis).

---

## Confidence

**70%.** The qualitative judgment is honest but I'm sizing reply-rates with no actual data — first $297 broadcast might convert 5%, not 1-3%. The Plan A vs Plan B parallel-vs-sequential argument is the most actionable finding and is robust under any reasonable reply-rate assumption (because even at 5% we'd see 1 sale, which doesn't clear $997 KPI).

**Falsification criteria:**
- If Plan A broadcast on May 10-11 nets ≥3 paid sales, my expected-outcome model was wrong; revise upward.
- If by May 15 we have 1-2 personalized 1-on-1 follow-ups from Tier C subs that convert, the Tier C model was wrong; consider per-sub research as actually-leveraged.
- If by May 22 cold LinkedIn outreach (50 DMs) yields zero replies, the Plan B audience hypothesis itself is wrong; pivot back to product flywheel.
