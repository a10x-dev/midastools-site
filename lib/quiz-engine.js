// AI Prompt Persona Quiz — engine.
//
// Two surfaces share this engine:
//  - /quiz          — generic, captures any inbound visitor's email + persona
//  - /q/[slug]      — per-prospect customized, ties result to their /p/{slug}
//
// Mechanic: 5 questions, last one captures email. Q1+Q2 determine persona
// bucket. Q3 (current AI tool) tunes intro tone. Q4 (free-text time-suck)
// goes into the result email's reply-hook ("you said X — here's a 6th
// prompt for that specifically"). Q5 captures email and triggers the send.

export const QUESTIONS = [
  {
    id: 'role',
    type: 'choice',
    prompt: "What role best describes your work?",
    helper: 'Pick the closest — we use this to tune your prompts.',
    options: [
      { value: 'it-ops', label: 'IT / Operations / Workplace tech' },
      { value: 'engineering', label: 'Engineering / Senior IC / Tech lead' },
      { value: 'marketing', label: 'Marketing / Content / Growth' },
      { value: 'founder', label: 'Founder / CEO / Operator' },
      { value: 'consultant', label: 'Consultant / Coach / Solo' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'workload',
    type: 'choice',
    prompt: "Which kind of work eats the most hours in your week?",
    helper: '',
    options: [
      { value: 'comms', label: 'Writing — emails, docs, comms, policy' },
      { value: 'review', label: 'Reviewing — vendor docs, reports, RFPs' },
      { value: 'coord', label: 'Coordination — meetings, follow-ups, status updates' },
      { value: 'build', label: 'Building — code, systems, products' },
      { value: 'sell', label: 'Selling — outreach, pitches, demos' },
    ],
  },
  {
    id: 'tool',
    type: 'choice',
    prompt: "What AI tool do you reach for most?",
    helper: '',
    options: [
      { value: 'chatgpt', label: 'ChatGPT' },
      { value: 'claude', label: 'Claude' },
      { value: 'gemini', label: 'Gemini' },
      { value: 'none', label: "Honestly, I don't use one consistently yet" },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'painpoint',
    type: 'text',
    prompt: "What's the workflow you wish you could compress with AI?",
    helper: 'One sentence is plenty — fragments are fine. We read every answer.',
    maxLength: 280,
  },
  {
    id: 'email',
    type: 'email',
    prompt: "Where should we send your 5-prompt report?",
    helper: 'No drip, no daily emails. One report + a follow-up if you reply. We read replies.',
  },
];

// Score Q1 + Q2 → persona bucket.
// We collapse 6×5 = 30 combos to 5 personas.
const PERSONA_MAP = {
  'it-ops:comms':        'ops-comms',
  'it-ops:review':       'ops-comms',
  'it-ops:coord':        'ops-comms',
  'it-ops:build':        'engineer',
  'it-ops:sell':         'ops-comms',
  'engineering:comms':   'engineer',
  'engineering:review':  'engineer',
  'engineering:coord':   'engineer',
  'engineering:build':   'engineer',
  'engineering:sell':    'engineer',
  'marketing:comms':     'marketer',
  'marketing:review':    'marketer',
  'marketing:coord':     'marketer',
  'marketing:build':     'marketer',
  'marketing:sell':      'marketer',
  'founder:comms':       'founder',
  'founder:review':      'founder',
  'founder:coord':       'founder',
  'founder:build':       'founder',
  'founder:sell':        'founder',
  'consultant:comms':    'consultant',
  'consultant:review':   'consultant',
  'consultant:coord':    'consultant',
  'consultant:build':    'consultant',
  'consultant:sell':     'consultant',
  'other:comms':         'consultant',
  'other:review':        'consultant',
  'other:coord':         'consultant',
  'other:build':         'engineer',
  'other:sell':          'founder',
};

export function scorePersona(answers) {
  const key = `${answers.role}:${answers.workload}`;
  return PERSONA_MAP[key] || 'consultant';
}

// Persona-specific 5-prompt result sets. Each prompt is real — these are
// pulled from / inspired by the All Kits Bundle. Result email links to
// /ai-prompt-mega-pack ($29) and /all-kits-bundle ($97) for the upsell.
export const PERSONA_RESULTS = {
  'ops-comms': {
    title: 'The Ops & Comms Operator',
    blurb: "You write more than you build. Policy, audit response, vendor risk, change-management comms — your week is mostly translating tech into language non-tech humans actually read.",
    prompts: [
      { title: 'Audit Response Drafter (regulator)', body: 'Draft a response to a regulator asking about [TOPIC]. Inputs: [REGULATOR], [QUESTION], [INTERNAL_TRUTH]. Output 3 paragraphs: (1) acknowledge precisely, (2) state position with 2 facts, (3) offer next-step. No corporate hedging.' },
      { title: 'Vendor Risk Summary (1-page)', body: 'Summarize vendor [NAME] providing [SERVICE]. Inputs: [SOC2_STATUS], [DATA_TYPES], [GEO]. Output: data flow in 3 sentences, top 3 risks, top 3 mitigations, red/yellow/green recommendation. Under 350 words.' },
      { title: 'Policy Update Comms (to non-tech)', body: 'Announce new policy: [POLICY]. Audience: non-tech employees who treat IT comms as noise. Hook with what they do less of. Limit jargon. End with single deadline + single action. Subject under 60 chars.' },
      { title: 'IT Exec One-Pager (to board)', body: 'Q3 IT update for executives. (1) Wins as business outcomes (revenue protected, hours saved, audit findings closed). (2) Incidents with root cause + status, no blame. (3) Priorities linked to revenue/risk. (4) One ask: budget, hire, or political support.' },
      { title: 'Cross-Functional Change Comms', body: 'A change from IT/Ops affects another team. Inputs: [WHAT_CHANGES], [WHO_AFFECTED], [WHEN]. Output 5-sentence email. Lead with what gets BETTER. Then when. Then 1 testable action post-change. Then rollback plan in plain English.' },
    ],
  },
  'engineer': {
    title: 'The Senior Engineer',
    blurb: "You ship code AND ship words about code. RFCs, post-mortems, deploy comms, hiring rubrics, tech-debt memos — the writing surface around engineering is bigger than most ICs realize.",
    prompts: [
      { title: 'Post-Mortem (no-blame)', body: 'Engineering incident PM. Inputs: [SERVICE], [TIMELINE], [USER_IMPACT], [ROOT_CAUSE]. Output: business-language impact, UTC timeline, 2-sentence root cause, what worked, what failed, 5 specific action items with owners + dates. Voice: factual, no-blame, not minimizing.' },
      { title: 'RFC Drafter', body: 'Draft RFC for [PROPOSAL]. Output: (1) problem in 3 sentences (no jargon), (2) proposed approach with architecture, (3) 2 alternatives + why rejected, (4) risks + mitigations, (5) decision needed by [DATE]. Under 700 words. Senior-engineer-talking-to-peers voice.' },
      { title: 'Tech-Debt Prioritization Memo', body: 'List of [N] tech-debt items vs feature work for next quarter. Output: top 3 by RICE (show math), 6mo business cost of inaction per item, eng-week estimate, recommended cut line + rationale, trade-off leadership is implicitly accepting.' },
      { title: 'Deploy Comms (to non-eng)', body: 'A deploy affects another team. Inputs: [WHAT_CHANGES], [IF_BAD_HAPPENS], [WHEN]. 5-sentence email. Lead with what gets BETTER. Then when (timezone). Then 1 testable post-deploy action. Then rollback plan in plain English. Subject not "[ENG] Deploy".' },
      { title: 'Hiring Rubric (Senior Eng)', body: 'Rubric for Senior Engineer at [COMPANY]. Inputs: [TEAM], [SCOPE], [SKILLS]. Output: 5 areas (depth, judgment, comms, collab, ownership). Each area: 4 levels with concrete behavioral evidence (not adjectives). End with 3 dealbreakers (specific behaviors, not vibes).' },
    ],
  },
  'marketer': {
    title: 'The Marketing & Content Operator',
    blurb: "You ship copy, briefs, and calendars at velocity. Cold outreach, landing-page hero copy, email sequences, social-content calendar — your whole week is making things people actually read.",
    prompts: [
      { title: 'Cold Outreach (reply-magnet)', body: 'Cold email to [PROSPECT]. Inputs: [THEIR_ROLE], [THEIR_COMPANY], [WHY_NOW]. Output 5-sentence email. (1) Opener referencing one specific public detail. (2) Why I am writing. (3) The thing I made for them. (4) The clean opt-out. (5) PS with reply hook. Under 100 words.' },
      { title: 'Landing Hero Copy (3 variants)', body: 'Write 3 hero variants for [PRODUCT]. Each: 7-word headline, 12-word subhead, single CTA verb. Variants are A/B-testable: (1) outcome-led, (2) curiosity-led, (3) anchor-priced. No buzzwords (synergy, leverage, unlock).' },
      { title: 'Feature → Benefit Translation', body: 'Translate [FEATURE_LIST] into customer benefits. For each feature: (a) what it does (1 sentence), (b) what the customer can NOW do they could not before (1 sentence), (c) the workflow moment where they will feel it.' },
      { title: 'Email Sequence (7 days)', body: 'Design 7-email onboarding sequence for [PRODUCT]. Each email: subject under 60 chars, body under 100 words, single CTA. Day-by-day arc: hook → quick-win → deeper-feature → social-proof → objection → upsell → check-in.' },
      { title: 'Social Content Calendar (1 week)', body: 'Generate 7 days of content for [PLATFORM] for a [BUSINESS_TYPE]. Mix: 2 educational, 2 contrarian, 1 customer-story, 1 behind-the-scenes, 1 promotional. Each post: hook line + body + CTA. No emoji unless platform-typical.' },
    ],
  },
  'founder': {
    title: 'The Founder / Operator',
    blurb: "You wear every hat — investor updates, hiring JDs, customer dev, board narrative, hiring rubrics. The 5 prompts below compress the writing tax across all of them.",
    prompts: [
      { title: 'Investor Update (MRR edition)', body: 'Monthly investor update. Inputs: [REVENUE], [USERS], [WINS], [ASKS]. Output 4 sections: (1) numbers in one table (MRR, growth %, runway), (2) what we shipped, (3) what we learned, (4) what we need (specific asks: intros, hires, advice). Voice: confident, specific, no hedging.' },
      { title: 'Cold Outreach to First 100 ICP', body: 'Cold-email to [PROSPECT] who fits [ICP]. Output: subject (question-based, under 60 chars), 4-sentence body (problem they have, our specific take, the ask, the opt-out), PS with reciprocity hook. Under 90 words.' },
      { title: 'Hiring JD (no-fluff)', body: 'JD for [ROLE] at [COMPANY]. Inputs: [STAGE], [SCOPE], [SUCCESS_METRIC_90D]. Output: 1-paragraph context, 5 outcomes the hire will own (concrete, not "lead the team"), 5 must-haves (skills not titles), 3 nice-to-haves, comp range, how to apply (specific URL).' },
      { title: 'Churn Diagnostic from Cancel Replies', body: 'Inputs: [CANCEL_REPLIES_LIST]. Output: (1) cluster replies into 3 themes, (2) for each theme: % of cancellations + 1 representative quote, (3) which 1 theme has the highest fix-ROI, (4) what experiment to run.' },
      { title: 'Pricing Experiment Framer', body: 'Frame a pricing experiment. Inputs: [CURRENT_PRICE], [HYPOTHESIS]. Output: (1) the change in 1 sentence, (2) what we expect to happen, (3) what would falsify the hypothesis, (4) duration + sample size needed, (5) the kill criterion (when we revert).' },
    ],
  },
  'consultant': {
    title: 'The Consultant / Coach',
    blurb: "You sell expertise, deliver intelligence, and price by value. The 5 prompts below cover the core writing surfaces of solo consulting work.",
    prompts: [
      { title: 'Discovery Call → Proposal', body: 'Inputs: [CLIENT_NAME], [DISCOVERY_NOTES], [STATED_PROBLEM]. Output a 1-page proposal: (1) restate problem in client language, (2) approach in 4 phases with deliverables, (3) timeline + price, (4) what success looks like in 90 days. No "we" — use client name.' },
      { title: 'Client Mini-Audit Report', body: 'Inputs: [CLIENT], [WORKFLOW_OBSERVED]. Output 5 sections: (1) current state in 3 sentences, (2) 3 specific friction points with examples, (3) 3 fixes ranked by ROI, (4) one "wedge" project to start with (small, high-confidence), (5) full-engagement scope if they want more.' },
      { title: 'Status Update to Engaged Client', body: 'Weekly status to [CLIENT]. Inputs: [WORK_DONE], [BLOCKERS], [NEXT_WEEK]. Output: (1) what shipped this week with specific outcomes (not "made progress"), (2) what is blocking (specific name + ask), (3) what is next (one concrete decision they need to make).' },
      { title: 'Productize a Service (1-pager)', body: 'You deliver [SERVICE] custom. Productize it. Output: (1) name + tagline, (2) what they get (specific list), (3) what they do NOT get (anti-scope), (4) timeline + price, (5) the ideal customer in 1 sentence ("This is for X who is doing Y but stuck on Z"). No buzzwords.' },
      { title: 'LinkedIn Post (thought-leadership)', body: 'Topic: [TOPIC]. Output a LinkedIn post (under 1300 chars). Hook: contrarian or counterintuitive opener. Middle: 3 specific examples with names/numbers/dates. Close: a question that invites real comments (not "thoughts?"). No emoji-bullet-list format.' },
    ],
  },
};

export function getResultsForPersona(persona) {
  return PERSONA_RESULTS[persona] || PERSONA_RESULTS['consultant'];
}
