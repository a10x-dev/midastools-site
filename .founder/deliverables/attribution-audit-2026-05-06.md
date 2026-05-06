# Attribution Audit — 2026-05-06

**Trigger:** Armando: "we are going to go very data driven... investigate how they landed on the website, what drove them here... add query params or else to know more about our visitors."

## TL;DR

**Past 3 paying customers (Shantae, Arnaud, George): UNATTRIBUTABLE.** Stripe payment-link metadata is empty for all three. The pre-existing `useStripeAttribution` hook only set `client_reference_id` if a `utm_campaign` URL param was present — and zero of our 3 buyers' charges show the param. The webhook never read `client_reference_id` anyway. Triple failure: capture didn't fire, didn't pass through, wasn't read.

**Going forward** (this commit): every page load captures a 9-field attribution record into 90-day localStorage. Every Stripe link click packs that record into `client_reference_id`. The webhook decodes it on sale, logs it, and emails Armando the attribution + receipt in real time. Plus a new `/api/track` endpoint receives auto-fired `page_view` events for everyone, attribution attached.

## What I found (the audit)

### Problem 1: Empty Stripe metadata on every paying customer
Probed Stripe `/v1/charges?limit=10` with our live key:

| Charge | Customer | Amount | Metadata | client_reference_id |
|---|---|---|---|---|
| `py_3TSYXn…` | arnaud.ademes@gmail.com | $29 | `{}` | (empty) |
| `py_3TRYVc…` | sclinton06@yahoo.com | $97 | `{}` | (empty) |
| `py_3TAY4E…` | nelson.george.edward@gmail.com | $29 | `{}` | (empty) |

No payment-link metadata, no client_reference_id. The hook captured nothing for these visits.

### Problem 2: Pre-existing `useStripeAttribution` hook had two flaws
File: `lib/stripe-attribution.js` (pre-upgrade).

- **Only persisted `utm_campaign`** as `client_reference_id`. Source / medium / referrer / landing page were all dropped.
- **sessionStorage only** — UTM was forgotten the moment the tab closed. Multi-session purchase paths (visit → leave → return to buy) lost everything.
- **Never read by webhook.** Even when set, `pages/api/stripe-webhook.js` ignored `session.client_reference_id` entirely.

### Problem 3: Subscribers blob is dead (11th death)
- `019dee81-1159-7259-86d1-88c201cf5451` returns `{"subscribers": []}` — 0 records on the live blob.
- Fallback in `lib/subscribers.js` has 20 hardcoded subs. `/api/status` reads from the fallback, masking the death.
- **Implication:** every signup since the last manual BLOB_ID commit (2026-05-03) lands in an orphan blob and is lost.

### Problem 4: 30+ pages call `/api/subscribe` without UTM
Pages like `pages/ai-prompt-mega-pack.js`, `pages/index.js`, `pages/audit-template.js`, etc. all `fetch('/api/subscribe', { body: JSON.stringify({ email, source }) })` — no UTM, no referrer, no landing-slug passthrough. The API accepts those fields but receives nothing.

## What I shipped (the fixes)

### Fix 1: `lib/stripe-attribution.js` upgraded end-to-end
- Captures **9 fields**: utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer_host, landing_slug, first_touch_ms, session_count.
- **localStorage 90-day persistence** with sessionStorage breadcrumb for session counting.
- **Compact pack** into `client_reference_id`: `att|s=gist|c=opus47|r=github.com|p=blog-claude|f=1777800000|n=2` — under Stripe's 200-char limit.
- **First-touch-wins** semantics for primary attribution + last-touch fields for re-engagement signal.
- New exports: `getAttribution()` for any page that wants to read state, `decodeAttributionFromClientRef()` for the webhook.

