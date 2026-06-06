# AI SaaS Founder Prompts — 14 Copy-Paste Templates for Users, Churn, Investors & Roadmap (April 2026)

Published: https://gist.github.com/manduks/bc445120f5588d30c71c896f0210b00d

> **Free prompt enhancer:** [midastools.co/prompt-enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) — paste any messy founder draft (an investor update, a cancellation follow-up, a pricing email) and get back something you'd actually ship.
> **Deep dive:** [6 AI Tools SaaS Founders Use to Hit $10K MRR Faster (2026)](https://www.midastools.co/blog/ai-saas-founder-tools-2026?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet)

Most SaaS founders aren't blocked on ideas. They're blocked on the 14 recurring writing tasks that sit between a feature shipped and a dollar received — the investor update, the churn reply, the landing headline, the onboarding sequence, the pricing email, the hiring JD, the changelog.

These are 14 prompts I actually use. Copy, paste, fill the brackets, ship.

---

## TL;DR — 14 prompts worth pinning

| #  | Prompt                                        | When to reach for it                              |
|----|-----------------------------------------------|---------------------------------------------------|
| 1  | **User research synthesizer**                 | You did 10 calls; you have 3 hours of recordings  |
| 2  | **Landing-page hero writer**                  | You have 60 seconds to hook a cold visitor        |
| 3  | **Feature → benefit translator**              | Your marketing page sounds like a spec sheet      |
| 4  | **Investor update (MRR edition)**             | Monthly update, under 400 words, no bullshit      |
| 5  | **Pitch slide: market size, honestly**        | TAM without the top-down fantasy                  |
| 6  | **Pitch slide: traction narrative**           | 6 numbers → one story an investor retells         |
| 7  | **Roadmap prioritizer (RICE/ICE)**            | 30 feature requests, 2 engineer-weeks             |
| 8  | **Changelog → release notes that get opens**  | You shipped; nobody noticed                       |
| 9  | **Churn diagnostic from cancel replies**      | 12 users churned; you have 12 reasons             |
| 10 | **Pricing experiment framer**                 | Should you raise prices? Here's the test          |
| 11 | **Cold outreach to first 100 ICP**            | Zero users → 10 design partners                   |
| 12 | **7-email onboarding sequence**               | New signup → activated user in one week           |
| 13 | **Founder brain-dump → hiring JD**            | You know who you want; the JD keeps mid-fitting   |
| 14 | **Competitor teardown from their site**       | Before a positioning call, in 10 minutes          |

---

## The universal SaaS prompt formula

Every founder prompt worth reusing fills five slots:

```
[ROLE]:      who the AI is writing as (senior PM, a16z partner, CX lead, copywriter)
[CONTEXT]:   what the company does, who it's for, current stage (MRR, users, funding)
[INPUT]:     the raw material (call transcript, churn reply, feature list, competitor URL)
[GOAL]:      what this deliverable has to produce (replies, upgrades, meetings, signal)
[CONSTRAINTS]: length, tone, forbidden words, one-claim-per-sentence, etc.
```

Skip any slot and you'll get a Medium blog post voice: "In today's fast-paced world…" — exactly the register that makes investors, users, and hires tune out.

Try your rough drafts in the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) before you send.

---

## 1. User research synthesizer

```
You are a senior product researcher. I ran 10 user interviews. Below are the
transcripts (or summaries). Synthesize them.

Company: [1-SENTENCE WHAT WE DO]
Who I talked to: [ROLES, SEGMENTS]

Transcripts:
"[PASTE]"

Output format:
1. Top 5 problems (ranked by how many people named it, with exact quote count)
2. Top 3 workarounds people use today (and which are sticky)
3. What "good" looks like for them (in their words, not yours)
4. 3 non-obvious insights — patterns I probably missed while in the calls
5. 5 direct quotes I should steal for the landing page (speaker anonymized)

Rules:
- No "users expressed concerns about..." — write like a human talking to a founder.
- If something is a one-off, say "only 1/10" — don't inflate.
- If the data is thin, say "not enough signal here."
```

