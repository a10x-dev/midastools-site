# Midas Tools — Real Estate AI Kit

## 06: Open House Workflows

Complete AI workflows for every phase of an open house — from pre-event marketing to lead capture follow-up, post-showing reports, and neighborhood highlight scripts.

---

## Variables Reference

| Variable | Description |
|----------|-------------|
| [PROPERTY_ADDRESS] | Property address |
| [PROPERTY_PRICE] | List price |
| [BEDS] / [BATHS] | Bed and bath count |
| [SQFT] | Square footage |
| [KEY_FEATURES] | Top features, comma-separated |
| [NEIGHBORHOOD] | Neighborhood name |
| [NEIGHBORHOOD_HIGHLIGHTS] | Area selling points |
| [OH_DATE] | Open house date |
| [OH_TIME] | Open house time window |
| [AGENT_NAME] | Your name |
| [BROKERAGE] | Your brokerage |
| [PHONE] | Your phone |
| [EMAIL] | Your email |

---

## Phase 1: Pre-Event Marketing Copy

### Prompt 1: Instagram / Facebook Post — Open House Announcement

```
Write a social media post announcing an upcoming open house.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] / [BATHS]
- Sqft: [SQFT]
- Top 3 features: [KEY_FEATURES]
- Neighborhood: [NEIGHBORHOOD]

Open house details:
- Date: [OH_DATE]
- Time: [OH_TIME]

Requirements:
- Hook in the first line that stops the scroll
- Make people want to come see it in person — tease, do not tell everything
- Include the essential details: date, time, address
- Call to action: save the date, tag a friend, DM for details
- Platform: [PLATFORM] (adjust length and tone accordingly)
- 5-7 relevant hashtags
- Under 80 words for Instagram, up to 120 for Facebook
- Agent: [AGENT_NAME] | [BROKERAGE]
```

### Example Output (Instagram)

You need to see this kitchen in person. Photos do not do it justice.

OPEN HOUSE this Saturday
4218 Ridgeview Trail, Austin TX
1-4 PM

3 bed | 2.5 bath | 1,850 sqft
$485,000 in Westlake Hills

Remodeled kitchen, 10-ft ceilings, quarter-acre lot with mature trees. Eanes ISD.

Save this post. Tag someone who is house hunting. See you Saturday.

Sarah Martinez | Compass

#OpenHouse #AustinOpenHouse #WestlakeHills #JustListed #AustinRealEstate #AustinHomes #OpenHouseSaturday

---

### Prompt 2: Email Invitation — Open House

```
Write an email invitation for an open house to send to my contact database.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] / [BATHS]
- Sqft: [SQFT]
- Key features: [KEY_FEATURES]
- Neighborhood: [NEIGHBORHOOD]
- Neighborhood highlights: [NEIGHBORHOOD_HIGHLIGHTS]

Open house:
- Date: [OH_DATE]
- Time: [OH_TIME]

Audience: [AUDIENCE] (e.g., "my buyer list," "entire database including past clients and sphere," "neighborhood residents")

Requirements:
- Subject line and preview text
- Keep the email scannable — short paragraphs, bullet points for features
- Include a clear "add to calendar" call to action
- For sphere/past clients, add a line like "Know someone looking? Feel free to share this"
- Include my contact info and a note about private showings for those who cannot attend
- Under 150 words
- Tone: inviting, professional, enthusiasm without hype
```

### Example Output

**Subject:** Open House Saturday — Westlake Hills, $485K

**Preview text:** 3 bed modern farmhouse, remodeled kitchen, Eanes ISD

---

You are invited to a special open house this Saturday.

**4218 Ridgeview Trail, Austin TX 78731**
**Saturday, March 28 | 1:00 - 4:00 PM**

$485,000 | 3 bed | 2.5 bath | 1,850 sqft

- Kitchen remodeled in 2023 (quartz, custom cabinets)
- 10-foot ceilings, hardwood floors
- Covered patio on a private quarter-acre lot
- New roof (2024), smart home system
- Eanes ISD, 10 min to downtown

Stop by Saturday — no appointment needed. I will be there to walk you through and answer any questions.

Cannot make it? Reply to this email and I will set up a private showing.

Know someone looking? Forward this along — they will thank you.

Sarah Martinez | Compass
(512) 555-0147 | sarah@compass.com

---

### Prompt 3: Open House Flyer Copy

