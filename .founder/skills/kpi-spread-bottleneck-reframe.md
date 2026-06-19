---
name: kpi-spread-bottleneck-reframe
description: When a KPI has been flat (or moving wrong direction) for ≥7 days, the current bottleneck diagnosis is probably wrong. This skill surfaces the most-stuck metric, walks the path-of-causes upstream, and proposes a `BOTTLENECK_UPDATE` directive backed by evidence drawn from recent work_items, deliverables, and connected-service activity. Fires weekly OR when ≥1 KPI shows zero movement for 7+ days. Built for founder-led operators (Armando shape) but useful for any operator running on a single bottleneck-at-a-time model.
allowed-tools: Read, Write, Glob, Grep, Bash
---

# KPI Spread — Bottleneck Reframe

A bottleneck is a hypothesis: "the most upstream blocker right now is X." A hypothesis with zero KPI movement for a week is a falsified hypothesis. This skill catches the falsification before another week passes.

## When this skill fires

- **Weekly automatic** — Monday or first session-start of the week.
- **Operator-triggered** — phrases like "KPIs not moving", "are we stuck", "should we reframe", "what's the real blocker", "stalled".
- **Auto-detection** — if the CEO Dashboard shows ≥1 KPI with `7d: 0%` AND the dashboard `bottleneck` hasn't changed in 14+ days, fire without prompting.

**Do NOT fire for**: KPI fluctuations within a single week, decision-framework calls (use `decision-framework` instead), routine status updates.

## How to invoke

1. Read the current CEO Dashboard `bottleneck` (category, severity, description, evidence) — visible in your prompt context.
2. For each KPI in the dashboard, compute:
   - `current_value`, `target_value`, `baseline_value`, `pct_to_target`
   - `7d_delta` (from dashboard) and rough `30d_delta` if `.founder/deliverables/` history allows
   - **stalled?** boolean: true if `7d_delta == 0` AND `30d_delta == 0`
3. Walk the path-of-causes UPSTREAM from the most-stuck KPI:
   - Revenue stuck → check Users → check Conversations → check Acquisition channel → check ICP message → check Vertical depth
   - Apply the same shape to whatever KPIs the workspace tracks
4. For each upstream link, look in `.founder/customers/`, `.founder/deliverables/`, recent `work_items` (via the dashboard's open-work-items list), and connected-service activity (e.g., Stripe checkout sessions, telemetry healthcheck) for evidence.
5. Propose a sharpened `BOTTLENECK_UPDATE` directive. The new bottleneck should be **further upstream** than the current one if the current is stuck. Categories: `market_understanding`, `product_market_fit`, `acquisition`, `activation`, `conversion`, `retention`, `revenue`, `operations`, `compliance`, `expansion_readiness`.
6. Write the analysis to `.founder/deliverables/YYYY-MM-DD-bottleneck-reframe.html` using the deliverable template below.
7. **Push-back protocol**: if the operator's stated bottleneck is FAR downstream of the stalling KPIs (e.g., they say "conversion" while Users:0 stalled for 30d), name the gap directly: "Your bottleneck is conversion but you have 0 users — conversion can't matter until acquisition fires."

## Output shape

Single HTML deliverable per `html-deliverable-default`. Sections:

### 1. KPI snapshot table

| metric | current | target | 7d Δ | 30d Δ | stalled? |
|---|---|---|---|---|---|

### 2. Path-of-causes walk

A numbered cascade from "most-stuck KPI" upstream. Each step a 1-sentence diagnosis + 1 evidence line (file path, work item id, or service ping).

### 3. Recommendation

A single `BOTTLENECK_UPDATE:` directive (formatted exactly per the dashboard spec). Plus a 2-line "why this isn't the same as the current bottleneck" justification.

### 4. Kill criterion

A specific, dated, falsifiable check. Example: "Re-run this skill on 2026-06-08. If `<metric>` still flat, the reframe was wrong; escalate."

## Anti-patterns

- **Don't** propose a downstream reframe (conversion → revenue) when upstream is empty. That's busywork.
- **Don't** invent evidence. If you can't find a work_item or deliverable that supports the upstream cause, say "no evidence in repo — falsifiable hypothesis only."
- **Don't** fire if all KPIs are moving in the right direction, even slowly. Slow ≠ stuck.
- **Don't** reframe more than once per 14 days. Bottleneck thrash is its own anti-pattern. If you reframed last week and the new one is also stuck, the problem may not be the diagnosis — it may be that the operator hasn't executed on either. Surface that.
- **Don't** lecture. The output is data + a sharpened directive. Operator decides.

## Calibration check

Before emitting the `BOTTLENECK_UPDATE`, ask: "If the operator follows this reframe and ships in line with it, will I be able to tell in 7 days whether it worked?" If no, the directive is too vague. Sharpen until yes.

## What this skill is NOT

- Not a strategy document. It surfaces a falsifiable hypothesis; the operator decides.
- Not a substitute for `decision-framework` — use that when the question is "should we DO X" and use this when the question is "what's the REAL blocker."
- Not a CRM (use `customer-pipeline-stale-deal-flag` for that).
- Not vibes — every claim has a file path or directive id as receipt.
