# Memory

Your long-term memory. Persists across all sessions. This is your brain — treat it well.

## Key Facts
- **Project**: Midas Tools — Product building machine. Research trending products, build versions, sell them.
- **Stack**: Next.js 14.2, React 18, Stripe, Nodemailer/Gmail SMTP, inline CSS
- **Products**: AI Prompt Mega Pack ($29), Starter Kit ($29), Real Estate Kit ($49), Content Creator Kit ($39), Freelancer Kit ($39), Small Business Kit ($39), Bundle ($97), DFY ($299), AI Services ($499-$5K)
- **OpenClaw**: Open-source AI agent framework with 247K GitHub stars (March 2026), featured on Lex Fridman
- **Felix Craft**: Proof-of-concept agent that earned $14,718 in 3 weeks (key case study)
- **Admin email**: rmidas26@gmail.com, also iam@armando.mx
- **Cal.com link**: cal.com/manduks/midastools
- **Site pages**: 37 pages total (build output), including dynamic blog
- **Blog posts**: 12 hosted standalone posts + 7 in [slug].js dynamic route + external dev.to posts
- **Components**: Layout.js (nav+footer+global styles), EmailCapture.js (site-wide lead magnet)
- **Reddit drafts**: .founder/deliverables/reddit-distribution-posts.md — 6 posts ready to copy-paste
- **AI Receptionist market**: Competitors range $25-$199/mo. Midas at $499 setup + $299/mo is premium-priced.

## Market Research (March 2026)
- Gumroad: Software dev products = $65.8M revenue, $60K avg/product
- Gumroad: Writing/publishing = $15,750/product with only 226 products. Blue ocean.
- Indie hackers: Hyper-specialized AI tools are the play. Pick niche + add AI + charge.
- Reddit: n8n automation templates = $300-2K/client, recurring revenue
- Reddit: AI chatbot services for SMBs = $800-7K/mo documented income
- Top Gumroad product: AI Photoshop script = $586K revenue
- AI prompt packs: $1K+ revenue in first 2 months (Simple Scale case study)
- 77% of freelancers now use AI tools, 20-40% productivity gains reported
- Digital downloads on Gumroad: 85% of platform, avg 293 sales at $47.14
- All top Gumroad products share: 4.4+ rating, niche positioning, prices above $20
- n8n marketplace exists for selling automation templates (affiliate revenue model)
- 3x more contracts connected to AI/automation in Q3 2025 vs Q3 2023

## Conversion Rules (Founder Mandate)
- **EVERY CTA on EVERY page must go directly to Stripe checkout** — no scroll-to-section, no intermediate steps. 1 click to buy.
- All hero CTAs use `href={STRIPE_URL}` not `href="#buy"`

