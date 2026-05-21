# Midas Tools — AI Team Adoption Kit
# 02: Sales Playbook

Six paste-and-run prompts for AE, SDR, and Sales Ops workflows: Gong call analysis, CRM enrichment, battlecards, pipeline reporting, outreach sequences, and discovery notes. These are the workflows where AI saves a senior AE 4–6 hours per week — but only if the prompts are sized to produce a real artifact.

Built around a B2B SaaS sales motion (5–6 figure deals, multi-stakeholder). For PLG / self-serve, adapt the variables.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[PRODUCT] — What you sell (1-sentence description)
[ICP] — Ideal customer profile (industry, size, role, trigger)
[CRM] — Salesforce, HubSpot, Attio, etc.
[DEAL STAGE] — Discovery, Eval, Negotiation, Closed-Won/Lost
```

---

## Prompt 1: Gong / Call Recording Analyzer

### Prompt

```
You are a senior enterprise sales coach analyzing a recorded sales call for [COMPANY NAME].

CONTEXT:
- We sell: [PRODUCT]
- Our ICP: [ICP]
- This call type: [Discovery / Demo / Technical Eval / Negotiation / Renewal]
- Deal value: [APPROX $]
- Stage in pipeline: [DEAL STAGE]
- Buyer side present: [LIST ROLES — e.g. VP Eng + Director Security + IC engineer]
- Seller side present: [LIST ROLES]

CALL TRANSCRIPT:
[PASTE FULL TRANSCRIPT — Gong / Chorus / Fathom export]

Produce a structured analysis in this exact format:

## 1. Deal Health: GREEN / YELLOW / RED
One-sentence justification.

## 2. What Went Well (3-5 specific moments)
For each: timestamp + what the seller did right + why it worked.

## 3. What Was Missed (3-5 specific moments)
For each: timestamp + what was said + what a great rep would have done instead. Examples:
- Buyer mentioned [PAIN]. Seller pivoted to demo instead of asking a follow-up. Should have asked: "What's the cost of that today?"
- Buyer asked about pricing at minute 12. Seller gave it. Should have anchored on value first.

## 4. Buyer Signals
Score each on a 1-5 scale with evidence:
- Urgency (is there a real deadline?)
- Budget (was budget mentioned or implied?)
- Authority (was a decision-maker present?)
- Champion strength (did anyone advocate for us?)
- Competition (which other vendors named?)

## 5. Objections Raised
List each objection (verbatim if possible), how the seller responded, and a stronger response option. Mark which objections went unanswered.

## 6. MEDDIC / MEDDPICC Update
For this account, fill in what we now know:
- Metrics
- Economic Buyer
- Decision Criteria
- Decision Process
- Identify Pain
- (Paper Process)
- Champion
- (Competition)
Flag fields still unknown.

## 7. Top 3 Next Actions
For the AE, before the next touch:
1. [ACTION] — due [WHEN]
2. [ACTION] — due [WHEN]
3. [ACTION] — due [WHEN]

## 8. Suggested Follow-up Email
Draft the follow-up email the AE should send within 24 hours. Reference 2-3 specific things the buyer said, propose a clear next step, and keep it under 150 words.

Tone: Direct coach feedback. No "great job overall" filler.
```

---

## Prompt 2: CRM Account Enrichment

### Prompt

```
You are a Sales Ops analyst enriching a [CRM] account record for [COMPANY NAME].

ACCOUNT NAME: [COMPANY]
WEBSITE: [URL]
KNOWN CONTACTS: [LIST NAMES + TITLES]

CONTEXT FROM PUBLIC SOURCES (paste any of: LinkedIn snippets, recent news, funding data, job postings, podcast transcripts):
[PASTE 1-3 PAGES OF SOURCE MATERIAL]

OUR ICP: [ICP]
OUR PRODUCT: [PRODUCT]

Produce a complete account enrichment record in this format:

## Company Profile
- Legal name
- Industry / sub-industry
- Estimated employee count (with confidence level)
- HQ location + key offices
- Funding stage + total raised + latest round (date, amount, lead investor)
- Annual revenue estimate (with source)

