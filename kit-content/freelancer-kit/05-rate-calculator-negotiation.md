# Midas Tools — Freelancer AI Kit
# 05: Rate Calculator & Negotiation Scripts

Price your work with confidence. Negotiate without anxiety. These prompts help you research market rates, justify your pricing, and handle every negotiation scenario.

---

## Variables Reference

```
[YOUR NAME] — Your name or business name
[YOUR SKILL] — Your primary skill (e.g., "web development", "copywriting")
[YOUR SPECIALIZATION] — Your niche (e.g., "Shopify e-commerce", "SaaS landing pages")
[YOUR EXPERIENCE] — Years of experience
[YOUR LOCATION] — City/country or "Remote"
[CURRENT RATE] — Your current hourly rate or project rate
[DESIRED RATE] — The rate you want to charge
[CLIENT NAME] — Client's first name
[CLIENT COMPANY] — Client's business name
[CLIENT INDUSTRY] — Their industry
[PROJECT TYPE] — What you're delivering
[PROJECT VALUE] — Estimated business value of the project to the client
[COMPARABLE RATES] — Rates you've seen in the market
[YOUR RESULTS] — Key results or metrics from past work
[RATE INCREASE PERCENTAGE] — How much you're raising rates (e.g., "20%")
[NEW RATE] — Your new rate after the increase
[OLD RATE] — Your previous rate
[EFFECTIVE DATE] — When the new rate takes effect
```

---

## Prompt 1: Market Rate Research

### Prompt

```
Act as a freelance business consultant. Help me research and benchmark my market rate.

MY PROFILE:
- Skill: [YOUR SKILL]
- Specialization: [YOUR SPECIALIZATION]
- Experience: [YOUR EXPERIENCE] years
- Location: [YOUR LOCATION]
- Current rate: [CURRENT RATE]

Provide a comprehensive rate analysis:

**1. Market Rate Ranges**
Based on freelancers in [YOUR SKILL] with [YOUR EXPERIENCE] years of experience and a focus on [YOUR SPECIALIZATION]:
- Entry-level range (1-2 years): $X - $X/hr
- Mid-level range (3-5 years): $X - $X/hr
- Senior range (6-10 years): $X - $X/hr
- Expert/specialist range (10+ years): $X - $X/hr

**2. Rate Factors**
Analyze how each of these factors affects my rate:
- Specialization premium (generalist vs. specialist)
- Industry demand for [YOUR SKILL]
- Location factor (market-rate adjustment for [YOUR LOCATION])
- Remote vs. on-site pricing differences
- Direct clients vs. agency subcontracting

**3. Recommended Rate**
Based on my profile, suggest:
- A conservative rate (high chance of acceptance)
- A competitive rate (market-standard)
- A premium rate (for high-value clients)
- A value-based rate (based on project outcomes, not time)

**4. Rate Validation Questions**
Give me 5 questions to ask myself to confirm whether my rate is too low, too high, or just right.

**5. Where to Research Further**
List 5 specific websites, communities, or resources where I can verify rates for [YOUR SKILL] freelancers.

NOTE: Use your training data for general guidance, and flag areas where I should verify with current market data.
```

### How to Use
Run this annually or before any major rate change. Cross-reference the AI's suggestions with current data from Glassdoor, Upwork, industry surveys, and peer conversations.

---

## Prompt 2: Rate Justification Script

### Prompt

```
Write a rate justification script I can use when a potential client asks "Why do you charge [CURRENT RATE]?"

MY PROFILE:
- Name: [YOUR NAME]
- Skill: [YOUR SKILL]
- Specialization: [YOUR SPECIALIZATION]
- Experience: [YOUR EXPERIENCE] years
- Current rate: [CURRENT RATE]
- Key results: [YOUR RESULTS]
- Notable clients or projects: [List 2-3 if available]

Generate two versions:

**VERSION A — Email/Written Response**
A 150-word response that:
- Reframes the rate in terms of value, not hours
- References specific outcomes and results from past work
- Positions my specialization as a premium factor
- Ends with confidence, not defensiveness
- Does NOT apologize or justify excessively

**VERSION B — Verbal/Call Response**
A natural 30-second response I can say on a discovery call. Same principles but conversational.

Also generate responses for these follow-up objections:
1. "We can find someone cheaper on Upwork."
2. "Our budget is lower than that."
3. "Can you do it for [LOWER AMOUNT]?"
4. "What if we give you more volume / a longer contract?"

For each objection: 2-3 sentences that are empathetic, confident, and either hold the rate or offer a creative alternative.
```

### How to Use
Practice the verbal version until it feels natural. You should be able to state your rate and rationale without hesitation. Confidence in your pricing comes from rehearsal, not just belief.

