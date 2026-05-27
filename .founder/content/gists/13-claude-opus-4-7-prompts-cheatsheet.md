# Claude Opus 4.7 Prompts — 14 Templates That Actually Use the New Reasoning Model (April 2026)

Published: https://gist.github.com/manduks/ccef0727859f8fa765822747a42f979b

> **Free prompt enhancer:** [midastools.co/prompt-enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) — paste a messy draft (prompt, brief, email), get a tighter version back. Works with any model.
> **Deep dive:** [Claude Code Mastery Guide 2026](https://www.midastools.co/blog/claude-code-mastery-guide-2026?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet)

Anthropic shipped **Claude Opus 4.7** on April 16, 2026 — their most capable generally available model. It's not a faster Sonnet. It's a different tool. Opus 4.7 earns its price when the job has three shapes: **deep reasoning, long context, and tool use with verification**. Anything else, Sonnet is cheaper and often ties.

These 14 prompts are the ones I reach for when I'm actually spending Opus tokens. Copy, paste, fill the brackets, ship.

---

## TL;DR — 14 prompts worth the Opus bill

| #  | Prompt                                              | When to reach for Opus 4.7                          |
|----|-----------------------------------------------------|-----------------------------------------------------|
| 1  | **Long-document synthesizer**                       | 100+ pages, you need fidelity not highlights        |
| 2  | **Code review → ranked refactor plan**              | Multi-file diff, tests included, stakes real        |
| 3  | **Contract / legal clause analyzer**                | Nuance matters, hallucinations are unacceptable     |
| 4  | **Multi-source strategic SWOT**                     | 5+ inputs (reports, transcripts, competitor docs)   |
| 5  | **Research paper → one-pager + open questions**     | You'll brief a non-technical audience on it         |
| 6  | **Production incident post-mortem**                 | Logs + Slack + PRs → a document people trust        |
| 7  | **5-competitor parallel teardown**                  | Positioning call Monday, you have 5 homepages       |
| 8  | **RFC drafter from brain-dump + precedent docs**    | Internal proposal that needs to survive scrutiny    |
| 9  | **Framework / library migration planner**           | React 18→19, Rails 7→8, Python 3.11→3.12            |
| 10 | **Agent harness with tool use + verification**      | Multi-step task, must check its own work            |
| 11 | **Anomaly hunt over a CSV/JSON dump**               | You suspect something's off; you can't say what     |
| 12 | **Architecture review with failure modes**          | Before you commit to the diagram, pressure-test it  |
| 13 | **Repo onboarding Q&A (docs + code aware)**         | New hire / new project — get fluent in a day        |
| 14 | **Meeting transcript → actions, owners, confidence**| You missed the call or ran it poorly                |

---

## When Opus 4.7 beats the alternative (and when it doesn't)

| Job                                       | Pick                          | Why                                                      |
|-------------------------------------------|-------------------------------|----------------------------------------------------------|
| Deep reasoning, long context, tool use    | **Claude Opus 4.7**           | Strongest on SWE-bench class tasks; holds 200k ctx well  |
| Bulk writing, tight prose under 4k tokens | Claude 4.5 Sonnet             | 80% of Opus quality at a fraction of cost                |
| Multimodal with fresh web grounding       | Gemini 3.1 Ultra / Pro        | Native browsing + current SERP                           |
| Voice, fastest drafts, huge ecosystem     | GPT-5.4 Pro / GPT-4o          | Tool and plugin density, mobile quality                  |
| Cost-sensitive batch work                 | DeepSeek V3.1 / Llama 3.3 70B | 5–20× cheaper per token, good enough for 80% of jobs     |
| Restricted frontier (not public)          | Claude Mythos (Glasswing)     | Best SWE-bench / GPQA, limited-access partners only      |

Rough rule: if the prompt fits on one screen and the output is under 800 words, **Sonnet first, Opus only if Sonnet disappoints**.

---

## The universal Opus 4.7 prompt formula

Opus 4.7 rewards structured prompts more than any previous model. Five slots:

```
[ROLE]:        who the model is writing as (senior reviewer, counsel, architect)
[CONTEXT]:    the domain, stage, constraints
[INPUTS]:     every file, transcript, doc pasted — label each one
[TASK]:        the deliverable shape (table, ranked list, one-pager, 3 options)
[VERIFICATION]: how the model should check its own work before finalizing
```

The last slot is what separates Opus 4.7 prompts from Sonnet ones. Ask Opus to **verify, cite, flag uncertainty, and push back**. It will. Sonnet tends to comply; Opus tends to correct.

Run any draft through the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) before you ship.

---

## 1. Long-document synthesizer (100+ pages)

```
You are a senior research analyst. I am pasting a long document (100+ pages).
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
- If the document is thin or circular, tell me so explicitly.
```

---

## 2. Code review → ranked refactor plan

```
You are a principal engineer doing a pre-merge review. Be direct.

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
- Never invent APIs. If you're unsure a function exists, mark it [VERIFY].
```

Enhance the raw review output with the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) before pasting into the PR.

---

## 3. Contract / legal clause analyzer

