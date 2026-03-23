#!/bin/bash
# Build ZIP files for all kits from kit-content/ directory
# Outputs to public/ for direct download

SITE_DIR="/Users/armando/Documents/code/midastools-site"
KIT_DIR="$SITE_DIR/kit-content"
PUBLIC_DIR="$SITE_DIR/public"

echo "Building kit ZIPs..."

for kit in real-estate-kit content-creator-kit freelancer-kit small-business-kit ai-prompt-mega-pack; do
  if [ -d "$KIT_DIR/$kit" ]; then
    file_count=$(ls -1 "$KIT_DIR/$kit" | wc -l | tr -d ' ')
    echo "  $kit: $file_count files"
    cd "$KIT_DIR/$kit"
    zip -j "$PUBLIC_DIR/$kit.zip" ./* > /dev/null 2>&1
    size=$(ls -lh "$PUBLIC_DIR/$kit.zip" | awk '{print $5}')
    echo "  → $kit.zip ($size)"
  else
    echo "  MISSING: $kit directory"
  fi
done

echo ""
echo "Kit ZIPs in public/:"
ls -lh "$PUBLIC_DIR"/*.zip
