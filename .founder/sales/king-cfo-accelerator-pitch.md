# Michael King (CFO Accelerator) Cross-Promo Pitch (Pre-Built — May 12 Fallback)

Date drafted: 2026-05-07 (Session 28 — Boucher fallback pre-build #1)
Status: 🟡 DRAFT, sits here until: (a) Boucher declines/ghosts after T+4d AND (b) Armando greenlights this fire.
Source intel: WebSearch May 7 2026 — confirmed CFO Accelerator runs 7-week CFO Academy + year-long mastermind for fractional-CFO firm owners. Michael's LinkedIn: https://www.linkedin.com/in/iammichaelking
Trigger: May 12 morning if no Boucher reply at T+4d (per `boucher-crosspromo-pitch.md` reply-scenario matrix line 88).

## Why him, why now

- **Audience: fractional CFOs running their own advisory firms** (different from Boucher's employed finance pros — these are firm owners selling to SMB clients).
- **Core programs**: 7-week CFO Academy + Inner Circle mastermind + private Slack. ~100+ firm-owners coached.
- **Multiplier angle**: every CFO Academy member serves 5–20 SMB clients. A free Mega Pack to Michael's members is a free Mega Pack to potentially **500–2,000 downstream SMB CFOs/owners** through them. Higher leverage than Boucher's direct subscriber model.
- **France/EU vs US-anchored**: Michael is Dallas-based; native English market. Different from Boucher's France anchor — this swap targets the US fractional-CFO niche, complementary not redundant.
- **Cost: $0 cash + 1 hour labor.** Same digital-good swap mechanic as Boucher. `/finance-club` page reusable via `?via=cfo-accelerator` URL param (built Session 27).

## Sender

`Armando from MidasTools <hello@midastools.co>`, reply_to=iam@armando.mx (per Resend FROM convention).

## Channel options (in priority order)

1. **LinkedIn DM** to https://www.linkedin.com/in/iammichaelking — Michael is active on LinkedIn (multiple recent posts). Most personal, highest reply rate.
2. **Email via Resend** if Armando finds his business email (check thecfoaccelerator.com/contact or signalhire entry).
3. **LinkedIn comment + DM combo** — comment on his "5 Minute Fractional CFO" newsletter then DM the offer.

## Pitch — Version A (LinkedIn DM, short — preferred)

Hi Michael —

Quick offer for the CFO Academy + Inner Circle members:

We sell the **MidasTools AI Prompt Mega Pack** ($29) — 200+ field-tested prompts spanning monthly close, board narrative, scenario modeling, audit prep, KPI dashboards, and client-deliverable templates.

Every prompt is something a fractional CFO would actually drop into a client engagement. I'd like to give every Academy/Inner Circle member a **free copy** in exchange for one mention in your newsletter or a single members-only Slack post.

Multiplier angle: each of your members serves 5–20 SMB clients. A free pack to them = leverage across hundreds of finance teams. No affiliate, no upsell — just a perk for your members.

If interested, I'll spin up a `/finance-club?via=cfo-accelerator` page with a passcode this week.

Worth a quick reply?

— Armando
midastools.co

## Pitch — Version B (LinkedIn DM, ultra-short)

Hi Michael — quick offer: free MidasTools Mega Pack (200+ AI prompts spanning close, board narrative, scenario modeling, audit prep) for every CFO Academy / Inner Circle member. Zero cash, zero affiliate. Multiplier on your members' client work. I'll build the gated page this week if interested. Worth 30 sec? — Armando, midastools.co

## Pitch — Version C (Email, longer, with proof)

**Subject: A free perk for your CFO Academy + Inner Circle members — multiplier proposal**

Hi Michael,

I run [MidasTools](https://midastools.co) — an AI prompt-pack shop. We sell the **AI Prompt Mega Pack** ($29 retail), 200+ prompts spanning the work fractional CFOs actually deliver: month-end close narratives, KPI dashboards from raw exports, board-deck commentary, scenario modeling (3 cases), audit-prep checklists, client onboarding workflows, recurring-revenue forecasts.

Here's the offer:

**Free Mega Pack for every CFO Academy + Inner Circle member.**
- ~100+ active fractional-CFO firm owners × $29 retail = ~$3K of perceived value at the member level
- True leverage = each member runs 5–20 client engagements. A free pack to them = hundreds of downstream SMB finance teams using better prompts. **The multiplier is the pitch.**
- Zero affiliate, zero upsell. We build a `/finance-club?via=cfo-accelerator` landing page with a passcode for your members only.
- All we ask: one mention in your "5 Minute Fractional CFO" newsletter OR a single members-only Slack post.

**Why this works for you:**
- Adds a "members get this free + use with clients" perk that boosts retention without your time cost.
- Positions you as the curator who finds your members tools that scale their own firms.
- Co-brand the page if helpful — happy to add CFO Accelerator logo + your bio.

**Why this works for us:**
- We get one quality mention to a high-density firm-owner audience that buys productivity tools.
- Even a small fraction of downstream-client CFOs converting to our $97 All Kits Bundle pays for the swap many times over.

If you're game, gated page goes live this week. If not, no worries — your work coaching firm owners is great even from outside.

— Armando Aguirre
Founder, MidasTools
[midastools.co](https://midastools.co) · iam@armando.mx · @manduks on LinkedIn

## Reply scenarios

| King says | Our response |
|---|---|
| **"Yes, send me the page link"** | Reuse `/finance-club` with `?via=cfo-accelerator` param (already built Session 27). DM him the URL within 24h. |
| **"Sounds interesting, what's the deliverable?"** | Send him a free copy of the Mega Pack + brief 1-pager of "what your members would get." |
| **"I'd want a rev-share or affiliate cut"** | Pivot — propose 30% rev-share on the $97 All Kits Bundle upsell, tracked via Stripe coupon `CFOACAD30`. Conservative ICP-density × buy-rate suggests $300–$900 over 60d which Michael keeps. |
| **"What's the catch?"** | Reaffirm zero affiliate on the free page. Optional `/upgrade` link with 25% CFOACAD code if they want. |
| **"No / no reply in 7 days"** | Move to **The CFO Club** pitch (`.founder/sales/cfo-club-pitch.md`). |

## Attribution plan

- `/finance-club?via=cfo-accelerator` → /api/subscribe persists `source: cfo-accelerator-finance-club`
- `partner-signal-monitor.py` (built Session 27) already watches the `cfo-accelerator` regex; first NEW source-tagged sub triggers same-day Telegram + welcome email via send-one.py.
- For paid conversions: Stripe payment-link with `?utm_source=cfo-accelerator&utm_medium=newsletter&utm_campaign=finance-club-2026-05` + `?prefilled_email=`.

## Smoke-test before send

1. Send Version A or B to iam@armando.mx via Resend, verify HTML render + reply_to.
2. Confirm `/finance-club?via=cfo-accelerator` renders (already verified working — same code path as `?via=boucher`).
3. Decide: LinkedIn DM (preferred — Michael is active there) or email (need to find his business email first).

## Kill criteria

- 7 days no reply → fall through to The CFO Club pitch.
- Replies "no" or "we don't do swaps" → respect, move to The CFO Club.
- Replies "yes" but no traction (0 source-tagged signups in 21d) → channel works but ICP-product fit fails for fractional-CFO niche; revisit ICP not channel.

## What this pitch is NOT

- Not a paid sponsorship (we don't have the cash).
- Not a generic affiliate ask (those are noise; our offer is concrete value with multiplier framing).
- Not asking him to teach our content — his curriculum is his moat, we're an additive perk.

## Risk vs Boucher

| Dimension | Boucher | King |
|---|---|---|
| Audience size | 190K newsletter | ~100+ firm owners (smaller direct) |
| Multiplier | Direct (each sub = potential buyer) | Indirect (member → 5-20 clients) |
| ICP density | ~80% (employed finance pros) | ~70% (firm owners, not employees) |
| Price tolerance | Personal $29 wallet | Higher — they sell $5K+ engagements |
| Reply expected | 5–15% (cold-to-creator B2B benchmark per S29) | 40%+ Michael actively builds community |
| Best path on Yes | Free → upsell to $97 | Free → 30% rev-share on $97 (Michael ⊃ his members) |

Honest take: King may convert FEWER raw signups than Boucher but each signup is **higher-LTV** because they're firm-owners who buy tools to deliver client work, not consumers who buy on-impulse. If both engage, king is the better long-term partnership.
