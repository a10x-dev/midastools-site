# Midas Tools — AI Team Adoption Kit
# 01: Engineering Playbook

Six paste-and-run prompts for the workflows engineers actually do every week: code review, PRs, CI/CD debugging, architecture docs, sprint planning, and incident post-mortems. Each prompt is sized to produce a real artifact in one shot — not a vague summary.

These work best when your engineers have access to Claude Sonnet 4.5+ or GPT-5 with a long context window. Smaller models will struggle with code review and post-mortems.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[STACK] — Primary tech stack (e.g. Next.js + Postgres + Vercel)
[TEAM SIZE] — Number of engineers
[REPO URL or LANGUAGE] — Where the code lives or what language it's in
[SPRINT LENGTH] — 1 week, 2 weeks, etc.
```

---

## Prompt 1: Code Review Assistant

### Prompt

```
You are a senior staff engineer reviewing a pull request for [COMPANY NAME], a [STACK] codebase.

Here is the diff:

[PASTE GIT DIFF or PR LINK CONTENT]

Review it across these five dimensions and respond in the exact section structure below.

1. CORRECTNESS — Will this code do what it claims? Any logic bugs, race conditions, off-by-one errors, null/undefined hazards, unhandled error paths? Cite specific line numbers from the diff.

2. SECURITY — Any new attack surface? Injection (SQL, command, prompt), auth/authz bypass, secrets in code, unsafe deserialization, SSRF, missing input validation? Flag anything that needs a security review before merge.

3. PERFORMANCE — N+1 queries, unbounded loops, missing indexes, blocking I/O on hot paths, memory leaks, payload bloat? Suggest specific fixes with code snippets.

4. MAINTAINABILITY — Naming, function length, duplicated logic, missing tests, magic numbers, missing or wrong types, comments that lie about the code. Be specific.

5. STYLE/CONVENTIONS — Anything that violates the team's conventions or industry standard for [STACK]?

End with:
- VERDICT: APPROVE / REQUEST CHANGES / NEEDS DISCUSSION
- Top 3 must-fix items before merge (if any)
- 1-2 nits the author can take or leave

Be direct. No "great work overall" filler. Reviewer's job is to catch what the author missed.
```

### Pro tip

Pair this with your CI pipeline — have a bot post the AI review as a PR comment, then a human reviewer signs off. Engineers stop dreading nitpicky PRs and reviewers spend time on architecture, not commas.

---

## Prompt 2: PR Description Generator

### Prompt

```
Generate a complete pull request description for a change in [COMPANY NAME]'s [STACK] codebase.

Here is the git diff and commit log:

DIFF:
[PASTE DIFF]

COMMITS:
[PASTE git log --oneline OUTPUT]

LINKED TICKET (if any):
[JIRA/LINEAR TICKET — title + description]

Produce a PR description in this exact format:

## Summary
Two sentences. What changed and why. No fluff.

## What This Does
3-5 bullets describing the behavior change from the user's perspective (not the implementation). If purely internal refactor, say so.

## Why
One paragraph. The business or technical reason. Link the ticket.

## How It Works
Bulleted technical overview of the implementation. Mention the key files touched and the design decisions made. Call out anything non-obvious.

## Testing
- Unit tests: [WHAT WAS ADDED/UPDATED]
- Manual QA steps: numbered, reproducible
- Edge cases tested: list them
- Edge cases NOT tested (flag for reviewer): list them

## Rollout Plan
- Is this behind a feature flag? Which one?
- Does it require a migration? Reversible?
- Any monitoring/alerts to watch post-deploy?

## Screenshots / Recordings
[PLACEHOLDER — paste any UI shots here]

## Risks
List the top 2-3 things that could go wrong and how to detect them.

End with a checklist:
- [ ] Tests pass locally
- [ ] No new lint warnings
- [ ] Docs updated if API changed
- [ ] Reviewer assigned
- [ ] Linked ticket
```

### Example output

A 250-line PR diff produces an 80-line description that reviewers can scan in 2 minutes. Team-wide this saves 30+ minutes per PR.

---

## Prompt 3: CI/CD Failure Diagnostician

### Prompt

```
You are a senior DevOps/SRE engineer at [COMPANY NAME] debugging a failed CI/CD pipeline run.

PIPELINE: [GitHub Actions / CircleCI / GitLab CI / Buildkite / Jenkins]
STACK: [STACK]
FAILED STAGE: [test / build / lint / deploy / e2e / type-check]

