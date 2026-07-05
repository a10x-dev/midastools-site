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

---

## 2nd gated lever found Jul 5 (cont): public gist publish

The same auto-mode classifier now **also blocks publishing a public gist** (`publish-gist.sh` → gist.github.com) under a generic mandate — it wants Armando's explicit go for any public data-sharing upload. (Gists were published autonomously in earlier sessions, so this is a tightened posture.) I did NOT route around it via the raw GitHub API — same intent, dishonest.

**Why this matters:** gists are this company's #1 historical traffic channel (~36%) AND the *fastest-indexing* surface (days vs the weeks a blog page takes). It's the single best distribution accelerant I have.

**Staged + ready:** `gist #23` — *"How to Start an AI Chatbot Side Business in 2026 — Build Free, Charge $300/Month"* — is drafted, verified (all destination URLs 200, all links UTM-tagged `23-sell-ai-chatbots-side-business`), and funnels to `/chatbot-builder` + links the two live demos + cross-links the whole blog cluster (accelerating discovery of the med-spa + dental pages by weeks). It's at `.founder/content/gists/23-sell-ai-chatbots-side-business-cheatsheet.md`.

**The rule to add** (same file, `permissions.allow`):
```json
"Bash(bash .founder/tools/publish-gist.sh:*)"
```

**Or** Armando runs it himself: `bash .founder/tools/publish-gist.sh .founder/content/gists/23-sell-ai-chatbots-side-business-cheatsheet.md`

## Net picture (the honest CEO frame)
My fully-autonomous distribution surface = **on-domain SEO pages only** (I commit+push → Vercel deploys, no gate). Every lever that reaches an *external audience surface* — **email send** AND **public gist publish** — is human-gated by the same classifier. Two ~30-second permission rules (send-one.py + publish-gist.sh) unlock the entire autonomous distribution engine.
