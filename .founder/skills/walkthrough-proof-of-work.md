---
name: walkthrough-proof-of-work
description: After finishing substantive work in a pair session (built/changed/shipped something, ran research, produced a deliverable), write a short Walkthrough that proves what you did in plain language a non-engineer can trust. Fires when a task completes, or when the operator asks "show me what you did", "walk me through it", "how do I know this works", or "prove it".
metadata:
  type: reference
---

# Walkthrough — proof-of-work a non-engineer can trust

**The problem this solves.** When you say "done" or "I fixed it", the operator has no way to verify it without reading code or re-running your work — and our operator often *can't* read the code. A claim is not proof. A **Walkthrough** is: a short, plain-language artifact that shows what you did, how you checked it, and the evidence, so a busy founder can trust the result in 60 seconds without opening a terminal.

This is a differentiator: most agent tools prove their work *to engineers* (diffs, logs). You prove it to a **CEO**.

## When to produce one

Write a Walkthrough when EITHER:
- You just completed a substantive piece of work in a pair session — built or changed something, ran multi-step research, produced a deliverable, closed a task. (Not for a one-line answer or a quick lookup.)
- The operator asks any of: "show me what you did", "walk me through it", "how do I know this works", "prove it", "what changed".

Do NOT write one for trivial turns (a factual answer, a small clarification). One Walkthrough per substantive unit of work — don't spam.

## What it is

An HTML deliverable (follow the `html-deliverable-default` skill — anchor to `.founder/deliverables/_design-system.html`, monochrome, no emojis) written to:

`.founder/deliverables/YYYY-MM-DD-walkthrough-<slug>.html`

Naming it `walkthrough-*` makes it findable and marks it as proof-of-work, not analysis.

## Structure (4 sections, in this order)

1. **What I did** — outcome first, one or two sentences a non-engineer understands. No tool names, no file jargon in the lead. "I built the customer-import flow and it's live" — not "I edited importer.ts and ran the migration."
2. **How I verified it** — the concrete checks you actually ran and what passed. Be honest: if you couldn't verify something, say so plainly. Never claim a check you didn't run. Examples: "Ran the test suite — 42/42 passed", "Opened the page in the browser and confirmed the form submits", "Pulled the live Stripe record and the charge shows $99."
3. **Evidence** — the artifacts. Reference every file you produced by its `.founder/...` path so it renders as a clickable pill in the app (e.g. `` `.founder/deliverables/report.html` ``). If the result is **visual** (a page, a dashboard, a rendered document), capture a screenshot with the Browser and embed/link it — a picture is the strongest proof for a non-coder. Link commits/PRs by SHA where relevant.
4. **What's left / what I need from you** — anything unverified, any decision or approval you need, or "nothing — this is done." One or two lines.

## Voice

Match the operator's voice: terse, concrete, outcome-first, no hype ("leverage", "seamless", "unlock"), no token counts, no AI-slop adjectives. Write for a founder skimming on their phone. Lead every section with the thing they'd ask for if they said "just the TLDR."

## The discipline

- **Ground every claim in evidence you can point to.** Before you write "verified", name the tool result that proves it. If a step was skipped or failed, say that — a Walkthrough that hides a failure is worse than none.
- **Screenshot visual results.** If you built or changed something a person looks at, a screenshot is not optional — it's the proof.
- The Walkthrough surfaces automatically in the session's file rail and the Deliverables tab, so the operator sees it without asking. You don't need to paste the whole thing into chat — write the file, then point at it in one line.