---

## 2. Landing-page hero writer

```
You are a direct-response copywriter who studied 37signals, Stripe, and Linear.
Write the hero section for my landing page.

Product: [WHAT IT DOES IN ONE SENTENCE]
For: [SPECIFIC ROLE + TRIGGER MOMENT, e.g. "Series A founders who just hired their first PM"]
Against: [THE STATUS QUO — spreadsheets, Notion, a competitor by name]
Proof: [ONE CONCRETE NUMBER OR BRAND]

Deliver:
- H1 (≤10 words, names the outcome not the feature)
- Subhead (≤25 words, names WHO it's for + WHAT changes)
- Primary CTA button text (≤4 words, verb-first)
- Secondary CTA (the "I'm not ready" path)
- 3 bullet points BELOW the fold, each starting with a verb, each naming a specific
  job-to-be-done, not a feature name.

Banned words: "revolutionize", "seamless", "unlock", "empower", "leverage",
"world-class", "best-in-class", "next-generation".
```

Tighten whatever you draft with the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet).

---

## 3. Feature → benefit translator

```
You are writing for a skeptical buyer who has seen 50 SaaS landing pages this month.
Translate these features into outcomes they'd pay for.

Feature list:
"[PASTE YOUR FEATURE LIST]"

Target buyer: [ROLE + WHY THEY HAVE BUDGET]

For each feature, output 3 columns:
| Feature | What it does (1 line) | Outcome they care about (dollars, hours, headcount, risk removed) |

Then: rank the outcomes top-to-bottom by how much budget authority they'd justify.
The top 3 go on the landing page. The bottom half goes in a docs changelog.

Rules:
- "Outcome" must be measurable (hours saved/week, $ saved/month, churn ↓ by X%, deals closed +Y).
- No "increase productivity." Productivity is not a buying trigger.
```

---

## 4. Investor update (MRR edition)

```
You are writing my monthly update for 8 angel investors. Be honest. Be short.

Month: [MONTH]
Key numbers (give me raw, I'll anonymize later):
- MRR: [X] (last month: [Y])
- Active paying users: [X] (last month: [Y])
- New logos: [X]
- Churn count: [X] (reasons in 1 line each)
- Cash: [X] runway in months
- What shipped this month: [BULLETS]
- What missed: [BULLETS — honest]

Structure the email:
1. ONE opening line naming the most important thing that happened (good or bad).
2. Numbers section — a 4-line table, no hedging.
3. Shipped (3 bullets max, each ≤12 words).
4. What I'm worried about (1-3 bullets, the real ones).
5. One specific ask (intro to [X], advice on [Y], hire referral for [Z]).
6. Sign-off, no "excited" or "thrilled".

≤400 words total. No emojis. No "onwards and upwards." No stock photos.
```

---

## 5. Pitch slide: market size, honestly

```
You are a pre-seed investor. Draft the market-size slide for a pitch deck.

Company: [WHAT WE DO]
Target segment: [EXACT ICP — role, company size, industry]
Evidence we have: [ANY REAL DATA — customer count, revenue, interviews, waitlist]

Deliver a bottoms-up model, not top-down:
- Line 1: # of companies that match the ICP (cite the source publicly checkable)
- Line 2: average ACV we can realistically charge (cite a comparable tool's pricing)
- Line 3: realistic addressable revenue = Line 1 × Line 2
- Line 4: what share we'd need to be a venture outcome ($100M ARR) — in %.
- Line 5: one sentence stating whether that share is plausible given category dynamics.

Rules:
- No "$X trillion TAM" claims.
- Cite one source per line. If the source is "our gut", say so.
- Investor mode: if the math doesn't justify a venture outcome, SAY THAT.
```

---

