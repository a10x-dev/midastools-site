# Branch B1 Execution Spec — $9 Image Pack clean price-elasticity test

**Status:** PRE-BUILT SPEC ONLY. Nothing live. Execute ONLY if the flash window closes with Stripe still at 3 sales (Branch B). Do NOT create the live SKU before the verdict — it prejudges Branch B and could cannibalize the $29 price if Branch A fires.

**Why this supersedes the brief's original B1 (existing $9 generic starter pack):**
The original B1 re-broadcasts the existing `/starter-pack` ($9, plink `fZueVcb8rgXv3ysc8acMM0t`, generic 20-prompt pack). That changes **two variables at once** — price ($29→$9) AND product (Image Pack→generic prompts). A 0-result is then confounded: you can't distinguish "this list won't pay at all" from "wrong product at any price." Since the whole reason we're in Branch B is an audience-fit question, re-introducing a product-fit confound destroys the test's diagnostic value.

**The clean design:** hold the PRODUCT constant (the exact Image Pack the flash tested) and vary ONLY price ($29 → $9). Now the read is unambiguous:
- **Some buy at $9:** it's **price**, not audience. The list has buyers; the $29 anchor was just too high for free-seekers. → pursue price-laddered offers to this list.
- **0 buy at $9 either:** it's **audience**, not price. 0 of ~63 hobbyists at a 70%-off price on a perfectly-matched product = the list is structurally a non-revenue asset. → escalate to **B2** (move the lever upstream to SKU-page acquisition, the channel all 3 real buyers came through). This is a *much* stronger, cleaner signal than the confounded version.

---

## Pre-verified fulfillment facts (checked at source S45, Jun 6)
- `public/ai-image-prompt-pack.zip` exists on disk (65,939 bytes).
- **Webhook auto-fulfills via name match:** `pages/api/stripe-webhook.js:415` — `if (productName.includes('image')) return KIT_MAP['image-prompt-pack']`. So a new Stripe product whose name contains "Image" delivers the Image Pack ZIP with **zero** new KIT_MAP or PAYMENT_LINK_MAP entries.
- `pages/thank-you.js:56` routes the `image-prompt-pack` slug → same ZIP. After-completion redirect to `/thank-you?kit=image-prompt-pack` therefore fulfills instantly on-page too.
- Net: the ONLY new things to build are (1) a $9 Stripe price + payment link, (2) a $9 flash broadcast template. Fulfillment is 100% reused.

## Ship checklist (execute ONLY on Branch B verdict — ~20 min)
1. **Create the $9 SKU** (Stripe API, key at `.founder/.stripe_key`):
   - Simplest clean path: new product `"AI Image Prompt Pack — $9 Flash"` (name MUST contain "Image" so the webhook name-fallback fulfills) + one-time price `unit_amount=900 usd` + payment link.
   - Payment link `after_completion`: **redirect** to `https://www.midastools.co/thank-you?kit=image-prompt-pack` (NOT hosted_confirmation; .co not .com — per stripe-plink-audit-before-launch).
   - Set `metadata.kit_type=image-prompt-pack` on the price/link for defensive routing in addition to the name-fallback.
   - Run `python3 .founder/tools/audit-payment-links.py` → confirm 0 broken before broadcasting.
2. **Add a `flash9` broadcast template** to `pages/api/nurture.js` — clone the existing `flash` template, swap headline/price to $9, point CTA at the new $9 plink wrapped in `tagNurture(LINK, 'flash9')` so the sale self-reports `source=flash9` (distinct from the original `flash` attribution). Keep the same audience-coherent body (names the free generators they used, one inline Ghibli prompt). Suggested subject: **"24h: the $29 Image Pack is $9 today"** — explicitly anchors against the price they just saw, making this a clean price-drop signal to the reader, not a new product.
3. **Preview** to iam@armando.mx: `?broadcast=true&template=flash9&to=iam@armando.mx` → confirm HTTP 200 + correct render.
4. **Fire** `?broadcast=true&template=flash9` to the list. (Suppress the 20 dead-weight FIRST if not already done — order doesn't corrupt anything post-window.)
5. **Watch** Stripe lifetime + any `source=flash9` per-sale email over 24-48h.

## Denominator + read
- Same ~63 genuine-hobbyist denominator (S39 segmentation).
- **≥1 sale at $9:** price-sensitivity confirmed → the list buys, just cheap. Consider permanent $9-anchor laddered offers + keep the warm-list flywheel alive.
- **0 at $9:** audience confirmed non-revenue → **B2** (the real strategic pivot: stop optimizing the email list for revenue; invest in SKU-page acquisition/SEO/naming, the channel all 3 real buyers used). Do NOT keep price-cutting below $9 — the floor has spoken.

## Do NOT
- Create the live $9 SKU before the Branch B verdict (prejudges + cannibalizes $29 under Branch A).
- Re-send the original $29 flash (burns the list).
- Use the existing generic $9 starter pack for this test (re-introduces the product-fit confound this spec exists to remove). The generic tripwire stays available as a *separate* evergreen offer, not as the B1 price-test instrument.
