# YC Request for Startups (Summer 2026) — Strategic Fit Analysis for MidasTools

**Date:** 2026-04-28
**Source:** https://www.ycombinator.com/rfs (15 RFS items from YC partners, Summer 2026 batch)
**Filter:** Through MidasTools' lens — 21 AI prompt kits ($9-$97), 22 free tools, DFY services pivot (Apr 16), 23 subs, $0 revenue, mainstream consumer/SMB audience.

---

## Executive Summary

- **YC is publicly validating our DFY services pivot** (RFS #2 "AI-Native Service Companies" by Gustaf Alströmer). His core claim — *"The total spend on services is many times larger than the spend on software"* — is the same thesis behind our Apr 16 pivot. 🟢 **HIGH CONFIDENCE strategic alignment.**
- **The single tightest near-term product fit is RFS #12 "Software for Agents"** (Aaron Epstein). We already own the asset (200+ prompts in 21 kits) — repackaging them as an **MCP server** is a near-zero-cost way to ride agent-economy demand and gives us a defensible distribution moat on the MCP registry.
- **Two RFS items hint at a B2B pivot path** if consumer acquisition stays stuck: #4 "Company Brain" and #15 "AI Operating System for Companies." Both are about turning scattered company knowledge into AI-executable assets — adjacent to what we already produce, but enterprise-priced.
- **Zero of the 15 RFS items target our current ICP** (Yahoo/AOL mainstream consumer AI-curious crowd). YC is not betting on consumer AI tools this batch. This is a useful negative signal: if we want YC-grade leverage, we need a B2B SKU.
- **No RFS item invalidates what we're shipping** — the gist/blog/SEO content engine still compounds. But RFS reveals where the *next* dollar of effort should go.

---

## The 15 RFS Items, Scored for Us

Scoring rubric:
- **Relevance**: 1-5 (5 = directly buildable from our assets/positioning)
- **Effort**: S/M/L/XL (S = days, XL = pivot)
- **Action**: what we do with this signal

| # | RFS Title | Author | Relevance | Effort | Action |
|---|-----------|--------|-----------|--------|--------|
| 2 | **AI-Native Service Companies** | Gustaf Alströmer | **5** | S | 🟢 Validates DFY pivot. Escalate DFY pitching — see Section A |
| 12 | **Software for Agents** | Aaron Epstein | **5** | S | 🟢 Ship MidasTools MCP server — see Section B |
| 4 | Company Brain | Tom Blomfield | 3 | L | 🟡 Possible B2B SKU pivot — "prompt-pack for your company" |
| 15 | The AI Operating System for Companies | Diana Hu | 3 | XL | 🟡 Adjacent but requires real eng team |
| 11 | SaaS Challengers | Jared Friedman | 2 | XL | 🔴 Not for us |
| 13 | Sell to Huge Companies | Arora/Flora | 2 | L | 🔴 Wrong ICP for current product |
| 6 | Dynamic Software Interfaces | Ankit Gupta | 2 | XL | 🔴 Out of scope |
| 1, 3, 5, 7, 8, 9, 10, 14 | Agriculture, Medicine, Defense, Space, Hardware, Semis | various | 1 | XXL | 🔴 Off-thesis |

---

## Section A — RFS #2 "AI-Native Service Companies": Direct Validation of Our DFY Pivot

### What YC said
> "The total spend on services is many times larger than the spend on software."
> "We're particularly interested in startups that replace entire service categories — not just improve them."

YC's named examples: insurance brokerage, accounting/tax/audit, compliance, healthcare admin.

### What this means for us
- We pivoted to DFY services on Apr 16. We've sent **4 warm pitches** and gotten 0 replies in a 7-day window. The conclusion is NOT "DFY is wrong" — YC is making the opposite bet at the same moment.
- The conclusion IS that we're **dramatically under-pitching**. 4 warm pitches across 7 days is not a real test of the DFY thesis. That's barely a single day of B2B outbound at an actual sales-led startup.
- Our DFY surface area also looks too generic. YC's call-out is for **entire service categories** — pick one, own it.

### 🟢 RECOMMENDED ACTIONS (high confidence)

1. **Pick ONE service category to own** within 7 days. Candidates ranked:
   - **AI-powered SEO/content ops for SMBs** — leverages our existing prompt assets, gist channel proves we can write at scale, $1.5K-$5K/mo retainers feasible.
   - **AI-powered cold-outreach-as-a-service** — we already have cold outreach prompt kit + email infrastructure (Resend) + nurture engine. Could productize the same playbook we use on ourselves.
   - **AI-powered onboarding email sequences** — $500-$2K one-shot, prompts already exist in our email-marketing-kit.
2. **Drive outbound to 25 warm pitches/week** (vs 4/week current). Use existing 23-subscriber list as Tier 1, then move to ICP-matched outbound.
3. **Land 1 paying DFY client by May 7.** If still 0 by May 15 (the prior decision date), kill DFY and double-down on agent-MCP play (Section B).

---

## Section B — RFS #12 "Software for Agents": Our Highest-Leverage Untapped Asset

### What YC said
> "Agents need a completely different foundation… they're doing it on top of software that was designed for humans clicking buttons in a browser, which is slow, inconsistent, and brittle."

YC explicitly calls out: **APIs and MCPs replacing forms/buttons/dashboards.**

### What this means for us
We have **a vault of 200+ tested prompts across 21 kits.** That's a corpus. Today it's locked behind static blog posts, $9-$97 PDF/Notion downloads, and free tool pages. **Agents cannot consume any of it.**

The MCP (Model Context Protocol) registry is an open marketplace where Claude, Cursor, Cline, Continue, and 100+ other agent harnesses pull tools/resources at runtime. **There is no major prompt-library MCP server today.** This is empty real estate.

### Product concept: **`midastools-mcp`**

```
midastools-mcp (Node/Python MCP server)
├── tools/
│   ├── enhance_prompt(text, style)        → returns enhanced prompt
│   ├── generate_prompt(task, model)        → returns custom prompt
│   ├── search_prompt_library(query)        → returns matching prompts
│   └── get_prompt(kit_id, prompt_id)       → returns full prompt + variables
├── resources/
│   ├── claude-code-kit  (free tier: 5 prompts; paid: 50)
│   ├── ai-image-pack    (free: 5; paid: 80)
│   ├── ... (21 kits)
└── auth: API key from midastools.co/account (free signup → unlocks free tier)
```

### Why this is high-leverage
1. **Asset already exists** — we wrote the prompts. Wrapping them in MCP is ~3-5 days of eng.
2. **Distribution is built-in** — list on MCP registry, smithery.ai, official directories. Each install is a free customer acquisition event for the rest of our funnel.
3. **Email gate is preserved** — to use the server you need an API key, which requires email signup. Solves our acquisition bottleneck (currently 4 subs/day organic).
4. **Paid conversion is natural** — free tier (5 prompts/kit) → paid tier ($97 unlock everything). Same pricing, native UX.
5. **Defensible moat** — first-mover on MCP prompt registries. Even a GitHub README claiming "the official prompt-pack MCP" is rankable.
6. **Aligns with YC public thesis** — applying to YC W27 with this would be on-thesis (#12).

### 🟢 RECOMMENDED ACTION (high confidence)
Spec + ship `midastools-mcp` v0.1 by **May 5** (7 days). Start with the 5 most-trafficked kits per Session 107 analytics. If install count >100 by May 19, this becomes our primary acquisition lever.

---

## Section C — Adjacent Opportunities (Not Now, But Watch)

### RFS #4 "Company Brain" (Tom Blomfield)
> "The biggest blocker to AI automation of companies is no longer the models. Now the blocker is the domain knowledge."

**Implication for us:** There's a B2B version of our consumer prompt-pack business — companies need *their own* prompt library. Imagine **MidasTools Workspace**: $499/mo SaaS where a company uploads SOPs, we generate 100 company-specific prompts, expose via internal MCP, version-controlled, audited.

This is a 6+ month build. **Not now**, but if Section A's DFY pitch lands an SMB customer, we could wedge into this from there.

### RFS #15 "AI Operating System for Companies" (Diana Hu)
Same general direction as #4 but bigger scope (Slack/Linear/GitHub integration). Out of reach for our current resourcing.

---

## Strategic Decisions This Memo Forces

1. **DFY services is YC-validated. Stop testing it with 4 pitches/week. Ramp to 25/week or kill it.** (Section A)
2. **MCP server is the highest-ROI new build available to us right now** — leverages assets, breaks the acquisition bottleneck, on-thesis with YC. (Section B)
3. **Consumer prompt packs alone won't get YC funding** if we ever wanted that lever. We need at least one B2B SKU.
4. **The gist/SEO/Dev.to engine continues** — none of this RFS analysis invalidates that. But it's now Tier 2, behind DFY ramp + MCP build.

---

## Suggested Follow-Up Research

- Audit MCP registry for existing prompt-library competitors (target: confirm white space)
- Pull Cursor/Claude Code/Cline MCP install volume to size the addressable market
- Reverse-engineer the 4 best-funded "AI-native services" YC W26 alums to identify gaps
- Survey our 23 subs: "Would you pay $X for [DFY content / MCP access]?" — direct validation
- Watch YC W26 Demo Day (June 2026) for which RFS items got funded — validates which thesis YC is putting capital behind

---

**File:** `.founder/deliverables/yc-rfs-summer-2026-analysis.md`
**Confidence flags:** 🟢 Sections A & B (well-supported by RFS quotes + our asset inventory). 🟡 Section C (directional only). 🔴 Off-thesis items not pursued.
