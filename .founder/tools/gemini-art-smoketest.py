#!/usr/bin/env python3
"""Smoke-test Gemini image-gen for the USER-FACING art use case (pivot de-risk).

Unlike nano-banana-ad-gen.py (hardcoded 16:9 ad creatives), this verifies the
actual money-pivot assumption: can our key turn an art-seeker's text description
into a usable styled portrait, fast enough, at a usable resolution/cost?

Usage:
    python3 .founder/tools/gemini-art-smoketest.py [out-path] ["prompt"]

Reports: HTTP result, wall-clock latency, output bytes, mime type. Pair with
`sips -g pixelWidth -g pixelHeight <out>` (macOS) to read dimensions.
"""
import base64
import json
import os
import sys
import time
import urllib.request
import urllib.error

MODEL = "gemini-2.5-flash-image"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

# The flagship generator's exact use case: a Ghibli-style pet portrait from a
# plain-English description (the lower-risk text->image path, no user upload).
DEFAULT_PROMPT = (
    "A soft, hand-painted Studio Ghibli style portrait of a fluffy orange tabby "
    "cat sitting on a sunlit wooden windowsill, looking out at a green meadow "
    "with rolling hills and a few white clouds. Warm cinematic light, gentle "
    "watercolor textures, cozy and whimsical, anime film still aesthetic. "
    "Square composition. Highly detailed, beautiful."
)


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


def gen(prompt: str, out_path: str):
    key = load_key()
    body = {"contents": [{"parts": [{"text": prompt}]}]}
    req = urllib.request.Request(
        f"{ENDPOINT}?key={key}",
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "User-Agent": "midastools-art-smoketest/1.0",
        },
        method="POST",
    )
    print(f"[smoke] model={MODEL}")
    print(f"[smoke] prompt: {prompt[:80]}...")
    t0 = time.time()
    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        sys.exit(f"[smoke] HTTP {e.code}: {e.read().decode()[:500]}")
    latency = time.time() - t0
    print(f"[smoke] latency: {latency:.2f}s")

    image_b64 = None
    mime = None
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            if "inlineData" in part:
                image_b64 = part["inlineData"]["data"]
                mime = part["inlineData"].get("mimeType")
                break
        if image_b64:
            break
    if not image_b64:
        sys.exit(f"[smoke] NO IMAGE returned. Raw: {json.dumps(data)[:600]}")

    raw = base64.b64decode(image_b64)
    with open(out_path, "wb") as f:
        f.write(raw)
    print(f"[smoke] mime: {mime}")
    print(f"[smoke] saved: {out_path} ({len(raw)} bytes)")
    print(f"[smoke] RESULT: usable image generated from a plain art-seeker description")
    # usage metadata if present (helps estimate per-image cost)
    usage = data.get("usageMetadata")
    if usage:
        print(f"[smoke] usageMetadata: {json.dumps(usage)}")


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "/tmp/gemini-art-smoketest.png"
    prompt = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_PROMPT
    gen(prompt, out)
