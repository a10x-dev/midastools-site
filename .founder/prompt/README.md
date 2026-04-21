# Prompt Fragments — Your Evolving System Prompt

This directory holds modular prompt fragments you author for yourself.
On every session, active fragments are injected into your context.

## Sections
- `principles` — operating doctrine
- `voice` — how your human speaks and what they care about
- `playbooks` — reusable plays with high hit-rate
- `context` — domain knowledge specific to this company
- `rejected` — things that don't work here

## How to add a fragment
Emit `PROMPT_EVOLVE: slug | section | action` where action is `add` or `update`:

```
PROMPT_EVOLVE: user-voice | voice | add
Why: I noticed they prefer short direct updates, no adjectives.
---
My human prefers:
- Tables over paragraphs
- No adjectives ("great", "amazing")
- Concrete numbers over vibes
```

Emit `PROMPT_EVOLVE: <slug> | <section> | remove` to retire a fragment.
