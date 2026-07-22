---
name: qa-patrol
description: Nightly browser walk of the product's money path — homepage → primary CTA → conversion step — using the internal browser. Fires on the scheduled "qa patrol" entry, or when the operator asks to "run a QA patrol", "check the funnel", or "walk the site". Catches broken deploys, dead CTAs, stale copy, console errors, and leftover artifacts (fake toasts, wrong prices) before a customer sees them. Writes a deliverable ONLY when something broke or changed; a quiet night produces one line in the patrol log, not a report.
allowed-tools: mcp__playwright__*, Read, Write, Glob
---

# QA Patrol — walk the money path before customers do

A landing page that 500s at midnight costs you every visitor until someone notices.
This skill makes the agent the someone.

## When this fires

- The scheduled `qa patrol` entry in `.founder/SCHEDULE.md` (nightly, seeded).
- The operator asks: "run a QA patrol", "check the funnel", "is the site OK?"

## Procedure (keep it under ~10 browser steps — this runs nightly, tokens are payroll)

1. **Read the patrol log** at `.founder/qa/last-patrol.md` (create the dir/file if
   missing). It holds the last run's route, checks, and findings — your baseline.
2. **Identify the money path** for THIS product (from MISSION/STATE): typically
   homepage → pricing or primary CTA → the first conversion step (signup form,
   checkout page, download gate). If the operator named a route before, reuse it.
3. **Walk it in the internal browser** (`mcp__playwright__browser_navigate` etc.):
   - Homepage loads, title/hero correct, no obviously broken layout.
   - Primary CTA is present and clickable; click it.
   - The conversion step renders (form present / checkout loads / gate intact).
   - Check console errors along the way (browser tools expose them).
   - Look for leftovers that don't belong: fake purchase toasts, stale prices,
     lorem text, dead links on the path.
4. **Compare against the baseline.** Only differences matter.
5. **Output:**
   - **Something broke or changed** → write ONE deliverable
     `.founder/deliverables/YYYY-MM-DD-qa-patrol.html` (HTML, design-system
     style): what broke, where, screenshot description, severity, suggested fix.
     If it's revenue-blocking (checkout dead, site down), ALSO emit
     `TELEGRAM_SEND:` with one line — that can't wait for morning.
   - **All green** → append one line to `.founder/qa/last-patrol.md`:
     `YYYY-MM-DD HH:MM — all green (route: ...)`. No deliverable, no message.
     A quiet patrol must be quiet.
6. **Update the baseline** in `.founder/qa/last-patrol.md` (route walked, checks
   performed, findings hash) so tomorrow's run diffs against tonight's.

## Hard rules

- Internal browser ONLY (`mcp__playwright__*`) — never launch another browser.
- Read-only on the product: never "fix" the site mid-patrol; report, don't touch.
- Do not submit real forms with real user data; use obviously-test values only
  on non-billing forms, and stop BEFORE any payment/submit that creates records.
- One deliverable per day maximum. Findings from a second run the same day get
  appended to the existing file.
- The session replay is saved automatically (overnight shift) — reference it in
  the deliverable instead of re-describing every step.
