# Midas Tools — Freelancer AI Kit
# 01: Client Proposal Generator

Generate professional proposals in minutes, not hours. These prompts turn rough call notes into polished documents that win projects.

---

## Variables Reference

Before using any prompt below, have these ready:

```
[YOUR NAME] — Your name or business name
[YOUR TITLE] — Your role (e.g., "Senior Web Developer")
[YOUR COMPANY] — Your business name
[CLIENT NAME] — Client's name
[CLIENT COMPANY] — Client's business name
[CLIENT INDUSTRY] — Their industry (e.g., "health & wellness")
[PROJECT TYPE] — What you're building/delivering
[CALL NOTES] — Raw notes from your discovery call
[BUDGET RANGE] — Client's stated budget or your estimate
[TIMELINE] — Expected duration (e.g., "6 weeks")
[START DATE] — Proposed start date
[DELIVERABLES] — Key outputs you'll produce
[YOUR HOURLY RATE] — Your rate if billing hourly
[YOUR PROJECT RATE] — Your flat rate if billing per project
[YOUR RETAINER RATE] — Monthly retainer amount
```

---

## Prompt 1: Full Proposal from Call Notes

### Prompt

```
You are a senior freelance [YOUR TITLE] writing a project proposal. Using the discovery call notes below, generate a complete, professional proposal.

CALL NOTES:
[CALL NOTES]

PROPOSAL STRUCTURE:
1. Cover section with project title, date, prepared for [CLIENT NAME] at [CLIENT COMPANY], prepared by [YOUR NAME] at [YOUR COMPANY]
2. Executive Summary (2-3 paragraphs summarizing the opportunity and your approach)
3. Understanding of the Problem (show you listened — reference specific pain points from the call)
4. Proposed Solution (your recommended approach, broken into phases if applicable)
5. Scope of Work (detailed list of what's included AND what's excluded)
6. Timeline & Milestones (table format with dates)
7. Investment (pricing with payment schedule)
8. Why [YOUR COMPANY] (3 relevant differentiators)
9. Next Steps (clear call to action)

PROJECT DETAILS:
- Project type: [PROJECT TYPE]
- Budget range: [BUDGET RANGE]
- Timeline: [TIMELINE]
- Proposed start date: [START DATE]
- Key deliverables: [DELIVERABLES]

TONE: Professional but personable. Confident without being arrogant. Show that you understand their business, not just the technical requirements.

FORMAT: Use clean headings, bullet points where appropriate, and a table for the timeline. This should be ready to paste into a Google Doc or PDF.
```

### How to Use
Paste your raw call notes — even messy bullet points work. The AI will structure them into a polished proposal. Review for accuracy, adjust pricing, and send.

---

## Prompt 2: Executive Summary Generator

### Prompt

```
Write an executive summary for a freelance project proposal.

CLIENT: [CLIENT NAME] at [CLIENT COMPANY] ([CLIENT INDUSTRY])
PROJECT: [PROJECT TYPE]
CORE PROBLEM: [Describe the main problem or opportunity in 1-2 sentences]
PROPOSED SOLUTION: [Your approach in 1-2 sentences]
KEY OUTCOME: [What success looks like for the client]
TIMELINE: [TIMELINE]
INVESTMENT: [BUDGET RANGE]

Write 2-3 paragraphs that:
- Open with the client's business challenge (not your services)
- Position the project as a strategic investment, not an expense
- Briefly preview your approach and why it will work
- End with the expected impact on their business
- Reference their industry where relevant

TONE: Executive-level. This section may be the only thing a decision-maker reads. Make every sentence count.
```

### How to Use
This is ideal when you already have the proposal body written but need a compelling opening. Works especially well for larger projects where multiple stakeholders will review the proposal.

---

## Prompt 3: Scope of Work Definition

### Prompt

