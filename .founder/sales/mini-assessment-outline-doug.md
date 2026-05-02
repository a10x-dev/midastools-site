# Mini-Assessment Outline — Doug Courter (Valley Grace Brethren Church)

**Status:** Pre-staged May 1 evening. Reply window: May 2-5. SLA: 30-min ack + 4-hr deliverable from any "send the sample first" reply.
**Recipient email:** pastordoug@valleygrace.net
**Pitch context:** AI Clarity Assessment $997 fired Apr 28 (Resend id `887ad3cf`).
**Tone reminder:** Tech-literate, no condescension. He's an adjunct IT instructor at 2 community colleges — he already understands models, context windows, and prompt engineering. Don't oversimplify. Treat him as a peer who happens to also be a pastor.

---

## What I looked at (paste verbatim into PDF)

- valleygrace.net (church, service times, Charis Fellowship denomination)
- sermonaudio.com/speakers/6992 (Doug's preaching archive)
- Recent expositional sermons including:
  - "Is Life Safe?" — Ecclesiastes 10 (Jul 13 2025)
  - "Thoughts about Death and the Power of One Decision" — Ecclesiastes 9 (Jul 6 2025)
  - "Ultimate Self Control" — Matthew 27:1-44 (Apr 6 2025)
- Preaching pattern: book-by-book expositional through Ecclesiastes (he's working chapter-by-chapter through wisdom literature)
- Side gigs: adjunct IT @ Hagerstown CC + Blue Ridge CC, Three-Strands missions board president + database admin

## The 1 highest-leverage AI move for you

**Tool:** Claude (200K context window — fits a full Ecclesiastes commentary + cross-references in one prompt) with a saved sermon-prep prompt sequence keyed to your verse-by-verse expositional style.
**Task:** First-draft sermon outline + cross-reference research for your current Ecclesiastes series.
**Why this first:** You're in a multi-week book study, so the sermon-prep workflow is the recurring weekly investment — likely 8-12 hours/sermon. AI compresses the research + outline-draft phase to ~90 minutes, leaving more time for the parts only a pastor can do (application, illustration, congregational fit). Three-Strands missions newsletters + IT class lecture prep are #2 and #3, but sermon prep is the highest-volume recurring task.

## BEFORE (typical current sermon-prep workflow, ~70 words)

> Open Bible to next chapter (Ecclesiastes 11 if continuing the series) → read in Hebrew + 2-3 English translations → consult 3-4 commentaries (likely a Brethren-tradition commentary + a critical-scholarly one + a homiletical one) → cross-reference with related wisdom literature (Job, Proverbs) and NT echoes (James 4:13-17 for Eccl 11) → draft 30-min outline with 3 movements → identify 1-2 illustrations from current life or congregation → revise across the week. Total: 8-12 hrs.

## AFTER (real Claude prompt sequence — saved + reusable)

**Step 1 — Theological themes (run once per chapter):**

> *"You are studying Ecclesiastes 11 for an expositional sermon to a Charis Fellowship (Grace Brethren) congregation in Hagerstown MD. The pastor preaches verse-by-verse and just finished Ecclesiastes 10. Identify the 3 main theological themes a Brethren-tradition congregation would benefit from this week. For each theme, cite (a) the verses in Ecclesiastes 11 where it appears, (b) one OT cross-reference, (c) one NT cross-reference showing fulfillment or contrast, (d) one common misreading to correct."*

**Step 2 — 30-min sermon outline:**

> *"Draft a 30-min expositional sermon outline on Ecclesiastes 11 in this structure: (1) hook (60-90 sec, current-life angle, no politics), (2) text exposition movement A on vv. 1-2 — the 'cast bread upon the waters' principle, (3) movement B on vv. 3-6 — diligence under uncertainty, (4) movement C on vv. 7-10 — youth and judgment, (5) application paragraph for a small-town MD congregation in 2026. Tone: warm but direct, no fluffy filler, assume biblical literacy."*

**Step 3 — Cross-reference deep-dive:**

> *"For movement B above, give me 4 NT passages that develop the 'sow in the morning, withhold not your hand in the evening' wisdom theologically — prioritize Pauline epistles and James. For each, note how a Brethren-tradition pastor might harmonize with the Reformation distinctive on works/faith without slipping into legalism."*

**Step 4 — Illustration sourcing:**

> *"Suggest 2 illustrations from current events (last 30 days) that reinforce movement B without being political. One from technology/business (something an IT instructor would find familiar), one from local Mid-Atlantic life. 2-3 sentences each."*

**Time saved per sermon:** ~4-6 hrs (12 → 6-8). At ~40 sermons/year = 160-240 hrs/year recovered. **Setup:** ~1 hour to refine the prompt sequence to your voice + tradition.

---

## Bonus track for the IT instructor in you

The same Claude system prompt pattern works for **community-college lecture prep** — give it your syllabus + the next module's learning objectives + your textbook, get back a lecture outline in your voice in ~10 minutes vs ~90.

And for **Three-Strands missions newsletters**: give it the month's field updates + a target audience, get back a 600-word newsletter draft in ~5 minutes vs ~60.

The full $997 assessment maps these too, with implementation order.

---

## What you'd get in the full $997 assessment

- Workflow map: sermon prep, weekly bulletins, missions newsletters, IT lecture prep, Three-Strands database admin — pick any 4-5
- Year-1 hour-recovered math at your stated workweek
- Implementation order + 4-day quickstart plan
- 60-min discovery call + 30-min review call
- Optional: $1,500 Implementation Lite if you want it set up for you
- All saved prompts delivered as a personal Claude project, ready to use Sunday morning

Ready when you are. — Armando · midastools.co/ai-audit

---

## DELIVERY CHECKLIST (for actual fire-day)

- [ ] Verify Doug's current sermon series — if he's already past Ecclesiastes by May, swap to whatever's current (check sermonaudio.com/speakers/6992 the morning of)
- [ ] Generate the Step-1 + Step-2 outputs FRESH in Claude with the actual current passage so the AFTER is real, not a template
- [ ] Filename: `mini-assessment-doug-YYYYMMDD.pdf`
- [ ] Send via `send-one.py --to pastordoug@valleygrace.net --subject "Doug — your free 1-page mini-assessment (as promised)" --body-file ... --attach mini-assessment-doug-*.pdf`
- [ ] Log in `.founder/sales/audit-replies-tracker.md`
- [ ] **Tone check before send:** read it aloud. If anything sounds like ChatGPT-pastor-cosplay, rewrite. He'll spot it.
