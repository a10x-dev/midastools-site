#!/usr/bin/env bash
# Fire the May 8 audit-pitch follow-up (Pham via C. Brannan).
# 10-day cadence (vs Hiedeh/Doug at 8 days) because IP attorneys reply slower.
#
# DRY-RUN by default. Pass --send to actually send.
#
# Pre-flight check before running with --send:
#   - Verify NO REPLY has been received from cbrannan@criterioncounsel.com since Apr 28.
#   - Verify it is on or after 2026-05-08 local.
#
# Smoke-test instructions:
#   bash .founder/tools/fire-may8-followups.sh           # dry-run
#   bash .founder/tools/fire-may8-followups.sh --send    # for real

set -euo pipefail

cd "$(dirname "$0")/../.." || exit 1

MODE="--dry-run"
if [[ "${1:-}" == "--send" ]]; then
  MODE=""
fi

echo "Mode: ${MODE:-LIVE-SEND}"
echo

echo "--- Christopher Pham via C. Brannan ---"
python3 .founder/tools/send-one.py $MODE \
  --to cbrannan@criterioncounsel.com \
  --subject "Christopher — sample demand letter we drafted" \
  --body-file .founder/sales/followup-may8-pham.body.txt

echo
echo "Done. If --send ran, log Resend IDs in .founder/sales/audit-replies-tracker.md"