```
Write the text for a printed or digital open house flyer.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] / [BATHS]
- Sqft: [SQFT]
- Lot size: [LOT_SIZE]
- Year built: [YEAR_BUILT]
- Key features: [KEY_FEATURES] (list 6-8)
- Neighborhood: [NEIGHBORHOOD]
- School district: [SCHOOL_DISTRICT]

Open house:
- Date: [OH_DATE]
- Time: [OH_TIME]

Agent: [AGENT_NAME] | [BROKERAGE] | [PHONE] | [EMAIL]

Requirements:
- Headline that grabs attention
- Organized layout: headline, property specs, feature bullets, open house details, agent contact
- Feature bullets should be concise (3-5 words each)
- Include neighborhood and school info
- Keep total word count under 100 — flyers need to be scannable
- Tone: clean, professional, upscale
```

### Example Output

**OPEN HOUSE**

**4218 Ridgeview Trail**
Westlake Hills, Austin TX 78731

**Saturday, March 28 | 1:00 - 4:00 PM**

$485,000

3 Bed | 2.5 Bath | 1,850 Sqft
0.28 Acre Lot | Built 2018

- Remodeled chef's kitchen (2023)
- 10-foot ceilings throughout
- Quartz countertops, custom cabinetry
- Walk-in pantry
- Covered patio with mature trees
- Smart home system
- New roof (2024)
- Attached 2-car garage

Eanes ISD | 10 min to downtown Austin

Sarah Martinez | Compass
(512) 555-0147 | sarah@compass.com

---

### Prompt 4: Neighborhood Door-Knock / Door-Hanger Script

```
Write a brief, friendly script for knocking on doors in the neighborhood to invite residents to the open house, plus text for a door hanger to leave if they are not home.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Open house at: [PROPERTY_ADDRESS]
- Date/time: [OH_DATE], [OH_TIME]
- Neighborhood: [NEIGHBORHOOD]

Door-knock script requirements:
- Under 30 seconds when spoken aloud
- Introduce myself, mention the open house, invite them or anyone they know
- Friendly, not pushy
- End with handing them a flyer or door hanger

Door-hanger text requirements:
- Under 50 words
- Address, date, time, my contact info
- "You're invited" framing
```

### Example Door-Knock Script

"Hi, I am Sarah Martinez with Compass. I am hosting an open house this Saturday from 1 to 4 at 4218 Ridgeview Trail — just down the street. You are welcome to stop by and take a look, and if you know anyone who has been thinking about moving to the neighborhood, bring them along. Here is a flyer with all the details. Have a great day."

### Example Door-Hanger Text

**YOU'RE INVITED**

Open House — This Saturday, 1-4 PM
4218 Ridgeview Trail, Westlake Hills

3 bed | 2.5 bath | $485,000

Stop by or share with a friend who is looking.

Sarah Martinez | Compass | (512) 555-0147

---

## Phase 2: Lead Capture Follow-Up Sequences

### Prompt 5: Open House Sign-In Follow-Up — Same Day

**Timing:** Send within 2 hours of the open house ending.

```
Write a follow-up email to someone who attended my open house today.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Visitor name: [VISITOR_NAME]
- Property: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- What they seemed interested in or mentioned: [VISITOR_NOTES] (e.g., "asked about the backyard," "said they're pre-approved," "just browsing," "loved the kitchen")
- Open house date: [OH_DATE]

Requirements:
- Subject line included
- Thank them for coming
- Reference something specific about their visit if notes are available
- If they were browsing, offer to help with their search more broadly
- If they seemed interested, suggest a private second showing
- Keep it under 100 words
- Tone: warm, personal, prompt
```

---

### Prompt 6: Open House Follow-Up — Day 3 (Value Add)

**Timing:** Morning of Day 3.

```
Write a Day 3 follow-up to an open house visitor who has not responded to my initial email.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Visitor name: [VISITOR_NAME]
- Property they visited: [PROPERTY_ADDRESS]
- Their apparent interest level: [INTEREST_LEVEL] (hot, warm, cool)
- Value I can offer: [VALUE_OFFER] (e.g., "similar listings in the area," "a neighborhood guide," "a mortgage rate comparison," "recent sales data for the street")

Requirements:
- Subject line included
- Do NOT mention they did not respond — no guilt
- Lead with the value offer
- If warm/hot: suggest a second showing or offer conversation
- If cool: keep it light, offer to be a resource
- Under 80 words
- Tone: helpful, low-pressure
```

---

### Prompt 7: Open House Follow-Up — Day 7 (Status Update)

**Timing:** Morning of Day 7.

