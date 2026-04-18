# Action Figure AI Prompt Cheatsheet — 12 Copy-Paste Templates for Midjourney / Imagen / Flux (April 2026)

Published: https://gist.github.com/manduks/5045c5431a5eb0687e3057e7efeffc9e

> **Free generator:** [midastools.co/action-figure-generator](https://www.midastools.co/action-figure-generator?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet) — upload a photo, get action-figure prompts instantly.
> **Paid bundle:** [midastools.co/ai-image-prompt-pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet) — 150+ image prompts, $29.

The "make me an action figure" trend has been running since mid-2025 and still converts attention into engagement better than almost any other image-AI trend. Here's the prompt grammar that separates the good from the viral.

---

## The universal action-figure prompt skeleton

```
[SUBJECT]: {person description — 2-3 distinctive features}
[TOY STYLE]: {vintage 1980s G.I. Joe | modern Hasbro | Funko Pop | custom McFarlane}
[POSE]: {hero stance | mid-action | relaxed with prop}
[ACCESSORIES]: 3-5 specific items — laptop, coffee cup, tools, pet
[PACKAGING]:
  - Retro blister pack with bold yellow/red color block
  - Plastic clamshell over cardstock backing
  - Character name in bold all-caps typography at top
  - Tagline: "{5-8 word tagline}"
[BACKGROUND]: toy aisle shelf | plain studio white | blueprint grid
[LIGHTING]: commercial product lighting, soft shadow
[STYLE]: hyperreal 3D render | clay-mation | photorealistic plastic
[ASPECT]: 2:3 (portrait, matches real toy packaging)
[NEGATIVE]: no text bleed, no warped accessories, no multiple faces
```

The secret is the PACKAGING section. 80% of generic action-figure prompts online skip it — that's why their outputs look like random figurines instead of actual toys.

---

## 5 copy-paste examples

### 1. The "Founder Action Figure"
```
Action figure in vintage 1980s blister-pack packaging. Character:
30-something founder with short dark hair, black t-shirt, jeans,
sneakers, in a confident mid-stride pose. Accessories arranged
beside the figure in molded plastic slots: MacBook Pro, coffee cup
with "HUSTLE" logo, Stripe credit card, a small rocket ship, and
a pair of AirPods. Packaging: yellow-red retro blister pack,
"THE FOUNDER" in bold black all-caps at top, tagline "SHIPS CODE.
SHIPS KITS. SHIPS REVENUE." Background: retail toy shelf. Lighting:
soft commercial product lighting. Hyperreal 3D render, 2:3 aspect
ratio. No text bleed.
```

### 2. The "Developer Action Figure"
```
Action figure in modern blister pack. Character: software developer
with glasses, hoodie, messy hair, holding a mug. Accessories: a
mechanical keyboard, an ergonomic mouse, a cat sitting on top of a
laptop, energy drink can, rubber duck for debugging, and a stack of
three monitors. Packaging: modern matte black cardstock, silver
foil "THE DEVELOPER" at top, subtitle "10x OR IT DIDN'T HAPPEN."
Background: plain studio white. Photorealistic plastic, commercial
lighting, 2:3 aspect ratio. Negative: no warped accessories, no
multiple faces.
```

### 3. The "Marketer Action Figure"
```
Vintage 1990s action figure on blister pack. Character: marketer in
a blazer, holding a phone in one hand and a Starbucks cup in the
other. Accessories: a Google Analytics dashboard printout, a
clipboard with A/B test results, a smartphone, a coffee cup, and a
tiny "CONVERSION UP 34%" trophy. Packaging: bold primary colors
(red, yellow, blue), "THE MARKETER" in white block letters at top,
tagline "GROWS REVENUE, NOT VANITY." Background: toy aisle with
bokeh. Hyperreal 3D render, 2:3 aspect ratio.
```

### 4. The "Designer Action Figure"
```
Action figure in modern blister-pack packaging. Character: designer
in a turtleneck, minimalist glasses, and sneakers. Accessories:
iPad with Apple Pencil, a Pantone color swatch book, an espresso
cup, a Figma wireframe printout, noise-cancelling headphones.
Packaging: pure white cardstock with thin black border, "THE
DESIGNER" in Helvetica at top, tagline "FORM FOLLOWS FUNDING."
Background: minimalist studio. Commercial lighting, 2:3 aspect.
Photorealistic plastic.
```

### 5. The "Parent Action Figure"
```
Vintage action figure packaging. Character: exhausted but loving
parent in wrinkled t-shirt with coffee stain, holding a baby
monitor. Accessories: a sippy cup, a stroller, a stack of kids'
books, a bottle of wine (hidden behind books), a tiny bedtime
book. Packaging: soft pastel yellow and teal, "THE PARENT" in
friendly rounded typography at top, tagline "SURVIVAL SOLD
SEPARATELY." Background: nursery shelf with muted toys. Warm
commercial lighting, 2:3 aspect ratio.
```

---

## Model-specific tweaks

| Model | What to add | What to remove |
| --- | --- | --- |
| **Midjourney v7** | `--ar 2:3 --v 7 --s 300 --style raw` | none, v7 handles structure well |
| **Imagen 3 (Gemini)** | "hyperreal, highly detailed toy packaging photography" | drop the bracketed structure, use natural language |
| **DALL-E 3** | write in natural language, NOT brackets | brackets confuse DALL-E |
| **Flux Pro 1.1** | comma-separated tags + "action figure, blister pack, toy photography" | minimize nested structure |
| **Stable Diffusion XL** | add LoRA: `toy_photography_v2` at 0.8 strength | keep prompts under 250 tokens |

---

## 7 more action-figure prompt variants

1. **The Teacher** — chalkboard accessories, apple, lunch thermos
2. **The Chef** — chef's knife, mixing bowl, spice rack, kitchen towel
3. **The Athlete** — dumbbell, protein shake, heart-rate monitor, stopwatch
4. **The Musician** — guitar, amp, setlist, capo, in-ear monitors
5. **The Doctor** — stethoscope, clipboard, coffee, scrubs, running shoes
6. **The Realtor** — key, yard sign, tape measure, phone, blazer
7. **The Content Creator** — ring light, iPhone, tripod, lavalier mic, coffee

Full prompt text for all 12 (plus 8 more variants: the Lawyer, the Data Scientist, the Freelancer, the Small Business Owner, the Travel Blogger, the Cyclist, the Farmer, the Student) is in the [AI Image Prompt Pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet) ($29, 150+ prompts) or bundled in the [$9 Starter Pack](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet).

---

## 5 mistakes that kill action-figure outputs

1. **Skipping the packaging description.** Without it you get a generic figurine instead of a toy-shop product. The packaging IS the prompt.
2. **Too many accessories.** 3-5 is the sweet spot. 10+ and the model loses coherence.
3. **Ambiguous pose words.** "Cool pose" = random limbs. Use specific pose verbs: mid-stride, hero stance, crouching with tool.
4. **Wrong aspect ratio.** 1:1 looks like a toy photo, not packaging. Always use 2:3 portrait.
5. **Generic taglines.** "THE HERO" is forgettable. Specific, contradictory, or self-aware taglines go viral ("SHIPS CODE. SHIPS KITS. SHIPS REVENUE.").

---

## Resources

- **Free action-figure generator:** [midastools.co/action-figure-generator](https://www.midastools.co/action-figure-generator?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet)
- **Free Ghibli prompt generator:** [midastools.co/ghibli-prompt-generator](https://www.midastools.co/ghibli-prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet)
- **Free pet-portrait generator:** [midastools.co/pet-portrait-generator](https://www.midastools.co/pet-portrait-generator?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet)
- **Paid Image Pack ($29):** [AI Image Prompt Pack](https://www.midastools.co/ai-image-prompt-pack?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet)
- **Starter Pack ($9):** [20 best prompts across image/video/text](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=04-action-figure-prompt-cheatsheet)

If you ship one of these and post on LinkedIn, tag the output — we repost the best ones.