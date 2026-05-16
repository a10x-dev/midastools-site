# Price/Label Mismatch Audit — 2026-05-15 (Session 26)

## Status

**SHIPPED (commit 89c4c3e, deployed to main):**
- pages/index.js hero CTA: "$97" label on $29 URL → fixed to "$29"
- pages/index.js + pages/prompt-generator.js: 6 stale "250+" prompts claims → "145+"
- pages/index.js:332 "150+ image prompts" → "165+" (Image Pack has 166 verified)

**DOCUMENTED FOR ARMANDO REVIEW — NOT shipped (needs strategic call):**

---

### 1. pages/for-coaches.js — multiple $97 CTAs on $29 URL

The file imports STRIPE_MEGA_PACK = https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d (this URL is the $29 Mega Pack, verified by Arnaud's $29 charge May 2 — Session 158 attribution).

Affected user-visible CTAs (all linked to the $29 URL but labeled $97):
- Line 75: cta: "Buy Mega Pack — $97"
- Line 225: "Buy Coach Mega Pack — $97 →"
- Line 335: "Get 145+ more — $97 lifetime →"
- Line 446: "Coach Mega Pack — $97 →"
- Line 402: card label "Midas Coach Mega Pack", cost "$97 once"
- Line 136: FAQ narrative "a $97 prompt pack"

**Why not fixed unilaterally:** Strategic call needed. Two options:
- Option A: Change URL to a $97 plink (preserves "coaches = premium" positioning)
- Option B: Change all labels to "$29" (admits the product IS the $29 Mega Pack, kills the premium framing)

**Complication:** Homepage already references TWO different $97 URLs:
- pages/index.js:523 → https://buy.stripe.com/aEUbJ01xR0YxgligkocMM0g ("All Kits Bundle")
- pages/index.js:709 → https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b ("All Kits — $97")

I do not know which plink_id is the canonical $97 product without Stripe API access. Memory says Shantae paid $97 to plink_1TDwTmAdkDx8xZMkmxB9yn55 — need to map that plink_id to URL alias before swapping for-coaches.

---

### 2. pages/ai-audit.js:274 — $97/once price card

Context needs inspection. Could be:
- A comparison/anchor reference (legitimate, no fix needed)
- A duplicate $97 CTA on the $29 URL (would need fix)

Line 13 has comment "// $97 Mega Pack" next to the $29 URL — comment is wrong (this URL is $29) but the rendered CTA may use a different URL. Need to read full ai-audit.js context before judging.

---

### 3. Why this matters

Per today's Session 26 finding: US-desktop is 25% of all KV events. /for-coaches IS the page targeted at our buyer ICP (3 paying customers all match the coach/consultant/founder profile). Two failure modes:

- **Path A:** buyer-shaped visitors see "$97" everywhere → click → land on $29 Stripe → bounce because they expected $97-tier value.
- **Path B:** they see "$97" → click → land on $29 → buy thinking they got a deal → realize the deliverable doesn't justify "coach premium" framing → refund.

Either path is trust-damaging on the most-buyer-shaped page.

---

## Recommended fix for Armando

1. Decide which $97 product to anchor on the for-coaches page (All Kits Bundle vs hypothetical Coach Mega Pack SKU)
2. Verify with Stripe API which URL alias maps to that product (plink_1TDwTmAdkDx8xZMkmxB9yn55 mapping)
3. Single-commit fix: swap the STRIPE_MEGA_PACK URL in pages/for-coaches.js
4. Verify ai-audit.js:274 in context — fix or leave depending on what it is anchoring
5. Reconcile homepage's two different $97 URLs (pages/index.js:523 vs 709)

Estimated effort: 15 min once strategic call is made.

## Why I did not ship this unilaterally

Two-product-naming-collision from S156 revenue ledger is still partially unresolved. Changing payment links without knowing the canonical mapping risks routing buyers to the wrong product (worse than current state). The homepage hero fix (already shipped) was safe because it preserves the existing URL and only fixes the label — no risk of routing change.
