#!/usr/bin/env python3
"""
fix-payment-links.py — Patch the 10 active Stripe payment links currently
configured with `hosted_confirmation` to instead redirect to /thank-you?kit=<slug>
where slug matches an existing entry in pages/thank-you.js KITS map.

This was discovered Session 158 (2026-05-05): Shantae Clinton's $97 sale
landed on Stripe's hosted-confirmation page instead of /thank-you, losing
GTM event, upsell, and email re-capture. 9 other plinks have the same bug.

Usage:
  --dry-run   prints what would change, makes no API calls (default)
  --apply     actually patches via Stripe API

Reads sk_live key from .founder/.stripe_key.

Idempotent: re-running on already-redirect plinks is a no-op (skip if
already has redirect to midastools.co).
"""
import base64
import json
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / ".stripe_key"
BASE = "https://www.midastools.co/thank-you"

# plink_id -> (kit_slug_for_KITS_map, kit_type_for_webhook, human_label)
# kit_slug must exist in pages/thank-you.js KITS map for /thank-you to render
# the right product. kit_type is the canonical key the webhook KIT_MAP uses
# (looked up via session.metadata.kit_type).
FIX_MAP = {
    "plink_1TFdsMAdkDx8xZMkhk9xQSk2": ("presentation-kit",   "presentation-kit",   "AI Presentation"),
    "plink_1TFdsKAdkDx8xZMk1x7UMCVw": ("email-marketing-kit","email-marketing-kit","AI Email Marketing Kit"),
    "plink_1TFdsIAdkDx8xZMkeOLr62Dn": ("social-media-kit",   "social-media-kit",   "AI Social Media Manager Kit"),
    "plink_1TDxPrAdkDx8xZMknZYcAXWs": ("small-business",     "small-business",     "Small Business AI Kit"),
    "plink_1TDwTmAdkDx8xZMkmxB9yn55": ("bundle",             "bundle",             "MidasTools All Kits Bundle ($97 — Shantae's purchase)"),
    "plink_1TDwTkAdkDx8xZMkmBZaNd84": ("freelancer",         "freelancer",         "Freelancer Automation Kit"),
    "plink_1TDwTjAdkDx8xZMkrRaTwyiZ": ("content-creator",    "content-creator",    "Content Creator Kit"),
    "plink_1TDwThAdkDx8xZMkUzYdXFzM": ("real-estate",        "real-estate",        "Real Estate AI Kit"),
    "plink_1TDwTgAdkDx8xZMku2MaSCn6": ("starter",            "starter-pack",       "OpenClaw Starter Kit (legacy plink — different from openclaw-starter-kit.vercel.app)"),
    # NOTE: plink_1TB4CN ("Midas Content — 4 Articles/Month") deliberately skipped —
    # it's a recurring service subscription, not a kit, and may want a different
    # post-completion experience (e.g. onboarding email rather than download page).
}


def stripe_request(method, path, data=None):
    key = KEY_FILE.read_text().strip()
    body = urllib.parse.urlencode(data, doseq=True).encode() if data else None
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}",
        data=body,
        method=method,
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-fix/1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


def main():
    apply = "--apply" in sys.argv
    mode = "APPLY" if apply else "DRY-RUN"
    print(f"Mode: {mode}\n")

    fixed = 0
    skipped = 0
    failed = 0

    for plink_id, (kit_slug, kit_type, label) in FIX_MAP.items():
        target_url = f"{BASE}?kit={kit_slug}"
        print(f"=== {plink_id} — {label} ===")
        # Idempotency check: fetch current state
        try:
            cur = stripe_request("GET", f"/payment_links/{plink_id}")
        except Exception as e:
            print(f"  ⛔ fetch failed: {e}")
            failed += 1
            continue

        ac = cur.get("after_completion") or {}
        cur_type = ac.get("type")
        cur_url = (ac.get("redirect") or {}).get("url", "")

        print(f"  current: type={cur_type} url={cur_url}")
        print(f"  target:  type=redirect url={target_url}")

        if cur_type == "redirect" and cur_url == target_url:
            print(f"  ✓ already correct — skipping")
            skipped += 1
            print()
            continue

        if not apply:
            print(f"  → would PATCH (run with --apply to actually fix)")
            fixed += 1
            print()
            continue

        # Apply the patch
        try:
            data = {
                "after_completion[type]": "redirect",
                "after_completion[redirect][url]": target_url,
                "metadata[kit_type]": kit_type,
                "metadata[fixed_session]": "158",
                "metadata[fixed_date]": "2026-05-05",
            }
            updated = stripe_request("POST", f"/payment_links/{plink_id}", data)
            new_ac = updated.get("after_completion") or {}
            new_url = (new_ac.get("redirect") or {}).get("url", "")
            if new_url == target_url:
                print(f"  ✅ FIXED — redirect now: {new_url}")
                fixed += 1
            else:
                print(f"  ⚠ unexpected response: {new_ac}")
                failed += 1
        except Exception as e:
            print(f"  ⛔ patch failed: {e}")
            failed += 1
        print()

    print(f"\nSummary: fixed={fixed} skipped={skipped} failed={failed}")
    if not apply:
        print("\nThis was a DRY-RUN. Re-run with --apply to actually fix.")


if __name__ == "__main__":
    main()
