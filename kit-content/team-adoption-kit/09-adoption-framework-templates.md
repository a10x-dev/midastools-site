# Midas Tools — AI Team Adoption Kit
# 09: Adoption Framework Templates

Four detailed framework templates for measuring, tracking, and reporting AI adoption across a 50–1000 person company. These are the operator-grade artifacts the People Ops / L&D / Ops lead actually uses to manage a rollout — not vague "how to measure AI" thought-pieces.

Use these in sequence:
1. **AI Proficiency Assessment** — baseline every employee, set learning paths
2. **Weekly AI Usage Leaderboard** — make adoption visible
3. **AI Skills Marketplace / Internal Dojo** — peer learning + recognition
4. **ROI Calculator & Reporting** — quantify the business impact for the exec team

---

## Framework 1: AI Proficiency Assessment (L0–L3)

### Purpose
Score every employee on a 4-level proficiency scale (L0 to L3) so you can:
- Establish a baseline before rollout
- Personalize learning paths (an L0 needs different support than an L2)
- Track movement over 90 / 180 / 365 days
- Identify your champions (L3s who can mentor) and your gaps (L0s who need hand-holding)

This is NOT a performance review and should be communicated as such. It's a development tool.

### The L0–L3 Scoring Framework

#### L0 — Unaware / Skeptical
**Definition**: Has not actively used AI tools for work, or has tried once and abandoned. Sees AI as hype, distraction, or threat.

**Specific behaviors that indicate L0**:
- Has not opened Claude / ChatGPT / Gemini / Copilot in the last 30 days (per usage data if available)
- Cannot describe one specific workflow they would use AI for
- Has expressed (or implied through inaction) that "AI doesn't work for what I do"
- Has never asked a colleague "how would you prompt this?"

**Common in**: Senior tenure roles who built their craft pre-AI; functions that feel less obviously AI-adjacent (some Legal, some Finance, some traditional Operations roles).

**Development path**: 1:1 hand-holding for first 3 prompts. NOT a webinar. Skeptical L0s need someone to sit with them and demonstrate one workflow that saves them 30 minutes — that's the conversion moment.

---

#### L1 — Beginner / Curious User
**Definition**: Uses ChatGPT or equivalent 1-2x per week for personal or simple work tasks. Treats AI like Google with sentences. No structured prompts, no iteration, no chain-of-thought.

**Specific behaviors that indicate L1**:
- Has an active account on at least one consumer AI tool
- Uses it for: drafting an email, summarizing an article, brainstorming
- Cannot describe a "prompt pattern" they reuse
- Has not yet tried using AI for their core daily workflow

**Common in**: Most employees in a 50-1000 person company today, regardless of function. This is the modal state.

**Development path**: Department playbooks (files 01-08 of this kit) targeted at their function. Demonstrate that AI works for THEIR job, not for "brainstorming in general."

---

#### L2 — Active Practitioner
**Definition**: Uses AI 5+ times per week across multiple workflows. Has a repertoire of 3-5 prompts they reuse. Can iterate on outputs to get better results.

**Specific behaviors that indicate L2**:
- Daily active use of at least one AI tool
- Has saved or memorized prompts they reuse
- Can describe a recent moment where AI saved them >1 hour
- Iterates: when first output is bad, they reformulate and try again (vs. giving up)
- Has shared a prompt or technique with a colleague

**Common in**: Engineering and Marketing teams adopt this fastest. Sales, Product, and Ops tend to lag by 3-6 months unless deliberately enabled.

**Development path**: Workflow-specific deep-dives. Pair them with adjacent L2s for cross-pollination. Begin offering them opportunities to be "skill contributors" in the internal marketplace (Framework 3).

---

#### L3 — Expert / Multiplier
**Definition**: Uses AI as core to their daily workflow. Builds custom prompts, chains, and small workflows that other employees adopt. Mentors others. Can identify when AI is the wrong tool.

