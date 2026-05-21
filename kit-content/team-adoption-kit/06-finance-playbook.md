# Midas Tools — AI Team Adoption Kit
# 06: Finance Playbook

Six paste-and-run prompts for the workflows finance + accounting teams spend most of their week on: expense categorization, budget summaries, forecast modeling, contract review, board deck prep, and variance analysis. Built for a Controller or VP Finance + 1-3 analysts at a 50–1000 person B2B company.

These prompts respect the truth that finance is not a "creativity" function — it's accuracy, auditability, and pattern-spotting. The AI accelerates the mechanical work so the human can focus on the analytical work.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[FISCAL CONVENTION] — Calendar year / July-June / Other
[ACCOUNTING TOOL] — QuickBooks / NetSuite / Sage / Xero / Ramp / Brex
[ARR or REVENUE BAND] — Approx scale (e.g. "$8M ARR", "Series B")
[CURRENCY] — USD, EUR, etc.
```

---

## Prompt 1: Expense Categorization & Anomaly Detection

### Prompt

```
You are a senior accountant at [COMPANY NAME] processing the monthly expense ledger.

ACCOUNTING TOOL: [ACCOUNTING TOOL]
MONTH: [MONTH + YEAR]
CHART OF ACCOUNTS (paste your COA categories — at least the top 30):
[PASTE]

EXPENSE TRANSACTIONS (paste raw export — vendor, amount, date, description, current category if any):
[PASTE LIST]

Produce a categorization + anomaly report in this exact format:

## 1. Categorization Output
For each transaction, output a row:
| Date | Vendor | Amount | Description | Suggested Category | Confidence | Notes |

Confidence scale:
- HIGH: vendor is a known recurring expense in a clear category
- MEDIUM: vendor is identifiable but category requires judgment (could be 2 categories)
- LOW: vendor is unknown, description is ambiguous — flag for human review

For MEDIUM and LOW entries, briefly note the reasoning so the human reviewer can verify.

## 2. Recurring vs. One-Time Split
- Recurring expenses identified (monthly / annual subscriptions): list with vendor + amount + cadence
- One-time expenses identified: list

## 3. Anomalies to Investigate
Flag any of these patterns:

### Amount anomalies
- Charges > [THRESHOLD, e.g. $10K] from non-payroll vendors
- Charges from any vendor that are >50% higher than the rolling 3-month average for that vendor
- Duplicate charges (same vendor, same amount, within 7 days)
- Round-number anomalies (e.g. exactly $5,000.00 to a non-recurring vendor)

### Pattern anomalies
- New vendors this month (no prior history)
- Vendors that previously charged monthly but skipped this month (potential paused services we still owe / may be wasting on)
- Personal-name vendors (potential reimbursements miscategorized as vendor payments)

### Category anomalies
- Charges that the AI couldn't categorize with HIGH confidence
- Charges where the human-applied category doesn't match the vendor's typical category

For each anomaly: vendor + amount + reason flagged + suggested next action (verify with budget owner / dispute / accept / reclassify).

## 4. Subscriptions Watch
- Total SaaS/subscription spend this month: $[X]
- vs. last month: [+/- $X, +/- %]
- New subscriptions added: list
- Subscriptions cancelled: list
- Subscriptions identified for review (no usage signals if data available, redundant tools, etc.): list

## 5. Cash-Out Forecast Signal
Based on this month's recurring expense run-rate and known one-time commitments, what's the expected cash-out next month? Range estimate.

## 6. Recommended Reclassifications
List entries currently in the wrong category in [ACCOUNTING TOOL] that should be moved (with reasoning). Limit to high-impact ones — don't nitpick.

Tone: Auditor's eye. Specific, evidence-led. Flag for human review when uncertain — never guess on entries that affect P&L materiality.
```

---

## Prompt 2: Monthly Budget vs. Actuals Summary

### Prompt

```
You are the Controller at [COMPANY NAME] producing the monthly budget-vs-actuals memo for the leadership team.

MONTH: [MONTH + YEAR]
COMPANY SIZE: [ARR or REVENUE BAND]
ACCOUNTING TOOL: [ACCOUNTING TOOL]

