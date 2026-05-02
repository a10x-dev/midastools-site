#!/usr/bin/env python3
"""Send one email via Resend with optional PDF attachments.

Built for delivering mini-assessment PDFs within the 4-hour SLA on
reply-type-B replies (per .founder/playbooks/reply-handling-playbook.md),
but generalized for any one-off transactional send.

Usage:
  python3 .founder/tools/send-one.py \\
      --to hiedeh@tavassoli.com \\
      --subject "Negar — your free 1-page mini-assessment" \\
      --body-file path/to/body.txt \\
      --attach path/to/mini-assessment-hiedeh-20260502.pdf

Flags:
  --to            recipient email (required)
  --subject       email subject (required)
  --body-file     path to plain-text body file (required)
  --attach        path to file to attach (repeatable, optional)
  --from-name     override sender display name (default: "Armando from MidasTools")
  --reply-to      override reply-to (default: iam@armando.mx)
  --no-html-wrap  send raw text instead of wrapping in Inter HTML
  --dry-run       print payload, don't send

Exit codes: 0 = sent, 1 = failed (prints Resend error).
"""
import argparse
import base64
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path


def load_resend_key() -> str:
    """Resolve Resend API key. File wins over env when both exist.

    Why file-wins: env vars in macOS shells get inherited from forgotten
    launchctl/login-item state and can be stale (e.g. a leaked-then-rotated
    key). The .founder/.resend_key file is the canonical, gitignored,
    operator-controlled source. If the two disagree, that's a footgun and
    we warn loudly + prefer the file. To force env-wins, delete the file.
    """
    env = (os.environ.get("RESEND_API_KEY") or "").strip()
    key_file = Path(__file__).parent.parent / ".resend_key"
    file_key = key_file.read_text().strip() if key_file.exists() else ""

    if file_key and env and file_key != env:
        sys.stderr.write(
            f"⚠ RESEND_API_KEY env ({env[:7]}...) differs from .founder/.resend_key "
            f"({file_key[:7]}...). Using FILE. Unset env to silence.\n"
        )
        chosen, source = file_key, "file"
    elif file_key:
        chosen, source = file_key, "file"
    elif env:
        chosen, source = env, "env"
    else:
        sys.exit(
            "ERROR: No Resend API key found.\n"
            "  Put the key in .founder/.resend_key (gitignored), OR\n"
            "  set RESEND_API_KEY env var."
        )
    sys.stderr.write(f"  resend-key source: {source} ({chosen[:7]}...)\n")
    return chosen


def wrap_html(text: str) -> str:
    return (
        '<div style="font-family:\'Inter\',Helvetica,Arial,sans-serif;'
        'max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;'
        'line-height:1.6;">'
        + text.replace("\n", "<br/>")
        + "</div>"
    )


def encode_attachment(path: Path) -> dict:
    if not path.exists():
        sys.exit(f"ERROR: attachment not found: {path}")
    content_b64 = base64.b64encode(path.read_bytes()).decode()
    content_type, _ = mimetypes.guess_type(path.name)
    return {
        "filename": path.name,
        "content": content_b64,
        "content_type": content_type or "application/octet-stream",
    }


def main():
    ap = argparse.ArgumentParser(description="Send one email via Resend with optional attachments.")
    ap.add_argument("--to", required=True)
    ap.add_argument("--subject", required=True)
    ap.add_argument("--body-file", required=True)
    ap.add_argument("--attach", action="append", default=[])
    ap.add_argument("--from-name", default="Armando from MidasTools")
    ap.add_argument("--reply-to", default="iam@armando.mx")
    ap.add_argument("--no-html-wrap", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    body_path = Path(args.body_file)
    if not body_path.exists():
        sys.exit(f"ERROR: body file not found: {body_path}")
    body_text = body_path.read_text()

    payload = {
        "from": f"{args.from_name} <hello@midastools.co>",
        "to": [args.to],
        "reply_to": args.reply_to,
        "subject": args.subject,
    }
    if args.no_html_wrap:
        payload["text"] = body_text
    else:
        payload["html"] = wrap_html(body_text)

    if args.attach:
        payload["attachments"] = [encode_attachment(Path(p)) for p in args.attach]

    if args.dry_run:
        preview = {**payload}
        if "attachments" in preview:
            preview["attachments"] = [
                {**a, "content": f"<base64 {len(a['content'])} chars>"}
                for a in preview["attachments"]
            ]
        print(json.dumps(preview, indent=2))
        return

    key = load_resend_key()
    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "User-Agent": "midastools-outreach/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
            print(f"✓ sent to {args.to} — id={data.get('id', 'no-id')}")
            sys.exit(0)
    except urllib.error.HTTPError as e:
        print(f"✗ HTTP {e.code}: {e.read().decode()[:500]}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ {type(e).__name__}: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
