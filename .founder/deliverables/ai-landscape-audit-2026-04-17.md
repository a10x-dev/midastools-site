# AI Landscape Audit — Are Our Prompts & Products Still Current?

**Date:** April 17, 2026
**Session:** 117
**Trigger:** Armando asked: "Do a research on the web to get up to date and make sure the prompts and products we are offering make sense, or they are outdated, we need to start moving this money wheel"

---

## Executive Summary

- ⚠️ **Critical risk identified and fixed**: OpenAI's Sora shuts down **April 26, 2026** (9 days away). We had 40+ references selling "Sora prompts" across the AI Video Prompt Pack + 13 other pages. Buyers in 9 days would have received kits referencing a dead product → refund risk.
- ✅ **Content quality is NOT the bottleneck**: Our ~1,430 prompts are well-structured and model-agnostic. They work on any text/image/video generator.
- ⚠️ **Stale model references** across 15+ pages (GPT-4o as "best", Midjourney v6, Claude 3.5). All fixable surgically without rewrites.
- 🟢 **Price positioning is competitive**: $9/$29/$39/$97 tiers align with 2026 market ($10-$100 range). Do not drop below $19.
- 🔴 **Missing viral formats**: AI Cakeify and AI Squish effects are trending hard on TikTok in April 2026. We don't have generators for either. Potential free-tool opportunity.
- 🟢 **Strategy confirmed**: Market demand for AI prompt packs is strong. One creator hit $1,000 in 2 months, no paid ads. Our 26-day $0 result is a conversion problem, not a market problem.

---

## 1. Current State of the AI Model Landscape (April 2026)

### Language Models (text)
| Model | Released | Notes |
|---|---|---|
| **GPT-5.4** | Mar 5, 2026 | OpenAI's current flagship. GPT-5 released late 2025. |
| **GPT-5 / GPT-4o / GPT-4o-mini** | Still available | GPT-4o now mid-tier, GPT-4o-mini is the cheap tier. |
| **Claude Sonnet 4.6 / Opus 4.6** | Feb 2026 | Anthropic's current. Opus 4.6 beats 4.5. |
| **Claude Mythos** | Feb 2026 | Project Glasswing — 50 orgs only, not public. |
| **Gemini 3.1 Pro / Flash-Lite / Ultra** | Feb-Mar 2026 | Ultra scored 94.3% on GPQA Diamond, 77.1% on ARC-AGI-2. |
| **Grok 4.20 Beta 2** | Mar 3, 2026 | xAI's current. |

### Image Models
| Model | Status |
|---|---|
| **Midjourney v7** | Default since Jun 17, 2025. Omni Reference, personalization on by default. |
| **Midjourney v8 Alpha** | Preview since Mar 17, 2026 |
| **DALL-E 3** | Still shipping via ChatGPT, used for image gen |
| **Stable Diffusion XL / 3** | Open-source standard |
| **Ideogram 2.0** | Best text rendering in images |

### Video Models — THE BIG STORY
| Model | Status |
|---|---|
| 🚨 **Sora (OpenAI)** | **SHUTTING DOWN.** Announced Mar 24, 2026. Web/app ends Apr 26, 2026. API ends Sep 24, 2026. Cost was unsustainable ($18/clip compute vs $4-8 user pay = $120M/mo burn). |
| **Google Veo 3.1** | Current best. Generous free tier, native audio, matches Sora's quality ceiling. |
| **Kling AI 3.0** | Closest Sora replacement. Up to 120s clips (vs 8-10s on most tools). Best motion coherence. |
| **Runway Gen-4** | Pro editing workflows, image-to-video, motion brush. |
| **Pika Labs 2.0** | Fast iteration, stylized. |
| **Luma Dream Machine** | 3D-aware generation. |
| **HappyHorse-1.0** | Tops video leaderboards April 2026 by largest margin ever recorded. |
| **HailuoAI (MiniMax)** | Strong character consistency. |

### Viral Trends Dominating TikTok/Instagram Right Now
1. **AI Cakeify** — knife cuts through object, reveals multi-layered sponge cake inside → WE DON'T HAVE A GENERATOR
2. **AI Ghibli Effect** — ✅ we have ghibli-prompt-generator
3. **AI Squish Effect** — rigid object squishes like memory foam → WE DON'T HAVE A GENERATOR
4. **Character-consistent video** — now baseline expectation, not a feature

---

## 2. What We Fixed This Session (Commit `c73cce3`)

### AI Video Prompt Pack (paid product — $29)
- **README.md** inside the ZIP: Reordered supported tools — Google Veo 3.1 and Kling AI 3.0 lead. Added HappyHorse-1.0 and Pika 2.0. Transparent note about Sora shutdown.
- **Sales page** (`/ai-video-prompt-pack`): Hero badge, tool badges, meta tags, OG/Twitter cards, FAQ answers, sample-prompt descriptions, pricing checklist, schema-review text, and JSON-LD FAQ entity all re-leading with Veo/Kling.
- **ZIP rebuilt and committed** (`public/ai-video-prompt-pack.zip`). Next buyer gets current README.

### Site-wide Sora references
- `kits.js`, `index.js`, `bundle.js`: video pack descriptions now read "Veo 3.1, Kling 3.0, Runway" instead of "Sora, Runway, Pika"
- `food-drama-generator.js`: UI + FAQ + how-to steps updated
- `prompt-generator.js`: FAQ model list + related card

### Midjourney v6/v6.1 → v7 across 8 files
- `/ghibli-prompt-generator`, `/miniature-diorama-generator`, `/image-prompt-builder`, `/hug-younger-self-generator`, `/album-cover-generator`, `/lego-prompt-generator`, `/blog/chatgpt-ghibli-style-prompts-2026`, `/blog/best-midjourney-prompts-2026`
- Added note about v8 Alpha in the flagship blog post (currently ranks for "Midjourney v6.1")

