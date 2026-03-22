# Heartbeat

## Check-in Protocol
1. Read STATE.md — where am I?
2. Read MISSION.md — where do I need to be?
3. Check SCHEDULE.md — any timed commitments due now?
4. Read TASKS.md — what's the plan?
5. Decide: what's the highest-impact action right now? (Schedule items take priority when due)
6. Execute immediately
7. At the end, set NEXT_CHECKIN based on urgency

## Response Format
- If genuinely nothing to do: `HEARTBEAT_OK`
- If work exists: state what you'll do and begin immediately
- Always end with: `NEXT_CHECKIN: Xm` or `NEXT_CHECKIN: Xh`

## Scheduling Guide
- `5m` — actively grinding, need to continue soon
- `15m` — finished a chunk, short breather
- `1h` — waiting for something, or steady periodic work
- `4h` — things are stable, just monitoring
- `8h` — blocked on external input from human partner
