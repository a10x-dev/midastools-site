#!/usr/bin/env python3
"""
stripe-plinks-snapshot.py — Snapshot of all active Stripe payment links with
URL alias <-> plink_id <-> product <-> price columns.

The Stripe payment link URL `buy.stripe.com/<alias>` has an opaque alias that
cannot be reverse-mapped to a plink_id (`plink_1XXX...`) from code alone — but
the API exposes both. This tool resolves the mapping so any future label-vs-URL
audit (e.g. pages/for-coaches.js had two candidate $97 URLs and we couldn't
unilaterally pick the canonical one in S22) takes one API call instead of a
strategic-call deferral.

Usage:
  python3 .founder/tools/stripe-plinks-snapshot.py                # markdown table
  python3 .founder/tools/stripe-plinks-snapshot.py --save         # write to deliverables/
  python3 .founder/tools/stripe-plinks-snapshot.py --json         # raw JSON
  python3 .founder/tools/stripe-plinks-snapshot.py --csv          # CSV
  python3 .founder/tools/stripe-plinks-snapshot.py --find <alias> # one-shot lookup

Reads sk_live key from .founder/.stripe_key.
"""
import argparse
import base64
import csv
import json
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / ".stripe_key"
DELIVERABLES = ROOT / "deliverables"


def stripe_get(path):
    key = KEY_FILE.read_text().strip()
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}",
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-plinks-snapshot/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


def all_payment_links():
    """Page through all active payment links."""
    out = []
    starting_after = None
    while True:
        q = "limit=100&active=true"
        if starting_after:
            q += f"&starting_after={starting_after}"
        page = stripe_get(f"/payment_links?{q}")
        out.extend(page.get("data", []))
        if not page.get("has_more"):
            break
        starting_after = page["data"][-1]["id"]
    return out


def line_item(plink_id):
    """Fetch the first line item (product + price) for a payment link."""
    try:
        data = stripe_get(f"/payment_links/{plink_id}/line_items?limit=1")
        if data.get("data"):
            li = data["data"][0]
            price = li.get("price") or {}
            product_id = price.get("product")
            unit_amount = price.get("unit_amount")
            currency = price.get("currency", "usd")
            recurring = (price.get("recurring") or {}).get("interval")
            product_name = None
            if product_id:
                try:
                    prod = stripe_get(f"/products/{product_id}")
                    product_name = prod.get("name")
                except Exception:
                    pass
            return {
                "product_id": product_id,
                "product_name": product_name,
                "price_id": price.get("id"),
                "unit_amount": unit_amount,
                "currency": currency,
                "recurring": recurring,
            }
    except Exception as e:
        print(f"⚠ line_item fetch failed for {plink_id}: {e}", file=sys.stderr)
    return {}


def url_alias(plink):
    """Extract the alias from a Stripe payment link URL.
    e.g. https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b -> bJe7sK0tNdLjgle0pscMM0b
    """
    url = plink.get("url") or ""
    if "buy.stripe.com/" in url:
        return url.rsplit("/", 1)[-1]
    return ""


def format_price(li):
    amt = li.get("unit_amount")
    if amt is None:
        return "?"
    cur = (li.get("currency") or "usd").upper()
    rec = li.get("recurring")
    s = f"${amt/100:.0f}"
    if cur != "USD":
        s = f"{amt/100:.2f} {cur}"
    if rec:
        s += f"/{rec}"
    return s


def build_rows():
    plinks = all_payment_links()
    rows = []
    for p in plinks:
        li = line_item(p["id"])
        completion = p.get("after_completion", {})
        redirect_url = ""
        if completion.get("type") == "redirect":
            redirect_url = (completion.get("redirect") or {}).get("url", "")
        rows.append({
            "alias": url_alias(p),
            "plink_id": p["id"],
            "url": p.get("url", ""),
            "product_name": li.get("product_name") or "(unknown)",
            "product_id": li.get("product_id", ""),
            "price_id": li.get("price_id", ""),
            "price": format_price(li),
            "currency": li.get("currency", ""),
            "recurring": li.get("recurring", "") or "",
            "after_completion_type": completion.get("type", ""),
            "redirect_url": redirect_url,
            "active": p.get("active", False),
            "metadata": p.get("metadata") or {},
        })
    rows.sort(key=lambda r: (r["product_name"].lower(), r["plink_id"]))
    return rows


def markdown_table(rows):
    out = []
    out.append(f"# Stripe Payment Links Snapshot — {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    out.append("")
    out.append(f"**{len(rows)} active payment links** | url alias <-> plink_id <-> product <-> price")
    out.append("")
    out.append("| Alias | plink_id | Product | Price | Redirect |")
    out.append("|---|---|---|---|---|")
    for r in rows:
        redirect_short = r["redirect_url"]
        if redirect_short:
            redirect_short = redirect_short.replace("https://www.midastools.co", "").replace("https://midastools.co", "")
            if len(redirect_short) > 40:
                redirect_short = redirect_short[:37] + "..."
        elif r["after_completion_type"]:
            redirect_short = f"({r['after_completion_type']})"
        out.append(
            f"| `{r['alias']}` | `{r['plink_id']}` | {r['product_name']} | {r['price']} | {redirect_short} |"
        )
    return "\n".join(out)


def csv_dump(rows):
    buf = StringIO()
    w = csv.DictWriter(buf, fieldnames=[
        "alias", "plink_id", "product_name", "product_id",
        "price_id", "price", "currency", "recurring",
        "after_completion_type", "redirect_url", "active", "url",
    ])
    w.writeheader()
    for r in rows:
        row = dict(r)
        row.pop("metadata", None)
        w.writerow(row)
    return buf.getvalue()


def find_one(rows, query):
    """Find a single row by alias, plink_id, or product-name substring."""
    q = query.lower()
    # Exact alias / plink_id match first
    for r in rows:
        if r["alias"] == query or r["plink_id"] == query:
            return [r]
    # Substring match on product name or alias
    return [r for r in rows if q in r["alias"].lower()
            or q in r["plink_id"].lower()
            or q in r["product_name"].lower()]


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--save", action="store_true", help="Save markdown to .founder/deliverables/")
    ap.add_argument("--json", action="store_true", help="Output raw JSON")
    ap.add_argument("--csv", action="store_true", help="Output CSV")
    ap.add_argument("--find", help="Find by alias / plink_id / product-name substring")
    args = ap.parse_args()

    if not KEY_FILE.exists():
        print(f"⚠ {KEY_FILE} not found — need sk_live key", file=sys.stderr)
        sys.exit(2)

    rows = build_rows()

    if args.find:
        matches = find_one(rows, args.find)
        if not matches:
            print(f"no match for {args.find!r}", file=sys.stderr)
            sys.exit(1)
        for r in matches:
            print(json.dumps(r, indent=2))
        return

    if args.json:
        print(json.dumps(rows, indent=2))
        return

    if args.csv:
        print(csv_dump(rows))
        return

    md = markdown_table(rows)
    print(md)

    if args.save:
        DELIVERABLES.mkdir(parents=True, exist_ok=True)
        out = DELIVERABLES / f"stripe-plinks-snapshot-{datetime.now(timezone.utc).strftime('%Y-%m-%d')}.md"
        out.write_text(md + "\n")
        print(f"\n📝 saved {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