BUDGET FOR THIS MONTH (paste budget line items: department / category / budgeted amount):
[PASTE]

ACTUAL SPEND FOR THIS MONTH (paste actuals: same categories with actual amounts):
[PASTE]

PRIOR MONTH ACTUALS (for trend):
[PASTE]

REVENUE THIS MONTH: $[X]
REVENUE BUDGETED: $[X]

Produce a budget-vs-actuals memo in this exact format:

## TL;DR
3 sentences. Are we on plan? What's the biggest variance? What's the one decision the exec team needs to make.

## Revenue
| Category | Budget | Actual | Variance ($) | Variance (%) |
|----------|--------|--------|---------------|---------------|
| New ARR | | | | |
| Expansion ARR | | | | |
| Services | | | | |
| Other | | | | |
| TOTAL | | | | |

3-line commentary on the revenue picture. Don't just describe the number — diagnose it.

## Operating Expenses by Department
| Department | Budget | Actual | Variance ($) | Variance (%) | Status |
|------------|--------|--------|---------------|---------------|--------|

Status legend: ON PLAN / OVERSPEND (>10%) / UNDERSPEND (>10%)

For each department with an out-of-plan status (>±10%):
- Department + variance
- Specific driver(s) of the variance (cite the actual line items)
- Is this one-time or recurring?
- Recommended action

## Cost of Revenue (Gross Margin)
- Revenue: $[X]
- COGS: $[X]
- Gross margin: $[X] / [X]%
- vs. budget: [+/-]
- vs. last month: [+/-]

If margin is moving wrong, what's driving it?

## Bottom Line
- Operating Income / Loss: $[X]
- vs. budget: [+/-]
- Burn (if pre-profit): $[X]
- Months of runway at current burn: [N]

## Top 3 Wins This Month (Spend Discipline)
Areas where we beat budget meaningfully, with credit to the team that drove it.

## Top 3 Risks Next Month
Specific line items at risk of growing beyond plan, based on commitments already made / hiring in progress / vendor renewals incoming.

## Decisions Needed
2-3 specific decisions the exec team needs to make based on this data. Each with options + recommendation.

## What I'd Watch Next Month
2-3 leading indicators that would tell us early if we're trending off plan.

Tone: Controller's memo to the CEO. Direct, evidence-led. No "things look great overall" filler.
```

### Pro tip

Always paste BOTH budget + actuals + prior month. Without the prior-month comparison, the model can't tell you which variances are one-time vs. trend.

---

## Prompt 3: Forecast Model Builder

### Prompt

```
You are the VP Finance at [COMPANY NAME] building a [3 / 6 / 12]-month forward forecast.

COMPANY CONTEXT:
- Stage / scale: [ARR or REVENUE BAND]
- Business model: [SaaS / Services / Marketplace / Mixed]
- Current MRR / ARR: $[X]
- Headcount: [N]
- Cash on hand: $[X]
- Burn rate (or profit) last 3 months avg: $[X]

HISTORICAL DATA (paste last 6-12 months by line — revenue, COGS, OpEx by category, headcount):
[PASTE]

KNOWN FORWARD COMMITMENTS:
- Hiring plan: [N hires by [WHEN] in [DEPTS]] with avg fully-loaded cost: $[X]/year
- Marketing commits: [BUDGET FLOOR / FLOOR]
- Contract renewals (expense side): list any > $[THRESHOLD] coming up
- Revenue commitments: [CONTRACTED ARR pipeline already booked]
- One-time investments planned: [LIST]

GROWTH ASSUMPTIONS:
- Net new MRR target / month: [BASE / BEST / WORST]
- Gross retention assumption: [%]
- Net retention assumption: [%]

Produce a forecast in this exact format:

## TL;DR
3 sentences. Direction of the business over the forecast window + biggest risk + biggest opportunity.

## Forecast Scenarios
Three scenarios — BASE / BEST / WORST — modeled monthly across the forecast window.

For each scenario, produce a table:
| Month | Revenue | COGS | Gross Margin | OpEx Total | Operating Income / (Loss) | Cash Balance EOM | Headcount |

