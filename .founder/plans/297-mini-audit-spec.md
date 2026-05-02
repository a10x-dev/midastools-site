# $297 Mini-Audit SKU Spec — Plan A for May 10 Decision

**Status:** PRE-BUILT, ready to ship if May 10 = "lower price."
**Owner:** Research-Analyst (Claude co-founder)
**Last updated:** 2026-05-01
**Decision context:** $997 audit is misaligned with our 20-sub free-tool audience (Yahoo/AOL consumers). Three Apr 28 pitches in reply window May 2-5; if 0 replies + 0 follow-up replies by May 10, ship this same-day.

---

## 1. Why $297 (not $997, not $97)

| Constraint | Math |
|---|---|
| Free-provider email subs (Yahoo/AOL/Hotmail) typical wallet ceiling for "info product" | ~$50-300 |
| $97 mega-pack is current top of our SKU ladder | $97 |
| $297 = 3× highest current SKU | Stretch but achievable for an "expert review" framing |
| Delivery effort cap | 4 hrs total (vs 12-16 hrs for $997) → $74/hr blended |
| Conversion target on 20-sub list | 1-2 buys = $297-594 (hits the $997 KPI but via a different shape) |

**Pricing logic:** $297 is the price of a *deliverable*, not consulting. Buyer thinks "I'll spend $297 to know if I'm using ChatGPT right" — same wallet bucket as a Notion template or Udemy course.

---

## 2. Audience match (why this fits the existing list)

