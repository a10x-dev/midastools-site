# Rank existing surfaces by organic landings before shipping another one

Purpose: Prevent shipping the Nth clone of a content pattern whose first N-1 instances have never been measured

When to use: /page pattern you have shipped before (a niche landing page, another gist, another blog post in a "cluster"), and you have NOT measured the organic performance of the existing instances. This is the bricks #1–#6 trap: five pages, four hours, zero Google landings, discovered three weeks too late.

---

When to use: You are about to ship another instance of a content/page pattern you have shipped before (a niche landing page, another gist, another blog post in a "cluster"), and you have NOT measured the organic performance of the existing instances. This is the bricks #1–#6 trap: five pages, four hours, zero Google landings, discovered three weeks too late.
---
1. STOP. Do not open the template file yet.
2. Run the funnel read segmented by surface:
`python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --days 14`
3. Rank existing instances of the pattern by **Google organic landings**, not by pageviews. Pageviews include direct/junk/leaked-link traffic and will flatter a dead page. `attribution.referrer_host` ending in `google.com` is the only qualified stream.
4. Apply the gate:
- Any instance with **>10 organic landings** → the pattern works. Ship another, or better, improve the winner.
- **All instances at 0 organic landings**, and the oldest is >21 days old → the pattern does NOT work. Shipping another is motion, not progress. Do something structurally different instead.
- Oldest instance <21 days old → too early to judge. Do not ship another *and* do not conclude failure; set a read date.
5. If a single instance ranked and then decayed, check whether it is a new-content honeymoon (ranked ~2 weeks, then fell). A honeymoon is NOT proof the pattern works — re-measure the same page 3+ weeks after publication before generalizing.
6. Write the ranked table into the session output before shipping anything. If you cannot produce the table, you have not earned the right to ship instance N+1.