## 6. Pitch slide: traction narrative

```
You are a storytelling coach for founders. I have 6 numbers. Turn them into ONE narrative.

Numbers:
- [METRIC 1]: [VALUE], [TIMEFRAME]
- [METRIC 2]: [VALUE], [TIMEFRAME]
- [METRIC 3]: [VALUE], [TIMEFRAME]
- [METRIC 4]: [VALUE], [TIMEFRAME]
- [METRIC 5]: [VALUE], [TIMEFRAME]
- [METRIC 6]: [VALUE], [TIMEFRAME]

Stage: [PRE-SEED/SEED/A]
Ask: [ROUND SIZE + USE OF FUNDS]

Output:
1. ONE sentence describing the trajectory an investor will retell to a partner
   (format: "They went from X to Y in Z because W.")
2. The 3 numbers that most support that sentence (pick from the 6).
3. The 1 number that contradicts it (acknowledge, don't hide).
4. A counter-line naming why the contradiction will resolve in the next 3 months.
5. The one-slide version: headline + 3 bars + a dotted line for projection.
```

---

## 7. Roadmap prioritizer (RICE + reality)

```
You are my co-founder helping me ship the right thing next quarter. Prioritize these
feature requests using RICE, then override RICE where founder judgment says to.

Inputs:
- Feature list: [PASTE — one per line, include rough effort guess]
- Users requesting each: [COUNT OR NAMES]
- Current bottleneck: [THE REAL METRIC BLOCKING GROWTH — e.g. 15% activation, 8% monthly churn]
- Engineer-weeks available: [X]

For each feature, give me:
| Feature | Reach | Impact (1-3) | Confidence (%) | Effort (eng-weeks) | RICE score |

Then override the RICE ordering using these rules:
- Anything that directly attacks the named bottleneck moves to the top.
- Anything requested by ≥3 paying users > anything requested by ≥3 trial users.
- Anything that unblocks a $10k+ deal in pipeline beats anything RICE scores higher.

Output: a final ordered list with a one-line justification for each that deviates from RICE.
```

---

## 8. Changelog → release notes that get opens

```
You are an email copywriter who writes for engineering-literate customers.
Turn my changelog into a release-notes email that gets opened and acted on.

Changelog (raw):
"[PASTE BULLETS]"

Audience: [USER ROLE]
Relationship: [new users / 6+ months / power users / churned + reactivating]

Deliver:
- Subject line A (specific, under 45 chars, names the ONE thing most people wanted)
- Subject line B (variant — different angle, for A/B test)
- Preview text (under 90 chars, not a restatement of the subject)
- Body (≤180 words):
  - 1 sentence headline
  - 3 bullets — each starting with a verb, each naming user-visible change
  - 1 "small but nice" bullet (humanizes the note)
  - 1 specific ask ("reply with" / "try this by Friday" / "click here if you want X")
- No "we're excited to announce." Zero changelog bullets that don't produce a user-visible change.
```

---

## 9. Churn diagnostic from cancel replies

```
You are a senior CX/retention analyst. I have the cancellation replies from the last
[X] users who churned. Find the pattern.

Replies:
"[PASTE — anonymized if possible]"

Product: [WHAT WE DO]
Plan they were on: [TIER + PRICE]
Tenure range: [SHORTEST] to [LONGEST]

Output:
1. The 3 most-named reasons (with frequency count, not %)
2. The 1 reason that's actually a pricing problem disguised as something else
3. The 1 reason that's actually an onboarding gap (they never activated)
4. The 1 reason we can't fix (market mismatch) — name it and own it
5. The 3 quotes I should share with my team (they hit hardest)
6. 1 product change and 1 messaging change that would plausibly save the next
   cohort at this same tenure.

No "the team should focus on improving..." prose. Just the pattern.
```

---

## 10. Pricing experiment framer

