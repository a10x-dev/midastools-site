# Why the chatbot SEO cluster produced ~0 organic traffic — and what the data says to do instead

**Date:** 2026-08-04 · **Method:** first-party `/api/track-events` segmented by page + live SERP inspection
**Bottom line:** It was not a technical failure and not an execution failure. It was **keyword selection**. We aimed five of six pages at markets owned by category-native vendors, and the one page that worked was aimed at a completely different audience — the one our domain actually has authority with.

---

## 1. It is not a crawl or indexing bug

All six cluster pages check out clean:

| Check | Result |
|---|---|
| HTTP status | 200 on all 6 |
| In `sitemap.xml` | Yes, all 6 |
| `robots.txt` | `Allow: /`, sitemap declared |
| `meta robots` | No `noindex` anywhere |
| Canonical | Correct self-canonical on all 6 |
| Titles | Real, keyword-targeted, well-formed |

So the pages are served, crawlable, and indexable. Zero landings is a **demand/competition** result, not a plumbing result. This rules out the cheapest possible explanation.

## 2. The first-party traffic data, segmented by page

| Surface | Google landings Jul 14–28 | Google landings Jul 21–Aug 4 |
|---|---|---|
| `sell-ai-chatbots-local-business-2026` (**reseller** angle) | **52** | 1 |
| `ai-chatbot-for-med-spas-2026` | 0 | 0 |
| `ai-chatbot-for-dental-practices-2026` | 0 | — |
| `ai-chatbot-for-home-services-2026` | 0 | 0 |
| `ai-chatbot-for-law-firms-2026` | 0 | 0 |
| `ai-chatbot-for-real-estate-agents-2026` | 0 | — |
| `/chat/` live demo pages | 0 | 0 |

**One page ever got organic traffic. It was the only one not aimed at a vertical.** I had this signal in my own funnel on Jul 28 and read it backwards — I concluded "the cluster is ranking, ship more niches" when the data said "the reseller angle ranks, the vertical angle does not."

## 3. Why the vertical pages can't win — the SERPs are owned

**"AI chatbot for law firms"** — page one is:
Juro, rankings.io, fwd-lawyermarketing, Monu, Edtek, SetSmart, LawNext Directory, Darrow.ai.
Named incumbents in-market: **Harvey AI, Smith.ai, LawDroid, Gideon, Intaker, Lawmatics**.

**"AI chatbot for med spas"** — page one is:
SchedulingKit, **American Med Spa Association** (the industry body), Prospyr, Hyperleap, Intellivizz, Astucia.
Buyers there expect integration with **Vagaro, Boulevard, Zenoti**; legal buyers expect **Clio, Lawmatics, HubSpot**.

These are funded, category-native vertical SaaS companies with topical authority, industry-body backlinks, and deep integrations. We are a $39/mo generic builder on a domain Google has classified as **consumer AI art** (our real organic winners are ghibli prompts 153, photo-roast 136, prompt packs, midjourney prompts). Asking that domain to outrank Harvey AI for legal intake was never going to work. Five pages × zero landings is the correct, predictable outcome — it just took three weeks and four hours of building to find out, because nobody checked the SERP before writing.

## 4. Why the reseller page DID work — and who actually lives there

**"how to sell AI chatbots to local businesses"** — page one is:
GrowwStacks, BotPenguin, aibusiness.vc, a **Medium** personal story, Trillet, and **three YouTube videos**.

That is not enterprise SaaS. That is the **make-money / side-hustle / creator** SERP — informational, creator-led, low domain-authority barrier. It is the same audience shape as our proven organic winners and our existing `make-money-with-ai-5-methods-2026` post.

The reseller's job-to-be-done also matches our price: they want to charge local businesses **$300–500/mo** and need a cheap tool to deliver with. $39/mo is a *cost of goods* to them, not a purchase decision. To a law firm, $39/mo signals "toy." **Same product, same price — one audience reads it as a margin, the other reads it as a red flag.**

## 5. What this means

- **The chatbot product is not disproven.** No qualified buyer has ever reached it. PMF is untested, not failed.
- **The vertical-page strategy is disproven.** Do not ship brick #7. Five pages, zero landings, SERPs owned by funded incumbents.
- **The reseller angle is the only one with evidence behind it** — it is the only page that ever ranked, its SERP is winnable, its audience matches our domain authority, and its economics make $39/mo an easy yes.
- **YouTube ranks 3 of 9 results** on the reseller keyword. That is a channel signal worth noting, though we have no video capability today.

## 6. Confidence — stated explicitly, because I got this wrong once already

| Claim | Confidence | Basis |
|---|---|---|
| Not a technical/indexing bug | **High** | Directly verified all 6 pages |
| Vertical SERPs owned by category-native vendors | **High** | Two verticals inspected, consistent |
| Reseller SERP is creator/info-shaped and winnable | **High** | Directly inspected |
| Only the reseller page ever ranked | **High** | Our own first-party data, two windows |
| Repointing at resellers will produce **revenue** | **Medium-low** | It produced 52 landings and 1 build. That is traffic, not proven willingness to pay. |

**Open question I cannot close from this seat:** why the hub decayed 52 → 1 in two weeks. Honeymoon decay, a competitor displacing us, or a demotion all look identical without Search Console. This is the single highest-value missing instrument — it is the difference between "recover the one page that worked" and "the whole channel is closed."

## 7. Falsifiability

This conclusion is wrong if any of these show up:
- A vertical page starts producing organic landings after >6 weeks (slow indexing, not competition).
- The reseller page recovers to >20 landings without changes (the decay was noise, honeymoon theory wrong).
- A reseller-sourced `chatbot_build` fails to convert at all across 20+ builds (audience fits the traffic but not the wallet).

Re-check with: `python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --days 14 --stripe`

---

## 8. Follow-up: the chatbot pages have no search presence, but the make-money pages do

I said in §6 that I couldn't narrow the honeymoon-vs-demotion question without Search Console. A cheaper test got partway there. Across four separate queries — `site:midastools.co chatbot`, the reseller keyword, a brand+keyword query, and an exact-phrase query on our own title — **not one of the six chatbot cluster pages surfaced.**

On those same queries, from the same tool, these midastools pages *did* surface:

- `midastools.co` (homepage)
- `blog/make-money-with-ai-5-methods-2026`
- `blog/felix-craft-story`
- `world-cup-ai-prompts-2026`
- `fantasy-map-generator`
- `tattoo-generator`

**The domain is indexed and visible. The chatbot pages specifically are not.** And the pages that *are* visible are the make-money and consumer-AI-tool pages — which is the same conclusion §4 reached from the SERP side, now confirmed from the index side.

**Caveat, stated plainly:** this search tool is not literally Google and may approximate `site:` and exact-phrase operators, so this is corroborating evidence, not proof of deindexing. But four independent queries agreeing with the first-party landing data (0–1 landings) makes "these pages have effectively no Google presence" the strongly-favoured reading.

**What this changes:** it raises confidence that the reseller page's 52→1 decay is not a temporary ranking wobble worth waiting out. Combined with §4 — that the reseller SERP is winnable and matches our demonstrated authority — the implication is that the *angle* is right and the *asset* is not currently competing. That is an argument for strengthening one page against a SERP we can actually see, not for waiting, and not for cloning the angle across five new pages.

Search Console remains the instrument that would settle it outright.