---

## Prompt 3: Negotiation Response Templates (5 Scenarios)

### Prompt

```
Generate professional negotiation response templates for 5 common freelance pricing scenarios.

MY CONTEXT:
- Name: [YOUR NAME]
- Skill: [YOUR SKILL]
- Rate: [CURRENT RATE]

**SCENARIO 1: Client says "Your rate is too high"**
Generate an email response that:
- Validates their concern without lowering the rate
- Reframes value vs. cost
- Offers to adjust scope to fit their budget (not your rate)
- Suggests a smaller engagement as a starting point

**SCENARIO 2: Client asks for a discount for "future work"**
Generate an email response that:
- Acknowledges the appeal of a long-term relationship
- Explains that you don't discount on speculation
- Offers a genuine retainer discount for a committed monthly contract
- Provides specific terms (e.g., "10% discount on a 3-month retainer commitment")

**SCENARIO 3: Client wants to pay per deliverable instead of hourly**
Generate an email response that:
- Shows you're flexible on billing model
- Explains how you'll calculate the project fee
- States what's included and what's excluded
- Sets clear boundaries on revisions and scope

**SCENARIO 4: Client tries to negotiate mid-project**
Generate an email response that:
- References the signed agreement professionally
- Explains why mid-project rate changes aren't feasible
- Offers to discuss rates for future projects
- Keeps the relationship intact

**SCENARIO 5: Client ghosts after hearing the price**
Generate a follow-up email (sent 5 days later) that:
- Is brief and low-pressure
- Acknowledges that the pricing may not have been the right fit
- Offers one alternative (smaller scope, phased approach, or referral to a colleague)
- Leaves the door open without being needy

For each scenario: subject line, email body (under 150 words), and a "key principle" one-liner explaining the strategy behind the response.
```

### How to Use
Save these templates where you can grab them quickly. When a pricing objection comes in, resist the urge to respond immediately. Pull up the relevant template, customize it, wait an hour, then send.

---

## Prompt 4: Value-Based Pricing Calculator

### Prompt

```
Help me calculate a value-based price for a freelance project.

PROJECT DETAILS:
- Project type: [PROJECT TYPE]
- Client: [CLIENT NAME] at [CLIENT COMPANY] ([CLIENT INDUSTRY])
- What I'll deliver: [DELIVERABLES]
- Estimated hours: [Your estimated hours to complete]
- My hourly rate: [CURRENT RATE]
- Hourly-based project cost: [Hours x Rate]

CLIENT VALUE FACTORS:
- What problem does this solve for the client? [Describe]
- What's the estimated business impact? [e.g., "Increase conversions by 20%", "Save 10 hours/week", "Generate $50K in new revenue"]
- What would it cost the client to NOT solve this problem? [Estimated cost of inaction]
- What would it cost to hire a full-time employee to do this? [If applicable]
- Is this project urgent or time-sensitive? [Yes/No — why]

Run this analysis:

**1. Cost-Based Price** (floor)
Hours x Rate = $X
This is the minimum you should charge.

**2. Market-Based Price** (benchmark)
What similar freelancers typically charge for [PROJECT TYPE]. Provide a range.

**3. Value-Based Price** (ceiling)
Based on the business impact, calculate:
- If the project generates $X in value, a 10-20% share of that value = $X
- If the project saves $X in costs, a 20-30% share of savings = $X

**4. Recommended Price**
Suggest a specific price point between the market and value-based price, with a justification.

**5. How to Present It**
Write a 3-sentence framing statement I can use in the proposal to connect the price to the value, not the hours.

**6. Anchoring Strategy**
Suggest a three-tier pricing structure (Basic, Standard, Premium) where the middle tier is my recommended price.
```

### How to Use
Run this for every project over $2,000. Even if you don't use pure value-based pricing, understanding the value helps you price confidently and justify your rate.

---

## Prompt 5: "Raising My Rates" Announcement — Existing Clients

### Prompt

```
Write a professional rate increase announcement for my existing freelance clients.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Current rate: [OLD RATE]
- New rate: [NEW RATE]
- Increase: [RATE INCREASE PERCENTAGE]
- Effective date: [EFFECTIVE DATE]
- Notice period: [e.g., "60 days" — time between this email and the effective date]

Generate three versions:

**VERSION 1: For long-term, high-value clients**
- Acknowledge the relationship and their loyalty
- Position the increase as reflecting your growth and market value
- Offer a 30-day grace period or transition rate
- Emphasize continuity and your commitment to their success
- Under 200 words

**VERSION 2: For standard clients**
- Professional and straightforward
- State the new rate and effective date clearly
- Brief explanation (market alignment, increased expertise)
- Offer to discuss if they have questions
- Under 150 words

**VERSION 3: For clients you'd be okay losing**
- Shorter, matter-of-fact
- State the new rate and effective date
- No special offers or grace periods
- Professional and respectful
- Under 100 words

For all versions:
- Include a subject line
- Do NOT apologize for the increase
- Do NOT over-explain or list reasons defensively
- Frame it as a natural business evolution
- End with a forward-looking statement about the work ahead

Also generate:
- 3 FAQ responses for clients who push back
  - "Can we keep the old rate?"
  - "This is more than our budget allows."
  - "Can we lock in a rate for the year?"
```

