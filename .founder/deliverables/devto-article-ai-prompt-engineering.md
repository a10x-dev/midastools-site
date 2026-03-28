---
title: "The Ultimate AI Prompt Engineering Cheat Sheet for 2026 (With 50 Copy-Paste Templates)"
published: false
description: "50 ready-to-use AI prompt templates for business, content creation, coding, marketing, and career growth. Copy, paste, customize."
tags: ai, chatgpt, productivity, programming
cover_image: https://www.midastools.co/og-image.png
---

Every week I talk to developers, founders, and marketers who tell me the same thing: "I use AI every day, but I know I'm only getting 30% of what it can do."

They're right. The gap between a mediocre prompt and a great one isn't cleverness — it's structure. In 2026, with models that can reason across 200K+ token contexts, write production code, and generate entire campaigns, the bottleneck is almost never the AI. It's the instruction you give it.

This article is the cheat sheet I wish I had when I started. 50 prompts you can copy, paste, and customize in under 10 seconds. No theory fluff — just templates that work.

But first, the framework that makes all of them tick.

---

## The CRAFT Framework

Every high-performing prompt shares five ingredients. I call it **CRAFT**:

| Letter | Stands for | What it does |
|--------|-----------|--------------|
| **C** | Context | Gives the AI the background it needs — who you are, what the situation is, what's already been tried |
| **R** | Role | Tells the AI *who* to be — a senior Rails dev, a CFO, a conversion copywriter |
| **A** | Action | The specific task — "write," "analyze," "compare," "debug," "rewrite" |
| **F** | Format | How you want the output — bullet list, table, JSON, 280-character tweet, etc. |
| **T** | Tone | The voice — formal, casual, provocative, empathetic, technical |

You don't need all five every time. But the more you include, the better your results. Think of CRAFT as a dial, not a checklist.

**Quick example:**

> **Without CRAFT:** "Write me an email to a client."
>
> **With CRAFT:** "You are a senior account manager at a B2B SaaS company **(R)**. A long-time client just churned after 18 months **(C)**. Write a win-back email **(A)** that's empathetic but confident, under 150 words **(F)**, with a warm professional tone — no desperation **(T)**."

Night and day difference. Now let's put it to work.

---

## 50 Copy-Paste Prompt Templates

### Business & Sales (1-10)

**1. Cold outreach email that doesn't sound like spam**
```
You are an experienced B2B sales rep who sells [YOUR PRODUCT/SERVICE].

Write a cold email to [TARGET ROLE, e.g., "VP of Engineering at a Series B startup"]. They have never heard of us.

Context: Our product helps them [CORE BENEFIT]. Their likely pain point is [SPECIFIC PAIN].

Rules:
- Under 90 words
- No buzzwords ("synergy," "leverage," "unlock")
- Open with something relevant to THEIR world, not ours
- One clear CTA: book a 15-min call
- Tone: peer-to-peer, not salesy
```

**2. Competitive battle card**
```
You are a product marketing strategist.

Create a competitive battle card comparing [YOUR PRODUCT] vs [COMPETITOR].

Structure it as a table with these columns:
| Feature | Us | Them | Talking Point |

Cover these areas: [LIST 5-7 KEY AREAS, e.g., pricing, integrations, onboarding speed, support quality].

For each row, write a 1-sentence "what to say in a sales call" talking point.

Tone: factual, not trash-talking. Acknowledge where they're strong.
```

**3. Pricing page objection handler**
```
I sell [PRODUCT] at [PRICE POINT] to [TARGET CUSTOMER].

My top 3 pricing objections are:
1. [OBJECTION 1, e.g., "It's too expensive compared to free alternatives"]
2. [OBJECTION 2]
3. [OBJECTION 3]

For each objection, write:
- A 1-sentence reframe
- A concrete ROI example with real numbers
- A question to ask that shifts the conversation

Keep it conversational. No corporate speak.
```

**4. Investor update email**
```
You are helping a [STAGE, e.g., "seed-stage"] startup founder write their monthly investor update.

Key metrics this month:
- MRR: [AMOUNT] ([UP/DOWN X%] from last month)
- Customers: [NUMBER]
- Burn rate: [AMOUNT]
- Runway: [MONTHS]

Big wins: [LIST 2-3]
Challenges: [LIST 1-2]
Asks from investors: [WHAT YOU NEED]

Format: Short paragraphs, use bold for key numbers. Under 400 words.
Tone: Transparent and confident. Don't sugarcoat problems but show you have a plan.
```

**5. Partnership proposal**
```
Draft a partnership proposal email from [YOUR COMPANY] to [PARTNER COMPANY].

We want to propose: [TYPE OF PARTNERSHIP — co-marketing, integration, bundle deal, referral program].

What's in it for them: [THEIR BENEFIT]
What's in it for us: [OUR BENEFIT]
Shared audience: [DESCRIBE OVERLAP]

Format: Under 200 words. Include a specific next step (not just "let's chat").
Tone: Professional but human. Like one founder writing to another.
```

