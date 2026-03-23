# Midas Tools — E-commerce AI Kit
# 05: Customer Communication

> AI prompts to handle every customer touchpoint with professionalism and warmth.
> Works with ChatGPT, Claude, Gemini, or any AI tool.

---

## Table of Contents

1. [Set Your Customer Service Context](#set-your-customer-service-context)
2. [Order Confirmation Messages](#order-confirmation-messages)
3. [Shipping Update Templates](#shipping-update-templates)
4. [Returns / Refund Handling Scripts](#returns--refund-handling-scripts)
5. [FAQ Auto-Responses](#faq-auto-responses)
6. [Review Response Templates](#review-response-templates)
7. [Size / Fit Guide Generators](#size--fit-guide-generators)
8. [Proactive Customer Communication](#proactive-customer-communication)

---

## Set Your Customer Service Context

Paste this at the start of every AI session before using any prompt below:

```
You are a customer service expert for an e-commerce brand. You write responses that are helpful, empathetic, and on-brand.

Store: [STORE NAME]
Niche: [YOUR NICHE]
Products: [WHAT YOU SELL]
Brand voice: [TONE — warm, professional, casual, luxury, playful]
Return policy: [SUMMARY OF YOUR RETURN POLICY]
Shipping options: [STANDARD / EXPRESS / FREE OVER $X]
Support email: [EMAIL]
Support hours: [HOURS]
Average response time: [HOURS/MINUTES]

Write responses that solve the customer's problem quickly, maintain their trust, and leave them feeling valued.
Never be defensive. Always take ownership. Turn problems into loyalty opportunities.
```

---

## Order Confirmation Messages

### Prompt 1: Branded Order Confirmation Email

```
Write a branded order confirmation email for [STORE NAME].

Order details to include (use placeholders):
- Customer first name: [CUSTOMER_NAME]
- Order number: [ORDER_NUMBER]
- Product(s) ordered: [PRODUCT_NAME] x [QUANTITY]
- Order total: [TOTAL]
- Shipping method: [SHIPPING_METHOD]
- Estimated delivery: [DELIVERY_WINDOW]
- Shipping address: [ADDRESS]

Requirements:
- Subject line: 3 options (confirming, exciting, personal)
- Body: 150-200 words
- Open with excitement and gratitude, not a sterile "Your order has been received"
- Confirm all order details in a clean, scannable format
- Include a brief "what happens next" timeline:
  1. Order confirmed (now)
  2. Order being prepared ([TIMEFRAME])
  3. Shipping notification with tracking ([WHEN])
  4. Delivery ([ESTIMATED])
- Add a personal touch: product tip, styling suggestion, or fun fact about their product
- Support contact for questions
- Tone: [BRAND VOICE]
```

> **Why this works:** Order confirmation emails have an 80%+ open rate — the highest of any transactional email. Most brands waste this with a generic receipt. A branded, exciting confirmation reduces buyer's remorse, sets delivery expectations, and starts the relationship off right.

### Prompt 2: SMS Order Confirmation

```
Write an SMS order confirmation for [STORE NAME].

Requirements:
- Maximum 160 characters
- Include: store name, order number, delivery estimate
- Tone: friendly, concise
- Write 3 versions:

Version 1 — Enthusiastic:
[STORE NAME]: Your order #[ORDER_NUMBER] is confirmed! Expected delivery: [DATE]. We're excited for you!

Version 2 — Informational:
[Short, factual confirmation with tracking link mention]

Version 3 — Personal:
[Founder-voice, casual, warm]

Include a note about character limits and link shortening for SMS.
```

### Prompt 3: Gift Order Confirmation

```
Write an order confirmation email for a gift order placed on [STORE NAME].

Context:
- The buyer is purchasing for someone else
- Gift wrapping: [INCLUDED / AVAILABLE / NOT OFFERED]
- Gift message: [CUSTOMER CAN ADD CUSTOM MESSAGE / NOT AVAILABLE]
- Recipient notification: [YES, RECIPIENT GETS NOTIFICATION / NO, IT'S A SURPRISE]

Requirements:
- Subject line: 3 options (gift-focused, warm)
- Body: 120-160 words
- Address the buyer (the gift-giver), not the recipient
- Confirm gift-specific details (wrapping, message, separate shipping if applicable)
- Reassure that pricing won't be visible to the recipient
- If gift message is available, confirm their message will be included
- Include delivery timeline with "arrives by" language (important for gift deadlines)
- Suggest adding gift insurance or express shipping if cutting it close
- CTA: Track Your Gift
```

---

## Shipping Update Templates

### Prompt 4: Shipping Confirmation Email

```
Write a shipping confirmation email for [STORE NAME].

Details:
- Customer name: [CUSTOMER_NAME]
- Order number: [ORDER_NUMBER]
- Carrier: [CARRIER — USPS / UPS / FEDEX / DHL]
- Tracking number: [TRACKING_NUMBER]
- Tracking link: [LINK]
- Estimated delivery: [DELIVERY_DATE]
- Items shipping: [PRODUCT_NAME(S)]

Requirements:
- Subject line: 3 options (exciting, informational, playful)
- Body: 100-150 words
- Open with "Your [PRODUCT] is on its way!" energy
- Include tracking details prominently (big button: Track Your Package)
- Set expectations: "Tracking may take 24 hours to update after this email"
- Brief care or preparation tip for the product
- Support contact if anything goes wrong
- If partial shipment, explain remaining items and their timeline
```

### Prompt 5: Shipping Delay Notification

```
Write a shipping delay notification email for [STORE NAME].

Context:
- Customer name: [CUSTOMER_NAME]
- Order number: [ORDER_NUMBER]
- Original estimated delivery: [ORIGINAL_DATE]
- New estimated delivery: [NEW_DATE]
- Reason for delay: [WEATHER / CARRIER ISSUE / HIGH DEMAND / SUPPLY CHAIN / CUSTOM PRODUCT]
- Compensation offered: [DISCOUNT ON NEXT ORDER / FREE SHIPPING UPGRADE / SMALL FREE GIFT / NOTHING]

Requirements:
- Subject line: 3 options (transparent, apologetic, informational)
- Body: 120-160 words
- Open with an apology that takes ownership (not "we regret to inform you")
- Explain the reason honestly in 1-2 sentences — don't over-explain
- Provide the new delivery estimate clearly
- If offering compensation, present it as a genuine gesture
- Give them an option: "If you'd like to cancel for a full refund, we completely understand"
- Provide a direct way to reach a human for questions
- Close with reassurance that their order is a priority
- Tone: honest, humble, proactive
```

> **Pro tip:** Proactive delay notifications prevent angry support tickets. A customer who hears about a delay from you first is 3x more likely to stay calm than one who discovers it by checking tracking. Own the problem before they find it.

### Prompt 6: Delivery Confirmation / Follow-Up

```
Write a delivery confirmation follow-up email for [STORE NAME].

Context:
- Package was delivered (based on carrier tracking)
- Customer name: [CUSTOMER_NAME]
- Product: [PRODUCT_NAME]
- Delivered: [DATE]

Requirements:
- Subject line: 3 options (check-in, excitement, helpful)
- Body: 100-140 words
- Open by confirming delivery and asking if they received it
- Share 1 quick product tip or "first thing to do"
- Mention that if there's any issue with the delivery, you're here to help
- Soft ask: "We'd love to hear what you think in a few days"
- Support contact prominently displayed
- CTA: [TRACK / LEAVE REVIEW / SHOP AGAIN]
```

---

## Returns / Refund Handling Scripts

### Prompt 7: Return Request — Approved Response

```
Write a return approval response for [STORE NAME].

Context:
- Customer name: [CUSTOMER_NAME]
- Order number: [ORDER_NUMBER]
- Product being returned: [PRODUCT_NAME]
- Reason for return: [SIZE ISSUE / DIDN'T LIKE IT / DAMAGED / DEFECTIVE / CHANGED MIND]
- Return method: [PREPAID LABEL / CUSTOMER PAYS SHIPPING / DROP-OFF LOCATION]
- Refund type: [FULL REFUND / STORE CREDIT / EXCHANGE]
- Refund timeline: [X BUSINESS DAYS AFTER RECEIVING]

Requirements:
- Response: 120-160 words
- Open with understanding and zero judgment about their reason
- Clearly outline the return process in numbered steps:
  1. [HOW TO PREPARE THE PACKAGE]
  2. [WHERE/HOW TO SHIP]
  3. [WHAT HAPPENS WHEN YOU RECEIVE IT]
  4. [WHEN THEY'LL GET THEIR REFUND]
- If prepaid label, explain how to access it
- Set clear expectations on refund timing
- If exchanging, ask what they'd like instead
- Close with genuine "We hope to see you again"
- Tone: kind, efficient, no friction
```

### Prompt 8: Return Request — Denied Response

```
Write a return denial response for [STORE NAME].

Context:
- Customer name: [CUSTOMER_NAME]
- Product: [PRODUCT_NAME]
- Reason for denial: [OUTSIDE RETURN WINDOW / FINAL SALE / USED/WORN / MISSING TAGS / CUSTOM PRODUCT]
- Return policy reference: [LINK TO POLICY]
- Alternative solution you can offer: [STORE CREDIT / EXCHANGE / PARTIAL REFUND / REPAIR / NOTHING]

Requirements:
- Response: 120-160 words
- Open with empathy and appreciation for reaching out
- Explain why the return can't be processed in 1-2 clear sentences
- Reference the policy kindly (link, don't lecture)
- ALWAYS offer an alternative solution — never just say "no"
- If offering store credit: explain the amount and how to use it
- If no alternative: express genuine regret and ask if there's another way to help
- Never sound robotic, corporate, or dismissive
- Close with an invitation to reach out with any other questions
- Tone: understanding, firm but fair, solutions-focused
```

> **Why this works:** How you handle "no" defines your brand. A denial that offers alternatives and shows empathy often earns more loyalty than the easy "yes." Customers remember how you made them feel, not what the policy said.

### Prompt 9: Damaged / Defective Product Response

```
Write a response for a customer who received a damaged or defective product from [STORE NAME].

Context:
- Customer name: [CUSTOMER_NAME]
- Product: [PRODUCT_NAME]
- Issue: [DESCRIBE THE DAMAGE OR DEFECT]
- Customer has photos: [YES / NO]
- Resolution options: [FULL REPLACEMENT / REFUND / PARTIAL REFUND / REPAIR]

Requirements:
- Response: 120-160 words
- Open with a sincere apology — this is 100% your fault, own it completely
- If they have photos, thank them for documenting it
- If no photos, gently ask for them: "Could you share a photo so we can see exactly what happened?"
- State the resolution clearly: "We're sending you a replacement right away at no cost"
- Explain the timeline for the resolution
- Tell them they do NOT need to return the damaged item (if that's your policy)
- If defective, mention that you're flagging this with your quality team
- Close with extra care: "We take this seriously and want to make it right"
- If appropriate, offer a small bonus gesture (discount code, free shipping on next order)
```

### Prompt 10: Refund Processing Confirmation

```
Write a refund confirmation email for [STORE NAME].

Context:
- Customer name: [CUSTOMER_NAME]
- Order number: [ORDER_NUMBER]
- Refund amount: [AMOUNT]
- Refund method: [ORIGINAL PAYMENT METHOD / STORE CREDIT]
- Processing time: [X BUSINESS DAYS]
- Partial or full: [FULL REFUND / PARTIAL — explain what's refunded and what's not]

Requirements:
- Subject line: 2 options (clear, reassuring)
- Body: 80-120 words
- Confirm the refund amount and method clearly
- Set expectation on when they'll see it in their account
- If partial, explain the breakdown without being defensive
- If store credit, explain the credit amount and how to use it
- Express hope they'll shop with you again (genuine, not pushy)
- Include support contact for questions
- Tone: straightforward, kind
```

---

## FAQ Auto-Responses

### Prompt 11: FAQ Response Generator

```
Write customer service auto-responses for [STORE NAME]'s most frequently asked questions.

Generate responses for:
1. "Where is my order?"
2. "How long does shipping take?"
3. "What is your return policy?"
4. "Do you ship internationally?"
5. "My discount code isn't working"
6. "When will [PRODUCT] be back in stock?"
7. "Can I change/cancel my order?"
8. "Do you offer gift wrapping?"
9. "What size should I get?"
10. "Is this product [SPECIFIC CONCERN — vegan, allergen-free, sustainable, etc.]?"

For each FAQ:
- Short version (2-3 sentences) — for chat widgets and quick replies
- Detailed version (4-6 sentences) — for email responses
- Include relevant links: [TRACKING PAGE], [SIZE GUIDE], [RETURN POLICY PAGE]
- Tone: [BRAND VOICE] — helpful, clear, warm
- Add a personal closing: "If this doesn't answer your question, I'm here to help!"
```

> **Pro tip:** Auto-responses should handle 60-70% of support tickets. The key is making them feel human, not robotic. Always include an escalation path ("If this doesn't help, reply to this email and a human will respond within [TIMEFRAME]"). Auto-responses that dead-end without escalation frustrate customers more than slow responses.

### Prompt 12: Live Chat Scripts

```
Write live chat scripts for [STORE NAME]'s most common scenarios.

Scenario 1: Greeting
- Initial greeting when chat opens
- 2-3 variations to rotate

Scenario 2: Product Question
- Customer asks about [PRODUCT CATEGORY] sizing/compatibility/features
- Response template with [BRACKET PLACEHOLDERS] for specifics

Scenario 3: Order Status
- Customer asks "Where's my order?"
- Ask for order number, provide tracking steps

Scenario 4: Complaint
- Customer is frustrated
- De-escalation response
- Resolution offer

Scenario 5: Pre-Purchase Help
- Customer is browsing and needs recommendations
- Discovery questions to ask
- How to make a suggestion

For each scenario:
- Opening response (max 2 sentences — chat should be concise)
- Follow-up messages (2-3 exchanges)
- Closing message with next steps
- When to escalate to phone/email
- Tone: conversational, quick, helpful — chat isn't email
```

### Prompt 13: Social Media DM Responses

```
Write social media DM response templates for [STORE NAME].

Common DM types:
1. "How much is [PRODUCT]?" — respond with price + link
2. "Do you ship to [COUNTRY]?" — respond with shipping info
3. "When will you restock [PRODUCT]?" — respond with restock info or waitlist
4. "Can I get a discount?" — respond tactfully
5. "I'm interested in a collaboration" — respond to influencer inquiries
6. "I have a complaint" — respond with empathy and escalate
7. "What's the difference between [PRODUCT A] and [PRODUCT B]?" — quick comparison
8. "Do you do custom orders?" — respond based on [YES / NO / SOMETIMES]

For each:
- Response: 2-4 sentences (DMs should be brief)
- Include a link or next step
- Match the casual tone of social media (not formal email tone)
- Sign off with name or initials for personal touch
```

---

## Review Response Templates

### Prompt 14: Positive Review Responses (5-Star)

```
Write 10 unique responses to positive reviews for [STORE NAME].

Context:
- These are for reviews on [YOUR WEBSITE / AMAZON / GOOGLE / YELP / ETSY]
- Reviewer name: [REVIEWER_NAME]
- Product: [PRODUCT_NAME]
- Platform rules: [SOME PLATFORMS DON'T ALLOW PROMOTIONAL LANGUAGE IN RESPONSES]

Requirements:
Write 10 varied responses (no two should sound the same):
- Length: 2-4 sentences each
- Always thank them by name
- Reference something specific from their review (don't use a generic "Thanks for the 5 stars!")
- Express genuine appreciation
- 3 of the 10 should subtly suggest a complementary product
- 3 of the 10 should invite them to share with friends/family
- 4 of the 10 should simply be grateful without any ask
- Never sound corporate or copy-paste
- Tone: [BRAND VOICE] — authentic, warm, human
```

### Prompt 15: Negative Review Responses (1-2 Star)

```
Write responses to common negative review scenarios for [STORE NAME].

Scenario 1: Product quality complaint
- Review: "[EXAMPLE REVIEW ABOUT QUALITY ISSUE]"
- Actual situation: [THE FACTS — was it defective, normal wear, misuse, etc.]
- Response requirements: Apologize, offer solution, take offline

Scenario 2: Shipping complaint
- Review: "[EXAMPLE REVIEW ABOUT SLOW/DAMAGED SHIPPING]"
- Response requirements: Own it even if the carrier's fault, offer resolution

Scenario 3: Product didn't meet expectations
- Review: "[EXAMPLE — looked different than photos, didn't fit, etc.]"
- Response requirements: Empathize, offer exchange/return, improve for future

Scenario 4: Customer service complaint
- Review: "[EXAMPLE — slow response, unhelpful staff, etc.]"
- Response requirements: Apologize specifically, explain what you're doing differently

Scenario 5: Unfair or inaccurate review
- Review: "[EXAMPLE — factually incorrect claim]"
- Response requirements: Correct gently with facts, stay professional, don't get defensive

For each scenario:
- Response: 3-5 sentences
- Always start with empathy and apology
- Include a resolution or next step
- Provide direct contact info to take the conversation offline
- Never argue, blame, or make excuses
- Keep in mind that future customers will read this response
```

> **Why this works:** Your response to a negative review is less about the unhappy customer and more about the hundreds of potential customers who will read it. A thoughtful, professional response to a 1-star review often builds MORE trust than a 5-star review. Show future buyers that you handle problems with grace.

### Prompt 16: Neutral Review Responses (3-Star)

```
Write 5 responses to 3-star "it's okay" reviews for [STORE NAME].

Context:
- These reviews aren't angry but aren't enthusiastic
- They often say things like "good but not great" or "decent for the price"
- Goal: turn a neutral customer into a returning customer

For each response:
- Thank them for the honest feedback
- Ask specifically what would have made it a 5-star experience
- Offer a way to improve their experience (exchange, product tip, complementary product)
- Show that you genuinely want to do better
- 2-3 sentences, warm and curious tone
- Include a direct email for follow-up conversation
```

---

## Size / Fit Guide Generators

### Prompt 17: Product Size Guide Generator

```
Write a comprehensive size guide for [PRODUCT CATEGORY] from [STORE NAME].

Products this guide covers: [LIST SPECIFIC PRODUCTS]
Size range: [XS-XXL / S-L / NUMERIC RANGE / ONE SIZE]

Measurements needed:
- [MEASUREMENT 1 — e.g., chest circumference]: [SIZE S: X inches, M: X inches, L: X inches, etc.]
- [MEASUREMENT 2 — e.g., waist]: [SIZES]
- [MEASUREMENT 3 — e.g., length]: [SIZES]
- [MEASUREMENT 4 — e.g., sleeve]: [SIZES]

Additional context:
- Fit type: [SLIM / REGULAR / RELAXED / OVERSIZED]
- Stretch factor: [NO STRETCH / SLIGHT STRETCH / VERY STRETCHY]
- Model reference: "Model is [HEIGHT], [WEIGHT], wearing size [SIZE]"

Requirements:
- Write the size guide in a conversational, easy-to-follow format
- Include a "How to Measure Yourself" section with 3-4 simple steps
- Size chart in table format
- Include "Between sizes?" advice (size up for [REASON], size down for [REASON])
- Note on fabric stretch/shrinkage
- "Still unsure?" CTA directing to customer support
- Keep language inclusive (all body types welcome)
- 200-300 words total
```

### Prompt 18: Fit Recommendation Chatbot Script

```
Write a fit recommendation conversation flow for [STORE NAME].

Product: [PRODUCT NAME]
Size options: [AVAILABLE SIZES]

Create a decision-tree conversation:

Question 1: "What's your usual size in [COMPARABLE BRAND]?"
- If [SIZE A]: Recommend [YOUR SIZE]
- If [SIZE B]: Recommend [YOUR SIZE]
- If "I don't know": Go to Question 2

Question 2: "How do you prefer your [PRODUCT TYPE] to fit?"
- Snug/fitted: Recommend [SIZE]
- True to size: Recommend [SIZE]
- Loose/relaxed: Recommend [SIZE]

Question 3: "What are your measurements? (optional)"
- [MEASUREMENT RANGE 1]: Size [X]
- [MEASUREMENT RANGE 2]: Size [Y]
- [MEASUREMENT RANGE 3]: Size [Z]

Final recommendation format:
"Based on your answers, we recommend size [SIZE] for you! [1-sentence fit description]. If you're between sizes, [SIZE UP/DOWN ADVICE]."

Include: "Not sure? Our team is happy to help — [CONTACT METHOD]"
```

---

## Proactive Customer Communication

### Prompt 19: Back in Stock Notification

```
Write a back-in-stock notification for [STORE NAME].

Product details:
- Product name: [PRODUCT NAME]
- How long it was out of stock: [TIMEFRAME]
- Expected to sell out again: [YES, QUICKLY / NO, WELL-STOCKED]
- Any changes since last available: [IMPROVED / SAME / NEW COLOR OPTIONS]

Requirements:
- Subject line: 3 options (urgency, excitement, personal)
- Body: 80-120 words
- Open with the exciting news: "[PRODUCT] is back!"
- Reference that they wanted this (they signed up for the notification)
- If it's likely to sell out again, mention it honestly
- If any improvements were made, highlight them
- Single, prominent CTA: Shop Now
- Keep it short — they already want this product, don't oversell
```

### Prompt 20: Loyalty Program Invitation

```
Write a loyalty program invitation email for [STORE NAME].

Program details:
- Program name: [LOYALTY PROGRAM NAME]
- How it works: [POINTS PER DOLLAR / TIER SYSTEM / PUNCH CARD / OTHER]
- Reward examples:
  1. [X POINTS] = [REWARD 1]
  2. [X POINTS] = [REWARD 2]
  3. [X POINTS] = [REWARD 3]
- Bonus for joining: [WELCOME POINTS / DISCOUNT / NONE]
- How to join: [AUTOMATIC / SIGN UP AT URL]

Requirements:
- Subject line: 3 options
- Body: 150-200 words
- Open with the value proposition: "Get rewarded every time you shop"
- Explain how the program works in 3 simple bullet points
- Show what they could earn with a realistic example
- If welcome bonus, lead with it
- CTA: Join Now / Start Earning
- Tone: exciting, exclusive, rewarding
```

### Prompt 21: Pre-Order Communication

```
Write a pre-order communication series for [STORE NAME].

Product: [PRODUCT NAME]
Pre-order opens: [DATE]
Estimated ship date: [DATE]
Pre-order incentive: [EARLY BIRD PRICE / EXCLUSIVE COLOR / FREE GIFT / GUARANTEED ALLOCATION]

Write 3 emails:

Email 1 — Pre-Order Open (send on launch):
- Subject line: 3 options
- 120-150 words
- Build excitement, explain what's coming, present the incentive
- Clear timeline: when they order, when they pay, when it ships
- CTA: Pre-Order Now

Email 2 — Pre-Order Update (send 2 weeks after opening):
- Subject line: 2 options
- 80-100 words
- Share an update on production/development progress
- Include a behind-the-scenes detail
- Reassure on timeline
- If limited, share how many are left

Email 3 — Pre-Order Shipping Soon (send 1 week before ship):
- Subject line: 2 options
- 80-100 words
- "Your [PRODUCT] ships next week!"
- Confirm their shipping address is correct (link to update)
- Build final wave of excitement
- If applicable, mention what to expect on delivery day
```

### Prompt 22: Customer Feedback Request

```
Write a customer feedback request email for [STORE NAME].

Context:
- Customer has been a buyer for [TIMEFRAME]
- Number of orders: [X]
- Goal: gather genuine feedback to improve, not just collect reviews

Feedback areas:
1. Product quality
2. Website experience
3. Shipping and packaging
4. Customer service
5. Overall satisfaction

Requirements:
- Subject line: 3 options (personal, conversational)
- Body: 120-160 words
- Open from the founder's perspective: "I'm [NAME], and I'd love 3 minutes of your time"
- Explain why their feedback specifically matters
- Link to a simple survey (suggest Google Form or Typeform)
- Survey should take under 3 minutes (mention this)
- If offering an incentive: [DISCOUNT / ENTRY INTO DRAWING / NONE]
- Close with genuine appreciation
- Make it clear this goes directly to leadership, not into a void
```

---

*Midas Tools — E-commerce AI Kit v1.0*
*File 05 of 06 — Customer Communication*