**Specific behaviors that indicate L3**:
- Has a personal prompt library of 10+ refined prompts
- Has built at least one custom workflow (Claude project / GPT / Gemini Gem / Copilot prompt template) that others use
- Has taught at least one colleague how to use AI for a specific workflow
- Knows the limits — can articulate "this is when I don't use AI"
- Often the first person on the team to try a new AI tool / model release

**Common in**: 5-15% of a workforce after 6-12 months of structured rollout. These are your champions and you should treat them as such.

**Development path**: Recognize publicly. Reward formally (bonuses, time-back-on-calendar, conference budgets). Pull them into the Skills Marketplace as contributors. Pair them with L0s and L1s as mentors.

---

### Self-Assessment Questionnaire (For Employees)

Send this to every employee. 12 questions, 5 minutes to complete. Results auto-suggest a proficiency level which is then confirmed by their manager.

```
=== AI Proficiency Self-Assessment ===

Department: [DROPDOWN]
Role: [TEXT]
Tenure: [DROPDOWN — <1yr / 1-3yr / 3-5yr / 5+yr]

Section 1: Usage Frequency
1. How often have you used an AI tool (Claude / ChatGPT / Gemini / Copilot) for work in the last 7 days?
   - 0 times → L0
   - 1-2 times → L1
   - 3-5 times → L2
   - 6+ times → L3

2. Which AI tools have you used in the last 30 days? (Check all that apply)
   - Claude
   - ChatGPT
   - Google Gemini
   - Microsoft Copilot
   - Cursor / Zed / other coding AI
   - GitHub Copilot
   - Other: ___

Section 2: Workflow Integration
3. Can you describe a SPECIFIC moment in the last 30 days when AI saved you meaningful time on a work task?
   - No → L0 or L1
   - Yes, but I struggled to make it useful → L1
   - Yes, it routinely helps me → L2
   - Yes, it's how I do my best work → L3

4. Which best describes your prompting style?
   - I haven't prompted AI for work → L0
   - I ask AI a question and use whatever comes back → L1
   - I write structured prompts with context, then iterate when needed → L2
   - I have a personal library of prompts I reuse, and I refine them over time → L3

Section 3: Iteration & Refinement
5. When AI gives you a bad output, what do you do?
   - Give up and do it manually → L0/L1
   - Try one or two reformulations, then give up → L1
   - Iterate until the output is right → L2
   - Diagnose the prompt issue and refactor systematically → L3

Section 4: Sharing & Teaching
6. In the last 90 days, have you taught a colleague how to use AI for a specific workflow?
   - No → L1 or L2
   - Yes, casually in a Slack thread → L2
   - Yes, formally — they now reuse it → L3

7. Have you contributed a prompt, workflow, or tip to a shared team resource (wiki, prompt library, Slack channel)?
   - No → L1
   - Once → L2
   - Multiple times / I'm a regular contributor → L3

Section 5: Edge Awareness
8. Can you describe a workflow where you've TRIED AI and found it didn't help?
   - No, I haven't used it enough to know → L0/L1
   - I'm not sure where it shouldn't be used → L1/L2
   - Yes — I know where AI helps and where it doesn't → L2/L3

Section 6: Recent Experimentation
9. In the last 30 days, have you tried a new AI tool, model, or technique you hadn't used before?
   - No → L0/L1
   - Yes, casually → L2
   - Yes, I follow new releases and experiment regularly → L3

10. Have you used AI for any of the following in the last 30 days? (Check all)
    - Drafting a document → L1
    - Summarizing or analyzing a document → L1/L2
    - Writing or reviewing code → L2
    - Building a small workflow / chain → L2/L3
    - Helping make a decision with structured analysis → L2/L3
    - Teaching the AI something specific to my work (custom instructions / project / Gem) → L3

Section 7: Confidence & Aspirations
11. How confident do you feel about using AI in your role?
    - Not confident — wouldn't know where to start
    - A little confident — I can use it for simple things
    - Reasonably confident — I use it daily for several tasks
    - Highly confident — it's core to how I work

12. What would help you most? (Free text)
    [TEXTAREA]

=== End of Self-Assessment ===
```

