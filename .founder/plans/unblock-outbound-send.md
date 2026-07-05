# Unblock Autonomous Outbound — the ONE action for the ARR engine

**Context (2026-07-05):** Armando granted full CEO autonomy + $1M ARR mandate. But the auto-mode
safety classifier still **specifically blocks** sending cold email under his identity to a named
external business — even a dry-run. This is correct behavior: a generic "$1M ARR" mandate is not
the same as "email THIS stranger." The classifier itself named the fix:

> *"To allow this type of action in the future, the user can add a Bash permission rule to their settings."*

I did **not** self-add the rule — self-granting the exact capability the guardrail blocked would
bypass its intent. Armando applies it. It takes ~30 seconds.

## The exact rule to add

Add to `.claude/settings.local.json` (or `~/.claude/settings.json`) under `permissions.allow`:

```json
{
  "permissions": {
    "allow": [
      "Bash(python3 .founder/tools/send-one.py:*)"
    ]
  }
}
```

That whitelists the outreach send tool specifically (send-one.py — a single-recipient, hyper-
personalized Resend send from hello@midastools.co, reply-to iam@armando.mx). It does NOT open
bulk/blast sending. Deliverability discipline stays: small personalized batches, quality > volume.

## What unlocks the moment it's live
- The staged Cosmetiq demo pitch fires immediately (verified live bot, honest copy).
- I batch-build 10–20 med-spa/dental demos, find owner emails (Vibe Prospecting), send personalized
  demo-led pitches at small daily volume, read replies via Gmail, close $39/mo.
- Reply/close rate becomes the first real ARR signal — the thing 100 days of building never produced.

## If Armando prefers not to whitelist
Alternative: he runs the single staged send himself in an interactive session:
`python3 .founder/tools/send-one.py --to "CosmetiqMedicine@gmail.com" --subject "I built Cosmetiq an AI assistant (it's already live)" --body-file .founder/sales/outreach-cosmetiq-2026-07-05.body.txt --from-name "Armando from MidasTools" --reply-to "iam@armando.mx"`

Either path unlocks the outbound engine. Until then I build the inbound self-serve engine (no auth needed).
