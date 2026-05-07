# `/finance-club` Side-Door Page Spec (Pre-Built — Awaiting Boucher Greenlight)

Date drafted: 2026-05-07 (Session 27)
Status: 🟡 SPEC ONLY, not yet built. Triggers when Boucher says yes.
Triggered by: `.founder/sales/boucher-crosspromo-pitch.md` accepted reply.
Source intel: `.founder/deliverables/acquisition-channels-shantae-arnaud-lookalike-2026-05-07.md` Channel #2.

## Why a side-door, not the homepage

Per `feedback_protect_flywheel.md`: pivots get their own landing pages, NOT the homepage front door. Mainstream gist/free-tool traffic must keep its mouth. The Boucher swap targets a fundamentally different audience (paying finance pros) than our gist/SEO traffic (free-tool consumers). Different door.

## Page URL

`/finance-club` — short, memorable, brandable. Keep it generic so we can reuse for Boucher fallbacks (CFO Accelerator, CFO Club) without renaming. NOT `/boucher-club` (locks us in).

## Hero copy (above the fold)

**Headline:** "AI Finance Club members — get the MidasTools Mega Pack free."
**Sub:** "200+ AI prompts for finance reporting, scenario modelling, audit prep, board narrative, and ops automation. Zero strings."
**Body:** "Nicolas vouched for us, so we're vouching for his members. Drop your email + the access code from his newsletter to claim your free copy."

(If Boucher prefers different framing — e.g. "AI Finance Club exclusive" — sub the headline. Decide on his greenlight call.)

## Form (the only conversion mechanic)

- Email field (validated)
- Access code field (placeholder: `FINANCEAI` or whatever Boucher prefers)
- "Get my free Mega Pack" CTA → POST to `/api/subscribe` with `source=boucher-finance-club`
- On success: reveal a Stripe payment link with $0 amount via promo code, OR a direct download link to `public/ai-prompt-mega-pack.zip`

(Pick the simpler path. Stripe $0 link is more analytics-rich; direct download is faster to implement.)

## What's on the page below the fold

1. **What's in the kit** — 200+ prompts across 6 categories (reporting, analysis, board decks, audit, ops, finance-specific). Show 2 sample prompts inline (lift from `kit-content/ai-prompt-mega-pack/`).
2. **Why we're doing this** — short blurb: "We sell prompt packs. Nicolas's audience is exactly the kind of pro who benefits most. Free perks are how communities thank their members."
3. **About MidasTools** — 2 sentences max, link to `/about`.
4. **Privacy promise** — "Your email goes only into our subscriber list. We never share with Nicolas, and we send 1 email per month max." (Critical for finance-pro audience that gets pitched constantly.)
5. **Fine print** — terms, support email, etc.

## What's NOT on the page

- ❌ No "upgrade to $97" upsell on the same page (poisons the swap; comes later in nurture)
- ❌ No newsletter signup besides the form (one CTA per page)
- ❌ No paid CTAs above the free claim
- ❌ No homepage cross-link nav (it's a side-door, treat it that way; nav stays for general traffic)

## Email follow-up sequence (after claim)

- **Day 0**: Welcome + download link + 1 sample prompt inline.
- **Day 3**: Single high-value finance-specific prompt (e.g. "10-K analysis" or "Board narrative builder"), no CTA.
- **Day 7**: One more prompt + light mention of `/all-kits-bundle` ($97) — "if you found these useful, here's the next tier". 25% off code `AIFINANCEAI`.
- **Day 14**: Reply-baiter: "What's the #1 finance task you wish AI did better?" Single line. We use replies as ICP intel.

## Stripe / attribution

- New Stripe payment link with $0 + 100% off promo code `AIFINANCEAI` (or our standard `FREEFINANCE`)
- `?utm_source=boucher&utm_medium=newsletter&utm_campaign=finance-club-2026-05`
- `?prefilled_email=` from form
- Subscriber stamped `source: boucher-finance-club` in jsonblob
- Add to `audit-signal-monitor.py` watchlist (or build `boucher-signal-monitor.py` mirror).

## Build effort estimate (when greenlit)

| Task | Time |
|---|---|
| New page `pages/finance-club.js` (clone `pages/audit-template.js` pattern) | 30 min |
| API route `/api/subscribe` source-tag passthrough (already done) | 0 min |
| Stripe $0 promo code creation | 15 min |
| Email follow-up sequence in `lib/nurture.js` | 45 min |
| Sitemap entry + IndexNow ping | 5 min |
| Monitor tool clone | 15 min |
| **Total** | **~2 hours** |

## Kill criteria

- 30 days post-Boucher-mention, <5 claims = swap was a dud (Boucher couldn't drive traffic OR audience didn't care). Don't retry the same swap.
- 30 days post-claim, 0 upgrades to $97 = the audience is curious but doesn't buy our shape. Pivot ICP, not page.

## What changes when Boucher fallback fires

If we go to **CFO Accelerator** or **CFO Club** instead, page works as-is. Just swap the hero attribution ("Nicolas vouched for us" → "[Name] vouched for us") and the access code.
