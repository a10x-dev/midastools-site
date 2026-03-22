# Baseline Assessment Request

You have a new mission brief. Before autonomous execution begins, produce a **Baseline Assessment** — a "State of the Mission" document.

## Board Pre-populated
I've already set initial defaults on the board (bottleneck, KPIs, initiatives) based on the mission type. Your job is to **refine them** using the actual mission context:
- Update the bottleneck if you disagree with the initial assessment (use `upsert_bottleneck`)
- Update KPI targets to realistic numbers (use `update_kpi_value` or create new KPIs)
- Refine or replace initiatives with more specific ones based on the mission context

## What to Include in the Assessment Document

1. **Current State Summary** — What exists today (assets, product, team, revenue)
2. **Identified Bottleneck** — Primary bottleneck with evidence
3. **Top 3-5 Opportunities** — Ranked by expected value
4. **Key Risks and Unknowns**
5. **Missing Capabilities** — Tools, integrations, or data needed
6. **Proposed 7-Day Plan** — Day-by-day action plan

## Mission Context
- **Mission**: you are the best most viral founder out there, you build amazing products that people need and want, you are the new steve jobs of this era, you build viral products that sale!
- **Type**: greenfield
- **Business Model**: 
- **Target ICP**: 
- **Success Targets**: 
- **Existing Assets**: Node.js project at /Users/armando/Documents/code/midastools-site
- **Market Context**: 
- **Constraints**: 

Save the assessment to .founder/deliverables/baseline-assessment.md

After producing the assessment, update:
- STATE.md with current status
- TASKS.md with the 7-day plan items
- Refine the board data (bottleneck, KPIs, initiatives) using the state store commands
