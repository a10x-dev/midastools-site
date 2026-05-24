#!/bin/bash
# check-gh-token.sh — definitive 1-line health probe for the GitHub PAT
#
# Built 2026-05-24 (renderer-S26) after the cat-bat alias misled multiple sessions
# into reporting "Bad credentials" when the PAT was actually working. Cost: ~14 days
# of gist channel volume (gap between gist #14 Apr 28 and #15 May 24).
#
# This tool intentionally:
# - Uses `tr -d` not `cat` (cat is aliased to `bat` in this shell, eats response bodies)
# - Captures HTTP status code via curl -w, never trusts empty stdout as failure
# - Parses JSON via python3 -c (which works even if jq is missing)
# - Exits 0 only if HTTP 200 + scope=gist + login matches expected user
# - Exits 1 with diagnostic stderr otherwise
#
# Usage:
#   bash .founder/tools/check-gh-token.sh        # quiet check, exit 0 if working
#   bash .founder/tools/check-gh-token.sh -v     # verbose: print login + scope + gist count
#
# Read by any future agent at the top of every gist-publish session:
#   bash .founder/tools/check-gh-token.sh -v && bash .founder/tools/publish-gist.sh --all

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TOKEN_FILE="$REPO_ROOT/.founder/.gh_gist_token"
VERBOSE=0
EXPECTED_LOGIN="manduks"

[ "${1:-}" = "-v" ] || [ "${1:-}" = "--verbose" ] && VERBOSE=1

# --- Load token (avoid `cat` — aliased to `bat` in this shell) ---
if [ -z "${GITHUB_GIST_TOKEN:-}" ]; then
  if [ -f "$TOKEN_FILE" ]; then
    GITHUB_GIST_TOKEN="$(tr -d '\n\r ' < "$TOKEN_FILE")"
  else
    echo "FAIL: no token file at $TOKEN_FILE and GITHUB_GIST_TOKEN env unset" >&2
    exit 1
  fi
fi

if [ -z "$GITHUB_GIST_TOKEN" ]; then
  echo "FAIL: token is empty (length=0)" >&2
  exit 1
fi

TOKEN_LEN="${#GITHUB_GIST_TOKEN}"
TOKEN_PREFIX="${GITHUB_GIST_TOKEN:0:7}"

# --- Probe /user with full header capture ---
TMP_HEADERS="$(mktemp)"
TMP_BODY="$(mktemp)"
trap "rm -f $TMP_HEADERS $TMP_BODY" EXIT

HTTP_CODE="$(curl -sS \
  -D "$TMP_HEADERS" \
  -o "$TMP_BODY" \
  -w "%{http_code}" \
  -H "Authorization: token $GITHUB_GIST_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/user")"

# Extract scope from headers (grep, not cat)
SCOPES="$(grep -i '^x-oauth-scopes:' "$TMP_HEADERS" | sed 's/^[^:]*: *//' | tr -d '\r\n')"

if [ "$HTTP_CODE" != "200" ]; then
  echo "FAIL: GitHub API returned HTTP $HTTP_CODE (prefix=$TOKEN_PREFIX, len=$TOKEN_LEN)" >&2
  # Try to get error message via python (cat alias would eat the body)
  python3 -c "import json; d=json.load(open('$TMP_BODY')); print('  message:', d.get('message','(no message)'), file=__import__('sys').stderr)" 2>/dev/null || true
  exit 1
fi

LOGIN="$(python3 -c "import json; d=json.load(open('$TMP_BODY')); print(d.get('login',''))" 2>/dev/null)"

if [ -z "$LOGIN" ]; then
  echo "FAIL: HTTP 200 but no login in response body" >&2
  exit 1
fi

if [ "$LOGIN" != "$EXPECTED_LOGIN" ]; then
  echo "FAIL: token authenticates as '$LOGIN' but expected '$EXPECTED_LOGIN'" >&2
  exit 1
fi

if ! echo "$SCOPES" | grep -q 'gist'; then
  echo "FAIL: token works but missing 'gist' scope (current scopes: $SCOPES)" >&2
  exit 1
fi

if [ "$VERBOSE" = "1" ]; then
  # Also fetch gist count for verbose mode
  GIST_COUNT="$(curl -sS \
    -H "Authorization: token $GITHUB_GIST_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/gists?per_page=100" \
  | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "?")"

  echo "OK | login=$LOGIN | scope=$SCOPES | gists=$GIST_COUNT | prefix=${TOKEN_PREFIX}..."
else
  echo "OK"
fi

exit 0
