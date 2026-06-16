#!/usr/bin/env python3
"""
Migrate raw `fetch('/api/subscribe', {...})` client call sites to the shared
`submitSubscribe()` helper (lib/subscribe.js) so every signup carries first-touch
attribution (utm_source / landing_slug / referrer_host) to the list.

Why: backend persists attribution but only what the client sends. Homepage + 4
converting kit pages were migrated S42; the remaining ~27% of signups (generator /
long-tail kit pages) land channel-blind. Growth mandate (2-week 10x + "monitor
where users come from") needs them attributable.

Conservative: only transforms the exact regular shape
  [const X = ] await fetch('/api/subscribe', { method:'POST', headers:{...}, body: JSON.stringify(BODY), });
where BODY contains no nested braces. Anything else is reported as SKIPPED for
manual review. Idempotent. --apply to write, default is dry-run.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
PAGES = ROOT / "pages"
APPLY = "--apply" in sys.argv

# matches: optional `const NAME = ` then `await fetch('/api/subscribe', { ... });`
# BODY captured from JSON.stringify( ... ) — single-level object only ([^{}]*).
PATTERN = re.compile(
    r"(?P<prefix>(?:const\s+\w+\s*=\s*)?)await\s+fetch\(\s*['\"]/api/subscribe['\"]\s*,\s*\{"
    r"\s*method:\s*['\"]POST['\"]\s*,"
    r"\s*headers:\s*\{[^{}]*\}\s*,"
    r"\s*body:\s*JSON\.stringify\(\s*(?P<body>\{[^{}]*\})\s*\)\s*,?"
    r"\s*\}\s*\)",
    re.DOTALL,
)

IMPORT_LINE = "import { submitSubscribe } from '../lib/subscribe';"

# index.js = homepage, the sole working conversion engine; already sends full
# manual attribution. Excluded — never risk the one surface that converts.
EXCLUDE = {"index.js"}

results = []
for f in sorted(PAGES.glob("*.js")):
    if f.name in EXCLUDE:
        continue
    src = f.read_text()
    if "/api/subscribe" not in src:
        continue
    raw_hits = src.count("/api/subscribe")
    new, n = PATTERN.subn(lambda m: f"{m.group('prefix')}await submitSubscribe({m.group('body')})", src)
    if n == 0:
        results.append((f.name, raw_hits, 0, "SKIPPED — shape not matched"))
        continue
    # add import after the last top-level import line if missing
    if "submitSubscribe" not in src:
        lines = new.split("\n")
        last_import = max((i for i, l in enumerate(lines) if l.startswith("import ")), default=-1)
        if last_import >= 0:
            lines.insert(last_import + 1, IMPORT_LINE)
            new = "\n".join(lines)
    remaining = new.count("fetch('/api/subscribe'") + new.count('fetch("/api/subscribe"')
    note = "ok" if remaining == 0 else f"PARTIAL — {remaining} raw fetch left (nested/irregular)"
    results.append((f.name, raw_hits, n, note))
    if APPLY:
        f.write_text(new)

print(f"{'FILE':40} {'rawhits':>7} {'migrated':>8}  note")
print("-" * 80)
tot_files = tot_migr = 0
for name, raw, n, note in results:
    print(f"{name:40} {raw:>7} {n:>8}  {note}")
    if n:
        tot_files += 1
        tot_migr += n
print("-" * 80)
print(f"{'TOTAL':40} {'':>7} {tot_migr:>8}  files touched: {tot_files}  ({'APPLIED' if APPLY else 'DRY-RUN'})")
