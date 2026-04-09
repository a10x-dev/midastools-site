import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function PromptEngineeringGuide2026() {
  const title = 'The Complete AI Prompt Engineering Guide for 2026 (With Examples)';
  const description = 'Learn prompt engineering from scratch. A practical guide with frameworks, examples, and copy-paste templates for ChatGPT, Claude, Midjourney, Sora, and every AI tool. From beginner to advanced in one post.';
  const url = 'https://midastools.co/blog/prompt-engineering-guide-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is prompt engineering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt engineering is the skill of writing instructions (prompts) that get AI tools to produce the output you want. It applies to text AI (ChatGPT, Claude, Gemini), image AI (Midjourney, DALL-E), and video AI (Sora, Runway). Good prompt engineering is the difference between generic AI output and professional-grade results that save hours of work.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is prompt engineering hard to learn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The fundamentals can be learned in an afternoon. The key frameworks — role assignment, structured instructions, few-shot examples, chain-of-thought, and output formatting — are simple concepts that dramatically improve AI output. The skill grows with practice, but even beginners see major improvements after learning the basics covered in this guide.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need to know how to code to do prompt engineering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Prompt engineering is done in plain language — you are writing instructions, not code. Anyone who can write clear emails can learn prompt engineering. Some advanced techniques involve structured formats like JSON or markdown, but these are optional and easy to learn.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for prompt engineering in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For text: ChatGPT (GPT-4o) and Claude are the two leading tools, with Gemini close behind. For images: Midjourney for artistic quality, ChatGPT (DALL-E) for instruction-following and text rendering. For video: Sora for cinematic quality, Runway for editing workflows. The prompt engineering principles in this guide work across all of these tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is prompt engineering a real career skill?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Prompt engineering is one of the fastest-growing skills in 2026. Companies hire prompt engineers, and freelance prompt engineers on Upwork charge $50-200/hour. More broadly, prompt engineering is becoming a core business skill — like Excel or email — that makes every knowledge worker more effective. The ability to get high-quality output from AI tools is valuable in marketing, sales, operations, content creation, software development, and nearly every other field.'
        }
      }
    ]
  };

  const s = {
    section: { maxWidth: '720px', margin: '0 auto', padding: '0 24px' },
    h2: { fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, letterSpacing: '-0.5px', margin: '48px 0 16px', color: 'var(--text)' },
    h3: { fontSize: '18px', fontWeight: 700, margin: '32px 0 8px', color: 'var(--text)' },
    p: { fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: '0 0 16px' },
    prompt: {
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px',
      padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap',
      lineHeight: '1.6', color: 'var(--text)', margin: '12px 0 24px', overflowX: 'auto',
    },
    tip: {
      background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)',
      borderRadius: '12px', padding: '20px', margin: '16px 0 24px',
    },
    cta: {
      background: 'var(--text)', borderRadius: '16px', padding: '32px',
      textAlign: 'center', margin: '48px 0', color: '#FFFFFF',
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="prompt engineering guide, how to write AI prompts, prompt engineering tutorial, ChatGPT prompts, AI prompt tips, prompt engineering examples, prompt engineering 2026, best AI prompts, prompt engineering for beginners, advanced prompt engineering" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <article style={{ paddingTop: '48px', paddingBottom: '64px' }}>
        <div style={s.section}>
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            Prompt Engineering Guide
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text)' }}>
            The Complete AI Prompt Engineering Guide for 2026
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            Everything you need to know about writing AI prompts that actually work — for text, images, and video. Frameworks, examples, and templates you can use today.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '40px' }}>
            Updated March 2026 · 15 min read
          </p>

          {/* Table of Contents */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>In This Guide</p>
            <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 2, color: 'var(--accent)' }}>
              <li><a href="#what-is" style={{ color: 'var(--accent)', textDecoration: 'none' }}>What Is Prompt Engineering?</a></li>
              <li><a href="#fundamentals" style={{ color: 'var(--accent)', textDecoration: 'none' }}>The 5 Fundamentals</a></li>
              <li><a href="#text" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Text AI Prompts (ChatGPT, Claude)</a></li>
              <li><a href="#image" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Image AI Prompts (Midjourney, DALL-E)</a></li>
              <li><a href="#video" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Video AI Prompts (Sora, Runway)</a></li>
              <li><a href="#advanced" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Advanced Techniques</a></li>
              <li><a href="#mistakes" style={{ color: 'var(--accent)', textDecoration: 'none' }}>7 Common Mistakes</a></li>
            </ol>
          </div>

          {/* Section 1: What Is Prompt Engineering */}
          <h2 id="what-is" style={s.h2}>1. What Is Prompt Engineering?</h2>
          <p style={s.p}>
            Prompt engineering is the skill of writing instructions that get AI tools to produce the output you want. It's the difference between getting generic, useless output and getting <strong>professional-grade results</strong> that save you hours.
          </p>
          <p style={s.p}>
            Think of it like this: an AI model is an incredibly talented assistant who has read the entire internet — but they need clear instructions. A vague request gets a vague answer. A specific, well-structured request gets output that looks like a professional wrote it.
          </p>
          <p style={s.p}>
            Prompt engineering applies to every type of AI:
          </p>
          <ul style={{ ...s.p, paddingLeft: '20px', lineHeight: 2 }}>
            <li><strong>Text AI</strong> (ChatGPT, Claude, Gemini) — writing, analysis, code, strategy</li>
            <li><strong>Image AI</strong> (Midjourney, DALL-E, Stable Diffusion) — photos, art, graphics</li>
            <li><strong>Video AI</strong> (Sora, Runway, Pika) — clips, ads, social content</li>
          </ul>
          <p style={s.p}>
            The principles are the same across all tools: <strong>clarity, structure, context, and specificity</strong>.
          </p>

          {/* Section 2: The 5 Fundamentals */}
          <h2 id="fundamentals" style={s.h2}>2. The 5 Fundamentals of Prompt Engineering</h2>
          <p style={s.p}>
            Master these five principles and you'll get better output from any AI tool, every time.
          </p>

          <h3 style={s.h3}>Fundamental 1: Give the AI a Role</h3>
          <p style={s.p}>
            The single most effective technique. When you assign a role, the AI adjusts its vocabulary, depth, and perspective to match that expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '12px 0 24px' }}>
            <div style={{ background: 'rgba(255,50,50,0.04)', border: '1px solid rgba(255,50,50,0.15)', borderRadius: '8px', padding: '16px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,100,100,0.8)', marginBottom: '8px' }}>WEAK</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Write me a marketing email.</p>
            </div>
            <div style={{ background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)', borderRadius: '8px', padding: '16px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>STRONG</p>
              <p style={{ fontSize: '14px', color: 'var(--text)', margin: 0 }}>You are a senior email marketing strategist at a DTC brand. Write a product launch email...</p>
            </div>
          </div>
          <div style={s.prompt}>
{`You are a [ROLE] with [YEARS] of experience in [FIELD].
Your communication style is [TONE — e.g., professional, casual, technical].
Your goal is to [WHAT YOU WANT THEM TO DO].`}
          </div>

          <h3 style={s.h3}>Fundamental 2: Be Specific About Format</h3>
          <p style={s.p}>
            Tell the AI exactly what the output should look like. Length, structure, format, and style.
          </p>
          <div style={s.prompt}>
{`Write a 200-word product description for [PRODUCT].
Structure it as:
- Headline (under 10 words, benefit-focused)
- 2-sentence hook addressing the main pain point
- 3 bullet points highlighting key features
- One-line call to action

Tone: conversational but confident. No jargon.`}
          </div>

          <h3 style={s.h3}>Fundamental 3: Provide Context</h3>
          <p style={s.p}>
            The more relevant context you give, the better the output. Include your audience, constraints, and background information.
          </p>
          <div style={s.prompt}>
{`Context:
- Product: [NAME] — a [DESCRIPTION]
- Target audience: [WHO] — [THEIR PAIN POINT]
- Price: $[X]
- Competitor advantage: [WHAT MAKES YOU DIFFERENT]
- Channel: This will be posted on [WHERE]

Task: Write [WHAT YOU NEED].`}
          </div>

          <h3 style={s.h3}>Fundamental 4: Show Examples (Few-Shot)</h3>
          <p style={s.p}>
            One example is worth a hundred words of description. When you show the AI what good output looks like, it calibrates instantly.
          </p>
          <div style={s.prompt}>
{`Write 5 email subject lines for our Black Friday sale.

Here are examples of our best-performing subject lines:
- "Your cart is judging you" (42% open rate)
- "We made a mistake. Here's 40% off." (38% open rate)
- "This email will self-destruct in 24 hours" (35% open rate)

Match this tone: playful, slightly provocative, curiosity-driven.
Keep each under 50 characters.`}
          </div>

          <h3 style={s.h3}>Fundamental 5: Iterate, Don't Start Over</h3>
          <p style={s.p}>
            The first output is rarely the final output. Instead of rewriting your entire prompt, refine:
          </p>
          <div style={s.prompt}>
{`Good — but make these changes:
1. Make the tone more casual — like texting a friend
2. Cut the second paragraph — it's too long
3. Add a specific dollar amount in the headline
4. The CTA should create more urgency`}
          </div>
          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>Pro tip</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Treat AI like a talented junior employee. You wouldn't fire them after one imperfect draft — you'd give specific feedback and ask for a revision. Same principle.
            </p>
          </div>

          {/* CTA 1 */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Skip the Learning Curve</p>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Get 500+ Ready-Made AI Prompts</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Text, image, and video prompts. Professionally engineered. Copy, paste, customize.</p>
            <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Get All 13 Kits — $97 →
            </a>
          </div>

          {/* Section 3: Text AI */}
          <h2 id="text" style={s.h2}>3. Text AI Prompt Engineering (ChatGPT, Claude)</h2>
          <p style={s.p}>
            Text AI is the most widely used category. Here are the techniques that produce the best results.
          </p>

          <h3 style={s.h3}>Chain-of-Thought Prompting</h3>
          <p style={s.p}>
            Ask the AI to think step-by-step. This dramatically improves accuracy for complex tasks like analysis, math, strategy, and decision-making.
          </p>
          <div style={s.prompt}>
{`Analyze whether we should raise our prices from $29 to $39.

Think through this step by step:
1. What's the typical price elasticity for digital products?
2. What are competitors charging for similar products?
3. How would a 34% price increase affect our conversion rate?
4. What's the break-even point — how many fewer sales can we afford?
5. What's your recommendation and why?`}
          </div>

          <h3 style={s.h3}>Constraint-Based Prompting</h3>
          <p style={s.p}>
            Set boundaries to get focused output. Constraints force creativity and prevent generic filler.
          </p>
          <div style={s.prompt}>
{`Write a landing page headline for our AI toolkit.

Constraints:
- Maximum 8 words
- Must include a number or statistic
- Must address a specific pain point (wasted time)
- No buzzwords: "revolutionary", "game-changing", "cutting-edge"
- Must work as a standalone line (no subheadline needed)

Give me 10 options.`}
          </div>

          <h3 style={s.h3}>Persona Stacking</h3>
          <p style={s.p}>
            Combine multiple perspectives for richer output.
          </p>
          <div style={s.prompt}>
{`Review this product page from three perspectives:

1. As a SKEPTICAL BUYER who's been burned by similar products before
2. As a BUSY ENTREPRENEUR who has 30 seconds to decide
3. As a COMPETITOR doing market research

For each perspective, tell me:
- What would make you click "Buy"?
- What would make you leave?
- What's missing?`}
          </div>

          <h3 style={s.h3}>Output Templates</h3>
          <p style={s.p}>
            Define the exact structure you want. The AI will fill in the template perfectly.
          </p>
          <div style={s.prompt}>
{`Write a product review for [PRODUCT].

Use this exact format:

**Rating:** [X/5 stars]
**Best for:** [One sentence — who should buy this]
**Skip if:** [One sentence — who should NOT buy this]

**The good:**
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

**The bad:**
- [Drawback 1]
- [Drawback 2]

**Bottom line:** [Two sentences max]`}
          </div>

          {/* Section 4: Image AI */}
          <h2 id="image" style={s.h2}>4. Image AI Prompt Engineering (Midjourney, DALL-E)</h2>
          <p style={s.p}>
            Image prompting is fundamentally different from text prompting. You're describing a visual scene, not giving instructions. The key elements are: <strong>subject, style, lighting, composition, and technical parameters</strong>.
          </p>

          <h3 style={s.h3}>The Image Prompt Formula</h3>
          <div style={s.prompt}>
{`[SUBJECT] + [STYLE/MEDIUM] + [LIGHTING] + [COMPOSITION] + [MOOD] + [TECHNICAL]

Example:
A professional headshot of a woman in her 30s wearing a navy blazer,
studio portrait style, Rembrandt lighting with soft fill,
centered composition with shallow depth of field,
confident and approachable expression,
shot on Canon 85mm f/1.4, 4K resolution`}
          </div>

          <h3 style={s.h3}>Style Keywords That Work</h3>
          <p style={s.p}>These style modifiers dramatically change the output:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '12px 0 24px' }}>
            {[
              { cat: 'Photography', words: 'editorial, candid, documentary, macro, telephoto, golden hour, film grain' },
              { cat: 'Art', words: 'oil painting, watercolor, digital art, vector illustration, pencil sketch, impasto' },
              { cat: 'Aesthetic', words: 'minimalist, maximalist, vintage, futuristic, brutalist, art deco, cyberpunk' },
              { cat: 'Lighting', words: 'Rembrandt, butterfly, rim light, neon, volumetric, backlit, diffused' },
            ].map(row => (
              <div key={row.cat} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>{row.cat}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{row.words}</p>
              </div>
            ))}
          </div>

          <h3 style={s.h3}>Midjourney-Specific Parameters</h3>
          <div style={s.prompt}>
{`--ar 16:9     → Aspect ratio (also 9:16, 1:1, 3:2, 2:3)
--s 250       → Stylization (0=raw, 1000=very stylized)
--c 30        → Chaos/variation (0=consistent, 100=wild)
--style raw   → Less Midjourney "beautification"
--niji        → Anime/manga specialized model
::2           → Weight a concept (higher = more emphasis)`}
          </div>

          <p style={s.p}>
            For 150+ ready-to-use image prompts organized by category, see our <Link href="/ai-image-prompt-pack" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>AI Image Prompt Pack</Link> or read <Link href="/blog/chatgpt-image-prompts-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>50+ Viral ChatGPT Image Prompts</Link>.
          </p>

          {/* Section 5: Video AI */}
          <h2 id="video" style={s.h2}>5. Video AI Prompt Engineering (Sora, Runway, Pika)</h2>
          <p style={s.p}>
            Video prompting adds two dimensions that images don't have: <strong>time</strong> and <strong>motion</strong>. You need to describe what happens, how the camera moves, and how long things take.
          </p>

          <h3 style={s.h3}>The Video Prompt Formula</h3>
          <div style={s.prompt}>
{`[DURATION] + [CAMERA MOVEMENT] + [SUBJECT & ACTION] + [LIGHTING] + [STYLE] + [ASPECT RATIO]

Example:
A 6-second cinematic video. The camera slowly dollies forward
through a rain-soaked city street at night. Neon signs reflect
in puddles on the pavement. A lone figure walks away from camera.
Moody blue and pink color grading. Film grain. 16:9 horizontal.`}
          </div>

          <h3 style={s.h3}>Camera Movement Vocabulary</h3>
          <p style={s.p}>AI video tools understand film terminology. Use these for professional results:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '12px 0 24px' }}>
            {[
              { move: 'Pan', desc: 'Camera rotates left/right (pivots in place)' },
              { move: 'Tilt', desc: 'Camera angles up/down (pivots in place)' },
              { move: 'Dolly', desc: 'Camera moves forward/backward (whole body)' },
              { move: 'Tracking', desc: 'Camera follows subject sideways' },
              { move: 'Crane/Jib', desc: 'Camera rises or descends vertically' },
              { move: 'Orbit', desc: 'Camera circles around the subject' },
              { move: 'Steadicam', desc: 'Smooth handheld following shot' },
              { move: 'Static', desc: 'Camera locked, no movement' },
            ].map(row => (
              <div key={row.move} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{row.move}: </span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{row.desc}</span>
              </div>
            ))}
          </div>

          <h3 style={s.h3}>Temporal Description</h3>
          <p style={s.p}>The key difference between image and video prompts. Describe what changes over time:</p>
          <div style={s.prompt}>
{`Scene 1 (0-3s): Close-up of hands opening a laptop.
Scene 2 (3-7s): The screen lights up, showing notifications.
Scene 3 (7-10s): Pull back to reveal the person smiling.

OR for simpler clips:

"The camera starts on a close-up and slowly pulls back
to reveal the full scene over 5 seconds."`}
          </div>

          <p style={s.p}>
            For 150+ ready-to-use video prompts, check out our <Link href="/ai-video-prompt-pack" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>AI Video Prompt Pack</Link> or read <Link href="/blog/ai-video-prompts-sora-runway-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>30+ Best AI Video Prompts for Sora, Runway & Pika</Link>.
          </p>

          {/* Section 6: Advanced */}
          <h2 id="advanced" style={s.h2}>6. Advanced Techniques</h2>

          <h3 style={s.h3}>Mega-Prompt Architecture</h3>
          <p style={s.p}>
            For complex tasks, build a structured mega-prompt with sections. This is how professionals write prompts that consistently produce excellent output.
          </p>
          <div style={s.prompt}>
{`# ROLE
You are a senior content strategist at a $10M DTC brand.

# CONTEXT
We sell premium skincare products ($40-120 price range).
Our audience is women 25-45 who value clean ingredients.
Our brand voice is: warm, knowledgeable, never condescending.

# TASK
Write our Q2 content calendar for Instagram (April-June).

# REQUIREMENTS
- 3 posts per week (Mon, Wed, Fri)
- Mix: 40% educational, 30% product, 20% UGC/social proof, 10% behind-the-scenes
- Each post needs: caption (under 150 words), 3 hashtags, best posting time
- Include 2 Reels concepts per month with hook + script outline

# FORMAT
Output as a markdown table with columns:
Date | Type | Caption | Hashtags | Time | Notes

# CONSTRAINTS
- No generic wellness clichés
- Every post must have a clear CTA
- Reference specific products by name: [LIST YOUR PRODUCTS]`}
          </div>

          <h3 style={s.h3}>Chain Prompting</h3>
          <p style={s.p}>
            Break complex projects into sequential prompts where each builds on the last. This produces better results than trying to do everything in one prompt.
          </p>
          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>Chain Example: Writing a Sales Page</p>
            <ol style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li><strong>Prompt 1:</strong> Research — "Analyze the top 5 pain points of [AUDIENCE]"</li>
              <li><strong>Prompt 2:</strong> Headline — "Write 10 headlines addressing pain point #1"</li>
              <li><strong>Prompt 3:</strong> Story — "Write an opening story using the 'Problem-Agitation-Solution' framework"</li>
              <li><strong>Prompt 4:</strong> Body — "Write the features/benefits section using the headline from step 2"</li>
              <li><strong>Prompt 5:</strong> CTA — "Write 3 CTA variations with urgency"</li>
              <li><strong>Prompt 6:</strong> Review — "Review the full page for tone consistency and weak spots"</li>
            </ol>
          </div>

          <h3 style={s.h3}>Negative Prompting</h3>
          <p style={s.p}>
            Tell the AI what NOT to do. This is often more effective than describing what you want — especially for avoiding common AI patterns.
          </p>
          <div style={s.prompt}>
{`DO NOT:
- Start with "In today's fast-paced world" or any cliché opening
- Use words: leverage, synergy, innovative, cutting-edge, game-changing
- Write more than 200 words
- Include a conclusion paragraph that restates the intro
- Use passive voice
- Add emoji unless I specifically request them`}
          </div>

          <h3 style={s.h3}>Self-Evaluation Prompting</h3>
          <p style={s.p}>
            Ask the AI to evaluate its own output and improve it. This produces a second, better draft without you needing to identify the problems.
          </p>
          <div style={s.prompt}>
{`Now review what you just wrote and score it 1-10 on:
1. Clarity — is every sentence immediately clear?
2. Persuasion — would this actually make someone buy?
3. Specificity — are there concrete numbers and examples?
4. Brevity — can anything be cut without losing meaning?

For any score below 8, rewrite that section and explain what you changed.`}
          </div>

          {/* CTA 2 */}
          <div style={{ background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)', borderRadius: '16px', padding: '28px', textAlign: 'center', margin: '48px 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text)' }}>Want 500+ prompts ready to use?</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Our prompt packs include text, image, and video prompts — professionally engineered using every technique in this guide.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ai-prompt-mega-pack" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Text Prompts — $29 →</Link>
              <Link href="/ai-image-prompt-pack" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Image Prompts — $29 →</Link>
              <Link href="/ai-video-prompt-pack" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Video Prompts — $29 →</Link>
            </div>
          </div>

          {/* Prompt Generator Callout */}
          <div style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', border: '2px solid rgba(59,95,255,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center', margin: '48px 0' }}>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: 'var(--text)' }}>Build Perfect Prompts in Seconds</p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              Our free AI Prompt Generator applies every framework from this guide automatically. Pick your task, fill in the details, and get a professional-grade prompt instantly.
            </p>
            <Link href="/prompt-generator" style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Try the Free Prompt Generator →
            </Link>
          </div>

          {/* Section 7: Common Mistakes */}
          <h2 id="mistakes" style={s.h2}>7. The 7 Most Common Prompt Engineering Mistakes</h2>

          <h3 style={s.h3}>Mistake 1: Being Too Vague</h3>
          <p style={s.p}>
            "Write me a blog post" will give you generic output. "Write a 1,000-word blog post about [SPECIFIC TOPIC] for [SPECIFIC AUDIENCE] in a [SPECIFIC TONE] with [SPECIFIC STRUCTURE]" gives you something usable.
          </p>

          <h3 style={s.h3}>Mistake 2: No Role Assignment</h3>
          <p style={s.p}>
            Without a role, the AI defaults to a generic assistant voice. Adding "You are a [ROLE]" at the start of every prompt is the single highest-ROI improvement you can make.
          </p>

          <h3 style={s.h3}>Mistake 3: Forgetting Format Instructions</h3>
          <p style={s.p}>
            If you don't specify the output format, you'll get wall-of-text paragraphs. Tell the AI: bullet points, numbered list, table, JSON, markdown, specific word count, or an exact template.
          </p>

          <h3 style={s.h3}>Mistake 4: Starting Over Instead of Iterating</h3>
          <p style={s.p}>
            When the output isn't right, most people rewrite the entire prompt. Instead, give feedback: "Good, but make it shorter and more direct." The AI improves faster from feedback than from new prompts.
          </p>

          <h3 style={s.h3}>Mistake 5: No Examples</h3>
          <p style={s.p}>
            Describing what you want takes 50 words. Showing what you want takes 1 example. The AI instantly calibrates to your examples — tone, length, structure, everything. Always include at least one example of ideal output.
          </p>

          <h3 style={s.h3}>Mistake 6: Ignoring Camera/Lighting (Image &amp; Video)</h3>
          <p style={s.p}>
            For visual AI, most people describe only the subject. But the camera angle, lighting, and composition are what make output look professional vs. amateur. Always include these three elements.
          </p>

          <h3 style={s.h3}>Mistake 7: Not Specifying What to Avoid</h3>
          <p style={s.p}>
            AI models have default patterns (cliché openings, corporate tone, excessive length). Negative prompting — explicitly saying what NOT to do — eliminates these patterns and forces more creative, authentic output.
          </p>

          {/* Final CTA */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>The Shortcut</p>
            <p style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Get All 11 AI Kits for $97</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              500+ professionally engineered prompts for text, images, video, and every business niche. Skip the learning curve.
            </p>
            <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', fontWeight: 800, fontSize: '16px' }}>
              Get the Bundle — $97 →
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>$467 value · One-time payment · 30-day money-back guarantee</p>
          </div>

          {/* Related */}
          <h2 style={s.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', margin: '0 0 48px' }}>
            {[
              { title: '25 ChatGPT Tips and Tricks Most People Don\'t Know', href: '/blog/chatgpt-tips-tricks-2026' },
              { title: '50+ Viral ChatGPT Image Prompts for 2026', href: '/blog/chatgpt-image-prompts-2026' },
              { title: '30+ Best AI Video Prompts for Sora, Runway & Pika', href: '/blog/ai-video-prompts-sora-runway-2026' },
              { title: '40+ Best Midjourney Prompts for Stunning AI Art', href: '/blog/best-midjourney-prompts-2026' },
              { title: 'Best AI Prompt Packs for Every Business', href: '/blog/best-ai-prompt-packs-2026' },
              { title: 'How to Make Money Selling AI Art in 2026', href: '/blog/how-to-make-money-selling-ai-art-2026' },
              { title: '15 ChatGPT Prompts to Write a Perfect Resume in 2026', href: '/blog/ai-resume-prompts-chatgpt-2026' },
              { title: '20 AI Prompts That Will Transform Your Social Media', href: '/blog/ai-social-media-prompts-2026' },
              { title: '20 AI Prompts That Will Transform Your Email Marketing', href: '/blog/ai-email-marketing-prompts-2026' },
              { title: '15 AI Prompts for Better Presentations', href: '/blog/ai-presentation-prompts-2026' },
              { title: '10 AI Prompt Mistakes That Are Ruining Your ChatGPT Output', href: '/blog/ai-prompt-mistakes-2026' },
              { title: 'AI Prompt Roaster — Get Your Bad Prompts Roasted', href: '/prompt-roaster' },
              { title: 'Free AI Prompt Generator — Build Custom Prompts Instantly', href: '/prompt-generator' },
            ].map(link => (
              <li key={link.href} style={{ padding: '8px 0' }}>
                <Link href={link.href} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 style={s.h2}>Frequently Asked Questions</h2>
          {faqLd.mainEntity.map(faq => (
            <div key={faq.name} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>{faq.name}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}

        </div>
      </article>
    </Layout>
  );
}
