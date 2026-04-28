#!/usr/bin/env python3
"""
Subscriber Enricher — auto-profile any subscriber by visiting their web presence.

Usage:
    python3 .founder/tools/subscriber-enricher.py <email>
    python3 .founder/tools/subscriber-enricher.py --batch path/to/emails.txt

Output: writes a JSON profile to .founder/data/subscribers/{email_safe}.json
with raw signals — domain content snippet, likely industry, geography hints,
search-result titles. A Claude session reads these JSONs to make outreach
decisions.

This tool DOES NOT make outreach decisions itself. It gathers raw signals.
Synthesis happens in a Claude session with full context.

Why this exists: Session 132 (2026-04-28) we drafted a wrong-fit pitch to
hiedeh@tavassoli.com because we assumed "custom domain = consultant". The
domain actually belonged to a Vancouver real-estate agent. Lesson:
NEVER draft outreach without visiting the prospect's actual web presence.
This tool makes that visit cheap and durable.

Free email providers (Yahoo/AOL/Gmail/Hotmail/Live/Outlook + ISP emails) get
a "low signal" profile — the tool can't reliably resolve them without
external paid enrichment APIs (Clearbit, Apollo). Mark as "needs manual
LinkedIn search" and skip outreach until a human researches them.
"""

import json
import os
import re
import sys
import urllib.parse
import urllib.request
import datetime
from pathlib import Path

UA = "Mozilla/5.0 (compatible; midastools-bot; +https://www.midastools.co)"
TIMEOUT = 12

FREE_EMAIL_DOMAINS = {
    "yahoo.com", "yahoo.co.uk", "yahoo.fr", "yahoo.es", "yahoo.de",
    "aol.com", "gmail.com", "hotmail.com", "outlook.com", "outlook.es",
    "outlook.fr", "outlook.de", "live.com", "icloud.com", "me.com",
    "msn.com", "ymail.com", "rocketmail.com", "googlemail.com",
    "protonmail.com", "proton.me", "mail.com", "gmx.com", "gmx.de",
    "wowway.com", "comcast.net", "verizon.net", "att.net", "cox.net",
    "orange.fr", "free.fr", "wanadoo.fr", "laposte.net", "sfr.fr",
}

GOV_TLDS = {".gov", ".mil", ".edu", ".ac.uk", ".ac.in", ".gov.uk"}

OUTPUT_DIR = Path(".founder/data/subscribers")


def email_to_safe_filename(email: str) -> str:
    return re.sub(r"[^a-z0-9]", "_", email.lower())