## Decisions Made
- **2026-03-22**: Founder directive — build a product machine. Research trending, build fast, sell everywhere.
- **2026-03-22**: Product strategy = niche AI kits at $39-49, then bundle at $97
- **2026-03-22**: Homepage product ladder changed: $29 Starter → $97 Bundle → $299 DFY (replaced Pro subscription as middle tier)
- **2026-03-22**: All blog CTAs updated to promote bundle ($97) instead of individual kit ($29) — higher AOV play
- **2026-03-22**: Added competitive comparison table to receptionist page to justify premium pricing
- **2026-03-22**: MAJOR: Professional trust upgrade — shared Layout component (nav+footer), removed emoji logo → "MIDAS·TOOLS" text mark, consistent nav across all 23 pages, professional 4-column footer with product/service/company links, removed "Built by an AI" footer text, cleaned up gimmicky badges, standardized contact email to iam@armando.mx
- **2026-03-22 (S5)**: Freelancer Kit chosen over AI Prompt Pack or Small Biz Kit — 77% freelancer AI adoption + universal pain points (proposals, invoicing, scope creep) + $47 avg Gumroad price matches our $39
- **2026-03-22 (S5)**: Bundle now 4 kits ($156 value → $97) — stronger value prop, 38% savings vs individual
- **2026-03-22 (S9)**: CTA conversion fix — all hero CTAs now go direct to Stripe (was href="#buy" scrolling to section). Founder mandate: every page optimized for conversion, 1 click to buy.
- **2026-03-22 (S9)**: Built ALL 4 kit ZIPs with real content (10,838 lines). Products are now deliverable.
- **2026-03-22 (S9)**: Webhook now routes downloads by product — detects kit type via metadata, payment link ID, product name, or amount
- **2026-03-22 (S9)**: Thank-you page is dynamic — shows correct kit + download link based on ?kit= query param. Bundle shows all 5 downloads.
- **2026-03-22 (S10)**: AI Prompt Mega Pack ($29) shipped — 200+ prompts, 3,331 lines, 6 categories. Broadest appeal product, lowest price entry point.
- **2026-03-22 (S10)**: Bundle upgraded to 6 products (now includes Mega Pack). Value anchor $195 → $224. 57% savings.
- **2026-03-22 (S10)**: Mega Pack added to kits catalog (first position), nav, footer, bundle page, thank-you routing, and webhook delivery.
- **2026-03-23 (S13)**: FULL SITE REBRAND — dark gold/black → clean white + electric blue (#3B5FFF). 30 files updated. Inspired by Future Founders reference. Pill buttons, colorful card accents, dark CTA sections. Pushed to main, Vercel deploying.
- **2026-03-24 (S14)**: Site-wide EmailCapture component built + integrated into Layout (above footer, hidden on homepage). Lead magnet: "Get 5 Free AI Prompts That Make Money". POSTs to /api/subscribe.
- **2026-03-24 (S14)**: New blog post: "How to Price Freelance Services with AI" — targets freelance pricing keywords, includes 5 copy-paste prompts, CTA to Freelancer Kit + Bundle.
- **2026-03-24 (S14)**: Sitemap updated from 12 → 28 URLs. All product pages and blog posts now indexed.
- **2026-03-24 (S14)**: Confirmed all 3 previously-placeholder Stripe links are now live (Mega Pack, E-commerce Kit, SaaS Founder Kit).

## What Worked
- Felix Craft case study is strongest social proof ($14,718 in 3 weeks)
- Receptionist page has full SEO (JSON-LD, FAQ schema, meta tags) — good template for new pages
- Bundle cross-linking from individual kit pages creates natural upsell path
- Before/after comparisons on kit pages make the value proposition concrete

## What Failed
(Nothing yet — Day 0)

## Important Context
- Environment vars needed: GMAIL_ADDRESS, GMAIL_APP_PASSWORD, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_GA_ID
- **Shared Layout**: `components/Layout.js` — nav, footer, global styles. All pages use it now.
- Logo: "MIDAS·TOOLS" text mark (blue accent + dark text). No emoji.
- **Design System (Session 13 rebrand)**: White bg (#FFF), blue accent (#3B5FFF), dark text (#111827). CSS vars remapped: --gold→blue, --black→white, --white→dark. New vars: --accent, --bg, --text, --text-secondary, --text-tertiary, --border, --surface, --card-green/blue/purple/amber/pink/cyan.
- Fonts loaded globally from _document.js (no longer per-page)
- Font: Inter (Google Fonts), weights 400-900
- Mobile breakpoint: max-width 600px or 700px
- Blog has mix of hosted posts and external links (dev.to, Medium)
- Stripe checkout URLs defined as STRIPE_URL constant at top of each page file
- All 9 Stripe products have live payment links. Founder needs to set success URLs to /thank-you?kit=<type>
- **EmailCapture component**: `components/EmailCapture.js` — renders on all pages except homepage. Uses styled-jsx, POSTs to /api/subscribe with source: 'site-wide-capture'
- **Sitemap**: public/sitemap.xml — 28 URLs, updated 2026-03-24
- Kit content lives in kit-content/ dir, ZIPs in public/. Use .founder/tools/build-kits.sh to rebuild ZIPs.
- Webhook routing: stripe-webhook.js detects kit type via session.metadata.kit_type → payment_link → product_name → amount
- External blog posts (dev.to) cannot be edited for internal links
- Contact email standardized to iam@armando.mx across all pages
