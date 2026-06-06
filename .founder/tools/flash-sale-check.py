#!/usr/bin/env python3
"""
flash-sale-check.py — Definitively confirm whether recent Stripe sales are
flash-campaign-attributed, readable entirely from our own seat (Stripe API),
with NO dependency on Armando relaying the webhook source=flash email.

WHY THIS EXISTS (built Session 47, 2026-06-06):
The flash $29 Image Pack broadcast (fired to 116 subs Jun 5) uses the STANDARD
Image Pack payment link (plink_1TFId8AdkDx8xZMk585XtBoJ, alias 8x24gy...). So an
ORGANIC Image Pack purchase looks identical to a flash conversion EXCEPT for one
field: the checkout session's `client_reference_id`, which the flash email CTA
packs as `att|s=nurture|m=email|c=flash|...` via tagNurture() (nurture.js).
metrics-snapshot.py only reports sale COUNT — it cannot tell flash from organic.
This tool resolves the gap: latest charge -> checkout session -> client_reference_id
-> decode the `c=` campaign. A 3->4 Stripe delta this weekend is now disambiguated
in one command instead of waiting on the webhook email to Armando's inbox.

USAGE:
  python3 .founder/tools/flash-sale-check.py            # scan last 5 charges
  python3 .founder/tools/flash-sale-check.py --limit 10
Exit 10 = at least one FLASH-attributed sale found (the signal we're watching).
Exit 0  = no flash sale among the scanned charges.
"""
import sys, json, urllib.request, urllib.parse, os

IMAGE_PACK_PLINK = "plink_1TFId8AdkDx8xZMk585XtBoJ"  # flash $29 Image Pack link (S38)

def load_key():
    # File wins over env (env-vs-file-secret-resolution principle)
    for p in (".founder/.stripe_key", os.path.expanduser("~/.founder/.stripe_key")):
        if os.path.exists(p):
            with open(p) as f:
                k = f.read().strip()
                if k:
                    return k
    k = os.environ.get("STRIPE_SECRET_KEY") or os.environ.get("STRIPE_KEY")
    if k:
        return k.strip()
    sys.exit("No Stripe key found (.founder/.stripe_key or STRIPE_SECRET_KEY)")

KEY = load_key()

def sget(path, params=None):
    url = "https://api.stripe.com/v1" + path
    if params:
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + KEY})
    return json.load(urllib.request.urlopen(req))

def decode_clientref(cref):
    """Decode att|s=..|m=..|c=..|.. -> dict. Returns {} if not our format."""
    if not cref or not cref.startswith("att|"):
        return {}
    out = {}
    keymap = {"s": "source", "m": "medium", "c": "campaign", "t": "term",
              "x": "content", "r": "ref_host", "p": "landing", "f": "first_touch", "n": "sessions"}
    for part in cref.split("|")[1:]:
        if "=" in part:
            k, v = part.split("=", 1)
            out[keymap.get(k, k)] = v
    return out

def main():
    limit = 5
    if "--limit" in sys.argv:
        try:
            limit = int(sys.argv[sys.argv.index("--limit") + 1])
        except (ValueError, IndexError):
            pass

    charges = sget("/charges", {"limit": limit}).get("data", [])
    if not charges:
        print("No charges found.")
        return 0

    flash_found = False
    print(f"=== Scanning {len(charges)} most-recent charge(s) for flash attribution ===\n")
    for c in charges:
        amt = c["amount"] / 100
        email = (c.get("billing_details") or {}).get("email") or "?"
        refunded = c.get("refunded")
        pi = c.get("payment_intent")
        cref = None
        plink = None
        if pi:
            try:
                sess = sget("/checkout/sessions", {"payment_intent": pi, "limit": 1}).get("data", [])
                if sess:
                    cref = sess[0].get("client_reference_id")
                    plink = sess[0].get("payment_link")
            except Exception as e:
                cref = f"(session lookup failed: {e})"
        attr = decode_clientref(cref)
        is_flash = attr.get("campaign") == "flash"
        is_imagepack_plink = (plink == IMAGE_PACK_PLINK)
        tag = ""
        if is_flash:
            tag = "  <<< 🔥 FLASH-ATTRIBUTED SALE"
            flash_found = True
        elif is_imagepack_plink:
            tag = "  <-- Image Pack plink but NO c=flash (organic Image Pack, NOT flash)"
        rf = " [REFUNDED]" if refunded else ""
        print(f"- {c['id']}  ${amt:.2f}{rf}  {email}{tag}")
        print(f"    plink={plink}  client_reference_id={cref}")
        if attr:
            print(f"    decoded: {json.dumps(attr)}")
        print()

    if flash_found:
        print(">> RESULT: FLASH CONVERSION CONFIRMED — execute Branch A (re-point nurture + suppress).")
        return 10
    print(">> RESULT: no flash-attributed sale among scanned charges.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
