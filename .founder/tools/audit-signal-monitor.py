#!/usr/bin/env python3
"""Watch the live subscriber blob for audit-tagged signups.

Audit pages (/audit-template, /ai-audit) tag captures with specific sources
(see components/EmailCapture.js + pages/audit-template.js). The 20 baseline
fallback subs are tagged 'site' — anything tagged 'audit-template',
'ai-audit', 'audit-*', or with 'audit' in the source/utm fields is a
high-quality $297/$997 prospect that should be pitched independently of
the broader May 10 broadcast.

This tool reads the live blob, isolates audit-tagged subs, and compares
to the last snapshot. Exits non-zero if a NEW audit-tagged sub appeared
since the prior run — that's the trigger to fire a 1-to-1 outreach via
.founder/tools/send-one.py within the same day.

Usage:
  python3 .founder/tools/audit-signal-monitor.py        # snapshot + diff
  python3 .founder/tools/audit-signal-monitor.py --dry  # diff only

Exit codes:
  0  = ran successfully, no new audit-tagged sub
  10 = SIGNAL: new audit-tagged sub appeared — fire 1-to-1 within 4h
  1  = error
"""
from __future__ import annotations

import json
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
LAST_SNAP = STATE_DIR / "audit-monitor-last.json"

# Read the live blob directly. The BLOB_ID here MUST track lib/subscribers.js
# constant — if blob dies + heals, this constant gets stale and we silently
# read from the dead blob (returning 404 → empty list). Update on each heal.
BLOB_ID = "019dee81-1159-7259-86d1-88c201cf5451"
STATUS_URL = f"https://jsonblob.com/api/jsonBlob/{BLOB_ID}"

# A subscriber is "audit-tagged" if any of its string fields contains
# one of these markers. We're permissive on input shape because the
# subscribe API stores variable keys (source, utm_source, utm_campaign,
# referrer, etc.).
AUDIT_MARKERS = re.compile(
    r"(audit-template|ai-audit|audit-checklist|audit-tool|"
    r"clarity-assessment|audit-pitch|/ai-audit|/audit-template)",
    re.IGNORECASE,
)


def fetch_subscribers() -> list[dict]:
    req = urllib.request.Request(
        STATUS_URL,
        headers={"User-Agent": "audit-signal-monitor/1.0"},
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.load(resp)
    return data.get("subscribers", [])


def is_audit_tagged(sub: dict) -> bool:
    haystack = " ".join(str(v) for v in sub.values() if v).lower()
    return bool(AUDIT_MARKERS.search(haystack))


def load_last() -> set[str]:
    if not LAST_SNAP.exists():
        return set()
    try:
        snap = json.loads(LAST_SNAP.read_text())
        return set(snap.get("audit_emails", []))
    except (json.JSONDecodeError, KeyError):
        return set()


def save_snapshot(audit_subs: list[dict]) -> None:
    snap = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "audit_emails": [s.get("email", "") for s in audit_subs],
        "audit_subs_full": audit_subs,
    }
    LAST_SNAP.write_text(json.dumps(snap, indent=2))


def main() -> int:
    dry = "--dry" in sys.argv

    try:
        subs = fetch_subscribers()
    except (urllib.error.URLError, urllib.error.HTTPError, json.JSONDecodeError) as e:
        print(f"ERROR: could not fetch live subscribers — {e}", file=sys.stderr)
        return 1

    audit_subs = [s for s in subs if is_audit_tagged(s)]
    audit_emails = {s.get("email", "") for s in audit_subs}
    last_emails = load_last()
    new_emails = audit_emails - last_emails

    print(f"=== Audit-Signal Monitor @ {datetime.now(timezone.utc).isoformat()} ===")
    print(f"  Total subs:        {len(subs)}")
    print(f"  Audit-tagged subs: {len(audit_subs)}")
    print(f"  New since last:    {len(new_emails)}")
    print()

    if audit_subs:
        print("--- audit-tagged subscribers ---")
        for s in audit_subs:
            marker = " ← NEW" if s.get("email") in new_emails else ""
            src = s.get("source", "?")
            date = s.get("date", "?")
            print(f"  {s.get('email', '?'):40s} src={src:20s} date={date}{marker}")
        print()

    if new_emails:
        print(">> SIGNAL: fire 1-to-1 outreach via send-one.py within 4h")
        print(f">> NEW: {sorted(new_emails)}")
        if not dry:
            save_snapshot(audit_subs)
        return 10

    print(">> no new audit-tagged subs since last run")
    if not dry:
        save_snapshot(audit_subs)
    return 0


if __name__ == "__main__":
    sys.exit(main())
