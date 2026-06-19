---
name: customer-pipeline-stale-deal-flag
description: Surface every customer where the next agreed-upon next step is overdue. Fires weekly OR when the operator asks for a pipeline check, a deal review, or "what's stale?" Output is a sorted table of stale deals with proposed next-step and owner. Reads `.founder/customers/*.md` frontmatter (deal_stage / mrr / last_touch_at / next_step_due_at / next_step / channel / priority). Built for sales-led operators (Maggie / Oswaldo / Ricardo shape) but useful for any founder running a real pipeline.
allowed-tools: Read, Write, Glob, Grep
---

# Customer Pipeline — Stale Deal Flag

A pipeline isn't a list of names. It's a list of *next steps*. When the next step is past-due, the deal isn't "still in flight" — it's *stalled* and silently aging out. This skill makes that visible.

## When this skill fires

- **Weekly automatic** — Monday or first session-start of the week.
- **Operator-triggered** — phrases like "what's stale", "pipeline check", "deal review", "where am I behind", "who haven't I followed up with", "review my customers".
- **Conversation-triggered** — when the operator mentions a customer by name and the agent recognizes drift between recent context and what's in `.founder/customers/<name>.md`.

**Do NOT fire for**: routine status updates, KPI checks (use `kpi-spread-bottleneck-reframe` instead), one-off customer questions where the file already has fresh data.

## How to invoke

1. Glob `.founder/customers/*.md` (excluding `README.md`).
2. For each file, parse the YAML frontmatter. Extract: `slug`, `name`, `company`, `deal_stage`, `mrr`, `last_touch_at`, `next_step_due_at`, `next_step`, `channel`, `priority`, `tags`.
3. Compute `days_overdue = today - next_step_due_at` (negative = future-due, skip those).
4. **Filter**: only include customers where `days_overdue > 0`. Sort by `priority` ASC then `days_overdue` DESC (highest-priority oldest-stale first).
5. Write the deliverable to `.founder/deliverables/YYYY-MM-DD-stale-pipeline.html` using the table template below.
6. In chat (or as a brief preamble in the deliverable), call out the **top 3 most-overdue** customers in ≤5 lines. Don't dump the full table inline.
7. **Push-back protocol**: if `next_step` is vague ("follow up", "check in", "see how it's going"), say so directly. A vague next step *is* the stalling cause. Propose a sharpened next step in the table.

## Output shape

Single HTML deliverable. Inline CSS per `html-deliverable-default` skill. One table:

| name (company) | stage | days overdue | original next-step | proposed sharpened next-step | channel | owner |
|---|---|---|---|---|---|---|

Above the table, a 2-3 sentence framing: total stale, oldest stale, total MRR-at-risk if any.

Below the table, a "Hold queue" — customers with `days_overdue < 14` (recent enough that the operator probably hasn't forgotten). Surface lightly so they don't get lost but don't take focus.

## Update protocol (when operator acts)

When the operator says they took an action ("messaged Maggie", "closed Ricardo deal", "Oswaldo paid"), emit a `WIKI_UPDATE` or directly edit the customer file's frontmatter:
- `last_touch_at: <today>`
- `next_step_due_at: <today + 7 to 14 days>` (depending on channel cadence)
- `next_step: <new specific commitment>`
- If status changed: `deal_stage: <new stage>` and `mrr: <new value>`

Never silently update — always echo the change in chat so the operator can correct.

## Vague-next-step rewrites

These are the most common vague patterns and the sharpened forms:

| vague | sharpened |
|---|---|
| "follow up" | "Send WhatsApp asking if they want to schedule the install call this week" |
| "check in" | "Email asking 1 yes/no: do they want to keep evaluating or pause?" |
| "see how it's going" | "Ask for 1 concrete output the agent produced last week, then ask if it justified the seat" |
| "see if they paid" | "Pull Stripe by customer email, then either send receipt-thank-you or 'are we still moving?' message" |
| "wait for response" | (NOT a next step — convert to: "if no reply by <date>, send 1-sentence breakup email") |

## Anti-patterns

- **Don't** assume "deal_stage: demo" without a `next_step_due_at` means active — silent stages are dead stages. Surface them.
- **Don't** drop the customer if `next_step_due_at` is missing entirely — flag with "no next step set" and propose one.
- **Don't** sort by alphabetical name — sort by overdue + priority so the operator's eye lands on the right row first.
- **Don't** include the operator's own dogfood workspaces (filter by `tags` containing `dogfood` if present, or by `relationship: operator` when the operator IS the customer).

## What this skill is NOT

- Not a CRM. The customer files are the source of truth; this skill surfaces gaps, not records.
- Not a fire-trigger. Surface the gap; the operator decides whether to send a message themselves.
- Not a substitute for a real conversation — a deal stuck because the customer is silent doesn't unstuck just because you re-message them; surface that pattern too.
