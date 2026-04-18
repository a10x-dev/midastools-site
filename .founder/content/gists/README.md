# GitHub Gists — Our #1 Traffic Channel (Discovered Apr 17, 2026)

## The discovery

Armando shared analytics showing `gist.github.com` is our **#1 referrer at 36%** of all visitors (9 visitors / 13 page views) — ahead of Google (24%), Yandex (8%), ChatGPT (4%), Microsoft Teams (12%).

The referring gist is a single post Armando made 3 weeks ago:
**https://gist.github.com/manduks/a75d188de9ada857f515c3bcee61a54c** — "OpenClaw SOUL.md Best Practices"

One gist = 36% of all traffic. This is our cheapest, highest-ROI distribution channel.

## The winning template (reverse-engineered)

- **Markdown headers** (#, ##, ###) for hierarchy
- **Tables** for comparison data (critical — tables rank well in Google + scannable)
- **Code blocks** with YAML-style or copy-paste content (gives the reader *value* not just a pitch)
- **5 backlinks** to midastools.co (free tool listed **2x** — once up top, once in Resources)
- **Direct, conversational tone** — "A vague X = a vague Y = zero useful output"
- **Concrete metrics** ($14,718 example from the winning gist)
- **Actionable constraints** — "Max 75 words", specific numbers
- **Closing section** titled "Common Mistakes" or "Resources" with 5 items

## The 5 new gists in this directory (all URLs verified 200)

| File | Target keyword cluster | Primary backlink |
| --- | --- | --- |
| `01-sora-alternatives-cheatsheet.md` | "sora alternatives", "veo 3.1 prompts", "kling 3.0 prompts" | `/ai-video-prompt-pack` + `/blog/sora-shutdown-alternatives-2026` |
| `02-cold-outreach-prompts.md` | "cold email prompts ai", "linkedin dm ai prompt" | `/starter-pack` ($9 tripwire) + `/prompt-generator` |
| `03-ghibli-prompt-cheatsheet.md` | "ghibli midjourney prompt", "ghibli style ai prompt" | `/ghibli-prompt-generator` + `/ai-image-prompt-pack` |
| `04-action-figure-prompt-cheatsheet.md` | "action figure ai prompt", "founder action figure" | `/action-figure-generator` + `/ai-image-prompt-pack` |
| `05-notion-ai-templates.md` | "notion ai templates", "notion ai prompts" | `/notion-templates-kit` ($39) + `/prompt-generator` |

All five follow the proven template. All link to different paid products for diverse revenue paths. All URLs verified HTTP 200 before inclusion.

## How to publish

**Option A — Fully autonomous (needs one-time setup):** ← preferred
1. Armando creates a GitHub Personal Access Token with `gist` scope:
   https://github.com/settings/tokens/new?scopes=gist&description=midastools-gist-automation&expiration=90
2. Sends token via Slack DM
3. Token goes in `.founder/.gh_gist_token` (already gitignored)
4. I run `./.founder/tools/publish-gist.sh --all` — publishes all 5 gists, submits each to IndexNow, logs URLs to `PUBLISHED.md`

The script is already written, tested, and waiting. jq + curl verified installed. One command away.

**Option B — Manual (5 minutes, one-time per gist):**
1. Armando opens https://gist.github.com/
2. Pastes each file's content as a new public gist (title = first `#` heading)
3. Copies the resulting URL back so I can log it

**Option C — Browser automation (agent-browser):**
Once Armando is logged in to gist.github.com in the agent-browser session, I can publish autonomously via `agent-browser`. Tried Apr 17 — session was not logged in.

## Gist filename convention

Use `.md` extension so GitHub renders markdown. Filename = short slug (e.g., `sora-alternatives.md`). Description = the H1 title. This makes the gist searchable on Google.

## Next gists to ship (once the first 3 are live)

1. **"AI Action Figure Prompts — 10 Copy-Paste Templates"** → `/action-figure-generator`
2. **"Notion AI Templates for Content Creators — 20 Free Workflows"** → `/notion-templates-kit`
3. **"Real Estate AI Prompts — Listings, Captions, Follow-ups"** → `/real-estate-kit` (paid kit with sample Gumroad URL intact)
4. **"SaaS Founder Prompt Library — 25 Prompts for Onboarding, Churn, Activation"** → `/saas-founder-kit`
5. **"AI Presentation Prompts — 15 Templates for Pitch Decks"** → `/presentation-kit`

Target cadence: 1 gist / 2 days. Each gist should rank in Google within 2-7 days (Google indexes gist.github.com fast).

## Metrics to track

- Total gists published
- Visitors from gist.github.com (target: 50+/week once 5 gists live)
- Gist stars / forks (viral signal — if any gist hits 100+ stars, double down on that topic)
- Conversion from gist → paid checkout (need UTM tracking on gist links)

## Key insight

Karpathy's "LLM Wiki" gist (posted 2 weeks ago) has 20,883 stars. Gists CAN go viral. Our existing gist proves the channel works at small scale. If even ONE of ours hits 1,000 stars, we'd see thousands of visitors — potentially our first real revenue.
