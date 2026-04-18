#!/bin/bash
# publish-gist.sh — publish a curated markdown file to gist.github.com/manduks
#
# Usage:
#   export GITHUB_GIST_TOKEN=ghp_xxx   # or drop into .founder/.gh_gist_token
#   ./publish-gist.sh <path-to-md-file>
#   ./publish-gist.sh --all             # publish every file in .founder/content/gists/
#
# Requires: curl, jq
# Safety: won't re-publish a file that already has `Published: <url>` at the top.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
GISTS_DIR="$REPO_ROOT/.founder/content/gists"
TOKEN_FILE="$REPO_ROOT/.founder/.gh_gist_token"

# --- Load token ---
if [ -z "${GITHUB_GIST_TOKEN:-}" ]; then
  if [ -f "$TOKEN_FILE" ]; then
    GITHUB_GIST_TOKEN="$(cat "$TOKEN_FILE" | tr -d '\n\r[:space:]')"
  else
    echo "ERROR: no token. Set GITHUB_GIST_TOKEN env var or write token to $TOKEN_FILE" >&2
    echo "Create a PAT with 'gist' scope at: https://github.com/settings/tokens/new?scopes=gist" >&2
    exit 1
  fi
fi

# --- Dependencies ---
for cmd in curl jq; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "ERROR: missing dependency: $cmd" >&2
    exit 1
  fi
done

publish_one() {
  local file="$1"
  if [ ! -f "$file" ]; then
    echo "SKIP: file not found: $file" >&2
    return 1
  fi

  # Already published?
  if head -3 "$file" | grep -q "^Published:"; then
    echo "SKIP: already published ($file)"
    grep "^Published:" "$file" | head -1
    return 0
  fi

  # Derive title from first H1
  local title
  title="$(grep -m1 '^# ' "$file" | sed 's/^# //' || true)"
  if [ -z "$title" ]; then
    title="$(basename "$file" .md)"
  fi

  local basename
  basename="$(basename "$file")"

  echo "→ Publishing: $basename"
  echo "  Title: $title"

  # Build JSON payload via jq (handles escaping correctly)
  local payload
  payload="$(jq -n \
    --arg description "$title" \
    --arg filename "$basename" \
    --rawfile content "$file" \
    '{description: $description, public: true, files: {($filename): {content: $content}}}')"

  local response
  response="$(curl -sS \
    -X POST https://api.github.com/gists \
    -H "Authorization: token $GITHUB_GIST_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -d "$payload")"

  local html_url
  html_url="$(echo "$response" | jq -r '.html_url // empty')"

  if [ -z "$html_url" ]; then
    echo "ERROR: failed to publish. Response:" >&2
    echo "$response" | jq '.' >&2 || echo "$response" >&2
    return 1
  fi

  echo "  ✓ Published: $html_url"

  # Mark file as published (prepend a Published: line after the first H1)
  local tmp
  tmp="$(mktemp)"
  {
    head -1 "$file"
    echo ""
    echo "Published: $html_url"
    tail -n +2 "$file"
  } > "$tmp"
  mv "$tmp" "$file"

  # Submit gist URL to IndexNow so Google picks it up fast
  curl -sS "https://www.bing.com/indexnow?url=$html_url&key=mt-indexnow-2026" >/dev/null 2>&1 || true
  echo "  ✓ Submitted to IndexNow"

  # Log to MEMORY (append a one-liner under a "Published Gists" section)
  local log_file="$REPO_ROOT/.founder/content/gists/PUBLISHED.md"
  if [ ! -f "$log_file" ]; then
    echo "# Published Gists Log" > "$log_file"
    echo "" >> "$log_file"
  fi
  echo "- $(date -u +%Y-%m-%dT%H:%M:%SZ) | [$title]($html_url) | source: \`$basename\`" >> "$log_file"
}

main() {
  if [ "${1:-}" = "--all" ]; then
    local count=0
    for f in "$GISTS_DIR"/*.md; do
      [ "$(basename "$f")" = "README.md" ] && continue
      [ "$(basename "$f")" = "PUBLISHED.md" ] && continue
      publish_one "$f" && count=$((count+1)) || true
    done
    echo ""
    echo "Done. Published $count gist(s)."
  elif [ -n "${1:-}" ]; then
    publish_one "$1"
  else
    echo "Usage: $0 <path-to-md-file> | --all" >&2
    exit 2
  fi
}

main "$@"
