# Midas Tools — AI Team Adoption Kit
# 07: HR / People Ops Playbook

Six paste-and-run prompts for the workflows People Ops teams spend most of their week on: job descriptions, interview scorecards, onboarding checklists, policy drafts, employee comms, and performance review summaries. Built for a VP People or Head of People Ops at a 50–1000 person B2B company.

These prompts are written by an operator who has shipped this work — they bias toward speed-with-quality, not HR-blog template content.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[STAGE / SIZE] — Series stage, headcount band (e.g. "Series B, 300 people")
[CULTURE WORDS] — 3-5 adjectives that describe the company culture
[COMP PHILOSOPHY] — 1-line summary (e.g. "75th percentile cash, top-quartile equity")
[REMOTE POLICY] — Remote / Hybrid (X days) / Office
```

---

## Prompt 1: Job Description That Doesn't Sound Like Every Other JD

### Prompt

```
You are the VP People at [COMPANY NAME] writing a job description that will get the right people to apply (and the wrong people to self-select out).

ROLE TO HIRE: [TITLE]
LEVEL: [IC / Senior / Staff / Manager / Director / VP]
REPORTS TO: [TITLE]
TEAM SIZE THEY'LL JOIN: [N]
PROBLEMS THIS HIRE SOLVES (3-5 bullets in plain language):
[LIST]

WHAT THEY'LL DO IN YEAR 1 (be specific — what does success look like?):
[LIST 3-5 OUTCOMES]

MUST-HAVE QUALIFICATIONS (be honest — not aspirational):
[LIST]

NICE-TO-HAVE QUALIFICATIONS (would speed up ramp):
[LIST]

COMPENSATION:
- Salary range: $[X]–$[Y] (publish this — transparency wins talent + saves time)
- Equity: [RANGE or %]
- Benefits highlights: [LIST]

COMPANY CONTEXT:
- Stage: [STAGE / SIZE]
- Funding: [LAST ROUND, AMOUNT, INVESTORS]
- What we're building: [1-2 sentences]
- Why we're hiring this role now: [WHAT TRIGGERED THIS HIRE]
- Culture: [CULTURE WORDS]
- Location / remote: [REMOTE POLICY]

Produce a job description in this exact structure (modeled on Stripe / Anthropic / Linear JDs that actually convert):

## [Role Title]
One-sentence summary of the role + impact.

## About [COMPANY NAME]
2-3 sentences. What we do, who we serve, why we're worth joining. No buzzword bingo.

## Why This Role Now
1 short paragraph. The business problem that triggered this hire. Why it matters. (This is the single most important section for senior candidates.)

## What You'll Do
- 5-7 outcome-oriented bullets (NOT task lists)
- Format: action verb + concrete outcome
- Example "Stand up the first-ever GTM analytics function — own the metrics that the exec team makes decisions on" — NOT "Help with analytics"

## What You'll Have Done by [6 months / 1 year]
3 specific deliverables. This is the unfair-advantage section — most JDs skip it.

## What We're Looking For
Must-haves (5-7 bullets) — be specific, be honest, no fake "10+ years required" filters.

## Nice to Have
3-4 bullets. Make it clear these are bonuses, not gates.

## What We Don't Care About
2-3 specific things you'll NOT screen for that other companies do. (e.g. "We don't care about which school you went to" / "We don't care about which programming language you grew up on" / "We don't require Bay Area presence")

## Compensation
- Salary range: $[X]–$[Y] depending on level and location
- Equity: [DETAIL]
- Benefits: [LIST]
- Range explanation: [WHY THE RANGE EXISTS — leveling, geo, etc.]

