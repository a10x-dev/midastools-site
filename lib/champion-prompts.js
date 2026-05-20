// Per-vertical prompt packs for the AI Champion experience.
//
// Each pack is keyed by pack_id (referenced from lib/champion-recipients.js).
// Adding a new pack: define a new key with name, intro, and an array of
// prompts. Each prompt has { title, use, body }.
//
// Prompts should be paste-and-run in Claude Opus 4.7 or ChatGPT-5; use
// [BRACKET PLACEHOLDERS] for buyer-fillable variables.

export const PACKS = {
  'pe-fund-admin': {
    name: 'AI Team Adoption — Private Markets Edition',
    audience: 'VP People / Chief of Staff / Head of Ops at a private markets fund-admin platform rolling AI to 100+ employees',
    intro: '10 prompts engineered for the exact rollout problem you’re solving — change management for skeptical fund-admin staff, plus working AI prompts your LP comms / IR / fund accounting teams can use day-one. Every prompt is paste-and-run in Claude Opus 4.7 or ChatGPT-5. Fill the [BRACKETS] with your specifics.',
    prompts: [
      {
        section: 'CHAMPION PLAYBOOK',
        title: 'AI Usage Policy — Private Markets Edition (1-Page, Legal-Ready)',
        use: 'Generates a one-page internal AI policy your legal team can mark up in 30 minutes — calibrated for regulated private markets work where LP data, sub-doc PII, and fund performance numbers are all sensitive.',
        body: `Write a 1-page internal AI usage policy for [COMPANY NAME], a [INDUSTRY] firm with [HEADCOUNT] employees. We handle [TYPES OF SENSITIVE DATA, e.g. LP PII, sub-doc data, capital call letters, K-1 line items, fund performance numbers, investor commitments].

Cover exactly these 7 sections — each in 2-4 sentences max:

1. APPROVED TOOLS — Name the AI tools employees are allowed to use (assume [LIST APPROVED TOOLS, e.g. JunieAI, Claude for Enterprise, ChatGPT Team]). Name 3 specific tools that are NOT approved (be specific — generic ChatGPT free tier, X.AI Grok, free Perplexity, etc.).
2. DATA CLASSIFICATION — Three tiers: green (public/marketing), yellow (internal but non-PII), red (LP data / sub-doc data / fund performance). What tier may go into which tool.
3. SUB-DOC + LP DATA — Explicit rule on whether/how raw sub-docs, K-1s, capital call letters may be processed through AI tools. Default to no for any tool not in our approved enterprise tier.
4. ATTRIBUTION + REVIEW — When AI output goes to an LP, investor, or auditor, what level of human review is required (default: every external-facing AI output gets one named human reviewer).
5. INCIDENT PROTOCOL — If an employee pastes red-tier data into an unapproved tool, what to do in the first hour (named contact + step-by-step).
6. TRAINING REQUIREMENT — Who must complete what training before using AI on red-tier work.
7. POLICY OWNER + REVIEW CADENCE — Single accountable owner + quarterly review date.

Format: clear headings, 2-4 sentence sections, no jargon, no fluff. Should fit on one page. End with a "policy approved by [NAME], effective [DATE]" line.`,
      },
      {
        section: 'CHAMPION PLAYBOOK',
        title: '90-Day AI Champion Rollout — 865 People, Multi-Org',
        use: 'Produces a 90-day phased rollout plan for an AI champion program at a multi-org company (Investor Services / Eng / Sales / Fund Accounting). The plan is calibrated for skeptical staff in a regulated environment, not for AI-native startups.',
        body: `Design a 90-day AI champion program rollout for [COMPANY NAME], a [HEADCOUNT]-employee [INDUSTRY] company with these org units: [LIST ORG UNITS, e.g. Investor Services, Fund Accounting, Engineering, Sales, IR, People].

Constraints:
- We are NOT an AI-native startup. ~30% of staff are skeptical or fearful.
- We are regulated and customer-facing (LP-facing). Hallucination cost is real.
- I am [ROLE], not the CTO. My mandate is people enablement, not tooling decisions.
- We already use [LIST DEPLOYED AI TOOLS, e.g. JunieAI internally + an AI CRM].

For each phase below, give me:
- Goal (1 sentence)
- 3 concrete activities (no vague "schedule training" — name the format, attendees, duration)
- 1 leading metric to watch + the threshold that says "phase succeeded"
- 1 failure mode + how to detect it early

Phase 1 — Days 1-30: AWARENESS + POLICY (everyone learns what's allowed, what's not, why it matters)
Phase 2 — Days 31-60: PILOT TEAMS (3 named teams adopt AI in real workflows — which teams, what workflows, who owns)
Phase 3 — Days 61-90: MULTIPLIER (champion network forms — what makes someone a champion, how they're recognized, what they commit to)

After the 3 phases, add a "What I'd tell the CEO at day 90" template (3 bullets: what worked, what didn't, what I'm asking for next).`,
      },
      {
        section: 'CHAMPION PLAYBOOK',
        title: 'Skeptical-Staff Talking Points — for Managers, Not Cheerleaders',
        use: 'Equips your managers with honest, non-corporate answers to the 8 most common fears about AI rollout — calibrated for fund-admin staff whose roles feel directly threatened by automation.',
        body: `Generate the talking-points doc managers at [COMPANY NAME] need to handle their team's AI rollout questions. The doc is for [MANAGER COHORT, e.g. fund accounting team leads, IR managers, investor services supervisors] — people leading staff who may rightly feel that AI threatens their day-to-day work.

For each of these 8 fears, write the honest answer a good manager would give (2-3 sentences each). Do NOT write corporate cheerleading. Be honest about what we don't know.

1. "Is the company planning to replace my team with AI?"
2. "Will my role still exist in 18 months?"
3. "I'm 55, I'm not going to retrain on AI. What happens to me?"
4. "I tried ChatGPT. It gave me wrong numbers. How can we trust this on a K-1?"
5. "If I use AI to do my work faster, won't my output expectation just go up?"
6. "Who is liable if AI hallucinates on an LP report and the LP sues?"
7. "I see [COMPETITOR] is laying off ops staff after their AI rollout. Are we next?"
8. "Will my performance review now include 'AI productivity metrics'?"

After the 8 answers, add a "Manager Don'ts" section: 5 phrases managers should NEVER use when rolling AI to their team (e.g. "It's just a tool" — patronizing; "You'll love it" — premature; etc.).`,
      },
      {
        section: 'CHAMPION PLAYBOOK',
        title: 'AI Office Hours — Weekly Cadence + Intake Form',
        use: 'Drops a working "AI office hours" weekly format your champions can run starting Monday — 30-minute cadence, structured intake so you capture what people actually ask, surfaces the patterns that drive your next prompt-pack drop.',
        body: `Build a weekly "AI Office Hours" framework for [COMPANY NAME] champions to run every [DAY/TIME], 30 minutes max, open to all [HEADCOUNT] employees.

Output:

1. CADENCE — Format breakdown for the 30 min (e.g. 5 min lightning demo / 15 min open Q&A / 10 min "we'll get back to you" log).

2. INTAKE FORM — A 5-field intake form employees fill BEFORE the session so we know what to prepare. Fields: [draft each field name + question wording + field type, e.g. dropdown / short text / multi-select].

3. CHAMPION HOST GUIDE — 1-pager telling the champion how to run the session, what to do if no one shows up, what to do if someone asks a red-tier policy question (e.g. "can I paste an LP's email into ChatGPT?"), how to log "we'll get back to you" items.

4. WEEKLY DIGEST EMAIL — Template the champion sends every Friday to all attendees + their manager: "this week's most-asked question + our answer + a starter prompt to try this weekend."

5. ESCALATION RUBRIC — 4-tier severity for questions: green (answer on the spot), yellow (champion + IT follow up in 24h), orange (champion + legal in 48h), red (immediate escalation to [SECURITY/COMPLIANCE LEAD]). Examples for each tier.

Tone: practical, no jargon, written for a non-engineer champion who is doing this on top of their day job.`,
      },
      {
        section: 'WORKING TEAM PROMPTS',
        title: 'LP Quarterly Update Draft — From Raw Numbers to Letter',
        use: 'Turns a fund\'s raw quarterly performance data into a first-draft LP letter — voice-matched to your firm, named risks called out honestly, ready for IR review.',
        body: `You are the IR director at [FUND NAME], a [STRATEGY, e.g. real estate value-add / lower middle market PE / growth equity] fund. Write the Q[QUARTER] [YEAR] LP letter first draft.

Inputs:
- Fund vintage: [YEAR]
- Strategy: [ONE SENTENCE]
- Quarter NAV change: [%] (prior quarter: [%])
- Quarter contributions: $[NUMBER]
- Quarter distributions: $[NUMBER]
- Top 3 portfolio company / asset updates: [LIST — be specific, name them]
- One thing that went badly this quarter: [BE HONEST — write the actual bad thing]
- Macro variable affecting the strategy: [e.g. SOFR, occupancy, exit multiples, FX]
- Tone reference: [PASTE 2-3 SENTENCES OF YOUR FIRM'S PRIOR LETTERS so AI matches voice]

Structure (max 1.5 pages):
1. Headline number + 1-sentence "what it means" (no jargon)
2. Three things that drove the quarter (be specific — name the portfolio companies, the deals, the events)
3. The one thing that didn't work, plainly stated, with what we're doing about it (this is the trust-builder — do NOT skip it)
4. Capital activity summary (calls, distributions, dry powder)
5. Forward 90 days — what we're watching, what could change the picture
6. Sign-off

Rules:
- No phrases like "we remain cautiously optimistic" or "headwinds and tailwinds" — concrete language only
- If a number is bad, say it's bad
- Match the prior-letter tone reference exactly
- Flag any number you'd want a human to double-check with [VERIFY] inline
- End with 3 questions a sharp LP might ask after reading this — I want to be ready`,
      },
      {
        section: 'WORKING TEAM PROMPTS',
        title: 'Capital Call Letter — Drafter From Event Data',
        use: 'Generates a compliant first-draft capital call notice from the underlying event data, with the standard sections every fund admin needs and the "verify against LPA" flags every IR team needs.',
        body: `Draft a capital call notice for [FUND NAME] LPA-compliant format.

Inputs:
- Call number: [#]
- Call date: [DATE]
- Funding deadline: [DATE — typically 10 business days out]
- Total call amount: $[NUMBER]
- Purpose: [e.g. fund Investment #4 in [PORTFOLIO CO], manage fees + expenses, build reserve]
- LP commitment percentage being called: [% of unfunded commitment]
- Wire instructions: [PROVIDE OR PLACEHOLDER]
- LPA section governing call notice: [SECTION # — typically 3.x]

Structure:
1. Header: Fund name + Call # + Date + LP-facing reference number
2. Total call + per-LP amount calculation reference (note that per-LP amounts are calculated separately and merged in)
3. Use of proceeds — 3-4 line summary with allocation table (Investment / Fees / Expenses / Reserve)
4. Funding deadline + wire instructions
5. Tax treatment summary (if applicable to fund structure)
6. Contact for LP questions
7. Standard LPA reference language

Flag with [VERIFY VS LPA SECTION X.X]:
- Notice period (10 business days minimum per most LPAs)
- Default interest rate language
- Cure period language
- Any custom LP-specific carve-outs

Output should be a clean .docx-ready draft. Do NOT include calculated per-LP amounts — those go in the cover letter merge.`,
      },
      {
        section: 'WORKING TEAM PROMPTS',
        title: 'K-1 Plain-English Explainer — For LP Service Teams',
        use: 'Turns a complex K-1 line item into a 2-paragraph plain-English explanation your LP service team can paste into an email when an LP\'s accountant asks "what is this?"',
        body: `An LP\'s tax advisor has emailed asking about line [LINE NUMBER, e.g. Box 11 Code A] on their K-1 from [FUND NAME].

Inputs:
- Fund strategy: [ONE SENTENCE]
- The specific item: [WHAT'S ON THE LINE, e.g. "Section 199A qualified business income $X"]
- Why it's on this K-1: [WHAT EVENT PRODUCED IT, e.g. portfolio company exit, real estate depreciation pass-through, debt-financed distribution, etc.]
- LP entity type: [e.g. individual, trust, IRA, fund-of-funds]

Write a 2-paragraph plain-English explanation the LP service rep can paste into a reply email:

Paragraph 1: What this number is, in plain English (assume the LP\'s tax advisor knows tax, but is asking what business event produced it). Reference the specific portfolio company / event without violating other LP privacy.

Paragraph 2: What it typically means for the LP\'s tax situation (general — do NOT give tax advice). Recommend they confirm with their tax advisor for their specific situation. Mention any K-1 supplemental schedules they should also have.

After the 2 paragraphs, give the LP service rep:
- 1-line internal note: what flag to set on the LP record so we proactively reach out to other LPs with the same question
- 2 likely follow-up questions the tax advisor might ask + the answer to each

Tone: clear, accurate, NOT a tax-advice disclaimer dump — confident answer with the right "confirm with your advisor" hedge in the right place.`,
      },
      {
        section: 'WORKING TEAM PROMPTS',
        title: 'IR Meeting Prep — Research + Briefing Doc',
        use: 'Generates a one-page IR briefing doc for an upcoming LP or prospective LP meeting — prior-interaction recap, what they care about, three questions they\'re likely to ask, and the three asks our side has.',
        body: `Generate a 1-page IR meeting briefing doc for [IR EXEC NAME]\'s [DATE/TIME] meeting with [LP / PROSPECT NAME] from [LP FIRM].

Inputs:
- Relationship status: [EXISTING LP IN FUND #X / PROSPECT FOR FUND #Y / OTHER]
- LP commitment to prior funds: $[NUMBER] across [#] funds
- Last interaction: [DATE + TOPIC, e.g. "Sept 2025 — discussed fund III performance + their interest in our forthcoming credit strategy"]
- Their stated investment priorities for 2026: [PASTE FROM CRM OR LEAVE BLANK]
- Recent news about their firm: [PASTE OR LEAVE BLANK — we'll generate from public sources if blank]
- Our agenda for the meeting: [3-5 BULLETS]

Output structure:

1. CONTEXT (3 bullets) — who they are, our history, why this meeting matters
2. WHAT THEY CARE ABOUT (3 bullets) — based on the inputs above, what's likely on their mind
3. LIKELY QUESTIONS (3 questions, ranked by likelihood) — with the 2-3 sentence answer we'd give to each
4. OUR ASKS (3 max — be specific: commitment to next fund, intro to peer LP, feedback on a strategy, etc.)
5. RED FLAGS (1-2 bullets) — anything sensitive to avoid or handle carefully (e.g. they recently passed on our last fund, they're consolidating GPs, they hired a new CIO)
6. POST-MEETING ACTIONS — 3 follow-ups in priority order

Tone: brief, concrete, written for someone reading on the way to the meeting. No corporate fluff.`,
      },
      {
        section: 'CHAMPION PLAYBOOK',
        title: 'AI Pilot ROI Scorecard — 90-Day Team Pilot',
        use: 'Builds a one-page scorecard you give to every team running an AI pilot — measures whether the pilot actually saved time, not whether the team is "excited." This is your accountability tool when the CFO asks "did the AI rollout work."',
        body: `Design a 1-page AI pilot ROI scorecard for any [COMPANY NAME] team running a 90-day pilot.

Each pilot team fills this at day 0 and day 90.

Fields (give me exact wording, not categories):

DAY 0 (baseline):
1. Pilot name + sponsor: [FREE TEXT]
2. The specific workflow being AI-augmented: [FREE TEXT — must name an existing process, not "general AI exploration"]
3. Current state — time per task (median): [NUMBER + UNIT]
4. Current state — quality measure: [DEFINE — error rate, customer complaint rate, rework rate, etc.]
5. Current state — staff doing it: [FTE COUNT]
6. AI tool being adopted: [SPECIFIC TOOL + VERSION]
7. Estimated time savings target: [%]
8. Quality non-regression bar: [SPECIFIC THRESHOLD]
9. Top 3 risks identified: [LIST]

DAY 90 (results):
10. Actual median time per task: [NUMBER + UNIT]
11. Actual quality measure: [SAME METRIC]
12. Cumulative hours saved (whole team, 90 days): [NUMBER]
13. Cumulative hours of AI training + setup invested: [NUMBER]
14. Net hours saved (12 minus 13): [NUMBER]
15. Quality bar: passed / failed / unclear
16. One incident or near-miss to share: [HONEST DESCRIPTION]
17. Continue / iterate / kill / expand: [DECISION + 2-SENTENCE WHY]

OUTPUT BACK TO THE CHAMPION PROGRAM:
- 1 paragraph "what we learned" that the next pilot team should read
- 1 prompt or workflow that worked which we'll add to the company prompt library

Bottom of scorecard: signature line from team sponsor + champion. This is a real artifact, not a survey.`,
      },
      {
        section: 'CHAMPION PLAYBOOK',
        title: 'AI Vendor Evaluation — Buy vs Build vs JunieAI',
        use: 'Compares any incoming AI vendor pitch against your internal AI platform capability + a clean buy/build/integrate decision rubric. Saves your team from agreeing to demos that should have been emails.',
        body: `An AI vendor is pitching [COMPANY NAME] on [VENDOR PRODUCT NAME]. Help me decide whether to take the demo, defer, or pass.

Inputs:
- Vendor name: [VENDOR]
- Their pitch in one sentence: [PASTE THEIR ONE-LINER]
- Promised use case: [WHAT THEY CLAIM IT DOES]
- Our existing capability for this use case (e.g. via JunieAI, Claude, in-house): [WHAT WE ALREADY HAVE]
- Asking price (if known): [$RANGE OR "UNKNOWN"]
- Origination: [INBOUND / WARM INTRO FROM X / OUTBOUND COLD]

Output:

1. CAPABILITY GAP — Does the vendor solve something our existing stack does NOT solve well? (Yes / No / Partially — with the specific gap named)

2. BUY VS BUILD VS INTEGRATE — Three-row table:
   - BUY: estimated $$/year + lock-in risk + integration cost
   - BUILD: estimated FTE-months to ship internally + ongoing maintenance + opportunity cost
   - INTEGRATE: can we extend our existing AI platform (JunieAI or similar) to cover this? Effort estimate.

3. DECISION RECOMMENDATION — One of:
   - "Take the 30-min demo to learn — we have a real gap here"
   - "Send them our standard vendor questionnaire first — we need data before time"
   - "Defer 90 days — we're piloting [INTERNAL ALTERNATIVE] first"
   - "Pass — this is a workflow we already do well / not strategic"

4. IF YOU TAKE THE DEMO — 5 questions to ask that 90% of vendor sales reps will fumble (designed to surface whether they understand private markets data sensitivity + LP confidentiality + audit trail requirements).

5. RED FLAGS — Anything in the pitch that should make us cautious: vague training-data claims, no SOC 2, AI hallucination policy missing, etc.

Tone: skeptical-but-fair. We're not anti-vendor; we're protecting our time.`,
      },
    ],
  },
};

export function getPack(packId) {
  if (!packId) return null;
  return PACKS[packId] || null;
}
