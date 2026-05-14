# P4b Channel B — Gumroad Listing — Paste-Ready Content

**Authored:** Session 28 (May 14 05:00 local) — pre-build per `pre-build-while-waiting` after firing the May 14 Telegram brief promising "default-fallback = Gumroad listing if Armando ghosts past noon."

**Purpose:** Collapse the noon Gumroad ship-day effort from "compose + paste + upload" (~20 min) to "paste 6 fields + upload 1 ZIP + click Publish" (~5 min). Each field is verbatim copy from the proven /ai-prompt-mega-pack page.

**Trigger conditions:**
- Branch 4 fired AND Armando picked P4b (or ghosted past noon → default-fallback)
- AND Armando has shared Gumroad login OR app password

---

## Step 1 — Gumroad product creation

Log in to https://gumroad.com/products/new and select **Digital product**.

### Field 1 — Product name
```
AI Prompt Mega Pack — 200+ Copy-Paste Prompts (ChatGPT, Claude, Gemini)
```

### Field 2 — Price
```
$29
```
*(MUST equal our Stripe price — do NOT fragment pricing per `feedback_cta_conversion.md` ladder)*

### Field 3 — Short summary (one line, under "What is it?")
```
200+ battle-tested AI prompts for copywriting, social media, content, operations, branding, and productivity. Copy. Paste. Get results.
```

### Field 4 — Long description (Gumroad's main "Description" rich-text editor)
```markdown
# The Only Prompt Pack You'll Ever Need

200+ battle-tested AI prompts for copywriting, social media, content, operations, branding, and productivity. Copy. Paste. Get results.

**Works with ChatGPT, Claude, Gemini, Copilot, and any LLM.**

One-time payment · Instant download · 30-day money-back guarantee.

---

## You're leaving 80% of AI's power on the table

Most people type vague prompts and get vague results. The difference between "meh" AI output and revenue-generating content is the prompt. Our 200+ prompts are engineered for specific business outcomes.

## What's Inside — 6 categories, 200+ prompts, zero fluff

Every prompt is ready to use — just fill in the brackets and paste into your AI tool.

**✍️ Copywriting & Sales** (35+ prompts)
Headlines, sales pages, email sequences, ad copy, product descriptions, cold emails, pricing pages, upsell copy, and testimonial frameworks.

**📱 Social Media & Growth** (35+ prompts)
Twitter threads, LinkedIn posts, Instagram carousels, TikTok scripts, 30-day content calendars, viral hooks, bio optimization, and hashtag strategy.

**📝 Content & SEO** (35+ prompts)
Blog posts, SEO content briefs, video scripts, podcast outlines, newsletter templates, lead magnets, case studies, and keyword research.

**⚙️ Business Operations** (35+ prompts)
SOPs, project briefs, hiring templates, customer support, financial analysis, board narratives, scenario models, and workflow automation specs.

**👤 Personal Branding** (30+ prompts)
About pages, bio variants, speaker pitches, podcast guesting templates, thought-leadership posts, and credibility-building frameworks.

**🚀 Productivity & Personal AI** (30+ prompts)
Inbox triage, calendar blocking, decision frameworks, weekly reviews, learning plans, and personal AI assistant configurations.

## How it works

1. Buy once. Download immediately as a ZIP.
2. Open the markdown files — every prompt is labeled by category and outcome.
3. Copy the prompt you need, fill in the brackets, paste into your AI tool.
4. Get results that don't read like AI slop.

## Who this is for

- **IT directors** using AI on internal projects
- **Finance leads** drafting investor updates and scenario models
- **Solo founders** running marketing, ops, and content alone
- **Consultants** who need polished deliverables fast
- **Anyone** who's tired of writing the same prompt twice

## 30-day money-back guarantee

If the prompts don't earn back the $29 in time saved within 30 days, full refund — no questions.
```

### Field 5 — Tags (comma-separated)
```
chatgpt, claude, gemini, ai prompts, prompt engineering, productivity, ai for business, copywriting, content creation, ai tools
```

### Field 6 — Category
```
Self Improvement → Productivity
```
*(Gumroad's Self Improvement bucket consistently outperforms Business / Software for impulse-buy SKUs at this price)*

---

## Step 2 — File upload

Upload: `public/ai-prompt-mega-pack.zip` (already exists in repo, served from /thank-you delivery).

If Armando wants to verify the file matches what live buyers receive, the same ZIP is at https://www.midastools.co/ai-prompt-mega-pack.zip.

---

## Step 3 — Preview images (3 images)

Use existing brand assets — same hero panel + category screenshots already on https://www.midastools.co/ai-prompt-mega-pack. Pull from `/public/og-images/` if they're already optimized.

If not pre-built: Armando uploads a screenshot of the live page's "What's Inside" 6-card grid as a single preview image. Good enough to ship.

---

## Step 4 — Attribution tracking

Append `?utm_source=gumroad&utm_medium=marketplace&utm_campaign=mega-pack-listing` to any link FROM Gumroad listing TO midastools.co. (Only relevant if we link out from the listing description — currently the description above does NOT link out to keep buyers on Gumroad's checkout. Strategic choice: maximize Gumroad conversion, accept losing the email capture.)

For tracking sales source: Gumroad sales auto-appear in Gumroad dashboard. Compare 14-day conversion rate to our /ai-prompt-mega-pack Stripe rate.

---

## Step 5 — Publish

Click **Publish**. Listing goes live within ~60 seconds.

Copy the gumroad.com/l/<slug> URL and:
1. Telegram to Armando confirming live
2. Append the URL + UTM-tagged tracking URL to `.founder/STATE.md` Session 28 entry
3. Add row to next standup data trail

---

## Kill criteria (T+14d — May 28)

- **Win**: ≥1 sale on Gumroad → buyer-discovery hypothesis confirmed. Pivot resource allocation from content-funnel to marketplace listings.
- **Hold**: ≥10 views but 0 sales → audience is reachable but offer needs adjustment. Try lower price ($19) or different bundle composition.
- **Kill**: <10 views at T+14d → Gumroad's internal search doesn't surface us for this niche. Try ProductHunt next.

---

## What I (the agent) CAN do autonomously

If Armando provides:
- Gumroad email + password (or app password)
- 5-min OAuth window for the agent-browser to log in

Then the agent can:
- Log in via agent-browser (Playwright MCP)
- Create the product (paste fields above)
- Upload the ZIP from `public/ai-prompt-mega-pack.zip`
- Click Publish
- Capture the live URL
- Telegram Armando confirmation

**Total agent execute time:** ~10 min. Compresses the noon Gumroad fire from "Armando spends 30 min copy-pasting + uploading" to "Armando shares creds and walks away."

## What I (the agent) CANNOT do autonomously

- Make the Gumroad account itself (requires phone verification + email verification — anti-bot)
- Connect Stripe to Gumroad payouts (sensitive financial routing)
- Approve $30 Reddit spend (separate ask in the May 14 Telegram brief)
