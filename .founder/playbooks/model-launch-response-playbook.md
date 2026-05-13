# Model-Launch Response Playbook

**Trigger**: A major AI model launches (GPT-6, Claude 5, Gemini 4, Llama 5, DeepSeek V4, Mistral Large 3, or any tier-1 release that hits HN front page or mainstream tech press).

**Why this playbook exists**: Per investigation 2026-05-12, our 2 cleanest sales (Shantae Apr 29, Arnaud May 2) coincided with the GPT-5.5 "Spud" launch wave on Apr 23. Conversion = `(model-release news pulse) × (correct-SKU hero) × (indexed-inventory)`. We caught a wave because the hero was right and Google had indexed enough pages. The next wave is the natural retest moment. This playbook collapses that retest from "scramble" to a <2-hour ship-day.

---

## Detection — what counts as a launch

**Tier 1 (FIRE the playbook)** — Mainstream developer + business press coverage within 24h, HN front page, official blog from one of: Anthropic, OpenAI, Google (DeepMind/Gemini), Meta AI, Mistral, DeepSeek, xAI, Alibaba (Qwen-class).

**Tier 2 (consider, but don't auto-fire)** — Open-source model with strong benchmarks but limited mainstream press (e.g., new Llama variant, mid-size Qwen release). Ship if it has a clear "consumer-tier prompt" angle.

**Tier 3 (skip)** — API-only updates, pricing changes, region rollouts, minor model patches. No mainstream news pulse = no conversion catalyst.

**Detection sources** (no automated cron yet — manual sweep is fine):
- Anthropic news: https://www.anthropic.com/news
- OpenAI blog: https://openai.com/news
- Google DeepMind: https://deepmind.google/discover/blog/
- HackerNews front page: https://news.ycombinator.com/news
- Twitter/X: @sama @AnthropicAI @GoogleDeepMind @AIatMeta
- Sundial AI news aggregator: https://www.crescendo.ai/news

---

## The 5-window ship-day (T-7 → T+7)

### T-7 days (preflight — only if we have advance signal)

Most launches surface 24-72h before going live (leaks, board-meeting drops, conference keynotes). If we have advance signal:

- [ ] Verify homepage hero still points at `$97 Mega Pack` + `$9 starter pack`. Run sanity check from this playbook §Sanity-Check.
- [ ] Verify Stripe payment links are healthy: `python3 .founder/tools/audit-payment-links.py`. Fix anything broken BEFORE wave hits.
- [ ] Stage the blog post template (see `.founder/playbooks/model-launch-blog-template.md`). Pre-fill what we can: brand voice, FAQ-schema skeleton, internal links.

### T-3 days (no advance signal — most common case)

If the launch already happened, T-3 collapses to T-0. Skip to T-0.

If advance signal exists:
- [ ] Pre-research likely topic clusters Google will rank for. The naming convention matters: people search "{model name} prompts", "{model name} vs {competitor}", "{model name} examples".
- [ ] Draft 8-10 model-specific prompts. Each prompt must:
  - Be runnable as-is (no [BRACKETS] placeholders the buyer fills in)
  - Solve a specific job a knowledge worker has (not "write me a blog post")
  - Use a feature that's NEW or BETTER in the new model (long context, reasoning, multimodal, tool use, voice)

### T-0 (launch day — the load-bearing day)

**Hard 2-hour budget.** If we can't ship in 2 hours, the wave has already passed.

- [ ] **(15 min) Confirm Tier-1 launch**: HN front page + at least 1 mainstream press article. If not yet there, wait — premature ship = wasted compounding.
- [ ] **(60 min) Ship blog post** — use the template at `.founder/playbooks/model-launch-blog-template.md`. Target slug: `/blog/{model-slug}-prompts-{year}` or `/blog/{model-slug}-vs-{competitor}-{year}`. **The hero question** the post answers: "what can I actually DO with {new model} that I couldn't do yesterday?"
- [ ] **(20 min) Add to sitemap.xml** + push to IndexNow: `curl https://www.bing.com/IndexNow?url=https://www.midastools.co/blog/{slug}&key=...`. Update `pages/blog/index.js` if there's a manual list.
- [ ] **(15 min) Ship matching gist** — same content, condensed to a markdown gist on gist.github.com. UTM-tag every link: `?utm_source=gist&utm_campaign={model}-launch`. Funnel: `/ai-prompt-mega-pack` + `/bundle` ($97) + `/starter-pack` ($9). **Do NOT add a CTA to /ai-audit** — wrong audience for this wave.
- [ ] **(10 min) Dev.to syndication** — publish first, set canonical AFTER blog goes live (PUT update). Per `dev-to-canonical-after-blog` playbook. Truncated body, 3 UTM-tagged CTAs (Mega Pack, Bundle, Starter Pack).

### T+1 to T+3 (compounding)

- [ ] Monitor `/api/track` for any spike in `referrer_host=chatgpt.com|google.com|news.ycombinator.com` → `/blog/{model-slug}-prompts-*`.
- [ ] Monitor Stripe sales daily. Cross-check with truth-source via `python3 .founder/tools/metrics-snapshot.py`.
- [ ] If first sale hits within T+72h → second blog post in the same cluster (comparison post: `{new model} vs {previous SOTA}`). Compounds the indexing weight.

### T+7 (measurement + decision)

- [ ] Pull GSC impressions for the new blog post. Healthy: 30+ impressions by day 7.
- [ ] Count sales attributed to the launch window. Per Apr 29-May 2 baseline: **2 sales = play worked**. **0 sales = audience-product-fit issue, not channel issue.**
- [ ] If sales: log as a working pattern, repeat at next launch.
- [ ] If no sales: do NOT auto-conclude failure — the indexing inventory still compounds. Worst case is the post ranks 3-6 months later when search demand catches up.

---

## Sanity check (run before EVERY launch)

```bash
# Hero still pointing at Mega Pack + Starter Pack?
curl -s https://www.midastools.co/ | grep -oE 'Get Mega Pack.{0,30}'
# Expected: "Get Mega Pack &mdash; $97"

# $9 tripwire banner still at top?
curl -s https://www.midastools.co/ | grep -c 'TRY FOR \$9'
# Expected: >= 1

# All payment links healthy?
python3 .founder/tools/audit-payment-links.py
# Expected: 0 broken (or only known-acceptable warnings)
```

If any of these fail, **fix before shipping the launch post**. A great blog post pointing at a broken Stripe link converts at 0%.

---

## Anti-patterns (do NOT do these)

1. **Don't replace the hero SKU** with a launch-day SKU. The Mega Pack is what converts cold buyers; a launch-themed page is a *content* asset, not a *checkout* asset.
2. **Don't add /ai-audit CTAs** to launch posts. Model-launch search traffic is "I want to try the new model" intent. They are NOT buying a $997 consulting service. They buy a $29 prompt pack to play.
3. **Don't pivot the homepage** to a launch-themed hero. The compounded SEO inventory is the long-lived asset; a launch-themed homepage decays in 14 days.
4. **Don't write 4,000-word posts.** Aim for 1,200-2,000 words with 8-12 copy-paste prompts. Most readers want the prompts, not the prose.
5. **Don't pre-write a launch post weeks in advance** with placeholder model names. Search demand keys on the actual launch news cycle; pre-written posts feel canned.
6. **Don't push to Reddit on launch day.** Per `feedback_social_media_failed`, Reddit/X posting doesn't move our needle. Stick to organic SEO + gist + Dev.to.

---

## What to measure after each launch run

Per the testable hypothesis from the Apr 29-May 2 investigation:

| Metric | Healthy signal | Window |
|---|---|---|
| Blog post indexed in GSC | within 7 days | T+7 |
| Blog post impressions | 30+ | T+14 |
| Cold sales attributed to launch | 1-3 | T+0 to T+7 |
| Email subs from `utm_campaign={model}-launch` | 5-15 | T+0 to T+14 |
| Track-blob `referrer_host` mentions | spike in `news.ycombinator.com`, `chatgpt.com`, search engines | T+0 to T+3 |

If 0 sales AND 0 subs AND 0 referrer spike by T+7, the **audience-product-fit hypothesis is the bottleneck, not the play.** Do not re-run this playbook chasing a broken funnel — fix the funnel first.

---

## Files

- This playbook: `.founder/playbooks/model-launch-response-playbook.md`
- Blog template: `.founder/playbooks/model-launch-blog-template.md`
- Sanity check refresh: re-run the curl commands above before every launch
- Reference post (the one that worked, Apr 22 Claude Opus 4.7): `pages/blog/claude-opus-4-7-prompts-guide-2026.js`
- Reference gist (companion to the blog post): gist #13 `ccef0727859f8fa765822747a42f979b`
