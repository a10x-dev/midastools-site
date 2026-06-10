#!/usr/bin/env python3
"""Idempotent Stripe setup for the Art Machine HD Sell-It Pack ($4.99).

Creates (or finds existing):
  - Product "Art Machine — HD Sell-It Pack"
  - Price $4.99 one-time
  - Payment Link with metadata kit_type=art-hd and redirect back to the tool
    carrying {CHECKOUT_SESSION_ID} for instant in-page unlock.

Run: python3 .founder/tools/setup-art-hd.py
"""
import json
import os
import sys
import urllib.parse
import urllib.request

def load_key():
    p = os.path.join(os.path.dirname(__file__), '..', '.stripe_key')
    with open(p) as f:
        return f.read().strip()

KEY = load_key()
BASE = 'https://api.stripe.com/v1'

def req(method, path, data=None):
    url = f'{BASE}{path}'
    body = urllib.parse.urlencode(data, doseq=True).encode() if data else None
    r = urllib.request.Request(url, data=body, method=method)
    r.add_header('Authorization', f'Bearer {KEY}')
    r.add_header('User-Agent', 'midastools-setup/1.0')
    if body:
        r.add_header('Content-Type', 'application/x-www-form-urlencoded')
    with urllib.request.urlopen(r) as resp:
        return json.load(resp)

PRODUCT_NAME = 'Art Machine — HD Sell-It Pack'

# 1. Find or create product
existing = req('GET', '/products/search?' + urllib.parse.urlencode({
    'query': f'name:"{PRODUCT_NAME}" AND active:"true"'}))
if existing['data']:
    product = existing['data'][0]
    print(f'found product {product["id"]}')
else:
    product = req('POST', '/products', {
        'name': PRODUCT_NAME,
        'description': 'High-res 1024px HD download of your Art Machine creation + commercial print-and-sell license + ready-to-publish listing copy. Make it, then sell it.',
        'metadata[kit_type]': 'art-hd',
    })
    print(f'created product {product["id"]}')

# 2. Find or create $4.99 price
prices = req('GET', f'/prices?product={product["id"]}&active=true&limit=10')
price = next((p for p in prices['data'] if p['unit_amount'] == 499 and p['currency'] == 'usd' and p.get('type') == 'one_time'), None)
if price:
    print(f'found price {price["id"]}')
else:
    price = req('POST', '/prices', {
        'product': product['id'],
        'unit_amount': 499,
        'currency': 'usd',
    })
    print(f'created price {price["id"]}')

# 3. Find or create payment link
links = req('GET', '/payment_links?active=true&limit=100')
plink = None
for l in links['data']:
    if l.get('metadata', {}).get('kit_type') == 'art-hd':
        plink = l
        break
if plink:
    print(f'found payment link {plink["id"]} -> {plink["url"]}')
else:
    plink = req('POST', '/payment_links', {
        'line_items[0][price]': price['id'],
        'line_items[0][quantity]': 1,
        'metadata[kit_type]': 'art-hd',
        'after_completion[type]': 'redirect',
        'after_completion[redirect][url]': 'https://www.midastools.co/ai-art-generator?hd_session={CHECKOUT_SESSION_ID}',
    })
    print(f'created payment link {plink["id"]} -> {plink["url"]}')

print(json.dumps({'product': product['id'], 'price': price['id'],
                  'plink_id': plink['id'], 'plink_url': plink['url']}, indent=2))
