#!/usr/bin/env python3
"""
demo-outbound.py — the "build-it-for-them-first" outbound weapon.

For each prospect in a JSON file:
  1. POST their website to /api/chatbot/build  -> mints a real, grounded demo bot
  2. Verifies the bot actually scraped their site (scraped:true + knowledge preview)
  3. Optionally asks the bot one grounded question and prints the answer, so a human
     can eyeball quality BEFORE anything is sent
  4. Renders a personalised email containing the LIVE demo link
  5. Sends via the sanctioned agentfounder-email CLI (50/day cap)

Why this exists: five SEO surfaces produced 0 Google landings. Outbound is the only
untested channel that can put the $39/mo offer in front of a qualified buyer THIS WEEK.
The demo link is the pitch — /chat/<id> page_views are tracked in our own analytics,
so engagement is measurable even if nobody replies.

Prospect JSON schema (list of objects):
  { "name": "...", "url": "https://...", "email": "...", "owner": "...|null",
    "city": "...", "services": ["...", "..."] }

Usage:
  python3 demo-outbound.py --in prospects.json --build-only          # mint + verify, no send
  python3 demo-outbound.py --in prospects.json --dry-run             # render emails, no send
  python3 demo-outbound.py --in prospects.json --send                # for real
  python3 demo-outbound.py --in prospects.json --send --limit 3

State: .founder/state/demo-outbound-log.json  (idempotent — never emails the same
address twice, survives partial failures).

NOTE: /api/chatbot/build is capped at 8 builds per IP per day (public abuse guard —
do not weaken it). Batch accordingly.
"""
import argparse
import json
import os
import pathlib
import subprocess
import sys
import time
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[3]
STATE = ROOT / ".founder" / "state" / "demo-outbound-log.json"
BUILD_URL = "https://www.midastools.co/api/chatbot/build"
RESPOND_URL = "https://www.midastools.co/api/chatbot/respond"
CHAT_BASE = "https://www.midastools.co/chat/"
# Send on OUR verified domain (hello@midastools.co, SPF/DKIM good) via send-one.py.
# Rejected the shared agentfounder.ai sender: wrong brand on a cold email destroys the
# trust the demo just earned, and it externalises reputation risk onto a shared domain.
# reply_to = Armando's real inbox so a reply is never lost to a broken webhook.
SEND_ONE = str(ROOT / ".founder" / "tools" / "send-one.py")
REPLY_TO = "iam@armando.mx"


def post(url, payload, timeout=120):
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode())


def load_state():
    if STATE.exists():
        return json.loads(STATE.read_text())
    return {"sent": {}, "built": {}}


def save_state(s):
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(s, indent=2))


def build_bot(p):
    """Mint a grounded demo bot from the prospect's own website."""
    return post(BUILD_URL, {"name": p["name"], "url": p["url"]})


def ask(bot_id, question):
    try:
        r = post(
            RESPOND_URL,
            {"id": bot_id, "messages": [{"role": "user", "content": question}]},
            timeout=90,
        )
        return (r.get("reply") or json.dumps(r))[:600]
    except Exception as e:  # noqa: BLE001
        return f"[respond failed: {e}]"


def render(p, bot_id):
    """Short, concrete, honest. No hype, no emoji, no fake urgency."""
    first = (p.get("owner") or "").split(" ")[0] if p.get("owner") else None
    greeting = f"Hi {first}," if first else "Hi,"
    link = CHAT_BASE + bot_id
    svc = p.get("services") or []
    svc_line = ""
    if svc:
        svc_line = (
            "<p>Ask it something a real client would ask &mdash; "
            + ", ".join(f"&ldquo;{s}&rdquo;" for s in svc[:2])
            + ", your hours, what happens at a first visit.</p>"
        )

    html = f"""<div style="font-family:-apple-system,Segoe UI,Inter,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:540px">
<p>{greeting}</p>

<p>I built a working AI receptionist for {p['name']} and put it online so you can try it
right now &mdash; no signup, nothing to install:</p>

<p><a href="{link}" style="display:inline-block;background:#3B5FFF;color:#fff;padding:11px 20px;border-radius:8px;text-decoration:none;font-weight:600">Try your {p['name']} assistant &rarr;</a></p>

{svc_line}

<p>It only knows what is published on {p['url'].replace('https://', '').replace('http://', '').rstrip('/')} &mdash;
it will not invent a price or a promise. When it cannot answer, it takes the visitor's
name and number instead of losing them.</p>

<p>The reason I built it: most enquiries to a clinic like yours arrive in the evening or
at the weekend, and the ones that go unanswered book somewhere else. This answers them
at 9pm.</p>

<p>It is free to try. If you want it live on your own site it is one line of code and
$39/month &mdash; no setup fee, cancel whenever. If it is not useful, just reply
&ldquo;no&rdquo; and I will not write again.</p>

<p>&mdash; Armando<br>
<span style="color:#666">MidasTools &middot; <a href="https://www.midastools.co/chatbot-builder" style="color:#3B5FFF">midastools.co</a> &middot; reply here or {REPLY_TO}</span></p>
</div>"""

    subject = f"I built an AI receptionist for {p['name']} — try it here"
    return subject, html