def fetch(url: str, max_bytes: int = 200_000) -> tuple[int, str]:
    """Fetch a URL with our UA. Returns (status_code, text)."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            data = r.read(max_bytes).decode("utf-8", errors="replace")
            return r.status, data
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return 0, f"FETCH_ERROR: {e}"


def extract_text_signals(html: str) -> dict:
    """Pull title, meta description, and a body snippet from raw HTML."""
    title = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    meta_desc = re.search(
        r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)["\']', html, re.I
    )
    og_desc = re.search(
        r'<meta[^>]+property=["\']og:description["\'][^>]+content=["\']([^"\']+)["\']', html, re.I
    )
    body_text = re.sub(r"<[^>]+>", " ", html)
    body_text = re.sub(r"\s+", " ", body_text).strip()[:1500]
    return {
        "title": (title.group(1).strip() if title else "")[:200],
        "meta_description": (meta_desc.group(1).strip() if meta_desc else "")[:300],
        "og_description": (og_desc.group(1).strip() if og_desc else "")[:300],
        "body_snippet": body_text,
    }


def detect_industry_hints(text: str) -> list[str]:
    """Look for industry keyword hits in fetched text."""
    text_lower = text.lower()
    industries = {
        "real_estate": ["realtor", "real estate", "mls", "broker", "listing agent", "homes for sale", "property management"],
        "legal": ["law firm", "attorney", "counsel", "legal services", "esq.", "litigation"],
        "healthcare": ["hospital", "health system", "patient", "clinical", "medical center", "physician"],
        "ministry": ["pastor", "ministry", "church", "congregation", "sermon", "discipleship"],
        "coaching": ["life coach", "business coach", "executive coach", "coaching practice", "coaching program"],
        "consulting": ["consulting", "consultant", "strategic advisor", "advisory services"],
        "marketing": ["marketing agency", "digital agency", "branding", "creative studio"],
        "design": ["graphic design", "design studio", "interior design", "art direction"],
        "ecommerce": ["shopify", "online store", "ecommerce", "etsy"],
        "saas": ["saas", "platform", "software as a service", "api"],
        "education": ["university", "college", "school", "k-12", "teacher", "principal"],
        "government": ["county", "city of", "department of", "municipal", "public works"],
        "nonprofit": ["501(c)(3)", "nonprofit", "ngo", "charity", "foundation"],
    }
    hits = []
    for label, kws in industries.items():
        for kw in kws:
            if kw in text_lower:
                hits.append(label)
                break
    return hits


def detect_geography(text: str) -> list[str]:
    """Look for explicit US-state, country, or known-city mentions."""
    text_lower = text.lower()
    geo_hits = []
    states = {
        "california": "US/CA", "texas": "US/TX", "florida": "US/FL", "new york": "US/NY",
        "vancouver": "CA/BC", "toronto": "CA/ON", "london": "UK/London",
        "spain": "ES", "germany": "DE", "france": "FR", "mexico": "MX",
        "connecticut": "US/CT",
    }
    for kw, label in states.items():
        if kw in text_lower:
            geo_hits.append(label)
    return geo_hits[:3]


def fit_score(industry_hits: list[str]) -> tuple[str, str]:
    """Map industries to our best-fit product. Returns (product_slug, reason)."""
    if "coaching" in industry_hits or "consulting" in industry_hits:
        return ("dfy_content_month", "Coach/consultant — Content Month $199 is direct fit")
    if "real_estate" in industry_hits:
        return ("dfy_listing_optimizer", "Real estate — Listing Optimizer $149 rewrites property listings")
    if "marketing" in industry_hits or "design" in industry_hits:
        return ("dfy_brand_pack", "Agency/design — Brand Pack $299 is a portfolio asset to resell")
    if "legal" in industry_hits:
        return ("kit_email_marketing", "Legal — Email Marketing Kit for client comms (low risk to start)")
    if "ministry" in industry_hits:
        return ("kit_content_creator", "Ministry — Content Creator Kit for sermons/newsletters")
    if "healthcare" in industry_hits:
        return ("uncertain", "Healthcare — compliance-heavy, hand-research before pitching")
    if "ecommerce" in industry_hits:
        return ("dfy_listing_optimizer", "E-commerce — Listing Optimizer rewrites product pages")
    if "government" in industry_hits or "education" in industry_hits or "nonprofit" in industry_hits:
        return ("starter_pack_only", "Org-budget — try $9 starter pack only, no DFY pitch")
    return ("uncertain", "No clear industry signal — needs manual LinkedIn lookup before outreach")


def enrich_email(email: str) -> dict:
    """Main enrichment routine — returns a profile dict."""
    email = email.strip().lower()
    if "@" not in email:
        return {"email": email, "error": "invalid email format"}

    local, domain = email.split("@", 1)
    profile = {
        "email": email,
        "local": local,
        "domain": domain,
        "enriched_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "domain_class": "unknown",
        "domain_signals": {},
        "industry_hints": [],
        "geography_hints": [],
        "best_fit_product": "uncertain",
        "fit_reason": "",
        "manual_research_needed": False,
        "outreach_recommendation": "",
    }

    # Domain classification
    is_free = domain in FREE_EMAIL_DOMAINS
    is_gov_edu = any(domain.endswith(t) for t in GOV_TLDS)

    if is_free:
        profile["domain_class"] = "free_provider"
        profile["manual_research_needed"] = True
        profile["outreach_recommendation"] = (
            f"FREE EMAIL — search '{local}' on LinkedIn + Google. "
            "Numeric suffixes may hint at age (78=birth year) or area code (818=LA, 425=Seattle). "
            "If no signal in 5 min, skip outreach for now."
        )
        return profile

    if is_gov_edu:
        profile["domain_class"] = "gov_edu_nonprofit"
        # Still try to fetch the domain
    else:
        profile["domain_class"] = "custom_domain"

    # Fetch the domain's homepage
    for protocol in ["https://www.", "https://"]:
        url = f"{protocol}{domain}/"
        status, html = fetch(url)
        if status == 200 and html:
            signals = extract_text_signals(html)
            profile["domain_signals"] = {**signals, "fetched_url": url, "status": status}

            # Aggregate text for keyword hits
            agg_text = " ".join([signals.get("title", ""), signals.get("meta_description", ""),
                                 signals.get("og_description", ""), signals.get("body_snippet", "")])
            profile["industry_hints"] = detect_industry_hints(agg_text)
            profile["geography_hints"] = detect_geography(agg_text)

            slug, reason = fit_score(profile["industry_hints"])
            profile["best_fit_product"] = slug
            profile["fit_reason"] = reason
            break
        elif status in (301, 302):
            profile["domain_signals"] = {"redirect_status": status, "fetched_url": url}
            profile["manual_research_needed"] = True
            profile["outreach_recommendation"] = (
                f"Domain {domain} redirects (status {status}). "
                "Probably parked or hosted on a SaaS — manually search domain owner via WHOIS or Google."
            )
            break
        else:
            profile["domain_signals"] = {"status": status, "fetched_url": url}

    if not profile["domain_signals"]:
        profile["manual_research_needed"] = True
        profile["outreach_recommendation"] = f"Could not reach {domain}. Try WHOIS or LinkedIn search for '{local}'."
    elif not profile["industry_hints"] and not profile["manual_research_needed"]:
        profile["manual_research_needed"] = True
        profile["outreach_recommendation"] = (
            "Domain reachable but no industry signal. "
            "Visit the site manually + cross-reference with LinkedIn before outreach."
        )

    return profile


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    if sys.argv[1] == "--batch":
        if len(sys.argv) < 3:
            print("Usage: subscriber-enricher.py --batch path/to/emails.txt")
            sys.exit(1)
        with open(sys.argv[2]) as f:
            emails = [line.strip() for line in f if line.strip() and "@" in line]
    else:
        emails = sys.argv[1:]

    for email in emails:
        print(f"→ enriching {email} ...", flush=True)
        profile = enrich_email(email)
        outfile = OUTPUT_DIR / f"{email_to_safe_filename(email)}.json"
        with outfile.open("w") as f:
            json.dump(profile, f, indent=2)
        hints = profile.get("industry_hints", [])
        geo = profile.get("geography_hints", [])
        fit = profile.get("best_fit_product", "?")
        manual = " [MANUAL]" if profile.get("manual_research_needed") else ""
        print(f"  {profile['domain_class']:<22} hints={hints} geo={geo} fit={fit}{manual}")
        print(f"  → {outfile}")


if __name__ == "__main__":
    main()
