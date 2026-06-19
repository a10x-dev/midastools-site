# $50 Paid-Distribution List-Growth Test — Execution Spec
*Created Jun 18 2026 (S26). Purpose: turn the Armando-gated "should we run a $50 paid test?" from an open yes/no into a flip-the-switch informed decision. This is the only realistic in-window 10x lever for the 2-week growth mandate (organic content lags weeks).*

## TL;DR — the decision
**Recommended single bet: Pinterest Ads, $50, Traffic objective, 4-day flight, hobbyist + seller creative split.** Pinterest has the cheapest CPM (~$3.50, ~51% below Meta/IG), commercial-intent search behavior, and precise art/Etsy targeting — and $50 is genuinely viable there (vs Meta/TikTok which can't exit the learning phase under ~$150-300).
**Strong alternative if Armando prefers it: a $50 classified/footer slot in a sub-10K AI-art or Etsy-seller newsletter** — pre-qualified audience, zero learning-phase tax, highest-confidence dollar, and structurally immune to the prior-test failure mode.
**Reddit is round-2**, not round-1 (the May P4b Reddit test failed — but that was a B2B prompt-pack audience on generic r/ChatGPT subs; the art subs below are a different audience).

## Why this is the lever (bottleneck link)
Conversion bottleneck has two binding halves: (a) Printify monetization (Armando/PartnerStack-gated), (b) **list growth**. Our sole proven conversion engine is the homepage email capture (~15 signups/day, all organic). Content compounds but lags weeks — it will NOT 10x the list inside the 2-week mandate. A small paid spend toward the *right* audience is the only in-window accelerant. This spec de-risks it to a clean go/no-go.

## What killed the LAST paid test (do not repeat)
May P4b-A: ~$50 Reddit promoted post → clicks, **0 conversions**. Root cause = wrong audience (B2B prompt-pack framing on generic r/ChatGPT-class subs). This spec targets AI-art *hobbyists* and AI-art *sellers* specifically, where our actual buyers congregate.

## Channel ranking ($50-viable only)
| Rank | Channel | CPC / CPM | Min viable | Targeting fit | $50 viable |
|---|---|---|---|---|---|
| 1 | **Pinterest Ads** | CPC $0.35–0.70 / CPM ~$3.50 | $12–25/day × 3–5d | Excellent (keyword + interest: wall art, coloring pages, AI art, Etsy printables) | ✅ best fit |
| 2 | **Newsletter classified swap** | flat $50–100 | 1 placement | Excellent (pre-qualified, no algo) | ✅ highest-confidence |
| 3 | **Reddit Ads** | CPC $0.20–0.75 (niche subs) | $25 lifetime min | Good (r/AIArt, r/EtsySellers, r/printondemand) | ✅ round-2 |
| 4 | Meta / IG | CPC $0.85–3.35 | ~$150–300 | Good but $50 can't exit learning phase | ⚠️ marginal |
| 5 | TikTok / X / Etsy-on-platform | — | — | Wrong objective or won't optimize at $50 | ❌ |

## PRIMARY TEST — Pinterest, $50
- **Objective:** Consideration / Traffic (NOT Conversions — $50 yields too few events to optimize a conversion campaign).
- **Budget:** $12.50/day × 4 days.
- **Geo/lang:** US / UK / CA / AU, English.
- **Targeting:** Keywords `AI wall art`, `coloring pages printable`, `Etsy digital download`, `Ghibli art`, `pet portrait`, `print on demand art`. Interests `Art`, `DIY & crafts`, `Home decor`.
- **Creative (split-test 2 pins, vertical 2:3, use real free-generator output):**
  - Pin A — **hobbyist hook:** "Turn your pet into Ghibli-style art — free generator" → image = a strong Art Machine pet/Ghibli output.
  - Pin B — **seller hook:** "Make AI art you can actually sell on Etsy — free tools + prompts" → image = a wall-art / coloring-book mockup.
- **Destination:** homepage (the conversion engine), UTM-tagged (below).
- **Expected for $50:** ~14K impressions → ~70–150 clicks → at 8–15% homepage signup rate → **6–22 new emails.**

## SECONDARY / ALTERNATIVE — $50 newsletter classified
If Armando prefers near-zero-risk: buy ONE classified/footer slot in a sub-10K AI-art or Etsy/POD-seller newsletter (find via beehiiv ad network / Paved / SponsorGap, search "Etsy", "print on demand", "AI art"). Flat $50–100, pre-qualified audience, no creative/learning tax. Or a **cash-free cross-promo swap** (reciprocal mention) — $0, same audience. Seller hook performs best here.

## ATTRIBUTION (already supported by our funnel)
Our first-touch attribution (S43 migration: full funnel channel-attributable; homepage + EmailCapture both attach utm_source / utm_medium / landing_slug to the subscriber record in KV). Tag every paid destination URL:
```
https://www.midastools.co/?utm_source=pinterest&utm_medium=paid_cpc&utm_campaign=jun-list-test&utm_content=ghibli-hobbyist
https://www.midastools.co/?utm_source=pinterest&utm_medium=paid_cpc&utm_campaign=jun-list-test&utm_content=etsy-seller
```
- Keep `utm_medium=paid_cpc` constant → any signup with `utm_medium` containing `paid` is trivially separable from organic.
- **Read results** via `track-events` channel agg + the subscriber records (filter subscribe_submit where utm_medium LIKE `paid_%`).
- **Pre-flight: ✅ VERIFIED (S26, code-read Jun 18).** The full path is confirmed sound end-to-end: homepage capture (`index.js:46-60`) grabs live-URL `utm_medium` (precedence) + first-touch localStorage fallback → POSTs `utm_medium` + full `attribution` (`index.js:64-73`) → `api/subscribe.js:14,50-51,56` persists `utm_medium` + attribution onto the subscriber record. A `paid_cpc` signup is distinguishable from organic at BOTH the subscriber-record level and the `subscribe_submit` track event. No spend-time spot-check needed.

## PASS / FAIL (set before spending)
- **Metric = NET NEW signups attributed to `utm_medium=paid_cpc` during the flight** (above the ~15/day organic baseline — do NOT read gross daily total).
- **PASS:** ≥10 paid-attributed signups for $50 (~$5 CPL). → scale to a $200 test on the winning pin/channel, this is a real in-window growth lever.
- **MARGINAL:** 4–9 signups ($5–12 CPL). → iterate creative/targeting once before scaling.
- **FAIL:** <4 paid-attributed signups. → paid acquisition for this audience/offer doesn't pay at this price; revert to organic-only + the Armando-gated Printify monetization as the revenue path.
- Also log: which pin (hobbyist vs seller hook) drove more signups → informs all future content + ad framing.

## SHIP-DAY CHECKLIST (on Armando greenlight — ~30 min)
1. ~~Confirm paid-UTM → subscriber-record attribution writes~~ — ✅ already verified S26 (code-read end-to-end), skip.
2. Create Pinterest business account / confirm billing (Armando — needs his payment method).
3. Upload 2 pins (creative above), set 4-day $12.50/day Traffic campaign, paste the 2 UTM URLs.
4. Launch. Note start timestamp.
5. Day 2 + Day 4: read paid-attributed signups via track-events. Apply pass/fail.

## What's gated vs autonomous
- **Autonomous (done):** this spec, channel research, creative angles, UTM scheme, pass/fail thresholds.
- **Gated on Armando:** the $50 spend approval + payment method on the ad platform. That's the only remaining input — and it's now a 1-line informed yes/no, not an open question.
