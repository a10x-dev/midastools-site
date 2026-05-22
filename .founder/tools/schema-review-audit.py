#!/usr/bin/env python3
"""
schema-review-audit.py — Detect schema-only-review FTC exposure across kit pages.

For each page with reviewBody / reviewCount in JSON-LD, verify whether the
quote + author appear in the rendered page body. If quote-text not found
outside JSON-LD context, the review is schema-only (invisible to the human
visitor, visible only to Google) — FTC 16 CFR Part 255 (Aug 2024 final
rule on fake / AI-generated reviews) exposure.

Usage:
  python3 .founder/tools/schema-review-audit.py
  python3 .founder/tools/schema-review-audit.py --save  # writes to .founder/deliverables/

Exit codes:
  0 = no schema-only reviews found
  10 = at least one page has schema-only reviews (action needed)
"""

import argparse
import datetime
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
PAGES_DIR = ROOT / "pages"


def find_kit_pages():
    """Return all .js files in pages/ that have reviewCount or reviewBody."""
    candidates = []
    for f in PAGES_DIR.glob("*.js"):
        text = f.read_text(encoding="utf-8", errors="ignore")
        if "reviewCount" in text or "reviewBody" in text:
            candidates.append(f)
    return sorted(candidates)


def extract_schema_reviews(text):
    """Return a list of {author, body} dicts from JSON-LD review blocks."""
    reviews = []
    # Match reviewBody: "..." patterns (single-line for now; sufficient for our codebase)
    pattern = re.compile(
        r'"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"[^}]*\}\s*,\s*"reviewBody"\s*:\s*"([^"]+)"',
        re.DOTALL,
    )
    for m in pattern.finditer(text):
        reviews.append({"author": m.group(1), "body": m.group(2)})
    return reviews


def extract_review_count(text):
    """Return aggregateRating reviewCount value if present, else None."""
    m = re.search(r'"reviewCount"\s*:\s*"?(\d+)"?', text)
    return m.group(1) if m else None


def extract_rating_value(text):
    """Return aggregateRating ratingValue if present."""
    m = re.search(r'"ratingValue"\s*:\s*"?([0-9.]+)"?', text)
    return m.group(1) if m else None


def quote_appears_in_body(text, quote, author):
    """
    Check if either the quote text OR the author name appears outside JSON-LD context.
    JSON-LD context is the Head/Script block. Heuristic: strip the JSON-LD region
    and look for the substring in the remainder.
    """
    # Strip the JSON-LD section (between application/ld+json script and its close)
    stripped = re.sub(
        r"<script[^>]*application/ld\+json[^>]*>.*?</script>",
        "",
        text,
        flags=re.DOTALL,
    )
    # Also strip the dangerouslySetInnerHTML JSON.stringify block (Next.js pattern)
    stripped = re.sub(
        r"dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(\{.*?\}\)\s*\}\}",
        "",
        stripped,
        flags=re.DOTALL,
    )
    # Look for first 40 chars of quote (avoids false negative on whitespace diffs)
    quote_snippet = quote[:40].strip().lower()
    author_snippet = author.lower()
    body_lower = stripped.lower()
    return (quote_snippet in body_lower) or (author_snippet in body_lower)


