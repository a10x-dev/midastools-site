# /ai-audit Deliverable Spec — 4-Artifact Structure

**Status:** DRAFT — pre-built Session 155 (May 4, 04:50 local). Drop-in ready for any May 10 plan branch.
**Source intel:** `.founder/deliverables/ai-audit-icp-intel-2026-05-04.md` (21 cited sources)
**Pattern matched:** Levelupwithai Substack's documented 4-artifact audit (https://levelupwithai.substack.com/p/how-i-turned-a-20-minute-ai-audit) — the cleanest productized real-audit template in the named-competitor corpus.

---

## Why this is needed (regardless of plan branch)

Documented dominant buyer objection across 4 sources: **"vague deliverables / generic advice I could have Googled / six-month YouTube experts."**

Our current /ai-audit page deliverable section reads:
- TOOL RECOMMENDATIONS — 3-5 tools, with use cases, pricing, learning curve
- HOURS-SAVED PROJECTION — per-tool weekly hours
- REJECTION LIST — 3-5 popular tools we DIDN'T recommend
- (also implied: implementation order)

This is closer to Promptful's $750 "deliverables dump" (9 bullets) than to Levelupwithai's tight 4-artifact framing. Tools-rec + hours-saved is **outcome language**, not **artifact language**. Buyer can't picture what physically lands in their inbox.

The fix: name the artifacts. One per number. Each artifact is a discrete physical thing the buyer receives. Reads as proof-of-scope, not vague-promise.

This change is **independent of price**. It works for $297 (Plan A), $997 (current), or $1,499 (Plan D). It addresses the trust objection that's blocking pitches at every price.

---

## The 4 Artifacts (drop-in copy for /ai-audit page)

### 1. Workflow Map
A one-page diagram of your top 5–10 weekly recurring tasks (1-page PDF). For each task: who runs it, what tools it touches, time-per-occurrence, weekly frequency, and where the "decision moment" lives. This is your business x-rayed. Most clients see 1–2 tasks they didn't realize were eating 3+ hours/week.

