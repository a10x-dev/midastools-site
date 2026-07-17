#!/usr/bin/env python3
"""
chargeback-watch.py — Stripe fraud/dispute tripwire.

WHY: A single chargeback on our tiny, new-ish Stripe account spikes the dispute
ratio (~15-20% at ~6 lifetime charges) and can trigger a rolling reserve / review.
The safe play is to catch an Early Fraud Warning (EFW) — the card network telling
us the real cardholder reported fraud, usually days-to-weeks BEFORE a formal
chargeback — and proactively refund. An EFW-triggered refund prevents the fraud
chargeback from counting against our ratio.

USAGE:
  python3 .founder/tools/chargeback-watch.py            # read-only report; exit 10 if action needed
  python3 .founder/tools/chargeback-watch.py --refund-efw --apply   # refund any non-refunded EFW charge (REAL MONEY)

Key resolution: .founder/.stripe_key (preferred) else env STRIPE_SECRET_KEY.
"""
import os, sys, json, argparse, datetime, urllib.request, urllib.parse, urllib.error

def load_key():
    here = os.path.dirname(os.path.abspath(__file__))
    fpath = os.path.join(here, "..", ".stripe_key")
    if os.path.exists(fpath):
        with open(fpath) as f:
            k = f.read().strip()
            if k:
                return k
    k = os.environ.get("STRIPE_SECRET_KEY", "").strip()
    if k:
        return k
    sys.exit("No Stripe key (.founder/.stripe_key or STRIPE_SECRET_KEY).")

KEY = load_key()

def api(path, params=None, method="GET", data=None):
    url = "https://api.stripe.com/v1/" + path
    if params:
        url += "?" + urllib.parse.urlencode(params)
    body = urllib.parse.urlencode(data).encode() if data else None
    req = urllib.request.Request(url, data=body, method=method,
                                 headers={"Authorization": f"Bearer {KEY}"})
    try:
        return json.load(urllib.request.urlopen(req))
    except urllib.error.HTTPError as e:
        return {"__error__": e.code, "body": e.read().decode()[:300]}

def ts(epoch):
    return datetime.datetime.utcfromtimestamp(epoch).strftime("%Y-%m-%d %H:%M")

def charge_state(charge_id):
    if not charge_id:
        return None
    c = api("charges/" + charge_id)
    if c.get("__error__"):
        return {"id": charge_id, "err": c["__error__"]}
    return {
        "id": charge_id,
        "amount": c.get("amount", 0) / 100,
        "email": (c.get("billing_details") or {}).get("email") or c.get("receipt_email") or "?",
        "refunded": c.get("refunded"),
        "disputed": c.get("disputed"),
        "created": ts(c.get("created", 0)),
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--refund-efw", action="store_true", help="refund charges flagged by an EFW")
    ap.add_argument("--apply", action="store_true", help="actually execute refunds (default is dry-run)")
    args = ap.parse_args()

    action_needed = False
    print(f"=== chargeback-watch @ {datetime.datetime.utcnow():%Y-%m-%d %H:%M} UTC ===\n")

    # 1. Early Fraud Warnings — the pre-chargeback signal
    efw = api("radar/early_fraud_warnings", {"limit": 50})
    efws = efw.get("data", []) if not efw.get("__error__") else []
    print(f"Early Fraud Warnings: {len(efws)}")
    to_refund = []
    for w in efws:
        cs = charge_state(w.get("charge"))
        flag = "" if (cs and cs.get("refunded")) else "  <-- ACTION: refund now"
        if not (cs and cs.get("refunded")):
            action_needed = True
            to_refund.append(cs)
        print(f"  EFW {w.get('id')} type={w.get('fraud_type')} "
              f"charge={w.get('charge')} ${cs.get('amount') if cs else '?'} "
              f"{cs.get('email') if cs else ''} refunded={cs.get('refunded') if cs else '?'}{flag}")

    # 2. Formal disputes
    disp = api("disputes", {"limit": 50})
    disputes = disp.get("data", []) if not disp.get("__error__") else []
    open_disputes = [d for d in disputes if d.get("status") not in ("won", "lost", "warning_closed")]
    print(f"\nDisputes: {len(disputes)} total | {len(open_disputes)} open/needs-response")
    for d in disputes:
        needs = d.get("status") in ("needs_response", "warning_needs_response")
        if needs:
            action_needed = True
        print(f"  {d.get('id')} status={d.get('status')} reason={d.get('reason')} "
              f"${d.get('amount',0)/100:.2f} charge={d.get('charge')}"
              f"{'  <-- RESPOND' if needs else ''}")

    # 3. Optional proactive refund on EFW
    if args.refund_efw and to_refund:
        print(f"\n--- refund-efw ({'APPLY' if args.apply else 'DRY-RUN'}) ---")
        for cs in to_refund:
            if not args.apply:
                print(f"  would refund {cs['id']} ${cs['amount']} {cs['email']}")
                continue
            r = api("refunds", method="POST", data={"charge": cs["id"]})
            if r.get("__error__"):
                print(f"  REFUND FAILED {cs['id']}: {r['__error__']} {r.get('body')}")
            else:
                print(f"  refunded {cs['id']} ${cs['amount']} -> {r.get('status')}")

    print(f"\nRESULT: {'ACTION NEEDED' if action_needed else 'all clear'}")
    sys.exit(10 if action_needed else 0)

if __name__ == "__main__":
    main()
