# Midas Tools — SaaS Founder AI Kit
# 05: Customer Success & Communication

> AI prompts for support responses, customer communication, and success programs.
> Works with ChatGPT, Claude, Gemini, or any AI tool.

---

## Table of Contents

1. [Set Your Support Context](#set-your-support-context)
2. [Support Ticket Response Templates](#support-ticket-response-templates)
3. [Bug Report Flows](#bug-report-flows)
4. [Feature Request Responses](#feature-request-responses)
5. [NPS Survey & Follow-Up](#nps-survey--follow-up)
6. [Quarterly Business Review Templates](#quarterly-business-review-templates)
7. [Customer Milestone Messages](#customer-milestone-messages)
8. [Escalation & Crisis Communication](#escalation--crisis-communication)

---

## Set Your Support Context

Paste this at the start of every AI session before using any prompt below:

```
You are a customer success specialist for a SaaS company. You understand how to balance empathy, efficiency, and brand voice in customer communication.

Product: [PRODUCT NAME]
What it does: [ONE-SENTENCE DESCRIPTION]
Target user: [PRIMARY PERSONA]
Support channels: [EMAIL / LIVE CHAT / IN-APP / PHONE]
SLA targets: [FIRST RESPONSE TIME — e.g., "under 2 hours for paid, under 24 hours for free"]
Knowledge base URL: [URL]
Status page URL: [URL]
Brand voice: [TONE — e.g., friendly and competent, professional, developer-focused]
Team size: [SUPPORT TEAM SIZE]

All responses should be empathetic, solution-oriented, and on-brand. Never blame the user.
```

---

## Support Ticket Response Templates

### General Inquiry Response

```
Write a support response template for general inquiries about [PRODUCT NAME].

Inquiry type: [HOW-TO QUESTION / PRICING QUESTION / FEATURE QUESTION / INTEGRATION QUESTION]
Typical customer context: [NEW USER / TRIAL / PAYING CUSTOMER / ENTERPRISE]

Write 3 response variations:

Variation 1 — The question has a straightforward answer:
- Acknowledge the question
- Provide the clear answer in 2-3 sentences
- Link to relevant documentation
- Offer further help
- 60-80 words

Variation 2 — The answer requires steps:
- Acknowledge the question
- Provide numbered steps (3-5 steps)
- Include a screenshot/video suggestion at the key step
- Link to the full guide
- Offer to help if they get stuck
- 80-120 words

Variation 3 — You need more information:
- Acknowledge the question warmly
- Explain what you need to help them (be specific: "Could you share your [WORKSPACE NAME / URL / SCREENSHOT]?")
- Set expectations: "Once I have that info, I'll [WHAT YOU'LL DO]"
- 50-70 words

Requirements:
- Always open with the customer's name: "Hi [CUSTOMER NAME],"
- Never start with "I understand your frustration" unless they expressed frustration
- Close with: "[YOUR NAME], [TITLE] at [PRODUCT NAME]"
```

### Billing & Account Issue Response

```
Write support response templates for billing and account issues at [PRODUCT NAME].

Write responses for these scenarios:

1. Charge they didn't expect:
   - Acknowledge with empathy (they might be worried)
   - Explain the likely cause (trial ended, plan upgraded, annual renewal)
   - Offer options: refund, downgrade, explanation
   - 80-120 words

2. Request for refund:
   - Acknowledge the request
   - State your refund policy: [REFUND POLICY]
   - Process the refund or explain next steps
   - If ineligible: Explain why kindly and offer alternatives
   - 80-120 words

3. Upgrade request:
   - Thank them for wanting to upgrade
   - Explain the process: [HOW TO UPGRADE]
   - Highlight what they'll gain on the new plan
   - Offer to apply any applicable discount
   - 60-100 words

4. Downgrade request:
   - Acknowledge without making them feel bad
   - Explain what changes with the downgrade (what they'll lose)
   - Offer to help them get more value from their current plan first
   - Process the downgrade if they confirm
   - 80-120 words

5. Account deletion request:
   - Take it seriously (GDPR/privacy compliance)
   - Explain what happens: data deletion timeline, access removal
   - Offer alternatives: pause, downgrade to free
   - If they confirm: process and confirm with timeline
   - 80-120 words

Requirements:
- Billing responses should always be prompt and transparent
- Never make someone feel bad for asking about money
- If you can give a refund: do it first, explain later (builds massive trust)
```

> **Pro tip:** How you handle billing issues defines your brand more than your marketing. A fast, generous refund creates a customer who comes back and refers others. A stingy refund policy saves $29 and costs $2,900 in lost lifetime value.

### Technical Support Response

```
Write technical support response templates for [PRODUCT NAME].

Write responses for these scenarios:

1. User can't log in:
   - Troubleshooting steps: Check email/password, clear cache, try incognito, check status page
   - Format as numbered list
   - Offer to reset their account if needed
   - 80-120 words

2. Feature isn't working as expected:
   - Acknowledge the issue
   - Ask diagnostic questions: Browser, OS, steps to reproduce, screenshot request
   - Share a workaround if one exists
   - Set expectations for investigation timeline
   - 80-120 words

3. Integration not connecting:
   - Acknowledge the frustration
   - Common fixes: Re-authenticate, check permissions, verify API key
   - Link to integration setup guide: [URL]
   - Offer to look at their specific setup if basic fixes don't work
   - 80-120 words

4. Slow performance:
   - Acknowledge the impact on their work
   - Ask: What's slow specifically? (Whole app, specific feature, loading data?)
   - Share known performance considerations for their use case
   - Escalate to engineering if it's a platform issue
   - 80-120 words

5. Data discrepancy:
   - Take it seriously (data trust is everything in SaaS)
   - Ask for specifics: What they see vs. what they expect, date range, filters applied
   - Check common causes: Time zone, filter settings, sync delay
   - Escalate immediately if it's a real discrepancy
   - 80-120 words

Requirements:
- Technical responses should be precise without being condescending
- Never assume the user's technical level — ask if unclear
- Always include a "If this doesn't resolve it" path
```

---

## Bug Report Flows

### Bug Acknowledgment Response

```
Write a bug acknowledgment response template for [PRODUCT NAME].

Context:
- User reported: [TYPE OF BUG — UI glitch, data issue, crash, broken feature]
- Impact level: [HIGH — blocks their work / MEDIUM — workaround exists / LOW — cosmetic]

Write 3 variations by severity:

High severity (blocks their work):
- Acknowledge urgency immediately
- Confirm you've escalated to engineering
- Provide a workaround if any exists
- Set a follow-up timeline: "I'll update you within [TIMEFRAME]"
- 80-120 words

Medium severity (workaround exists):
- Acknowledge the bug
- Provide the workaround with steps
- Confirm it's been logged for the engineering team
- Set expectations: "We're targeting a fix in [TIMEFRAME]"
- 80-100 words

Low severity (cosmetic / minor):
- Acknowledge the report
- Thank them for the detail
- Confirm it's been logged
- Set expectations: "This will be addressed in an upcoming release"
- 50-80 words

For all variations:
- Ask for any additional details if needed (browser, screenshots, steps to reproduce)
- Never minimize the user's experience of the bug
- Use their name and a warm closing
```

### Bug Fix Notification

```
Write a bug fix notification email for [PRODUCT NAME] users who reported a specific bug.

Context:
- Bug that was fixed: [DESCRIPTION]
- Users affected: [INDIVIDUAL WHO REPORTED / ALL USERS / SPECIFIC SEGMENT]
- Fix details: [WHAT WAS DONE — technical or non-technical depending on audience]
- Additional improvements: [ANY RELATED IMPROVEMENTS MADE WHILE FIXING]

Write 2 versions:

Version 1 — Personal reply to the reporter:
- Thank them for reporting
- Confirm the fix is live
- Explain briefly what was wrong and how it's fixed
- Invite them to verify and report if it's still happening
- 60-100 words

Version 2 — Broader notification (if many users were affected):
- Subject line: 3 options (resolved, fixed, update)
- Acknowledge the issue transparently
- Explain what happened and what was fixed
- Apologize if appropriate (don't over-apologize for minor issues)
- Mention any preventive measures taken
- CTA: "If you're still experiencing issues, contact us at [EMAIL]"
- 100-150 words
```

### Known Issue Communication

```
Write a known issue notification for [PRODUCT NAME].

Issue: [DESCRIPTION OF THE KNOWN ISSUE]
Impact: [WHO IS AFFECTED AND HOW]
Status: [INVESTIGATING / IDENTIFIED / FIX IN PROGRESS / MONITORING]
Workaround: [TEMPORARY WORKAROUND, OR "NONE"]
ETA for fix: [TIMELINE OR "WE'RE WORKING ON IT"]
Status page: [URL]

Write:
1. In-app banner: Headline (under 10 words) + one-sentence body + "View status" link
2. Status page update: 3-5 sentences describing the issue, impact, and current status
3. Email to affected users:
   - Subject line: Direct and informative
   - Body: 100-150 words covering what happened, who's affected, workaround, ETA
   - Tone: Calm, transparent, accountable
4. Follow-up template for when it's resolved:
   - 60-100 words confirming resolution and apologizing for impact
```

> **Why this works:** Proactive communication about known issues dramatically reduces support tickets and builds trust. Users who learn about an issue from YOU (rather than discovering it themselves) are significantly more understanding and patient.

---

## Feature Request Responses

### Feature Request Acknowledgment

```
Write feature request response templates for [PRODUCT NAME].

Write responses for these scenarios:

1. Feature that's on your roadmap:
   - Thank them enthusiastically (they're asking for something you're already building!)
   - Confirm it's planned without committing to a date
   - Ask how they'd use it (helps prioritize)
   - Offer to notify them when it ships
   - 60-100 words

2. Feature you're considering but haven't committed to:
   - Thank them for the suggestion
   - Explain you're evaluating it
   - Ask about their use case to help with prioritization
   - Direct them to your feedback board: [URL, OR "We don't have one"]
   - 60-100 words

3. Feature you won't build:
   - Thank them for the thoughtful suggestion
   - Be honest: Explain why it doesn't fit (focus, technical constraints, niche use case)
   - If possible: Suggest an alternative or workaround
   - If there's an integration that does it: Recommend it
   - Never say "no" dismissively — explain the reasoning
   - 80-120 words

4. Feature that already exists (they didn't know about it):
   - Friendly reaction: "Great news — we actually have this!"
   - Show them exactly where to find it (steps or link)
   - Offer to help them set it up
   - Note: This reveals an onboarding or discoverability issue — flag internally
   - 60-80 words

5. Complex feature request (needs more detail):
   - Thank them for the idea
   - Ask specific follow-up questions to understand the use case
   - "Can you walk me through how you'd use this day-to-day?"
   - "What do you currently do instead?"
   - 60-80 words

Requirements:
- Every feature request response should make the user feel heard
- Log every request even if you won't build it (patterns matter)
- Never promise a ship date unless you're certain
```

### Feature Request Follow-Up (When Shipped)

```
Write a follow-up email to users who requested a feature that's now shipped in [PRODUCT NAME].

Feature: [FEATURE NAME]
What it does: [DESCRIPTION]
Users who requested it: [INDIVIDUAL / MULTIPLE]
How to access it: [WHERE IN THE APP]
Documentation: [GUIDE URL]

Write:
- Subject line: 3 options (you asked, we built, shipped)
- Opening: "You asked for [FEATURE], and we built it."
- Brief description of what's now possible
- Link to the feature and docs
- Ask them to try it and share feedback
- Thank them for helping shape the product
- 80-120 words
- Tone: Genuine excitement about delivering what they asked for
```

> **Pro tip:** Closing the loop on feature requests is one of the most powerful retention moves in SaaS. Users who see their feedback turned into features become advocates. Keep a simple tracker — even a spreadsheet — of who requested what.

---

## NPS Survey & Follow-Up

### NPS Survey Email

```
Write an NPS survey email for [PRODUCT NAME].

Context:
- When to send: [TRIGGER — e.g., "90 days after signup", "after major milestone", "quarterly"]
- Survey tool: [TOOL NAME — Delighted, Wootric, in-house, etc.]
- Current NPS: [SCORE IF KNOWN]

Write:
- Subject line: 3 options (short, personal, direct)
- Body: 50-80 words — keep it minimal, the survey should be the focus
- The one question: "How likely are you to recommend [PRODUCT NAME] to a colleague? (0-10)"
- Follow-up question: "What's the primary reason for your score?"
- From name: [FOUNDER/CEO NAME] at [PRODUCT NAME] (personal)
- Closing: Brief thank you + "Takes 30 seconds"
```

### NPS Follow-Up: Promoters (9-10)

```
Write an NPS follow-up email for [PRODUCT NAME] promoters (score 9-10).

Context:
- These are your happiest customers — treat them accordingly
- Goals: Get a testimonial, ask for a review, or request a referral

Write:
- Subject line: 3 options (gratitude, favor, community)
- Thank them genuinely for the score
- Ask ONE of these (not all at once):
  - Option A: "Would you mind leaving us a review on [G2 / CAPTERRA / PRODUCT HUNT]?" + link
  - Option B: "Could we feature your feedback as a testimonial?" (include how the quote would be attributed)
  - Option C: "Know anyone who'd benefit from [PRODUCT NAME]?" + referral link if you have one
- Make the ask feel like an honor, not a transaction
- 60-100 words

Also write:
- In-app prompt for promoters (one-liner asking for a review)
- LinkedIn or social share template they can copy and use
```

### NPS Follow-Up: Passives (7-8)

```
Write an NPS follow-up email for [PRODUCT NAME] passives (score 7-8).

Context:
- These users are satisfied but not enthusiastic — they're churn risks
- Goal: Understand what would move them to 9-10

Write:
- Subject line: 3 options (curiosity, help, improvement)
- Thank them for the feedback
- Acknowledge: "7-8 tells us we're doing okay but not great. We want to be great for you."
- Ask specifically: "What would it take to make [PRODUCT NAME] a 9 or 10?"
- Offer to hop on a quick call to discuss
- 60-100 words
- Tone: Genuinely curious, not defensive
```

### NPS Follow-Up: Detractors (0-6)

```
Write an NPS follow-up email for [PRODUCT NAME] detractors (score 0-6).

Context:
- These users are unhappy — this is urgent
- Goal: Understand the problem and attempt to resolve it before they churn
- Response should come from: [FOUNDER / VP / SUPPORT LEAD]

Write:
- Subject line: 3 options (personal, direct, concerned)
- From: [SENIOR PERSON'S NAME] (this should feel personal)
- Acknowledge their dissatisfaction without being defensive
- Ask: "I'd love to understand what's not working. Would you be open to a 15-minute call?"
- Offer immediate alternatives: reply to email, or fill out a brief form
- Include a calendar link for booking: [URL]
- 60-100 words
- Tone: Senior leader who personally cares about their experience

Also write:
- Internal alert template: Slack/email notification to the team when a detractor score comes in
- 48-hour follow-up if they don't respond to the first email
```

> **Why this works:** Detractors who receive a personal response from a senior leader within 24 hours convert to promoters at a surprisingly high rate. The key is speed and seniority — automated responses don't work here.

---

## Quarterly Business Review Templates

### QBR Agenda Email

```
Write a QBR (Quarterly Business Review) invitation email for [PRODUCT NAME] enterprise customers.

Context:
- Customer: [COMPANY NAME]
- Account manager: [YOUR NAME]
- Quarter reviewed: [Q1/Q2/Q3/Q4 YEAR]
- Meeting length: [30 / 45 / 60 MINUTES]
- Key topics: Usage metrics, ROI, roadmap preview, expansion opportunities

Write:
- Subject line: 3 options (review, partnership, alignment)
- Body: Invite them to the QBR, explain what you'll cover and what to prepare
- Suggest 2-3 time slots: [OPTIONS]
- Pre-QBR questionnaire: 5 questions to send in advance
  1. What are your team's goals for next quarter?
  2. Which [PRODUCT NAME] features are most valuable to your team?
  3. What's one thing you wish [PRODUCT NAME] did differently?
  4. Are there new team members who need onboarding?
  5. Any upcoming projects where [PRODUCT NAME] could help?
- 120-160 words for the email body
```

### QBR Presentation Outline

```
Write a QBR slide deck outline for [PRODUCT NAME].

Customer: [COMPANY NAME]
Quarter: [Q1/Q2/Q3/Q4 YEAR]
Their plan: [PLAN NAME]
Account size: [SEATS / MRR]
Usage highlights: [KEY METRICS — active users, features used, output generated]
Renewal date: [DATE]

Slide outline:
1. Title slide: "[COMPANY NAME] x [PRODUCT NAME] — Q[X] Review"
2. Agenda slide
3. Usage summary: Key metrics with trends (this quarter vs. last)
4. Value delivered: ROI calculation or impact metrics
5. Feature adoption: What they're using, what they're not (opportunity)
6. Success stories: How their team specifically benefited
7. Product roadmap: 3-5 upcoming features relevant to THEIR use case
8. Recommendations: 2-3 suggestions to get more value
9. Expansion discussion: Additional seats, features, or plans
10. Next steps and action items

For each slide, write:
- Slide title
- 3-5 bullet points of what to include
- Talking points (2-3 sentences of what to SAY while presenting)
```

### QBR Follow-Up Email

```
Write a QBR follow-up email for [PRODUCT NAME].

Context:
- Customer: [COMPANY NAME]
- Key discussion points: [2-3 THINGS DISCUSSED]
- Action items for you: [WHAT YOU COMMITTED TO]
- Action items for them: [WHAT THEY COMMITTED TO]
- Next meeting: [DATE OR "TBD"]

Requirements:
- Subject line: "Q[X] QBR Follow-Up — [COMPANY NAME] x [PRODUCT NAME]"
- Thank them for their time
- Summarize key discussion points in bullets
- List action items with owners and dates
- Confirm next steps
- 120-180 words
```

---

## Customer Milestone Messages

### Account Anniversary

```
Write customer anniversary messages for [PRODUCT NAME].

Write for these milestones:

1. 1 month:
   - Check in on their experience
   - Highlight a feature they might have missed
   - Ask for early feedback
   - 60-80 words

2. 6 months:
   - Celebrate the milestone
   - Share their usage stats for the last 6 months
   - Offer a power-user tip
   - Ask for a review or testimonial
   - 80-100 words

3. 1 year:
   - Genuine celebration of the partnership
   - "Your year in review" — key metrics and highlights
   - If applicable: Offer an annual plan discount or loyalty perk
   - Thank them for being part of the journey
   - 100-150 words

4. 2+ years:
   - Deep appreciation for long-term loyalty
   - Highlight how the product has evolved since they joined
   - Offer VIP access: Beta features, direct line to product team, advisory board invite
   - 100-150 words

Requirements for all:
- Subject line options for each milestone
- Personal tone (from founder or account manager)
- Dynamic metrics if available: usage, value delivered, milestones hit
- A small but meaningful gesture for longer tenures (not coupon-feeling, more recognition)
```

### Customer Achievement Recognition

```
Write a customer achievement email for [PRODUCT NAME] users who hit a significant milestone.

Milestones:
1. [METRIC] reached [THRESHOLD — e.g., "1,000 tasks completed", "100 reports generated"]
2. Team adoption: [ALL SEATS ACTIVE / NEW TEAM MEMBER JOINED]
3. Feature mastery: [USED AN ADVANCED FEATURE FOR THE FIRST TIME]
4. Consistency: [ACTIVE FOR X CONSECUTIVE DAYS/WEEKS]

For each milestone write:
- Subject line (celebration-focused)
- 60-80 word email body
- The specific metric and why it's impressive
- What this unlocks or means for their workflow
- Social share template (if applicable — "Just hit [MILESTONE] on @[PRODUCT]!")
- CTA: Next goal to work toward
```

---

## Escalation & Crisis Communication

### Outage Communication Template

```
Write outage communication templates for [PRODUCT NAME].

Write for each stage:

1. Initial outage notification:
   - Status page: 2-3 sentences confirming the issue, what's affected, investigation status
   - Email (if major): 80-100 words, transparent, honest, no ETA if uncertain
   - In-app banner: One sentence + link to status page
   - Twitter/X: 280-character outage acknowledgment

2. Investigation update (30 min later):
   - Status page: Update with what's been identified, who's working on it
   - 50-80 words

3. Fix in progress:
   - Status page: Confirm root cause identified, fix being deployed
   - If applicable: Partial restoration update
   - 50-80 words

4. Resolved:
   - Status page: Full resolution confirmation, monitoring note
   - Email: 100-150 words — what happened, what you did, what you're doing to prevent recurrence
   - Twitter/X: Resolution announcement

5. Post-mortem (within 48 hours):
   - Blog post outline: Timeline, root cause, impact, remediation, prevention
   - Email to affected customers: 200-300 words with link to full post-mortem

Requirements:
- Never speculate on ETAs you can't keep
- Be transparent about impact and root cause
- Apologize proportionally (don't over-apologize for 2-minute blips)
- Credit refund policy for extended outages: [YOUR POLICY]
```

> **Why this works:** How you handle outages defines trust more than uptime. Companies that communicate transparently during incidents — even bad ones — earn MORE trust than companies that never had the incident at all. The post-mortem is mandatory for any outage over 30 minutes.

---

*Midas Tools — SaaS Founder AI Kit v1.0*
*File 05 of 06 — Customer Success & Communication*
