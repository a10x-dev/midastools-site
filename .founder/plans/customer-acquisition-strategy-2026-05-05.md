# Customer Acquisition Strategy — 2026-05-05

**Authored:** Claude (with Armando's autonomy grant: "you decide what is the strategy here you are in charge just bring more paying customers this product is yours now")
**Status:** Active. Single bet committed.
**Decision date for kill-or-iterate:** 2026-05-14 (T+9 days)

---

## The single bet

**"Replicate the 2 paying buyers via concentric outreach + customer-feedback loops."**

We have 2 confirmed MidasTools-brand paying customers (Shantae $97, Arnaud $29). They told us more about who pays for our product than 156 sessions of indie-hacker / Reddit / Dev.to content ever did. The play is to extract every drop of feedback from the 2 we have, then put the same offer in front of 50-100 lookalikes through the channels they actually live in.

This bet rejects three previously-tried channels with explicit kill receipts:
- ❌ Reddit/HN/IndieHackers content (none of 2 buyers visible there)
- ❌ Dev.to article shipping (66 articles → 695 lifetime views, falsified)
- ❌ X/Twitter posting (per memory, "Reddit/X posting doesn't work")

It accepts these channels with positive signal:
- ✅ Customer email (we have 2 paying — replies are gold)
- ✅ LinkedIn cold DM (Shantae's profile is the Rosetta Stone)
- ✅ Stripe Link tripwire conversion (all 3 buyers used it)

---

## Why I'm picking this bet (over the alternatives I considered)

| Alternative | Why I'm not picking it tonight |
|---|---|
| Ship 5 more gists | 14 gists already live, 0 audit-pitch replies; channel saturation |
| Drop /ai-audit price to $297 | Memory says repricing reinforces "vague deliverables" objection (Apr 28 ICP intel). Doesn't fix the funnel |
| Run paid LinkedIn ads | Requires Armando's card on file + budget; not available tonight |
| Build a viral free tool | We have 22 free tools already; conversion to paid is the real bottleneck, not top-of-funnel |
| Cold-DM 50 LinkedIn prospects manually | Highest-EV non-tonight option, deferred to wave 2 |

I'm picking customer-driven concentric outreach because (a) the 2 customers cost us $0 to talk to and have already proven willingness to pay, (b) referral conversion rates are 5-10x cold, (c) 1 reply unlocks the persona-validation we've been guessing about for 156 sessions.

---

## Concrete play sequencing

### Wave 1 — TONIGHT (already shipped)

- ✅ **Shantae thank-you** — sent 2026-05-05, Resend ID `5e885a49-ad66-41cf-9661-92f663e5f1af`. 2-question interview ask. Reply-to `replies@midastools.co` (lands in our blob).
- ✅ **Arnaud thank-you** — sent 2026-05-05, Resend ID `076daed2-6fad-401c-9470-eeb56f2609cf`. Same pattern, French finance/AI-tailored.
- ✅ **CRM tracker** — `.founder/crm/customers.md` with full cadence (D+1/D+7/D+30/D+90).
- ✅ **Reply ingestion** — Resend Inbound webhook live; `read-replies.py` shows unread.

### Wave 2 — 2026-05-06 to 2026-05-12 (this week)

- **Daily** (top-of-session): run `python3 .founder/tools/read-replies.py`. Any reply in <30 min response SLA per `.founder/playbooks/reply-handling-playbook.md`.
- **2026-05-10** (D+5 Shantae / D+8 Arnaud): if zero reply, send single one-line nudge ("hey just bumping this in case it landed in spam"). Same body file, no new asks.
- **2026-05-08-12**: cold-outreach prep — source 10 Shantae-lookalike LinkedIn profiles + emails (need Vibe Prospecting credits OR Hunter.io OR manual). Pre-written templates live in `.founder/outreach/cold-shantae-lookalike-template.md`.
- **2026-05-12** (D+7 Shantae): if any positive reply received, fire referral-ask template (3 named intros for early-access price on next product). Pre-written.

### Wave 3 — 2026-05-13 to 2026-05-22

- **2026-05-13**: kill-or-iterate decision. Inputs:
  - # of customer replies (target ≥1 of 2)
  - # of cold replies (target ≥1 of 5-10 sent)
  - # of referrals offered (bonus)
- **If positive signal**: scale cold outreach to 50/week. Spec: `.founder/plans/cold-outbound-linkedin-spec.md` (already exists).
- **If zero signal**: pivot — see kill criteria below.

---

## Kill criteria (concrete, dated, falsifiable)

By **2026-05-14 23:59 local**, this bet is dead unless **at least ONE** of these fires:

| Criterion | Threshold | Result |
|---|---|---|
| Customer reply | ≥1 of 2 thank-yous gets a substantive reply | Bet lives, scale referral asks |
| Cold reply | ≥1 of 5-10 cold sends gets a substantive reply | Bet lives, scale to 50/wk |
| Stripe sale | ≥1 new MidasTools sale (any SKU) | Bet lives regardless of source |
| Referral lead | ≥1 named intro from any source | Bet lives, pursue intro |

**If 0/4 fire by May 14**, I was wrong about the channel. Pivot options:
- **Option P1**: Direct LinkedIn ads ($200 test, requires Armando card)
- **Option P2**: Pivot to in-product CTA (signed-in-via-quiz upsell to $29 tripwire)
- **Option P3**: Kill MidasTools acquisition and double down on the OpenClaw side that already had a sale (George)
- **Option P4**: Kill all outreach, spend the cycles on a single paid SKU rewrite (homepage hero copy for "established professional, not AI-native" per ICP research)

I will not unilaterally execute any pivot — May 14 is a decision day for Armando, not a build day for me. I'll have a 1-page kill-or-iterate brief ready that morning.

---

## Scope guardrails (what I will NOT do without explicit ok)

- ❌ Email any 3rd party (non-customer, non-confirmed-prospect) without Armando's review of the message + recipient list.
- ❌ Spend Resend volume beyond 5 cold emails/day until we see reply rates.
- ❌ Spend Vibe Prospecting credits without Armando's explicit topup green-light.
- ❌ Run paid ads (LinkedIn / Meta / Google) without Armando wiring the card.
- ❌ Lower /ai-audit, /ai-prompt-mega-pack, or /all-kits prices below current ($997, $29, $97). Repricing is its own decision.
- ❌ Promote /ai-audit or coach/audit pages to homepage hero (per `feedback_protect_flywheel`).

---

## What I'll do autonomously (within those guardrails)

- ✅ Reply to inbound replies within 30 min using `send-one.py` + reply-handling playbook.
- ✅ Run `read-replies.py` at top of every session as a stand-up.
- ✅ Pre-write any outreach asset (templates, prospect lists, persona briefs) so when the moment comes, fire = one command.
- ✅ Update CRM, schedule, and this strategy doc as the situation changes.
- ✅ Ship a referral-ask email if a customer replies positive.
- ✅ Send the May 10 nudge follow-up to Shantae/Arnaud if zero reply by then (low-risk, 1-line).
- ✅ Source up to 10 LinkedIn profile URLs (publicly visible) for Shantae lookalikes — output as a target list for Armando's review.

---

## Tonight's deliverables (this session)

1. ✅ `.founder/crm/customers.md` — CRM tracker
2. ✅ Shantae + Arnaud thank-yous — sent
3. ✅ This strategy doc (`.founder/plans/customer-acquisition-strategy-2026-05-05.md`)
4. ⏳ `.founder/outreach/cold-shantae-lookalike-template.md` — pre-written cold email + LinkedIn DM
5. ⏳ `.founder/outreach/referral-ask-template.md` — pre-written referral email for positive customer reply
6. ⏳ `.founder/prospects/shantae-lookalike-target-companies.md` — 10 target companies (people TBD)
7. ⏳ `.founder/SCHEDULE.md` — updated with cadence + daily reply check

---

## Confidence

**70%** that the customer-feedback half of this strategy moves the KPI. Real customers replying = real signal. Even one reply changes the persona model.

**40%** that the cold-outreach half moves the KPI within 9 days. Cold conversion at our scale (5-10 prospects, no warm intro) is statistically a coin flip — enough sample variance that 0 replies isn't proof of a dead channel.

**90%** that committing to this single bet (vs. 5 parallel experiments) gives us a cleaner kill-or-iterate signal on May 14 than the 30-abandoned-decisions pattern of prior sessions.

Lower confidence on cold-outreach fire-rate because credit-blocked on Vibe Prospecting tonight; need Armando topup or alternative email-discovery path before wave 2 fires.
