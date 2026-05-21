# Midas Tools — AI Team Adoption Kit
# 05: Product Playbook

Six paste-and-run prompts for the workflows PMs spend most of their week on: PRDs, user stories, prioritization, release notes, roadmap building, and user-research synthesis. Built for B2B SaaS PMs who own 1-3 products and ship every 2 weeks.

These prompts assume the PM has the raw inputs (notes, transcripts, data, tickets) and needs to turn them into the artifact. They are NOT "generate a roadmap from nothing" prompts — those produce slop. These take real inputs and produce real outputs.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[PRODUCT AREA] — The surface area you own (e.g. "Onboarding" or "Billing")
[ICP] — Ideal customer profile
[STACK] — Engineering stack (for context only)
[SPRINT LENGTH] — 1 week, 2 weeks, etc.
```

---

## Prompt 1: PRD (Product Requirements Document) Writer

### Prompt

```
You are a senior PM at [COMPANY NAME] writing a Product Requirements Document.

FEATURE NAME: [FEATURE]
PRODUCT AREA: [PRODUCT AREA]
TARGET RELEASE: [QUARTER / SPRINT]
PM: [YOUR NAME]
TECH LEAD: [NAME]
DESIGN LEAD: [NAME]

CONTEXT (paste any of: customer interviews, support tickets, sales calls, churn analysis, competitive moves, internal asks):
[PASTE 1-3 PAGES OF RAW MATERIAL]

