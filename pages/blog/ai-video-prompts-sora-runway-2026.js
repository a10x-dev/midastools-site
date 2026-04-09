import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const VIDEO_PACK_LINK = '/ai-video-prompt-pack';

export default function AIVideoPromptsSoraRunway2026() {
  const title = '30+ Best AI Video Prompts for Sora, Runway & Pika in 2026 (Copy & Paste)';
  const description = 'The best AI video generation prompts for 2026. 30+ copy-paste prompts for Sora, Runway Gen-3, Pika Labs, Kling AI, and Luma Dream Machine. Social media, product demos, cinematic, and viral content.';
  const url = 'https://www.midastools.co/blog/ai-video-prompts-sora-runway-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
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
        name: 'What is the best AI video generation tool in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best AI video tools in 2026 are Sora (OpenAI) for cinematic quality and coherent long clips, Runway Gen-3/Gen-4 for professional editing workflows and image-to-video, Pika Labs for fast iteration and stylized content, Kling AI for realistic human motion, and Luma Dream Machine for 3D-aware video generation. Each tool has strengths — many creators use 2-3 tools depending on the project.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I write better AI video prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Great AI video prompts include five elements: subject description, camera movement (pan, zoom, dolly, tracking shot), lighting direction (golden hour, studio, neon), duration and pacing, and aspect ratio (9:16 for TikTok/Reels, 16:9 for YouTube). Be specific about temporal changes — describe what happens at the beginning, middle, and end of the clip. Include style keywords like "cinematic", "slow motion", or "handheld documentary" for consistent results.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use AI-generated videos commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most AI video tools allow commercial use on their paid plans. Sora, Runway, and Pika all grant commercial rights to paid subscribers. Check each platform\'s terms of service for specifics. The prompts themselves are yours to use however you want — they are text templates, not generated content.'
        }
      },
      {
        '@type': 'Question',
        name: 'What aspect ratio should I use for AI video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use 9:16 vertical for TikTok, Instagram Reels, YouTube Shorts, and Stories. Use 16:9 horizontal for YouTube, websites, and presentations. Use 1:1 square for Instagram feed and LinkedIn. Use 2.39:1 for cinematic widescreen content. Always specify aspect ratio in your prompt — AI video tools produce better results when they know the target format.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Sora better than Runway for video generation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sora and Runway excel at different things. Sora produces longer, more coherent clips with better understanding of physics and real-world behavior. Runway Gen-3/Gen-4 offers better editing workflows (image-to-video, video-to-video, motion brush), faster generation, and tighter integration with professional editing tools. For raw quality and longer clips, Sora often wins. For speed, flexibility, and production workflows, Runway is typically preferred.'
        }
      }
    ]
  };

  const promptBlockStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.6',
    color: 'var(--text)',
    margin: '12px 0 24px',
    overflowX: 'auto',
  };

  const sectionStyle = {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const h2Style = {
    fontSize: 'clamp(22px, 3vw, 28px)',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    margin: '48px 0 16px',
    color: 'var(--text)',
  };

  const h3Style = {
    fontSize: '18px',
    fontWeight: 700,
    margin: '32px 0 8px',
    color: 'var(--text)',
  };

  const pStyle = {
    fontSize: '16px',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    margin: '0 0 16px',
  };

  const ctaBoxStyle = {
    background: 'var(--text)',
    borderRadius: '16px',
    padding: '32px',
    textAlign: 'center',
    margin: '48px 0',
    color: '#FFFFFF',
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI video prompts, Sora prompts, Runway prompts, Pika prompts, AI video generation, text to video prompts, Kling AI prompts, Luma Dream Machine prompts, best AI video prompts 2026, video generation prompts, AI TikTok prompts, AI Reels prompts" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <article style={{ paddingTop: '48px', paddingBottom: '64px' }}>
        <div style={sectionStyle}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            AI Video Prompts
          </div>

          {/* Hero */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text)' }}>
            30+ Best AI Video Prompts for Sora, Runway &amp; Pika in 2026
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            AI video generation is exploding. Searches for AI video tools are up 80-120% year-over-year. But most people get garbage output because they write garbage prompts.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '40px' }}>
            Updated March 2026 · 12 min read
          </p>

          {/* Intro */}
          <p style={pStyle}>
            The difference between a useless 4-second AI clip and a <strong>professional-grade video</strong> comes down to one thing: the prompt. AI video tools like Sora, Runway Gen-3, Pika, and Kling AI are incredibly powerful — but they need detailed instructions about camera movement, lighting, duration, pacing, and composition to produce quality output.
          </p>
          <p style={pStyle}>
            This guide gives you <strong>30+ copy-paste video prompts</strong> that actually work. Every prompt includes camera direction, lighting, timing, and aspect ratio — the four elements most people forget. Organized by use case so you can find exactly what you need.
          </p>
          <p style={pStyle}>
            These prompts work across <strong>all major AI video tools</strong>: Sora (OpenAI), Runway Gen-3/Gen-4, Pika Labs, Kling AI, Luma Dream Machine, Stable Video Diffusion, and HailuoAI.
          </p>

          {/* Tool comparison */}
          <h2 style={h2Style}>Which AI Video Tool Should You Use?</h2>
          <p style={pStyle}>Quick comparison of the top tools in March 2026:</p>
          <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>Tool</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>Best For</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>Max Length</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tool: 'Sora', best: 'Cinematic quality, long coherent clips', max: '60s', price: '$20-200/mo' },
                  { tool: 'Runway Gen-4', best: 'Pro editing workflow, image-to-video', max: '16s', price: '$12-76/mo' },
                  { tool: 'Pika Labs', best: 'Fast iteration, stylized content', max: '10s', price: '$8-58/mo' },
                  { tool: 'Kling AI', best: 'Realistic human motion, expressions', max: '10s', price: '$5-30/mo' },
                  { tool: 'Luma Dream Machine', best: '3D-aware generation, smooth camera', max: '5s', price: '$24-96/mo' },
                ].map(row => (
                  <tr key={row.tool} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text)' }}>{row.tool}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{row.best}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{row.max}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SECTION: Social Media */}
          <h2 style={h2Style}>Social Media Video Prompts (TikTok, Reels, Shorts)</h2>
          <p style={pStyle}>
            Short-form vertical video is the most in-demand format. These prompts are optimized for 9:16 vertical — the format TikTok, Instagram Reels, and YouTube Shorts use.
          </p>

          <h3 style={h3Style}>1. Product Showcase Reel</h3>
          <p style={pStyle}>Perfect for e-commerce brands and product launches.</p>
          <div style={promptBlockStyle}>
{`A smooth, cinematic 5-second video of [YOUR PRODUCT] rotating slowly on a clean white pedestal. Soft studio lighting from the left with a gentle shadow. The camera starts close-up on a detail, then slowly pulls back to reveal the full product. Shallow depth of field. Professional product photography style. Vertical 9:16 format. Subtle warm color grading.`}
          </div>

          <h3 style={h3Style}>2. Satisfying Process Video</h3>
          <p style={pStyle}>ASMR-style content that people watch on loop. High save rate.</p>
          <div style={promptBlockStyle}>
{`A top-down overhead shot of hands arranging [YOUR ITEMS — e.g., colorful macarons in a gift box / packaging handmade candles]. Smooth, fluid movements. Warm natural lighting. ASMR-style — close-up detail shots. The composition is satisfying and symmetrical. 9:16 vertical. 8 seconds. Clean, minimal background.`}
          </div>

          <h3 style={h3Style}>3. Before &amp; After Transformation</h3>
          <p style={pStyle}>The highest-performing format on social media. Works for any niche.</p>
          <div style={promptBlockStyle}>
{`A split-screen style 6-second video. Left side: a cluttered, messy [BEFORE STATE — e.g., desk with papers everywhere]. Right side: the same space, clean and organized with [AFTER STATE — e.g., laptop, plant, and coffee]. The transition between before and after uses a smooth wipe from left to right at the 3-second mark. Bright, clean lighting. 9:16 vertical.`}
          </div>

          <h3 style={h3Style}>4. Day in the Life Montage</h3>
          <p style={pStyle}>Aspirational content that builds personal brand and audience.</p>
          <div style={promptBlockStyle}>
{`A fast-paced 10-second montage of a [PERSONA — e.g., small business owner]. Scene 1: waking up and checking phone (2s). Scene 2: walking into a bright, modern workspace (2s). Scene 3: working at a laptop with coffee (2s). Scene 4: packaging products (2s). Scene 5: smiling at camera with finished products (2s). Natural lighting throughout. Warm, aspirational color grading. 9:16 vertical.`}
          </div>

          <h3 style={h3Style}>5. Oddly Satisfying Loop</h3>
          <p style={pStyle}>Loop content gets 3-5x more watch time because TikTok keeps replaying it.</p>
          <div style={promptBlockStyle}>
{`A 4-second perfectly looping video of [SATISFYING ACTION — e.g., a pen drawing a perfect circle on paper / colorful liquid being poured into a geometric mold]. The end frame seamlessly connects to the start frame. Close-up camera angle. Crisp, detailed. ASMR-style visual. 9:16 vertical.`}
          </div>

          {/* CTA 1 */}
          <div style={ctaBoxStyle}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Want More?</p>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Get 150+ AI Video Prompts — $29</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Social media, product demos, tutorials, cinematic, corporate, and viral styles. Works with every AI video tool.</p>
            <Link href={VIDEO_PACK_LINK} style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Get the Video Prompt Pack →
            </Link>
          </div>

          {/* SECTION: Product & Marketing */}
          <h2 style={h2Style}>Product &amp; Marketing Video Prompts</h2>
          <p style={pStyle}>
            Professional video content for product pages, ads, and email campaigns — without hiring a production team.
          </p>

          <h3 style={h3Style}>6. Hero Product Reveal</h3>
          <p style={pStyle}>Apple-style product reveal. Use for launches, product pages, and ads.</p>
          <div style={promptBlockStyle}>
{`A cinematic 8-second video of [YOUR PRODUCT] on a matte black table. The scene starts in darkness. A single spotlight slowly fades in from above, revealing the product with a warm golden glow. The camera orbits slowly around the product (180 degrees). Reflections on the surface beneath. Studio quality. Shallow depth of field. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>7. Problem-Solution Ad (15 seconds)</h3>
          <p style={pStyle}>The most effective ad format. Show the pain, then the relief.</p>
          <div style={promptBlockStyle}>
{`A 15-second ad-style video. Scene 1 (0-5s): a frustrated person staring at a messy desk, head in hands. Grey, desaturated color grading. Dim lighting. Scene 2 (5-8s): transition with a bright flash. Scene 3 (8-15s): the same person smiling at a clean desk with [YOUR PRODUCT], bright and warm lighting. The contrast between scenes is dramatic. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>8. UGC-Style Ad</h3>
          <p style={pStyle}>UGC-style ads outperform polished content 2-3x on paid social. This prompt nails the authentic feel.</p>
          <div style={promptBlockStyle}>
{`A 12-second video filmed in a casual, authentic UGC (user-generated content) style. A person holds up [YOUR PRODUCT] and shows it to the camera with genuine excitement. Filmed on what looks like a phone camera — natural lighting, slightly shaky handheld feel. Real-world setting (bedroom, living room, kitchen). The person demonstrates one key feature. 9:16 vertical. Authentic, not overly produced.`}
          </div>

          <h3 style={h3Style}>9. 360-Degree Product Spin</h3>
          <p style={pStyle}>Clean product spin for e-commerce product pages. Replaces expensive photography.</p>
          <div style={promptBlockStyle}>
{`A smooth 6-second video of [YOUR PRODUCT] rotating 360 degrees on a clean white background. The product is centered and well-lit with soft studio lighting from three angles. The rotation is smooth and constant. No shadows or distracting elements. Slightly elevated camera angle (30 degrees from horizontal). 1:1 square format.`}
          </div>

          <h3 style={h3Style}>10. Website Hero Banner Video</h3>
          <p style={pStyle}>Looping background video for your website hero section. Adds instant polish.</p>
          <div style={promptBlockStyle}>
{`A 6-second looping video for a website hero section. Smooth liquid gradients in blue and purple morphing slowly. Subtle, non-distracting movement. Designed as a background that doesn't compete with overlay text. Muted colors. Low contrast. Loopable (end matches beginning). 16:9 horizontal.`}
          </div>

          {/* SECTION: Cinematic */}
          <h2 style={h2Style}>Cinematic &amp; Storytelling Prompts</h2>
          <p style={pStyle}>
            For brand films, trailers, atmospheric B-roll, and any content where you need that cinematic feel. These prompts use film language that AI video tools understand.
          </p>

          <h3 style={h3Style}>11. Establishing Shot</h3>
          <p style={pStyle}>Every great video starts with an establishing shot that sets the mood.</p>
          <div style={promptBlockStyle}>
{`A 8-second cinematic establishing shot of a rain-soaked city street at night. Drone-style wide shot that slowly descends toward street level. Moody neon reflections in puddles. Film grain. Anamorphic lens flare. 2.39:1 widescreen cinematic aspect ratio.`}
          </div>

          <h3 style={h3Style}>12. Golden Hour B-Roll</h3>
          <p style={pStyle}>The most universally beautiful lighting condition. Works for any content.</p>
          <div style={promptBlockStyle}>
{`A 6-second golden hour video of a wheat field swaying in the breeze. The sun is low on the horizon, casting long golden shadows. Lens flare occasionally catches the camera. Warm, rich color grading — amber and gold tones. Everything glows. Dreamy, nostalgic mood. 2.39:1 widescreen.`}
          </div>

          <h3 style={h3Style}>13. Product Launch Trailer</h3>
          <p style={pStyle}>Build hype before a launch with a cinematic trailer.</p>
          <div style={promptBlockStyle}>
{`A 20-second product launch trailer. Beat 1 (0-3s): Black screen, single line of text fades in: "[YOUR TAGLINE]". Beat 2 (3-7s): Quick cuts of [YOUR PRODUCT] from different angles — each shot 1 second, dramatic lighting changes. Beat 3 (7-12s): Product in use — person using it, reaction shot showing amazement. Beat 4 (12-17s): Feature montage — 3 key features in rapid succession. Beat 5 (17-20s): Logo reveal with release date. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>14. Time Freeze Effect</h3>
          <p style={pStyle}>A mind-bending effect that stops viewers mid-scroll.</p>
          <div style={promptBlockStyle}>
{`A 6-second video where time appears to stop. An active scene — people walking in a park, birds flying, leaves falling — suddenly freezes at the 2-second mark. The camera continues to move, dollying through the frozen scene from different angles. Everything is perfectly still except the camera. At 5 seconds, time resumes. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>15. Neon Night Scene</h3>
          <p style={pStyle}>Cyberpunk-inspired visuals that perform well on social media.</p>
          <div style={promptBlockStyle}>
{`A 6-second video of a rain-wet alley lined with neon signs. Vibrant neon colors — pink, blue, purple. Reflections in wet pavement. Cyberpunk aesthetic. A lone figure walks through the scene. Moody, atmospheric. Camera slow push forward. 16:9 horizontal.`}
          </div>

          {/* CTA 2 */}
          <div style={{ background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)', borderRadius: '16px', padding: '28px', textAlign: 'center', margin: '48px 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text)' }}>These are just 15 of 150+ prompts</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>The full AI Video Prompt Pack includes social media, product, tutorial, cinematic, corporate, and viral styles — all for $29.</p>
            <Link href={VIDEO_PACK_LINK} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Get the Full Video Prompt Pack →
            </Link>
          </div>

          {/* SECTION: Trending Styles */}
          <h2 style={h2Style}>Viral &amp; Trending Style Prompts</h2>
          <p style={pStyle}>
            These styles are driving the most engagement on social media right now. Use them to ride trending aesthetics.
          </p>

          <h3 style={h3Style}>16. Studio Ghibli Animation</h3>
          <p style={pStyle}>The Ghibli trend is still going strong. This prompt nails the hand-painted, nostalgic feel.</p>
          <div style={promptBlockStyle}>
{`A 8-second video in the style of a Studio Ghibli animated film. A small cottage on a hillside with wildflowers swaying in the breeze. Soft watercolor textures. Gentle, fluid animation — clouds drifting, grass swaying, butterflies floating. Warm color palette with soft greens, sky blues, and golden sunlight. Hand-painted feel. Peaceful, nostalgic atmosphere. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>17. Anime Opening Credits</h3>
          <p style={pStyle}>Turn yourself or your brand into an anime character. Huge engagement.</p>
          <div style={promptBlockStyle}>
{`A 10-second anime-style opening sequence. A young entrepreneur shown in dynamic anime art style with wind blowing their hair. Quick stylized cuts: running toward camera (2s), close-up of determined eyes (2s), power pose with dramatic background (3s), title card with Japanese-inspired typography (3s). Bold colors. Speed lines. Cherry blossoms in the air. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>18. Retro VHS Aesthetic</h3>
          <p style={pStyle}>Nostalgia is a powerful emotion. VHS aesthetic content gets 2-3x more saves.</p>
          <div style={promptBlockStyle}>
{`A 6-second video with an authentic VHS/retro camcorder look. Someone dancing in a living room. VHS tracking lines, color bleed, slight static, date stamp in the corner showing "MARCH 1994". Washed-out warm colors. 4:3 aspect ratio with rounded corners. Authentic imperfections of a 1990s home video. Nostalgic and charming.`}
          </div>

          <h3 style={h3Style}>19. Wes Anderson Symmetry</h3>
          <p style={pStyle}>Instantly recognizable aesthetic. Works for product reveals, interiors, and lifestyle content.</p>
          <div style={promptBlockStyle}>
{`A 6-second video in Wes Anderson's signature visual style. A perfectly arranged desk with quirky objects — a vintage typewriter, a globe, stacked books, a small cactus. Perfect bilateral symmetry. Static camera, centered composition. Pastel color palette — dusty pink, mint green, cream, and muted yellow. Whimsical, deliberately arranged. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>20. "POV" Video</h3>
          <p style={pStyle}>The POV format is one of the most engaging on TikTok. Makes the viewer feel like they're in the scene.</p>
          <div style={promptBlockStyle}>
{`A 6-second POV (point of view) video. First-person camera perspective. POV: You open your laptop and see your side hustle made $1,000 overnight. The scene plays out from the viewer's literal perspective — hands visible, realistic head movement. The screen lights up with notifications. Natural morning lighting. 9:16 vertical.`}
          </div>

          {/* SECTION: Educational */}
          <h2 style={h2Style}>Educational &amp; Tutorial Prompts</h2>
          <p style={pStyle}>
            For course creators, educators, and anyone who teaches online. These prompts produce professional instructional content.
          </p>

          <h3 style={h3Style}>21. Step-by-Step Tutorial</h3>
          <div style={promptBlockStyle}>
{`A 15-second tutorial video. Over-the-shoulder camera angle of a person at a clean desk. Scene 1 (0-5s): hands opening a laptop, the screen shows the first step. Scene 2 (5-10s): fingers clicking through the interface, with a subtle zoom-in on the key action. Scene 3 (10-15s): the completed result on screen, person nodding in satisfaction. Bright, clean lighting. Modern workspace. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>22. Whiteboard Explainer</h3>
          <div style={promptBlockStyle}>
{`A 12-second whiteboard animation video. A hand with a marker draws a funnel diagram showing awareness → interest → decision → action. The drawing builds progressively — each element appears as if being drawn in real-time. Clean white background. Bold black marker lines with blue highlights for key words. Educational, professional style. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>23. Animated Data Visualization</h3>
          <div style={promptBlockStyle}>
{`A 6-second video of an animated bar chart showing revenue growth over 6 months. Bars grow from the bottom upward, one at a time, left to right. Each bar is a slightly different shade of blue. The final, tallest bar gets a subtle glow effect. Numbers label each bar. Clean white background. Professional data visualization. 16:9 horizontal.`}
          </div>

          {/* SECTION: Business */}
          <h2 style={h2Style}>Business &amp; Corporate Prompts</h2>

          <h3 style={h3Style}>24. Company Overview</h3>
          <div style={promptBlockStyle}>
{`A 20-second company overview video. Scene 1 (0-3s): Exterior shot of a modern office building at morning. Scene 2 (3-7s): Team members arriving, greeting each other warmly. Scene 3 (7-11s): Wide shot of an open office — people collaborating at whiteboards and desks. Scene 4 (11-15s): Close-up of screens showing the product. Scene 5 (15-20s): Team together, smiling. Logo fade-in. Natural lighting. Warm, authentic feel. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>25. LinkedIn Post Video</h3>
          <div style={promptBlockStyle}>
{`A 8-second professional video for LinkedIn. Scene 1: Company achievement text — "10,000 customers" — appears with a professional animation. Scene 2: Quick visual proof — product screenshots and team photos. Scene 3: Forward-looking statement. LinkedIn-appropriate tone — professional yet personable. 1:1 square format.`}
          </div>

          <h3 style={h3Style}>26. Webinar Intro</h3>
          <div style={promptBlockStyle}>
{`A 6-second webinar intro. Animated title: "How to Scale with AI in 2026" with the date and time. Speaker headshot and name appear with a smooth animation. A subtle flowing gradient background. Professional but not stuffy. Builds anticipation. 16:9 horizontal.`}
          </div>

          {/* Pro Tips Section */}
          <h2 style={h2Style}>5 Pro Tips for Better AI Video Prompts</h2>

          <p style={pStyle}><strong>1. Always specify camera movement.</strong> Static shots are boring. Tell the AI exactly how the camera should move: "slow dolly in", "tracking shot following from behind", "orbit 180 degrees", "overhead descending to eye level". Camera movement is what separates amateur clips from cinematic content.</p>

          <p style={pStyle}><strong>2. Include duration and pacing.</strong> Don't leave timing to chance. Specify "5-second clip" or break longer videos into timed scenes: "Scene 1 (0-3s): establishing shot. Scene 2 (3-6s): close-up detail." AI tools produce much better results when they know the temporal structure.</p>

          <p style={pStyle}><strong>3. Specify aspect ratio every time.</strong> 9:16 for TikTok/Reels/Shorts. 16:9 for YouTube/websites. 1:1 for feed posts. 2.39:1 for cinematic widescreen. The AI can optimize composition when it knows the target format.</p>

          <p style={pStyle}><strong>4. Describe lighting explicitly.</strong> "Golden hour side lighting", "neon reflections on wet pavement", "soft studio lighting from the left with a gentle shadow." Lighting direction is the most overlooked element in AI video prompts — and it makes the biggest difference in output quality.</p>

          <p style={pStyle}><strong>5. Use film vocabulary.</strong> AI video tools are trained on film data. They understand terms like "shallow depth of field", "rack focus", "anamorphic lens flare", "color grading", "film grain", "bokeh", and "motivated lighting". Use these terms and the output quality jumps significantly.</p>

          {/* More prompts teasers */}
          <h2 style={h2Style}>4 More Prompts to Try</h2>

          <h3 style={h3Style}>27. Miniature Tilt-Shift</h3>
          <div style={promptBlockStyle}>
{`A 6-second video of a busy city intersection that looks like a miniature model. Tilt-shift effect — extreme shallow depth of field makes everything look tiny. Slightly sped up (1.5x) to enhance the toy-like effect. Overhead camera angle. Bright, saturated colors. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>28. Cinemagraph</h3>
          <div style={promptBlockStyle}>
{`A 5-second cinemagraph — mostly still image with one moving element. A café scene where everything is frozen except the steam rising from a coffee cup. The contrast between stillness and movement creates a mesmerizing, slightly uncanny effect. Photograph-quality. Loopable. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>29. Particle Disintegration</h3>
          <div style={promptBlockStyle}>
{`A 4-second video of a golden chess piece dissolving into particles. The particles float upward and scatter like sparks. The dissolution starts from one edge and sweeps across. The particles catch light as they drift. Dark background. Beautiful, dramatic. Slow motion. 16:9 horizontal.`}
          </div>

          <h3 style={h3Style}>30. Main Character Moment</h3>
          <div style={promptBlockStyle}>
{`A 6-second video of someone walking down a normal street. But filmed with extreme cinematic drama — slow motion, dramatic side lighting, wind effect on hair, lens flares, epic low-angle camera. The mundane becomes epic. The humor is in the over-the-top treatment of something ordinary. 9:16 vertical.`}
          </div>

          {/* Final CTA */}
          <div style={ctaBoxStyle}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Full Pack</p>
            <p style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Get All 160+ AI Video Prompts</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '420px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              Social media, product demos, tutorials, cinematic, corporate, and 25+ viral trending styles. Works with Sora, Runway, Pika, Kling AI, and Luma.
            </p>
            <Link href={VIDEO_PACK_LINK} style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', fontWeight: 800, fontSize: '16px' }}>
              Get the Video Prompt Pack — $29 →
            </Link>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>One-time payment · Instant download · 30-day money-back guarantee</p>
          </div>

          {/* Bundle upsell */}
          <div style={{ background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)', borderRadius: '16px', padding: '28px', textAlign: 'center', margin: '0 0 48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '8px' }}>Best Value</p>
            <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px', color: 'var(--text)' }}>Get all 13 AI kits for $97</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Video Pack + Image Pack + Mega Pack + 10 niche kits. $467 value — save 79%.</p>
            <a href={STRIPE_BUNDLE} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Get the Bundle — $97 →
            </a>
          </div>

          {/* Related content */}
          <h2 style={h2Style}>Related Guides</h2>
          <ul style={{ listStyle: 'none', margin: '0 0 48px' }}>
            {[
              { title: '50+ Viral ChatGPT Image Prompts for 2026', href: '/blog/chatgpt-image-prompts-2026' },
              { title: '40+ Best Midjourney Prompts for Stunning AI Art', href: '/blog/best-midjourney-prompts-2026' },
              { title: 'How to Make Money Selling AI Art in 2026', href: '/blog/how-to-make-money-selling-ai-art-2026' },
              { title: 'Best AI Prompt Packs for Every Business', href: '/blog/best-ai-prompt-packs-2026' },
            ].map(link => (
              <li key={link.href} style={{ padding: '8px 0' }}>
                <Link href={link.href} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 style={h2Style}>Frequently Asked Questions</h2>
          {[
            {
              q: 'What is the best AI video generation tool in 2026?',
              a: 'The top tools are Sora for cinematic quality, Runway Gen-3/Gen-4 for professional editing workflows, Pika for fast stylized content, Kling AI for realistic human motion, and Luma Dream Machine for 3D-aware generation. Most professional creators use 2-3 tools depending on the project.'
            },
            {
              q: 'How do I write better AI video prompts?',
              a: 'Include five elements in every prompt: subject description, camera movement (pan, zoom, dolly, tracking), lighting direction (golden hour, studio, neon), duration and pacing, and aspect ratio (9:16, 16:9, 1:1, or 2.39:1). Describe temporal changes — what happens at the beginning, middle, and end.'
            },
            {
              q: 'Can I use AI-generated videos commercially?',
              a: 'Yes, most AI video tools allow commercial use on paid plans. Sora, Runway, and Pika all grant commercial rights to subscribers. Check each platform\'s terms of service for specifics.'
            },
            {
              q: 'What aspect ratio should I use?',
              a: '9:16 vertical for TikTok, Reels, Shorts, and Stories. 16:9 horizontal for YouTube and websites. 1:1 square for Instagram feed and LinkedIn. 2.39:1 for cinematic widescreen. Always specify in your prompt.'
            },
            {
              q: 'Is Sora better than Runway?',
              a: 'They excel at different things. Sora produces longer, more coherent clips with better physics understanding. Runway offers better editing workflows (image-to-video, motion brush), faster generation, and tighter integration with professional tools. Many creators use both.'
            },
          ].map(faq => (
            <div key={faq.q} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>{faq.q}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}

        </div>
      </article>
    </Layout>
  );
}
