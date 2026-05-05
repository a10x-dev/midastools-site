# Revenue Ledger Discovery — May 5, 2026

**Trigger**: Armando got a Stripe transfer notification at ~16:00 local. Asked to confirm what was sold.

**Confidence**: 🟢 95% — every fact below verified directly via Stripe API (charges, prices, products, checkout-sessions endpoints) and Stripe-hosted receipt URLs.

---

## TL;DR

The transfer = the **Apr 29 $97 sale** clearing to Armando's bank ($1,568 MXN payout, Stripe holds ~6 days for new accounts). While investigating, surfaced **$155 in lifetime revenue across 3 paying customers** that the dashboard had been reporting as $0 for 38+ sessions. Two of the three sales happened in the last 7 days — revenue is accelerating, not flatlined. Five strategic sessions (151-155) were planned on a false-zero-revenue premise. The May 10 audit-decision frame must be revisited with this data.

---

## 1. The Sale Ledger (Stripe-confirmed)

| Date (UTC) | Customer | Product | SKU | Amount | Payment Intent |
|---|---|---|---|---|---|
| 2026-05-02 08:05 | Arnaud Demes (arnaud.ademes@gmail.com) | **AI Prompt Mega Pack** | `prod_UCeQWrkY2zDGZV` / `price_1TEF7tAdkDx8xZMk1O7Jp6Z4` | $29.00 USD | `pi_3TSYXnAdkDx8xZMk0CF0drTM` |
| 2026-04-29 13:50 | Shantae Clinton (sclinton06@yahoo.com) | **MidasTools All Kits Bundle** | `prod_UCL9ktPNy9o7M1` / `price_1TDwTbAdkDx8xZMkSqiThJOd` | $97.00 USD | `pi_3TRYVcAdkDx8xZMk0mLcNsRM` |
| 2026-03-13 15:57 | George Nelson (nelson.george.edward@gmail.com) | **OpenClaw Entrepreneur Starter Kit** | `prod_U1mLj4b8XOtuDb` | $29.00 USD | `pi_3TAY4EAdkDx8xZMk1SgSJhv2` |

**Total lifetime revenue (Stripe-net of fees deducted by Stripe at payout): $155.00 USD gross / $1,568.08 + $476.80 = $2,044.88 MXN paid out.**

Two failed attempts also recorded for George Nelson on Mar 13 (preceding the successful one) — typical card retry pattern, no fraud signal.

---

## 2. Why we didn't see this for 38 days

**Root cause: `metrics-snapshot.py` only ever queried a 24h window.** Every Stripe API call used `created[gte] = now - 86400`. Any sale older than 24h disappeared from the snapshot. State DB carried `Revenue: 0` despite three real charges sitting in Stripe.

**Cascade:**
- Session 108 (Apr 17) onward — repeatedly asserted "$0 revenue, 0 sales" in strategic memos.
- Sessions 148-155 — built the May 10 "kill-or-iterate" decision frame on the false-zero premise.
- Session 154 — recommended Plan D ($1,499 audit reposition) partly because "the prompt-pack flywheel hasn't produced a single sale in 38 days."
- **Truth: the prompt-pack flywheel produced 2 sales in the last 7 days.**

**Fix (shipped this session)**: `metrics-snapshot.py` now also paginates lifetime charges, tracks `lifetime_succeeded` + `lifetime_revenue_cents` + `lifetime_last_sale`, and uses lifetime delta (not 24h delta) for the NEW-SALE ping signal. Verified via `python3 .founder/tools/metrics-snapshot.py --dry` → outputs `Stripe LIFETIME: 3 sale(s), $155.00 / most recent: $29.00 on 2026-05-02 from arnaud.ademes@gmail.com`.

---

## 3. Two-product naming collision (cleanup task)

There are **two distinct paid SKUs** that have been treated as one in our marketing copy:

| Internal name | Stripe product ID | Price | Page |
|---|---|---|---|
| AI Prompt Mega Pack | `prod_UCeQWrkY2zDGZV` | **$29** | `/ai-prompt-mega-pack` |
| MidasTools All Kits Bundle | `prod_UCL9ktPNy9o7M1` | **$97** | (none I could find — bought via direct payment link `plink_1TDwTmAdkDx8xZMkmxB9yn55`) |

Memory references "$97 Mega Pack" repeatedly. Telegram threads reference "Mega Pack $97." But the page `/ai-prompt-mega-pack` actually sells the $29 SKU. The $97 SKU was sold via a payment-link without a public landing page (or via an old deprecated page).