```
Write a one-week follow-up to an open house visitor providing a status update on the property.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Visitor name: [VISITOR_NAME]
- Property: [PROPERTY_ADDRESS]
- Current status: [STATUS] (e.g., "still available, 2 offers expected this week," "under contract," "price adjusted," "still available, no offers yet")

Requirements:
- Subject line included
- Share the status update as the reason for reaching out
- If still available: create gentle urgency or invite them back
- If under contract: use it as social proof and offer to help them find something similar
- If price adjusted: frame it as an opportunity
- Under 80 words
- Tone: informative, helpful, no pressure
```

### Example Output (Still Available)

**Subject:** Update on 4218 Ridgeview Trail

Hi Michael,

Quick update on the home you visited last Saturday — it is still available, but I have two buyer agents who mentioned their clients are planning to make offers this week.

If you have been thinking about it, now would be a good time to take a second look or start a conversation about putting together an offer.

Happy to discuss whenever works for you.

Sarah Martinez
Compass | (512) 555-0147

### Example Output (Under Contract)

**Subject:** Update on 4218 Ridgeview Trail — and what's next

Hi Michael,

Wanted to let you know the home on Ridgeview Trail went under contract over the weekend. It moved fast, which tells you something about the demand in Westlake Hills right now.

If you are still looking, I have 3 similar properties in the area that just hit the market. Want me to send them your way?

Sarah Martinez
Compass | (512) 555-0147

---

## Phase 3: Post-Showing Report Generation

### Prompt 8: Open House Summary Report (For Your Seller Client)

```
Generate a professional open house summary report for my seller client.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Client (seller): [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- Open house date: [OH_DATE]
- Time: [OH_TIME]
- Total visitors: [VISITOR_COUNT]
- Sign-in data: [SIGN_IN_SUMMARY] (e.g., "12 groups signed in: 6 buyers with agents, 3 unrepresented buyers, 2 neighbors, 1 investor")
- Common positive feedback: [POSITIVE_FEEDBACK]
- Common concerns or objections: [CONCERNS]
- Serious interest: [SERIOUS_LEADS] (e.g., "2 visitors requested private second showings, 1 mentioned making an offer")
- Marketing recap: [MARKETING_DONE] (e.g., "posted on MLS, Zillow, 3 social media posts, email blast to 400 contacts, 50 door hangers in the neighborhood")

Requirements:
- Professional report format with sections: Summary, Attendance, Feedback, Leads, Marketing, Recommendations
- Be honest about feedback — sellers need to hear the truth
- If concerns came up, address how we can respond (e.g., "several visitors mentioned the carpet — we could offer a carpet credit or replace before the next showing")
- Include specific next steps and recommendations
- Length: 200-300 words
- Tone: professional, thorough, transparent
```

### Example Output

## Open House Report: 4218 Ridgeview Trail

**Date:** Saturday, March 28, 2026 | 1:00 - 4:00 PM
**Prepared by:** Sarah Martinez, Compass

### Summary

Strong turnout with 12 groups through the door over 3 hours. The home showed well and generated meaningful interest.

### Attendance

| Category | Count |
|----------|-------|
| Buyers with agents | 6 |
| Unrepresented buyers | 3 |
| Neighbors | 2 |
| Investors | 1 |
| **Total** | **12** |

### Feedback Highlights

**What people loved:**
- Kitchen renovation — mentioned by nearly every visitor
- Natural light in the main living area
- Backyard privacy and mature trees
- Neighborhood and school district

**Concerns raised:**
- Two visitors mentioned the carpet in the bedrooms looks dated
- One buyer felt the primary closet was small compared to other homes at this price

### Active Leads

- Two visitors requested private second showings (scheduled for Tuesday and Thursday)
- One buyer mentioned to their agent they plan to make an offer early this week

### Marketing Recap

MLS listing active, syndicated to Zillow/Realtor.com. Three social media posts (combined 2,400 impressions). Email blast to 400 contacts (38% open rate). 50 door hangers distributed in the neighborhood.

### Recommendations

1. **Carpet:** Consider offering a $2,500 carpet allowance or replacing the bedroom carpet before the next showing. This was the most common objection.
2. **Primary closet:** We can add a closet organizer insert for under $500 — it changes the perception significantly.
3. **Momentum:** With 2 second showings and a potential offer, I recommend holding on pricing for now and reassessing at end of week.

I will keep you updated as the second showings happen and if an offer comes in.

---

## Phase 4: Neighborhood Highlight Scripts

### Prompt 9: Neighborhood Talking Points for Open House Day