def audit_page(path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    reviews = extract_schema_reviews(text)
    review_count = extract_review_count(text)
    rating_value = extract_rating_value(text)
    schema_only = []
    rendered = []
    for r in reviews:
        if quote_appears_in_body(text, r["body"], r["author"]):
            rendered.append(r)
        else:
            schema_only.append(r)
    return {
        "page": path.name,
        "rel_path": str(path.relative_to(ROOT)),
        "review_count_claimed": review_count,
        "rating_value_claimed": rating_value,
        "schema_reviews_total": len(reviews),
        "schema_only": schema_only,
        "rendered": rendered,
        "ftc_risk": len(schema_only) > 0,
    }


def fmt_table(results):
    lines = []
    lines.append("| Page | Claimed N | Claimed Rating | JSON-LD reviews | Rendered | Schema-only | FTC risk |")
    lines.append("|---|---|---|---|---|---|---|")
    for r in results:
        flag = "🔴 YES" if r["ftc_risk"] else "🟢 no"
        lines.append(
            f"| {r['page']} | {r['review_count_claimed'] or '—'} | {r['rating_value_claimed'] or '—'} "
            f"| {r['schema_reviews_total']} | {len(r['rendered'])} | {len(r['schema_only'])} | {flag} |"
        )
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--save", action="store_true", help="Write report to .founder/deliverables/")
    ap.add_argument("--json", action="store_true", help="Emit JSON only")
    args = ap.parse_args()

    pages = find_kit_pages()
    results = [audit_page(p) for p in pages]
    risky = [r for r in results if r["ftc_risk"]]

    if args.json:
        print(json.dumps(results, indent=2))
        sys.exit(10 if risky else 0)

    print(f"=== Schema-only review audit @ {datetime.datetime.utcnow().isoformat()}Z ===")
    print(f"Pages scanned: {len(results)}")
    print(f"Pages with FTC exposure: {len(risky)}")
    print()
    print(fmt_table(results))
    print()
    if risky:
        print("== FTC-EXPOSED PAGES (schema-only reviewBody, not rendered in body) ==")
        for r in risky:
            print(f"\n--- {r['rel_path']} ---")
            print(f"  Claimed reviewCount: {r['review_count_claimed']}, ratingValue: {r['rating_value_claimed']}")
            print(f"  Schema-only reviewBody entries: {len(r['schema_only'])}")
            for s in r["schema_only"]:
                print(f"    • {s['author']}: \"{s['body'][:80]}{'...' if len(s['body']) > 80 else ''}\"")

    if args.save:
        out_dir = ROOT / ".founder" / "deliverables"
        out_dir.mkdir(parents=True, exist_ok=True)
        ts = datetime.date.today().isoformat()
        out_path = out_dir / f"schema-only-review-audit-{ts}.md"
        md = []
        md.append(f"# Schema-Only Review Audit — {ts}\n")
        md.append(f"**Pages scanned**: {len(results)}  ")
        md.append(f"**FTC-exposed pages**: {len(risky)}\n")
        md.append("## Summary table\n")
        md.append(fmt_table(results))
        md.append("\n## FTC-exposed pages — detail\n")
        if not risky:
            md.append("None.\n")
        else:
            for r in risky:
                md.append(f"\n### `{r['rel_path']}`\n")
                md.append(f"- Claimed `reviewCount`: **{r['review_count_claimed']}**")
                md.append(f"- Claimed `ratingValue`: **{r['rating_value_claimed']}**")
                md.append(f"- Schema-only `reviewBody` entries: **{len(r['schema_only'])}**")
                md.append(f"- Rendered review entries: {len(r['rendered'])}")
                md.append("\n**Schema-only quotes (in JSON-LD, NOT in page body):**\n")
                for s in r["schema_only"]:
                    md.append(f"- **{s['author']}**: \"{s['body']}\"")
        md.append("\n## Risk basis\n")
        md.append("FTC 16 CFR Part 255 (final rule, August 2024) prohibits fake / "
                 "AI-generated / placeholder consumer reviews. JSON-LD-only reviews that "
                 "Google sees but the human visitor cannot see fail the disclosure standard "
                 "AND fail the substantiation standard (no verifiable customer trail). "
                 "Even if the quotes happen to be real, their schema-only placement "
                 "presents them to search engines without rendering them to the buyer — "
                 "this is the exact pattern the rule targets.\n")
        md.append("## Remediation options\n")
        md.append("1. **Remove the `review` array + `aggregateRating` block** from JSON-LD on every flagged page (smallest, reversible, FTC-safe).\n")
        md.append("2. **Render the same testimonials in page body** with author attribution + date + verification context (only if quotes are real and you can cite the source).\n")
        md.append("3. **Replace with real customer quotes** from Vittoria / Shantae / Arnaud / George if they consent (4 LTM buyers).\n")
        out_path.write_text("\n".join(md), encoding="utf-8")
        print(f"\nReport saved: {out_path}")

    sys.exit(10 if risky else 0)


if __name__ == "__main__":
    main()
