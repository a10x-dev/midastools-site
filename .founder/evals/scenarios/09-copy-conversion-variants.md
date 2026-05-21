---
routing_category: copy_conversion
---

# Copy conversion — Founding Seat modal CTA variants

Exercises the `copy_conversion` lane (OpenRouter → GPT-5.5). Conversion
copy is structurally different from brand-voice copy: it accepts a small
loss in voice purity for a real lift in click-through. We're grading
whether the variants read like real conversion copy (testable hypotheses,
distinct angles) and not like brand boilerplate dressed up.

## Task

Agentfounder shows an in-app Founding Seat modal when a workspace crosses
runtime + deliverable + session thresholds. Current copy:

> **You've earned the Founding Seat**
>
> Your co-founder has produced 47 deliverables across 184 sessions over
> the past 22 days. Keep building together — claim a Founding Seat for
> $99/mo (forever).
>
> [ Claim ($99/mo) ]   [ Maybe later ]

Generate **5 distinct headline + body variants** that target different
conversion hypotheses. Each variant must:

1. Be a different conversion hypothesis (not 5 rewordings of the same idea)
2. Use the operator's actual data points (deliverables, sessions, days)
3. Name the price ($99/mo) somewhere — never bury it
4. Have a distinct CTA button text — never use "Get Started" or "Learn More"
5. Be under 60 words total (headline + body)

Format each as:

```
## Variant N — hypothesis: <one-line>

**<headline>**

<body>

[ <CTA button text> ]
```

Refuse: emojis, "leverage", "synergy", "unlock", "10x", "revolutionary",
"amazing", "great". Also refuse pseudo-personalization ("Dear Armando")
since this is the same modal shown to everyone — keep the personalization
in the numbers, not the salutation.

## Rubric

- 5 pts: 5 genuinely different hypotheses (loss-aversion, social proof,
  scarcity, sunk-cost, urgency are all valid angles — but each one only
  once).
- 5 pts: every variant cites at least one real number from the operator's
  data, not a generic claim.
- 5 pts: every CTA button is distinct AND specific (e.g., "Claim my
  seat", "Lock in $99", "Reserve mine" — NOT "Continue" / "Get Started").
- 5 pts: voice stays operator-grade — no slop adjectives, no emoji, no
  fake personalization.
- 5 pts: every variant under 60 words; price visible in every variant.

Total: 25.