## How We Hire
- Step 1: 30-min recruiter screen
- Step 2: 60-min hiring-manager conversation
- Step 3: [WORK-PRODUCT INTERVIEW — describe what they'll do, no "leetcode for fun" surprises]
- Step 4: 3-4 panel interviews + 1 cross-functional collaborator
- Step 5: Offer + references

Total time: [TYPICAL DAYS, e.g. 14-21 days]. We commit to feedback within 48 hours of every stage.

## How to Apply
- Send: [WHAT — resume + 1 specific thing that helps you stand out]
- Where: [APPLICATION LINK or EMAIL]
- Mention: [PROMPT — e.g. "Tell me about a time you shipped something the team thought wasn't possible"]

Rules for the output:
- No "rockstar", "ninja", "self-starter", "results-oriented", "team player"
- No "must have a Bachelor's degree" unless legally required for the role
- Include the salary range
- Tone: peer-to-peer, written by a human, for a human
- Length: 400-600 words. Anything longer doesn't get read by senior candidates.
```

---

## Prompt 2: Interview Scorecard + Structured Question Set

### Prompt

```
You are the hiring manager at [COMPANY NAME] designing the interview process for a specific role.

ROLE: [TITLE]
LEVEL: [LEVEL]
REPORTS TO: [TITLE]
TOP 5 CAPABILITIES THIS ROLE NEEDS (rank-ordered):
1. [CAPABILITY 1]
2. [CAPABILITY 2]
3. [CAPABILITY 3]
4. [CAPABILITY 4]
5. [CAPABILITY 5]

PANEL (who's interviewing this candidate and what they're evaluating):
- Hiring manager — owns: overall fit + execution capability
- Cross-functional partner — owns: collaboration + judgment
- Senior IC in role — owns: technical / craft depth
- Skip-level — owns: strategic thinking + culture
- (Customize as needed)

INTERVIEW BUDGET: [TOTAL HOURS — typically 3-4]
COMPANY VALUES: [LIST 3-5]

Produce a complete interview kit in this exact structure:

## Interview Process Overview
- Round 1: [TYPE] — [DURATION] — owned by [WHO]
- Round 2: [TYPE] — [DURATION] — owned by [WHO]
- Round 3: [WORK-PRODUCT / CASE STUDY] — [DURATION] — owned by [WHO]
- Round 4: [PANEL] — [DURATION] — owned by [WHO]
- Round 5: [REFERENCE CHECKS + OFFER]

## Capability Matrix
For each of the 5 capabilities, identify which round(s) evaluate it. Every capability should be evaluated in at least 2 rounds (no single-point assessments).

| Capability | Round 1 | Round 2 | Round 3 | Round 4 |
|------------|---------|---------|---------|---------|
| Capability 1 | ✓ | | ✓ | |
| (etc.) | | | | |

## Round-by-Round Question Sets

### Round 1: Recruiter Screen (30 min)
Goals: confirm baseline match + sell the opportunity.
Questions:
- [Opening question that puts them at ease]
- [Confirm role understanding]
- [Confirm motivation for the move]
- [Compensation expectation discussion]
- [Logistics / timing / process explanation]

### Round 2: Hiring Manager Conversation (60 min)
Goals: capability assessment 1-3 + chemistry.

For each capability, provide:
- 1 main behavioral question (STAR — "Tell me about a time when...")
- 1 follow-up probe ("What did you specifically do, vs. the team?" / "How did you measure success?" / "What would you do differently?")
- What GREAT looks like in the answer (3-5 indicators)
- What RED FLAG looks like in the answer (3-5 patterns)

Plus:
- 1 "Why us, why now?" question
- 1 hypothetical: "Here's a real problem we're facing — how would you approach it?" [INSERT SPECIFIC PROBLEM FROM YOUR WORLD]

### Round 3: Work-Product Interview (60-90 min)
Specific exercise design:
- Brief sent in advance: [WHAT WE SHARE 24-48 HOURS BEFORE]
- Time investment for candidate: [HOURS]
- What they present / do: [SPECIFIC]
- How we evaluate: rubric below

Rubric for Round 3 (1-5 scale):
- Problem framing
- Analytical depth
- Practical execution / specifics
- Communication clarity
- Tradeoff awareness

### Round 4: Cross-Functional Panel (4 × 45 min)
For each panelist + capability assignment, provide:
- 2 anchor questions
- 1 follow-up probe per anchor
- What GREAT vs. RED-FLAG looks like
- 1 reverse question: "What's a great question THIS candidate should be asking us by now?"

## Scorecard Template
Each panelist fills in:

### Candidate: [NAME] — Role: [ROLE] — Date: [DATE]
- Overall recommendation: STRONG HIRE / HIRE / NO HIRE / STRONG NO HIRE
- Capability scores (1-5 with evidence):
  - Capability 1: [SCORE] — Evidence: [SPECIFIC]
  - Capability 2: [SCORE] — Evidence: [SPECIFIC]
  - (etc.)
- Top 2 strengths observed
- Top 2 concerns observed
- 1 reservation that the next interviewer should probe
- Did they ask good questions? Y/N + examples

## Debrief Protocol
- Time: 45 min, within 24 hours of last interview
- Format: each panelist gives their recommendation BEFORE discussion (anti-anchoring)
- Decision: HIRE / NO HIRE / EXTEND PROCESS (if NO HIRE with mixed signal, write the reason)
- Document: 1-paragraph rationale stored in ATS

## Anti-Bias Checklist
- All panelists trained in unbiased interviewing
- Same questions for every candidate at the same level
- Calibration: similar bar across panelists
- Score before discussing
- Reference checks always include 1 chosen by us, not just the candidate's list

Tone: Hiring rigor. Not "vibes check" theater.
```

### Pro tip

Build the scorecard BEFORE you screen the first candidate. If you can't articulate what GREAT looks like for each capability, you'll hire on charm, not on signal.

---

## Prompt 3: 30-60-90 Onboarding Checklist

### Prompt

```
You are the People Ops Lead at [COMPANY NAME] building the onboarding plan for a new hire.

NEW HIRE ROLE: [ROLE]
LEVEL: [LEVEL]
TEAM: [TEAM]
START DATE: [DATE]
MANAGER: [NAME]
BUDDY (peer assigned to help in first 30 days): [NAME]

WHAT THIS HIRE WILL OWN BY DAY 90 (be specific):
[LIST 2-4 DELIVERABLES]

KEY STAKEHOLDERS THIS HIRE WILL WORK WITH:
[LIST WITH NAMES + ROLES]

CRITICAL CONTEXT FILES / DOCS THE HIRE NEEDS TO READ:
[LIST WITH LINKS / TITLES]

Produce a complete 30-60-90 onboarding plan in this exact format:

## Day -7 to Day 0 (Pre-Boarding)
Owner: People Ops + IT + Manager
| Task | Owner | Done By |
|------|-------|---------|
| Send welcome email + first-day logistics | People Ops | Day -7 |
| Order laptop + peripherals | IT | Day -10 |
| Provision accounts (Slack, email, GitHub, etc.) | IT | Day -3 |
| Calendar holds for first-week meetings | EA / Manager | Day -5 |
| Notify team of new hire + share quick bio | Manager | Day -3 |
| Pre-reading package shared | Manager | Day -2 |

## Day 1
Owner: Manager + Buddy
| Time | Activity | Owner |
|------|----------|-------|
| 9:00–9:30 | Welcome + workspace setup | Manager |
| 9:30–10:30 | Company history + product overview | Manager |
| 10:30–11:00 | Tools walkthrough + access verification | Buddy |
| 11:00–12:00 | Coffee with manager (informal) | Manager |
| 12:00–13:00 | Team lunch | Team |
| 13:00–14:00 | Buddy 1:1 — "ask me anything" | Buddy |
| 14:00–17:00 | Self-paced reading + tool exploration | Self |

End-of-day: 15-min check-in with manager. "What was confusing? What was good? What do you need tomorrow?"

## Week 1 Goals
- Meet every direct team member (1:1, 30 min each)
- Complete: [TOOL TRAINING / SECURITY ONBOARDING / COMPLIANCE MODULES]
- Read: [SPECIFIC DOCS]
- Attend: [STANDING MEETINGS THIS WEEK]
- Output expected: [SHIP YOUR FIRST SMALL THING — e.g. PR, doc edit, deck review, demo attended]

## Week 2-4 Goals (Days 8-30)
- Meet every cross-functional partner (15-30 min each): [LIST WITH NAMES]
- Shadow: [N customer calls / sprint planning / sales calls / etc.]
- Read deeper: [STRATEGY DOCS / FINANCIAL CONTEXT / PRD ARCHIVE]
- Output expected by Day 30: [1 MEANINGFUL ARTIFACT — first PRD draft / first sales call attempted / first customer feature shipped]
- Manager 1:1 cadence: weekly 45 min, with a structured 30-day check-in at Day 30

## Day 30 Check-In (Formal)
Manager + new hire 1-hour conversation:
- What's going well?
- What's confusing / frustrating?
- Are the resources / access / context sufficient?
- Recalibrate the 60-day and 90-day goals?
- Feedback in BOTH directions

## Days 31-60 Goals
- Own a first complete deliverable end-to-end: [SPECIFIC]
- Begin contributing to: [SECONDARY AREAS]
- Build relationship with: [SPECIFIC SKIP-LEVEL OR STRATEGIC STAKEHOLDER]
- Start: [STRETCH PROJECT THAT REVEALS LEVELING]

## Day 60 Check-In
- Mid-point manager review
- 360 lite: 3-5 colleagues give 1 thing going well + 1 to adjust
- Refine Day 90 expectations

## Days 61-90 Goals
- Deliver on the [DAY 90 PROMISES] from the JD
- Begin owning a function / area / process independently
- Develop POV: 1-page "here's what I'm noticing + would change"

## Day 90 Check-In (Formal — Performance Conversation)
Conversation framing: "Are we glad we hired you? Are you glad you joined?" Honest both directions.
- Performance vs. expectations
- Strengths confirmed
- Gaps surfaced
- Path forward for next quarter
- Conversion to permanent role (if applicable)
- Salary / equity discussion if at a calibration moment

## Manager's Onboarding Quality Checklist (For You, Manager)
- [ ] Cleared calendar enough to be present in Week 1
- [ ] Buddy is briefed and committed to weekly checkins
- [ ] Pre-reading list is curated, not dumped
- [ ] First deliverable is sized for first-month success (Goldilocks: not trivial, not impossible)
- [ ] Cross-functional intros scheduled, not "you should chat with Ben sometime"
- [ ] Documented this hire's strengths + watch-outs from interviews so you train to the actual person

## Anti-Patterns (Don't Do This)
- "Drink from the firehose week 1" — confuses excitement with onboarding
- "Sink or swim" testing — that's an interview, do it before hiring
- Forgetting to introduce the new hire to skip-level + cross-functional partners
- No 30/60/90 check-ins — onboarding ends when there's a structured close, not when the calendar runs out

Tone: Operator's onboarding plan. Specific names, specific dates, specific deliverables.
```

---

## Prompt 4: Internal Policy Drafting

### Prompt

```
You are the VP People at [COMPANY NAME] drafting a new internal policy.

POLICY TOPIC: [e.g. "Remote work" / "Use of generative AI tools" / "Parental leave" / "Internal mobility" / "Expense reimbursement"]

CONTEXT:
- Company size: [STAGE / SIZE]
- Why this policy is needed now: [TRIGGER — e.g. team grew past 100 and ad-hoc handling is breaking, a specific incident, legal requirement, etc.]
- Industry: [INDUSTRY — if regulated, note specific laws/standards]
- Current ad-hoc handling: [HOW WE HANDLE THIS TODAY]
- Pain points with current handling: [LIST]

PHILOSOPHY:
- Default posture: [Permissive / Restrictive / Balanced]
- Cultural value to lean into: [CULTURE WORDS]
- Things we want to AVOID this policy turning into: [LIST — e.g. "too bureaucratic", "too lax that we lose accountability", etc.]

OBLIGATIONS / CONSTRAINTS:
- Legal requirements in scope jurisdictions: [LIST IF KNOWN]
- Insurance / compliance requirements: [LIST IF KNOWN]
- Board / investor commitments: [IF ANY]

Produce a policy document in this exact format:

## Policy Title
[SHORT, descriptive]

## Effective Date
[DATE]

## Owner
[PERSON + TITLE — accountable for keeping this policy current]

## Last Reviewed
[DATE — set a 12-month review cadence]

## Purpose (Why This Policy Exists)
2-3 sentences. The business / cultural / legal rationale. Avoid passive-aggressive "we need this because people abused [X]" language.

## Scope (Who This Applies To)
- Applies to: [GROUPS]
- Does NOT apply to: [EXCEPTIONS]
- Geographic scope: [LIST]

## Policy Statement (The Rule)
2-4 paragraphs. The actual policy in plain language. Use specific verbs ("must", "may", "should").

## How This Works in Practice
Numbered steps walking through the most common scenarios:
1. [SCENARIO] → process / approval / system
2. [SCENARIO] → process / approval / system
3. [SCENARIO] → process / approval / system

## Decision Authority
| Decision | Decision Maker | Escalation Path |
|----------|----------------|------------------|

## Frequently Asked Questions
6-10 anticipated FAQs with direct answers. (Pre-answering these means HR doesn't get bombarded after rollout.)

## What Happens If This Policy Is Violated
Avoid harsh-sounding language. Tier the response:
- Coaching conversation
- Formal warning
- Performance plan
- Separation (rare, for repeat / egregious only)

## Related Policies / Documents
Links to adjacent policies that interact with this one.

## Rollout Plan
- Communication to all-hands: [WHEN, HOW]
- Manager briefing: [BEFORE all-hands so they can answer team questions]
- Q&A office hours: [DATE]
- Acknowledgment requirement: [Y/N — do employees need to formally acknowledge?]

## Review Cycle
- Owner reviews: [CADENCE]
- Triggers for off-cycle review: [LEGAL CHANGE / INCIDENT / MAJOR ORG CHANGE]

## Version History
| Version | Date | Author | Change Summary |

Tone: Direct, fair, written by a human who actually cares about both the business and the employees. NOT a CYA document.

Length: 1-2 pages. Policies longer than 2 pages don't get followed.
```

---

## Prompt 5: Sensitive Employee Communication

### Prompt

```
You are the Head of People Ops at [COMPANY NAME] drafting a sensitive employee communication.

COMMUNICATION TYPE: [Layoff / RIF announcement / Departure of a key leader / Restructure / Compensation philosophy change / Significant policy change / Acquisition / Office closure / Other]

CONTEXT (essential — without honesty here the output is worthless):
- What is happening: [SPECIFIC FACTS]
- Why it's happening: [BUSINESS REASON — be honest, not corporate-speak]
- Who is affected: [SCOPE]
- When it takes effect: [DATE]
- What is changing for the people affected: [SPECIFIC]
- What is NOT changing: [SPECIFIC — important to ground]
- What is unknown / still being decided: [BE EXPLICIT]

WHO IS DELIVERING THIS MESSAGE: [CEO / VP People / Manager / 1:1 from manager / All-hands / Email only]

WHAT WE OWE THE AFFECTED EMPLOYEES (if applicable):
- Severance: [DETAILS]
- Equity treatment: [DETAILS]
- Healthcare continuation: [DETAILS]
- Outplacement / job search support: [DETAILS]
- Reference commitments: [DETAILS]

TIMING SEQUENCE:
- 1:1 conversations with directly-affected employees: [WHEN]
- Affected team manager briefings: [WHEN]
- All-hands company communication: [WHEN]
- External / press / customer messaging: [WHEN]

Produce the communication package in this exact format:

## TL;DR / Internal Brief (For the Exec Team Only)
3 sentences. What's happening, why now, the one thing we must do right.

## Email / Message #1 — 1:1 to Directly Affected Employees
(If applicable — e.g. layoff impact list)

Subject line: [DIRECT, not "Important Update"]

Body (under 300 words):
- Open with the news in the first 2 sentences. Don't bury it.
- 1 paragraph on WHY (the business reason — honest, not jargon)
- What it means for them specifically: timing, transition support, benefits, equity, severance
- What happens in the next 24 / 48 / 72 hours (concrete steps)
- Where they can get help: [SPECIFIC NAME + CHANNEL]
- Acknowledge the impact ("This is hard. We're sorry it's happening to you.")

Sign-off: From a named human (CEO or direct manager), not "The People Team"

## Talking Points for Managers Delivering 1:1s
- The exact opening sentences (verbatim — don't paraphrase)
- The 3 things to say
- The 5 things to NOT say
- Common questions + how to answer them
- What to do if the employee gets emotional / angry / silent
- What follow-up is committed

## Message #2 — All-Hands Announcement
Subject line: [DIRECT]

Body (3-5 paragraphs):
- What happened
- Why — honest, with strategic context
- Who is affected (numbers or roles, not names)
- What we're doing to support affected colleagues
- What this means for the remaining team
- What is NOT changing (to ground the remaining team)
- What questions we welcome + where (the next all-hands, an open Q&A doc, manager office hours)

## Q&A Document (Distributed Same Day)
8-12 anticipated questions with direct, honest answers. Pre-empts speculation.

Categories:
- Why now?
- Was this the only option?
- Who decided?
- What about [SPECIFIC TEAM / PROJECT / COMMITMENT]?
- What does this mean for the remaining team?
- What about pay / equity / promotions going forward?
- Will there be more cuts?
- Customer impact?

## Manager Toolkit
- Slide deck for team meeting (3-5 slides, talking-points format)
- Email template for each manager to send to their team (filled in with specifics)
- Listening guide: how to hold a 30-min team conversation post-announcement

## External Communication (If Required)
- Customer-facing message (if customer-impacting)
- Partner / vendor communication
- Press / social statement (if newsworthy)
- LinkedIn / public statements coordinated talking points

## Anti-Patterns (Do NOT Do)
- Don't say "in our new normal", "right-sizing", "strategic reset", "moving forward", or any HR-bingo
- Don't bury the news under preamble
- Don't say "we love everyone affected" — name what you actually owe them
- Don't promise things you might not deliver (e.g. "we'll find roles for everyone")
- Don't make this about the company's resilience — make it about the affected humans

## Aftercare (Days 1-30)
- Daily check-ins with affected employees in transition: [WHO IS RESPONSIBLE]
- Weekly all-hands Q&A: [SCHEDULED]
- Manager temperature checks: [CADENCE]
- Survey at Day 30 to assess team trust + morale
- Visible action on what comes out of the survey

Tone: Honest, human, respectful. Hard news delivered with the dignity it deserves. No HR-speak.

Critical: Have legal review the FINAL drafts before sending. This template does not substitute for legal counsel on terminations, severance terms, or jurisdictional notice requirements.
```

---

## Prompt 6: Performance Review Cycle (Manager & Peer Summaries)

### Prompt

```
You are an engineering / function manager at [COMPANY NAME] writing performance reviews for your direct reports.

REVIEW CYCLE: [Q + YEAR — e.g. "H1 2026 review"]
EMPLOYEE: [NAME]
ROLE: [TITLE + LEVEL]
TENURE: [TIME IN ROLE]
TENURE AT COMPANY: [TIME]

INPUTS GATHERED (paste all of these — the quality of the output depends on the quality of the inputs):

### Self-review (their words):
[PASTE]

### Peer reviews (3-5):
[PASTE — anonymized]

### Manager observations log (your notes from 1:1s, projects, demos, code reviews, etc. across the period):
[PASTE]

### Key projects this cycle:
[LIST WITH OUTCOMES]

### Last-cycle goals (for tracking):
[LIST]

### Calibration outcome (the level adjustment, if any, decided in calibration meeting):
[KEEP LEVEL / PROMOTE / WATCH / MANAGE OUT]

### Rating framework you use:
[e.g. Exceeds Expectations / Meets / Below — or numeric 1-5 — describe yours]

Produce a complete review packet in this exact format:

## Manager Review (To Be Delivered to Employee)

### TL;DR / Headline
2-3 sentences. The overall assessment. Direct.

### Rating
[RATING + 1-sentence justification]

### Top 3 Strengths Observed (With Specific Examples)
For each:
- Strength (in plain language, not jargon)
- 2-3 concrete examples from this period (specific projects, behaviors, moments)
- Why this matters for their role / level
- What growth on this strength would look like

### Top 2-3 Growth Areas (Constructive, Forward-Looking)
For each:
- Specific behavior / capability (NOT personality)
- Concrete examples where this showed up
- The cost of not improving (be honest, not punitive)
- What "good" looks like in 6 months
- Specific actions / supports to close the gap

### Goals Recap
- Goals set last cycle: [LIST]
- Status of each: [HIT / MISSED / OBSOLETED] + 1-line reasoning

### Goals for Next Cycle (2-4)
Each in this format:
- Goal (specific, measurable)
- Why this matters
- How we'll measure
- Support from manager / team that's promised
- Check-in cadence

### Career Conversation
1-2 paragraphs:
- Where you see this person in 12-24 months
- Whether the level conversation is on the table this cycle or not (and why)
- Specific development the next role / level would require
- Manager's role in supporting that development

### Compensation Acknowledgment
- Whether comp is being adjusted this cycle (and why or why not)
- The decision rationale at a level the employee can hear

### Closing
1-2 honest sentences. What you most appreciate about working with this person + 1 thing you'll work on as a manager to support them better.

## Manager's Own Pre-Conversation Prep
(Notes for YOU, the manager — not delivered to employee)
- Anticipate their likely first reaction to this review (positive / surprised / defensive). What's your response posture?
- 3 things you'll NOT say that you might be tempted to
- The one sentence you most want them to leave the conversation feeling
- The one thing you've been avoiding saying that this is the moment for

## Recommended Conversation Flow (45-60 min)
1. (5 min) Frame: "This is a candid conversation. I want it to be useful for you."
2. (5 min) Ask them how they think the period went — listen, don't interrupt
3. (5 min) Share the headline + rating
4. (10 min) Walk through strengths with specifics
5. (10 min) Walk through growth areas — invite their reaction
6. (10 min) Discuss goals for next cycle — co-create
7. (5 min) Career conversation
8. (5 min) Close — ask if they have what they need + what they need from you

## What to Document in HRIS / Calibration Notes
A 1-paragraph summary suitable for the calibration committee / HRIS record that preserves the rating + key signals without exposing sensitive verbatim quotes.

Tone: Honest, respectful, specific. No performance-review-bingo. The goal is to leave the employee feeling truly seen — for both their strengths and the work ahead.
```

### Pro tip

Write the manager's pre-conversation prep section first. It forces you to confront your own discomfort with the hard parts of the review before you sit down. Most painful performance conversations go sideways because the manager wasn't honest with themselves first.

---

## Pro Tips for HR / People Ops Adoption

- **Start with onboarding (Prompt 3).** It's the highest-leverage People Ops process — every bad onboarding compounds into early attrition.
- **Standardize the JD template (Prompt 1) across all managers.** When every JD has the same structure, candidates compare offers fairly and your brand gets stronger as a hiring company.
- **The sensitive comms prompt (Prompt 5) is the one to NEVER use solo.** Always have legal review final drafts. This is a starting point, not a finish line.
- **Reviews work better when 80% of the content is observed evidence, 20% is judgment.** The prompt forces you to gather inputs first. Don't skip.
- **The policy prompt (Prompt 4) replaces "ad-hoc decided over Slack" with documented norms.** Run it once per quarter on the topic that's causing the most ad-hoc decisions.

---

© 2026 Midas Tools — www.midastools.co