**6. Customer discovery interview questions**
```
I'm building [PRODUCT IDEA] for [TARGET AUDIENCE].

My core hypothesis is that they struggle with [PROBLEM].

Generate 15 customer discovery interview questions that:
- Start broad (their world, their day-to-day) before narrowing to the problem
- Never lead the witness (no "Don't you hate when...")
- Include 3 questions about their current workarounds
- Include 2 questions about willingness to pay
- End with "What should I have asked that I didn't?"

Format: Numbered list with a note next to each explaining what insight it's designed to uncover.
```

**7. SaaS churn analysis prompt**
```
You are a data-savvy customer success manager.

Here is the data on our last [NUMBER] churned customers:
[PASTE CSV OR DESCRIBE PATTERNS — e.g., "60% churned within first 30 days, most were on the free plan, average support tickets: 0"]

Analyze this data and give me:
1. The top 3 likely churn drivers
2. An early warning score — what signals should we monitor?
3. Three specific interventions we could run in the next 2 weeks
4. A reactivation email for each churn segment

Be specific, not generic. Reference the actual data.
```

**8. Quarterly business review deck outline**
```
Create a QBR presentation outline for [CLIENT NAME].

They are paying us [AMOUNT/MONTH] for [PRODUCT/SERVICE].
They've been a client for [DURATION].
Key results this quarter: [LIST 3-5 METRICS WITH BEFORE/AFTER].
Their stated goals: [WHAT THEY TOLD US THEY WANT].

Structure:
- Slide-by-slide outline (title + 3 bullet points per slide)
- Include an "ROI slide" that calculates their return in dollar terms
- End with a "Next Quarter Roadmap" slide with upsell opportunity baked in naturally

Tone: Confident partner, not vendor begging for renewal.
```

**9. Revenue forecast model**
```
You are a financial analyst helping a [TYPE OF BUSINESS] forecast revenue for the next [TIMEFRAME].

Current state:
- Monthly revenue: [AMOUNT]
- Growth rate last 3 months: [X%, Y%, Z%]
- Main revenue drivers: [LIST THEM]
- Known upcoming changes: [NEW PRODUCT LAUNCH, PRICE INCREASE, SEASONALITY, etc.]

Build three scenarios (conservative, base, optimistic) in a markdown table.
For each, state the key assumption that differentiates it.
Flag the 2 biggest risks to the forecast.
```

**10. Cancellation save flow**
```
I run a [TYPE OF BUSINESS] with a [MONTHLY/ANNUAL] subscription at [PRICE].

Design a cancellation save flow with 4 steps:

1. A survey asking why they're leaving (give me 6 options based on common SaaS churn reasons)
2. For each reason, a personalized save offer (discount, pause, downgrade, feature unlock, etc.)
3. A "last chance" message if they still want to cancel
4. A post-cancellation email that leaves the door open

Write the actual copy for each step. Keep it respectful — never guilt-trip.
```

**Pro tips for Business & Sales prompts:**
- Always include your actual numbers. Vague inputs = vague outputs.
- Paste in real customer feedback or support tickets for analysis prompts.
- Ask the AI to "poke holes" in your strategy after it generates one. The second pass is often more valuable than the first.

---

### Content Creation (11-20)

**11. Blog post outline that ranks**
```
You are an SEO content strategist.

Create a detailed blog post outline targeting the keyword "[TARGET KEYWORD]".

Search intent: [INFORMATIONAL / TRANSACTIONAL / COMPARISON]
Target audience: [WHO]
Desired word count: [NUMBER]

Include:
- H1, H2s, and H3s with the keyword placed naturally
- For each H2 section: 3 bullet points of what to cover
- A "People Also Ask" section with 5 related questions to address
- Internal linking suggestions: I have existing content about [TOPICS]
- A meta title (under 60 chars) and meta description (under 155 chars)

Don't keyword-stuff. Write for humans who happen to search.
```

**12. Twitter/X thread from long-form content**
```
Turn this article/blog post into a Twitter/X thread of [8-12] tweets.

[PASTE ARTICLE OR URL SUMMARY]

Rules:
- Tweet 1 must be a hook — a bold claim, surprising stat, or contrarian take
- Each tweet should stand alone but flow as a narrative
- Use line breaks for readability, not walls of text
- Include one tweet that's a concrete example or mini case study
- Last tweet: summarize the key takeaway + soft CTA to [ACTION]
- No hashtags. No "Thread:" label. No emojis in every tweet.
```

