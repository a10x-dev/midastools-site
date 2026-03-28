import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const SOCIAL_MEDIA_KIT_URL = 'https://buy.stripe.com/6oU5kC6SbdLj4CwegicMM0k';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AISocialMediaPrompts2026() {
  const title = '20 AI Prompts That Will Transform Your Social Media in 2026';
  const description = '20 copy-paste AI prompts for social media management in 2026. Content calendars, captions, viral formulas, analytics, community management, and paid ad copy for Instagram, TikTok, LinkedIn, and X/Twitter.';
  const url = 'https://www.midastools.co/blog/ai-social-media-prompts-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can AI really manage my social media accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI does not replace you — it accelerates you. AI tools like ChatGPT and Claude can generate content calendars, write captions, brainstorm viral hooks, analyze competitors, and draft ad copy in minutes instead of hours. You still provide the brand voice, strategy, and final approval. Think of AI as a tireless content assistant that never runs out of ideas. Social media managers using AI prompts report saving 10-15 hours per week on content creation alone.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which AI tool is best for social media content creation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (GPT-4o) and Claude are the top choices for social media content in 2026. ChatGPT excels at structured outputs like content calendars and ad copy variations. Claude produces more natural, conversational captions that avoid the "AI voice." Both work with every prompt in this guide. For visual content, pair them with Midjourney or DALL-E for images and Sora or Runway for video concepts. The prompts in this guide are platform-agnostic — they work with any LLM.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will AI-generated social media content hurt my engagement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Only if you use it lazily. Posting raw, unedited AI output will sound generic and hurt engagement. The key is using AI as a starting point, then adding your brand voice, personal stories, and authentic perspective. The prompts in this guide are designed to produce platform-native content that sounds human — they include instructions for tone, format, and platform-specific best practices. Brands using well-prompted AI content actually see higher engagement because they can post more consistently and test more variations.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I make AI-generated captions sound like my brand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Include a brand voice description in every prompt. Specify your tone (casual, professional, witty, bold), words you always use, words you never use, your audience demographic, and 2-3 examples of captions you have posted that performed well. The more context you give the AI about your brand personality, the more on-brand the output. Several prompts in this guide include [BRAND VOICE] placeholders specifically for this purpose. Over time, you can create a "brand voice document" to paste into every prompt.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use these prompts for client social media accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. These prompts are designed with customizable brackets so you can swap in any brand, niche, audience, or platform. Freelancers and agencies use AI prompts across all their client accounts — just customize the brand voice, target audience, and industry for each client. The Social Media Kit includes 150+ prompts specifically built for multi-client workflows, with templates for onboarding new clients, maintaining consistent brand voices, and scaling content production across accounts.'
        }
      }
    ]
  };

  const promptBlockStyle = {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    marginBottom: '24px'
  };

  const ctaBoxStyle = {
    marginTop: '32px',
    marginBottom: '32px',
    padding: '24px',
    background: '#F0F4FF',
    border: '1px solid #93B4FF',
    borderRadius: '8px',
    textAlign: 'center'
  };

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI social media prompts, social media content calendar AI, ChatGPT social media, AI captions, social media automation AI, AI Instagram captions, TikTok AI prompts, LinkedIn AI content, social media manager AI tools, AI content calendar generator" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          20 AI Prompts That Will Transform Your Social Media in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 26, 2026 &middot; Rey Midas</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>Social media management in 2026 is a relentless treadmill. <strong>The average social media manager spends 6+ hours per day</strong> creating content, writing captions, responding to comments, analyzing metrics, and planning what to post next. Multiply that across Instagram, TikTok, LinkedIn, X/Twitter, and YouTube, and you have a full-time job that somehow still feels like you are falling behind.</p>

        <p>Meanwhile, the algorithm rewards consistency. Miss a few days and your reach craters. Post generic content and engagement flatlines. The platforms want daily, platform-native content &mdash; and they punish anyone who cannot keep up.</p>

        <p>This is where AI changes everything. Not by replacing you, but by eliminating the blank-page problem. With the right prompts, you can generate a full month of content ideas in 15 minutes, write platform-specific captions in seconds, build viral content frameworks, and even draft entire paid ad campaigns.</p>

        <p>The key word is <strong>&ldquo;right prompts.&rdquo;</strong> Typing &ldquo;write me some Instagram captions&rdquo; into ChatGPT produces forgettable, generic output that sounds like every other AI-generated post. The 20 prompts below are different. They are specific, framework-driven, and designed for each platform&rsquo;s unique algorithm and audience behavior.</p>

        <p>Every prompt includes <strong>[BRACKET PLACEHOLDERS]</strong> where you fill in your details. Copy the prompt, replace the brackets, paste into ChatGPT, Claude, or <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>our free prompt generator</Link>, and get content you can actually use.</p>

        <p>Let us get into it.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: WHY AI IS CHANGING SOCIAL MEDIA  */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why AI Is Changing Social Media Management</h2>

        <p>Before we dive into the prompts, here are the numbers that explain why AI-powered social media is no longer optional:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Social media managers using AI save 10&ndash;15 hours per week</strong> on content creation, according to a 2026 HubSpot survey of 3,200+ marketers.</li>
          <li><strong>Brands posting consistently (5+ times/week) see 3.5x more engagement</strong> than those posting 2&ndash;3 times per week (Sprout Social, 2026).</li>
          <li><strong>72% of top-performing social media teams</strong> now use AI tools for content ideation, caption writing, or analytics (Hootsuite State of Social 2026).</li>
          <li><strong>AI-assisted content calendars reduce planning time by 80%</strong> &mdash; from 8 hours per month to under 90 minutes.</li>
          <li><strong>Accounts that A/B test captions</strong> (easy with AI-generated variations) see <strong>27% higher engagement rates</strong> on average.</li>
          <li>The global social media management market hit <strong>$28.6 billion in 2026</strong>, and AI tools are the fastest-growing segment.</li>
        </ul>

        <p>The social media managers who are winning right now are not necessarily more creative than you. They have <strong>systems</strong>. They use AI to handle the repetitive parts &mdash; brainstorming, first drafts, variations, scheduling suggestions &mdash; so they can focus on strategy, community building, and the creative work that actually requires a human brain.</p>

        <p>That is what these prompts give you: a system. Not a replacement for your creativity, but a force multiplier for it.</p>

        <p>For a deeper understanding of how to write effective AI prompts in general, start with our <Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>Complete Prompt Engineering Guide for 2026</Link>.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: CONTENT CALENDAR PROMPTS          */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>5 Content Calendar &amp; Planning Prompts</h2>
        <p>The foundation of consistent social media is a content calendar. These prompts generate complete, platform-specific calendars you can execute immediately. No more staring at a blank spreadsheet on Monday morning.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The 30-Day Multi-Platform Content Calendar</h3>
        <p><strong>Best for:</strong> Instagram, TikTok, LinkedIn, X/Twitter</p>
        <p>This is the single most valuable prompt for any social media manager. It generates a full month of content across every platform, with specific post types, themes, and timing.</p>
        <div style={promptBlockStyle}>
{`I manage social media for [BRAND/BUSINESS NAME] in the [INDUSTRY/NICHE] space. Our target audience is [DESCRIBE AUDIENCE: age, interests, pain points]. Our brand voice is [DESCRIBE TONE: casual/professional/witty/bold/educational].

Create a 30-day content calendar covering these platforms:
- Instagram: 5 posts/week (2 carousels, 1 Reel, 1 static image, 1 Stories series)
- TikTok: 4 videos/week
- LinkedIn: 3 posts/week (1 article/long-form, 1 carousel, 1 text post)
- X/Twitter: 5 posts/week (mix of threads, single tweets, and quote tweets)

For each post, provide:
| Day | Platform | Format | Topic/Hook | Caption Preview (first 2 lines) | Hashtags | Best Time to Post |

Organize the calendar around these 4 weekly content pillars:
- Week 1: [PILLAR 1, e.g., "Educational/How-to content"]
- Week 2: [PILLAR 2, e.g., "Behind-the-scenes/Personal brand"]
- Week 3: [PILLAR 3, e.g., "Social proof/Testimonials/Results"]
- Week 4: [PILLAR 4, e.g., "Promotional/Launch content"]

Include 2 trending audio/format suggestions per week for Reels and TikTok. Flag which posts can be repurposed across platforms.`}
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. The Content Batch Creation Workflow</h3>
        <p><strong>Best for:</strong> All platforms &mdash; designed for batch content production days</p>
        <p>Instead of creating content daily, this prompt sets up a batch workflow where you produce an entire week of content in one sitting.</p>
        <div style={promptBlockStyle}>
{`I want to batch-create one full week of social media content in a single 3-hour session for [BRAND NAME]. My niche is [NICHE] and my audience is [AUDIENCE DESCRIPTION].

Design a batch creation workflow:

STEP 1 — Content Briefs (30 min):
Generate 15 content ideas for the week across [PLATFORMS]. For each idea, provide:
- Platform and format (Reel, carousel, text post, thread, Story)
- Working title/hook
- Key message in one sentence
- Visual direction (what the image/video should show)
- CTA for the post

STEP 2 — Caption Bank (60 min):
Write complete captions for all 15 pieces. Each caption should:
- Open with a scroll-stopping hook (pattern interrupt, bold claim, or question)
- Use platform-appropriate length (Instagram: 150-300 words, TikTok: 50-100, LinkedIn: 200-400, X: under 280 characters)
- Include a clear CTA (save, share, comment, click link)
- End with 3-5 relevant hashtags per platform

STEP 3 — Visual Briefs (30 min):
For each piece, provide a brief I can hand to a designer or use with Canva/AI image tools:
- Dimensions (platform-specific)
- Text overlay copy (if applicable)
- Color palette suggestion matching [BRAND COLORS]
- Reference style (minimal, bold, meme, editorial)

STEP 4 — Scheduling Guide (15 min):
Optimal posting times for each platform based on [TIMEZONE] and [AUDIENCE LOCATION].`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. The Content Repurposing Engine</h3>
        <p><strong>Best for:</strong> Turning one piece of content into 8&ndash;10 platform-specific posts</p>
        <p>One podcast episode, blog post, or video can fuel an entire week of social content. This prompt maximizes every piece of content you create.</p>
        <div style={promptBlockStyle}>
{`I have a [CONTENT TYPE: blog post / podcast episode / YouTube video / webinar] about [TOPIC]. Here is the content:

[PASTE THE FULL TEXT, TRANSCRIPT, OR KEY POINTS]

Repurpose this into social media content for every major platform:

1. Instagram carousel (8-10 slides): Extract the key takeaways into a visual carousel format. Provide slide-by-slide text with a hook on slide 1 and CTA on the final slide.

2. Instagram Reel script (30-60 seconds): Write a script with a hook in the first 3 seconds, 3 key points, and a CTA. Include text overlay suggestions and trending audio style recommendation.

3. TikTok video script (15-45 seconds): Reformat for TikTok's faster pace. Hook must land in 1 second. Include on-screen text suggestions.

4. LinkedIn long-form post: Write a 200-400 word post that tells a story, shares a lesson, and invites discussion. Open with a bold first line. No hashtags in the body — add 3-5 at the end.

5. X/Twitter thread (7-10 tweets): Break the content into a compelling thread. Tweet 1 must hook. Each tweet should stand alone but build on the last. End with a CTA tweet.

6. X/Twitter single tweet: Distill the entire piece into one punchy tweet under 280 characters.

7. Instagram/Facebook Story sequence (5-7 slides): Casual, conversational slides with polls and questions to drive engagement.

8. Email newsletter teaser (3 sentences): A preview that drives clicks to the full content.

For each piece, specify which audience segment it targets and which metrics to track.`}
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. The Weekly Content Theme Generator</h3>
        <p><strong>Best for:</strong> All platforms &mdash; solving the &ldquo;what do I post about?&rdquo; problem</p>
        <div style={promptBlockStyle}>
{`I run social media for [BRAND/NICHE]. My audience is [AUDIENCE DESCRIPTION]. I need recurring weekly content themes that I can use indefinitely without running out of ideas.

Create 7 weekly content themes (one per day) with:
- Theme name (e.g., "Myth-Buster Monday," "Tutorial Tuesday")
- Content format that works best for this theme on [PRIMARY PLATFORM]
- 10 specific topic ideas for each theme in my niche
- Caption framework/template for each theme (fill-in-the-blank style)
- Which platforms each theme performs best on

Requirements:
- Mix educational (40%), entertaining (30%), and promotional (20%) content, plus 10% community/engagement posts
- Each theme should be flexible enough to work for 52+ weeks without repeating
- Include at least 2 themes that encourage user-generated content or audience participation
- Themes should align with [BUSINESS GOAL: brand awareness / lead generation / product sales / community building]`}
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. The Content Gap Analyzer</h3>
        <p><strong>Best for:</strong> All platforms &mdash; finding untapped content opportunities in your niche</p>
        <div style={promptBlockStyle}>
{`I'm in the [NICHE/INDUSTRY] space on [PLATFORMS]. My competitors are [LIST 3-5 COMPETITOR ACCOUNTS].

Analyze the typical content in my niche and identify gaps I can fill:

1. OVERPLAYED TOPICS: What content does everyone in [NICHE] post that audiences are tired of? List 10 overused topics or formats I should avoid or reinvent.

2. UNDERSERVED TOPICS: What questions does my target audience ([AUDIENCE DESCRIPTION]) have that nobody in my niche is answering on social media? List 15 specific content ideas.

3. FORMAT GAPS: What content formats are underused in my niche? (e.g., if everyone does static posts, maybe carousels or Reels are an opportunity). List 5 format opportunities.

4. PLATFORM GAPS: Which platform is most underserved for [NICHE] content? Where is there demand but low supply?

5. TIMING GAPS: Are there days/times when my competitors do not post but audience activity is high?

For each gap identified, provide a specific content idea with a working title, format, platform, and hook.`}
        </div>

        {/* CTA AFTER CALENDAR SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 150+ social media prompts with every template built out?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <Link href="/social-media-kit" style={{ color: '#3B5FFF' }}>AI Social Media Kit</Link> includes content calendars, caption templates, viral formulas, analytics frameworks, community management scripts, and paid ad copy for every major platform. Copy, paste, post.</p>
          <a href={SOCIAL_MEDIA_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Social Media Kit &mdash; $39
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: CAPTION & HOOK PROMPTS            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>4 Caption &amp; Hook Prompts</h2>
        <p>Captions make or break your posts. The first line determines whether someone keeps reading or keeps scrolling. These prompts generate platform-specific captions with hooks designed for each algorithm.</p>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. The Instagram Caption Machine</h3>
        <p><strong>Best for:</strong> Instagram feed posts, carousels, and Reels captions</p>
        <p>Instagram rewards saves and shares more than likes. This prompt generates captions engineered for those high-value engagement signals.</p>
        <div style={promptBlockStyle}>
{`Write 5 Instagram caption variations for a post about [TOPIC] for my [NICHE] account targeting [AUDIENCE].

My brand voice is [DESCRIBE: e.g., "casual and encouraging, like a smart friend giving advice"].

For each caption variation, use a different hook formula:
1. Bold controversial opinion: Start with a statement that challenges conventional wisdom
2. Number + curiosity gap: "X things about [TOPIC] that nobody talks about"
3. Story hook: Start with "I used to..." or "Last week I..." — a personal micro-story
4. Direct question: Ask something that makes the reader pause and think
5. Before/after: Contrast the old way vs. the new way

Each caption should:
- Be 150-300 words (Instagram's sweet spot for engagement)
- Include a "save-worthy" tip, framework, or insight people will want to reference later
- End with a clear CTA (question to drive comments, "save this for later," "share with someone who needs this")
- Include a line break after the hook (the "read more" line is critical)
- Add 20-30 hashtags organized: 10 small (<50K posts), 10 medium (50K-500K), 10 large (500K+)

Also provide:
- Alt text for accessibility
- Suggested posting time for [TIMEZONE]
- One idea for a companion Story sequence that drives traffic to this post`}
        </div>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. The TikTok Script Generator</h3>
        <p><strong>Best for:</strong> TikTok, Instagram Reels, YouTube Shorts</p>
        <p>Short-form video lives or dies in the first second. This prompt generates scripts optimized for retention &mdash; the metric that matters most to the TikTok algorithm.</p>
        <div style={promptBlockStyle}>
{`Write 3 TikTok video scripts about [TOPIC] for my [NICHE] account. Target audience: [AUDIENCE DESCRIPTION].

Each script should follow this structure:

HOOK (0-3 seconds): The first thing the viewer sees/hears. Must create instant curiosity or pattern interrupt. Write the exact words to say AND the text overlay.

BODY (3-25 seconds): Deliver the value. Use the format: [CHOOSE: storytime / list / tutorial / myth-bust / before-after / POV]. Keep sentences short. One idea per beat.

PAYOFF (25-35 seconds): The "aha moment" or unexpected twist that makes people rewatch or share.

CTA (35-40 seconds): What should viewers do? (Follow for more, comment their answer, share with a friend, save for later)

For each script provide:
- Estimated video length
- Text overlay suggestions (exact text, timing, position)
- Trending audio style recommendation (e.g., "trending storytelling audio," "original audio with voiceover," "viral sound remix")
- 5 hashtags including 2 niche-specific and 1 trending
- Caption for the post (under 100 characters, with a hook that complements the video)
- Why this format works for TikTok's algorithm (retention, shares, or comments)

Script 1: Educational / "Did you know" format
Script 2: Storytelling / personal experience format
Script 3: Trend-jacking / current trend adaptation format`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. The LinkedIn Authority Post Writer</h3>
        <p><strong>Best for:</strong> LinkedIn &mdash; the platform where thought leadership drives leads</p>
        <p>LinkedIn rewards long-form text posts that generate comments and dwell time. This prompt generates posts that position you as an authority in your field.</p>
        <div style={promptBlockStyle}>
{`Write 3 LinkedIn post variations about [TOPIC] for my profile. I am a [YOUR ROLE/TITLE] in [INDUSTRY] targeting [AUDIENCE: e.g., "B2B SaaS founders and marketing leaders"].

My LinkedIn brand voice is [DESCRIBE: e.g., "direct, data-driven, occasionally contrarian. I share real numbers and lessons from experience, not motivational fluff"].

Each post should follow a different LinkedIn-proven format:

POST 1 — The "Unpopular Opinion" post:
- Open with a bold, contrarian take on [TOPIC]
- Back it up with a personal experience or data point
- Explain what most people get wrong and what to do instead
- End with a question that invites debate
- 200-350 words, short paragraphs (1-2 sentences each), lots of white space

POST 2 — The "Here's what I learned" story post:
- Open with a specific moment in time ("In 2024, I..." or "Last month, a client...")
- Share the challenge, what you tried, what happened
- Extract 3-5 lessons or takeaways as a numbered list
- End with "What would you have done differently?" or similar engagement question
- 250-400 words

POST 3 — The "Framework/System" post:
- Open with the problem your framework solves
- Share your framework as a step-by-step process (3-7 steps)
- Include one specific example of it working
- End with "Save this for next time you need to [solve this problem]"
- 200-300 words, use bullet points and numbered lists

For all posts:
- No hashtags in the body text (add 3-5 at the very end)
- No emojis in every line (1-2 max per post, or none)
- First line MUST hook — it shows in the feed preview before "see more"
- Mention specific numbers, tools, or results wherever possible`}
        </div>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. The X/Twitter Thread Architect</h3>
        <p><strong>Best for:</strong> X/Twitter &mdash; threads consistently outperform single tweets for reach and followers</p>
        <div style={promptBlockStyle}>
{`Write an X/Twitter thread about [TOPIC] for my account in the [NICHE] space. My audience is [AUDIENCE DESCRIPTION]. My tone on X is [DESCRIBE: e.g., "sharp, concise, slightly irreverent, heavy on practical advice"].

Thread structure (10-12 tweets):

Tweet 1 (THE HOOK): Must be a standalone banger. Bold claim, surprising stat, or contrarian take. Include "🧵" or "Thread:" to signal there's more. Must make someone stop scrolling and click.

Tweets 2-9 (THE VALUE): Each tweet delivers one idea, one tactic, or one example. Rules:
- Each tweet must make sense on its own (people will see retweets of individual tweets)
- Use numbers, stats, and specifics — no vague advice
- Include at least 2 tweets with real-world examples or mini case studies
- Vary tweet length (some punchy one-liners, some that use the full 280 characters)
- No filler tweets ("let's continue" or "here's the next one")

Tweet 10 (THE SUMMARY): Recap the key takeaways in a scannable list

Tweet 11 (THE CTA): "If you found this useful, [follow/retweet/bookmark]. I write about [TOPIC] every [frequency]."

Tweet 12 (THE PLUG): Soft plug for [YOUR PRODUCT/SERVICE/NEWSLETTER] — value-first, not salesy.

Also provide:
- 3 standalone tweet variations I can post separately to promote the thread
- Best time to post the thread for maximum reach in [TIMEZONE]
- A quote-tweet I can post 24 hours later to resurface the thread`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: VIRAL CONTENT FORMULAS            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>3 Viral Content Formula Prompts</h2>
        <p>Virality is not random. It follows patterns. These prompts reverse-engineer the frameworks behind viral content and apply them to your niche. For more advanced prompting techniques, see our <Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks</Link>.</p>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. The Trend-Jacking Framework</h3>
        <p><strong>Best for:</strong> TikTok, Instagram Reels, X/Twitter &mdash; any platform where trends drive discovery</p>
        <div style={promptBlockStyle}>
{`I need to trend-jack current social media trends for my [NICHE] brand targeting [AUDIENCE] on [PLATFORM].

Here are 3 trends I've noticed are popular right now:
- Trend 1: [DESCRIBE THE TREND: format, audio, concept]
- Trend 2: [DESCRIBE THE TREND]
- Trend 3: [DESCRIBE THE TREND]

For each trend, generate:

1. NICHE ADAPTATION: How to adapt this trend for [NICHE] while keeping the core format that makes it work. Be specific — what does my version look like, say, and sound like?

2. SCRIPT/CAPTION: The complete caption or video script for my adaptation. Include text overlays, timing, and audio suggestions.

3. HOOK VARIATION: 3 different hooks I can test (for A/B testing). Each hook should approach the trend from a different angle.

4. TIMING WINDOW: Is this trend rising, peaking, or declining? Should I post today, or is there still time?

5. ORIGINALITY LAYER: What twist can I add that nobody else in [NICHE] is doing? The goal is to ride the trend while standing out from the 10,000 other people doing the same trend.

6. CROSS-PLATFORM ADAPTATION: How to post this trend on 2 additional platforms (with format changes for each).

Important: The adaptation must feel natural for my brand, not forced. If a trend doesn't fit [NICHE], say so and suggest an alternative trend that would work better.`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. The Carousel Post Blueprint</h3>
        <p><strong>Best for:</strong> Instagram, LinkedIn &mdash; carousels consistently get the highest save rates and shares</p>
        <div style={promptBlockStyle}>
{`Create a high-performing carousel post about [TOPIC] for [PLATFORM] in the [NICHE] space.

Target audience: [AUDIENCE DESCRIPTION]
Goal: [SAVES / SHARES / FOLLOWS / LINK CLICKS]
Brand voice: [DESCRIBE TONE]

Generate a 10-slide carousel with the exact text for each slide:

SLIDE 1 (COVER/HOOK): A bold headline that creates a curiosity gap. This is the thumbnail — it must stop the scroll. Use large, bold text. Format: "[NUMBER] [THINGS] That [PROMISE]" or "[CONTROVERSIAL STATEMENT]" or "Stop [DOING THIS]."

SLIDES 2-8 (VALUE): Each slide covers one point. For each:
- Slide headline (5-8 words, bold)
- Supporting text (1-3 sentences, clear and specific)
- Optional: icon or visual suggestion
- Each slide should deliver immediate value even if the person doesn't read the other slides

SLIDE 9 (SUMMARY): Recap all points in a scannable list

SLIDE 10 (CTA): What should the viewer do? Include: "Save this for later," "Follow @[HANDLE] for more [TOPIC] tips," and a soft plug for [YOUR OFFER/LINK].

Also provide:
- The full caption for this carousel (150-250 words with a hook, context, and CTA)
- 20 hashtags (mix of small, medium, large)
- Alt text for accessibility
- A/B test suggestion: one alternative cover slide headline to test against the original`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. The Shareable Content Formula Generator</h3>
        <p><strong>Best for:</strong> All platforms &mdash; content engineered for shares, the most valuable engagement metric</p>
        <div style={promptBlockStyle}>
{`I want to create content that gets shared, not just liked. My niche is [NICHE] and my audience is [AUDIENCE DESCRIPTION] on [PLATFORM].

People share content for 5 psychological reasons: identity (it says something about who they are), utility (it helps someone they know), emotion (it made them feel something strong), social currency (it makes them look smart/funny/informed), and tribalism (it represents their group/values).

Generate 10 content ideas — 2 for each sharing trigger:

IDENTITY (2 posts):
- Content that makes [AUDIENCE] think "this is SO me" and share to their story/feed

UTILITY (2 posts):
- Content so useful that people tag friends who need to see it or save it for later

EMOTION (2 posts):
- Content that triggers a strong emotional response (inspiration, nostalgia, surprise, or outrage)

SOCIAL CURRENCY (2 posts):
- Content that makes the sharer look knowledgeable, ahead of the curve, or in-the-know

TRIBALISM (2 posts):
- Content that speaks to the shared identity of [AUDIENCE] and makes them feel seen

For each idea, provide:
- Content format (Reel, carousel, text post, meme, thread)
- The hook/headline
- Full caption or script
- Why this specific format triggers the sharing instinct
- Predicted engagement pattern (shares vs. saves vs. comments)`}
        </div>

        {/* CTA MID-ARTICLE */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>These 20 prompts are just the beginning.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The full <Link href="/social-media-kit" style={{ color: '#3B5FFF' }}>AI Social Media Kit</Link> includes 150+ prompts covering content calendars, caption banks, viral formulas, analytics, community management, and paid ad templates for every major platform.</p>
          <a href={SOCIAL_MEDIA_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Social Media Kit &mdash; $39
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: ANALYTICS & GROWTH PROMPTS        */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>3 Analytics &amp; Growth Prompts</h2>
        <p>Posting content without analyzing what works is like throwing darts blindfolded. These prompts turn your metrics into actionable strategy.</p>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. The Performance Audit and Strategy Pivot</h3>
        <p><strong>Best for:</strong> All platforms &mdash; monthly or quarterly performance reviews</p>
        <div style={promptBlockStyle}>
{`I need to audit my social media performance and build a data-driven strategy for the next 30 days.

Platform: [PLATFORM]
Account: [HANDLE/DESCRIPTION]
Niche: [NICHE]
Current followers: [NUMBER]
Goal: [SPECIFIC GOAL: e.g., "grow from 5K to 10K followers" or "increase engagement rate from 2% to 4%" or "drive 500 link clicks to my product page"]

Here are my last 20 posts with their metrics:
[PASTE YOUR ANALYTICS — for each post include: date, format, topic, likes, comments, shares, saves, reach, impressions]

Analyze the data and provide:

1. TOP PERFORMERS: Which 3 posts performed best? What do they have in common (format, topic, hook type, posting time, caption length)?

2. WORST PERFORMERS: Which 3 posts underperformed? What went wrong? Be specific.

3. PATTERN ANALYSIS: What patterns emerge across format, topic, posting time, caption length, and hashtag use?

4. ENGAGEMENT RATE BREAKDOWN: Calculate my average engagement rate. How does it compare to the [NICHE] average on [PLATFORM]?

5. CONTENT MIX RECOMMENDATION: Based on the data, what percentage split should I use for content types (educational, entertaining, promotional, community)?

6. 30-DAY ACTION PLAN: Give me 5 specific, data-backed changes to make in the next 30 days. Each action should include what to do, why (based on the data), and how to measure if it's working.

7. POSTS TO CREATE THIS WEEK: Based on the analysis, generate 5 specific post ideas that mirror what's working and fix what's not.`}
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. The Competitor Intelligence Report</h3>
        <p><strong>Best for:</strong> All platforms &mdash; understanding what works in your space before you reinvent the wheel</p>
        <div style={promptBlockStyle}>
{`I want to analyze my competitors' social media strategy on [PLATFORM] in the [NICHE] space.

My account: [YOUR HANDLE] ([FOLLOWER COUNT])
Competitor 1: [HANDLE] ([FOLLOWER COUNT])
Competitor 2: [HANDLE] ([FOLLOWER COUNT])
Competitor 3: [HANDLE] ([FOLLOWER COUNT])

For each competitor, analyze:

1. CONTENT STRATEGY: What types of content do they post most? (carousels, Reels, text, memes, tutorials, etc.) What's their posting frequency?

2. TOP-PERFORMING CONTENT: Based on visible engagement (likes, comments), what are their 3 best-performing post types? What makes these work?

3. HOOK PATTERNS: What caption hooks and formats do they use repeatedly? List the specific formulas.

4. ENGAGEMENT TACTICS: How do they drive comments? (questions, controversial takes, giveaways, polls) How do they respond to comments?

5. MONETIZATION: How do they sell? (link in bio, Stories, direct CTAs, subtle mentions) How often?

6. GAPS AND WEAKNESSES: What are they NOT doing that I could do better? Topics they ignore? Formats they don't use? Audience segments they miss?

Now create MY competitive strategy:
- 10 content ideas that are inspired by what's working for competitors but differentiated for my brand
- 3 positioning angles that set me apart from all 3 competitors
- A posting schedule that targets time slots where competitors are least active
- The #1 opportunity where I can own a topic or format nobody else in [NICHE] is doing well`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. The Audience Growth Accelerator</h3>
        <p><strong>Best for:</strong> All platforms &mdash; systematic follower growth without gimmicks</p>
        <div style={promptBlockStyle}>
{`I want to grow my [PLATFORM] account from [CURRENT FOLLOWERS] to [TARGET FOLLOWERS] in [TIMEFRAME, e.g., "90 days"].

My niche: [NICHE]
My audience: [AUDIENCE DESCRIPTION]
My current posting frequency: [X posts/week]
My top-performing content type: [DESCRIBE]
My weakest area: [DESCRIBE, e.g., "Reels" or "engagement" or "reach"]

Build a growth strategy with:

1. CONTENT STRATEGY: What to post, how often, and in what format. Be specific — not "post more Reels" but "post 4 Reels/week using the hook-value-CTA format, targeting [TOPIC CLUSTERS]."

2. ENGAGEMENT STRATEGY: Daily engagement routine (how many minutes, where to engage, what to say). Include: comment strategy on larger accounts in my niche, collaboration/duet/stitch opportunities, and community building tactics.

3. HASHTAG STRATEGY: A tiered hashtag strategy — small hashtags to rank in, medium hashtags for discoverability, and large hashtags for reach. Provide 30 hashtags organized by tier for my niche.

4. ALGORITHM OPTIMIZATION: Platform-specific tactics for [PLATFORM]'s current algorithm. What signals to optimize for (watch time, saves, shares, comments, profile visits)?

5. COLLABORATION PLAN: 5 types of collaborations that drive follower growth (account takeovers, joint Lives, carousel swaps, challenge co-creation, etc.). Include outreach message templates.

6. WEEKLY MILESTONES: Break the goal into weekly targets with specific KPIs. What does "on track" look like at week 2, 4, 8, and 12?

7. WHAT TO STOP DOING: 5 things I should stop doing immediately that are likely hurting my growth.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 6: COMMUNITY & DM PROMPTS            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>3 Community Management &amp; DM Prompts</h2>
        <p>Content gets you followers. Community keeps them. These prompts build the systems for managing comments, DMs, and community engagement at scale.</p>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>16. The Comment Response Library</h3>
        <p><strong>Best for:</strong> All platforms &mdash; turning comments into conversations and followers into fans</p>
        <div style={promptBlockStyle}>
{`I need a comment response library for my [NICHE] social media accounts. I manage [PLATFORM(S)] for [BRAND/YOUR OWN ACCOUNT].

Brand voice for replies: [DESCRIBE: e.g., "warm, witty, always helpful. We use first names, ask follow-up questions, and occasionally drop humor."]

Generate response templates for these comment categories:

1. POSITIVE COMMENTS (10 responses):
- "Love this!" / "So true!" / "Amazing content" — replies that deepen the conversation beyond "thank you"
- Replies that ask a follow-up question to boost comment count
- Replies that direct fans to other content or offers

2. QUESTIONS ABOUT MY PRODUCT/SERVICE (10 responses):
- Product: [DESCRIBE YOUR PRODUCT/SERVICE]
- Price/availability questions
- "How do I get started?" questions
- Comparison to competitor questions
- Each response should answer the question AND include a soft CTA

3. NEGATIVE/CRITICAL COMMENTS (8 responses):
- Constructive criticism (how to acknowledge and respond professionally)
- Trolls (when to engage vs. when to ignore)
- Product complaints (de-escalation templates)
- Misinformation corrections (factual, not defensive)

4. ENGAGEMENT BAIT RESPONSES (7 responses):
- When someone tags a friend
- When someone shares a personal story in the comments
- When an industry peer or influencer comments
- When someone asks for advice

5. FAQ COMMENT RESPONSES (5 responses):
- [FAQ 1: e.g., "What camera do you use?"]
- [FAQ 2: e.g., "How do I get started in [NICHE]?"]
- [FAQ 3: e.g., "Do you offer coaching/consulting?"]
- [FAQ 4]
- [FAQ 5]

Each response should feel human, not corporate. Vary the energy — some casual, some thoughtful, never robotic.`}
        </div>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>17. The DM Sales Sequence</h3>
        <p><strong>Best for:</strong> Instagram, LinkedIn &mdash; converting followers into customers through direct messages</p>
        <div style={promptBlockStyle}>
{`Build a 5-message DM sales sequence for [PLATFORM] to convert followers into customers for my [PRODUCT/SERVICE: describe what you sell, the price, and who it's for].

Target: [DESCRIBE THE IDEAL CUSTOMER IN DMs — e.g., "people who comment on my posts asking for help with X" or "new followers who fit my ideal customer profile"]

Brand voice: [DESCRIBE TONE: e.g., "friendly and consultative, never pushy or salesy"]

DM 1 — THE OPENER (Day 1):
After [TRIGGER: e.g., "they comment asking about my process" or "they follow me and view 3+ Stories"]. A warm, personal message that starts a conversation. NOT a pitch. Must feel like a real human reaching out.

DM 2 — THE VALUE DROP (Day 2-3):
Share something genuinely useful for free — a tip, resource, or insight related to their comment/interest. Position yourself as helpful, not salesy.

DM 3 — THE DISCOVERY QUESTION (Day 3-5):
Ask a question that uncovers their biggest pain point related to [YOUR NICHE]. This qualifies them and makes the eventual recommendation feel natural.

DM 4 — THE BRIDGE (Day 5-7):
Connect their pain point to your solution. Share a relevant result, testimonial, or case study. Frame it as "this might help" not "buy my thing."

DM 5 — THE OFFER (Day 7-10):
Make the offer directly. Include: what they get, price, how to buy, and a reason to act now (limited availability, bonus, or time-sensitive benefit). Include a "no pressure" line that means it.

Rules:
- Each DM should be 2-4 sentences max. Nobody reads walls of text in DMs.
- If they don't respond to DM 1 or 2, do NOT send the rest. These are conversation-based, not automated blasts.
- Include "exit ramp" responses for people who say they're not interested (graceful, relationship-preserving).
- Provide 3 variations of each DM so I can A/B test.`}
        </div>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>18. The UGC Campaign Generator</h3>
        <p><strong>Best for:</strong> Instagram, TikTok &mdash; getting your audience to create content about your brand for free</p>
        <div style={promptBlockStyle}>
{`Design a user-generated content (UGC) campaign for my [BRAND/PRODUCT] on [PLATFORM].

Product/Service: [DESCRIBE]
Target audience: [AUDIENCE DESCRIPTION]
Campaign goal: [e.g., "generate 50 pieces of UGC in 30 days" or "increase brand awareness with authentic customer content" or "build a library of testimonial content"]
Budget: [BUDGET or "no budget, organic only"]

Create a complete UGC campaign plan:

1. CAMPAIGN CONCEPT: A simple, repeatable concept that people will actually want to participate in. It should be fun/easy enough that regular people (not just influencers) will do it. Include a campaign name and branded hashtag.

2. LAUNCH CONTENT: Write the exact post that announces the campaign. Include the hook, rules, examples, and CTA. Make it shareable.

3. PARTICIPATION PROMPT: The exact instructions to give participants. Must be so clear that anyone can create content in under 5 minutes with their phone.

4. INCENTIVE STRUCTURE: What participants get (features on your page, prizes, discounts, community recognition). Design 3 tiers — easy win, medium effort, and grand prize.

5. CONTENT TEMPLATES: 3 example posts showing what great UGC looks like for this campaign. Include captions participants can modify.

6. AMPLIFICATION PLAN: How to promote the campaign — Stories, Reels, collaborations with micro-influencers, cross-platform posting, email list announcement.

7. CONTENT CURATION: How to collect, organize, and repurpose the UGC. Which pieces to share on your feed vs. Stories? How to ask permission?

8. MEASUREMENT: KPIs to track (# of submissions, reach, engagement, follower growth, conversions from UGC content).`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 7: PAID AD COPY PROMPTS              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>2 Paid Ad Copy Prompts</h2>
        <p>Organic reach has a ceiling. Paid ads scale what is already working. These prompts generate complete ad campaigns you can launch the same day.</p>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>19. The Meta Ads Full-Funnel Campaign</h3>
        <p><strong>Best for:</strong> Facebook and Instagram ads &mdash; the largest paid social platform</p>
        <div style={promptBlockStyle}>
{`Create a full-funnel Meta Ads campaign for [PRODUCT/SERVICE].

Product: [DESCRIBE — what it is, price, who it's for, main benefit]
Target audience: [DEMOGRAPHICS, INTERESTS, BEHAVIORS]
Monthly budget: $[BUDGET]
Campaign objective: [CONVERSIONS / LEADS / TRAFFIC / AWARENESS]
Landing page URL: [URL]

Build 3 ad sets for each funnel stage:

TOP OF FUNNEL (AWARENESS):
- Audience: Cold — people who've never heard of me. Target by interests: [INTERESTS]
- Ad Set 1 (Problem Aware): Ad that highlights the pain point. 3 copy variations (short, medium, long).
- Ad Set 2 (Educational): Ad that teaches something valuable. 3 copy variations.
- Ad Set 3 (Social Proof): Ad featuring a result or testimonial. 3 copy variations.
- For each ad: primary text, headline, description, CTA button, visual direction, and suggested format (image, video, carousel).

MIDDLE OF FUNNEL (CONSIDERATION):
- Audience: Warm — people who visited my website or engaged with content. Custom audience retargeting.
- 3 ad sets addressing top objections: [OBJECTION 1], [OBJECTION 2], [OBJECTION 3]
- Each ad should overcome the objection with proof, testimonials, or risk reversal.

BOTTOM OF FUNNEL (CONVERSION):
- Audience: Hot — people who added to cart, viewed pricing, or spent 2+ minutes on site.
- 3 ad sets: urgency-based, bonus-based, and testimonial-based.
- Include dynamic copy suggestions for abandoned cart retargeting.

Also provide:
- Budget split recommendation across funnel stages
- A/B testing priorities (test these elements first)
- 3 lookalike audience suggestions based on my best customers
- Estimated timeline: when to expect data, when to optimize, when to scale`}
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>20. The TikTok/LinkedIn Paid Ad Writer</h3>
        <p><strong>Best for:</strong> TikTok Ads and LinkedIn Ads &mdash; platforms where native-feeling creative wins</p>
        <div style={promptBlockStyle}>
{`Create paid ad content for both TikTok Ads and LinkedIn Ads for [PRODUCT/SERVICE].

Product: [DESCRIBE]
Target audience: [AUDIENCE]
Goal: [CONVERSIONS / LEADS / APP INSTALLS]

TIKTOK ADS (3 creatives):

The #1 rule on TikTok Ads: it must NOT look like an ad. Native-feeling content outperforms polished creative by 2-3x.

Creative 1 — UGC-Style Testimonial:
- Script for a person-to-camera video (30-45 seconds)
- Hook in first 2 seconds that looks like organic content
- Natural product mention around the 10-second mark
- Authentic CTA (not "Shop Now" — more like "I put the link in my bio")
- Text overlay suggestions

Creative 2 — Problem-Solution:
- Quick-cut style video script (15-30 seconds)
- Opens with a relatable problem
- "Then I found [PRODUCT]" transition
- Show the result/transformation
- CTA

Creative 3 — Trend-Based Ad:
- Adapt a current TikTok trend format for a paid ad
- Suggest which trend format to use for [NICHE]
- Full script with timing, audio suggestions, and text overlays

LINKEDIN ADS (3 creatives):

Creative 1 — Thought Leadership Sponsored Post:
- A text-heavy post that reads like organic content but promotes [OFFER]
- 200-300 words, story-based, ends with CTA
- Sponsored with the goal of lead generation

Creative 2 — Case Study / Results Ad:
- Headline, body, and CTA for a single-image ad
- Focus on a specific result: "[CLIENT TYPE] achieved [RESULT] using [PRODUCT]"
- 3 headline variations, 3 body variations

Creative 3 — Direct Offer Ad:
- Lead generation form ad
- Headline, body, description, CTA, and form field suggestions
- Compelling reason to fill out the form (free resource, demo, audit)

For all ads: provide estimated CPC/CPM ranges for [INDUSTRY] and suggest daily budget minimums.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 8: CUSTOMIZATION GUIDE               */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Customize These Prompts for Your Brand and Niche</h2>

        <p>Every prompt above works across niches, but you will get dramatically better results by adding niche-specific context. Here is how to adapt them for different industries:</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>E-commerce and DTC Brands</h3>
        <p>Include your product catalog, price points, seasonal sale calendar, and customer demographics. Mention your best-selling products, average order value, and return policy. Focus prompts on shoppable content &mdash; Instagram Shopping tags, TikTok Shop integration, and product-focused carousels. Add UGC and unboxing content to your content mix.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>SaaS and B2B Companies</h3>
        <p>LinkedIn should be your primary platform. Add your ICP (ideal customer profile), sales cycle length, and common objections. Focus on thought leadership, case studies, and educational content that builds trust over months. Include employee advocacy &mdash; prompts for your team to post on their personal LinkedIn profiles to amplify reach.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Personal Brands and Coaches</h3>
        <p>Add your personal story, transformation narrative, and client results. The &ldquo;I used to be [X], now I help people [Y]&rdquo; framework works on every platform. Focus on Story-based content, behind-the-scenes, and vulnerable/authentic posts. Your face should be in 70%+ of your content &mdash; people follow people, not logos.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Local Businesses</h3>
        <p>Add your location, service area, and local keywords. Focus on Google Business Profile integration, local hashtags, community events, and partnerships with nearby businesses. Customer testimonials and before/after content perform especially well. TikTok and Instagram Reels with location tags drive foot traffic.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Agencies Managing Multiple Clients</h3>
        <p>Create a &ldquo;brand voice document&rdquo; for each client that you paste into every prompt. Include: tone descriptors, words to use, words to avoid, audience demographics, competitor accounts, and 3&ndash;5 example posts that nailed the brand voice. This ensures consistent output across clients without starting from scratch each time.</p>

        <p style={{ marginTop: '24px' }}>The universal principle: <strong>the more specific your inputs, the more usable the AI outputs.</strong> &ldquo;Write a post about fitness&rdquo; gives you generic content. &ldquo;Write an Instagram carousel for women 30&ndash;45 who are returning to the gym after a pregnancy, targeting the frustration of not fitting into pre-baby clothes, in a motivational but realistic tone&rdquo; gives you content that converts.</p>

        <p>For a deeper guide to writing better prompts across any use case, read our <Link href="/blog/best-ai-prompts-business-2026" style={{ color: '#3B5FFF' }}>Best AI Prompts for Business in 2026</Link>.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 9: FREE VS PREMIUM                   */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Free Prompts vs. the Full Social Media Kit</h2>

        <p>The 20 prompts in this guide are genuinely useful. Use them today. They will save you hours of content planning and writing this week.</p>

        <p>But if you manage social media professionally &mdash; for yourself, your business, or your clients &mdash; the <Link href="/social-media-kit" style={{ color: '#3B5FFF' }}>AI Social Media Kit</Link> takes it to another level:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px', marginBottom: '24px' }}>
          <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px' }}>This Free Guide</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#6B7280' }}>
              <li>20 prompts</li>
              <li>7 categories</li>
              <li>General purpose</li>
              <li>Great starting point</li>
            </ul>
          </div>
          <div style={{ background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px', color: '#3B5FFF' }}>Social Media Kit ($39)</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#374151' }}>
              <li><strong>150+ prompts</strong></li>
              <li>6 deep categories with sub-sections</li>
              <li>Platform-specific variations</li>
              <li>Content calendar systems</li>
              <li>Caption template banks (30+)</li>
              <li>Viral content formulas (25+)</li>
              <li>Paid ad campaign templates</li>
              <li>Community management scripts</li>
              <li>Analytics frameworks</li>
              <li>Free updates for life</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href={SOCIAL_MEDIA_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Social Media Kit &mdash; $39
          </a>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        </div>

        <div style={{ background: '#111827', color: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px', color: '#93B4FF' }}>BEST VALUE</p>
          <p style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px' }}>All AI Kits &mdash; $97</p>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: '0 0 16px' }}>Social Media Kit + 12 more specialized AI kits. $429+ value. Plus every future kit free.</p>
          <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Bundle &mdash; $97 &rarr;
          </a>
          <p style={{ margin: '10px 0 0', color: '#6B7280', fontSize: '12px' }}>
            <Link href="/bundle" style={{ color: '#93B4FF' }}>See everything included in the bundle</Link>
          </p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 10: FAQ                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can AI really manage my social media accounts?</h3>
        <p>AI does not replace you &mdash; it accelerates you. Tools like ChatGPT and Claude can generate content calendars, write captions, brainstorm viral hooks, analyze competitors, and draft ad copy in minutes instead of hours. You still provide the brand voice, strategy, and final approval. Think of AI as a tireless content assistant that never runs out of ideas. Social media managers using AI prompts report saving 10&ndash;15 hours per week on content creation alone.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Which AI tool is best for social media content creation?</h3>
        <p>ChatGPT (GPT-4o) and Claude are the top choices in 2026. ChatGPT excels at structured outputs like content calendars and ad copy variations. Claude produces more natural, conversational captions that avoid the &ldquo;AI voice.&rdquo; Both work with every prompt in this guide. For visual content, pair them with Midjourney or DALL-E for images and Sora or Runway for video concepts. Try our <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>free Prompt Generator</Link> to build custom prompts for any AI tool.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Will AI-generated social media content hurt my engagement?</h3>
        <p>Only if you use it lazily. Posting raw, unedited AI output sounds generic and will hurt engagement. The key is using AI as a starting point, then adding your brand voice, personal stories, and authentic perspective. The prompts in this guide produce platform-native content that sounds human &mdash; they include instructions for tone, format, and platform-specific best practices. Brands using well-prompted AI content actually see higher engagement because they post more consistently and test more variations.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How do I make AI-generated captions sound like my brand?</h3>
        <p>Include a brand voice description in every prompt. Specify your tone (casual, professional, witty, bold), words you always use, words you never use, your audience demographic, and 2&ndash;3 examples of captions you have posted that performed well. The more context you give the AI about your brand personality, the more on-brand the output. Several prompts in this guide include [BRAND VOICE] placeholders specifically for this purpose.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can I use these prompts for client social media accounts?</h3>
        <p>Yes. These prompts are designed with customizable brackets so you can swap in any brand, niche, audience, or platform. Freelancers and agencies use AI prompts across all their client accounts &mdash; just customize the brand voice, target audience, and industry for each client. The <Link href="/social-media-kit" style={{ color: '#3B5FFF' }}>Social Media Kit</Link> includes 150+ prompts specifically built for multi-client workflows.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these social media prompts useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>The Complete Prompt Engineering Guide for 2026</Link> &mdash; Master the skill behind every great AI output</li>
          <li><Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks Most People Don&rsquo;t Know</Link> &mdash; Get more from every ChatGPT session</li>
          <li><Link href="/blog/best-ai-prompts-business-2026" style={{ color: '#3B5FFF' }}>Best AI Prompts for Business in 2026</Link> &mdash; AI prompts for every business function</li>
          <li><Link href="/content-creator-kit" style={{ color: '#3B5FFF' }}>Content Creator Kit</Link> &mdash; 150+ prompts for content creation, repurposing, and growth</li>
          <li><Link href="/social-media-kit" style={{ color: '#3B5FFF' }}>AI Social Media Kit</Link> &mdash; The full 150+ prompt system for social media managers</li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link> &mdash; Build custom prompts for any use case</li>
          <li><Link href="/prompts/chatgpt-social-media-captions" style={{ color: '#3B5FFF' }}>10 Free ChatGPT Prompts for Social Media Captions</Link> &mdash; copy-paste templates ready to use</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to transform your social media with AI?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Social Media Kit</strong> includes 150+ prompts for content calendars, captions, viral formulas, analytics, community management, and paid ad campaigns. Every prompt is copy-paste ready for Instagram, TikTok, LinkedIn, X/Twitter, and YouTube. $39 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={SOCIAL_MEDIA_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Social Media Kit &mdash; $39
            </a>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Social Media Kit plus 12 more specialized kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* Related Content */}
        <div style={{ background: 'var(--surface)', borderRadius: 16, padding: 32, margin: '40px 0' }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Keep Reading</h3>
          <div style={{ display: 'grid', gap: 12 }}>
            <Link href="/blog/best-instagram-hashtags-2026" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>150+ Best Instagram Hashtags for 2026 (By Niche + Strategy Guide) &rarr;</Link>
            <Link href="/hashtag-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Free AI Hashtag Generator Tool &rarr;</Link>
          </div>
        </div>

        {/* EMAIL CAPTURE */}
        <EmailCapture />

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://www.midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Product CTA */}
      <div style={{maxWidth:700,margin:'0 auto 60px',padding:'0 20px'}}>
        <div style={{background:'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'#3B5FFF',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Ready-Made Kit</div>
          <h3 style={{marginTop:0,fontSize:'1.3rem',color:'#111827'}}>Get 150+ Social Media Prompts — Ready to Use</h3>
          <p style={{color:'#4B5563',fontSize:15,marginBottom:20,lineHeight:1.6}}>Stop writing prompts from scratch. The AI Social Media Manager Kit includes captions, hooks, content calendars, analytics prompts, and paid ad copy for every platform.</p>
          <a href="/social-media-kit" style={{display:'inline-block',background:'#3B5FFF',color:'#fff',padding:'14px 32px',borderRadius:100,textDecoration:'none',fontWeight:700,fontSize:15}}>Get the Social Media Kit — $39 →</a>
        </div>
      </div>
    </Layout>
  );
}
