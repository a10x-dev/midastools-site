#!/usr/bin/env bash
# Fire-on-one-command cold-email batch for the 5 Shantae-lookalike prospects.
#
# Prerequisite: Hunter.io email-finder has resolved emails for each prospect.
# Run `python3 .founder/tools/hunter-find.py batch .founder/prospects/batch1-shantae-lookalikes.jsonl`
# first; emails saved to .founder/state/hunter-results.jsonl.
#
# This script reads each prospect's email from hunter-results.jsonl, pairs it
# with the matching pre-drafted body file at .founder/sales/cold-{slug}.body.txt,
# and fires via send-one.py with reply_to=replies@midastools.co.
#
# Default: --dry-run (prints payload, doesn't send).
# Pass --send for the real fire.

set -euo pipefail

cd "$(dirname "$0")/../.."

SEND_FLAG="--dry-run"
if [ "${1:-}" = "--send" ]; then
  SEND_FLAG=""
fi

PROSPECTS_FILE=".founder/prospects/batch1-shantae-lookalikes.jsonl"
RESULTS_FILE=".founder/state/hunter-results.jsonl"

if [ ! -f "$RESULTS_FILE" ]; then
  echo "ERROR: $RESULTS_FILE not found. Run hunter-find.py batch first."
  exit 1
fi

python3 - <<'PYEOF' "$PROSPECTS_FILE" "$RESULTS_FILE" "$SEND_FLAG"
import json, sys, subprocess, pathlib

prospects_file, results_file, send_flag = sys.argv[1], sys.argv[2], sys.argv[3]
prospects = [json.loads(l) for l in open(prospects_file).read().splitlines() if l.strip()]

results = {}
for line in open(results_file).read().splitlines():
    if not line.strip():
        continue
    r = json.loads(line)
    key = (r.get('first_name'), r.get('last_name'), r.get('domain'))
    if r.get('email') and r.get('verification_status') in (None, 'valid', 'accept_all'):
        results[key] = r['email']

for p in prospects:
    key = (p['first_name'], p['last_name'], p['domain'])
    email = results.get(key)
    if not email:
        print(f"\u25cb SKIP {p['first_name']} {p['last_name']} - no verified email in {results_file}")
        continue
    body_file = f".founder/sales/cold-{p['slug']}.body.txt"
    if not pathlib.Path(body_file).exists():
        print(f"\u25cb SKIP {p['first_name']} - body file missing: {body_file}")
        continue
    cmd = ["python3", ".founder/tools/send-one.py",
           "--to", email,
           "--subject", p['subject'],
           "--body-file", body_file,
           "--reply-to", "replies@midastools.co"]
    if send_flag:
        cmd.append(send_flag)
    print(f"\n-> {p['first_name']} {p['last_name']} -> {email}")
    subprocess.run(cmd, check=False)
PYEOF