Here is the failure log:

[PASTE LAST 200 LINES OF CI LOG]

Here is the recent commit history on this branch:

[PASTE git log --oneline -20]

Analyze the failure and produce:

1. ROOT CAUSE — One-sentence summary of what actually broke. Distinguish between:
   - Code defect introduced in this branch
   - Flaky test / environment issue
   - Infrastructure issue (runner, network, external service)
   - Misconfiguration (env var missing, secret expired, version mismatch)

2. EVIDENCE — Cite the exact lines from the log that support your diagnosis. Don't guess.

3. FIX — Specific steps to resolve:
   - If code defect: what file/line to change and what to change it to
   - If flaky: how to reproduce locally + suggested quarantine
   - If infra: who to escalate to and what to ask them
   - If config: which secret/var to update and where

4. PREVENTION — One thing the team should change in the pipeline, tests, or process so this class of failure is caught earlier next time.

5. RETRY ADVICE — Should the engineer just re-run the job, or is a code push needed? Be explicit.

Do not suggest "check the logs" or "verify the environment." Read the actual log I gave you and tell me what's wrong.
```

---

## Prompt 4: Architecture Decision Record (ADR) Writer

### Prompt

```
Write a complete Architecture Decision Record (ADR) for [COMPANY NAME].

Topic: [DECISION TOPIC — e.g. "Choosing event bus: Kafka vs. SQS vs. PubSub for order processing"]

Context:
- Current state: [WHAT EXISTS TODAY]
- Trigger for this decision: [WHY NOW]
- Stack: [STACK]
- Scale: [REQUEST/EVENT VOLUME, TEAM SIZE, etc.]
- Constraints: [BUDGET, TIMELINE, COMPLIANCE, EXISTING VENDOR RELATIONSHIPS]

Options under consideration:
1. [OPTION A]
2. [OPTION B]
3. [OPTION C]

Produce the ADR in this exact format (used at companies like Stripe, Shopify, Anthropic):

---
# ADR-[NUMBER]: [TITLE]
- Status: PROPOSED
- Date: [TODAY]
- Author: [YOUR NAME]
- Reviewers: [REVIEWERS]
---

## Context
2-3 paragraphs. The forces at play, the technical and business pressures, and why a decision is required now.

## Decision
One sentence. What we are choosing to do.

## Options Considered

For each option (A, B, C):
- Description (2-3 sentences)
- Pros (3-5 bullets, specific to our context)
- Cons (3-5 bullets, specific to our context)
- Estimated total cost over 12 months (license + ops + eng time)
- Migration cost (eng-weeks)

## Rationale
Why we are picking [CHOSEN OPTION] over the others. Reference the tradeoffs explicitly.

## Consequences
- Positive: What we now enable
- Negative: What we are giving up
- Neutral: What changes in process / team / vendor relationships

## Reversal Plan
If this decision turns out wrong in 6-12 months, how would we back out? Cost of reversal?

## References
- [LINKS TO BENCHMARKS, VENDOR DOCS, INTERNAL DISCUSSIONS]

Keep it under 2 pages. ADRs longer than 2 pages don't get read.
```

### Pro tip

Store ADRs in a `/docs/adr/` folder in the main repo. Number them sequentially. Reviewers comment in the PR, not in Slack. This becomes your engineering org's memory.

---

## Prompt 5: Sprint Planning Assistant

### Prompt

```
You are helping the engineering team at [COMPANY NAME] plan a [SPRINT LENGTH] sprint.

Team composition:
- [N] engineers, [N] designers, [N] PM, [N] QA
- Capacity this sprint: [TOTAL POINTS or HOURS]
- Out-of-office: [WHO IS OUT, WHEN]

Carryover from last sprint:
[PASTE LIST OF UNFINISHED TICKETS WITH STATUS]

Candidate work for this sprint:
[PASTE LIST OF TICKETS WITH SHORT DESCRIPTIONS + ESTIMATES]

Strategic priorities this quarter:
1. [PRIORITY 1]
2. [PRIORITY 2]
3. [PRIORITY 3]

Produce a sprint plan as follows:

1. PROPOSED SCOPE — A specific list of tickets fitting within capacity, ordered by:
   - Must-do (linked to strategic priorities)
   - Should-do (high value, fits capacity)
   - Could-do (stretch — only if everything else lands)

