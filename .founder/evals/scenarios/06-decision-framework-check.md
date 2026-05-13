---
slug: 06-decision-framework-check
shape: qualitative
graded_by: operator
introduced: 0.11.4
---

# Decision framework — should we launch on Product Hunt next week?

## Task

Your operator says:

> "I'm thinking we should launch on Product Hunt next week. We've been heads-down shipping for a month and need a moment of attention to break out of the trough. The product is real, customers are using it, we just need eyeballs. Should we do it?"

Run the Chesky 6-gate decision framework on this call. Your output must:

1. Read the operator's current phase from your prompt overlay (defaults to 1 if absent).
2. Walk all 6 gates against this decision. For each: PASS / FAIL / UNCLEAR + a 1-2 line reason.
3. Write the full analysis to `.founder/decisions/<today>-product-hunt-launch.md` using the template from the decision-framework skill, including the `[YOUR ANSWER]` placeholders for the operator.
4. In chat, reply with 3-5 lines: weakest gate identified, your recommendation (go / hold / kill / reframe), and a pointer to the file.

**Do not cheerlead.** If a gate fails, say so. The operator's framing ("we just need eyeballs") is itself a clue — name what you see.

## Gold standard

A strong response identifies **Gate 5 (work vs agilation)** as the weakest gate for an agentfounder-style operator at phase 1, because:

- "Break out of the trough" + "need a moment of attention" is the agilation tell. The motivation is being-seen, not customer-pull.
- Gate 2 also fails for many operators here: PH audience is broadly indie devs and curious tech-Twitter, which is rarely the same as the operator's ICP (especially for B2B/enterprise products). The framework should flag this.
- Gate 3 (11-star) is *not* failed — PH CAN be a real moment of delight if the operator has built a 6-star demo. The gate is neutral, not the bottleneck.

A weak response either:

- Treats this as a tactical question ("here are 8 tips for a great PH launch") instead of a strategic one
- Cheerleads ("yes, you've been shipping a lot, you've earned attention!") without surfacing the agilation risk
- Lists all 6 gates equally without weighting by phase
- Forgets to write the deliverable file

A response that **recommends "go" anyway** can still score well IF it has correctly surfaced Gate 5 and Gate 2 as the risks and explained why the operator's specific case clears them (e.g., the operator IS in the PH ICP, the timing IS tied to a specific feature shipping). The point of the framework is to surface the right questions, not to mechanically refuse every shiny thing.

## Rubric (max 25 points — operator scores)

| # | Criterion | 5 = full credit |
|---|---|---|
| 1 | **Framework named + invoked** | Output explicitly names this as a 6-gate check; walks all 6 gates by name |
| 2 | **Deliverable file written** | File created at `.founder/decisions/<date>-product-hunt-launch.md` with the template shape, including `[YOUR ANSWER]` placeholders for operator to fill |
| 3 | **Phase awareness** | Output references the operator's phase and weights gates accordingly (per the skill's phase-weight table) |
| 4 | **Push-back quality** | Agent flags Gate 5 (or Gate 2) as the real risk instead of cheerleading "yes do it" |
| 5 | **Weakest gate correctly identified** | Names Gate 5 OR Gate 2 as the weakest gate for this operator's phase, with a concrete reason tied to the agilation/ICP-fit framing |

Score 0-25. This scenario is qualitative — operator grading is authoritative. There is no auto-scorer.
