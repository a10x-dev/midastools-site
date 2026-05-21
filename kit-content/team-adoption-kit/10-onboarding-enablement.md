# Midas Tools — AI Team Adoption Kit
# 10: Onboarding & Enablement Guides

Five guides for the human side of an AI rollout: getting people up and running on Day 1, running ongoing office hours, helping each department discover their own AI workflows, building a sustainable best-practices wiki, and a week-by-week 90-day rollout roadmap with RACI + kill criteria.

These are not meta-talk about onboarding. They contain the actual agendas, scripts, checklists, and RACI tables the adoption lead uses each week.

---

## Guide 1: Day 1 AI Setup Guide

For every new (or newly-enabled) employee, this is the first-day experience. The goal: by end of Day 1, they have a working AI tool open + have run 1-2 prompts that produced something useful for their actual job. That's the "I get it" moment.

### Pre-Day-1 Checklist (For the Adoption Lead + IT)

Before the employee starts (or before you flip them on):

- [ ] AI tool license provisioned (Claude Team / ChatGPT Enterprise / Gemini / Copilot)
- [ ] SSO active on the tool
- [ ] Account added to internal "AI Users" Slack channel
- [ ] Department-specific playbook PDF shared
- [ ] Buddy assigned (an L2+ peer from same department)
- [ ] 30-min Day 1 walkthrough on their calendar
- [ ] Access to the Skills Marketplace (Notion / Confluence / wiki)
- [ ] Acceptable use policy + security guidelines acknowledged

### Day 1 Walkthrough Agenda (30 min, 1:1 with buddy)

```
0:00–0:03 — Welcome
- "Today we're going to get you set up + run your first useful prompt. The goal is one specific moment of 'oh, that's actually useful for what I do.' That's it. We're not doing AI 101."

0:03–0:08 — Tool walkthrough
- Open [TOOL] together
- Show: where to start a new chat, where settings live, where Projects / Gems / Custom GPTs / Spaces are
- Show the Skills Marketplace bookmark
- Show the AI Users Slack channel (or your equivalent)

0:08–0:18 — First useful prompt
- Pick ONE prompt from their department playbook (file 01-08 of this kit)
- Buddy walks them through filling in the [VARIABLES] with their real context
- Run it together
- React to the output: "Where does this help? Where does it miss?"
- Iterate once: refine the prompt, run again
- This is the moment that converts. Don't skip.

0:18–0:25 — Second prompt (their choice)
- Now THEY pick a workflow from the playbook
- They fill in variables, run it themselves
- Buddy is silent until output appears
- Buddy reviews the output WITH them — is it usable?

0:25–0:30 — Wrap + commitment
- "Before our next check-in (1 week), commit to running [X] prompt for [SPECIFIC RECURRING WORKFLOW]. We'll review what worked + didn't."
- Buddy logs the commitment somewhere both can see
- Confirm: next 1:1 check-in time
- "Any questions? What feels confusing about all this?"
```

### Tool Setup Checklist (For the New User to Complete on Their Own After the Walkthrough)

```
=== AI Setup Checklist ===

Tools:
- [ ] Opened [TOOL] and verified SSO works
- [ ] Bookmarked tool in browser
- [ ] Installed mobile app (if applicable)
- [ ] Joined #ai-users Slack channel
- [ ] Bookmarked the Skills Marketplace

Initial configuration:
- [ ] Added a "Custom Instructions" / "Profile" with my role + context
- [ ] Connected calendar / docs / drive integrations (if permitted by policy)
- [ ] Reviewed acceptable use policy

First-week commitments:
- [ ] Identified my 3 most repetitive weekly workflows (will discuss with buddy)
- [ ] Run at least 5 AI-assisted tasks this week
- [ ] Save my favorite 2 prompts to a personal note for reuse
- [ ] Tell my buddy one thing that worked + one that didn't

Security awareness:
- [ ] Read the data classification policy (what I can / can't paste into AI)
- [ ] Understand the difference between our enterprise tool (✓ safe) and consumer chatbots (NOT safe for company data)
- [ ] Know how to report a security concern related to AI
```

### First Week Quick Wins (By Function)

Each new user gets 3-5 "quick wins" customized to their role. The point: in week 1, they should have at least 2 moments where AI saved them clearly.

#### Engineering
1. Run the code review prompt on your next PR before submitting — see what catches it for you
2. Use the PR description generator on your next merge
3. Try the CI/CD failure debugger when your next pipeline breaks

#### Sales
1. Run the call analyzer on your most recent Gong recording
2. Generate a battlecard against the competitor you saw most this week
3. Use the discovery synthesizer after your next first meeting