```
Generate a detailed Scope of Work section for a freelance project proposal.

PROJECT: [PROJECT TYPE]
CLIENT: [CLIENT NAME] at [CLIENT COMPANY]
DELIVERABLES: [DELIVERABLES]
TIMELINE: [TIMELINE]

Create the scope with these sections:

**In Scope — Included in This Engagement:**
List every deliverable and task that IS included. Be specific. Group by phase or category. For each item, include a one-line description of what "done" looks like.

**Out of Scope — Not Included:**
List 5-8 common items that clients in [CLIENT INDUSTRY] might assume are included but are NOT part of this project. Be diplomatic but clear.

**Client Responsibilities:**
List what the client needs to provide or do for the project to succeed (content, access, feedback timelines, approvals, etc.).

**Assumptions:**
List 3-5 assumptions the scope is based on (e.g., "Content will be provided in final form by [DATE]", "Feedback rounds are limited to 2 per deliverable").

**Change Process:**
Write a brief paragraph explaining how scope changes will be handled (written change request, impact assessment, approval before work begins).

FORMAT: Use bullet points and bold headers. This should be unambiguous — if a dispute arises, this section is what both parties will reference.
```

### How to Use
Fill this out carefully. A well-defined scope is your best protection against scope creep. Be explicit about what's NOT included — it prevents uncomfortable conversations later.

---

## Prompt 4: Project Timeline Generator

### Prompt

```
Create a project timeline for a freelance engagement.

PROJECT: [PROJECT TYPE]
START DATE: [START DATE]
TOTAL DURATION: [TIMELINE]
KEY DELIVERABLES: [DELIVERABLES]
CLIENT REVIEW PERIODS: [How many days the client gets for feedback, e.g., "3 business days"]

Generate a timeline table with these columns:
| Phase | Task / Milestone | Start Date | End Date | Owner | Status |

Requirements:
- Break the project into logical phases (Discovery, Design, Development, Testing, Launch, etc. — adapt to [PROJECT TYPE])
- Include client review/approval checkpoints between phases
- Add buffer time (at least 10% of total timeline) for revisions
- Mark key milestones that require client sign-off before proceeding
- Include a final delivery date and a post-launch support period if applicable
- Be realistic — do not compress tasks that need breathing room

After the table, add a "Key Dates" summary listing only the 3-5 most important milestones with dates.

Also add a "Timeline Risks" section listing 3 common factors that could delay the project and how you'll mitigate each one.
```

### How to Use
Adjust the phases to match your actual workflow. Always add more buffer than you think you need — clients rarely deliver feedback on time.

---

## Prompt 5: Pricing Table — Hourly Model

### Prompt

```
Create a professional pricing table for a freelance proposal using an hourly billing model.

PROJECT: [PROJECT TYPE]
HOURLY RATE: [YOUR HOURLY RATE]
ESTIMATED HOURS: [Total estimated hours or range]
DELIVERABLES: [DELIVERABLES]

Generate a pricing table with these columns:
| Task / Deliverable | Estimated Hours | Rate | Subtotal |

Requirements:
- Break down every deliverable into its estimated hours
- Group by project phase if applicable
- Include a line item for project management (typically 10-15% of total hours)
- Include a line item for revisions (typically 2-3 rounds)
- Show subtotals per phase and a grand total
- Add a note explaining how hours overages will be handled
- Include a recommended payment schedule (e.g., 30% upfront, 40% at midpoint, 30% on delivery)

After the table, add a "What's Included" summary and a "Payment Terms" section covering:
- Payment due dates
- Accepted payment methods
- Late payment policy
```

### How to Use
If you prefer not to show hourly breakdowns, use Prompt 6 or 7 instead. Hourly tables work best for ongoing or unpredictable-scope projects.

---

## Prompt 6: Pricing Table — Project-Based Model

### Prompt

