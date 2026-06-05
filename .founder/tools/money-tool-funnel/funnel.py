#!/usr/bin/env python3
"""
money-tool-funnel — One-shot funnel read for every live money-tool.

Replaces the manual ritual I run 1-3x EVERY session: pull /api/track-events,
grep for a tool's core-action event count + page_views on its path, then eyeball
whether the tool is invisible (0 activations) or converting.

Storage moved jsonblob -> Upstash KV behind the /api/track-events proxy (S29),
so track-blob-stats.py (jsonblob) is dead for this. This reads the live proxy.

Usage:
  python3 funnel.py                 # table for all known money-tools
  python3 funnel.py --limit 1000    # widen the event window (default 600)
  python3 funnel.py --json          # raw json for scripting
  python3 funnel.py --exit-on-activation   # exit 10 if ANY tool has >0 activations
                                            # (cron candidate: fires when discovery finally works)

Exit codes:
  0  ran clean
  10 with --exit-on-activation: at least one tool fired its core action (the signal we wait for)
"""
import json
import sys
import urllib.request

BASE = "https://www.midastools.co/api/track-events"
KEY = "mt-outreach-2026"

# (label, page_path_prefix, core_action_event)
TOOLS = [
    ("Outreach Machine", "/outreach-machine", "outreach_generate"),
    ("Listing Machine",  "/listing-machine",  "listing_generate"),
    ("Buyer Radar",      "/buyer-radar",       "buyer_radar_search"),
    ("Chatbot Builder",  "/chatbot-builder",   "chatbot_build"),
]


def fetch(limit):
    url = f"{BASE}?key={KEY}&limit={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "money-tool-funnel/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())


def main():
    args = sys.argv[1:]
    limit = 600
    if "--limit" in args:
        limit = int(args[args.index("--limit") + 1])
    as_json = "--json" in args
    exit_on_activation = "--exit-on-activation" in args

    data = fetch(limit)
    events = data.get("events", data if isinstance(data, list) else [])
    total = len(events)

    rows = []
    any_activation = False
    for label, prefix, action in TOOLS:
        pv = sum(
            1 for e in events
            if e.get("event") == "page_view"
            and str(e.get("page_path", "")).startswith(prefix)
        )
        acts = sum(1 for e in events if e.get("event") == action)
        if acts > 0:
            any_activation = True
        verdict = "🟢 CONVERTING" if acts > 0 else ("🟡 traffic, 0 act" if pv > 0 else "🔴 INVISIBLE")
        rows.append({
            "tool": label, "path": prefix, "action": action,
            "page_views": pv, "activations": acts, "verdict": verdict,
        })

    if as_json:
        print(json.dumps({"window": total, "tools": rows}, indent=2))
    else:
        print(f"# Money-tool funnel — {total} events in window\n")
        print(f"{'Tool':<18} {'PV':>4} {'Act':>4}  Verdict")
        print("-" * 48)
        for r in rows:
            print(f"{r['tool']:<18} {r['page_views']:>4} {r['activations']:>4}  {r['verdict']}")
        print()
        if not any_activation:
            print("⚠ Zero activations across all tools — distribution is the bottleneck, not the tools.")

    if exit_on_activation and any_activation:
        sys.exit(10)


if __name__ == "__main__":
    main()
