# Weekly SEO/AEO Content Cadence

**Authored:** 2026-05-21 (after 18-day gap audit; Vittoria buyer found us via organic SEO on Ramp playbook post)
**Goal:** Ship 1 SEO+AEO-optimized blog post per week, on B2B AI adoption topics, using the proven Ramp pattern.

## Why this exists
- 47 days of zero conversion → Vittoria (May 20) found us via organic Google on `/blog/ramp-ai-adoption-playbook-2026`. She IS our ICP (VP People at Juniper Square rolling out JunieAI). She bought $49 then refunded — but the **acquisition path validated**.
- Every other paying customer (Arnaud, Shantae, George) one-clicked from cold Stripe Link with no detectable content touchpoint.
- The only channel proven to surface real B2B buyers is **SEO/AEO citation posts on enterprise AI adoption topics**.
- Sporadic publishing (Apr Dev.to push, May 7 Stripe Sessions pair) had no consistent ranking lift. Weekly cadence compounds.

## The winning template (lifted from `/blog/ramp-ai-adoption-playbook-2026`)

| Element | Specification |
|---|---|
| **Title** | Named entity + eye-popping public number + year. Example: "Ramp Made 99.5% of Employees AI Power Users — Here's the Playbook" |
| **Slug** | kebab-case, year suffix, descriptive. Example: `/blog/ramp-ai-adoption-playbook-2026` |
| **Word count** | 2,000-2,500 words. Skimmable with H2/H3, tables, callout boxes. |
| **Schema** | Article + FAQPage (5-7 questions). FAQ questions written as natural-language queries someone would ask ChatGPT/Google. |
| **AEO optimization** | Each FAQ answer is a complete 2-4 sentence response that a citation engine could lift verbatim. Include named entities. Include specific numbers. |
| **Updates block** | "MMM 2026 update:" block at top of body for time-sensitivity signal to Google. Update quarterly. |
| **Cross-links** | 2-3 internal links to related posts. Strengthens the topic cluster. |
| **CTA ladder** | $29 → $49 → $97. Three placements: top inline, mid hero callout, bottom CTA block. |
| **Sources line** | Bottom of post, small text. Lists publications and dates. Builds trust + AEO signal. |
| **Design** | Georgia serif body, `maxWidth: 720px`, color `#111827`, accent `#3B5FFF`. Match `ramp-ai-adoption-playbook-2026.js`. |

## ICP-fit topics (greenlit)
- Named-company AI adoption playbooks (Ramp, Shopify, Klarna, Duolingo, Anthropic, Stripe, Notion, Asana, GitHub)
- Specific public AI memos from CEOs (Tobi Lütke, Luis von Ahn, Tobias Lütke, Sam Altman, Mark Zuckerberg, Marc Benioff)
- Comparative case studies (3-5 companies side-by-side)
- "How X company uses Y AI tool" with specific numbers
- L0-L3 / proficiency-framework adjacent content
- Department-specific AI rollout playbooks (finance, HR, sales, ops, eng)
- AI agent / Claude Code / coding-agent case studies
- ROI/productivity metrics from public sources

## ICP-NOT-fit topics (reject)
- Anti-AI sentiment / backlash content (HN-trending controversy) — doesn't convert
- "Is AI a bubble?" debate posts
- Generic "5 AI tips" listicles without named entities
- Consumer AI content (Yahoo/AOL audience already documented to NOT match $97 wallet)
- Politics / regulation deep-dives
- AI safety / alignment debates

## Monday research step (30 min, 09:00)
1. Run `python3 .founder/tools/trend-watch.py --top 10`
2. Run `WebSearch` for "enterprise AI adoption [current week] news" — look for: CEO memos, public adoption numbers, fresh case studies from Stratechery / The Information / Fortune / Forrester / MIT CDO Blog
3. Filter against ICP-fit list above. Reject backlash. Pick 1 with 5-14d ranking window.
4. Verify load-bearing claims via WebSearch — get exact quotes, dates, sources before writing
5. Log choice + sources in `.founder/STATE.md` Session entry

## Monday ship step (90-120 min, 14:00)
1. Create `pages/blog/<slug>.js` — clone `ramp-ai-adoption-playbook-2026.js` as scaffold
2. Replace: title, description, keywords, OG tags, Article schema, FAQPage schema (5-7 questions), body content
3. Verify ALL Stripe URLs are live: `4gMbJ0dgz4aJ1qkb46cMM0d` (Mega $29), `14A8wOdgz0Yx2uo5JMcMM0o` (Team $49), `bJe7sK0tNdLjgle0pscMM0b` (Bundle $97)
4. Add entry to `public/sitemap.xml` at priority 0.9 (top-of-list freshness signal)
5. Add entry to `pages/blog/index.js` posts array at TOP
6. Run `npx next build` — must be clean, no errors
7. Commit + push to main
8. After Vercel deploys (~2 min), verify HTTP 200 via curl
9. Submit IndexNow:
   ```
   curl -sX POST "https://api.indexnow.org/IndexNow" \
     -H "Content-Type: application/json" \
     -d '{"host":"www.midastools.co","key":"<from .founder/.indexnow_key or public/<key>.txt>","keyLocation":"https://www.midastools.co/<key>.txt","urlList":["https://www.midastools.co/blog/<slug>"]}'
   ```
10. Log to `.founder/STATE.md` Session entry with: slug, target search cluster, primary keyword, expected GSC indexing window (7-14d), one-week-from-now reminder to check impressions

## Friday retro step (5 min, 17:00)
- This week's post: GSC impressions = ? (will be ~0 in week 1, that's normal)
- Posts shipped 2+ weeks ago: any GSC impressions? Any clicks? Any Stripe conversions matching the topic?
- If 4+ weeks of posts show zero GSC impressions: STOP. Audit titles, schemas, ICP fit. Don't keep shipping into dark channels (per `motion-vs-progress` principle).
- Log to STATE.md

## Truth-audit (mandatory before publish)
Per the November 2025 lesson: count claims at source before writing them. Specifically:
- Any numeric claim (prompt counts, adoption %, employees, ROI) → grep the canonical source OR cite the public source
- Any CEO quote → must have source URL + date in the verification log
- Any Stripe URL → verify live with `curl -sI`
- Any plink URL → must match the canonical list in MEMORY.md

If you cannot verify, do not write the claim. Use language like "publicly reported" with a source, not a fabricated number.

## Kill criteria (review at Aug 21, 2026 — 3 months in)
- 12+ posts shipped on this cadence
- If 0 of them produced any Stripe conversion via UTM attribution AND 0 of them rank in top 20 for their target keyword cluster → channel is not working at our authority level, pivot strategy
- If 1+ produced conversion or ranking → double down, ship 2/week, expand topic cluster