```
You are a pricing strategist (think Patrick Campbell, not a McKinsey deck).
Help me design ONE pricing experiment — not a rebuild.

Current pricing: [YOUR TIERS + PRICES]
Hypothesis I want to test: [E.G. "Starter is underpriced — $49 instead of $29 won't cost us signups"]
Current conversion rate (visit → trial → paid): [X% / Y%]
Sample size of monthly new signups: [N]

Output:
- The single, binary question this test answers.
- The exact change (price, naming, feature gating — only ONE variable).
- The success metric (what number has to move, by how much, to declare it worked).
- The minimum run time given the sample size (be honest about statistical power).
- The kill-switch condition (what number, if it drops by X%, ends the test early).
- The rollback plan in 1 sentence.
- A 3-bullet email to existing customers explaining the change (in case it's permanent).

Refuse to run the test if the sample size is too small for signal. Say so directly.
```

---

## 11. Cold outreach to first 100 ICP

```
You are me writing to a founder who is exactly my ICP. Not a template — a specific email.

Me: [WHO I AM, WHAT I'VE BUILT]
Them: [NAME, ROLE, COMPANY, SPECIFIC TRIGGER — funding round, new hire, product launch]
What I want: [ONE THING — 20-min call, beta access, feedback on landing page]

Rules:
- Subject ≤6 words, not a question, not "quick question."
- 3 short paragraphs, total under 90 words.
- Paragraph 1: ONE specific observation about them (trigger). Not flattery.
- Paragraph 2: ONE sentence on what I built + why it connects to their specific situation.
- Paragraph 3: the ask — specific, small, easy to say yes to. Include a calendar link or "reply y/n."
- No "hope this finds you well." No "circling back." No PS line. No emojis.
- If I can't name the specific trigger honestly, STOP and tell me to find a better one.
```

---

## 12. 7-email onboarding sequence

```
You are a lifecycle marketer. Design a 7-email onboarding sequence.

Product: [WHAT WE DO]
The "aha moment" = [THE ONE ACTION THAT CORRELATES WITH RETENTION]
Current activation rate (new signup → aha moment within 7 days): [X%]
Trial length: [X DAYS]

Deliver a table:
| Day | Subject | Goal | Body outline (≤40 words) | CTA |

Sequence logic:
- Day 0: get them to activation action #1 — nothing else.
- Day 1: show ONE real example of the aha moment from another user (anonymized).
- Day 3: if they haven't hit aha, send the shortest path to it.
- Day 5: social proof / case study that matches their use case.
- Day 7: aha or abandon — name the next paid action explicitly.
- Day 10: pricing nudge (value > price framing, not discount).
- Day 14: last-call reply-prompt ("are you in or out?") — human tone.

Rules:
- Every email ≤120 words.
- Every email has ONE CTA. No "PS: also, check out our blog."
- If they've already activated, suppress emails 3 and 5.
```

---

## 13. Founder brain-dump → hiring JD

```
You are a seasoned head of talent at a Series A startup. Turn my rambling brain-dump
into a job description that attracts senior candidates, not noise.

My brain-dump:
"[PASTE WHATEVER YOU'VE GOT — half-formed bullet points welcome]"

Stage: [PRE-SEED / SEED / A]
Role title you think it is: [YOUR GUESS]
Salary band: [RANGE] + equity range
Location: [REMOTE / HYBRID / ONSITE CITY]

Output the JD with these exact sections:
1. The one-sentence opening ("You'll own [OUTCOME] at a company that [POSITION].")
2. What you'll do in your first 90 days (5 bullets, each a shipped thing).
3. What you'll do in your first year (3 bullets, each a business outcome).
4. Who you are (5 bullets — what they've done, not who they are).
5. Not a fit if (3 honest filters — disqualifiers we want stated upfront).
6. How we hire (the 3 stages, honest timelines).
7. Salary + equity (state ranges, not "competitive").

Banned phrases: "rockstar", "ninja", "guru", "fast-paced environment", "wear many hats",
"self-starter", "ability to", "passionate about."
```

