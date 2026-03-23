# Midas Tools — Real Estate AI Kit

## 04: Market Analysis Prompts

AI prompts for generating neighborhood market summaries, comparable sales analyses, investment ROI breakdowns, and client-ready market trend reports. These prompts turn raw data into polished, professional deliverables.

**Important:** AI tools do not have access to live MLS data. You will need to provide the data as input. These prompts help you structure, analyze, and present that data — not source it.

---

## Variables Reference

| Variable | Description |
|----------|-------------|
| [NEIGHBORHOOD] | Target area or subdivision |
| [CITY] | City name |
| [DATE_RANGE] | Analysis period (e.g., "last 6 months") |
| [SUBJECT_PROPERTY] | The property being analyzed |
| [COMP_DATA] | Comparable sales data you paste in |
| [MARKET_STATS] | Raw market statistics from MLS |
| [CLIENT_NAME] | Client's name for personalized reports |
| [AGENT_NAME] | Your name |
| [BROKERAGE] | Your brokerage |

---

## Prompt 1: Neighborhood Market Summary

**Use case:** Send to leads, include in listing presentations, or post on social media to establish local expertise.

### The Prompt

```
Create a professional neighborhood market summary using the data I provide.

Neighborhood: [NEIGHBORHOOD]
City: [CITY]
Date range: [DATE_RANGE]

Market data:
[MARKET_STATS]

(Paste your raw stats here. Example format:
- Total homes sold: 47
- Median sale price: $472,000
- Average price per sqft: $267
- Average days on market: 14
- List-to-sale price ratio: 98.7%
- Inventory: 23 active listings
- Months of supply: 1.4
- Year-over-year median price change: +6.2%
- Most common home type: 3-bed / 2-bath single family
- Price range of sales: $325,000 - $680,000)

Requirements:
- Write a narrative summary, not just a data dump
- Open with a one-sentence market characterization (buyer's market, seller's market, balanced)
- Organize into sections: Overview, Pricing Trends, Market Speed, Inventory, Outlook
- Include the actual numbers but explain what they mean for buyers and sellers
- End with a brief "what this means for you" section with separate bullet points for buyers and sellers
- Length: 250-350 words
- Tone: authoritative, clear, accessible to non-experts
- Prepared by: [AGENT_NAME] | [BROKERAGE]
```

### Example Output

## Westlake Hills Market Summary — Q1 2026

**Westlake Hills remains a strong seller's market heading into spring 2026.**

### Overview

Over the past 6 months, 47 homes have sold in Westlake Hills with a median sale price of $472,000. The most common profile is a 3-bed, 2-bath single-family home, with sales ranging from $325,000 to $680,000.

### Pricing Trends

Median prices are up 6.2% year over year, continuing the steady appreciation trend this neighborhood has seen since 2023. Sellers are capturing 98.7% of their list price on average, which indicates that pricing is generally accurate and buyers are paying close to asking.

At $267 per square foot, Westlake Hills remains more affordable than neighboring Barton Creek ($312/sqft) but commands a premium over Cedar Park ($198/sqft), reflecting the Eanes ISD premium.

### Market Speed

Homes are selling in an average of 14 days on market. Well-priced, updated homes in the $400-$500K range are moving even faster — several have gone under contract within the first week.

### Inventory

With 23 active listings and a 1.4-month supply, inventory is tight. A balanced market is typically 4-6 months of supply, so the current conditions heavily favor sellers.

### Outlook

Expect continued appreciation through spring, traditionally the strongest selling season. If mortgage rates hold or dip, buyer activity will likely increase further.

### What This Means for You

**Sellers:**
- You have leverage. Well-priced homes are moving quickly with strong offers.
- Now through May is the optimal window to list and capture peak demand.

**Buyers:**
- Be prepared to act quickly. Homes in this area do not sit.
- Get pre-approved before you tour so you can submit an offer the same day if needed.

*Prepared by Sarah Martinez | Compass*

---

## Prompt 2: Comparable Sales Analysis (CMA Helper)

**Use case:** Generate the narrative portion of a CMA presentation for listing appointments or buyer consultations.

### The Prompt