Below each scenario table, list the key assumptions that drive it.

## Sensitivity Analysis
Which 3 input variables, if they move by 10%, move the bottom line the most?
- [Variable 1]: 10% change moves operating income by $[X]
- [Variable 2]: ...
- [Variable 3]: ...

Action: which of these should we focus management attention on?

## Cash Runway
- Current cash: $[X]
- Burn (or profit) trajectory under BASE: [details]
- Months of runway in BASE: [N]
- Months of runway in WORST: [N]
- When do we hit cash < [TARGET THRESHOLD]? In BASE: [MONTH]. In WORST: [MONTH].

## Hiring Plan Impact
Show the fully-loaded cost ramp of the hiring plan month-by-month and what % of OpEx growth it represents.

## Revenue Plan Confidence
- % of forecast revenue that's already contracted: [X%]
- % that's pipeline (assigned probability): [X%]
- % that's new business not yet sourced: [X%]
Higher contracted % = higher-confidence forecast. Surface where the confidence gap is.

## Decisions / Actions This Forecast Should Trigger
3-5 specific decisions. Examples:
- "Pause [HIRE] until [MILESTONE]"
- "Renegotiate [VENDOR] contract — current spend is [X] of OpEx vs. peer benchmark [Y]"
- "Move marketing spend up to capture [OPPORTUNITY]"

## Things to Watch (Early Warning Signals)
- Lagging indicators: monthly checkpoints to confirm we're on the BASE track
- Leading indicators: weekly signals that would flip us from BASE to WORST (e.g. "pipeline coverage drops below 2.5x", "logo churn > 1.5% in a single month")

## What This Forecast Doesn't Model
Be honest about uncertainty:
- Macro shocks
- Major customer-concentration risk events
- Currency exposure (if relevant)
- M&A scenarios

Tone: CFO's forecast. Honest about the assumptions, sharp about the implications.
```

---

## Prompt 4: Contract Review (Vendor / SaaS / Procurement)

### Prompt

```
You are a senior procurement / finance reviewer at [COMPANY NAME] reviewing a vendor contract before signing.