```
You are NOT a lawyer. You are a careful reader helping a founder prepare for a call with their lawyer.

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
- Where jurisdiction matters, flag [JURISDICTION CHECK].
```

---

## 4. Multi-source strategic SWOT

```
You are a strategy director. I am pasting 5+ source documents. Produce a defensible SWOT.

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
2. The decision this SWOT supports — and the decision it doesn't.
```

---

## 5. Research paper → one-pager + open questions

```
You are translating a research paper for a founder audience.

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
- If the paper's claim is stronger than its evidence, say so.
```

---

## 6. Production incident post-mortem

```
You are a senior SRE. Write a blameless post-mortem from the raw material below.

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
- Don't use "human error" as a category. Humans are the control, not the cause.
```

---

## 7. 5-competitor parallel teardown

```
You are a positioning strategist. I have 5 competitors' homepages. Teardown all five in parallel.

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
- Rank "moat / bluff?" with evidence, not vibes.
```

---

## 8. RFC drafter from brain-dump + precedent docs

```
You are a staff engineer helping me turn a brain-dump into an RFC that survives review.

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
- Banned phrases: "best-in-class", "robust", "synergies", "leverage".
```

---

## 9. Framework / library migration planner

```
You are the engineer who has done this migration 3 times. I'm doing it for the first time.

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
- If my package.json has libs incompatible with the target, list them explicitly.
```

---

## 10. Agent harness with tool use + verification

```
You are an AI agent that plans, acts, and verifies. You have the following tools:

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
- Banned: acting without a plan; claims without sources; silent retries > 2 times.
```

---

## 11. Anomaly hunt over a CSV / JSON dump

```
You are a senior data analyst. Something is off in this dataset. Find it.

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
- Use frequency counts and direct quotes over percentages when N is small.
```

---

## 12. Architecture review with failure modes

```
You are a principal architect. Pressure-test my proposed design before I commit to it.

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
- If this design was already tried at [KNOWN COMPANY] and failed, cite how.
```

---

## 13. Repo onboarding Q&A (docs + code aware)

```
You are an expert teammate who just joined this codebase. I have questions. Answer them from the files I paste.

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
...

For each question:
- Answer in 3-6 sentences grounded in the pasted files (quote file names + function names).
- List the files NOT pasted that you'd need to answer with more confidence.
- Rate your confidence: [HIGH / MEDIUM / LOW] with one-line why.

Rules:
- Do NOT fabricate file names, function names, or behaviors not in the pasted files.
- Where the docs and the code disagree, flag it — the code is the source of truth.
```

---

## 14. Meeting transcript → actions, owners, confidence

```
You are a chief of staff. I have a 60-minute meeting transcript. Extract what matters.

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
- Close with 1 line: "The hard topic nobody said out loud was: [X]" — or "none detected".
```

---

## Common mistakes people make with Opus 4.7

1. **Using Opus for jobs Sonnet handles.** If the output is under 800 words and the input fits on one screen, Sonnet first. Opus when Sonnet disappoints.
2. **Skipping the VERIFICATION slot.** Opus is uniquely good at self-checking. A prompt without "check your work, flag uncertainty" wastes the model's best feature.
3. **Pasting 150k tokens without labels.** Long context works, but only if each source is clearly delimited. Use `--- SOURCE N: [label] ---` blocks.
4. **Treating it as a yes-man.** Add "if this plan is weak, say so" and "if the evidence doesn't support the claim, say so." Opus will push back; most prompts don't give it permission.
5. **Not measuring.** If you're spending Opus tokens and can't name which jobs got materially better, run the same 3 prompts through Sonnet and Opus, judge blind, keep receipts.

Tighten any of these before you ship using the [free prompt enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet).

---

## Resources

- [Claude Code Kit ($39)](https://www.midastools.co/claude-code-kit?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) — 140+ prompts, workflows, and agent recipes for building with Claude end-to-end.
- [AI Prompt Mega Pack ($29)](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) — 145+ reusable prompts across research, strategy, writing, and code — the full library these templates come from.
- [Free Prompt Enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) — paste any draft, get a tighter version back. No login, no signup.
- [Claude Code Mastery Guide 2026](https://www.midastools.co/blog/claude-code-mastery-guide-2026?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) — deep-dive on using Claude for the full dev workflow.
- [Claude Code Prompts Cheatsheet](https://gist.github.com/manduks/edeadfd933d284d6f0903459891b2e61) — sister gist, CLI-focused (not the same as this one).
- [AI SaaS Founder Prompts](https://gist.github.com/manduks/bc445120f5588d30c71c896f0210b00d) — for the 14 writing tasks every founder runs every month.
- [AI Content Creator Prompts](https://gist.github.com/manduks/e1858b89bf4462ad5c2a61b16307bbe2) — sister gist, creator-workflow-focused (repurposing, threads, YouTube, newsletters). Opus is the right pick for the long-form templates inside.

---

*Last updated April 2026 by [Midas Tools](https://www.midastools.co). If one of these prompts saves you an hour of Opus tokens, the [AI Prompt Mega Pack](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=13-claude-opus-4-7-prompts-cheatsheet) has ~130 more like them.*