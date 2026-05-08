# Audit Replies Tracker — May 2-10 Window

**Purpose:** Log every reply to the 3 audit pitches fired Apr 28 (Hiedeh/Doug/Pham) so SLA accountability is auditable + so May 10 kill-or-iterate decision has data.

**SLAs:** 30-min ack, 4-hr deliverable on reply-type-B (sample first). See `.founder/playbooks/reply-handling-playbook.md`.

---

## Pre-staged assets (ready to fire)

| Prospect | Email | Resend pitch ID (Apr 28) | Outline | Follow-up draft |
|---|---|---|---|---|
| Negar / Hiedeh Tavassoli | hiedeh@tavassoli.com | `e1f00089` | `.founder/sales/mini-assessment-outline-negar.md` | `.founder/sales/assessment-pitch-followups-2026-05-06.md` |
| Doug Courter | pastordoug@valleygrace.net | `887ad3cf` | `.founder/sales/mini-assessment-outline-doug.md` | same file |
| Christopher Pham / C. Brannan | cbrannan@criterioncounsel.com | `dfa249f9` | `.founder/sales/mini-assessment-outline-pham.md` | same file |

---

## Reply log

| Date/time received | Prospect | Reply-type (A-E) | Ack sent (Resend ID) | Sample sent? | Sample Resend ID | Time-to-ack | Time-to-deliver | Outcome |
|---|---|---|---|---|---|---|---|---|
| _(awaiting first reply — window opened May 2 09:00 local; T+4.5hrs at 13:42 local with 0 inbox visibility from cofounder side)_ | | | | | | | | |
| 2026-05-07 18:36 UTC (FOLLOW-UP SENT) | Hiedeh / Negar | n/a (we sent, awaiting reply) | n/a | n/a | n/a | n/a | n/a | Resend `0f2c888f`. Watching gist replies via `python3 .founder/tools/read-replies.py` daily. |
| 2026-05-07 18:36 UTC (FOLLOW-UP SENT) | Doug Courter | n/a (we sent, awaiting reply) | n/a | n/a | n/a | n/a | n/a | Resend `303c8edd`. Watching gist replies via `python3 .founder/tools/read-replies.py` daily. |
| 2026-05-08 01:23 UTC (FOLLOW-UP SENT) | Christopher Pham via C. Brannan | n/a (we sent, awaiting reply) | n/a | n/a | n/a | n/a | n/a | Resend `6ae82a8f-47b8-461b-a94f-8b02adf02f82`. T+10d cadence per IP-attorney spec. Body: "sample demand letter" hook. Watching gist replies daily. |

### Window status updates

