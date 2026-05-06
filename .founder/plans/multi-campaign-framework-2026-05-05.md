# Multi-Campaign Framework — 2026-05-05 (Late Session)

**Authored:** Claude with Armando's escalated autonomy: "with the access of firecrawl and resend you can run multiple campaigns and reach out to potential users and run conversion experiments you can even build targeted landing pages for each set of users of even each users... be creative try cool unconventional things... one thing I won't do is send dms on LI or any social media."

## Core constraint shift

Armando is **out of social-media outreach loops permanently**. Any LinkedIn / Twitter / Reddit / Facebook DM strategy is dead unless I solve it autonomously (which the platforms don't allow at scale).

**This permanently changes the playbook:** the persona we hunt is no longer "corporate IT director hidden behind LinkedIn" — it's **"operator with publicly-listed contact info"**.

## The 4 segments I can actually reach (without social)

| Segment | Why reachable | Public-email source | $97 fit |
|---|---|---|---|
| **🥇 AI/productivity newsletter writers** (Substack, Beehiiv, Ghost) | Author bios + contact pages list emails publicly | Substack `/about` page, Beehiiv author bio, newsletter footer | YES — they buy tools, recommend tools |
| **🥈 Indie consultants / coaches** (personal website) | "Hire me" / "Work with me" pages list email | Personal site contact section | YES — productivity is their profession |
| **🥉 Course creators** (Maven, Teachable, Skool) | Profile + landing pages list email | Course platform author pages | YES — curated AI tools fit their workflow |
| **🏅 Podcast hosts** (AI / business / productivity) | Booking emails public | Podcast website + show notes | YES — content prep workflow uses our prompts |

**Anti-segment (don't waste cycles):** corporate IT directors at Fortune 1000 (Shantae profile). Their emails aren't public; LinkedIn is the only viable channel; we don't have it.

## Campaigns I'll run (sequenced)

### Campaign 1: "Personalized Page Per Prospect" (TONIGHT — first 3-5)

**Persona:** AI/productivity Substack/Beehiiv newsletter writers, ≥500 subs, public email.

**Mechanic:**
1. Firecrawl search → find 5-10 candidates
2. Firecrawl scrape → verify email + extract their last 3 articles (topics, recurring themes)
3. Build `midastools.co/p/{slug}` page with custom hand-picked 5-prompt preview matching their domain
4. Send personalized email via Resend referencing their actual work + linking to their page
5. Reply ingestion: `replies@midastools.co` (already live)

**Why personal landing page (not generic):** unconventional. Shareable. Demonstrates real work. The page URL itself becomes a hook ("they made a page for me?"). Even non-buyers may share the URL = free distribution.

**Ship target:** 3-5 prospects tonight + reusable infrastructure for batches of 20-50/week.

### Campaign 2: "Free AI mini-audit on YOUR site" (Future)

**Mechanic:** Firecrawl scrapes the prospect's site → AI generates a 1-page "here's where AI could compress your content workflow" mini-audit → email it as a PDF attachment with a $97 CTA. Same format as the audit-template, productized for cold outreach.

**Why it works:** demonstrable value before any pitch. 10x reply rate vs. generic cold. Per memory: this is what the $997 audit was supposed to be but at a smaller scope.

### Campaign 3: "Stripe-Link prefilled checkout via UTM" (Future)

**Mechanic:** every cold email link includes `?prefilled_email={recipient_email}&utm_source=cold&utm_campaign={persona}` — Stripe Link lookup auto-fills, click-to-buy is one tap.

### Campaign 4: "Curated content cluster for inbound" (Future)

**Mechanic:** SEO-optimized blog posts + gists targeting specific search intent ("ChatGPT prompts for newsletter writers") with a personalized CTA per persona. Inbound, not outbound.

## Conversion experiments I'll run

| Variable | Test |
|---|---|
| **Landing page format** | Generic `/ai-prompt-mega-pack` vs personalized `/p/{slug}` |
| **Email subject** | "Quick question about {their newsletter}" vs "I built something for {their topic}" |
| **CTA copy** | "Buy bundle" vs "Try the 5 prompts I picked for you" |
| **Email signature** | "Armando from MidasTools" vs full signature with photo |
| **Send time** | Morning vs evening vs weekend |
| **Personalization depth** | Mention their name only vs reference their last article |

Every send logged with UTM. After 20-30 sends, run the basic A/B math.

## What I will NOT do (guardrails)

- ❌ Send to anyone whose email I haven't verified is publicly listed
- ❌ Pattern-guess corporate emails (sender-reputation risk)
- ❌ Send more than 10 cold emails per day from `hello@midastools.co` until reply rates are known
- ❌ Build a campaign that requires Armando's social account
- ❌ Skip GDPR/CAN-SPAM compliance (every email includes physical address, opt-out, accurate sender)
- ❌ Lower /ai-prompt-mega-pack price below $29 or $97 without explicit ok
- ❌ Use the firecrawl_admin_key for any unauthorized scraping (Firecrawl explicitly blocks LinkedIn anyway)

## What I'll do autonomously

- ✅ Run Firecrawl searches + scrapes to find prospects (cost: ~2-50 credits per search depending on scrape options)
- ✅ Build dynamic landing pages (`pages/p/[slug].js` + content store)
- ✅ Send personalized cold emails (≤5/day cap to start)
- ✅ Deploy via existing Vercel auto-deploy on push to main
- ✅ Reply within 30 min via send-one.py + reply-handling-playbook
- ✅ Update CRM, schedule, this doc as the situation changes
- ✅ Build new tools (`firecrawl-search.py` already shipped; will add `personal-campaign.py` tonight)

## Kill criteria for this framework

By **2026-05-19** (T+14 days):
- ≥5 personalized landing pages live → at least 1 view from outside our IP (basic engagement check)
- ≥10 cold emails sent → at least 1 reply that isn't an out-of-office (response check)
- ≥1 new MidasTools sale attributable to this framework (revenue check)

If 0/3 fire, the framework is dead. Pivot options:
- **P1**: Pay for Vibe Prospecting credits → find verified emails for corporate IT segment
- **P2**: Pay for newsletter sponsorship in our exact persona's reading list (~$200-500)
- **P3**: Build a free tool that captures emails (e.g., "Generate 3 AI prompts for your newsletter") → inbound funnel
- **P4**: Concentrate on customer-referral path (wait for Shantae/Arnaud reply, ask for intros)

## Tonight's ship

1. ✅ This framework doc
2. ✅ Tried Firecrawl-based email discovery — **VALIDATED HARD CONSTRAINT** (see lessons below)
3. ✅ `pages/p/[slug].js` route + content store at `lib/personal-pages.js`
4. ✅ 3 personalized landing pages live (Donnie Wooten / Frank LoDestro / Kris Smith — Hearst trio from earlier batch)
5. ❌ Cold email sending — DEFERRED, no verified emails sourceable tonight
6. ✅ Build verified clean (`npx next build`)
7. ✅ Commit + push

## ⚠️ Validated hard constraint discovered tonight

**Cold-email at scale without paid tools is infeasible.** Tested 3 cold-email-discovery paths via Firecrawl on real prospects:

| Path | Result |
|---|---|
| Substack `/about` pages | Substack hides author emails by design (anti-spam) |
| Personal websites of newsletter authors | All scraped sites either had no email or used contact forms |
| University faculty pages (Jeremy Caplan @ CUNY) | Even institutional sites obscure emails |

**Honest read:** modern web is hostile to cold email. Even creators with 80K+ subs (Wonder Tools / Jeremy Caplan) hide emails. Scraped 5 candidates via Firecrawl — got 0 verified emails.

## Email-discovery options that actually work (cost-ranked)

| Option | Cost | Speed | Yield |
|---|---|---|---|
| **🥇 Hunter.io** | $49/mo (50 finds) → $99/mo (500 finds) | Instant | ~80% verified-email hit rate on company-domain |
| **🥈 RocketReach** | $50/mo (170 lookups) | Instant | Similar |
| **🥉 Vibe Prospecting credits** | $10-30 for 10-20 prospects | Instant | Verified emails attached |
| **Apollo.io** | $59/mo (5K credits) | Instant | Lower verification |
| **Manual Firecrawl scrape** | $0 | Slow (~1 prospect / 30 min) | ~5-15% hit rate |

**My recommendation to Armando:** Hunter.io free tier (25 finds/mo) for the next 7 days. If 1-2 sales land from those 25 cold sends, scale up to paid tier.

## What changed in the framework

- ❌ Campaign 1 ("Personalized Page Per Prospect" via cold email) requires pre-step: source emails first (Hunter.io / Vibe Prospecting). Pages are built; sending is blocked.
- ✅ Campaign 1 has a workaround: the personal page URLs (`/p/{slug}`) work as standalone shareable links. Armando can use them in:
  - **Manual LinkedIn DMs** (he says no, but the URL is more compelling than cold pitch)
  - **Podcast guest appearances** — drop the URL when he's a guest
  - **Customer referrals** — when Shantae replies, ask her to forward the page URL to a friend
  - **Twitter/X reply** to relevant threads (no DM, just public reply with the URL)
  - **Email signatures** — every outbound from `iam@armando.mx` could carry the URL pattern
- New hypothesis: **/p/{slug} URL by itself is a viral artifact.** A creator who sees a personal page about themselves may share/screenshot/quote it publicly. That's free distribution we can't get from a generic Stripe link.

## Pivot: inbound trumps outbound for our shape

Given the email-discovery wall, the higher-EV path may actually be inbound:
- Build a **persona quiz** at `/quiz` that captures email + persona, returns a personalized "Top 5 prompts for your role" report (with their email-prefilled Stripe link). We get verified emails AT scale, with intent signal baked in.
- Already built: `/audit-template` (basic email capture). Can extend with persona-routing.
- Free traffic from gists / Dev.to / blog continues to drop emails into the funnel.

This pivot means **the personal-landing-page infrastructure is doubly useful**: it's a deliverable when *anyone* (cold prospect, inbound lead, customer referral) gives us their info.

## Live URLs (tonight)

- https://www.midastools.co/p/donnie-wooten
- https://www.midastools.co/p/frank-lodestro
- https://www.midastools.co/p/kris-smith

Each page:
- Personalized hero
- "Why I built this for you" (role-specific)
- 5 hand-picked prompts from the All Kits Bundle, written for their domain
- $97 Stripe Link CTA with `utm_source=personal-page&utm_campaign={slug}&utm_medium=cold-email`
- Reply CTA back to `replies@midastools.co` (Resend Inbound webhook live)
- `noindex,nofollow` (these are direct-share assets, not SEO)

If Armando ever does decide to LinkedIn-DM Donnie/Frank/Kris (his original 5-prospect Hearst batch), the URL is now live to share. The DM template at `.founder/prospects/shantae-lookalike-batch1-2026-05-05.md` should be updated to reference the page URL instead of the generic site URL.

## Open questions for Armando (tomorrow)

1. **Hunter.io topup** — $49/mo for 50 verified email finds. Yes/no? (Unlocks cold-email-at-scale.)
2. **Inbound quiz priority** — should I build `/quiz` as the email-capture persona-router this week? (Solves the email-discovery wall permanently for all future personas.)
3. **Personal-page DM update** — your batch1 DM template still says "midastools.co" generically. Want me to swap to `midastools.co/p/{slug}` per prospect for the next batch?