```
Create a professional pricing table for a freelance proposal using flat project-based pricing.

PROJECT: [PROJECT TYPE]
PROJECT FEE: [YOUR PROJECT RATE]
DELIVERABLES: [DELIVERABLES]
TIMELINE: [TIMELINE]

Generate a pricing section that:
- States the total project investment clearly
- Breaks it into phases or milestones with the fee allocated per phase
- Provides a payment schedule tied to milestones (not dates)
- Lists exactly what's included for this price
- States the number of revision rounds included
- Explains how additional work beyond scope will be priced
- Includes a "Payment Terms" section

FORMAT:
| Phase / Milestone | Deliverables | Payment Due | Amount |

Present the price confidently. Do not apologize for the cost or use words like "just" or "only." Frame the investment in terms of the value the client will receive.

After the table, add a brief section titled "Your Investment Includes" listing 5-7 bullet points of everything they get.
```

### How to Use
Project-based pricing works best when the scope is well-defined. Make sure your Scope of Work is airtight before committing to a flat fee.

---

## Prompt 7: Pricing Table — Retainer Model

### Prompt

```
Create a professional pricing section for a freelance retainer agreement.

SERVICE: [PROJECT TYPE]
MONTHLY RETAINER: [YOUR RETAINER RATE]
INCLUDED HOURS/DELIVERABLES: [What's included per month]
MINIMUM TERM: [e.g., "3 months"]
CLIENT: [CLIENT NAME] at [CLIENT COMPANY]

Generate a retainer proposal section that includes:

1. **Monthly Investment**: State the retainer amount clearly
2. **What's Included Each Month**: Bullet list of deliverables or hours
3. **How It Works**: Explain the retainer model — reserved capacity, priority access, rollover policy (if any)
4. **Response Times**: Guaranteed response/turnaround times for retainer clients
5. **Overage Policy**: What happens if they need more than the included amount
6. **Term & Renewal**: Minimum commitment, renewal process, cancellation terms
7. **Payment Terms**: When payment is due, accepted methods

After the main section, add a comparison table:
| Feature | Ad Hoc | Retainer |
Showing 3-4 advantages of the retainer model (priority access, lower effective rate, consistency, etc.)

TONE: Position the retainer as the smart choice for ongoing needs. Emphasize the relationship and consistency benefits.
```

### How to Use
Retainers are the best revenue model for freelancers — predictable income, deeper client relationships, and less time selling. Use this when a client has ongoing needs.

---

## Prompt 8: Proposal Follow-Up Email

### Prompt

```
Write a follow-up email for a freelance proposal that was sent [NUMBER] days ago with no response.

MY NAME: [YOUR NAME]
CLIENT NAME: [CLIENT NAME]
PROJECT: [PROJECT TYPE]
PROPOSAL SENT DATE: [Date you sent the proposal]
ONE KEY BENEFIT: [The single most compelling benefit of the project for this client]

Write a short email (under 150 words) that:
- Acknowledges they're busy (without being passive-aggressive)
- References one specific thing from your conversation that excited them
- Restates the key benefit in one sentence
- Offers to hop on a quick call to answer any questions
- Includes a soft deadline or reason for timely action (without false urgency)
- Ends with a clear, low-friction call to action

Do NOT:
- Ask "Did you get my proposal?"
- Sound desperate or needy
- Restate the entire proposal
- Use more than 2 paragraphs plus a sign-off
```

### How to Use
Send this 3-5 business days after your proposal. If no response after the follow-up, wait another week before a final check-in. Three touchpoints maximum — then move on.

---

## Pro Tips

### Win Rates
- Proposals sent within 24 hours of a discovery call have 2-3x higher close rates.
- Including a timeline and clear next steps increases conversions by 30%.
- Addressing the client's problem before your solution builds trust.

### Pricing Psychology
- Always present three options when possible (Basic, Standard, Premium).
- Put your preferred option in the middle — clients gravitate toward it.
- Show value before price. Never lead with the number.

### Follow-Up Cadence
- Day 0: Send proposal
- Day 3-5: Follow-up email (Prompt 8)
- Day 10-12: Brief check-in
- Day 20+: Final "closing the loop" message

---

*Midas Tools — Freelancer AI Kit v1.0*