**13. YouTube video script**
```
Write a YouTube video script for a [LENGTH]-minute video titled "[VIDEO TITLE]".

Target audience: [WHO]
Goal: [EDUCATE / ENTERTAIN / CONVERT]

Structure:
- Hook (first 15 seconds): Start with a surprising fact or bold statement — NOT "Hey guys, welcome to my channel"
- Problem setup (30 seconds)
- Main content with [NUMBER] key points (include B-roll suggestions in brackets)
- Recap
- CTA: [SUBSCRIBE / LINK IN DESCRIPTION / COMMENT BELOW]

Write it conversationally — like talking to a smart friend, not reading a Wikipedia article.
Include [VISUAL CUE] markers where graphics or screen recordings should appear.
```

**14. Newsletter edition**
```
Write a newsletter edition for my [NICHE] newsletter called "[NEWSLETTER NAME]".

Audience: [DESCRIBE READER]
Sending on: [DAY OF WEEK]
Vibe: [e.g., "Monday motivation meets industry insider"]

Structure:
- Subject line (A/B test: give me 2 options, one curiosity-driven, one benefit-driven)
- Opening line that feels personal, not corporate
- Main story/insight (200 words) about [TOPIC]
- 3 curated links with 1-sentence commentary on each
- A "quick tip" section (50 words)
- Sign-off with personality

Never start with "Happy [day of week]!" or "Hope this finds you well."
```

**15. LinkedIn post that gets engagement**
```
Write a LinkedIn post about [TOPIC].

Context: I'm a [YOUR ROLE] with experience in [RELEVANT BACKGROUND].

Rules:
- Open with a hook line that stops the scroll (first line appears before "see more")
- Use short paragraphs (1-2 sentences max)
- Include a specific story, example, or data point — not just opinions
- End with a question that invites comments
- Under 200 words
- No cringe motivational quotes
- No "I'm humbled to announce" energy
- Tone: [THOUGHTFUL / PROVOCATIVE / PRACTICAL]
```

**16. Case study from raw notes**
```
Turn these raw notes into a polished customer case study.

Client: [NAME]
Industry: [INDUSTRY]
Problem they had: [RAW NOTES ABOUT THEIR CHALLENGE]
What we did: [RAW NOTES ABOUT SOLUTION]
Results: [RAW NUMBERS AND FEEDBACK]

Format:
- Title: "[Client] achieved [Result] with [Your Product]"
- Sections: Challenge, Solution, Results, What's Next
- Pull out 3 quotable stats and format them as callout boxes
- Include a fictional but realistic client quote based on the results
- 500-700 words

Tone: Let the results speak. Understated confidence, not hype.
```

**17. Repurpose one piece into five formats**
```
Here is a [BLOG POST / PODCAST TRANSCRIPT / VIDEO SCRIPT]:

[PASTE CONTENT]

Repurpose it into:
1. A Twitter/X thread (8 tweets)
2. A LinkedIn post (under 200 words)
3. An Instagram caption with hook + value + CTA
4. An email newsletter snippet (100 words, teasing the full piece)
5. A Reddit post for r/[RELEVANT SUBREDDIT] (match the subreddit's tone — no self-promotion vibes)

For each, adapt the tone and format to the platform. Don't just cut and paste.
```

**18. Product launch announcement**
```
Write a product launch announcement for [PRODUCT NAME].

What it does: [1-SENTENCE DESCRIPTION]
Who it's for: [TARGET USER]
Key features: [LIST 3-5]
Pricing: [PRICE/MODEL]
Available: [DATE/NOW]

I need three versions:
1. A press-release-style announcement (300 words)
2. A Product Hunt tagline + description (tagline under 60 chars)
3. A casual announcement for our existing community/email list

For all: lead with the benefit, not the feature. "Now you can [OUTCOME]" beats "We built [FEATURE]."
```

**19. Podcast show notes and chapters**
```
Here is the transcript of my podcast episode:

[PASTE TRANSCRIPT OR KEY POINTS]

Generate:
1. Episode title (compelling, not generic)
2. Episode description (150 words, hooks the listener in the first sentence)
3. Timestamped chapters (estimate logical breakpoints every 5-10 min)
4. 5 key takeaways as bullet points
5. 3 pull quotes that would work as audiogram text
6. SEO-friendly show notes with relevant keywords for [TOPIC]

Format everything in markdown.
```

**20. Email sequence for a lead magnet**
```
Write a 5-email welcome sequence for people who download my free [LEAD MAGNET TYPE] about [TOPIC].

My paid product is [PRODUCT] at [PRICE].

Sequence:
- Email 1 (immediately): Deliver the lead magnet + set expectations
- Email 2 (Day 2): Quick win — one actionable tip they can use in 5 minutes
- Email 3 (Day 4): Story-driven email about [RELEVANT PROBLEM] with a soft mention of the paid product
- Email 4 (Day 6): Social proof — results, testimonials, or data
- Email 5 (Day 8): Direct pitch with urgency (but not fake scarcity)

Each email: subject line + body. Under 200 words per email. Write like a human, not a funnel.
```

