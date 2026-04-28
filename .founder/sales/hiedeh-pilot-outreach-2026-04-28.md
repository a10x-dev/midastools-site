# Free DFY Pilot Outreach — Hiedeh @ tavassoli.com
**Drafted:** 2026-04-28 (Session 132, post-pivot ship)
**Status:** Drafted, NOT SENT — awaiting Armando approval
**Why her:** Personal-brand consultant (custom domain `tavassoli.com`) = strongest coach/consultant fit in our 20-sub list. She just received the coach_pivot broadcast (~03:20 UTC).

---

## Recommended send timing
Wait 24–48h after the broadcast lands so she has time to read it, then follow with this personal note. Sending immediately back-to-back can feel pushy.

**Suggested fire window: Apr 30 morning (US Eastern) — Wed midday.**

## Send via
`GET /api/send-email?key=mt-outreach-2026&to=hiedeh@tavassoli.com&subject=...&body=...` — or send manually from your `hello@midastools.co` inbox if you want truly 1:1 vibes.

---

## Subject line options (pick one)

1. ✉️ **"Hiedeh — quick honest pitch (free month of content for tavassoli.com)"**
2. ✉️ "Free 30 days of content for tavassoli.com — in exchange for one favor"
3. ✉️ "Built this for solo consultants like you — want to be our flagship?"

I'd send #1. Honest, named, specific, low-key.

---

## Body (plain text — Resend wraps in basic HTML)

```
Hi Hiedeh,

You signed up to MidasTools a few weeks ago — thank you. I sent the
broader founder note to the whole list yesterday (the one about going
all-in on coaches and consultants). This is a more personal one, just
to you.

Quick context: of the people on our subscriber list, you're one of
maybe 5 who actually fit the niche we're now building for —
solo consultants/coaches who sell expertise, not products.

So I want to make you a direct offer:

We'll build you our $199 "AI Content Month" package — completely free —
in exchange for 3 things:

  1. A 5-minute intake call (or async form, your call) so we can build
     it right
  2. Honest feedback on the deliverable when it lands
  3. Permission to use the work as our flagship case study (your name +
     a brief quote, only if you're happy with the output — total veto
     otherwise)

What you'd get inside the Content Month:
  • 10 LinkedIn posts + 10 IG captions + 10 Twitter posts (your voice,
    your audience)
  • 4 newsletter editions
  • Brand voice cheat sheet
  • Posting calendar with optimal times

Turnaround: 48 hours from intake.

Why I'm doing this: I need a real consultant case study before I can
sell this honestly to other consultants. You're the right shape —
established personal brand, solo, exactly the customer we want to be
worth $1,500/month to in six months.

If you're in, just reply with one word and I'll send the intake. If
you're not — totally fine, the $9 starter pack and free tools stay
yours forever.

— Armando
hello@midastools.co
midastools.co/for-coaches

P.S. If you have a friend/peer who's a better fit for this and you'd
rather pass it along, I'd genuinely appreciate the intro. Same offer
applies to whoever you send.
```

---

## Why this email is calibrated this way

| Choice | Reason |
|---|---|
| Personal first line referencing the broadcast | Stops her thinking "another mass email" — proves human |
| "Maybe 5 of you fit" | Honest scarcity, not fake urgency |
| 3 specific asks (call, feedback, permission) | Removes ambiguity about what "free" costs her |
| Total veto on case study | Removes the "what if it sucks" objection |
| "Worth $1,500/month to in 6 months" | Anchors the future relationship — signals we're building a real business, not free-tier mining |
| One-word reply ask | Lowest friction commitment |
| P.S. asks for referral | Even on a "no", we extract value |

---

## What we ship if she says yes

**Hour 1–2:** Intake call/form (5 min for her). Capture:
- Her exact ICP
- 5 client wins to reference
- Her best transformation story
- Voice samples (3 pieces of her existing content)
- 90-day business goal

**Hour 3–48:** Build deliverable.
- 10 LinkedIn (hook + body + CTA, 1500 chars optimized)
- 10 IG (caption + hashtags + carousel structure where relevant)
- 10 Twitter (5 threads + 5 singles)
- 4 newsletter editions (subject + body, 600-900 words each)
- Brand voice cheat sheet (1-pager)
- Posting calendar (when to post each piece)

**Hour 48:** Ship via email as Google Doc + ZIP. Ask for feedback.

**Hour 72–96:** Iterate based on feedback (1 round included per /services policy).

**Week 2:** Pull testimonial + case study. Publish on /for-coaches as social proof for next 100 visitors.

---

## Cost / risk

**Time cost:** 6–10 hours founder time (mostly AI-assisted with strong human polish).
**Money cost:** ~$15 in API tokens.
**Risk:** She says yes but ghosts on feedback. Mitigation: deliverable still has external value as marketing material even without her case study.
**Upside:** First real DFY case study + testimonial + logo on /for-coaches + plausible $1,500/mo ongoing relationship.

ROI math: If 1 in 10 visitors who see her case study converts at $97 (Mega Pack), and the case study drives an extra 50 visitors/mo → $485/mo incremental revenue from this pilot alone. Plus retainer optionality with Hiedeh herself.

---

## If Armando wants to send via API

```bash
# Replace SUBJECT and BODY with URL-encoded versions
curl -X GET "https://www.midastools.co/api/send-email?key=mt-outreach-2026&to=hiedeh@tavassoli.com&subject=Hiedeh%20%E2%80%94%20quick%20honest%20pitch%20(free%20month%20of%20content%20for%20tavassoli.com)&body=Hi%20Hiedeh%2C%0A%0AYou%20signed%20up%20to%20MidasTools..."
```

Or just paste the plain-text body into Gmail and send from `hello@midastools.co`.