## Why They're a Fit for Us
3-5 bullets matching their profile to our ICP. Be specific — not "growing fast" but "hired 4 platform engineers in the last 90 days based on LinkedIn job postings, suggesting infra investment."

## Current Tech Stack (Inferred)
List any tools mentioned in job postings, engineering blog, GitHub, or BuiltWith. Flag any competitor tools they use TODAY.

## Trigger Events (last 90 days)
- New hires in [BUYER FUNCTIONS]
- Funding announcements
- Product launches
- Public statements about pain we solve
- Org changes (M&A, restructures)

## Stakeholder Map
For each known contact: role, likely buying influence (Economic / Champion / User / Blocker / Unknown), and best opening hook based on their public statements or background.

## Suggested Opening Hook
One-paragraph cold outreach opener that references a specific, verifiable trigger and ties it to our value prop. No generic "saw you on LinkedIn."

## Account Disqualifiers (Flag if Present)
- Already using a top-3 competitor (which one?)
- Recently went through layoffs (>10%)
- Recent acquisition / restructure in flux
- Public statements indicating they build in-house
List any that apply.

## Confidence: HIGH / MEDIUM / LOW
And why.
```

### Pro tip

Run this on every account before the AE preps for first call. 15 minutes of AI enrichment beats 60 minutes of LinkedIn scrolling, and the AE walks into the call sounding like they did homework.

---

## Prompt 3: Competitive Battlecard Generator

### Prompt

```
You are a Product Marketing lead at [COMPANY NAME]. Generate a competitive battlecard for our sales team.

OUR PRODUCT: [PRODUCT]
OUR ICP: [ICP]
COMPETITOR: [COMPETITOR NAME]

PUBLIC INFO ON COMPETITOR (paste pricing page, key features, customer logos, recent product launches, G2 reviews, AE-shared intel):
[PASTE 1-3 PAGES OF MATERIAL]

OUR DIFFERENTIATORS (be honest, list the real ones):
1. [DIFFERENTIATOR 1]
2. [DIFFERENTIATOR 2]
3. [DIFFERENTIATOR 3]

WHERE THEY BEAT US (honest):
1. [WEAKNESS 1]
2. [WEAKNESS 2]

Produce a one-page battlecard in this exact format:

## [COMPETITOR] vs. [OUR PRODUCT] — Battlecard

### TL;DR
2 sentences. When to expect to face them, and the one-sentence "why us."

### When You'll See Them
- ICPs where they dominate
- Deal sizes where they show up
- Sales motion they use (PLG / enterprise / mid-market)

### Their Pitch
3-4 bullets of how they sell — their messaging, their proof points, their FUD against us.

### How They Price
- Public pricing tiers
- Typical enterprise contract size
- Common contract terms (annual / multi-year / overage)
- Negotiation patterns (where they discount)

### Where We Win — Our 3 Lines
For each: the proof point + customer name (if reference-able) + 1-line response.
1. WIN-WHEN: [SCENARIO] → "Our [FEATURE/OUTCOME] is the reason [REFERENCE CUSTOMER] switched."
2. WIN-WHEN: [SCENARIO] → "..."
3. WIN-WHEN: [SCENARIO] → "..."

### Where We Lose — Honest Acknowledgment
2 areas where they beat us. Acknowledge in the call, then bridge to our strength.
- "You're right that they [X]. That said, we found [INSIGHT] which is why customers like [REF] picked us."

### Objection Handling (Top 5)
For each objection the buyer is likely to raise after seeing them:
- Objection (verbatim)
- Tactical response (2-3 sentences)
- Proof point (customer + outcome)

### Trap Questions to Ask the Buyer
Questions where our answer is great and theirs is weak.
1. "How are you planning to handle [PAIN WHERE THEY'RE WEAK]?"
2. "What does success look like 12 months in? How are they helping you measure that?"
3. "Have you talked to [REF CUSTOMER who switched from them]?"

