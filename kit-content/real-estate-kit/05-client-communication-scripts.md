# Midas Tools — Real Estate AI Kit

## 05: Client Communication Scripts

AI-powered scripts for the conversations that matter most — price reductions, negotiations, commission discussions, and difficult client situations. These prompts generate professional, empathetic scripts you can adapt to your style and deliver with confidence.

---

## Variables Reference

| Variable | Description |
|----------|-------------|
| [AGENT_NAME] | Your name |
| [CLIENT_NAME] | Client's name |
| [PROPERTY_ADDRESS] | Property address |
| [CURRENT_PRICE] | Current listing price |
| [SUGGESTED_PRICE] | Recommended new price |
| [DAYS_ON_MARKET] | Days the property has been listed |
| [SHOWING_COUNT] | Number of showings to date |
| [OFFER_AMOUNT] | Offer received |
| [MARKET_DATA] | Supporting market data |

---

## Script 1: Price Reduction Conversation

**Situation:** Your listing has been sitting and you need to recommend a price reduction to your seller.

### The Prompt

```
Write a script for a phone call or in-person meeting where I recommend a price reduction to my seller client.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- Current price: [CURRENT_PRICE]
- Suggested new price: [SUGGESTED_PRICE]
- Days on market: [DAYS_ON_MARKET]
- Number of showings: [SHOWING_COUNT]
- Feedback from showings: [SHOWING_FEEDBACK] (e.g., "buyers love the layout but say the price is too high compared to recent sales," "3 out of 5 buyers said the kitchen needs updating")
- Supporting data: [MARKET_DATA] (e.g., "comparable homes in the area are selling for $445-$465K, while we are listed at $489K")
- Client personality: [CLIENT_PERSONALITY] (e.g., "analytical, wants data," "emotional, attached to the home," "impatient, wants it sold fast")

Requirements:
- Open with empathy — acknowledge their frustration and validate their home
- Present the data objectively — let the numbers tell the story
- Frame the price reduction as a strategy, not a failure
- Address the specific showing feedback
- Explain what happens if we do not adjust (further DOM, stale listing perception)
- Recommend the specific new price with reasoning
- Give them space to process and respond
- Close with a clear next step
- Include 2-3 responses to common objections:
  - "But we put $X into renovations"
  - "The Zillow estimate says it's worth more"
  - "Let's just wait for the right buyer"
- Length: 300-400 words
- Tone: empathetic, professional, data-driven, confident
- Write as a natural conversation, not bullet points
```

### Example Output

"[CLIENT_NAME], thanks for making time to talk. I want to give you an honest update on where we stand with the house and share what I am seeing in the market.

First, you have a great home. That has not changed. The layout, the backyard, the location — buyers consistently mention those as strengths. So the product is good. The challenge right now is positioning.

We have been on the market for 28 days with 9 showings. In our area, comparable homes are selling in about 14 days. So we are running about double the average, which tells me the market is giving us a signal about price.

Here is what I am hearing from buyers and their agents: they love the space, but when they compare it to recent sales — like the home on Oak Hill that sold for $468K and the one on Cedar Lane at $445K — they feel our price of $489K is too high. Three out of five showing agents said the same thing independently.

What I would like to recommend is an adjustment to $465,000. Here is why that number: it puts us right in line with the comps, it positions us competitively against the two new listings that just came on this week, and it is going to generate a fresh wave of buyer activity. When a price drops on the MLS, every agent and saved-search buyer gets an alert. It is essentially a re-launch.

The risk of staying at $489K is that we accumulate more days on market, and once a listing crosses the 45-day mark, buyers start to wonder what is wrong with it. I do not want us to get there.

I know this is not what you wanted to hear, and I want you to take some time to think about it. But I would rather have this conversation with you now than wait another 3 weeks and have an even harder one.

What are your thoughts?"

**If they say: "But we put $50K into the kitchen renovation..."**

"I completely understand, and that renovation is one of the reasons the home shows as well as it does. Unfortunately, renovations typically return 50-70 cents on the dollar at resale — that is an industry-wide number, not specific to your home. The renovation helps you compete; it does not necessarily add the full cost to the sale price. What it does do is make your home more attractive at the right price point, which is why I think $465K will move quickly."

