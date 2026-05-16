#!/usr/bin/env python3
"""
Fix dead Stripe short URLs across pages/ by replacing them with verified live plinks.

Built 2026-05-16 S28-continuation after discovering 18+ dead Stripe URLs across 50+ pages
explained 47 days of zero revenue. Visitors click "Buy" → hit Stripe error page → bounce.

Usage:
  python3 .founder/tools/fix-dead-stripe-urls.py --dry-run    # show what would change
  python3 .founder/tools/fix-dead-stripe-urls.py --apply      # apply changes

Idempotent: re-running after --apply is a no-op (dead URLs no longer present).
Reversible: keep this file in version control + reverse the map.

Scope: HIGH-TRAFFIC non-blog pages only. The 30+ blog-post dead URLs need per-file
product-intent verification (some have STRIPE_MEGA / STRIPE_SAAS / STRIPE_FREELANCER
with the same base hash but different terminal chars implying different intended products).
Deferred to a follow-up session.
"""

import argparse
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]

# Each entry: (dead_short, live_short, intended_product, price)
# All live_shorts verified against Stripe API on 2026-05-16 (sk_live_51T3ifC...).
DEAD_TO_LIVE = [
    # OpenClaw Starter Kit pages (soul-generator, openclaw-cost-calculator, OpenClaw blogs)
    ("7sI9CDbla7Cx7Bu3ck", "cNi28qdgz7mVb0U8VYcMM07", "OpenClaw Starter Kit", 29),

    # All Kits Bundle — multiple dead variants all map to the one live bundle
    ("8wM2abdtg5up7BueVa", "bJe7sK0tNdLjgle0pscMM0b", "MidasTools All Kits Bundle", 97),
    ("00g5xY2WM04Ncyw9AH", "bJe7sK0tNdLjgle0pscMM0b", "MidasTools All Kits Bundle", 97),
    ("aEUbJ01xR0YxgligkocMM0g", "bJe7sK0tNdLjgle0pscMM0b", "MidasTools All Kits Bundle", 97),
    ("4gw5mf0Zl1U5aVW5kp", "bJe7sK0tNdLjgle0pscMM0b", "MidasTools All Kits Bundle", 97),

    # AI Prompt Mega Pack — dead Mega Pack URL appears in 4 free-tool pages
    ("4gw6qrdtgaODdZS4gw", "4gMbJ0dgz4aJ1qkb46cMM0d", "AI Prompt Mega Pack", 29),
    ("6oE8Aa1SIgRFgOQ5kD", "4gMbJ0dgz4aJ1qkb46cMM0d", "AI Prompt Mega Pack", 29),

    # AI Image Prompt Pack — dead URL on all 5 viral generators + nurture email
    ("8x24gy90j22B4Cw9UXcMM0i", "8x24gyccv7mVglegoqcMM0i", "AI Image Prompt Pack", 29),
]

# Files in scope this session (HIGH-TRAFFIC non-blog).
# Blog-post fixes deferred — each needs per-file product-intent verification.
FILES_IN_SCOPE = [
    "pages/index.js",
    "pages/soul-generator.js",
    "pages/prompt-enhancer.js",
    "pages/prompt-roaster.js",
    "pages/openclaw-cost-calculator.js",
    "pages/free-prompts.js",
    "pages/chatgpt-prompts.js",
    "pages/album-cover-generator.js",
    "pages/hug-younger-self-generator.js",
    "pages/tattoo-generator.js",
    "pages/miniature-diorama-generator.js",
    "pages/lego-prompt-generator.js",
    "pages/api/nurture.js",
    "pages/ecommerce-kit.js",
    "pages/social-media-kit.js",
    "pages/saas-founder-kit.js",
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="actually write changes")
    ap.add_argument("--dry-run", action="store_true", help="show changes only")
    args = ap.parse_args()

    if not args.apply and not args.dry_run:
        args.dry_run = True

    total_changes = 0
    files_changed = 0

    for rel in FILES_IN_SCOPE:
        path = REPO / rel
        if not path.exists():
            print(f"SKIP (missing): {rel}", file=sys.stderr)
            continue

        original = path.read_text()
        updated = original
        file_changes = []

        for dead, live, product, price in DEAD_TO_LIVE:
            occurrences = updated.count(dead)
            if occurrences:
                updated = updated.replace(dead, live)
                file_changes.append((dead, live, product, price, occurrences))
                total_changes += occurrences

        if file_changes:
            files_changed += 1
            print(f"\n== {rel} ==")
            for dead, live, product, price, n in file_changes:
                print(f"  {n}x: {dead} -> {live}  ({product} ${price})")
            if args.apply:
                path.write_text(updated)
                print(f"  WROTE.")

    print(f"\n=== Summary ===")
    print(f"Files changed: {files_changed}/{len(FILES_IN_SCOPE)}")
    print(f"URL swaps:     {total_changes}")
    print(f"Mode:          {'APPLY' if args.apply else 'DRY-RUN'}")


if __name__ == "__main__":
    main()
