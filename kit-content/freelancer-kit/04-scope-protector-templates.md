# Midas Tools — Freelancer AI Kit
# 04: Scope Protector Templates

Scope creep is the number one profit killer for freelancers. These AI prompts help you detect it early, respond diplomatically, and protect your boundaries without damaging client relationships.

---

## Variables Reference

```
[YOUR NAME] — Your name or business name
[YOUR COMPANY] — Your business name
[CLIENT NAME] — Client's first name
[CLIENT COMPANY] — Client's business name
[PROJECT NAME] — Name of the project
[ORIGINAL SCOPE] — Paste the original scope of work or key deliverables
[NEW REQUEST] — What the client is now asking for
[CALL NOTES] — Notes from a recent call or message thread
[HOURLY RATE] — Your hourly rate for additional work
[PROJECT RATE] — The agreed project fee
[CONTRACT DATE] — Date the contract/scope was signed
[CHANGE FEE] — Estimated cost of the additional work
[TIMELINE IMPACT] — How the change affects the delivery date
```

---

## Prompt 1: Scope Creep Detection (AI Analyzer)

### Prompt

```
You are a freelance project management assistant. Analyze the following call notes or client messages and determine if any of the requests fall outside the agreed scope of work.

ORIGINAL SCOPE OF WORK:
[ORIGINAL SCOPE]

RECENT CLIENT COMMUNICATION:
[CALL NOTES]

For each request or action item mentioned in the communication:

1. **Classify it** as one of:
   - IN SCOPE — Clearly covered by the original scope
   - GRAY AREA — Could be interpreted as in scope or out of scope
   - OUT OF SCOPE — Not included in the original agreement

2. **Explain why** with a one-line reference to the relevant scope section (or lack thereof)

3. **Recommend an action**:
   - In Scope: Proceed as planned
   - Gray Area: Clarify with the client before proceeding, suggest specific language
   - Out of Scope: Trigger the change request process

Present your analysis in a table:
| Request | Classification | Reason | Recommended Action |

After the table, write a brief summary:
- Total in-scope items: X
- Gray area items: X (flag these for discussion)
- Out-of-scope items: X (these need a change request)
- Estimated additional effort for out-of-scope items (rough hours or range)

IMPORTANT: Be conservative. When in doubt, classify as "Gray Area" rather than "In Scope." It's better to clarify than to give away free work.
```

### How to Use
Run this after every client call or when you receive a request that feels like it might be scope creep. It helps you separate your instinct from the facts before responding to the client.

---

## Prompt 2: "This Is Out of Scope" — Diplomatic Response (Email)

### Prompt

```
Write a diplomatic email responding to a client request that falls outside the agreed scope of work.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Project: [PROJECT NAME]
- Their request: [NEW REQUEST]
- Why it's out of scope: [Brief explanation — e.g., "Original scope covers homepage design only; they're now requesting 3 additional landing pages"]
- Estimated additional cost: [CHANGE FEE]
- Timeline impact: [TIMELINE IMPACT]

Write an email that:
- Opens by acknowledging the request positively ("Great idea" / "I can see why you'd want that")
- Explains clearly but briefly that this falls outside the current scope
- References the original agreement without sounding legalistic
- Presents the additional cost and timeline impact transparently
- Offers to proceed via a formal change request if they'd like
- Provides an alternative if possible (e.g., "We could do a simplified version within the current scope by...")
- Closes with a collaborative tone — you're on their team, not against them

TONE: Warm but clear. The goal is to say "yes, and here's what it costs" rather than "no." Never apologize for having boundaries.

LENGTH: Under 200 words.

Do NOT:
- Use the phrase "scope creep"
- Sound frustrated or accusatory
- Imply the client is trying to take advantage of you
- Be vague about the cost or timeline impact
```

### How to Use
This is your go-to response for clear out-of-scope requests. Customize the tone based on your relationship with the client. The key: always respond with a price, not a no.

---

## Prompt 3: "This Is Out of Scope" — Verbal Script (For Calls)

### Prompt

