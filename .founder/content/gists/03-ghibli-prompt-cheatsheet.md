# Studio Ghibli AI Prompt Cheatsheet — 15 Copy-Paste Templates for Midjourney, Imagen 3, DALL-E 3 (April 2026)

Published: https://gist.github.com/manduks/9efa985bed24330f1ef1c38521bad71f

> **Free Ghibli generator:** [midastools.co/ghibli-prompt-generator](https://www.midastools.co/ghibli-prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet) — paste a photo idea, get 3 Ghibli-style prompts.
> **Paid bundle:** [midastools.co/ai-image-prompt-pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet) — 150+ image prompts including 25 Ghibli variants.

Ghibli-style AI portraits have been trending for 6 months and show no signs of slowing. The difference between mediocre Ghibli outputs and gorgeous ones is *specific prompt grammar*. Here's the system.

---

## The universal Ghibli prompt skeleton

```
[SUBJECT]: {who — age, posture, 1 distinctive feature}
[COSTUME]: {1 specific garment or accessory}
[SETTING]: {Ghibli-signature environment — meadow, bathhouse, forest, seaside town}
[TIME OF DAY]: {golden hour | blue hour | overcast | twilight}
[MOOD]: {nostalgic | dreamy | mischievous | quietly determined}
[RENDERING]:
  - Studio Ghibli hand-painted watercolor style
  - Soft cel-shading, visible brushstrokes
  - Muted pastel palette with one vivid accent color
  - Subtle film grain
[COMPOSITION]: {rule of thirds | centered portrait | over-shoulder}
[ASPECT]: {2:3 | 3:2 | 1:1}
[NEGATIVE]: no text, no watermark, no photorealism, no 3D rendering, no anime edges
```

This skeleton is why your prompts look Ghibli instead of generic anime.

---

## 5 copy-paste prompts

### 1. The "My Neighbor Totoro" meadow scene
```
Studio Ghibli-style illustration of a 7-year-old girl with short
bob haircut and red rain boots, holding an oversized green leaf
as an umbrella, running through a sun-drenched meadow of tall
grass. Golden-hour light filtering through clouds, wind-blown
grass. Hand-painted watercolor, soft cel-shading, muted greens
and yellows with one vivid red accent (boots). Visible brush
strokes, subtle film grain. Rule of thirds composition, 3:2
aspect ratio. No text, no 3D, no photorealism.
```

### 2. The "Spirited Away" bathhouse moment
```
Studio Ghibli-style illustration of a young woman in a traditional
indigo yukata standing on a wooden bridge at dusk, warm lanterns
glowing from a distant bathhouse, mist rising from hot springs.
Her expression: quiet wonder. Hand-painted watercolor, cel-shaded,
palette of deep blues and warm ambers with red lantern accents.
Subtle film grain, visible brushstrokes. Over-the-shoulder
composition, 2:3 aspect ratio. No text, no photorealism, no 3D.
```

### 3. The "Kiki's Delivery Service" seaside town
```
Studio Ghibli-style illustration of a teenage courier with a
black cat on her shoulder, sitting on a red-tiled rooftop
overlooking a European-style seaside town at golden hour. Warm
terracotta rooftops, a glimpse of cobalt ocean, seagulls
mid-flight. Hand-painted watercolor style, cel-shaded with soft
shadows. Muted warm palette with cobalt ocean as vivid accent.
Rule of thirds, 3:2 aspect ratio. No text, no 3D rendering.
```

### 4. The "Howl's Moving Castle" flower field
```
Studio Ghibli-style illustration of a wizard with tousled blond
hair, standing in a mountain meadow of wildflowers at twilight.
A modest cottage with smoke curling from the chimney in the
distance. Mood: quietly melancholic. Hand-painted watercolor,
cel-shaded, palette of lavender, sage, and rose gold. Visible
brushwork, gentle film grain. Wide landscape composition, 3:2
aspect ratio. No text, no photorealism, no anime edges.
```

### 5. The "Ponyo" seaside cottage
```
Studio Ghibli-style illustration of two kids (boy and girl, age 5)
sitting on the steps of a wooden cottage perched on a cliff above
a turquoise sea. A kettle whistling on a small stove visible
through the open door. Time: late afternoon, soft golden light.
Hand-painted watercolor with cel-shading, palette of turquoise,
coral, and weathered wood. Subtle brushstrokes, film grain.
Centered composition, 1:1 aspect ratio. No text, no 3D, no
photorealism.
```

---

## Model-specific tweaks

| Model | What to add | What to remove |
| --- | --- | --- |
| **Midjourney v7** | `--style raw --ar 2:3 --v 7 --s 250` | nothing — it handles NEGATIVE internally |
| **Imagen 3 (Gemini)** | "in the style of Hayao Miyazaki" | skip the `--style` suffixes |
| **DALL-E 3 (ChatGPT)** | "soft, warm, hand-painted aesthetic" | remove trailing negative list; embed inline |
| **Flux Pro 1.1** | `, watercolor, cel-shaded, 2:3` | drop the bracket structure, use comma-separated |
| **Stable Diffusion XL** | use LoRA: `ghibli_style_v2 < lora:0.75 >` | remove "Studio Ghibli" phrase to avoid copyright filters |

---

## 10 more Ghibli prompts you can grab

1. Young boy on a train watching rain streak the window
2. Elderly gardener tending a rooftop vegetable patch
3. Two siblings reading on the floor of a sunlit library
4. A tea ceremony in a forest clearing
5. A baker kneading dough in a warm bakery at dawn
6. A small spirit creature hiding in the roots of a tree
7. A young musician playing flute on a mountain path
8. A fisherman's daughter mending nets on a pier
9. A witch's apprentice stirring a cauldron in a forest hut
10. A train conductor signaling at a rural station at dusk

Full prompt text for all 10 (plus 15 other variants for Totoro / Howl / Kiki / Ponyo / Spirited Away scenes) is inside the [$29 AI Image Prompt Pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet).

---

## 3 common mistakes I see in Ghibli AI prompts

1. **"In the style of Studio Ghibli" as the whole prompt.** This gives you anime, not Ghibli. Ghibli is cel-shading + watercolor + muted pastel + one accent color + specific subject-matter grammar.
2. **Over-prompting the face.** Ghibli faces are minimal — two dots, one line. Let the model keep them simple.
3. **Forgetting the environment verb.** Ghibli isn't portrait-centric. The *setting is doing something* — wind blowing, smoke curling, light filtering. Put a verb on the environment.

---

## Resources

- **Free Ghibli prompt generator (no signup):** [midastools.co/ghibli-prompt-generator](https://www.midastools.co/ghibli-prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet)
- **Free pet portrait generator:** [midastools.co/pet-portrait-generator](https://www.midastools.co/pet-portrait-generator?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet) — same grammar, pet subjects
- **Free action-figure generator:** [midastools.co/action-figure-generator](https://www.midastools.co/action-figure-generator?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet)
- **Paid Image Pack ($29):** [150+ prompts — Ghibli, flat-lay, photo-dump, product, portrait](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet)
- **Mega Pack ($29):** [500+ prompts across image, video, text](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=03-ghibli-prompt-cheatsheet)

If you generate something with these prompts, drop a link in the comments — I love seeing the outputs.