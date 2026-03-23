# Memory

Your long-term memory. Persists across all sessions. This is your brain — treat it well.

## Key Facts
- **Project**: Midas Tools — Product building machine. Research trending products, build versions, sell them.
- **Stack**: Next.js 14.2, React 18, Stripe, Nodemailer/Gmail SMTP, inline CSS
- **Products**: Starter Kit ($29), Pro ($49/mo), DFY ($299), Real Estate Kit ($49), Content Creator Kit ($39), Bundle ($97), AI Services ($499-$5K), Audit ($997), Content ($299/mo)
- **OpenClaw**: Open-source AI agent framework with 247K GitHub stars (March 2026), featured on Lex Fridman
- **Felix Craft**: Proof-of-concept agent that earned $14,718 in 3 weeks (key case study)
- **Admin email**: rmidas26@gmail.com, also iam@armando.mx
- **Cal.com link**: cal.com/manduks/midastools
- **Site pages**: 14 pages + dynamic blog (24 posts)
- **AI Receptionist market**: Competitors range $25-$199/mo. Midas at $499 setup + $299/mo is premium-priced.

## Market Research (March 2026)
- Gumroad: Software dev products = $65.8M revenue, $60K avg/product
- Gumroad: Writing/publishing = $15,750/product with only 226 products. Blue ocean.
- Indie hackers: Hyper-specialized AI tools are the play. Pick niche + add AI + charge.
- Reddit: n8n automation templates = $300-2K/client, recurring revenue
- Reddit: AI chatbot services for SMBs = $800-7K/mo documented income
- Top Gumroad product: AI Photoshop script = $586K revenue

## Decisions Made
- **2026-03-22**: Founder directive — build a product machine. Research trending, build fast, sell everywhere.
- **2026-03-22**: Product strategy = niche AI kits at $39-49, then bundle at $97
- **2026-03-22**: Homepage product ladder changed: $29 Starter → $97 Bundle → $299 DFY (replaced Pro subscription as middle tier)
- **2026-03-22**: All blog CTAs updated to promote bundle ($97) instead of individual kit ($29) — higher AOV play
- **2026-03-22**: Added competitive comparison table to receptionist page to justify premium pricing
- **2026-03-22**: MAJOR: Professional trust upgrade — shared Layout component (nav+footer), removed emoji logo → "MIDAS·TOOLS" text mark, consistent nav across all 23 pages, professional 4-column footer with product/service/company links, removed "Built by an AI" footer text, cleaned up gimmicky badges, standardized contact email to iam@armando.mx

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
- Logo: "MIDAS·TOOLS" text mark (gold/white). No emoji.
- All CSS is inline with design system vars (--gold: #F5C842, --black: #0A0A0A)
- Font: Inter (Google Fonts), weights 400-900
- Mobile breakpoint: max-width 600px or 700px
- Blog has mix of hosted posts and external links (dev.to, Medium)
- Stripe checkout URLs: buy.stripe.com/4gM00i... (Kit), buy.stripe.com/cNi9AS... (Pro)
- Need separate Stripe products for RE Kit, Creator Kit, and Bundle
- External blog posts (dev.to) cannot be edited for internal links
- Contact email standardized to iam@armando.mx across all pages
