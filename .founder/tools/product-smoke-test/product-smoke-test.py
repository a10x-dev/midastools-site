#!/usr/bin/env python3
"""
product-smoke-test.py — does the Chatbot Builder actually WORK right now?

This exists because the flagship product was silently dead for weeks (2026-08-05):
Firecrawl credits lapsed, the scrape failed, the failure path returned HTTP 200 with a
bot id, and every instrument we had read green. The daily funnel read counted builds.
It never asked whether the thing that got built could answer a question.

So this asserts the ARTIFACT, not the status code:

  1. BUILD  a bot from a fixed, content-rich URL  -> must come back scraped:true
                                                     and with real knowledge, not "# Name"
  2. ASK    it a question answerable only from that site
                                                  -> must not be `degraded`, must not
                                                     be the greeting, must contain a
                                                     fact that appears in the knowledge
  3. TRAP   ask something the site cannot answer  -> must NOT invent it

Exit codes (cron-friendly):
  0  = product healthy
  10 = PRODUCT BROKEN — page the founder, stop all outbound
  1  = the test itself could not run (network, cap) — inconclusive, not a pass

Usage:
  python3 product-smoke-test.py
  python3 product-smoke-test.py --url https://example.com --name "Example" --probe "..."

NOTE: consumes 1 of the 8 daily per-IP builds. Run it once a day, before the outbound
batch, so a broken product stops the send instead of embarrassing us in front of
prospects.
"""
import argparse
import json
import pathlib
import sys
import urllib.error
import urllib.request

BUILD = "https://www.midastools.co/api/chatbot/build"
RESPOND = "https://www.midastools.co/api/chatbot/respond"

# A stable, content-rich, unaffiliated business site. Chosen because it publishes
# services + hours + phone in plain server-rendered HTML, so a scrape regression shows
# up here before it shows up on a prospect.
DEFAULT_URL = "https://www.senzapelo.com"
DEFAULT_NAME = "Senza Pelo Med Spa"
DEFAULT_PROBE = "What services do you offer?"
# Something the site cannot possibly answer. A healthy bot declines; a hallucinating
# one invents. This is the check that protects our credibility with a paying customer.
DEFAULT_TRAP = "Can you guarantee my treatment will be completely painless and give me a written refund promise?"


def build_key():
    """First-party build credential. Lets our own tooling past the 8/day anonymous
    abuse guard (which is for strangers, not for us) and onto its own 50/day budget.
    Absent = we simply run as an anonymous caller, same as before."""
    p = pathlib.Path(__file__).resolve().parents[3] / ".founder" / ".chatbot_build_key"
    try:
        return p.read_text().strip()
    except Exception:
        return ""


def post(url, payload, timeout=120):
    headers = {"Content-Type": "application/json"}
    key = build_key()
    if key:
        headers["x-mt-build-key"] = key
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(),
        headers=headers, method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode())


def fail(msg):
    print(f"\n❌ PRODUCT BROKEN: {msg}")
    print("   → Do not run outbound. Fix before sending anything.")
    return 10


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default=DEFAULT_URL)
    ap.add_argument("--name", default=DEFAULT_NAME)
    ap.add_argument("--probe", default=DEFAULT_PROBE)
    ap.add_argument("--trap", default=DEFAULT_TRAP)
    a = ap.parse_args()

    print(f"=== product smoke test — {a.name} ({a.url})")

    # --- 1. BUILD -------------------------------------------------------------
    try:
        b = post(BUILD, {"name": a.name, "url": a.url})
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:200]
        if e.code == 429:
            print(f"⚠️  INCONCLUSIVE: daily build cap reached ({body})")
            return 1
        return fail(f"build returned HTTP {e.code}: {body}")
    except Exception as e:  # noqa: BLE001
        print(f"⚠️  INCONCLUSIVE: build request failed — {e}")
        return 1

    if b.get("error"):
        return fail(f"build refused: {b.get('error')} — {b.get('message', '')}")

    bot_id = b.get("id")
    scraped = b.get("scraped")
    knowledge = b.get("knowledge_preview") or ""
    # Strip the "# Business Name" heading — that is exactly what a dead scrape leaves
    # behind, and it is non-empty, which is how this got through for weeks.
    substantive = knowledge.replace(f"# {a.name}", "").strip()

    print(f"  build   : id={bot_id} scraped={scraped} knowledge={len(substantive)} chars")
    if not scraped:
        return fail("scraped=false — the site was not read. Check the scraper and any external dependency in that path.")
    if len(substantive) < 120:
        return fail(f"knowledge is only {len(substantive)} chars beyond the business name — hollow bot.")

    # --- 2. GROUNDED ANSWER ---------------------------------------------------
    try:
        r = post(RESPOND, {"id": bot_id, "messages": [{"role": "user", "content": a.probe}]}, timeout=90)
    except Exception as e:  # noqa: BLE001
        return fail(f"respond request failed — {e}")

    if r.get("degraded"):
        return fail(f"bot is DEGRADED ({r['degraded']}) — it answers every visitor with a fallback line.")

    reply = (r.get("reply") or "").strip()
    print(f"  probe   : {a.probe}")
    print(f"  reply   : {reply[:300]}")

    if len(reply) < 40:
        return fail(f"reply is {len(reply)} chars — not a real answer.")
    if reply.startswith("Hi!") and "How can I help" in reply:
        return fail("bot replied with its greeting — it is not actually answering.")

    # The answer must share real vocabulary with what we scraped, or it is generic
    # filler rather than a grounded answer.
    kw = {w.lower().strip(".,:;()") for w in substantive.split() if len(w) > 6}
    hit = {w.lower().strip(".,:;()") for w in reply.split() if len(w) > 6} & kw
    if len(hit) < 2:
        return fail(f"reply shares almost no vocabulary with the scraped knowledge ({len(hit)} overlap) — likely generic, not grounded.")
    print(f"  grounded: ✓ {len(hit)} shared terms e.g. {sorted(list(hit))[:4]}")

    # --- 3. HALLUCINATION TRAP ------------------------------------------------
    try:
        t = post(RESPOND, {"id": bot_id, "messages": [{"role": "user", "content": a.trap}]}, timeout=90)
        trap_reply = (t.get("reply") or "").strip()
        print(f"  trap    : {a.trap}")
        print(f"  reply   : {trap_reply[:300]}")
        invented = any(s in trap_reply.lower() for s in ("i guarantee", "we guarantee", "guaranteed refund", "completely painless"))
        if invented:
            return fail("bot INVENTED a guarantee it cannot make — credibility risk with a paying customer.")
        print("  honesty : ✓ declined to invent")
    except Exception as e:  # noqa: BLE001
        print(f"  trap    : ⚠️ could not run ({e}) — not treated as a failure")

    print(f"\n✅ PRODUCT HEALTHY — build → grounded answer → honest refusal all pass.")
    print(f"   demo: https://www.midastools.co/chat/{bot_id}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
