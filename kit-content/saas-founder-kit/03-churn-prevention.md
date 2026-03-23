# Midas Tools — SaaS Founder AI Kit
# 03: Churn Prevention

> AI prompts to reduce churn, re-engage inactive users, and win back cancelled customers.
> Works with ChatGPT, Claude, Gemini, or any AI tool.

---

## Table of Contents

1. [Set Your Retention Context](#set-your-retention-context)
2. [Cancellation Survey & Save Flows](#cancellation-survey--save-flows)
3. [Re-Engagement Email Sequences](#re-engagement-email-sequences)
4. [Usage Decline Alert Emails](#usage-decline-alert-emails)
5. [Annual Plan Upgrade Pitch](#annual-plan-upgrade-pitch)
6. [Feature Value Reminders](#feature-value-reminders)
7. [Win-Back Campaigns (30/60/90 Day)](#win-back-campaigns)
8. [Churn Analysis Prompts](#churn-analysis-prompts)

---

## Set Your Retention Context

Paste this at the start of every AI session before using any prompt below:

```
You are a SaaS retention and churn prevention specialist. You understand user behavior patterns, cancellation psychology, and win-back strategies.

Product: [PRODUCT NAME]
What it does: [ONE-SENTENCE DESCRIPTION]
Target user: [PRIMARY PERSONA]
Pricing: [PLAN NAMES AND PRICES]
Current monthly churn rate: [PERCENTAGE OR "UNKNOWN"]
Top cancellation reasons: [LIST 3-5 IF KNOWN, OR "NOT YET TRACKED"]
Average customer lifetime: [MONTHS OR "UNKNOWN"]
Key value metric: [WHAT SUCCESS LOOKS LIKE FOR USERS — e.g., "hours saved per week", "revenue generated"]
Brand voice: [TONE]

All copy should balance empathy with confidence. We want to retain customers without being desperate or manipulative.
```

---

## Cancellation Survey & Save Flows

### Cancellation Reason Survey

```
Write a cancellation survey for [PRODUCT NAME] shown when a user clicks "Cancel Subscription."

Requirements:
- Headline: Empathetic, not guilt-tripping (e.g., "We're sorry to see you go" — write 3 options)
- Subheadline: One sentence explaining their feedback helps improve the product
- Multiple choice question: "What's the main reason you're cancelling?"

Provide these options (customize as needed):
1. Too expensive
2. Not using it enough
3. Missing features I need
4. Switching to a competitor
5. Just needed it for a short project
6. Too complicated / hard to use
7. Poor customer support experience
8. My needs have changed
9. Other: [free text field]

For each reason, write:
- A follow-up question specific to that reason (shown after selection)
- A targeted save offer (see next prompt for full save flows)

Also write:
- Final confirmation copy: What happens when they cancel (data retention, access until end of billing period)
- Post-cancellation confirmation email copy
```

> **Why this works:** Most users who click "cancel" haven't made a final decision — they're signaling dissatisfaction. A well-designed cancellation flow recovers 10-30% of cancellations by addressing the real objection in real time.

### Save Flow: Too Expensive

```
Write a cancellation save flow for users who selected "Too expensive" as their reason for cancelling [PRODUCT NAME].

Context:
- Current plan: [PLAN NAME AND PRICE]
- Downgrade option: [CHEAPER PLAN NAME AND PRICE, OR "NONE"]
- Discount offer: [PERCENTAGE OFF FOR X MONTHS, OR "NONE"]
- Annual plan savings: [ANNUAL PRICE VS MONTHLY]

Write the save screen copy:
1. Empathetic headline acknowledging budget concerns (not guilt)
2. Body text (2-3 sentences) that reframes value
3. Option A: Downgrade to a cheaper plan (if available) — describe what they keep
4. Option B: Switch to annual billing — show the monthly savings
5. Option C: Apply a temporary discount — "[X]% off for the next [Y] months"
6. Option D: Pause subscription for [1 MONTH / 2 MONTHS] — "Take a break, come back when ready"
7. Final option: "Continue cancellation" (never hide this)

Requirements:
- Never make them feel bad about budget concerns
- Frame each option as a way to keep getting value at a price that works
- Make "Continue cancellation" visible but not prominent
```

### Save Flow: Not Using It Enough

```
Write a cancellation save flow for users who selected "Not using it enough" as their reason for cancelling [PRODUCT NAME].

Context:
- Their usage data: [DESCRIBE WHAT YOU CAN SHOW — e.g., "last login date", "features used"]
- Quick-win feature: [A FEATURE THAT DELIVERS VALUE IN MINUTES]
- Onboarding resource: [LINK TO GETTING STARTED GUIDE OR VIDEO]
- Pause option: [YES/NO — CAN THEY PAUSE INSTEAD?]

Write the save screen copy:
1. Headline that validates their experience (not "but you should use it more!")
2. Body text: "We might not have shown you the best way to use [PRODUCT NAME]"
3. Option A: "Let us set you up for success" — link to a quick-start guide or onboarding call
4. Option B: "Try this 5-minute workflow" — link to the quick-win feature
5. Option C: Pause subscription — "Take a break and come back when you need us"
6. Final option: Continue cancellation

Requirements:
- Take responsibility for the engagement gap — don't blame the user
- Position the save as genuinely helping them get value, not just retaining revenue
- If they genuinely don't need the product, let them go gracefully
```

### Save Flow: Missing Features

```
Write a cancellation save flow for users who selected "Missing features I need" as their reason for cancelling [PRODUCT NAME].

Context:
- Upcoming features on roadmap: [LIST 2-3 FEATURES COMING SOON]
- Feature request channel: [WHERE TO SUBMIT REQUESTS]
- Workaround for common requests: [ANY EXISTING WAYS TO SOLVE THEIR NEED]

Write the save screen copy:
1. Headline: Acknowledge the gap genuinely
2. Body: Ask specifically what feature they need (free text input)
3. Show roadmap highlights: "Here's what's coming in the next [TIMEFRAME]"
4. Option A: "Stay and get early access to new features"
5. Option B: "Get a personal walkthrough — we might have a workaround" (book a call)
6. Option C: Pause until [FEATURE] launches
7. Final option: Continue cancellation

Include a follow-up email for users who submit a feature request and still cancel:
- Acknowledge their request
- Commit to notifying them when the feature ships
- Leave the door open for return
- 80-120 words
```

### Save Flow: Switching to Competitor

```
Write a cancellation save flow for users who selected "Switching to a competitor" as their reason for cancelling [PRODUCT NAME].

Context:
- Common competitors: [LIST 2-3 COMPETITORS]
- Key differentiators vs. competitors: [WHAT YOU DO BETTER]
- Data export: [HOW EASY IS IT TO EXPORT/MIGRATE]

Write the save screen copy:
1. Headline: Respectful, no competitor bashing
2. Body: Ask which competitor they're switching to (dropdown with competitors + "Other")
3. For each competitor, show a brief comparison point (one sentence each):
   - [COMPETITOR 1]: "Unlike [COMPETITOR], [PRODUCT NAME] offers [UNIQUE FEATURE]"
   - [COMPETITOR 2]: "Unlike [COMPETITOR], [PRODUCT NAME] offers [UNIQUE FEATURE]"
4. Option A: "Talk to our team before you switch" — book a call to discuss needs
5. Option B: "Try [SPECIFIC FEATURE] first — many users who planned to switch stayed after discovering it"
6. Final option: Continue cancellation + easy data export link

Requirements:
- Never trash competitors — it looks desperate
- Focus on your unique value, not their weaknesses
- Make data export easy and prominent — builds trust even if they leave
```

> **Pro tip:** Making data export easy seems counterintuitive, but it actually reduces churn. Users who feel trapped eventually leave AND tell others about the bad experience. Users who feel free to leave but choose to stay become advocates.

### Post-Cancellation Confirmation Email

```
Write a post-cancellation confirmation email for [PRODUCT NAME].

Context:
- When access ends: [END OF CURRENT BILLING PERIOD / IMMEDIATELY]
- Data retention: [HOW LONG DATA IS KEPT — e.g., "90 days"]
- How to reactivate: [PROCESS]
- Feedback survey link: [URL, IF NOT ALREADY COMPLETED]

Requirements:
- Subject line: 3 options (confirmation, farewell, open door)
- Confirm the cancellation clearly (date, what happens to their account)
- Thank them genuinely for being a customer
- Remind them their data is safe for [X] days
- Keep the door open: "You can reactivate anytime at [URL]"
- Optional: Ask if they'd share brief feedback
- No guilt, no desperate offers, no "are you sure?"
- Tone: A classy farewell that makes them feel good about the experience
- 100-150 words
```

---

## Re-Engagement Email Sequences

### Inactivity Warning (3 Days Inactive)

```
Write an email for [PRODUCT NAME] users who haven't logged in for 3 days.

Context:
- Last action they took: [IF TRACKABLE — e.g., "edited a project", "viewed their dashboard"]
- Quick action they could take: [SOMETHING VALUABLE THAT TAKES 2 MINUTES]
- Direct link to their last workflow: [URL]

Requirements:
- Subject line: 3 options (gentle, helpful, curiosity)
- Do NOT mention their inactivity — no "We miss you!" or "Haven't seen you in a while"
- Instead, provide a reason to come back: a tip, update, or suggestion
- Frame it as helpful, not needy
- CTA: Link to a specific action, not just "log in"
- 60-100 words
- This should feel like a helpful nudge, not surveillance
```

### Inactivity Follow-Up (7 Days Inactive)

```
Write an email for [PRODUCT NAME] users who haven't logged in for 7 days.

Context:
- A new feature or update to share: [WHAT'S NEW]
- A relevant use case or tip: [SOMETHING THEY MIGHT NOT HAVE TRIED]
- Their usage before going inactive: [WERE THEY ACTIVE OR BARELY STARTED?]

Requirements:
- Subject line: 3 options (what's new, quick tip, value reminder)
- Lead with value: share the new feature or a power-user tip
- Subtly remind them of what they were working on (if possible)
- Include a specific, low-effort action they can take right now
- CTA: Direct link to the action
- 80-120 words
- Do NOT say "We noticed you haven't logged in" — it's creepy and counterproductive
```

> **Why this works:** Direct "we miss you" emails have declining effectiveness because every SaaS sends them. Value-first re-engagement (tips, updates, relevant content) gives users a genuine reason to return instead of guilt-tripping them back.

### Last Chance Re-Engagement (14 Days Inactive)

```
Write a re-engagement email for [PRODUCT NAME] users who haven't logged in for 14 days.

Context:
- Their account status: [TRIAL / PAID / FREE PLAN]
- If trial: Days remaining: [X DAYS LEFT]
- If paid: What they're paying for but not using: [PLAN AND PRICE]
- Help offer: [PERSONAL ONBOARDING CALL, SETUP ASSISTANCE, ETC.]

Requirements:
- Subject line: 3 options (helpful, direct, last-resort)
- Be more direct at this stage — it's okay to acknowledge they haven't been active
- Frame it from their perspective: "You're paying for [PLAN] but might not be getting full value"
- Offer concrete help: "Reply and I'll personally help you get set up"
- Include a low-commitment action: "Even 5 minutes will show you [SPECIFIC VALUE]"
- CTA: Reply for help OR link to quick-start
- 100-150 words
```

### Engagement Recovery for Teams

```
Write a re-engagement email for [PRODUCT NAME] team admins whose team usage has dropped.

Context:
- Team size: [NUMBER OF SEATS]
- Active users in the last 30 days: [NUMBER]
- Key team feature they should use: [FEATURE]
- Team training resource: [URL]

Requirements:
- Subject line: 3 options (team-focused, ROI-focused, helpful)
- Address the admin/decision-maker directly
- Frame the issue as ROI: "Your team has [X] seats but only [Y] are active"
- Don't blame the admin — offer to help drive adoption
- Suggest a team training session or shared resource
- Include 3 quick tips for driving team adoption
- CTA: Book a team training or share a getting-started guide with the team
- 120-180 words
```

---

## Usage Decline Alert Emails

### Usage Drop Alert (50% Decline)

```
Write an email for [PRODUCT NAME] users whose usage dropped by 50% or more in the last week.

Context:
- Usage metric that dropped: [WHAT DECLINED — e.g., "logins", "records processed", "tasks completed"]
- Their peak usage: [PREVIOUS LEVEL]
- Current usage: [CURRENT LEVEL]
- Possible reasons: [SEASONAL, COMMON AT THIS STAGE, ETC.]

Requirements:
- Subject line: 3 options (helpful, proactive, check-in)
- Do NOT start with "Your usage has dropped" — that's creepy
- Instead, share a relevant tip or feature that might reignite engagement
- Include a "quick win" they can do right now
- Optionally offer help: "If something's not working as expected, reply and we'll fix it"
- CTA: A specific action that delivers value
- 80-120 words
```

### Feature Engagement Drop

```
Write an email for [PRODUCT NAME] users who stopped using a specific feature they previously used regularly.

Context:
- Feature they stopped using: [FEATURE NAME]
- How they were using it: [THEIR TYPICAL WORKFLOW]
- Alternative approach or update to the feature: [ANY IMPROVEMENTS OR NEW CAPABILITIES]
- Time since last use: [WEEKS/DAYS]

Requirements:
- Subject line: 3 options (tip, update, quick win)
- Share a new capability or workflow for the feature (give them a reason to come back)
- Include a use case example relevant to their role
- Frame as "here's something you might find useful" not "you stopped using X"
- CTA: Link directly to the feature
- 80-120 words
```

---

## Annual Plan Upgrade Pitch

### Monthly-to-Annual Conversion Email

```
Write an email encouraging [PRODUCT NAME] monthly subscribers to switch to annual billing.

Context:
- Monthly price: [PRICE/MO]
- Annual price: [PRICE/MO WHEN BILLED ANNUALLY]
- Annual savings: [TOTAL DOLLAR SAVINGS PER YEAR]
- Annual-only perks: [LIST ANY, OR "NONE"]
- Months they've been a customer: [X MONTHS]

Requirements:
- Subject line: 3 options (savings, smart move, value)
- Lead with the math: "You've spent $[TOTAL PAID SO FAR] over [X] months. On annual, that would've been $[ANNUAL COST]."
- Frame it as rewarding their loyalty, not a sales pitch
- If annual-only perks exist: Highlight them prominently
- Address commitment fear: "You can [CANCEL POLICY FOR ANNUAL PLANS]"
- Include a simple comparison:
  Monthly: [PRICE/MO] x 12 = [YEARLY TOTAL]
  Annual: [ANNUAL PRICE/MO] x 12 = [YEARLY TOTAL] (Save $[SAVINGS])
- CTA: Switch to annual
- 120-180 words
```

> **Pro tip:** The best time to pitch annual is after a usage milestone or positive moment — not during a random Tuesday email blast. Pair this email with a milestone trigger for 2-3x higher conversion.

### Annual Plan Renewal Reminder

```
Write an annual plan renewal reminder email for [PRODUCT NAME].

Context:
- Renewal date: [DATE]
- Days until renewal: [X DAYS]
- Plan price: [ANNUAL PRICE]
- What they used this year: [KEY METRICS — projects, team members, etc.]
- New features added since their last renewal: [LIST 2-3]

Requirements:
- Subject line: 3 options (renewal, value recap, continued partnership)
- Lead with their usage metrics from the past year — show the value they received
- Highlight new features they gained during their subscription
- Confirm the renewal details: date, amount, what's included
- Offer to discuss their plan if needs have changed
- CTA: "Questions about your renewal? Reply anytime"
- 120-160 words
- Tone: Transparent and confident in the value delivered
```

---

## Feature Value Reminders

### Weekly Value Digest

```
Write a weekly value digest email template for [PRODUCT NAME].

Context:
- This is a weekly automated email showing users their activity and value
- Dynamic metrics to include:
  - [METRIC 1 — e.g., "Tasks completed this week: [X]"]
  - [METRIC 2 — e.g., "Time saved: [X] hours"]
  - [METRIC 3 — e.g., "Team collaboration: [X] comments"]
- Feature tip of the week: [ROTATING FEATURE HIGHLIGHT]
- Link to their dashboard: [URL]

Requirements:
- Subject line: Include a dynamic metric (e.g., "You completed [X] tasks this week")
- Clean, scannable layout with metrics prominently displayed
- One "tip of the week" — a feature they might not know about
- One "try this week" — a suggested action for the coming week
- Keep total copy under 100 words (let the data speak)
- CTA: "View your full dashboard"
```

### ROI Calculator Email

```
Write an ROI email for [PRODUCT NAME] showing a user the value they've received.

Context:
- Their usage metric: [WHAT TO MEASURE — e.g., "records processed", "hours saved", "campaigns sent"]
- Value per unit: [WHAT EACH UNIT IS WORTH — e.g., "$50 per hour saved", "$5 per lead generated"]
- Their plan cost: [MONTHLY PRICE]
- Calculate: Total value generated vs. plan cost

Requirements:
- Subject line: 3 options (ROI, value, investment)
- Show the math clearly:
  "This month, you [ACTION] [X] [UNITS].
  At [VALUE] per [UNIT], that's $[TOTAL VALUE] in value.
  Your [PLAN NAME] plan costs $[PRICE]/month.
  That's a [X]x return on your investment."
- Make the ROI feel tangible and real
- If ROI is low: Suggest features that would increase it
- CTA: "See your full analytics" or "Unlock more value with [FEATURE]"
- 100-150 words
```

### Underused Feature Spotlight

```
Write a feature spotlight email for [PRODUCT NAME] users who are paying for but not using [FEATURE NAME].

Context:
- Feature: [FEATURE NAME]
- Their plan includes it: [YES — CONFIRM]
- How other users use it: [COMMON USE CASE]
- Quick setup: [HOW TO START USING IT — 2-3 STEPS]
- Time to value: [HOW QUICKLY THEY'LL SEE RESULTS]

Requirements:
- Subject line: 3 options (unlock, included, hidden gem)
- Frame as: "Your plan includes [FEATURE] but you haven't tried it yet — here's what you're missing"
- Show a specific example of how a similar user benefited
- 3-step quick-start guide
- CTA: Link directly to the feature
- 100-150 words
```

---

## Win-Back Campaigns

### 30-Day Win-Back Email

```
Write a 30-day win-back email for users who cancelled [PRODUCT NAME] one month ago.

Context:
- What's new since they left: [1-2 NEW FEATURES OR IMPROVEMENTS]
- Win-back offer: [DISCOUNT, FREE MONTH, EXTENDED TRIAL, OR "NONE"]
- Reactivation link: [URL]
- Their previous plan: [PLAN NAME]

Requirements:
- Subject line: 3 options (what's new, update, welcome back)
- Don't lead with "We miss you" — lead with what's changed
- Share 1-2 meaningful improvements (especially if they address common cancellation reasons)
- If there's a win-back offer: Present it as a "welcome back" incentive
- Make reactivation frictionless: One-click link to restore their account
- 100-150 words
- Tone: Confident and forward-looking, not desperate
```

### 60-Day Win-Back Email

```
Write a 60-day win-back email for users who cancelled [PRODUCT NAME] two months ago.

Context:
- Major updates since they left: [LIST 2-3 SIGNIFICANT CHANGES]
- A customer success story from their industry or role: [BRIEF STORY OR "Generate one for [PERSONA]"]
- Win-back offer: [OFFER, IF DIFFERENT FROM 30-DAY]
- Reactivation link: [URL]

Requirements:
- Subject line: 3 options (transformation, product update, invitation)
- Open with something that's genuinely different about the product now
- Include a brief customer success anecdote (2-3 sentences)
- Frame the return as joining something that's evolved, not crawling back
- If they cancelled for a specific reason (from survey data): Reference the improvement
- CTA: "See what's new" or "Reactivate your account"
- 120-180 words
```

### 90-Day Win-Back Email (Last Attempt)

```
Write a 90-day win-back email for users who cancelled [PRODUCT NAME] three months ago.

Context:
- This is the final win-back attempt
- Most compelling change since they left: [THE SINGLE BIGGEST IMPROVEMENT]
- Final offer: [BEST WIN-BACK OFFER — this is last chance, make it strong]
- Data deletion warning: [IF APPLICABLE — "Your data will be deleted on [DATE]"]
- Reactivation link: [URL]

Requirements:
- Subject line: 3 options (final, last chance, closing the loop)
- Be direct: This is the last time you'll reach out about reactivation
- Focus on ONE compelling change — not a feature list
- If data deletion applies: Mention it factually (not as a threat)
- Present the final offer
- Graceful close: "If [PRODUCT NAME] isn't right for you, no worries. We appreciate the time we had."
- Optionally: Ask if there's another product they'd recommend to others (shows you genuinely care)
- CTA: Reactivate or "No thanks, unsubscribe"
- 120-160 words
```

> **Why this works:** The 90-day email works because it combines scarcity (data deletion, last contact), a strong offer, and graceful respect. Users who re-engage at 90 days often become long-term customers because they've compared alternatives and come back by choice.

### Win-Back Survey

```
Write a brief survey email for users who cancelled [PRODUCT NAME] but haven't responded to win-back emails.

Context:
- Goal: Understand why they left and what would bring them back
- Survey format: [3-5 QUICK QUESTIONS]
- Incentive: [GIFT CARD, EXTENDED FREE ACCESS, OR "NONE"]

Requirements:
- Subject line: 3 options (feedback, quick question, help us improve)
- Keep it short: "3 quick questions, takes 60 seconds"
- Questions:
  1. What are you using instead of [PRODUCT NAME]? (Multiple choice + other)
  2. What's the #1 thing that would bring you back? (Free text)
  3. Would you recommend [PRODUCT NAME] to others? (1-10 scale)
- If there's an incentive: Mention it in the subject line
- CTA: "Take the 60-second survey"
- 60-100 words
- Tone: Genuinely curious, not manipulative
```

---

## Churn Analysis Prompts

### Churn Cohort Analysis

```
Help me analyze churn patterns for [PRODUCT NAME].

Data I have:
- Monthly churn rate: [PERCENTAGE]
- Churn by plan: [BREAKDOWN IF AVAILABLE]
- Churn by customer tenure: [BREAKDOWN IF AVAILABLE]
- Top cancellation reasons from surveys: [LIST TOP 5]
- Average revenue per account: [ARPA]

Help me:
1. Identify which customer segments churn most and why
2. Calculate the revenue impact of reducing churn by 1%, 5%, and 10%
3. Prioritize which churn segment to address first (biggest impact, most solvable)
4. Suggest 3 proactive interventions for each high-churn segment
5. Design an early warning system: What leading indicators predict churn 30 days before it happens?
6. Recommend a churn goal and timeline based on my current rate
```

### Cancellation Reason Deep Dive

```
I'm seeing a spike in cancellations for [PRODUCT NAME] with the reason "[TOP CANCELLATION REASON]."

Context:
- Percentage citing this reason: [X%]
- Change from previous period: [INCREASE/DECREASE]
- Affected segment: [WHICH USERS — plan type, tenure, company size]
- Recent changes: [ANY PRODUCT, PRICING, OR MARKET CHANGES]

Help me:
1. Generate 5 hypotheses for why this reason is spiking
2. For each hypothesis, suggest one way to test it
3. Propose 3 immediate actions to address the most likely cause
4. Draft an email to send to this specific segment addressing the concern
5. Suggest a product change that would eliminate this cancellation reason long-term
```

---

*Midas Tools — SaaS Founder AI Kit v1.0*
*File 03 of 06 — Churn Prevention*