- **May 2 09:00 local**: Window opens. No inbox access from this seat — Armando holds iam@armando.mx. Polling depends on him sharing replies.
- **May 2 13:42 local (T+4:42)**: No reply update from Armando. 0% reply rate at 4-hour mark. Decision: do NOT prompt him with another async ask — instead pre-build Plan A artifacts (saves 4.5 hrs from May 10 ship-day). Done: 4 artifacts created (template, intake form, page draft, broadcast email). Ship-day collapsed from 6hr → 1.5hr. See `.founder/plans/297-mini-audit-spec.md` § 9 for live checklist.
- **May 3 08:50 local (T+~24h)**: Still no reply visibility from Armando. 0/3 at the 1-day mark. Not catastrophic — IP attorneys (Pham) commonly take 5-7 days, pastors (Doug) often respond Sunday-evening or Monday. Realtor (Negar/Hiedeh) is the fastest reply ICP and 0 from her at T+24h is the most informative data point. Re-stratified the 20-sub list at $297 and wrote `.founder/deliverables/297-audience-restratification-2026-05-03.md` — key finding: Plan A and Plan B should run **in parallel** starting May 10/11, not sequential with Plan B at June 9. Decision logged for May 10 pair session.
- **May 3 09:40 local (T+24:40)**: Morning standup. Still 0/3 reply visibility. Sunday morning is a soft window — pastor traffic typically post-service. Dev.to article 3583082 (audit checklist) confirmed 0 views at day 5; April content channel triple-falsified. Fixed unrelated infra (10th jsonblob death, BLOB_ID drift, commit 613fd50). Did NOT prompt Armando about replies per `armando-async-asks` principle.
- **May 3 23:24 local (T+38:24)**: Late-Sunday EOD signal sweep. 0/3 reply visibility still. audit-signal-monitor.py exit 0, metrics-snapshot.py exit 0, fire-may6 dry-run renders clean. Sunday-night silence is normal; first real reply opportunity is Monday May 4 morning when work-week resumes. T-33h to May 6 09:00 follow-up fire.
- **May 7 12:36 local (T+9 days)**: Strategic-review session 25. Two structural findings:
  - **(a) audit-signal-monitor.py + read-replies.py both broken** — pointing at dead jsonblobs after Armando's May 6 (commit 85277df) migration to GitHub gists. PATCHED both this session: now read from gist primary, jsonblob fallback. Confirmed via gist truth-source: 20 total subs, **0 audit-tagged in 9 days from /audit-template lead magnet**, 1 inbound reply total and it's Armando's own May 5 smoke test (NOT a customer).
  - **(b) May 6 follow-ups NEVER FIRED** — schedule said "DUE 09:00 May 6" but no agent ran the script; no Resend IDs anywhere in the repo. The DUE-item pattern doesn't auto-execute; needs an agent in the loop. Fired 1 day late this session at T+9 (still within outreach-followup-timing playbook 5-10 day window).
  - **Hiedeh follow-up sent**: Resend id `0f2c888f-215c-417d-ab3b-b2dce7f8a08a` @ 2026-05-07 18:36 UTC
  - **Doug follow-up sent**: Resend id `303c8edd-3d90-4bf2-a8af-6b0c929c2f62` @ 2026-05-07 18:36 UTC
  - **Pham follow-up scheduled**: tomorrow May 8 (10-day cadence per IP-attorney spec)
  - **Implication: May 10 hard kill-or-iterate decision MUST PUSH to May 14**. Reply window for follow-ups runs May 7-14. Calling kill at May 10 (T+3 days post-followup) is statistically premature for 8-10d reply patterns.
- **May 7 19:23 local (T+10 days)**: Pham follow-up fired (~10h late from 09:00 schedule due to no agent fire at the slot — confirms `schedule-is-notes-not-cron` lesson). Resend `6ae82a8f-47b8-461b-a94f-8b02adf02f82`. All 4 monitors clean: 0 unread replies, 0 audit-tagged subs, 0 partner-tagged subs, 0 sales 24h. **Status: 0/3 replies + 0/3 follow-up replies at follow-up T+22h (Hiedeh/Doug) and T+0h (Pham). Reply window now extends through May 14-17 for Pham (T+8-10d on follow-up).** Default-recommendation Plan C (kill cold $997 lever) trending; preserve /ai-audit page as back-burner SKU.

---

## Reply-type cheat-sheet (from playbook)

- **A — yes-interested**: send Stripe link + book discovery call within 30min
- **B — send-the-sample-first**: ack within 30min, deliver mini-assessment PDF within 4hr (use pre-staged outline)
- **C — too-expensive**: offer $297 mini-audit as fallback (Plan A SKU, **pre-built May 2** — page draft + Stripe spec + broadcast all on disk; ship-day = ~1.5hr)
- **D — not-now**: file for May 10 follow-up; ask "what would have to be true for this to be a yes in 90 days?"
- **E — hostile / unsubscribe**: one-line apology, mark do-not-contact, log

---

## SLA accountability

- 30-min ack window: every reply gets an acknowledgement within 30 minutes of inbox arrival, regardless of reply-type
- 4-hr deliverable window: B-type replies get the mini-assessment PDF in inbox within 4 hours of inbox arrival
- Misses get logged with the reason in the outcome column. No backdating. Honest accounting > face-saving.

## May 10 decision data

If reply-counts at May 10 09:00 local are:
- ≥1 paid sale → continue audit lever, expand cold-outbound to find more like them
- 1+ B-type sample requested but no sale → pivot positioning around what that prospect said
- 0 replies of any type → execute Plan A ($297 mini-audit, spec at `.founder/plans/297-mini-audit-spec.md`)
