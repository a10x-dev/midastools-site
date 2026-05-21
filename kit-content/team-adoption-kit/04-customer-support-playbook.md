# Midas Tools — AI Team Adoption Kit
# 04: Customer Support Playbook

Six paste-and-run prompts for the workflows support teams spend most of their day on: ticket triage, response templates, escalation, FAQ generation, CSAT analysis, and churn-risk flagging. Built for a 5–50 person support org running on Zendesk, Intercom, Front, or HubSpot Service.

These are the prompts that move a tier-1 agent from "answers 8 tickets/hour" to "answers 16 tickets/hour with higher CSAT." The unlock isn't speed alone — it's that AI handles the drudge work (triage, drafting, summarizing) so humans spend time on actual problems.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[PRODUCT] — What you support (1-sentence description)
[CHANNEL] — Zendesk / Intercom / Front / HubSpot / Email / Live chat
[BRAND VOICE] — 3 adjectives (e.g. "warm, direct, technical")
[SLA] — Response-time target for tier-1 tickets
```

---

## Prompt 1: Ticket Triage & Routing

### Prompt

```
You are the lead support engineer at [COMPANY NAME] triaging an incoming ticket.

OUR PRODUCT: [PRODUCT]
OUR SUPPORT TIERS:
- Tier 1: Self-serve issues, account questions, billing inquiries
- Tier 2: Technical issues requiring investigation, integration help
- Tier 3: Engineering / product escalations
- Special queues: Security, Legal, Enterprise CSM, Refunds

INCOMING TICKET:
From: [CUSTOMER EMAIL or NAME]
Plan / Account tier: [FREE / PRO / ENTERPRISE — if known]
Channel: [CHANNEL]
Subject: [SUBJECT LINE]
Body:
[TICKET CONTENT]

Customer history (if available):
- Account age: [DURATION]
- Past tickets: [NUMBER]
- Last 3 ticket topics: [LIST]
- NPS / CSAT history: [SCORE if known]

Produce a triage decision in this exact format:

## 1. Ticket Classification
- Primary category: [Billing / Bug / How-to / Integration / Outage / Feature request / Cancel / Refund / Other]
- Sub-category: [SPECIFIC]
- Confidence: HIGH / MEDIUM / LOW

## 2. Priority
- P0 (response within 30 min): customer is fully blocked, enterprise account, or outage report
- P1 (response within 2 hours): customer is partially blocked or paid tier
- P2 (response within 24 hours): non-blocking, free tier or standard
- P3 (response within 72 hours): feature requests, low-impact questions

Assigned priority: P[N]
Reasoning: [1-2 sentences]

## 3. Routing
- Route to: [Tier 1 / Tier 2 / Tier 3 / Security / Billing / CSM / Refunds]
- Assigned agent (if specific routing rules apply): [SUGGESTED]
- Reason: [why this queue]

## 4. Sentiment & Risk
- Customer sentiment: Calm / Frustrated / Angry / Threatening churn / Threatening public escalation
- Churn risk: LOW / MEDIUM / HIGH
- Public-escalation risk (likely to tweet / leave G2 review / contact press): LOW / MEDIUM / HIGH
- Reasoning: [evidence from the ticket]

## 5. Suggested First Response Type
- Quick resolution (known answer, KB article exists)
- Investigation needed (technical, requires logs/repro)
- Empathy + ETA (customer is upset, we need to acknowledge before solving)
- Escalation acknowledgment (route to specialist, hold customer in loop)

## 6. Linked Resources
- KB article(s) likely to resolve: [LIST IF YOU CAN IDENTIFY FROM CONTENT]
- Recent similar tickets to reference: [NOTE TO AGENT]
- Engineering / product context (recent deploys, known issues): [FLAG IF RELEVANT]

## 7. SLA Clock
- First response due by: [TIMESTAMP based on SLA tier]
- Resolution target: [TIMESTAMP]

Output to be auto-applied as ticket fields in [CHANNEL].
```

### Pro tip

Connect this prompt to your help desk via Zapier / Make / your platform's AI agent. New tickets get auto-triaged in 30 seconds — agents start their day with a sorted queue instead of an inbox of chaos.

---

## Prompt 2: Response Template Drafter

### Prompt

```
You are a senior support agent at [COMPANY NAME] drafting a customer response.

OUR PRODUCT: [PRODUCT]
OUR BRAND VOICE: [BRAND VOICE]
OUR REFUND / RETURN POLICY: [SUMMARIZE in 2-3 lines]

INCOMING TICKET:
From: [CUSTOMER NAME]
Plan: [PLAN TIER]
Subject: [SUBJECT]
Body:
[TICKET CONTENT]