```
Generate a verbal script for diplomatically addressing an out-of-scope request during a client call.

CONTEXT:
- Client: [CLIENT NAME]
- Project: [PROJECT NAME]
- The request: [NEW REQUEST]
- Why it's out of scope: [Brief explanation]
- Estimated cost: [CHANGE FEE]

Generate a natural-sounding script with these beats:

1. **Acknowledge** (1-2 sentences)
   "That's a really good idea, and I can see how it would add value to the project."

2. **Inform** (2-3 sentences)
   Explain that it falls outside the current scope. Be specific. Reference the original agreement casually, not formally.

3. **Quantify** (1-2 sentences)
   State the estimated cost and timeline impact.

4. **Offer Options** (2-3 sentences)
   - Option A: Full implementation via change request
   - Option B: A simpler version that fits within current scope
   - Option C: Add it to a "Phase 2" list for after the current project

5. **Close** (1 sentence)
   Ask which direction they'd like to go, or offer to send a formal change request for review.

Also generate 3 "if they push back" responses:
- If they say "I thought this was included"
- If they say "Can't you just add it? It's small"
- If they say "We don't have budget for this"

Each pushback response should be 2-3 sentences: empathetic, firm, and solution-oriented.
```

### How to Use
Review this before your call if you know the conversation is coming. The key is staying calm and presenting options, not defending yourself.

---

## Prompt 4: Change Request Generator

### Prompt

```
Generate a formal Change Request document for a freelance project.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Project: [PROJECT NAME]
- Original contract date: [CONTRACT DATE]
- Change request number: [e.g., "CR-001"]
- Date of request: [Today's date]

THE CHANGE:
- Description of requested change: [NEW REQUEST]
- Reason for the change: [Why the client wants this]
- Requested by: [CLIENT NAME]

Generate a Change Request document with these sections:

**1. Change Request Summary**
- CR Number, date, project name, requested by
- Brief description (1-2 sentences)

**2. Description of Change**
- Detailed description of what's being added, modified, or removed
- How it differs from the original scope (reference specific sections)

**3. Impact Assessment**
- Cost impact: [CHANGE FEE] — show calculation if hourly
- Timeline impact: [TIMELINE IMPACT] — new delivery date if applicable
- Risk assessment: Any risks introduced by this change
- Impact on other deliverables: Will this change affect work already completed or in progress?

**4. Options**
- Option A: Implement the full change as described (cost + timeline)
- Option B: Implement a reduced version (lower cost + timeline)
- Option C: Defer to Phase 2 / future engagement

**5. Approval**
- Signature lines for both client and freelancer
- Date fields
- Note: "Work on this change will begin only after this document is signed and returned."
- Note: "Approved changes become part of the project scope and are subject to the same terms as the original agreement."

FORMAT: Professional document format with clear headers. Ready to be pasted into a Google Doc or PDF and sent for signature.
```

### How to Use
Send this for any change that affects the budget or timeline by more than 10%. For smaller changes, a simple email confirmation may suffice, but always get it in writing.

---

## Prompt 5: Contract Addendum Generator

### Prompt

```
Generate a contract addendum for an approved scope change on a freelance project.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Original contract date: [CONTRACT DATE]
- Project: [PROJECT NAME]
- Addendum number: [e.g., "Addendum A"]

THE APPROVED CHANGE:
- Description: [NEW REQUEST]
- Additional fee: [CHANGE FEE]
- New delivery date: [Updated date, or "Unchanged"]
- Payment terms for the addition: [e.g., "50% upfront, 50% on delivery"]

Generate a contract addendum that:
- References the original contract by date and project name
- States that all other terms of the original contract remain in effect
- Clearly describes the additional scope
- States the additional fee and payment terms
- States the revised timeline (if applicable)
- Includes signature and date lines for both parties
- Includes an "Effective Date" field

TONE: Professional and legal-adjacent. This doesn't need to be written by a lawyer, but it should be clear enough to hold up in a dispute.

LENGTH: Under 200 words for the addendum body. Keep it tight.
```

### How to Use
Use this after a Change Request is approved. It formally modifies the original agreement. For projects with multiple changes, number your addenda sequentially.

---

## Prompt 6: Scope Creep Prevention — Pre-Project Checklist

### Prompt

```
Generate a pre-project checklist that helps prevent scope creep before it starts.

CONTEXT:
- Project type: [PROJECT TYPE]
- Client industry: [CLIENT INDUSTRY]

Create a checklist of 20-25 items organized into these categories:

**Scope Definition**
- Items to define explicitly before starting
- Common deliverables that clients in [CLIENT INDUSTRY] assume are included
- Questions to ask during discovery to uncover hidden expectations

**Contract Protections**
- Clauses that should be in every freelance contract
- Change request process language
- Revision round limits and definitions
- Out-of-scope work pricing terms

**Communication Protocols**
- How to document decisions
- When to send scope confirmations
- Red flag phrases from clients that signal potential creep

**Boundary Setting**
- What to establish in the kickoff meeting
- How to set revision expectations
- When and how to say "let me check if that's in scope"

FORMAT: Checkbox list (- [ ] Item) grouped by category. Include a brief explanation for any item that isn't self-explanatory.

After the checklist, list the "Top 5 Scope Creep Triggers for [PROJECT TYPE] Projects" — the specific situations where scope most commonly expands, with a one-line prevention tactic for each.
```

