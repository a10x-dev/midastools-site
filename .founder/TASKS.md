# Tasks

## Mission: Product Building Machine
Build trending products that help people make money. Research daily. Ship fast. Sell everywhere.

## In Progress
- [ ] Writing blog: "7 ChatGPT Side Hustles Actually Making Money in 2026" (agent building)

## To Do
### Distribution (Highest Priority)
- [ ] Post in r/realestate about Real Estate AI Kit
- [ ] Post in r/content_marketing about Content Creator Kit
- [ ] Post in r/freelance about Freelancer Kit
- [ ] Post in r/smallbusiness about the bundle
- [ ] Post in r/ChatGPT about AI Prompt Mega Pack
- [ ] Set up email nurture sequence for kit buyers
- [ ] List all products on Gumroad for marketplace distribution

### Content / SEO
- [ ] Write blog: "How to Price Your Freelance Services with AI (2026 Guide)"
- [ ] Create comparison pages (Midas Tools vs. individual AI tools)

### Infrastructure (Needs Founder)
- [ ] **Create Stripe Product**: "AI Prompt Mega Pack" at $29 → replace PLACEHOLDER_PROMPT_MEGA_PACK in ai-prompt-mega-pack.js and kits.js
- [ ] **Create Stripe Product**: "E-commerce AI Kit" at $39 → replace PLACEHOLDER_ECOMMERCE_KIT in ecommerce-kit.js and kits.js
- [ ] **Create Stripe Product**: "SaaS Founder AI Kit" at $39 → replace PLACEHOLDER_SAAS_FOUNDER_KIT in saas-founder-kit.js and kits.js
- [ ] Set Stripe Payment Link success URLs → /thank-you?kit=<type> for all products
- [ ] Need GA4 analytics (NEXT_PUBLIC_GA_ID env var)
- [ ] Need Gumroad account for marketplace distribution
- [ ] Need email marketing tool (ConvertKit/Resend)

## Done
- [x] Baseline assessment completed
- [x] Homepage improved (social proof, trust signals, product banner, product ladder updated)
- [x] Receptionist page improved (competitive comparison table, ROI callout)
- [x] Market research: Gumroad/Reddit/HN trends analyzed (Session 4 + 5)
- [x] Real Estate AI Agent Kit ($49) — /real-estate-kit + blog post
- [x] Content Creator AI Kit ($39) — /content-creator-kit + blog post
- [x] **Freelancer Automation Kit ($39)** — /freelancer-kit + blog post (Session 5)
- [x] All Kits Bundle ($97) — /bundle with comparison table + cross-links
- [x] Cross-linked bundle from all kit pages (upsell sections)
- [x] Professional trust upgrade (shared Layout, text mark, consistent nav/footer)
- [x] **CTA CONVERSION FIX** — all hero CTAs go direct to Stripe checkout (Session 9)
- [x] **ALL KIT ZIPS BUILT** — real content in every kit (Session 9)
- [x] **WEBHOOK ROUTING** — stripe-webhook.js detects product and sends correct download (Session 9)
- [x] **THANK-YOU PAGE** — dynamic, shows correct kit + download based on ?kit= param (Session 9)
- [x] **Small Business AI Kit ($39)** — /small-business-kit + deliverable ZIP (Session 9)
- [x] **AI PROMPT MEGA PACK ($29)** — 200+ prompts, full product page, ZIP built (Session 10)
- [x] **E-COMMERCE AI KIT ($39)** — 155+ prompts, product page, ZIP (Session 12)
- [x] **SaaS Founder AI Kit ($39)** — launch playbooks, onboarding, churn prevention (Session 13)
- [x] **BUNDLE UPGRADED TO 8 KITS** — Value $302, 68% savings at $97
- [x] **REDDIT DISTRIBUTION DRAFTS** — 6 posts copy-paste ready (Session 12)
- [x] **FULL SITE REBRAND** — Dark gold → clean white + blue accents, 30+ files, 34 pages (Session 13)
- [x] **E-commerce blog post** — /blog/ai-ecommerce-product-descriptions-2026 (Session 13)
- [x] Write blog: "Best ChatGPT Prompts for Business in 2026" — /blog/best-ai-prompts-business-2026
- [x] Build SaaS Founder AI Kit ($39) — shipped with page, ZIP, bundle integration
- [x] Write blog targeting e-commerce keywords — /blog/ai-ecommerce-product-descriptions-2026
- [x] Deploy latest changes (git push) — 4 commits pushed to main

## Blocked
- Analytics — need NEXT_PUBLIC_GA_ID env var
- Gumroad — need account
- 3 products need Stripe Payment Links (Mega Pack, E-commerce Kit, SaaS Founder Kit)
