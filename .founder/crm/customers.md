# Customer CRM — MidasTools Paying Customers

**Purpose**: track every paying customer + cadence touches so we extract feedback, build LTV, and seed referrals. This is the primary record. Update on every send/reply.

**Conventions**:
- All sends use `Armando from MidasTools <hello@midastools.co>` with `reply_to=replies@midastools.co` so responses route to our inbound blob, not Gmail.
- Cadence per customer: **D+1** (thank-you + 2-question interview), **D+7** (usage check), **D+30** (next-product feedback), **D+90** (referral ask + new-product preview).
- "Status" reflects last-known signal, not last-action; an unrequited send sits at "awaiting reply".
- Response logging: paste reply gist + `Resend ID` from `read-replies.py` output.

---

## Active customers (MidasTools brand only)

### 1. Shantae Clinton — $97 All Kits Bundle (2026-04-29)

| Field | Value |
|---|---|
| Email | sclinton06@yahoo.com |
| Identity | Director, IT End User Experience at Dotdash Meredith |
| Profile | 35-50yo, MBA Kogod, Belleville NJ, no X/GitHub footprint |
| LTV so far | $97 |
| Highest-leverage SKU to upsell | None higher exists yet — she's already at the top of the catalog |
| LinkedIn | https://www.linkedin.com/in/sclinton06/ |

**Cadence log**:

| Date | Touch | Resend ID | Status | Notes |
|---|---|---|---|---|
| 2026-05-05 | D+6 thank-you + 2-Q interview ask | `5e885a49-ad66-41cf-9661-92f663e5f1af` | sent, awaiting reply | "what problem / which kit" |
| 2026-05-12 | D+13 usage check (if no reply) | — | scheduled | "even a 'nothing yet' is useful" |
| 2026-06-04 | D+30 next-product feedback | — | scheduled | "what would you pay $97 for next?" |
| 2026-08-03 | D+90 referral + preview | — | scheduled | offer her early access in exchange for 3 named introductions |

**Strategic notes**:
- HIGHEST-confidence buyer profile we have. Lookalike vector is the foundation of cold-outreach Tier 1.
- If she replies with even a fragment of "what made me buy" — capture verbatim into wiki page `[[$500-$5,000 SMB AI Audit Market]]` cross-reference, plus extract for cold-outreach social-proof line.
- If she replies positive: ASK PERMISSION to anonymously cite "Director of IT at a major content publisher" in cold-outreach copy.

---

### 2. Arnaud Demes — $29 AI Prompt Mega Pack (2026-05-02)

| Field | Value |
|---|---|
| Email | arnaud.ademes@gmail.com |
| Identity | Probable Paris finance/AI generalist (low confidence) |
| Profile | French, 75015 Paris, no anchored social profile under `arnaud.ademes` |
| LTV so far | $29 |
| Highest-leverage SKU to upsell | $97 All Kits Bundle (Mega Pack → Bundle is the Stripe-Link path) |

**Cadence log**:

| Date | Touch | Resend ID | Status | Notes |
|---|---|---|---|---|
| 2026-05-05 | D+3 thank-you + 2-Q interview ask | `076daed2-6fad-401c-9470-eeb56f2609cf` | sent, awaiting reply | "what role / which prompt" |
| 2026-05-12 | D+10 usage check | — | scheduled | gentle nudge if no reply |
| 2026-06-04 | D+30 next-product feedback + Bundle pitch | — | scheduled | upsell hook |
| 2026-08-03 | D+90 referral + preview | — | scheduled | French-language lookalikes |

**Strategic notes**:
- Identity is low-confidence; reply will be the disambiguation. If he says "AI Engineer at X" we update the ICP brief.
- French-language audience is a separate lookalike vector — don't lump with Shantae.

---

## OpenClaw brand customers (separate property — note for cross-brand context only)

### George Nelson — $29 OpenClaw Entrepreneur Starter Kit (2026-03-13)

⚠️ **Bought from `openclaw-starter-kit.vercel.app`, NOT midastools.co.** Out of MidasTools cadence scope. If we add OpenClaw CRM later, port his record there.

