# Customer Attribution Report — 2026-05-05

**Trigger**: 🔴 HIGH priority open investigation from `revenue-ledger-2026-05-05.md` — "trace Apr 29 + May 2 customer attribution."

**Method**: Pulled checkout-session + payment-link records directly from Stripe API for all 3 paying customers; cross-referenced with codebase grep + subscriber blob.

**Confidence**: 🟢 95% on technical findings (direct from Stripe API). 🟡 70% on funnel-page attribution (Stripe doesn't capture referrer/UTM unless we wire it ourselves; some inference is involved).

---

## TL;DR — Three Surprises

### 1. 🚨 George Nelson did NOT buy from midastools.co
He bought from `openclaw-starter-kit.vercel.app` — a **separate Vercel property** with its own checkout. The ICP framing in `customer-icp-research-2026-05-05.md` ("Vegas tradesperson lookalike") is misattributed: he's an OpenClaw customer, not a MidasTools customer. **Real midastools.co lookalike pool = 2 customers, not 3.**

### 2. 🚨 Shantae's $97 payment link is misconfigured
The Stripe payment link for the All Kits Bundle (`plink_1TDwTm...`) uses `hosted_confirmation` (stays on Stripe's page after payment) instead of redirecting to `/thank-you`. As a result, when Shantae paid:
- She **never landed on our /thank-you page** → no upsell exposure, no email-capture, no GTM `purchase` event fired
- We have **zero referrer/UTM trail** on her purchase
- Any future $97 buyer has the same broken experience

**This is a 1-minute Stripe API fix that prevents losing every future $97 sale's data.**

### 3. None of the 3 customers were on our email subscriber list before purchase
All 3 cold-purchased without ever signing up for our nurture flow. The email-list → conversion narrative we were optimizing for is **not how our 3 actual sales happened.** Our subscriber list and our buyer list are disjoint cohorts.

---

## Per-Customer Attribution Detail

### Arnaud Demes — $29 Mega Pack (2026-05-02)

| Field | Value |
|---|---|
| Email | arnaud.ademes@gmail.com |
| On subscriber list pre-purchase? | ❌ No |
| Stripe Link (one-click)? | ✅ Yes |
| Checkout Session | `cs_live_a1dRvMzWHA4DSQPyVw438HWRijs0mLoeAF6ihtqfuSV7I7lZB1vqGrXxbe` |
| Payment Link ID | `plink_1TEF84AdkDx8xZMk6J6nBE6l` |
| Buy URL | `buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d` |
| Success URL | `https://www.midastools.co/thank-you?kit=mega-pack` ✓ |
| Session metadata | `{"kit_type": "mega-pack"}` |
| Source pages | `kits.js`, `pet-portrait-generator.js`, `prompt-generator.js`, `ai-content-detector.js` (all link to this buy URL) |

**Inferred journey**: Arnaud landed on one of the 4 source pages via cold traffic (likely `prompt-generator.js` or `pet-portrait-generator.js` based on Session 107 traffic data showing those at top of funnel), clicked the Mega Pack CTA, used Stripe Link to one-click pay. No prior email capture.

**Implication**: Mega Pack ($29) page funnel is **converting cold traffic** without nurture. The `/prompt-generator` and `/pet-portrait-generator` free tools are likely producing the conversions Session 107 hoped they would.

---

### Shantae Clinton — $97 All Kits Bundle (2026-04-29)

| Field | Value |
|---|---|
| Email | sclinton06@yahoo.com |
| On subscriber list pre-purchase? | ❌ No |
| Stripe Link (one-click)? | ✅ Yes |
| Checkout Session | `cs_live_a1NBtfrzJ7HHKik4KLcrJ0ixWbqJMWgTyEbJI6VtMkHh9qnXoygN3WMYaM` |
| Payment Link ID | `plink_1TDwTmAdkDx8xZMkmxB9yn55` |
| Buy URL | `buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b` |
| After-completion | **`hosted_confirmation`** ⚠️ (BUG) |
| Session metadata | `{}` (empty — no kit_type) |
| Source pages | `thank-you.js`, `kits.js`, `claude-cowork-kit.js`, `small-business-kit.js`, `ai-content-detector.js`, `childhood-reimagine-generator.js`, `pet-portrait-generator.js`, `ai-roi-calculator.js`, `photo-roast-generator.js`, `image-prompt-builder.js` (10+ pages link to this) |

**Inferred journey**: Shantae landed on one of 10+ pages with the BUNDLE_STRIPE CTA, clicked the $97 bundle link, paid via Stripe Link. After payment she **stayed on Stripe's hosted confirmation page** — never reached our /thank-you, never saw upsells, never hit our analytics.

**Bug evidence**:
```
plink_1TDwTm.after_completion = {"hosted_confirmation": {...}, "type": "hosted_confirmation"}
```
Should be:
```
plink_1TDwTm.after_completion = {"redirect": {"url": "https://www.midastools.co/thank-you?kit=all-kits-bundle"}, "type": "redirect"}
```

**Implication**: We have been quietly losing every $97 buyer's post-purchase touchpoint. With $97 being our top-tier SKU, this is the single highest-leverage fix on the site.

---

### George Nelson — $29 OpenClaw Starter Kit (2026-03-13)

| Field | Value |
|---|---|
| Email | nelson.george.edward@gmail.com |
| On midastools subscriber list pre-purchase? | ❌ No (and not relevant — he's not a midastools customer) |
| Stripe Link (one-click)? | ❌ No (regular card; 2 prior failed attempts before success) |
| Checkout Session | `cs_live_a1VB6ZkctptcE7DcD8WWaGy6AJWTUmEPZHE1brGq7KO7bD1pTo4IGRy71E` |
| Payment Link ID | `plink_1T3imgAdkDx8xZMkFry5wB6i` |
| **Success URL** | **`https://openclaw-starter-kit.vercel.app/thank-you`** 🔴 |
| Session metadata | `{"product": "openclaw-starter-kit"}` |

**Implication**: George is an **OpenClaw customer**, not a MidasTools customer. He bought from a sister property's checkout. The "Vegas tradesperson lookalike" framing in the prior ICP research is misattributed and should be removed from the midastools-site lookalike playbook.

**Open question**: Why are OpenClaw transactions hitting our Stripe account? They're on the same Stripe account because Armando runs both. But strategically, OpenClaw revenue is a **different brand's funnel** — its lessons don't transfer to midastools acquisition. Worth confirming with Armando whether we should split the metrics-snapshot lifetime view by `success_url` to separate the two brands.

---

## Strategic Implications — Updated From This Data

### What this changes about the May 10 audit decision

The Plan D ($1,499 reposition) was framed against "$0 revenue" — wrong, as discovered Session 156. Now it's framed against "$155 LTM with the only midastools.co sales coming through low-friction Stripe Link checkouts on $29-$97 SKUs."

**The conversion model that's working at midastools.co**: Cold traffic → free tool / page → CTA → Stripe Link one-click payment. **Not** email-list nurture → broadcast → conversion.

Implication: investing in audit-experiment infrastructure (which is cold-pitch + bespoke-deliverable + 30-min discovery) is testing a *different funnel pattern* than the one that's working. That's not necessarily wrong — but it's a strategic bet against our only data point.

### What to fix RIGHT NOW (priority-ordered)

#### 🔴 Tier 0 — Stop the bleeding on the $97 SKU

**Fix `plink_1TDwTm` after-completion to redirect to /thank-you.** 1-minute Stripe API call:

```bash
curl -X POST https://api.stripe.com/v1/payment_links/plink_1TDwTmAdkDx8xZMkmxB9yn55 \
  -u $STRIPE_KEY: \
  -d "after_completion[type]=redirect" \
  -d "after_completion[redirect][url]=https://www.midastools.co/thank-you?kit=all-kits-bundle" \
  -d "metadata[kit_type]=all-kits-bundle"
```

Then verify `pages/thank-you.js` and `pages/api/stripe-webhook.js` recognize `kit=all-kits-bundle` (they may need a KIT_MAP entry).

Risk: zero — fully reversible, doesn't break the existing flow, only adds value.
Reward: every future $97 buyer hits our /thank-you (upsell, email capture, GTM event).

#### 🟡 Tier 1 — Verify and patch all other "hosted_confirmation" payment links

Many of the 30+ active payment links may have the same misconfiguration (especially older ones). One Stripe API loop can audit + patch them all idempotently.

Tool to build: `.founder/tools/audit-payment-links.py`.

#### 🟡 Tier 2 — Add UTM passthrough on all Stripe payment-link CTAs

Per memory: "Stripe payment-link metadata is EMPTY for our 3 buyers (no UTM passthrough)." Stripe payment links accept `client_reference_id` as a query param, which gets stored on the session. Adding `?client_reference_id={page-slug}` to every CTA in the codebase would give us real per-page conversion attribution from this point forward.

#### 🟢 Tier 3 — Update the lookalike playbook

The buyer ICP at `customer-icp-research-2026-05-05.md` should be revised:
- George profile (plumber lookalike) marked as **OpenClaw audience, not MidasTools** — strike the "Vegas tradesperson" vector from MidasTools targeting
- Shantae + Arnaud remain valid; both are mid-career professionals, both used Stripe Link, both came in cold from page CTAs

The cleanest takeaway: **MidasTools' actual buyer = experienced digital-goods buyer (already has a Stripe Link account) who finds us via cold traffic to a free tool / kit page and one-clicks $29-$97.** They don't read our blog, don't subscribe to our list, don't engage on Reddit/X.

### What this changes about content channel investment

Reaffirms Session 148-153 finding: Dev.to, Reddit, X, IH — **not where our buyers are**. But it adds nuance: the 2 confirmed midastools buyers came via **page CTAs on our own free tools / kit pages**, not via gist or blog backlinks. So:

- **Free tools as funnel** is validated by Arnaud (probably) and Shantae (definitely possible — many of those 10+ pages are free tools with the bundle CTA).
- **Gists/Dev.to/blogs as funnel** remains unvalidated by any sale we can attribute.

The pivot recommendation tightens: invest in **conversion optimization on the free-tool pages** (where buyers actually convert) and **paid distribution to drive cold traffic** to those tools. De-prioritize content channels that don't terminate at a buy CTA on a free tool.

---

## Recommendations — Ranked

| Priority | Action | Effort | Owner |
|---|---|---|---|
| 🔴 1 | Fix `plink_1TDwTm` after-completion → /thank-you | 5 min | Soul (with Armando greenlight) |
| 🔴 2 | Add `kit=all-kits-bundle` to KIT_MAP in stripe-webhook + thank-you.js | 15 min | Soul |
| 🟡 3 | Audit all 30+ active payment links for hosted_confirmation, fix in batch | 30 min | Soul |
| 🟡 4 | Add `client_reference_id` passthrough to all Stripe CTAs (codebase-wide) | 60 min | Soul (post-greenlight) |
| 🟡 5 | Strike "Vegas tradesperson" vector from midastools lookalike playbook; update customer-icp-research | 15 min | Soul |
| 🟢 6 | Build `.founder/tools/audit-payment-links.py` for ongoing monitoring | 30 min | Soul |
| 🟢 7 | Revisit May 10 audit decision frame with new "page CTA → Stripe Link" funnel insight | discussion | Armando + Soul |
| 🟢 8 | Email Shantae a 1-line "thank you, what made you buy?" (qualitative gold) | 5 min ack + Armando approval | Armando |

---

## Sources

All technical findings: direct Stripe API queries (charges, payment_intents, checkout/sessions, payment_links, payment_methods endpoints) executed 2026-05-05 ~20:30 UTC against live account `acct_51T3ifC...`.

Codebase grep: `pages/**/*.js` for plink IDs and buy.stripe.com URLs.

Cross-reference: `.founder/data/subscribers/*.json` for pre-purchase subscriber status.

Authored by: Soul (Research Analyst), Session 158.