### Fix 2: `pages/api/stripe-webhook.js` decodes attribution on every sale
- Imports `decodeAttributionFromClientRef` and parses `session.client_reference_id`.
- Logs decoded attribution to Vercel logs alongside the existing kit-detection log.
- **Emails Armando per sale** with attribution rendered: amount, kit, full UTM/referrer/landing-page chain, raw `client_reference_id`, Stripe session ID, payment_link ID. **First time we have visibility into where a paying customer came from.**

### Fix 3: `pages/api/subscribe.js` server-side enrichment
- Now accepts: utm_term, utm_content, landing_slug, attribution (full object) in addition to existing fields.
- Server-side captures: `req.headers.referer`, `user-agent`, `x-vercel-ip-country`, region, city.
- Persists every field to the subscribers blob alongside the email. Even when client passes nothing, we get country + referer.

### Fix 4: New `/api/track` endpoint + auto-fire from `_app.js`
- Receives every page view (initial load + every client-side route change) with attribution attached.
- Stores in dedicated `track-events` blob (`019dfe20-8487-7349-ac62-b5faa8ba73ab`) — separate from subscribers so a flood of events can't kill capture.
- 5,000-event ring buffer prevents blob bloat.
- Self-heals on 404 (logs new ID for manual update).
- New helper `lib/track.js` exports `trackEvent`, `usePageViewTracking`, `useScrollDepthTracking` — pages can fire custom events with one import.

### Fix 5: Subscribers blob revived (11th death recovery)
- New BLOB_ID: `019dfe1f-deb7-7d5a-98b3-f8fa20e8aa2a`. 20 fallback subs migrated.
- Death log comment in `lib/subscribers.js` updated.
- **Permanent fix still needed**: migrate to Vercel KV or Upstash Redis (jsonblob death cycle is now 11x in 6 weeks).

## What we'll see going forward

1. **Every Stripe sale** triggers an email to Armando with full attribution chain (source / medium / campaign / referrer-host / landing-slug / first-touch timestamp / session count). Real-time.
2. **Every page view** lands in the `track-events` blob with attribution attached. Build any analytics report we want by reading that blob.
3. **Every subscriber capture** stores server-side country + region + UA + referer. Even if the client form forgot UTM, we still have country and referer.
4. **First-touch attribution** is preserved for 90 days — a visitor who lands on a gist on day 1 and buys on day 27 still gets credited to the gist.

## What we still don't have (gaps)

- **Past 3 customers**: permanent loss. No way to recover their attribution.
- **Cross-device tracking**: someone reading our gist on phone and buying on laptop = two separate attribution records. Standard limitation.
- **Ad-blocker resistance**: visitors with strict tracking blockers may not fire `/api/track`. Low for our audience but real.
- **Email-to-attribution join**: the subscribe enrichment captures attribution at signup; the Stripe-webhook decode captures it at purchase. Joining a signup to a later purchase by the same person requires email match — done if the buyer email matches a sub email.
- **Per-page subscribe-call upgrades**: the 30+ pages that call `/api/subscribe` still pass only `{email, source}`. Adding UTM/landing-slug to each will compound capture. Recommended next-session work.

## Recommended next steps (ranked by ROI)

1. **Migrate jsonblob → Vercel KV** (~90 min). Permanent fix to the 11-and-counting death cycle. **Highest ROI long-term.**
2. **Update top-3-traffic page subscribe calls** to pass localStorage attribution (10 min per page; pick the pages that drive most subs). Compounds capture for inbound visitors who don't click Stripe.
3. **Build `.founder/tools/attribution-snapshot.py`** (~30 min) that reads the track-events blob + subscribers blob + queries Stripe for new sales, outputs a daily attribution report (which sources drove which subs/sales).
4. **Add UTM tags to all 14 gists' MidasTools links** if not already (some are; verify all). The auto-rewrite only kicks in when UTM is present in the URL → the gists need to BE the UTM source.
5. **GA4 event linking**: confirm GTM is firing `checkout_click` events into a real GA4 property + funnel report. Currently the events fire but I don't know if they have a destination.

## Bottom line