```
Analyze these comparable sales and write a professional CMA narrative for a client presentation.

Subject property:
- Address: [SUBJECT_PROPERTY]
- Beds/Baths: [SUBJECT_BEDS] / [SUBJECT_BATHS]
- Square feet: [SUBJECT_SQFT]
- Lot size: [SUBJECT_LOT]
- Year built: [SUBJECT_YEAR]
- Condition: [SUBJECT_CONDITION] (e.g., "updated kitchen and baths," "original condition," "fully renovated")
- Unique features: [SUBJECT_FEATURES]

Comparable sales (paste 3-5 comps):
[COMP_DATA]

(Example format for each comp:
Comp 1: 4310 Oak Hill Dr — Sold $468,000 — 3/2 — 1,780 sqft — 12 DOM — updated kitchen, smaller lot
Comp 2: 4502 Ridge Rd — Sold $495,000 — 3/2.5 — 1,920 sqft — 8 DOM — full reno, pool
Comp 3: 4115 Cedar Ln — Sold $445,000 — 3/2 — 1,700 sqft — 22 DOM — original condition, large lot)

Requirements:
- Analyze each comp relative to the subject property
- Note adjustments: what makes each comp higher or lower than the subject (size, condition, features, lot)
- Provide a recommended price range based on the analysis
- Explain the reasoning clearly so the client understands how you arrived at the range
- Include a section on market conditions that support the recommendation
- Length: 200-300 words
- Tone: analytical, objective, confidence-inspiring
- Do NOT include specific dollar adjustments per feature (that is appraiser territory) — keep it directional (e.g., "supports a higher price due to...")
```

---

## Prompt 3: Investment Property ROI Analysis

**Use case:** Help investor clients evaluate a potential purchase, or analyze your own investment opportunity.

### The Prompt

```
Create an investment property ROI analysis using the data I provide.

Property details:
- Address: [PROPERTY_ADDRESS]
- Purchase price: [PURCHASE_PRICE]
- Down payment: [DOWN_PAYMENT] (amount or percentage)
- Estimated mortgage rate: [RATE]
- Loan term: [TERM] years
- Monthly rent (expected or current): [MONTHLY_RENT]
- Property taxes (annual): [TAXES]
- Insurance (annual): [INSURANCE]
- HOA (monthly, if any): [HOA]
- Estimated maintenance (annual): [MAINTENANCE]
- Property management fee (if any): [MGMT_FEE] (percentage of rent or flat fee)
- Vacancy rate assumption: [VACANCY_RATE] (e.g., 5%)
- Expected annual appreciation: [APPRECIATION]

Requirements:
- Calculate and present:
  1. Monthly cash flow (income minus all expenses)
  2. Annual cash flow
  3. Cash-on-cash return (annual cash flow / total cash invested)
  4. Cap rate (NOI / purchase price)
  5. 5-year equity projection (principal paydown + appreciation)
  6. Total 5-year ROI including cash flow, equity, and appreciation
- Show the math clearly so the investor can verify
- Include a brief narrative summary: is this a strong deal, marginal, or a pass?
- Flag any risks or assumptions the investor should validate
- Length: 250-350 words plus the calculations
- Tone: analytical, investor-focused, data-driven
```

### Example Output

## Investment Analysis: 1824 Elm Street, Austin TX

### Income

| Item | Monthly | Annual |
|------|---------|--------|
| Gross Rent | $2,200 | $26,400 |
| Less Vacancy (5%) | ($110) | ($1,320) |
| **Effective Gross Income** | **$2,090** | **$25,080** |

### Expenses

| Item | Monthly | Annual |
|------|---------|--------|
| Mortgage (P&I) | $1,287 | $15,444 |
| Property Taxes | $458 | $5,500 |
| Insurance | $125 | $1,500 |
| Maintenance | $167 | $2,000 |
| Property Management (8%) | $167 | $2,006 |
| **Total Expenses** | **$2,204** | **$26,450** |

### Cash Flow

| Metric | Value |
|--------|-------|
| Monthly Cash Flow | ($114) |
| Annual Cash Flow | ($1,370) |

### Returns

| Metric | Value |
|--------|-------|
| Cap Rate | 5.3% |
| Cash-on-Cash Return | -1.8% (negative due to cash flow) |
| Year 1 Principal Paydown | $5,200 |
| Year 1 Appreciation (4%) | $13,200 |
| **Year 1 Total Return** | **$17,030** |
| **5-Year Projected Equity Gain** | **$108,400** |
| **5-Year Total ROI** | **142%** on initial $76,000 investment |

### Summary

This property is cash-flow negative by $114/month, which means it does not pay for itself from rent alone. However, the investment thesis here is appreciation-driven. At 4% annual appreciation in East Austin, the 5-year equity gain (including principal paydown) is substantial.

**Verdict:** This is an appreciation play, not a cash-flow play. Suitable for investors who can absorb the monthly shortfall and are betting on Austin's continued growth trajectory.

