# P4b Channel A — Reddit Promoted Post — Paste-Ready Content

**Authored:** Session 28 (May 14 05:10 local) — pre-build per `pre-build-while-waiting` after firing the May 14 Telegram brief. Sibling files: `p4b-gumroad-listing-paste-ready.md`, `p4b-producthunt-paste-ready.md`.

**Purpose:** Collapse Reddit Ads Manager submission from "compose + paste + target + bid" (~30 min) to "paste 5 fields + click Submit" (~10 min).

**Trigger conditions:**
- Branch 4 picked AND Armando ack's the $30 spend
- AND Armando has Reddit Ads Manager access (or shares creds for agent-browser)

---

## Step 0 — Prerequisites

- Reddit Ads Manager account at https://ads.reddit.com
- Stripe payment method on file with Reddit Ads (one-time setup, ~5 min if first campaign)
- $30 USD ad budget pre-committed

---

## Step 1 — Campaign setup

### Field 1 — Campaign Objective
```
Conversions
```
*(Falls back to **Traffic** if conversion pixel not configured. Per S159 attribution work, our /api/track captures `utm_source=reddit` events server-side, so even Traffic-objective campaigns are measurable.)*

### Field 2 — Campaign Name
```
P4B-MEGAPACK-REDDIT-2026-05-14
```

---

## Step 2 — Ad Group + Targeting

### Field 3 — Audience (Communities)
**Primary:**
```
r/ChatGPTPromptGenius
```
*(1.6M+ subscribers per Session 155 ICP intel — overlaps the "AI-curious working professional" who one-clicks $29 prompt packs.)*

**Secondary (if budget allows):**
```
r/ChatGPTPro
r/ClaudeAI
```

### Field 4 — Geography
```
United States · Canada · United Kingdom · Australia
```
*(Tier-1 English-speaking markets matching our 3-of-3 paying-customer ICP per S24 buyer-vs-funnel-mismatch. Excluding India/SE Asia because the May 9-14 chatgpt-citation data showed 32/44 India-mobile visitors clicking but not converting — wrong wallet-class.)*

### Field 5 — Device
```
Desktop primary · Mobile secondary
```
*(Our 3 paying customers were all Stripe Link one-click which is more reliable on desktop. The 07:28 UTC India-mobile clicker did NOT convert, partial confirmation that mobile-first attribution is weaker for this SKU.)*

---

## Step 3 — Ad Creative

### Field 6 — Ad Format
```
Text Ad (Promoted Post)
```

### Field 7 — Headline / Title
```
250+ AI prompts you'd write yourself if you had time — $29 lifetime
```

### Field 8 — Body
```
One-time purchase. Works with ChatGPT, Claude, Gemini, and any LLM. 30-day refund. Used by IT directors, finance teams, and small business owners who need AI to do real work — not creators chasing the next viral trend.

Built across 6 categories: copywriting, social, content, ops, branding, productivity. Every prompt is ready to copy-paste — just fill the brackets.
```

### Field 9 — Destination URL
```
https://www.midastools.co/ai-prompt-mega-pack?utm_source=reddit&utm_medium=promoted&utm_campaign=p4b-buyer-discovery&utm_content=chatgptpromptgenius
```

### Field 10 — Display Image
Use existing brand asset: `/public/og-images/ai-prompt-mega-pack.png` (if it exists) OR a screenshot of the live `/ai-prompt-mega-pack` hero panel.

If neither: skip image (text-only Promoted Posts perform fine on Reddit and avoid the "ad photo" tell).

---

## Step 4 — Budget + Schedule

### Field 11 — Daily Budget
```
$5/day (Reddit minimum)
```

### Field 12 — Lifetime Budget
```
$30
```

### Field 13 — Duration
```
7 days
```
*(Allows Reddit's algorithm to optimize over a meaningful window. Shorter runs spike CPMs.)*

### Field 14 — Bid Strategy
```
Auto-bid (Maximize conversions OR clicks)
```

---

## Step 5 — Submit + wait for approval

Click **Submit**. Reddit approval typically 24-48h. Status visible in dashboard.

While waiting:
1. Telegram Armando confirmation with campaign ID
2. Append campaign URL to `.founder/STATE.md` Session 28 entry
3. Add a row to next standup data trail: "P4b Channel A submitted — awaiting Reddit approval"

---

## Step 6 — Once live, monitor daily

- **Reddit Ads dashboard** — CTR, clicks, impressions per community
- **`/api/track`** — captures `utm_source=reddit` page_views — cross-check Reddit's reported clicks against our captured page_views (catches over-reporting)
- **Stripe webhook** — `client_reference_id` decoded per Session 159 attribution → attributes any Reddit-sourced sale

---

## Kill criteria (T+7d — May 21)

- **Win**: ≥1 sale attributable via UTM → buyer-discovery + correct-audience hypothesis BOTH confirmed; pivot 50% of next-30d budget to Reddit/marketplace channels.
- **Hold**: ≥50 link clicks but 0 sales → audience is reachable but offer-landing-page mismatch. A/B-test the hero or try $19 sub-tier.
- **Kill**: <50 clicks at T+7d → r/ChatGPTPromptGenius doesn't see us as differentiated enough. Pivot to r/sidehustle or r/Entrepreneur next.

---

## What I (the agent) CAN do autonomously

If Armando provides Reddit Ads Manager creds (or session cookie), the agent can:
- Log in via agent-browser (Playwright MCP)
- Create campaign + ad group + ad using fields above
- Set budget + targeting
- Click Submit
- Telegram confirmation with campaign ID
- Total time: ~8 min

## What I (the agent) CANNOT do autonomously

- Add the Stripe payment method to Reddit Ads (sensitive financial routing)
- Approve the $30 budget commitment (per `feedback_full_autonomy.md` autonomy does NOT extend to paid spend without explicit ack)
- Set up the conversion pixel on midastools.co (requires server-side change + Reddit's pixel ID confirmation)
