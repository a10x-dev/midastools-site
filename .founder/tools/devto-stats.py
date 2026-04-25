#!/usr/bin/env python3
"""
Pull view/reaction/comment counts for all our published Dev.to articles.

Usage:
    python3 .founder/tools/devto-stats.py [--csv] [--save]

Without flags: prints a markdown table to stdout.
--csv: prints CSV.
--save: also writes a snapshot to .founder/deliverables/devto-stats-YYYY-MM-DD.md
        and appends a single-line entry to .founder/content/devto/STATS_HISTORY.md
        (one row per snapshot for trend tracking).

Uses the authenticated /articles/me/published endpoint so we get private metrics
(page_views_count, public_reactions_count, comments_count, positive_reactions_count).

Requires DEVTO_API_KEY env var or file at .founder/.devto_token.
Uses a browser-like User-Agent — Dev.to blocks Python's default UA with 403.
"""

import json, os, sys, urllib.request, datetime

UA = "Mozilla/5.0 (compatible; midastools-bot; +https://www.midastools.co)"


def load_key():
    k = os.environ.get("DEVTO_API_KEY")
    if k:
        return k
    try:
        with open(".founder/.devto_token") as f:
            return f.read().strip()
    except FileNotFoundError:
        print("ERROR: set DEVTO_API_KEY env var or write to .founder/.devto_token", file=sys.stderr)
        sys.exit(1)


def fetch_articles(key, page=1, per_page=100):
    req = urllib.request.Request(
        f"https://dev.to/api/articles/me/published?page={page}&per_page={per_page}",
        headers={
            "api-key": key,
            "Accept": "application/vnd.forem.api-v1+json",
            "User-Agent": UA,
        },
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        return json.load(resp)


def fetch_all(key):
    out, page = [], 1
    while True:
        batch = fetch_articles(key, page=page)
        if not batch:
            break
        out.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return out


def fmt_md(rows, totals, ts):
    lines = [
        f"# Dev.to Stats Snapshot — {ts}",
        "",
        f"**{len(rows)} published articles** · "
        f"**{totals['views']:,} total views** · "
        f"**{totals['reactions']} reactions** · "
        f"**{totals['comments']} comments**",
        "",
        "| Published | Title | Views | React | Cmts | URL |",
        "|---|---|---:|---:|---:|---|",
    ]
    for r in rows:
        title = (r["title"][:60] + "…") if len(r["title"]) > 60 else r["title"]
        title = title.replace("|", "\\|")
        lines.append(
            f"| {r['published_at'][:10]} "
            f"| {title} "
            f"| {r['page_views_count']:,} "
            f"| {r['public_reactions_count']} "
            f"| {r['comments_count']} "
            f"| {r['url']} |"
        )
    return "\n".join(lines) + "\n"


def fmt_csv(rows):
    out = ["published_at,title,views,reactions,comments,url"]
    for r in rows:
        title = r["title"].replace('"', '""')
        out.append(
            f'{r["published_at"][:10]},"{title}",{r["page_views_count"]},'
            f'{r["public_reactions_count"]},{r["comments_count"]},{r["url"]}'
        )
    return "\n".join(out) + "\n"


def main():
    key = load_key()
    articles = fetch_all(key)
    # Sort newest first
    rows = sorted(articles, key=lambda a: a.get("published_at", ""), reverse=True)
    totals = {
        "views": sum(r["page_views_count"] for r in rows),
        "reactions": sum(r["public_reactions_count"] for r in rows),
        "comments": sum(r["comments_count"] for r in rows),
    }
    ts = datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z"

    flags = set(sys.argv[1:])
    output = fmt_csv(rows) if "--csv" in flags else fmt_md(rows, totals, ts)
    print(output)

    if "--save" in flags:
        date = datetime.datetime.utcnow().strftime("%Y-%m-%d")
        path = f".founder/deliverables/devto-stats-{date}.md"
        with open(path, "w") as f:
            f.write(fmt_md(rows, totals, ts))
        print(f"\n✅ Saved snapshot: {path}", file=sys.stderr)

        os.makedirs(".founder/content/devto", exist_ok=True)
        history_path = ".founder/content/devto/STATS_HISTORY.md"
        if not os.path.exists(history_path):
            with open(history_path, "w") as f:
                f.write("# Dev.to Stats History\n\nOne row per snapshot. Used for trend tracking.\n\n")
                f.write("| Snapshot | Articles | Total Views | Reactions | Comments |\n")
                f.write("|---|---:|---:|---:|---:|\n")
        with open(history_path, "a") as f:
            f.write(
                f"| {ts} | {len(rows)} | {totals['views']:,} "
                f"| {totals['reactions']} | {totals['comments']} |\n"
            )
        print(f"✅ Appended history: {history_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
