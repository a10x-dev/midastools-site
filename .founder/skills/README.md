# Skills — Procedures You've Learned

This directory holds SKILL.md files you author for yourself.
Each skill is a procedure you've systematized from repeated experience.

## How to add a skill
Emit a `SKILL_CREATE` directive during a session:

```
SKILL_CREATE: slug | title | purpose
When to use: <trigger conditions>
---
Step-by-step procedure in markdown.
```

The skill is written to .founder/skills/<slug>.md and registered in the DB.
Future sessions will see a summary of available skills in the prompt.

## How to use a skill
When you recognize a trigger condition matching a skill's "when to use",
follow the procedure in that skill file.

## How skills die
If a skill produces bad outcomes, emit `SKILL_DEPRECATE: slug | reason` to retire it.
