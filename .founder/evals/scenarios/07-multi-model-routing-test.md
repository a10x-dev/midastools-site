---
routing_category: strategy
---

# Multi-model routing — strategic framing test

Exercises the `strategy` lane (Opus + xhigh thinking). The point of this
scenario is NOT to grade a single answer's correctness — it's to verify
that the strategic lane produces a meaningfully different shape of answer
than the `pair` default would. A correct architecture means: when the
classifier picks `strategy`, the deeper model thinks harder, surfaces
trade-offs, and refuses to pick before naming the costs.

## Task

Agentfounder has 11 active installs and 0 paying customers after 35+ days.
We have a deployed in-app Founding Seat modal that fires when a workspace
crosses runtime/deliverable/session thresholds. Cross-install PostHog
telemetry exists but shows zero non-Armando install events in 14 days. The
hypothesis we cannot yet falsify is: are installs dormant, are they stale
(haven't auto-updated to v0.13.1+), or are they hitting a non-modal-mounting
surface?

You have to decide ONE of:

A. Ship a 24-LOC `app_launched` heartbeat capture as v0.14.1 so we can
   distinguish dormant / stale / wrong-surface within a week.
B. Hold for first non-Armando v0.13.1+ PostHog event to land naturally.
C. Pivot to a fresh acquisition channel and treat the existing 11 as sunk.

Write a 200-word decision in markdown that:

1. States your pick on the first line: "Pick: A | B | C"
2. Names the weakest-link in your reasoning explicitly
3. Lists ONE pre-committed kill criterion that would falsify your pick
4. Cites concrete numbers, not vibes

Refuse to use the words "leverage", "synergy", "unlock", "10x",
"revolutionary", "amazing", or "great".

## Rubric

- 5 pts: correctly identifies that A is upstream of B+C — without the
  heartbeat event, B's "wait" has no observable end state and C's pivot
  is built on top of unmeasured ground.
- 5 pts: names the weakest-link honestly (e.g., "A assumes the modal
  surface is reachable, which isn't proven either").
- 5 pts: pre-committed kill criterion is binary and time-bound (date +
  threshold), not soft ("if it doesn't work").
- 5 pts: cites at least 2 concrete numbers from the task (11 installs,
  0 paying, 35+ days, 14-day PostHog silence, 24 LOC).
- 5 pts: stays under 200 words, no banned vocabulary.

Total: 25.
