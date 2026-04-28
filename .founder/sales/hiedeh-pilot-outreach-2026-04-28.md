# Free DFY Pilot Outreach — Negar Tavassoli (REALTOR®, North Vancouver)
**Drafted:** 2026-04-28 (Session 132 — corrected after research miss)
**Status:** Drafted, NOT SENT — awaiting Armando approval
**Subscriber email of record:** `hiedeh@tavassoli.com`
**Real target:** Negar Tavassoli, REALTOR® at Sutton Group-West Coast Realty, North Vancouver BC

---

## ⚠️ Why this draft replaces the prior version

The Apr-28 04:00 UTC draft pitched her our $199 AI Content Month for a "personal-brand consultant" case study. That was wrong — `tavassoli.com` is the personal domain of Negar Tavassoli, a real estate agent/property manager at Sutton Group-West Coast Realty in North Vancouver BC. Hiedeh / Hayedeh is a Persian female first name — likely Negar's family member, alt-name, or team member sharing the family domain.

**Right service for a realtor:** $149 Listing Optimizer DFY (rewrites property listings with AI-optimized copy), not $199 Content Month.

**Right pitch surface:** Send to `hiedeh@tavassoli.com` (the email we have) but reference Negar's work directly. If Hiedeh isn't Negar herself, Hiedeh will forward.

---

## Send timing
Recommend Apr 30 morning (PT) — gives her 2 days separation from the broadcast she received Apr 28. **Do NOT send today.**

## Subject line options

1. ✉️ **"Free pilot: rewrite 3 of your MLS listings (in exchange for one favor)"** ← my pick
2. ✉️ "Hiedeh — quick offer for tavassoli.com (free listing rewrites)"
3. ✉️ "AI-rewritten listings, free this week, in exchange for a case study"

#1 is most specific to the actual realtor use case.

---

## Body (plain text)

```
Hi Hiedeh (and Negar, if you're the one reading this) —

I noticed you signed up to MidasTools a few weeks ago. Thanks for being
on the list.

I'll be direct: I run a small AI productivity company and we just
narrowed our focus to solo service professionals who'd benefit from
done-for-you content — agents like Negar are exactly who we built our
$149 Listing Optimizer service for.

What I'd like to do this week is build the work for free, in exchange
for one specific favor.

What you'd get (free, no strings):
  • 3 of your live MLS listings rewritten with AI-optimized copy
    (engagement-driven, SEO-friendly, before/after side-by-side)
  • 4 Instagram captions for your most recent property posts
  • A "neighborhood guide" blog post for one of your North Vancouver
    farm areas (drives long-tail SEO)
  • A short 1-page positioning brief: how your listings stack up
    against the top-3 agents in North Van by content quality

What I'd ask in return:
  • 5-minute reply with feedback — useful, not useful, what was off
  • If you're happy with the output, permission to use one rewrite
    (anonymized if you prefer) as a flagship case study on
    midastools.co/services
  • Total veto if you don't like the work

Why I'm doing this: we need ONE realtor case study before we can
honestly pitch this to other Lower Mainland agents. You're the right
shape — established practice at Sutton Group, real listings live now,
North Van market with bilingual reach. If the pilot works, my goal
would be to be worth $200/month to your practice in 6 months
(retainer for ongoing listing + content work, optional, no pressure).

If yes — just reply with a link to one of your live listings (or three,
if you have favorites) and we'll have it back to you in 48 hours.

If no — totally fine, the free generators and starter pack stay yours.

— Armando
hello@midastools.co
midastools.co/services

P.S. If you'd rather pass this to a colleague at Sutton who'd be a
better fit, I'd genuinely appreciate the intro. Same offer applies.
```

---

## Why this is calibrated this way

| Choice | Reason |
|---|---|
| "Hi Hiedeh (and Negar, if you're the one reading this)" | Acknowledges the domain ambiguity transparently, removes weirdness |
| References Sutton Group + North Van + Negar by name | Proves we did our research; not a mass blast |
| Specific deliverable: "3 live MLS listings + 4 IG captions + 1 neighborhood guide" | Concrete, not vague. She can visualize the value. |
| Mentions "bilingual reach" obliquely | Hints we know about the Iranian-Canadian buyer community in Vancouver — without overplaying it |
| "$200/month in 6 months" anchor | Signals real business intent, not a free-tier mining attempt |
| One-link reply ask | Lowest-friction commitment |
| P.S. asks for referral | Fallback value extraction even on a "no" |

---

## What we ship if she says yes

**Hour 1–2:** Pull her 3 live listings from REW.ca / Sutton MLS. Identify the property type, price point, key features.

**Hour 3–4:** Use prompts from our Mega Pack (specifically: "Real Estate Listing Rewriter" and "Hero Property Description") + Claude/GPT-4o to produce 3 rewrites, side-by-side with originals. Highlight changes in color.

**Hour 4–5:** Generate 4 IG captions with hashtag sets for her most recent IG posts (pull from `negartavassolipropertymanagement` FB feed if IG handle isn't visible).

**Hour 5–7:** Write a 1,200-word neighborhood guide for one of her farm areas (Lower Lonsdale, Edgemont, Deep Cove). Include 5 local landmarks, school catchment notes, transit, recent sale activity.

**Hour 7:** 1-page positioning brief comparing her listings to top-3 North Van agents by content quality.

**Hour 8:** Ship via email as Google Doc + ZIP. Include a Loom walkthrough (90 sec).

**Total cost:** 6-8 hours founder time, ~$10 in API tokens.

---

## ROI math

If she says yes + provides testimonial + permission to use case study:
- Real estate Plan B sub-vertical activates with proof
- /for-coaches gets first social proof block
- Plausible $200/mo retainer with Negar herself
- Foot in the door at Sutton Group North Van (50+ agents)

If she ghosts:
- We still own the deliverable (anonymize, use as marketing portfolio piece)
- 6-8 hours sunk, but assets reusable

If she declines:
- No cost beyond the email
- P.S. referral path may still produce value

---

## Send via

**Option A (recommended):** Manual send from `hello@midastools.co` Gmail/Resend interface — feels more personal than API.

**Option B:** API (URL-encoded subject + body):
```bash
curl -G "https://www.midastools.co/api/send-email" \
  --data-urlencode "key=mt-outreach-2026" \
  --data-urlencode "to=hiedeh@tavassoli.com" \
  --data-urlencode "subject=Free pilot: rewrite 3 of your MLS listings (in exchange for one favor)" \
  --data-urlencode "body=$(cat body.txt)"
```

**Option C (highest reply rate):** Send from Armando's personal Gmail rather than `hello@midastools.co`. Personal sender = less likely to be filtered as marketing.
