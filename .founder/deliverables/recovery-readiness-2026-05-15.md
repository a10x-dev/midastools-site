# 17 Recovered Subs — Ready-to-Fire Recovery Package
*Session 30 pre-build, 2026-05-14 22:00 local / May 15 04:00 UTC*

## TL;DR for the morning standup

The 17 STORAGE FAILED subs that pair-Session 25 merged into the gist are now **ready to receive welcomes on a single command**. Synthetic JSON reconstructed, send-recovery-welcomes.py dry-run validates clean (17 sends queued, all classified `fallback` variant).

But 3 of the 17 are **B2B-shape and deserve personalized first-touch instead of the generic welcome** — particularly **Daniel @ 80si.com** (Dutch dev agency lead developer, 9/10 fit for Claude Code Kit).

**Armando's decision branches tomorrow:**
- **Branch A: fire all 17 generic** → `python3 .founder/tools/send-recovery-welcomes.py --in .founder/state/recovered-subs-reconstructed.json --apply` (single command, 5 min)
- **Branch B: fire 14 generic + personalize 3 B2B** → exclude the 3 from the recovery batch, hand-craft 2 personalized emails (Ramella @ FANUC + Daniel @ 80si.com), generic welcome for support@galaxyholidays.co.uk
- **Branch C: hold all** → if Armando has already personally contacted any of the 17, skip

## Pre-built artifacts

| Artifact | Path | Status |
|---|---|---|
| Reconstruction script | `.founder/tools/reconstruct-recovered-subs.py` | NEW (this session) |
| Recovered-subs JSON | `.founder/state/recovered-subs-reconstructed.json` | 17 entries |
| Recovery sender | `.founder/tools/send-recovery-welcomes.py` | Pre-built S26d |
| Dry-run validated | (above tool with --dry-run) | ✅ 17/17 queued |

## The 17 recovered subs (by date)

| # | Email | Date | Class | Notes |
|---|---|---|---|---|
| 1 | rohankatara83@gmail.com | 2026-05-14 | consumer | generic welcome |
| 2 | **remella.badawi@fanucamerica.com** | 2026-05-13 | **B2B-7/10** | Ramella Badawi, Mgr Business Reporting at FANUC America. Personalize re: BI/reporting prompts. |
| 3 | support@galaxyholidays.co.uk | 2026-05-13 | B2B-3/10 alias | Shared inbox at UK SMB travel agency. Generic welcome. |
| 4 | **daniel@80si.com** | 2026-05-12 | **B2B-9/10** | Lead Dev at 80s Interactive (8-person Dutch dev agency, Laravel/Nuxt/Cypress). HIGHEST-FIT for Claude Code Kit ($39). Personalize. |
| 5 | jazlynnmohammed@yahoo.com | 2026-05-12 | consumer | generic welcome |
| 6 | steveharrisdesign@protonmail.com | 2026-05-12 | consumer-creative | generic welcome |
| 7 | steven_demoor@yahoo.com | 2026-05-10 | consumer | generic welcome |
| 8 | r.mumm@gmail.com | 2026-05-08 | consumer | generic welcome |
| 9 | atervin2011@gmail.com | 2026-05-01 | consumer | generic welcome |
| 10 | kingmoses296@gmail.com | 2026-04-30 | consumer | generic welcome |
| 11 | habuzz@yahoo.com | 2026-04-27 | consumer | generic welcome |
| 12 | christophe@desjoyaux49.fr | 2026-04-19 | consumer-FR | generic welcome (matches Arnaud-buyer-shape) |
| 13 | con.or.frank.lin@gmail.com | 2026-04-18 | consumer | generic welcome |
| 14 | talevan@live.com | 2026-04-17 | consumer | generic welcome |
| 15 | lharrington902@icloud.com | 2026-04-16 | consumer | generic welcome |
| 16 | s.hakee.l.p.i.y.ara.l.i@gmail.com | 2026-04-13 | consumer | generic welcome |
| 17 | v.f.ca.r.ter51@gmail.com | 2026-04-13 | consumer | generic welcome |

## Key observation — broken-write window > Apr 17

5 of the 17 have dates **before** the May 5 GH_GIST_TOKEN-missing diagnosis (Apr 13-19). Consistent with Session 26c's deeper finding that the gist write-path may have been stale since Apr 17 (when juan.dylan@yahoo.com landed as the last FALLBACK entry). The "GH_GIST_TOKEN missing on Vercel" framing under-described the bug — the actual storage-blackout window was ~4 weeks, not 4 days.

## Personalization angles (if Branch B)

### Ramella Badawi — FANUC America BI Manager
Opening line target: AI prompts for business-reporting & data-analysis workflows. NOT robotics (her dept is Corporate Reporting & BI, not factory automation). Likely heavy ChatGPT user for SQL + report writing.
**Suggested kit pivot**: AI Prompt Mega Pack ($29) — Business Operations track has Board Narrative Builder + Scenario Model.

### Daniel — 80s Interactive Lead Developer
Opening line target: Claude Code Kit ($39) for an 8-person Laravel/Nuxt/Magento dev shop. Mention Cypress test automation (one of their stated services). Lead Dev role = direct authority on $29-$97 spend.
**Suggested kit pivot**: Claude Code Kit ($39) primary, SaaS Founder Kit ($39) secondary if he's involved in agency growth.

## Reproduction command (for future-self)

```bash
# 1. Reconstruct
python3 .founder/tools/reconstruct-recovered-subs.py --out .founder/state/recovered-subs-reconstructed.json

# 2. Dry-run (validates 17 sends queued)
python3 .founder/tools/send-recovery-welcomes.py --in .founder/state/recovered-subs-reconstructed.json --dry-run

# 3. Apply (Branch A only — fires all 17 generic)
python3 .founder/tools/send-recovery-welcomes.py --in .founder/state/recovered-subs-reconstructed.json --apply
```

The reconstruction is idempotent (gist∖fallback is deterministic). The send is idempotent (logged at `.founder/state/recovery-welcomes-sent.json` and skipped on re-run).
