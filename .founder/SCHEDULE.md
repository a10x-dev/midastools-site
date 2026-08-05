# Schedule

Your daily agenda. Both you and your human partner can add entries here.
Items marked `[user]` were scheduled by your partner — treat them as commitments.
Items marked `[cofounder]` were scheduled by you — adjust as needed.

Format: `- HH:MM | action description | recurrence | source | enabled`

> **Pruned 2026-08-04 (self-review).** This file had 18 items firing "DUE NOW" every
> session — kill-reads for June campaigns that already concluded, a Boucher pilot that
> was never started, a storage recovery that already happened, follow-ups to buyers of
> a product line we retired. Every session opened by reading stale commitments, which
> trains me to ignore the whole file. Full prior contents are in git history
> (`git log -p .founder/SCHEDULE.md`). Rule going forward: **if an entry fires and is
> not actionable, delete it in that session — don't leave it enabled.**

## Entries

# 🎖️ CEO ERA — GOAL: $1M ARR. Engine: Chatbot Builder $39/mo.
# STATUS 2026-08-05: 0 recurring subscriptions ever. $281 lifetime / 5 one-time sales.
# SEO answered NO (5 niche pages, 0 Google landings ever). Do NOT ship niche page #7.
# THE ONE ACTIVE TEST: direct outbound — mint a real demo from a prospect's own site,
# email them the live link. Tool: .founder/tools/demo-outbound/demo-outbound.py
# Kill/pass criteria are in .founder/deliverables/outbound-demo-test-2026-08-05.md

- 09:00 | Daily: FUNNEL READ — `python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --stripe` — exit 10 = first paid subscription OR activation drift. This is the ONE read that matters; it replaces metrics-snapshot + guesswork. | daily | cofounder | true
- 09:00 | Daily: chargeback-watch — `export STRIPE_SECRET_KEY="$(tr -d '\n\r ' < .founder/.stripe_key)" && python3 .founder/tools/chargeback-watch.py` — exit 10 = Early Fraud Warning or dispute. setya@airdropfinder.com $97 (Jul 14) is the elevated-risk charge; watch through ~Oct 2026. If EFW → refund immediately with `--refund-efw --apply`. | daily | cofounder | true
- 09:00 | Daily: customer reply check — `python3 .founder/tools/read-replies.py` — exit 10 = unread reply, respond within 30min. | daily | cofounder | true
- 09:00 | MONDAY REVIEW: (1) run the funnel read at 14d and 7d. (2) Rank every acquisition surface by *Google organic landings*, not by pageviews. (3) Ship ONE change to the best-performing surface — do not clone a surface that has 0 organic landings. (4) Report the qualified-traffic number to Armando. | weekly-monday | cofounder | true
- 10:00 | OUTBOUND BATCH — run the next batch of `demo-outbound.py` (cap is 8 builds per IP per day, so 7-8 prospects max). Source prospects first; never send to a bot whose build returned scraped:false. | daily | cofounder | true
- 16:00 | OUTBOUND READ — count `/chat/cb_*` page_views for the bots in `.founder/state/demo-outbound-log.json`. A prospect who opened their demo is a WARM lead: follow up within 24h. This is the metric that decides whether outbound lives or dies. | daily | cofounder | true
- 03:30 | Run the qa-patrol skill — walk the product's money path in the internal browser (≤10 steps, report only on changes) | daily | cofounder | true
- 17:00 | EOD: update STATE.md, log decisions, plan next day | daily | cofounder | true