> **Sample line item (from a real coach's workflow map):**
> _"Discovery call follow-up — Coach + Calendly + Notion — 25 min × 8/wk = 3.3 hrs/wk. Decision moment: which 3 sessions to recommend based on call notes."_

### 2. AI-Readiness Scored Matrix
For every workflow on the map, a 1–5 score across four dimensions:
- **Inputs** (does the task have clean text/data inputs AI can consume?)
- **Repeatability** (does it run the same way every time, or is each instance bespoke?)
- **Reversibility** (if the AI is wrong, is the cost of the mistake low?)
- **Volume** (does running it weekly make automation pay back inside 90 days?)

Total score 4–20. Tasks scoring 14+ go to artifact #3. Tasks scoring 8–13 get a "later — when X is in place" note. Tasks under 8 get an explicit DON'T-AUTOMATE note (saves you wasted experiments).

> **What this kills:** the "I tried ChatGPT for everything and most of it was useless" trap. Your matrix tells you where to NOT spend time.

### 3. Top-3 Recommendations with Time-Savings
For each of the top 3 highest-scoring workflows: the exact tool, the exact prompt template or automation pattern, the exact projected hours-per-week saved (anchored on YOUR actual frequency from artifact #1, not a benchmark), and the rough monthly cost of the tool.

Each recommendation is sized so a non-technical operator can implement it inside one afternoon. We don't recommend anything we haven't personally tested in workflows similar to yours.

> **What this kills:** the "great in theory but I have no idea how to actually start" gap. You leave with an implementation order, not a vision.

### 4. Human-in-the-Loop Design
For each of the 3 recommendations: a one-paragraph spec of where YOU stay in the loop. What does the AI draft? What do you review? What's the kill-switch if the output is wrong? What does the rolling QA look like in week 1, week 4, and week 12?

This is what differentiates a real audit from a "use ChatGPT for X" listicle. AI without a human-in-the-loop design is the #1 reason solo operators bounce off AI tools after 2 weeks.

> **What this kills:** the "I deployed AI and it generated three months of bad output before I noticed" failure mode. You leave with a quality bar, not a vibe.

---

## Format & delivery

- **One PDF, 8–12 pages.** Clients don't want 40-page decks (Levelupwithai's documented buyer feedback). Density over volume.
- **Editable Notion mirror** (read-only link) so you can hand it to a contractor for implementation without re-scoping.
- **30-minute review call** to walk through each artifact + answer questions.
- **Delivered within 7 days** of intake form completion (or 14 days if Plan D path adds the $1,499 scope).

---

## What we explicitly do NOT deliver

- 40-page strategy decks (signal: deck-padding = generic-advice)
- "AI strategy" without operational specifics (we name tools, prompts, and frequency)
- Implementation services included in the audit fee (separate quote — Promptful's mistake)
- Vendor-agnostic recommendations (we recommend specific tools we've used; vendor-agnostic = "we don't know")
- Workflow types we haven't personally run (rejection list is honest, not aspirational)

---

## Page section block (drop-in JSX for `pages/ai-audit.js`)

Replace lines 211-225 of pages/ai-audit.js (the current 4-deliv-item section) with:

```jsx
<div className="phase">
  <div className="phase-meta">Day 6 · The 4 artifacts you receive</div>
  <h3>Every audit lands these four things in your inbox.</h3>
  <p>One PDF. 8&ndash;12 pages. Density over volume.</p>
  <div className="deliv-grid">
    <div className="deliv-item">
      <h4>1. WORKFLOW MAP</h4>
      <p>A one-page diagram of your top 5&ndash;10 weekly recurring tasks. Per task: who runs it, what tools it touches, time-per-occurrence, weekly frequency, decision moment. Your business x-rayed.</p>
    </div>
    <div className="deliv-item">
      <h4>2. AI-READINESS SCORED MATRIX</h4>
      <p>Every workflow scored 1&ndash;5 on four dimensions: inputs, repeatability, reversibility, volume. Score 14+ goes to recommendations. Score under 8 gets an explicit DON&apos;T-AUTOMATE note.</p>
    </div>
    <div className="deliv-item">
      <h4>3. TOP-3 RECOMMENDATIONS</h4>
      <p>For each of your top 3 workflows: exact tool, exact prompt template, exact projected hours saved (anchored on YOUR frequency), monthly cost. Sized so a non-technical operator can implement in one afternoon.</p>
    </div>
    <div className="deliv-item">
      <h4>4. HUMAN-IN-THE-LOOP DESIGN</h4>
      <p>Per recommendation: where you stay in the loop, what the AI drafts, what you review, the kill-switch if output is wrong, rolling QA in week 1, week 4, week 12. The quality bar that prevents AI bouncebacks.</p>
    </div>
  </div>
</div>
```

---

## Companion FAQ updates (drop-in for the FAQPage schema)

Update the existing "What do I actually receive?" answer to reference the 4 artifacts by name:

> **Q: What do I actually receive?**
> **A:** Four named artifacts in one 8–12 page PDF, plus a 30-minute review call: (1) a one-page Workflow Map of your top 5–10 weekly recurring tasks, (2) an AI-Readiness Scored Matrix rating every workflow on inputs/repeatability/reversibility/volume, (3) Top-3 Recommendations with the exact tool, exact prompt, and exact hours saved, and (4) a Human-in-the-Loop Design spec for each recommendation. Density over volume — clients don't want 40-page decks.

Add a new FAQ:

> **Q: Why 4 artifacts and not just "tool recommendations"?**
> **A:** Because tool recommendations without a workflow map are generic listicle advice, and recommendations without a human-in-the-loop design are how solo operators end up with three months of bad AI output before they notice. The 4 artifacts are the minimum scope that makes the audit usable beyond the call.

---

## When to ship this

| Plan branch | Ship this spec? | Pricing |
|---|---|---|
| Plan A — $297 reprice | ✅ Yes | Spec helps, but $297 with 4 artifacts may overpromise scope |
| Plan B — cold LinkedIn at $997 | ✅ Yes | Spec is the only thing that makes cold pitch credible |
| Plan C — kill | ❌ No | Page is being torn down anyway |
| Plan D — $1,499 reposition | ✅ Yes — REQUIRED | Spec is the central premise of the reposition |

**Conclusion: ship the deliverable spec on May 10 if any branch except Plan C is picked. The spec is the highest-leverage page change because it addresses the documented #1 blocker (vague-deliverables objection) at every price point.**

---

## Validation checklist before going live

- [ ] All 4 artifact descriptions read concretely (no "comprehensive", "tailored", "strategic" — those are vague-deliverable trigger words)
- [ ] Each artifact names a discrete physical thing (page count, score range, tool count, etc.)
- [ ] No section over-promises implementation services inside the audit fee (Promptful's documented mistake)
- [ ] FAQ schema updated to match
- [ ] Companion email body for the May 6/8 follow-ups updated to reference the 4 artifacts (improves reply rate on the existing window)
- [ ] If Plan D: Stripe SKU price updated to $1,499 in the same deploy
- [ ] If Plan A: Stripe SKU price updated to $297 in the same deploy + 4-artifact scope softened to "lite" version (workflow map + matrix + top-1 recommendation, no human-in-loop spec)

---

## Cost / time to ship

- Page edit: 30 min (single component swap + FAQ schema update)
- Build + deploy: 5 min
- Email body update for follow-ups: 15 min
- Sitemap + IndexNow re-submit: 5 min
- **Total: ~1 hour ship-day**, on top of whatever Stripe SKU work the chosen plan requires.

---

## Open questions for Armando before ship

1. **For Plan A ($297):** do we soften the 4-artifact scope to a "lite" version (workflow map + matrix + top-1 recommendation, drop human-in-loop design)? Or keep all 4 and just price-anchor against Promptful's $175 = 60-min call as the comparator?
2. **For Plan D ($1,499):** do we add a sample artifact PDF (anonymized) on the page itself? Levelupwithai doesn't; Promptful doesn't; but it'd be a real differentiator. Cost: ~2 hours to produce one anonymized sample from a real client.
3. **Voice check:** the current /ai-audit page voice is "you don't need another listicle" / "this is custom" — direct and confident. The 4-artifact spec inherits that voice. Confirm before ship.
