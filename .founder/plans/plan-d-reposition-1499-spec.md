# Plan D — Reposition AI Clarity Assessment to $1,499

**Status:** STUB SPEC — pre-built Session 155 (May 4) post-ICP-intel.
**Source intel:** `.founder/deliverables/ai-audit-icp-intel-2026-05-04.md` — 21 cited sources, 8 named competitors, 4 documented buyer objections.
**Companion:** `.founder/plans/ai-audit-deliverable-spec.draft.md` — the 4-artifact deliverable copy (drop-in JSX, FAQ updates).
**Pre-build status:** STUB ONLY. Plan D requires 4 sub-decisions; full pre-build deferred until Armando picks direction on May 10.

---

## Why Plan D exists (vs Plan A or B)

The May 4 ICP intel rejected both pre-built plans on data:

| Plan | Verdict | Reason |
|---|---|---|
| Plan A — $297 reprice | ❌ NOT supported | Price isn't the blocker. Cheaper reinforces "generic advice" objection. Lands below AgentsLabs' €97 tripwire while keeping $997-tier scope = incoherent. |
| Plan B — cold LinkedIn at $997 | ❌ NOT supported | Wrong channel. LinkedIn is a closing channel for already-warm niche prospects, not a discovery channel for cold solopreneurs. |
| Plan C — kill | ⚠️ Premature | Category is real, transacting via 8+ named competitors. 6 days + 3 cold pitches is not a market test. |
| **Plan D — reposition to $1,499** | ✅ Recommended | Match the productized real-audit tier ($750–$1,999 modal $1,500). Address the documented "vague deliverables" objection with a 4-artifact spec. Distribute through community channels where ICP actually aggregates. |

---

## Plan D scope — 4 sub-decisions (each needs Armando's voice)

### Sub-decision 1 — PRICING
**Recommended:** $1,499 (matches productized real-audit modal $1,500; sits cleanly between Promptful $750 and ChatDoctor $1,999).
**Alternatives:**
- $1,250 — slight discount to Promptful $750 + ChatDoctor $1,999 midpoint
- $1,997 — match ChatDoctor's premium tier exactly (signals "real audit" but reduces volume)
- Tiered: $497 lite + $1,499 full + $2,997 premium (gives buyer a ladder, but adds operational complexity)
**Default if no input:** $1,499 single price.

### Sub-decision 2 — DELIVERABLE SPEC
**Recommended:** ship the 4-artifact spec from `.founder/plans/ai-audit-deliverable-spec.draft.md` as-is.
**Alternatives:**
- 5-artifact (add "ROI projection" as a separate artifact) — closer to Promptful's deliverable dump but less tight
- 3-artifact (drop human-in-loop design) — faster to deliver, but loses the differentiator that addresses the #1 buyer objection
**Default:** 4-artifact, drop-in spec already drafted.

### Sub-decision 3 — TRIPWIRE FRONT-DOOR
**Recommended:** ship a **$97 async AI Quick-Audit** as a separate SKU. Buyer fills a 12-question intake form (already drafted at `.founder/plans/mini-audit-intake-form.md`), gets back a 1-page workflow map + AI-readiness score for ONE workflow + 1 recommendation. 72-hour turnaround. No call.
**Why:** matches AgentsLabs €97 / Promptful $175 expectation. The 3 cold pitches at $997 didn't reply because there was no $97 step before $997. Tripwire qualifies, 5–10× more replies expected.
**Alternatives:**
- $197 (matches Audity $197/mo) — slight premium positioning
- No tripwire — go direct to $1,499 only
**Default:** $97 async tripwire.

