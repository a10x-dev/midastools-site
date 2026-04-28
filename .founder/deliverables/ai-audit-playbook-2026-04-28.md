# AI Tools Assessment Playbook — Source Intel from Armando (Apr 28)

**Source:** Twitter/X post from a practitioner running this exact business. Armando shared verbatim.
**Why it matters:** This is the productized service model for our Apr 28 coach/consultant pivot. Validates `/ai-audit` ($997) and gives us a missing top-of-funnel asset (free audit template).

---

## The Offer (verbatim from source)

| Item | Value |
|---|---|
| **Price** | $999 one-time |
| **Format** | "AI Tools Assessment" |
| **Includes** | 45-min recorded discovery call · custom report (3-7 tool recs) · 30-min walkthrough · 4-day quick-start plan |
| **Guarantee** | 5+ hours returned per week or full refund |
| **Author claim** | $1,000/hour effective rate · 5 months running · 4 assessments/mo = $3,996 baseline |
| **Backend** | 60% conversion to implementation packages ($5,000-10,000+) |
| **Free lead magnet** | `audittemplate.ai` (their email-capture funnel top) |

---

## The 4-Phase Framework

### Phase 1 — Discovery Call (45 min)
Five questions that surface the highest-ROI opportunities:
1. Walk me through yesterday. Where did your time actually go?
2. What tasks do you dread but can't hand off to anyone?
3. Where does work pile up waiting on you specifically?
4. What have you tried to automate but couldn't figure out?
5. What's the one thing that, if it ran itself, would change your week?

**Recording tool:** Fathom (auto-transcription).
**Pro tip from source:** Most clients underestimate context-switching cost. Email "checking throughout the day" = 45-60 min/day of lost productivity.

### Phase 2 — AI-Powered Analysis
Feed full transcript into Claude with this exact prompt:

> Analyze this business owner interview transcript. Identify 5-7 specific areas where existing AI tools could save significant time each week.
>
> For each opportunity:
> - Name the specific tool(s) you'd recommend
> - Estimate weekly hours saved
> - Rate implementation difficulty (easy/medium/hard)
> - Describe what the workflow looks like before and after
>
> Focus on tools that are production-ready today, not experimental. Prioritize opportunities with the highest time savings and lowest implementation friction.
>
> Transcript: [PASTE FULL TRANSCRIPT]

Then human review: cut anything that's a stretch. Add recommendations from your own experience.

### Phase 3 — The Report
Built in Gamma (or any presentation tool). Looks like a $10K consulting deliverable.

### Phase 4 — Implementation upsell
Process templates · automation packages · implementation tiers ($999 → $5K-10K+).

---

## Why This Works (Source's Strategic Framing)

**The translation gap:** AI tools are powerful. Business owners are confused. People who bridge the gap stay busy. Window is open NOW; eventually tools simplify and gap closes.

**Pricing logic:** Average client sees 6+ hr/wk freed up using ~$40/mo of tools. That's a 25x monthly ROI on a one-time $999 spend. Math sells itself.

**Pricing strategy from source:** "Raise your price every few clients until you start hearing 'no' more than 'yes.' That's your ceiling (for now)."

---

## Implications for Midas Tools

### What we already have ✅
- `/ai-audit` page live at $997 (commit history: pages/ai-audit.js)
- Stripe payment link: buy.stripe.com/cNi14m90j6iR7OI8VYcMM03
- Coach pivot shipped midnight Apr 28 (`/for-coaches` live)
- 21 paid kits = ready-made implementation upsell ladder
- 20 active subscribers (audited Apr 28) — ICP fit confirmed

### What we are MISSING vs the playbook ❌
1. **Free audit-template lead magnet** (their `audittemplate.ai`) — this is the email-capture surface we don't have. Highest leverage gap.
2. **5+ hr/week framing** in our /ai-audit copy — we currently say "$5,000+/year savings." The hours framing is more visceral and the source picked it for a reason.
3. **4-phase explicit structure** in our /ai-audit copy — we describe deliverables but not the call → analysis → report → walkthrough flow.
4. **5 discovery questions visible on the sales page** — proves the depth and de-risks the buyer's "what does the call actually feel like?" objection.
5. **Implementation tier menu** — we have 21 kits but they're not framed as "the upsell from your audit."

### Recommendations 🟢🟡🔴

🟢 **HIGH** — Build `/audit-template` free lead magnet. Email-gated, downloads a Notion-style AI Audit template (the 5 questions + scoring rubric + tool-recommendation framework). This is the single biggest funnel surface we're missing. **Ship today.**

🟢 **HIGH** — Rewrite `/ai-audit` hero with the playbook's exact framing: "5+ hours per week, returned. Or full refund." Add the 4-phase visual structure. **Ship today.**

🟢 **HIGH** — Add the 5 discovery questions to `/ai-audit` as a "What the call covers" section. Proves depth, de-risks the buyer. **Ship today.**

🟡 **MEDIUM** — Build `/ai-audit/implementation` page mapping our 21 kits to common audit outcomes ("Audit found content bottleneck → Coach Mega Pack + AI Content Month"). Sets up the $999 → $5K ladder. Ship Apr 30.

🟡 **MEDIUM** — Email broadcast to 20 active subs introducing `/ai-audit` with the new framing. Use first 3 audit slots as "founder pricing $497" to seed case studies. Ship Apr 29.

🔴 **LOW** — Don't drop price below $499 (founder pricing only). Source confirms the math at $999. Below $499 we're fighting the wrong battle.

---

## Risks / What Could Be Wrong

- **Source attribution:** Single Twitter/X post. The numbers ($1K/hr, 60% conversion) are unverified.
- **Competition:** `audittemplate.ai` already exists and ranks. We need to differentiate (e.g., "for solo coaches & consultants" specifically) rather than fight on generic "AI audit template."
- **Delivery cost:** A 45-min call + analysis + report + walkthrough at $997 = ~3-4 hours of human time. This requires Armando availability or hiring a fractional consultant. NOT fully autonomous.
- **The Apr 28 evolution:** Subscriber audit revealed our list isn't pure coaches/consultants — includes real estate, wellness, etc. The audit offer needs broader framing than just "coaches" — "solo service pros" works.

---

## Decision Asked of Armando

1. **Delivery:** Are you able to take 4 audit calls/month? If yes, /ai-audit is real. If no, we either (a) hire a fractional consultant or (b) make it async-only ("submit a Loom of your week, get the report") at lower price ($297-497).
2. **Pricing:** Lead with $997 or run a founder-pricing $497 special for first 5 case studies?
3. **Lead magnet name:** "AI Audit Template for Solo Service Pros" vs "The 5-Question AI Audit (Free Template)" — gut call.
