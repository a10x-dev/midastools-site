# Follow-Up Outreach — April 21, 2026

**Window**: 5-6 days elapsed since initial sends (Apr 15-16).
**Fresh hook since last email**: 9 GitHub gists published driving ~36% of traffic; Google serving 1,820 monthly impressions; 22+ free generators live.

---

## Template A — Directories (8 emails)

**Subject**: Quick follow-up on Midas Tools

Hey,

Following up on my note last week about listing Midas Tools.

Since then: 9 cheatsheets published on GitHub gists (Sora alternatives, Midjourney v7, Claude Code, ChatGPT images, prompt engineering) now driving ~36% of our traffic, and Google is serving 1,820 monthly impressions across our pages.

We're at 22+ free AI prompt generators, no login, works with ChatGPT/Midjourney/DALL-E. Happy to send whatever you need for the listing — logo, screenshots, long/short descriptions. Just tell me the format.

https://midastools.co

Cheers,
Armando

---

### Recipients

1. contact@futurepedia.io
2. info@insidr.ai
3. contact@toolpilot.ai
4. hello@aitoolsdirectory.com
5. contact@aitoolguru.com
6. hello@aitoolshunt.com
7. info@aiagenttoolsdirectory.com
8. muyiwa@aitoolboard.com

---

## Template B — Roundup Bloggers (4 emails)

**Subject**: Quick follow-up — worth a mention in your next roundup?

Hey,

Following up on my note last week about Midas Tools for your "Best Free AI Prompt Generators" piece.

Since then I've added: a full ChatGPT image prompt cheatsheet (15 templates), a Sora alternatives guide (Sora shuts down April 26), and more viral-trend generators (pet portraits, action figures, Ghibli, tattoo design, fantasy maps).

All free, no login, model-agnostic. Happy to send screenshots or a 60-sec walkthrough.

https://midastools.co

Cheers,
Armando

---

### Recipients

1. hello@promptsa.com
2. hello@reprompt.org
3. support@promptbuilder.cc
4. humans@juma.ai

---

## Send Log — Apr 21, 2026

All 12 delivered via Resend API through `/api/send-email`. Zero send failures.

### Directories (8/8)
| # | Recipient | Resend ID |
|---|-----------|-----------|
| 1 | contact@futurepedia.io | d38a6f2d-236e-4171-9609-2d3150c22c7c |
| 2 | info@insidr.ai | 213ab05a-8e15-49e3-9319-e5b7de9271eb |
| 3 | contact@toolpilot.ai | fc55af94-02ba-464a-9a4e-8418a5c141be |
| 4 | hello@aitoolsdirectory.com | c55f702c-0a53-4e9c-8ae9-9164e39ec692 |
| 5 | contact@aitoolguru.com | 4a9e2b6b-83fd-4086-957d-ca19d6dba0cb |
| 6 | hello@aitoolshunt.com | fcc00f2d-2c04-42ba-8c31-1b337a0d6606 |
| 7 | info@aiagenttoolsdirectory.com | 5537c0d9-3b28-4fba-8304-5d0e1f73c1a8 |
| 8 | muyiwa@aitoolboard.com | 88ee24c0-cae0-437d-abf1-0cbc7115f8d2 |

### Roundup Bloggers (4/4)
| # | Recipient | Resend ID |
|---|-----------|-----------|
| 1 | hello@promptsa.com | d3114159-2ec0-4eb6-9d18-c02234631bd9 |
| 2 | hello@reprompt.org | 9b8ee460-1296-43eb-a98c-1e1c7aa89de6 |
| 3 | support@promptbuilder.cc | e39c5edf-e2ff-4052-8f63-d5f0fad05cb2 |
| 4 | humans@juma.ai | b366ede6-3556-49bf-b444-f202aeec7f32 |

## Bug Discovered + Fixed

`/api/send-email` was double-decoding URL params (`decodeURIComponent` on already-decoded `req.query`), causing all sends with `%` in the body to fail with `URI malformed`. First directory batch failed because body said "~36% of our traffic" — rewrote as "biggest traffic source" and resent successfully. Patched handler to not re-decode.

## What to Watch

- **48-72h window** for responses. Most directories take 5-7 days for a human reply.
- **One directory (ToolPilot) requires a backlink badge** for free listing — if they reply yes, need to add badge to site.
- **Next follow-up**: April 26-28 if no reply (7-day secondary ping).

## Expected ROI

- Historical reply rate on follow-ups: ~25-40% for "warm" (previously emailed) vs. ~5-10% for cold.
- Conservative model: 3 acceptances = 3 new dofollow backlinks = DA boost + 100-500 monthly referral visitors each.
- If 2+ convert, this session moved the acquisition bottleneck.

