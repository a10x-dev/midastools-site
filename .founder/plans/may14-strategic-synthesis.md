# May 14 Strategic Synthesis — One Decide-Day, Three Converging Experiments

**Authored:** Session 32 (May 7, 20:45 local) — pre-build per `pre-build-while-waiting`
**Purpose:** Compress May 14 from a 2hr deliberate-then-build session into a <30min decide session by pre-collecting all data inputs + pre-writing all branch recommendations.
**For:** Armando (May 14 09:00 review). Read top-to-bottom in 8 min.

---

## TL;DR — what's actually decided May 14

We have THREE independent acquisition experiments converging on a single calendar day:

| # | Experiment | Started | Hypothesis | Cost so far | KPI it's testing |
|---|---|---|---|---|---|
| **A** | $997 audit cold-outbound | Apr 28 (3 pitches + May 7 follow-ups + May 8 Pham follow-up) | "We can sell a $997 productized audit to subscribers we already have" | ~6 hrs Claude time, $0 cash | Conversations + Revenue |
| **B** | Customer-feedback loops + 5 cold lookalikes | May 5 (thank-yous) + May 6 (5 cold) + May 7 (D+2 nudges) | "Existing buyers + Hearst-shape lookalikes are reachable for repeat or referral" | ~4 hrs Claude time, $0 cash | Conversations + Users + Revenue |
| **C** | Boucher cross-promo (cross-platform creator swap) | Awaiting Armando greenlight (May 8 or May 9 escalate) | "Audience-rental from a $0 creator swap converts at >0% to free email + >1% to $97" | 0 hrs (greenlight blocked) | Users + Revenue |

**The May 14 question is NOT "which one wins?"** — sample sizes are too small for a winner. The May 14 question is: **which experiments are CLEARLY DEAD, which are AMBIGUOUS, and where do we re-allocate the next 30 days of cycles?**

---

## 1. Data inputs to collect May 14 09:00 (before any deliberation)

Run these 4 commands in sequence. They take ~5 min total:

```bash
# 1. All inbound replies across all 3 experiments
python3 .founder/tools/read-replies.py

# 2. Audit-tagged signups from /audit-template lead magnet
python3 .founder/tools/audit-signal-monitor.py

# 3. Partner-tagged signups from /finance-club (Boucher channel)
python3 .founder/tools/partner-signal-monitor.py

# 4. Lifetime + 24h Stripe sales
python3 .founder/tools/metrics-snapshot.py
```

**Then fill the data row below with raw counts. Do NOT skip this step — every prior decision was made on stale or missing data.**

```
[FILL ME ON MAY 14]

Experiment A — Audit cold-outbound
  - Hiedeh reply (T+16d original / T+7d follow-up): ___
  - Doug reply (T+16d / T+7d): ___
  - Pham reply (T+16d / T+6d): ___
  - Audit-tagged signups via /audit-template (9d window): ___
  - $997 sales via /ai-audit Stripe link: ___

Experiment B — Customer feedback + 5 cold lookalikes
  - Shantae reply (D+9 thank-you): ___
  - Arnaud reply (D+12 thank-you): ___
  - Donnie/Frank/Kris/Alexander/Brian replies (T+8d cold / T+6d nudge): ___ of 5
  - New Stripe sale since May 2 (any SKU): ___
  - Referral named-intro received: ___

Experiment C — Boucher
  - Pitch sent yes/no: ___
  - Reply received yes/no: ___
  - Finance-club source-tagged signups: ___
  - $97 upgrades from finance-club source: ___
```

---

## 1.5. Pre-decision data trail (longitudinal — appended between authorship and decide-day)

Per `verify-kpi-baseline-before-strategy`: snapshots at intervals between May 7 authorship and May 14 decide-day. Helps the May 14 reader see **velocity** not just point-in-time. A single snapshot can't distinguish persistent-zero from late-arriving signal.

