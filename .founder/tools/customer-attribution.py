#!/usr/bin/env python3
"""
customer-attribution.py — Pull checkout-session attribution for known paying
customers. Answers the 🔴 HIGH question from .founder/deliverables/revenue-ledger-2026-05-05.md:
"how did Shantae + Arnaud + George find us?"

Output: prints a markdown attribution table to stdout. With --save, writes
.founder/deliverables/customer-attribution-YYYY-MM-DD.md.

Reads sk_live key from .founder/.stripe_key.
"""
import base64
import json
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / ".stripe_key"


def stripe_get(path, params=None):
    key = KEY_FILE.read_text().strip()
    qs = ("?" + urllib.parse.urlencode(params)) if params else ""
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}{qs}",
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-attribution/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


CUSTOMERS = [
    ("Arnaud Demes",   "arnaud.ademes@gmail.com",          "pi_3TSYXnAdkDx8xZMk0CF0drTM", "$29 Mega Pack",    "2026-05-02"),
    ("Shantae Clinton","sclinton06@yahoo.com",             "pi_3TRYVcAdkDx8xZMk0mLcNsRM", "$97 All Kits",     "2026-04-29"),
    ("George Nelson",  "nelson.george.edward@gmail.com",   "pi_3TAY4EAdkDx8xZMk1FPx4Cg9", "$29 OpenClaw",     "2026-03-13"),
]


def find_session_for_pi(pi_id):
    res = stripe_get("/checkout/sessions", {"payment_intent": pi_id, "limit": 5})
    if res.get("data"):
        return res["data"][0]
    return None


def fetch_pi(pi_id):
    return stripe_get(f"/payment_intents/{pi_id}")


def fetch_customer(cust_id):
    return stripe_get(f"/customers/{cust_id}")


def main():
    rows = []
    for name, email, pi_id, product, date in CUSTOMERS:
        print(f"\n=== {name} ({pi_id}) ===", file=sys.stderr)
        try:
            session = find_session_for_pi(pi_id)
        except Exception as e:
            print(f"  session lookup failed: {e}", file=sys.stderr)
            session = None
        try:
            pi = fetch_pi(pi_id)
        except Exception as e:
            print(f"  pi lookup failed: {e}", file=sys.stderr)
            pi = {}
        cust_obj = {}
        if pi.get("customer"):
            try:
                cust_obj = fetch_customer(pi["customer"])
            except Exception as e:
                print(f"  customer lookup failed: {e}", file=sys.stderr)

        # gather signals
        session_id = session.get("id") if session else None
        payment_link = session.get("payment_link") if session else None
        success_url = session.get("success_url") if session else None
        cancel_url = session.get("cancel_url") if session else None
        client_ref = session.get("client_reference_id") if session else None
        session_md = session.get("metadata", {}) if session else {}
        pi_md = pi.get("metadata", {}) if pi else {}
        cust_md = cust_obj.get("metadata", {}) if cust_obj else {}
        pm_types = session.get("payment_method_types") if session else None
        consent = session.get("consent") if session else None
        consent_collection = session.get("consent_collection") if session else None
        # Stripe Link signal — the customer used Link if payment_method_options contains link.
        # On the PI side check `payment_method` -> retrieve to see type
        used_link = False
        if pi.get("payment_method"):
            try:
                pm = stripe_get(f"/payment_methods/{pi['payment_method']}")
                pm_type = pm.get("type")
                used_link = pm_type == "link"
                print(f"  payment_method type: {pm_type}", file=sys.stderr)
            except Exception as e:
                print(f"  pm lookup failed: {e}", file=sys.stderr)

        # Cross-ref subscriber status
        sub_files = (ROOT / "data" / "subscribers").glob("*.json")
        slug = email.replace("@", "_").replace(".", "_")
        was_subscriber = (ROOT / "data" / "subscribers" / f"{slug}.json").exists()

        row = {
            "name": name,
            "email": email,
            "date": date,
            "product": product,
            "session_id": session_id,
            "payment_link": payment_link,
            "success_url": success_url,
            "cancel_url": cancel_url,
            "client_ref_id": client_ref,
            "session_metadata": session_md,
            "pi_metadata": pi_md,
            "customer_metadata": cust_md,
            "used_stripe_link": used_link,
            "was_email_subscriber_pre_purchase": was_subscriber,
        }
        rows.append(row)

    # Print markdown
    out = ["# Customer Attribution Report — " + datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"), ""]
    out.append("**Question**: How did our 3 paying customers find us?")
    out.append("")
    out.append("Pulled directly from Stripe API: checkout-session metadata, payment-link IDs, success/cancel URLs (which often leak the originating page), client_reference_id, and Stripe-Link usage flag.")
    out.append("")
    out.append("---")
    out.append("")
    for r in rows:
        out.append(f"## {r['name']} — {r['product']} on {r['date']}")
        out.append("")
        out.append(f"- **Email**: `{r['email']}`")
        out.append(f"- **Was on email subscriber list pre-purchase?** {r['was_email_subscriber_pre_purchase']}")
        out.append(f"- **Stripe Link (one-click) used?** {r['used_stripe_link']}")
        out.append(f"- **Checkout Session ID**: `{r['session_id']}`")
        out.append(f"- **Payment Link ID**: `{r['payment_link']}`")
        out.append(f"- **Success URL**: `{r['success_url']}`")
        out.append(f"- **Cancel URL**: `{r['cancel_url']}`")
        out.append(f"- **client_reference_id**: `{r['client_ref_id']}`")
        out.append(f"- **Session metadata**: `{json.dumps(r['session_metadata'])}`")
        out.append(f"- **PI metadata**: `{json.dumps(r['pi_metadata'])}`")
        out.append(f"- **Customer metadata**: `{json.dumps(r['customer_metadata'])}`")
        out.append("")
    print("\n".join(out))

    if "--save" in sys.argv:
        d = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        out_path = ROOT / "deliverables" / f"customer-attribution-{d}.md"
        out_path.write_text("\n".join(out))
        print(f"\nSaved to {out_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