#### Marketing
1. Take your latest blog post and run the multi-channel social distribution prompt
2. Run the competitor deep-dive on whoever you most need to beat this quarter
3. Use the campaign brief writer for your next campaign kickoff

#### Customer Support
1. Run ticket triage on 5 tickets manually + compare to AI's suggestion
2. Use the response drafter for one tricky escalation
3. Try the FAQ generator on a topic with 5+ similar tickets

#### Product
1. Run the PRD writer on your next feature with paste-in real customer inputs
2. Use the user-research synthesizer on your last 5 interviews
3. Generate release notes for your next ship

#### Finance
1. Run the expense categorization prompt on this month's transactions
2. Use the budget vs. actuals summary prompt for your next monthly close
3. Try the contract review prompt on your next vendor MSA

#### HR / People Ops
1. Use the JD writer for your next open role
2. Run the interview scorecard generator for that same role
3. Draft a Day 1 onboarding plan for your next new hire

#### Legal
1. Run the contract review prompt on a routine vendor SaaS agreement
2. Use the vendor security review prompt before approving your next SaaS purchase
3. Run the regulatory brief generator on a regulation you've been meaning to read

### Common Pitfalls (Coach the New User Through These)

1. **"It hallucinated, so I gave up."** Coach: model output is a draft, not a verdict. Iterate. Tell it what's wrong.
2. **"I have to give it so much context — it's faster to do it myself."** Coach: yes, the first time. The fifth time, it's 10x faster. Pay the context tax once.
3. **"I don't know what to ask it."** Coach: use the playbook. Start with a real, narrow workflow. Don't ask AI to "make my job easier" — ask it to do one specific thing.
4. **"It made my work sound generic."** Coach: AI drafts; you edit. Always. The final voice is yours.
5. **"It can't access my company data."** Coach: paste in the relevant context. Treat it like a smart new hire who hasn't been onboarded — give it what it needs.

---

## Guide 2: AI Office Hours & Demos

The format that drives sustained adoption past the initial enthusiasm: weekly office hours + monthly demo all-hands. Pulled directly from how Ramp / Stripe-style internal rollouts work.

### Weekly Office Hours (30 min, every week, hosted by the adoption lead)

**Format**: drop-in. No agenda, no slides. Camera optional.

**Roles**:
- Host: the adoption lead (or a rotating L3 champion)
- Co-host: a different department's champion each week (cross-pollinates)
- Attendees: anyone

**Agenda template**:
```
0:00–0:05 — Welcome + one-prompt-of-the-week
- Host shares ONE new prompt that's gaining traction in the company. 90 seconds.

0:05–0:25 — Open Q&A
- Attendees ask anything: "I can't get the output I want for X" / "How would I prompt for Y?" / "What model should I use for Z?"
- Co-host pairs on the screen-share to demonstrate live solutions
- 80% of office hours is this — collaborative debugging

0:25–0:30 — Wrap + commitments
- Host summarizes the 2-3 best prompts / patterns shared
- Asks for one "I'll try X this week" commitment from each attendee
- Notes the patterns that should go into the Marketplace
```

**Logistics**:
- Same time every week (consistency > clever timing)
- Recorded + posted in the Marketplace
- Calendar invite to entire company; opt-in attendance
- Held in a hybrid format (Zoom + in-person if applicable)
- Async question form for those who can't attend live: questions get answered in the next session

**Anti-patterns**:
- DON'T turn it into a webinar. It's a clinic.
- DON'T do prepared content for 30 min. Max 5 min of prepared, 25 min of conversation.
- DON'T let the same 3 people dominate every week — actively pull in new voices.

### All-Hands AI Demo (Monthly, 30 min)

**Format**: 6 demos × 4 min each (3 min demo + 1 min Q&A), in front of the whole company.

**Sample agenda**:
```
0:00–0:02 — Adoption lead intro
- "Here's where we are: [3-bullet update on adoption metrics]"
- "Today's demos showcase how 6 colleagues across 6 departments are using AI to ship more, faster. Each demo is 4 minutes — buckle up."

0:02–0:06 — Demo 1: Engineering
0:06–0:10 — Demo 2: Sales
0:10–0:14 — Demo 3: Marketing
0:14–0:18 — Demo 4: Customer Support
0:18–0:22 — Demo 5: Finance
0:22–0:26 — Demo 6: Wild Card (any function)

0:26–0:28 — Adoption lead wraps
- "Patterns to notice across all 6 demos"
- "Top 3 things to try this month"

0:28–0:30 — Recognition
- "This month's top contributors to the Marketplace:" [NAMES]
- "Next month: [SPECIFIC FOCUS — e.g. 'we're focusing on Finance + Legal — both teams will get extra office hours']"
```

