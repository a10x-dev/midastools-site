# YC Requests for Startups (Summer 2026) — Analysis for midastools

**Source**: https://www.ycombinator.com/rfs (fetched 2026-04-27)
**Author of analysis**: research-analyst co-founder
**Decision context**: Armando flagged the page for evaluation. This memo identifies which of YC's 15 RFS theses are directly actionable for midastools, which are noise, and what concrete moves to make in the next 7 days.

---

## Executive Summary

- **3 of 15 RFS categories directly validate midastools' current strategy** (#2 AI-Native Service Companies, #11 SaaS Challengers, #15 AI Operating System for Companies).
- **1 RFS category aligns with the x402/Agentic.Market intel Armando shared Apr 21** (#12 Software for Agents) — confirms agentic commerce is a live YC thesis, not just X-bubble noise.
- **1 RFS category is a high-leverage cold-outreach angle** (#13 Startups That Want to Sell to Huge Companies) — gives us social proof for Fortune 100 DFY pitches.
- **8 of 15 RFS categories are out of scope** (hardware: chips, space, drones, agriculture, semiconductors). Honest read: most of YC's S26 thesis is deep-tech, not content/SaaS.
- **🟢 Top recommendation**: Update `/services` page copy to mirror RFS #2 language verbatim and use the YC-thesis quote as social proof. Also use #2 framing for cold DFY outreach this week.

---

## Direct-Hit RFS Categories (act on these)

### 🟢 #2 — AI-Native Service Companies (Garry Tan)

> "The total spend on services is many times larger than the spend on software... build companies that deliver services directly through AI."

**Why this matters for us**: This is **exactly** the DFY services pivot we made in Session 106 (Apr 16). YC's #1 RFS author (Garry Tan, YC President) is explicitly funding this thesis. Our `/services` page already exists and offers prompt-engineering DFY work.

**Sub-areas YC names**: insurance brokerage, accounting/tax/audit, compliance, healthcare administration. Ours (prompt engineering as a service) is *not* on their list — but the thesis ("services are bigger than software, AI replaces human labor") is identical.

**Concrete moves**:
1. **Update `/services` hero copy** to reference the thesis: e.g. "AI-Native Prompt Engineering Service — the YC S26 thesis applied to AI workflow optimization."
2. **Add a quote block**: pull Garry Tan's exact line as social proof (it's a public YC essay, citation-safe).
3. **Cold outreach reframe**: When pitching DFY work this week, lead with "YC President's #2 RFS for Summer 2026 is AI-native service companies — that's what we are."
4. **YC application angle**: If we ever apply to YC, this is the opening sentence.

**Confidence**: 🟢 High. YC writes RFS #2 specifically for companies like ours.

---

### 🟢 #11 — SaaS Challengers (Jared Friedman)

> "AI has collapsed software production costs by 10–100x, eliminating the moat protecting legacy SaaS. Build AI-native replacements rethinking workflows fundamentally."

**Why this matters for us**: Our 21 paid kits and 22 free tools collectively form an "AI-native replacement" for Jasper, Copy.ai, Notion AI templates, etc. We haven't framed it that way publicly.

**Concrete moves**:
1. **Reposition `/ai-prompt-mega-pack`** with framing: "Replaces $30/mo Jasper subscription. One $97 payment, 200 prompts, lifetime ownership." Right now the page sells features; this reframes it as a SaaS-killer.
2. **New blog post idea**: *"Why we ship prompt packs instead of a SaaS subscription — the YC S26 thesis."* Cites the RFS, uses our $97 pricing as the proof point. Funnels to mega-pack. Adds another midastools.co page on the SaaS-disruption SEO cluster.

**Confidence**: 🟡 Moderate. The framing is right but we are content sellers, not a true SaaS-replacement product. If we pushed too hard on this we'd over-promise. Use as marketing angle, not core pitch.

---

### 🟢 #13 — Startups That Want to Sell to Huge Companies (Harshita Arora & Brad Flora)

> "F100 companies now actively seek startup partnerships... YC has seen companies close multimillion-dollar deals within their first year."

**Why this matters for us**: Direct validator for the DFY enterprise-pitch angle. We've sent 4 warm DFY pitches (Apr 21, awaiting reply); this RFS gives us a specific quote to weaponize on follow-ups.

**Concrete moves**:
1. **DFY follow-up template add-on**: append "YC's RFS #13 explicitly says F100 companies are seeking startup partnerships in 2026 — we'd love to be that partner for [company]." Adds urgency + name-drops YC.
2. **Targeted prospecting**: Identify 10–20 F100 companies with public AI initiatives (Microsoft, Salesforce, Adobe, ServiceNow, Workday). Pitch DFY prompt-engineering for their internal AI deployments.

**Confidence**: 🟡 Moderate. The thesis is right; the question is whether we have the credibility to actually close F100 deals at 33 days old, 23 subs, $0 revenue. Probably not. But the *outreach* angle is free and the framing helps.

---

### 🟢 #15 — The AI Operating System for Companies (Diana Hu)

> "Leading AI-native companies make themselves 'queryable'... most companies lack integration connecting Slack, Linear, GitHub into a unified intelligence layer."

**Why this matters for us**: Adjacent, not direct. Our prompt packs solve a slice of this (the prompt layer) but we don't build the OS itself. Useful as a content angle: write about "the prompt layer of the company AI OS" and rank for the cluster.

**Concrete moves**:
1. **Future blog post**: *"The Prompt Layer of the AI Company OS — what YC's S26 thesis means for prompt buyers."* Lower priority than the others.

**Confidence**: 🟡 Moderate. Marketing angle only.

---

## Cross-Signal: #12 Software for Agents — Validates Apr 21 Agentic.Market Intel

> "The next trillion users on the internet won't be people, they'll be AI agents."

**Why this matters**: Armando shared the Agentic.Market / x402 launch Apr 21 (165M+ transactions, $50M volume, 100K services, 480K agents). At the time we logged it but didn't act. **YC RFS #12 is the same thesis from a different angle**: software needs to be re-built for agent consumers, not human consumers.

**Concrete experimental move (low cost, high optionality)**:
1. **Ship an MCP server for midastools prompt packs** — `mcp-midastools` — that lets Claude/Cursor/etc. fetch our prompts directly via the Model Context Protocol. Lists the kit catalog as an MCP tool, links back to Stripe checkout. ~3 hours of work, total.
2. **List the MCP server on smithery.ai + mcp.so + the agentic-marketplaces** (Agentic.Market, glama.ai). This is a brand-new distribution channel; first-mover positioning is achievable.
3. **Test x402 payment flow**: list one $9 starter pack as an x402-paid endpoint. If 480K agents are buying, we should see *some* signal within 30 days.

**Confidence**: 🟡 Moderate. Channel is real but unproven for our specific category. Worth one engineering session given the optionality.

**This is a candidate sprint** — but only after the Apr 24 escalation decision lands.

---

## Out-of-Scope RFS Categories (skip)

For honesty/completeness, here's what we're explicitly **not** pursuing and why:

| # | Category | Why skip |
|---|----------|----------|
| 1 | AI for Low-Pesticide Agriculture | Hardware + biotech, far outside our domain |
| 3 | AI Personalized Medicine | Regulatory minefield, requires medical credentials |
| 4 | Company Brain | Adjacent, but we don't have data-pipeline expertise |
| 5 | Counter-Swarm Defense | Defense tech, requires clearances |
| 6 | Dynamic Software Interfaces | Could write a marketing post tying our prompt enhancer to this thesis, low priority |
| 7 | Electronics in Space | Hardware |
| 8 | Hardware Supply Chain | Hardware |
| 9 | Industrial Capabilities in Space | Hardware |
| 10 | Inference Chips for Agent Workflows | Silicon |
| 14 | Supply Chain 2.0 for Semiconductors | Silicon |

**Honest read**: 8 of 15 are deep-tech / hardware. YC is increasingly betting on physical/silicon plays alongside software. We are a content/SaaS company; we should not chase those.

---

## Recommended Action List (Next 7 Days)

| Priority | Action | Effort | Expected impact |
|---|---|---|---|
| 🟢 P1 | Update `/services` hero copy to reference RFS #2 thesis + Garry Tan quote | 30 min | Improves DFY conversion narrative immediately |
| 🟢 P1 | Append RFS #13 framing to next round of DFY follow-up emails (Apr 28-29) | 15 min per email | Adds urgency, name-drops YC |
| 🟡 P2 | Draft blog post: "Why we sell prompt packs, not SaaS — YC S26 thesis applied" | 2 hours | Adds 1 page to the SaaS-disruption SEO cluster |
| 🟡 P2 | Build `mcp-midastools` MCP server + list on smithery.ai/mcp.so | 3 hours | New distribution channel, first-mover on agentic commerce |
| 🟢 P1 (decision) | Discuss with Armando: do we apply to YC S26 with the RFS #2 angle? Deadline likely Spring 2026 | 0 (decision only) | Optional — but RFS #2 is a remarkably strong thesis-fit |

---

## Suggested Follow-Up Research Questions

1. When does YC S26 application close? (Need to check ycombinator.com/apply.) If <60 days, RFS #2 application is a high-leverage move.
2. Who are the 5–10 portfolio companies YC has already funded against RFS #2? (We should know the competitive landscape before pitching DFY services in the same lane.)
3. What is x402 payment integration cost/effort? Should we prototype against the $9 starter pack first, or against the $97 mega-pack?
4. Do any of our 23 subscribers work at Fortune 100 companies? (Cross-reference subscriber email domains against F100 list — could surface a warm DFY lead.)

---

## Confidence Summary

| Recommendation | Confidence |
|---|---|
| Update /services with RFS #2 framing | 🟢 High |
| Use RFS #13 in DFY outreach | 🟡 Moderate |
| Reposition mega-pack as SaaS-killer (RFS #11) | 🟡 Moderate |
| Build MCP server for RFS #12 | 🟡 Moderate |
| Apply to YC S26 | 🔴 Low (need more data on application timing + portfolio companies) |
| Pursue any of the 8 hardware RFS theses | 🔴 Reject — out of scope |

---

*End of memo. Saved to `.founder/deliverables/yc-rfs-2026-summer-analysis.md`.*
