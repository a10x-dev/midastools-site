# Plan B Tooling Options — Prospect Research Compression

**Date:** 2026-05-03
**Context:** Plan B spec § 8 ship-day estimates 4-5 hrs of manual LinkedIn research for 50 prospects. This memo documents tooling options that could compress that on May 10/11.

---

## Option A — Manual LinkedIn search (baseline, what spec assumes)

- **Cost:** $0
- **Time:** ~5 min/prospect × 50 = 4 hrs
- **Data quality:** ★★★★ — direct from LinkedIn, freshest possible
- **Risk:** None
- **When to pick:** Default. The spec was written around this.

---

## Option B — Vibe Prospecting (Explorium) MCP

**Probe result 2026-05-03:** "coach" exists in their `job_title` taxonomy with useful variants (coach, professional coach, leader coach, coach/trainer, etc.). The system has structured prospect data.

**Pros:**
- Could shortcut from "5 min LinkedIn click-through per prospect" to "structured query returns 50 prospects in seconds."
- Built-in filters for company-size, geo, job-title.
- Can match prospects to LinkedIn URLs (per `match-prospects` tool description).

**Cons / risks:**
- B2B prospecting databases are typically biased toward **employees at companies**, NOT solo operators with personal LLCs. Our ICP filter "solo or 1-2 person team" may underrepresent.
- Cost in Explorium credits — must run `estimate-cost` first; do NOT auto-export.
- Data freshness on LinkedIn post-history (our hard filter "posted about AI in last 60d") is unlikely to be in the dataset — we'd still need a manual pass for that signal.

**Recommended ship-day test (May 10/11):**
1. Run `autocomplete` for `linkedin_category` = "coaching" + "professional services" to see categories that exist.
2. Run a small `match-prospects` query (target N=10) with hard filters: job_title in [coach, consultant, advisor], company size 1-10, geo US/CA/UK/AU.
3. Run `estimate-cost` BEFORE export.
4. If estimated cost is reasonable (e.g., <500 credits) AND the 10-row sample looks like real solo operators (not employees of consulting firms), scale to 50.
5. If sample looks wrong, fall back to Option A (manual).

**DO NOT auto-export — always run estimate-cost first and confirm.**

---

## Option C — Firecrawl autonomous agent

**Hypothetical:** Use `mcp__firecrawl__firecrawl_agent` with a prompt like "Find 50 solo coaches/consultants on LinkedIn who posted about AI/ChatGPT in the last 60 days, US/CA/UK, 1-50K followers, with a paid offer."

**Pros:**
- LinkedIn-native data including post-history.
- Could autonomously gather everything spec § 2 requires.

**Cons:**
- LinkedIn aggressively blocks scraping; success uncertain.
- Firecrawl agent is variable in quality on unstructured discovery tasks.
- Can't pre-validate without using credits.

**Recommended ship-day test:** Single small experiment if Option B underperforms — N=5 with detailed prompt. If it returns plausible profiles, expand. If it 403s on LinkedIn, fall back to Option A.

---

## Decision tree for May 10/11

1. Manual baseline = Option A (assured 4-hr path).
2. **Run Option B probe first** (the autocomplete + 10-row match + cost-estimate sequence — < 15 min).
3. If Option B yields real solo-operator data within budget: **scale to 50, save 3 hrs**.
4. If Option B fails the sample test: **try Option C with N=5 firecrawl agent**. If it works, scale.
5. If both fail: **fall back to Option A manual** — same as today's spec.

The 15-min Option B probe has expected value > $50 (3 hrs saved × $20/hr blended floor) with negligible downside (probably 50-100 credits worst case for the 10-row sample). Run it.

---

## Why I'm not running Option B/C today

- Plan B itself isn't green-lit (May 10 pair-session decision).
- Burning credits on a speculative ICP exploration before Armando confirms the parallel-not-sequential framing risks waste.
- The probe sequence above is documented; future-self can run it in 15 min on May 10/11 when commitment is real.

---

## Capability gap (for self-improvement directive)

`CAPABILITY_GAP: LinkedIn-native prospect discovery (post-history + follower-count + paid-offer signal in one query) | impact: 3-4 hrs of manual research per 50-prospect batch`

Even Vibe Prospecting and Firecrawl don't fully solve this — LinkedIn deliberately makes it hard because it's their core moat. At ≤50 prospects/month manual is fine. At 200+/month we'd need a custom pipeline; defer until 1st cold-outbound sale lands (per spec § 9).
