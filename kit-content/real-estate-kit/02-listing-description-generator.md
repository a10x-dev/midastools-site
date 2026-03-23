# Midas Tools — Real Estate AI Kit

## 02: Listing Description Generator

AI prompts that produce ready-to-publish listing descriptions for MLS, social media, and email campaigns. Fill in the variables, paste into your AI tool, and get polished copy in seconds.

---

## Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| [PROPERTY_ADDRESS] | Full address | 4218 Ridgeview Trail, Austin TX 78731 |
| [PROPERTY_PRICE] | List price | $485,000 |
| [PROPERTY_TYPE] | Type of home | Single-family home |
| [BEDS] | Bedrooms | 3 |
| [BATHS] | Bathrooms (full/half) | 2 full, 1 half |
| [SQFT] | Square footage | 1,850 |
| [LOT_SIZE] | Lot size | 0.28 acres |
| [YEAR_BUILT] | Year built | 2018 |
| [STYLE] | Architectural style | Modern farmhouse |
| [KEY_FEATURES] | Top 5-7 features, comma-separated | quartz countertops, 10-ft ceilings, walk-in pantry, covered patio, smart home system |
| [NEIGHBORHOOD] | Neighborhood name | Westlake Hills |
| [NEIGHBORHOOD_HIGHLIGHTS] | Area selling points | top-rated Eanes ISD, 10 min to downtown, hike & bike trails |
| [RECENT_UPDATES] | Upgrades or renovations | new roof 2024, kitchen remodel 2023 |
| [PARKING] | Garage/parking details | attached 2-car garage |
| [HOA] | HOA info if applicable | $150/month, covers landscaping and pool |
| [AGENT_NAME] | Your name | Sarah Martinez |
| [BROKERAGE] | Your brokerage | Compass |
| [PHONE] | Your phone | (512) 555-0147 |

---

## Prompt 1: MLS Listing Description — Luxury Property

### The Prompt

```
Write an MLS listing description for a luxury property.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Type: [PROPERTY_TYPE]
- Beds/Baths: [BEDS] bed / [BATHS] bath
- Square feet: [SQFT]
- Lot size: [LOT_SIZE]
- Year built: [YEAR_BUILT]
- Style: [STYLE]
- Key features: [KEY_FEATURES]
- Recent updates: [RECENT_UPDATES]
- Parking: [PARKING]
- Neighborhood: [NEIGHBORHOOD]
- Neighborhood highlights: [NEIGHBORHOOD_HIGHLIGHTS]
- HOA: [HOA]

Requirements:
- Open with an attention-grabbing first sentence that sells the lifestyle, not just the specs
- Mention all key features naturally woven into the description
- Highlight the neighborhood and location advantages
- Include recent updates to justify the price point
- Use vivid but not flowery language — sophisticated buyers see through fluff
- End with a call to action
- Length: 150-250 words (typical MLS character limits)
- Do NOT use all caps, excessive exclamation marks, or the words "must see," "won't last," or "dream home"
- Comply with Fair Housing guidelines — no references to types of occupants
```

### Example Output

Refined modern farmhouse living in the heart of Westlake Hills. This 2018-built home delivers 1,850 square feet of thoughtfully designed space across 3 bedrooms and 2.5 bathrooms, set on a private 0.28-acre lot.

The main level flows from a light-filled living area with 10-foot ceilings into a fully remodeled kitchen (2023) featuring quartz countertops, custom cabinetry, and a walk-in pantry. A covered patio extends the entertaining space to the backyard, surrounded by mature live oaks.

The primary suite includes a spa-inspired bathroom with dual vanities and a frameless glass shower. Two additional bedrooms share a well-appointed full bath. A smart home system controls lighting, climate, and security from your phone.

New roof installed in 2024. Attached 2-car garage with epoxy floors. HOA of $150/month covers landscaping and community pool access.

Located in top-rated Eanes ISD, 10 minutes to downtown Austin, and steps from hike-and-bike trails. This is Westlake living at its best.

Schedule a private showing today.

---

## Prompt 2: MLS Listing Description — Starter Home / First-Time Buyer

### The Prompt

```
Write an MLS listing description for a home that appeals to first-time buyers.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Type: [PROPERTY_TYPE]
- Beds/Baths: [BEDS] bed / [BATHS] bath
- Square feet: [SQFT]
- Lot size: [LOT_SIZE]
- Year built: [YEAR_BUILT]
- Key features: [KEY_FEATURES]
- Recent updates: [RECENT_UPDATES]
- Parking: [PARKING]
- Neighborhood: [NEIGHBORHOOD]
- Neighborhood highlights: [NEIGHBORHOOD_HIGHLIGHTS]
- Monthly cost estimate (mortgage + HOA + taxes): [MONTHLY_ESTIMATE]

Requirements:
- Emphasize value and affordability without sounding cheap
- Highlight move-in readiness — first-time buyers want low hassle
- Mention recent updates to ease concerns about maintenance
- Reference neighborhood amenities and lifestyle
- If monthly estimate is included, weave it in naturally (e.g., "with estimated monthly costs comparable to rent in the area")
- Length: 120-200 words
- Tone: welcoming, straightforward, encouraging
- No Fair Housing violations
```

