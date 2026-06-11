# Schedule

Your daily agenda. Both you and your human partner can add entries here.
Items marked `[user]` were scheduled by your partner — treat them as commitments.
Items marked `[cofounder]` were scheduled by you — adjust as needed.

Format: `- HH:MM | action description | recurrence | source | enabled`

## Entries

# 🔥 PRIMARY DIRECTIVE (locks 2026-05-24, evaluates 2026-06-23)
# Single-bet 30-day sprint: gist → content-creator persona → $39 kit.
# Read [strategy_reframe_30day_single_bet_2026_05_24.md] before anything else.

- 09:00 | MONDAY RITUAL (single 30-min session): (1) ship 1 gist targeting content-creator persona [bash .founder/tools/publish-gist.sh <gist-file>] (2) email 1 paying customer for feedback [send-one.py, rotate Shantae→Arnaud→Cmyrick25] (3) verify 1 truth-claim on a live page (4) verify 1 funnel-instrumentation event firing | weekly-monday | cofounder | true
- 09:00 | 2026-06-23 KILL OR LADDER DECISION (30-day evaluation): 0 gist-attributed paid conversions = formal sunset (redirect domain, archive code). 1+ = ladder to 2 gists/week. 2+ = consider 2nd persona. | once-june23 | cofounder | true
- 09:00 | Customer reply check: `python3 .founder/tools/read-replies.py` — exit 10 = unread reply, fire reply-handling playbook within 30min | daily | cofounder | true
- 09:00 | Metrics-snapshot: `python3 .founder/tools/metrics-snapshot.py --json --save` — verify Stripe LTM + uptime, ping if NEW SALE | daily | cofounder | true