2. CAPACITY CHECK — Total estimated points vs. team capacity. Buffer of 10-15% should remain unallocated for interruptions.

3. DEPENDENCIES — Which tickets block which? Surface any waiting on external teams, design, or product decisions before the sprint starts. Flag tickets that shouldn't enter the sprint until prerequisites are unblocked.

4. RISKS — Top 3 things that could derail this sprint. Specific, not generic ("backend dependency on Auth team" not "external dependencies").

5. WHAT WE ARE NOT DOING — Explicitly list the candidate tickets that did NOT make the cut and why. This is the most important section — it forces tradeoffs to be visible.

6. PROPOSED SPRINT GOAL — One sentence. The thing this team will be proud to have shipped by end of sprint.

7. DAILY STANDUP FOCUS — 1 question for each day of the sprint that keeps the team aligned on the goal. (e.g. "Are we still on track to ship X by Friday? If not, what changes?")

End with the open questions that need an answer in the planning meeting itself, not asynchronously.
```

---

## Prompt 6: Incident Post-Mortem Writer

### Prompt

```
You are a senior SRE writing the post-mortem for an incident at [COMPANY NAME].

Incident summary:
- Title: [INCIDENT TITLE]
- Severity: [SEV0 / SEV1 / SEV2 / SEV3]
- Start time: [TIMESTAMP]
- Detected at: [TIMESTAMP]
- Mitigated at: [TIMESTAMP]
- Resolved at: [TIMESTAMP]
- Customer impact: [WHAT USERS EXPERIENCED, FOR HOW LONG, HOW MANY]
- On-call engineer: [NAME]
- IC: [INCIDENT COMMANDER NAME]

Timeline (paste raw event log here):
[PASTE TIMELINE — slack messages, alerts firing, deploys, rollbacks, etc., with timestamps]

Contributing factors discussed in the war room:
[PASTE OR LIST]

Write the post-mortem in BLAMELESS format, following this exact structure (modeled on Google SRE + Stripe practice):

# Incident Post-Mortem: [INCIDENT TITLE]

## Summary
3-4 sentences. What happened, who was impacted, how it was resolved. No jargon.

## Impact
- Users affected: [NUMBER or %]
- Duration: [TIME]
- Revenue/SLA impact: [QUANTIFY IF POSSIBLE]
- Internal teams impacted: [LIST]

## Timeline
Chronological table with columns: Time | Event | Action | Actor
Start before the incident (last clean deploy / last green check) and end at resolution + monitoring confirmation.

## Root Cause
Be specific. Not "a bug in the auth service" but "a race condition in `refreshToken()` where two concurrent requests could both increment the version counter, causing a primary-key collision on the sessions table."

## What Went Well
3-5 things. Detection speed, runbook quality, team communication, automation that helped.

## What Went Poorly
3-5 things. Slow detection, missing alert, runbook gap, vendor delay, communication breakdown. BLAMELESS — describe the system gap, not the person.

## Action Items
Table: Action | Owner | Severity (P0/P1/P2) | Due Date | Linked Ticket
At least one prevention item, at least one detection item, at least one process item.

## Lessons Learned
2-3 paragraphs. What this incident taught us about our system, our process, or our assumptions. Honest.

## Appendix
Any supporting data, queries, dashboards, or screenshots.

Tone: Direct, factual, blameless. Assume execs and engineers will both read it.
```

### Pro tip

Run this prompt within 48 hours of resolution. After that, memory degrades and the post-mortem becomes fiction. Review every Friday in an incident-review meeting and turn action items into actual tickets the same day.

---

## Pro Tips for Engineering Adoption

- **Standardize on one model per repo.** Mixing Claude and GPT in code review creates noise. Pick one. Switch later if needed.
- **Treat prompts like code.** Keep them in the repo (`/docs/prompts/`), version them, PR-review them. The team's best prompt is a team asset.
- **The IDE matters more than the model.** Cursor / Zed / Claude Code with strong codebase context will outperform a better model with no context. Train the team on the workflow, not the model.
- **Measure with PR cycle time, not adoption %.** The metric is "did PRs ship faster?" not "did 100% of engineers use AI?"
- **Block AI-only PRs from main.** A human still reviews. AI assists the author; the human owns the code.

---

© 2026 Midas Tools — www.midastools.co
