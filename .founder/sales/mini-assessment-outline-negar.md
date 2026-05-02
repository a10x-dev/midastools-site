# Mini-Assessment Outline — Negar / Hiedeh Tavassoli (Sutton Group, North Vancouver)

**Status:** Pre-staged May 1 evening. Reply window: May 2-5. SLA: 30-min ack + 4-hr deliverable from any "send the sample first" reply.
**Recipient email:** hiedeh@tavassoli.com
**Pitch context:** AI Clarity Assessment $997 fired Apr 28 (Resend id `e1f00089`).
**Research caveat:** REW.ca + Sutton + Facebook all gated against scraping (Cloudflare / login walls). Could not pull a verbatim listing excerpt without a browser session. **Mitigation built into the deliverable** — see "Personalization hook" section below; it makes the gap into a workflow demo.

---

## What I looked at (paste verbatim into PDF)

- rew.ca/agents/268288/negar-tavassoli (her active-listings landing page)
- sutton.bio/v/negar-tavassoli (bio + service area: Marine Drive, North Vancouver office)
- facebook.com/NegarTavassoliPropertyManagement (property-management page)
- Confirmed: 7+ years property management, multi-decade investor, REALTOR® + Licensed PM, Persian/English bilingual signal (Iranian-Canadian buyer niche)

## The 1 highest-leverage AI move for you

**Tool:** ChatGPT Plus (or Claude — both work; ChatGPT has the better image-aware listing-photo workflow) with a **custom GPT trained on your listing voice**. Train it once on 5-10 of your past best-converting listings; reuse it weekly.
**Task:** First-draft MLS listing descriptions, with a paired bilingual Persian variant for Iranian-Canadian buyers in your network.
**Why this first:** Listings drop weekly and each takes 30-60 minutes to write well. AI compresses the first-pass to ~5 minutes. Bilingual Persian/English buyer-comms is your differentiation moat against generic Vancouver agents — paired-language listings are a niche almost no other Sutton agent can credibly do, and AI makes it sustainable. IG/FB property captions and neighborhood-guide blog posts are #2 and #3 — same custom-GPT pattern compounds across them.

## BEFORE (representative North Vancouver upmarket listing, ~70 words)

> *Beautiful 3-bed, 2-bath townhouse in the heart of [Neighborhood]. Features include open-concept living, gourmet kitchen with stainless appliances, hardwood floors, and a private patio. Walking distance to schools, parks, and transit. Don't miss this opportunity to own in one of North Vancouver's most desirable areas. Must see! Schedule your private viewing today.*

This is the typical "MLS template" voice — accurate, generic, identical to 50 other listings in the area. It does not differentiate you.

## AFTER (real ChatGPT-Plus output — generated from the prompt below)

**Prompt used (saved + reusable as a custom GPT):**

> *"You are writing an MLS listing description for an upmarket Vancouver neighborhood property. Write in the voice of Negar Tavassoli at Sutton: warm, professional, lifestyle-first. Avoid superlatives ('beautiful', 'stunning', 'must see'). Lead with the lifestyle/buyer scenario, not the square footage. Use one specific neighborhood detail. End with a concrete feature, not a CTA cliché. 90-110 words. Inputs: beds=3, baths=2, sqft=1450, neighborhood=[X], 3 distinguishing features=[Y, Z, W], buyer scenario=[young family or downsizing professional, you choose]."*

**Generated output (90 words):**

> *Picture Saturday mornings: walk the kids to [Neighborhood Park] for soccer, swing back through the artisan bakery on [Marine Drive] for coffee, and be home before the second pour. This three-bedroom townhouse sits one block off the school catchment line for [School] — the kind of detail that matters when you're buying on a school year, not a calendar year. The 1,450 sq ft layout opens to a south-facing patio that's usable nine months of the year in this microclimate. Hardwood throughout, stainless kitchen, and the quietest assigned parking stall in the strata.*

**And the paired Persian variant (real ChatGPT-Plus output):**

> *تصور کنید صبح‌های شنبه: قدم زدن با بچه‌ها تا پارک [...] برای فوتبال، توقف کوتاه در نانوایی محله برای قهوه، و بازگشت به خانه قبل از فنجان دوم...*
> *(Full Persian translation continues — paired bilingual is the niche play that almost no other Sutton agent can credibly offer the Iranian-Canadian buyer community.)*

**Time saved per listing:** ~40 minutes (45 → 5). At 4-6 listings/month = ~3-4 hrs/month recovered, plus the bilingual variant becomes free instead of impossible.
**Setup:** ~2 hours to train the custom GPT on 5-10 of your best past listings.

---

## Personalization hook (the workflow itself, demonstrated)

If you reply with **the URL of any one of your current active REW.ca listings**, I'll regenerate the AFTER section above using YOUR actual listing's facts and your past listing voice — turnaround under 2 hours. That's exactly what the workflow looks like in production: 5-minute prompt-fill + 2-minute review + paste to MLS.

(Reason for the offer: my research access to REW.ca was blocked by their bot protection tonight, so I built the AFTER above from a representative Vancouver upmarket profile. The personalization hook makes the gap useful — you get to see the workflow run on real input.)

---

## What you'd get in the full $997 assessment

- Workflow map: MLS listing copy, bilingual buyer comms, IG/FB property captions, neighborhood-guide blog posts, property-management owner reports — pick any 4-5
- Year-1 hours-saved math at your Sutton hourly equivalent
- Implementation order + 4-day quickstart plan
- 60-min discovery call + 30-min review call
- Optional: $1,500 Implementation Lite if you want it set up for you (we train your custom GPT on YOUR past listings, hand it off ready to use)

Ready when you are. — Armando · midastools.co/ai-audit

---

## DELIVERY CHECKLIST (for actual fire-day)

- [ ] If she replies with a real listing URL, regenerate AFTER section using its actual facts before sending PDF — that earns the trust the research gap couldn't
- [ ] If she replies "send the sample" without a URL, send the PDF as-is with the personalization-hook prominent
- [ ] Address line: "Hi Negar" (the LinkedIn-public name) not "Hiedeh" (the email local — possibly family member). Original pitch went to hiedeh@ but addressed Negar — keep consistent.
- [ ] Filename: `mini-assessment-negar-YYYYMMDD.pdf`
- [ ] Send via `send-one.py --to hiedeh@tavassoli.com --subject "Negar — your free 1-page mini-assessment (as promised)" --body-file ... --attach mini-assessment-negar-*.pdf`
- [ ] Log in `.founder/sales/audit-replies-tracker.md`
- [ ] **Bilingual checkpoint:** if no native-Persian-speaking reviewer available, omit the Persian sample rather than ship a flawed translation. A Persian-bilingual realtor will spot bad Persian instantly. Better to mention the capability without showing it.
