#!/usr/bin/env python3
"""
recover-storage-failed.py — Parse "⚠️ STORAGE FAILED" emails from Armando's inbox
and merge the recovered subscribers into the live GitHub gist.

Built 2026-05-08 (Session 26c) for the GH_GIST_TOKEN-missing-on-Vercel recovery
window. Pre-built BEFORE Armando shares the inbox dump so when he does, recovery
is one command instead of 30 min of manual extraction.

Source format (from pages/api/subscribe.js:64-72):
    Subject: ⚠️ STORAGE FAILED — New subscriber: <email>
    HTML body:  <p><strong>Jsonblob write failed!</strong> Error: <error>
                <p>New subscriber: <strong><email></strong> (source: <source>)</p>
                <p>Add manually to storage when jsonblob is fixed.</p>

Workflow:
    1. Armando exports his STORAGE FAILED emails to a single text file (.eml, .mbox,
       or just paste-into-textfile — the parser is forgiving).
    2. python3 recover-storage-failed.py parse <file> --out recovered.json
    3. Inspect recovered.json (verify count + dedup vs gist)
    4. python3 recover-storage-failed.py merge --in recovered.json --dry-run
    5. python3 recover-storage-failed.py merge --in recovered.json --apply

Idempotent: dedups on (email) — re-running merge will not double-insert.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional, Set

GIST_ID = 'b460cc98bbc21692f1f209e852c551b5'
GIST_FILE = 'subscribers.json'
TOKEN_PATH = Path(__file__).resolve().parent.parent / '.gh_gist_token'

# Subject line: "⚠️ STORAGE FAILED — New subscriber: someone@example.com"
# (Subject may also appear as "Subject: ..." in raw mail dumps)
RE_SUBJECT_EMAIL = re.compile(
    r'STORAGE FAILED[^a-zA-Z0-9]*(?:[\u2014\-:]+\s*)?New subscriber:\s*([^\s<>"\']+@[^\s<>"\']+)',
    re.IGNORECASE,
)
# Body: "New subscriber: <strong>someone@example.com</strong> (source: site)"
RE_BODY_LINE = re.compile(
    r'New subscriber:\s*<?strong>?\s*([^\s<>"\']+@[^\s<>"\']+)\s*</?strong>?\s*\(source:\s*([^\)]+)\)',
    re.IGNORECASE,
)
# Date headers from raw mail
RE_DATE_HEADER = re.compile(r'^Date:\s*(.+?)$', re.IGNORECASE | re.MULTILINE)


def load_token() -> str:
    env = os.environ.get('GH_GIST_TOKEN')
    file_token = TOKEN_PATH.read_text().strip() if TOKEN_PATH.exists() else None
    if file_token and env and file_token != env:
        print(f'[warn] GH_GIST_TOKEN env disagrees with file; using FILE', file=sys.stderr)
    return file_token or env or sys.exit('no GH_GIST_TOKEN set (file or env)')


def parse_emails(text: str) -> List[dict]:
    """Find every (email, source, date) triple in a blob of mail text.

    Strategy: walk message-boundary markers (From / Subject / blank line) and per-message
    extract the body line. Falls back to subject-only when body line missing.
    """
    # Split on common message boundaries (mbox `From `, mime boundary, double newline before subject)
    chunks = re.split(r'(?:^From .+?\n|(?<=\n)(?=Subject:\s*[\u26A0\u2620\u2728]))', text, flags=re.MULTILINE)
    if len(chunks) <= 1:
        # Single message OR pasted-into-textbox dump — split on subject-line markers instead
        chunks = re.split(r'(?=Subject:\s*[\u26A0\W]*\s*STORAGE FAILED)', text)

    out: List[dict] = []
    seen_emails: Set[str] = set()
    for chunk in chunks:
        if 'STORAGE FAILED' not in chunk:
            continue
        # Try body first (has source)
        body_match = RE_BODY_LINE.search(chunk)
        subject_match = RE_SUBJECT_EMAIL.search(chunk)
        if body_match:
            email = body_match.group(1).strip().lower()
            source = body_match.group(2).strip()
        elif subject_match:
            email = subject_match.group(1).strip().lower()
            source = 'site'  # default per subscribe.js fallback
        else:
            continue
        if email in seen_emails:
            continue
        seen_emails.add(email)
        # Try date header from this chunk
        date_match = RE_DATE_HEADER.search(chunk)
        if date_match:
            try:
                from email.utils import parsedate_to_datetime
                dt = parsedate_to_datetime(date_match.group(1))
                date_iso = dt.astimezone(timezone.utc).isoformat().replace('+00:00', 'Z')
            except Exception:
                date_iso = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
        else:
            date_iso = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
        out.append({'email': email, 'source': source, 'date': date_iso})
    return out


def gh_request(method: str, url: str, token: str, body: Optional[dict] = None) -> dict:
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'midastools-recovery/1.0',
    }
    data = json.dumps(body).encode() if body is not None else None
    if data:
        headers['Content-Type'] = 'application/json'
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    with urllib.request.urlopen(req) as res:
        return json.loads(res.read().decode())


def fetch_live_subs(token: str) -> List[dict]:
    g = gh_request('GET', f'https://api.github.com/gists/{GIST_ID}', token)
    content = g['files'][GIST_FILE]['content']
    return json.loads(content).get('subscribers', [])


def write_live_subs(token: str, subs: List[dict]) -> None:
    body = {
        'files': {
            GIST_FILE: {'content': json.dumps({'subscribers': subs}, indent=2)},
        }
    }
    gh_request('PATCH', f'https://api.github.com/gists/{GIST_ID}', token, body)


def cmd_parse(args: argparse.Namespace) -> int:
    text = Path(args.input).read_text() if args.input != '-' else sys.stdin.read()
    parsed = parse_emails(text)
    out_path = Path(args.out) if args.out else None
    if out_path:
        out_path.write_text(json.dumps(parsed, indent=2))
        print(f'[parse] {len(parsed)} subscribers extracted → {out_path}', file=sys.stderr)
    else:
        json.dump(parsed, sys.stdout, indent=2)
        print(file=sys.stdout)
        print(f'[parse] {len(parsed)} subscribers extracted', file=sys.stderr)
    return 0


def cmd_merge(args: argparse.Namespace) -> int:
    token = load_token()
    new_subs: List[dict] = json.loads(Path(args.input).read_text())
    if not isinstance(new_subs, list):
        print('expected JSON array', file=sys.stderr); return 2
    live = fetch_live_subs(token)
    live_emails = {s['email'].lower() for s in live}
    to_add = [s for s in new_subs if s['email'].lower() not in live_emails]
    print(f'[merge] live={len(live)} | new={len(new_subs)} | to_add={len(to_add)} (dedup-skipped {len(new_subs)-len(to_add)})', file=sys.stderr)
    if not to_add:
        print('[merge] nothing to add — gist is already current', file=sys.stderr); return 0
    if args.dry_run:
        print('[merge] DRY-RUN — would add:', file=sys.stderr)
        for s in to_add:
            print(f'  + {s["email"]} (source={s.get("source","?")}, date={s.get("date","?")[:10]})', file=sys.stderr)
        print('[merge] re-run with --apply to write', file=sys.stderr)
        return 0
    merged = live + to_add
    write_live_subs(token, merged)
    print(f'[merge] ✓ wrote {len(merged)} subscribers ({len(live)}→{len(merged)})', file=sys.stderr)
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest='cmd', required=True)
    p_parse = sub.add_parser('parse', help='extract subs from STORAGE FAILED email dump')
    p_parse.add_argument('input', help='path to mail file (.eml/.mbox/.txt) or "-" for stdin')
    p_parse.add_argument('--out', help='write JSON to this path (default: stdout)')
    p_parse.set_defaults(func=cmd_parse)
    p_merge = sub.add_parser('merge', help='merge parsed subs into live gist')
    p_merge.add_argument('--in', dest='input', required=True, help='JSON file from `parse`')
    g = p_merge.add_mutually_exclusive_group(required=True)
    g.add_argument('--dry-run', action='store_true')
    g.add_argument('--apply', action='store_true')
    p_merge.set_defaults(func=cmd_merge)
    args = p.parse_args()
    return args.func(args)


if __name__ == '__main__':
    sys.exit(main())
