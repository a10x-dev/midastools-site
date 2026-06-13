#!/usr/bin/env python3
"""
funnel-readout.py — one-command per-session funnel picture.

Replaces the ad-hoc "pull /api/track-events + grep for outreach_generate /
listing_generate / chatbot_build / image_generate / sell_path_click ..." that
ran 1-3x EVERY session for weeks. Reads the live KV proxy (/api/track-events),
prints: event-type breakdown, signup count, every money-tool ACTIVATION event
count, page_views grouped by utm_campaign (so method-CTR is one glance), and
top page_paths.

Exit code 10 if ANY activation event > 0 (first-activation push signal — wire
to a cron to convert the kill-criterion watch from poll to push).

Usage:
  python3 .founder/tools/funnel-readout.py                 # full readout, 600 events
  python3 .founder/tools/funnel-readout.py --limit 1000
  python3 .founder/tools/funnel-readout.py --campaign memo_art_money   # CTR for one campaign
  python3 .founder/tools/funnel-readout.py --json
"""
import sys, json, argparse, urllib.request
from collections import Counter

READ_URL = "https://www.midastools.co/api/track-events"
READ_KEY = "mt-outreach-2026"

# the core-action events that mean "a money-tool produced value" — the kill-criterion metrics
ACTIVATION_EVENTS = [
    "outreach_generate", "listing_generate", "chatbot_build", "image_generate",
    "sell_path_click", "art_waitlist", "hd_waitlist",
]


def _utm_campaign(e):
    # utm_campaign lives in payload OR attribution OR the page_path query string
    p = e.get("payload") or {}
    if p.get("utm_campaign"):
        return p["utm_campaign"]
    a = e.get("attribution") or {}
    if a.get("utm_campaign"):
        return a["utm_campaign"]
    path = e.get("page_path") or ""
    if "utm_campaign=" in path:
        return path.split("utm_campaign=")[1].split("&")[0]
    return None


def fetch(limit):
    url = f"{READ_URL}?key={READ_KEY}&limit={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "funnel-readout/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=600)
    ap.add_argument("--campaign", help="show signup-relative CTR for one utm_campaign")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    data = fetch(args.limit)
    evs = data.get("events", [])
    types = Counter(e.get("event") for e in evs)
    signups = types.get("subscribe_submit", 0)

    activations = {k: types.get(k, 0) for k in ACTIVATION_EVENTS}
    any_activation = any(v > 0 for v in activations.values())

    # page_views grouped by utm_campaign — denominator for method-CTR reads
    pv_by_campaign = Counter(
        _utm_campaign(e) for e in evs
        if e.get("event") == "page_view" and _utm_campaign(e)
    )

    top_paths = Counter(
        (e.get("page_path") or "").split("?")[0]
        for e in evs if e.get("event") == "page_view"
    ).most_common(12)

    if args.json:
        print(json.dumps({
            "window_events": len(evs), "stored": data.get("stored"),
            "signups": signups, "activations": activations,
            "any_activation": any_activation,
            "pv_by_campaign": dict(pv_by_campaign),
        }, indent=2))
        sys.exit(10 if any_activation else 0)

    print(f"=== FUNNEL READOUT ({len(evs)} events / {data.get('stored')} stored) ===")
    print(f"signups (subscribe_submit): {signups}")
    print(f"event types: {dict(types)}")
    print("\n-- MONEY-TOOL ACTIVATIONS (the kill-criterion metrics) --")
    for k, v in activations.items():
        flag = "  <-- ACTIVATION" if v > 0 else ""
        print(f"  {k:18} {v}{flag}")
    if not any_activation:
        print("  (all zero — every money-tool core action is dead this window)")

    print("\n-- page_views by utm_campaign (method-CTR denominator) --")
    if pv_by_campaign:
        for c, n in pv_by_campaign.most_common(15):
            ctr = f"{100*n/signups:.1f}% of signups" if signups else ""
            print(f"  {c:28} {n}  {ctr}")
    else:
        print("  (no utm-campaign-tagged page_views)")

    if args.campaign:
        n = pv_by_campaign.get(args.campaign, 0)
        print(f"\n-- CAMPAIGN {args.campaign}: {n} page_views"
              + (f" = {100*n/signups:.1f}% of {signups} signups" if signups else "") + " --")

    print("\n-- top page_paths --")
    for path, n in top_paths:
        print(f"  {n:4}  {path}")

    sys.exit(10 if any_activation else 0)


if __name__ == "__main__":
    main()
