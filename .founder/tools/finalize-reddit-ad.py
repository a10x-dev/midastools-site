#!/usr/bin/env python3
"""Take an isometric Nano Banana render and produce Reddit-ready final + thumbnail.

Bakes headline + offer text overlay (per Reddit +32% CTR finding).
Outputs square 1080x1080 for max mobile real estate.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SOURCE = "public/reddit-ad-v2-isometric.png"
OUT_MAIN = "public/reddit-ad-v3-final.png"
OUT_THUMB = "public/reddit-ad-v3-thumb.png"

W = 1080
H = 1080

NAVY = (15, 23, 42)
NAVY_OVERLAY = (10, 15, 30, 200)  # for top/bottom text strips
WHITE = (255, 255, 255)
GOLD = (251, 191, 36)
GRAY = (148, 163, 184)
ACCENT = (96, 165, 250)  # lighter blue for eyebrow


def load_font(size, bold=True):
    candidates_bold = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/SFNS.ttf",
    ]
    candidates_regular = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNS.ttf",
    ]
    paths = candidates_bold if bold else candidates_regular
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()


def text_w(draw, text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0]


def main():
    if not os.path.exists(SOURCE):
        sys.exit(f"Source image missing: {SOURCE}")

    # 1. Load + upscale to 1080
    base = Image.open(SOURCE).convert("RGB")
    if base.size != (W, H):
        base = base.resize((W, H), Image.LANCZOS)

    # 2. Build overlay layer
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)

    # Top gradient strip for headline (darker at top, fades down)
    for y in range(0, 280):
        alpha = int(220 * (1 - y / 280) ** 1.2)
        od.line([(0, y), (W, y)], fill=(8, 12, 28, alpha))

    # Bottom gradient strip for offer
    for y in range(820, 1080):
        alpha = int(230 * ((y - 820) / 260) ** 1.2)
        od.line([(0, y), (W, y)], fill=(8, 12, 28, alpha))

    composed = Image.alpha_composite(base.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(composed)

    # --- TOP: eyebrow + headline ---
    f_eyebrow = load_font(28, bold=True)
    eyebrow = "MIDASTOOLS  ·  LIFETIME AI PROMPT KITS"
    ew = text_w(draw, eyebrow, f_eyebrow)
    draw.text(((W - ew) // 2, 50), eyebrow, fill=ACCENT, font=f_eyebrow)

    f_hl = load_font(64, bold=True)
    headline_lines = [
        "AI prompts you'd write",
        "yourself — if you had time.",
    ]
    y = 110
    for line in headline_lines:
        lw = text_w(draw, line, f_hl)
        draw.text(((W - lw) // 2, y), line, fill=WHITE, font=f_hl)
        y += 76

    # --- BOTTOM: subhead + offer chip ---
    f_sub = load_font(34, bold=False)
    subhead = "250+ ready for ChatGPT, Claude, Gemini"
    sw = text_w(draw, subhead, f_sub)
    draw.text(((W - sw) // 2, 870), subhead, fill=GRAY, font=f_sub)

    # Gold offer chip
    chip_text = "$29  ·  LIFETIME"
    f_chip = load_font(40, bold=True)
    chip_w = text_w(draw, chip_text, f_chip) + 80
    chip_h = 80
    chip_x = (W - chip_w) // 2
    chip_y = 930
    draw.rounded_rectangle(
        [chip_x, chip_y, chip_x + chip_w, chip_y + chip_h],
        radius=16,
        fill=GOLD,
    )
    draw.text(
        (chip_x + 40, chip_y + 18),
        chip_text,
        fill=NAVY,
        font=f_chip,
    )

    # Footer trust line
    f_foot = load_font(22, bold=False)
    foot = "ONE-TIME PURCHASE  ·  30-DAY REFUND  ·  NO SUBSCRIPTION"
    fw = text_w(draw, foot, f_foot)
    draw.text(((W - fw) // 2, 1030), foot, fill=GRAY, font=f_foot)

    composed.convert("RGB").save(OUT_MAIN, "PNG", optimize=True)
    print(f"✓ {OUT_MAIN} ({os.path.getsize(OUT_MAIN)} bytes, {W}x{H})")

    # --- Thumbnail (400x400, tight crop on card stack) ---
    src = Image.open(SOURCE).convert("RGB")
    # Crop center square slightly tighter to emphasize cards
    sw_src, sh_src = src.size
    crop_size = int(min(sw_src, sh_src) * 0.85)
    left = (sw_src - crop_size) // 2
    top = (sh_src - crop_size) // 2
    thumb_src = src.crop((left, top, left + crop_size, top + crop_size))
    thumb = thumb_src.resize((400, 400), Image.LANCZOS)

    # Subtle bottom strip with $29 chip
    tover = Image.new("RGBA", (400, 400), (0, 0, 0, 0))
    td = ImageDraw.Draw(tover)
    for y in range(300, 400):
        alpha = int(220 * ((y - 300) / 100) ** 1.5)
        td.line([(0, y), (400, y)], fill=(8, 12, 28, alpha))
    thumb_final = Image.alpha_composite(thumb.convert("RGBA"), tover)
    td2 = ImageDraw.Draw(thumb_final)

    f_thumb_chip = load_font(28, bold=True)
    chip_text2 = "$29 LIFETIME"
    cw2 = text_w(td2, chip_text2, f_thumb_chip)
    td2.text(((400 - cw2) // 2, 350), chip_text2, fill=GOLD, font=f_thumb_chip)

    thumb_final.convert("RGB").save(OUT_THUMB, "PNG", optimize=True)
    print(f"✓ {OUT_THUMB} ({os.path.getsize(OUT_THUMB)} bytes, 400x400)")


if __name__ == "__main__":
    main()