### Live Demo Script Template (For Demoers)

Each demoer uses this 4-minute template:

```
=== AI Demo Script Template ===

YOUR NAME: [NAME]
YOUR ROLE: [TITLE]
DATE: [DEMO DATE]

00:00–00:15 — Hook (THE pain you had)
"Before, I used to spend [TIME] doing [SPECIFIC WORKFLOW]. It was annoying because [SPECIFIC REASON]."

00:15–00:45 — Setup
"I started using [TOOL / PROMPT] to [SPECIFIC CHANGE]. Here's the prompt:" [SHOW]
"I paste in [SPECIFIC INPUTS — e.g. raw call transcript, raw expense data, etc.]."

00:45–02:30 — Live demo (the actual paste + run)
- Show the screen
- Paste the prompt
- Show the output
- Reactive narration: "Look at this — it pulls out [X] which is exactly what I needed"

02:30–03:00 — Outcome
"Now what used to take me [TIME] takes [LESS TIME]. The output goes straight into [WHERE — CRM, doc, deck, email, etc.]."

03:00–03:30 — How to adopt this if you're not me
"If you want to use this:"
- "It's in the Marketplace under [CATEGORY]"
- "Replace [VARIABLE 1] with your version of [THING]"
- "It works best when [TIP]"
- "Don't try to use it for [ANTI-CASE]"

03:30–04:00 — Q&A (open the floor)
```

### Q&A Facilitation Tips (For Hosts)

When attendees ask questions in office hours / demos:

**Good questions to encourage**:
- "How do I get the output to look more like [STYLE]?"
- "I tried prompt X and got Y. What am I missing?"
- "Has anyone solved [SPECIFIC PROBLEM] with AI?"

**Reframe these questions**:
- "Does AI work for [function]?" → "What specific workflow are you trying? Let's try it together right now."
- "Which is better, Claude or GPT?" → "It depends on the task. For [your task], here's the answer."
- "Will AI replace my job?" → Acknowledge briefly + redirect to "let's focus on what would make YOUR work better today."

**Watch for these failure patterns**:
- One person hijacking the session with a long use case → "Great context — let's get to the question in 1 sentence, then we can workshop"
- Silence after a demo → Always have 2-3 plant questions ready to seed conversation
- Everyone agreeing too quickly → "Who has tried this and had it NOT work? I want to hear that."

### Follow-Up Action Items (After Office Hours / Demos)

```
=== Post-Session Follow-Up Checklist ===

Within 24 hours of session:
- [ ] Recording posted in Marketplace with timestamps
- [ ] 1-paragraph recap posted in #ai-users Slack
- [ ] Top 2-3 prompts / patterns surfaced sent to the Marketplace curator for review
- [ ] Personal follow-ups: who committed to what + DM them a "how's it going?" check-in

Within 1 week:
- [ ] Confirm commitments were attempted (light touch — not surveillance)
- [ ] Collect feedback on session quality (1 question: "Was this useful? Y/N + why")
- [ ] If 3+ people asked about the same workflow, schedule a deep-dive session for it
```

---

## Guide 3: Skill Discovery Guide

This is the prompt + worksheet you use with each department head BEFORE rolling out AI to their team. It surfaces the 3-5 workflows per team that are the best candidates for AI assist — based on real work, not theoretical "AI use cases."

### Why This Matters

Rolling out AI without doing skill discovery is how companies end up with "we bought ChatGPT Team and nobody uses it." The unlock is starting with workflows the team actually does that AI is actually good at.

### Department-Specific Discovery Prompts (90 min, 1:1 with each department head)

