#!/usr/bin/env python3
"""Watch the live track-events store for /q/{slug} page visits.

Personalized prospect quiz pages live at /q/{slug} (built from
lib/personal-pages.js). Each cold-email batch lands a unique slug per
prospect (e.g. /q/donnie-wooten, /q/frank-lodestro). When a prospect
clicks through their email and lands on the page, /api/track logs a
page_view event into the track-events jsonblob.

This tool reads that store, filters page_view events whose path begins
with /q/, dedupes by slug + first-seen timestamp, and reports any NEW
slugs since the last snapshot. A NEW slug visit is the strongest leading
indicator we have on cold-email channel engagement BEFORE a reply lands —
a prospect that clicked is a prospect that read.

Storage note: track-events lives in jsonblob (separate from subscribers
so traffic spikes don't kill the subscribers blob). The blob has died
multiple times (see pages/api/track.js death log). Tool degrades
gracefully: 404 = blob died, surface it as a hard error so the operator
re-runs the BLOB_ID hot-fix per the documented runbook.

Usage:
  python3 .founder/tools/quiz-visit-monitor.py        # snapshot + diff
  python3 .founder/tools/quiz-visit-monitor.py --dry  # diff only, don't save snapshot

Exit codes:
  0  = ran successfully, no new /q/ visits
  10 = SIGNAL: NEW /q/ slug visited — fire same-day reply-handling within 30min
  1  = error (blob dead, network, parse)
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
LAST_SNAP = STATE_DIR / "quiz-monitor-last.json"

# Track-events jsonblob — separate from subscribers blob.
# Death log lives in pages/api/track.js; update both when blob is rotated.
TRACK_BLOB_ID = "019e09fa-6623-7182-a6a4-66b00ede4152"
TRACK_BLOB_URL = f"https://jsonblob.com/api/jsonBlob/{TRACK_BLOB_ID}"

QUIZ_PATH_RE = re.compile(r"^/q/([a-z0-9-]+)", re.IGNORECASE)


def fetch_events() -> list[dict] | None:
    try:
        req = urllib.request.Request(
            TRACK_BLOB_URL,
            headers={"User-Agent": "quiz-visit-monitor/1.0"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.load(resp)
        return data.get("events", [])
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(
                f"ERROR: track blob {TRACK_BLOB_ID} returned 404 (DEAD). "
                "Hot-fix: POST a fresh blob, update TRACK_BLOB_ID in "
                "pages/api/track.js + this tool, redeploy.",
                file=sys.stderr,
            )
        else:
            print(f"ERROR: track blob fetch HTTP {e.code}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"ERROR: track blob fetch failed: {e}", file=sys.stderr)
        return None


def extract_slug(path: str) -> str | None:
    if not path:
        return None
    m = QUIZ_PATH_RE.match(path)
    return m.group(1).lower() if m else None


def load_last() -> set[str]:
    if not LAST_SNAP.exists():
        return set()
    try:
        snap = json.loads(LAST_SNAP.read_text())
        return set(snap.get("seen_slugs", []))
    except (json.JSONDecodeError, KeyError):
        return set()


def save_snapshot(slug_first_seen: dict[str, str]) -> None:
    snap = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "seen_slugs": sorted(slug_first_seen.keys()),
        "slug_first_seen": slug_first_seen,
    }
    LAST_SNAP.write_text(json.dumps(snap, indent=2))


def main() -> int:
    dry = "--dry" in sys.argv

    events = fetch_events()
    if events is None:
        return 1

    page_views = [e for e in events if e.get("event") == "page_view"]
    quiz_views: dict[str, list[dict]] = {}
    slug_first_seen: dict[str, str] = {}

    for ev in page_views:
        path = ev.get("page_path", "") or ev.get("payload", {}).get("path", "")
        slug = extract_slug(path)
        if not slug:
            continue
        quiz_views.setdefault(slug, []).append(ev)
        ts = ev.get("ts", "")
        if slug not in slug_first_seen or (ts and ts < slug_first_seen[slug]):
            slug_first_seen[slug] = ts

    last_slugs = load_last()
    current_slugs = set(quiz_views.keys())
    new_slugs = current_slugs - last_slugs

    print(f"=== Quiz-Visit Monitor @ {datetime.now(timezone.utc).isoformat()} ===")
    print(f"  Total events in blob:   {len(events)}")
    print(f"  Total page_view events: {len(page_views)}")
    print(f"  Distinct /q/ slugs:     {len(current_slugs)}")
    print(f"  New since last run:     {len(new_slugs)}")
    print()

    if quiz_views:
        print("--- /q/ slug visits ---")
        for slug in sorted(quiz_views.keys()):
            evs = quiz_views[slug]
            first = slug_first_seen.get(slug, "?")
            marker = " ← NEW" if slug in new_slugs else ""
            print(f"  /q/{slug:30s} visits={len(evs):3d}  first_seen={first}{marker}")
        print()

    if new_slugs:
        print(">> SIGNAL: NEW /q/ slug visited — prospect engaged with cold email")
        print(f">> NEW: {sorted(new_slugs)}")
        print(">> Action: log to .founder/crm/customers.md, monitor for reply, "
              "fire reply-handling playbook if reply lands within 30min")
        if not dry:
            save_snapshot(slug_first_seen)
        return 10

    if current_slugs:
        print(">> no new /q/ slug visits since last run")
    else:
        print(">> no /q/ slug visits in track-events blob "
              "(expected — track blob fresh as of 2026-05-08 OR no prospect clicks yet)")

    if not dry:
        save_snapshot(slug_first_seen)
    return 0


if __name__ == "__main__":
    sys.exit(main())
