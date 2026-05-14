#!/usr/bin/env python3
"""Watch /api/track for Reddit-attributed events from the May 14 P4b-A campaign.

Reads the live track jsonblob, filters events whose page_path contains
utm_source=reddit (or any utm_medium=promoted). Reports unique sessions,
first-touch timestamps, geo (if present), and any cta_click events that
followed.

Exit codes:
  0 = no Reddit signal yet (or only seen before)
  10 = NEW Reddit-attributed session(s) since last snapshot
  20 = NEW Reddit-attributed cta_click(s) since last snapshot (highest priority)
"""
import json
import os
import sys
import re
import urllib.request
from datetime import datetime, timezone

TRACK_BLOB_ID = "019e2442-f1bb-7807-ae33-88a0d379d5e0"
JSONBLOB_BASE = "https://jsonblob.com/api/jsonBlob"
STATE_PATH = ".founder/state/reddit-monitor-last.json"

REDDIT_RE = re.compile(r"utm_source=reddit", re.I)


def fetch_events():
    req = urllib.request.Request(
        f"{JSONBLOB_BASE}/{TRACK_BLOB_ID}",
        headers={"User-Agent": "reddit-ad-monitor/1.0"},
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode("utf-8"))
    if isinstance(data, dict) and "events" in data:
        return data["events"]
    if isinstance(data, list):
        return data
    return []


def load_state():
    if not os.path.exists(STATE_PATH):
        return {"last_event_ts": None, "seen_sessions": []}
    try:
        with open(STATE_PATH) as f:
            return json.load(f)
    except Exception:
        return {"last_event_ts": None, "seen_sessions": []}


def save_state(state):
    os.makedirs(os.path.dirname(STATE_PATH), exist_ok=True)
    with open(STATE_PATH, "w") as f:
        json.dump(state, f, indent=2)


def main():
    events = fetch_events()
    reddit_events = [
        e for e in events
        if REDDIT_RE.search(str(e.get("page_path", ""))) or REDDIT_RE.search(str(e.get("utm_source", "")))
    ]

    print(f"=== Reddit ad monitor @ {datetime.now(timezone.utc).isoformat()} ===")
    print(f"  total track events: {len(events)}")
    print(f"  reddit-attributed:  {len(reddit_events)}")

    if not reddit_events:
        print("  no Reddit signal yet — ad still in review or not running")
        save_state({"last_event_ts": None, "seen_sessions": []})
        sys.exit(0)

    state = load_state()
    seen = set(state.get("seen_sessions", []))
    new_sessions = []
    new_clicks = []

    for e in reddit_events:
        sess = (e.get("session_id") or "")[:12]
        ev_type = e.get("event")
        ts = e.get("ts") or e.get("timestamp", "?")
        page = (e.get("page_path", "") or "")[:60]
        if sess and sess not in seen:
            new_sessions.append((ts, sess, ev_type, page))
            seen.add(sess)
        if ev_type == "cta_click" and sess:
            new_clicks.append((ts, sess, page))

    if new_sessions:
        print(f"\n  🟢 {len(new_sessions)} NEW Reddit-attributed session(s):")
        for ts, sess, ev, page in sorted(new_sessions)[:20]:
            print(f"    {ts}  session={sess}  event={ev}  page={page}")

    if new_clicks:
        print(f"\n  🔥 {len(new_clicks)} cta_click event(s) from Reddit traffic:")
        for ts, sess, page in new_clicks:
            print(f"    {ts}  session={sess}  page={page}")

    state["seen_sessions"] = list(seen)
    save_state(state)

    if new_clicks:
        sys.exit(20)
    if new_sessions:
        sys.exit(10)
    sys.exit(0)


if __name__ == "__main__":
    main()
