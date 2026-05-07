#!/usr/bin/env python3
"""Watch the live subscriber blob for partner-channel-tagged signups.

Partner-channel pages (currently /finance-club, future cross-promo side-doors)
tag captures with deliberate source identifiers like 'finance-club',
'boucher-finance-club', 'cfo-accelerator-finance-club', etc.

Each NEW partner-channel sub is high-leverage signal:
  - Validates the cross-promo swap is converting (vs creator just posting once
    with no audience action).
  - Triggers a same-day welcome via send-one.py with the actual ZIP attached.
  - Builds the cohort we'll measure free-claim → $97 upgrade against.

Reads the live subscriber gist (primary) with jsonblob fallback. Compares to
the last snapshot. Exits 10 on NEW partner-tagged sub.

Usage:
  python3 .founder/tools/partner-signal-monitor.py        # snapshot + diff
  python3 .founder/tools/partner-signal-monitor.py --dry  # diff only

Exit codes:
  0  = ran successfully, no new partner-tagged sub
  10 = SIGNAL: new partner-tagged sub appeared
  1  = error
"""
from __future__ import annotations

import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
LAST_SNAP = STATE_DIR / "partner-monitor-last.json"

GIST_ID = "b460cc98bbc21692f1f209e852c551b5"
GIST_URL = f"https://api.github.com/gists/{GIST_ID}"
GIST_TOKEN_FILE = ROOT / ".gh_gist_token"

JSONBLOB_ID = "019dee81-1159-7259-86d1-88c201cf5451"
JSONBLOB_URL = f"https://jsonblob.com/api/jsonBlob/{JSONBLOB_ID}"

PARTNER_MARKERS = re.compile(
    r"(finance-club|boucher|cfo-accelerator|cfo-club|cfo-connect|"
    r"partner-cross-promo|cross-promo)",
    re.IGNORECASE,
)


def _gist_token() -> str | None:
    env_token = os.environ.get("GH_GIST_TOKEN") or os.environ.get("GITHUB_GIST_TOKEN")
    if env_token:
        return env_token.strip()
    if GIST_TOKEN_FILE.exists():
        return GIST_TOKEN_FILE.read_text().strip()
    return None


def fetch_subscribers() -> list[dict]:
    token = _gist_token()
    if token:
        try:
            req = urllib.request.Request(
                GIST_URL,
                headers={
                    "Authorization": f"token {token}",
                    "Accept": "application/vnd.github+json",
                    "User-Agent": "partner-signal-monitor/1.0",
                },
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                gist = json.load(resp)
            files = gist.get("files", {})
            if files:
                content = next(iter(files.values())).get("content", "{}")
                data = json.loads(content)
                return data.get("subscribers", []) if isinstance(data, dict) else []
        except Exception as e:
            print(f"WARN: gist fetch failed ({e}), falling back to jsonblob", file=sys.stderr)
    try:
        req = urllib.request.Request(
            JSONBLOB_URL,
            headers={"User-Agent": "partner-signal-monitor/1.0"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.load(resp)
        return data.get("subscribers", [])
    except Exception as e:
        print(f"WARN: jsonblob fetch also failed ({e}), returning empty list", file=sys.stderr)
        return []


def is_partner_tagged(sub: dict) -> bool:
    haystack = " ".join(str(v) for v in sub.values() if v).lower()
    return bool(PARTNER_MARKERS.search(haystack))


def load_last() -> set[str]:
    if not LAST_SNAP.exists():
        return set()
    try:
        snap = json.loads(LAST_SNAP.read_text())
        return set(snap.get("partner_emails", []))
    except (json.JSONDecodeError, KeyError):
        return set()


def save_snapshot(partner_subs: list[dict]) -> None:
    snap = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "partner_emails": [s.get("email", "") for s in partner_subs],
        "partner_subs_full": partner_subs,
    }
    LAST_SNAP.write_text(json.dumps(snap, indent=2))


def main() -> int:
    dry = "--dry" in sys.argv

    subs = fetch_subscribers()
    if not subs:
        print("ERROR: could not fetch live subscribers from gist or jsonblob", file=sys.stderr)
        return 1

    partner_subs = [s for s in subs if is_partner_tagged(s)]
    partner_emails = {s.get("email", "") for s in partner_subs}
    last_emails = load_last()
    new_emails = partner_emails - last_emails

    print(f"=== Partner-Signal Monitor @ {datetime.now(timezone.utc).isoformat()} ===")
    print(f"  Total subs:           {len(subs)}")
    print(f"  Partner-tagged subs:  {len(partner_subs)}")
    print(f"  New since last:       {len(new_emails)}")
    print()

    if partner_subs:
        print("--- partner-tagged subscribers ---")
        for s in partner_subs:
            marker = " \u2190 NEW" if s.get("email") in new_emails else ""
            src = s.get("source", "?")
            date = s.get("date", "?")
            print(f"  {s.get('email', '?'):40s} src={src:30s} date={date}{marker}")
        print()

    if new_emails:
        print(">> SIGNAL: partner cross-promo swap is converting")
        print(f">> NEW: {sorted(new_emails)}")
        print(">> ACTION: send-one.py with /ai-prompt-mega-pack.zip attached + log to .founder/sales/partner-replies-tracker.md")
        if not dry:
            save_snapshot(partner_subs)
        return 10

    print(">> no new partner-tagged subs since last run")
    if not dry:
        save_snapshot(partner_subs)
    return 0


if __name__ == "__main__":
    sys.exit(main())
