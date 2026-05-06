#!/usr/bin/env python3
"""Firecrawl /v2/search wrapper for prospect-hunting.

Returns Google-equivalent web results (URL + title + description) plus
optional scraped page content. Designed for LinkedIn URL discovery
(Firecrawl 403s LinkedIn scrape directly, but search-result snippets
contain the same role/company info we need to qualify prospects).

Usage:
  python3 .founder/tools/firecrawl-search.py "query" [--limit N] [--save FILE]
  python3 .founder/tools/firecrawl-search.py --batch queries.jsonl --out results-dir

Auth: reads .founder/.firecrawl_key (gitignored). File-wins over env per
the same load_*_key pattern as send-one.py.

Cost: 2 credits per call (per Firecrawl pricing observation 2026-05-05).
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

API_URL = "https://api.firecrawl.dev/v2/search"
ROOT = Path(__file__).parent.parent


def load_key() -> str:
    env = (os.environ.get("FIRECRAWL_API_KEY") or "").strip()
    key_file = ROOT / ".firecrawl_key"
    file_key = key_file.read_text().strip() if key_file.exists() else ""
    if file_key and env and file_key != env:
        sys.stderr.write(
            f"⚠ FIRECRAWL_API_KEY env ({env[:7]}...) differs from file "
            f"({file_key[:7]}...). Using FILE.\n"
        )
        return file_key
    if file_key:
        return file_key
    if env:
        return env
    sys.exit("ERROR: No Firecrawl API key. Save to .founder/.firecrawl_key.")


def search(query: str, limit: int = 8, country: str = "US", scrape: bool = False) -> dict:
    payload: dict = {"query": query, "limit": limit, "country": country}
    if scrape:
        payload["scrapeOptions"] = {"formats": [{"type": "markdown"}]}
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {load_key()}",
            "Content-Type": "application/json",
            "User-Agent": "midastools-prospecting/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode()[:500]}")


def render(result: dict) -> str:
    if not result.get("success"):
        return f"FAILED: {result.get('error', 'unknown')}"
    lines = [f"# {len(result['data'].get('web', []))} results | {result.get('creditsUsed', '?')} credits used"]
    for i, row in enumerate(result["data"].get("web", []), 1):
        lines.append(f"\n## {i}. {row.get('title', '(no title)')}")
        lines.append(f"   {row.get('url', '')}")
        if desc := row.get("description"):
            lines.append(f"   {desc}")
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser(description="Firecrawl search for prospect URLs.")
    ap.add_argument("query", nargs="?", help="search query (e.g., quoted LinkedIn search)")
    ap.add_argument("--limit", type=int, default=8, help="results per call (default 8)")
    ap.add_argument("--country", default="US")
    ap.add_argument("--scrape", action="store_true", help="also scrape result pages (10 credits/call typically; LinkedIn 403s)")
    ap.add_argument("--save", help="write raw JSON to file")
    ap.add_argument("--batch", help="read queries from a .jsonl file (one query per line)")
    ap.add_argument("--out", help="output dir for batch results")
    args = ap.parse_args()

    if args.batch:
        if not args.out:
            sys.exit("--batch requires --out DIR")
        out_dir = Path(args.out)
        out_dir.mkdir(parents=True, exist_ok=True)
        queries = [line.strip() for line in Path(args.batch).read_text().splitlines() if line.strip()]
        for i, q in enumerate(queries, 1):
            print(f"\n=== Q{i}/{len(queries)}: {q[:80]} ===")
            res = search(q, limit=args.limit, country=args.country, scrape=args.scrape)
            (out_dir / f"q{i}.json").write_text(json.dumps(res, indent=2))
            print(render(res))
        return 0

    if not args.query:
        ap.error("query required (or use --batch)")
    res = search(args.query, limit=args.limit, country=args.country, scrape=args.scrape)
    if args.save:
        Path(args.save).write_text(json.dumps(res, indent=2))
    print(render(res))
    return 0


if __name__ == "__main__":
    sys.exit(main())