**Risks to validate:** Rent assumption ($2,200) should be confirmed against current comps. Property tax reassessment after purchase could increase expenses. Maintenance on an older home may exceed the $2,000 estimate.

---

## Prompt 4: Market Trend Report for Clients

**Use case:** Monthly or quarterly email to your database positioning you as the market expert.

### The Prompt

```
Write a client-facing market trend report that I can send to my entire contact database.

Market: [CITY] / [NEIGHBORHOOD] (or metro area)
Period: [DATE_RANGE]
Audience: Mix of current homeowners, prospective buyers, past clients, and sphere of influence

Market data to include:
[MARKET_STATS]

(Paste key stats: median price, price change YoY, DOM, inventory, mortgage rate context, any notable trends)

Additional context:
[ADDITIONAL_CONTEXT]

(Optional: new developments, zoning changes, major employer news, seasonal patterns, national trends affecting local market)

Requirements:
- Title the report (e.g., "Austin Real Estate Market Update — March 2026")
- Write in a newsletter style — informative but engaging
- Structure: Opening summary (2-3 sentences), Key Stats (bullet points), What This Means (narrative), Looking Ahead (brief forecast)
- Include a "Bottom Line" section with one sentence for buyers and one for sellers
- Keep it under 300 words — people will not read a long report
- Tone: expert but accessible, like a smart friend who happens to be an agent
- Sign off: [AGENT_NAME] | [BROKERAGE] | [PHONE] | [EMAIL]
```

---

## Prompt 5: Neighborhood Comparison for Buyers

**Use case:** Help buyers decide between two neighborhoods they are considering.

### The Prompt

```
Create a side-by-side neighborhood comparison for a buyer client.

Client: [CLIENT_NAME]
Option A: [NEIGHBORHOOD_A]
Option B: [NEIGHBORHOOD_B]

Data for Neighborhood A:
[NEIGHBORHOOD_A_DATA]
(Median price, price/sqft, school district and rating, commute time to [WORKPLACE], walkability, key amenities, typical home age, HOA situation, crime stats if available)

Data for Neighborhood B:
[NEIGHBORHOOD_B_DATA]
(Same categories)

Client priorities (ranked):
[CLIENT_PRIORITIES]
(e.g., "1. School quality, 2. Commute under 20 min, 3. Budget under $500K, 4. Newer construction")

Requirements:
- Present as a clear comparison table followed by a brief narrative
- Score each neighborhood against the client's specific priorities
- Provide an honest recommendation with reasoning
- Note any trade-offs the client should consider
- Length: 200-275 words
- Tone: objective, consultative, tailored to this specific client
```

---

## Prompt 6: Quick Market Stats for Social Media

**Use case:** Generate a quick market stat post for social media.

### The Prompt

```
Turn these market stats into a punchy social media post.

Platform: [PLATFORM] (Instagram, Facebook, LinkedIn, etc.)
Market: [MARKET_AREA]
Stats: [2-3 KEY_STATS]

Requirements:
- Hook in the first line
- Present stats in an easy-to-digest format
- Add brief context — what do these numbers actually mean for real people
- End with a question or call to action to drive engagement
- Include 3-5 relevant hashtags
- Keep it under 80 words
- Tone: informative, conversational, scroll-stopping
- Credit: [AGENT_NAME] | [BROKERAGE]
```

### Example Output

Austin homes are selling 3 days faster than last month.

Here is what the numbers look like in March:

- Median price: $472K (up 6.2% YoY)
- Avg days on market: 14
- Months of supply: 1.4

Translation: If you see a home you like, do not sleep on it. And if you are thinking about selling, the window is wide open.

What are you seeing in your neighborhood? Drop it in the comments.

Sarah Martinez | Compass

#AustinRealEstate #MarketUpdate #AustinHousing #RealEstateData #AustinAgent

---

## How to Source the Data for These Prompts

These prompts require you to bring the data. Here is where to find it:

| Data Type | Sources |
|-----------|---------|
| Sold comps | Your MLS (HAR, ACTRIS, Bright, etc.) |
| Market stats | MLS market reports, Altos Research, local board reports |
| School ratings | GreatSchools.org, Niche.com |
| Crime stats | CrimeMapping.com, local PD sites |
| Mortgage rates | Freddie Mac PMMS, your preferred lender |
| Rental comps | Rentometer, Zillow Rental Manager, your property manager |
| Appreciation data | FHFA HPI, Zillow Home Value Index |

**Workflow tip:** Save a template in your notes app with the variable slots pre-filled. When you pull new data from your MLS, just paste it into the template and feed it to the AI. Takes 2 minutes.

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
