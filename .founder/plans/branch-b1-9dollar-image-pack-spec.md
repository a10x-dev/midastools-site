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

---

## Pre-written `flash9` template (paste into `pages/api/nurture.js` step 2)

Cloned from the live `flash` template (`nurture.js:476-520`, structure verified S51 Jun 6). Product held constant (Image Pack), **only price varies $29→$9**, anchored explicitly against the $29 they saw 2 days ago so it reads as an honest final price-drop, not a new product. Distinct `flash9` attribution tag so the sale self-reports `source=flash9`.

**One pre-flight edit before pasting:** define `FLASH9_LINK` = the $9 payment link created in step 1. Add it near the other link constants at the top of `nurture.js` (alongside `IMAGE_PACK_LINK`). The template below references `FLASH9_LINK` — if you paste the template without defining the constant, the build throws (good — fails loud, not silent-wrong).

```js
  flash9: {
    subject: "24h: the $29 Image Pack is $9 today",
    html: (source) => wrapEmail(`
      <div style="background:linear-gradient(135deg,#7C3AED,#4C1D95);border-radius:16px;padding:20px 24px;margin:0 0 24px;color:#FFF;text-align:center;">
        <div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:#FCD34D;margin-bottom:4px;">⏰ 24 HOURS ONLY</div>
        <div style="font-size:22px;font-weight:800;line-height:1.2;">AI Image Prompt Pack — $9</div>
        <div style="font-size:13px;color:#DDD6FE;margin-top:6px;">150+ ready-to-paste prompts. The lowest it'll ever be.</div>
      </div>

      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Two days ago this was $29. Today it's $9.</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;">You've been using the free Pet Portrait, Ghibli, and Action Figure generators. The pack is the same 150+ prompts behind every viral style — and right now it's the price of a coffee.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>The AI Image Prompt Pack has 150+ prompts across every viral style</strong> — no generator, no steps, just copy and paste:</p>

      <div style="background:#F3F4F6;border-left:4px solid #7C3AED;border-radius:8px;padding:20px 24px;margin:24px 0;">
        <p style="font-size:14px;line-height:2;color:#374151;margin:0;">
          ✅ <strong>Pet portraits</strong> — Royal, Ghibli, Action Figure, Trading Card, Funko (12 styles)<br/>
          ✅ <strong>Yourself as a character</strong> — Superhero, Cyberpunk, Anime, Pixar, Oil Painting<br/>
          ✅ <strong>Product shots</strong> — For your e-commerce, Etsy, DTC brand<br/>
          ✅ <strong>Social content</strong> — Thumbnails, hooks, viral templates<br/>
          ✅ <strong>Ghibli worlds</strong> — 8 Miyazaki film styles, landscape + character<br/>
          ✅ <strong>Trending hooks</strong> — Barbie Box, Pet-as-Human, Tokyo drift swaps
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Works with <strong>ChatGPT, Midjourney, DALL-E, Flux, Stable Diffusion</strong>. Instant download. No subscription.</p>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:24px 0 8px;"><strong style="color:#111827;">One of the 150 — try it right now:</strong></p>

      <div style="background:#0F172A;border-radius:10px;padding:18px 20px;margin:8px 0 20px;">
        <p style="font-size:12px;line-height:1.7;color:#E5E7EB;margin:0;font-family:'SF Mono',Monaco,monospace;">
          A Studio Ghibli-style anime portrait of a <span style="color:#FCD34D;">[GENDER]</span> <span style="color:#FCD34D;">[AGE RANGE]</span> person with <span style="color:#FCD34D;">[HAIR]</span>. Wearing <span style="color:#FCD34D;">[OUTFIT]</span>. They are <span style="color:#FCD34D;">[ACTION]</span>. Expressive, large eyes with a gentle, contemplative expression. Soft, hand-painted animation style with delicate linework. Warm, natural lighting — golden hour. Background: <span style="color:#FCD34D;">[SETTING]</span>. Ghibli's signature warmth, nostalgia, and humanity. Aspect ratio 3:4.
        </p>
      </div>

      <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 24px;font-style:italic;">149 more like this in the pack — pet portraits, action figures, cyberpunk, trading cards, Funko, and more.</p>

      ${ctaButton("Grab the Pack — $9 →", tagNurture(FLASH9_LINK, 'flash9'), "24h only · 30-day money-back guarantee · Instant download")}

      <p style="font-size:15px;line-height:1.7;color:#374151;">This is the floor — $9 won't come around again. You've been getting free value from us for weeks; this is the easiest way to grab the whole library.</p>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">— The MidasTools Team<br/><em>P.S. If you want everything, the <a href="${tagNurture(BUNDLE_LINK, 'flash9-ps')}" style="color:#3B5FFF;">All Kits Bundle is $97</a> (normally $661).</em></p>
    `),
  },
```

**Notes on the copy choices (so a future edit doesn't undo them on purpose):**
- Subject + H1 both name the $29→$9 drop. This is deliberate: it makes the email an honest *price-drop* signal to anyone who saw the first flash, not a confusing new offer. It also keeps the diagnostic clean — the reader is choosing on price alone, exactly what B1 measures.
- "This is the floor — $9 won't come around again" — caps the price-training risk. We do NOT want to teach free-seekers that waiting always yields a deeper cut; the line frames $9 as terminal, not a step in a descending ladder. (Acceptable because B1 is a one-shot diagnostic, not a pricing strategy.)
- `flash9` / `flash9-ps` tags keep this campaign's attribution distinct from the original `flash` send, so `flash-sale-check.py` and the per-sale webhook email cleanly separate a $9 conversion from any late $29 straggler.
- The `flash` template stays untouched — `flash9` is additive, inert until fired (same safety profile as the dormant `CLAUDE_KIT_LINK` constant). Adding it does NOT touch the day-1 nurture or the already-fired `flash` send.

**Tomorrow's step 2 is now: define `FLASH9_LINK` + paste the block above + `npx next build` to confirm clean.** ~5 min instead of ~20.
