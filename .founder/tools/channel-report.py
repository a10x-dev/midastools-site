#!/usr/bin/env python3
"""
channel-report.py — Classify track-events into named acquisition channels.

The raw /api/track-events feed has ~87% blank referrer_host (privacy stripping:
ChatGPT app, dark social, direct, bots). Dumping those as "unknown" hides the
real channel mix. This tool buckets EVERY event into a named channel using all
available signal — referrer_host, utm_source/medium, landing page, user_agent
(bot detection), server_country, and sec_fetch_site (when present) — so we get
an honest breakdown instead of "87% unknown."

Usage:
  python3 .founder/tools/channel-report.py [--limit 1000] [--humans-only] [--save]

Read-only. Pulls live from production /api/track-events.
"""
import json, sys, urllib.request, re
from collections import Counter, defaultdict
from datetime import datetime

READ_KEY = "mt-outreach-2026"
ENDPOINT = "https://www.midastools.co/api/track-events"

BOT_UA = re.compile(
    r"bot|crawl|spider|slurp|headless|phantom|python-requests|python-urllib|"
    r"curl|wget|go-http|java/|okhttp|axios|node-fetch|lighthouse|pagespeed|"
    r"googlebot|bingbot|yandex|baiduspider|ahrefs|semrush|dotbot|mj12|petalbot|"
    r"gptbot|claudebot|ccbot|amazonbot|bytespider|facebookexternalhit|"
    r"dataforseo|scrapy|httpclient|preview|monitor|uptime",
    re.I,
)

AI_HOSTS = ("chatgpt.com", "openai.com", "perplexity.ai", "claude.ai",
            "anthropic.com", "gemini.google", "bard.google", "copilot.microsoft",
            "you.com", "phind.com", "poe.com")
SEARCH_HOSTS = ("google.", "bing.com", "duckduckgo", "yandex", "baidu",
                "ecosia", "brave.com", "startpage", "search.")
SOCIAL_HOSTS = ("reddit", "t.co", "twitter", "x.com", "facebook", "fb.com",
                "instagram", "linkedin", "lnkd.in", "youtube", "youtu.be",
                "pinterest", "tiktok", "threads")
GIST_HOSTS = ("gist.github.com", "github.com", "githubusercontent")
KNOWN_DIRECTORY_BOTS = ("submitaitools.org",)


def fetch(limit):
    url = f"{ENDPOINT}?key={READ_KEY}&limit={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "channel-report/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.loads(r.read())
    return d.get("events", d if isinstance(d, list) else [])


def host_match(host, needles):
    return any(n in host for n in needles)


def classify(e):
    """Return (channel, is_bot)."""
    ua = (e.get("user_agent") or "").lower()
    attr = e.get("attribution") or {}
    rh = (attr.get("referrer_host") or "").lower()
    us = (attr.get("utm_source") or attr.get("last_utm_source") or "").lower()
    um = (attr.get("utm_medium") or "").lower()
    country = e.get("server_country") or "?"

    # 1. Bots first — UA pattern is the strongest signal
    if ua and BOT_UA.search(ua):
        return ("Bot / crawler", True)
    # Known directory verification bot (submits via form, single UA across geos)
    if host_match(us, KNOWN_DIRECTORY_BOTS) or host_match(rh, KNOWN_DIRECTORY_BOTS):
        return ("Bot / directory-verify", True)

    # 2. UTM-tagged sources (highest confidence — we set these)
    if us in ("email",) or um == "broadcast" or us == "memo":
        return ("Email / Newsletter", False)
    if us == "gist" or host_match(rh, GIST_HOSTS):
        return ("Gists (GitHub)", False)
    if host_match(us, AI_HOSTS) or host_match(rh, AI_HOSTS):
        return ("AI engines (ChatGPT/Perplexity/etc)", False)
    if host_match(rh, SEARCH_HOSTS) or us in ("google", "bing"):
        return ("Search (Google/Bing organic)", False)
    if host_match(rh, SOCIAL_HOSTS) or us in ("reddit", "twitter", "x", "facebook", "linkedin"):
        return ("Social", False)
    if rh:  # some other named referrer
        return (f"Other referrer ({rh})", False)

    # 3. No referrer, no utm — the 87%. Split by likely-bot heuristics.
    # Heavy crawler countries with empty UA or no human signal -> probable bot.
    if not ua:
        return ("Bot / no-UA", True)
    # Real UA, no referrer, no utm. Sec-Fetch-Site (captured 2026-06-04+) splits
    # this: cross-site = clicked in from another origin with referrer stripped
    # (AI-app / dark-social), none = typed/bookmark (true direct).
    sfs = (e.get("sec_fetch_site") or "").lower()
    if sfs == "cross-site":
        return ("Referrer-stripped click (AI-app/dark-social)", False)
    if sfs == "none":
        return ("True direct (typed/bookmark)", False)
    # sfs blank (older events or non-Chromium) — can't disambiguate yet.
    return ("Direct / Dark / AI-app (referrer stripped)", False)


def main():
    limit = 1000
    humans_only = "--humans-only" in sys.argv
    save = "--save" in sys.argv
    for i, a in enumerate(sys.argv):
        if a == "--limit" and i + 1 < len(sys.argv):
            limit = int(sys.argv[i + 1])

    events = fetch(limit)
    pv = [e for e in events if e.get("event") == "page_view"]
    subs = [e for e in events if e.get("event") == "subscribe_submit"]

    ch = Counter()
    ch_bot = Counter()
    land_by_dark = Counter()
    country = Counter()
    human_pv = 0
    for e in pv:
        channel, is_bot = classify(e)
        if is_bot:
            ch_bot[channel] += 1
        else:
            ch[channel] += 1
            human_pv += 1
            country[e.get("server_country") or "?"] += 1
        if channel.startswith("Direct"):
            slug = (e.get("page_path") or "").split("?")[0]
            land_by_dark[slug] += 1

    bot_pv = sum(ch_bot.values())
    total = len(pv)

    out = []
    out.append(f"\n=== CHANNEL REPORT — {datetime.utcnow().isoformat()}Z ===")
    out.append(f"Window: last {len(events)} events | {total} page_views "
               f"({human_pv} human / {bot_pv} bot) | {len(subs)} signups\n")

    out.append("--- HUMAN page_views by channel ---")
    for k, v in ch.most_common():
        pct = round(100 * v / human_pv) if human_pv else 0
        out.append(f"  {v:4}  {pct:3}%  {k}")

    out.append("\n--- BOT / crawler traffic (excluded above) ---")
    for k, v in ch_bot.most_common():
        out.append(f"  {v:4}  {k}")

    out.append("\n--- 'Direct/Dark' landing pages (where referrer-stripped humans enter) ---")
    out.append("    (deep blog/tool pages here = organic search/AI discovery, not true direct)")
    for k, v in land_by_dark.most_common(12):
        out.append(f"  {v:4}  {k}")

    out.append("\n--- Human traffic by country ---")
    for k, v in country.most_common(8):
        out.append(f"  {v:4}  {k}")

    report = "\n".join(out)
    print(report)

    if save:
        path = f".founder/deliverables/channel-report-{datetime.utcnow().date()}.md"
        with open(path, "w") as f:
            f.write("# Channel Report\n\n```" + report + "\n```\n")
        print(f"\nSaved -> {path}")


if __name__ == "__main__":
    main()
