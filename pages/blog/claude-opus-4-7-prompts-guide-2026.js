import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_CODE = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STRIPE_MEGA = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ClaudeOpus47PromptsGuide() {
  const title = 'Claude Opus 4.7 Prompts: 14 Templates That Actually Use the New Reasoning Model (2026)';
  const description = 'Anthropic shipped Claude Opus 4.7 on April 16, 2026. Copy-paste 14 heavy-reasoning prompts for code review, legal analysis, multi-source SWOT, incident post-mortems, agent harnesses + a model-selection table.';
  const url = 'https://www.midastools.co/blog/claude-opus-4-7-prompts-guide-2026';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      datePublished: '2026-04-22',
      dateModified: '2026-04-22',
      author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
      publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When should I use Claude Opus 4.7 instead of Claude Sonnet or GPT-5.4?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Opus 4.7 earns its price when the job has three shapes: deep reasoning, long context (150k+ tokens), or tool use with verification. For short outputs under 800 words, Claude 4.5 Sonnet delivers 80% of the quality at a fraction of the cost. GPT-5.4 Pro wins on ecosystem, plugin density, and voice workflows. Gemini 3.1 wins on native browsing and fresh SERP data. Opus is the right pick for code review of multi-file diffs, legal-clause analysis, multi-source SWOT, and agent harnesses that must verify their own work.'
          }
        },
        {
          '@type': 'Question',
          name: 'What changed in Claude Opus 4.7 vs Claude Opus 4.6?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Opus 4.7 launched April 16, 2026 as Anthropic\'s most capable generally available model. The largest practical improvements are in reasoning depth, SWE-bench-class tasks, and agent workflows that require self-verification. The model is more willing to push back, flag uncertainty, and cite its own reasoning steps when prompted to do so — behaviors that earlier Opus tiers hinted at but didn\'t reliably deliver.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the best prompt structure for Claude Opus 4.7?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Five-slot structure: ROLE (who the model is writing as), CONTEXT (domain + constraints), INPUTS (every file or doc pasted, clearly labeled), TASK (deliverable shape), VERIFICATION (how the model should check its own work before finalizing). The VERIFICATION slot is what separates Opus 4.7 prompts from Sonnet prompts — explicitly ask Opus to flag uncertainty, cite sources, and push back if the evidence is thin.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I reduce the cost of using Claude Opus 4.7?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three strategies: (1) Pre-filter with Sonnet — if the prompt fits on one screen and output is under 800 words, Sonnet handles it. (2) Batch similar queries into one long-context call rather than many short ones. (3) Use the VERIFICATION slot to catch errors in one pass rather than running 3-4 iterations. If you can\'t name which jobs Opus materially improves over Sonnet, you\'re probably paying for Opus when you don\'t need to.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can Claude Opus 4.7 review code as well as a senior engineer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On narrow SWE-bench-class tasks, Opus 4.7 matches or exceeds median senior engineer performance. On codebase-aware tasks (where judgment depends on prior decisions, team conventions, and business context), it still trails a good human reviewer. Use Opus for a first-pass review: it catches bugs ranked by blast radius, flags missing tests, and proposes refactors. Then layer human review on top for architectural and conventional judgment.'
          }
        }
      ]
    }
  ];

  const prompts = [
    {
      n: 1,
      title: 'Long-document synthesizer (100+ pages)',
      use: 'You have a 10-K, white paper, or RFP and need fidelity, not highlights.',
      body: `You are a senior research analyst. I am pasting a long document (100+ pages).
Synthesize it for a founder audience.

Document type: [10-K / white paper / industry report / RFP / court filing]
My role: [FOUNDER / PM / COUNSEL / INVESTOR]
What I must walk away with: [DECISION / SUMMARY / RISK MAP]

Document:
"[PASTE FULL TEXT]"

Output:
1. Thesis in ONE sentence (the author's, not mine)
2. 5 claims the author actually makes, with page/section cites
3. 3 claims the author IMPLIES but never states — and whether the evidence holds
4. The 2 places where the document contradicts itself (cite both)
5. 3 questions this document doesn't answer that I now need to answer
6. A final "if I only remember 3 sentences from this" paragraph

Rules:
- If a cite is missing, SAY "no cite found" — do not fabricate.
- Flag any claim where your confidence is <70% with [LOW CONFIDENCE].
- If the document is thin or circular, tell me so explicitly.`
    },
    {
      n: 2,
      title: 'Code review → ranked refactor plan',
      use: 'Multi-file diff, tests included, stakes real.',
      body: `You are a principal engineer doing a pre-merge review. Be direct.

Repo: [1-SENTENCE DESCRIPTION]
Language / framework: [X]
Change intent: [WHAT THE AUTHOR TRIED TO DO]
Stakes: [PRODUCTION / INTERNAL / EXPERIMENT]

Diff + touched files:
"[PASTE]"

Existing tests (if any):
"[PASTE]"

Output in this exact order:
1. Does this ship? (YES / NO / YES-WITH-CONDITIONS — name the conditions)
2. Bugs, ranked by blast radius (data loss > security > correctness > DX)
3. 3 refactors that would pay for themselves in 6 months (with 1-line justification each)
4. Tests missing for the NEW code (not a lecture on coverage — just the gaps)
5. One "this isn't your job but you should know" observation about the broader codebase
6. The single line of code most likely to cause an on-call page

Rules:
- If the diff is too large to review well, say so and ask for it in slices.
- Never invent APIs. If you're unsure a function exists, mark it [VERIFY].`
    },
    {
      n: 3,
      title: 'Contract / legal clause analyzer',
      use: 'Nuance matters and hallucinations are unacceptable — but you\'re prepping for a lawyer, not replacing one.',
      body: `You are NOT a lawyer. You are a careful reader helping a founder prepare for a call with their lawyer.

Contract type: [MSA / SAFE / EMPLOYMENT / NDA / VENDOR]
My side: [BUYER / SELLER / EMPLOYEE / INVESTOR / COMPANY]
Stage / leverage: [HIGH / MEDIUM / LOW]

Full contract:
"[PASTE]"

Output:
1. The 3 clauses most likely to bite in 24 months (cite section numbers)
2. The 3 clauses that are STANDARD for this contract type (don't waste negotiating capital here)
3. The 2 clauses that are non-standard and deserve a redline (draft the redline inline)
4. Any clause where the defined term doesn't match how it's used later (cite both locations)
5. Any missing clause I'd expect in a [CONTRACT TYPE] — explicitly list what's absent
6. A 5-bullet "what to ask my lawyer" list ranked by urgency

Rules:
- You are NOT giving legal advice. Caveat that every time I push past analysis into recommendation.
- If the contract is ambiguous, SAY so — do not resolve ambiguity for me.
- Where jurisdiction matters, flag [JURISDICTION CHECK].`
    },
    {
      n: 4,
      title: 'Multi-source strategic SWOT',
      use: 'You have 5+ inputs (transcripts, reports, competitor docs) and need a defensible synthesis.',
      body: `You are a strategy director. I am pasting 5+ source documents. Produce a defensible SWOT.

Company / project: [NAME + 1 SENTENCE]
Target decision this SWOT informs: [LAUNCH / PRICE / HIRE / PIVOT / FUNDRAISE]
Time horizon: [3 / 6 / 12 / 24 MONTHS]

Sources (label each clearly):
--- SOURCE 1: [e.g. last 90-day sales call transcripts] ---
[PASTE]
--- SOURCE 2: [e.g. competitor earnings call] ---
[PASTE]
--- SOURCE 3: [e.g. internal roadmap doc] ---
[PASTE]
--- SOURCE 4: [e.g. customer NPS comments] ---
[PASTE]
--- SOURCE 5: [e.g. industry report] ---
[PASTE]

Output a SWOT where EVERY item is traceable:
- For each S/W/O/T, list 3 items.
- Each item ends with (SOURCE: N, evidence: "[SHORT QUOTE]").
- Any item not directly supported → put under "INFERRED" section, not SWOT proper.

Close with:
1. The 1 insight no single source has alone that only emerges from cross-reading.
2. The decision this SWOT supports — and the decision it doesn't.`
    },
    {
      n: 5,
      title: 'Research paper → one-pager + open questions',
      use: 'You\'ll brief a non-technical audience on a dense paper.',
      body: `You are translating a research paper for a founder audience.

Paper: [TITLE + AUTHORS + VENUE/YEAR]
Why I'm reading it: [DECISION THIS WILL INFORM]

Full paper:
"[PASTE — OR ARXIV URL IF BROWSING IS ON]"

Output as a one-pager:
1. What problem the paper attacks (1 sentence, no jargon)
2. The method in 3 bullets a non-researcher understands
3. Results — the NUMBER that matters + the baseline it beats (not the whole table)
4. The 2 weakest parts of the methodology (dataset size, benchmark narrowness, etc.)
5. How this result would change my decision IF it replicated
6. How this result would change my decision IF it doesn't
7. The 3 open questions this paper leaves for the next paper

Rules:
- No "groundbreaking" / "state-of-the-art" filler. State the delta in plain numbers.
- If the paper's claim is stronger than its evidence, say so.`
    },
    {
      n: 6,
      title: 'Production incident post-mortem',
      use: 'Logs + Slack + PRs → a document people trust.',
      body: `You are a senior SRE. Write a blameless post-mortem from the raw material below.

Incident summary: [1 LINE — impact + duration]
When: [TIMESTAMP RANGE, TZ]
Severity: [SEV-1 / 2 / 3]

Raw material (label each):
--- LOGS --- [PASTE]
--- SLACK / CHAT ---  [PASTE]
--- PRS / DEPLOYS ---  [PASTE]
--- DASHBOARDS ---  [PASTE OR DESCRIBE]
--- CUSTOMER COMMS ---  [PASTE]

Output in this exact structure:
1. TL;DR (3 sentences: what broke, for how long, what the fix was)
2. Timeline (UTC, minute-by-minute, each line cites which source it came from)
3. Root cause (technical, in one paragraph — no euphemisms)
4. Contributing factors (3 bullets — process, tooling, coverage)
5. What went well (3 bullets — these matter for morale)
6. Action items: TABLE with columns | owner | ETA | category (detect, prevent, respond, recover) |
7. One sentence for the customer-facing summary (plain English, no hedging)

Rules:
- If the cause is still unknown, say so — don't invent one.
- Don't use "human error" as a category. Humans are the control, not the cause.`
    },
    {
      n: 7,
      title: '5-competitor parallel teardown',
      use: 'Positioning call Monday, you have 5 homepages and pricing pages.',
      body: `You are a positioning strategist. I have 5 competitors' homepages. Teardown all five in parallel.

My product: [WHAT WE DO]
My current H1: [YOUR CURRENT HEADLINE]
My ICP: [ROLE + TRIGGER]

--- COMPETITOR 1: [NAME + URL] --- [PASTE HERO + PRICING]
--- COMPETITOR 2 --- [PASTE]
--- COMPETITOR 3 --- [PASTE]
--- COMPETITOR 4 --- [PASTE]
--- COMPETITOR 5 --- [PASTE]

Output a single table:
| Competitor | Who they say it's for | 3 lead claims | Pricing model | Real moat / bluff? |

Then the synthesis:
1. The 2 dimensions all 5 compete on (you can't own these)
2. The 1 dimension NONE of them claim (candidate for your wedge)
3. The 1 competitor most dangerous to you in 12 months — and why
4. The weakest-positioned competitor and the customer segment they've abandoned
5. A rewritten H1 for my product that honestly differentiates from all 5

Rules:
- If my product isn't actually different, say so — don't invent a difference.
- Rank "moat / bluff?" with evidence, not vibes.`
    },
    {
      n: 8,
      title: 'RFC drafter from brain-dump + precedent docs',
      use: 'Internal proposal that needs to survive a review from skeptical seniors.',
      body: `You are a staff engineer helping me turn a brain-dump into an RFC that survives review.

Problem: [1 PARAGRAPH]
Stakes: [WHO/WHAT IS AFFECTED]
Constraints: [DEADLINES, HEADCOUNT, BUDGET, TECH CONSTRAINTS]

My rambling notes:
"[PASTE — BULLETS / VOICE MEMO TRANSCRIPT / WHITEBOARD PHOTO OCR]"

Precedent / required-reading docs (label each):
--- PRIOR RFC: [NAME] --- [PASTE]
--- SYSTEM DESIGN DOC: [NAME] --- [PASTE]
--- SLACK THREAD / EMAIL: [DATE] --- [PASTE]

Output an RFC with these sections:
1. Title (≤12 words, names the decision not the solution)
2. Summary (3 sentences — problem, proposal, cost)
3. Non-goals (3 bullets — what this RFC explicitly does NOT solve)
4. Options considered (at least 3, each with 2 pros, 2 cons, and rough cost)
5. Recommendation (1 of the 3, with the honest reason — not the best one, the right one)
6. Risks and mitigations (ranked by severity × likelihood)
7. Rollout plan (week 1, week 2, week N, kill-switch criteria)
8. Open questions (3-5, tagged [NEEDS DECISION] or [NEEDS DATA])

Rules:
- If the brain-dump conflicts with the precedent docs, FLAG it and name the resolution needed.
- Banned phrases: "best-in-class", "robust", "synergies", "leverage".`
    },
    {
      n: 9,
      title: 'Framework / library migration planner',
      use: 'React 18 → 19, Rails 7 → 8, Python 3.11 → 3.12.',
      body: `You are the engineer who has done this migration 3 times. I'm doing it for the first time.

Source: [FRAMEWORK + VERSION], e.g. "React 18.2 + React Router 6"
Target: [FRAMEWORK + VERSION], e.g. "React 19 + React Router 7"
Codebase size: [FILES, LOC APPROX]
Team size / experience: [N devs, senior/mid/junior mix]
Deadline: [HARD / SOFT / NONE]

Paste relevant files:
--- PACKAGE.JSON --- [PASTE]
--- ROUTE CONFIG / MAIN ENTRY --- [PASTE]
--- ONE COMPONENT THAT USES DEPRECATED APIS --- [PASTE]

Output:
1. The 5 breaking changes most likely to hit THIS codebase (not the full list)
2. For each breaking change: the codemod / manual fix / "just rewrite it" recommendation
3. Order of operations (what MUST ship before what)
4. Estimated dev-days per stage (with a high/low range, not a point estimate)
5. The 2 parts of the upgrade you should NOT do yourself (pay for a migration tool)
6. The 1 thing most teams forget during this migration (based on prior art)
7. Rollback strategy in 3 bullets

Rules:
- If deprecated APIs in my sample files have non-trivial replacements, show the BEFORE/AFTER.
- If my package.json has libs incompatible with the target, list them explicitly.`
    },
    {
      n: 10,
      title: 'Agent harness with tool use + verification',
      use: 'Multi-step task that must check its own work.',
      body: `You are an AI agent that plans, acts, and verifies. You have the following tools:

Tools available:
- search(query) → list of URLs + snippets
- fetch(url) → page content
- write_file(path, content) → confirmation
- read_file(path) → file content
- run_shell(cmd) → stdout + exit code
- ask_user(question) → user response

Task: [ONE SENTENCE — e.g. "Research the top 3 competitors to ACME Co and produce a 1-page brief"]

Budget: [MAX TOOL CALLS / MAX TIME / MAX TOKENS]

Workflow you must follow:
1. Plan — output a numbered plan of 3-7 steps BEFORE calling any tool.
2. Act — at each step, state the tool call, wait for result, then state what you learned.
3. Verify — after executing the plan, cross-check 3 facts from different sources. If any fail, re-plan.
4. Deliver — produce the final artifact in [FORMAT].

Rules:
- If a step produces empty or contradictory results, do NOT fabricate — ask_user or re-plan.
- Every factual claim in the final deliverable must name the tool call + source that produced it.
- If you burn 50% of the budget and are <25% done, stop and ask_user to re-scope.
- Banned: acting without a plan; claims without sources; silent retries > 2 times.`
    },
    {
      n: 11,
      title: 'Anomaly hunt over a CSV / JSON dump',
      use: 'You suspect something\'s off; you can\'t articulate what yet.',
      body: `You are a senior data analyst. Something is off in this dataset. Find it.

Context: [WHAT THIS DATA REPRESENTS, E.G. "last 90 days of Stripe charges"]
What I expect: [THE BASELINE PATTERN — e.g. "~$X MRR, ~Y% refund rate"]
Why I'm looking: [THE TRIGGER — e.g. "finance flagged margin compression"]

Data:
"[PASTE CSV / JSON — OR SUMMARY STATS IF TOO LARGE]"

Output:
1. 3 anomalies ranked by how much they'd change a decision (not by p-value)
2. For each: the rows/keys involved, the metric, and the delta vs expected
3. 2 anomalies that look suspicious but are almost certainly noise — with why
4. 1 question about the data-collection process that, if wrong, makes this whole analysis wrong
5. The single chart I should draw to show this to a non-technical stakeholder

Rules:
- Do not assume a distribution. If the data is small (<100 rows), say so and calibrate.
- If columns are ambiguous (e.g. "amount" — gross? net? cents?), ASK before analyzing.
- Use frequency counts and direct quotes over percentages when N is small.`
    },
    {
      n: 12,
      title: 'Architecture review with failure modes',
      use: 'Before you commit to the diagram, pressure-test it.',
      body: `You are a principal architect. Pressure-test my proposed design before I commit to it.

System purpose: [1 PARAGRAPH]
Scale target: [RPS / QPS / DAU / DATA SIZE]
Constraints: [COST, TEAM, COMPLIANCE, LATENCY]
Non-goals: [WHAT THIS SYSTEM EXPLICITLY DOES NOT DO]

Proposed design:
"[PASTE DIAGRAM DESCRIPTION / DOC / LINK TO WHITEBOARD TRANSCRIPT]"

Output:
1. The 3 bottlenecks you'd expect at 10× current scale (not 100×)
2. The 3 failure modes most likely to page on-call in year 1
3. For each failure mode: detection signal, first blast radius, containment move
4. The 1 component most likely to be the reason for a rewrite in 2 years
5. The 1 simplification that removes 30% of the complexity without hurting the use case
6. The 3 questions this design doesn't answer yet

Rules:
- Don't invent components. If my design is missing a piece, NAME the gap.
- If the scale target and the constraints are incompatible, say so directly.
- If this design was already tried at [KNOWN COMPANY] and failed, cite how.`
    },
    {
      n: 13,
      title: 'Repo onboarding Q&A (docs + code aware)',
      use: 'New hire / new project — get fluent in a day.',
      body: `You are an expert teammate who just joined this codebase. I have questions. Answer them from the files I paste.

Repo summary: [1 SENTENCE + STACK]

Files pasted (label each):
--- README --- [PASTE]
--- ARCHITECTURE DOC --- [PASTE]
--- MAIN ENTRY POINT --- [PASTE]
--- CRITICAL MODULE 1 --- [PASTE]
--- CRITICAL MODULE 2 --- [PASTE]

My questions:
1. [Q1 — e.g. "How does auth work end-to-end?"]
2. [Q2 — e.g. "Where does the payment flow branch for recurring vs one-time?"]
3. [Q3 — e.g. "What's the deploy pipeline?"]

For each question:
- Answer in 3-6 sentences grounded in the pasted files (quote file names + function names).
- List the files NOT pasted that you'd need to answer with more confidence.
- Rate your confidence: [HIGH / MEDIUM / LOW] with one-line why.

Rules:
- Do NOT fabricate file names, function names, or behaviors not in the pasted files.
- Where the docs and the code disagree, flag it — the code is the source of truth.`
    },
    {
      n: 14,
      title: 'Meeting transcript → actions, owners, confidence',
      use: 'You missed the call or ran it poorly and need a document people trust.',
      body: `You are a chief of staff. I have a 60-minute meeting transcript. Extract what matters.

Meeting type: [PLANNING / DECISION / REVIEW / 1-ON-1]
Attendees + roles: [LIST]
My role: [ATTENDEE / ABSENT — I'm catching up]

Transcript:
"[PASTE — SPEAKER-LABELED IF POSSIBLE]"

Output a single table:
| Action | Owner (named person) | Deadline | Confidence (HIGH/MED/LOW) | Source quote |

Rules:
- CONFIDENCE must reflect how clearly the transcript assigns it.
- If no owner was named, put [UNOWNED] and flag as highest priority to resolve.
- If the deadline is vague ("soon", "next sprint"), label [VAGUE] — do NOT invent a date.
- Close with the 3 decisions that were made (explicit) AND the 3 decisions that were AVOIDED.
- Close with 1 line: "The hard topic nobody said out loud was: [X]" — or "none detected".`
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        ))}
      </Head>

      <style>{`
        .blog-post { max-width: 760px; margin: 0 auto; padding: 80px 24px 64px; }
        .blog-post h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 900; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
        .blog-meta { font-size: 14px; color: var(--text-secondary); margin-bottom: 32px; }
        .blog-post h2 { font-size: 24px; font-weight: 800; color: var(--text); margin: 40px 0 16px; letter-spacing: -0.5px; }
        .blog-post h3 { font-size: 18px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .blog-post p { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; }
        .blog-post ul, .blog-post ol { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; padding-left: 24px; }
        .blog-post li { margin-bottom: 8px; }
        .blog-post strong { color: var(--text); }
        .blog-post code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
        .blog-code { background: #1a1a2e; border-radius: 12px; padding: 24px; margin: 20px 0; overflow-x: auto; }
        .blog-code pre { color: #e0e0e0; font-size: 13px; line-height: 1.6; margin: 0; font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; }
        .blog-cta { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin: 40px 0; }
        .blog-cta h3 { font-size: 20px; margin: 0 0 8px; color: var(--text); }
        .blog-cta p { font-size: 15px; color: var(--text-secondary); margin: 0 0 20px; }
        .blog-cta-btn { display: inline-block; background: var(--accent); color: white; padding: 14px 32px; border-radius: 100px; font-weight: 700; text-decoration: none; transition: transform 0.2s; }
        .blog-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .blog-tip { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; padding: 20px 24px; margin: 24px 0; }
        .blog-tip p { margin: 0; font-size: 15px; }
        .model-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
        .model-table th, .model-table td { padding: 12px; border: 1px solid var(--border, #e5e7eb); text-align: left; color: var(--text-secondary); }
        .model-table th { background: var(--surface); color: var(--text); font-weight: 700; }
        .tldr-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
        .tldr-table th, .tldr-table td { padding: 10px; border: 1px solid var(--border, #e5e7eb); text-align: left; color: var(--text-secondary); }
        .tldr-table th { background: var(--surface); color: var(--text); font-weight: 700; }
        .tldr-table td:first-child { width: 48px; font-weight: 700; text-align: center; color: var(--text); }
      `}</style>

      <article className="blog-post">
        <p className="blog-meta">April 22, 2026 · 14 min read</p>
        <h1>{title}</h1>

        <p>
          Anthropic shipped <strong>Claude Opus 4.7</strong> on April 16, 2026 — their most capable generally available model.
          It is <em>not</em> a faster Sonnet. It's a different tool.
        </p>
        <p>
          Opus 4.7 earns its price when the job has three shapes: <strong>deep reasoning, long context, and tool use with
          verification</strong>. Anything else, Sonnet is cheaper and often ties. These 14 prompts are the ones I actually reach
          for when I'm spending Opus tokens.
        </p>

        <div className="blog-tip">
          <p>
            <strong>Rough rule:</strong> if the prompt fits on one screen and the output is under 800 words,{' '}
            <strong>Sonnet first, Opus only if Sonnet disappoints</strong>. Keep receipts — if you can't name which jobs
            Opus materially improved, you're probably paying for Opus when you don't need to.
          </p>
        </div>

        <h2>TL;DR — the 14 prompts</h2>
        <table className="tldr-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Prompt</th>
              <th>When to reach for Opus 4.7</th>
            </tr>
          </thead>
          <tbody>
            {prompts.map(p => (
              <tr key={p.n}>
                <td>{p.n}</td>
                <td><strong>{p.title}</strong></td>
                <td>{p.use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>When Opus 4.7 beats the alternative (and when it doesn't)</h2>
        <p>The right model depends on the shape of the job, not the prestige of the label:</p>
        <table className="model-table">
          <thead>
            <tr>
              <th>Job</th>
              <th>Pick</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deep reasoning, long context, tool use</td>
              <td><strong>Claude Opus 4.7</strong></td>
              <td>Strongest on SWE-bench-class tasks; holds 200k ctx well</td>
            </tr>
            <tr>
              <td>Bulk writing, tight prose under 4k tokens</td>
              <td>Claude 4.5 Sonnet</td>
              <td>80% of Opus quality at a fraction of cost</td>
            </tr>
            <tr>
              <td>Multimodal with fresh web grounding</td>
              <td>Gemini 3.1 Ultra / Pro</td>
              <td>Native browsing + current SERP</td>
            </tr>
            <tr>
              <td>Voice, fastest drafts, huge ecosystem</td>
              <td>GPT-5.4 Pro / GPT-4o</td>
              <td>Tool and plugin density, mobile quality</td>
            </tr>
            <tr>
              <td>Cost-sensitive batch work</td>
              <td>DeepSeek V3.1 / Llama 3.3 70B</td>
              <td>5–20× cheaper per token, good enough for 80% of jobs</td>
            </tr>
            <tr>
              <td>Restricted frontier (not public)</td>
              <td>Claude Mythos (Glasswing)</td>
              <td>Best SWE-bench / GPQA, limited-access partners only</td>
            </tr>
          </tbody>
        </table>

        <h2>The universal Opus 4.7 prompt formula</h2>
        <p>Opus 4.7 rewards structured prompts more than any previous Claude tier. Five slots:</p>
        <div className="blog-code">
          <pre>{`[ROLE]:         who the model is writing as (senior reviewer, counsel, architect)
[CONTEXT]:      the domain, stage, constraints
[INPUTS]:       every file, transcript, doc pasted — label each one
[TASK]:         the deliverable shape (table, ranked list, one-pager, 3 options)
[VERIFICATION]: how the model should check its own work before finalizing`}</pre>
        </div>
        <p>
          The <strong>VERIFICATION</strong> slot is what separates Opus 4.7 prompts from Sonnet ones. Ask Opus to{' '}
          <em>verify, cite, flag uncertainty, and push back</em>. It will. Sonnet tends to comply; Opus tends to correct.
        </p>
        <p>
          Run any draft through the{' '}
          <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', fontWeight: 600 }}>free prompt enhancer</Link> before
          you ship — it'll flag missing slots before Opus gives you a watered-down answer.
        </p>

        <div className="blog-cta">
          <h3>The full library this article draws from</h3>
          <p>145+ reusable prompts across research, strategy, writing, and code — not just Claude.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_MEGA} className="blog-cta-btn">AI Prompt Mega Pack — $97</a>
            <a href={STRIPE_CODE} className="blog-cta-btn" style={{ background: 'var(--text)' }}>Claude Code Kit — $39</a>
          </div>
        </div>

        {prompts.map(p => (
          <section key={p.n}>
            <h2>{p.n}. {p.title}</h2>
            <p><em>When to reach for it:</em> {p.use}</p>
            <div className="blog-code"><pre>{p.body}</pre></div>
          </section>
        ))}

        <h2>Common mistakes people make with Opus 4.7</h2>
        <ol>
          <li>
            <strong>Using Opus for jobs Sonnet handles.</strong> If the output is under 800 words and the input fits on one
            screen, Sonnet first. Opus when Sonnet disappoints.
          </li>
          <li>
            <strong>Skipping the VERIFICATION slot.</strong> Opus is uniquely good at self-checking. A prompt without
            "check your work, flag uncertainty" wastes the model's best feature.
          </li>
          <li>
            <strong>Pasting 150k tokens without labels.</strong> Long context works, but only if each source is clearly
            delimited. Use <code>--- SOURCE N: [label] ---</code> blocks.
          </li>
          <li>
            <strong>Treating it as a yes-man.</strong> Add "if this plan is weak, say so" and "if the evidence doesn't support
            the claim, say so." Opus will push back; most prompts don't give it permission.
          </li>
          <li>
            <strong>Not measuring.</strong> If you're spending Opus tokens and can't name which jobs got materially better,
            run the same 3 prompts through Sonnet and Opus, judge blind, keep receipts.
          </li>
        </ol>

        <h2>The bottom line</h2>
        <p>
          Claude Opus 4.7 is the most capable public Claude tier Anthropic has shipped. But most people are using it the way
          they used Sonnet — one-shot prompts, no verification slot, no labeled long-context. That's how you pay 5× for a
          result that was 1.1× better.
        </p>
        <p>
          Structure the prompt (five slots), pick the right model for the job (not the highest-prestige one), and ask Opus to
          push back on you. Those three moves are the difference between "Opus feels expensive" and "Opus earns its bill."
        </p>
        <p>
          The 14 templates here are free to copy. If you want the complete library — 145+ prompts across research, strategy,
          code, writing, and agents — the{' '}
          <Link href="/ai-prompt-mega-pack" style={{ color: 'var(--accent)', fontWeight: 600 }}>AI Prompt Mega Pack</Link>{' '}
          is what this article is drawn from.
        </p>

        <div className="blog-cta" style={{ marginBottom: 0 }}>
          <h3>Stop paying Opus prices for Sonnet answers</h3>
          <p>145+ ready-to-use prompts with the VERIFICATION slot pre-wired. Lifetime updates.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_MEGA} className="blog-cta-btn">Get the Mega Pack — $97</a>
            <a href={STRIPE_CODE} className="blog-cta-btn" style={{ background: 'var(--text)' }}>Claude Code Kit — $39</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