Scoring algorithm: weight each answer toward L0-L3 per question, then composite. If self-assessment composite is L2 but the employee's question 12 reveals beginner concerns, flag for manager calibration.

### Manager Calibration Rubric (After Self-Assessment)

Each manager reviews their team's self-assessments and either confirms or recalibrates. Use this rubric:

| Question | L0 indicator | L1 indicator | L2 indicator | L3 indicator |
|----------|--------------|--------------|--------------|--------------|
| **Frequency of observed AI use** | Never observed | Occasional, ad-hoc | Routine, multiple workflows | Constant; AI-native |
| **Quality of AI output integration** | N/A | Output sometimes used as-is, sometimes discarded | Output consistently improves work, iterated | Output is leveraged in original ways, often shared with team |
| **Speed of work delivery** | No observable change | Slight time saved on some tasks | Notable acceleration on specific workflows | Significant compounding speed; takes on more ambitious work |
| **Mentorship of others** | None | None | Has helped 1-2 colleagues casually | Actively mentors; team turns to them as resource |
| **Edge / limit awareness** | Doesn't know | Hasn't articulated | Has shared "AI doesn't work for X" insights | Sets norms for team about when AI is / isn't appropriate |

Manager flags any discrepancy >1 level between self-assessment and their observation. Calibration conversation happens 1:1 — never publicly.

### Skill Gap Identification & Personalized Learning Paths

Based on the calibrated L0-L3 score, assign each employee to a learning track:

#### Track A: L0 → L1 (4 weeks)
- Week 1: Setup + first prompt walkthrough (assigned buddy who is at L2+)
- Week 2: 3 specific workflows from their department playbook (file 01-08)
- Week 3: Iterate on those 3 workflows with feedback from buddy
- Week 4: Demo what they've learned in their team standup (low-stakes share)
- Success criterion: 5+ AI uses in week 4

#### Track B: L1 → L2 (6-8 weeks)
- Week 1-2: Department playbook deep-dive (all 6 prompts from their function file)
- Week 3-4: Build personal prompt library — capture the 5 prompts they reuse most
- Week 5-6: One stretch workflow — pair with an L2 colleague to try a more advanced pattern
- Week 7-8: Share one prompt or workflow with the team
- Success criterion: 3+ recurring weekly AI workflows + 1 share

#### Track C: L2 → L3 (12 weeks, ongoing)
- Month 1: Build a custom workflow (Claude project / GPT / Gemini Gem) shared with the team
- Month 2: Mentor 1 L0 / L1 colleague
- Month 3: Contribute to the AI Skills Marketplace (Framework 3) — submit at least 2 patterns
- Success criterion: They are pulled in BY others for AI questions

#### Track D: L3 Maintenance (Ongoing)
- Quarterly: Try one new model / tool release as it ships
- Quarterly: Lead one Office Hours session (see file 10)
- Quarterly: Submit one new pattern to the Skills Marketplace
- Recognition: Quarterly bonus / time-off / visibility in all-hands

### How to Run the Assessment

**Cadence**:
- Baseline: Month 1 of rollout, every employee
- First re-assessment: Month 4 (90 days)
- Steady-state: Twice per year, sync with performance cycles (but NOT part of perf review)

**Logistics**:
- Send via your standard people-tool (Lattice, 15Five, Culture Amp, or Google Forms)
- Anonymous? **NO** — must be tied to individual for learning-path assignment. But results never feed into performance reviews — promise this explicitly and keep the promise.
- Reporting: Aggregate at department level, share trends company-wide. Individual scores only visible to employee + their manager.

**Output reporting** (to send back to employees after the cycle):
- "Your score: L2"
- "Your assigned learning track: B"
- "Your buddy / mentor: [NAME]"
- "Your kickoff session: [DATE]"
- "Where the company is: [DISTRIBUTION CHART]"
- "Your next checkpoint: [DATE — 90 days from now]"

