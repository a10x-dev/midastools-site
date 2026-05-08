#!/usr/bin/env python3
"""
audit-payment-links.py — Read-only audit of all active Stripe payment links.
Flags hosted_confirmation (no redirect to our site) and wrong-TLD redirects.

Usage:
  python3 .founder/tools/audit-payment-links.py
  python3 .founder/tools/audit-payment-links.py --save  # writes to deliverables

Reads sk_live key from .founder/.stripe_key.
"""
import base64
import json
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = ROOT / ".stripe_key"


def stripe_get(path):
    key = KEY_FILE.read_text().strip()
    req = urllib.request.Request(
        f"https://api.stripe.com/v1{path}",
        headers={
            "Authorization": "Basic " + base64.b64encode(f"{key}:".encode()).decode(),
            "Stripe-Version": "2024-06-20",
            "User-Agent": "midastools-audit/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


# Kits handled by KITS map in pages/thank-you.js. Slugs MUST match these or
# the page falls back to 'starter' (OpenClaw) which silently mis-delivers.
KNOWN_KITS = {
    "starter", "real-estate", "content-creator", "freelancer", "small-business",
    "prompt-mega-pack", "ecommerce", "saas-founder", "notion-templates",
    "video-prompt-pack", "image-prompt-pack", "resume-career-kit",
    "social-media-kit", "email-marketing-kit", "presentation-kit", "bundle",
    "muse-spark", "claude-code", "reddit-lead-kit", "team-adoption", "cowork-mastery",
}

# Brands that legitimately redirect off-domain — do NOT flag as broken.
WHITELISTED_OFF_DOMAIN = {
    "openclaw-starter-kit.vercel.app",  # OpenClaw — separate brand
    "rooxai.com",                        # RoxAI — separate brand
}


def fetch_all_payment_links():
    out = []
    starting_after = None
    while True:
        path = "/payment_links?limit=100&active=true"
        if starting_after:
            path += f"&starting_after={starting_after}"
        page = stripe_get(path)
        out.extend(page.get("data", []))
        if not page.get("has_more"):
            break
        starting_after = page["data"][-1]["id"]
    return out


def classify(plink):
    pid = plink["id"]
    url = plink.get("url", "")
    ac = plink.get("after_completion") or {}
    ac_type = ac.get("type", "unknown")
    redirect_url = (ac.get("redirect") or {}).get("url", "")
    issues = []

    if ac_type == "hosted_confirmation":
        issues.append("hosted_confirmation_no_redirect")
    elif ac_type == "redirect":
        # Check domain
        if "midastools.com/" in redirect_url:
            issues.append("wrong_tld_dot_com")
        # Check slug match for midastools.co
        if "midastools.co/" in redirect_url and "?kit=" in redirect_url:
            slug = redirect_url.split("?kit=")[1].split("&")[0].split("#")[0]
            if slug and slug not in KNOWN_KITS:
                issues.append(f"unknown_kit_slug:{slug}")
        # Whitelisted off-domain are not flagged
        is_whitelisted = any(d in redirect_url for d in WHITELISTED_OFF_DOMAIN)
        if not is_whitelisted and "midastools.co" not in redirect_url and "midastools.com" not in redirect_url and ac_type == "redirect":
            issues.append(f"off_domain_redirect:{redirect_url[:60]}")
    return ac_type, redirect_url, issues


def fetch_line_item(pid):
    try:
        li = stripe_get(f"/payment_links/{pid}/line_items?limit=1")
        item = (li.get("data") or [{}])[0]
        return item.get("description", "")
    except Exception:
        return "?"


def main():
    print("Fetching active payment links...", file=sys.stderr)
    plinks = fetch_all_payment_links()
    print(f"  total active: {len(plinks)}", file=sys.stderr)

    rows = []
    for p in plinks:
        ac_type, redirect_url, issues = classify(p)
        item = fetch_line_item(p["id"])
        rows.append({
            "plink_id": p["id"],
            "url": p.get("url"),
            "ac_type": ac_type,
            "redirect_url": redirect_url,
            "metadata": p.get("metadata") or {},
            "line_item": item,
            "issues": issues,
        })

    broken = [r for r in rows if r["issues"]]
    healthy = [r for r in rows if not r["issues"]]

    out = []
    out.append(f"# Stripe Payment Link Audit — {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    out.append("")
    out.append(f"**Total active links**: {len(rows)}")
    out.append(f"**Healthy**: {len(healthy)}")
    out.append(f"**Broken** (issues found): {len(broken)}")
    out.append("")

    if broken:
        out.append("## ⚠️ Broken Payment Links")
        out.append("")
        out.append("| Plink ID | Line Item | Issue | After-Completion | Redirect URL |")
        out.append("|---|---|---|---|---|")
        for r in broken:
            out.append(f"| `{r['plink_id']}` | {r['line_item']} | {', '.join(r['issues'])} | {r['ac_type']} | {r['redirect_url'] or '—'} |")
        out.append("")

    out.append("## All Payment Links")
    out.append("")
    out.append("| Plink ID | Line Item | After-Completion | Redirect URL | Issues |")
    out.append("|---|---|---|---|---|")
    for r in rows:
        issues_str = ", ".join(r["issues"]) if r["issues"] else "—"
        out.append(f"| `{r['plink_id']}` | {r['line_item']} | {r['ac_type']} | {r['redirect_url'][:60] or '—'} | {issues_str} |")

    print("\n".join(out))

    if "--save" in sys.argv:
        d = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        path = ROOT / "deliverables" / f"payment-link-audit-{d}.md"
        path.write_text("\n".join(out))
        print(f"\nSaved to {path}", file=sys.stderr)


if __name__ == "__main__":
    main()
