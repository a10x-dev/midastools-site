#!/bin/bash
# Build ZIP files for all kits from kit-content/ directory
# Outputs to private-kits/ (NOT public/) — the ZIPs are paid products and must
# NOT be world-downloadable by direct URL. They are served only through the
# purchase-gated /api/download route (signed HMAC link, minted by the Stripe
# webhook). Moving output back to public/ would re-open the 2026-07-14 vuln.

SITE_DIR="/Users/armando/Documents/code/midastools-site"
KIT_DIR="$SITE_DIR/kit-content"
PUBLIC_DIR="$SITE_DIR/private-kits"

echo "Building kit ZIPs..."

for kit in real-estate-kit content-creator-kit freelancer-kit small-business-kit ai-prompt-mega-pack notion-templates-kit social-media-kit resume-career-kit ai-video-prompt-pack ai-image-prompt-pack presentation-kit email-marketing-kit ecommerce-kit saas-founder-kit; do
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
