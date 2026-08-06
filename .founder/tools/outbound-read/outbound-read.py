#!/usr/bin/env python3
"""
outbound-read.py — Did the prospects OPEN their demo, and did they TALK to it?

This is the instrument that decides whether build-it-for-them-first outbound lives
or dies. It is deliberately NOT a funnel counter: it reports per-PROSPECT, because
one med-spa owner who opened her bot and asked it three questions is worth more
than a hundred anonymous sessions.

Reads:
  .founder/state/demo-outbound-log.json   (who we emailed, which bot is theirs)
  /api/track-events                        (first-party event log — see notes below)

Signal ladder, weakest to strongest:
  opened   — a page_view on /chat/<their bot id>   => the email landed and was clicked
  engaged  — >1 page_view or a return visit later  => they came back / showed a colleague
  owner    — they arrived with ?owner=1 (our link) => confirms it was OUR email, not a share
  paid     — a chatbot-pro subscription exists     => check with chatbot-funnel-read --stripe

Exit codes:
  10 = WARM LEAD — at least one prospect opened their demo. Follow up within 24h.
   0 = no opens yet (expected in the first hours; not a failure)
   1 = measurement path broken (do NOT read a 0 here as "nobody opened")

Measurement gotchas encoded here so they are never re-derived (see MEMORY):
  - PostHog does NOT hold midastools data. Source of truth is /api/track-events.
  - midastools.co 307-redirects to www — curl/urllib MUST follow redirects.
  - `attribution` can be null on any event — always guard with (e.get('attribution') or {}).
  - legacy `ts` is unreliable; use attribution.last_touch_ms (ms epoch).

Usage:
  python3 .founder/tools/outbound-read/outbound-read.py
  python3 .founder/tools/outbound-read/outbound-read.py --days 7
"""
import argparse
import json
import pathlib
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[3]
LOG = ROOT / ".founder" / "state" / "demo-outbound-log.json"
EVENTS = "https://www.midastools.co/api/track-events?key=mt-outreach-2026&limit=5000"


def fetch_events():
    req = urllib.request.Request(EVENTS, headers={"User-Agent": "midastools-outbound-read"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode()).get("events", [])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=14)
    a = ap.parse_args()

    if not LOG.exists():
        print("no send log — nothing has been emailed yet", file=sys.stderr)
        return 1
    log = json.load(open(LOG))
    sent = dict(log.get("sent", []))
    if not sent:
        print("send log has 0 recipients", file=sys.stderr)
        return 1

    try:
        events = fetch_events()
    except Exception as e:  # noqa: BLE001
        print(f"MEASUREMENT BROKEN: could not read /api/track-events: {e}", file=sys.stderr)
        return 1
    if not events:
        print("MEASUREMENT BROKEN: /api/track-events returned 0 events", file=sys.stderr)
        return 1

    # bot id -> prospect
    by_bot = {v["bot"]: (email, v) for email, v in sent.items()}

    hits = {b: [] for b in by_bot}
    for e in events:
        path = e.get("page_path") or ""
        if "/chat/" not in path:
            continue
        for bot in by_bot:
            if bot in path:
                attr = e.get("attribution") or {}
                hits[bot].append(
                    {
                        "event": e.get("event"),
                        "ms": attr.get("last_touch_ms"),
                        "session": e.get("session_id"),
                        "path": path,
                    }
                )

    opened = {b: h for b, h in hits.items() if h}

    print(f"# Outbound read — {len(sent)} prospects emailed\n")
    print("| Prospect | Opened | Events | Sessions | Owner-link |")
    print("|---|---|---|---|---|")
    for bot, (email, meta) in sorted(by_bot.items(), key=lambda kv: -len(hits[kv[0]])):
        h = hits[bot]
        sessions = len({x["session"] for x in h if x["session"]})
        owner = "yes" if any("owner=1" in (x["path"] or "") for x in h) else ""
        print(
            f"| {meta['name']} | {'✓' if h else '·'} | {len(h)} | {sessions} | {owner} |"
        )

    print(f"\n**{len(opened)} of {len(sent)} prospects opened their demo.**")
    if opened:
        print("\nWARM LEADS — follow up within 24h:")
        for bot in opened:
            email, meta = by_bot[bot]
            print(f"  - {meta['name']} <{email}> — {meta['demo']}?owner=1")
        return 10
    print("\nNo opens recorded yet. Not a failure this early — re-run in a few hours.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
