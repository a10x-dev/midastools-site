#!/usr/bin/env bash
# D+2 NUDGE for the 5 batch1 Shantae-lookalike cold-email prospects fired May 6.
# Each prospect gets a single short follow-up pointing to their /q/{slug}
# personalized interactive-quiz page.
#
# Bodies are pre-staged at .founder/sales/nudge-{slug}.body.txt
# Default: --dry-run (prints payload, doesn't send). Pass --send for real fire.
#
# Resend IDs should be logged to .founder/crm/customers.md after firing.

set -euo pipefail

cd "$(dirname "$0")/../.."

SEND_FLAG="--dry-run"
if [ "${1:-}" = "--send" ]; then
  SEND_FLAG=""
fi

# slug | first_name | email
PROSPECTS=(
  "donnie-wooten|Donnie|dwooten@hearst.com"
  "frank-lodestro|Frank|frank.lodestro@hearst.com"
  "kris-smith|Kris|kris.smith@hearst.com"
  "alexander-sage|Alexander|asage@pmc.com"
  "brian-lee|Brian|brian.lee@buzzfeed.com"
)

for p in "${PROSPECTS[@]}"; do
  IFS='|' read -r slug first email <<< "$p"
  body=".founder/sales/nudge-${slug}.body.txt"
  subject="${first} — interactive version (60 sec)"
  echo
  echo "--- ${first} ${slug} -> ${email} ---"
  if [ -n "$SEND_FLAG" ]; then
    python3 .founder/tools/send-one.py \
      --to "$email" \
      --subject "$subject" \
      --body-file "$body" \
      --reply-to "replies@midastools.co" \
      "$SEND_FLAG"
  else
    python3 .founder/tools/send-one.py \
      --to "$email" \
      --subject "$subject" \
      --body-file "$body" \
      --reply-to "replies@midastools.co"
  fi
done

echo
echo "Done. If --send ran, log Resend IDs in .founder/crm/customers.md"
