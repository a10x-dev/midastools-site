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


# Our own QA walks land in the same event stream as real prospects. On 2026-08-06 a
# browser check of one prospect's demo was counted as an "open" and surfaced that
# prospect as a warm lead — a false positive that would have had me emailing a med spa
# to follow up on a visit I made myself. Two clean discriminators, both verified in the
# raw events: our QA browser reports HeadlessChrome, and we operate from MX while every
# prospect in this cohort is in Arizona. Excluded rows are PRINTED, never dropped
# silently — a filter you cannot see is the next version of the same bug.
INTERNAL_UA = ("headlesschrome", "playwright", "puppeteer", "python-", "curl/",
               "bot", "crawler", "spider")
HOME_COUNTRY = "MX"


def why_internal(e):
    ua = (e.get("user_agent") or "").lower()
    for m in INTERNAL_UA:
        if m in ua:
            return f"UA~{m}"
    if (e.get("server_country") or "") == HOME_COUNTRY:
        return f"country={HOME_COUNTRY} (ours, cohort is US)"
    return ""


def is_internal(e):
    return bool(why_internal(e))


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
    excluded = []
    for e in events:
        path = e.get("page_path") or ""
        if "/chat/" not in path:
            continue
        for bot in by_bot:
            if bot not in path:
                continue
            attr = e.get("attribution") or {}
            row = {
                "event": e.get("event"),
                "ms": attr.get("last_touch_ms"),
                "session": e.get("session_id"),
                "path": path,
            }
            if is_internal(e):
                excluded.append((by_bot[bot][1]["name"], why_internal(e)))
            else:
                hits[bot].append(row)

    opened = {b: h for b, h in hits.items() if h}
    # A conversation is the real buying signal — an owner who ASKED their own bot
    # questions is qualitatively different from one who glanced at the page and left.
    msgs = {b: [x for x in h if x["event"] == "chatbot_message"] for b, h in hits.items()}
    engaged = {b: m for b, m in msgs.items() if m}

    print(f"# Outbound read — {len(sent)} prospects emailed\n")
    print("| Prospect | Opened | Msgs | Events | Sessions | Owner-link |")
    print("|---|---|---|---|---|---|")
    for bot, (email, meta) in sorted(
        by_bot.items(), key=lambda kv: (-len(msgs[kv[0]]), -len(hits[kv[0]]))
    ):
        h = hits[bot]
        sessions = len({x["session"] for x in h if x["session"]})
        owner = "yes" if any("owner=1" in (x["path"] or "") for x in h) else ""
        nmsg = len(msgs[bot])
        print(
            f"| {meta['name']} | {'✓' if h else '·'} | {nmsg if nmsg else '·'} | "
            f"{len(h)} | {sessions} | {owner} |"
        )

    if excluded:
        print(f"\n_Excluded {len(excluded)} internal/QA event(s) — not counted as opens:_")
        for nm, why in excluded[:10]:
            print(f"  - {nm} ({why})")

    print(
        f"\n**{len(opened)} of {len(sent)} prospects opened their demo. "
        f"{len(engaged)} held a conversation with it.**"
    )
    if engaged:
        print("\nHOT — they talked to their own bot. Reply TODAY:")
        for bot in engaged:
            email, meta = by_bot[bot]
            print(
                f"  - {meta['name']} <{email}> — {len(engaged[bot])} messages "
                f"— {meta['demo']}?owner=1"
            )
    if opened:
        warm = [b for b in opened if b not in engaged]
        if warm:
            print("\nWARM — opened but did not talk. Follow up within 24h:")
            for bot in warm:
                email, meta = by_bot[bot]
                print(f"  - {meta['name']} <{email}> — {meta['demo']}?owner=1")
        return 10
    print("\nNo opens recorded yet. Not a failure this early — re-run in a few hours.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
