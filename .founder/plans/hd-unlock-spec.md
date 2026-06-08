# Spec: Close the Value-Chain Loop — In-Product Image Gen + $4.99 HD Unlock (corrected)

**Status:** SPEC ONLY. Nothing live. Gated on Armando's direction + per-generation-spend greenlight.
**Corrected premise (verified in code Jun 8):** Our "art generators" output **text prompts**, not images — `navigator.clipboard.writeText(prompt)` → "Copy Prompt" → user goes to ChatGPT/Midjourney to make the actual image. We capture $0 at peak intent. This is NOT a gate-on-existing-image (there is no image); it is a **product pivot to generate the image ourselves and sell the HD result** (the Lensa model).

**We already own the capability:** `.founder/.gemini_key` (Nano Banana / Gemini image gen) is on disk + proven (7 ad-creative PNGs in `public/reddit-ad-v*.png`). It has never been wired into a user-facing route.

## ✅ TECHNICAL DE-RISK COMPLETE (Jun 8, smoke-tested end-to-end — `.founder/tools/gemini-art-smoketest.py`)
The load-bearing assumption of the whole pivot ("we can generate the art-seeker's *result* ourselves, fast/cheap/usable") is now **verified with real artifacts on disk**, not assumed:
| Question | Verified answer |
|---|---|
| Does our key produce a usable art-seeker portrait (not just ad creative)? | **YES** — clean on-style Ghibli pet portrait from a plain English description. Genuinely sellable (`/tmp/gemini-art-smoketest.png`). Quality is NOT a risk. |
| Latency? | **6.6s** — fits a real-time "generating your art…" spinner (Lensa-class tolerance). |
| Output shape? | **1024×1024 PNG** — the exact square art format (not the 16:9 ad shape). |
| Per-image cost? | **1290 image-output tokens ≈ $0.039/image** (gemini-2.5-flash-image). This is the number to size the free-tier daily cap. At $4.99 unlock, margin clears ~127×. |
| Free→paid mechanic feasible? | **YES** — downscale 512² + tiled "PREVIEW" watermark = 49KB JPEG free tier; clean 1024² = 280KB HD unlock. Both produced (`/tmp/art-free-watermarked.jpg`, `/tmp/art-hd-unlock.jpg`). Server-side = `sharp` in Node (trivial, standard). |

**What this changes:** Armando's greenlight is no longer a leap of faith on unproven tech — it is a clean **business** yes/no on (a) the per-day Gemini spend cap (~$0.04/free-gen × volume) and (b) moving the free/paid flywheel line. Zero technical unknowns remain in the generate→watermark→HD-unlock chain. Post-greenlight build drops from "1–2 days + unknown risk" to "~½–1 day of known wiring."

