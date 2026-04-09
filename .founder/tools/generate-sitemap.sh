#!/bin/bash
# Auto-generate sitemap.xml from all pages in the Next.js pages/ directory
# Run: bash .founder/tools/generate-sitemap.sh
# This scans the actual pages/ directory so the sitemap never goes stale

SITE="https://midastools.co"
PAGES_DIR="pages"
OUTPUT="public/sitemap.xml"
TODAY=$(date +%Y-%m-%d)

echo '<?xml version="1.0" encoding="UTF-8"?>' > "$OUTPUT"
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> "$OUTPUT"

add_url() {
  local path="$1"
  local priority="$2"
  local freq="$3"
  echo "  <url>" >> "$OUTPUT"
  echo "    <loc>${SITE}${path}</loc>" >> "$OUTPUT"
  echo "    <lastmod>${TODAY}</lastmod>" >> "$OUTPUT"
  echo "    <changefreq>${freq}</changefreq>" >> "$OUTPUT"
  echo "    <priority>${priority}</priority>" >> "$OUTPUT"
  echo "  </url>" >> "$OUTPUT"
}

# Homepage
add_url "/" "1.0" "weekly"

# Scan all .js files in pages/ (excluding _app, _document, api/, [...] catch-alls)
find "$PAGES_DIR" -name "*.js" \
  ! -name "_*" \
  ! -path "*/api/*" \
  ! -name "\[*\].js" \
  | sort | while read -r file; do

  # Convert file path to URL path
  path=$(echo "$file" | sed "s|^$PAGES_DIR||" | sed 's|\.js$||' | sed 's|/index$||')

  # Skip homepage (already added) and thank-you
  [ -z "$path" ] && continue
  [ "$path" = "/thank-you" ] && continue

  # Set priority based on type
  case "$path" in
    /bundle|/kits) add_url "$path" "0.9" "weekly" ;;
    /*-kit) add_url "$path" "0.9" "weekly" ;;
    /ai-*-pack) add_url "$path" "0.9" "weekly" ;;
    /blog) add_url "$path" "0.8" "weekly" ;;
    /blog/*) add_url "$path" "0.7" "monthly" ;;
    /prompts) add_url "$path" "0.8" "weekly" ;;
    /prompts/*) add_url "$path" "0.7" "monthly" ;;
    /tools|/free-prompts|/chatgpt-prompts) add_url "$path" "0.8" "weekly" ;;
    /*-generator|/prompt-*|/image-*|/soul-*|/email-*|/hashtag-*) add_url "$path" "0.8" "weekly" ;;
    /services|/receptionist|/ai-audit|/done-for-you|/content-service) add_url "$path" "0.7" "weekly" ;;
    *) add_url "$path" "0.7" "monthly" ;;
  esac
done

# Add dynamic blog slugs from [slug].js
grep -oP "^\s*'[\w-]+'" "$PAGES_DIR/blog/[slug].js" | tr -d "' " | while read -r slug; do
  add_url "/blog/${slug}" "0.8" "monthly"
done

# Add dynamic prompt slugs from [slug].js
grep -oP "slug:\s*'[\w-]+'" "$PAGES_DIR/prompts/[slug].js" 2>/dev/null | grep -oP "'[\w-]+'" | tr -d "'" | while read -r slug; do
  add_url "/prompts/${slug}" "0.7" "monthly"
done

echo '</urlset>' >> "$OUTPUT"

# Count URLs
COUNT=$(grep -c '<url>' "$OUTPUT")
echo "Sitemap generated: $OUTPUT ($COUNT URLs)"