---

## Framework 2: Weekly AI Usage Leaderboard

### Purpose
Make AI adoption visible without making it punitive. Public visibility of who's using AI well drives social proof; private visibility of who isn't drives manager conversations.

The leaderboard recognizes:
- **Volume** (consistent use)
- **Quality** (contributions to the Skills Marketplace, shared prompts)
- **Mentorship** (helping others adopt)
- **Innovation** (new workflows or tool experiments)

NOT scored: raw "I ran 200 ChatGPT queries" gaming. The leaderboard rewards outcomes and contributions, not activity for its own sake.

### Notion Template (Embed in Your Wiki)

```
==========================================
🏆 AI USAGE LEADERBOARD — WEEK OF [DATE]
==========================================

This Week's Recognized Adopters

🥇 [NAME, DEPT] — "Built the customer-call summary workflow that the whole CS team is now using"
🥈 [NAME, DEPT] — "Ran 12 candidate screenings using the new interview rubric prompt; cycle time down 40%"
🥉 [NAME, DEPT] — "Mentored 3 L0 colleagues this week; all 3 ran their first prompt"

Honorable Mentions
- [NAME, DEPT] — [WHAT THEY DID]
- [NAME, DEPT] — [WHAT THEY DID]
- [NAME, DEPT] — [WHAT THEY DID]

==========================================
DEPARTMENT ADOPTION SNAPSHOT
==========================================

| Department | Active Weekly Users | % of Team | Δ vs. Last Week | Highlight |
|------------|----------------------|-----------|------------------|-----------|
| Engineering | 28 / 32 | 88% | +5% | Code review prompt now standard |
| Sales | 18 / 24 | 75% | +10% | Gong analyzer adopted across team |
| Marketing | 11 / 12 | 92% | +0% | Holding strong |
| Customer Support | 14 / 20 | 70% | +15% | Big jump from ticket triage rollout |
| Product | 8 / 10 | 80% | +20% | PRD prompt traction |
| Finance | 4 / 8 | 50% | +25% | Expense categorization win |
| HR / People | 5 / 6 | 83% | +0% | |
| Legal | 2 / 3 | 67% | +33% | Vendor security review prompt |

Company total: 90 / 115 (78%) — up from 65% three weeks ago.

==========================================
THIS WEEK'S NEW CONTRIBUTIONS TO THE SKILLS MARKETPLACE
==========================================

1. [NAME] — "Account enrichment for SMB segment" (Sales)
2. [NAME] — "PR description from diff" (Engineering)
3. [NAME] — "Investor-update draft from KPIs" (Finance)

==========================================
OFFICE HOURS / DEMOS THIS WEEK
==========================================

- Tue 10am — Engineering AI Office Hours (host: [NAME])
- Wed 2pm — Sales: "How I close 2 more demos per week using AI" — [NAME]
- Fri 9am — Open AI Demo Slam (anyone can show a workflow)
```

### Google Sheets Template

For teams that prefer a spreadsheet:

```
Sheet 1: Weekly Snapshot

Columns:
A: Week of (date)
B: Employee name
C: Department
D: Weekly AI uses (self-report or pulled from tool usage if available)
E: Workflows used (free text — e.g. "code review, PR description")
F: Contributions to marketplace (Y/N + count)
G: Mentorship moments (Y/N + names mentored)
H: Innovation (Y/N — tried something new this week)
I: Manager confirmation (Y/N)
J: Weekly Score (composite)

Sheet 2: Department Roll-up

Pivot of Sheet 1:
- % of department active
- Average weekly score
- Δ vs. last week
- Top contributor this week

Sheet 3: Quarterly Trend

Time series across 12 weeks of:
- Total active users
- Avg uses per active user
- Marketplace contributions
- Mentorship moments

Sheet 4: Recognition Roster

Auto-flag the top 3 each week + cumulative top contributors over the quarter for explicit recognition (Slack callout, bonus, etc.).
```