```
=== Skill Discovery Conversation Template ===

Department: [DEPT]
Department Head: [NAME]
Date: [DATE]
Facilitator (adoption lead): [NAME]

Section 1 (15 min): Your week in workflows
- "Walk me through a typical week for your team. Not titles or projects — the actual recurring tasks."
- List every workflow that recurs at least weekly
- For each: rough team-wide hours spent per week

Section 2 (15 min): Workflow audit
For each workflow listed, categorize:
- TYPE: Drafting / Reviewing / Summarizing / Analyzing / Communicating / Researching / Deciding / Coordinating
- INPUT: Structured (data, code, text) / Unstructured (calls, conversations) / Both
- OUTPUT: Doc / Decision / Action / Communication / Code
- FREQUENCY: Daily / Weekly / Monthly / Quarterly
- HOURS / WEEK across team

Section 3 (20 min): AI fit assessment
For each workflow, score 1-5 on:
- "AI could do a draft of this": 1 (no) → 5 (yes)
- "We have the inputs ready in structured form": 1 (would need cleanup) → 5 (instant)
- "Quality bar is reasonable for a draft + human review": 1 (regulated / high-stakes) → 5 (low-stakes draft)
- "Volume × time-saved: meaningful": 1 (rare task) → 5 (daily, hours)

Composite score = sum of the 4 scores. Workflows scoring 14+ are your candidates.

Section 4 (20 min): Top 5 candidates
Pick the top 5 by composite score. For each:
- Why this is a good candidate
- Who currently does this on the team
- What "AI does the draft, human reviews" would look like
- What % of the work AI realistically does (be honest — sometimes it's 30%, that's still big)
- Estimated team time saved per week if AI does the draft
- Estimated time to onboard the team on this workflow

Section 5 (15 min): Anti-cases
- "What workflows in your team should NOT be AI'd? Why?"
- This list matters as much as the YES list — it sets boundaries that protect quality + trust
- Common anti-cases: high-stakes external communication, regulated content requiring lawyer / accountant review, customer-facing voice that requires human judgment

Section 6 (5 min): Champion + commitment
- "Who on your team would you put forward as the AI champion for this rollout? Why?"
- "What's the one workflow we'll prioritize for the first 30 days?"
- "What do you need from me / People Ops to make this work?"

=== Worksheet Output ===

After this session, the adoption lead produces a 1-page worksheet:

DEPARTMENT: [NAME]
TOP 5 AI CANDIDATES:
1. [WORKFLOW] — composite score [N] — est. [HOURS/WEEK] saved
2. ...
3. ...
4. ...
5. ...

ANTI-CASES (Hands-off):
- [WORKFLOW]
- [WORKFLOW]

DEPARTMENT CHAMPION: [NAME]
PRIORITY WORKFLOW FOR DAYS 0-30: [WORKFLOW]
TARGET: [X] team members using this workflow weekly by Day 30
ESCALATION CONTACT: [DEPT HEAD]
```

### Time-Diary Exercise

If the department head can't articulate the team's actual workflows clearly, run this 5-day exercise BEFORE the discovery conversation:

```
=== 5-Day Time Diary ===

For 5 working days, every team member captures:

| Day | Start time | End time | Workflow / task | Rough hours | Could AI do a first draft? Y/N |

Submit the diary to the department head + adoption lead on Day 5.

Roll-up across the team reveals:
- The 5-7 most common workflows
- Total hours per workflow per week
- The team's intuition on AI fit (honest + grounded in real work)
```

This is more rigorous than the conversation alone — use it for teams where the leader is too far from the work to know the answer themselves.

### Automation Opportunity Finder

After the discovery, run this prompt for each candidate workflow to find the deepest automation opportunity:

```
=== Automation Opportunity Finder ===

You are an internal AI operations consultant at [COMPANY NAME].

WORKFLOW: [SPECIFIC WORKFLOW IDENTIFIED IN DISCOVERY]
CURRENT STATE: [WHO DOES IT, WHEN, WHAT TOOLS THEY USE, HOW LONG IT TAKES]
INPUTS: [WHAT GOES IN — be specific about data sources]
OUTPUTS: [WHAT COMES OUT — what other systems consume it]

Analyze the workflow and produce:

1. AI-ASSIST OPPORTUNITY LEVELS

LEVEL 1 — Draft generation
- AI produces a first draft, human reviews + edits + sends
- Effort to deploy: low
- Time saved per instance: [estimate]
- Risk: low (human gates everything)
- Recommended for: [CONDITIONS]

LEVEL 2 — Augmented review
- Human writes, AI critiques + suggests improvements before send
- Effort to deploy: low
- Time saved: moderate
- Risk: low

LEVEL 3 — Structured workflow
- AI runs a multi-step process (chain of prompts), human reviews at each gate
- Effort to deploy: medium (requires building a Project / Gem / Copilot template)
- Time saved per instance: large
- Risk: medium (gates need to be enforced)
- Tools needed: [LIST]

LEVEL 4 — Semi-automated pipeline
- Triggered by an event, AI processes input + posts output, human reviews only exceptions
- Effort to deploy: high (requires integration work)
- Time saved: largest
- Risk: medium-high (process failures harder to catch)
- Tools needed: [LIST]
- Integration needed: [LIST]

LEVEL 5 — Full automation
- No human in the loop for routine cases; humans only for exceptions surfaced by AI
- NOT RECOMMENDED for most workflows
- Reserved for high-volume, well-bounded, low-risk decisions

2. RECOMMENDED STARTING LEVEL

Given the team's current AI maturity (L0-L3 mix) + risk tolerance + workflow stakes:
- Starting level: [LEVEL N]
- Why: [REASONING]
- Path to next level: [WHAT TO PROVE BEFORE GRADUATING]

3. WHAT TO BUILD FIRST (V0)

Minimum-viable AI assist:
- The prompt: [PASTE OR LINK]
- The deployment: [WHERE — e.g. shared Project, shared Gem, Slack workflow, custom GPT]
- Who owns: [NAME]
- Time to deploy: [DAYS]

4. HOW TO MEASURE SUCCESS

- Leading indicator (weekly): [METRIC]
- Lagging indicator (90 days): [METRIC]
- Quality guard: [WHAT WE'D LOSE THAT WE MUST PROTECT]

5. ANTI-PATTERNS TO AVOID

3 ways this rollout could fail + how to prevent each.

6. NEXT STEPS

| Step | Owner | Deadline |
|------|-------|----------|
```

