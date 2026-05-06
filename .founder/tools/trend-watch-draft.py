#!/usr/bin/env python3
"""Phase 2 of trend-watch: auto-draft blog posts from a trend digest item.

Workflow:
  1. trend-watch.py (Phase 1) emits the daily digest with top 5 trends.
  2. You pick one trend (by URL or rank), pass it to this tool.
  3. Tool calls Claude API with our citation-pattern prompt.
  4. Output lands in .founder/drafts/blog-{slug}.draft.md for agent review.
  5. Agent (me) reviews + verifies factual claims, then I ship via the
     blog page pattern (own file under pages/blog/).

Auth: reads .founder/.anthropic_key (gitignored). File-wins over env.

Usage:
  python3 .founder/tools/trend-watch-draft.py \\
      --url "https://example.com/trend-article" \\
      --slug "chrome-built-in-ai-model" \\
      --angle "5 Things to Know About Chrome's Built-In AI Model (May 2026)"

  python3 .founder/tools/trend-watch-draft.py --rank 1  # top trend from last digest

The drafting prompt enforces:
  - Numbered listicle, 7-15 items
  - Each item: name + factual hook + why-it-works + CTA
  - Named entities everywhere
  - Specific factual claims with numbers
  - "May 2026" date stamp in title + URL slug
  - No fabricated stats — model instructed to use placeholder if unsure
  - Internal cross-links to our 4-page citation cluster

Output: markdown file at .founder/drafts/blog-{slug}.draft.md.
Agent review checklist embedded in the file header.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent
DRAFTS = ROOT / "drafts"
DRAFTS.mkdir(exist_ok=True)
STATE_DIR = ROOT / "state"
LAST_DIGEST = STATE_DIR / "trend-watch-last.json"

ANTHROPIC_API = "https://api.anthropic.com/v1/messages"
MODEL = "claude-opus-4-7"  # newest reasoning model
MAX_TOKENS = 4096


def load_key() -> str:
    env = (os.environ.get("ANTHROPIC_API_KEY") or "").strip()
    key_file = ROOT / ".anthropic_key"
    file_key = key_file.read_text().strip() if key_file.exists() else ""
    if file_key and env and file_key != env:
        sys.stderr.write(
            f"⚠ ANTHROPIC_API_KEY env ({env[:7]}...) differs from file "
            f"({file_key[:7]}...). Using FILE.\n"
        )
        return file_key
    if file_key:
        return file_key
    if env:
        return env
    sys.exit(
        "ERROR: No Anthropic API key.\n"
        "  Save the key at .founder/.anthropic_key (gitignored), OR\n"
        "  set ANTHROPIC_API_KEY env var.\n"
        "  Get a key at https://console.anthropic.com/"
    )


DRAFTING_PROMPT_TEMPLATE = """You are drafting a blog post for midastools.co following our exact ChatGPT-citation-pattern (8 structural elements documented in `.founder/playbooks/chatgpt-citation-playbook.md`).

The trend you are writing about:
- Source URL: {url}
- Source title: {source_title}
- Suggested angle: {angle}
- Today's date: 2026-05-{day:02d}

Required structure:
1. Title format: "{angle}" — keep this title exactly. Slug: "{slug}".
2. Opening: 2-3 sentence intro with a confident factual claim. Lead with WHY THIS MATTERS in May 2026 specifically.
3. Body: a numbered listicle of 8-12 items. Each item:
   - H2 with item name
   - 1-2 sentence "factual hook" with a SPECIFIC NUMBER, NAMED ENTITY, or DATE
   - "Why it works" or "Why it matters" sentence with reasoning
   - "Try it" or actionable line; LINK to one of our pages where relevant:
     - /ai-prompt-mega-pack ($29 Mega Pack)
     - /blog/best-ai-tools-may-2026 (May 2026 listicle)
     - /blog/chatgpt-tips-tricks-2026 (ChatGPT tips)
     - /blog/viral-ai-art-trends-april-2026 (April art trends)
     - /world-cup-ai-prompts-2026 (World Cup prompts)
     - /match (persona quiz)
4. Strong opening sentence — confident factual claim, no hedging.
5. Named entities everywhere: Claude Opus 4.7, ChatGPT, Anthropic, OpenAI, Cursor, Lovable, Perplexity, Notion AI, Midjourney, etc.
6. Closing CTA section: $29 Mega Pack + $97 All Kits Bundle Stripe links with utm_source=blog tag.

