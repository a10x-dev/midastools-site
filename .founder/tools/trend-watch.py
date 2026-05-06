#!/usr/bin/env python3
"""Daily AI-trend digest from 6 free public sources.

Output: top 5 scored trends + suggested blog angles, optionally emailed
to iam@armando.mx via Resend. State stored to .founder/state/trend-watch-last.json
so we can compare deltas day-over-day.

Usage:
  python3 .founder/tools/trend-watch.py            # print to stdout
  python3 .founder/tools/trend-watch.py --email    # also email digest
  python3 .founder/tools/trend-watch.py --no-state # don't write state file

Sources (all free, no auth):
  - HN Algolia search (AI / Claude / GPT / Anthropic / OpenAI)
  - Reddit (r/ChatGPT, r/ClaudeAI, r/LocalLLaMA) top of last 24h
  - Anthropic blog RSS
  - OpenAI blog RSS
  - GitHub trending (Python repos, daily)

Scoring: recency × engagement × topic-fit.

Exit codes:
  0  = ran successfully, digest produced
  10 = SIGNAL: a "🔥 hot" trend hit (engagement > threshold) — fire proactive Slack/email
  1  = error fetching all sources (everything failed)
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).parent.parent
STATE_DIR = ROOT / "state"
STATE_DIR.mkdir(exist_ok=True)
STATE_FILE = STATE_DIR / "trend-watch-last.json"

UA = "midastools-trend-watch/1.0 (https://www.midastools.co)"
HOT_SCORE_THRESHOLD = 80  # any item above this triggers exit 10


def http_get(url: str, headers: dict | None = None, timeout: int = 15) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, **(headers or {})})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def http_get_json(url: str, headers: dict | None = None, timeout: int = 15) -> dict:
    return json.loads(http_get(url, headers, timeout))


def fetch_hn() -> list[dict]:
    """Hacker News stories tagged AI/Claude/GPT/Anthropic/OpenAI with >50 points."""
    cutoff = int((datetime.now(timezone.utc) - timedelta(hours=48)).timestamp())
    queries = ["AI", "Claude", "GPT", "Anthropic", "OpenAI", "Sora", "Midjourney"]
    seen = set()
    out = []
    for q in queries:
        try:
            url = (
                "https://hn.algolia.com/api/v1/search?"
                f"query={urllib.parse.quote(q)}"
                "&tags=story"
                f"&numericFilters=points%3E50,created_at_i%3E{cutoff}"
                "&hitsPerPage=10"
            )
            data = http_get_json(url)
            for hit in data.get("hits", []):
                obj_id = hit.get("objectID")
                if obj_id in seen:
                    continue
                seen.add(obj_id)
                out.append({
                    "source": "hn",
                    "title": hit.get("title", ""),
                    "url": hit.get("url") or f"https://news.ycombinator.com/item?id={obj_id}",
                    "points": hit.get("points", 0),
                    "comments": hit.get("num_comments", 0),
                    "created_at": hit.get("created_at"),
                    "matched_query": q,
                })
        except Exception as e:
            sys.stderr.write(f"  hn[{q}] failed: {e}\n")
    return out


def fetch_reddit(subreddit: str) -> list[dict]:
    """Reddit top of last 24h for a sub. JSON endpoint, requires UA."""
    try:
        url = f"https://www.reddit.com/r/{subreddit}/top.json?t=day&limit=15"
        data = http_get_json(url)
    except Exception as e:
        sys.stderr.write(f"  reddit[{subreddit}] failed: {e}\n")
        return []
    out = []
    for child in data.get("data", {}).get("children", []):
        d = child.get("data", {})
        if d.get("stickied"):
            continue
        out.append({
            "source": f"r/{subreddit}",
            "title": d.get("title", ""),
            "url": "https://www.reddit.com" + d.get("permalink", ""),
            "points": d.get("ups", 0),
            "comments": d.get("num_comments", 0),
            "created_at": datetime.fromtimestamp(d.get("created_utc", 0), timezone.utc).isoformat(),
            "matched_query": f"r/{subreddit}",
        })
    return out


def parse_rss_simple(xml_bytes: bytes) -> list[dict]:
    """Tiny RSS/Atom parser — extracts title + link + pubDate from items."""
    try:
        root = ET.fromstring(xml_bytes)
    except ET.ParseError:
        return []
    items = []
    # RSS 2.0
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        date = (item.findtext("pubDate") or "").strip()
        if title and link:
            items.append({"title": title, "url": link, "date": date})
    # Atom
    if not items:
        ns = {"a": "http://www.w3.org/2005/Atom"}
        for entry in root.findall("a:entry", ns):
            title = (entry.findtext("a:title", default="", namespaces=ns) or "").strip()
            link_el = entry.find("a:link", ns)
            link = link_el.get("href", "") if link_el is not None else ""
            date = (entry.findtext("a:updated", default="", namespaces=ns) or "").strip()
            if title and link:
                items.append({"title": title, "url": link, "date": date})
    return items


def fetch_rss(label: str, url: str) -> list[dict]:
    """Generic RSS/Atom fetcher."""
    try:
        body = http_get(url)
        items = parse_rss_simple(body)
    except Exception as e:
        sys.stderr.write(f"  rss[{label}] failed: {e}\n")
        return []
    out = []
    for it in items[:8]:  # take recent 8
        out.append({
            "source": label,
            "title": it["title"],
            "url": it["url"],
            "points": 0,
            "comments": 0,
            "created_at": it.get("date", ""),
            "matched_query": label,
        })
    return out


def fetch_github_trending() -> list[dict]:
    """Scrape GitHub trending (no API equivalent for trending). HTML parse."""
    try:
        body = http_get("https://github.com/trending?since=daily").decode("utf-8")
    except Exception as e:
        sys.stderr.write(f"  gh-trending failed: {e}\n")
        return []
    # Repos appear as <h2 class="h3 lh-condensed"><a href="/owner/repo">...</a></h2>
    repo_pat = re.compile(r'<h2 class="h3 lh-condensed">\s*<a href="(/[^"]+)"', re.M)
    desc_pat = re.compile(r'<p class="col-9 color-fg-muted my-1 pr-4">\s*([^<]+)\s*</p>', re.M)
    star_pat = re.compile(r'(\d+(?:,\d+)*)\s*stars\s*today', re.I)
    repos = repo_pat.findall(body)
    descriptions = desc_pat.findall(body)
    stars = star_pat.findall(body)
    out = []
    for i, slug in enumerate(repos[:15]):
        name = slug.lstrip("/")
        desc = descriptions[i].strip() if i < len(descriptions) else ""
        stars_today = int(stars[i].replace(",", "")) if i < len(stars) else 0
        # Filter for AI-relevant repos
        text = (name + " " + desc).lower()
        if not any(k in text for k in ["ai", "llm", "gpt", "claude", "agent", "prompt", "rag", "diffusion", "transformer", "openai", "anthropic"]):
            continue
        out.append({
            "source": "gh-trending",
            "title": f"{name} — {desc[:120]}" if desc else name,
            "url": f"https://github.com/{name}",
            "points": stars_today,
            "comments": 0,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "matched_query": "gh-trending-ai",
        })
    return out


def score_item(item: dict) -> int:
    """Score 0-100 by recency × engagement × topic-fit."""
    score = 0
    # Engagement
    points = item.get("points", 0)
    comments = item.get("comments", 0)
    score += min(points, 500) // 5  # up to 100
    score += min(comments, 200) // 4  # up to 50
    # Source weight (HN/Reddit higher signal than RSS noise)
    src = item.get("source", "")
    if src.startswith("r/") or src == "hn":
        score += 20
    elif src in ("anthropic", "openai"):
        score += 30  # official announcements = highest signal
    elif src == "gh-trending":
        score += 15
    # Title topic-fit (citation-friendly keywords)
    title = (item.get("title") or "").lower()
    if any(k in title for k in ["release", "launch", "announce", "ship", "new"]):
        score += 15
    if any(k in title for k in ["claude", "gpt-5", "opus", "gemini", "sora"]):
        score += 10
    if re.search(r"\b(\d+x|\d+\.\d+|million|billion)\b", title):
        score += 10  # specific numbers = more citable angle
    return min(score, 100)


_ENTITY_RE = re.compile(r'\b(Claude|GPT|ChatGPT|Anthropic|OpenAI|Google|Gemini|Sora|Midjourney|Suno|Cursor|Lovable|Perplexity|Notion|Apple|Microsoft|Amazon|Meta|Apple|Tesla|Telus|Chrome|Bing|DeepSeek|Mistral|Llama|HuggingFace|GitHub|Stripe|Vercel)\b')
_NUMBER_RE = re.compile(r'\b(\d+(?:\.\d+)?[xX%]?|\bone\b|\btwo\b|\bthree\b|\bfour\b|\bfive\b|\bsix\b|\bseven\b|\beight\b|\bnine\b|\bten\b)\b')


def suggest_angle(item: dict) -> str:
    """Suggest a blog angle for the trend, following ChatGPT-citation pattern."""
    title = item.get("title", "") or ""
    src = item.get("source", "") or ""
    title_l = title.lower()
    entities = _ENTITY_RE.findall(title)
    primary_entity = entities[0] if entities else None
    has_number = bool(_NUMBER_RE.search(title))

    # Comparison/vs detector
    if " vs " in title_l or " vs. " in title_l or "comparison" in title_l:
        if len(entities) >= 2:
            return f"Comparison post: '{entities[0]} vs {entities[1]}: Tested + Ranked (May 2026)' — direct citation-fit for the query."
        return "Comparison post: '{X} vs {Y}: Tested + Ranked (May 2026)' — direct citation-fit."

    # Listicle echo (already a number-list; we mirror the format)
    if has_number and any(k in title_l for k in ["reasons", "ways", "things", "rules", "laws", "mistakes", "tips"]):
        return f"Mirror listicle: copy structure of '{title[:80]}' but with our angle on '{primary_entity or 'AI tools'}' (May 2026). Citation-eligible."

    # Official launch / release / announcement
    if any(k in title_l for k in ["release", "launch", "announce", "ship", "introducing", "unveil"]):
        ent = primary_entity or "the new feature"
        return f"Launch listicle: '5 Things to Know About {ent} (May 2026)' — what changed, why it matters, what to use it for."

    # Free/open-source angle
    if "free" in title_l or "open-source" in title_l or "open source" in title_l:
        return f"Listicle: '10 Free AI {primary_entity or 'Tools'} Worth Trying (May 2026)' — high-volume search intent + ChatGPT citation pattern."

    # Mistakes / criticism / contrarian
    if any(k in title_l for k in ["mistake", "wrong", "didn't", "fail", "breaks", "broken"]):
        return f"Lessons listicle: '5 {primary_entity or 'AI'} Mistakes Operators Make (May 2026)' — contrarian, citation-friendly."

    # Source-specific defaults
    if src == "openai":
        return f"Launch coverage: '{primary_entity or 'OpenAI'} Just Announced X — Here's What It Means (May 2026)'."
    if src == "gh-trending":
        return f"Tool review: 'I Tested {primary_entity or title.split(' — ')[0][:30]} — Here's What's Worth It (May 2026)'."
    if src.startswith("r/"):
        return f"Reddit-driven listicle: '5 Things {src} Is Talking About in May 2026' — community-pulse angle."
    if src == "hn":
        if primary_entity:
            return f"Listicle: '5 Things to Know About {primary_entity} (May 2026)' — anchor on named entity for citation lift."
        return "Listicle: extract the controversy + cite specifics (May 2026). Need named-entity hook for citation eligibility."

    return "Listicle: extract the named entity + factual claims, write '5 Things to Know About X (May 2026)' format."


def fetch_all() -> list[dict]:
    sources = []
    print("→ HN...", file=sys.stderr)
    sources += fetch_hn()
    print(f"→ Reddit r/ChatGPT...", file=sys.stderr)
    sources += fetch_reddit("ChatGPT")
    time.sleep(1)  # Reddit 1-req-per-sec polite limit
    print(f"→ Reddit r/ClaudeAI...", file=sys.stderr)
    sources += fetch_reddit("ClaudeAI")
    time.sleep(1)
    print(f"→ Reddit r/LocalLLaMA...", file=sys.stderr)
    sources += fetch_reddit("LocalLLaMA")
    # Anthropic doesn't publish RSS; their announcements surface via HN search above.
    print("→ OpenAI blog RSS...", file=sys.stderr)
    sources += fetch_rss("openai", "https://openai.com/news/rss.xml")
    print("→ GitHub trending...", file=sys.stderr)
    sources += fetch_github_trending()
    return sources


def render_digest(scored: list[dict], top_n: int = 5) -> str:
    lines = [f"# 🔥 AI Trend Digest — {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}", ""]
    lines.append(f"Pulled {len(scored)} signals from 6 sources. Top {top_n} below by composite score.")
    lines.append("")
    for i, it in enumerate(scored[:top_n], 1):
        score = it.get("_score", 0)
        emoji = "🔥" if score >= HOT_SCORE_THRESHOLD else "⚡" if score >= 50 else "•"
        lines.append(f"## {emoji} {i}. [{it.get('source')}] {it.get('title')[:160]}")
        lines.append(f"   Score: {score}/100 · Points: {it.get('points',0)} · Comments: {it.get('comments',0)}")
        lines.append(f"   URL: {it.get('url')}")
        lines.append(f"   Suggested blog angle: {suggest_angle(it)}")
        lines.append("")
    return "\n".join(lines)


def render_html_email(scored: list[dict], top_n: int = 5) -> str:
    rows = []
    for i, it in enumerate(scored[:top_n], 1):
        score = it.get("_score", 0)
        emoji = "🔥" if score >= HOT_SCORE_THRESHOLD else "⚡" if score >= 50 else "•"
        rows.append(f"""
        <div style="border:1px solid #E5E7EB;border-radius:10px;padding:16px 20px;margin-bottom:14px;background:#FFFFFF;">
          <p style="font-size:11px;color:#3B5FFF;letter-spacing:0.08em;text-transform:uppercase;font-weight:700;margin:0 0 4px 0;">{escape(it.get('source',''))} · score {score}/100</p>
          <h3 style="font-size:16px;font-weight:700;margin:0 0 8px 0;line-height:1.3;color:#111827;">{emoji} {i}. <a href="{escape(it.get('url',''))}" style="color:#111827;text-decoration:none;">{escape(it.get('title','')[:200])}</a></h3>
          <p style="font-size:13px;color:#6B7280;margin:0 0 6px 0;">Points: {it.get('points',0)} · Comments: {it.get('comments',0)}</p>
          <p style="font-size:13px;color:#374151;margin:0;"><strong>Blog angle:</strong> {escape(suggest_angle(it))}</p>
        </div>
        """)
    return f"""<!doctype html>
