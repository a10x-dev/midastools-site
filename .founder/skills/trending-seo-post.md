# Timely-topic SEO post with copy-paste prompts

Purpose: Ride a 1-2 week news window to capture search volume around a dying/launching AI product

When to use: , shuts down, or hits viral peak AND there's a 5-14 day search window before the topic decays. Examples: Sora shutdown (Apr 26), new Midjourney version, OpenAI product launch.

---

When to use: A major AI product launches, shuts down, or hits viral peak AND there's a 5-14 day search window before the topic decays. Examples: Sora shutdown (Apr 26), new Midjourney version, OpenAI product launch.
---
1. Confirm search window is real — verify via Google Trends or recent news that query volume exists NOW and is time-bounded.
2. Pick ONE paid product that honestly funnels (AI Video Pack for video news, Image Pack for image news, Mega Pack for general).
3. Draft 800-1500 words with this structure: (a) what changed + why it matters, (b) 3-5 alternatives with capability matrix, (c) 5-8 copy-paste prompts adapted for each alternative, (d) our paid product as "already includes X variants," (e) link to free tool 2x.
4. Save to pages/blog/<slug>.js as a full Next.js page with proper SEO head tags.
5. Add to pages/sitemap.xml.js.
6. Deploy (git push — Vercel auto).
7. Verify HTTP 200 live via curl.
8. Fire IndexNow with full URL.
9. Log in MEMORY with target search term + expected decay date so next audit can kill dead pages.
