# Midjourney v7 Prompt Cheatsheet — 14 Copy-Paste Templates That Ride the New Engine (April 2026)

Published: https://gist.github.com/manduks/b4821a55f4af02071f424d0ada5267ee

> **Free generator:** [midastools.co/ghibli-prompt-generator](https://www.midastools.co/ghibli-prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet) — pick a style, get a full Midjourney v7 prompt.
> **Deep dive:** [AI Image Prompt Pack (150+ templates)](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet)

Midjourney v7 shipped with a different prompt grammar than v6. The weighting system changed, `--sref` behaves differently, and old v6 prompts often produce weirdly muddy results now.

This cheatsheet is 14 templates I rebuilt from scratch after v7 dropped. Each one is stress-tested — pasted into v7 as-is and produces grid-one results good enough to ship.

---

## What changed in v7 (the 90-second version)

| Area                 | v6 behavior                    | v7 behavior                             |
|----------------------|--------------------------------|------------------------------------------|
| Prompt weight        | `::2` heavy                    | Softer — use `::1.3-1.6` max             |
| Style reference      | `--sref <url>`                 | `--sref <url> --sw 500` tuned differently |
| Aspect ratio         | `--ar 16:9`                    | Same, but 2048px native now              |
| Negative prompting   | `--no {thing}`                  | Stronger — works on abstract concepts too |
| Personalization      | `--p` opt-in                   | `--p <code>` required per account        |
| Raw mode             | `--style raw`                  | More photographic out of the box         |
| Char consistency     | `--cref`                       | New `--cw 100` for strict match          |

The biggest shift: **v7 rewards simpler prompts with stronger subject + environment + light description, and punishes token-stuffing.**

---

## The v7 universal template

```
[SUBJECT]: {who/what, 1-2 distinctive details}, [ACTION]: {what they're doing}, [ENVIRONMENT]: {location + 2 atmospheric details}, [LIGHTING]: {time of day + quality}, [LENS]: {focal length + aperture}, [STYLE]: {aesthetic + era}, [MOOD]: {1-2 adjectives} --ar {ratio} --style {raw/default} --v 7
```

Replace every bracket. Keep it under 60 tokens. v7 is smart enough to fill gaps — don't over-specify.

---

## 14 Copy-paste templates by category

### Product photography (e-commerce ready)

```
matte black ceramic mug on oak cutting board, steam rising, morning kitchen, soft window light from left, 50mm f/2.8 shallow depth of field, commercial product photography, editorial, minimal --ar 4:5 --style raw --v 7
```

```
skincare bottle on wet marble slab, water droplets catching light, pastel gradient background, clean shadow, 85mm f/4 crisp detail, luxury brand aesthetic --ar 1:1 --style raw --v 7
```

### Portraits (photoreal)

```
woman late 20s with freckles and natural auburn hair, looking off camera with slight smile, rooftop at golden hour, bokeh city lights, 85mm f/1.8, warm backlight, editorial portrait, documentary feel --ar 4:5 --style raw --v 7 --no plastic skin
```

```
elderly man with deeply lined face and kind eyes, reading a book by firelight, wood-paneled library, single warm lamp, 35mm f/2, Rembrandt lighting, film grain --ar 3:2 --style raw --v 7
```

### Ghibli / anime-style

```
young girl in yellow raincoat walking through a lantern-lit forest, soft rain, mist between trees, dusk purple sky, Studio Ghibli color palette, cel-shaded, hand-painted backgrounds, gentle magic --ar 16:9 --v 7
```

```
cat sitting on windowsill watching snow fall over a quiet village at dusk, warm orange lamplight inside, cool blue world outside, painterly, Ghibli-inspired, detailed environment --ar 16:9 --v 7
```

### Product hero / landing page

```
flat lay of minimalist desk: open MacBook, notebook, espresso cup, monstera leaf, soft top-down lighting, linen texture surface, modern workspace aesthetic, muted tones --ar 16:9 --style raw --v 7
```

```
abstract 3D render of translucent glass shapes intersecting, soft gradient background pink to blue, studio lighting, octane render quality, minimalist tech brand aesthetic --ar 16:9 --v 7
```

### Architecture / interior

```
modern scandinavian living room, oak floors, white linen sofa, large window with birch trees outside, morning sun streaming in, potted olive tree in corner, interior magazine quality, wide lens --ar 3:2 --style raw --v 7
```

```
futuristic neon-lit tokyo alley at night after rain, reflections on wet asphalt, ramen shop signage in the distance, atmospheric mist, 35mm lens, Blade Runner palette, cinematic --ar 21:9 --v 7
```

### Character + action figure

```
full-body action figure of a female astronaut in retro orange suit, standing next to her helmet and toolkit on blister-pack backdrop, studio lighting, collectible toy photography, sharp focus --ar 3:4 --style raw --v 7
```

### Food

```
overhead shot of hand-tossed pizza with bubbling mozzarella, fresh basil, wooden peel, flour-dusted marble counter, warm oven glow, rustic trattoria, 50mm, shallow depth of field --ar 1:1 --style raw --v 7
```

### Abstract / editorial

```
single red balloon drifting over a foggy mountain landscape at dawn, soft light, muted palette, minimalist composition, editorial photography, negative space, emotional --ar 16:9 --style raw --v 7
```

### Logo / brand mark

```
minimalist geometric lion head logo mark, single continuous line, deep navy on warm cream background, luxury brand aesthetic, balanced negative space, vector-ready --ar 1:1 --v 7 --no text
```

---

## 5 common v7 mistakes

1. **Using v6-era weighting (`::2`, `::3`).** v7 reads these as overemphasis and produces muddy composites. Keep weights under 1.6.
2. **Stuffing tokens.** v7 hits diminishing returns after ~60 tokens. "Beautiful stunning cinematic masterpiece" dilutes real signal.
3. **Forgetting `--style raw`.** Default v7 leans stylized — for product and portrait work, `--style raw` almost always wins.
4. **Using --no for physical things instead of concepts.** `--no blur` works. `--no bad lighting` works better than `--no darkness`. Think quality adjectives.
5. **Mixing aspect ratios mid-session.** v7 caches composition. Lock `--ar` per project for consistency, especially when using `--cref` for character continuity.

---

## Resources

- **Free Ghibli/style generator:** [midastools.co/ghibli-prompt-generator](https://www.midastools.co/ghibli-prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet) — picks the right v7 prompt pattern for your subject
- **Free action-figure generator:** [midastools.co/action-figure-generator](https://www.midastools.co/action-figure-generator?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet) — the blister-pack template above, customizable
- **Free pet-portrait generator:** [midastools.co/pet-portrait-generator](https://www.midastools.co/pet-portrait-generator?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet) — v7-tuned templates for pet photography
- **Full image prompt pack ($29):** [AI Image Prompt Pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet) — 150+ prompts across 12 categories, all v7-verified
- **Starter pack ($9):** [20 Best AI Prompts](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=07-midjourney-v7-prompt-cheatsheet)

The full **Image Prompt Pack** is 150+ templates across product, portrait, architecture, food, and editorial — every one v7-tested and model-agnostic so they also work in Imagen 3, Flux Pro, and Ideogram 3. $29, 30-day refund, instant download.