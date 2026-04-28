# AI Clarity Assessment — Upsell Ladder

**Purpose:** The implementation menu we offer AFTER delivering the $997 assessment.
**Target conversion:** ~60% of assessment clients buy at least one tier (per the framework).
**Average upsell value:** $1,500 → $7,500 → goal $3,500 blended.

The assessment is the entry point. **Implementation is where revenue per client scales from $997 to $5,000-10,000+.**

---

## The Ladder (5 tiers)

### Tier 0 — DIY (default, $0)
The client implements the report themselves. Most read-then-do-nothing — that&apos;s expected, and we follow up at T+10 days with a soft nudge.

---

### Tier 1 — DIY+ (Mega Pack add-on) — $97
**What they get:**
- Coach Edition Mega Pack (200+ prompts)
- Configured to slot into the recommended tool stack from their assessment
- &ldquo;On-brand from day 1&rdquo; — saves them weeks of prompt-iteration

**Stripe link:** `https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d`

**Pitch (1 line):** &ldquo;If you&apos;re going to set up Tool #1 yourself this week, the Mega Pack adds 200+ ready-made prompts so the output is brand-aligned from message one. $97 once.&rdquo;

**Conversion target:** 30% of assessment clients

---

### Tier 2 — Implementation Lite — $1,500 (scoped on report)
**What they get:**
- We set up Tool #1 from their report end-to-end
- 5-day delivery
- Includes: account creation, brand-voice configuration, 5 saved templates/prompts, 1 integration with their existing stack (CRM/email/calendar/Notion)
- 1 x 30-min handoff call
- 14-day post-handoff email support

**Pricing logic:** $300/hour × 5 hours = $1,500. Premium positioning over $200/hr generic VAs.

**Stripe link:** Currently quoted ad-hoc → **TODO: create Stripe product `imp_lite_1500`** before first sale lands.

**Pitch (1 line):** &ldquo;Don&apos;t want to wrestle with setup? We do Tool #1 for you in a week, bilingual to your brand voice. $1,500 fixed.&rdquo;

**Conversion target:** 20% of assessment clients

---

### Tier 3 — Full Stack Build — $3,500
**What they get:**
- All 3-5 tools from the report set up end-to-end
- 14-day delivery
- Includes: all account setup, brand-voice tuning, 15+ templates/prompts, integrations between tools, team-training video (10-15 min Loom), written runbook, and a 60-min training call
- 30-day post-handoff email support
- 1 quarterly check-in call (90 days out)

**Pricing logic:** Anchor on framework&apos;s &ldquo;average $3,000-5,000 implementation deal.&rdquo; We start at $3,500 and raise after #5 sale.

**Stripe link:** **TODO: create `imp_full_3500`** Stripe product

**Pitch (1 line):** &ldquo;The full report, implemented. We hand you back 5+ hours/week in 14 days. $3,500 fixed.&rdquo;

**Conversion target:** 10% of assessment clients

---

### Tier 4 — Quarterly Retainer — $1,500/mo (3-month minimum)
**What they get:**
- Monthly 60-min strategy call
- Ongoing optimization of tools they already implemented
- Quarterly &ldquo;state of AI&rdquo; brief specific to their industry
- Email-anytime access for tactical questions
- New-tool research as the landscape changes (3-4 new tools/quarter)
- Slack channel access (shared with their team)

**Pricing logic:** $1,500/mo × 3-month minimum = $4,500 floor. 12-month retainer = $18,000. Highest LTV tier.

**Stripe link:** **TODO: create `imp_retainer_1500_monthly`** subscription

**Pitch (1 line):** &ldquo;If you want a fractional AI Head-of-Ops on call, that&apos;s the retainer. $1,500/month, 3-month min, cancel anytime after.&rdquo;

**Conversion target:** 5% of assessment clients (high-LTV, low-volume)

---

### Tier 5 — Enterprise Custom — $7,500+ (scoped)
**What they get:**
- Multi-stakeholder workshops
- Custom-built AI tooling beyond off-the-shelf SaaS
- Multi-team rollout with change management
- 90-day delivery cycles
- Founder-level engagement

**When to offer:** Only when discovery surfaces 10+ headcount and a stated $50K+ AI budget.

**Pricing logic:** Quote bespoke. Floor $7,500. Cap to be discovered.

---

## Upsell Mechanics

### The placement
- The ladder appears on **Page 16** of the assessment report
- AND in the post-review-call follow-up email (within 1 hour of call)
- AND linked from the homepage `/services` page (so they can come back)

### The cadence (post-review-call follow-up)
| Touchpoint | Day | Channel | What we send |
|---|---|---|---|
| Review call wrap-up | T+0 (within 1 hr) | Email | Report PDF + upsell ladder + Stripe links for Tier 1 |
| Implementation nudge | T+3 | Email | &ldquo;Set up Tool #1 yet? If not, here&apos;s 15-min office hours&rdquo; |
| Tier 2/3 soft pitch | T+10 | Email | &ldquo;Most clients take Tool #1 live within 10 days. If you&apos;re stuck, here&apos;s our $1,500 Lite option.&rdquo; |
| Retainer pitch | T+30 | Email | ROI check-in → if positive, mention quarterly retainer |
| Quarterly check-in | T+90 | Email | NPS ask + testimonial ask + retainer re-pitch |

### What we WILL NOT do
- ❌ Hard-sell during the review call
- ❌ Add fake urgency (&ldquo;limited spots&rdquo;)
- ❌ Bundle the report and Tier 2 to obscure the upsell
- ❌ Discount Tier 2-3 to close (preserves $300/hr positioning)
- ❌ Bait-and-switch on scope — every tier&apos;s deliverables are written in the report PDF

---

## Pricing escalation discipline

| Cumulative implementations sold | Tier 2 price | Tier 3 price | Tier 4 price |
|---|---|---|---|
| 0–5 | $1,500 | $3,500 | $1,500/mo |
| 6–12 | $1,997 | $4,997 | $1,997/mo |
| 13–25 | $2,497 | $5,997 | $2,497/mo |
| 26+ | $2,997 | $7,500 | $2,997/mo |

Per the framework: **raise the price every 4-5 clients until you start hearing &ldquo;no&rdquo; more than &ldquo;yes.&rdquo;**

---

## TODO list (operational)

- [ ] Create Stripe product `imp_lite_1500` ($1,500 one-time)
- [ ] Create Stripe product `imp_full_3500` ($3,500 one-time)
- [ ] Create Stripe subscription `imp_retainer_1500_monthly` ($1,500/mo, 3-mo min via metadata)
- [ ] Add `/api/setup-implementation-tiers` script (idempotent, follows pattern of `/api/setup-dfy`)
- [ ] Wire all 3 Stripe links into `pages/ai-audit.js` ladder section once live
- [ ] Update `/services` to feature Tier 2-3 as upsell entry points
- [ ] Build email automation (Resend) for the T+0 / T+3 / T+10 / T+30 / T+90 cadence