## The offer (Lensa loop)
On ONE generator first (ghibli-prompt-generator, #1 traffic):
- User describes subject → we **generate the actual image in-product** (free, low-res or watermarked preview).
- At the result moment: **"Love it? Unlock the clean HD pack — $4.99"** → watermark-free + 5–10 HD variations, instant download.
- Free preview preserves the flywheel mouth + email gate; we monetize the *result they came for* instead of exporting them to ChatGPT.

## 🔑 Paywall architecture (resolved Jun 8 — caught a product-breaking spec gap)
**The gap:** the spec said "watermarked/low-res preview" without specifying WHERE the watermark happens. If we watermark client-side (browser canvas) the API has already returned the clean 1024² → a user grabs it from the network tab and **never pays**. A client-only watermark is not a paywall. The HD must never reach the browser pre-payment.
**The leak-proof architecture (reuses 3 patterns already proven in this codebase):**
1. **Generate server-side, hold back the HD.** `generate-image.js` calls Gemini → clean 1024² PNG → store it in **Vercel Blob** keyed by a random `hdToken`; write `hd:<token> → {blobUrl, paid:false, ts}` to KV. Return to the browser ONLY a server-made **512² + tiled-watermark JPEG preview (~49KB)**. Clean HD never touches the client until paid.
2. **Image lib = `jimp`** (pure-JS, no native binary → serverless-safe on Vercel; `sharp` needs a native build and is NOT currently a dep). Does the 512 downscale + watermark composite. Add as the one new dep on build-day.
3. **Unlock = the proven chatbot-pro pattern.** $4.99 Stripe checkout carries `client_reference_id=<hdToken>` → `stripe-webhook.js` flips `hd:<token>.paid=true` (mirror `handleChatbotProActivation`, already live) → `/thank-you?hd=<token>` (or `/api/hd-download?token=`) streams the clean Blob. No new webhook machinery class — just one more `kit_type`/plink branch.
4. **Storage cost control:** unpaid `hd:` blobs GC after ~7 days (Blob lifecycle or a cron sweep) so generated-but-not-bought images don't accumulate cost.
**Net:** the only genuinely-new build pieces are (a) `jimp` dep + (b) Vercel Blob wiring. Everything else clones existing proven code — KV rate-limit (`om-rl:`/`lm-rl:`), `client_reference_id`→webhook activation (chatbot), client-side canvas (avatar work). Build is precise + leak-proof, not hand-wavy.

## Build checklist (~½–1 day, leak-proof)
1. **`pages/api/generate-image.js`** — env-flag-gated (`IMAGE_GEN_ENABLED`, default OFF so it's inert in prod until greenlight) + per-IP daily cap + global daily cap (KV, mirror `om-rl:`/`lm-rl:`). Calls Gemini (`gemini-2.5-flash-image`, verified 6.6s/$0.039 — mirror `gemini-art-smoketest.py`). Stores clean HD in Vercel Blob keyed by `hdToken`; returns ONLY the jimp-made 512²+watermark preview. NEVER returns the clean HD.
2. **Spend guard** — hard per-IP free cap + per-day global cap so the Gemini bill can't run away (the open cost question = Armando's greenlight). Log cost-per-gen to confirm $4.99 clears margin.
3. **Stripe SKU** — "HD Image Pack" $4.99 one-time + payment link, `after_completion` redirect `/thank-you?kit=hd-image`, metadata `kit_type=hd-image`. Mirror `setup-tripwire.js`.
4. **Delivery** — MVP = release the already-generated clean HD Blob for that `hdToken` (no extra Gemini cost). Webhook flips `hd:<token>.paid=true`; `/thank-you?hd=<token>` + `/api/hd-download?token=` stream it + webhook email backup. KIT_MAP + PAYMENT_LINK_MAP entry (clone existing kit pattern). Per `stripe-plink-audit-before-launch`: verify redirect/TLD/slug pre-launch. (Stretch, NOT MVP: regenerate 5–10 variations on purchase — doubles+ cost, defer until conversion proven.)
5. **In-product UI** — convert ghibli-prompt-generator result state from "Copy Prompt" → render generated image + the $4.99 HD CTA. Fire `image_generate` + `hd_unlock_click` trackEvents so the core action + conversion are measurable from day 1 (avoids S28 "kill-criterion unmeasurable" trap).
6. **Email gate stays** before unlock (per `feedback_email_gate_tools`).

## Why this is the real bet, not a gate
We currently send our highest-intent traffic to a competitor's tool to get the exact thing they'd pay us for. Closing that loop = capturing value we already generate demand for, using a key we already own. The smallest reversible step is ONE generator + free preview + $4.99 HD.

## Kill criterion
`image_generate` fires on ≥30 sessions with **0 HD purchases** → even owning the result doesn't convert this traffic → escalate to Option 2 (POD physical) or re-acquisition. Any conversion at ~1–2% = first real PMF signal in company history → ladder to other generators + consider Option 4 sub.

## Open questions for Armando (the greenlight)
1. **Spend OK?** Now a precise number: **~$0.039/free generation**. At current ~15 art-seekers/day, an uncapped free tier ≈ **$0.59/day / ~$18/mo** — and that's BEFORE any conversion. A single $4.99 HD unlock pays for ~127 free generations. Recommend a generous global daily cap (e.g. 200 free gens/day = ~$8/day ceiling) so the bill can't surprise. The only real risk is a viral/bot spike; the per-IP + global cap closes it.
2. **Direction:** close-the-loop image-gen (this) vs POD-first vs hold for the Resend re-test (B1/B2). Recommend close-the-loop — it's the only option that fixes the root cause (we're on the wrong side of the value chain).

## Follow-on (Option 2, separate greenlight)
Once we generate the image: "get this as a print" POD upsell (mug $19 / canvas $49) via Gelato/Printful. Purely additive, higher AOV, needs Armando's supplier acct.
