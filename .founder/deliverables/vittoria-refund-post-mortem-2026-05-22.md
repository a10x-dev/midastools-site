# Vittoria Refund Post-Mortem (Juniper Square, $49)

**Date**: 2026-05-22 (T+2 days post-purchase, T+~24-48h post-refund)
**Author**: Co-founder agent, Session 26
**Status**: Decision-support doc. Recommendations require Armando's strategic call.
**Reading time**: 6 min.

---

## TL;DR

Vittoria Reimers (VP People at Juniper Square) bought the `$49 AI Team Adoption Kit` on 2026-05-20 04:57 UTC, received a personalized champion-kit page at `/champion/vittoria-juniper-square`, and refunded the charge with no reason within ~24-48h.

Three findings, ranked by likelihood as the refund driver:

1. **🔴 Expectation gap (high confidence)** — Marketing page promises pre-built downloadable product ("50+ AI skills, 8 department playbooks, Notion template, Google Sheets included"). Reality is personalization-on-purchase deliverable with 24h SLA + 10 prompts. Asymmetric expectations → refund.
2. **🟡 Schema-only testimonials (medium confidence)** — Page contains 3 reviewBody strings + reviewCount: 27 in JSON-LD only, never rendered in page content. Same pattern Session 108 flagged on Mega Pack. Possible FTC compliance risk + may have eroded trust on second visit.
3. **🟢 Procurement / company-policy refund (low confidence but possible)** — Juniper Square is a $1.1B-valuation SaaS with formal vendor processes; a $49 expense on a corporate card from an unknown vendor may trigger automatic procurement rejection. Lower likelihood because she was the buyer (VP People = senior, has discretionary spend authority).

**Refund-without-reason** is the most ambiguous form of signal — we cannot distinguish #1 from #2 from #3 without direct engagement, which is forbidden per the 4-paying-customers-trust principle (do not contact buyer post-refund unless they initiate).

---

## What we know (Stripe + repo ground-truth)

| Fact | Source | Verified |
|---|---|---|
| Vittoria Reimers = VP People at Juniper Square | LinkedIn (S16 intel) | Yes |
| Juniper Square = $1.1B-valuation fund-admin SaaS, 865 employees | S16 research | Yes |
| Purchase: $49 on 2026-05-20 04:57 UTC via plink_1TKNnA → /thank-you?kit=team-adoption | Stripe API | Yes |
| Refund processed by Armando, no reason given | S24 pair note + Stripe charge marked REFUNDED | Yes |
| Personalized champion page shipped: /champion/vittoria-juniper-square | commit 2022158 | Yes |
| 10 prompts rendered + 7-Q survey + $199/mo Champion upsell on her page | lib/champion-prompts.js pe-fund-admin pack | Yes |
| Survey submission: 0 (no /api/champion-survey POSTs received) | KV / Resend | No new notification |
| Champion Monthly $199/mo sub conversion: 0 | Stripe `/v1/subscriptions?status=active` | Confirmed 0 active |

---

## What we don't know

