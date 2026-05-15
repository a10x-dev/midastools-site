#!/usr/bin/env python3
"""reconstruct-recovered-subs.py — Reconstruct synthetic recovery JSON by
diffing the live gist subscribers against the FALLBACK_SUBSCRIBERS list in
lib/subscribers.js.

Built 2026-05-14 (Session 30 pre-build) because Session 25 pair-session
merged 17 STORAGE FAILED subs directly into the gist but the parsed JSON
output of recover-storage-failed.py was discarded. The synthetic JSON this
script produces is the input that send-recovery-welcomes.py expects.

Approach:
    1. Fetch live gist subscribers.json via GH API (uses .gh_gist_token)
    2. Parse FALLBACK_SUBSCRIBERS from lib/subscribers.js
    3. Diff by email — anything in gist NOT in FALLBACK = recovered
    4. Emit JSON matching recover-storage-failed.py output schema

Usage:
    python3 .founder/tools/reconstruct-recovered-subs.py --out /tmp/recovered.json
    python3 .founder/tools/send-recovery-welcomes.py --in /tmp/recovered.json --dry-run
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # repo root
GIST_ID = 'b460cc98bbc21692f1f209e852c551b5'
GIST_FILE = 'subscribers.json'
TOKEN_FILE = ROOT / '.founder' / '.gh_gist_token'
SUBSCRIBERS_JS = ROOT / 'lib' / 'subscribers.js'


def load_token() -> str:
    if not TOKEN_FILE.exists():
        sys.exit(f'no token at {TOKEN_FILE}')
    return TOKEN_FILE.read_text().strip()


def fetch_gist_subs(token: str) -> list[dict]:
    req = urllib.request.Request(
        f'https://api.github.com/gists/{GIST_ID}',
        headers={'Authorization': f'token {token}', 'User-Agent': 'midastools-recovery/1.0'},
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read())
    content = json.loads(data['files'][GIST_FILE]['content'])
    return content.get('subscribers', [])


def parse_fallback_emails() -> set[str]:
    """Extract email addresses from FALLBACK_SUBSCRIBERS const in subscribers.js."""
    src = SUBSCRIBERS_JS.read_text()
    # Find the FALLBACK_SUBSCRIBERS array — match between `const FALLBACK_SUBSCRIBERS = [` and `];`
    m = re.search(r'const\s+FALLBACK_SUBSCRIBERS\s*=\s*\[(.*?)\];', src, flags=re.DOTALL)
    if not m:
        sys.exit('could not locate FALLBACK_SUBSCRIBERS in lib/subscribers.js')
    block = m.group(1)
    emails = re.findall(r'email:\s*"([^"]+)"', block)
    return set(emails)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', required=True, help='output path for recovered JSON')
    args = ap.parse_args()

    token = load_token()
    gist_subs = fetch_gist_subs(token)
    fallback_emails = parse_fallback_emails()

    print(f'gist subs:           {len(gist_subs)}', file=sys.stderr)
    print(f'fallback subs:       {len(fallback_emails)}', file=sys.stderr)

    recovered = [s for s in gist_subs if s.get('email') not in fallback_emails]
    print(f'recovered (gist∖fallback): {len(recovered)}', file=sys.stderr)

    # Output schema matches recover-storage-failed.py's parse subcommand output —
    # array of {email, source, date} objects.  send-recovery-welcomes.py reads
    # `email` + `source` and ignores any extra keys.
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(recovered, indent=2))
    print(f'\nwrote {len(recovered)} subs to {out}', file=sys.stderr)
    print('\nRecovered emails:', file=sys.stderr)
    for s in recovered:
        print(f'  {s.get("email","?"):<45} | {s.get("source","?"):<20} | {s.get("date","?")}', file=sys.stderr)


if __name__ == '__main__':
    main()