# 🔥 DOMINANT NEAR-TERM REVENUE LEVER (Jun 10 LIST+RESULT pivot — supersedes the gist ritual below)
- 09:00 | Mon Jun 15: FIRE THE memo_art_money MEMO (this is the day's #1 priority — do this BEFORE the stale gist ritual on line ~15, which points at the killed 30-day single-bet strategy). Preview was sent to iam@armando.mx on Jun 10 with a 5-day veto runway (task c26137fe). PRE-FLIGHT: (1) verify Art Machine live `curl -s https://www.midastools.co/api/generate-image \| grep ready` → ready:true (2) confirm no Armando objection to the Jun-10 preview. GATE: if Armando nodded OR did not object after the 5-day runway → per founder doctrine (full autonomy + armando-async-asks empirical near-zero response), SEND. FIRE: `curl "https://www.midastools.co/api/nurture?key=mt-outreach-2026&broadcast=true&template=memo_art_money"`. AFTER: read method-CTR = page_views[utm_campaign=memo_art_money] ÷ sends via track-events, vs 2% kill threshold; watch any resulting sell_path_click. | once-june15 | cofounder | true

# Below: legacy entries — most disabled per REFRAME 2026-05-24. Cleanup deferred.

- 09:00 | Morning standup: review metrics, check Dev.to stats, run audit-signal-monitor.py + metrics-snapshot.py + read-replies.py + partner-signal-monitor.py + quiz-visit-monitor.py, append a new row to `.founder/plans/may14-strategic-synthesis.md` § 1.5 data trail, prioritize day | daily | cofounder | false
- 09:00 | STORAGE RECOVERY (one-shot, fires when Armando shares STORAGE FAILED inbox dump): (1) `python3 .founder/tools/recover-storage-failed.py parse <inbox-file> --out /tmp/recovered.json` (2) `python3 .founder/tools/recover-storage-failed.py merge --in /tmp/recovered.json --dry-run` then `--apply` (3) `python3 .founder/tools/send-recovery-welcomes.py --in /tmp/recovered.json --dry-run` then `--apply` to fire source-aware welcomes within 4h of merge. NOT before May 14 decide-day if recovery happens to land then (avoid noise on strategic day). | once-when-unblocked | cofounder | true
- 12:00 | Audit-window check: any reply to Hiedeh/Doug/Pham? Run `python3 .founder/tools/read-replies.py` (now reading from gist storage, fixed 2026-05-07) — if exit 10, fire Reply-Handling Playbook within 30min. Window extended to 2026-05-14 because follow-ups fired May 7 not May 6. — DISABLED May 23: window closed, 0/3 replies (covered by daily customer-reply-check) | daily-until-may14 | cofounder | false
- 17:00 | EOD review: update STATE.md, log decisions, plan next day | daily | cofounder | true
- 09:00 | May 6: Send 3 audit-pitch follow-ups — DONE LATE 2026-05-07 18:36 UTC (Hiedeh `0f2c888f`, Doug `303c8edd`); Pham still pending May 8 | DONE | cofounder | false
- 09:00 | May 8: Send Pham audit-pitch follow-up via `bash .founder/tools/fire-may8-followups.sh --send` (10-day cadence for IP-attorney) — pre-flight: run `python3 .founder/tools/read-replies.py` first to confirm no Pham reply yet — DONE 2026-05-07 19:23 local (Resend `6ae82a8f`); window closed 0 replies | once-may8 | cofounder | false
- 09:00 | May 14: DECIDE-DAY (single 30-min review). Read `.founder/plans/may14-strategic-synthesis.md` top-to-bottom (8 min). Run the 4 data-input commands at top (5 min). Fill the data row. Decision tree picks branch automatically: Branch 1 (sale → triple down on winner) / Branch 2 (reply → ad-hoc follow-up) / Branch 3 (Boucher incomplete → extend to May 22) / Branch 4 (all dead → pivot P1-P4). — PAST DATE, decide-day fired in pair-Session May 14 | once-may14 | cofounder | false
- 09:00 | May 15: Plan B first wave — send 25 personalized cold LinkedIn DMs (or kill Plan B if research showed audience is wrong) — PAST DATE, Plan B was superseded by Vittoria/Champion play May 20 | once-may15 | cofounder | false
- 09:00 | May 22: Plan A retro — if 0 sales from broadcast, kill Day-2 send cadence; Plan B wave 1 reply-handling — PAST DATE, Plan A audit experiment killed (0/3 replies) | once-may22 | cofounder | false
- 09:00 | Customer reply check: run python3 .founder/tools/read-replies.py — exit 10 = unread reply present, fire reply-handling playbook within 30min | daily | cofounder | true
- 09:00 | May 10: D+5 Shantae nudge if no reply yet (1-line bump, body unchanged) — PAST DATE; Shantae nudge not sent (no reply window remained meaningful by May 10) | once-may10 | cofounder | false
- 09:00 | May 12: D+10 Arnaud nudge if no reply yet (same pattern) — PAST DATE; Arnaud nudge not sent | once-may12 | cofounder | false
- 09:00 | May 14: customer-acquisition-strategy kill-or-iterate is now CONSOLIDATED into the DECIDE-DAY synthesis above (`.founder/plans/may14-strategic-synthesis.md` — Experiment B section + Branch 4 P1-P4 pivots). Kept separate entry for searchability only. — PAST DATE | once-may14 | cofounder | false
- 09:00 | June 4: D+30 next-product feedback to Shantae + Arnaud (templates in .founder/crm/customers.md) | once-june4 | cofounder | true
- 09:00 | August 3: D+90 referral + early-access ask to Shantae + Arnaud | once-august3 | cofounder | true
- 09:00 | May 13: REASSESS Hunter.io vs Exa Websets ($49/mo). Inputs: Hunter batch reply rate, Hunter searches remaining (out of 50/mo), persona quality. Decide: (a) stay free Hunter, (b) upgrade Exa $49, (c) pivot inbound /quiz. — PAST DATE, batch1 cold-outbound channel killed (0/5 replies after D+2 nudge) | once-may13 | cofounder | false
- 09:00 | Daily: check Hunter restriction status — if unblocked, run `python3 .founder/tools/hunter-find.py batch .founder/prospects/batch1-shantae-lookalikes.jsonl` then `bash .founder/tools/fire-batch1-cold.sh --send` to fire 5 cold emails — DISABLED May 23: batch1 was fired May 6 + D+2 nudges fired May 8, channel produced 0 replies (cold-outbound channel killed) | daily-until-fired | cofounder | false
- 09:00 | May 8: BATCH-1 D+2 NUDGE — if no replies from Donnie/Frank/Kris/Alexander/Brian, send single follow-up email pointing to their /q/{slug} (interactive quiz version of the same content). Body: "Quick follow-up — built an interactive version of your prompts at midastools.co/q/{slug}, 60 seconds. Last touch — promise." — DONE 2026-05-07 19:23 local (5/5 fired); window closed 0 replies | once-may8 | cofounder | false
- 09:00 | Daily: drive inbound traffic to /match — share in any organic context (Substack reply, gist update, blog cross-link). Each visitor = potential email capture into our subscribers blob. | daily | cofounder | true
- 09:00 | Daily: run `python3 .founder/tools/trend-watch.py --email --top 5` for AI-trend digest. Top entries become candidate blog posts following the ChatGPT-citation-pattern. Audit by 2026-05-13 — if 0 posts shipped from digest signals, kill the cron. | daily | cofounder | true
- 09:00 | May 8: BOUCHER PILOT — if Armando greenlit, fire Boucher cross-promo pitch (LinkedIn DM or email per `.founder/sales/boucher-crosspromo-pitch.md` Version A or B). If no greenlight by May 9, escalate via Telegram. — PAST DATE, never greenlit, pitch not fired | once-may8 | cofounder | false
- 09:00 | May 12: BOUCHER FALLBACK FIRE — if no Boucher reply at T+4d, send pre-built pitches: Michael King via `.founder/sales/king-cfo-accelerator-pitch.md` + The CFO Club via `.founder/sales/cfo-club-pitch.md`. — PAST DATE, never fired (gated on Boucher fire which never happened) | once-may12 | cofounder | false
- 09:00 | May 22: BOUCHER PILOT 14d KILL CHECK — UPDATED THRESHOLD per cross-promo-conversion-benchmarks-2026-05-07.md. — PAST DATE, Boucher pilot was never started, decision-tree moot | once-may22 | cofounder | false
- 09:00 | June 6: BOUCHER PILOT 30d DECISION GATE — if Boucher posted but 0 finance-club source-tagged signups OR 0 paid upgrades to $97 bundle, channel works but ICP-product fit fails. Pivot ICP, not channel. | once-june6 | cofounder | true
- 09:00 | Daily: run `python3 .founder/tools/partner-signal-monitor.py` — exit 10 = NEW partner-channel signup (finance-club, boucher, etc.); fire same-day welcome via send-one.py with /ai-prompt-mega-pack.zip. | daily | cofounder | true

## Weekly SEO/AEO Content Cadence — Re-Started 2026-05-21
**Rationale:** Vittoria (May 20 buyer) found us via organic SEO on `/blog/ramp-ai-adoption-playbook-2026`. SEO/AEO citation posts on AI adoption + B2B topics are the ONLY proven acquisition channel for real B2B buyers in 47 days. Playbook documented in `.founder/playbooks/weekly-seo-aeo-cadence.md`. Winning template: named-entity hook (specific company + eye-popping public number) → comparison/playbook format → FAQPage schema → Stripe ladder ($29/$49/$97) → cross-link to existing posts.

- 09:00 | Monday: TREND RESEARCH (30 min). Run `python3 .founder/tools/trend-watch.py --top 10`. Filter for ICP-fit topics (B2B AI adoption, enterprise rollouts, named-company case studies, specific public numbers). REJECT backlash/controversy topics — they don't convert. Pick 1 topic with 5-14d ranking window. Document choice in STATE.md. | weekly | cofounder | true
- 14:00 | Monday: SHIP SEO/AEO POST (90-120 min). Follow `.founder/playbooks/weekly-seo-aeo-cadence.md`. Write 2,000-2,500 words. Article + FAQPage schema. 5-7 FAQ questions. Stripe ladder ($29/$49/$97). Cross-link to 1-2 existing related posts. Add to `public/sitemap.xml` (priority 0.9) + `pages/blog/index.js` posts array. Build clean. Commit + push. Run IndexNow on the new URL. | weekly | cofounder | true
- 17:00 | Friday: WEEKLY RETRO (5 min). Open Search Console, check impressions on Monday's URL (will be near-zero in week 1 — that's normal, GSC takes 7-14d to index). For posts shipped 2+ weeks ago, check: (a) appearing in GSC at all? (b) any clicks? (c) any Stripe conversions tagged to that post via UTM? Log lessons in STATE.md. | weekly | cofounder | true
