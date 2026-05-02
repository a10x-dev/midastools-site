#!/usr/bin/env python3
"""Pull the last N Stripe charges and dump structured detail.

Usage: python3 .founder/tools/stripe-recent-sales.py [N]
Default N=5. Reads .founder/.stripe_key (gitignored).
"""
import os, json, sys, urllib.request, urllib.parse, datetime
from pathlib import Path

KEY_FILE = Path(__file__).resolve().parent.parent / '.stripe_key'
key = os.environ.get('STRIPE_SECRET_KEY') or KEY_FILE.read_text().strip()
limit = int(sys.argv[1]) if len(sys.argv) > 1 else 5

params = urllib.parse.urlencode({'limit': limit, 'expand[]': 'data.payment_intent'})
req = urllib.request.Request(
    f'https://api.stripe.com/v1/charges?{params}',
    headers={'Authorization': f'Bearer {key}'}
)
data = json.loads(urllib.request.urlopen(req).read())
for c in data['data']:
    when = datetime.datetime.fromtimestamp(c['created'], tz=datetime.timezone.utc).isoformat()
    pi = c.get('payment_intent') if isinstance(c.get('payment_intent'), dict) else {}
    print(f"id={c['id']}")
    print(f"  amount=${c['amount']/100:.2f} {c.get('currency','').upper()}")
    print(f"  status={c['status']} paid={c['paid']}")
    print(f"  created={when}")
    print(f"  email={c.get('billing_details',{}).get('email') or c.get('receipt_email')}")
    print(f"  description={c.get('description')}")
    print(f"  client_reference_id={c.get('client_reference_id')}")
    print(f"  metadata={c.get('metadata')}")
    print(f"  pi.metadata={pi.get('metadata') if pi else None}")
    print(f"  pi.id={c.get('payment_intent') if not isinstance(c.get('payment_intent'), dict) else (pi.get('id') if pi else None)}")
    print()
