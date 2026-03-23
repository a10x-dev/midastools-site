# Midas Tools — Real Estate AI Kit

## 03: Follow-Up Sequences

Complete 30-day follow-up sequences for buyer leads, seller leads, and post-showing follow-ups. Each touchpoint includes the AI prompt to generate a personalized message, along with timing, channel, and purpose.

---

## Variables Used Across All Sequences

| Variable | Description | Example |
|----------|-------------|---------|
| [AGENT_NAME] | Your name | Sarah Martinez |
| [BROKERAGE] | Your brokerage | Compass |
| [PHONE] | Your phone | (512) 555-0147 |
| [EMAIL] | Your email | sarah@compass.com |
| [LEAD_NAME] | Lead's first name | Michael |
| [INITIAL_INQUIRY] | What they originally asked about | 3-bed homes in Westlake Hills under $500K |
| [PROPERTY_ADDRESS] | Specific property if applicable | 4218 Ridgeview Trail |
| [LEAD_SOURCE] | Where the lead came from | Zillow inquiry |
| [MARKET_AREA] | Target neighborhood or city | Westlake Hills, Austin TX |
| [TODAY_DATE] | Today's date | March 22, 2026 |

---

## Sequence 1: New Buyer Lead (30-Day Nurture)

### Day 1 — Immediate Response (Email)

**Purpose:** Establish contact, qualify, and show responsiveness.
**Timing:** Within 5 minutes of receiving the lead.

```
Write a warm, professional first-contact email to a new buyer lead.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- They inquired about: [INITIAL_INQUIRY]
- Lead source: [LEAD_SOURCE]
- Date: [TODAY_DATE]

Requirements:
- Subject line included
- Thank them for reaching out
- Reference their specific inquiry to show I am paying attention
- Ask 2 qualifying questions: timeline and pre-approval status
- Offer to send a curated list of matching homes
- Keep it under 125 words
- Include contact info: [PHONE] | [EMAIL]
- Tone: prompt, helpful, not salesy
```

---

### Day 1 — Follow-Up Text (SMS, 2 hours after email)

**Purpose:** Increase response rate with a second channel.
**Timing:** 2 hours after the email if no reply.

```
Write a brief, friendly text message to follow up on an email I just sent to a new buyer lead.

Context:
- My name is [AGENT_NAME]
- Lead name: [LEAD_NAME]
- I emailed them earlier today about: [INITIAL_INQUIRY]

Requirements:
- Under 40 words
- Casual but professional — this is a text, not an email
- Reference the email without being redundant
- End with a simple question to prompt a reply
- Do not include a signature block — just my first name
```

**Example Output:**

Hi Michael, it's Sarah from Compass. I just sent you an email about homes in Westlake Hills. Did you get a chance to see it? Happy to chat whenever is convenient.

---

### Day 3 — Value-Add Email

**Purpose:** Provide value without asking for anything. Build trust.
**Timing:** Morning of Day 3.

```
Write a follow-up email to a buyer lead I contacted 2 days ago who has not responded yet.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- They originally inquired about: [INITIAL_INQUIRY]
- I am sending them something useful: [VALUE_OFFER] (e.g., "a list of 5 new listings that match their criteria," "a neighborhood guide for Westlake Hills," "a first-time buyer checklist")

Requirements:
- Subject line included
- Do NOT mention that they have not replied — no guilt, no pressure
- Lead with the value offer
- Frame it as "I saw this and thought of you"
- Include one brief sentence about my availability to help
- Keep it under 100 words
- Tone: generous, low-pressure, expert
```

**Example Output:**

**Subject:** 5 new listings in Westlake Hills — thought of you

Hi Michael,

A few new homes just hit the market in Westlake Hills that match what you were looking for. I put together a quick list with photos and key details:

[Link or "see attached"]

Wanted to get these in front of you before they get too much traffic. Let me know if any catch your eye or if you want to adjust the search criteria.

Here whenever you are ready.

Sarah Martinez
Compass | (512) 555-0147

---

### Day 7 — Market Insight Email

**Purpose:** Position yourself as the local expert. Keep the conversation alive.
**Timing:** Morning of Day 7.

```
Write a follow-up email to a buyer lead using a recent market insight to stay top of mind.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their target area: [MARKET_AREA]
- Recent market insight to share: [MARKET_INSIGHT] (e.g., "average days on market dropped to 11 this month," "a new development was just announced," "interest rates ticked down this week")

Requirements:
- Subject line included
- Lead with the insight — make it feel like insider knowledge
- Briefly connect it to their search (why this matters to them)
- Soft call to action — offer to discuss or adjust their search
- Keep it under 100 words
- Tone: informative, consultative, expert
```

**Example Output:**

**Subject:** Westlake Hills market update — good news for buyers

Hi Michael,

Quick update on the Westlake Hills market: average days on market dropped to 11 this month, down from 18 in February. Homes in the $400-$500K range are moving especially fast.

Not trying to create urgency — just want to make sure you have the latest info so you can move quickly when the right one comes up.

Want me to tighten up your search criteria or set up instant alerts so you see new listings the moment they go live?

