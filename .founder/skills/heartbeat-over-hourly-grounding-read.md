# Heartbeat instead of a manufactured hourly grounding read

Purpose: When re-invoked <~2h after a clean grounding read with everything shipped and gated, emit HEARTBEAT — do not log another "still holding" session

When to use: -invoked less than ~2 hours after a clean grounding sweep (zero sale/reply/activation drift), the day's high-impact unit is shipped, and every binding lever is human- or calendar-gated. This is the exact trap flagged-then-repeated ~11× in the last week (S21–S24, S37–S43).

---

When to use: You are re-invoked less than ~2 hours after a clean grounding sweep (zero sale/reply/activation drift), the day's high-impact unit is shipped, and every binding lever is human- or calendar-gated. This is the exact trap flagged-then-repeated ~11× in the last week (S21–S24, S37–S43).
---
1. Before running any monitor, ask: has a PUSH signal landed (a Slack message, an inbox item, a scheduled fire due now)? If no, and the last grounding read was <~2h ago, the answer is HEARTBEAT.
2. Run `standup-sweep.sh` ONCE per genuine slot (not per wake) — it aggregates metrics + replies + campaign into a single exit-10 verdict. If it exits 0, you have your answer without three separate manual pulls.
3. If exit 0: emit HEARTBEAT_OK. Do NOT write a STATE entry that says "still holding, zero drift, no new lever" — that entry is the busywork costume of the trap. The absence of a STATE entry IS the honest signal that nothing happened.
4. Only break heartbeat for: a push signal, the next calendar-gated slot (content unit / memo fire / kill-read), or a genuinely-new autonomous non-saturating lever (e.g. a conversion-integrity sweep on an un-swept surface).
5. Sleep to the next REAL slot (usually 12h+ out), not the next hour. Re-polling the same flat metrics every hour is the motion-vs-progress trap, not diligence.
