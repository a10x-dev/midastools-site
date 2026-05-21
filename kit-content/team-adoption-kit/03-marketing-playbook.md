# Midas Tools — AI Team Adoption Kit
# 03: Marketing Playbook

Six paste-and-run prompts for the workflows marketers spend most of their week on: campaign briefs, content calendar, competitor analysis, SEO optimization, social scheduling, and ad copy variants. Built for a B2B marketing team running demand gen + content + social out of a 3–15 person org.

These work in Claude Opus 4.7 (best for long-form briefs + competitor synthesis), GPT-5 (best for ad copy + headlines), and Gemini 2.5 (best for SEO + keyword analysis).

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[PRODUCT] — What you sell, 1-sentence
[ICP] — Ideal customer profile
[BRAND VOICE] — 3 adjectives (e.g. "direct, technical, no-bullshit")
[CAMPAIGN GOAL] — Awareness, demand gen, retention, launch, etc.
```

---

## Prompt 1: Quarterly Campaign Brief Writer

### Prompt

```
You are a Head of Marketing at [COMPANY NAME] writing the brief for a quarterly demand-gen campaign.

CAMPAIGN CONTEXT:
- Campaign name: [NAME]
- Goal: [CAMPAIGN GOAL — specific. e.g. "300 SQLs from mid-market accounts in 90 days"]
- Quarter: [Q + YEAR]
- Budget: $[BUDGET — paid spend only, exclude headcount]
- Team: [WHO IS ON THIS — list roles]
- Why now: [TRIGGER OR STRATEGIC REASON]

WHAT WE SELL: [PRODUCT]
ICP TARGETED: [ICP]
BRAND VOICE: [BRAND VOICE]

Produce a campaign brief in this exact structure (modeled on the Stripe / HubSpot / Klaviyo format):

## TL;DR
3 sentences. Goal + audience + headline strategy.

## Business Objective
The actual business outcome we're trying to drive. Pipeline $, logos, retention %, etc. Quantify.

## Target Audience
- Primary persona (role + company profile)
- Pain we're tapping into
- Where they spend time (channels, communities, publications)
- What they read, listen to, follow
- What they DON'T trust (so we avoid those moves)