**If they say: "Zillow says it's worth $495K..."****

"Zillow's Zestimate is an algorithm that does not account for condition, upgrades, or the nuances of our specific street. It has a median error rate of about 6-7%, which on a $500K home is a $30-$35K swing. I rely on actual closed sales in your neighborhood within the last 90 days — that is the data appraisers will use too, which matters when the buyer's lender orders the appraisal."

**If they say: "Let's just wait for the right buyer..."**

"I understand that instinct, but here is the risk: the right buyer may have already seen the listing and moved on because of price. Every week we sit, we lose the urgency that comes with a fresh listing. The buyers who are actively searching right now are comparing you to everything else on the market in real time. I would rather we position you to win those buyers than hope for one who is willing to pay above market."

---

## Script 2: Offer Negotiation Responses

**Situation:** You received an offer and need to help your client respond strategically.

### Prompt A: Presenting a Low Offer to Your Seller

```
Write a script for presenting a below-asking offer to my seller client and discussing our response strategy.

Context:
- Client: [CLIENT_NAME] (seller)
- Property: [PROPERTY_ADDRESS]
- List price: [CURRENT_PRICE]
- Offer received: [OFFER_AMOUNT]
- Offer terms: [OFFER_TERMS] (e.g., "conventional financing, 30-day close, $5K earnest money, asking for $8K in closing cost credits")
- Buyer's agent feedback on the offer: [BUYER_AGENT_CONTEXT] (e.g., "buyer is pre-approved, this is their top choice but they're stretched on budget," or "investor, take it or leave it")
- Market context: [MARKET_CONTEXT] (e.g., "no other showings scheduled," "2 other showings this week")
- My recommendation: [MY_RECOMMENDATION] (e.g., "counter at $X with these terms")

Requirements:
- Present the offer objectively — facts first, opinion second
- Walk through each component: price, financing, timeline, contingencies, credits
- Share the context from the buyer's agent
- Give my professional recommendation with reasoning
- Present 3 options: accept, counter (with specifics), or decline
- For the counter option, suggest specific terms and explain the strategy
- Tone: strategic, calm, advisor-like
- Length: 200-300 words
```

### Prompt B: Crafting a Counter-Offer Narrative

```
Write a professional counter-offer response that my client's agent can relay to the buyer's agent.

Context:
- Seller: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- Original offer: [OFFER_AMOUNT] with [OFFER_TERMS]
- Counter price: [COUNTER_PRICE]
- Counter terms: [COUNTER_TERMS] (e.g., "reduce closing credits to $4K, keep 30-day close, increase earnest money to $10K")
- Reasoning to share with buyer's agent: [REASONING] (e.g., "recent comp at $468K supports our counter," "seller has flexibility on credits but firm on price")

Requirements:
- Professional tone suitable for agent-to-agent communication
- Present the counter as reasonable and data-supported
- Leave the door open for continued negotiation
- Keep it under 100 words — agents are busy
```

---

## Script 3: Closing Timeline Updates

**Situation:** Keeping your client informed during the closing process with clear, reassuring updates.

### The Prompt

```
Write a client update email about the closing process progress.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- Current stage: [CURRENT_STAGE] (e.g., "under contract, inspection complete," "appraisal ordered," "clear to close")
- What just happened: [LATEST_UPDATE] (e.g., "inspection report came back with minor items," "appraisal came in at value," "title search revealed an old lien that is being resolved")
- What happens next: [NEXT_STEPS]
- Expected closing date: [CLOSING_DATE]
- Any issues to flag: [ISSUES] (or "none")
- Client's likely concern level: [CONCERN_LEVEL] (e.g., "first-time buyer, nervous about everything," "experienced, just wants the highlights")

Requirements:
- Subject line included
- Clear summary of where we are in the process
- Explain what just happened in plain English (no jargon)
- If there is an issue, explain it honestly but without alarm — include the plan to resolve it
- Outline next steps with approximate timing
- Reassure without being patronizing
- Length: adjust to concern level — more detail for nervous clients, concise for experienced ones
- Tone: steady, transparent, in-control
```

