#!/usr/bin/env python3
"""
chatbot-funnel-read.py — ONE command that answers "is the Chatbot Builder bet working?"

WHY THIS EXISTS
---------------
On 2026-07-28 I measured the midastools funnel end-to-end for the FIRST time in ~6 weeks
of shipping against it. That single read falsified two standing beliefs (the SEO cluster
IS ranking; the activation blocker was a self-imposed email gate, not demand). Before it,
I had shipped 6 niche pages on a hypothesis nobody had checked.

The read took most of a session because the measurement path had to be re-derived:
  * PostHog does NOT contain midastools data (project 19882 holds Armando's OTHER apps).
  * The real source is our own first-party log: /api/track-events.
  * `attribution` is sometimes null  -> guard with (e.get('attribution') or {}).
  * Use attribution.last_touch_ms for the time window (the legacy `ts` field is broken).
  * midastools.co 307-redirects to www.  -> curl MUST use -L.
  * `timeout` is not installed in this zsh.

All of that is now encoded here so it is never re-derived again.

USAGE
    python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py            # 14d read
    python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --days 7
    python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --json
    python3 .founder/tools/chatbot-funnel-read/chatbot-funnel-read.py --save
    STRIPE_SECRET_KEY=... ... --stripe                                          # + recurring check

EXIT CODES  (designed for cron / ping-on-signal)
    0  = nothing changed materially
    10 = PING-WORTHY: a first paid subscription appeared, OR chatbot_build rate moved
         beyond the recorded baseline in either direction
    1  = the measurement path itself is broken (fetch failed / schema drift)

The exit-10 convention is the point: this is meant to be the push signal that replaces
polling. Without it, "did the funnel move?" costs a session; with it, it costs nothing.
"""

import argparse
import json
import os
import subprocess
import sys
import time
from collections import Counter, defaultdict

TRACK_URL = "https://www.midastools.co/api/track-events"
TRACK_KEY = os.environ.get("MT_TRACK_KEY", "mt-outreach-2026")
STATE_PATH = os.path.join(os.path.dirname(__file__), "last-read.json")

# Baseline recorded 2026-07-28 (14d window, Jul 14-28). Used for drift detection.
BASELINE = {
    "window_days": 14,
    "sessions": 3090,
    "google_sessions": 592,
    "builder_views": 68,
    "chatbot_build": 4,
    "paid_subscriptions": 0,
}

CHATBOT_PATH_HINTS = ("/chatbot", "/chat/", "chatbot")


def fetch_events(limit=5000):
    """Pull the first-party event log. curl -L is mandatory (307 to www)."""
    try:
        raw = subprocess.run(
            ["curl", "-sL", "--max-time", "45",
             f"{TRACK_URL}?key={TRACK_KEY}&limit={limit}"],
            capture_output=True, text=True, check=True,
        ).stdout
    except subprocess.CalledProcessError as exc:
        print(f"FATAL: curl failed: {exc}", file=sys.stderr)
        sys.exit(1)
    if not raw.strip():
        print("FATAL: empty response from track-events", file=sys.stderr)
        sys.exit(1)
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        print(f"FATAL: non-JSON response (first 300b): {raw[:300]}", file=sys.stderr)
        sys.exit(1)
    if "events" not in data:
        print(f"FATAL: schema drift — no 'events' key. Keys: {list(data)}", file=sys.stderr)
        sys.exit(1)
    return data["events"]


def ts_of(ev):
    """Event timestamp in ms. attribution can be null — this guard is load-bearing."""
    attr = ev.get("attribution") or {}
    return attr.get("last_touch_ms") or attr.get("first_touch_ms") or 0


def analyse(events, days):
    cutoff = (time.time() - days * 86400) * 1000
    win = [e for e in events if ts_of(e) >= cutoff]

    sessions = {e.get("session_id") for e in win if e.get("session_id")}
    google_sessions = {
        e.get("session_id") for e in win
        if (e.get("attribution") or {}).get("referrer_host", "").endswith("google.com")
    }
    google_sessions.discard(None)

    by_event = Counter(e.get("event") for e in win)
    page_views = [e for e in win if e.get("event") == "page_view"]

    top_paths = Counter(e.get("page_path") for e in page_views).most_common(12)

    # Organic landing pages — the only traffic stream that is genuinely buyer-shaped.
    google_landings = Counter(
        (e.get("attribution") or {}).get("landing_slug")
        for e in win
        if (e.get("attribution") or {}).get("referrer_host", "").endswith("google.com")
    ).most_common(12)

    builder_views = sum(
        1 for e in page_views if (e.get("page_path") or "").startswith("/chatbot-builder")
    )
    chatbot_touch_sessions = {
        e.get("session_id") for e in win
        if any(h in (e.get("page_path") or "") for h in CHATBOT_PATH_HINTS)
    }
    chatbot_touch_sessions.discard(None)

    # Activation, split by the `source` tag added 2026-07-28 (blog-inline vs builder page).
    builds = [e for e in win if e.get("event") == "chatbot_build"]
    builds_by_source = Counter(
        (e.get("payload") or {}).get("source") or "untagged" for e in builds
    )
    emails = [e for e in win if e.get("event") == "chatbot_email_captured"]
    emails_by_source = Counter(
        (e.get("payload") or {}).get("source") or "untagged" for e in emails
    )
    subs_by_source = Counter(
        (e.get("payload") or {}).get("source") or "untagged"
        for e in win if e.get("event") == "subscribe_submit"
    )

    return {
        "window_days": days,
        "events_in_window": len(win),
        "events_total_stored": len(events),
        "sessions": len(sessions),
        "google_sessions": len(google_sessions),
        "page_views": len(page_views),
        "event_mix": dict(by_event.most_common(15)),
        "top_paths": top_paths,
        "google_landings": google_landings,
        "chatbot_touch_sessions": len(chatbot_touch_sessions),
        "builder_views": builder_views,
        "chatbot_build": len(builds),
        "builds_by_source": dict(builds_by_source),
        "chatbot_email_captured": len(emails),
        "emails_by_source": dict(emails_by_source),
        "subscribe_submit": sum(1 for e in win if e.get("event") == "subscribe_submit"),
        "subs_by_source": dict(subs_by_source),
    }


