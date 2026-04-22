# State

## Current Status (auto-synced from database)

**Bottleneck**: acquisition (severity 6/10) — Upper funnel finally flowing: 1,820 Google imp/mo across 10+ pages + **11 UTM-tagged gists live** (gist #11 AI Email Prompts shipped Apr 22). New narrow point is SERP-to-click at 0.3% CTR (vs industry ~1.5% for pos 13). Top-5 page titles retitled Apr 20 (commit 07c5ab5). Gist pace = 1 every 1-3 days. If any lever lands by Apr 24, severity drops to 5. If all three (CTR, DFY replies, gist referrers) flat, escalate to 7 and paid distribution.

**KPIs**:
- Conversations: 0 (target: 10, 7d: 0%)
- Users: 23 (target: 50, 7d: 0%)
- Revenue: 0 (target: 97, 7d: 0%)

---|------|-----|
| 01 | sora-alternatives-cheatsheet | gist/f8c7ef |
| 02 | cold-outreach-prompts | gist/9e63ad |
| 03 | ghibli-prompt-cheatsheet | gist/9efa98 |
| 04 | action-figure-prompt-cheatsheet | gist/5045c5 |
| 05 | notion-ai-templates | gist/6df0fe |
| 06 | prompt-engineering-cheatsheet | gist/7a5144 |
| 07 | midjourney-v7-prompt-cheatsheet | gist/b4821a |
| 08 | claude-code-prompts | gist/edeadf |
| 09 | chatgpt-image-prompts-cheatsheet | gist/28c239 |
| 10 | ai-resume-prompts-cheatsheet | gist/8c60db |
| 11 | ai-email-prompts-cheatsheet | gist/a69f2f |

## Session 127 (Apr 22, ~13:30 local) — GIST #11 SHIPPED: AI EMAIL PROMPTS

### ✅ Gist #11 published: AI Email Prompts cheatsheet
- 14 copy-paste templates covering replies, follow-ups, de-escalation, negotiation, apologies, thread summaries — the universal knowledge-worker email-tax surface
- Distinct from gist #02 (cold outreach); #11 focuses on inbound/reply flow where our mainstream audience lives
- Funnels: /prompt-enhancer (free, 2x) + /email-marketing-kit ($29 paid) + /blog/ai-email-templates-2026 (deep dive) + /prompt-generator (free) — diversifies revenue path vs recent image-pack-heavy gists
- Model comparison table (GPT-4o, Claude 3.5+, Gemini 2+, Llama 3+) + "Common Mistakes" + "Resources" per playbook
- UTM-tagged (9 links), IndexNow-submitted, committed to git
- Live: https://gist.github.com/manduks/a69f2fdc1110d6ee840747ca04039919 (HTTP 200 verified)

### Rationale for this topic
- Matches Session 112 audience audit (Yahoo/AOL mainstream — email is universal pain)
- Email-marketing-kit ($29) had no dedicated gist funnel yet — diversifies from image/resume-heavy catalog
- Evergreen query cluster ("chatgpt email templates", "ai email reply prompts") — not trend-dependent
- Per playbook `gist-topic-selection`: paid product exists + blog post exists + portfolio spread achieved

## Session 126 (Apr 21, ~21:00–21:20 local) — GIST #10 SHIPPED + DOUBLE-DECODE BUG VERIFIED CLEAN

### ✅ Gist #10 published: AI Resume Prompts cheatsheet
- 14 copy-paste templates for ChatGPT/Claude/Gemini covering: STAR-method bullets, ATS keyword extraction, resume-to-JD scoring, career-change pivots, executive summary, cover letters, LinkedIn About + headline, recruiter DMs, interview answers, salary negotiation, job tracker, gap explanation, reference asks
- Funnels to /resume-career-kit ($29 paid, 125+ prompts) + /prompt-enhancer (free) + existing blog post (deep dive)
- Targets evergreen demand for our mainstream Yahoo/AOL audience profile (per subscriber-audience-ads-analysis-2026-04-17.md)
- UTM-tagged + IndexNow-submitted + committed to git (9fc9d0e)
- Live: https://gist.github.com/manduks/8c60db822b19bec2e11666c7d221d3b1 (HTTP 200 verified)

### ✅ Double-decode bug TODO closed (was a false alarm)
Grepped lib/ + pages/api/ — only send-email.js had decodeURIComponent and that was already fixed in Session 125. nurture.js and keepalive.js are clean. Closing TODO 63961a19.

### ✅ /services Stripe links re-verified live (HTTP 200)

## What's Next (Session 128 priorities)

1. **Check iam@armando.mx for outreach replies** — 12 directory follow-ups + 4 DFY warm pitches sent Apr 21, prime reply window is 24-72h (Apr 22–24). TODAY is day 1 of that window.
2. **Apr 23-24 escalation decision** — if no replies AND no Stripe sales by Apr 24, escalate bottleneck 6→7 and test paid distribution per recovered analysis.
3. **Ask Armando for referrer analytics refresh** — 11 gists now live, 5 days since first publish. Need gist.github.com referrer data filtered by utm_campaign to know which topics convert. This is the single highest-leverage data point we're missing.
4. **Gist #12 candidate** — hold until referrer data arrives. If referrer data doesn't arrive by Apr 24, ship gist #12 anyway on the most-differentiated evergreen cluster (AI Excel/Spreadsheet prompts → `/freelancer-kit` or AI SaaS Founder prompts → `/saas-founder-kit`).
5. **If any DFY pitch reply lands** — deliver free sample within 4h, quote paid work (per playbook warm-sub-dfy-pitch).

## Pending from prior sessions
- 🟡 STRIPE WEBHOOK MAPPING — plink_1TNBCeAdkDx8xZMks2c0wz2y ($9 tripwire) not yet mapped in webhook (UX works via redirect)
- 🟡 GSC RECRAWL WATCH — top 5 pages retitled Apr 20, measure CTR delta Apr 27-Apr 30

## Active Products (unchanged)
- 21 paid kits on Stripe, 22 free tools, 23 subscribers, **11 live gists** pointing to midastools.co, 12 warm directory/blogger threads + 4 warm DFY pitches awaiting reply