---

## Guide 4: Best Practices Wiki Template

Every team needs ONE source of truth for "how we use AI here." This is its structure.

### Wiki Sections (Required)

```
/ai-best-practices
  /00-getting-started
    - Welcome + 5-min onboarding
    - Which AI tool when (Claude / GPT / Gemini / Copilot decision tree)
    - Your first prompt
  /01-prompt-library
    - By department (link to Marketplace)
    - By workflow type
    - Featured patterns of the month
  /02-do-and-dont
    - Data classification (what you can / can't paste into AI)
    - Customer-facing rules (when human must sign off)
    - Confidentiality + privacy
    - Approved tools (whitelisted) vs. unapproved (blocked)
    - Security incidents — how to report
  /03-security-compliance
    - Acceptable Use Policy
    - Data handling guidelines
    - Audit log + monitoring overview
    - Vendor (model provider) data terms (link)
    - Customer notification obligations (if relevant)
  /04-version-control
    - How to propose changes to a prompt
    - How to retire deprecated prompts
    - Quarterly review process
  /05-troubleshooting
    - Common failure modes + fixes
    - When to escalate vs. iterate
    - FAQ
  /06-glossary
    - Plain-language definitions
    - Common confusions (e.g. "context window" vs. "prompt length")
```

### Do's and Don'ts Per Department

Each department gets a 1-page Do's-and-Don'ts based on their playbook. Example for Sales:

```
=== Sales AI Do's & Don'ts ===

DO
- ✓ Paste call transcripts from Gong into our enterprise AI tool
- ✓ Use the discovery synthesizer for every first meeting (paste your notes)
- ✓ Generate battlecards before competitive deals
- ✓ Run the outreach sequence generator + ALWAYS personalize touch 1 yourself

DON'T
- ✗ Auto-send AI-drafted emails. AI drafts. You personalize + send.
- ✗ Paste enterprise customer call recordings into consumer ChatGPT.
- ✗ Paste pricing offered to a specific customer into any AI tool unless required for the workflow.
- ✗ Take AI's deal-health scoring as truth — it's a signal, not a verdict. Your CRO still owns the call.
- ✗ Use AI-generated talking points without rehearsing them — they sound stilted out loud.

ESCALATE IF
- Customer asks "is this AI?" — confirm honestly + use it as a trust opportunity
- AI suggests a discount or commercial term — never accept blindly, always validate with sales ops / leadership
- Confidential customer data appears in any AI output unexpectedly — report to security
```

Repeat per department. The Wiki maintains 8 such pages (one per department from this kit) + a top-level "Universal Do's and Don'ts" page.

### Security & Compliance Guidelines (Required Reading)

```
=== AI Security & Compliance — 1-Page Summary ===

TIER 1 — Always OK to paste into approved enterprise AI tools
- Public information about us (marketing copy, product docs)
- Generic templates (no customer names, no internal financials)
- Public information about other companies (websites, press, etc.)
- Aggregated, non-attributable internal data

TIER 2 — OK with care — REDACT before pasting
- Internal documents containing customer references (anonymize / scrub names)
- Code (OK if your enterprise tool has correct data terms — check the tool's data-use policy)
- Internal financial figures at department level (OK at aggregate, not at individual-employee level)
- Job descriptions or recruiting documents

TIER 3 — DO NOT paste into any AI tool without explicit security approval
- Customer-identifying data (names, account IDs, contracts, contact info)
- Employee personal information (compensation, health, identification numbers)
- Financial data identified to specific customers or employees
- Source code from regulated / high-trust products without explicit security sign-off
- Confidential / privileged legal communications
- Intellectual property (trade secrets, unpublished algorithms, etc.)

TIER 4 — NEVER, under any circumstances
- Authentication credentials (passwords, API keys, secrets)
- PHI (protected health information, in regulated industries)
- Customer-restricted data per their contracts
- Anything covered by NDA prohibiting AI processing

REPORTING A SECURITY INCIDENT
- If you accidentally paste Tier 3 / 4 information into AI: report to [SECURITY CONTACT] within 24 hours
- If you see a colleague doing the same: report (privately is fine)
- No punitive response for honest reporting — only for cover-up

APPROVED TOOLS
- [TOOL 1] — [SCOPE]
- [TOOL 2] — [SCOPE]

NOT APPROVED (and why)
- [TOOL X] — does not meet our data terms standard
- [TOOL Y] — pending security review
```

