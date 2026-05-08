# Schedule

Your daily agenda. Both you and your human partner can add entries here.
Items marked `[user]` were scheduled by your partner — treat them as commitments.
Items marked `[cofounder]` were scheduled by you — adjust as needed.

Format: `- HH:MM | action description | recurrence | source | enabled`

## Entries
- 09:00 | Morning standup: review metrics, check Dev.to stats, run audit-signal-monitor.py + metrics-snapshot.py + read-replies.py + partner-signal-monitor.py + quiz-visit-monitor.py, append a new row to `.founder/plans/may14-strategic-synthesis.md` § 1.5 data trail, prioritize day | daily | cofounder | true
- 12:00 | Audit-window check: any reply to Hiedeh/Doug/Pham? Run `python3 .founder/tools/read-replies.py` (now reading from gist storage, fixed 2026-05-07) — if exit 10, fire Reply-Handling Playbook within 30min. Window extended to 2026-05-14 because follow-ups fired May 7 not May 6. | daily-until-may14 | cofounder | true
- 17:00 | EOD review: update STATE.md, log decisions, plan next day | daily | cofounder | true
- 09:00 | May 6: Send 3 audit-pitch follow-ups — DONE LATE 2026-05-07 18:36 UTC (Hiedeh `0f2c888f`, Doug `303c8edd`); Pham still pending May 8 | DONE | cofounder | false
- 09:00 | May 8: Send Pham audit-pitch follow-up via `bash .founder/tools/fire-may8-followups.sh --send` (10-day cadence for IP-attorney) — pre-flight: run `python3 .founder/tools/read-replies.py` first to confirm no Pham reply yet | once-may8 | cofounder | true
- 09:00 | May 14: DECIDE-DAY (single 30-min review). Read `.founder/plans/may14-strategic-synthesis.md` top-to-bottom (8 min). Run the 4 data-input commands at top (5 min). Fill the data row. Decision tree picks branch automatically: Branch 1 (sale → triple down on winner) / Branch 2 (reply → ad-hoc follow-up) / Branch 3 (Boucher incomplete → extend to May 22) / Branch 4 (all dead → pivot P1-P4). Synthesis covers BOTH the audit experiment AND the customer-acquisition kill-or-iterate in one frame. | once-may14 | cofounder | true
- 09:00 | May 15: Plan B first wave — send 25 personalized cold LinkedIn DMs (or kill Plan B if research showed audience is wrong) | once-may15 | cofounder | true
- 09:00 | May 22: Plan A retro — if 0 sales from broadcast, kill Day-2 send cadence; Plan B wave 1 reply-handling | once-may22 | cofounder | true
- 09:00 | Customer reply check: run python3 .founder/tools/read-replies.py — exit 10 = unread reply present, fire reply-handling playbook within 30min | daily | cofounder | true
- 09:00 | May 10: D+5 Shantae nudge if no reply yet (1-line bump, body unchanged) | once-may10 | cofounder | true
- 09:00 | May 12: D+10 Arnaud nudge if no reply yet (same pattern) | once-may12 | cofounder | true
- 09:00 | May 14: customer-acquisition-strategy kill-or-iterate is now CONSOLIDATED into the DECIDE-DAY synthesis above (`.founder/plans/may14-strategic-synthesis.md` — Experiment B section + Branch 4 P1-P4 pivots). Kept separate entry for searchability only. | once-may14 | cofounder | true
- 09:00 | June 4: D+30 next-product feedback to Shantae + Arnaud (templates in .founder/crm/customers.md) | once-june4 | cofounder | true
- 09:00 | August 3: D+90 referral + early-access ask to Shantae + Arnaud | once-august3 | cofounder | true
- 09:00 | May 13: REASSESS Hunter.io vs Exa Websets ($49/mo). Inputs: Hunter batch reply rate, Hunter searches remaining (out of 50/mo), persona quality. Decide: (a) stay free Hunter, (b) upgrade Exa $49, (c) pivot inbound /quiz. | once-may13 | cofounder | true
- 09:00 | Daily: check Hunter restriction status — if unblocked, run `python3 .founder/tools/hunter-find.py batch .founder/prospects/batch1-shantae-lookalikes.jsonl` then `bash .founder/tools/fire-batch1-cold.sh --send` to fire 5 cold emails | daily-until-fired | cofounder | true
- 09:00 | May 8: BATCH-1 D+2 NUDGE — if no replies from Donnie/Frank/Kris/Alexander/Brian, send single follow-up email pointing to their /q/{slug} (interactive quiz version of the same content). Body: "Quick follow-up — built an interactive version of your prompts at midastools.co/q/{slug}, 60 seconds. Last touch — promise." | once-may8 | cofounder | true
- 09:00 | Daily: drive inbound traffic to /match — share in any organic context (Substack reply, gist update, blog cross-link). Each visitor = potential email capture into our subscribers blob. | daily | cofounder | true
- 09:00 | Daily: run `python3 .founder/tools/trend-watch.py --email --top 5` for AI-trend digest. Top entries become candidate blog posts following the ChatGPT-citation-pattern. Audit by 2026-05-13 — if 0 posts shipped from digest signals, kill the cron. | daily | cofounder | true
- 09:00 | May 8: BOUCHER PILOT — if Armando greenlit, fire Boucher cross-promo pitch (LinkedIn DM or email per `.founder/sales/boucher-crosspromo-pitch.md` Version A or B). If no greenlight by May 9, escalate via Telegram. | once-may8 | cofounder | true
- 09:00 | May 12: BOUCHER FALLBACK FIRE — if no Boucher reply at T+4d, send pre-built pitches: Michael King via `.founder/sales/king-cfo-accelerator-pitch.md` (LinkedIn DM Version A preferred to https://www.linkedin.com/in/iammichaelking) + The CFO Club via `.founder/sales/cfo-club-pitch.md` (email Version A primary via thecfoclub.com/about contact form). Both drafted Session 28 — fire = single send, not draft+send. | once-may12 | cofounder | true
- 09:00 | May 22: BOUCHER PILOT 14d KILL CHECK — UPDATED THRESHOLD per cross-promo-conversion-benchmarks-2026-05-07.md: real cold-pitch reply rate is 5-15% not 30%, so 0/3 ≠ failure. New thresholds: (a) 0 replies across 8+ pitches sent = ICP-channel-mismatch (pivot ICP); (b) 1+ replies but 0 finance-club source-tagged signups in 14d = channel works but ICP-product fit fails (pivot offer/page); (c) 1+ source-tagged signups = working signal, hold and iterate. Default fallback if (a) = $30 Reddit r/ChatGPTPromptGenius promoted post. | once-may22 | cofounder | true
- 09:00 | June 6: BOUCHER PILOT 30d DECISION GATE — if Boucher posted but 0 finance-club source-tagged signups OR 0 paid upgrades to $97 bundle, channel works but ICP-product fit fails. Pivot ICP, not channel. | once-june6 | cofounder | true
- 09:00 | Daily: run `python3 .founder/tools/partner-signal-monitor.py` — exit 10 = NEW partner-channel signup (finance-club, boucher, etc.); fire same-day welcome via send-one.py with /ai-prompt-mega-pack.zip. | daily | cofounder | true
