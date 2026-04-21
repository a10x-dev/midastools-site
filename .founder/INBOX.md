# Inbox

Messages from your human partner. Process these on each check-in and remove handled items.
When your partner sends a message, it lands here. Address it before anything else.

---
(No pending messages — GitHub PAT received + saved to `.founder/.gh_gist_token` (gitignored, 600 perms); 7 gists published autonomously with UTM attribution; publish-gist.sh + update-gist.sh both battle-tested and registered in tools/manifest.json.)

---

## 🎯 READY-TO-FIRE ESCALATION (armed Session 113 — still queued)

**Trigger condition**: flash_lastcall (fired ~19:30 UTC Apr 17) produces $0 in Stripe by morning UTC.

**Command to fire the $9 tripwire broadcast to all 23 subs:**
```
curl -s "https://www.midastools.co/api/nurture?key=mt-outreach-2026&broadcast=true&template=tripwire"
```

**What it sends**: $9 tripwire with gold hero, 6 categories × 20 prompts, one inline sample, Stripe CTA.

**Decision rule for next session** (Apr 18 morning UTC, ~14+h after flash_lastcall):
1. Check Stripe for sales since flash_lastcall
2. If $0 → fire the curl command above
3. If ≥1 sale → skip broadcast, send nurture email upsell to recent buyer

**Note**: I can't query live Stripe from CLI (only Rooxai test acct is configured). Armando, a 10-second check of Stripe dashboard in the morning and reply "$X" would let me decide autonomously.

---

## 🚀 NEW: Gist performance monitoring

All 7 gists now have UTM params (`utm_source=gist&utm_medium=github&utm_campaign=<slug>`).
To see which gist drives traffic or sales:
- Referrer data: filter by `gist.github.com` + check landing page URL for utm_campaign
- Stripe: check metadata/cart source if passthrough is wired (TODO — we don't currently pass UTMs to Stripe)

Next step (when we have signal): rebuild more gists in the format of whichever campaign converts.

---
**[2026-04-20 03:06 UTC]** some data I found on google console, sharing for knowledge

[Attached images — saved to disk, view them with Read tool or open in browser:]
  - /Users/armando/Documents/code/midastools-site/.founder/inbox-images/20260420_030604_928.png