### Example Output (First-Time Buyer Version)

**Subject:** Closing update — we are on track

Hi Michael,

Quick update on 4218 Ridgeview Trail. Here is where we stand:

**What just happened:** The home inspection is complete. The report came back with a few minor items — a loose handrail on the back deck, a bathroom exhaust fan that needs replacing, and the HVAC filter is due for a change. Nothing structural, nothing alarming. This is very typical for a home this age.

**What we are doing about it:** I have sent a repair request to the seller's agent asking them to address the handrail and exhaust fan before closing. These are standard asks and I expect they will agree.

**What happens next:**
1. Seller responds to our repair request (expect within 2-3 days)
2. Appraisal is scheduled for next Tuesday
3. Once appraisal comes in, the lender moves to final underwriting
4. We aim to close on April 15 as planned

**You do not need to do anything right now.** I will keep you posted as each milestone clears.

You are doing great. This is all moving exactly as it should. Call me anytime if you have questions.

Sarah Martinez
Compass | (512) 555-0147

---

## Script 4: Commission Discussion Scripts

**Situation:** Navigating commission conversations with transparency and confidence, especially in the post-NAR settlement landscape.

### Prompt A: Buyer Agent Commission Discussion (Initial Consultation)

```
Write a script for discussing my buyer agent compensation with a new buyer client during our initial consultation.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Client: [CLIENT_NAME]
- My standard buyer agent fee: [FEE_STRUCTURE] (e.g., "2.5% of purchase price" or "flat fee of $X" or "tiered structure")
- Market: [MARKET_AREA]
- Relevant context: [CONTEXT] (e.g., "post-NAR settlement, buyers need to sign a buyer representation agreement before touring homes," or "local MLS policy on compensation offers")

Requirements:
- Explain what I do as a buyer's agent and the value I provide (negotiation, market analysis, transaction management, protection of their interests)
- Address the fee structure clearly and honestly
- Explain the buyer representation agreement requirement and what it means
- Explain how compensation typically works (seller may offer to cover, buyer may need to cover, negotiable as part of the offer)
- Anticipate and address common questions:
  - "Why do I have to pay an agent?"
  - "Can't I just go directly to the seller's agent?"
  - "What if the seller is offering a lower amount?"
- Tone: confident, transparent, value-focused — not defensive
- Length: 250-350 words
- Write as a natural conversation script
```

### Prompt B: Listing Agent Commission Discussion

```
Write a script for discussing my listing commission with a potential seller during a listing presentation.

Context:
- My name is [AGENT_NAME] with [BROKERAGE]
- Client: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- My listing fee: [LISTING_FEE]
- What is included: [SERVICES_INCLUDED] (e.g., "professional photography, staging consultation, MLS listing, social media marketing, open houses, negotiation, transaction management")
- My track record: [TRACK_RECORD] (e.g., "average 4% over asking, 12 days on market, 97% list-to-sale ratio")
- Market: [MARKET_AREA]

Requirements:
- Present my fee in the context of the value I deliver, not as a cost
- Reference my track record as evidence
- Break down what is included so they see the full scope of work
- Address the common "but the discount brokerage charges less" objection
- Address "can you reduce your commission?" with a confident, professional response
- Tone: confident, professional, not apologetic
- Length: 200-300 words
- Write as a natural conversation script
```

---

## Script 5: Difficult Client Situations

### Prompt A: Unrealistic Seller Expectations

```
Write a script for a conversation with a seller who has unrealistic expectations about their home's value.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Their expected price: [EXPECTED_PRICE]
- Realistic market value: [MARKET_VALUE]
- The gap: [PRICE_GAP]
- Why they think it is worth more: [THEIR_REASONING] (e.g., "they put $80K into renovations," "their neighbor sold for $X two years ago," "they need $X to buy their next home")
- Key data that supports reality: [SUPPORTING_DATA]

Requirements:
- Lead with empathy — understand why they feel this way
- Validate their perspective before presenting the data
- Use analogies if helpful ("the market is like an auction — the buyers set the price")
- Present the data clearly and let it speak
- Separate what they need from what the market will pay — acknowledge the gap without judgment
- Offer a compromise if appropriate (e.g., "list at $X for 2 weeks, then reassess")
- Never argue — guide
- Tone: respectful, firm but kind, honest
- Length: 250-350 words
```

