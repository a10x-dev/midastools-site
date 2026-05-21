---
routing_category: research
---

# Research — competitor positioning (Hermes vs Agentfounder)

Exercises the `research` lane (Sonnet + low thinking + tools). Research
turns are graded on whether the answer cites real, verifiable claims —
not on whether the model "sounds confident". A correct research answer
either names sources OR explicitly flags "I cannot verify X from
training-data alone, needs a web fetch."

## Task

Hermes 4 (Nous Research) is the #1 model on OpenRouter as of May 2026 and
has shipped multiple autonomous-agent harnesses through 2026. The
Agentfounder competitive thesis says: memory + self-improvement are
table-stakes; our actual moat is vertical business depth (pre-loaded
SKILL.md files for sales/audits, business-shaped directives, customer-
shape memory, phase-aware company state).

In <=500 words, produce a competitive briefing that answers:

1. **What does Hermes ship that we don't?** Name 2-3 specific features
   you're confident about + 1 you can't verify without a web fetch
   (and flag it as such).
2. **What do we ship that Hermes doesn't?** Same shape: 2-3 specific
   features + 1 unverified claim with flag.
3. **Where does the moat actually live?** One paragraph, defending
   "vertical business depth" OR pushing back with a better thesis if
   the evidence supports one.

Format as a brief, not an essay. Use tables where they fit. Cite version
numbers if you have them. Use the explicit token `[NEEDS_VERIFY]` next
to any claim you can't ground in confident recall — do NOT silently
invent details.

## Rubric

- 6 pts: at least 4 of 6 named features are real and verifiable from
  training-data confident recall (model picks, harness primitives,
  shipped versions, public posts). No hallucinated features.
- 6 pts: at least 1 `[NEEDS_VERIFY]` flag used honestly — the model
  declined to fabricate at least once. (0 flags is suspicious; 5+
  flags is a cop-out — sweet spot is 1-3.)
- 6 pts: moat answer engages with the thesis directly — either defends
  "vertical depth" with specific Hermes capabilities that we exceed, or
  pushes back with a counter-thesis grounded in evidence. Does NOT
  hedge into "both have merit".
- 4 pts: stays under 500 words; format is brief-shaped (tables,
  bullets) not essay-shaped.
- 3 pts: no banned vocabulary, no slop.

Total: 25.
