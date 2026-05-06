#!/usr/bin/env python3
"""Hunter.io email-finder + verifier wrapper.

Two modes:
  find        — given first_name + last_name + domain, return verified email
  verify      — given email, return deliverability + score
  batch       — read prospects.jsonl ({first_name, last_name, domain}), find each
  account     — show plan + remaining usage

Auth: reads .founder/.hunter_key (gitignored). File-wins over env.

Free tier (validated 2026-05-05): 50 searches/mo + 100 verifications/mo.
A find call counts as 1 search regardless of hit/miss; a verify is 1 verification.

Output: results saved to .founder/state/hunter-results.jsonl (gitignored)
+ pretty-printed to stdout.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
RESULTS_FILE = STATE_DIR / "hunter-results.jsonl"


def load_key() -> str:
    env = (os.environ.get("HUNTER_API_KEY") or "").strip()
    key_file = ROOT / ".hunter_key"
    file_key = key_file.read_text().strip() if key_file.exists() else ""
    if file_key and env and file_key != env:
        sys.stderr.write(
            f"⚠ HUNTER_API_KEY env ({env[:7]}...) differs from file "
            f"({file_key[:7]}...). Using FILE.\n"
        )
        return file_key
    if file_key:
        return file_key
    if env:
        return env
    sys.exit("ERROR: No Hunter.io key. Save to .founder/.hunter_key.")


def hunter_get(path: str, params: dict) -> dict:
    params["api_key"] = load_key()
    url = f"https://api.hunter.io/v2/{path}?{urllib.parse.urlencode(params)}"
    try:
        with urllib.request.urlopen(url, timeout=30) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:500]
        try:
            return json.loads(body)
        except Exception:
            return {"error": f"HTTP {e.code}: {body}"}


def cmd_account() -> int:
    res = hunter_get("account", {})
    data = res.get("data", {})
    if not data:
        print(json.dumps(res, indent=2))
        return 1
    plan = data.get("plan_name", "?")
    s = data.get("requests", {}).get("searches", {})
    v = data.get("requests", {}).get("verifications", {})
    print(f"plan: {plan}")
    print(f"searches: {s.get('used', '?')}/{s.get('available', '?')}")
    print(f"verifications: {v.get('used', '?')}/{v.get('available', '?')}")
    return 0


def cmd_find(first: str, last: str, domain: str) -> int:
    res = hunter_get("email-finder", {"domain": domain, "first_name": first, "last_name": last})
    if errors := res.get("errors"):
        print(f"✗ {first} {last} @ {domain}: {errors}")
        return 1
    data = res.get("data", {})
    record = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "first_name": first,
        "last_name": last,
        "domain": domain,
        "email": data.get("email"),
        "score": data.get("score"),
        "verification_status": (data.get("verification") or {}).get("status"),
        "position": data.get("position"),
        "company": data.get("company"),
    }
    with RESULTS_FILE.open("a") as f:
        f.write(json.dumps(record) + "\n")
    if record["email"]:
        print(f"✓ {first} {last} @ {domain} → {record['email']} (score={record['score']}/100, {record['verification_status'] or 'no-verify'})")
    else:
        print(f"○ {first} {last} @ {domain} — no email found")
    return 0


def cmd_verify(email: str) -> int:
    res = hunter_get("email-verifier", {"email": email})
    if errors := res.get("errors"):
        print(f"✗ {email}: {errors}")
        return 1
    data = res.get("data", {})
    record = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "email": email,
        "status": data.get("status"),
        "result": data.get("result"),
        "score": data.get("score"),
        "deliverable": data.get("status") == "valid",
    }
    with RESULTS_FILE.open("a") as f:
        f.write(json.dumps(record) + "\n")
    print(f"{'✓' if record['deliverable'] else '○'} {email} — {record['status']} (score={record['score']}/100)")
    return 0


def cmd_batch(path: Path) -> int:
    prospects = [json.loads(l) for l in path.read_text().splitlines() if l.strip()]
    print(f"Running find on {len(prospects)} prospects (will use {len(prospects)} searches)...")
    rc = 0
    for p in prospects:
        rc |= cmd_find(p["first_name"], p["last_name"], p["domain"])
    print("\nDone. Account state:")
    cmd_account()
    return rc


def main() -> int:
    ap = argparse.ArgumentParser(description="Hunter.io find + verify wrapper.")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("account")
    sp_f = sub.add_parser("find")
    sp_f.add_argument("first")
    sp_f.add_argument("last")
    sp_f.add_argument("domain")
    sp_v = sub.add_parser("verify")
    sp_v.add_argument("email")
    sp_b = sub.add_parser("batch")
    sp_b.add_argument("path", type=Path)
    args = ap.parse_args()

    if args.cmd == "account":
        return cmd_account()
    if args.cmd == "find":
        return cmd_find(args.first, args.last, args.domain)
    if args.cmd == "verify":
        return cmd_verify(args.email)
    if args.cmd == "batch":
        return cmd_batch(args.path)
    return 1


if __name__ == "__main__":
    sys.exit(main())