**Pro tips for Content Creation prompts:**
- Feed the AI your previous content so it can match your voice. Say: "Here are 3 examples of my writing style: [PASTE]. Match this voice."
- For SEO content, always specify the search intent. An informational query needs a different structure than a comparison or buying query.
- Ask for "two versions" and pick the better one. It takes 5 extra seconds and often surfaces a better angle.

---

### Code & Technical (21-30)

**21. Debug this error with context**
```
You are a senior [LANGUAGE/FRAMEWORK] developer.

I'm getting this error:
[PASTE FULL ERROR MESSAGE WITH STACK TRACE]

Here's the relevant code:
[PASTE CODE]

Environment: [LANGUAGE VERSION, OS, KEY DEPENDENCIES]

What I've already tried:
- [THING 1]
- [THING 2]

Don't just tell me the fix. Explain:
1. What's causing this error
2. Why my previous attempts didn't work
3. The fix (with code)
4. How to prevent this class of error in the future
```

**22. Code review with senior-dev standards**
```
Review this code as a senior developer doing a PR review.

[PASTE CODE]

Check for:
- Bugs or logic errors
- Security vulnerabilities (injection, auth issues, data exposure)
- Performance problems (N+1 queries, unnecessary re-renders, memory leaks)
- Readability and naming
- Edge cases not handled
- Test coverage gaps

Format your review as inline comments (reference line numbers).
At the end, give an overall verdict: APPROVE, REQUEST CHANGES, or NEEDS DISCUSSION.
Be direct but constructive. No sugarcoating, no rudeness.
```

**23. Write tests for existing code**
```
Write comprehensive tests for this [LANGUAGE] code using [TESTING FRAMEWORK, e.g., Jest, pytest, RSpec].

[PASTE CODE]

Include:
- Happy path tests
- Edge cases (empty inputs, null values, boundary conditions)
- Error handling tests
- At least one integration-style test if applicable

Follow [TESTING CONVENTION, e.g., AAA pattern (Arrange, Act, Assert)].
Use descriptive test names that explain the expected behavior, not the implementation.
Mock external dependencies: [LIST ANY EXTERNAL SERVICES/APIs].
```

**24. Refactor for readability**
```
Refactor this code for readability and maintainability. Do NOT change the behavior.

[PASTE CODE]

Priorities:
1. Extract functions/methods where logic is doing too many things
2. Improve variable and function names to be self-documenting
3. Remove dead code and unnecessary comments
4. Simplify conditionals (guard clauses > nested ifs)
5. Add JSDoc/docstring comments only where the "why" isn't obvious

Show me the refactored code and a bullet list of every change you made and why.
```

**25. Database query optimizer**
```
You are a database performance specialist.

This query is running slowly ([CURRENT EXECUTION TIME]) on a table with [ROW COUNT] rows:

[PASTE SQL QUERY]

Table schema:
[PASTE SCHEMA OR DESCRIBE STRUCTURE]

Current indexes:
[LIST EXISTING INDEXES]

Analyze:
1. Why is this query slow? (Explain the execution plan in plain English)
2. Optimized version of the query
3. Indexes I should add (with the CREATE INDEX statement)
4. Any schema changes that would help at scale
5. The tradeoffs of your suggestions (write speed vs read speed, etc.)
```

**26. API endpoint design**
```
Design a RESTful API endpoint for [FEATURE DESCRIPTION].

Context: This is part of a [TYPE OF APP] built with [TECH STACK].

For each endpoint, provide:
- Method + URL path (following REST conventions)
- Request body/params (with types and validation rules)
- Response shape (JSON example with realistic data)
- Error responses (400, 401, 403, 404, 422 — with error message format)
- Rate limiting recommendation
- Auth requirement

Also include:
- Edge cases to handle
- A curl example for each endpoint
- Any pagination/filtering patterns needed
```

**27. System design from requirements**
```
You are a senior systems architect.

Design a system for: [DESCRIBE WHAT IT DOES IN 2-3 SENTENCES]

Requirements:
- Expected users: [NUMBER]
- Expected requests/sec at peak: [NUMBER]
- Data characteristics: [DESCRIBE — real-time? heavy reads? heavy writes?]
- Must integrate with: [EXTERNAL SYSTEMS]
- Budget constraints: [IF ANY]

Provide:
1. High-level architecture diagram (describe in text/ASCII)
2. Technology choices with justification (don't just pick the trendy thing)
3. Data model (key entities and relationships)
4. The 3 hardest problems in this design and how you'd solve each
5. What you'd build in v1 vs what you'd defer

Be opinionated. I want your actual recommendation, not "it depends."
```