### How to Use
Send rate increase notices with at least 30-60 days advance notice. Raise rates annually at minimum. If you've never raised your rates, you're overdue.

---

## Prompt 6: "Raising My Rates" — For New Leads / Website

### Prompt

```
Write copy for my freelance website or proposals reflecting updated pricing.

CONTEXT:
- My name: [YOUR NAME]
- Skill: [YOUR SKILL]
- Specialization: [YOUR SPECIALIZATION]
- New rate: [NEW RATE] (hourly) or [NEW RATE] (starting project fee)
- Key differentiator: [What makes you different from other freelancers]
- Key result: [YOUR RESULTS — most impressive metric or outcome]

Generate:

**1. Pricing Page Copy** (for website)
Write 3-4 paragraphs that:
- Lead with the value/outcomes, not the price
- Position your pricing as an investment
- Include social proof or results
- State the rate confidently at the end
- Include a CTA to schedule a discovery call

**2. Pricing Section for Proposals**
Write a 2-paragraph framing section that appears before the pricing table in a proposal. It should:
- Connect the investment to the expected outcome
- Reference what comparable solutions cost (in-house hire, agency, etc.)
- Present your pricing as the strategic choice

**3. One-Liner Rate Statement**
Write 5 variations of a confident one-line response to "What do you charge?" for use on calls or in DMs. Each should be natural, confident, and value-framed.
```

### How to Use
Update your website and proposal templates every time you raise your rates. Your public pricing signals your positioning — keep it current.

---

## Prompt 7: Discovery Call Pricing Script

### Prompt

```
Generate a script for discussing pricing on a freelance discovery call.

MY CONTEXT:
- Name: [YOUR NAME]
- Skill: [YOUR SKILL]
- Rate: [CURRENT RATE] per hour / [Typical project starting at $X]
- Typical project range: [e.g., "$3,000 - $10,000"]

Create a natural conversation script for the pricing portion of a discovery call:

**1. Transition to Pricing** (1-2 sentences)
How to naturally move from discussing the project to discussing money.

**2. Budget Question** (1-2 sentences)
How to ask about their budget without being awkward. Include 2 variations:
- Direct approach
- Range approach

**3. Stating Your Price** (3-4 sentences)
How to present your rate or project fee. Include:
- Value framing (lead with what they get)
- The actual number (stated clearly, no hedging)
- What's included at that price

**4. The Pause**
A note on why you should stop talking after stating the price and let them respond.

**5. Reading the Response**
How to interpret and respond to:
- Immediate agreement (great — confirm and move to next steps)
- Silence or hesitation (don't fill the gap with discounts)
- "That's more than we expected" (acknowledge, hold firm, adjust scope)
- "Let me think about it" (set a follow-up date)
- "Can you do better?" (respond with scope options, not rate cuts)

For each response, include the exact words to say (2-3 sentences each).

**6. Closing the Pricing Discussion** (2-3 sentences)
How to wrap up the pricing conversation and move to next steps regardless of their response.

TONE: Confident, relaxed, professional. This script should sound like a conversation, not a sales pitch.
```

### How to Use
Practice this script before every discovery call. The pricing conversation should feel as natural as discussing the project scope. Confidence comes from preparation.

---

## Key Principles

### You Are Not Your Rate
Separate your self-worth from your pricing. Your rate is a business decision based on market data, value delivered, and experience. It's not a judgment on you as a person.

### Price Anchoring
Always present context before the price. Compare your rate to the cost of hiring full-time, the cost of inaction, or the value of the outcome. Never present a number in a vacuum.

### The Negotiation Mindset
Negotiation is not conflict. It's a collaborative search for terms that work for both parties. Your job is to find the overlap between what they can invest and what you can deliver.

### When to Walk Away
Know your floor rate — the absolute minimum you'll accept. If a negotiation goes below that, walk away professionally. Saying no to underpriced work frees you to find properly-priced work.

### Raise Rates Regularly
If you haven't raised your rates in the past 12 months, you've given yourself a pay cut. Inflation, increased expertise, and market demand all justify regular increases.

---

*Midas Tools — Freelancer AI Kit v1.0*
