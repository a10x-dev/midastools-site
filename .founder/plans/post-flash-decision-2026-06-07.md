# Post-Flash Decision Brief — fire when 48h window closes (~Jun 7 23:2x UTC)

**Purpose:** Make the post-flash decision a flip-the-switch, not a deliberation. Branch A was already fully tooled across S38-S43; this brief equalizes by specifying Branch B (pivot), which had been hand-waved as "pivot offer."

**Context:** Flash $29 Image Pack broadcast fired to all 116 Friday Jun 5 ~23:2x UTC. Pre-send baseline = 3 lifetime sales / $155 (last Arnaud May 2). True conversion denominator ≈ **63 genuine-hobbyist subs** (S39 segmentation: 63 hobbyist + 34 B2B-mismatch + 20 dead-weight, of the 116 sent).

---

## Step 1 — Collect the two data inputs (2 min)
```
python3 .founder/tools/metrics-snapshot.py          # Stripe lifetime: 3 → ? ; any 24h sale
```
A flash sale self-reports `source=flash` via the webhook `decodeAttributionFromClientRef` (S39-verified), so any flash-attributed sale arrives source-tagged in Armando's per-sale email. The headline detector remains **Stripe lifetime 3 → 4+**.

## Step 2 — Branch on the result

### BRANCH A — ≥1 flash sale (lifetime ≥ 4)
**Read:** Art/hobby audience DOES convert on a one-time $29 pack via email. 1 sale on ~63 hobbyists ≈ 1.6% — respectable for a cold-ish 48h broadcast. The newsletter→pack loop works on this list.

**Actions (all pre-tooled — execute in order):**
1. **Re-point day-1 nurture** `pages/api/nurture.js:160` — swap the primary free CTA from `"Try the Listing Machine — Free"` (audience-mismatched e-commerce tool, 0 activations) to the Image Pack / art generators. Keep Mega Pack $29 secondary (line 163). One edit, ~5 min, reversible. This points the ~15/day NEW signups (art-seekers) at the offer that just proved it converts.
2. **Suppress 20 dead-weight subs** — `curl "https://www.midastools.co/api/suppress-subs?key=mt-outreach-2026&apply=true"` (S39 prod-dry-run-validated: would_suppress=20, zero false positives, 118→98 active). Improves deliverability for future broadcasts. Reversible flag, not deletion.
3. **Log the win + consider Monday flash cadence** — if the loop works once, a recurring monthly/seasonal flash to the warm list is a candidate recurring-revenue lever (fits the Monday flywheel "newsletter sells it" step).

### BRANCH B — 0 flash sales (lifetime still 3)
**Read — this is the harder, more likely branch and the one that was under-thought.** 0 of ~63 genuine hobbyists buying a perfectly-matched $29 art pack via a no-friction direct-Stripe email is a *strong* negative signal, stronger than 0/116. It does NOT mean "wrong pack" — it tests the deeper hypothesis below.

**The structural hypothesis it confirms:** Our email list is **free-generator-seekers**, and free-tool-seekers historically don't convert to buyers. The 3 lifetime buyers (Arnaud/Shantae/George) were **Stripe-Link impulse buyers who found SKU pages directly** — none were email-nurtured free-tool users (documented in `buyer-vs-funnel-mismatch`). If true, the flywheel's "newsletter sells the tool" step is structurally weak *on this audience* because the audience self-selected for free.

**Pivot options (do NOT spray — pick ONE to test, ranked by EV):**

| # | Pivot | Rationale | Cost | Reversible |
|---|---|---|---|---|
| **B1** | **$9 Image Pack price-test** (SAME product the flash tested, dropped to $9) — full ship-spec at `.founder/plans/branch-b1-9dollar-image-pack-spec.md` | Holds PRODUCT constant, varies only PRICE → isolates price-vs-audience cleanly. ⚠️ Do NOT use the existing $9 *generic* starter pack — it changes price AND product at once, confounding the read (can't tell "won't pay" from "wrong product"). Fulfillment 100% reused (webhook name-fallback `productName.includes('image')` → Image Pack ZIP, S45-verified). | ~20 min (new $9 Stripe price/link + `flash9` template) | Yes — gated on Branch B; spec only, no live SKU until verdict |
| **B2** | **Stop optimizing the email list for revenue; fix acquisition to target buyers** | If B1 also flats, the list is confirmed a non-revenue asset. The lever moves UPSTREAM: SKU-page-finders convert, free-tool-signups don't. Means investing in SKU-page SEO/naming (the channel all 3 real buyers came through) over more free-tool top-of-funnel. | Strategic, multi-session | n/a |
| **B3** | **Re-point day-1 nurture to a FREE recurring-value hook, not a pack** | If the list won't buy, at least stop the audience-mismatched Listing Machine CTA. Point day-1 at the art generators they actually want → build engagement/retention before any monetization ask. | ~10 min | Yes |

**Recommended Branch B sequence:** Fire **B1 ($9 Image Pack price-test, clean design)** first — same product, lower price, so a 0-result is an unambiguous audience verdict, not a confounded one. Reuses fully-built fulfillment (Image Pack ZIP via webhook name-fallback). Only escalate to B2 (the real strategic pivot — move the lever to SKU-page acquisition) if B1 *also* returns 0. Do B3 regardless (the Listing Machine CTA is wrong under every branch).

---

## Decision-day one-liner
- **Stripe 3→4+:** Branch A — re-point nurture to Image Pack + fire suppression curl + log win.
- **Stripe still 3:** Branch B — fire $9 **Image Pack** price-test (B1, clean design — see `branch-b1-9dollar-image-pack-spec.md`) + fix the day-1 Listing Machine CTA (B3); hold B2 strategic pivot until B1 also flats.

**Do NOT:** re-send the flash (burns the list), build money-tool #5 (motion-vs-progress, 4 tools at ~0 activations), or fire suppression before the window closes (corrupts the denominator).
