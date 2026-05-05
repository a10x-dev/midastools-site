#!/usr/bin/env python3
"""Hourly metrics snapshot for the PMF tracking sprint.

Pulls:
  - Stripe payments (last 24h) + new customers (last 24h)
  - Subscriber count (from /api/status — currently fallback-cached at 20)
  - Site uptime (homepage + 3 high-traffic tool pages + tripwire page)

Compares to prior snapshot at .founder/state/metrics-last.json. Prints a
human-readable summary AND a one-line PING-WORTHY verdict.

Exit codes:
  0  = ran successfully, no signal worth pinging
  10 = SIGNAL: a new sale, new sub, or page down — worth Slacking Armando
  1  = error (script failed, don't trust output)

Hourly cron usage:
  python3 .founder/tools/metrics-snapshot.py
  if exit code == 10: read .founder/state/metrics-current.json + Slack the deltas

Manual usage:
  python3 .founder/tools/metrics-snapshot.py        # prints + writes snapshot
  python3 .founder/tools/metrics-snapshot.py --dry  # prints, doesn't update last
"""
from __future__ import annotations

import base64
import json
import sys
import time
import urllib.parse
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent          # .founder/
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
LAST_SNAP = STATE_DIR / "metrics-last.json"
CUR_SNAP = STATE_DIR / "metrics-current.json"

STATUS_URL = "https://www.midastools.co/api/status?key=mt-outreach-2026"
UPTIME_PAGES = [
    "https://www.midastools.co/",
    "https://www.midastools.co/tools",
    "https://www.midastools.co/starter-pack",
    "https://www.midastools.co/pet-portrait-generator",
    "https://www.midastools.co/ai-prompt-mega-pack",
]


def load_stripe_key() -> str:
    f = ROOT / ".stripe_key"
    if not f.exists():
        sys.exit("ERROR: .founder/.stripe_key not found")
    return f.read_text().strip()


def stripe_get(path: str, params: dict | None = None) -> dict:
    """Single-page Stripe GET. Caller handles pagination if needed."""
    key = load_stripe_key()
    qs = ("?" + urllib.parse.urlencode(params)) if params else ""
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}{qs}",
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-metrics/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read())


def fetch_stripe_24h() -> dict:
    """Last 24h + LIFETIME: charges + customers. Sums revenue both windows.

    Note (Session 156, 2026-05-05): added lifetime tracking after discovering
    that ALL prior sessions saw `Revenue: 0` because we only ever queried 24h
    windows — Apr 29 $97 + May 2 $29 sales fell off the radar within 24h and
    we ran 5 strategic sessions on a false-zero premise. Lifetime field below
    closes that hole.
    """
    since = int(time.time()) - 24 * 3600
    out = {
        "charges_24h": 0,
        "succeeded_24h": 0,
        "revenue_24h_cents": 0,
        "new_customers_24h": 0,
        # Lifetime fields (always grow, never reset)
        "lifetime_succeeded": 0,
        "lifetime_revenue_cents": 0,
        "lifetime_last_sale": None,
        "by_product": {},
        "last_payment": None,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
    }
    try:
        # 24h charges (Stripe lets us filter by created.gte)
        ch = stripe_get("/charges", {"limit": 100, "created[gte]": since})
        for c in ch.get("data", []):
            out["charges_24h"] += 1
            if c.get("status") == "succeeded" and not c.get("refunded"):
                out["succeeded_24h"] += 1
                out["revenue_24h_cents"] += c.get("amount", 0)
                desc = (c.get("description") or "")[:80]
                out["by_product"][desc] = out["by_product"].get(desc, 0) + c.get("amount", 0)
                if not out["last_payment"] or c.get("created", 0) > out["last_payment"]["created"]:
                    out["last_payment"] = {
                        "id": c.get("id"),
                        "amount": c.get("amount"),
                        "currency": c.get("currency"),
                        "description": desc,
                        "created": c.get("created"),
                    }
        # Recent customers
        cu = stripe_get("/customers", {"limit": 100, "created[gte]": since})
        out["new_customers_24h"] = len(cu.get("data", []))

        # Lifetime sweep — paginate through all charges
        # 100/page is fine for our volume; we have 5 lifetime charges as of May 5
        starting_after = None
        scanned = 0
        while True:
            params = {"limit": 100}
            if starting_after:
                params["starting_after"] = starting_after
            page = stripe_get("/charges", params)
            data = page.get("data", [])
            if not data:
                break
            for c in data:
                scanned += 1
                if c.get("status") == "succeeded" and not c.get("refunded"):
                    out["lifetime_succeeded"] += 1
                    out["lifetime_revenue_cents"] += c.get("amount", 0)
                    if not out["lifetime_last_sale"] or c.get("created", 0) > out["lifetime_last_sale"]["created"]:
                        out["lifetime_last_sale"] = {
                            "id": c.get("id"),
                            "amount": c.get("amount"),
                            "email": (c.get("billing_details") or {}).get("email"),
                            "created": c.get("created"),
                            "created_iso": datetime.fromtimestamp(
                                c.get("created", 0), tz=timezone.utc
                            ).isoformat(),
                        }
            if not page.get("has_more"):
                break
            starting_after = data[-1]["id"]
            if scanned > 1000:  # safety brake — we're nowhere near this
                break
    except urllib.error.HTTPError as e:
        out["error"] = f"HTTP {e.code}: {e.read().decode()[:200]}"
    except Exception as e:
        out["error"] = f"{type(e).__name__}: {e}"
    return out


