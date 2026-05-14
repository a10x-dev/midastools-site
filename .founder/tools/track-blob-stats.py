#!/usr/bin/env python3
"""Query and aggregate the live /api/track jsonblob.

Replaces the ad-hoc curl+python one-liners I keep writing every standup
(e.g. "how many distinct chatgpt sessions today?", "CTR per plink_id?",
"top page_paths in the last 24h?"). Filters + groupby compose so the
common questions are one command.

Filters
  --filter k=v    repeatable, k matches: event, page_path, utm_source,
                  utm_medium, utm_campaign, session_id, server_country,
                  referer (substring), or any payload.* key (prefix with
                  "payload."). Examples:
                    --filter utm_source=chatgpt.com
                    --filter event=cta_click
                    --filter payload.plink_id=plink_1TEF84

  --since 24h     time-window filter (s/m/h/d). Default: all events.
  --path-prefix /q/    quick alias for "page_path startswith"

Groupby
  --groupby <key>   group result by key, print markdown table.
                    Accepts the same keys as --filter.
                    Special: "session_id" computes unique session count;
                    "hour" buckets by ISO hour.
  --top N           limit to top N rows (default 25)

Output
  default     markdown table to stdout
  --json      raw rows as JSON list

Usage examples
  track-blob-stats.py --groupby page_path --top 10
  track-blob-stats.py --filter utm_source=chatgpt.com --groupby session_id
  track-blob-stats.py --filter event=cta_click --groupby payload.plink_id
  track-blob-stats.py --filter event=cta_click --since 24h
  track-blob-stats.py --path-prefix /q/ --groupby page_path
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.request
from collections import Counter
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent

# Source-of-truth for the live track blob ID.
# Death log lives in pages/api/track.js; update both when blob is rotated.
TRACK_BLOB_ID = "019e2442-f1bb-7807-ae33-88a0d379d5e0"  # 16th rotation 2026-05-14 02:13 UTC (prior 019e17f6 died <26h MTBF; before that 019e09fa, 019dfe20)
TRACK_BLOB_URL = f"https://jsonblob.com/api/jsonBlob/{TRACK_BLOB_ID}"

SINCE_RE = re.compile(r"^(\d+)([smhd])$")


def fetch_events() -> list[dict]:
    req = urllib.request.Request(
        TRACK_BLOB_URL,
        headers={"User-Agent": "track-blob-stats/1.0"},
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.load(resp)
    return data.get("events", []) if isinstance(data, dict) else []


def parse_since(since: str) -> datetime | None:
    if not since:
        return None
    m = SINCE_RE.match(since.strip().lower())
    if not m:
        raise SystemExit(f"--since must look like 24h, 30m, 7d (got {since!r})")
    n, unit = int(m.group(1)), m.group(2)
    mult = {"s": 1, "m": 60, "h": 3600, "d": 86400}[unit]
    return datetime.now(timezone.utc) - timedelta(seconds=n * mult)


def field_lookup(event: dict, key: str):
    """Resolve a key like 'utm_source', 'page_path', 'payload.plink_id',
    'attribution.referrer', or 'hour' against an event."""
    if key == "hour":
        ts = event.get("ts", "")
        return ts[:13] if ts else ""
    if key in ("utm_source", "utm_medium", "utm_campaign", "referrer", "landing_slug"):
        attr = event.get("attribution") or {}
        return attr.get(key, "") if isinstance(attr, dict) else ""
    if key.startswith("payload."):
        sub = key.split(".", 1)[1]
        payload = event.get("payload") or {}
        return payload.get(sub, "") if isinstance(payload, dict) else ""
    if key.startswith("attribution."):
        sub = key.split(".", 1)[1]
        attr = event.get("attribution") or {}
        return attr.get(sub, "") if isinstance(attr, dict) else ""
    return event.get(key, "")


def matches_filter(event: dict, key: str, value: str) -> bool:
    actual = field_lookup(event, key)
    if actual is None:
        return False
    actual_s = str(actual)
    # referer + page_path: substring match. Everything else: exact.
    if key in ("referer", "page_path") and key != "page_path":
        return value.lower() in actual_s.lower()
    return actual_s == value


def parse_filters(raw: list[str]) -> list[tuple[str, str]]:
    out = []
    for r in raw or []:
        if "=" not in r:
            raise SystemExit(f"--filter must be k=v (got {r!r})")
        k, v = r.split("=", 1)
        out.append((k.strip(), v.strip()))
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Query /api/track jsonblob.")
    ap.add_argument("--filter", action="append", default=[], metavar="K=V")
    ap.add_argument("--since", default="", metavar="24h", help="e.g. 24h, 30m, 7d")
    ap.add_argument("--path-prefix", default="", help="shortcut for page_path startswith")
    ap.add_argument("--groupby", default="", help="key to group by, see --help")
    ap.add_argument("--top", type=int, default=25)
    ap.add_argument("--json", action="store_true", help="raw rows as JSON")
    args = ap.parse_args()

    try:
        events = fetch_events()
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(
                f"ERROR: track blob {TRACK_BLOB_ID} returned 404 (DEAD). "
                "Run BLOB_ID hot-fix per pages/api/track.js runbook.",
                file=sys.stderr,
            )
        else:
            print(f"ERROR: HTTP {e.code} fetching track blob", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 1

    since_dt = parse_since(args.since)
    filters = parse_filters(args.filter)

    rows = []
    for ev in events:
        ts = ev.get("ts", "")
        if since_dt and ts:
            try:
                ev_dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
                if ev_dt < since_dt:
                    continue
            except ValueError:
                pass
        if args.path_prefix and not str(ev.get("page_path", "")).startswith(args.path_prefix):
            continue
        ok = True
        for k, v in filters:
            if not matches_filter(ev, k, v):
                ok = False
                break
        if ok:
            rows.append(ev)

    print(f"# track-blob-stats", file=sys.stderr)
    print(f"  blob:    {TRACK_BLOB_ID}", file=sys.stderr)
    print(f"  total:   {len(events)} events in blob", file=sys.stderr)
    print(f"  matched: {len(rows)} events after filters", file=sys.stderr)
    if since_dt:
        print(f"  since:   {since_dt.isoformat()}", file=sys.stderr)
    print(file=sys.stderr)

    if args.json:
        print(json.dumps(rows, indent=2, default=str))
        return 0

    if not args.groupby:
        # Default: show first 25 rows in compact form.
        print("| ts | event | page_path | utm_source | session_id |")
        print("|----|-------|-----------|------------|------------|")
        for r in rows[: args.top]:
            attr = r.get("attribution") or {}
            print(
                f"| {r.get('ts','')[:19]} "
                f"| {r.get('event','')[:18]} "
                f"| {str(r.get('page_path',''))[:40]} "
                f"| {str(attr.get('utm_source','') if isinstance(attr, dict) else '')[:20]} "
                f"| {str(r.get('session_id',''))[:12]} |"
            )
        if len(rows) > args.top:
            print(f"\n_(+{len(rows) - args.top} more — pass --top {len(rows)} or --groupby)_")
        return 0

    # groupby
    if args.groupby == "session_id":
        # Unique-session count is the question; show top sessions by event count too.
        c = Counter(str(field_lookup(e, "session_id")) for e in rows if field_lookup(e, "session_id"))
        unique = len([k for k in c if k])
        print(f"**Unique session_ids:** {unique}")
        print()
        print("| session_id | events |")
        print("|------------|--------|")
        for sid, n in c.most_common(args.top):
            print(f"| {sid[:24]} | {n} |")
        return 0

    c = Counter(str(field_lookup(e, args.groupby)) for e in rows)
    print(f"| {args.groupby} | events |")
    print("|" + "-" * (len(args.groupby) + 2) + "|--------|")
    for k, n in c.most_common(args.top):
        print(f"| {k[:60] if k else '(empty)'} | {n} |")
    return 0


if __name__ == "__main__":
    sys.exit(main())