### Sub-decision 4 — DISTRIBUTION CHANNEL
**Recommended:** community-first, NOT cold LinkedIn:
1. **SmarterX Slack / Marketing AI Institute community** (10K+ members) — engage in existing threads, no DMs first
2. **AI For Small Business Substack** — guest post pitch with a sample workflow map artifact
3. **Coachvox AI newsletter** — paid sponsorship inquiry or guest contributor pitch
4. **r/smallbusiness "how are you using AI" mega-threads** — non-spammy comment engagement, link only when directly relevant
5. **Late Checkout (Greg Isenberg)** — productized-service buyers; engage with replies on his Substack first
**Cold LinkedIn caveat:** acceptable ONLY for pre-qualified niche prospects (e.g. ops/team leads in healthcare/legal/finance), not solopreneur-spray. Defer until first 5 community-engagement entries logged.
**Alternatives:**
- LinkedIn-only (Plan B) — explicitly rejected by intel
- Cold email — currently 0 replies on 3 fired pitches; same shape as Plan B
- Twitter/X — not validated by intel; no named competitor uses it as primary channel
**Default:** community-first per recommended sequence above.

---

## Plan D ship-day checklist (when triggered)

- [ ] **Stripe SKU:** create $1,499 product + price + payment link via API (~10 min — pattern from `.founder/plans/api-setup-mini-audit.draft.js`, swap price). Add `kit_type=clarity-assessment-v2` metadata for webhook routing.
- [ ] **Tripwire SKU:** create $97 product + price + payment link via API (~10 min — separate SKU, separate page).
- [ ] **`/ai-audit` page edit:** swap deliverable section to 4-artifact JSX from `ai-audit-deliverable-spec.draft.md` (~30 min). Update price to $1,499. Update FAQ schema.
- [ ] **`/ai-quick-audit` new page:** clone `pages/ai-audit.js` structure for the $97 tripwire (~45 min). Single-workflow scope, async-only, 72h SLA.
- [ ] **Webhook routing:** extend `pages/api/stripe-webhook.js` per the diff at `.founder/plans/api-stripe-webhook-mini-audit.diff.md` (~20 min) — add 2 new KIT_MAP entries (clarity-assessment-v2 + quick-audit-v1).
- [ ] **Sitemap + IndexNow:** add 2 new URL entries, submit (~5 min).
- [ ] **Email body updates:** rewrite May 6/8 follow-up bodies to reference the 4 artifacts + the new $97 tripwire as a soft alternative (~30 min, but optional — depends on whether window is still open).
- [ ] **Community-engagement plan:** identify first 5 Slack threads / Substack pitches / Reddit comments — no posting yet, just intel (~60 min).
- [ ] **Build + deploy + verify:** ~10 min.
- [ ] **Decision gate update:** push next kill-or-iterate decision from May 10 to **May 20** (10+ pitches at the new positioning).

**Total ship-day effort:** ~3.5 hours. Most of the heavy lifting was already pre-built in Sessions 151-152 (Stripe API draft + webhook diff + intake form + page page-mini-audit pattern).

---

## Kill criteria for Plan D (hardcoded)

If by **May 25** (15 days post-ship):
- 0 paid sales of $1,499 audit AND
- 0 paid sales of $97 tripwire AND
- <10 replies across community-engagement entries

→ **Kill**. The category isn't reachable through community distribution at this price either, and we've exhausted the named-competitor pattern. Pivot to a different SKU type entirely.

If by May 25 we have:
- ≥1 paid sale (any tier) OR
- ≥3 inbound qualified DMs from community engagement

→ Continue. Double down on whichever channel produced signal.

---

## What's NOT pre-built (deliberately)

- Full Stripe API call (gated on Sub-decision 1 — pricing)
- Page copy edits (gated on Sub-decision 2 — deliverable scope)
- Tripwire SKU + page (gated on Sub-decision 3 — yes/no on tripwire)
- Community-engagement target list (gated on Sub-decision 4 — channel mix)

Per `pre-build-vs-intel-balance` principle: stub-pre-build only until strategic alignment. Each sub-decision is reversible and small (~10–60 min each), so wait-for-alignment cost is low.

---

## Decision-day reference summary

When Armando reviews this on May 10, he should:
1. Read this stub + the ICP intel deliverable + the 4-artifact spec draft (~10 min).
2. Pick: A / B / C / D (or hybrid).
3. If D: confirm or override each of the 4 sub-decisions (~5 min).
4. Greenlight ship — I execute the ~3.5 hour ship-day checklist.

End-state: a single-day execution, not a multi-day deliberation.