| Snapshot | Replies (A/B/C) | Audit-tagged subs | Partner-tagged subs | LTM sales | LTM revenue | Notes |
|---|---|---|---|---|---|---|
| May 7 21:45 (Session 33) | 0/0/n.a. | 0 | 0 | 3 | $155 | Boucher pitch ungreenlit; 8 in-flight email windows |
| May 8 04:59 (Session 25) | 0/0/n.a. | 0 | 0 | 3 | $155 | 7h after S33; no overnight signal |
| May 8 13:18 (Session 35) | 0/0/n.a. | 0 | 0 | 3 | $155 | 8.5h after S33; Pham follow-up at T+22h |
| May 8 18:45 UTC / 12:45 local (Session 36) | 0/0/n.a. | 0 | 0 | 3 | $155 | 21h after S33; T-6d to decide-day; Boucher still ungreenlit; batch-1 D+2 nudges sent yesterday now at T+~24h with 0 replies |
| May 9 12:25 UTC / 06:25 local (Session 26e) | 0/0/n.a. | 0 | 0 | 3 | $155 | T-5d to decide-day; 5-monitor sweep all clean; quiz-visit blob has 67 page_views but 0 /q/{slug} clicks (batch-1 cold prospects haven't engaged); Boucher escalation Telegram firing today (May 9 trigger date); keepalive still `hasGistToken: false` at T+~30h (recovery still blocked) |
| May 9 14:09 UTC / 08:09 local (Session 27) | 0/0/n.a. | 0 | 0 | 3 | $155 | T-5d to decide-day; 5-monitor sweep all clean; track blob now 71 events (up from 67 in S25); **27 of 71 (38.0%) are utm_source=chatgpt.com to /blog/viral-ai-art-trends-april-2026** — but falsifiability check: ALL 27 are from May 9 only (10h span, 6 distinct UA fingerprints, ~14 unique sessions). NOT a 2-snapshot multi-day trend — could be one-day featured-citation burst OR sustained start. **Need May 10/11/12 snapshots to disambiguate.** SHIPPED position #2 paid CTA on the cited post (commit a6a42fc) — Reversible $29 Image Pack banner immediately after intro. Bottom CTAs were 1,400 lines deep. Keepalive STILL `hasGistToken: false` at T+~36h (Armando-blocked, 2nd Telegram fired); Boucher pitch ungreenlit T+~36h, 2nd Telegram fired (May 9 trigger). |
| May 9 19:57 UTC / 13:57 local (Session 28) | 0/0/n.a. | 0 | 0 | 3 | $155 | T-5d to decide-day; 5-monitor sweep all clean; track blob now 101 events (up from 71 in S27); **44 of 101 (43.6%) are utm_source=chatgpt.com to /blog/viral-ai-art-trends-april-2026** — signal sustaining + growing (22→27→44). Multi-page engagement: 6/44 visitors clicked deeper to /ghibli-prompt-generator (3) + /blog/best-ai-tools-may-2026 (2) + /starter-pack (1) = 13.6% click-through. **NEW falsifiability check FAILED:** 32/44 from India, 5 DR Congo, 3 Vietnam, 2 East Timor, 2 Japan + 41/44 mobile vs our buyer ICP (US/EU desktop knowledge-workers). **Channel works for traffic, audience-product-fit problem reasserts itself one layer up.** P5 (citation-double-down) DOWNGRADED — same 44 visitors / 0 sales pattern is now ICP-mismatch, not just attribution gap. P4 (hero rewrite, 1.5h) regains primacy as Branch 4 default. Keepalive STILL `hasGistToken: false` at T+~42h — 3rd channel-change Telegram firing now per outreach-followup-timing. |
| May 11 16:55 UTC / 10:55 local (Session 26 / strategic review) | 0/0/n.a. | 0 | 0 | 3 | $155 | T-3d to decide-day; 5-monitor sweep all clean; **🚨 14TH JSONBLOB DEATH:** track blob `019e09fa` (Session 39 May 8 fix) is 404 dead. ~2.5d MTBF on this blob — Session 25's session_id + cta_click instrumentation data (44h of telemetry) is **LOST**. Hot-fix shipped (commit 0db873d): fresh blob `019e17f6` rotated in track.js + quiz-visit-monitor.py, build clean + pushed. **The clean falsifier data Session 25 designed (multi-day chatgpt session disambiguation + banner CTR) cannot be computed from history — only from May 11 forward.** Have ~3 days of fresh data available for May 14. **Keepalive STILL `hasGistToken: false` at T+~74h** — 4th nudge needed (T+72h passed the outreach-followup-timing 24-72h pattern). Subscribe path still broken; all signups since May 5 still landing in STORAGE FAILED emails awaiting recovery. Boucher pitch ungreenlit T+~74h. **No new replies** to the 8 in-flight reply windows (Pham + 5 batch-1 D+2 nudges + Hiedeh/Doug audit follow-ups) — all now past T+~98h, well into the standard 5-15% B2B cold reply window's long tail. **Implication for May 14:** Branch 4 (all dead → pivot) probability rising; P4 (hero rewrite) is most likely Branch 4 path given P5's audience-fit problem from S28 still standing + the lost session_id data can't disconfirm. |

**Pattern as of May 9 13:57 local (T-5d):** Persistent zero across A/B/C/D — 7 consecutive snapshots over 40h. **ChatGPT-citation signal: REAL + sustaining (44 events at 43.6% share, 12 distinct hour-buckets, 13.6% multi-page engagement) — but audience demographic (India mobile) is a near-total mismatch with our 3 paying-customer ICP (US/EU desktop knowledge-workers).** P5 weakens; P4 (hero rewrite) regains primacy as Branch 4 default if all branches dead. **ChatGPT-citation signal — earlier framing was TODAY-only data** (27 events all May 9 02:08-12:45 UTC, ~14 unique sessions across 6 device types). Falsifiability check ruled out single-burst-session AND single-device-bot, but cannot yet rule out single-day featured-citation. **P5 status downgraded back to "N=1 hold, pending May 10/11/12 snapshots"** to disambiguate sustained citation vs. one-day burst. Position #2 paid CTA shipped on the cited post (commit a6a42fc) so any future ChatGPT-referrer traffic gets a converting funnel, regardless of P5 May 14 weight. **Reply-window status (8 in-flight)**: Pham audit follow-up at T+~38h, 5 batch-1 D+2 nudges at T+~22h, 2 audit follow-ups Hiedeh/Doug at T+~46h. 7 days since last paid sale (Arnaud, May 2). **Quiz-visit telemetry now LIVE** (Session 39 fix): 67 page_views captured but 0 /q/{slug} clicks confirms batch-1 cold prospects didn't engage with the personalized URLs — partial falsification of the cold-email-format-mismatch hypothesis. **One reply between now and May 14 = Branch 2; zero = Branch 4 unless Boucher fires.**

**🟢 NEW DATA POINT (Session 26e direct blob inspection):** Inspected track-events blob to falsify measurement-bug hypothesis. Track chain verified working (5 batch-1 /q/ pages all HTTP 200 + _app.js fires page_view via lib/track.js + endpoint accepts POSTs). 67 page_views span 28 distinct paths from real organic traffic. **22 of 67 (~33%) are `/blog/viral-ai-art-trends-april-2026?utm_source=chatgpt.com`** — first measurable signal from the ChatGPT-citation strategy projected to land May 21 per project memory. Other paths: 6× /, 4× /blog/best-ai-tools-may-2026, 3× /prompt-enhancer, 3× /blog/anthropic-spacex-claude-higher-limits-may-2026, 2× each across 6 blog/tool pages, 1× each on 12 mainstream pages. **/q/ paths absent — silence is real.** **Implication:** if all 3 acquisition experiments (audit / customer-feedback / Boucher) are dead by May 14, Branch 4 should weight a **fifth pivot path P5: double-down on viral citation pages targeting ChatGPT/Perplexity surface** (cheaper than Plans A/B, falsifiable in 14d via referrer delta).

**Append a new row at every standup between now and May 14.** If any cell flips from 0 → 1, surface immediately + re-run decision tree.

---

## 2. Decision tree — which branch fires?

```
START
│
├─ Did ANY of A/B/C produce ≥1 paid sale?
│   │
│   YES → Go to BRANCH 1: WORKING SIGNAL
│   NO  → ↓
│
├─ Did ANY of A/B/C produce ≥1 substantive reply
│        (not autoresponder, not "unsubscribe")?
│   │
│   YES → Go to BRANCH 2: WEAK SIGNAL
│   NO  → ↓
│
├─ Has Experiment C (Boucher) actually fired
│       AND received reply?
│   │
│   NO  → Go to BRANCH 3: INCOMPLETE — extend to May 22
│   YES → ↓
│
└─ All experiments closed, all dead → BRANCH 4: HARD PIVOT
```

---

## 3. Branch recommendations (pre-written so May 14 = decide, not draft)

### BRANCH 1 — WORKING SIGNAL (≥1 paid sale)

**Diagnosis:** One of the 3 channels just produced a paying customer. Sample size is N=1 but the conversion proves the channel CAN convert.

**Action (next 30 days):**
1. **Identify the winning channel.** Look at the source tag on the new customer's purchase (if Stripe — pull `client_reference_id` via `customer-attribution.py`).
2. **Triple down on that channel.** If audit → fire 5 more $997 pitches at same-shape prospects. If customer-feedback → fire referral-ask to that customer + scale cold lookalikes to 25/wk. If Boucher → fire 5 more creator-swap pitches in adjacent niches (CFO Connect, Finance Twitter, etc).
3. **Kill the other two channels** for now. Cycles are scarce; converging on the winner beats hedging.
4. **Update bottleneck** from `market_understanding` → `acquisition_scaling` (severity drops 6 → 4).

**Pre-built artifacts ready:**
- ✅ `.founder/sales/king-cfo-accelerator-pitch.md` (Boucher fallback / volume-1)
- ✅ `.founder/sales/cfo-club-pitch.md` (Boucher fallback / volume-2)
- ✅ `.founder/deliverables/cross-promo-candidates-2026-05-07.md` (6 vetted creators if Boucher won)
- ✅ `.founder/plans/cold-outbound-linkedin-spec.md` (if customer-feedback won)
- ✅ `.founder/sales/{follow-up bodies + outlines}` (if audit won)

**Confidence we'd execute well:** 85%. Pre-built artifacts mean ramp = 1 session, not 1 week.

---

### BRANCH 2 — WEAK SIGNAL (≥1 substantive reply, 0 sales)

**Diagnosis:** A real human engaged but didn't convert. Their reply contains the persona-shape that 156 sessions of guessing didn't surface. **The reply IS the win.** Sales follow once we fix the offer-to-this-person mismatch.

**Action (next 14 days):**
1. **Within 30 min of May 14 review**: actually-read the reply via `read-replies.py`, transcribe to `.founder/crm/customers.md` reply log.
2. **Within 24 hr**: send a personalized follow-up that echoes their language. Use `send-one.py`. No template — ad-hoc, in their words.
3. **Within 7 days**: ship ONE offer adjustment based on what they said (price, scope, deliverable, timing). Single change, not five.
4. **Re-evaluate at May 28** (T+14d): did the personalized follow-up get a response? Did the offer change move any other leads forward?

**What NOT to do:**
- Do NOT fire 50 more cold prospects. We don't yet know what the reply taught us.
- Do NOT pivot to a 4th channel. We have a live conversation; respect it.

**Confidence in this branch:** 70%. One reply at this scale is exactly the signal we've been blind to.

---

### BRANCH 3 — INCOMPLETE (Boucher hasn't fired or hasn't replied)

**Diagnosis:** Experiment C was blocked on greenlight or reply-window. Calling May 14 a kill on A+B is honest, but C is still uncollected data.

**Action:**
1. **Kill A and B effective May 14** if both at 0/0 — they had their full reply windows. (A: T+16d, B: T+9-12d.)
2. **Extend C to May 22** (per existing SCHEDULE entry — "BOUCHER PILOT 14d KILL CHECK"). 
3. **Re-decide May 22** with C's data alone.
4. **DO NOT start a new experiment between May 14 and May 22.** That's 8 days of unspent cycles — that goes into pre-building Plan D-equivalents (NEW: re-position $1,499 audit OR pivot to in-product CTA OR OpenClaw double-down) so May 22 IS a decide-day even if C dies.

**Pre-built artifacts:**
- ✅ `.founder/plans/plan-d-reposition-1499-spec.md` (already drafted Session 155)
- ✅ `.founder/plans/ai-audit-deliverable-spec.draft.md` (4-artifact deliverable spec)

**Confidence:** 80%. The 8-day extension is justified because C's reply latency is creator-DM not cold-email — different distribution.

---

### BRANCH 4 — HARD PIVOT (all 3 experiments dead, 0 replies, 0 sales)

**Diagnosis:** Three independent acquisition channels at 9-16 days each = real evidence the BOTTLENECK IS WRONG. We've been chasing acquisition; the actual blocker is upstream. Possible upstream issues:
1. **Offer-shape mismatch.** Our SKUs don't match what our funnel-visitors want.
2. **Channel-shape mismatch.** Our acquisition surfaces don't reach the people who'd buy.
3. **Trust-shape mismatch.** People see our offer + brand and don't believe we'll deliver.

**Action — pick ONE pivot path, kill the others:**

| Path | Test | Cost | Cycle time |
|---|---|---|---|
| **P1 — Drop /ai-audit, ship $1,499 reposition** | Plan D from Session 155. New deliverable spec. New positioning. Same audience. | 3.5 hr ship | 30-day test (1-2 LinkedIn DM volleys) |
| **P2 — Pivot to in-product CTA** | Add upsell from /quiz → $29 tripwire. Catches mid-funnel intent. Memory says all 3 buyers used Stripe Link. | 2 hr ship | 14-day test (passive — depends on traffic) |
| **P3 — Kill MidasTools brand acquisition, pivot to OpenClaw** | OpenClaw had a sale (George $29) on a separate vercel property. Memory shows OpenClaw might be the actual brand. | 4 hr ship + brand decision | 30-day test |
| **P4 — Hero copy rewrite** | Per ICP intel: audience is "established professional, not AI-native". Our copy reads "AI-native creator". Single-page rewrite. | 1.5 hr ship | 14-day test |
| **P5 — Double down on AI-search citation pages** | Session 26e direct blob inspection (May 9): 22/67 recent page_views came from `chatgpt.com` referrer to a single viral-trends blog post. Ship 3 more citation-shaped posts on adjacent trending AI topics + measure referrer delta. | 4-6 hr ship (3 posts) | 14-day test (passive — referrer-driven) |

**Recommendation if Branch 4 fires:** P4 first (cheapest, fastest, falsifiable in 14d) — but if P5 referrer signal grows organically before May 14, P5 becomes a stronger first move because it has actual demand-pull evidence vs. P1-P4 hypotheses. If P4 also produces 0 signal, escalate severity 6 → 8 and trigger company-survival review.

**Confidence we'd execute well:** 60%. Branch 4 is the hardest because it requires admitting the bottleneck-diagnosis was wrong for 16+ sessions.

---

## 4. What I will NOT do unilaterally

- ❌ Execute any branch. May 14 is a decide-day for Armando, not a build-day for me.
- ❌ Fire more outreach during May 8-13. The data needs to be uncontaminated by additional sends.
- ❌ Lower /ai-audit price between now and May 14 (per `feedback_protect_flywheel.md` — repricing reinforces "vague deliverables" objection per Session 155 intel).
- ❌ Promote any pivot page to homepage hero pre-decision.
- ❌ Telegram Armando "what should we do May 14?" — that's an async ask he won't answer; surface this synthesis instead.

---

## 5. What I WILL do May 8-13 (8-day pre-decision window)

- ✅ Daily standup: `read-replies.py`, `audit-signal-monitor.py`, `partner-signal-monitor.py`, `metrics-snapshot.py`. Exit-10 = fire reply playbook within 30 min.
- ✅ May 8 09:00: confirm Boucher greenlight from Armando, fire pitch if greenlit.
- ✅ May 9 escalate Boucher greenlight via Telegram if still ungreenlit.
- ✅ May 10 D+5 Shantae nudge (1-line bump) if no reply.
- ✅ May 12 D+10 Arnaud nudge if no reply + fire Boucher fallback (King + CFO Club) if no Boucher reply.
- ✅ Update this synthesis if new data lands.

---

## 6. Confidence on the synthesis itself

**80%.** Branches 1-4 are exhaustive (if any new branch comes up I missed, decision quality goes down). Decision-tree gates are unambiguous (sale → branch 1 / reply → branch 2 / no-fire → branch 3 / fired+dead → branch 4). Lower than 90% because I'm forecasting reply rates with N=2 customer data points; each branch's conversion estimates carry inherited uncertainty.

**Calibration:** 50% probability we land in Branch 3 (Boucher incomplete) given Armando's pattern of slow async greenlight. 25% Branch 4. 20% Branch 2. 5% Branch 1.

---

## 7. Source files this synthesizes (so future-self can verify)

- `.founder/sales/audit-replies-tracker.md` — Experiment A
- `.founder/plans/customer-acquisition-strategy-2026-05-05.md` — Experiment B (kill criteria)
- `.founder/sales/boucher-crosspromo-pitch.md` + `.founder/deliverables/cross-promo-conversion-benchmarks-2026-05-07.md` — Experiment C
- `.founder/SCHEDULE.md` — May 14 + May 22 entries
- `.founder/STATE.md` Session 25-31 — chronological context

---

**Last updated:** 2026-05-07 20:45 local. Update on May 14 09:00 with the data-input row filled.