Sarah Martinez
Compass | (512) 555-0147

---

### Day 14 — Check-In Text

**Purpose:** Lightweight touchpoint. Show you have not forgotten them.
**Timing:** Midday, Day 14.

```
Write a casual check-in text message to a buyer lead I have been in touch with for about 2 weeks.

Context:
- My name is [AGENT_NAME]
- Lead name: [LEAD_NAME]
- Their search: [INITIAL_INQUIRY]
- Something new to mention: [NEW_ITEM] (e.g., "a price drop on a home they might like," "a new listing," "an open house this weekend")

Requirements:
- Under 35 words
- Casual, conversational
- Mention the new item as the reason for reaching out
- End with a low-pressure question
- Just my first name at the end
```

**Example Output:**

Hey Michael — just saw a price drop on a 3-bed in Westlake Hills that checks your boxes. Want me to send you the details? — Sarah

---

### Day 30 — Re-Engagement Email

**Purpose:** Final nurture touch before moving to long-term drip. Give them an easy on-ramp to re-engage.
**Timing:** Morning, Day 30.

```
Write a 30-day follow-up email to a buyer lead who has gone quiet.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Original inquiry: [INITIAL_INQUIRY]
- Today's date: [TODAY_DATE]

Requirements:
- Subject line included
- Acknowledge that life gets busy — no guilt
- Briefly remind them of what they were looking for
- Offer three clear options so they can respond with minimal effort:
  1. "Still looking — let's reconnect"
  2. "Not ready yet — check back in a few months"
  3. "Already found a home / no longer looking"
- Keep it under 100 words
- Tone: understanding, no pressure, easy to respond to
```

**Example Output:**

**Subject:** Still thinking about Westlake Hills?

Hi Michael,

It has been a few weeks since we last connected about 3-bed homes in Westlake Hills. Totally understand if life got busy.

Just want to make sure I am being helpful, not a nuisance. Where are you at?

1. Still looking — let's reconnect and I will send fresh options
2. Not ready yet — I will check back in a few months
3. Already found something — congrats!

Just reply with a number and I will take it from there. No wrong answer.

Sarah Martinez
Compass | (512) 555-0147

---

## Sequence 2: New Seller Lead (30-Day Nurture)

### Day 1 — Immediate Response (Email)

**Purpose:** Establish credibility, offer a free CMA.
**Timing:** Within 5 minutes.

```
Write a first-contact email to a homeowner who inquired about selling.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their property: [PROPERTY_ADDRESS]
- Lead source: [LEAD_SOURCE]
- My relevant credential: [CREDENTIAL] (e.g., "sold 15 homes in your neighborhood this year," "top 5% of agents in Austin")

Requirements:
- Subject line included
- Acknowledge their interest in selling
- Establish credibility with one fact about my experience in their area
- Offer a free Comparative Market Analysis (CMA) — no obligation
- Ask about their timeline and motivation
- Keep it under 130 words
- Tone: confident, consultative, not pushy
```

---

### Day 1 — Follow-Up Text (SMS, 2 hours after email)

**Purpose:** Second channel for higher response rate.
**Timing:** 2 hours after email.

```
Write a brief text message following up on an email I sent a potential seller.

Context:
- My name is [AGENT_NAME]
- Lead name: [LEAD_NAME]
- Their property: [PROPERTY_ADDRESS]

Requirements:
- Under 35 words
- Mention the CMA offer
- Casual, professional
- Just my first name
```

**Example Output:**

Hi [LEAD_NAME], it's Sarah. I just emailed you about your home on Ridgeview Trail — happy to put together a free market analysis whenever you're ready. Any questions, just text me back. — Sarah

---

### Day 3 — Neighborhood Market Data Email

**Purpose:** Deliver value. Show you know their market.
**Timing:** Morning, Day 3.

```
Write a follow-up email to a potential seller with local market data.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their property: [PROPERTY_ADDRESS]
- Their neighborhood: [NEIGHBORHOOD]
- 2-3 market data points: [MARKET_DATA] (e.g., "median sale price up 8% YoY, avg days on market is 14, 3 homes sold on their street in the last 6 months")

Requirements:
- Subject line included
- Lead with the data — make it feel like insider information
- Connect the data to what it means for them specifically
- Reiterate the CMA offer
- Keep it under 120 words
- Tone: data-driven, expert, helpful
```

---

### Day 7 — Success Story Email

**Purpose:** Social proof. Show what you have done for sellers in their area.
**Timing:** Morning, Day 7.

```
Write a follow-up email to a potential seller featuring a recent success story.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their neighborhood: [NEIGHBORHOOD]
- Recent success: [SUCCESS_STORY] (e.g., "Just helped a seller on Oak Lane get 3 offers in 5 days, closed $15K over asking")

Requirements:
- Subject line included
- Share the success story naturally — not as bragging but as a relevant example
- Connect it to their situation: "Your home has similar appeal because..."
- Soft call to action — offer to discuss their options
- Keep it under 110 words
- Tone: confident, relatable, proof-driven
```

