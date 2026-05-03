#!/usr/bin/env bash
# Fire the May 6 audit-pitch follow-ups (Hiedeh + Doug).
# Pham follows separately on May 8 — see fire-may8-followups.sh.
#
# DRY-RUN by default. Pass --send to actually send.
#
# Sources:
#   bodies: .founder/sales/followup-may6-{hiedeh,doug}.body.txt
#   tool:   .founder/tools/send-one.py
#   spec:   .founder/sales/assessment-pitch-followups-2026-05-06.md
#
# Pre-flight check before running with --send:
#   - Verify NO REPLY has been received from Hiedeh OR Doug since Apr 28 send.
#     (If a reply landed, the follow-up template is wrong — use Reply-Handling
#     Playbook templates instead.)
#   - Verify it is on or after 2026-05-06 local.
#   - Confirm Resend key in .founder/.resend_key is current.
#
# Smoke-test instructions:
#   bash .founder/tools/fire-may6-followups.sh           # dry-run
#   bash .founder/tools/fire-may6-followups.sh --send    # for real

set -euo pipefail

cd "$(dirname "$0")/../.." || exit 1

MODE="--dry-run"
if [[ "${1:-}" == "--send" ]]; then
  MODE=""
fi

echo "Mode: ${MODE:-LIVE-SEND}"
echo

echo "--- Hiedeh / Negar Tavassoli ---"
python3 .founder/tools/send-one.py $MODE \
  --to hiedeh@tavassoli.com \
  --subject "Negar — quick follow-up + a free sample I made" \
  --body-file .founder/sales/followup-may6-hiedeh.body.txt

echo
echo "--- Doug Courter ---"
python3 .founder/tools/send-one.py $MODE \
  --to pastordoug@valleygrace.net \
  --subject "Doug — a sermon-prep AI workflow I built for you" \
  --body-file .founder/sales/followup-may6-doug.body.txt

echo
echo "Done. If --send ran, log Resend IDs in .founder/sales/audit-replies-tracker.md"
