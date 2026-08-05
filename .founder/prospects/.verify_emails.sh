#!/bin/bash
# Verify that a claimed email string actually appears in the fetched page HTML.
# Input: TSV on stdin -> email<TAB>verify_url
# Output: STATUS <TAB> email <TAB> url <TAB> note
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"

while IFS=$'\t' read -r email url; do
  [ -z "$email" ] && continue
  body=$(curl -sL --max-time 25 --compressed -A "$UA" "$url" 2>/dev/null)
  code=$(printf '%s' "$body" | wc -c | tr -d ' ')
  # direct match (case-insensitive)
  if printf '%s' "$body" | grep -qiF "$email"; then
    echo -e "OK\t$email\t$url\tplain-html bytes=$code"
    continue
  fi
  # try local-part + domain separately in case of entity/obfuscation
  lp="${email%%@*}"
  dom="${email##*@}"
  if printf '%s' "$body" | grep -qiF "$lp" && printf '%s' "$body" | grep -qiF "$dom"; then
    echo -e "SPLIT\t$email\t$url\tparts present separately bytes=$code"
    continue
  fi
  # cloudflare email obfuscation present?
  if printf '%s' "$body" | grep -qi 'cf_email\|email-protection'; then
    echo -e "CFOBF\t$email\t$url\tcloudflare-obfuscated bytes=$code"
    continue
  fi
  echo -e "MISS\t$email\t$url\tnot found bytes=$code"
done