### Version Control for Prompts

```
=== Prompt Version Control Process ===

WHEN a prompt in the Marketplace gets updated:

1. Contributor proposes the change in a "PR" (Notion comment / GitHub issue / wiki edit)
2. Original contributor + 1 peer reviewer review the change
3. If approved:
   - Version number bumped (v1.0 → v1.1)
   - Version history note added
   - Original prompt archived (not deleted — for audit trail)
   - Slack notification to anyone who has marked the prompt as "in use"
4. If rejected:
   - Reasoning documented in the PR
   - Contributor invited to refine + resubmit

QUARTERLY REVIEW

Once per quarter, the department captains review their department's prompts in the Marketplace:
- Retire prompts not used in 90 days
- Update prompts where the model / tool has changed
- Highlight prompts that have gained popularity
- Flag prompts that have generated complaints / low ratings

OWNERSHIP
- Each Marketplace entry has a named owner (the contributor) + a department captain (escalation)
- If the owner leaves the company, the captain reassigns
- No prompt is "orphaned" in the system
```

---

## Guide 5: 90-Day Rollout Roadmap

The week-by-week play. RACI per week. Kill criteria so you know when to pause or pivot. Scaling triggers so you know when to expand.

### The 90-Day Plan at a Glance

| Phase | Weeks | Goal |
|-------|-------|------|
| Phase 0: Discovery | -2 to 0 | Identify champions, audit workflows, set baselines |
| Phase 1: Foundation | 1-3 | Tool setup, Day 1 enablement, first wins |
| Phase 2: Activation | 4-7 | Department playbook rollout, office hours running |
| Phase 3: Scale | 8-10 | Skills Marketplace alive, leaderboard live |
| Phase 4: Report + Plan Next | 11-12 | ROI report, exec readout, Phase 2 plan |

### Detailed Week-by-Week with RACI

Format: R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted, I = Informed.

#### Week -2 (Pre-Launch)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Confirm exec sponsor | Adoption Lead | CEO | — | Exec team |
| Finalize tool selection + procurement | IT + Adoption Lead | CFO | Legal, Security | Exec team |
| Sign tool contract, confirm seat counts | IT | CFO | Legal | Adoption Lead |
| Identify 8 department captains (one per dept) | Adoption Lead | VP People | Dept heads | Exec team |
| Send pre-launch comms to company | Adoption Lead | CEO | Comms | All employees |

**Deliverable**: Tool contracts signed, captains named, exec sponsor confirmed.

#### Week -1 (Pre-Launch)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Run Skill Discovery (Guide 3) with each dept head | Adoption Lead | Dept heads | Captains | Exec team |
| Stand up Skills Marketplace skeleton | Adoption Lead | Adoption Lead | IT | Captains |
| Draft + ship Acceptable Use Policy | Legal + Adoption Lead | GC | Security, Captains | All employees |
| Send L0-L3 baseline assessment to all employees | Adoption Lead | VP People | Captains | All employees |

**Deliverable**: Discovery worksheets per dept, AUP published, baselines collected from 80%+ of employees.

#### Week 1 (Foundation Begins)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Calibrate L0-L3 assessments with managers | Managers | VP People | Adoption Lead | Captains |
| Assign learning tracks (A/B/C/D) per employee | Adoption Lead | VP People | Managers | Employees |
| Tool provisioning + SSO confirmed | IT | IT Lead | Security | All employees |
| All-hands kickoff (30 min, CEO + Adoption Lead) | Adoption Lead | CEO | Captains | All employees |
| Launch #ai-users Slack channel | Adoption Lead | Adoption Lead | — | All employees |

**Kill criteria check** (end of week): Are 70%+ of employees provisioned? If not, pause Week 2 rollout until IT catches up.

#### Week 2 (Day 1 Enablement)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Run Day 1 walkthroughs (per Guide 1) | Buddies | Adoption Lead | Captains | Employees |
| First Office Hours session (Guide 2) | Adoption Lead | Adoption Lead | Captains | All employees |
| Department playbooks distributed | Captains | Adoption Lead | — | Departments |
| First quick-wins committed | Employees | Managers | Buddies | Adoption Lead |