def fetch_subs() -> dict:
    """Hit /api/status, extract nested metrics.subscribers + recent emails."""
    try:
        req = urllib.request.Request(
            STATUS_URL,
            headers={"User-Agent": "midastools-metrics/1.0"},
        )
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read())
        metrics = data.get("metrics") or {}
        recent = [s.get("email", "") for s in (data.get("recentSubscribers") or [])]
        return {
            "count": metrics.get("subscribers", 0),
            "revenue_dollars": metrics.get("revenue", 0),
            "recent_emails": recent,
            "verdict": data.get("verdict", ""),
        }
    except Exception as e:
        return {"count": -1, "error": f"{type(e).__name__}: {e}"}


def fetch_uptime() -> dict:
    """HEAD the key pages, return {url: status_code}."""
    out = {}
    for url in UPTIME_PAGES:
        try:
            req = urllib.request.Request(
                url,
                method="HEAD",
                headers={"User-Agent": "midastools-metrics/1.0"},
            )
            with urllib.request.urlopen(req, timeout=10) as r:
                out[url] = r.status
        except urllib.error.HTTPError as e:
            out[url] = e.code
        except Exception as e:
            out[url] = f"err:{type(e).__name__}"
    return out


def diff(prev: dict | None, cur: dict) -> list[str]:
    """Build a human list of meaningful changes vs prior snapshot."""
    deltas = []
    if not prev:
        deltas.append("first snapshot — no prior to compare")
        return deltas

    # Stripe: any new succeeded payment is signal — use lifetime so we never
    # miss a sale because the 24h window rolled past it (Session 156 lesson)
    p_lifetime = (prev.get("stripe", {}) or {}).get("lifetime_succeeded", 0)
    c_lifetime = (cur.get("stripe", {}) or {}).get("lifetime_succeeded", 0)
    if c_lifetime > p_lifetime:
        delta_cents = (cur["stripe"].get("lifetime_revenue_cents", 0)
                       - prev.get("stripe", {}).get("lifetime_revenue_cents", 0))
        last = (cur["stripe"] or {}).get("lifetime_last_sale") or {}
        last_str = f" (last: ${last.get('amount',0)/100:.2f} from {last.get('email')})" if last else ""
        deltas.append(
            f"💰 NEW SALE — {c_lifetime - p_lifetime} new lifetime payment(s), "
            f"+${delta_cents/100:.2f}{last_str}"
        )

    # Subs
    p_subs = (prev.get("subs", {}) or {}).get("count", 0)
    c_subs = (cur.get("subs", {}) or {}).get("count", 0)
    if c_subs > p_subs:
        deltas.append(f"📧 NEW SUB(S) — {c_subs - p_subs} new ({p_subs} → {c_subs})")
    elif c_subs < p_subs and c_subs >= 0 and p_subs >= 0:
        deltas.append(f"⚠️ sub count dropped: {p_subs} → {c_subs} (jsonblob may have evicted)")

    # Uptime
    p_up = prev.get("uptime", {}) or {}
    c_up = cur.get("uptime", {}) or {}
    for url, status in c_up.items():
        if status != 200:
            deltas.append(f"🛑 PAGE DOWN — {url} returned {status}")

    return deltas


def is_pingworthy(deltas: list[str]) -> bool:
    """Worth Slacking Armando about?"""
    triggers = ("NEW SALE", "NEW SUB", "PAGE DOWN")
    return any(any(t in d for t in triggers) for d in deltas)


def main():
    dry = "--dry" in sys.argv
    cur = {
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "stripe": fetch_stripe_24h(),
        "subs": fetch_subs(),
        "uptime": fetch_uptime(),
    }

    prev = None
    if LAST_SNAP.exists():
        try:
            prev = json.loads(LAST_SNAP.read_text())
        except Exception:
            prev = None

    deltas = diff(prev, cur)

    print(f"\n=== Metrics snapshot @ {cur['captured_at']} ===")
    s = cur["stripe"]
    print(f"  Stripe 24h: {s.get('succeeded_24h', 0)} sale(s), "
          f"${s.get('revenue_24h_cents',0)/100:.2f}, "
          f"{s.get('new_customers_24h', 0)} new customer(s)")
    print(f"  Stripe LIFETIME: {s.get('lifetime_succeeded', 0)} sale(s), "
          f"${s.get('lifetime_revenue_cents',0)/100:.2f}")
    if s.get("lifetime_last_sale"):
        ll = s["lifetime_last_sale"]
        print(f"    most recent: ${ll.get('amount',0)/100:.2f} on {ll.get('created_iso','?')[:10]} from {ll.get('email','?')}")
    if s.get("error"):
        print(f"    stripe error: {s['error']}")
    print(f"  Subs:       {cur['subs'].get('count', 'err')}")
    bad_pages = [(u, c) for u, c in cur["uptime"].items() if c != 200]
    if bad_pages:
        print(f"  Uptime:     {len(bad_pages)} bad")
        for u, c in bad_pages: print(f"    {c} {u}")
    else:
        print(f"  Uptime:     all {len(cur['uptime'])} pages 200 OK")

    print(f"\n--- deltas vs prior snapshot ---")
    for d in deltas: print(f"  {d}")

    # Always write current; only update LAST when not dry
    CUR_SNAP.write_text(json.dumps(cur, indent=2))
    if not dry:
        LAST_SNAP.write_text(json.dumps(cur, indent=2))

    if is_pingworthy(deltas):
        print(f"\n>> PING-WORTHY: yes — Slack Armando")
        sys.exit(10)
    print(f"\n>> ping-worthy: no")
    sys.exit(0)


if __name__ == "__main__":
    main()
