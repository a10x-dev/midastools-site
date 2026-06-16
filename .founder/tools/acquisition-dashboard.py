#!/usr/bin/env python3
"""
acquisition-dashboard.py — the growth-sprint cockpit.

Reads the subscriber gist (ground truth) and reports WHERE signups come from
+ the daily growth curve, so we can double down on what's working.

Pulls source / utm_source / referrer / date per sub. The homepage form now
sends first-touch attribution (commit c851a37), so attribution coverage
improves for every signup AFTER 2026-06-16.

Usage:
  python3 .founder/tools/acquisition-dashboard.py            # full readout
  python3 .founder/tools/acquisition-dashboard.py --days 7   # last 7 days
  python3 .founder/tools/acquisition-dashboard.py --save     # snapshot for delta

Exit 10 if a NEW source channel appears since last snapshot (worth a look).
"""
import sys, json, os, argparse, urllib.request
from collections import Counter, defaultdict
from datetime import datetime, timezone, timedelta

GIST_ID = "b460cc98bbc21692f1f209e852c551b5"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE = os.path.join(ROOT, "state", "acquisition-last.json")


def load_token():
    # file-wins-over-env per env-vs-file-secret-resolution principle
    fp = os.path.join(ROOT, ".gh_gist_token")
    if os.path.exists(fp):
        with open(fp) as f:
            return f.read().strip()
    return os.environ.get("GH_GIST_TOKEN", "")


def fetch_subs():
    token = load_token()
    req = urllib.request.Request(
        f"https://api.github.com/gists/{GIST_ID}",
        headers={"Authorization": f"token {token}", "User-Agent": "midas-acq"},
    )
    g = json.load(urllib.request.urlopen(req, timeout=20))
    for fo in g.get("files", {}).values():
        c = fo.get("content", "")
        if c and "@" in c:
            data = json.loads(c)
            if isinstance(data, dict):
                data = data.get("subscribers", data.get("subs", list(data.values())))
            return data
    return []


def channel_of(s):
    """Best-effort single channel label per sub, preferring richest signal."""
    utm = (s.get("utm_source") or "").strip()
    ref = (s.get("referrer") or s.get("referrer_host") or "").strip()
    attr = s.get("attribution") or {}
    if isinstance(attr, dict):
        utm = utm or (attr.get("utm_source") or "").strip()
        ref = ref or (attr.get("referrer_host") or "").strip()
    if utm:
        return f"utm:{utm}"
    if ref:
        host = ref.replace("https://", "").replace("http://", "").split("/")[0]
        if host and "midastools" not in host:
            return f"ref:{host}"
    src = (s.get("source") or "unknown").strip()
    return f"src:{src}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=14)
    ap.add_argument("--save", action="store_true")
    args = ap.parse_args()

    subs = fetch_subs()
    now = datetime.now(timezone.utc)
    today = now.date().isoformat()

    by_day = Counter()
    chans = Counter()
    chans_recent = Counter()
    cutoff = now - timedelta(days=args.days)

    for s in subs:
        if not isinstance(s, dict):
            continue
        dt = (s.get("date") or s.get("created") or "")[:10]
        if dt:
            by_day[dt] += 1
        ch = channel_of(s)
        chans[ch] += 1
        # recent-window channel mix
        raw = s.get("date") or s.get("created") or ""
        try:
            d = datetime.fromisoformat(raw.replace("Z", "+00:00"))
            if d >= cutoff:
                chans_recent[ch] += 1
        except Exception:
            pass

    days_sorted = sorted(by_day)[-args.days:]
    recent_total = sum(by_day[d] for d in days_sorted)
    n_days = max(len(days_sorted), 1)
    avg = recent_total / n_days

    print(f"=== ACQUISITION DASHBOARD @ {now.isoformat(timespec='seconds')} ===")
    print(f"Total subs: {len(subs)}   |   today ({today}): {by_day.get(today,0)}")
    print(f"Last {n_days}d: {recent_total} signups  =>  AVG {avg:.1f}/day")
    print(f"10x target: {avg*10:.0f}/day\n")

    print(f"-- signups per day (last {args.days}) --")
    for d in days_sorted:
        bar = "#" * by_day[d]
        print(f"  {d}  {by_day[d]:3}  {bar}")

    print(f"\n-- CHANNEL MIX (recent {args.days}d, n={sum(chans_recent.values())}) --")
    for k, v in chans_recent.most_common(15):
        print(f"  {v:3}  {k}")

    print(f"\n-- CHANNEL MIX (all-time, n={len(subs)}) --")
    for k, v in chans.most_common(15):
        print(f"  {v:3}  {k}")

    # delta vs last snapshot
    prev = {}
    if os.path.exists(STATE):
        try:
            prev = json.load(open(STATE))
        except Exception:
            prev = {}
    prev_chans = set(prev.get("channels", []))
    new_chans = [k for k in chans if k not in prev_chans] if prev_chans else []
    if new_chans:
        print(f"\n>> NEW CHANNEL(S) since last snapshot: {', '.join(new_chans)}")

    if args.save:
        os.makedirs(os.path.dirname(STATE), exist_ok=True)
        json.dump(
            {"at": now.isoformat(), "total": len(subs), "channels": list(chans)},
            open(STATE, "w"),
        )
        print(f"\n[snapshot saved -> {STATE}]")

    sys.exit(10 if new_chans else 0)


if __name__ == "__main__":
    main()
