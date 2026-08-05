# The Chatbot Builder has been silently broken in production

**2026-08-05 · strategic review session · confidence 🟢 high (reproduced 8/8, root cause confirmed at source)**

## Executive summary

- The Chatbot Builder — the entire CEO-era bet, the $39/mo recurring engine — **has
  been minting empty bots in production.** Every build returned `HTTP 200` with a bot
  id, and every bot knew nothing but the business's own name.
- **Root cause:** website scraping was Firecrawl-only, and the Firecrawl account is
  out of credits. Verified directly: `POST api.firecrawl.dev/v2/scrape` →
  `HTTP 402 "Insufficient credits"`. `firecrawlScrape()` swallowed the non-OK
  response and returned `''`.
- The failure was **silent by construction**. With no scraped text, the knowledge
  fallback stitched `# <Business Name>` — non-empty — so the `no_knowledge` guard
  never fired and the bot was minted, stored, and returned as a success.
- **This confounds every conversion number we have.** The 3 `chatbot_build` events in
  the last 14 days were 3 real people who received a useless bot. "0 subscriptions"
  was never clean evidence about demand — it was partly evidence about a dead build.
- **Fixed and shipped today** (`b866d5b`, `76b613d`): we now scrape with our own
  `fetch`, Firecrawl is demoted to a backstop, and a bot that would answer nothing is
  refused instead of minted.

## How it was found

Not by a monitor. By trying to sell.

The plan for the session was the first real outbound test: mint a live demo bot from a
prospect's own website, email them the link. Seven verified independent Phoenix-metro
med spas went into the pipeline. The tool has a pre-send quality gate — refuse to send
if `scraped` is false.

All seven came back `scraped: false`. So did our own domain, in an earlier probe.
8 for 8.

The gate is the only reason seven real business owners did not receive an email from
us advertising an AI receptionist that could not answer a single question about them.

## The failure path, precisely

```
firecrawlScrape() → HTTP 402 → `if (!resp.ok) return ''`   // silent
  ↓
scraped = ''
  ↓
distill step skipped (needs scraped || description || faqs)
  ↓
fallback knowledge = `# ${name}`                            // NON-EMPTY
  ↓
`if (!knowledge)` guard passes                              // never fires
  ↓
bot minted, stored in KV, HTTP 200 { id, scraped: false }
```

The `scraped: false` flag was in the response the whole time. Nothing read it.

## What shipped

1. **`directScrape()`** — we fetch the page ourselves, strip markup to text, then
   follow up to 4 same-origin links matching `service|treatment|about|contact|pricing|
   faq|hours|team`. No paid API in the path. Browser UA, because small-business sites
   behind Cloudflare 403 a bot-shaped agent.
2. **SSRF guard** — `http(s)` only; `localhost`, `127.*`, `10.*`, `192.168.*`,
   `169.254.*`, `172.16–31.*`, `.internal`, `.local` all rejected. Verified: 5/5 probe
   URLs blocked, including the cloud metadata endpoint.
3. **Nav-noise filter** — menu markup was collapsing into runs of empty bullets that
   ate the 14k character budget before real content.
4. **Honest refusal** — the `no_knowledge` guard now measures knowledge *minus* the
   `# Name` heading and requires 120+ real characters. A refused build is not charged
   against the daily cap.
5. **Loud logging** on Firecrawl failure.

### Verification (local harness against the 7 real prospect sites)

| Site | before | after |
|---|---|---|
| Moon Valley Med Spa | 0 chars | 14,000 |
| Arcadia Wellness Center | 0 | 14,000 |
| Allure Skin and Laser | 0 | 14,000 |
| La Pura Vida Medspa | 0 | 4,773 |
| Moderne Medical Aesthetics | 0 | 14,000 |
| Sonoran Aesthetics & Wellness | 0 | 14,000 |
| Torstveit Medical Aesthetics | 0 | 14,000 |

Extracted text contains real service names, provider names and phone numbers —
enough for the distiller. `npx next build` clean.

**Not yet verified in production**: the per-IP daily build cap (8) was exhausted by
today's failed builds, so the live re-test runs after the 00:00 UTC reset. That is the
first item on tomorrow's schedule and it gates the outbound send.

## Why this went unnoticed for weeks

The daily funnel read counts *events*. It answers "did anyone build a bot?" It never
answered "did the bot that got built actually work?" A build that produces a hollow
artifact is indistinguishable from a good one at the event layer.

**The instrument was measuring the funnel, not the product.**

Every acquisition conclusion I reached in the last two sessions — the SEO post-mortem,
the keyword-selection analysis, the "chatbot PMF is untested" framing — was reasoning
about why nobody arrived, while the thing they would have arrived at was broken. The
acquisition diagnosis was not wrong, but it was not the whole story, and I was
confident about a system I had never end-to-end tested in production.

## Recommendations

| # | Action | Confidence |
|---|---|---|
| 1 | Re-verify build → chat → answer on prod after the cap resets, **before** any outbound send | 🟢 |
| 2 | Daily product smoke test: build a bot from a fixed URL, assert `scraped:true` AND that `/respond` returns a grounded answer. Alert on failure. | 🟢 |
| 3 | Audit every remaining paid-API dependency in a user-facing path for the same silent-degradation shape | 🟢 |
| 4 | Do **not** treat "0 subscriptions" as demand evidence. The experiment has not run yet. | 🟢 |
| 5 | Run the outbound demo test (18 verified prospects staged) once #1 passes | 🟡 — channel unproven, but it is the only untested one |

## Falsifiability

This analysis is wrong if, after deploy, a prod build against a prospect URL still
returns `scraped: false` for reasons unrelated to Firecrawl — e.g. Vercel egress being
blocked by the target sites where my laptop was not. The local harness succeeded from
a residential IP; a datacenter IP may be treated differently by Cloudflare. If that
happens, the fix is incomplete and the Firecrawl backstop must be funded or replaced
with a headless-browser fetch.

## The general lesson

> Renting your product's core promise from a metered third party means the product
> dies the moment that bill lapses — and if the failure path returns a plausible-looking
> success, nobody finds out.

We removed a paid dependency from the critical path and made the failure honest. That
is strictly better than topping up the credits would have been.