CRITICAL RULES:
- Do NOT fabricate statistics. If you're unsure about a number, write `[VERIFY: ...]` placeholder. Agent review will fact-check.
- Do NOT invent product features, pricing, or specs. Use only what you know to be true as of May 2026 (within Claude's training).
- Do NOT use trademark claims unsafely (e.g., don't say "Chrome IS evil" — use neutral framing).
- "May 2026" in the title + meta + URL slug + at least 3 places in the body for freshness signal.
- Each H2 should match a likely natural-language search query.

Output FORMAT: a markdown file with the following structure. Output ONLY the markdown, no extra commentary.

```
---
slug: {slug}
title: <full title here>
description: <140-char meta description with named entities + the May 2026 date>
date: 2026-05-{day:02d}
---

# <full title>

<3-sentence intro>

## 1. <item name>
<factual hook with named entity + number>
**Why it matters:** <reasoning sentence>
**Try it:** <actionable line, link if relevant>

## 2. <item name>
...

(continue for 8-12 items)

## The pattern

<3-sentence closing reflection>

## Want all 200+ AI prompts?

<CTA paragraph leading to Stripe links>
```
"""


def call_claude(prompt: str) -> str:
    key = load_key()
    payload = {
        "model": MODEL,
        "max_tokens": MAX_TOKENS,
        "messages": [{"role": "user", "content": prompt}],
    }
    req = urllib.request.Request(
        ANTHROPIC_API,
        data=json.dumps(payload).encode(),
        headers={
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
            "User-Agent": "midastools-trend-draft/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read())
            return "".join(b.get("text", "") for b in data.get("content", []))
    except urllib.error.HTTPError as e:
        sys.exit(f"Claude API error HTTP {e.code}: {e.read().decode()[:500]}")


def load_trend_from_rank(rank: int) -> dict:
    if not LAST_DIGEST.exists():
        sys.exit("No prior digest. Run trend-watch.py first.")
    state = json.loads(LAST_DIGEST.read_text())
    titles = state.get("top_titles", [])
    if rank > len(titles):
        sys.exit(f"Rank {rank} > digest size ({len(titles)})")
    return {"title": titles[rank - 1], "url": "<set --url manually for full draft>", "angle": f"5 Things to Know About {titles[rank-1].split()[0]} (May 2026)"}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", help="source URL of the trend")
    ap.add_argument("--source-title", help="title of the source article")
    ap.add_argument("--slug", required=True, help="our slug for the post (e.g., 'chrome-builtin-ai-may-2026')")
    ap.add_argument("--angle", required=True, help="our blog title (the angle)")
    ap.add_argument("--rank", type=int, help="alternative: rank from last digest (1-5)")
    args = ap.parse_args()

    if args.rank and not args.url:
        trend = load_trend_from_rank(args.rank)
        if not args.source_title:
            args.source_title = trend["title"]
        if not args.url:
            args.url = trend["url"]

    today = datetime.now(timezone.utc)
    prompt = DRAFTING_PROMPT_TEMPLATE.format(
        url=args.url or "(no URL provided)",
        source_title=args.source_title or "(no source title)",
        angle=args.angle,
        slug=args.slug,
        day=today.day,
    )

    print(f"→ Drafting blog post for slug={args.slug}...", file=sys.stderr)
    draft = call_claude(prompt)

    # Strip wrapping markdown code fences if Claude adds them
    if draft.strip().startswith("```"):
        lines = draft.strip().split("\n")
        if lines[0].startswith("```"):
            lines = lines[1:]
        if lines and lines[-1].startswith("```"):
            lines = lines[:-1]
        draft = "\n".join(lines)

    out_path = DRAFTS / f"blog-{args.slug}.draft.md"
    review_header = f"""<!--
DRAFT — agent review required before publishing.

Generated: {today.isoformat()}
Source URL: {args.url}
Source title: {args.source_title}
Slug: {args.slug}
Angle: {args.angle}

Review checklist (per .founder/playbooks/chatgpt-citation-playbook.md):
  [ ] Every named entity is real (Claude Opus 4.7, ChatGPT, etc.)
  [ ] Every [VERIFY: ...] placeholder resolved with a real number or removed
  [ ] No fabricated stats (cross-check anything that looks specific)
  [ ] Title length under 70 chars
  [ ] Meta description under 160 chars
  [ ] At least 3 internal links to our citation cluster
  [ ] Closing CTA has utm_source=blog tag on Stripe URLs
  [ ] H2 count between 8 and 12

To publish: copy markdown content to a new pages/blog/{args.slug}.js file
following the pattern of pages/blog/best-ai-tools-may-2026.js.
-->

"""
    out_path.write_text(review_header + draft)
    print(f"\n✓ Draft saved: {out_path}", file=sys.stderr)
    print(f"  Bytes: {out_path.stat().st_size}", file=sys.stderr)
    print(f"  Review with: $EDITOR {out_path}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
