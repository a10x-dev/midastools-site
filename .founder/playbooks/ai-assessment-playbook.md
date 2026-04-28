# AI Clarity Assessment — Operating Playbook

**Status:** 🟢 Active (productized 2026-04-28)
**Owner:** Research-analyst co-founder + Armando
**Product page:** [/ai-audit](https://www.midastools.co/ai-audit)
**Stripe link:** `https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03`
**Price point:** $997 (will move to $999 once we hear "no" more than "yes")

---

## North Star

**We sell clarity, not automation.** A coach paying $200/hour for their time gets ROI on a $997 assessment in the first 5 hours/week we save them. That's the math we anchor every word of the offer on.

If we can't confidently say "this tool, for this use case, in this order, will recover X hours/week," we don't recommend it.

---

## The 4-Phase Framework

| Phase | When | Duration | Output |
|---|---|---|---|
| 1. Discovery Call | Day 1 | 60 min Zoom | Recorded transcript + analyst notes |
| 2. AI Analysis | Days 2-5 | 4-6 hrs total work | Internal scoring matrix + tool shortlist |
| 3. The Report | Day 6 | 2-3 hrs build + QA | Final 15-25 page PDF |
| 4. Review Call | Day 7 | 30 min Zoom | Client armed to act, upsell menu delivered |

Total elapsed: 7 days. Total internal work: ~8-10 hours per assessment.

At $997 / 9 hours of work, that's **~$110/hour effective rate**. The upsell ladder is where we scale to $200+/hour.

---

## Phase 1 — Discovery Call

### Pre-call (T-24h)
1. Send Zoom link + recording consent form
2. Send the 1-page pre-call brief (`.founder/sales/ai-assessment-discovery-questionnaire.md`) — they fill out 8 questions in ~10 minutes
3. **Research the prospect's web presence FIRST** (per `feedback_research_subscribers_first.md`):
   - Their website
   - Their LinkedIn / About page
   - Their domain registrar (any signal of a personal brand?)
   - 2-3 of their public posts/content
   - Any prior subscriber-intel JSON in `.founder/data/subscribers/`

### During the call (60 min)
**Structure:** Live interview, not a script. Take notes, but ALWAYS chase follow-up questions over the next planned question.

**Opening (5 min):**
- Recording-on confirmation
- "Tell me about your business in one sentence as if I'd never heard of it"
- "What does a great month look like for you in revenue terms?"

**Diagnostic (35 min):** dig into:
- **Time audit:** Where is the last 5 hours of your work week going?
- **The $200 problem:** What single problem, if solved, would unlock the next $200K of revenue?
- **The toleration:** What thing in your workflow has been broken for 3+ months and you keep going "I should fix that"?
- **The tool graveyard:** What 3 AI/SaaS tools did you try in the last year and abandon? Why?
- **The contractor/VA cost:** Who do you currently pay to do work AI could potentially do?
- **The brand voice problem:** Is your content currently written by you, a contractor, or generic AI? How do you feel about it?
- **The blocker:** If you weren't here in this call, what would be the next thing you'd try yourself?

**Synthesis (15 min):**
- Read back 3 themes you heard, in their words
- Confirm or correct
- Mention 2-3 candidate tools (without committing — "we'll evaluate these against 50+ alternatives")
- Set expectation: report in 5-6 days, review call on day 7

**Close (5 min):**
- Ask: "What would make this report a 10/10 for you to read?"
- Schedule the review call NOW (don't leave it floating)

### Post-call (T+2h)
1. Save Zoom transcript to `.founder/data/assessments/<client-slug>/transcript.md`
2. Write 200-word "themes summary" — capture what THEY said, in THEIR words
3. Begin tool-research scan

---

## Phase 2 — AI-Powered Analysis (Days 2-5)

### Step 2.1 — Pattern extract (45 min)
Run the discovery transcript through Claude with this prompt:

```
You are analyzing a discovery-call transcript for an AI Clarity Assessment.

Identify:
1. The 3 biggest time sinks the client mentioned (in their words, with quotes)
2. The 3 things they mentioned in passing that actually represent bigger leverage than they realize (the "connect-the-dots" insights)
3. The 3 emotional reasons they're hiring this assessment (frustration, fear, ambition)
4. Their AI fluency level (0-10) based on tools they've tried and the language they used
5. Their decision-maker style: data-driven, gut-feel, social-proof-driven, or skeptical
```

### Step 2.2 — Tool scoring matrix (2 hrs)
Score 15-25 candidate AI tools against THIS client on:
- Fit to their stated workflow (0-10)
- Fit to their AI-fluency level (0-10)
- Fit to their budget tolerance (0-10)
- Hours saved per week (estimate, conservative)
- Setup time for them
- Ongoing maintenance cost
- Personal-test-confirmed YES/NO

**Reject anything we have NOT personally tested in a similar workflow.** Per Armando's framework: *"If you can't demo it live on the review call, don't include it in the report."*

### Step 2.3 — Distill to 3-5 (1 hr)
**3-5 is the sweet spot.** More than 7 = paralysis = client implements zero. Per the framework.

### Step 2.4 — Write the rejection list (30 min)
For 3-5 popular AI tools we did NOT pick, write 1-2 sentences on why not for THIS client. This is the differentiator vs every free listicle on the web.

---

## Phase 3 — The Report (Day 6)

Use the master template at `.founder/sales/ai-assessment-report-template.md`.

### Quality bar
- 15-25 pages PDF
- Looks like Gamma or a clean Notion export — never a Word doc
- Page 1 = executive summary (top 3 moves, hours saved, year-1 value)
- Cover image personalized to their business

### QA checklist before sending
- [ ] Every recommendation has a use case from THEIR actual workflow
- [ ] Every recommendation has hours-saved/week estimate
- [ ] Every recommendation has monthly $ cost
- [ ] At least 1 recommendation feels "obvious in hindsight" — that's the magic
- [ ] At least 1 connect-the-dots insight that ONLY a full conversation could surface
- [ ] Rejection list has 3-5 tools with reasons
- [ ] Implementation order is explicit (Tool #1 first, Tool #2 second...)
- [ ] Year-1 ROI projection on a single line at the end
- [ ] Upsell menu (DIY assist / partial / full) priced and visible
- [ ] No tool we haven't personally tested in similar context

### Delivery
- PDF + raw editable copy (Notion or Google Doc) — they own it
- Email it 18-24 hours BEFORE the review call so they have time to read

---

## Phase 4 — Review Call (Day 7)

### Pre-call
- Re-read the report
- Note 3 questions you anticipate they'll ask
- Have the upsell-menu page open in a tab

### During (30 min)
- Walk through Page 1 → Page 5 (the meat) — 12 min
- Open Q&A — 12 min
- Soft upsell — 6 min: "If you want help implementing Tool #1, here's the menu — no pressure, sleep on it, we're here."

### Post-call
- Send a 3-line summary email within 1 hour:
  - The next 1 thing to do this week
  - Their report PDF (re-attach)
  - The upsell menu (with Stripe links if they showed interest)

### The follow-up cadence
- T+3 days: "Did you set up Tool #1?" → if no, offer 15-min office hours
- T+10 days: Implementation upsell touch
- T+30 days: ROI check-in — turns into testimonial ask

---

## Pricing Discipline

Per the framework: **raise the price every 4 clients until you start hearing "no" more than "yes."**

| Client # | Price | Notes |
|---|---|---|
| 1-4 | $997 (current) | Stripe link already live |
| 5-8 | $1,497 | If conversion ≥50% on 1-4 |
| 9-12 | $1,997 | If conversion ≥50% on 5-8 |
| 13+ | $2,497 | Premium positioning |

We will NOT discount below $997 to close a sale. Discounting clarity is anti-positioning.

---

## Common Mistakes To Avoid

1. **Don't recommend tools we haven't tested.** If we can't demo live on the review call, it doesn't make the report.
2. **Don't overwhelm.** 3-5 recommendations max. >7 = client implements 0.
3. **Don't skip the discovery call.** A questionnaire instead of a live interview cuts insight quality in half.
4. **Don't undercharge from imposter feelings.** $997 saving 6 hr/wk at $100/hr = $31,200/yr value. We're underpriced if anything.
5. **Don't promise automation.** We promise *clarity*. Implementation is the upsell.
6. **Don't write generic insight.** Every line of the report must reference something the client actually said.

---

## What Triggers a Full Refund

- Client felt the report didn't surface 5+ hrs/week of recoverable time
- Client felt the recommendations were generic (i.e., they could have Googled them)
- Discovery call was rescheduled >3 times by us (operational failure)

We refund without ceremony. The framework's value is asymmetric — better to refund 1 in 10 and protect the brand than to argue.

---

## Productization KPIs to Track

- Time per assessment (target: ≤9 internal hours)
- Conversion rate landing page → Stripe (target: 1.5%+)
- Conversion rate Stripe → completed assessment (target: 95%+)
- Conversion rate assessment → implementation upsell (target: 60% per framework)
- NPS post-review-call (target: 9+)
- Refund rate (target: <5%)

---

## File Locations

| Asset | Path |
|---|---|
| Landing page | `pages/ai-audit.js` |
| This playbook | `.founder/playbooks/ai-assessment-playbook.md` |
| Discovery questionnaire | `.founder/sales/ai-assessment-discovery-questionnaire.md` |
| Report template | `.founder/sales/ai-assessment-report-template.md` |
| Upsell menu | `.founder/sales/ai-assessment-upsell-menu.md` |
| Per-client transcripts | `.founder/data/assessments/<slug>/` |
| Productization memo | `.founder/deliverables/ai-assessment-productization-2026-04-28.md` |