### OpenClaw Cost Calculator
- Was: Claude 3.5 Sonnet, Claude Opus, GPT-4o, GPT-4o-mini
- Now: Claude Sonnet 4.6, Claude Opus 4.6, GPT-5, GPT-4o, GPT-4o-mini, Gemini 3.1 Pro
- Default model selector (`MODELS[0]`) now shows Claude Sonnet 4.6

---

## 3. What's Still Stale (Deliberately Deferred)

Some GPT-4o references remain on individual tool pages (caricature, childhood-reimagine, pet-portrait, lego, album-cover, tattoo, fantasy-map, photo-roast, ghibli, hug-younger-self). Rationale:

- GPT-4o is still a valid model — OpenAI hasn't deprecated it.
- Saying "GPT-4o works best" is not incorrect, just not optimal.
- These pages don't gate the money wheel; paid pages were the priority.
- Full sweep is a 30-min follow-up when we need another hygiene session.

Also deferred: the dedicated blog post `/blog/ai-video-prompts-sora-runway-2026` (the URL itself references Sora). Changing URL = SEO risk. Updating intro content is the right move next session — keep the URL, reframe the content.

---

## 4. Market-Demand Validation

**Research conclusion: the market is NOT saturated or declining.**

- Medium post (Mar 2026): "How I Made My First $1,000 Selling AI Prompt Packs on Gumroad" — 2 months, no paid ads, confirmed revenue.
- Average prompt pack price on Gumroad/Etsy/Whop: **$10-$100**. Our $9/$29/$97 fits perfectly.
- Target audience: marketers, solopreneurs, freelancers.
- Top-selling prompt categories in 2026: Etsy seller prompts, ChatGPT prompts for digital product creators, scaling/business growth prompts, content creation/copywriting.
- "In 2026, nearly every professional is using AI daily" — demand still expanding.

**Verdict**: Our $0 revenue in 26 days is not a market problem. It's a conversion/acquisition problem — which is what the current bottleneck diagnosis says.

---

## 5. Recommendations (Prioritized)

### 🟢 High confidence
1. **P1 — Ship AI Cakeify generator** (1-2 sessions). Trending now, zero competitors in prompt-pack space. Could be our first free tool that actually drives traffic because the trend is fresh and search is spiking. Email-gated. Feeds $9 tripwire.
2. **P1 — Update drip email templates** to mention Veo 3.1 / Kling 3.0 in any copy referencing Sora (I didn't audit `/api/nurture` for Sora strings — should check next session).
3. **P1 — Write short blog post**: "Sora Is Shutting Down — Here's What to Use Instead". This is a timely SEO opportunity. Every creator currently on Sora is searching for alternatives. Link to our video pack as CTA.

### 🟡 Moderate
4. **P2 — Full GPT-4o → GPT-5 sweep** on the 10 tool pages. 30-min follow-up.
5. **P2 — Rewrite `/blog/ai-video-prompts-sora-runway-2026` intro** to frame Sora as legacy. Keep URL for SEO equity.
6. **P2 — Add "What's Current" footer badge** to all kit pages: "Updated for GPT-5, Claude 4.6, Gemini 3.1, Midjourney v7, Veo 3.1 (April 2026)". Signals freshness to buyers.

### 🔴 Low confidence
7. **P3 — Consider AI Squish generator**. Trending but may fade. Watch the trend for 1-2 weeks before building.
8. **P3 — Sunset references to Pika Labs 1.0** if Pika 2.0 or Pika 3.0 becomes the norm (didn't verify this session).

---

## 6. Decision Log

**Decision**: Re-lead the video prompt pack with Veo 3.1 / Kling 3.0 instead of Sora, 9 days before Sora's shutdown.
**Alternatives considered**:
- (A) Leave as-is, handle refunds after April 26 — unacceptable, burns trust.
- (B) Remove Sora entirely — honest but abandons SEO value from "Sora prompts" keyword.
- (C) De-emphasize Sora, lead with current leaders, add honest shutdown note — **CHOSEN**.
**Rationale**: Option C preserves SEO signals while telling buyers the truth. The shutdown note actually reinforces "we pay attention, we're current" — could be a conversion asset rather than liability.
**Expected outcome**: Zero post-purchase complaints about Sora references within the next 2 weeks. If any complaints, the README note addresses them proactively.

---

## Sources

- [LLM-Stats — AI Updates April 2026](https://llm-stats.com/llm-updates)
- [Best AI Models April 2026 — fellowAI](https://felloai.com/best-ai-models/)
- [Sora Is Dead: Best Alternatives in 2026 — Atlas Cloud](https://www.atlascloud.ai/blog/guides/sora-is-dead-best-sora-alternatives-after-the-openai-sora-shutdown-in-2026)
- [OpenAI Kills Sora — imoney](https://www.imoney.my/articles/openai-sora-shutdown-ai-bubble)
- [Midjourney Version docs](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version)
- [Midjourney v7 Alpha announcement](https://updates.midjourney.com/v7-alpha/)
- [How I Made $1,000 Selling AI Prompt Packs — Medium](https://simplescale.medium.com/how-i-made-my-first-1-000-selling-ai-prompt-packs-on-gumroad-93663abcc492)
- [Top 6 Viral AI Video Effects 2026 — Vidguru](https://www.vidguru.ai/blog/2026-top6-video-effects.html)
- [LTX Studio AI Image Trends 2026](https://ltx.studio/blog/ai-image-trends)