**28. Explain this codebase to a new hire**
```
I'm onboarding a new developer to this project. Explain the codebase based on this structure and key files.

Project structure:
[PASTE tree OUTPUT OR DESCRIBE FOLDER STRUCTURE]

Key files:
[PASTE 2-3 CRITICAL FILES OR THEIR SUMMARIES]

Tech stack: [LIST]

Write an onboarding doc that covers:
1. What this project does (2 sentences, plain English)
2. Architecture overview (how the pieces fit together)
3. How to run it locally (assume standard [LANGUAGE] setup)
4. Where to find things: "If you need to change X, look in Y"
5. Gotchas and tribal knowledge that aren't documented anywhere
6. The 3 files a new dev should read first

Tone: Friendly senior dev walking a junior through things.
```

**29. Migrate code between frameworks/versions**
```
Help me migrate this code from [OLD FRAMEWORK/VERSION] to [NEW FRAMEWORK/VERSION].

Current code:
[PASTE CODE]

Specific things to migrate:
- [DEPRECATED API 1]
- [CHANGED PATTERN 1]
- [NEW REQUIREMENT]

For each change:
1. Show the before and after
2. Explain what changed and why the new way is better
3. Flag any breaking changes that might affect other parts of the codebase

Also list any dependency changes needed in [package.json / requirements.txt / Gemfile / etc.].
```

**30. Write a technical RFC/proposal**
```
Write a technical RFC for: [PROPOSED CHANGE OR NEW SYSTEM]

Context: We currently [DESCRIBE CURRENT STATE]. The problem is [DESCRIBE PROBLEM].

Follow this structure:
- Title
- Author + Date
- Status: Draft
- Summary (3 sentences max)
- Motivation (Why are we doing this? What's the cost of inaction?)
- Proposed Solution (detailed, with code examples where helpful)
- Alternatives Considered (at least 2, with pros/cons of each)
- Migration Plan (how do we get from here to there without breaking things?)
- Risks and Open Questions
- Success Metrics (how do we know this worked?)

Tone: Clear, persuasive, technically rigorous. Written for an audience of [SENIOR DEVS / MIXED TECHNICAL].
```

**Pro tips for Code & Technical prompts:**
- Always include your language version and key dependency versions. A Python 3.8 answer is different from a Python 3.12 answer.
- Paste the actual error, not your paraphrase of it. The stack trace contains information you might not think is relevant.
- For architecture and design prompts, state your constraints upfront. "We're a team of 3" changes the recommendation dramatically.
- When asking for code, specify: "Include error handling" and "Add types" — otherwise most models skip both.

---

### Marketing & Social Media (31-40)

**31. Landing page copy**
```
Write landing page copy for [PRODUCT/SERVICE].

Target customer: [SPECIFIC PERSON — e.g., "freelance designers making $50-100K who want to raise their rates"]
Main value prop: [WHAT THEY GET]
Price: [AMOUNT]
Key differentiator from alternatives: [WHAT MAKES YOU DIFFERENT]

Sections needed:
1. Hero: Headline (under 10 words) + subheadline + CTA button text
2. Problem section (3 pain points they'll nod at)
3. Solution section (how your product solves each pain point)
4. Social proof section (suggest what type of proof would work best here)
5. FAQ (5 questions, focus on objection-handling)
6. Final CTA with urgency

Write like you're talking to ONE person, not "users." No jargon.
```

**32. A/B test variations for headlines**
```
I need A/B test variations for this headline on my [LANDING PAGE / AD / EMAIL]:

Current headline: "[YOUR CURRENT HEADLINE]"
Page goal: [WHAT YOU WANT THE VISITOR TO DO]
Audience: [WHO]

Generate 10 alternative headlines across these angles:
- 2 benefit-driven (what they GET)
- 2 pain-driven (what they AVOID)
- 2 curiosity-driven (open a loop)
- 2 social-proof-driven (numbers, authority)
- 2 contrarian/unexpected (challenge assumptions)

For each, explain in 1 sentence why it might outperform the current version.
```

**33. Facebook/Instagram ad copy**
```
Write ad copy for a [FACEBOOK / INSTAGRAM] [FORMAT: single image, carousel, video] ad.

Product: [PRODUCT]
Target audience: [DETAILED AUDIENCE — demographics, interests, pain points]
Objective: [AWARENESS / TRAFFIC / CONVERSIONS]
Budget level: [LOW / MEDIUM / HIGH — affects copy length]

Provide 3 variations:
1. Short-form (under 50 words, punchy)
2. Story-driven (100-150 words, relatable scenario)
3. Testimonial-style (as if a customer wrote it)

For each: primary text, headline, description, and CTA button recommendation.
Include image/creative direction suggestions.
Don't use "Tired of...?" — it's been done to death.
```