### Prompt B: Frustrated Buyer Who Keeps Losing Out

```
Write a script for a conversation with a buyer client who is frustrated after losing multiple offers in a competitive market.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Number of offers they have lost: [OFFER_COUNT]
- Reasons they have lost: [LOSS_REASONS] (e.g., "outbid each time," "competing against cash offers," "lost on escalation clauses")
- Their budget: [BUDGET]
- Market conditions: [MARKET_CONDITIONS]
- Strategies I want to suggest: [STRATEGIES] (e.g., "expand search area," "adjust price range," "write stronger offers with fewer contingencies," "consider off-market opportunities")

Requirements:
- Open by validating their frustration — this is genuinely hard
- Normalize the experience — share how common this is in the current market
- Avoid blame — never imply they should have offered more
- Analyze what we can control vs what we cannot
- Present 2-3 adjusted strategies with honest pros and cons
- Reignite their motivation — remind them why they are searching
- Tone: empathetic, strategic, encouraging without being dismissive
- Length: 250-350 words
```

### Prompt C: Client Wants to Back Out of a Deal

```
Write a script for a conversation with a client who wants to back out of a purchase contract.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- Purchase price: [PURCHASE_PRICE]
- Why they want to back out: [REASON] (e.g., "cold feet," "found an issue during inspection," "interest rate changed," "life circumstances changed")
- Current contract stage: [STAGE] (e.g., "within inspection contingency period," "past contingencies," "approaching closing")
- Earnest money at risk: [EARNEST_MONEY]
- Legal options: [OPTIONS] (e.g., "can terminate within contingency period and get EMD back," "would forfeit EMD," "may face legal exposure")

Requirements:
- Listen first — do not immediately try to talk them out of it
- Understand the real reason (sometimes the stated reason is not the actual concern)
- Present their options clearly and honestly, including financial consequences
- If the reason is resolvable (e.g., negotiable inspection items), explore that path
- If the reason is not resolvable, support their decision without judgment
- Remind them of my fiduciary duty to act in their best interest
- Recommend they consult a real estate attorney if there are legal implications
- Tone: calm, supportive, advisory — never guilt-inducing
- Length: 200-300 words
```

### Prompt D: Managing Competing Offers (Seller Side)

```
Write a script for advising my seller client when we have received multiple offers.

Context:
- My name is [AGENT_NAME]
- Client: [CLIENT_NAME]
- Property: [PROPERTY_ADDRESS]
- List price: [CURRENT_PRICE]
- Number of offers: [OFFER_COUNT]
- Offer summaries: [OFFER_SUMMARIES]
(e.g., "Offer 1: $480K, conventional, 30-day close, no contingencies. Offer 2: $495K, FHA, 45-day close, inspection contingency. Offer 3: $475K cash, 14-day close, as-is.")
- My recommendation: [MY_RECOMMENDATION]

Requirements:
- Walk through each offer clearly, comparing price, terms, timeline, financing, and contingencies
- Explain the trade-offs (higher price vs cleaner terms, fast close vs financing risk)
- Share my recommendation with clear reasoning
- Explain the option to counter one, counter all, or accept
- Discuss whether to request "highest and best" from all parties
- Remind them that the highest price is not always the best offer
- Tone: strategic, thorough, advisor-like
- Length: 250-350 words
```

---

## Using These Scripts

1. **Generate before the conversation.** Run the prompt 30 minutes before a client call so you have the script in front of you. You do not need to read it verbatim — it is a guide and confidence booster.

2. **Customize the tone.** Add to the prompt: "My client responds best to [direct/gentle/data-heavy/emotional] communication" and the AI will adjust.

3. **Practice difficult conversations.** Ask the AI: "Now roleplay as the client and push back on my recommendation. I want to practice my response."

4. **Post-conversation follow-up.** After a tough call, ask the AI: "Write a follow-up email summarizing what we discussed and the agreed next steps." This creates a written record and shows professionalism.

---

*Midas Tools -- Real Estate AI Kit | midastools.com*
