# Buyer-Radar — Freelancer Launch Plan (2026-06-01)

## The hard constraint
Armando won't do manual DMs / community posting ("it's your job to bring users"),
and past manual social posting failed for the old prompt-pack products. So the
plan must lean on **agent-buildable, durable distribution** — not a posting
treadmill. The audience (service freelancers) ≠ our current SEO audience
(art/prompt seekers), so we have to *earn* freelancer traffic, not borrow the list.

## What we're measuring (so this isn't motion-vs-progress)
- `buyer_radar_search` events in /api/track-events (the tool's core action — already instrumented)
- signups tagged `source: buyer-radar`
- $39 Pro Pass mints attributable to a Buyer-Radar session
- Kill criterion: <50 real searches in 30 days from non-owned traffic → distribution channel is wrong, rethink.

---

## Track 1 — SEO content engine (THE SPINE, agent-buildable, durable)
This is the same machine that already pulls ~10 signups/day — just aimed at
freelancers instead of art-seekers. No manual posting; it compounds.

1. **Cornerstone blog post:** "How to Find Freelance Clients on Reddit (2026) — the subreddits + the exact way to reply." Teaches the method, then the tool *does* the method. Targets real intent queries: "find freelance clients reddit", "where to find clients as a freelancer", "r/forhire how to get hired". Funnels to /buyer-radar. IndexNow on publish.
2. **Niche spin-off posts** (one per high-supply niche we verified): "Where YouTubers hire video editors", "Where small businesses hire logo designers", "Where founders hire Shopify devs." Each ranks for a buyer/freelancer long-tail and funnels to the tool pre-filled.
3. **On-page SEO** already done: /buyer-radar has WebApplication schema, FAQ, canonical, sitemap priority 0.9, changefreq daily.
4. **Gist** (#1 historical channel, 36% of traffic): a "Reddit client-finding cheatsheet" gist → /buyer-radar. Same playbook that works today.

> First move recommendation: ship the cornerstone post + 1 niche post this session/next. 7–14d to index, then it earns freelancer traffic on autopilot.

## Track 2 — One-time launch spikes (low manual effort, I draft 100%)
Each is a single publish action, not an ongoing grind. I prepare everything;
publish via Armando's click or browser session.
1. **Product Hunt** — "Buyer-Radar: find people hiring your service on Reddit, free." Maker comment + first-reply + assets drafted. Good for a traffic spike + a durable dofollow backlink that helps Track 1 SEO.
2. **IndieHackers** — "I built a free tool that finds Reddit posts of people hiring your service" + the real video-editing/logo screenshots. IH welcomes maker launches; freelancers + solopreneurs read it.
3. **r/SideProject / r/Entrepreneur (show-the-data post)** — NOT a "check out my tool" spam post. A "Here's what I found when I scanned Reddit for people hiring video editors this week" data post, tool linked as the how. Value-first survives mod filters.

## Track 3 — Build-in-public content (optional, needs an account)
Twitter/X + LinkedIn "I built this in a weekend, here's the live output" thread
with the real screenshots. I can draft; posting needs his session. Flagged
optional because his past social attempts underperformed — only worth it if he
already has any audience there.

---

## Honest expectations
- Track 1 is the real engine but slow (weeks to rank). It's the only thing that compounds without manual effort.
- Track 2 gives a fast but one-time spike + backlinks that accelerate Track 1.
- This audience genuinely uses the tool (validated), so the bottleneck is purely *getting freelancers to the page* — exactly what Track 1 solves the way our current SEO already works, just re-pointed.

## Recommended sequence
1. **Now:** ship cornerstone blog post + 1 niche post (Track 1.1/1.2) — agent-buildable, starts the durable engine today.
2. **This week:** prep Product Hunt + IndieHackers launch assets (Track 2) — publish when Armando's ready for a spike.
3. **Watch** `buyer_radar_search` + `source=buyer-radar` signups. If Track 1 posts start driving searches once indexed → double down on niche posts. If flat after indexing → the audience isn't reachable via our SEO and we revisit.
