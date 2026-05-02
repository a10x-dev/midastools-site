# Reply-Handling Playbook — Audit Pitch Replies (May 1-15)

**Purpose:** When any of the 3 audit-pitch prospects (Hiedeh, Doug, Pham) replies — or when follow-ups May 6/8 reply — fire the matching template within 30 minutes.
**SLA commitment:** Acknowledge within 30 min. Deliver any promised free sample within 4 hours.
**Why 30 min:** Reply-rate research shows engagement decays sharply after first hour. The buyer is in the moment; we ride that moment or lose it.

---

## How to use this playbook

1. Reply lands in iam@armando.mx
2. Read the reply. Match to one of the 5 reply-types below.
3. Copy the matching template, fill the `[brackets]`, send via Resend (existing `.founder/tools/send-pitches.py` pattern, edit the `PITCHES` dict for one-off send).
4. If the reply demands a free sample → fire `mini-assessment-template.md` filled in for that prospect, deliver as 1-page PDF within 4 hrs.
5. Log the outcome in `.founder/sales/audit-replies-tracker.md` (create on first use).

---

## Reply Type A — YES, INTERESTED (commits to buying or wants to talk)

**Signals:** "Yes let's talk", "Send me the link", "How do I pay?", "Let's get on a call"

**Goal:** Move to Stripe checkout OR a discovery call within 24 hrs.

**Template:**

```
Hi [first name],

Glad you want to move forward.

Two ways we can do this:

1. **Pay now, kick off this week.** Stripe link:
   https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03
   You'll get a 12-question intake immediately. Discovery call within 48 hrs of payment.
   Fully refundable until our call starts.

2. **15-min discovery first.** Pick a time:
   [LINK TO CAL.COM OR CALENDLY]
   No pre-pay required. We talk through your situation, and you decide.

Most clients pick option 1 because the call is included anyway.

— Armando
midastools.co/ai-audit
```

**Fallback if no scheduling tool live:** offer 3 specific times in their timezone ("Wed 3pm PT, Thu 11am PT, Fri 9am PT").

**After-send:** create a calendar block + intake-prep doc.

---

## Reply Type B — SEND THE SAMPLE FIRST

**Signals:** "Send the sample", "Yes I want to see the before/after", "Show me what you'd do for me"

**Goal:** Deliver 1-page personalized PDF within 4 hrs that demonstrates we did real work on their business.

**Template (acknowledgment, send within 30 min):**

```
Hi [first name],

On it. You'll have a 1-page sample in your inbox within 4 hours.

What you'll get specifically:
- [For Negar: Three before/after MLS rewrites pulled from your actual recent listings]
- [For Doug: A sermon-prep prompt sequence for [a specific upcoming sermon topic if visible on Valley Grace site]]
- [For Pham: A sample demand-letter draft for a generic IP infringement scenario, formatted to your firm style]
- A short note on the 1-2 places I'd start if you hired the assessment

No pitch attached — just the work.

— Armando
```

**Then within 4 hours:** fire `.founder/sales/mini-assessment-template.md` filled out for that prospect (see template for fill-in spec). Send as PDF attachment via Resend.

**Subject line for the deliverable:** `[first name] — your free 1-page mini-assessment`

**4-hour cap is non-negotiable.** If real work needed exceeds 4 hrs, deliver a smaller scope (e.g., 1 MLS rewrite instead of 3) but hit the time. Trust > completeness.

---

## Reply Type C — TOO EXPENSIVE / PRICE PUSHBACK

**Signals:** "$997 is steep", "Do you have something cheaper?", "What's the smallest option?", "Price feels high"

**Goal:** Offer the $297 mini-audit as a real downsell (don't apologize for the $997, don't discount it).

**Template:**

```
Hi [first name],

Fair pushback — $997 isn't the right entry point for everyone.

We have a smaller version: the $297 Mini-Audit. Same desk, same framework, smaller scope:
- 5-page report instead of 15-25
- Async only (no discovery call)
- Top 3 AI moves for your specific business, with tools + setup steps + Year-1 ROI math
- 48-hour turnaround
- 30-day money-back if it's not specific to you
- Your $297 credits 100% toward $997 if you upgrade within 30 days

If that's a better fit, here's the link:
[STRIPE LINK FOR MINI-AUDIT — MAY 10+ ONLY]

If you want to think about it, no rush. The $997 stays available if you change your mind on scope.

— Armando
midastools.co/ai-audit
```