**Kill criteria check**: Are 50%+ of employees through their Day 1 walkthrough? If not, extend foundation phase by 1 week.

#### Week 3 (First Wins Surfacing)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Office Hours (weekly) | Adoption Lead | Adoption Lead | — | All employees |
| Captains running dept-specific Office Hours | Captains | Adoption Lead | — | Department |
| First Marketplace contributions submitted | Anyone | Adoption Lead | — | All employees |
| Weekly leaderboard published | Adoption Lead | Adoption Lead | — | All employees |

**Scaling trigger**: 25%+ of employees have run 3+ AI workflows by end of Week 3 → proceed to Phase 2 on schedule.

#### Week 4 (Department Playbook Rollout Begins)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Each captain runs a dept playbook workshop (60 min) | Captains | Dept heads | Adoption Lead | Departments |
| Mid-week Office Hours + monthly Demo Day prep | Adoption Lead | Adoption Lead | Captains | All employees |
| First Demo Day (6 demos × 4 min) | Demoers | Adoption Lead | Captains | All employees |
| Track + share weekly leaderboard | Adoption Lead | Adoption Lead | — | All employees |

**Kill criteria check**: Are 3+ departments at <30% weekly active users? If yes, pull captains of those departments into a problem-solving session — do not push forward blindly.

#### Week 5

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Office Hours (weekly) | Adoption Lead | Adoption Lead | — | All employees |
| 1:1 check-ins between buddies + their assigned colleagues | Buddies | Adoption Lead | — | Adoption Lead |
| Marketplace curators review submissions, publish best | Captains | Adoption Lead | — | Contributors |
| Internal Slack thread: "what AI workflow surprised you this week?" | Adoption Lead | Adoption Lead | — | All employees |

#### Week 6 (Halfway Check-In)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Mini exec readout (Adoption Lead → exec team) | Adoption Lead | Adoption Lead | Captains | Exec team |
| Mid-point company pulse survey (3 questions, 2 min) | Adoption Lead | VP People | — | All employees |
| Recognize top 5 contributors at all-hands | Adoption Lead | CEO | — | All employees |
| Office Hours + Demo Day cadence stabilized | Adoption Lead | Adoption Lead | — | All employees |

**Scaling trigger**: 50%+ weekly active users company-wide → consider expanding rollout to additional workflows.

**Kill criteria**: <30% weekly active users at Week 6 → STOP. Convene exec + adoption lead + captains. Diagnose. Either reset (rollback to better workflows) or hold steady (no further expansion) until adoption recovers.

#### Week 7

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Department deep-dive sessions for laggards | Captains | Adoption Lead | Dept heads | Departments |
| New marketplace contributions reviewed weekly | Captains | Adoption Lead | — | Contributors |
| Office Hours guest hosts (one per week from another dept) | Captains | Adoption Lead | — | All employees |

#### Week 8 (Skills Marketplace Goes Live)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Marketplace V1 launched (with 20+ patterns) | Captains | Adoption Lead | — | All employees |
| Demo Day theme: "Marketplace's Greatest Hits" | Demoers | Adoption Lead | Captains | All employees |
| Recognition: top 3 marketplace contributors get visible award | Adoption Lead | CEO | — | All employees |
| Begin quarterly review of policy + practices | Legal + Adoption Lead | GC | Security | Exec team |

**Scaling trigger**: 60%+ weekly active users + 20+ marketplace patterns → ready for Phase 3.

#### Week 9

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Office Hours rotated to all 8 captains over the next 8 weeks | Captains | Adoption Lead | — | All employees |
| First "Skill Slam" (monthly company demo from Marketplace) | Demoers | Adoption Lead | — | All employees |
| Department captains take ownership of dept-specific adoption metrics | Captains | Dept heads | Adoption Lead | Adoption Lead |

#### Week 10 (Mid-Point Re-Assessment)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Re-administer L0-L3 assessment (mini version, 5 min) | Adoption Lead | VP People | Managers | Employees |
| Gap analysis: where are people stuck at L0/L1? | Adoption Lead | VP People | Managers | Captains |
| Personalize next 30 days for stuck cohorts | Managers + Adoption Lead | VP People | Captains | Stuck employees |

**Deliverable**: Updated learning tracks for all employees who haven't progressed.

#### Week 11

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Time-saved survey deployed across all departments | Adoption Lead | VP People | Captains | Employees |
| Output / quality metrics gathered (per dept-specific list in Framework 4) | Captains + Dept heads | Adoption Lead | Data Analyst | Exec team |
| Office Hours, Marketplace contributions, Demo Day continue at steady cadence | Captains + Adoption Lead | Adoption Lead | — | All employees |

