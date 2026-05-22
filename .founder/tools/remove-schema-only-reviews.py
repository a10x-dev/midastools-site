#!/usr/bin/env python3
"""
remove-schema-only-reviews.py — Remove schema-only `aggregateRating` + `review`
JSON-LD blocks from kit pages flagged by schema-review-audit.py.

Why: 19 kit pages had FTC-exposed review schema (reviewBody quotes in JSON-LD
that were NEVER rendered in page body). FTC 16 CFR Part 255 (Aug 2024) treats
this as the exact failure mode it targets (Google sees the reviews, the
visitor does not, no verifiable customer trail exists). Removing the schema
blocks is the smallest reversible action that closes exposure.

What this tool does NOT do: it does not remove visible page-body testimonials
(there are none on these pages), does not touch the Product schema parent
object, does not change pricing or descriptions. Only removes the
`aggregateRating: { ... }` and `review: [ ... ]` keys + their preceding/trailing
commas as needed.

Idempotent — safe to re-run. --dry-run by default.

Usage:
  python3 .founder/tools/remove-schema-only-reviews.py --dry-run    # preview
  python3 .founder/tools/remove-schema-only-reviews.py --apply      # write
"""

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
PAGES_DIR = ROOT / "pages"

# Pages flagged FTC-exposed by schema-review-audit.py (19 pages, all with
# 3 schema-only reviewBody entries + an aggregateRating block)
FLAGGED_PAGES = [
    "ai-image-prompt-pack.js",
    "ai-prompt-mega-pack.js",
    "ai-video-prompt-pack.js",
    "bundle.js",
    "claude-code-kit.js",
    "claude-cowork-kit.js",
    "content-creator-kit.js",
    "ecommerce-kit.js",
    "email-marketing-kit.js",
    "freelancer-kit.js",
    "muse-spark-kit.js",
    "notion-templates-kit.js",
    "presentation-kit.js",
    "real-estate-kit.js",
    "reddit-lead-kit.js",
    "saas-founder-kit.js",
    "small-business-kit.js",
    "social-media-kit.js",
    "team-adoption-kit.js",
]


def remove_block(text, key):
    """
    Remove `"<key>": <value>,?` block from a JS object literal where value
    is either `{ ... }` (aggregateRating) or `[ ... ]` (review).
    Handles balanced braces/brackets via counting. Preserves indentation
    by also consuming any trailing comma + whitespace OR preceding comma
    if at end of object.
    """
    pattern_start = re.compile(rf'"{key}"\s*:\s*([\{{\[])')
    m = pattern_start.search(text)
    if not m:
        return text, False
    open_char = m.group(1)
    close_char = "}" if open_char == "{" else "]"
    # Find balanced close
    depth = 0
    i = m.end() - 1
    while i < len(text):
        c = text[i]
        if c == open_char:
            depth += 1
        elif c == close_char:
            depth -= 1
            if depth == 0:
                break
        i += 1
    if depth != 0:
        return text, False  # unbalanced; abort
    # End of value at i (inclusive). Consume trailing `,` and inline whitespace
    # but PRESERVE the trailing newline — important when this key is the last
    # one in its parent object (so the closing brace stays on its own line).
    j = i + 1
    # Skip trailing comma + inline spaces/tabs (NOT newlines)
    while j < len(text) and text[j] in ", \t":
        if text[j] == ",":
            j += 1
            break
        j += 1
    # Compute start of removal — include the preceding newline + indentation
    # of the key being removed (so we remove a clean whole-line block).
    start = m.start()
    while start > 0 and text[start - 1] in " \t":
        start -= 1
    if start > 0 and text[start - 1] == "\n":
        start -= 1  # consume one newline before the key
    return text[:start] + text[j:], True


def fix_trailing_comma(text):
    """
    After removing keys, sometimes leaves a sequence like:
      "brand": "Midas Tools",

        })}} />
    where the trailing comma is now orphaned before the close-brace.
    JS object literals tolerate this, but JSON.stringify outputs valid JSON,
    so the JS form is what matters. Still, normalize by removing trailing
    commas before `}` to keep the source clean.
    """
    # Remove `,` immediately followed by whitespace + `}`
    return re.sub(r",(\s*\})", r"\1", text)


def process_file(path, apply=False):
    text = path.read_text(encoding="utf-8")
    original = text
    text, removed_rating = remove_block(text, "aggregateRating")
    text, removed_review = remove_block(text, "review")
    text = fix_trailing_comma(text)
    changed = (text != original)
    if apply and changed:
        path.write_text(text, encoding="utf-8")
    return {
        "file": path.name,
        "changed": changed,
        "removed_aggregateRating": removed_rating,
        "removed_review": removed_review,
        "bytes_before": len(original),
        "bytes_after": len(text),
    }


def main():
    ap = argparse.ArgumentParser()
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--dry-run", action="store_true")
    g.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    results = []
    for name in FLAGGED_PAGES:
        path = PAGES_DIR / name
        if not path.exists():
            print(f"  ⚠️  missing: {name}", file=sys.stderr)
            continue
        results.append(process_file(path, apply=args.apply))

    mode = "APPLY" if args.apply else "DRY-RUN"
    print(f"=== Schema-only-review removal — {mode} ===\n")
    print(f"{'File':40s} {'changed':9s} {'agg':5s} {'rev':5s} {'-bytes':8s}")
    total_bytes_saved = 0
    files_changed = 0
    for r in results:
        delta = r["bytes_before"] - r["bytes_after"]
        total_bytes_saved += delta
        if r["changed"]:
            files_changed += 1
        print(f"{r['file']:40s} {'YES' if r['changed'] else 'no':9s} "
              f"{'YES' if r['removed_aggregateRating'] else 'no':5s} "
              f"{'YES' if r['removed_review'] else 'no':5s} "
              f"{delta:8d}")
    print(f"\nFiles changed: {files_changed} / {len(results)}")
    print(f"Total bytes removed: {total_bytes_saved}")
    if not args.apply:
        print("\n(dry-run — re-run with --apply to write changes)")


if __name__ == "__main__":
    main()