We had attribution machinery half-built. Tonight: rebuilt end-to-end, every byte from URL UTM → localStorage → client_reference_id → Stripe → webhook → Armando inbox. Going forward, we'll know exactly where every paying customer came from. The past 3 customers are forensically lost — accept it, move on, instrument the future.

---

## Addendum: GSC findings (3-month window)

Armando provided a Google Search Console screenshot showing 3 months of organic search performance. Topline: **43 clicks / 10,000 impressions / 0.4% CTR / avg position 11.5**. Trend is up, especially mid-April through early May (matches Arnaud's May 2 purchase).

### Top organic-traffic pages

| Page | Clicks | Impressions | CTR |
|---|---|---|---|
| `/blog/chatgpt-ghibli-style-prompts-2026` | 10 | 389 | 2.6% |
| `/blog/ramp-ai-adoption-playbook-2026` | 9 | 387 | 2.3% |
| `/` (homepage) | 3 | 171 | 1.8% |
| `/blog/chatgpt-tips-tricks-2026` | 3 | 125 | 2.4% |
| `/blog/meta-muse-spark-prompts-guide-2026` | 3 | 96 | 3.1% |
| `/blog/best-ai-prompt-packs-2026` | **1** | **427** | **0.2%** ⚠️ |
| `/blog/claude-code-mastery-guide` | 1 | 224 | 0.4% ⚠️ |

### Probable attribution for past 3 buyers (inference, not confirmed)

- **Shantae** ($97, Apr 29) — likely arrived via the Ramp AI adoption playbook (B2B-leaning content, matches IT Director persona).
- **Arnaud** ($29, May 2) — likely arrived via Ghibli prompts blog (massive cultural search-volume spike in late April aligns with his buy date).
- **George** ($29, Mar 13) — IRRELEVANT (bought from openclaw-starter-kit.vercel.app per Session 158, not midastools.co).

### Fixes shipped from the GSC findings (this same commit)

1. **`best-ai-prompt-packs-2026` title + meta rewritten** to match search intent. Old: "7 Best AI Prompt Packs Worth Buying in 2026 (Honest Comparison)". New: "Best AI Prompt Packs 2026: I Tested 7 — Here's What's Worth It". Description rewritten to specific brand-name list with "actually worth your money" hook. Goal: 0.2% → 1.5%+ CTR (turning 426 wasted impressions into clicks).

2. **`claude-code-mastery-guide-2026` title shortened** from 76 chars to 65 chars (avoiding SERP truncation). Description tightened with "10x your Claude Code setup" hook.

3. **`next.config.js` redirect rule added** for non-www → www canonical. Ends the split-authority problem visible in GSC where both `https://midastools.co/` and `https://www.midastools.co/` show up separately.

4. **`data-cta` attributes added** to every Stripe link on Ghibli, Ramp, and Tips blogs. Each link now has a unique identifier (e.g., `ghibli-blog-bundle`, `ramp-blog-cowork-hero`, `tips-blog-megapack-mid`). The `useStripeAttribution` hook fires `checkout_click` events to GTM with the cta_id, so we can see per-blog conversion funnels in GA — without breaking the auto-attribution pipeline that packs UTM/referrer/landing-slug into client_reference_id.

### What we'll see in GSC + webhook in 7-14 days

Once Google re-crawls the new titles + descriptions:
- best-ai-prompt-packs CTR should rise from 0.2% to 1.5-3% (industry baseline for Page 2 results)
- claude-code-mastery CTR similar improvement
- www canonical fix consolidates ranking signals onto one URL

And every NEW sale from organic search will land in Armando's inbox with:
```
Attribution:
  referrer_host: google.com
  landing_slug: blog/chatgpt-ghibli-style-prompts-2026
  first_touch_at: 2026-05-08T...
```

The chain is now closed: GSC click → blog page → captureAttribution → localStorage → Stripe link → client_reference_id → webhook decode → Armando email.
