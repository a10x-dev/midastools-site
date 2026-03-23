# Tasks

## Mission: Product Building Machine
Build trending products that help people make money. Research daily. Ship fast. Sell everywhere.

## In Progress
(nothing — clearing the queue)

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
- [ ] Write blog: "200+ AI Prompts That Actually Work (2026 Mega List)" — drives Mega Pack traffic
- [ ] Write blog: "5 AI Tools Every Small Business Owner Needs in 2026"
- [ ] Write blog: "How to Price Your Freelance Services with AI (2026 Guide)"
- [ ] Write blog: "Best ChatGPT Prompts for Business in 2026"
- [ ] Create comparison pages (Midas Tools vs. individual AI tools)

### Product Pipeline
- [ ] Build E-commerce AI Kit ($39) — product descriptions, email flows, ad copy
- [ ] Build SaaS Founder AI Kit ($39) — launch playbooks, onboarding, churn prevention

### Infrastructure (Needs Founder)
- [ ] **Create Stripe Product**: "AI Prompt Mega Pack" at $29 — replace PLACEHOLDER_PROMPT_MEGA_PACK in ai-prompt-mega-pack.js and kits.js
- [ ] Set Stripe Payment Link success URLs → /thank-you?kit=<type> for each product (including ?kit=prompt-mega-pack)
- [ ] Need GA4 analytics (NEXT_PUBLIC_GA_ID env var)
- [ ] Need Gumroad account for marketplace distribution
- [ ] Need email marketing tool (ConvertKit/Resend)
- [ ] Deploy latest changes (git push)

## Done
- [x] Baseline assessment completed
- [x] Homepage improved (social proof, trust signals, product banner, product ladder updated)
- [x] Receptionist page improved (competitive comparison table, ROI callout)
- [x] Market research: Gumroad/Reddit/HN trends analyzed (Session 4 + 5)
- [x] Real Estate AI Agent Kit ($49) — /real-estate-kit + blog post
- [x] Content Creator AI Kit ($39) — /content-creator-kit + blog post
- [x] **Freelancer Automation Kit ($39)** — /freelancer-kit + blog post (Session 5)
- [x] All Kits Bundle ($97) — /bundle with comparison table + cross-links (updated to 4 kits)
- [x] Cross-linked bundle from all kit pages (upsell sections)
- [x] Updated homepage product ladder (replaced Pro with Bundle as middle tier)
- [x] Updated Layout nav/footer with Freelancer Kit links
- [x] Fixed blog/[slug].js syntax bug
- [x] Added schedule entries
- [x] Professional trust upgrade (shared Layout, text mark, consistent nav/footer)
- [x] **CTA CONVERSION FIX** — all 5 product page hero CTAs now go direct to Stripe checkout (Session 9)
- [x] **ALL KIT ZIPS BUILT** — 4 new kits with real content (10,838 lines total) (Session 9)
- [x] **WEBHOOK ROUTING** — stripe-webhook.js detects product and sends correct download (Session 9)
- [x] **THANK-YOU PAGE** — dynamic, shows correct kit + download based on ?kit= param (Session 9)
- [x] **Small Business AI Kit ($39)** — /small-business-kit + deliverable ZIP (Session 9)
- [x] **AI PROMPT MEGA PACK ($29)** — 200+ prompts, 3,331 lines, 6 categories, full product page with SEO, ZIP built, integrated into all systems (Session 10)
- [x] **BUNDLE UPGRADED** — Now 6 products, value anchor $224, 57% savings (Session 10)

## Blocked
- Analytics — need NEXT_PUBLIC_GA_ID env var
- Gumroad — need account
- Mega Pack checkout — need Stripe Payment Link (PLACEHOLDER in code)