**34. SEO keyword cluster strategy**
```
I run a [TYPE OF BUSINESS] targeting [AUDIENCE].

My domain authority is approximately [LOW / MEDIUM / HIGH].
I currently rank for: [LIST ANY KNOWN KEYWORDS, or "nothing yet"].

Build a keyword cluster strategy around the topic: "[BROAD TOPIC]"

For each cluster, provide:
- Pillar page topic + target keyword
- 5-7 supporting article topics with long-tail keywords
- Estimated difficulty (easy / medium / hard) based on typical competition
- Suggested content type for each (guide, listicle, comparison, tool, etc.)
- Internal linking strategy between pillar and supporting content

Prioritize: which cluster should I tackle first for fastest results?
```

**35. Email subject line generator**
```
Generate 20 email subject lines for this campaign:

Email purpose: [WHAT THE EMAIL IS ABOUT]
Audience: [WHO'S RECEIVING IT]
Desired action: [WHAT YOU WANT THEM TO DO]
Sending from: [BRAND NAME or PERSON NAME]

Give me:
- 5 curiosity-based (open loops, unexpected angles)
- 5 benefit-based (clear value proposition)
- 5 urgency-based (time-sensitive, FOMO — but not fake)
- 5 personal/conversational (feels like it's from a friend)

Mark which 3 you'd test first and why. Keep all under 50 characters.
Don't use ALL CAPS or excessive punctuation.
```

**36. Competitor content gap analysis**
```
I compete with [COMPETITOR URL/NAME] in the [NICHE] space.

My content covers: [LIST YOUR MAIN TOPICS/PAGES]
Their content covers: [LIST THEIR MAIN TOPICS OR SAY "analyze their sitemap"]

Identify:
1. Topics they cover that I don't (content gaps I should fill)
2. Topics I cover better than them (double down opportunities)
3. Topics neither of us covers well (blue ocean content)
4. Their top-performing content format (guides? tools? videos?)

For the top 5 gaps, give me:
- Article title
- Target keyword
- Angle that makes ours better than theirs
- Estimated word count
```

**37. Product Hunt launch checklist and copy**
```
I'm launching [PRODUCT NAME] on Product Hunt.

One-line description: [WHAT IT DOES]
Target user: [WHO]
Pricing: [FREE / FREEMIUM / PAID]
Unique angle: [WHY IT'S INTERESTING]

Generate:
1. Tagline (under 60 characters, punchy)
2. Description (3 short paragraphs: problem, solution, why now)
3. First comment as the maker (personal, authentic, tells the backstory)
4. 5 gallery image descriptions (what each screenshot/graphic should show)
5. A launch-day tweet thread (5 tweets)
6. A pre-launch email to my list asking for support

Tone: Excited but not desperate. Maker energy, not corporate energy.
```

**38. Brand voice guide**
```
Help me define a brand voice guide for [BRAND/PRODUCT].

About us: [2-3 SENTENCES ABOUT YOUR BRAND]
Our audience: [WHO THEY ARE AND WHAT THEY CARE ABOUT]
Brands we admire the tone of: [LIST 2-3 REFERENCE BRANDS]
We are NOT: [BRANDS/VIBES YOU WANT TO AVOID]

Create a voice guide with:
- 4 voice attributes (e.g., "Bold but not arrogant") with do's and don'ts for each
- A "This, not that" table: 10 examples of on-brand vs off-brand phrasing
- Vocabulary: 10 words we love, 10 words we never use
- Sample copy: rewrite this sentence in our brand voice: "[GENERIC SENTENCE]"
```

**39. Referral program design**
```
Design a referral program for [PRODUCT/SERVICE].

Current customers: [NUMBER]
Average customer LTV: [AMOUNT]
Current acquisition cost: [AMOUNT]
Product type: [ONE-TIME / SUBSCRIPTION]

Propose:
1. Incentive structure (what both referrer and referee get)
2. Mechanics (link-based? code? automated?)
3. Referral email template (what the referrer sends)
4. Landing page copy for the referee
5. 3 moments in the customer journey to trigger a referral ask
6. How to prevent gaming/abuse
7. Success metrics to track

Benchmark against successful referral programs in [SIMILAR INDUSTRY].
```

**40. Viral social media hook formulas**
```
Give me 15 viral hook formulas for [PLATFORM: TikTok / Reels / YouTube Shorts] in the [NICHE] space.

My content style: [EDUCATIONAL / ENTERTAINING / BOTH]
My target audience: [WHO]
Topics I cover: [LIST 3-5 TOPICS]

For each hook:
- The formula (with blanks to fill in)
- A filled-in example using my niche
- Why it works psychologically (1 sentence)

Focus on hooks that work in the first 2 seconds.
Avoid: "What if I told you..." and "POV:" — they're oversaturated.
```