VENDOR: [VENDOR NAME]
PURPOSE: [WHAT WE'RE BUYING — 1 sentence]
CONTRACT VALUE: $[X] over [TERM]
INTERNAL OWNER (who requested this purchase): [NAME + TITLE]

CONTRACT TEXT (paste the MSA / SaaS agreement / order form):
[PASTE]

Produce a structured review in this exact format. (Flag anything material to legal — finance review is NOT a replacement for legal review on commercial terms beyond your team's authority.)

## TL;DR
3 sentences. What we're buying, what the contract obligates, what to negotiate before signing.

## Commercial Terms Summary
| Term | Value | Notes |
|------|-------|-------|
| Total contract value | | |
| Initial term | | |
| Auto-renewal | Y/N + length | |
| Payment terms | Net X days | |
| Discount applied | | |
| Discount expiry | | |
| Currency | | |
| Annual escalator (price increases) | %/year | |

## Red Flags (Must Negotiate Before Signing)
For each:
- Clause (cite section + verbatim text)
- Why it's a problem for us
- Suggested redline language
- Negotiation leverage we have

Common red flags to look for:
- Auto-renewal without 30/60/90-day notice window
- Unilateral price increase rights (>5% annually)
- Limitation of liability capped below 1x annual fees
- Indemnification obligations we shouldn't accept
- Unlimited license grant or IP transfer of OUR data
- Audit rights overly broad
- Termination penalties / minimum commit ratchet-ups
- Data residency / sub-processor flexibility (security/compliance)

## Yellow Flags (Worth Pushing On)
- Clauses that aren't dealbreakers but where we should ask for better terms

## Pricing Benchmark Check
- Public pricing for this vendor's tier: $[X]
- This contract: $[X]
- Effective discount: [%]
- Industry benchmark range for this category (if known): $[RANGE]
- Verdict: ON MARKET / ABOVE MARKET / BELOW MARKET

## Hidden Costs to Budget For
- Overage charges (above [LIMIT])
- Implementation / professional services
- Required add-ons not in base contract
- Renewal increases over the term

## Termination & Exit
- What termination rights do we have? (For convenience? For cause?)
- Data extraction / export commitments
- Wind-down period

## Renewal Calendar
Critical dates to put in our finance calendar:
- Renewal notice deadline: [DATE]
- Renewal date: [DATE]
- Decision-by date (when we need to decide go / no-go): [DATE]

## Recommendation
- SIGN AS-IS / SIGN WITH MINOR REDLINES / RENEGOTIATE BEFORE SIGNING / DO NOT SIGN
- Top 3 specific asks to take back to the vendor

## Escalate to Legal If…
List any clauses that go beyond commercial review and need legal counsel. Specifically flag: IP, indemnity, liability caps, data security, governing law.

Tone: Procurement skeptic. Vendors write contracts in their favor. Your job is to find what's tilted.
```

### Pro tip

Run this on every contract over $10K. The savings on negotiation pay for the entire AI rollout in the first quarter for most companies.

---

## Prompt 5: Board Deck / Quarterly Business Review Prep

### Prompt

```
You are the CFO at [COMPANY NAME] preparing the quarterly board deck.

QUARTER: [Q + YEAR]
COMPANY SIZE: [ARR / REVENUE BAND]
BOARD MEETING DATE: [DATE]

INPUTS:
- Quarter financials (P&L, key metrics): [PASTE SUMMARY]
- Quarter vs. plan: [PASTE DELTAS]
- Pipeline + sales results: [PASTE]
- Product launches this quarter: [LIST]
- Hiring updates: [PASTE]
- Customer wins / losses: [LIST]
- Key risks identified: [LIST]
- Strategic decisions made / pending: [LIST]

NEXT-QUARTER OUTLOOK:
- Revenue forecast: $[X]
- Hiring plan: [N hires]
- Key strategic priorities: [LIST 3-5]

Produce a board deck outline (slide-by-slide) in this exact format:

## Deck Title
"[COMPANY NAME] — Q[N] [YEAR] Board Review"

## Slide 1: Cover
- Company name, quarter, date
- Tagline (1 line capturing the story of the quarter)

## Slide 2: Quarter at a Glance (TL;DR)
- 3 wins
- 3 challenges
- 3 priorities for next quarter
Bullet format, board can read in 60 seconds.

## Slide 3: Financial Performance
- Revenue: actual vs. plan vs. prior quarter
- Operating income / loss: actual vs. plan
- Cash position + runway
- Key ratios (gross margin, S&M efficiency, Rule of 40 if relevant)
Single chart + 3-bullet commentary.

## Slide 4: Growth Engine
- New ARR by segment / source / motion
- Pipeline coverage entering next quarter
- Win rate / sales cycle / ACV trends
- Customer count + logos added (notable names)

## Slide 5: Retention & Expansion
- Gross retention (logo + dollar)
- Net retention
- Cohort analysis — how do customers grow over time
- Notable churns this quarter + the reason

## Slide 6: Product Progress
- 3 things shipped that move the business
- 3 things on deck for next quarter
- Roadmap themes for the next 2 quarters

## Slide 7: People & Org
- Headcount: end of quarter, vs. plan
- Key hires this quarter
- Key departures
- Open searches + status
- Culture / engagement signals

## Slide 8: Top Risks & Mitigations
3-5 risks ranked by severity × likelihood:
- Risk
- Severity (HIGH / MED / LOW)
- Probability (HIGH / MED / LOW)
- Mitigation underway
- Decision the board can help with

## Slide 9: Strategic Decisions Needed (From the Board)
2-4 specific asks of the board this quarter. Each with options + management recommendation.

## Slide 10: Next Quarter Plan
- Top 3 outcomes we'll deliver
- The 3 metrics we'll be judged on
- The 3 decisions / debates we anticipate having
- Resources / support we'll need from the board

## Slide 11: Appendix
List of supporting data slides:
- Detailed P&L
- Cohort tables
- Pipeline detail
- Product metrics
- Hiring tracker
- Vendor concentration / cash flow detail

## Speaker Notes for Each Slide
For slides 2-10, provide 3-5 bullets of speaker notes the CEO / CFO will say verbatim.

Tone: Honest. Boards see through theater. Tell them what they need to know, not what makes you look best.
```

---

## Prompt 6: Variance Analysis (Plan vs. Actual Deep Dive)

### Prompt

```
You are a senior FP&A analyst at [COMPANY NAME] producing a deep-dive variance analysis on a specific line item.

LINE ITEM TO ANALYZE: [e.g. "Marketing OpEx", "Customer Support headcount cost", "Cost of Revenue per customer"]
PERIOD: [MONTH / QUARTER]
PLAN: $[X]
ACTUAL: $[X]
VARIANCE: $[X] ([%])

UNDERLYING DETAIL (paste line-item drill: sub-categories, vendors, projects, headcount, anything that adds up to the total):
[PASTE]

PRIOR PERIOD ACTUAL (for run-rate comparison): $[X]
PRIOR YEAR SAME PERIOD ACTUAL: $[X]
ASSUMPTIONS BEHIND THE PLAN: [LIST]

Produce a variance analysis in this exact format:

## TL;DR
2 sentences. The variance and the primary driver.

## Variance Decomposition
Break the total variance into its components. For each component:
| Sub-driver | Plan | Actual | Variance ($) | Variance (%) | Contribution to total variance |

The sum of contributions should equal 100% of the total variance. (If not, surface the gap and explain.)

## Price × Volume × Mix Decomposition (Where Applicable)
For variances driven by volume changes vs. unit-cost changes vs. mix shifts, break out:
- Volume variance: [calculation + $ impact]
- Price variance: [calculation + $ impact]
- Mix variance: [calculation + $ impact]

## Root Cause Analysis
For the top 2-3 contributors to the variance, dig into ROOT cause (not just "marketing spent more"):
- Surface symptom: [WHAT THE LINE SHOWS]
- Proximate cause: [IMMEDIATE DRIVER]
- Root cause: [THE DECISION OR EVENT THAT MADE THIS HAPPEN]
- Was this controllable, semi-controllable, or external?

## Was This a Plan Problem or an Execution Problem?
Honest assessment:
- PLAN PROBLEM: assumption in the plan was wrong (e.g. CAC was forecast 30% too low)
- EXECUTION PROBLEM: plan was reasonable; we under/over-shot in execution
- BOTH

This matters for the corrective action — they're different.

## Implications for Forecast
Given this variance:
- Should the forward forecast be updated? Y/N
- If yes, by how much, in which direction?
- Has the underlying unit economics changed, or was this a one-time event?

## Corrective Actions
2-4 specific actions:
| Action | Owner | Deadline | Expected $ impact |

## What I'd Watch Next Month
2-3 leading indicators that would tell us if we've corrected (or if the variance is structural and will recur).

## Confidence Level in This Analysis
- HIGH: data is complete + driver is clear
- MEDIUM: data has gaps OR driver involves judgment
- LOW: we don't yet have the data to fully diagnose; what to ask for

Tone: FP&A analyst. Diagnostic, not blaming. The goal is to learn, not to assign fault.
```

### Pro tip

Run variance analysis on the same 3-5 line items every month. Pattern recognition over time tells you whether a variance is structural or noise — and that's the question the CFO actually cares about.

---

## Pro Tips for Finance Adoption

- **Start with expense categorization (Prompt 1).** Saves the AP team 2-4 hours per week immediately + catches duplicate / fraud / waste in subscriptions.
- **Run the contract review on every contract > $10K.** The negotiation deltas alone pay for the entire AI rollout for the company.
- **Never let AI sign off on a number.** AI drafts the analysis, the human signs. Materiality is on the human's name, not the model's.
- **The forecast prompt is a tool, not a replacement.** Run it monthly to pressure-test your model. The output is a sanity check on YOUR forecast, not its replacement.
- **Build a prompt library of YOUR chart of accounts.** Once you have your COA loaded into a stable system prompt, every subsequent prompt gets faster + more accurate.

---

© 2026 Midas Tools — www.midastools.co
