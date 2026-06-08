# Spec: Close the Value-Chain Loop — In-Product Image Gen + $4.99 HD Unlock (corrected)

**Status:** SPEC ONLY. Nothing live. Gated on Armando's direction + per-generation-spend greenlight.
**Corrected premise (verified in code Jun 8):** Our "art generators" output **text prompts**, not images — `navigator.clipboard.writeText(prompt)` → "Copy Prompt" → user goes to ChatGPT/Midjourney to make the actual image. We capture $0 at peak intent. This is NOT a gate-on-existing-image (there is no image); it is a **product pivot to generate the image ourselves and sell the HD result** (the Lensa model).

**We already own the capability:** `.founder/.gemini_key` (Nano Banana / Gemini image gen) is on disk + proven (7 ad-creative PNGs in `public/reddit-ad-v*.png`). It has never been wired into a user-facing route.

## The offer (Lensa loop)
On ONE generator first (ghibli-prompt-generator, #1 traffic):
- User describes subject → we **generate the actual image in-product** (free, low-res or watermarked preview).
- At the result moment: **"Love it? Unlock the clean HD pack — $4.99"** → watermark-free + 5–10 HD variations, instant download.
- Free preview preserves the flywheel mouth + email gate; we monetize the *result they came for* instead of exporting them to ChatGPT.

## Build checklist (~1–2 days, NOT half a day)
1. **`pages/api/generate-image.js`** — server route calling Gemini image-gen with `.founder/.gemini_key` (mirror the offline ad-creative call). Per-IP daily cap (free tier) like the existing `om-rl:`/`lm-rl:` rate-limit pattern. Returns watermarked/low-res preview URL for free tier.
2. **Spend guard** — hard per-IP free cap + per-day global cap so the Gemini bill can't run away (the open cost question = Armando's greenlight). Log cost-per-gen to confirm $4.99 clears margin.
3. **Stripe SKU** — "HD Image Pack" $4.99 one-time + payment link, `after_completion` redirect `/thank-you?kit=hd-image`, metadata `kit_type=hd-image`. Mirror `setup-tripwire.js`.
4. **Delivery** — on purchase, generate 5–10 clean HD variations (or release the already-generated full-res) → deliver via `/thank-you` + webhook email. KIT_MAP + PAYMENT_LINK_MAP entry (clone existing kit pattern). Per `stripe-plink-audit-before-launch`: verify redirect/TLD/slug pre-launch.
5. **In-product UI** — convert ghibli-prompt-generator result state from "Copy Prompt" → render generated image + the $4.99 HD CTA. Fire `image_generate` + `hd_unlock_click` trackEvents so the core action + conversion are measurable from day 1 (avoids S28 "kill-criterion unmeasurable" trap).
6. **Email gate stays** before unlock (per `feedback_email_gate_tools`).

## Why this is the real bet, not a gate
We currently send our highest-intent traffic to a competitor's tool to get the exact thing they'd pay us for. Closing that loop = capturing value we already generate demand for, using a key we already own. The smallest reversible step is ONE generator + free preview + $4.99 HD.

## Kill criterion
`image_generate` fires on ≥30 sessions with **0 HD purchases** → even owning the result doesn't convert this traffic → escalate to Option 2 (POD physical) or re-acquisition. Any conversion at ~1–2% = first real PMF signal in company history → ladder to other generators + consider Option 4 sub.

## Open questions for Armando (the greenlight)
1. **Spend OK?** Per-generation Gemini cost × free-tier volume — set the daily cap. (This is the real gate: free image-gen for ~15+/day art-seekers incurs his cost.)
2. **Direction:** close-the-loop image-gen (this) vs POD-first vs hold for the Resend re-test (B1/B2). Recommend close-the-loop — it's the only option that fixes the root cause (we're on the wrong side of the value chain).

## Follow-on (Option 2, separate greenlight)
Once we generate the image: "get this as a print" POD upsell (mug $19 / canvas $49) via Gelato/Printful. Purely additive, higher AOV, needs Armando's supplier acct.