EVIDENCE / DATA WE HAVE:
- How big is this problem: [QUANTIFIED — # of customers, ARR impact, ticket volume]
- Who feels it most: [SEGMENT]
- What they do today (workaround or competitor): [DESCRIBE]
- Confidence in the problem: HIGH / MEDIUM / LOW

CONSTRAINTS:
- Team capacity: [SPRINTS / ENG WEEKS]
- Tech constraints: [STACK / KNOWN DEPENDENCIES]
- Compliance / security requirements: [LIST]
- Must ship by: [DATE if any] and why

Produce a PRD in this exact structure (modeled on Stripe / Anthropic / Linear practice):

## TL;DR
3 sentences. Problem + solution + measurable outcome.

## Problem
2-3 paragraphs. The customer pain in customer language. Quantified.

## Evidence
Bullet list of every input that informed this PRD with source:
- [N] support tickets in last 90 days (link to dashboard)
- [N] sales calls mentioned this (link to Gong board)
- [SEGMENT] churn analysis showed [SIGNAL] (link)
- [COMPETITOR] just shipped [THING] (link)

## Goal & Non-Goals
- GOAL: 1 sentence stating exactly what success looks like, measurable
- NON-GOALS: 3-5 things this feature explicitly does NOT do (cuts the scope)

## Success Metrics
- Primary metric: [METRIC] target [NUMBER] by [DATE]
- Secondary metrics (3 max)
- Counter-metrics (what we don't want to break): [LIST]
- How we'll measure: [INSTRUMENTATION PLAN]

## User Stories
3-7 user stories in the format:
- AS A [persona] I WANT TO [action] SO THAT [outcome]
Each linked to a measurable acceptance criterion.

## Proposed Solution (V1)
Concrete description of what we're building, with key flows, key states (empty / loading / success / error), and what's IN vs. OUT.

## Alternatives Considered
2-3 alternatives we evaluated and why we didn't pick them. (Forces the team to actually consider alternatives.)

## Open Questions
List unresolved decisions with owner + deadline to resolve before kickoff. Don't ship a PRD with open questions unresolved.

## Risks
Top 3 things that could go wrong + a specific mitigation each.

## Rollout Plan
- Feature flag strategy
- Internal dogfood phase (who, how long)
- Beta cohort (which customers, criteria for "ready")
- General availability triggers (what must be true before we GA)
- Rollback plan if metrics go wrong

## Timeline
Phase / Milestone / Owner / Due Date — table.

## Cross-Functional Asks
- Engineering: [WHAT WE NEED]
- Design: [WHAT WE NEED]
- Support: [DOCS, MACROS, TRAINING]
- Sales / CSM: [ENABLEMENT NEEDED]
- Marketing: [LAUNCH STORY]
- Legal / Compliance: [REVIEW NEEDED]

## Appendix
Links to: customer quotes, design files, technical RFCs, competitor analysis, related ADRs.

Length: 3-5 pages. PRDs longer than 5 pages don't get read end-to-end.
```

### Pro tip

Always start with the EVIDENCE section. If you can't fill it with real inputs (tickets, calls, data, churn signals), don't write the PRD — go do customer research first.

---

## Prompt 2: User Story Decomposer

### Prompt

```
You are a senior PM at [COMPANY NAME] turning a feature into INVEST-quality user stories ready for engineering grooming.

FEATURE: [FEATURE NAME]
PRD LINK / SUMMARY: [PASTE PRD TL;DR + PROPOSED SOLUTION SECTIONS]

CONSTRAINTS:
- Team velocity: [POINTS / SPRINT]
- Sprints we have to deliver V1: [N]
- Tech lead's pre-grooming concerns: [LIST IF ANY]

Decompose the feature into a backlog of user stories. Each story must be INVEST:
- Independent (can ship on its own)
- Negotiable (scope can flex)
- Valuable (delivers value to the user or business)
- Estimable (eng can size it)
- Small (1-5 days of work)
- Testable (clear acceptance criteria)

Produce the backlog in this exact format:

## Story Map Overview
- Total stories: [N]
- Estimated total: [POINTS / DAYS]
- Sprints to V1: [N]
- Critical path: [LIST stories that must ship in this order]

## Sprint 1 (V0.1 — internal-only / dogfood)
For each story:

### STORY-[ID]: [SHORT TITLE]
- AS A [PERSONA] I WANT TO [ACTION] SO THAT [OUTCOME]
- Acceptance criteria (3-5 specific, verifiable bullets):
  1. [GIVEN / WHEN / THEN]
  2. [GIVEN / WHEN / THEN]
  3. [GIVEN / WHEN / THEN]
- Dependencies: [OTHER STORIES OR EXTERNAL]
- Risks / open questions: [LIST]
- Estimate: [POINTS or T-SHIRT]
- Definition of done:
  - [ ] Tests written + passing
  - [ ] Observability added (logs / metrics)
  - [ ] Feature flag wired
  - [ ] Designs reviewed
  - [ ] Docs draft
  - [ ] Code reviewed
  - [ ] Deployed to staging

(Repeat for each story in Sprint 1)

## Sprint 2 (V0.5 — beta cohort)
(Same structure)

## Sprint 3 (V1 — GA)
(Same structure)

## Out of Scope (Explicitly NOT this V1)
List stories deliberately cut. Each with 1-line reasoning.

## Open Questions for Grooming
Things to resolve in the grooming meeting before stories enter a sprint.

Tone: Clean handoff to engineering. Each story should be groomed in 2-5 minutes, not 30.
```

---

## Prompt 3: Feature Prioritization (RICE / Weighted Scoring)

### Prompt

```
You are a senior PM at [COMPANY NAME] running a prioritization exercise for next quarter.

PRODUCT AREA: [PRODUCT AREA]
QUARTER GOAL: [WHAT WE'RE TRYING TO MOVE]
TEAM CAPACITY: [N ENG-WEEKS AVAILABLE]

CANDIDATE FEATURES (paste a list with: name + 1-line description + estimated eng-weeks + source of demand):
[PASTE LIST OF 10-25 CANDIDATES]

PRIMARY METRIC THIS QUARTER: [METRIC]

Produce a prioritized backlog using RICE scoring (Reach × Impact × Confidence / Effort).

For each candidate, score:

### [FEATURE NAME] — [ENG-WEEKS]
- REACH (how many users in [TIMEFRAME, e.g. one quarter] will encounter this): [NUMBER + reasoning]
- IMPACT (on the primary metric, per affected user, on a scale of 0.25 / 0.5 / 1 / 2 / 3): [SCORE + reasoning]
- CONFIDENCE (% — how sure are we of the reach + impact based on evidence): [%]
- EFFORT (eng-weeks): [NUMBER from input]
- RICE SCORE: (Reach × Impact × Confidence) / Effort = [SCORE]

(Repeat for every candidate.)

## Ranked Backlog
Table with: Feature | Reach | Impact | Confidence | Effort | RICE Score | Owner
Sorted by RICE descending.

## Capacity-Adjusted Recommendation
Given [N] eng-weeks available, the recommended set to commit to this quarter:
- [FEATURE 1] ([WEEKS])
- [FEATURE 2] ([WEEKS])
- ... totaling [N] weeks of [N] available, leaving [BUFFER] for unplanned work

## Items Cut
List the high-RICE items that didn't make the cut (capacity constraint), with 1-line reasoning each. These move to next-quarter consideration.

## Items the Math Says Yes, But Gut Says No
Sometimes RICE produces a "winner" that's strategically wrong (e.g. tactical win that distracts from a platform investment). Flag any.

## Sensitivity Analysis
Which 2-3 candidates have the widest gap between confidence levels? Those are the candidates where doing 2-3 days of upfront discovery (customer calls, data pulls, prototype) would most change the answer.

## Recommendation to Exec Review
3-sentence summary: what we're doing, what we're cutting, what assumption could change the answer.

Tone: PM's prioritization memo. Quantified, defensible, honest about the uncertainty.
```

---

## Prompt 4: Release Notes Writer

### Prompt

```
You are the PM at [COMPANY NAME] writing the release notes for an upcoming version.

VERSION: [v X.Y.Z]
RELEASE DATE: [DATE]
PRODUCT: [PRODUCT]
AUDIENCE: [Customer-facing — end users / Customer-facing — admins / Internal only]

CHANGES IN THIS RELEASE (paste merged PRs, ticket summaries, or commit log — be raw, the prompt will filter):
[PASTE]

Produce release notes in this exact format:

## Customer-Facing Release Notes (Published)

### Title (60 chars or less)
[Compelling, value-focused — e.g. "Faster bulk imports + admin audit log" — NOT "v3.4.2 patch notes"]

### TL;DR (1-2 sentences)
What's new and why customers should care.

### What's New
Group into 2-4 categories with H3 headings. Examples: "Faster", "More secure", "Easier to manage", "New integrations".

For each item:
- 1-line plain-English description (what + why it matters to the user)
- "Available now to all customers" / "Available now on [PLAN]" / "Rolling out this week"
- Link to relevant doc / changelog entry

### Behind the Scenes
1-2 lines about improvements that don't have a UI surface (perf, infra, security).

### Coming Soon
Up to 3 items in active development (no specific dates). This builds anticipation.

### Need Help?
Link to support, docs, in-app help.

## Internal Release Notes (For Support, Sales, CSM)

### What Shipped
List with one-line technical summary + linked PR/ticket. Include items not in customer-facing notes (bug fixes, infra).

### What This Unlocks
- For Sales: [TALKING POINTS — 3 max]
- For CSM: [WHICH ACCOUNTS TO BRIEF + WHY]
- For Support: [LIKELY NEW TICKET PATTERNS + HOW TO HANDLE]
- For Marketing: [STORY ANGLES — if any are worth a blog / social post]

### Known Issues
Things we shipped knowing they're imperfect. What customers should NOT report as bugs.

### Macros / Docs Updated
List of help center articles, support macros, and FAQs updated for this release.

## Communication Plan
- In-app announcement (where, when)
- Email to customers (which segment, when, copy snippet)
- Social posts (LinkedIn / X — 1-2 sentence each)
- Changelog post on docs site (link)

Tone: Customer-facing should be benefit-led, not feature-led. Internal should be operator's brief. Both: under 1 page each.
```

### Pro tip

Write release notes BEFORE the release, not after. Forces the team to articulate value during dev, not at the finish line.

---

## Prompt 5: Quarterly Roadmap Builder

### Prompt

```
You are the Director of Product at [COMPANY NAME] building the next-quarter roadmap.

QUARTER: [Q + YEAR]
PRODUCT AREA: [PRODUCT AREA]
TEAM: [N PMs + N ENGINEERS + N DESIGNERS]
TOTAL ENG-WEEKS AVAILABLE: [NUMBER]

COMPANY GOAL THIS QUARTER: [HEADLINE GOAL — e.g. "Hit $X ARR" or "Reach Y enterprise logos"]
PRODUCT GOAL THIS QUARTER: [WHAT THIS AREA NEEDS TO DELIVER TO THE COMPANY GOAL]

INPUTS (paste any of):
- Last quarter's wins / misses / lessons
- Top 5 customer asks (with frequency / ARR impact)
- Top competitive moves to respond to
- Technical debt that's now blocking new work
- Strategic bets the CEO wants made

[PASTE INPUTS]

CONSTRAINTS:
- Must ship: [ANY COMMITMENTS ALREADY MADE]
- Cannot work on: [BLOCKED AREAS — e.g. dependency on Auth migration]
- Headcount changes: [HIRING / DEPARTURES]

Produce a quarterly roadmap in this exact structure:

## Headline (1 sentence)
The story of this quarter for this product area. E.g. "This quarter we ship enterprise-readiness: SSO + audit log + advanced permissions, unlocking 40% of stuck pipeline."

## Top 3 Themes
For each theme:
- Theme name + 1-line strategic narrative
- Why this matters now
- Big bets within this theme (2-3 features per theme)
- Success metric for the theme
- Owner (PM + Tech Lead)

## Quarter Plan by Sprint
Sprint-by-sprint outline (assume 6 sprints in a quarter for 2-wk sprints):

### Sprint 1: [TITLE]
- Primary deliverable
- Secondary deliverable
- Stretch

### Sprint 2 ... 6 (same structure)

## Capacity Math
| Theme | Eng-weeks Allocated | % of Capacity |
|-------|---------------------|----------------|
| Theme 1 | X | X% |
| Theme 2 | X | X% |
| Theme 3 | X | X% |
| Bug-fix & infra buffer | X | 15-20% |
| Total | X | 100% |

## Things We're NOT Doing This Quarter (Explicit Tradeoffs)
3-5 specific candidate themes / features we considered and are deliberately not pursuing this quarter. Each with a 1-line reason.

## Dependencies & Risks
- External dependencies (other teams' shipments we rely on)
- Top 3 risks to the plan + mitigation
- Decision points (this-or-that calls we'll have to make mid-quarter)

## Success Definition
What "we shipped a great quarter" looks like:
- 2-3 leading indicators we'll watch weekly
- 1-2 lagging outcomes we'll report at quarter-end
- 1 narrative we want to be able to tell the board at QBR

## Communication Plan
- Internal launch of roadmap: [WHO, WHEN, HOW]
- Customer-facing roadmap (what we share publicly vs. private)
- Update cadence (weekly to team, monthly to exec, quarterly to board)

Tone: Director's strategic memo. Roadmap is a story, not a Gantt chart.
```

---

## Prompt 6: User Research Synthesis

### Prompt

```
You are a senior PM at [COMPANY NAME] synthesizing customer research into actionable product insights.

RESEARCH CONTEXT:
- Research question we set out to answer: [SPECIFIC QUESTION]
- Method: [Interviews / Survey / Diary study / Usability test / Win-loss analysis]
- Sample: [N participants — describe their segment / role / tenure with us]
- Time period: [DATE RANGE]

RAW INPUT (paste interview transcripts, survey free-text, recorded demos, win-loss notes — up to 10-20 sessions):

[PASTE]

Produce a synthesis in this exact format:

## TL;DR (read by the CEO)
3 sentences:
1. What we asked
2. What we found (top theme)
3. What we should do about it

## Themes Found (Ranked by Frequency × Strength)

For each theme (4-7 themes):

### Theme 1: [SHORT NAME]
- Frequency: [N of N participants raised this]
- Strength of signal: STRONG / MEDIUM / WEAK (based on emotional intensity, specificity, willingness to pay)
- What it is (2-3 sentences in customer language)
- Verbatim quotes (3-5, anonymized):
  - "[QUOTE]" — [SEGMENT + ROLE]
  - "[QUOTE]" — [SEGMENT + ROLE]
- Surprise level: EXPECTED / SURPRISING / CHALLENGES OUR ASSUMPTIONS
- Implications: [WHAT THIS MEANS FOR THE PRODUCT]
- Action options:
  - Could ship: [SPECIFIC FEATURE OR FIX]
  - Could research more: [WHAT QUESTION REMAINS]
  - Could ignore: [REASONING IF WE THINK THIS DOESN'T WARRANT ACTION]

(Repeat for each theme)

## Cross-Theme Patterns
2-3 second-order observations across themes:
- "X% of customers who mentioned [THEME A] also mentioned [THEME B] — these are connected because [INSIGHT]"
- "The [SEGMENT] cohort showed [PATTERN] not seen in [OTHER SEGMENT]"

## What Did NOT Come Up (Negative Findings)
Important: list 3-5 things we expected to hear and didn't. Sometimes the silence is the insight.

## Personas / Mental Models
2-3 sketches of how participants think about our product / their problem space. Useful for future positioning, design, and onboarding flows.

## Recommendations (Ranked)
1. [SPECIFIC SHIP] — owner [WHO] — by [WHEN] — connects to themes [N, N]
2. [SPECIFIC SHIP] — owner [WHO] — by [WHEN] — connects to themes [N, N]
3. [SPECIFIC SHIP] — owner [WHO] — by [WHEN] — connects to themes [N, N]

## Risks of Acting on This Research
- Sample size: [SMALL / MEDIUM / LARGE — how confident are we?]
- Self-selection bias: [WHO DIDN'T PARTICIPATE that we should have heard from?]
- Recency bias: [IS THIS A POINT-IN-TIME SIGNAL or a durable pattern?]

## Open Questions for Next Round
3-5 specific questions we'd want to answer next.

## Appendix
- Methodology notes
- Participant list (anonymized)
- Raw transcripts (linked)
- Coding scheme used

Tone: Researcher's report — honest, evidence-led, no overclaiming.
```

### Pro tip

Run this every time you finish 5-15 customer sessions. The synthesis IS the deliverable, not the raw notes. Without it, research dies in the doc folder.

---

## Pro Tips for Product Adoption

- **Start with the PRD prompt.** It anchors the whole team on a shared artifact. Every PM should run this for every new feature.
- **The roadmap prompt is for the senior PM / Director.** Don't have juniors generate roadmaps with AI — they'll skip the strategic reasoning.
- **Always paste real inputs.** PRD-from-nothing produces hallucinated requirements. PRD-from-50-tickets produces gold.
- **Release notes BEFORE release.** Forces value articulation during dev.
- **The research synthesis is the most under-used prompt.** Every customer interview your team does should run through this within 48 hours. Otherwise it dies.

---

© 2026 Midas Tools — www.midastools.co
