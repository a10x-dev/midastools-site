#!/usr/bin/env python3
"""Independently verify claimed prospect emails appear on the claimed page.

Usage: python3 .verify_emails.py candidates.json
candidates.json = [{"email":..., "verify_url":..., "url":..., "name":...}, ...]

Checks, in order:
 1. exact email string in raw HTML
 2. email after decoding Cloudflare email-protection tokens
 3. email after HTML-entity / percent decoding
 4. reports every email-looking string found on the page for manual reconciliation
"""
import json
import re
import sys
import html
import urllib.parse
import urllib.request
import gzip
import io
import concurrent.futures

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

EMAIL_RE = re.compile(r"[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}")
CF_RE = re.compile(r'data-cfemail="([0-9a-fA-F]+)"')
CF_RE2 = re.compile(r'/cdn-cgi/l/email-protection#([0-9a-fA-F]+)')


def cf_decode(token: str) -> str:
    try:
        key = int(token[:2], 16)
        return "".join(chr(int(token[i:i + 2], 16) ^ key) for i in range(2, len(token), 2))
    except Exception:
        return ""


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip",
    })
    with urllib.request.urlopen(req, timeout=30) as r:
        raw = r.read()
    if raw[:2] == b"\x1f\x8b":
        raw = gzip.GzipFile(fileobj=io.BytesIO(raw)).read()
    return raw.decode("utf-8", errors="replace")


def check(item):
    email = item["email"].strip()
    url = item.get("verify_url") or item.get("url")
    out = {"name": item.get("name"), "email": email, "url": url}
    try:
        body = fetch(url)
    except Exception as e:
        out["status"] = "FETCH_FAIL"
        out["note"] = f"{type(e).__name__}: {e}"
        out["found"] = []
        return out

    out["bytes"] = len(body)

    # decode all representations into one searchable blob
    blobs = [body]
    try:
        blobs.append(html.unescape(body))
    except Exception:
        pass
    try:
        blobs.append(urllib.parse.unquote(body))
    except Exception:
        pass
    for tok in CF_RE.findall(body) + CF_RE2.findall(body):
        d = cf_decode(tok)
        if d:
            blobs.append(d)

    blob = "\n".join(blobs)
    low = blob.lower()

    found = sorted({m.lower() for m in EMAIL_RE.findall(blob)
                    if not m.lower().endswith((".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".css", ".js"))})
    out["found"] = found

    if email.lower() in low:
        out["status"] = "OK"
    elif found:
        out["status"] = "MISMATCH"
    else:
        out["status"] = "NO_EMAIL_ON_PAGE"
    return out


def main():
    items = json.load(open(sys.argv[1]))
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
        results = list(ex.map(check, items))
    for r in results:
        print(f"{r['status']:<18} {r['email']:<42} {r.get('bytes','-')!s:>8}  {r['url']}")
        if r["status"] != "OK":
            print(f"    found_on_page: {r['found'][:8]}")
            if r.get("note"):
                print(f"    note: {r['note']}")
    ok = sum(1 for r in results if r["status"] == "OK")
    print(f"\n{ok}/{len(results)} verified OK")
    json.dump(results, open(sys.argv[1] + ".result.json", "w"), indent=1)


if __name__ == "__main__":
    main()
