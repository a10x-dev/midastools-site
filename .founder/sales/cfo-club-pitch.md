# The CFO Club Cross-Promo Pitch (Pre-Built — May 12 Fallback #2)

Date drafted: 2026-05-07 (Session 28 — Boucher fallback pre-build #2)
Status: 🟡 DRAFT, sits here until: (a) Boucher AND King both decline/ghost OR (b) Armando wants to fire 3 simultaneous shots same week.
Source intel: WebSearch May 7 2026 — confirmed thecfoclub.com is a tech-CFO community + weekly newsletter (articles/podcasts/resources). About page: "vibrant community for CFOs in the tech sector." Free account for weekly insights.
Trigger: May 12 morning OR same-week-as-Boucher-King if Armando wants 3 simultaneous shots (per Boucher pitch line 88: "three independent shots same week").

## Why them, why now

- **Audience: tech-sector CFOs at growth-stage SaaS** — perfect overlap with the SaaS Founder Kit ($39), and a clean upsell ladder to All Kits Bundle ($97).
- **Channel: weekly newsletter** + content-driven community (they curate "best CFO newsletters" lists, "best CFO communities" lists). They publish about *resources for CFOs* — we ARE a resource for CFOs.
- **Editorial fit > sales fit**: unlike Boucher (audience-rental swap) and King (firm-owner multiplier), CFO Club's value is **content/editorial** — they could naturally feature our Mega Pack as "best AI prompt pack for CFOs" content. Less a swap, more a featured-resource pitch.
- **US English** = different language market vs Boucher (France) and complementary to King (US fractional-CFOs).
- **Cost: $0 cash + 1–2 hours labor** (we'd write a guest piece OR provide the Mega Pack for free as a "resource feature").

## Sender

`Armando from MidasTools <hello@midastools.co>`, reply_to=iam@armando.mx.

## Channel options (in priority order)

1. **Email via thecfoclub.com/about contact form** — primary; their site is content-shop-shaped, contact forms are checked.
2. **LinkedIn outreach to founder/editor** — search for "The CFO Club" on LinkedIn, find the most-active editorial voice, DM.
3. **Twitter/X DM if a public handle is listed on thecfoclub.com** (verify on send day).

## Pitch — Version A (Email, primary — editorial framing)

**Subject: Free resource for The CFO Club readers — 200+ AI prompts curated for tech CFOs**

Hi The CFO Club team,

I run [MidasTools](https://midastools.co) — small AI prompt-pack shop. I noticed you've covered "best CFO newsletters" and "best CFO communities" recently; you publish curated resources for tech CFOs.

We sell the **AI Prompt Mega Pack** ($29 retail) — 200+ field-tested prompts. About 60 of them are directly built for tech-CFO work: ARR cohort analysis from raw exports, board-deck commentary on burn/runway, scenario modeling (3 cases), variance commentary, monthly close narratives, SaaS metric dashboards (NRR/GRR/CAC/LTV), audit-prep checklists, investor-update drafting from KPI tables.

I'd like to give your readers a **free copy** — no email gate hoops, no affiliate trick, no upsell page.

In exchange: a single mention in one issue of your weekly newsletter OR an inclusion in your next "best AI tools for CFOs" piece. We're happy to also write a guest piece ("The 14 Prompts Every Tech CFO Should Have in Their Toolkit") if that fits your editorial pipeline better.

Why this works:
- Real resource for your readers — we use these in production with our own subscribers.
- Free, no strings — your readers see it as a perk, not a sales funnel.
- Optional affiliate code if you want a rev-share on the $97 All Kits Bundle upsell (we'll set up `CFOCLUB30` for 30% off + 30% to you).

If interested, the gated page goes live this week. Happy to send you a free Mega Pack today as a sample so you can evaluate the quality before deciding.

— Armando Aguirre
Founder, MidasTools
[midastools.co](https://midastools.co) · iam@armando.mx · @manduks on LinkedIn

## Pitch — Version B (Email, ultra-short)

**Subject: Free resource for The CFO Club readers — quick proposal**

Hi team — I run MidasTools (midastools.co). We have an AI Prompt Mega Pack with 200+ prompts including 60 built for tech-CFO work (ARR cohorts, board commentary, scenario modeling, audit prep). I'd like to give your readers a free copy in exchange for one newsletter mention. Zero cash, zero affiliate strings (optional 30% rev-share if you want it). Worth 30 seconds? — Armando

## Pitch — Version C (LinkedIn DM if we find the editor)

Hi [Editor name] — saw your "best AI tools for CFOs" piece. I run MidasTools, we built a 200-prompt pack for tech CFOs ($29 retail). I'd like to give The CFO Club readers a free copy in exchange for one newsletter mention. No affiliate, no upsell tricks. Could send you a free copy today to evaluate quality. Open to a quick reply? — Armando, midastools.co

## Reply scenarios

| CFO Club says | Our response |
|---|---|
| **"Yes, send me a sample"** | Email iam@armando.mx with the Mega Pack ZIP attached + 1-page "tech-CFO highlights" cheat sheet. |
| **"We'd like to feature it in next newsletter"** | Ship `/finance-club?via=cfo-club` page (reuse Session 27 page with new ?via= param). DM the URL + a 50-word blurb they can use. |
| **"We'd want a guest piece"** | Pivot to Version A's guest piece offer — "The 14 Prompts Every Tech CFO Should Have." We write it, they edit, they publish, we link back. |
| **"What about an affiliate program"** | Pivot to 30% rev-share on $97 All Kits Bundle via Stripe coupon `CFOCLUB30`. Conservative: $200–$600 over 90d to them. |
| **"No fit"** | Respect; thank them; revisit in 6 months with a tech-CFO-specific kit if we ship one. |
| **"No reply in 14 days"** | Move to Reddit r/ChatGPTPromptGenius $30 promoted post per Session 27 fallback chain. |

## Attribution plan

- `/finance-club?via=cfo-club` → /api/subscribe persists `source: cfo-club-finance-club`
- `partner-signal-monitor.py` already covers `cfo-club` regex — first NEW source-tagged sub triggers same-day welcome.
- For paid conversions: `?utm_source=cfo-club&utm_medium=newsletter&utm_campaign=finance-club-2026-05` + `?prefilled_email=` on Stripe links.

## Smoke-test before send

1. Verify thecfoclub.com/about contact form still loads (do this on send day).
2. Send Version A to iam@armando.mx via Resend, verify HTML render + reply_to.
3. Confirm `/finance-club?via=cfo-club` renders (same code path as Boucher/King).

## Kill criteria

- 14 days no reply → channel pivot fallback chain exhausts; per acquisition-channels deliverable, fall through to **Reddit r/ChatGPTPromptGenius $30 promoted post**.
- Replies "no fit" → don't push; thank them; 6-month cooldown before retry with different SKU.
- Replies "yes" but no traction (0 source-tagged signups in 21d) → editorial mention without strong CTA = low-conversion lesson; pivot ICP next swap.

## What this pitch is NOT

- Not a paid placement (we don't have the cash).
- Not a generic "feature us" ask — we're offering a *concrete free resource* their readers can use today.
- Not asking them to write our content — we offer to write it ourselves OR provide the deliverable, their choice.

## Risk vs Boucher / King

| Dimension | Boucher | King | CFO Club |
|---|---|---|---|
| Audience type | Newsletter subs | Coached firm owners | Editorial readers |
| Mechanic | Audience rental swap | Member multiplier | Editorial feature |
| ICP density | ~80% (finance pros) | ~70% (firm owners) | ~60% (tech-SaaS CFOs) |
| Reach | 300K newsletter | ~100+ direct | Unknown — newsletter size not disclosed |
| Reply rate (estimate) | 30% (cold to creator) | 40% (active community-builder) | 25% (editorial inbox triage) |
| Conversion shape | Direct buyers | Multiplier through clients | Editorial-credibility halo (slow burn) |
| **Best for** | Volume | Quality | Long-term brand |

Honest take: CFO Club is the **slowest-conversion** but **highest-credibility** swap. If they feature us, the editorial mention compounds long after the initial signup blip. Worth doing alongside Boucher/King even if direct conversions are low.
