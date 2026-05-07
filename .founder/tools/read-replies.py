#!/usr/bin/env python3
"""Read inbound email replies captured by /api/inbound-email.

Pulls from the inbound-replies jsonblob (lib/inbound-replies.js) and renders
unread replies in the terminal. Tracks an acknowledgement cursor at
.founder/state/replies-cursor.json so each session shows only what's new.
Also archives every fetched reply to .founder/inbox/replies-YYYY-MM.jsonl
so we have a local copy if the blob dies.

Usage:
  python3 .founder/tools/read-replies.py           # show unread
  python3 .founder/tools/read-replies.py --all     # show every reply
  python3 .founder/tools/read-replies.py --from x  # filter by sender substring
  python3 .founder/tools/read-replies.py --ack ID  # mark reply as read
  python3 .founder/tools/read-replies.py --ack-all # mark every reply as read

Exit codes:
  0  = ran successfully
  10 = SIGNAL: 1+ unread reply present (cron-friendly)
  1  = error (blob unreachable)
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# Storage migrated 2026-05-06 (commit 85277df) from jsonblob → GitHub gists.
GIST_ID = "10655e586c8c60a1d498f77efa937fc1"
GIST_URL = f"https://api.github.com/gists/{GIST_ID}"

JSONBLOB_ID = "019dfa62-6add-7890-9835-9a0d7d6a1d0c"
JSONBLOB_URL = f"https://jsonblob.com/api/jsonBlob/{JSONBLOB_ID}"

ROOT = Path(__file__).parent.parent
STATE_DIR = ROOT / "state"
INBOX_DIR = ROOT / "inbox"
STATE_DIR.mkdir(exist_ok=True)
INBOX_DIR.mkdir(exist_ok=True)
CURSOR = STATE_DIR / "replies-cursor.json"
GIST_TOKEN_FILE = ROOT / ".gh_gist_token"


def _gist_token() -> str | None:
    env_token = os.environ.get("GH_GIST_TOKEN") or os.environ.get("GITHUB_GIST_TOKEN")
    if env_token:
        return env_token.strip()
    if GIST_TOKEN_FILE.exists():
        return GIST_TOKEN_FILE.read_text().strip()
    return None


def fetch_replies() -> list[dict]:
    # Primary: GitHub gist
    token = _gist_token()
    if token:
        try:
            req = urllib.request.Request(
                GIST_URL,
                headers={
                    "Authorization": f"token {token}",
                    "Accept": "application/vnd.github+json",
                    "User-Agent": "midastools-read-replies/2.0",
                },
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                gist = json.load(resp)
            files = gist.get("files", {})
            if files:
                content = next(iter(files.values())).get("content", "{}")
                data = json.loads(content)
                return data.get("replies", []) if isinstance(data, dict) else []
        except Exception as e:
            print(f"WARN: gist fetch failed ({e}), falling back to jsonblob", file=sys.stderr)
    # Fallback: jsonblob (legacy)
    req = urllib.request.Request(JSONBLOB_URL, headers={"User-Agent": "midastools-read-replies/2.0"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data.get("replies", []) if isinstance(data, dict) else []


def load_cursor() -> set[str]:
    if not CURSOR.exists():
        return set()
    try:
        return set(json.loads(CURSOR.read_text()).get("acked", []))
    except Exception:
        return set()


def save_cursor(acked: set[str]) -> None:
    CURSOR.write_text(json.dumps({"acked": sorted(acked), "updated": datetime.now(timezone.utc).isoformat()}, indent=2))


def reply_id(r: dict) -> str:
    return r.get("email_id") or r.get("message_id") or f"{r.get('received_at')}|{r.get('from')}"


def archive_local(replies: list[dict]) -> None:
    by_month: dict[str, list[dict]] = {}
    for r in replies:
        ts = r.get("received_at", "")
        month = ts[:7] if len(ts) >= 7 else "unknown"
        by_month.setdefault(month, []).append(r)
    for month, batch in by_month.items():
        path = INBOX_DIR / f"replies-{month}.jsonl"
        existing_ids: set[str] = set()
        if path.exists():
            for line in path.read_text().splitlines():
                if not line.strip():
                    continue
                try:
                    existing_ids.add(reply_id(json.loads(line)))
                except Exception:
                    pass
        new_lines = [json.dumps(r, ensure_ascii=False) for r in batch if reply_id(r) not in existing_ids]
        if new_lines:
            with path.open("a") as f:
                f.write("\n".join(new_lines) + "\n")


def render(reply: dict) -> str:
    sender = reply.get("from") or "(unknown)"
    name = reply.get("from_name")
    sender_display = f"{name} <{sender}>" if name else sender
    subject = reply.get("subject") or "(no subject)"
    received = reply.get("received_at", "")
    text = (reply.get("text") or reply.get("html") or "").strip()
    if len(text) > 1000:
        text = text[:1000] + "\n... [truncated, see archive]"
    rid = reply_id(reply)
    return (
        f"\n{'─' * 78}\n"
        f"From:    {sender_display}\n"
        f"To:      {', '.join(reply.get('to', []) or [])}\n"
        f"Subject: {subject}\n"
        f"At:      {received}\n"
        f"ID:      {rid}\n"
        f"{'─' * 78}\n"
        f"{text}\n"
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Read Resend Inbound replies")
    parser.add_argument("--all", action="store_true", help="show every reply, not just unread")
    parser.add_argument("--from", dest="from_filter", default=None, help="filter by sender substring")
    parser.add_argument("--ack", dest="ack", default=None, help="mark a reply ID as read")
    parser.add_argument("--ack-all", action="store_true", help="mark every current reply as read")
    parser.add_argument("--no-archive", action="store_true", help="skip local archive write")
    args = parser.parse_args()

    try:
        replies = fetch_replies()
    except Exception as e:
        print(f"ERROR: could not fetch replies blob: {e}", file=sys.stderr)
        return 1

    if not args.no_archive:
        archive_local(replies)

    acked = load_cursor()

    if args.ack_all:
        acked.update(reply_id(r) for r in replies)
        save_cursor(acked)
        print(f"Acked {len(replies)} replies.")
        return 0

    if args.ack:
        acked.add(args.ack)
        save_cursor(acked)
        print(f"Acked: {args.ack}")
        return 0

    visible = replies
    if not args.all:
        visible = [r for r in replies if reply_id(r) not in acked]
    if args.from_filter:
        needle = args.from_filter.lower()
        visible = [r for r in visible if needle in (r.get("from") or "").lower()]

    if not visible:
        if args.all:
            print("No replies in blob.")
        else:
            print(f"No unread replies. (Total in blob: {len(replies)}, acked: {len(acked)})")
        return 0

    visible.sort(key=lambda r: r.get("received_at", ""), reverse=True)
    for r in visible:
        print(render(r))

    print(f"\n{len(visible)} {'reply' if len(visible) == 1 else 'replies'} shown. "
          f"(Total in blob: {len(replies)}, acked: {len(acked)})")
    print("Mark read with: python3 .founder/tools/read-replies.py --ack <ID>")
    return 10 if not args.all else 0


if __name__ == "__main__":
    sys.exit(main())