---

## 14. Competitor teardown from their site

```
You are a positioning strategist. I'll paste a competitor's homepage. Tear it down.

Competitor URL / hero content:
"[PASTE — homepage text + pricing page text]"

My product: [WHAT WE DO]
My current positioning line: [YOUR CURRENT H1]

Output:
1. Who they say they're for (their exact words) — is it the same buyer as mine?
2. The 3 claims they lead with — which are real capabilities vs. which are table-stakes?
3. Their pricing model and what it signals about their ICP.
4. The ONE move they're making that I can't/shouldn't copy.
5. The ONE weakness in their positioning I can honestly exploit in mine.
6. A rewritten H1 for ME that directly contrasts with theirs without naming them.

Rules: No "they do X, we do Y better." If my product isn't actually different, say so.
```

---

## Which model for which job (April 2026)

| Job                                    | Best model (April 2026)         | Why                                      |
|----------------------------------------|---------------------------------|------------------------------------------|
| Long synthesis (interview transcripts) | Claude 4.5 Sonnet / 200k ctx    | Handles 3-hour transcripts without loss  |
| Investor update, hiring JD, onboarding | Claude 4.5 Sonnet               | Tightest prose under constraints         |
| Cold outreach at scale                 | GPT-4o / GPT-5 mini             | Cheap, fast, iterable with A/B subjects  |
| Landing page H1s + pricing copy        | Claude 4.5 Sonnet + o3-mini       | Pair-write: one drafts, one critiques    |
| Competitor teardown (browse site)      | Gemini 2.5 Pro w/ web           | Best native browsing + fresh SERP        |
| Quick drafts on phone                  | GPT-4o / ChatGPT voice          | Lowest friction for voice-in → email-out |
| Cost-sensitive batch work              | DeepSeek V3.1 / Llama 3.3 70B   | Cheapest per token, good enough          |

Any model listed gets meaningfully better with the 5-slot formula above. Want to test a draft you already wrote? Paste it into the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) and it'll flag the missing slots.

---

## Common mistakes SaaS founders make with AI prompts

1. **Asking for "an investor update"** instead of specifying audience, cadence, word count, and honesty level. You'll get LinkedIn-speak every time.
2. **Feeding the model raw feature lists** and asking for "benefits." Without the buyer and their budget trigger, every benefit is "saves time."
3. **Treating the LLM as a yes-man.** Ask it to disagree: "If this positioning is weak, say so." Models will hedge unless you give them permission to push back.
4. **Skipping the constraint slot.** No length cap = 600-word emails. No banned-words list = "unlock" in every paragraph.
5. **Generating once, shipping immediately.** The best founder workflow is generate → [enhance](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) → cut 30% → ship. Every time.

---

## Resources

- [SaaS Founder Kit — 135+ prompts + templates ($39)](https://www.midastools.co/saas-founder-kit?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) — the full library this cheatsheet is pulled from, plus pricing/pitch/onboarding/investor templates.
- [Free Prompt Enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) — paste any draft, get a tighter version back. No login.
- [6 AI Tools SaaS Founders Use to Hit $10K MRR Faster (2026)](https://www.midastools.co/blog/ai-saas-founder-tools-2026?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) — deep-dive with the specific stack (research, copy, onboarding, churn).
- [AI Email Prompts Cheatsheet](https://gist.github.com/manduks/a69f2fdc1110d6ee840747ca04039919) — sister gist for the 28% of your week that's email.

---

*Last updated April 2026 by [Midas Tools](https://www.midastools.co). If a prompt here saves you an hour, the [SaaS Founder Kit](https://www.midastools.co/saas-founder-kit?utm_source=gist&utm_medium=github&utm_campaign=12-ai-saas-founder-prompts-cheatsheet) has ~120 more like it.*