```
Generate a set of neighborhood talking points I can use during an open house when visitors ask "What's the neighborhood like?"

Neighborhood: [NEIGHBORHOOD]
City: [CITY]

Neighborhood data:
- School district and rating: [SCHOOL_INFO]
- Distance to downtown: [DOWNTOWN_DISTANCE]
- Nearby amenities: [AMENITIES] (parks, restaurants, grocery, gym, etc.)
- Walkability/transit: [WALKABILITY]
- Safety/crime context: [SAFETY_NOTES]
- Community vibe: [COMMUNITY_VIBE] (e.g., "family-friendly, block parties, active HOA" or "young professionals, food trucks, live music")
- Recent development or news: [RECENT_NEWS]
- Average home values: [HOME_VALUES]

Requirements:
- Write as conversational talking points — things I can say naturally, not read from a script
- Organize into categories: Schools, Lifestyle, Location, Community, Value
- Include 2-3 talking points per category
- Each point should be 1-2 sentences
- Include one "insider tip" that shows deep local knowledge
- Comply with Fair Housing — describe the area, not the people
- Tone: enthusiastic, knowledgeable, natural
```

### Example Output

**Schools:**
- "This is Eanes ISD, which is consistently ranked in the top 5 districts in Texas. Westlake High School has a 97% college enrollment rate."
- "The elementary school is less than a mile from here — a lot of families in the neighborhood walk."

**Lifestyle:**
- "You have got the Barton Creek Greenbelt about 5 minutes away for hiking and swimming. It is one of the best outdoor amenities in Austin."
- "For groceries, there is an H-E-B on Bee Cave Road that is about 3 minutes away, and a Whole Foods a little further up the road."
- "Dining: if you head down to the Davenport Village shopping center, there are some great spots. It is kind of the unofficial neighborhood hangout."

**Location:**
- "You are 10 minutes from downtown Austin with no highway required — just straight down Bee Cave Road or MoPac."
- "The airport is about 25 minutes. Not the closest, but you avoid the I-35 traffic entirely from this side of town."

**Community:**
- "This neighborhood has an active community association that does seasonal events. The Fourth of July block party is a big deal around here."
- "It is quiet. You get the privacy of the trees and larger lots without feeling isolated."

**Value:**
- "Homes in Westlake Hills have appreciated an average of 5-7% annually over the last 5 years. It holds value well even in softer markets because of the school district."
- "Insider tip: properties on the south side of Ridgeview tend to have better hill country views, which commands about a 5% premium when they sell."

---

### Prompt 10: Open House Welcome Script

```
Write a brief welcome script I can use to greet visitors as they walk into the open house.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Property: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Top 3 highlights to point out: [TOP_HIGHLIGHTS]
- Any key details I want every visitor to know: [KEY_DETAILS] (e.g., "offers are due by Tuesday," "seller is flexible on closing date," "the backyard is the hidden gem")

Requirements:
- Under 30 seconds spoken aloud
- Warm, welcoming, not salesy
- Point them toward the highlights so they know what to look for
- Invite them to sign in
- End with "I'm here if you have any questions"
- Natural and conversational — not robotic
```

### Example Output

"Welcome, come on in. I am Sarah Martinez with Compass. Thanks for stopping by.

Make yourself at home and take your time looking around. A few things I want to make sure you do not miss: the kitchen was fully remodeled last year and it is really the centerpiece of the home. The backyard is worth walking out to — it is a quarter acre with great tree coverage and you really feel the privacy. And check out the ceilings in the living room — they are 10 feet and let in a ton of natural light.

If you would, please sign in at the table by the door so I can send you the property details and any updates.

I am right here if you have questions. Enjoy."

---

## Open House Preparation Checklist

Use this prompt to generate a customized prep checklist before every open house:

```
Create an open house preparation checklist for this property.

Property: [PROPERTY_ADDRESS]
Property type: [PROPERTY_TYPE]
Condition: [CONDITION_NOTES] (e.g., "staged, shows beautifully" or "occupied, needs tidying" or "vacant, might echo")
Known issues to manage: [ISSUES] (e.g., "street parking is limited," "dog in the home, needs to be removed," "backyard is under construction")
Season/weather: [SEASON_WEATHER]

Requirements:
- Organize by timeline: 1 week before, 1 day before, morning of, during, after
- Include marketing tasks, property prep, supplies to bring, and follow-up tasks
- Be specific to this property's situation
- Keep each item to one line
- Tone: practical, actionable
```

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
