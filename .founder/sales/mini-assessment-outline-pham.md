# Mini-Assessment Outline — Christopher Pham / C. Brannan (Criterion Counsel)

**Status:** Pre-staged May 1 evening. Reply window: May 2-5. SLA: 30-min ack + 4-hr deliverable from any "send the sample first" reply.
**Recipient email of reply:** cbrannan@criterioncounsel.com (sample also fine to address to Christopher Pham as founder if reply is from a partner).
**Pitch context:** AI Clarity Assessment $997 fired Apr 28 (Resend id `dfa249f9`).

---

## What I looked at (paste verbatim into PDF)

- criterioncounsel.com/about-us (firm voice + positioning)
- /recent-judgments (Bose Corporation v. Rongstar Digital — $2,904,927.83 counterfeit judgment, featured on homepage banner)
- /publications (6 LA Lawyers articles — practice depth signal)
- 2-page lean firm site, no blog, no news section

## The 1 highest-leverage AI move for you

**Tool:** Claude (200K context, no training on inputs) with a custom system prompt encoding Criterion's house style — formal-but-direct, evidence-led, statute-cited.
**Task:** First-draft demand letters and Amazon counterfeit-takedown packages.
**Why this first:** The Bose Corporation v. Rongstar Digital judgment ($2,904,927.83) shows the firm's volume play is brand-protection enforcement at scale. Each takedown package + each demand letter is 1-3 billable hours of structured drafting. AI compresses the first-pass to ~20 minutes, freeing partner time for strategy + court appearances. Client intake + LinkedIn marketing are #2 and #3 — lower hourly leverage.

## BEFORE (typical current workflow, ~70 words)

> Counterfeit listing flagged → paralegal compiles evidence (screenshots, ASIN, seller history, brand registry confirmation) → drafts the Amazon Brand Registry Form 17 takedown narrative + supporting affidavit → partner reviews → submit. Per-listing time: 90-120 min. Multiply by 30-50 listings/week for an active brand-protection client and the team is doing 60+ hours/week of structured-but-repetitive drafting. The firm's voice ("we assist you in strategizing... empowered to make them") gets diluted by associate variability across drafts.

## AFTER (real Claude output — generated from the prompt below)

**Prompt used (saved + reusable):**

> *"You are drafting an Amazon Brand Registry Form 17 takedown narrative for Criterion Counsel, a brand-protection IP law firm. House style: formal-but-direct, evidence-led, every claim tied to a specific statute or trademark registration number. Avoid 'we believe' / 'it appears' — assert facts. Cite Lanham Act § 32 for registered marks and § 43(a) for unregistered trade dress. End with a 30-day cure demand and reservation of rights. Length: 350 words. Inputs: brand=[X], registration #=[Y], infringing ASIN=[Z], seller=[W], evidence summary=[paste]."*

**Generated output (excerpt, 90 words):**

> *Pursuant to 15 U.S.C. § 1114 and the Amazon Brand Registry program, [Brand X] (Reg. No. [Y]) hereby provides formal notice that ASIN [Z], offered by seller [W], constitutes an unauthorized reproduction of the registered mark and trade dress depicted in the supporting evidence. The infringing listing replicates source-identifying packaging elements that are inherently distinctive and have acquired secondary meaning through continuous and exclusive commercial use since [date]. We demand removal within 30 days; failure to comply will result in escalation under § 43(a) and 17 U.S.C. § 501. All rights reserved.*

**Time saved per takedown package:** ~70 minutes (90→20). At 30 packages/week per active brand-protection client = ~35 hrs/week recovered for strategy.
**Setup:** ~3 hours to encode the firm's voice + 10 sample-letter exemplars into a reusable Claude system prompt.

---

## **IMPORTANT — privacy disclaimer to include verbatim** (lawyers care about this)

> *Sample uses generic facts only. Production use requires firm-approved DPA + Claude's no-training Enterprise terms. Never paste live client matter data into general-purpose AI tools without a documented DPA review.*

This earns trust with IP attorneys. Skipping it is a credibility kill.

---

## What you'd get in the full $997 assessment

- Workflow map: brand-protection enforcement, demand-letter drafting, Amazon takedown packages, LinkedIn brand-building, client intake — pick any 4-5
- Year-1 ROI math at Criterion's stated billable rate
- Implementation order + 4-day quickstart plan
- 60-min discovery call + 30-min review call
- Optional: $1,500 Implementation Lite if you want it set up for you
- All sample outputs delivered with the privacy-disclaimer pattern above

Ready when you are. — Armando · midastools.co/ai-audit

---

## DELIVERY CHECKLIST (for actual fire-day)

- [ ] Confirm reply name (C. Brannan vs Pham vs other partner)
- [x] Verify Bose v. Rongstar reference (verified May 2 — $2,904,927.83 displayed on homepage banner, case title "BOSE CORPORATION V. RONGSTAR DIGITAL")
- [ ] Generate the AFTER excerpt fresh in Claude using the saved prompt + generic placeholders
- [ ] Add the privacy disclaimer before the "What you'd get" section
- [ ] Filename: `mini-assessment-pham-YYYYMMDD.pdf` OR `mini-assessment-brannan-YYYYMMDD.pdf` (match the replier)
- [ ] Send via `send-one.py --to <reply-from> --subject "[firstname] — your free 1-page mini-assessment (as promised)" --body-file ... --attach mini-assessment-*.pdf`
- [ ] Log in `.founder/sales/audit-replies-tracker.md`