---

### Day 14 — Listing Preparation Tips Email

**Purpose:** Provide value. Help them think about next steps.
**Timing:** Morning, Day 14.

```
Write an email to a potential seller with 3-5 practical tips to prepare their home for sale.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their property type: [PROPERTY_TYPE]
- Their likely price range: [PRICE_RANGE]

Requirements:
- Subject line included
- Frame the tips as "things I always tell my sellers" — expert positioning
- Keep tips actionable and specific (not generic like "declutter")
- Mention that these small improvements can impact sale price
- Do not pressure them to list — position as helpful advice regardless of timing
- Keep it under 150 words
- Tone: mentoring, generous, expert
```

---

### Day 30 — Re-Engagement Email

**Purpose:** Final nurture touch. Three-option close.
**Timing:** Morning, Day 30.

```
Write a 30-day follow-up email to a seller lead who has not engaged.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Their property: [PROPERTY_ADDRESS]

Requirements:
- Subject line included
- Acknowledge that selling is a big decision and timing matters
- Offer three response options:
  1. "Ready to explore — let's schedule a walk-through"
  2. "Thinking spring/summer — follow up then"
  3. "Decided to stay — take me off the list"
- Keep it under 90 words
- Tone: patient, understanding, zero pressure
```

---

## Sequence 3: Post-Showing Follow-Up

### Day 1 — Immediate After Showing (Text + Email)

**Purpose:** Capture their reaction while it is fresh.
**Timing:** 1-2 hours after the showing.

**Text Message Prompt:**

```
Write a text message to send a buyer 1-2 hours after showing them a property.

Context:
- My name is [AGENT_NAME]
- Lead name: [LEAD_NAME]
- Property shown: [PROPERTY_ADDRESS]
- One thing they seemed to react positively to: [POSITIVE_REACTION]

Requirements:
- Under 35 words
- Reference the specific thing they liked
- Ask one open-ended question about their thoughts
- Casual, conversational
```

**Example Output:**

Hey Michael — great seeing the Ridgeview Trail place today. I noticed you really liked the kitchen layout. What are your overall thoughts? Anything you'd want to see more of? — Sarah

**Email Prompt (same day, evening):**

```
Write a follow-up email after showing a buyer a property.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Property shown: [PROPERTY_ADDRESS]
- Property price: [PROPERTY_PRICE]
- What they liked: [POSITIVE_REACTION]
- Any concerns they mentioned: [CONCERNS]
- Comparable property I can suggest as an alternative: [COMPARABLE_PROPERTY]

Requirements:
- Subject line included
- Recap what they liked — validation builds trust
- Address their concern directly with useful context
- Suggest a next step: second showing, comparable property, or offer discussion
- Keep it under 130 words
- Tone: attentive, responsive, solution-oriented
```

---

### Day 3 — Comparison or New Option

**Purpose:** Keep momentum. Provide alternatives or reinforce interest.
**Timing:** Morning, Day 3.

```
Write a follow-up email 3 days after a property showing.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Property shown: [PROPERTY_ADDRESS]
- Their feedback so far: [FEEDBACK_SUMMARY] (e.g., "liked the home but wanted more backyard space")
- What I am sending them: [FOLLOW_UP_CONTENT] (e.g., "2 new listings with larger lots in the same area," "a cost comparison showing renovation potential," "comps showing the property is priced well")

Requirements:
- Subject line included
- Reference their feedback to show I listened
- Present the follow-up content as a direct response to what they said
- Keep momentum toward a decision without being pushy
- Keep it under 110 words
- Tone: proactive, helpful, responsive
```

---

### Day 7 — Decision Nudge

**Purpose:** Gently move toward a decision. Provide market context.
**Timing:** Morning, Day 7.

```
Write a one-week follow-up email after a property showing.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Lead name: [LEAD_NAME]
- Property shown: [PROPERTY_ADDRESS]
- Current status of the property: [PROPERTY_STATUS] (e.g., "still available, 2 other showings scheduled this week," "just received an offer," "price reduced by $10K")
- My recommendation: [RECOMMENDATION] (e.g., "schedule a second showing," "consider making an offer," "look at alternatives")

Requirements:
- Subject line included
- Share the property status update — factual, not manipulative
- Give my honest recommendation and brief reasoning
- Make it easy for them to act — "If you want to move forward, here's what the next step looks like"
- Keep it under 120 words
- Tone: advisor, transparent, action-oriented
```

---

## Sequence Management Tips

1. **Use your CRM.** Set these touchpoints as tasks in your CRM (Follow Up Boss, KVCore, LionDesk, etc.) so nothing falls through the cracks.

2. **Personalize every message.** These prompts are designed to generate personalized content. Never send the same generic message to every lead.

3. **Track what works.** Note which messages get the highest response rates and double down on those formats.

4. **Know when to stop.** If a lead asks you to stop contacting them, remove them immediately. Compliance with CAN-SPAM and TCPA is mandatory.

5. **Adjust timing to your market.** In a hot market, compress the sequence. In a slower market, spread it out and add more value touchpoints.

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
