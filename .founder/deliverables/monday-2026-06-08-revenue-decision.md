# Monday Jun 8 — Revenue Decision Brief

**Written:** Fri Jun 5, ~15:50 local. **Author:** research/founder side.
**One-line:** Our list is **115 art/prompt subscribers** (2.5x what the dashboard shows) and we have a **proven, audience-matched, no-charge-gate offer already built.** Send THAT Monday, before the chatbot Memo.

---

## The new fact that changes Monday

| What memory/dashboard said | What the live data says (Jun 5) |
|---|---|
| Users: 45 | **subscribers: 115** (`/api/status` metrics, gist-real, grade GOOD) |
| ~15/day, art-dominated | confirmed: top pages 100% art (ghibli, viral-art, midjourney, pet/action-figure) |
| 0 tool activations | still 0 across all 4 tools (600-event window) — 5th confirmation |

The acquisition engine is real and **compounding** — 115 and climbing ~15/day. The list is the asset. Monetizing it is the bottleneck, and it has been for 33 days flat at $155.

## Who these 115 people are

They came for **free AI art/prompts** (ghibli, midjourney, pet portraits, action figures). They are NOT here for business tools. The proof is brutal: even the **Listing Machine** — which we built *specifically* for the art-seller audience and pointed our #1-traffic art pages at — got **0 generations.** Art-page visitors want art, full stop.

Our only revenue ever ($155, 3 sales) came from **one-time prompt-pack purchases** via Stripe Link — impulse digital-goods buys. Not subscriptions.

## The mismatch in the current Monday plan

The scheduled Monday move (`d4cf546c`) is the **Chatbot Builder Memo** — selling a **$39/mo business tool** to this **art/prompt audience.** Three problems:
1. **Audience mismatch** — $39/mo "sell chatbots to local businesses" to people who came for free ghibli art.
2. **Unproven** — 0 chatbot_build events ever.
3. **Gated** — the $39/mo charge has never been tested live (Armando's Stripe). Driving 115 people at an unverified paywall is risky.

## The better Monday test (already built, one command)

There is a **proven, audience-matched, no-gate** offer sitting in `nurture.js` right now:

- **Template:** `flash`
- **Subject:** *"48h only: $29 Image Pack (pet, Ghibli, action figures)"* — literally names the generators these 115 people use.
- **H1:** *"You've been using the free generators. Here's what's on the other side."*
- **Product:** $29 AI Image Prompt Pack → Stripe checkout `8x24gy...cMM0i` (verified **HTTP 200**, this is the exact checkout our real sales came through).
- **No charge-test gate** (one-time $29, already validated by real purchases).
- **Already fired cleanly once** (S107: 23/23 delivered).
- **Send:** `GET /api/nurture?key=mt-outreach-2026&broadcast=true&template=flash`
- **Preview first (zero list risk):** add `&to=iam@armando.mx` → sends ONE `[PREVIEW]` copy.

This is the single highest-probability, lowest-risk first-revenue test available: audience-matched + proven product + proven send mechanism + no gate.

## Recommendation — sequence, don't abandon

1. **Monday Jun 8:** fire `flash` ($29 Image Pack) to the 115-list. First real revenue test of the list. Watch Stripe for the first list-attributed sale.
2. **After** Armando verifies the $39/mo charge (live webhook flips bot → pro): fire the `chatbot_launch` Memo as a **separate** test, ~1 week later (one promo/week — don't burn the list with two blasts in 3 days).

This keeps the flywheel intact (the chatbot tool still gets its Memo) while front-running it with the offer most likely to actually convert THIS audience.

## Default if Armando is silent by Monday

Per the standing founder mandate ("get revenue yes or yes") and 33 days flat: **if no input by Monday, fire the `flash` $29 Image Pack broadcast to the 115-list** (NOT the chatbot Memo — that stays gated on the untested charge). Lowest-risk, audience-matched, proven. One email, reversible in the only sense that matters (worst case = a few unsubscribes).

## What I did NOT do
- Did NOT fire the broadcast Friday — two promos to 115 people in 3 days burns the asset, and the chatbot Memo plan is 1 day old (fresh pair-session call). Friday blast against it = overstepping. Monday is the right slot.
- Did NOT touch the flywheel strategy or revert the nurture — recommending a sequence, not a pivot.
