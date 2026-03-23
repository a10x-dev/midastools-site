# Midas Tools — Real Estate AI Kit

## 01: Instant Lead Response Templates

Respond to any incoming lead in under 60 seconds. Copy the prompt, fill in the variables, paste into your AI tool, review, and send.

---

## Variables Used Across All Templates

Before using these templates, have the following ready:

| Variable | Description | Example |
|----------|-------------|---------|
| [AGENT_NAME] | Your full name | Sarah Martinez |
| [BROKERAGE] | Your brokerage name | Compass |
| [PHONE] | Your direct phone number | (512) 555-0147 |
| [EMAIL] | Your email address | sarah@compass.com |
| [LEAD_NAME] | The lead's first name | Michael |
| [PROPERTY_ADDRESS] | Property they inquired about | 4218 Ridgeview Trail, Austin TX |
| [PROPERTY_PRICE] | Listing price | $485,000 |
| [PROPERTY_BEDS] | Bedroom count | 3 |
| [PROPERTY_BATHS] | Bathroom count | 2 |
| [PROPERTY_SQFT] | Square footage | 1,850 |
| [PROPERTY_HIGHLIGHT] | One standout feature | recently renovated chef's kitchen |
| [NEIGHBORHOOD] | Neighborhood or area name | Westlake Hills |
| [LEAD_SOURCE] | Where the lead came from | Zillow |

---

## Template 1: Zillow / Realtor.com Inquiry Response

### The Prompt

```
Write a short, warm, and professional email response to a real estate lead.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- The lead's name is [LEAD_NAME]
- They inquired about [PROPERTY_ADDRESS] on [LEAD_SOURCE]
- Property details: [PROPERTY_BEDS] bed / [PROPERTY_BATHS] bath, [PROPERTY_SQFT] sqft, listed at [PROPERTY_PRICE]
- Key feature: [PROPERTY_HIGHLIGHT]

Requirements:
- Subject line included
- Open with gratitude for their interest
- Mention one specific detail about the property to show I know it well
- Ask one qualifying question (timeline, financing, or what matters most to them)
- Include a soft call to action to schedule a showing
- Sign off with my contact info: [PHONE] | [EMAIL]
- Keep it under 150 words
- Tone: professional, approachable, not pushy
```

### Example Output

**Subject:** Great choice — 4218 Ridgeview Trail

Hi Michael,

Thanks for reaching out about 4218 Ridgeview Trail. You have great taste — this one has been getting a lot of attention, especially because of the recently renovated chef's kitchen with quartz countertops and a 6-burner gas range.

At $485,000 for 1,850 sqft in Westlake Hills, it is priced well for the neighborhood.

Quick question — are you currently pre-approved for financing, or is that something I can help you get started on?

I would love to set up a private showing at a time that works for you. I am available this week and can be flexible with scheduling.

Looking forward to connecting.

Sarah Martinez
Compass
(512) 555-0147 | sarah@compass.com

---

## Template 2: Open House Follow-Up

### The Prompt

```
Write a follow-up email to someone who attended my open house.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- The lead's name is [LEAD_NAME]
- They attended the open house at [PROPERTY_ADDRESS] on [OPEN_HOUSE_DATE]
- Property: [PROPERTY_BEDS] bed / [PROPERTY_BATHS] bath, [PROPERTY_SQFT] sqft, listed at [PROPERTY_PRICE]
- One thing they mentioned liking or asking about: [VISITOR_INTEREST]
- Current market condition in the area: [MARKET_CONDITION] (e.g., competitive, balanced, buyer-friendly)

Requirements:
- Subject line included
- Reference their specific interest from the visit to show I was paying attention
- Provide one additional useful detail about the property or neighborhood
- Ask if they would like a second showing or have questions
- If [MARKET_CONDITION] is competitive, include gentle urgency without being pushy
- Include my contact info: [PHONE] | [EMAIL]
- Keep it under 150 words
- Tone: friendly, personal, helpful
```

### Example Output

**Subject:** Great meeting you at the open house, Michael

Hi Michael,

It was great meeting you at the open house on Saturday. I remember you were asking about the backyard space — the lot is actually just over a quarter acre, and the previous owners had plans drawn up for a pool that I can share if you are interested.

The Westlake Hills market has been competitive lately, with homes in this price range averaging about 12 days on market. This one just hit day 5, so there is still time, but I wanted to keep you in the loop.

Would you like to come back for a second look, maybe on a quieter weekday evening? Happy to answer any questions you have.

Sarah Martinez
Compass
(512) 555-0147 | sarah@compass.com

---

## Template 3: Buyer Inquiry Response

### The Prompt