### Example Output

Your first home is waiting. This well-maintained 3-bed, 2-bath in Cedar Park offers 1,400 square feet of move-in-ready living at a price point that works — with estimated monthly costs comparable to rent in the area.

Recent updates include fresh interior paint (2025), new water heater, and updated light fixtures throughout. The open-concept kitchen and living area makes the space feel larger than the square footage suggests, with vinyl plank flooring that is both durable and easy to maintain.

The backyard is fully fenced and low-maintenance — perfect for a first garden, a dog, or weekend grilling. Attached 1-car garage with additional driveway parking.

Located in Cedar Park with easy access to 183, H-E-B, and Brushy Creek Trail. Leander ISD schools.

Great opportunity to stop renting and start building equity. Schedule a showing to see it in person.

---

## Prompt 3: MLS Listing Description — Investment Property

### The Prompt

```
Write an MLS listing description for an investment property.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Type: [PROPERTY_TYPE] (e.g., duplex, single-family, multi-unit)
- Beds/Baths: [BEDS] bed / [BATHS] bath (per unit if multi-unit)
- Number of units: [UNITS]
- Square feet: [SQFT]
- Current rental income: [RENTAL_INCOME] per month
- Occupancy: [OCCUPANCY] (e.g., fully leased, one unit vacant)
- Cap rate: [CAP_RATE]
- Year built: [YEAR_BUILT]
- Key features: [KEY_FEATURES]
- Recent updates: [RECENT_UPDATES]
- Neighborhood: [NEIGHBORHOOD]
- Proximity to demand drivers: [DEMAND_DRIVERS] (e.g., university, hospital, downtown, military base)

Requirements:
- Lead with the investment thesis — why this is a smart buy
- Include income and cap rate prominently
- Mention occupancy status and tenant stability if applicable
- Highlight demand drivers that support rental demand
- Note any value-add potential (rent increases, renovations, additional units)
- Length: 150-225 words
- Tone: data-driven, confident, investor-focused
- No Fair Housing violations
```

### Example Output

Strong cash-flowing duplex in East Austin's high-demand 78702 corridor. Currently generating $3,400/month in rental income with both units fully leased through Q1 2027. Cap rate of 6.2% at the asking price.

Each unit offers 2 bedrooms and 1 bathroom across 900 square feet with separate entrances, private yards, and individual utility meters — minimizing owner expenses. Recent updates include a new roof (2024), updated electrical panels, and tankless water heaters in both units.

Located three blocks from the MetroRail station and one mile from downtown Austin, this property sits in one of the city's fastest-appreciating zip codes. The tenant profile is strong: both units are leased to long-term renters with 12+ month histories and on-time payment records.

Value-add opportunity: current rents are approximately 8% below market rate for the area. A modest kitchen refresh in each unit could support a rent increase at lease renewal, pushing the cap rate above 7%.

Financials and lease documents available to qualified buyers upon request. Schedule a showing today.

---

## Prompt 4: Instagram Property Post

### The Prompt

```
Write an Instagram post for a property listing.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] bed / [BATHS] bath
- Square feet: [SQFT]
- Top 3 features: [TOP_THREE_FEATURES]
- Neighborhood: [NEIGHBORHOOD]
- One lifestyle angle: [LIFESTYLE_ANGLE] (e.g., "perfect for entertaining," "walkable to everything," "your private retreat")

Requirements:
- Hook in the first line (this shows above the "more" fold)
- Keep the caption under 100 words
- Use line breaks for readability
- Include property specs in a clean, scannable format
- Include a call to action (DM, link in bio, or comment)
- Suggest 5-8 relevant hashtags
- Tone: energetic, visual, scroll-stopping
- Do NOT use the words "stunning," "gorgeous," or "dream home"
- Agent: [AGENT_NAME] | [BROKERAGE]
```

### Example Output

This kitchen alone is worth the showing.

Just listed in Westlake Hills — 3 bed, 2.5 bath modern farmhouse with the kind of details that hit different in person.

Highlights:
- Fully remodeled kitchen with quartz counters
- 10-ft ceilings and walls of natural light
- Covered patio on a private quarter-acre lot

$485,000 | 1,850 sqft
Westlake Hills, Austin TX

DM me "RIDGEVIEW" for details or to book a private showing.

Sarah Martinez | Compass