<html><body style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:680px;margin:0 auto;padding:32px 24px;color:#111827;line-height:1.6;background:#FFFFFF;">
  <h1 style="font-size:22px;font-weight:800;margin:0 0 12px 0;line-height:1.2;">🔥 AI Trend Digest — Top {top_n}</h1>
  <p style="font-size:14px;color:#6B7280;margin:0 0 24px 0;">{datetime.now(timezone.utc).strftime('%A %B %d, %Y · %H:%M UTC')} · pulled from 6 free sources</p>
  {''.join(rows)}
  <p style="font-size:11px;color:#9CA3AF;margin-top:24px;text-align:center;">trend-watch.py · runs daily · respond YES to draft a post on any of these</p>
</body></html>"""


def escape(s: str) -> str:
    if not s:
        return ""
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;").replace("'", "&#39;")


def send_digest_email(html: str) -> None:
    key_file = ROOT / ".resend_key"
    if not key_file.exists():
        sys.stderr.write("Resend key not found at .founder/.resend_key, skipping email\n")
        return
    key = key_file.read_text().strip()
    payload = {
        "from": "MidasTools Trend Watch <hello@midastools.co>",
        "to": ["iam@armando.mx"],
        "subject": f"🔥 AI Trend Digest — {datetime.now(timezone.utc).strftime('%Y-%m-%d')}",
        "html": html,
    }
    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json", "User-Agent": UA},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
            sys.stderr.write(f"  → email sent, id={data.get('id')}\n")
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"  email send failed: HTTP {e.code} {e.read().decode()[:300]}\n")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--email", action="store_true", help="email the digest to iam@armando.mx")
    ap.add_argument("--no-state", action="store_true", help="skip state-file write")
    ap.add_argument("--top", type=int, default=5)
    args = ap.parse_args()

    items = fetch_all()
    if not items:
        sys.stderr.write("ERROR: zero items fetched from any source\n")
        return 1

    for it in items:
        it["_score"] = score_item(it)
    scored = sorted(items, key=lambda x: x["_score"], reverse=True)

    print(render_digest(scored, args.top))

    if args.email:
        send_digest_email(render_html_email(scored, args.top))

    if not args.no_state:
        STATE_FILE.write_text(json.dumps({
            "ran_at": datetime.now(timezone.utc).isoformat(),
            "total_signals": len(scored),
            "top_score": scored[0]["_score"] if scored else 0,
            "top_titles": [it["title"][:120] for it in scored[:args.top]],
        }, indent=2))

    has_hot = any(it["_score"] >= HOT_SCORE_THRESHOLD for it in scored[:args.top])
    return 10 if has_hot else 0


if __name__ == "__main__":
    sys.exit(main())