```
Write a response to a potential buyer who reached out asking about homes in a specific area.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- The lead's name is [LEAD_NAME]
- They are looking in: [TARGET_AREA]
- Their budget range: [BUDGET_RANGE]
- What they mentioned wanting: [BUYER_WANTS] (e.g., 3+ beds, good schools, big yard)
- Number of active listings I know of that match: [MATCHING_COUNT]

Requirements:
- Subject line included
- Validate their criteria — make them feel heard
- Mention [MATCHING_COUNT] matching listings to show I already did homework
- Ask 2-3 qualifying questions: timeline, must-haves vs nice-to-haves, pre-approval status
- Offer to send a curated list or set up a search alert
- Include my contact info: [PHONE] | [EMAIL]
- Keep it under 175 words
- Tone: knowledgeable, enthusiastic but not over-the-top
```

### Example Output

**Subject:** Homes in Westlake Hills — I have some ideas

Hi Michael,

Thanks for reaching out. Westlake Hills is a great choice if you are looking for 3+ beds with good schools — Eanes ISD is consistently one of the top districts in the state.

I took a quick look and there are currently 8 active listings in your $400K-$550K range that match what you described. A few of them just hit the market this week.

A couple of quick questions so I can narrow things down for you:

1. What is your ideal timeline to move?
2. Are there any dealbreakers — things you absolutely need or cannot have?
3. Have you connected with a lender yet for pre-approval?

I can put together a curated shortlist and set up an alert so you see new matches the moment they are listed. Want me to go ahead and do that?

Sarah Martinez
Compass
(512) 555-0147 | sarah@compass.com

---

## Template 4: Seller Inquiry Response

### The Prompt

```
Write a response to a homeowner who inquired about selling their property.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- The lead's name is [LEAD_NAME]
- Their property address: [PROPERTY_ADDRESS]
- Property type: [PROPERTY_TYPE] (e.g., single family, condo, townhouse)
- How they reached out: [LEAD_SOURCE]
- Local market snapshot: [MARKET_SNAPSHOT] (e.g., "homes in this area are selling in an average of 14 days, median price up 6% YoY")
- My relevant experience: [EXPERIENCE_NOTE] (e.g., "I've sold 12 homes in this neighborhood in the past 2 years")

Requirements:
- Subject line included
- Acknowledge their interest in selling
- Share one compelling market data point to establish expertise
- Mention my relevant experience without being boastful
- Offer a free, no-obligation Comparative Market Analysis (CMA)
- Ask about their timeline and motivation
- Include my contact info: [PHONE] | [EMAIL]
- Keep it under 175 words
- Tone: confident, consultative, trustworthy
```

### Example Output

**Subject:** Thinking of selling [PROPERTY_ADDRESS]? Here is what I am seeing.

Hi Michael,

Thanks for reaching out about selling your home on Ridgeview Trail. Great timing — homes in Westlake Hills are selling in an average of 14 days right now, with median prices up 6% compared to last year.

I have sold 12 homes in your neighborhood over the past two years, so I have a strong read on what buyers in this market are looking for and what drives top-dollar offers.

I would love to put together a free Comparative Market Analysis for your property — no obligation, just a clear picture of where your home sits in today's market.

A couple of questions to get started:

- What is your ideal timeline? Are you exploring or ready to move?
- Is there a specific reason prompting the move?

Let me know a good time to chat or meet at the property.

Sarah Martinez
Compass
(512) 555-0147 | sarah@compass.com

---

## Template 5: Social Media DM Response

### The Prompt

```
Write a short, casual but professional response to a social media direct message about a property or real estate question.

Context:
- My name is [AGENT_NAME]
- Platform: [PLATFORM] (Instagram, Facebook, TikTok, etc.)
- The lead's name or handle: [LEAD_NAME]
- What they messaged about: [DM_TOPIC] (e.g., "Is that house on Elm St still available?" or "How's the market in Austin?")
- Relevant info I can share: [RELEVANT_INFO]

Requirements:
- Match the casual tone of social media messaging — no formal subject lines
- Keep it short (under 80 words, this is a DM not an email)
- Answer their question or acknowledge it directly
- Transition naturally to moving the conversation off-platform (phone, email, or in-person)
- Do not be overly salesy — this is a conversation, not a pitch
- Include my phone number [PHONE] at the end
- Tone: conversational, helpful, real
```

### Example Output

Hey Michael! Yes, the house on Ridgeview Trail is still available — just had a showing yesterday and it is getting solid interest. The kitchen renovation alone is worth seeing in person.

Happy to answer anything here, but if you want the full scoop (pricing history, neighborhood comps, etc.) it is easier over a quick call or text.

My cell is (512) 555-0147 — shoot me a text anytime.

---

## Speed Tips

1. **Save your agent profile** in your AI tool's memory or custom instructions so you never have to re-enter your name, brokerage, and contact info.

2. **Batch your responses.** Open your AI tool, paste your profile once, then run through all your new leads in a single session.

3. **Create variations.** After generating a response, ask the AI: "Give me a shorter version for text message" or "Make this more casual for Instagram DM."

4. **Speed benchmark.** With practice, you should be able to respond to any lead in 30-45 seconds using these templates.

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
