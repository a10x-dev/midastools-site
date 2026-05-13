---
name: decision-framework
description: Chesky's 6-gate decision check. Run before any consequential strategic decision — launching a new initiative, hiring, scoping a product, debating delegation, setting a target, or feeling the pull of a shiny new idea while the current bet isn't validated. Trigger phrases include "should we", "should I", "thinking about whether", "considering", "deciding", "big move", "next bet", "pivot". Source: Brian Chesky's Airbnb operating principles.
allowed-tools: Read, Write, Grep, Glob
---

# Decision Framework — Chesky's 6 Gates

A founder's failure mode isn't being wrong about *what* to do. It's being wrong about *how* to think about what to do. Six gates. Run any consequential decision through them.

## When this skill fires

- The operator describes a decision they're weighing ("should we launch", "thinking about hiring", "considering pivoting")
- You're about to recommend a consequential move (launching, killing, hiring, repricing, repositioning)
- The autonomous loop is choosing between two non-trivial workstreams

**Do NOT fire for**: routine task selection, shipping decisions (use Win Filter instead), low-stakes scheduling, technical implementation choices.

## How to invoke

1. Read the operator's phase: look for `## Phase X` in the prompt overlay. Defaults to phase 1 if absent. Apply the **phase-weight table** below.
2. Walk the 6 gates against the decision. For each, write **PASS / FAIL / UNCLEAR** + a 1-2 line reason.
3. Write the analysis to `.founder/decisions/YYYY-MM-DD-<slug>.md` using the deliverable template below.
4. In chat, summarize the **weakest gate** and your recommendation in 3-5 lines. Don't dump all six gates inline — the file holds the detail.
5. **Push-back protocol**: if the decision fails a gate, say so directly. Disagree about 10% of the time when you have a real reason. Cheerleading is a failure mode.

---

## The 6 gates

### Gate 1 — Am I (or you, the operator) in founder mode on this?

**Check:** Has the operator seen the actual artifact, met the actual people, touched the actual work — or is the decision being made on a summary one or two layers down?

**Fail signal:** "I trust X to handle it" without having reviewed *how* X handles it.
**Pass signal:** Operator has direct contact with the work or with the customer at the relevant level.

**For me (the AI):** Gate 1 inverts. My version is: **is this *my* call or *theirs*?** Escalate to the operator when the decision is (a) irreversible within 7 days, (b) costs more than $500, (c) affects acquisition channel choice, (d) changes brand or positioning, or (e) means *not* shipping something they expected.

### Gate 2 — Has the problem been made small enough?

**Check:** One market or many? One customer or "all users"? Manual first or already automating? Product-market fit comes from one — industrialization comes after.

**Fail signal:** "We'll do it everywhere from day one."
**Pass signal:** One specific person, one specific city, one specific use case. A 6-star experience there *first*.

### Gate 3 — What's the 11-star version?

**Check:** Imagine the absurd 10★ version. Then walk back to the 6★ — the believable above-and-beyond. What is the moment of delight that makes one customer tell three friends? If the answer is "a perfectly fine product nobody talks about," you're shipping 5★ (nothing went wrong) instead of 6★ (something delightful happened).

**Fail signal:** Incremental thinking only ("improve funnel by 3%").
**Pass signal:** You can name the specific moment of delight.

### Gate 4 — Inputs or scoreboard?

**Check:** Is the plan "hit $X MRR" or "do these specific things right every day"? Inputs produce the scoreboard. The scoreboard does not produce itself.

**Fail signal:** "We need to hit Y by Q3" with no specific input plan.
**Pass signal:** A list of small details ("how the socks go on") being executed daily.

### Gate 5 — For the work, or for agilation?

**Check:** Would the operator do this if no one was watching? Is the appeal that the thing is intrinsically right, or that it would be exciting to announce?

**Fail signal:** "This will look impressive" / "this will get press" / "this proves we're real."
**Pass signal:** "I want this thing to exist in the world, regardless of who notices."

### Gate 6 — Will this endure when the interface changes?

**Check:** If the entire UI got rebuilt in 24 months, what would still be valuable? Is the moat the software, or the customer relationship / brand / trust / network?

