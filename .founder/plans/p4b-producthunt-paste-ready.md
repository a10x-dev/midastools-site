# P4b Channel C — ProductHunt Launch — Paste-Ready Content

**Authored:** Session 28 (May 14 05:15 local) — pre-build per `pre-build-while-waiting` after firing the May 14 Telegram brief. Sibling files: `p4b-gumroad-listing-paste-ready.md`, `p4b-reddit-ad-paste-ready.md`.

**Purpose:** Collapse ProductHunt submission from "compose hero + tagline + description + topics + gallery" (~45 min) to "paste 7 fields + upload 3 images + schedule" (~10 min).

**Trigger conditions:**
- Branch 4 picked AND Armando shares ProductHunt account access (or creds for agent-browser)
- AND a Tuesday in the next 14 days is available for launch (PH best-day per founder data)

---

## Step 0 — Prerequisites

- ProductHunt account at https://www.producthunt.com (Armando's preferred)
- Twitter / LinkedIn / personal-blog accounts ready for launch-day broadcasting
- 3 screenshots of `/ai-prompt-mega-pack` (hero + What's-Inside grid + sample-prompt code block) sized 1270x760 PNG

---

## Step 1 — Submit at https://www.producthunt.com/posts/new

### Field 1 — Product Name
```
MidasTools AI Prompt Mega Pack
```

### Field 2 — Tagline (60 chars max)
```
Copy-paste prompts for working professionals — $29 lifetime
```
*(PH taglines that mention price + outcome consistently outperform vague ones per the PH founder community wiki.)*

### Field 3 — Description (260 chars max for the visible blurb)
```
200+ battle-tested AI prompts you'd write yourself if you had time — organized into 6 categories: copywriting, social, content, ops, personal branding, productivity. Works with ChatGPT, Claude, Gemini. One-time purchase. 30-day refund. No subscription, ever.
```

### Field 4 — Product URL
```
https://www.midastools.co/ai-prompt-mega-pack?utm_source=producthunt&utm_medium=launch&utm_campaign=p4b-buyer-discovery
```

### Field 5 — Topics (3-4 PH-defined categories)
```
Artificial Intelligence
Productivity
SaaS
Marketing
```

### Field 6 — Maker
```
Armando Marrufo (@manduks)
```
*(If Armando wants to be the sole maker, fine. If he wants me listed as a maker, that's a separate ask — by default just him.)*

### Field 7 — Pricing
```
Paid · $29 one-time
```

---

## Step 2 — Gallery (3-5 images, 1270x760)

1. **Hero shot**: Screenshot of `/ai-prompt-mega-pack` hero (badge + H1 + CTA + tool-row).
2. **What's Inside**: Screenshot of the 6-card category grid (Copywriting / Social / Content / Ops / Branding / Productivity).
3. **Sample prompt**: Screenshot of the "See It In Action" section showing the Cold Outreach Email prompt with variable placeholders highlighted in brand gold (added Session 108 for visible-product-proof).

Optional 4 + 5: kit-folder file listing screenshot, refund-guarantee badge.

---

## Step 3 — Schedule for next Tuesday

ProductHunt launches reset at midnight Pacific (00:00 PT = 07:00 UTC). Submit the night before so it goes live at the start of the launch day.

Best upcoming Tuesdays:
- **May 19** (5 days out — gives time for pre-launch hunter outreach)
- May 26 (12 days out — backup)

Choose **May 19** unless launch day prep is blocked by other priorities.

---

## Step 4 — Launch-day playbook (pre-stage these in advance)

### 4 hours before launch (Monday night)
1. Submit the listing as scheduled.
2. Compose 3 launch-day tweet variants (different angles: "what's inside" / "who it's for" / "ROI math").
3. Compose 1 LinkedIn post (longer-form, more credibility-leaning).
4. Compose 5 PH launch-day comment-as-reply templates for the inevitable Qs:
   - "What makes this different from God of Prompt?" → answer: targeted at working professionals (IT/finance/ops) not creators; one-time payment vs God-of-Prompt's $150 bundle.
   - "Are these prompts actually different from what I'd find on r/ChatGPT?" → answer: every prompt is bracket-filled with variables; categorized by business outcome; sample at /ai-prompt-mega-pack to verify.
   - "Will you keep adding prompts?" → answer: yes for 6 months minimum, captured in 30-day refund.
   - "Does this work with [model X]?" → answer: yes, prompts are LLM-agnostic; tested with ChatGPT-4o, Claude 4.5, Gemini 2.5, plus Llama / Mistral / DeepSeek.
   - "Why $29 and not free?" → answer: keeps quality bar high; refundable if it doesn't earn its money back in 30 days.

### Launch day (Tuesday)
- 07:00 PT — listing goes live, immediate self-upvote
- 08:00 PT — fire 3 tweet variants spaced 90 min apart
- 09:00 PT — LinkedIn post
- 09:30 PT — DM 5 close contacts asking for honest upvote/feedback (NOT bribed — just informing)
- All day — respond to every comment within 30 min (per PH ranking algo, response velocity weights more than absolute upvote count)

---

## Step 5 — Attribution + tracking

- UTM-tagged URL: every click captured server-side via `/api/track`
- Stripe webhook captures `client_reference_id` decoded per Session 159 attribution → attributes sales
- PH dashboard surfaces upvotes, comments, click-throughs

---

## Kill criteria (T+3d post-launch)

- **Win**: ≥1 sale attributable via UTM → ProductHunt is a viable channel for our SKU. Schedule next-product launch for ~6 weeks out (PH cooldown).
- **Hold**: ≥100 upvotes + ≥500 PH-sourced page_views + 0 sales → audience visited but didn't buy. Either the offer-landing-page friction is real OR the PH audience is browse-but-not-buy.
- **Kill**: <30 upvotes by end of launch day → product didn't resonate with PH's makers-and-builders audience. Future launches should be makers-and-builders-tier products (templates for indie hackers, scripts for vibe-coders) not prompt packs.

---

## What I (the agent) CAN do autonomously

If Armando provides PH login (or session cookie), the agent can:
- Log in via agent-browser (Playwright MCP)
- Submit the listing using fields above
- Upload the 3 prepared gallery images
- Schedule launch for next Tuesday
- Pre-stage the tweet + LinkedIn + comment-reply drafts in `.founder/content/social/`
- Telegram confirmation with PH preview URL

## What I (the agent) CANNOT do autonomously

- Approve the launch-day timing commitment (Armando needs to be available for 30-min reply SLA)
- Pre-arrange hunter introductions (PH's old-school favor economy)
- Decide between May 19 vs May 26 launch (depends on Armando's calendar)
