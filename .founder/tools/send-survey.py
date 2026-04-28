#!/usr/bin/env python3
"""Send the PMF demand survey to all enriched subscribers EXCEPT the 3
who just received the $997 audit pitch (Hiedeh, Pastor Doug, Brannan/Pham).

One question, reply-friendly, reply_to=iam@armando.mx so replies route to
Armando's inbox where he can read them directly. Goal: get demand signal
in 24-48h to inform PMF direction.

Usage: python3 .founder/tools/send-survey.py [--dry-run]
"""
import json
import os
import sys
import urllib.request
import urllib.error
from pathlib import Path


def load_resend_key() -> str:
    """Read Resend API key from env or .founder/.resend_key (gitignored).
    Never hardcode — GitGuardian will catch it and the key has to be rotated.
    """
    env = os.environ.get("RESEND_API_KEY")
    if env:
        return env.strip()
    key_file = Path(__file__).parent.parent / ".resend_key"
    if key_file.exists():
        return key_file.read_text().strip()
    sys.exit(
        "ERROR: No Resend API key found.\n"
        "  Set RESEND_API_KEY env var, OR\n"
        "  Put the key in .founder/.resend_key (gitignored)."
    )


RESEND_KEY = load_resend_key()
FROM = "Armando from MidasTools <hello@midastools.co>"
REPLY_TO = "iam@armando.mx"

# Already received personalized $997 audit pitch today — don't double-tap
EXCLUDE = {
    "hiedeh@tavassoli.com",
    "pastordoug@valleygrace.net",
    "cbrannan@criterioncounsel.com",
}

SUBJECT = "1 quick question (30 seconds, hit reply)"

BODY_TEXT = """Hey,

Quick one — when you signed up for Midas Tools a few weeks back, what's the #1 thing you were hoping it would help you do with AI?

Reply with whatever comes to mind, even one sentence. I'm using your answer to decide what to build next, and your reply lands directly in my inbox.

Bonus question if you've got 10 more seconds: if a tool did exactly THAT for you, would you pay $9 for it? $29? More?

Thanks for being one of the first 20 — your reply genuinely shapes what we build.

— Armando
Midas Tools
iam@armando.mx

P.S. If "nothing in particular, I was just curious" is the honest answer, that's a useful answer too. Just hit reply with one word."""


def html_body(text: str) -> str:
    return (
        '<div style="font-family:\'Inter\',Helvetica,Arial,sans-serif;'
        'max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;'
        'line-height:1.65;font-size:15px;">'
        + text.replace("\n\n", "</p><p>").replace("\n", "<br/>")
        + "</div>"
    )


def send(to_email: str) -> tuple[bool, str]:
    payload = json.dumps({
        "from": FROM,
        "to": [to_email],
        "reply_to": REPLY_TO,
        "subject": SUBJECT,
        "html": html_body(BODY_TEXT),
    }).encode()
    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {RESEND_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "midastools-survey/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
            return True, data.get("id", "no-id")
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}: {e.read().decode()[:200]}"
    except Exception as e:
        return False, f"{type(e).__name__}: {e}"


def load_recipients() -> list[str]:
    sub_dir = Path(__file__).parent.parent / "data" / "subscribers"
    emails = []
    for f in sorted(sub_dir.glob("*.json")):
        with open(f) as fh:
            data = json.load(fh)
        email = data.get("email", "").strip().lower()
        if not email or "@" not in email:
            continue
        if email in EXCLUDE:
            continue
        emails.append(email)
    return emails


def main():
    dry = "--dry-run" in sys.argv
    recipients = load_recipients()
    print(f"PMF demand survey")
    print(f"  from:     {FROM}")
    print(f"  reply_to: {REPLY_TO}")
    print(f"  subject:  {SUBJECT}")
    print(f"  excluded: {len(EXCLUDE)} (audit pitch recipients)")
    print(f"  sending:  {len(recipients)}")
    print()
    if dry:
        for e in recipients:
            print(f"  [DRY] {e}")
        print(f"\nDry-run only. Re-run without --dry-run to send.")
        sys.exit(0)
    sent_ok = 0
    for e in recipients:
        ok, info = send(e)
        marker = "✓" if ok else "✗"
        print(f"  {marker} {e}: {info}")
        if ok:
            sent_ok += 1
    print(f"\nResult: {sent_ok}/{len(recipients)} sent")
    sys.exit(0 if sent_ok == len(recipients) else 1)


if __name__ == "__main__":
    main()
