# MidasTools Pivot — "Tools That Make You Money" (2026-05-28)

**Mandate (Armando):** audit + research + define & execute a strategy to bring revenue ASAP. Pivot/bold allowed. Reframed by Armando mid-session: *"our mantra is the name — MidasTools — tools, any tool that makes users money, which makes us money too."*

## The diagnosis (audit + market research, both converged)
- **Prompt packs are a $155-class business permanently.** Near-zero barrier, race to the bottom. 66 days / $155 is the *typical* outcome, not bad luck.
- **Our "AI tools" were never AI.** Every generator is client-side template logic. No LLM, no API key. We shipped *toys* (Ghibli, pet portraits) that attract people who never pay, and *static* prompt packs that make nobody money. The Midas promise was never actually delivered.
- **What makes solo AI builders money in 2026:** tools/software (90% margin) and ONE specific measurable outcome for ONE narrow niche. One retainer/recurring client beats our entire 66-day revenue.
- **Distribution beats product:** content/ads moved $0; direct outreach + commercial-intent tools is how money-minded buyers are reached.

## The strategy
**Reposition MidasTools around its literal promise: AI tools that make you money.** Demote toy generators; build genuine *money-tools* — tools whose output directly earns the user money — and monetize the high-value tier (MidasTools Pro, recurring, zero fulfillment).

### Flagship #1 — The Outreach Machine (SHIPPED 2026-05-28)
Paste offer + prospect → personalized cold email + LinkedIn DM + 3-touch follow-up sequence that books calls. Money outcome = **clients**. Daily repeat use. High commercial search intent.
- `pages/outreach-machine.js` + `pages/api/outreach-machine.js`
- **Graceful LLM fallback:** real Claude (Haiku 4.5) when `ANTHROPIC_API_KEY` is set, else a strong framework engine. Works today; auto-upgrades when key lands.
- Per-IP daily cap on the metered LLM path protects spend.
- Email-gated after 3 free generations (source `outreach-machine`).
- Homepage hero repositioned to the money promise; tool featured first on `/tools`.

## The ONE unblock (Armando-only, can't self-provision)
**`ANTHROPIC_API_KEY` on Vercel** → flips the tool from "good framework templates" to genuine AI personalization. His Anthropic account, metered spend (~fractions of a cent/generation), capped + email-gated so it can't bleed money. Until then the tool still works in framework mode.

## Monetization decision (pending Armando)
MidasTools Pro — unlimited AI + saved campaigns + bulk mode + all money-tools. No auth system exists, so Pro needs an emailed unlock-code flow (build next). v1 ships with a Pro early-access capture (`outreach-pro-waitlist`) to collect the *right* audience + pre-sell. Open question: price ($/mo subscription vs one-time lifetime unlock). Recommendation: start with a one-time lifetime "Pro Pass" (~$29–49) — fastest to revenue with no auth, no churn ops — then layer subscription once there's usage.

## 30-day plan
- **Wk 1:** Outreach Machine live (✅). Add `ANTHROPIC_API_KEY`. Build Pro Pass (Stripe one-time + unlock-code via existing webhook→email). Wire the Pro CTA to real checkout.
- **Wk 2:** Distribution — Armando fires 10 warm DMs/day to a narrow niche (creators/coaches/agencies per his edge) pointing at the free tool; the tool converts to Pro. Build money-tool #2 (candidate: AI Sales-Page / Offer Builder).
- **Wk 3–4:** Double down on whichever tool gets usage; kill what doesn't. Target: first Pro sale, then first $1k cumulative from Pro.

## Kill criteria
If the repositioned tool + Pro Pass produce **0 Pro sales after 200 real tool sessions OR 30 days**, the money-tool thesis is wrong and we re-diagnose distribution, not build more tools.