| Email | Identity | LTV |
|---|---|---|
| nelson.george.edward@gmail.com | Owner, All Drain LLC (Las Vegas plumbing) | $29 (OpenClaw brand) |

---

## Next inbound cohort tracker (cold outreach prospects)

When cold-outreach lookalikes purchase, port them here under "Active customers" and start cadence at D+1.

| Email | Source | Sent | Replied | Bought | Notes |
|---|---|---|---|---|---|
| dwooten@hearst.com | shantae-lookalike-cold (batch1) | 2026-05-06 (id `a560ad67`) | — | — | Donnie Wooten, Sr Director IT & Operations, Hearst Television. /p/donnie-wooten. Pattern-verified via Hunter (88/100). |
| frank.lodestro@hearst.com | shantae-lookalike-cold (batch1) | 2026-05-06 (id `e47e4e80`) | — | — | Frank LoDestro, Director IT Compliance, Hearst. /p/frank-lodestro. Hunter 88/100. |
| kris.smith@hearst.com | shantae-lookalike-cold (batch1) | 2026-05-06 (id `ace3565e`) | — | — | Kris Smith, VP Identity & Collaboration, Hearst Technology. /p/kris-smith. Hunter 89/100. |
| asage@pmc.com | shantae-lookalike-cold (batch1) | 2026-05-06 (id `7eb9279d`) | — | — | Alexander Sage, Director IT, Penske Media. /p/alexander-sage. Hunter 100/100 (best-confidence email). |
| brian.lee@buzzfeed.com | shantae-lookalike-cold (batch1) | 2026-05-06 (id `6f23c172`) | — | — | Brian Lee, Sr Director Engineering, BuzzFeed (12+yr tenure). /p/brian-lee. Hunter 43/100 (lower confidence; valid status). |
| dwooten@hearst.com | batch1 D+2 nudge | 2026-05-08 (id `16885942`) | — | — | Quiz pivot: pointed at /q/donnie-wooten. Last-touch framing. |
| frank.lodestro@hearst.com | batch1 D+2 nudge | 2026-05-08 (id `71cd90e8`) | — | — | Quiz pivot: /q/frank-lodestro. Last-touch framing. |
| kris.smith@hearst.com | batch1 D+2 nudge | 2026-05-08 (id `d3c0c1ae`) | — | — | Quiz pivot: /q/kris-smith. Last-touch framing. |
| asage@pmc.com | batch1 D+2 nudge | 2026-05-08 (id `bebfaf0e`) | — | — | Quiz pivot: /q/alexander-sage. Last-touch framing. |
| brian.lee@buzzfeed.com | batch1 D+2 nudge | 2026-05-08 (id `14d5f385`) | — | — | Quiz pivot: /q/brian-lee. Last-touch framing. |

---

## Operational checklist (run at the top of each session)

```
python3 .founder/tools/read-replies.py        # show unread replies
```

Then for each unread:
1. Read the reply (note tone, ask, signal type — feedback / question / objection / silence-breaker)
2. Reply within 30 min using `send-one.py --reply-to replies@midastools.co`
3. Log the reply + outbound in this file
4. Ack the reply: `python3 .founder/tools/read-replies.py --ack <ID>`

---

## Cadence templates

### D+7 usage check (light touch, 1 paragraph)
> Hey {first}, no pressure to respond — just checking in a week after you grabbed {product}. If you've got 10 seconds: did anything in there work? Did anything not? I'm rewriting the next batch and your one-line answer would shape it. — Armando

### D+30 next-product ask
> Hey {first}, it's been a month since you grabbed {product}. Two questions: (1) which kit/prompt did you end up actually using? (2) what's the next AI workflow you wish I'd build a pack around? Your answer literally directs the next product. — Armando

### D+90 referral + early access
> Hey {first}, I'm shipping {next-product} on {date} and existing customers get first crack at $X (vs $Y public). If you know 1-2 people like you who'd benefit, I'll give them the same price + a free upgrade. — Armando