### Gamification Rules

**Do**:
- Recognize publicly in Slack / all-hands (top 3 weekly)
- Tie quarterly tops to bonuses, time-off, or conference budgets
- Celebrate teams that pull up the laggards (a manager whose team went from 30% → 80% adoption deserves more recognition than a manager whose team was already at 90%)
- Vary the categories — sometimes "most prompts shared", sometimes "best new workflow", sometimes "best mentor"

**Don't**:
- Rank individuals from bottom to top — that punishes L0s for being honest about where they are
- Tie scores to performance reviews
- Reward raw usage volume (incentivizes spam queries)
- Force participation — make it visible enough that opting out is socially noticeable but not punitive

### Anti-Patterns (How Leaderboards Fail)

1. **Activity theater**: People run 100 queries to top the chart. Fix: score on outputs / contributions, not query count.
2. **Gaming the buddy system**: Teaming up to claim mentorship credit. Fix: require the mentored colleague to confirm.
3. **Public shaming**: Bottom of leaderboard is visible. Fix: only top is public; bottom is private manager data.
4. **Forced rotation**: Same 5 people always win. Fix: cap recognition (you can be top 3 once per quarter, then you're an "Alumni" for that quarter).

---

## Framework 3: AI Skills Marketplace / Internal Dojo

### Purpose
This is the pattern that companies like Ramp, Stripe, and Anthropic have used internally: a peer-curated library of AI workflows, prompts, and patterns that any employee can adopt. The marketplace makes the company's best prompts shared property, accelerates adoption from L1 → L2, and surfaces talent (the L3s become visible by contribution count).

Think of it as the "Stack Overflow of internal AI knowledge."

### Structure

#### Where to host it
Three options, choose one and standardize:
1. **Notion / Confluence wiki** — easiest to start, great search, terrible at versioning
2. **Internal GitHub repo** — version control + PR workflow for prompt review, but engineer-heavy
3. **Dedicated tool** (PromptHub, Promptable, Helicone) — best UX, additional vendor cost

Recommendation: Start with Notion / Confluence. Migrate to a dedicated tool when contribution volume justifies it (~50+ contributions or 100+ employees actively using).

#### Categorization
Organize by both DEPARTMENT and WORKFLOW TYPE:

```
/marketplace
  /by-department
    /engineering
    /sales
    /marketing
    /support
    /product
    /finance
    /hr
    /legal
  /by-workflow-type
    /analysis
    /drafting
    /summarization
    /research
    /decision-making
    /automation
    /communication
  /by-tool
    /claude-projects
    /gpts
    /gems
    /copilot
    /cursor
  /featured (the curator's picks of the week / month)
  /retired (deprecated prompts kept for archive)
```

### Contribution Template

Every marketplace entry uses this exact template. No exceptions.

```
================================================
TITLE: [SHORT, SEARCHABLE — e.g. "Convert customer call transcript into MEDDIC fields"]
================================================

CONTRIBUTOR: [NAME, DEPARTMENT]
DATE ADDED: [DATE]
LAST UPDATED: [DATE]
TIMES USED: [AUTO-INCREMENT if your tool supports it]
RATING: [Avg 1-5 stars from users]

================================================
1. WHAT THIS DOES (1 sentence)
================================================
[Describe the outcome in plain language]

================================================
2. WHO IT'S FOR
================================================
[Role / function / scenario — e.g. "AEs and SDRs prepping for second meeting after a discovery call"]

================================================
3. PROBLEM IT SOLVES
================================================
[What did you do before this prompt? What pain did it remove?]

================================================
4. WHEN TO USE IT
================================================
[Specific trigger — "after every Gong call > 30 min" / "before every PR review" / etc.]

================================================
5. WHEN NOT TO USE IT
================================================
[Specific anti-cases — "not for renewal calls, since the structure is different" / "not when the buyer is a single-person team"]

================================================
6. THE PROMPT (paste-and-run)
================================================
[FULL TEXT OF THE PROMPT]

================================================
7. WHAT TO PASTE / FILL IN
================================================
[Walk through the [VARIABLES] and what to put in each]

================================================
8. EXAMPLE INPUT
================================================
[A real example, anonymized]

================================================
9. EXAMPLE OUTPUT
================================================
[The corresponding output the prompt produces]

================================================
10. RECOMMENDED MODEL / TOOL
================================================
[Claude Sonnet 4.5+ / GPT-5 / Gemini 2.5 / Doesn't matter]
With reasoning if specific.

================================================
11. PRO TIPS
================================================
- [TIP 1]
- [TIP 2]

================================================
12. GOTCHAS / FAILURE MODES
================================================
- [WHAT GOES WRONG SOMETIMES]
- [HOW TO TELL THE OUTPUT IS BAD]

================================================
13. SECURITY / COMPLIANCE NOTES
================================================
- Customer data: [SAFE TO INCLUDE / SCRUB FIRST / DON'T INCLUDE]
- PII: [HANDLING NOTES]
- Confidential: [HANDLING NOTES]

================================================
14. VERSION HISTORY
================================================
v1.0 — [DATE] — Initial version
v1.1 — [DATE] — Updated based on feedback from [NAME]

================================================
15. FEEDBACK FROM USERS
================================================
[Inline comments / star ratings / "this saved me 2 hours" testimonials]
================================================
```

### Peer Learning Framework: The Internal Dojo

The Marketplace is the asynchronous library. The Dojo is the synchronous practice space.

#### Weekly Office Hours (30 min, ongoing)
- One time slot per department per week
- Hosted by an L3 contributor or rotating champion
- Format: 5 min showcase of one new prompt + 20 min open Q&A + 5 min wrap with "ask of the room"
- Recorded and indexed in the Marketplace

#### Monthly Skill Slam (60 min, company-wide)
- 6 contributors get 5 min each to demo a new workflow they've shared
- Audience votes on "most useful" — winner gets recognition + perk
- The 6 demos become Featured entries in the Marketplace for that month
- Energy of a science fair, not a webinar

#### Quarterly Build-In-Public Sprint (1 week)
- Pick a department-specific challenge ("How do we cut customer onboarding time by 30%?")
- Open it to the company: anyone can contribute a prompt / workflow / pattern
- At end of week, the best contributions become permanent additions
- Winners get visibility in the all-hands

### Contribution Tracking

Track contributions over time:

| Contributor | Total Patterns Submitted | Avg Star Rating | Times Patterns Reused | Mentorship Sessions |
|-------------|--------------------------|------------------|------------------------|---------------------|

Roll up to leaderboard quarterly. Top contributors get explicit recognition + reward.

### Recognition System

| Tier | Threshold | Recognition |
|------|-----------|-------------|
| Contributor | 1 pattern published | Slack badge + welcome to "Marketplace Contributors" channel |
| Practitioner | 5 patterns published, avg rating ≥ 3.5 | Custom "AI Practitioner" title for Slack profile |
| Master | 10 patterns published, ≥1 with 50+ reuses | Quarterly bonus / time-off / conference budget |
| Maven (rare) | 20+ patterns + recognized mentor + helped train > 5 colleagues | Annual recognition at all-hands; visible in company storytelling |

### Anti-Patterns to Avoid

1. **The Marketplace becomes a dumping ground**. Solution: enforce the contribution template + at least one peer reviewer signoff before publishing.
2. **The top contributors burn out**. Solution: explicit rotation in featured / facilitator roles. No one person is the marketplace.
3. **Patterns rot when models / tools change**. Solution: quarterly review by department captains — retire or update stale patterns.
4. **Only engineers contribute**. Solution: department-specific contribution targets. Recognize the first contribution from each department + each L1 → L2 progression.

---

## Framework 4: ROI Calculator & Reporting

### Purpose
Quantify the impact of AI adoption for the exec team. The CFO / CEO will ask "what did this rollout actually deliver?" — and "people seem happy" is not an answer. This framework turns adoption into hours-saved, work-shipped, and revenue-impacted numbers.

### What to Measure

There are 5 categories of ROI. You don't have to measure all 5 — pick the 2-3 that matter most for your business.

1. **Time saved per department** (the easiest to quantify; the headline number)
2. **Output volume increase** (PRs shipped, deals closed, tickets resolved)
3. **Quality improvement** (CSAT, error rate, cycle time)
4. **Revenue / cost impact** (deals won faster, customers retained, headcount avoidance)
5. **Employee experience** (engagement, retention of AI-savvy employees)

### Time Saved Per Department — Calculation Template

For each department, ask 5-10 employees these 4 questions monthly:

```
Survey: AI Time Savings — [MONTH]

For each of the workflows below, please estimate:
A. Hours per week you spent on this workflow BEFORE adopting AI for it
B. Hours per week you currently spend on this workflow with AI assistance
C. Confidence in the estimate (low / medium / high)

Workflow 1: [DEPT-SPECIFIC, e.g. "Drafting prospecting emails"]
- Before: [HOURS]
- After: [HOURS]
- Confidence: [LMH]

Workflow 2: [...]
Workflow 3: [...]
Workflow 4: [...]

Additional context: Was there a workflow where AI actually slowed you down or made the output worse? (Be honest — this is for calibration.)
[TEXTAREA]
```

#### Calculation

For each department, compute:
- Δ = (sum of "Before" hours) - (sum of "After" hours) per surveyed employee per week
- Scale to full department: Δ × (full department size / surveyed employees) × 50 weeks/year
- Discount: multiply by 0.7 to apply a confidence haircut (people overestimate savings)
- Multiply by avg fully-loaded hourly rate of the department to get $ value

Example:
- Sales team: 24 employees, 8 surveyed
- Sum of (Before - After) across 8 surveyed: 24 hours/week
- Department weekly savings: 24 × (24 / 8) = 72 hours/week
- Annual: 72 × 50 = 3,600 hours/year
- Discounted: 3,600 × 0.7 = 2,520 hours/year
- At $75/hour fully-loaded: $189,000/year of time recovered

Report this AND the assumptions. CFOs respect transparent math more than impressive numbers.

### Output Volume / Quality — Department-Specific Metrics

| Department | Volume Metric | Quality Metric | Where to Pull |
|------------|---------------|------------------|---------------|
| Engineering | PRs shipped per engineer per week | PR cycle time, escaped bug rate | GitHub / Linear |
| Sales | Demos held, accounts touched per AE | Cycle time, win rate | CRM |
| Marketing | Content pieces shipped, campaigns launched | CTR, engagement rate, leads generated | Marketing platform |
| Customer Support | Tickets resolved per agent per day | CSAT, first-response time, reopen rate | Helpdesk |
| Product | PRDs shipped, features launched | NPS post-launch, time to roadmap | Product analytics + Linear |
| Finance | Close cycle time, accounts categorized | Variance accuracy, audit findings | NetSuite / Brex |
| HR | Time to fill, candidates screened | Quality of hire (90-day perf), engagement | ATS + survey |
| Legal | Contracts reviewed per week | Avg deal cycle delay caused by legal | Contract repo |

Track each month, compare current quarter vs. baseline quarter (pre-rollout).

### Quarterly Adoption Report — Executive Format

A 1-page report you send to the exec team each quarter. Build from this template:

```
==============================================
[COMPANY NAME] AI ADOPTION REPORT — Q[N] [YEAR]
Prepared by: [NAME, TITLE]
Date: [DATE]
==============================================

EXECUTIVE SUMMARY (3 sentences)
- Adoption: [X]% of employees actively using AI weekly (up from [Y]% last quarter)
- Time saved: ~[Z] hours/week across the company, valued at $[X]/year
- Headline impact: [ONE STRATEGIC WIN — e.g. "Engineering PR cycle time down 40%, freeing 6 eng-weeks/quarter for net-new feature work"]

ADOPTION METRICS
- Total employees: [N]
- Weekly active users: [N] ([%])
- L0–L3 distribution: L0 [%], L1 [%], L2 [%], L3 [%]
- Quarter-over-quarter shift: [N] employees moved up one level

By Department:
| Dept | Headcount | Weekly Active | % | Avg L Level | Δ vs. Last Q |
|------|-----------|----------------|---|-------------|---------------|

TIME SAVED (Annualized $ Value)
Total: $[X]/year
By Department:
| Dept | Hours saved/week | Annual hours | $ Value at fully-loaded rate |
|------|--------------------|---------------|-------------------------------|

OUTPUT / QUALITY IMPACT
- Engineering: PR cycle time [BEFORE → AFTER]; PRs per engineer per week [BEFORE → AFTER]
- Sales: Cycle time [BEFORE → AFTER]; win rate [BEFORE → AFTER]
- Customer Support: First-response time [BEFORE → AFTER]; CSAT [BEFORE → AFTER]
- [Other departments]

INVESTMENT
- Tool spend: $[X]/year (Claude / GPT / Gemini / Copilot / etc.)
- People time: ~[X] hours/quarter on enablement + governance
- Total investment: $[X]/year
- Return: $[X]/year (time saved + quality value)
- Net ROI: [X]× over investment

CHAMPIONS (Quarter's Top Contributors)
- [NAME, DEPT]: [WHAT THEY DID — 1 line]
- [NAME, DEPT]: [WHAT THEY DID — 1 line]
- [NAME, DEPT]: [WHAT THEY DID — 1 line]

NEXT QUARTER PRIORITIES
1. [SPECIFIC FOCUS — e.g. "Move Finance from 50% → 75% weekly active"]
2. [SPECIFIC FOCUS]
3. [SPECIFIC FOCUS]

RISKS / WATCHOUTS
- [SPECIFIC — e.g. "L0 cohort hasn't moved; suggest 1:1 enablement campaign"]
- [SPECIFIC]

ASKS OF THE EXEC TEAM
- [SPECIFIC — e.g. "Budget approval for 50 additional Claude Team seats"]
- [SPECIFIC]

==============================================
APPENDIX: METHODOLOGY
- Time-saved survey: [N] respondents across [N] departments
- Confidence haircut applied: 30%
- Fully-loaded hourly rates by dept: [LIST]
- Data sources: [LIST]
==============================================
```

### Before / After Benchmarks

For each major workflow, capture:

| Workflow | Pre-AI baseline | 90-day | 180-day | 365-day | Δ |
|----------|------------------|---------|----------|----------|----|
| PR review time | 45 min | 25 min | 18 min | 15 min | -67% |
| Outbound email per AE per day | 12 | 25 | 35 | 38 | +217% |
| Ticket triage time | 8 min | 3 min | 2 min | 1.5 min | -81% |
| PRD draft cycle | 5 days | 2 days | 1.5 days | 1 day | -80% |

These are the numbers you put on a slide for the CFO.

### Pitfalls in ROI Reporting

1. **Don't claim savings you can't defend.** If the survey says 8 hours/week saved but the manager hasn't seen any change in what shipped, the savings are theoretical. Apply the confidence haircut honestly.
2. **Watch for double-counting.** "Time saved" and "headcount avoidance" are related — if the time saved is being absorbed into doing MORE work (not freeing FTEs), don't claim both.
3. **Show the cost honestly.** Tool spend + people enablement time + governance overhead = real cost. ROI is net, not gross.
4. **Don't bury the disappointments.** If one department isn't seeing ROI, surface it with a hypothesis. Honesty builds CFO trust in the program.

---

© 2026 Midas Tools — www.midastools.co
