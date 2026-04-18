#!/bin/bash
# update-gist.sh — patch a published gist and its local source file to add UTM params
# to every midastools.co link. Lets us attribute per-gist traffic and conversions.
#
# Usage:
#   ./update-gist.sh <path-to-md-file>     # update one file
#   ./update-gist.sh --all                 # update every already-published file
#
# How it works:
#   - Parses `Published: <url>` header to recover the gist id
#   - Derives utm_campaign from the filename slug (e.g. 01-sora-alternatives-cheatsheet)
#   - Rewrites every `https://www.midastools.co/<path>` link in-place to add
#     `?utm_source=gist&utm_medium=github&utm_campaign=<slug>` (or &utm_ if query already present)
#   - PATCHes the gist via GitHub API with the full updated body
#   - Saves the updated body back to the local .md file

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
GISTS_DIR="$REPO_ROOT/.founder/content/gists"
TOKEN_FILE="$REPO_ROOT/.founder/.gh_gist_token"

if [ -z "${GITHUB_GIST_TOKEN:-}" ]; then
  if [ -f "$TOKEN_FILE" ]; then
    GITHUB_GIST_TOKEN="$(cat "$TOKEN_FILE" | tr -d '\n\r[:space:]')"
  else
    echo "ERROR: no token. Set GITHUB_GIST_TOKEN or write to $TOKEN_FILE" >&2
    exit 1
  fi
fi

for cmd in curl jq python3; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "ERROR: missing dependency: $cmd" >&2
    exit 1
  fi
done

update_one() {
  local file="$1"
  if [ ! -f "$file" ]; then
    echo "SKIP: $file not found" >&2
    return 1
  fi

  local published_url
  published_url="$(grep -m1 '^Published:' "$file" | awk '{print $2}' || true)"
  if [ -z "$published_url" ]; then
    echo "SKIP: $file is not yet published (no Published: header)"
    return 0
  fi

  local gist_id
  gist_id="$(basename "$published_url")"

  local slug
  slug="$(basename "$file" .md)"

  echo "→ Updating gist $gist_id from $file"
  echo "  utm_campaign: $slug"

  # Rewrite the file content in-place adding UTM params to midastools.co links.
  # Uses python3 for reliable regex replacement on markdown.
  local updated
  updated="$(python3 - "$file" "$slug" <<'PY'
import re, sys
path = sys.argv[1]
slug = sys.argv[2]
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Match https://www.midastools.co/<path> inside either markdown link text or URL.
# Capture group 1 = base path (no query), group 2 = existing query/fragment tail (possibly empty)
pattern = re.compile(r'https://www\.midastools\.co(/[A-Za-z0-9/_\-]*)((?:\?[^)\s]*)?)')

def add_utm(m):
    base = m.group(1)
    tail = m.group(2) or ''
    utm = f'utm_source=gist&utm_medium=github&utm_campaign={slug}'
    # Skip if already has utm
    if 'utm_source=' in tail:
        return m.group(0)
    if tail.startswith('?'):
        return f'https://www.midastools.co{base}{tail}&{utm}'
    else:
        return f'https://www.midastools.co{base}?{utm}'

new_text = pattern.sub(add_utm, text)
sys.stdout.write(new_text)
PY
)"

  # Write updated local file
  printf '%s' "$updated" > "$file"
  echo "  ✓ Local file rewritten"

  # Build the body to send to Gist API — strip leading `# H1\n\nPublished: ...\n` metadata
  # to keep the rendered gist clean. We strip both the H1 header and the Published line.
  local gist_body
  gist_body="$(python3 - "$file" <<'PY'
import sys
with open(sys.argv[1], 'r', encoding='utf-8') as f:
    text = f.read()
lines = text.split('\n')
out = []
skip_h1 = True
for line in lines:
    if skip_h1 and line.startswith('# '):
        skip_h1 = False
        continue
    if line.startswith('Published:'):
        continue
    out.append(line)
# Strip leading blank lines
while out and not out[0].strip():
    out.pop(0)
sys.stdout.write('\n'.join(out))
PY
)"

  local basename
  basename="$(basename "$file")"

  # Read H1 title for description
  local title
  title="$(grep -m1 '^# ' "$file" | sed 's/^# //' || true)"
  [ -z "$title" ] && title="$basename"

  local payload
  payload="$(jq -n \
    --arg description "$title" \
    --arg filename "$basename" \
    --arg content "$gist_body" \
    '{description: $description, files: {($filename): {content: $content}}}')"

  local response
  response="$(curl -sS \
    -X PATCH "https://api.github.com/gists/$gist_id" \
    -H "Authorization: token $GITHUB_GIST_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -d "$payload")"

  local html_url
  html_url="$(echo "$response" | jq -r '.html_url // empty')"

  if [ -z "$html_url" ]; then
    echo "ERROR: PATCH failed. Response:" >&2
    echo "$response" | jq '.' >&2 || echo "$response" >&2
    return 1
  fi

  echo "  ✓ Gist patched: $html_url"

  # Re-submit to IndexNow so crawlers see the updated version
  curl -sS "https://www.bing.com/indexnow?url=$html_url&key=mt-indexnow-2026" >/dev/null 2>&1 || true
}

main() {
  if [ "${1:-}" = "--all" ]; then
    local count=0
    for f in "$GISTS_DIR"/*.md; do
      local b
      b="$(basename "$f")"
      [ "$b" = "README.md" ] && continue
      [ "$b" = "PUBLISHED.md" ] && continue
      update_one "$f" && count=$((count+1)) || true
    done
    echo ""
    echo "Done. Updated $count gist(s)."
  elif [ -n "${1:-}" ]; then
    update_one "$1"
  else
    echo "Usage: $0 <path-to-md-file> | --all" >&2
    exit 2
  fi
}

main "$@"
