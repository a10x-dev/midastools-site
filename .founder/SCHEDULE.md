# Schedule

Your daily agenda. Both you and your human partner can add entries here.
Items marked `[user]` were scheduled by your partner — treat them as commitments.
Items marked `[cofounder]` were scheduled by you — adjust as needed.

Format: `- HH:MM | action description | recurrence | source | enabled`

## Entries
- 09:00 | Morning standup: review metrics, check Dev.to stats, run audit-signal-monitor.py + metrics-snapshot.py, prioritize day | daily | cofounder | true
- 12:00 | Audit-window check: any reply to Hiedeh/Doug/Pham? If yes, fire Reply-Handling Playbook within 30min | daily-may1-may10 | cofounder | true
- 17:00 | EOD review: update STATE.md, log decisions, plan next day | daily | cofounder | true
- 09:00 | May 6: Send 3 audit-pitch follow-ups (drafts in .founder/sales/assessment-pitch-followups-2026-05-06.md) | once-may6 | cofounder | true
- 09:00 | May 8: Send Pham audit-pitch follow-up (longer cadence for legal) | once-may8 | cofounder | true
- 09:00 | May 10: Hard kill-or-iterate decision — review .founder/deliverables/ai-audit-icp-intel-2026-05-04.md before deciding. 4 options now: Plan A ($297 reprice, NOT supported by data), Plan B (cold LinkedIn, NOT supported), Plan C (kill, premature), Plan D (reposition to $1,499 + 4-artifact spec + tripwire + community distribution). | once-may10 | cofounder | true
- 09:00 | May 11: Begin Plan B prep — research 50 LinkedIn solo-coach prospects per cold-outbound-linkedin-spec.md (PARALLEL with Plan A reply-handling, not sequential — see .founder/deliverables/297-audience-restratification-2026-05-03.md) | once-may11 | cofounder | true
- 09:00 | May 15: Plan B first wave — send 25 personalized cold LinkedIn DMs (or kill Plan B if research showed audience is wrong) | once-may15 | cofounder | true
- 09:00 | May 22: Plan A retro — if 0 sales from broadcast, kill Day-2 send cadence; Plan B wave 1 reply-handling | once-may22 | cofounder | true
- 09:00 | Customer reply check: run python3 .founder/tools/read-replies.py — exit 10 = unread reply present, fire reply-handling playbook within 30min | daily | cofounder | true
- 09:00 | May 10: D+5 Shantae nudge if no reply yet (1-line bump, body unchanged) | once-may10 | cofounder | true
- 09:00 | May 12: D+10 Arnaud nudge if no reply yet (same pattern) | once-may12 | cofounder | true
- 09:00 | May 14: KILL-OR-ITERATE for customer-acquisition-strategy-2026-05-05.md — review the 4 kill criteria (customer reply / cold reply / new sale / referral lead) — if 0/4 fire, pick pivot option P1-P4 | once-may14 | cofounder | true
- 09:00 | June 4: D+30 next-product feedback to Shantae + Arnaud (templates in .founder/crm/customers.md) | once-june4 | cofounder | true
- 09:00 | August 3: D+90 referral + early-access ask to Shantae + Arnaud | once-august3 | cofounder | true
- 09:00 | May 13: REASSESS Hunter.io vs Exa Websets ($49/mo). Inputs: Hunter batch reply rate, Hunter searches remaining (out of 50/mo), persona quality. Decide: (a) stay free Hunter, (b) upgrade Exa $49, (c) pivot inbound /quiz. | once-may13 | cofounder | true
- 09:00 | Daily: check Hunter restriction status — if unblocked, run `python3 .founder/tools/hunter-find.py batch .founder/prospects/batch1-shantae-lookalikes.jsonl` then `bash .founder/tools/fire-batch1-cold.sh --send` to fire 5 cold emails | daily-until-fired | cofounder | true
- 09:00 | May 8: BATCH-1 D+2 NUDGE — if no replies from Donnie/Frank/Kris/Alexander/Brian, send single follow-up email pointing to their /q/{slug} (interactive quiz version of the same content). Body: "Quick follow-up — built an interactive version of your prompts at midastools.co/q/{slug}, 60 seconds. Last touch — promise." | once-may8 | cofounder | true
- 09:00 | Daily: drive inbound traffic to /match — share in any organic context (Substack reply, gist update, blog cross-link). Each visitor = potential email capture into our subscribers blob. | daily | cofounder | true
- 09:00 | Daily: run `python3 .founder/tools/trend-watch.py --email --top 5` for AI-trend digest. Top entries become candidate blog posts following the ChatGPT-citation-pattern. Audit by 2026-05-13 — if 0 posts shipped from digest signals, kill the cron. | daily | cofounder | true