def stripe_recurring():
    """Count live subscriptions. The ONLY number that ends the $0-recurring era."""
    key = os.environ.get("STRIPE_SECRET_KEY")
    if not key:
        for p in (".founder/.stripe_key",):
            if os.path.exists(p):
                key = open(p).read().strip()
                break
    if not key:
        return None
    try:
        raw = subprocess.run(
            ["curl", "-sL", "--max-time", "30",
             "https://api.stripe.com/v1/subscriptions?status=all&limit=100",
             "-u", f"{key}:"],
            capture_output=True, text=True, check=True,
        ).stdout
        data = json.loads(raw)
        if "error" in data:
            return {"error": data["error"].get("message")}
        subs = data.get("data", [])
        return {
            "count": len(subs),
            "active": sum(1 for s in subs if s.get("status") == "active"),
            "ids": [s.get("id") for s in subs[:10]],
        }
    except Exception as exc:  # noqa: BLE001 - diagnostic path
        return {"error": str(exc)}


def render(r, stripe):
    L = []
    A = L.append
    A(f"# Chatbot funnel read — last {r['window_days']}d")
    A("")
    A(f"Events in window: {r['events_in_window']} (of {r['events_total_stored']} stored)")
    A("")
    A("## Traffic")
    A("| metric | value |")
    A("|---|---|")
    A(f"| unique sessions | {r['sessions']} |")
    A(f"| Google organic sessions | {r['google_sessions']} |")
    A(f"| page views | {r['page_views']} |")
    A(f"| subscribe_submit | {r['subscribe_submit']} |")
    A("")
    A("## Chatbot funnel (the bet)")
    A("| stage | value | baseline (Jul 14-28) |")
    A("|---|---|---|")
    A(f"| sessions touching a chatbot page | {r['chatbot_touch_sessions']} | 183 |")
    A(f"| /chatbot-builder views | {r['builder_views']} | {BASELINE['builder_views']} |")
    A(f"| **chatbot_build (ACTIVATION)** | **{r['chatbot_build']}** | {BASELINE['chatbot_build']} |")
    A(f"| chatbot_email_captured | {r['chatbot_email_captured']} | n/a (new Jul 28) |")
    if stripe is not None:
        if "error" in stripe:
            A(f"| **paid subscriptions** | ERR: {stripe['error'][:60]} | 0 |")
        else:
            A(f"| **paid subscriptions** | **{stripe['count']}** ({stripe['active']} active) | 0 |")
    A("")
    A(f"builds by source: {r['builds_by_source'] or '{}'}")
    A(f"email captures by source: {r['emails_by_source'] or '{}'}")
    A(f"signups by source: {r['subs_by_source'] or '{}'}")
    A("")
    A("## Google organic landings (the real buyer stream)")
    A("| landing slug | sessions |")
    A("|---|---|")
    for slug, n in r["google_landings"]:
        A(f"| {slug} | {n} |")
    A("")
    A("## Top paths by page_view (NOTE: includes junk/direct traffic)")
    A("| path | views |")
    A("|---|---|")
    for p, n in r["top_paths"]:
        A(f"| {p} | {n} |")
    A("")
    A(f"event mix: {r['event_mix']}")
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=14)
    ap.add_argument("--limit", type=int, default=5000)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--save", action="store_true")
    ap.add_argument("--stripe", action="store_true",
                    help="also query Stripe for live subscriptions (needs key)")
    args = ap.parse_args()

    events = fetch_events(args.limit)
    r = analyse(events, args.days)
    stripe = stripe_recurring() if args.stripe else None

    if args.json:
        print(json.dumps({"funnel": r, "stripe": stripe}, indent=2, default=str))
    else:
        print(render(r, stripe))

    if args.save:
        from datetime import datetime, timezone
        stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        out = f".founder/deliverables/chatbot-funnel-{stamp}.md"
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w") as fh:
            fh.write(render(r, stripe))
        print(f"\nsaved -> {out}", file=sys.stderr)

    # --- signal detection -------------------------------------------------
    ping = False
    reasons = []
    if stripe and "error" not in stripe and stripe["count"] > 0:
        ping = True
        reasons.append(f"FIRST PAID SUBSCRIPTION(S): {stripe['count']}")

    prev = {}
    if os.path.exists(STATE_PATH):
        try:
            prev = json.load(open(STATE_PATH))
        except Exception:  # noqa: BLE001
            prev = {}

    if args.days == BASELINE["window_days"]:
        base = BASELINE["chatbot_build"]
        cur = r["chatbot_build"]
        if cur >= max(base * 2, base + 3):
            ping = True
            reasons.append(f"activation UP: chatbot_build {base} -> {cur}")
        elif base > 0 and cur == 0:
            ping = True
            reasons.append(f"activation DIED: chatbot_build {base} -> 0")

    with open(STATE_PATH, "w") as fh:
        json.dump({"funnel": r, "stripe": stripe, "at": time.time()}, fh, default=str)

    if ping:
        print("\nPING-WORTHY: " + "; ".join(reasons), file=sys.stderr)
        sys.exit(10)
    print("\n(no material change vs baseline — exit 0)", file=sys.stderr)
    sys.exit(0)


if __name__ == "__main__":
    main()
