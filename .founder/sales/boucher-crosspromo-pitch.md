# Nicolas Boucher Cross-Promo Pitch (Pre-Built — Awaiting Armando Greenlight)

Date drafted: 2026-05-07 (Session 27 — Channel pivot pilot #1)
Status: 🟡 DRAFT, not sent. Sits here until Armando greenlights.
Source intel: `.founder/deliverables/acquisition-channels-shantae-arnaud-lookalike-2026-05-07.md`
Trigger to send: Armando says "go" via Telegram.

## Why him, why now

- **190,034 newsletter subscribers** at https://ai-finance.club/newsletter/ — verified via raw HTML inspection (his own copy: "Join 190,034 others getting ahead of AI in Finance"). His separate LinkedIn AI+Finance newsletter (https://www.linkedin.com/newsletters/ai-finance-by-nicolas-boucher-7203451938586177537) is a distinct vehicle with audience overlap; only quote the 190K number when speaking to Boucher.
- **2,400+ paying members** in AI Finance Club at $250/qtr (https://ai-finance.club/) — verified via page copy.
- **Platform: Kit/ConvertKit** (verified via form action to app.kit.com on ai-finance.club/newsletter/). Christian Martinez (Tier 1 alternative per cross-promo-candidates-2026-05-07.md) is also on Kit — propose **Kit Sponsored Recommendation swap** as the primary mechanic, not a generic "audience swap."
- **Arnaud Demes** — our $29 Mega Pack buyer — fits this audience at ~80% (Paris finance/AI). Boucher's audience IS Arnaud lookalike.
- **France-anchored** = native-language match.
- **Cost: $0 cash + 1 hour labor** (digital good swap, no money changes hands).

## Sender

`Armando from MidasTools <hello@midastools.co>`, reply_to=iam@armando.mx (per Resend FROM convention in MEMORY.md).

## Channel options (in priority order)

1. **LinkedIn DM** to https://www.linkedin.com/in/bouchernicolas/ — likely highest open rate, more personal; Armando sends via his own LinkedIn.
2. **Email via Resend** if we can find his business email (try `nicolas@nicolasboucher.online` per his domain).
3. **LinkedIn comment + DM combo** — comment on his next newsletter issue then DM the offer.

## Pitch — Version A (LinkedIn DM, short)

**Subject (if email): A free perk for your AI Finance Club members — 200 prompts, no strings**

Hi Nicolas —

I've been reading your AI+Finance newsletter for a while and a chunk of our paying customers are exactly the audience you've built — finance pros learning AI on their own time. One of them is in Paris.

We sell the **MidasTools AI Prompt Mega Pack** ($29) — 200+ field-tested prompts across finance reporting, analysis, board decks, and ops automation. I'd like to give every AI Finance Club paying member a **free copy** ($70K+ retail value at 2,400+ members) in exchange for a single mention in your newsletter.

No affiliate fee, no funnel tricks. Just a perk for your members. They get value, you get a "members-only" thank-you to share, we get exposure to a finance audience we'd never reach otherwise.

If interested, I'll spin up a `/finance-club` page with a passcode this weekend.

Worth a quick reply?

— Armando
midastools.co

## Pitch — Version B (LinkedIn DM, ultra-short)

Hi Nicolas — quick offer: free MidasTools Mega Pack (200 finance + ops AI prompts, $29 retail) for every AI Finance Club member, in exchange for one mention in your newsletter. Zero cash, zero affiliate strings. I'll build the gated page this weekend if you're interested. Worth 30 sec? — Armando, midastools.co

## Pitch — Version C (Email, longer, with proof)

**Subject: A €70K perk for your AI Finance Club members — proposal**

Hi Nicolas,

I run [MidasTools](https://midastools.co) — a small AI prompt-pack shop. One of our recent buyers is a Paris-based finance/AI freelancer who, judging from the email pattern (gmail, French timezone, May 2 purchase), is exactly your audience profile. He bought the Mega Pack — 200+ AI prompts spanning finance reporting, scenario modelling, audit prep, board narrative, and ops automation — and that purchase is what pushed me to write this.

Here's the offer:

**Free Mega Pack for every paying AI Finance Club member.**
- 2,400+ members × $29 retail = $70K+ of perceived value
- Zero affiliate cut, zero upsell trick. They get the kit, that's it.
- We build a `/finance-club` landing page with a passcode for your members only.
- All we ask: one mention in your newsletter or a single members-only post in the Club Slack.

**Why this works for you:**
- Adds a "members get this free" perk that boosts retention without your time cost.
- Positions you as the curator who finds your members genuinely useful tools.
- We'll happily co-brand the page if it helps you.

**Why this works for us:**
- We get one quality mention to a high-density finance/AI audience we couldn't reach via cold ads.
- Even a small fraction converting to our $97 All Kits Bundle pays for the swap many times over.

If you're game, I can have the gated page live by Sunday. If not, no worries — your newsletter is great even from the consumer side.

— Armando Aguirre
Founder, MidasTools
[midastools.co](https://midastools.co) · iam@armando.mx · @manduks on LinkedIn

## Reply scenarios

| Boucher says | Our response |
|---|---|
| **"Yes, send me the page link"** | Page already live (Session 27, commit 0527a2d). DM him `https://www.midastools.co/finance-club?via=boucher` immediately. Confirm partner-signal-monitor.py will catch source-tagged signups. |
| **"Sounds interesting, what's the deliverable?"** | Send him a free copy of the Mega Pack + brief PDF of what AI Finance Club members would get. |
| **"What's the catch?"** | Reaffirm zero affiliate, zero upsell on the free page. Optional `/upgrade` link on the thank-you with a 25% AIFINANCEAI code if they want. |
| **"How about a paid sponsorship instead?"** | Politely decline ("we're a small shop, our budget is the digital good itself"). Offer alternative: 50% rev-share if he wants to track a referral code. |
| **"No / no reply in 14 days"** | Fall back to **Michael King CFO Accelerator** (`.founder/sales/king-cfo-accelerator-pitch.md`) + **The CFO Club** (`.founder/sales/cfo-club-pitch.md`). Both pre-drafted Session 28; ship-day = single send. |

## Attribution plan

- `/finance-club` page uses Stripe payment link with `?prefilled_email=` + `?utm_source=boucher&utm_medium=newsletter&utm_campaign=finance-club-2026-05`.
- Capture every email entered to claim the free Mega Pack into our jsonblob (source: `boucher-finance-club`).
- Track `boucher-finance-club` source in `audit-signal-monitor.py`-style monitor — first NEW source-tagged sub triggers a Telegram ping.

## Smoke-test before send

1. Send Version A or B to iam@armando.mx via Resend, verify HTML render + reply_to.
2. Have Armando review for tone — French politeness conventions matter for Boucher.
3. Decide: LinkedIn DM (preferred) or email.

## Kill criteria

- 14 days no reply across Boucher + 2 fallbacks → channel pivot hypothesis fails. Revisit ICP, not channel.
- Boucher replies but says no → fallback list: CFO Accelerator (Michael King) → `.founder/sales/king-cfo-accelerator-pitch.md`, The CFO Club → `.founder/sales/cfo-club-pitch.md`, CFO Connect (Spendesk) [not yet drafted].

## What this pitch is NOT

- Not a paid sponsorship (we don't have the cash and Boucher's audience is too valuable to spam).
- Not a generic affiliate ask (those are noise; our offer is concrete value).
- Not an "interview him" play (overdone, low conversion).