### How to Use
Run through this checklist before you start any new project. Fifteen minutes of prevention saves hours of difficult conversations later.

---

## Prompt 7: Boundary-Setting Scripts

### Prompt

```
Generate professional boundary-setting scripts for common freelance situations.

MY NAME: [YOUR NAME]
MY BUSINESS: [YOUR COMPANY]

Generate email and verbal scripts for each of these 7 situations:

1. **Client sends messages outside business hours and expects immediate replies**
   - Boundary to set: Response times and availability

2. **Client bypasses the agreed communication channel** (e.g., texts you instead of using Slack)
   - Boundary to set: Communication channel adherence

3. **Client adds "just one more thing" to every deliverable**
   - Boundary to set: What constitutes a revision vs. new scope

4. **Client wants unlimited revisions**
   - Boundary to set: Revision round limits and additional revision pricing

5. **Client asks you to do work that's a different skillset** (e.g., "Can you also write the blog posts?")
   - Boundary to set: Your role and service boundaries

6. **Client's stakeholders keep changing direction**
   - Boundary to set: Single point of contact and decision-making process

7. **Client expects you to attend every internal meeting**
   - Boundary to set: Meeting commitment and billable time

For each situation:
- **Email version** (under 100 words) — professional, sets the boundary clearly
- **Verbal version** (2-3 sentences) — for saying it on a call naturally
- **Prevention tip** — how to avoid this situation in the first place

TONE: Firm but kind. You're a business partner, not an employee. Boundaries protect the relationship, they don't damage it.
```

### How to Use
Read through all 7 situations before your next project starts. Identify which ones you struggle with most and practice the scripts until they feel natural.

---

## Prompt 8: Scope Change Log

### Prompt

```
Generate a Scope Change Log template for tracking all scope modifications throughout a freelance project.

CONTEXT:
- Project: [PROJECT NAME]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Original scope date: [CONTRACT DATE]
- Original project fee: [PROJECT RATE]

Create a tracking document with:

**Header**
- Project name, client, original scope date, original fee

**Change Log Table**
| # | Date | Description | Requested By | Classification | Cost Impact | Timeline Impact | Status | Approved By | Notes |

**Classification Options:**
- IN SCOPE — No change needed
- MINOR — Under 2 hours, no formal CR needed (but logged)
- MAJOR — Requires formal Change Request
- DEFERRED — Added to Phase 2 list

**Status Options:**
- Requested | Under Review | Approved | In Progress | Completed | Deferred | Declined

**Running Totals Section:**
- Original project fee: $X
- Total approved changes: $X
- Current project value: $X
- Original delivery date: [DATE]
- Current delivery date: [DATE]
- Total scope changes: X
- Approved: X | Deferred: X | Declined: X

**Phase 2 Parking Lot:**
A separate table for deferred items:
| # | Description | Estimated Cost | Priority | Notes |

FORMAT: Clean table format ready for Google Sheets or Notion. Include instructions at the top explaining how to use the log.
```

### How to Use
Start this log on Day 1 of every project. Update it in real-time. Share it with the client monthly or when discussing scope changes. Transparency builds trust and makes creep visible.

---

## Key Principles

### The Scope Creep Mindset Shift
Scope creep isn't clients being malicious — it's usually a sign that:
1. The scope wasn't defined clearly enough
2. The client discovered new needs during the project (normal)
3. The client doesn't understand the effort involved

Your job is to educate and redirect, not to punish.

### The "Yes, And" Framework
Never just say no. Always say "Yes, and here's what it costs." This keeps you collaborative while protecting your business.

### The 10% Rule
If a request adds less than 10% effort and maintains goodwill with a valuable client, consider absorbing it. If it exceeds 10%, it needs a formal change request. Track everything either way.

### Document or It Didn't Happen
If a scope decision isn't in writing, it doesn't exist. Follow up every call with a written summary of what was discussed and agreed.

---

*Midas Tools — Freelancer AI Kit v1.0*
