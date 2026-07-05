#!/usr/bin/env bash
# standup-sweep.sh — ONE command that replaces the ~1-3x/session manual grounding
# ritual (metrics-snapshot + read-replies + flash-sale-check) that ate ~11 sessions
# this week (S21-S24, S37-S43). Runs all three, aggregates a single PING-WORTHY verdict.
#
#   Exit 10 = PING-WORTHY — a new sale, a genuine reply, or a campaign-attributed
#             dollar landed. Surface to Armando / act.
#   Exit  0 = zero drift. HEARTBEAT — do NOT manufacture a grounding STATE entry or
#             a "still holding" session. Sleep to the next real slot.
#
# Wire to a daily cron with ping-on-exit-10 to make first-activation a PUSH signal
# instead of the poll it has been for ~15 sessions (see capability gaps 2026-06-26).
#
# Usage: bash .founder/tools/standup-sweep.sh [--campaign <memo_campaign_name>]
#   default campaign = flash. Pass the live memo tag (e.g. coloring_book_launch,
#   memo_art_money, <memo3>) to also check for a list-attributed dollar on that send.
set -uo pipefail

# resolve repo root relative to this script (…/.founder/tools/standup-sweep.sh)
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." 2>/dev/null && pwd)"
TOOLS="$ROOT/.founder/tools"
PING=0

echo "=== standup-sweep $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="

run() {
  local label="$1"; shift
  echo "--- $label ---"
  "$@"
  local code=$?
  if [ "$code" -eq 10 ]; then
    echo ">>> $label: PING-WORTHY (exit 10)"
    PING=1
  fi
  return 0   # never abort the sweep on a sub-check exit code
}

run "metrics-snapshot" python3 "$TOOLS/metrics-snapshot.py"
# NOTE: read-replies exits 10 on ANY unread, incl. known corporate auto-acks
# (keysystems Zendesk, nwashburn). A read-replies ping still requires a human read
# to confirm it is a GENUINE customer reply before treating it as revenue signal.
run "read-replies" python3 "$TOOLS/read-replies.py"

CAMPAIGN="flash"
if [ "${1:-}" = "--campaign" ] && [ -n "${2:-}" ]; then
  CAMPAIGN="$2"
fi
run "flash-sale-check[$CAMPAIGN]" python3 "$TOOLS/flash-sale-check.py" --campaign "$CAMPAIGN"

echo "=== VERDICT ==="
if [ "$PING" -eq 1 ]; then
  echo "PING-WORTHY: yes — surface to Armando / act on the flagged sub-check above."
  exit 10
fi
echo "PING-WORTHY: no — zero drift across sale/reply/campaign. HEARTBEAT; do NOT"
echo "manufacture a grounding STATE entry. Next real action is calendar/human-gated."
exit 0
