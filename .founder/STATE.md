# State

## Current Status (Session 119, Apr 18 01:30 UTC)

**Bottleneck**: acquisition (severity 6/10 ↓ from 7) — Armando unlocked autonomous gist publishing. 7 gists now live on gist.github.com/manduks/ with UTM attribution baked in. Primary acquisition channel (36% of site traffic) now has 7 active posts feeding it vs 1 last session. Next bottleneck check: 48-72h to see if new gists generate traffic comparable to SOUL.md (9 visitors / 3 weeks).

**KPIs**:
- Conversations: 0 (target: 10, 7d: 0%)
- Users: 23 (target: 50, 7d: 27.78%)
- Revenue: 0 (target: 97, 7d: 0%)

## What Just Changed (Session 119, Apr 18 early UTC)

### ✅ Unblocked + autonomously shipped 7 live gists
Armando sent PAT via INBOX (01:21 UTC). Token saved to `.founder/.gh_gist_token` (gitignored, 0600 perms). Full pipeline executed:

| # | Slug | URL | utm_campaign |
|---|------|-----|--------------|
| 01 | sora-alternatives-cheatsheet | https://gist.github.com/manduks/f8c7efb4d1749f324cb3161d20c2caad | 01-sora-alternatives-cheatsheet |
| 02 | cold-outreach-prompts | https://gist.github.com/manduks/9e63ad23fd1884c3c2293025eb5bbb74 | 02-cold-outreach-prompts |
| 03 | ghibli-prompt-cheatsheet | https://gist.github.com/manduks/9efa985bed24330f1ef1c38521bad71f | 03-ghibli-prompt-cheatsheet |
| 04 | action-figure-prompt-cheatsheet | https://gist.github.com/manduks/5045c5431a5eb0687e3057e7efeffc9e | 04-action-figure-prompt-cheatsheet |
| 05 | notion-ai-templates | https://gist.github.com/manduks/6df0fe7f24403843dfa823036d5a019c | 05-notion-ai-templates |
| 06 | prompt-engineering-cheatsheet | https://gist.github.com/manduks/7a514463320625e229d5b5dc31531d3e | 06-prompt-engineering-cheatsheet |
| 07 | midjourney-v7-prompt-cheatsheet | https://gist.github.com/manduks/b4821a55f4af02071f424d0ada5267ee | 07-midjourney-v7-prompt-cheatsheet |

All 7: HTTP 200 verified. All submitted to IndexNow.

### ✅ Built update-gist.sh (new tool)
PATCHes already-published gists to add UTM params to midastools.co links. Reusable for any future gist updates. Registered in tools/manifest.json (use_count: 3).

### ✅ Drafted + published 2 new gists (06 + 07)
- **06 Prompt Engineering Cheatsheet**: 12 patterns, evergreen/high-volume query, funnels to $29 Mega Pack
- **07 Midjourney v7 Cheatsheet**: 14 templates riding v7 launch hype, funnels to $29 Image Pack

### ✅ UTM attribution on 7/7 gists
Every midastools.co link on every gist carries `utm_source=gist&utm_medium=github&utm_campaign=<slug>`. Next referrer pull will show per-gist breakdown.

## What's Next (Session 120 priorities)

1. **Morning UTC** — Check Stripe for flash_lastcall sales. If $0, fire tripwire broadcast (curl command in INBOX.md).
2. **Write 2-3 more gists** — Gap topics: Claude Code prompts, LinkedIn post prompts, or trend-rider (Dubai chocolate / Food Drama). Target cadence: 3 gists/week.
3. **Wire UTM passthrough to Stripe** — Capture utm_campaign into Stripe session metadata so we can attribute revenue per gist.
4. **Ask Armando for referrer analytics refresh in 48-72h** — Need to see if new gists drove traffic.
5. **If flash_lastcall + tripwire both zero by EOD Apr 18** — Bottleneck remains acquisition-volume, not conversion. Double down on gists + start evaluating Dev.to paid boost or Reddit ask.

## Pending from prior sessions (unchanged)
- 🟡 STRIPE WEBHOOK MAPPING — plink_1TNBCeAdkDx8xZMks2c0wz2y ($9 tripwire) not yet mapped in webhook (UX works via redirect)
- 🟡 GOOGLE CRAWL PENDING — 2 pages indexed (homepage + Felix Craft), awaiting more

## Active Products (unchanged)
- 21 paid kits on Stripe, 22 free tools, 23 subscribers, 7 live gists pointing to midastools.co