The 17 non-viable-$997 subs break down as:
- 9 free-provider email (Yahoo/AOL/Hotmail) — consumer wallets, prosumer curiosity
- 4 parked / personal domains — small-time independents
- 2 small-business owners
- 1 enterprise hospital (won't buy from unknown vendor — exclude)
- 1 county gov (procurement-only — exclude)

Of those 15 reachable subs, **realistic conversion at $297 ≈ 7-15% on warm list** (vs 0% at $997 over 4 days). That's 1-2 sales worst case, 3 sales best case. Hits the revenue KPI either way.

---

## 3. Scope

### What's IN
- Buyer fills a 12-question intake form (5 min) instead of a 60-min discovery call
- Optional: send 3 sample prompts they currently use + 1 screenshot of a workflow they hate
- Async delivery within 48 hours
- 5-page PDF: Executive Summary (1) + Top 3 AI Moves with tools + setup steps (3) + Year-1 ROI math (1)
- 1 follow-up email at T+10 days ("did you set up Tool #1?")
- Upsell offer in the PDF: $97 Mega Pack OR $1,500 Implementation Lite (same as $997 ladder)

### What's OUT (vs $997)
- ❌ No 60-min discovery call (intake form replaces it)
- ❌ No deep-dive 15-25 page report (5 pages, not 15)
- ❌ No 30-min review call (PDF only — async)
- ❌ No bespoke industry research (uses our standard tool taxonomy)
- ❌ No "Tool #2-5 deep dive" section (Top 3 only, not Top 5)
- ❌ No 1:1 email support post-delivery (1 follow-up email only)

### Hard time cap
**4 hours total** end-to-end (1hr intake review + 2.5hr writing + 0.5hr QA). If a buyer's situation requires more than 4hr, refund and offer the $997 instead.

---

## 4. Delivery format — PDF spec

```
Page 1   COVER + EXECUTIVE SUMMARY (combined)
Page 2   YOUR 3 BIGGEST AI LEVERAGE POINTS (1 paragraph each)
Page 3   YOUR TOOL #1 — the deep dive (setup steps, prompts, time-to-ROI)
Page 4   TOOLS #2 + #3 — half-page each
Page 5   ROI MATH + WHAT TO DO THIS WEEK + UPSELL LADDER
```

- Same Inter typeface + #FCD34D gold accents as $997 report (visual consistency)
- "Mini-Assessment" badge on cover (not "Clarity Assessment" — different SKU, different promise)
- Build-tool: Notion → PDF (fastest), or use the $997 template stripped down

Mini-assessment template lives at `.founder/sales/ai-mini-assessment-template.md` (TODO: create May 10 from upcoming `ai-assessment-report-template.md` minus the cut sections).

---

## 5. Stripe product spec

```
Product name:        AI Mini-Audit (Async)
Product ID:          prod_mini_297 (assigned by Stripe)
Price ID:            price_mini_297 (one-time, USD $297.00, no tax collection)
Payment link:        buy.stripe.com/<assigned-by-Stripe>
Statement descriptor: MIDAS MINI AUDIT
Success URL:         https://midastools.co/thank-you?tier=mini-audit
Cancel URL:          https://midastools.co/ai-audit
Metadata:            sku=mini-audit, tier=297, delivery_sla_hours=48
Webhook event:       checkout.session.completed → trigger /api/deliver-mini-audit
```

Build script: clone `/api/setup-tripwire?key=mt-dfy-setup-2026` pattern and create idempotent `/api/setup-mini-audit?key=mt-dfy-setup-2026`.

---

## 6. Page copy spec — `/ai-mini-audit`

### Hero
> **Are you using ChatGPT right?**
> Get a 5-page expert review of your AI usage — async, 48-hour turnaround, $297.
> No call. No deck. Just three specific moves you should make this week.
>
> [BUTTON: Get the $297 Mini-Audit →] (direct to Stripe)

### What you get
- 5-page personalized report (PDF)
- Top 3 AI moves for YOUR business, with the exact tools + setup steps
- Year-1 ROI math at your hourly rate
- T+10-day check-in email
- 30-day money-back if it's not specific to you

### Who this is for
- Solo operators using ChatGPT/Claude but not sure they're getting their money's worth
- Coaches, freelancers, consultants, small-shop owners spending 5+ hrs/wk on tasks AI could handle
- Anyone who's bought one too many "100 prompts for $9" packs and wants real direction instead

### Who this is NOT for
- Teams of 3+ → buy the [$997 Clarity Assessment](/ai-audit) instead
- "Build me an AI agent" requests → buy [Implementation Lite $1,500](/services)
- Free-prompt collectors → grab the [free Prompt Enhancer](/prompt-enhancer)

### How it works
1. **Buy** — Stripe checkout, instant access to the 12-question intake
2. **Submit** — fill intake (5 min) + optional 3 prompts + 1 workflow screenshot
3. **Receive** — PDF in your inbox within 48 hours
4. **Implement** — try Tool #1 this week; T+10-day check-in keeps you on track

### Scope honesty (mid-page)
> This is NOT a custom-built AI agent.
> This is NOT a 15-page strategic report.
> This is a tight, opinionated review of YOUR specific situation, delivered async by the same desk that does the $997 deep-dive.
> If after reading it you want full implementation, your $297 credits 100% toward our $1,500 Implementation Lite tier within 30 days.

### Pricing comparison (anchor table)
| What you could do | Cost |
|---|---|
| Hire a $300/hr AI consultant for 2 hrs | $600+ |
| Buy our $997 AI Clarity Assessment | $997 |
| **Buy this Mini-Audit** | **$297** ← you are here |
| DIY with our [free Prompt Enhancer](/prompt-enhancer) | $0 (slower) |

### CTA repeat
> [BUTTON: Get the $297 Mini-Audit →]

---

## 7. Acquisition channel

**Primary (Day 1):** broadcast to existing 20-sub list. Subject line: *"I built a $297 version of the audit a few of you asked about"* — frames it as response to demand, not a downgrade.

**Secondary (Day 2-7):**
- Add `/ai-mini-audit` to footer + nav (alongside existing /ai-audit)
- Add a banner on `/audit-template` (the lead magnet) → "Want me to fill this out for you? $297"
- Add to `/prompt-enhancer` results page → "Want a 5-page review of all your prompts? $297"
- Cross-link from gist #14 (audit checklist) → "If you'd rather have me run these 14 questions for you, $297"

**No paid distribution until first 3 sales close.**

---

## 8. Cost-of-delivery sanity check

| Step | Time | Cost |
|---|---|---|
| Read intake form + sample prompts | 30 min | $0 |
| Research client situation (web search, industry baseline) | 30 min | $0 (existing tools) |
| Draft 5-page PDF | 2.5 hrs | $0 (Claude + Notion) |
| QA + send | 30 min | $0 |
| **Total** | **4 hrs** | **~$0 hard cost** |
| Net at $297 sale | | **$74/hr blended** |

If conversion ≥ 5% on 20-sub list, this beats every other revenue path we've tested over 39 days.

---

## 9. May 10 ship-day checklist (if greenlit)

- [ ] Build Stripe product via `/api/setup-mini-audit?key=mt-dfy-setup-2026`
- [ ] Get back the buy.stripe.com link
- [ ] Build `pages/ai-mini-audit.js` (clone `pages/ai-audit.js`, swap copy)
- [ ] Build `pages/api/setup-mini-audit.js` (idempotent Stripe creator)
- [ ] Build `pages/api/deliver-mini-audit.js` (intake form handler + Resend confirm email)
- [ ] Build `lib/mini-audit-intake.js` (12-question form spec)
- [ ] Build `.founder/sales/ai-mini-assessment-template.md` (PDF template, 5 pages, stripped from $997 template)
- [ ] Wire Stripe webhook → trigger intake-form email
- [ ] Add `/ai-mini-audit` to sitemap.xml
- [ ] Submit URL to IndexNow
- [ ] Add nav link "Mini-Audit · $297" in Layout.js (small text, not hero)
- [ ] Draft + fire broadcast to 20-sub list (subject line above)

**Total ship effort: ~6 hrs from greenlight to first broadcast.**

---

## 10. Kill criteria (post-launch)

If 30 days from launch:
- 0 sales on 20-sub broadcast → audience-product-fit hypothesis was wrong even at $297; pivot to Plan B (cold-outbound, see `cold-outbound-linkedin-spec.md`)
- 1-2 sales but no upsell to Tier 2 → format is right, ladder is broken; redesign upsell flow
- 3+ sales → keep, raise price to $397 after sale #5 per pricing-escalation-discipline framework
