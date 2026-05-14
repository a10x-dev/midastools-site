#!/usr/bin/env python3
"""Generate ad creatives via Gemini 2.5 Flash Image (aka Nano Banana).

Usage:
    python3 .founder/tools/nano-banana-ad-gen.py <out-path> <variant-name>

Variants live in PROMPTS dict below; call --list to see them.
"""
import base64
import json
import os
import sys
import urllib.request

MODEL = "gemini-2.5-flash-image"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"


def load_key():
    for path in [".founder/.gemini_key", os.path.expanduser("~/.gemini_key")]:
        if os.path.exists(path):
            with open(path) as f:
                k = f.read().strip()
                if k:
                    return k
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    sys.exit("No API key found at .founder/.gemini_key or $GEMINI_API_KEY")


PROMPTS = {
    "editorial-desk": (
        "Premium editorial photograph for a tech-product advertisement, 16:9 landscape, "
        "wide aspect ratio. Overhead-angle shot of a clean modern workspace: high-end "
        "MacBook Pro on warm walnut wood desk, screen displaying a beautifully designed "
        "library of AI prompt cards in a list view with a deep-navy UI and warm-gold "
        "accent highlights. A small ceramic coffee cup sits at the upper right, casting "
        "a soft natural shadow. Beside the laptop, a leather-bound notebook lies open "
        "with handwritten notes. Soft northern window light from the upper-left, gentle "
        "depth-of-field blur on the notebook. Aesthetic: Apple/Stripe marketing, editorial "
        "magazine, premium professional, NOT cartoon, NOT clip art, NOT generic stock. "
        "Color palette: warm walnut, deep navy, cream, single gold accent. Negative space "
        "on the right third of the frame for ad overlay text. Photoreal, sharp focus, "
        "shot on Sony A7R IV with 35mm prime lens at f/2.8. NO TEXT in the image."
    ),
    "isometric-cards": (
        "Premium product-marketing illustration, 16:9 landscape, wide aspect ratio. "
        "Isometric 3D composition floating against a deep gradient background (navy "
        "#0F172A bottom-left to slate #1E293B top-right). A neat stack of 8-10 thin "
        "rectangular cards in subtle gradients of cobalt blue (#3B5FFF) and pale "
        "lavender, slightly offset and angled as if perspective-stacked. Each card has "
        "minimal abstract dot/line typography suggesting prompt text (no readable words). "
        "A single warm-gold pill/chip floats above the stack with subtle glow. Soft "
        "shadow beneath the stack. Aesthetic: Linear/Stripe/Vercel marketing illustration, "
        "premium SaaS hero image, clean, sophisticated. NO TEXT in the image. NOT cartoon, "
        "NOT clip art. Hyper-detailed, 3D render quality, ray-traced shadows."
    ),
    "dark-hero": (
        "Premium dark-mode advertisement image, 16:9 landscape, wide aspect ratio. "
        "Atmospheric dark navy gradient background (#0F172A to #1E293B). In the right "
        "two-thirds of the frame, render a large semi-transparent glass-morphism panel "
        "as if a beautiful AI chat application interface — clean UI showing a list of "
        "prompt category icons (work, writing, marketing, code, image) in subtle cobalt "
        "blue. Floating in front, render three small physical-looking cards stacked at "
        "slight angles like a luxury Trello card stack, each in deep blue with thin gold "
        "borders, suggesting curated content. The left third of the frame is dark "
        "negative space for overlay text. Aesthetic: Apple Vision Pro keynote, Notion "
        "marketing, Linear app hero. NO TEXT in image. Premium, professional, NOT "
        "cartoon. Photorealistic 3D render quality, soft volumetric lighting."
    ),
}


def gen(prompt_key: str, out_path: str):
    if prompt_key not in PROMPTS:
        sys.exit(f"Unknown variant '{prompt_key}'. Available: {list(PROMPTS.keys())}")

    key = load_key()
    body = {
        "contents": [
            {
                "parts": [{"text": PROMPTS[prompt_key]}],
            }
        ],
    }
    req = urllib.request.Request(
        f"{ENDPOINT}?key={key}",
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "User-Agent": "midastools-ad-gen/1.0",
        },
        method="POST",
    )
    print(f"[gen] requesting '{prompt_key}' via {MODEL}...")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode()}")

    # Walk candidates -> content -> parts -> inlineData
    image_b64 = None
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            if "inlineData" in part:
                image_b64 = part["inlineData"]["data"]
                break
        if image_b64:
            break
    if not image_b64:
        sys.exit(f"No inline image returned. Raw: {json.dumps(data)[:500]}")

    with open(out_path, "wb") as f:
        f.write(base64.b64decode(image_b64))
    print(f"[gen] saved {out_path} ({os.path.getsize(out_path)} bytes)")


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "--list":
        for k in PROMPTS:
            print(k)
        sys.exit(0)
    if len(sys.argv) != 3:
        sys.exit("Usage: nano-banana-ad-gen.py <out-path> <variant-name>")
    gen(sys.argv[2], sys.argv[1])