#### Week 12 (ROI Report + Next-Quarter Plan)

| Activity | R | A | C | I |
|----------|---|---|---|---|
| Quarterly Adoption Report produced (per Framework 4) | Adoption Lead | VP People | CFO, Captains | Exec team, Board |
| Exec readout (60 min, includes Q&A) | Adoption Lead | CEO | Captains | Exec team |
| Next-quarter plan drafted (deeper rollout, new tool evals, advanced workflows) | Adoption Lead | VP People | Captains, Dept heads | Exec team |
| Recognition: end-of-quarter champions named + rewarded | Adoption Lead | CEO | — | All employees |

**Deliverable**: 1-page Quarterly Adoption Report + 1-page Next-Quarter Plan, both signed off by the exec sponsor.

### Kill Criteria — When to Pause or Pivot

Set these explicitly at Day 0 so they're not negotiated under pressure:

1. **Week 2: Tool provisioning failure**. If <70% provisioned by end of Week 2, pause new-user activation. Fix the IT pipeline before adding load.

2. **Week 4: First-touch failure**. If <50% of employees have completed their Day 1 walkthrough, extend foundation phase. Don't try to "make it up later."

3. **Week 6: Adoption stall**. If weekly active users < 30%, STOP the rollout. Diagnose with exec + adoption lead + captains. Likely causes: wrong workflows chosen, wrong tool, wrong enablement format, or wrong manager engagement. Fix the cause; don't add more campaigns on top.

4. **Week 8: Single-department failure**. If one department is at <20% adoption while company is at 60%+, escalate to dept head + exec sponsor. Don't write off the department — pull them in for a tailored intervention.

5. **Week 10: Quality regression**. If any quality metric (CSAT, error rate, customer complaints) is regressing in a department that's heavily adopted AI, PAUSE expansion in that workflow + diagnose. Likely a manager skipped human-review gates.

6. **Week 12: ROI gap**. If the ROI report shows < 2x return on investment (tool cost + people time), present that honestly to the exec team. Do not inflate numbers. Use the gap to negotiate either more time, more support, or a refined Phase 2.

### Scaling Triggers — When to Expand

1. **>60% weekly active users + Marketplace has 20+ patterns + at least 1 demo per dept**: ready to expand to deeper workflows (Phase 2).
2. **>75% weekly active users + ROI report shows >5x return**: ready to invest in dedicated AI Ops headcount.
3. **>80% weekly active users + L3 contributors > 10% of workforce**: ready for advanced governance — RAG, internal model finetuning, agents.
4. **CSAT / NPS / quality metrics improving alongside adoption**: ready to pursue customer-facing AI features (vs. internal-only).

### Anti-Patterns (How 90-Day Rollouts Fail)

1. **No exec sponsor**. The rollout becomes "the People Ops project nobody knows about." → Fix: name CEO or COO as sponsor publicly at kickoff.

2. **Tool first, workflow second**. Buying licenses without doing Skill Discovery means most licenses go unused. → Fix: never order > 100 seats without 8 dept discovery sessions complete.

3. **All push, no pull**. Top-down "you must use AI" generates resentment. → Fix: champion-led + visible recognition is the structural unlock, not exec mandate.

4. **Treating it as L&D**. Webinars don't drive adoption; workflow-specific 1:1s do. → Fix: budget 60-80% of program time on individual workflow enablement, not all-hands training.

5. **Skipping the ROI report**. The program quietly dies because no one ever quantified it. → Fix: Week 12 ROI report is mandatory + presented to exec team, with or without exciting numbers.

6. **Letting the captains burn out**. The 8 captains carry the weight, and after 12 weeks they're exhausted. → Fix: explicit captain rotation every 6 months. The role is a 12-month commitment, not life sentence.

---

## Pro Tips Across All Five Guides

- **Pick ONE adoption lead for the whole program.** A part-time owner is a no-owner. Make it 50% of one person's role for 90 days.
- **The CEO must use AI visibly.** Adoption tops out where the senior leader's adoption stops. If the CEO doesn't use AI, neither will the SVPs.
- **Buddy > Webinar.** 1:1 hand-holding for the first prompt converts more than a 60-min webinar with 100 people. Budget time accordingly.
- **Track and tell the story.** A great rollout that no one reports on dies. A mediocre rollout that's well-reported gets Phase 2 funding. Write the report.
- **Adopt in waves, not all at once.** 8 departments × 12 weeks = 96 dept-weeks. Don't expect day-1 momentum across all 8. Sequence: Eng + Marketing first (fastest adopters), Sales + Support next, Finance + HR + Legal + Product after foundations are solid.

---

© 2026 Midas Tools — www.midastools.co