**Important:** the mini-audit Stripe link does NOT exist yet (May 10 ship target per `.founder/plans/297-mini-audit-spec.md`). If a price-pushback reply comes BEFORE May 10 ship, use this fallback:

```
Fair pushback — $997 isn't the right entry point for everyone.

I'm launching a $297 async version on May 10 (5-page report, 48hr turnaround, no call).
Want me to hold a spot for you and email when it's live?

If yes, just reply "hold one." If $997 still works for you, this stands.

— Armando
```

This buys 9 days, doesn't lose the lead, and uses real demand to justify the May 10 ship.

---

## Reply Type D — NOT NOW / TIMING WRONG

**Signals:** "Not right now", "Maybe later", "Let me think about it", "Following up next quarter"

**Goal:** Keep door open without pestering. Add to nurture, set a real reminder, no false urgency.

**Template:**

```
Hi [first name],

Got it. No worries — assessments work best when timing's right.

I'll quiet down on the pitch. If you want to stay loosely connected, I send 1 short email/month with whatever I'm seeing on AI for [their industry]. Want me to add you to that?

If timing changes, just reply to any of those or shoot me a note at iam@armando.mx.

— Armando
```

**After-send:**
- If they say yes to monthly → add their email to a new tag in jsonblob "monthly-nurture-2026"
- If silence → archive lead, schedule next-touch for T+90 days (calendar entry)

---

## Reply Type E — HOSTILE / ANGRY / "DON'T EMAIL ME"

**Signals:** "Stop emailing", "Take me off your list", "How dare you", "This is spam"

**Goal:** Apologize once, unsubscribe immediately, never email again.

**Template:**

```
Hi [first name],

Apologies for the imposition — that's on me, not you. You're off the list as of right now and won't hear from me again.

— Armando
```

**After-send:**
- Remove from jsonblob (write `unsubscribed: true` flag)
- Add to `.founder/sales/do-not-email.md` permanent block list
- Do NOT defend the pitch, do NOT ask why, do NOT add nuance. Apologize, unsub, gone.

---

## Edge Cases

### Reply asks a question we can answer in 1-2 sentences
Answer it directly. Don't pivot to a pitch. Earn the next reply.

### Reply forwards the pitch to a colleague / referral
This is gold. Reply: *"Thanks for sharing it with [colleague]. Happy to send them the same offer directly if you can intro — I'll cc you so the chain is clean."*

### Reply is just "thanks" or "thanks for the info"
Don't push. Send: *"Thanks for the read. I'll be quiet — door's open if you want it later."* Then archive.

### Reply is in a non-English language
Mirror it back in the same language using Claude. Keep it short.

### Reply asks for testimonials/case studies
Be honest: *"This is the first cohort — you'd be one of the first 5 clients. Founder pricing reflects that. Happy to share the template format and methodology so you can evaluate the work itself."* Send the methodology playbook.

### Reply asks "is this AI generated"
Honest answer: *"The pitch was drafted by me with AI assistance, but the work itself is human-driven research on your business. The assessment includes real conversations and real prescriptions, not a generated template."*

---

## Response-time accountability

| Reply window | SLA | Mechanism |
|---|---|---|
| 09:00-22:00 local | 30 min ack, 4 hr deliverable | Slack notification + manual fire |
| 22:00-09:00 local | Next-morning ack by 09:30 | Auto-acknowledge with "got your note, will reply by 09:30 your time" |
| Weekend | Same as weekday | Audit pitches matter most early-week; weekends still get 30-min ack |

---

## Logging — `.founder/sales/audit-replies-tracker.md`

Format (create file on first reply):

```markdown
# Audit Pitch Replies Tracker

| Date | From | Reply Type | Template Used | Outcome | Revenue |
|---|---|---|---|---|---|
| 2026-05-XX | hiedeh@tavassoli.com | B - Sample first | mini-assessment for realtors | Sample sent T+3hr | TBD |
```

Update on every reply. Pull stats at May 10 decision point.
