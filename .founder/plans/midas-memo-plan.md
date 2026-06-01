# The Midas Memo — Weekly Newsletter + Tool-Discovery Engine (2026-06-01)

## Vision
A free weekly newsletter on **how real people are making money with AI this week**
— specific methods, real numbers, copy-able playbooks. It is three engines in one:
1. **Retention/trust** — gives our ~10/day signups a reason to stay (today they get a 7-email drip then fall off).
2. **Distribution** — each issue → a blog post → SEO → new subscribers (the loop feeds itself).
3. **R&D / demand-sensing** — the methods that get the most clicks tell us *which tool to build next*. No more guessing.

## Decisions (locked 2026-06-01)
- **FREE**, not paid. Monetize the tools (the $39 Pro Pass), not the newsletter. Revisit a paid "Pro Memo" tier only at ~1,000+ subs AND once Stripe subscription lifecycle is wired (currently only one-time payments work).
- **Newsletter weekly; new tool only when demand is proven** (a method running hot 2–3 weeks + real click engagement). Decoupled cadences. No weekly tool-spray.

## Cadence
- **Sunday:** I run the `midas-memo-research` workflow → 5 verified, current AI money-making methods + the week's tool-signal.
- **Monday:** auto-drafted issue sends via existing broadcast infra (`nurture.js` + Resend). Auto-cron or one-click.
- **Same day:** issue is cross-posted as a blog post (SEO compounding) + IndexNow.

## Issue format ("The Midas Memo #N")
1. One-line hook + the week's theme.
2. **5 ways people are making money with AI right now** — each: who it's for · a real example w/ numbers · how to start this week · source link.
3. **This week's Midas tool** — the MidasTools tool that helps with that week's hottest method (Buyer-Radar, Outreach Machine, etc.), with the $39 Pro Pass CTA.
4. **Tool we're considering building** — tease the demand-signal method; ask readers to reply/click if they want it (this IS the demand vote).

## The research → tool loop (the smart part)
- Every issue tags each method with a `tool_angle` (could MidasTools build a tool for this?).
- Track click-through per method (UTM per link).
- A method that ranks top-2 for clicks across 2–3 issues = **green light** to build that tool next.
- Result: every tool we build has pre-validated demand from our own audience.

## Monetization
- Each issue CTAs the **$39 Pro Pass** (unlocks every tool) + the specific tool matching that week's theme.
- The Pro Pass narrative becomes: "unlock every tool the Memo references."
- Future paid tier ("Pro Memo": done-for-you templates + premium tools) only post-scale + post-subscription-infra.

## Automation / ownership
- **Agent (me):** Sunday research workflow → draft issue → draft blog cross-post → wire the send. Fully agent-buildable.
- **Armando:** optional one-click approve before send (or fully auto via cron). No manual research/writing.

## Measurement & kill criteria
- Open rate, click rate per method, `source=memo` signups, Pro Pass mints attributed to a Memo CTA.
- Kill/rethink if after 6 issues: open rate <15% AND zero Pro Pass attribution AND no method clears the tool-signal bar.
- Win signal: a Memo-driven method clears the bar → we build the tool → it sells → the loop is proven.

## Build checklist
- [ ] `midas-memo-research` reusable workflow (Sunday research) — args: issue number + date.
- [ ] `memo` broadcast template in `pages/api/nurture.js` (renders issue, UTM-tagged links).
- [ ] Blog cross-post template (`pages/blog/midas-memo-N.js` pattern) + sitemap/IndexNow.
- [ ] Cron or one-click send path for Monday.
- [ ] Issue #1 shipped Monday.
