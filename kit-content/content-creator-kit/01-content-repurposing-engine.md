# Midas Tools — Content Creator AI Kit
# 01: Content Repurposing Engine

> Turn ONE piece of content into 6+ platform-ready posts in minutes.

---

## How This File Works

1. Start with the **Master Repurposing Prompt** to generate all platforms at once
2. Use the **Individual Platform Prompts** to fine-tune specific outputs
3. Replace everything in `[BRACKETS]` with your own content and details

---

## Master Repurposing Prompt

This single prompt takes one piece of content and transforms it for every major platform. Paste your source content below the prompt.

```
You are an expert content repurposing strategist. I'm going to give you a piece of source content. Your job is to transform it into platform-optimized posts for 6 different platforms.

RULES:
- Each post must feel NATIVE to the platform (not like a copy-paste)
- Adjust tone, length, and structure for each platform's culture
- Preserve the core message and key insights from the original
- Add platform-specific formatting (threads for Twitter, line breaks for LinkedIn, etc.)
- Include a call-to-action appropriate for each platform

MY BRAND CONTEXT:
- Niche: [YOUR NICHE]
- Target audience: [YOUR AUDIENCE]
- Tone of voice: [YOUR TONE — e.g., casual and witty / professional and authoritative / friendly and educational]
- Primary CTA: [WHAT YOU WANT PEOPLE TO DO — e.g., subscribe to newsletter, follow, visit website]

PLATFORMS TO CREATE FOR:
1. Twitter/X Thread (choose the best style: story, tips list, or hot take)
2. LinkedIn Post (professional, insight-driven)
3. Instagram Caption + Carousel Outline (visual-first)
4. Email Newsletter Section (for my [WEEKLY/DAILY] newsletter)
5. YouTube Video Script Outline (10-minute format)
6. Reddit Post (genuine, non-promotional, value-first)

SOURCE CONTENT:
"""
[PASTE YOUR FULL BLOG POST, VIDEO SCRIPT, PODCAST NOTES, OR ANY SOURCE CONTENT HERE]
"""

For each platform, output:
- The final post/script text, ready to publish
- A brief note on why you made the choices you did
```

---

## Individual Platform Prompts

Use these when you need to fine-tune a single platform's output.

---

### Twitter/X Thread — Story Style

```
Transform the following content into a Twitter/X thread using a story-based format.

REQUIREMENTS:
- Open with a hook tweet that creates curiosity (no hashtags in the hook)
- 6-12 tweets in the thread
- Use short sentences and line breaks within tweets
- Build tension or reveal insights progressively
- End with a takeaway tweet + CTA
- Each tweet must stand alone but also flow as a narrative
- Use "1/" numbering format

TONE: [YOUR TONE]
TARGET AUDIENCE: [YOUR AUDIENCE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

### Twitter/X Thread — Tips Style

```
Transform the following content into a Twitter/X thread using a numbered tips format.

REQUIREMENTS:
- Hook tweet: State the promise clearly (e.g., "7 [things] that [result]:")
- Each tip gets its own tweet with a bold statement + 1-2 lines of explanation
- Make each tip actionable and specific — no vague advice
- Include one contrarian or surprising tip
- End with a summary tweet + CTA to follow/save the thread
- Use "1/" numbering format