**Pro tips for Marketing & Social Media prompts:**
- Include your audience's awareness level. Cold audiences need different copy than warm audiences. Say: "These people have never heard of us" or "These are existing email subscribers."
- Feed in actual past performance data: "This subject line got a 22% open rate. Beat it."
- For social media, specify the platform. LinkedIn copy does not work on Twitter. Instagram carousels need different structure than Reels.

---

### Career & Professional (41-50)

**41. Resume bullet point rewriter**
```
Rewrite these resume bullet points to be achievement-focused with quantified impact.

My role: [JOB TITLE] at [COMPANY TYPE]
Current bullet points:
- [BULLET 1, e.g., "Managed a team of developers"]
- [BULLET 2]
- [BULLET 3]
- [BULLET 4]
- [BULLET 5]

For each, rewrite using this formula: [Action verb] + [What you did] + [Measurable result]

If I didn't provide metrics, suggest realistic ones I should try to get (e.g., "If you can find the percentage improvement, add it").

Target role I'm applying for: [ROLE]. Emphasize skills relevant to this role.
```

**42. Interview answer using STAR method**
```
Help me prepare a STAR answer for this interview question:

Question: "[INTERVIEW QUESTION, e.g., 'Tell me about a time you dealt with a difficult stakeholder']"

My real situation:
- Situation: [BRIEF CONTEXT — what was happening]
- Task: [WHAT WAS YOUR RESPONSIBILITY]
- Action: [WHAT YOU ACTUALLY DID — be specific]
- Result: [WHAT HAPPENED — include numbers if possible]

Take my raw notes and turn them into a polished 90-second verbal answer.
Keep it conversational, not robotic. Include a 1-sentence reflection at the end ("What I learned from this was...").
```

**43. Salary negotiation script**
```
I've received a job offer and want to negotiate.

Offer details:
- Role: [TITLE]
- Company: [COMPANY TYPE/SIZE]
- Base salary offered: [AMOUNT]
- I want: [TARGET AMOUNT]
- My leverage: [WHY YOU DESERVE MORE — competing offers, rare skills, experience]
- Market rate for this role: [RANGE, if known]

Write me:
1. An email response to the initial offer (grateful but negotiating)
2. Key talking points if they push back
3. Three non-salary items to negotiate if they can't budge on base (signing bonus, equity, remote flexibility, PTO, etc.)
4. A graceful acceptance script for when we reach agreement

Tone: Confident and professional. Not aggressive, not apologetic.
```

**44. Weekly status update that gets noticed**
```
Help me write a weekly status update that makes my work visible.

My role: [TITLE]
This week I:
- [ACCOMPLISHMENT 1 — raw notes are fine]
- [ACCOMPLISHMENT 2]
- [ACCOMPLISHMENT 3]

Blockers: [ANY BLOCKERS]
Next week: [PLANNED WORK]

Rewrite this as a concise status update that:
- Leads with impact, not activity ("Reduced deploy time by 40%" not "Worked on CI/CD")
- Connects my work to team/company goals
- Flags blockers with a proposed solution, not just the problem
- Is under 200 words
- Uses bullet points, not paragraphs

Format for [SLACK / EMAIL / JIRA].
```

**45. Career pivot positioning**
```
I'm transitioning from [CURRENT ROLE/INDUSTRY] to [TARGET ROLE/INDUSTRY].

My background:
- Current role: [TITLE] for [YEARS] years
- Key skills: [LIST]
- Relevant experiences that transfer: [LIST]
- Gaps I'm aware of: [LIST]

Help me:
1. Identify 5 transferable skills I might be undervaluing
2. Write a positioning statement (2-3 sentences for my LinkedIn headline/summary)
3. Rewrite my elevator pitch for networking events (30 seconds, no jargon)
4. Suggest 3 "bridge" roles that use my existing skills while building new ones
5. Create a 90-day learning plan for the biggest skill gaps
```

**46. 1:1 meeting preparation**
```
Help me prepare for my 1:1 with my [MANAGER / DIRECT REPORT].

Context:
- Our relationship: [GOOD / NEEDS WORK / NEW]
- My goal for this meeting: [WHAT YOU WANT TO WALK AWAY WITH]
- Recent context: [ANY RELEVANT EVENTS — project shipped, missed deadline, reorg, etc.]
- Things I want to bring up: [LIST]
- Things they might bring up: [LIST]

Generate:
1. An opening question to set a good tone
2. Talking points ordered by priority
3. How to frame [DIFFICULT TOPIC] constructively
4. Questions to ask that show strategic thinking (not just status updates)
5. A closing statement that confirms next steps
```