**Implications:**
- Shantae Clinton (Apr 29 $97 sale) reached a Stripe payment link without a landing page — somebody on the team must have shared the link directly OR it's still wired into a CTA we haven't audited. Worth tracing.
- "AI Prompt Mega Pack" page conversion data is being attributed to a $29 product not a $97 product. ROI math on those visitors is wrong by ~3.3×.

---

## 4. Implications for the May 10 audit decision

The Plan D recommendation (Session 154/155) was framed against "$0 revenue / no product traction." With the corrected baseline:

**Old frame (false):** "Audit experiment is the only revenue path. No product is selling. Ship audit at $1,499 or kill the project."

**New frame (true):** "Prompt-pack portfolio is generating ~$25/week run-rate (2 sales in last 7 days × ~$63 avg) at $0 marketing spend. Audit experiment is an *additional* revenue path being tested in parallel. Question for May 10 is now: 'audit ROI vs. doubling-down on what's already working at low volume.'"

**Specific changes to recommend on May 10:**

1. **Don't kill the prompt-pack flywheel.** It's working at low volume. The next-best lever is adding traffic, not changing pricing or replacing the offering.

2. **Trace the Apr 29 + May 2 customer journeys.** Highest-leverage open question: how did Shantae Clinton + Arnaud Demes find us? UTM tracking in checkout sessions can answer this. If gist → page → checkout, the gist flywheel deserves more investment. If direct/email/referral, that's a different funnel to amplify.

3. **Audit experiment should still test, but as portfolio addition.** The $1,499 reposition is still the right call IF we ship the 4-artifact deliverable spec to address the trust objection. But it's no longer "make-or-break for the company" — it's "additional SKU on top of working prompt-pack revenue."

4. **Fix the two-product naming collision.** 30 min of work. Could meaningfully change conversion math by clarifying what `/ai-prompt-mega-pack` actually sells.

---

## 5. Open investigations (next priority queue)

🔴 **HIGH**: Trace Apr 29 + May 2 customer attribution. Need: checkout-session UTMs, prior email-subscription status (were they on our 20-sub list before purchase?), referrer if available. Tools: Stripe checkout-session API + `/api/status` for sub-list cross-reference.

🟡 **MEDIUM**: Audit which CTAs link to the $97 All Kits Bundle (`plink_1TDwTmAdkDx8xZMkmxB9yn55`). Grep the codebase for that plink ID to find which pages still funnel there. If it's a deprecated link still wired in, decide whether to keep it active or kill it in favor of `/ai-prompt-mega-pack` (which sells the $29 SKU).

🟡 **MEDIUM**: Determine refund-window for the 3 customers. Are any past the 30-day guarantee? Mar 13 customer is past it; Apr 29 customer's 30-day window expires May 29; May 2 customer's expires Jun 1. Refund risk is bounded.

🟢 **LOW**: Re-evaluate the May 10 audit-decision deck with corrected revenue context. Wait until Armando weighs in before drafting.

---

## 6. What I did NOT do (deliberately)

- **Did NOT email any of the 3 customers.** They are real paying customers; any unsolicited contact (even a "thank you" or "how's it going?") could read as spam without Armando's explicit ok and could trigger a chargeback risk.
- **Did NOT change marketing copy on `/ai-prompt-mega-pack`.** Premature without strategic call on which SKU should be the canonical Mega Pack.
- **Did NOT redraft the May 10 audit deck.** Strategic call belongs to Armando.
- **Did NOT update homepage or any public-facing surface.** Pure intel session.

---

## 7. Recommendations summary table

| Priority | Action | Owner | Eff |
|---|---|---|---|
| 🔴 | Trace Apr 29 + May 2 customer-attribution | Soul | 30 min next session |
| 🟡 | Audit `plink_1TDwTm` references in codebase | Soul | 15 min next session |
| 🟡 | Fix two-product naming collision (memory + sitemap + page copy) | Soul + Armando ack | 30-60 min |
| 🟢 | Revisit May 10 audit decision frame with corrected revenue context | Armando + Soul | discussion-time |
| 🟢 | Send arnaud.ademes / sclinton06 a "how's the kit?" check-in to invite reviews/testimonials | Armando approves | 15 min |

---

**Authored**: Soul (Research Analyst), Session 156, May 5, 2026 ~16:30 local.
**Sources**: Stripe API direct (charges, payment_intents, prices, products, checkout/sessions, payouts, balance_transactions endpoints), Stripe-hosted receipt URLs, internal codebase grep, MEMORY.md cross-reference.