TONE: [YOUR TONE]
TARGET AUDIENCE: [YOUR AUDIENCE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

### Twitter/X Thread — Controversial Take Style

```
Transform the following content into a Twitter/X thread built around a bold, contrarian opinion.

REQUIREMENTS:
- Hook tweet: State a provocative opinion that challenges conventional wisdom
- Back it up with evidence, examples, or personal experience across 5-10 tweets
- Acknowledge the counterargument in one tweet (shows credibility)
- Drive to a nuanced conclusion that's more sophisticated than the hot take
- End with a question that invites replies
- Use "1/" numbering format

IMPORTANT: Be bold but not reckless. The take should be defensible.

TONE: [YOUR TONE]
TARGET AUDIENCE: [YOUR AUDIENCE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

### LinkedIn Post

```
Transform the following content into a LinkedIn post optimized for engagement.

REQUIREMENTS:
- Start with a strong hook line (1 sentence that stops the scroll)
- Use short paragraphs (1-2 sentences each)
- Add line breaks between paragraphs for mobile readability
- Include a personal angle or professional experience
- Use a "insight → story → lesson → CTA" structure
- Keep under 1,300 characters for optimal reach (before "see more" cutoff)
- End with a question to drive comments OR a clear CTA
- Do NOT use hashtags in the body — add 3-5 at the very end
- Do NOT use emojis in every line — use sparingly if at all

TONE: Professional but human. Like you're talking to a smart colleague over coffee.
MY ROLE/TITLE: [YOUR ROLE]
MY INDUSTRY: [YOUR INDUSTRY]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

### Instagram Caption + Carousel Outline

```
Transform the following content into two things:

PART 1: INSTAGRAM CAPTION
- Open with a hook (first line is everything — it appears before "more")
- Keep the caption between 100-300 words
- Use a conversational tone
- Break into short paragraphs
- End with a CTA (save, share, comment, or link in bio)
- Add 20-30 relevant hashtags grouped at the end (mix of large, medium, and niche)

PART 2: CAROUSEL SLIDE OUTLINE (for a 7-10 slide carousel post)
- Slide 1: Cover slide — headline that hooks (keep to 6-8 words max)
- Slide 2-8: One key point per slide with a short supporting line
- Slide 9: Summary or key takeaway
- Slide 10: CTA slide (follow for more, save this post, link in bio)
- For each slide, provide: HEADLINE (big text) + BODY (small supporting text, max 15 words)

DESIGN NOTE: Keep slide text minimal. This is for a visual platform.

TOPIC: [YOUR TOPIC]
TARGET AUDIENCE: [YOUR AUDIENCE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

### Email Newsletter

```
Transform the following content into a section for my email newsletter.

NEWSLETTER DETAILS:
- Newsletter name: [YOUR NEWSLETTER NAME]
- Frequency: [DAILY/WEEKLY/BIWEEKLY]
- Style: [e.g., casual roundup / deep-dive essay / curated links with commentary]
- Typical length: [e.g., 500-800 words]

REQUIREMENTS:
- Write a compelling subject line (under 50 characters, creates curiosity)
- Write a preview text line (the snippet that shows in inbox, under 90 characters)
- Open with a personal hook — NOT a summary of what the email contains
- Break content into scannable sections with bold headers
- Include 1-2 specific, actionable takeaways the reader can use immediately
- Close with a CTA (reply, share, click a link, etc.)
- Write like you're emailing one person, not broadcasting to a list

TONE: [YOUR TONE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

### YouTube Video Script Outline

```
Transform the following content into a YouTube video script outline for a [10/15]-minute video.

REQUIREMENTS:
- HOOK (0:00-0:30): Open with a question, bold claim, or surprising stat that creates a reason to keep watching. State what the viewer will learn.
- INTRO (0:30-1:30): Brief context. Establish credibility. Tell them why this matters NOW.
- BODY (1:30-[8:00/12:00]): Break into 3-5 main sections. For each section provide:
  - Section title
  - Key talking points (bullet format)
  - Transition sentence to next section
  - [Optional] B-roll or visual suggestions
- CTA MID-ROLL ([6:00/9:00]): Natural break to ask for likes/subs (tie it to the content)
- CONCLUSION ([8:00/12:00]-[10:00/15:00]): Recap key points. Deliver the main takeaway. Tease the next video or related content. Final CTA.

CHANNEL CONTEXT:
- Channel niche: [YOUR NICHE]
- Audience level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Tone: [YOUR TONE]

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

### Reddit Post

```
Transform the following content into a Reddit post for the subreddit r/[SUBREDDIT].

REQUIREMENTS:
- Title: Clear, specific, and non-clickbaity. Reddit users distrust hype.
- Body: Lead with value. Share the insight, how-to, or story FIRST.
- Write in first person. Be genuine and specific.
- Include real details, numbers, or examples — Reddit rewards specificity.
- Do NOT promote yourself in the body. If there's a relevant link, mention it naturally at the end with context: "I wrote more about this at [link] if anyone's interested."
- Format with Reddit markdown: headers (##), bold (**), bullet points (-)
- Keep between 300-800 words (long enough to be substantial, short enough to hold attention)
- End with a question to invite discussion

SUBREDDIT CULTURE: r/[SUBREDDIT] values [describe the subreddit's culture — e.g., practical advice, raw honesty, data-driven posts]

TONE: Authentic and direct. No marketing speak.

SOURCE CONTENT:
"""
[PASTE CONTENT]
"""
```

---

## Repurposing Workflow

For maximum efficiency, follow this order:

```
1. Create your LONG-FORM content first (blog post, video, podcast)
         ↓
2. Run the MASTER REPURPOSING PROMPT to get all 6 platform drafts
         ↓
3. Fine-tune 1-2 platforms using the INDIVIDUAL PROMPTS above
         ↓
4. Schedule everything using your content calendar (see File 05)
         ↓
5. Track which platforms drive the most engagement
         ↓
6. Double down on what works, drop what doesn't
```

---

## Pro Tips

- **Batch your repurposing.** Do all platforms for one piece of content in a single AI session so the tone stays consistent.
- **Adjust the CTA per platform.** Twitter → follow. Instagram → save. LinkedIn → comment. Newsletter → reply. Don't use the same CTA everywhere.
- **Time-shift your publishing.** You don't have to post everywhere on the same day. Spread repurposed content across the week for a steady presence.
- **Add platform-native elements.** Polls on Twitter, document posts on LinkedIn, Reels on Instagram. The AI gives you the text — you add the format.

---

**Midas Tools — Content Creator AI Kit**
One piece of content. Every platform. Zero excuses.