## Positioning
- Headline message (10 words or fewer)
- Supporting message (1 sentence)
- Proof points (3 — quantified, customer-attributed when possible)
- Anti-message (what we are NOT saying — competitors say it, we don't)

## Channel Strategy
For each channel:
- Channel
- Role in funnel (top / middle / bottom)
- Format (paid social, content, webinar, ABM, email, partner, podcast, event)
- Spend allocation ($)
- KPI for this channel
- Owner

## Content & Asset Plan
List every asset to produce, with owner + due date:
- Hero piece (long-form: report, eBook, webinar, video)
- Atomic assets (10-15 cut-downs: social, email, ads, blog, sales enablement)
- Sales enablement (battlecards, talk track, demo flow updates)

## Timeline (12 weeks)
Week-by-week milestone calendar. What ships, what launches, what's measured.

## Success Metrics (Leading + Lagging)
Leading (weekly):
- [Metric] target [Number]
Lagging (end of quarter):
- [Metric] target [Number]

## Risks & Mitigations
Top 5 things that could kill the campaign + a specific mitigation for each.

## Decision Log
Things we are deliberately NOT doing this quarter and why.

## Approvals
Sign-off section: Marketing, Sales, Product, Exec.

Length: 2 pages max. Briefs longer than 2 pages don't get followed.
```

---

## Prompt 2: 90-Day Content Calendar Builder

### Prompt

```
You are the Content Lead at [COMPANY NAME] building a 90-day content calendar.

CONTEXT:
- We sell: [PRODUCT]
- ICP: [ICP]
- Brand voice: [BRAND VOICE]
- Existing publishing cadence: [e.g. 2 blog posts/wk + 1 newsletter + 10 LinkedIn + 5 X posts]
- Team capacity: [N WRITERS, N DESIGNERS, N VIDEO]
- Hero campaign this quarter: [CAMPAIGN NAME + THEME]
- Top 5 SEO keywords we want to rank for: [LIST]
- Strategic themes for the quarter (pick 3-4): [LIST]

PAST WINNERS (paste 3-5 of our best-performing pieces from last quarter with metrics):
[PASTE]

Produce a 90-day editorial calendar in this format:

## Calendar Structure
- Theme weeks: assign each of the next 13 weeks to one of the strategic themes. Themes repeat in a rotation.
- Pillar posts: 1 long-form pillar piece per theme (4 total this quarter). 2000-4000 words, SEO-optimized.
- Cluster posts: 2-3 supporting pieces per pillar (8-12 total).
- Atomic content per pillar: cut-downs into newsletter / LinkedIn / X / podcast / video.

## Week-by-Week Calendar (13 weeks)
For each week, output a table:

WEEK [N] — THEME: [THEME] — Hero piece this week: [TITLE]

| Date | Channel | Format | Title / Topic | Owner | Status |
|------|---------|--------|---------------|-------|--------|
| Mon  | Blog    | Pillar | [TITLE]       | [NAME] | Draft  |
| Tue  | Newsletter | Roundup | [TOPIC] | [NAME] | Idea |
| ...  | ...     | ...    | ...           | ...   | ...    |

Each week should have: 1 long-form (blog or report or video), 1 newsletter, 5-7 social posts (LinkedIn, X), 1 sales-enablement asset.

## SEO Plan
For each pillar piece:
- Primary keyword + search volume + difficulty
- Secondary keywords (3-5)
- Cluster post topics that link to this pillar
- Internal link targets

## Atomic Cut-Down Recipe
For each pillar piece, list the 8-12 atomic assets to extract:
- 1 newsletter feature
- 3 LinkedIn posts
- 5 X posts
- 1 short-form video (90 seconds)
- 1 podcast guest pitch using this angle
- 1 sales one-pager
- 2 paid social ad variants

## Measurement
Weekly leading indicator: [METRIC]
End-of-quarter lagging indicator: [METRIC]

## Editorial Rules of the Road
3-5 rules the team commits to:
- No publishing without a primary KPI defined per piece
- No piece longer than 1500 words unless it's a pillar
- Every blog post linked from at least 2 internal pages
- (Etc.)

Tone: Operator's calendar. Concrete, dated, owned.
```

---

## Prompt 3: Competitor Deep-Dive Analysis

### Prompt

```
You are a Head of Product Marketing at [COMPANY NAME] doing a competitive deep-dive on [COMPETITOR NAME].

OUR PRODUCT: [PRODUCT]
OUR ICP: [ICP]
COMPETITOR PUBLIC ASSETS (paste as much as you have — homepage, pricing page, customer logos, recent product launches, hiring posts, exec LinkedIn updates, podcast appearances, press, G2/Reddit reviews):

[PASTE 2-5 PAGES]

Produce a deep-dive in this exact structure:

## TL;DR (read by the CEO)
3 sentences. Their current strategy, biggest threat to us, biggest opportunity for us.

## Their Strategy (Inferred)
- Stage of company (early / growth / late)
- Stated mission + actual go-to-market
- Recent strategic moves (last 6 months) — what they're investing in
- Where they're heading (next 12 months — based on hiring, press, exec statements)

## Their Positioning
- Headline message (their words)
- Who they're targeting (ICP — be specific)
- Their proof points
- Their differentiation claims (and which ones are real vs. marketing)

## Their Pricing & Packaging
- Pricing tiers (paste actual numbers)
- What's in each tier
- Enterprise pricing pattern
- Discount tells (which segments they discount, when)
- Where they monetize aggressively vs. where they discount

## Their Product (Honest Assessment)
- What they do well (3-5 things — be honest, this is for internal use)
- What they do poorly (3-5 things)
- What they're shipping next (based on changelog, beta announcements, job posts for new feature areas)
- Their technical / architectural choices (if visible from API docs, engineering blog, GitHub)

## Their Marketing
- Channels they invest in (paid, content, events, ABM, community, podcast)
- Estimated marketing team size + key hires
- Content cadence + quality
- Standout campaigns last 90 days

## Their Sales Motion
- PLG vs. enterprise mix
- Sales team size (LinkedIn count)
- Typical deal size
- Implementation timeline they pitch

## Customer Sentiment
Synthesize the G2 / Reddit / Twitter / LinkedIn signals:
- Top 3 praises
- Top 3 complaints
- Recent customer wins (logos they've added)
- Recent customer losses (if surfaced)

## Threat Assessment vs. Us
Where they beat us today (be brutally honest):
1. [GAP]
2. [GAP]
3. [GAP]

Where we beat them today:
1. [WIN]
2. [WIN]
3. [WIN]

## 3 Strategic Moves We Should Make
Specific actions, owners, and time horizons:
1. [MOVE] — owner [WHO] — by [WHEN]
2. [MOVE] — owner [WHO] — by [WHEN]
3. [MOVE] — owner [WHO] — by [WHEN]

## 3 Moves We Should NOT Make
Defensive — things that would be a mistake to copy from them.

Tone: Brutally honest. No marketing-speak. This goes to the exec team.
```

### Pro tip

Run this quarterly per top competitor. Stash output in a shared Notion / Confluence as `/competitors/[name]-[quarter].md`. Diffing quarter-over-quarter reveals their strategy faster than anything they say publicly.

---

## Prompt 4: SEO Page Optimizer

### Prompt

```
You are a senior SEO strategist at [COMPANY NAME] optimizing a single page for organic search.

PAGE URL OR PAGE TITLE: [URL/TITLE]
PRIMARY KEYWORD WE WANT TO RANK FOR: [KEYWORD]
CURRENT RANKING (if known): [POSITION] for this keyword

CURRENT PAGE CONTENT:
[PASTE FULL PAGE TEXT]

TOP 3 PAGES CURRENTLY RANKING FOR THIS KEYWORD (paste URLs + first 500 words of each if you have them):
[PASTE]

ABOUT US:
- Product: [PRODUCT]
- ICP: [ICP]
- Differentiator: [WHY US IN ONE SENTENCE]

Produce an SEO optimization plan in this exact structure:

## 1. Keyword Intent Analysis
- Search intent (informational / navigational / commercial / transactional)
- What is the searcher actually trying to accomplish?
- What "job to be done" does this query represent?
- Is this page the right format for the intent? (e.g. ranking for "how to" needs a guide, not a product page)

## 2. SERP Competition Analysis
For each of the top 3 ranking pages:
- Word count
- Structure (H1/H2/H3 outline)
- What they cover that we DON'T
- What they cover that we cover better
- E-E-A-T signals (author bio, expertise, trust signals)

## 3. Content Gap Analysis
3-5 specific topics our page should add to be more comprehensive than the top result. Be specific — not "more about SEO" but "a section on title tag character limits with examples."

## 4. On-Page Optimizations
Provide the rewritten elements:

### Title Tag (60 chars max)
Current: [CURRENT]
New: [REWRITE]

### Meta Description (155 chars max)
Current: [CURRENT]
New: [REWRITE — must include primary keyword + a hook]

### H1 (the visible page heading)
Current: [CURRENT]
New: [REWRITE]

### H2 / H3 Outline (rewritten)
Provide a complete new heading outline. 6-10 H2s, with H3s nested where appropriate. Each H2 should target a related keyword variation.

### Opening 100 Words
A rewritten intro that includes the primary keyword in the first sentence + answers the search intent before the fold.

### FAQ Section (5 questions)
Pull from "People Also Ask" patterns. Each Q + a 50-75 word answer. Format for FAQ schema markup.

## 5. Internal Linking Plan
- Pages on our site that should link TO this page (anchor text suggestions)
- Pages on our site this page should link TO (relevant clusters)

## 6. Schema Markup to Add
Recommend the JSON-LD schema types appropriate for this page (Article, Product, FAQ, HowTo, etc.) and produce the JSON.

## 7. Trust / E-E-A-T Signals to Add
- Author bio + credentials
- Date last updated
- Original research / data / citations
- Customer quotes / case studies

## 8. Predicted Impact
- Realistic ranking target in 60-90 days
- Estimated monthly organic traffic at target ranking
- Conversion expectation if we hit target

Tone: Direct. SEO is a math problem, not a vibe.
```

---

## Prompt 5: Multi-Channel Social Scheduling

### Prompt

```
You are the Social Media Lead at [COMPANY NAME] turning a single piece of source content into a week of multi-channel social posts.

SOURCE CONTENT (paste a blog post, podcast transcript, customer story, product update, or talk):
[PASTE 1000-5000 WORDS]

BRAND VOICE: [BRAND VOICE]
CHANNELS WE POST ON: [LinkedIn / X / Threads / YouTube / Instagram / TikTok — list]
TARGET AUDIENCE: [ICP]
GOAL OF THIS CONTENT: [Awareness / Demand / Hire / Community / etc.]

Produce a week of posts in this exact format:

## Content Distribution Plan

### LinkedIn (5 posts across the week)

POST 1 — Day 1 — Hook + key insight
[FULL POST TEXT — 1200 chars max — first line is a scroll-stopper, line 2-3 is white space, body is 5-7 short lines, end with one question or one ask]

POST 2 — Day 2 — Behind the scenes / how we did it
[FULL POST TEXT]

POST 3 — Day 4 — Counterintuitive take from the content
[FULL POST TEXT]

POST 4 — Day 5 — Customer / outcome / proof
[FULL POST TEXT]

POST 5 — Day 6 — Recap + CTA
[FULL POST TEXT]

### X / Twitter (8 posts across the week)
For each: full text, max 280 chars. Mix of:
- 1 thread (5-7 tweets, with the full thread text)
- 3 standalone takes
- 2 reply opportunities (templates to use when replying in conversations about [TOPIC])
- 2 visual asset suggestions (chart, screenshot, meme)

### YouTube / Video (1 short, 1 long if applicable)
For each:
- Title (60 chars max, packaged for CTR)
- Hook (first 3 seconds)
- Outline (6-8 beats)
- Thumbnail concept
- Description (with timestamps + links)

### Newsletter Section (if we send one this week)
- Subject line (3 variants)
- Pre-header
- 200-word feature pulling from this content
- 1 CTA

### Threads / Instagram (3 posts)
Format-specific:
- Carousel post (5-7 slides, slide text only)
- Single-image quote post (1 quote pulled from the source)
- Reels concept (3-shot outline)

## Tone & Voice Rules
- Match [BRAND VOICE] across every channel
- LinkedIn: thought-leadership but human, never corporate
- X: punchy, opinionated, 1 idea per post
- YouTube: hook hard in first 3 seconds, structure matters
- Newsletter: feels like a friend writing
- Threads/Instagram: visual-first, copy supports image

## Hashtags & Mentions
For each channel, list 3-5 relevant hashtags (only if they're commonly used in that channel for our audience) and any accounts worth tagging.

## Scheduling Rules
- LinkedIn: Tue/Wed/Thu 8-10am PT optimal
- X: 9am, 12pm, 4pm PT, M-F
- YouTube: Thursday evenings highest CTR for B2B
- Don't post on Mondays before 10am or Fridays after 2pm

Output should be paste-ready into a social scheduler.
```

---

## Prompt 6: Ad Copy Variant Generator

### Prompt

```
You are a senior performance marketer at [COMPANY NAME] writing ad copy variants for a paid campaign.

CAMPAIGN CONTEXT:
- Channel: [LinkedIn / Meta / Google / Reddit / X / YouTube]
- Format: [Single image / Carousel / Video / Text only / Sponsored content]
- Funnel stage: [Awareness / Consideration / Conversion / Retargeting]
- Budget tier: [$X/day]
- Audience: [SPECIFIC TARGETING — title, industry, company size, intent signals]

OFFER:
- Product: [PRODUCT]
- Hook / value prop: [WHAT THE AD PROMISES]
- CTA destination: [URL — landing page, demo book, trial signup, content download]
- Proof point: [CUSTOMER / NUMBER / RESULT]

BRAND VOICE: [BRAND VOICE]
WHAT WE'RE NOT: [3 things we don't sound like — e.g. "no growth-hacker hype", "no enterprise-speak", "no AI-bro slop"]

Produce 12 ad variants across 4 angles, 3 variants each. Be specific about which angle you're testing.

## Angle 1: PAIN — "Here's the cost of NOT doing this"
### Variant 1A — Headline + body + CTA
[Headline — character limit per platform — e.g. 30 chars LinkedIn primary]
[Body copy — fits platform limit]
[CTA button text]

### Variant 1B
[Same structure]

### Variant 1C
[Same structure]

## Angle 2: PROOF — "Here's who else did this and what happened"
### Variant 2A through 2C

## Angle 3: STATUS — "This is what top operators are doing right now"
### Variant 3A through 3C

## Angle 4: CONTRARIAN — "Everyone tells you X. We say Y."
### Variant 4A through 4C

## Visual Direction
For each angle, 1-2 visual concepts:
- What's in the frame (subject, setting, mood)
- Style (clean product shot / hand-drawn / data viz / customer face / dark editorial)
- Text overlay (if any) and font/size hierarchy

## Testing Plan
- Recommended split: 25% budget per angle for week 1
- Kill rules: any ad below [CTR/CPM benchmark] after [SPEND THRESHOLD]
- Scaling rules: any ad above [BENCHMARK] gets 50% more budget weekly
- What to do after 1 week: keep top 2, kill bottom 2, generate 4 new variants on the winning angle

## Compliance Checklist
- No unsubstantiated claims
- No "guaranteed results" language
- Customer quotes are real and attributable
- Image rights cleared
- Landing page matches ad promise (no bait-and-switch)

Tone: Pattern interrupts. Specifics. Numbers. Names. Anti-fluff.
```

### Pro tip

The variant that wins is usually the angle you were sure wouldn't work. Always run all 4 angles for the first 7 days even if you have a strong gut feel — gut feel and ad performance correlate weakly.

---

## Pro Tips for Marketing Adoption

- **Start with the campaign brief.** It's the highest-leverage prompt — one good brief saves 4 hours of meetings + creates alignment across 5 people.
- **Standardize the calendar template.** Every team member uses the same output format from Prompt 2. Then anyone can pinch-hit and the calendar doesn't degrade.
- **Don't let AI write the final ad.** AI gives you 20 variants in 5 minutes. The marketer picks the angle, the human writes the final copy. Pure AI copy in performance ads underperforms by 30-40% on CTR.
- **Use the SEO prompt on your top 20 pages first.** 80% of organic upside is in the existing pages, not new content.
- **The competitor deep-dive is a quarterly ritual.** Same person runs it every quarter, same format. Builds compounding intel.

---

© 2026 Midas Tools — www.midastools.co