### When to Walk Away
Conditions under which we should disqualify rather than fight (e.g. they're 95% rolled out, contract renews in 18 months, etc.)

Length: 1 page max. Battlecards longer than 1 page don't get used.
```

---

## Prompt 4: Weekly Pipeline Report Generator

### Prompt

```
You are the VP Sales at [COMPANY NAME] preparing the weekly pipeline review.

PIPELINE EXPORT FROM [CRM] (paste deals with: name, stage, amount, owner, close date, last activity date, next step, age in stage):
[PASTE CSV-STYLE EXPORT]

QUARTER TARGET: $[NUMBER]
QUARTER COMMITTED: $[NUMBER]
QUARTER BEST CASE: $[NUMBER]
DAYS LEFT IN QUARTER: [N]

Produce a pipeline review document in this exact structure:

## TL;DR
3 sentences. Are we on track? What's the gap? What's the action this week.

## Number Status
- Quota: $[X]
- Closed-Won YTQ: $[X] ($[X] from new logo, $[X] from expansion)
- Open Pipeline: $[X] across [N] deals
- Pipeline Coverage: [PIPELINE / QUOTA REMAINING] — target is 3x
- Gap to Quota: $[X]

## Risk Map
For each open deal worth more than [THRESHOLD], score on three axes (1-5):
- Forecast confidence
- Time-in-stage health (red if >2x normal cycle)
- Activity recency (red if no buyer reply in 14+ days)
Flag any deal showing 2+ red dimensions as AT RISK.

## Movers This Week
- Deals that advanced a stage (list, with size + new stage)
- Deals that slipped a stage or push (list)
- Deals that closed-won (list with size)
- Deals that closed-lost (list with size + lost-reason)

## Stale Deals (>30 days in current stage, no activity in 14 days)
List with owner and what to do (re-engage / disqualify / escalate). For each, propose a 1-sentence re-engagement angle.

## Coverage by Stage
- Stage breakdown: count of deals and total $ in each stage
- Stage-to-stage conversion rate (last quarter for comparison)
- Bottlenecks: which stage has too much $ stuck?

## Top 5 Deals to Win This Quarter
For each: name, amount, current state (1 sentence), next milestone, who needs to do what by when.

## Top 5 Deals at Risk
For each: name, amount, risk reason, save-plan (specific action + owner + deadline).

## Asks for the CEO / Exec Team
2-3 specific things the sales leader needs from the exec team this week (a customer call, a feature commitment, a discount approval).

Tone: Direct. This goes to the CEO. Numbers first, narrative second.
```

---

## Prompt 5: Outbound Outreach Sequence Generator

### Prompt

```
You are a top-1% outbound SDR at [COMPANY NAME] writing a multi-channel outreach sequence.

OUR PRODUCT: [PRODUCT]
OUR ICP: [ICP]
PERSONA WE'RE TARGETING: [ROLE — e.g. VP Engineering at a 200-500 person B2B SaaS]
PAIN POINT WE SOLVE FOR THIS PERSONA: [SPECIFIC PAIN]
TRIGGER EVENT (if known): [e.g. recent funding round, new hire, public statement]
RELEVANT PROOF POINT / CASE STUDY: [SHORT REFERENCE]

Produce a 12-touch sequence across email + LinkedIn + (optionally) phone, spread across 21 days. Each touch should escalate or vary the angle, NOT repeat the same pitch.

For each touch, output:

TOUCH [N] — DAY [N] — [CHANNEL]
Goal: [Awareness / Pain agitation / Proof / Breakup / etc.]
[FULL TEXT — subject line for emails, opener for LinkedIn]

Rules:
- Touch 1: hyper-personalized cold email. Reference one specific thing about THEM (not their company generically). 80 words max.
- Touch 2: LinkedIn connect request (no pitch in note, 200 chars max).
- Touch 3: short email, reference the pain in their world, no ask.
- Touch 4: value drop — share a 1-pager / case study / data point that's actually useful even if they never buy from us.
- Touch 5: LinkedIn DM after connection accepted (or follow-up if not).
- Touch 6: pattern interrupt — different format (loom video script / image / question).
- Touch 7: third-party reference — "we just helped [SIMILAR COMPANY] do X."
- Touch 8: ask for the right person if you've got the wrong one ("Are you the right person to talk to about [PAIN]? If not, who is?").
- Touch 9: short, direct ("we've reached out a few times — want me to keep going or back off?").
- Touch 10: value drop #2 — a different angle.
- Touch 11: trigger-based — reference a NEW trigger event you've noticed.
- Touch 12: breakup email — closing the loop, professional, leave the door open.

Tone: Direct, peer-to-peer (founder-to-founder energy, not vendor-to-prospect). No "I hope this finds you well." No "circling back." No "just bumping this."

End each email with ONE clear, low-friction ask. Never two asks. Never "let me know when works for a quick chat" — propose a specific time.

After the sequence, write 3 SUBJECT LINE VARIANTS for touch 1 to A/B test.
```

### Pro tip

The win on cold outbound is the trigger event in touch 1 + the breakup email at touch 12. Everything in between drives single-digit reply rates. Don't over-engineer touches 3–11; do double-engineer 1 and 12.

---

## Prompt 6: Discovery Call Notes Synthesizer

### Prompt

```
You are a senior AE at [COMPANY NAME] turning a raw discovery call into structured notes that update the CRM.

CALL TRANSCRIPT or HANDWRITTEN NOTES:
[PASTE]

ACCOUNT: [COMPANY]
CALL DATE: [DATE]
ATTENDEES (buyer + seller):
[LIST]

Produce a structured discovery synthesis in this exact format:

## 1. One-Paragraph Summary
What this call was, what was discussed, what's next. 3-4 sentences.

## 2. Pain Discovered
For each pain surfaced in the call:
- Pain (1 sentence, in buyer's words if possible)
- Current cost of pain (quantified if mentioned — $, hours, churn, etc.)
- Who owns this pain inside their org
- Quote from the call (verbatim)

## 3. Buying Process
- Decision criteria (what they're evaluating on)
- Decision timeline (when they need to decide + go-live target)
- Decision process (steps they'll take — POC? security review? legal? procurement?)
- Other vendors being evaluated (named or implied)
- Budget status (allocated? being requested? unknown?)

## 4. Stakeholder Map (Updated)
For each person mentioned (in call or implied):
- Name + role
- Buying influence (Economic / Champion / User / Blocker / Unknown)
- Sentiment toward us (Positive / Neutral / Skeptical)
- What they care about most

## 5. Champion Test
Is the person we spoke to a champion?
- Do they have personal pain? Y/N + evidence
- Do they benefit if we win? Y/N + evidence
- Will they sell internally on our behalf? Y/N + evidence
- Do they have access to the economic buyer? Y/N + evidence
Score: REAL CHAMPION / COACH / CONTACT.

## 6. Risks & Red Flags
3 things that could kill this deal. Specific.

## 7. Mutual Action Plan (MAP) — Proposed
Draft a 5-7 step plan from today to close-won, with dates and owners (us + them). Format as a table.

## 8. CRM Field Updates
List the exact fields to update in [CRM] with the new values (next step, close date, amount, stage, decision criteria, etc.).

## 9. Follow-up Email Draft
Draft the follow-up email to the buyer (under 150 words, reference 2-3 specifics from the call, propose next meeting with 2 time options).

## 10. Open Questions for Next Call
5 questions we still need answered. Prioritize them.

Tone: Operator notes, not sales theater.
```

---

## Pro Tips for Sales Adoption

- **Start with call analysis.** Of all 6 prompts, the Gong analyzer drives the most "holy shit" moments for reps. Lead with it.
- **Don't auto-send AI emails.** AI drafts; the AE personalizes the first line and presses send. Auto-sent AI outreach kills your domain reputation.
- **Standardize the discovery synthesis template.** Make the output structure mandatory in your CRM. Then AI-generated notes drop in cleanly and managers can read them at scale.
- **Measure with reply rate + cycle time, not "did the rep use AI?"** The metric is whether deals move faster, not whether the tool was used.
- **Top reps will resist; new reps will benefit most.** Roll out to the lower-tenured half of the team first. Top reps adopt when they see the new hires closing their deals.

---

© 2026 Midas Tools — www.midastools.co
