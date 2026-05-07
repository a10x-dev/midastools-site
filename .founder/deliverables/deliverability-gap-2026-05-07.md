# Deliverability Gap — 5 Kits Sold But Cannot Be Fulfilled

**Date**: 2026-05-07 (Session 25, T+~20h after Session 159 attribution shipped)
**Severity**: 🟡 Medium (latent — zero sales to date, but real revenue surface area we cannot fulfill)
**Discovered while**: Investigating task `e82e87d6` (add 6 missing kit slugs to thank-you.js KITS map). Discovered the slugs are missing not by accident but because the products themselves don't exist as deliverables.

---

## TL;DR

5 active Stripe payment links currently sell products that have **no content directories, no ZIP files, and no fulfillment path**. Anyone who pays for these would land on `/thank-you?kit=<slug>` → fall through to OpenClaw Starter Kit fallback (wrong product). Zero sales to date so this is latent risk, not active customer harm — but it's a real catalog leak that needs a strategic call.

This is a deeper version of the bug Session 158 fixed for Arnaud (he paid for Mega Pack and saw OpenClaw on /thank-you because his plink slug was wrong). For these 5 kits, fixing the slug isn't enough — there's no content to deliver.

---

## The 5 broken SKUs

| Kit | Plink ID | Page exists? | Content dir? | ZIP file? | Fulfillment status |
|---|---|---|---|---|---|
| Meta Muse Spark Prompt Kit | `plink_1TKgapAdkDx8xZMkxH6994A5` | ✅ /muse-spark-kit | ❌ | ❌ | None |
| Claude Code Mastery Kit | `plink_1TKdTKAdkDx8xZMkd1Zjye59` | ✅ /claude-code-kit | ❌ | ❌ | None |
| Reddit Lead Generation Kit | `plink_1TKVLDAdkDx8xZMkJzKwgrfQ` | ✅ /reddit-lead-kit | ❌ | ❌ | None |
| AI Team Adoption Kit | `plink_1TKNnAAdkDx8xZMkWZMpr8gW` | ✅ /team-adoption-kit | ❌ | ❌ | None |
| Claude Cowork Mastery Kit | `plink_1TKL1LAdkDx8xZMkep0Q0e4e` | ✅ /claude-cowork-kit | ❌ | ❌ | None |

Each kit has a marketing page advertising specific deliverables, but `kit-content/<slug>/` doesn't exist and `public/<slug>.zip` doesn't exist. The webhook KIT_MAP references `muse-spark-kit.zip` but that file isn't in /public/.

---

## Why this matters

If even ONE buyer comes through (say from organic search or a future cold-outreach campaign), the post-purchase experience is:

1. Pay $39 (or whatever)
2. Land on `/thank-you?kit=claude-code` (or other slug)
3. `kit = KITS[kitKey] || KITS['starter']` — falls through to OpenClaw Starter Kit
4. Click download → gets `openclaw-starter-kit.zip` instead of what they paid for
5. Realize they got the wrong product → request refund + leave bad review

This is exactly Arnaud's experience pattern, and Session 158 confirmed it as a real failure mode. The trust damage from "I paid and got a different product" is harder to recover than from "site was broken at checkout".

---

## Three viable paths (decision required)

### Path A — Build the content (20-40 hours total, multi-session)
Use the existing 13-kit content template (6 markdown files + README per kit). Package each as a ZIP. Add to KITS map + webhook KIT_MAP. Ship.

**Pros**: Catalog stays at 21 SKUs, no revenue ceiling reduction, leverages existing infrastructure.
**Cons**: 4-8 hours per kit × 5 = 20-40 hours of work for products that have zero proven demand. Sequencing risk: spending 20+ hours of build cycles into the dark when bottleneck is market_understanding, not catalog breadth.

### Path B — Deactivate the 5 plinks (15-30 minutes)
Set them inactive via Stripe API. Keep the marketing pages live (they still drive SEO equity for "claude code prompts" / "reddit lead gen" etc) but the buy buttons become inert. When clicked, lead to a "currently in development — join waitlist" form.

**Pros**: Eliminates risk surface immediately. Reversible — flip back to active when content ships. Validates demand via waitlist signups before building.
**Cons**: Reduces catalog from 21 → 16 active SKUs. Slight SEO hit if pages get demoted by removing structured-data prices. Marketing copy needs editing.

### Path C — Add manual-fulfillment placeholder (1-2 hours)
Add the 5 slugs to KITS map with `file: null` + a "your kit is being prepared, expect download link from iam@armando.mx within 24h" message. Add a webhook hook that emails Armando ANY purchase of these 5 plinks. Manual delivery via Resend until content ships.

**Pros**: Buyer sees the right product name, doesn't fall to OpenClaw fallback, gets graceful "manual fulfillment" experience. Preserves catalog. Validates demand without heavy build.
**Cons**: Operational debt (Armando has to manually fulfill within 24h SLA). If 5+ sales come in, that's real labor. Trust risk if SLA missed.

---

## My recommendation: **Path B (deactivate plinks)** with a fallback to Path A only if waitlist signups prove demand

**Rationale**:
- Bottleneck right now is market_understanding (severity 6/10), not catalog breadth. 21 SKUs vs 16 SKUs doesn't materially change acquisition or conversion.
- The 5 kits in question target dev/team audiences (Claude Code, Cowork, Team Adoption, Reddit Lead, Muse Spark) — adjacent to but distinct from our 2 actual buyers (Shantae=IT-director, Arnaud=AI-finance).
- Building 5 kits speculatively when bottleneck is "do we know who our customers are?" is exactly the motion-vs-progress trap.
- Waitlist signups on the inert pages would give us actual demand signal cheaper than building.

**Concrete next-session action if Armando approves Path B**:
1. Fetch the 5 plinks via Stripe API, set `active: false`
2. Update kit pages to swap `<a href="https://buy.stripe.com/...">` for `<form action="/api/waitlist">` capturing email + slug
3. Wire `/api/waitlist` to push into a new `waitlist` blob (or extend subscribers blob with `interested_in: <slug>` field)
4. Update `pages/kits.js` catalog to mark these 5 as "Coming Soon — Join Waitlist"
5. Total estimated time: ~2 hours

**If Path A is preferred**: pick ONE kit to build first based on most search volume (likely Claude Code Mastery — overlaps our existing /claude-code-kit and /claude-cowork-kit pages + the Opus 4.7 trend cluster), validate it sells, then do the others.

---

## Connection to other open work

- Reinforces task `e82e87d6` (add 6 missing kit slugs to KITS map) — task description should be updated: "the 6 slugs cannot just be added because the underlying products don't exist; this is a deliverability gap not a routing gap."
- Reinforces Session 159's attribution work — the new attribution emails will catch any sales-via-broken-plinks the moment they happen, so we'd see the failure in real-time rather than days later.
- Connects to `73f15c24` (client_reference_id passthrough) — already done (auto-rewrite via useStripeAttribution hook).

---

## Confidence: 90%

Verified by direct Stripe API call (`audit-payment-links.py`), direct filesystem inspection (`Glob` on `kit-content/` + `public/`). The 5 broken plinks are real, the missing content is real, the OpenClaw fallback path is real (re-confirmed by reading `pages/thank-you.js` line 138-139).

Lower than 95% because I haven't independently verified Stripe API access works to flip these inactive without breaking other catalog state — that's the actual ship-day risk.