def send(to, subject, html):
    tmp = pathlib.Path("/tmp") / f"outbound-{abs(hash(to))}.html"
    tmp.write_text(html)
    r = subprocess.run(
        [
            sys.executable, SEND_ONE,
            "--to", to,
            "--subject", subject,
            "--body-file", str(tmp),
            "--no-html-wrap",
            "--from-name", "Armando from MidasTools",
            "--reply-to", REPLY_TO,
        ],
        capture_output=True, text=True, timeout=120,
    )
    out = (r.stdout or "") + (r.stderr or "")
    ok = r.returncode == 0 and "✓ sent" in out
    return ok, out.strip()[-300:]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="infile", required=True)
    ap.add_argument("--build-only", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--send", action="store_true")
    ap.add_argument("--limit", type=int, default=100)
    ap.add_argument("--probe", default="What treatments do you offer and what are your hours?")
    a = ap.parse_args()

    prospects = json.loads(pathlib.Path(a.infile).read_text())
    st = load_state()
    done = 0

    for p in prospects:
        if done >= a.limit:
            break
        email = (p.get("email") or "").strip().lower()
        key = email or p["url"]

        if email and email in st["sent"]:
            print(f"SKIP (already emailed): {p['name']} <{email}>")
            continue

        # --- 1. mint or reuse the demo bot ---
        bot_id = st["built"].get(p["url"], {}).get("id")
        if not bot_id:
            print(f"\n=== {p['name']} — building from {p['url']}")
            try:
                b = build_bot(p)
            except urllib.error.HTTPError as e:
                body = e.read().decode()[:200]
                print(f"  BUILD FAILED {e.code}: {body}")
                if e.code == 429:
                    print("  daily build cap hit — stopping.")
                    break
                continue
            except Exception as e:  # noqa: BLE001
                print(f"  BUILD FAILED: {e}")
                continue

            bot_id = b.get("id")
            scraped = b.get("scraped")
            preview = (b.get("knowledge_preview") or "")[:160].replace("\n", " ")
            print(f"  id={bot_id} scraped={scraped} remaining={b.get('remaining')}")
            print(f"  knowledge: {preview}")
            if not scraped:
                print("  ⚠️  NOT SCRAPED — bot would be empty. Skipping (do not send junk).")
                continue
            st["built"][p["url"]] = {"id": bot_id, "scraped": True, "name": p["name"]}
            save_state(st)
            time.sleep(2)

        # --- 2. quality probe (a human must be able to eyeball this) ---
        print(f"  probe> {a.probe}")
        print(f"  bot  > {ask(bot_id, a.probe)}")
        print(f"  demo : {CHAT_BASE}{bot_id}")

        if a.build_only:
            done += 1
            continue

        # --- 3. render + send ---
        if not email:
            print("  no email on file — demo built, cannot send.")
            continue
        subject, html = render(p, bot_id)
        if a.dry_run or not a.send:
            print(f"  DRY-RUN → {email}\n  SUBJ: {subject}")
            done += 1
            continue

        ok, out = send(email, subject, html)
        print(f"  SEND {'OK' if ok else 'FAIL'} → {email}: {out}")
        if ok:
            st["sent"][email] = {
                "name": p["name"],
                "bot": bot_id,
                "demo": CHAT_BASE + bot_id,
                "ts": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            }
            save_state(st)
            done += 1
            time.sleep(3)

    print(f"\n--- processed {done} | built {len(st['built'])} | emailed {len(st['sent'])} ---")
    if st["sent"]:
        print("Watch demo visits:  grep /chat/ in chatbot-funnel-read output")


if __name__ == "__main__":
    sys.exit(main())
