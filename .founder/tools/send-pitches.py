#!/usr/bin/env python3
"""Send the 3 AI Audit personalized pitches via Resend.

Reads pitch bodies from this file (inlined to keep things explicit and
reproducible across re-runs). Sends from hello@midastools.co with reply_to
set to iam@armando.mx so replies route to Armando's real inbox.

Usage: python3 .founder/tools/send-pitches.py
"""
import os
import sys
import json
import urllib.request
from pathlib import Path


def load_resend_key() -> str:
    """Resolve Resend API key. File wins over env when both exist.

    Why file-wins: env vars in macOS shells get inherited from forgotten
    launchctl/login-item state and can be stale (e.g. a leaked-then-rotated
    key). The .founder/.resend_key file is the canonical, gitignored,
    operator-controlled source. If the two disagree, that's a footgun and
    we warn loudly + prefer the file. To force env-wins, delete the file.
    Never hardcode — GitGuardian will catch it and the key has to be rotated.
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


RESEND_KEY = load_resend_key()
FROM = "Armando from MidasTools <hello@midastools.co>"
REPLY_TO = "iam@armando.mx"

PITCHES = [
    {
        "to": "hiedeh@tavassoli.com",
        "subject": "Negar — your Tuesday hour, mapped",
        "body": """Hi Hiedeh / Negar,

You signed up for our AI prompts a few weeks back — I wanted to send you something more useful than another email.

I run Midas Tools. We just launched a productized service called the AI Clarity Assessment ($997, 7 days, fully refundable until our call starts). It's built specifically for solo experts juggling many workflows — and from what I can see across REW.ca, your Sutton bio, and your property-management Facebook page, you're running at least four:

1. Writing MLS listing descriptions (probably the highest-volume task)
2. Bilingual Persian/English buyer comms (a niche almost no other Vancouver realtor has)
3. Property-management ops (7+ years experience, separate workflow entirely)
4. Social media content for listings (IG + FB)

Most realtors hire someone for #1 or buy a tool for #4 and never solve the *whole stack*. The assessment maps all four against the right AI tools and gives you a 4-day quick-start plan with the math (hours saved/wk × your commission rate × 50 weeks).

If even half of one workflow gets handed off, the assessment pays back in week one.

If you'd rather see what we'd recommend before paying — reply with one workflow that wastes the most time, and I'll send you a 1-page mini-assessment of just that, free, by Friday. No hooks.

— Armando
Midas Tools · midastools.co/ai-audit

P.S. We rewrote three of your kind of MLS descriptions for fun — happy to send those over too if you want a sample of the "before/after.\"""",
    },
    {
        "to": "pastordoug@valleygrace.net",
        "subject": "Doug — for tech-literate pastors only",
        "body": """Doug,

You signed up for our AI prompts and your domain caught my eye — Valley Grace Brethren. Then I noticed you also teach IT at HCC and Blue Ridge, and you're board president at Three-Strands. That's a rare combination: a pastor who's also a technologist.

That tells me you don't need someone explaining what AI is. You need someone helping you decide which 3 workflows to invest in first, given that you're running:

1. Sermon prep and outlines (weekly)
2. Church bulletins and comms (weekly)
3. Three-Strands missions newsletters (board responsibility)
4. IT class lecture prep (semester cadence)
5. Database admin tasks for Three-Strands

We just launched something called the AI Clarity Assessment ($997, 7 days, fully refundable until our discovery call). It's built for someone exactly like you — sophisticated enough to skip the basics, strapped enough that "build everything" isn't realistic. The deliverable is a presentation-grade report with a priority matrix (high impact + low effort = start here), a 4-day quick-start plan, and the financial math.

For ministry context: most pastors I've talked to recover 5-8 hours per week — typically out of bulletin/newsletter/Three-Strands type comms. That's a Friday afternoon back, every week.

If $997 isn't a fit, here's a faster path: reply with the workflow you'd most love to never do again, and I'll send you a focused mini-recommendation by Friday at no cost. Genuine — no upsell trap.

— Armando
Midas Tools · midastools.co/ai-audit

P.S. Saw you preach regularly on sermonaudio. Curious if you've experimented with feeding sermon transcripts back through Claude/GPT for outline-generation across an entire teaching series. There's a clean workflow there.""",
    },
    {
        "to": "cbrannan@criterioncounsel.com",
        "subject": "For Christopher Pham — brand protection firm AI roadmap (1 page)",
        "body": """Hi —

I run a small product company called Midas Tools (midastools.co). One of your team subscribed to our prompt library, which is what brought Criterion Counsel onto my radar.

I'd like to send you (or pass along to Christopher Pham, if more appropriate) a short note about something we just productized that fits your firm specifically.

There's an irony I noticed reading your practice description: you do brand protection at scale — counterfeit-product enforcement, false advertising, IP litigation — but the firm's marketing visibility is dwarfed by Knobbe Martens and Sheppard Mullin. The exact issue your clients hire you to solve, the firm itself faces.

We just launched a $997 AI Operations Assessment for service businesses. 7-day engagement, fully refundable until the discovery call starts. For an IP litigation practice, the four workflows that consistently come up as high-leverage:

1. Drafting demand letters at scale (template + entity-specific facts)
2. Summarizing counterfeit-listing evidence for Amazon takedown packages
3. Client intake (most firms do this manually, lose 10-15 hrs/wk per associate)
4. Marketing content positioning the firm against bigger LA IP shops

The deliverable is a presentation-grade report with priority matrix, 4-day implementation plan, and financial impact projection (hours recovered × billable rate × 50 weeks). For a firm at your billing rate, the math is generally absurd — typical recovered annual capacity is in the $80K–$150K range.

If you'd like to pilot this with a single workflow at no cost first, I'm happy to draft a redacted demand letter sample using one of your public takedown wins as the fact pattern — see if the output meets your bar before we discuss anything paid.

Either way, the assessment page is here: midastools.co/ai-audit

— Armando
iam@armando.mx · Midas Tools""",
    },
]


def send(pitch):
    """Send one pitch via Resend HTTP API."""
    body_html = (
        '<div style="font-family:\'Inter\',Helvetica,Arial,sans-serif;'
        'max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;'
        'line-height:1.6;">'
        + pitch["body"].replace("\n", "<br/>")
        + "</div>"
    )

    payload = json.dumps({
        "from": FROM,
        "to": [pitch["to"]],
        "reply_to": REPLY_TO,
        "subject": pitch["subject"],
        "html": body_html,
    }).encode()

    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {RESEND_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "midastools-outreach/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
            return True, data.get("id", "no-id")
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}: {e.read().decode()[:300]}"
    except Exception as e:
        return False, f"{type(e).__name__}: {e}"


def main():
    print(f"Sending {len(PITCHES)} pitches via Resend (from={FROM}, reply_to={REPLY_TO})\n")
    results = []
    for p in PITCHES:
        ok, info = send(p)
        status = "✓" if ok else "✗"
        print(f"  {status} {p['to']}: {info}")
        results.append({"to": p["to"], "ok": ok, "info": info})
    sent = sum(1 for r in results if r["ok"])
    print(f"\nResult: {sent}/{len(PITCHES)} sent")
    sys.exit(0 if sent == len(PITCHES) else 1)


if __name__ == "__main__":
    main()