- **Did Vittoria visit /champion/vittoria-juniper-square at all?** No analytics on that path (it's noindex,nofollow + likely never instrumented for visits separately from /api/track).
- **Did she compare /team-adoption-kit marketing copy vs the actual champion-page deliverable?** If yes, the expectation gap is almost certainly the trigger. If she refunded sight-unseen, the trigger is procurement/policy.
- **Was Armando's delivery email opened?** Resend `1f52942a` was sent — we don't have open-tracking enabled on outbound transactional from `armando@rooxai.com`.
- **Did anyone else at Juniper Square engage?** No additional Stripe attempts, no inbound emails, no survey submissions.

---

## The expectation gap, in detail

### What `/team-adoption-kit` page promises (verified via curl + repo read):

- Title: "AI Team Adoption Kit — 50+ Skills, 8 Department Playbooks | Midas Tools"
- Description: "50+ ready-made AI skills, 8 department playbooks, 15 tracking templates, and 5 onboarding guides. Roll out AI across your team without the chaos. $49."
- Hero claim: "50+ ready-made skills, 8 department playbooks, tracking templates, and onboarding guides"
- Specific deliverables advertised:
  - Customer Support skills (5 named)
  - Engineering skills (5 named)
  - HR/People Ops skills (5 named)
  - Finance skills (5 named)
  - Legal/Compliance skills (5 named)
  - "Notion template (plug and play)"
  - "Google Sheets version included"
  - "Quarterly AI Adoption Report template"
  - "Skill sharing templates"
  - "AI Office Hours agenda template"
  - "Step-by-step first prompt walkthrough"

### What the buyer actually receives (per stripe-webhook + thank-you mapping):

- Manual:true placeholder routing
- /thank-you?kit=team-adoption → "your kit is being personalized — delivery within 24h" message
- Personalized champion-page at `/champion/<token>` (if Armando authors the recipient profile)
- 10 prompts in the pack (per `lib/champion-prompts.js` `pe-fund-admin`)
- 7-question survey + $199/mo Champion upsell

### Gap analysis

- Page advertises ≥25 specific deliverables; buyer receives 10 prompts in a personalized layout.
- Page implies instant download ("Notion template (plug and play)" + "Google Sheets version included"); reality is 24h SLA + no Notion/Sheets export.
- Page testimonial implies pre-built product worked at scale ("Rolled out AI across our 40-person engineering org in a week using these playbooks"); the buyer cannot replicate that without the playbooks.

This is a textbook expectation-asymmetry refund driver. Even if Vittoria liked the personalized kit, the page→delivery delta is large enough to trigger a "this isn't what I bought" reaction in any rational consumer.

---

## The schema-only testimonial risk

`pages/team-adoption-kit.js` line 78-100 contains:

```json
"reviewCount": "27",
"review": [
  { "ratingValue": "5", "reviewBody": "Rolled out AI across our 40-person engineering org..." },
  { "ratingValue": "5", "reviewBody": "As Head of Operations, I needed a structured way to get 8 departments..." },
  { "ratingValue": "5", "reviewBody": "The AI Proficiency Assessment and usage leaderboard changed how our team thinks..." }
]
```

- The 3 review bodies and the count of 27 appear ONLY in JSON-LD schema (rendered to Google for SERP star-rating eligibility) — **NOT rendered anywhere on the visible page**.
- No author names attached to the schema-only reviews.
- Same pattern Session 108 flagged on `/ai-prompt-mega-pack` (3 reviewers David R., Michelle L., Carlos G. — also schema-only).

**FTC concern**: 16 CFR Part 255 (Endorsement Guides, 2024 update) requires testimonials to be "real consumers" with disclosure of any material connection. Schema-only reviews that are not displayed in page content and have no verified-buyer attribution may constitute "fake reviews" under §255.2, particularly the §465.7 rule (no "AI-generated consumer reviews") and §465.4 (no "consumer reviews that don't reflect the views of a real person") from the FTC's August 2024 final rule.

**The risk surfaces twice**:
- If Vittoria opened the source and noticed schema-only reviews with no in-page testimonials, the trust signal eroded.
- If an FTC sweep or competitor complaint surfaces this on any of our pages, the regulatory exposure is real.

**Recommendation**: audit all 17 kit pages for the same schema-only-review pattern. Armando confirms which (if any) reviews are from real customers; the rest must be removed or replaced.

---

## Decision tree for Armando (3 branches)

### Branch A — "Build real content for the 5 broken SKUs" (task `3400b90c` Path A)
- Effort: 20-40 hours per SKU × 5 = 100-200 hours total. Substantial.
- Pro: Eliminates expectation gap; page-as-shipped matches deliverable.
- Pro: Future Vittoria-class buyers get instant value, no refund risk.
- Con: 100-200h investment with N=1 evidence (one buyer, refunded) is high-risk burn.
- **Action items if chosen**:
  1. Start with `/team-adoption-kit` (the SKU that already produced a buyer signal).
  2. Build kit-content/team-adoption-kit/ with the 25 advertised deliverables. Extract Champion Playbook universals from `lib/champion-prompts.js` as the foundation.
  3. Build public/team-adoption-kit.zip.
  4. Wire pages/api/stripe-webhook.js KIT_MAP entry (remove manual:true flag).
  5. Audit + remove schema-only testimonials (or add real-customer attribution).

### Branch B — "Deactivate the 5 broken plinks + add waitlist signup" (task `3400b90c` Path B)
- Effort: 1-2 hours. Smallest.
- Pro: Eliminates legal risk + future refund risk on those 5 SKUs.
- Con: Removes 5 marketing surfaces from organic Google indexation.
- Con: Loses the demonstrated buyer-discovery channel (Vittoria found team-adoption-kit by role-named search).
- **Action items if chosen**:
  1. Stripe API: deactivate plinks `1TKgap, 1TKdTK, 1TKVLD, 1TKNnA, 1TKL1L`.
  2. Edit each page: replace "Buy $49" CTA with "Notify Me When Available" email capture.
  3. Add audit-template.js wiring with source=<sku>-waitlist for the partner-signal-monitor.
  4. Update sitemap.xml priorities to 0.5.
  5. Audit + remove schema-only testimonials on the 5 SKUs.

### Branch C — "Honest copy + manual fulfillment as the productized model" (task `3400b90c` Path C, partly done)
- Effort: 4-6 hours.
- Pro: Keeps the buyer-discovery channel + sets expectations honestly + matches what we actually deliver.
- Pro: Plan-agnostic if Armando decides later to build content (re-flip).
- Con: $49 for a personalization-on-purchase deliverable is below market for that kind of service (Levelupwithai $1,500 productized real-audit comparison).
- **Action items if chosen**:
  1. Rewrite hero/description copy on all 5 SKU pages: lead with "Personalized for your team, delivered within 24h" instead of "50+ ready-made skills".
  2. Replace the 25-deliverable specifics with the 10-prompt-per-niche reality + "Custom to your role/industry" framing.
  3. Audit + remove (or attribute) schema-only testimonials.
  4. Raise price to $97-$197 to match the productized-deliverable market (the Levelupwithai precedent).
  5. Add a clear "what you get within 24h" section above the buy button.

---

## What I will NOT do unilaterally

- Will not edit `/team-adoption-kit` page copy this session — Branch choice belongs to Armando per `3400b90c`.
- Will not remove schema-only testimonials this session — `pages/ai-prompt-mega-pack` has the same pattern; needs a coordinated audit + replacement strategy across all 17 kits.
- Will not contact Vittoria — refund-without-reason is the most-ambiguous signal precisely because we can't ethically probe further.
- Will not pre-build kit-content/team-adoption-kit/ — that's Branch A execution.

---

## What I recommend Armando do next (priority order)

1. **Decide the branch** (A / B / C) for the 5 broken SKUs. The post-mortem above is the input.
2. **Audit schema-only testimonials site-wide**. The FTC risk is independent of the Vittoria refund and worth a single-session sweep. If any of the 27+ reviews across our pages are from real customers, attribute them. If none are, remove the JSON-LD blocks entirely (we lose star-rating SERP display, gain compliance).
3. **Spot-check the other 4 broken SKUs (muse-spark, claude-code, reddit-lead-kit, cowork-mastery) for the same expectation-vs-delivery gap pattern**. Each one is a future Vittoria waiting to happen if it sells before the gap is closed.
4. **If continuing Champion play**: build a public `/champion-monthly` page with HONEST positioning (24h delivery, personalized to role/company, $199/mo for ongoing weekly tips + monthly drops). Use the Vittoria signal as proof-of-concept reference (with her permission), not the team-adoption-kit page misframing.

---

## Sources

- `pages/team-adoption-kit.js` lines 31-100 (page promises + schema-only reviews)
- `pages/api/stripe-webhook.js` KIT_MAP (manual:true routing for plink_1TKNnA)
- `lib/champion-prompts.js` pe-fund-admin pack (the 10 prompts actually delivered)
- Stripe API `/v1/charges?limit=15` (refund verification, $49 on 2026-05-20 04:57 UTC marked REFUNDED)
- `.founder/STATE.md` Session 16 (Vittoria pivot + champion-kit ship)
- `.founder/STATE.md` Session 26 (refund verification + bottleneck reframe)
- S25 pair-session notes (Vittoria payment context)
- S24 pair-session note ("Vittoria asked for a refund I already did, the refund no extra reason added")
- Session 108 memory entry (Mega Pack schema-only reviews pattern, flagged for FTC compliance)
- FTC 16 CFR Part 255 + August 2024 final rule on AI-generated/fake reviews