#AustinRealEstate #WestlakeHills #JustListed #AustinHomes #ModernFarmhouse #AustinRealtor #NewListing

---

## Prompt 5: Facebook Property Post

### The Prompt

```
Write a Facebook post for a property listing.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] bed / [BATHS] bath
- Square feet: [SQFT]
- Key features: [KEY_FEATURES]
- Neighborhood: [NEIGHBORHOOD]
- Neighborhood highlights: [NEIGHBORHOOD_HIGHLIGHTS]
- Open house date/time (if applicable): [OPEN_HOUSE_INFO]

Requirements:
- Facebook allows longer form — use 100-150 words
- Open with a hook or question that stops the scroll
- Include property details in a clear, easy-to-read format
- Mention the neighborhood and why people love living there
- If open house info is provided, make it prominent
- End with a clear call to action
- Tone: conversational, community-oriented, informative
- Agent: [AGENT_NAME] | [BROKERAGE] | [PHONE]
```

### Example Output

What would you do with a quarter-acre backyard and a kitchen like this?

Just listed in Westlake Hills and I am excited about this one.

4218 Ridgeview Trail
$485,000 | 3 bed | 2.5 bath | 1,850 sqft

The kitchen was fully remodeled in 2023 — quartz countertops, custom cabinets, walk-in pantry. The covered patio out back is perfect for fall evenings, and the lot backs up to mature live oaks for real privacy.

This is Westlake Hills living: Eanes ISD, 10 minutes to downtown, trails right out your door.

OPEN HOUSE this Saturday, 1-4 PM. Come see it for yourself.

Can't make it? Send me a message and I will set up a private showing.

Sarah Martinez | Compass | (512) 555-0147

---

## Prompt 6: Email Blast Description

### The Prompt

```
Write a property description for an email marketing blast.

Property details:
- Address: [PROPERTY_ADDRESS]
- Price: [PROPERTY_PRICE]
- Beds/Baths: [BEDS] bed / [BATHS] bath
- Square feet: [SQFT]
- Key features: [KEY_FEATURES]
- Neighborhood: [NEIGHBORHOOD]
- Neighborhood highlights: [NEIGHBORHOOD_HIGHLIGHTS]
- Target audience: [AUDIENCE] (e.g., "my buyer list," "investors," "move-up buyers")

Requirements:
- Email subject line included
- Preview text (the text that shows after the subject line in inbox) included
- Description should be 75-125 words — people skim emails
- Use short paragraphs and bullet points for scannability
- Include a clear, single call to action (schedule a showing, reply to this email, etc.)
- Sign off with agent details: [AGENT_NAME] | [BROKERAGE] | [PHONE] | [EMAIL]
- Tone: direct, informative, action-oriented
```

### Example Output

**Subject:** Just Listed in Westlake Hills — $485K

**Preview text:** 3 bed modern farmhouse, remodeled kitchen, quarter-acre lot

---

New on the market and worth a look.

**4218 Ridgeview Trail, Austin TX 78731**
$485,000 | 3 bed | 2.5 bath | 1,850 sqft

- Kitchen remodeled in 2023 — quartz, custom cabinets, walk-in pantry
- 10-foot ceilings, hardwood floors, smart home system
- Covered patio on a private 0.28-acre lot
- New roof (2024), attached 2-car garage
- Eanes ISD | 10 min to downtown | hike & bike trails nearby

This one checks a lot of boxes. Reply to this email or call me to schedule a showing.

Sarah Martinez | Compass
(512) 555-0147 | sarah@compass.com

---

## Prompt 7: Batch Variations

Use this prompt after generating any description above to quickly create variations:

### The Prompt

```
Take the listing description above and create 3 variations:

1. A shorter version (under 75 words) for text message or quick social post
2. A version with a different hook/opening line
3. A version targeting a different buyer profile: [ALTERNATE_BUYER] (e.g., "empty nesters downsizing," "remote workers," "families with young kids")

Keep the property details accurate. Adjust tone and emphasis for each version.
```

---

## Pro Tips

1. **Generate multiple versions at once.** Ask for "3 variations with different opening hooks" to find the one that feels right.

2. **Feed the AI real MLS data.** The more accurate details you provide, the less editing you need to do afterward.

3. **Avoid banned MLS words.** Many MLS systems flag words like "master bedroom." Use "primary bedroom" or "primary suite" instead. Ask the AI: "Rewrite this using MLS-compliant terminology for [YOUR_MLS]."

4. **Seasonal angles.** Add a variable like [SEASON] = "fall" and ask the AI to weave in seasonal appeal. "Imagine holiday dinners in this dining room" or "The covered patio is built for summer evenings."

5. **Translate for your market.** Ask the AI: "Rewrite this for a [SPANISH/MANDARIN/VIETNAMESE]-speaking audience while keeping it professional and natural."

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