RELEVANT KB ARTICLES (paste 1-3 if available):
[PASTE]

INTERNAL CONTEXT (if any — recent product changes, known issues, customer's account history):
[PASTE]

DESIRED OUTCOME: [Resolve and close / Empathy first + investigate / Schedule call / Refund + retain / Politely decline]

Produce a response in this exact format:

## Draft Response
[FULL RESPONSE TEXT — under 200 words unless complex technical answer]

Rules for the draft:
1. Open by acknowledging the customer's feeling or situation BEFORE jumping to solution
2. Use the customer's first name once, naturally
3. State the answer / next step clearly within the first 3 sentences
4. If multi-step instructions, use a numbered list
5. Close with one clear next action (not two)
6. Sign with a real first name (use [AGENT NAME] placeholder)
7. Match [BRAND VOICE]
8. No "Thank you for reaching out!" opener — it's the most-hated phrase in support
9. No "Please don't hesitate to reach out" closer — say "If [SPECIFIC NEXT THING] doesn't work, reply here and I'll dig further."

## Internal Notes
2-3 sentences to log in the ticket for context, audit trail, or next agent who picks this up.

## Tags / Macros to Apply
- Suggested tags: [LIST]
- Suggested macro (if a near-match exists in our library): [SUGGEST]

## Confidence Check
- This response resolves the ticket: HIGH / MEDIUM / LOW
- If LOW: what additional info is needed from the customer to resolve? (List 2-3 specific questions.)

## Risk Flag
Flag if any of these apply:
- Refund / credit being offered → escalate to lead for approval if > $[THRESHOLD]
- Promise of feature delivery or timeline → escalate to product
- Legal / compliance language used → escalate to legal
- Customer threatening churn / public escalation → escalate to CSM
```

---

## Prompt 3: Escalation Workflow Generator

### Prompt

```
You are the Director of Support at [COMPANY NAME] writing the escalation playbook for a recurring scenario.

SCENARIO TO DOCUMENT: [DESCRIBE — e.g. "Enterprise customer reporting data discrepancy in [FEATURE]" or "Paying customer threatening to leave a public negative review"]

CONTEXT:
- Frequency: [HOW OFTEN this happens]
- Typical owner today: [WHO USUALLY HANDLES]
- Typical resolution time: [TIME]
- Recurring pain points in current handling: [LIST]

CURRENT TEAM STRUCTURE:
- Tier 1 support: [SIZE, HOURS, CHANNELS]
- Tier 2 support: [SIZE, HOURS]
- Tier 3 / on-call engineers: [STRUCTURE]
- CSM / account managers: [WHO COVERS WHAT]
- Available paging tools: [PagerDuty / Opsgenie / Slack alerts / etc.]

Produce a complete escalation playbook in this format:

## Scenario Title
[NAME]

## Trigger (When This Playbook Activates)
Specific signals from the ticket / chat / email that mean "this is the scenario this playbook covers."

## Severity Decision Tree
- SEV1 (page on-call immediately): [CRITERIA]
- SEV2 (escalate within 1 hour): [CRITERIA]
- SEV3 (escalate within 24 hours): [CRITERIA]

## Roles & Responsibilities (RACI for the next 24 hours)
| Role | Responsible | Accountable | Consulted | Informed |
|------|-------------|-------------|-----------|----------|
| First-touch agent | x | | | |
| Tier 2 specialist | | x | | |
| Engineering on-call | | | x | |
| CSM (if enterprise) | | | x | |
| Director of Support | | | | x |
| Customer | | | x | x |

## Step-by-Step Workflow
Numbered steps from the moment the ticket arrives:

1. First-touch agent: [WHAT TO DO] — within [TIME]
2. First-touch agent: [WHAT TO DO]
3. Tier 2 specialist: [WHAT TO DO] — within [TIME]
4. Engineering on-call (if SEV1): [HOW TO PAGE, WHAT TO INCLUDE]
5. CSM: [INFORM and OWN customer communication if enterprise account]
6. Update customer at: [INTERVALS — e.g. every 1h until resolved]
7. After resolution: [POST-MORTEM TRIGGER]

## Customer Communication Templates
For each stage, a template message to send the customer:
- Acknowledgment (within [TIME])
- Investigation update (every [INTERVAL] until resolved)
- Resolution + root cause
- Post-resolution follow-up (24h after)

## Internal Communication
- Slack channel: [CHANNEL]
- Status page update trigger: [WHEN to publish]
- Stakeholders to notify proactively: [LIST]

## Resolution Criteria
What "done" looks like — specific, verifiable.

## Post-Incident Required Actions
- Internal write-up due within: [TIME]
- Root-cause analysis required: Y/N
- Customer credit / refund: [POLICY]
- Knowledge base article update: Y/N
- Macro / template update: Y/N

## Anti-Patterns (Don't Do This)
3-5 specific things that have made past versions of this scenario worse. E.g. "Don't let the ticket sit in tier-1 queue for >2 hours waiting for a senior agent to be free."

Tone: Operator's runbook. Specific, dated, blameless.
```

### Pro tip

Document one new escalation scenario per month. After 12 months you have 12 runbooks covering 80% of the painful tickets — and a new agent can be productive in 2 weeks instead of 2 months.

---

## Prompt 4: FAQ & Knowledge Base Generator

### Prompt

```
You are the Knowledge Base Manager at [COMPANY NAME] turning real support tickets into FAQ / KB articles.

OUR PRODUCT: [PRODUCT]
OUR BRAND VOICE: [BRAND VOICE]
TARGET READER: [Self-serve customer vs. agent reference — pick one]

SOURCE MATERIAL (paste 5-20 recent tickets on the same topic, with both customer message + agent response):
[PASTE TICKETS]

TOPIC TO DOCUMENT: [e.g. "How to invite a teammate" / "Why am I seeing duplicate charges?"]

Produce a complete KB article in this exact format:

## Article Metadata
- Title: [SHORT, search-optimized, in customer language not internal jargon]
- Category: [BUCKET]
- Tags: [3-5 SEARCH KEYWORDS]
- Linked tickets (sources): [LIST IDs/SUBJECTS]
- Last updated: [DATE]
- Author: [WHO REVIEWED]

## TL;DR
1-2 sentences. The answer to the question, plain.

## Who This Is For
1 sentence: "If you're trying to [X], this article is for you."

## When This Applies / Doesn't Apply
- Applies when: [CONDITIONS]
- Does NOT apply when: [CONDITIONS — and link to the right article if there's one]

## Step-by-Step Instructions
Numbered steps with:
- Action (what to do)
- Where in the product (specific menu, button, page)
- Screenshot placeholder: [SCREENSHOT_PLACEHOLDER_N]
- Expected result (what you should see after this step)

## Common Pitfalls
3-5 things that go wrong and how to fix each. Synthesized from the actual tickets you pasted in.

## Related Articles
- [LINK TO ADJACENT KB]
- [LINK TO PREREQ ARTICLE]
- [LINK TO ADVANCED ARTICLE]

## Still Stuck?
"Reply to this article" or "[CONTACT PATH]" — clear path to human support.

## Internal Notes (Not Customer-Facing)
- Engineering / product owner of this feature: [TEAM]
- Macro to use if customer is still stuck after reading this: [MACRO NAME]
- Refund policy considerations: [NOTE]

Length: 300-600 words. KB articles longer than 600 words don't get read; customers re-open tickets.
```

---

## Prompt 5: CSAT / NPS Analysis

### Prompt

```
You are the Director of Customer Experience at [COMPANY NAME] analyzing the latest survey wave.

SURVEY TYPE: [CSAT post-ticket / NPS quarterly / CES post-onboarding / etc.]
TIME WINDOW: [DATE RANGE]
SAMPLE SIZE: [N responses out of N sent — include response rate]
SCORE METHODOLOGY: [1-5 / 0-10 / etc.]

DATA TO ANALYZE (paste raw export — score + free-text comment + segment metadata: plan tier, tenure, region, channel):
[PASTE]

Produce an analysis in this exact format:

## TL;DR
3 sentences. Score, change from last period, top driver.

## Headline Metric
- Current period score: [X]
- Previous period score: [X]
- Change: [+/- X]
- Confidence (sample size adequate?): YES/NO

## Score Distribution
| Score | Count | % of total |
|-------|-------|------------|
| (broken out by score band) |

For NPS: split into promoters / passives / detractors with %s.

## Segment Cuts
Break down by segment and surface where the gaps are:
- By plan tier
- By tenure (<30 days, 30-180 days, >180 days)
- By channel
- By region (if relevant)
Highlight any segment > [THRESHOLD] worse than overall average.

## Top 3 Drivers of HIGH Scores (Themes from Promoter Comments)
For each: theme + frequency + 2-3 verbatim quotes (anonymized).
1. [THEME]
2. [THEME]
3. [THEME]

## Top 3 Drivers of LOW Scores (Themes from Detractor Comments)
For each: theme + frequency + 2-3 verbatim quotes + estimated impact.
1. [THEME]
2. [THEME]
3. [THEME]

## Specific Customer Names to Follow Up With
List the top 5-10 individual respondents who:
- Left a low score + open-ended frustration (intervention candidates)
- Left a high score + open-ended advocacy (advocacy / case-study candidates)

For each: customer + score + comment + suggested follow-up action + owner.

## Action Plan (Next 30 Days)
3 actions tied directly to the analysis. Specific, owned, dated.
1. [ACTION] — Owner [WHO] — Due [WHEN]
2. [ACTION] — Owner [WHO] — Due [WHEN]
3. [ACTION] — Owner [WHO] — Due [WHEN]

## What We're NOT Doing
2-3 things the data might tempt us to act on, but we deliberately won't. Why.

## Trends to Watch
Patterns that aren't statistically significant yet but worth tracking next wave.

Tone: Director's memo. No "lots of great feedback" filler. Numbers and names.
```

---

## Prompt 6: Churn-Risk Flagging

### Prompt

```
You are the Lead CSM / Retention Analyst at [COMPANY NAME] reviewing account health to flag churn risks.

OUR PRODUCT: [PRODUCT]
PLAN TIER WE'RE REVIEWING: [SMB / Mid-market / Enterprise]
RENEWAL WINDOW: [Within 60 / 90 / 180 days]

ACCOUNT DATA (paste a list of accounts with the signals you can pull — usage, support tickets, NPS, exec changes, login frequency, contract value, last touchpoint date):

[PASTE DATA]

Produce a churn-risk analysis in this exact format:

## TL;DR
- Accounts reviewed: [N]
- High risk: [N] worth $[X] ARR
- Medium risk: [N] worth $[X]
- Low risk: [N] worth $[X]
- Total at-risk ARR: $[X]

## Risk Scoring Rubric (How I Scored)
For transparency, list the signals weighed and their weights:
- Usage drop > 30% in last 60 days: HIGH
- No login in 30+ days: HIGH
- Support ticket frequency spike: MEDIUM
- Last NPS < 6: MEDIUM
- Champion left the company (LinkedIn signal): HIGH
- No CSM touch in 90+ days: MEDIUM
- Contract renewal < 60 days + above signals present: HIGH

## High-Risk Accounts (Top Priority)
For each, a structured profile:

### [ACCOUNT NAME] — $[ARR] — Renewal [DATE]
- Risk score: HIGH
- Signals present: [LIST 3-5]
- Champion status: [Champion still in role / Champion left / No clear champion]
- Last touch: [DATE + CHANNEL]
- Diagnosis (1 sentence): [WHY THIS ACCOUNT IS AT RISK]
- Recommended action (specific, within next 7 days):
  1. [ACTION] — Owner [WHO] — Due [WHEN]
  2. [ACTION] — Owner [WHO] — Due [WHEN]
- Save play recommendation: [Exec-to-exec call / Product roadmap commitment / Discount / Free upgrade / Training session / etc.]
- Likelihood we save: [%]

(Repeat for each high-risk account)

## Medium-Risk Accounts
Shorter version: name, ARR, top signal, recommended action.

## Patterns Across the High-Risk Cohort
3-5 systemic things this list reveals about our product / experience / onboarding. (e.g. "5 of 8 high-risk accounts cited the [FEATURE] limitation we know about — fixing this would protect $[X] ARR.")

## Recommendations to the Exec Team
2-3 strategic moves to protect this cohort. Quantified.

## Accounts I'd Walk Away From
Honest: any accounts where the save isn't worth the team time. List them with reasoning. (Acknowledging unsavable accounts is more useful than pretending.)

Tone: CSM's frank account review. Direct, quantified, no vibes-based scoring.
```

### Pro tip

Run this monthly. The first month uncovers obvious risks; by month 3 you're catching subtle signals earlier — saved ARR compounds.

---

## Pro Tips for Support Adoption

- **Start with triage (Prompt 1).** It saves the most time, requires no agent judgment to use, and demonstrates ROI in week 1.
- **Never auto-send AI responses.** AI drafts, human signs off. The trust hit from a wrong auto-response > the time saved by auto-sending.
- **Track "agent edited" vs. "agent sent as-is" on AI drafts.** If editing rate < 20%, draft quality is good. If > 60%, the prompt needs work.
- **CSAT analysis (Prompt 5) is your monthly retention-meeting input.** Same template every month. Trends emerge over 90 days.
- **Don't replace tier-1 agents — augment them.** AI-only first-touch lowers CSAT 15-25% in B2B. AI-assisted first-touch raises it. Difference is letting humans own the relationship.

---

© 2026 Midas Tools — www.midastools.co
