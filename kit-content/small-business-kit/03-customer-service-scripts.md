# Midas Tools — Small Business AI Kit
# 03: Customer Service Scripts

> AI-powered response templates for complaints, reviews, FAQs, refunds, and escalations.
> Works with ChatGPT, Claude, Gemini, or any AI tool.

---

## Table of Contents

1. [Set Your Service Context](#set-your-service-context)
2. [Complaint Resolution (5 Severity Levels)](#complaint-resolution)
3. [FAQ Response Generator](#faq-response-generator)
4. [Review Response Templates](#review-response-templates)
5. [Refund and Return Handling](#refund-and-return-handling)
6. [Escalation Templates](#escalation-templates)

---

## Set Your Service Context

Paste this at the start of every AI session before using customer service prompts:

```
You are a customer service specialist for my small business.

Business: [BUSINESS NAME]
Industry: [INDUSTRY]
Products/Services: [WHAT YOU SELL]
Return policy: [YOUR RETURN POLICY — e.g., 30-day returns, no questions asked]
Refund policy: [YOUR REFUND POLICY — full refund, store credit, exchange only]
Warranty: [WARRANTY DETAILS IF APPLICABLE]
Support channels: [EMAIL / LIVE CHAT / PHONE / SOCIAL MEDIA]
Business hours: [HOURS AND TIMEZONE]
Escalation contact: [NAME/TITLE OF PERSON WHO HANDLES ESCALATIONS]

Tone guidelines:
- Always empathetic and professional
- Acknowledge the customer's frustration before solving
- Never blame the customer
- Be solution-oriented
- Use the customer's name when provided
- Keep responses concise but thorough
```

---

## Complaint Resolution

### Level 1: Minor Inconvenience
*Examples: Slow email response, minor packaging issue, small website glitch*

```
Write a customer service response for [BUSINESS NAME].

Situation: [DESCRIBE THE MINOR ISSUE — e.g., "Customer says their order confirmation email was delayed by 2 days"]
Customer's name: [NAME]
Channel: [EMAIL / CHAT / SOCIAL MEDIA]

This is a Level 1 issue — minor inconvenience, no product or financial impact.

Requirements:
- Acknowledge the issue sincerely
- Brief apology (don't over-apologize for small things)
- Explain what happened (if known) or what you're doing to prevent it
- Confirm the current status of their order/account
- Thank them for letting you know
- 50-80 words
- Warm, efficient tone
```

### Level 2: Moderate Frustration
*Examples: Late delivery, wrong item shipped, missing item in order, difficulty using product*

```
Write a customer service response for [BUSINESS NAME].

Situation: [DESCRIBE THE ISSUE — e.g., "Customer received wrong size. They ordered Medium but got Large."]
Customer's name: [NAME]
Channel: [EMAIL / CHAT / SOCIAL MEDIA]
Order number: [ORDER # IF APPLICABLE]

This is a Level 2 issue — moderate frustration, the customer was inconvenienced but not severely impacted.

Requirements:
- Lead with empathy: acknowledge how frustrating this is
- Take ownership — don't blame shipping, the warehouse, etc.
- Present the solution clearly (what you'll do and by when)
- Offer something small as a goodwill gesture if appropriate (priority shipping on replacement, small discount on next order)
- Provide a timeline for resolution
- 80-120 words
```

### Level 3: Significant Problem
*Examples: Defective product, order never arrived, billing error, multiple issues with same order*

```
Write a customer service response for [BUSINESS NAME].

Situation: [DESCRIBE THE SERIOUS ISSUE — e.g., "Customer's order never arrived. Tracking shows delivered but customer says they never received it. This is their second order issue."]
Customer's name: [NAME]
Channel: [EMAIL / CHAT / SOCIAL MEDIA]
Order details: [ORDER #, PRODUCT, AMOUNT]
Previous issues (if any): [BRIEF HISTORY]

This is a Level 3 issue — significant problem causing real inconvenience or financial impact.

Requirements:
- Open with a genuine, specific apology (not generic "sorry for the inconvenience")
- Acknowledge the full scope of their frustration
- If this is a repeat issue, acknowledge that specifically
- Present solution options (give the customer choices when possible)
- Include a meaningful goodwill gesture (refund + replacement, significant discount, free product)
- Provide your direct contact for follow-up
- 120-180 words
```

### Level 4: Major Issue / Angry Customer
*Examples: Safety concern, significant financial impact, public complaint, threatening to leave negative review*

```
Write a customer service response for [BUSINESS NAME].

Situation: [DESCRIBE THE MAJOR ISSUE — e.g., "Customer's product broke after one use, they cut their hand, and they're threatening a negative review and BBB complaint."]
Customer's name: [NAME]
Channel: [EMAIL / CHAT / SOCIAL MEDIA]
Customer's emotional state: [ANGRY / UPSET / THREATENING / DEMANDING]
Order details: [ORDER #, PRODUCT, AMOUNT]

This is a Level 4 issue — major problem, customer is very upset, potential public reputation risk.

Requirements:
- Open with a personal, specific apology from a named person (not "the team")
- Express genuine concern, especially if safety is involved
- Do NOT be defensive or make excuses
- Take full responsibility
- Present a generous resolution immediately (don't make them ask)
- Offer a full refund PLUS goodwill (replacement, store credit, free products)
- If safety is involved, ask about their wellbeing first
- Provide a direct phone number or personal email for follow-up
- Ask if there's anything else you can do
- 150-200 words
- Calm, professional, deeply empathetic tone
```

### Level 5: Crisis / Legal Risk
*Examples: Product causes injury/damage, data breach, widespread service failure, potential lawsuit*

```
Write a customer service response for [BUSINESS NAME].

Situation: [DESCRIBE THE CRISIS — e.g., "Customer is alleging their child had an allergic reaction to our product despite no allergen warnings on the label."]
Customer's name: [NAME]
Channel: [EMAIL / CHAT / PHONE]
Details: [ALL RELEVANT DETAILS]

This is a Level 5 issue — crisis level, potential legal implications, safety risk.

IMPORTANT: Flag that this should be reviewed by [OWNER/LEGAL] before sending.

Requirements:
- Express immediate, deep concern for their wellbeing and safety
- Do NOT admit fault or make specific liability statements
- Do NOT say "our product caused this" — use careful language
- Request specific details about what happened
- Explain that you're taking this extremely seriously
- Provide the owner's or manager's direct contact information
- Offer to cover any immediate costs (medical, replacement, etc.) without framing it as an admission
- Ask them to preserve the product for review if applicable
- Follow up within 24 hours
- 150-200 words
- Write a second version that is an internal note to [OWNER] summarizing the situation and recommending next steps
```

---

## FAQ Response Generator

### Generate FAQ Responses from Scratch

```
Generate FAQ responses for [BUSINESS NAME].

Create Q&A pairs for these common topics:
1. Shipping and delivery
2. Returns and refunds
3. Product information / sizing / specs
4. Payment and billing
5. Account and orders
6. Contact and support

For each topic:
- Write 5 common questions customers would ask
- Write a clear, concise answer (40-80 words each)
- Include relevant links as [LINK PLACEHOLDER]
- Tone: helpful, clear, not robotic

Format each as:
**Q: [Question]**
A: [Answer]
```

### Turn Customer Emails into FAQ Entries

```
I'm going to paste a customer email. Turn it into a FAQ entry for [BUSINESS NAME].

Customer email:
"[PASTE THE ACTUAL CUSTOMER EMAIL HERE]"

Requirements:
- Extract the core question(s) from the email
- Write a clear, general FAQ question (not specific to this customer)
- Write a concise answer (50-80 words)
- If the email contains multiple questions, create separate FAQ entries for each
- Write a short response to send back to this specific customer that also points them to the FAQ
```

### FAQ Response for Specific Question

```
Write a customer service response for [BUSINESS NAME] answering this question:

Question: "[CUSTOMER'S SPECIFIC QUESTION]"
Customer's name: [NAME]
Context: [ANY RELEVANT CONTEXT — are they a new customer, repeat buyer, etc.]

Requirements:
- Answer the question directly in the first sentence
- Provide any necessary details or qualifications
- Link to relevant resources: [LINK TO FAQ PAGE / POLICY PAGE / PRODUCT PAGE]
- Friendly, helpful tone
- 60-100 words
- End with "Anything else I can help with?"
```

---

## Review Response Templates

### Positive Review (5 Stars)

```
Write a response to this positive review for [BUSINESS NAME].

Platform: [GOOGLE / YELP / FACEBOOK / AMAZON / TRUSTPILOT]
Stars: 5
Review: "[PASTE THE REVIEW]"
Customer name: [NAME]

Requirements:
- Thank them by name
- Reference something specific they mentioned
- Reinforce the positive experience ("We're so glad you loved...")
- Invite them back or mention something new they might enjoy
- Keep it genuine — not a copy-paste template
- 40-70 words
- Don't ask for anything (no "tell your friends" or "share this")
```

### Positive Review (4 Stars)

```
Write a response to this 4-star review for [BUSINESS NAME].

Platform: [PLATFORM]
Stars: 4
Review: "[PASTE THE REVIEW]"
Customer name: [NAME]

Requirements:
- Thank them warmly
- Acknowledge what they enjoyed
- If they mentioned something less than perfect, briefly address it
- Don't be defensive about the missing star
- 40-70 words
- Genuine and appreciative
```

### Neutral Review (3 Stars)

```
Write a response to this neutral review for [BUSINESS NAME].

Platform: [PLATFORM]
Stars: 3
Review: "[PASTE THE REVIEW]"
Customer name: [NAME]

Requirements:
- Thank them for the honest feedback
- Acknowledge what went well
- Address the areas of concern directly
- Share what you're doing to improve (be specific)
- Invite them to give you another chance or reach out directly
- 60-90 words
- Don't be defensive
```

### Negative Review (1-2 Stars)

```
Write a response to this negative review for [BUSINESS NAME].

Platform: [PLATFORM]
Stars: [1 or 2]
Review: "[PASTE THE REVIEW]"
Customer name: [NAME]

Context: Is this review accurate or is key information missing?
[ACCURATE — we messed up / PARTIALLY ACCURATE — here's the other side: _____ / INACCURATE — what actually happened: _____]

Requirements:
- Apologize sincerely and specifically (not "sorry for the inconvenience")
- Do NOT argue, make excuses, or get defensive, even if the review is unfair
- Acknowledge their experience and frustration
- If you can correct misinformation, do so briefly and factually (not confrontationally)
- Take responsibility for what you could have done better
- Provide a path to resolution: "Please reach out to [EMAIL/PHONE] so we can make this right"
- 70-100 words
- Other potential customers WILL read this — show that you care and handle problems well
```

### Fake or Unfair Review

```
Write a response to what appears to be a fake or unfair review for [BUSINESS NAME].

Platform: [PLATFORM]
Stars: [STARS]
Review: "[PASTE THE REVIEW]"
Why you believe it's fake/unfair: [EXPLAIN — not a real customer, competitor, wrong business, etc.]

Requirements:
- Remain professional and calm — never accusatory
- Express concern: "We take all feedback seriously but can't find a record matching this experience"
- Invite them to contact you directly with order details so you can investigate
- Subtly signal to other readers that this may not be legitimate without saying so directly
- 60-90 words
- Separately: instructions on how to flag/report this review on [PLATFORM]
```

---

## Refund and Return Handling

### Standard Return Request

```
Write a customer service response for [BUSINESS NAME] handling a return request.

Customer: [NAME]
Product: [PRODUCT]
Order date: [DATE]
Return reason: [REASON — didn't fit, didn't like, changed mind, etc.]
Within return window: [YES / NO]

Your return policy: [SUMMARIZE YOUR POLICY]

Requirements:
- Acknowledge the request warmly
- Confirm eligibility based on your policy
- Provide clear step-by-step return instructions
- Include any relevant details (return shipping label, restocking fee, etc.)
- Set expectations on refund timeline
- 80-120 words
```

### Return Request Outside Policy Window

```
Write a customer service response for [BUSINESS NAME] handling a late return request.

Customer: [NAME]
Product: [PRODUCT]
Order date: [DATE]
Days past return window: [NUMBER]
Reason for late return: [REASON]
Customer history: [FIRST-TIME BUYER / REPEAT CUSTOMER / VIP]

Your policy: [RETURN WINDOW — e.g., 30 days]
Your flexibility level: [STRICT / FLEXIBLE CASE-BY-CASE / ALWAYS ACCOMMODATE]

Requirements:
- Empathetic tone regardless of decision
- If approving: frame it as a one-time exception, explain why
- If declining: explain the policy, offer alternatives (store credit, exchange, discount on next order)
- 80-120 words
```

### Refund Confirmation

```
Write a refund confirmation email for [BUSINESS NAME].

Customer: [NAME]
Product returned: [PRODUCT]
Refund amount: [AMOUNT]
Refund method: [ORIGINAL PAYMENT / STORE CREDIT]
Processing time: [TIMEFRAME — e.g., 5-10 business days]

Requirements:
- Confirm the refund clearly with all details
- Set expectations on when they'll see it in their account
- Express that you're sorry it wasn't a fit
- Invite them back — "We'd love to serve you again"
- 60-90 words
- Professional, no hard feelings tone
```

### Damaged Item Report

```
Write a customer service response for [BUSINESS NAME] when a customer reports a damaged item.

Customer: [NAME]
Product: [PRODUCT]
Damage description: [WHAT THE CUSTOMER REPORTED]
Photo provided: [YES / NO]

Requirements:
- Express genuine concern
- If no photo: politely ask for one to process the claim quickly
- If photo provided: thank them and confirm you can see the damage
- Offer resolution options: replacement, refund, or partial refund + keep the item
- Explain the timeline for the resolution
- Apologize for the experience
- 80-120 words
```

---

## Escalation Templates

### Internal Escalation Note

```
Write an internal escalation note for [BUSINESS NAME].

Customer: [NAME]
Issue: [DESCRIBE THE ISSUE]
Previous interactions: [SUMMARIZE WHAT'S HAPPENED SO FAR]
Customer's current emotional state: [CALM / FRUSTRATED / ANGRY / THREATENING]
What the customer wants: [THEIR DESIRED RESOLUTION]
What we've offered so far: [WHAT'S BEEN PROPOSED]
Why this needs escalation: [REASON — authority needed, policy exception, legal concern, etc.]

Requirements:
- Write a concise internal summary (100-150 words)
- Include all relevant order/account details
- Recommend a resolution with justification
- Flag any time sensitivity
- Note any legal or reputation risks
- Suggest who should handle the next interaction
```

### Escalation to Manager Response (to Customer)

```
Write a response from a manager at [BUSINESS NAME] to an escalated customer issue.

Manager name: [NAME]
Manager title: [TITLE]
Customer: [CUSTOMER NAME]
Issue summary: [BRIEF SUMMARY]
Previous resolution attempts: [WHAT WAS ALREADY OFFERED]
Your proposed resolution: [WHAT YOU'RE NOW OFFERING]

Requirements:
- Introduce yourself by name and title
- Acknowledge you've reviewed their case personally
- Apologize for the experience AND for the difficulty in getting it resolved
- Present the enhanced resolution clearly
- Explain any steps you're taking to prevent this in the future
- Provide your direct contact information
- 120-180 words
- Authoritative but deeply empathetic tone
```

### Social Media Public Escalation

```
Write a public response to a customer complaint posted on [PLATFORM — Twitter/X, Facebook, Instagram] about [BUSINESS NAME].

Their post: "[PASTE OR SUMMARIZE THEIR PUBLIC COMPLAINT]"
Customer handle/name: [NAME]

Requirements:
- Respond publicly first, then move to private
- Brief public response (30-50 words max — everyone's watching)
- Acknowledge the issue
- Apologize without over-explaining
- Ask them to DM you with order details
- Show other followers you take complaints seriously and respond quickly
- Then write the private DM follow-up (80-120 words) with a detailed resolution plan
```

### Threatening Legal Action

```
Write a response for [BUSINESS NAME] to a customer who is threatening legal action.

Customer: [NAME]
Threat: [WHAT THEY'RE THREATENING — lawsuit, BBB, attorney general, etc.]
Issue: [THE UNDERLYING PROBLEM]
What you've offered: [RESOLUTION ATTEMPTS SO FAR]

IMPORTANT: Flag this for review by [OWNER/LEGAL] before sending.

Requirements:
- Remain calm, professional, and non-confrontational
- Do NOT acknowledge or respond to the legal threat directly
- Focus entirely on resolving the underlying issue
- Restate your willingness to make it right
- Offer a generous resolution
- Provide direct contact for the business owner or manager
- Do NOT admit fault in writing
- Do NOT use language that could be construed as a legal admission
- 100-150 words
- Write a separate internal note recommending next steps and whether legal counsel should be consulted
```

---

*Midas Tools — Small Business AI Kit v1.0*
*File 03 of 06 — Customer Service Scripts*