**47. Personal brand content calendar**
```
Create a 30-day content calendar for building my personal brand on [PLATFORM].

I'm a [YOUR ROLE] who wants to be known for [YOUR EXPERTISE].
Target audience: [WHO YOU WANT TO ATTRACT — recruiters, clients, peers]
Posting frequency: [X TIMES PER WEEK]
Content pillars: [LIST 3-4 TOPICS YOU'LL ROTATE]

For each post, provide:
- Day and content pillar
- Post type (text, image, video, carousel, poll)
- Topic/angle in one sentence
- Hook (first line)

Include a mix of:
- Educational posts (teach something)
- Story posts (personal experience)
- Opinion posts (take a stance)
- Engagement posts (questions, polls)

No motivational quotes. No "5 AM routine" content.
```

**48. Difficult conversation script**
```
Help me prepare for a difficult conversation.

Situation: [DESCRIBE — e.g., "I need to tell my teammate their code reviews are too harsh and it's affecting the team"]
My goal: [DESIRED OUTCOME]
Their likely perspective: [HOW THEY PROBABLY SEE IT]
Relationship context: [PEER / MANAGER / REPORT / CLIENT]

Write:
1. An opening statement that's direct but not attacking (use "I" statements)
2. 3 specific examples I can reference (based on my situation, help me frame them)
3. Responses to likely pushback:
   - If they get defensive: [RESPONSE]
   - If they dismiss it: [RESPONSE]
   - If they agree immediately: [HOW TO SOLIDIFY COMMITMENTS]
4. A closing that preserves the relationship and confirms next steps

Tone: Calm, direct, empathetic. Never passive-aggressive.
```

**49. Performance review self-assessment**
```
Help me write a performance review self-assessment.

My role: [TITLE]
Review period: [TIMEFRAME]

My accomplishments:
- [RAW NOTES ON WHAT I DID — dump everything, I'll help you organize]

My goals from last review:
- [GOAL 1]: [STATUS]
- [GOAL 2]: [STATUS]
- [GOAL 3]: [STATUS]

Areas I grew in: [LIST]
Areas I want to develop: [LIST]

Write a self-assessment that:
- Leads with the 3 highest-impact accomplishments (with metrics where possible)
- Honestly addresses goals I didn't fully meet — frame as learning, not excuses
- Shows self-awareness about development areas without undermining my case for promotion
- Ends with clear goals for next period that align with [COMPANY/TEAM PRIORITIES]
- Is under 500 words (no one reads a novel)
```

**50. Meeting agenda that prevents "this could have been an email"**
```
I need to run a [LENGTH]-minute meeting about [TOPIC].

Attendees: [LIST ROLES, not necessarily names]
Goal: By the end, we need to [SPECIFIC OUTCOME — a decision, a plan, alignment on X]
Pre-read: [ANY CONTEXT ATTENDEES SHOULD HAVE]

Create:
1. A meeting invite description that tells people exactly why they're invited and what to prepare
2. A timed agenda:
   - Each section: topic, owner, time allocation, format (discussion / presentation / decision)
   - Include a "parking lot" section for off-topic items
3. A decision framework for the key decision (recommend: RAPID, DACI, or simple majority — pick what fits)
4. A post-meeting template: decisions made, action items with owners and deadlines

Design the agenda so we can cut 10 minutes if we're running over.
```

**Pro tips for Career & Professional prompts:**
- For resumes and interviews, always specify the target role. The same experience should be framed differently for a management role vs an IC role.
- Include the company's values or job description language. The AI can mirror their terminology, which is exactly what recruiters look for.
- For difficult conversations, practice the script out loud, not just in your head. The AI is writing — you're speaking. Adjust for how you actually talk.

---

## How to Get Even More Out of These Prompts

1. **Chain them.** Use prompt #6 (customer discovery questions) to gather data, then feed the responses into prompt #7 (churn analysis). The prompts work even better in sequence.

2. **Iterate, don't restart.** After the first output, say: "This is good. Now make it more [SPECIFIC — concise, aggressive, technical, casual]." The second draft is almost always better.

3. **Save your best prompts.** Build a personal prompt library. A prompt that works for your industry, your audience, and your voice is worth more than any generic template.

4. **Add examples.** The single most underused technique: "Here's an example of what good looks like: [PASTE EXAMPLE]. Now create something in this style for [YOUR SITUATION]."

5. **Tell the AI what NOT to do.** "Don't use buzzwords." "Don't start with a question." "Don't give me more than 5 bullet points." Constraints improve output dramatically.

---

## Want More?

If you found these 50 templates useful, you're probably the kind of person who'd get a lot out of a full prompt library.

I built [Midas Tools](https://www.midastools.co) — a collection of 2,000+ professionally curated prompts organized into 15 niche-specific kits (real estate, content creators, freelancers, small business, and more). Each kit is $29 and structured so you can find the right prompt in under 10 seconds. No fluff, no filler.

You can also try our [Free AI Prompt Generator](https://www.midastools.co/prompt-generator) to create custom prompts instantly — no signup required.

---

*If this article saved you time, a bookmark or share helps more than you think. Drop a comment with your favorite prompt from the list or share one of your own — I read every one.*