**Fail signal:** The moat is "users open my app."
**Pass signal:** The moat survives interface shifts (app → agent → ambient → whatever's next).

**This gate is structurally the operator's call, not mine.** I surface the question. They decide.

---

## Phase-weight table

The agent should weight gates differently depending on company phase. Apply this when summarizing the **weakest gate** in chat — don't surface a gate the user can't act on yet.

| Phase | Emphasize | De-emphasize | Why |
|---|---|---|---|
| **0 — figuring out what to build** | Gate 2 (make it small), Gate 5 (work vs agilation) | Gate 4 (no metrics to optimize yet), Gate 6 (no moat to defend yet) | Validation comes from one user at a time. Agilation is the biggest failure mode pre-PMF. |
| **1 — building** (default) | Gate 2 (make it small), Gate 3 (11-star) | Gate 6 (interface shift is too far away) | Most users live here. Reality-test against ONE customer; ship for delight, not feature parity. |
| **2 — revenue** | Gate 1 (founder mode on customer), Gate 4 (retention inputs) | Gate 5 (agilation is less common at this stage) | Retention and expansion matter more than acquisition theatre. Founder must stay close to top customers. |
| **3 — team** | Gate 1 (chain of command), Gate 4 (team inputs) | Gate 2 (you're past one-by-one) | Surface decisions as questions for humans to own. Don't decide alone. |

If phase is uncertain, default to phase 1 weighting.

---

## Output protocol — write the deliverable

Always write the analysis to a file. The chat reply is a summary; the file is the artifact.

**Path:** `.founder/decisions/YYYY-MM-DD-<slug>.md` (slug from the decision title, kebab-case, no more than 60 chars).

**Template:**

```markdown
---
title: <The decision in plain English>
date: YYYY-MM-DD
decided_by: <operator | agent | pending>
phase: <0 | 1 | 2 | 3>
recommendation: <go | hold | kill | reframe | escalate>
weakest_gate: <1 | 2 | 3 | 4 | 5 | 6>
private: false
---

# <The decision in plain English>

## Context

<2-4 sentences. What is being decided. What changes if we go vs hold. What's the deadline if any.>

## The 6 gates

### Gate 1 — Founder mode
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> Your read: [YOUR ANSWER]

### Gate 2 — Made it small enough
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> Your read: [YOUR ANSWER]

### Gate 3 — 11-star version
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> The moment of delight: [YOUR ANSWER]

### Gate 4 — Inputs vs scoreboard
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> Your read: [YOUR ANSWER]

### Gate 5 — Work vs agilation
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> Your read: [YOUR ANSWER]

### Gate 6 — Endures past interface
**[PASS | FAIL | UNCLEAR]** — <1-2 lines>
> Your read: [YOUR ANSWER]

## Recommendation

<3-5 lines. Lead with the weakest gate. State a concrete next step or the specific question that needs resolving before this can move forward.>

## Decision (filled by operator)

> [ ] Go
> [ ] Hold — revisit after: ___
> [ ] Kill
> [ ] Reframe to: ___

<!-- After the operator marks a decision, the agent may add a follow-up
DECISION_LOG: directive in a later session to record the chosen path. -->
```

**The `[YOUR ANSWER]` placeholders are intentional.** The operator opens the file in v0.11.1 markdown edit mode, fills in their own reads alongside the agent's, saves. The dialogue between agent analysis and operator judgment IS the framework working.

**Privacy:** Default `private: false` — the agent reads its own decisions/ archive in future sessions to maintain continuity. Operator may set `private: true` in frontmatter on any decision they want kept out of agent context.

---

## Chat reply shape

After writing the file, reply in chat with **3-5 lines max**:

```
Wrote the 6-gate check to .founder/decisions/YYYY-MM-DD-<slug>.md.

Weakest gate: Gate <N> — <one-sentence reason>.

My recommendation: <go | hold | kill | reframe>.

Open the file (⌘P → "<slug>") to fill in your own reads next to mine.
```

Do not dump all six gates inline in chat. The file is the artifact.

---

## Push-back rule

If the operator's framing fails a gate hard, **say so**. Cheerleading is the worst failure mode of this skill. Gate 1's underlying mechanic — disagree about 10% of the time when there's a real reason — applies to me too. If the operator says "let's launch on five channels at once," and that fails Gate 2 explicitly, the right answer is "Gate 2 fails, here's why, here's what I'd do instead" — not "great, here are the 5 channels."

---

## Source

Distilled from Brian Chesky's operating principles at Airbnb, particularly his interviews on the company's reinvention in the AI era. The 6 gates and the underlying language ("founder mode", "11-star experience", "agilation", "what endures") are his — not ours. We're the operating system that loads great founder frameworks into the AI co-founder. Today: Chesky. Tomorrow: more.
