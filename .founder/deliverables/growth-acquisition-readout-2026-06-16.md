# Growth Acquisition Readout + 2-Week 10x Plan — 2026-06-16

**Mandate (Armando, last pair session):** "for the next 2 weeks optimize for growth, 10x daily growth, monitor where our users are coming from."

This answers WHERE users come from (data) and HOW we attempt 10x (plan). Data: 600-event window / 4,605 stored, pulled 04:14 UTC Jun 16 via `/api/track-events`.

---

## 1. Where users come from — the honest readout

**Page-views by referrer (n=600):**

| Referrer | Views | Share | Read |
|---|---|---|---|
| (direct / referrer-stripped) | 506 | 84% | Dark social, typed URL, HTTPS→HTTP strip, mobile apps, brand recall |
| www.google.com | 45 | 7.5% | **#1 attributable channel** — our blog/tool SEO |
| gist.github.com | 11 | 1.8% | Historical #1 named channel, still live |
| link.edgepilot.com | 10 | 1.7% | Email-security scanner bot — NOT human |
| chatgpt.com / claude.ai / notebooklm / bing / brave / yandex | ~8 | 1.3% | **AI-search + search citations, emerging** |
| vercel.com | 2 | — | our own deploy previews |

**Signups this window: 15. Acquisition attribution on signups: ZERO.**
- 11/15 converted on the homepage `/`, the rest on kit pages (mega-pack, notion-kit, email-kit, content-creator-kit).
- All 15 carry empty `referrer_host` + empty `utm_source`.
- **Why:** they're genuinely direct-to-homepage (brand traffic), AND a homepage landing was producing an empty `landing_slug` (now fixed — see §3).

**Top landing surfaces by traffic (the SEO engine):** soul-generator (22), ghibli-prompts blog (21), listing-machine (19), notion-kit (18), chatgpt-coding-prompts (18), ai-art-generator (16), content-creator-kit (14), outreach-machine (13), prompt-scorer (11), accountants/repurposing/prompt-engineering blogs (8 each).

---

## 2. Diagnosis — what 10x actually requires

1. **84% of traffic is direct/dark. You cannot "scale" direct** — it's the residue of all prior content + word-of-mouth landing without a referrer. Pouring effort into "monitoring direct harder" is a dead end.
2. **The only attributable, scalable channels are SEO (Google), gist, and AI-search citations** — together ~11% of measured traffic but they ARE the levers we can dial.
3. **The homepage is the conversion engine** — most signups convert there regardless of entry channel. More traffic of any kind → more homepage signups.
4. **Reality check on "10x in 2 weeks":** 15→150 signups/day from organic content alone in 14 days is not realistic — SEO compounds over 4-12 weeks, not days. The only channels that can 10x in 2 weeks are **paid distribution or a viral mechanic**. Organic content scale-up is the durable lever; it won't 10x by itself in the window.

---

## 3. Shipped this session
- **`lib/stripe-attribution.js`** (commit `d318d34`, pushed, build clean): homepage landings now record `landing_slug='home'` instead of empty. Closes the gap where homepage-direct signups were indistinguishable from missing attribution. Every signup from now on is at minimum tagged by its true entry surface. Reversible 1-line change; doesn't touch flywheel, memo, or pricing.

---

## 4. The 2-week plan

### Lever A — Organic content velocity (I own this, autonomous)
The proven playbooks (gist-publishing, two-surface gist+blog, trending-SEO-post) feed Google + gist + AI-search — the only attributable channels. The Monday weekly ritual becomes a **near-daily** cadence for the sprint: ship 1 SEO/AEO surface per working day targeting a forming search/AI-citation cluster, two-surface (gist + blog), UTM-tagged. Expect the lift to land in week 3-4 (SEO lag), not within the 2 weeks — but it's the durable compounding base.

### Lever B — Paid/viral (Armando's call — the only realistic in-window 10x)
The cheapest test of a 10x channel is a small paid promoted post (Reddit r/ChatGPTPromptGenius / art subreddits, ~$50) or a viral free-tool share mechanic on the Art Machine. **This needs Armando's budget green-light.** Without it, "10x in 2 weeks" is a stretch the organic lever can't hit alone.

### Lever C — Attribution hygiene (I own this, low-effort)
Ensure every inbound link we control (gists, blog CTAs, AI-citation pages) carries `utm_source` so the next 2 weeks of signups are channel-attributable. Homepage fix done; sweep gist/blog UTM coverage next.

---

## 5. Strategic coherence with the LIST-monetization strategy
Growing the list IS aligned: the memo (`memo_art_money`, fired Jun 15) monetizes the warm list. A bigger list = larger absolute memo method-CTR + sell-path/affiliate revenue. So a 2-week growth push directly feeds the one live monetization lever. (Memo kill-read still pending — verdict ~14:00 UTC Jun 16; trending PASS at 3.92% as of T+8h.)

## 6. The one decision for Armando
**Green-light a ~$50 paid distribution test (Reddit/art-subreddit) — yes/no?** It's the only lever that can plausibly move daily signups within the 2-week window. Organic content I'll scale regardless; it just won't 10x inside 14 days on its own.
