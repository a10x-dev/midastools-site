import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const TOOLS = [
  {
    title: 'AI Prompt Generator',
    desc: 'Generate expert-level prompts for sales emails, social media, product descriptions, blog outlines, cold outreach, AI images, video scripts, and business strategy. Fill in 3 fields, get a customized prompt, copy with one click.',
    href: '/prompt-generator',
    tag: 'Most Popular',
    categories: '8 categories',
    bg: 'var(--card-blue)',
  },
  {
    title: 'AI Business Name Generator',
    desc: 'Get 20 creative, brandable business names instantly. Choose from 16 industries and 6 naming styles — modern, playful, premium, bold, classic, or creative. Save favorites, copy all, generate unlimited.',
    href: '/business-name-generator',
    tag: 'New',
    categories: '16 industries',
    bg: 'var(--card-green)',
  },
  {
    title: 'Email Subject Line Tester',
    desc: 'Score your subject lines before you send. Instant feedback on open rate potential, spam risk, power words, and engagement. Includes 5 proven formula examples.',
    href: '/email-subject-line-tester',
    tag: 'New',
    categories: '6 scoring metrics',
    bg: 'var(--card-amber)',
  },
  {
    title: 'AI Hashtag Generator',
    desc: 'Generate optimized hashtags for Instagram, TikTok, Twitter/X, LinkedIn, and YouTube. 22 niches, 4 styles, platform-specific counts. Copy all with one click.',
    href: '/hashtag-generator',
    tag: 'New',
    categories: '22 niches',
    bg: 'var(--card-cyan)',
  },
  {
    title: 'AI Prompt Scorer',
    desc: 'Paste any AI prompt and get an instant quality score (1-100) with specific feedback. Scores specificity, context, role, format, and constraints — plus a rewritten improved version you can copy.',
    href: '/prompt-scorer',
    tag: 'New',
    categories: '5 scoring criteria',
    bg: 'var(--card-purple)',
  },
  {
    title: 'AI Prompt Enhancer',
    desc: 'Paste any basic AI prompt and get 5 professionally enhanced versions — Professional, Creative, Data-Driven, Viral, and Expert styles. Copy or share on Twitter with one click.',
    href: '/prompt-enhancer',
    tag: 'New',
    categories: '5 enhancement styles',
    bg: 'var(--card-pink)',
  },
  {
    title: 'AI Prompt Roaster',
    desc: 'Paste your AI prompt and get brutally honest (but hilarious) feedback on what\'s wrong. Checks 10 common "prompt sins," then generates a fixed expert-level version. Fun, shareable, and actually useful.',
    href: '/prompt-roaster',
    tag: '🔥 Viral',
    categories: '10 prompt sins',
    bg: 'var(--card-amber)',
  },
  {
    title: 'OpenClaw Cost Calculator',
    desc: 'See how the April 2026 Claude pricing change affects your AI agent. Compare models, estimate monthly costs, and find savings with multi-model routing. Updated April 8.',
    href: '/openclaw-cost-calculator',
    tag: '🔥 NEW',
    categories: '5 models · before/after',
    bg: 'var(--card-amber)',
  },
  {
    title: 'OpenClaw SOUL.md Generator',
    desc: 'Build your AI agent\'s complete configuration in 60 seconds. Choose from 6 industry presets (E-commerce, Content Creator, Real Estate, SaaS, Freelancer, Small Business), describe your business, and get a production-ready SOUL.md file.',
    href: '/soul-generator',
    tag: '🔥 NEW',
    categories: '6 industry presets',
    bg: 'var(--card-cyan)',
  },
  {
    title: 'AI Content Detector',
    desc: 'Paste any text and instantly check if it sounds AI-generated. Analyzes 8 linguistic signals — sentence uniformity, hedging phrases, vocabulary diversity & more. Get specific tips to humanize your writing.',
    href: '/ai-content-detector',
    tag: '🔥 NEW',
    categories: '8 detection signals',
    bg: 'var(--card-pink)',
  },
  {
    title: 'AI Image Prompt Builder',
    desc: 'Build perfect AI image prompts visually. Pick from 25 trending styles (Ghibli, Pixar, Action Figure, Pet Portrait, LinkedIn Headshot), set mood & lighting, get copy-paste prompts for ChatGPT, Midjourney, DALL·E & Stable Diffusion.',
    href: '/image-prompt-builder',
    tag: '🔥 Trending',
    categories: '25 art styles · 4 platforms',
    bg: 'var(--card-purple)',
  },
  {
    title: 'AI Income Blueprint',
    desc: 'Answer 3 questions, get your personalized AI founder archetype, estimated monthly income potential, and top 3 matched side hustles. Shareable results — challenge your friends.',
    href: '/ai-income-blueprint',
    tag: '🔥 NEW',
    categories: '6 archetypes · 12 side hustles',
    bg: 'var(--card-green)',
  },
  {
    title: 'Will AI Replace My Job?',
    desc: 'Check your job\'s AI replacement risk with real 2026 data. 40+ jobs analyzed with risk scores, automation timelines, at-risk tasks, and safe skills. Shareable results — compare with friends.',
    href: '/ai-job-risk',
    tag: '🔥 VIRAL',
    categories: '40+ jobs · risk scores',
    bg: 'var(--card-pink)',
  },
  {
    title: 'AI Action Figure Generator',
    desc: 'Turn yourself into a collectible action figure! Pick your packaging style (Barbie Box, Funko Pop, Star Wars, Anime), choose accessories, pose — get a perfect ChatGPT prompt.',
    href: '/action-figure-generator',
    tag: '🔥 TRENDING',
    categories: '8 styles · 50+ accessories',
    bg: 'var(--card-yellow)',
  },
  {
    title: 'AI Ghibli Art Generator',
    desc: 'Create stunning Studio Ghibli-style AI art. Choose from 8 Miyazaki film styles (Spirited Away, Totoro, Howl\'s Castle), set scenes, moods, and magical elements. The trend that broke ChatGPT — 150M+ users.',
    href: '/ghibli-prompt-generator',
    tag: '🔥 VIRAL',
    categories: '8 film styles · 20 elements',
    bg: 'var(--card-green)',
  },
  {
    title: 'AI Pet Portrait Generator',
    desc: 'Turn your pet into a royal portrait, action figure, Ghibli character, trading card, or even imagine them as a human! 12 art styles, 8 backgrounds. The $14B pet portrait trend made free.',
    href: '/pet-portrait-generator',
    tag: '🔥 NEW',
    categories: '12 styles · 8 pets',
    bg: 'var(--card-purple)',
  },
  {
    title: '"Hug My Younger Self" AI Generator',
    desc: 'Create the viral AI photo of you hugging your childhood self. 8 photo styles, 8 settings, 20 emotional details. The #1 AI trend of 2026.',
    href: '/hug-younger-self-generator',
    tag: '🔥 VIRAL',
    categories: '8 styles · 8 settings',
    bg: 'var(--card-pink)',
  },
  {
    title: 'AI Lego Minifigure Generator',
    desc: 'Turn anyone into a Lego minifigure, box art, or movie scene. 8 Lego styles, 8 scenes, 20 accessories. ABS plastic perfection.',
    href: '/lego-prompt-generator',
    tag: '🔥 VIRAL',
    categories: '8 styles · 20 accessories',
    bg: 'var(--card-amber)',
  },
  {
    title: 'AI Miniature Diorama Generator',
    desc: 'Create tiny handcrafted-looking worlds — tilt-shift cities, snow globes, dollhouse interiors. 8 styles, 6 lighting modes, 20 details.',
    href: '/miniature-diorama-generator',
    tag: '🔥 NEW',
    categories: '8 styles · 6 lighting',
    bg: 'var(--card-cyan)',
  },
  {
    title: 'AI Tattoo Design Prompt Generator',
    desc: 'Design your dream tattoo with AI. Choose styles like traditional, blackwork, watercolor, geometric, Japanese, and more. Set placement, size, and details — get a perfect prompt for ChatGPT, Midjourney, or DALL·E.',
    href: '/tattoo-generator',
    tag: '🔥 TRENDING',
    categories: '12 styles · custom placement',
    bg: 'var(--card-amber)',
  },
  {
    title: 'AI Album Cover Prompt Generator',
    desc: 'Create stunning album cover art with AI. Pick your genre, aesthetic, mood, and visual style — get a ready-to-use prompt for ChatGPT, Midjourney, or DALL·E. Perfect for musicians, producers, and playlist curators.',
    href: '/album-cover-generator',
    tag: '🔥 NEW',
    categories: '10+ genres · custom aesthetics',
    bg: 'var(--card-purple)',
  },
  {
    title: 'AI Fantasy Map Generator',
    desc: 'Create stunning D&D, RPG, and world-building maps with AI. Tolkien-style parchment, pixel art, dark fantasy, steampunk & more. Mountains, rivers, dragon lairs, magic portals — get the perfect prompt.',
    href: '/fantasy-map-generator',
    tag: '🔥 NEW',
    categories: '8 styles · 16 terrains',
    bg: 'var(--card-green)',
  },
  {
    title: 'AI Childhood Photo Reimaginer',
    desc: 'Reimagine childhood photos in magical art styles — Studio Ghibli kid, Pixar character, fairy tale illustration, superhero origin, vintage film. The most emotional AI trend of 2026.',
    href: '/childhood-reimagine-generator',
    tag: '🔥 VIRAL',
    categories: '12 styles · 12 eras',
    bg: 'var(--card-amber)',
  },
  {
    title: 'AI Caricature Generator',
    desc: 'Create the viral ChatGPT caricature of you and your job! Pick your style (Pixar, Manga, Pop Art, Bobblehead), choose expression, background, and props. The trend that crashed ChatGPT — 13K outages.',
    href: '/caricature-generator',
    tag: '🔥 VIRAL',
    categories: '8 styles · custom props',
    bg: 'var(--card-yellow)',
  },
  {
    title: '🔥 AI Photo Roast Generator',
    desc: 'Get a hilarious AI-powered roast of any photo. Pick a style, describe your photo, and get a brutally funny prompt.',
    href: '/photo-roast-generator',
    tag: '🔥 VIRAL',
    categories: 'Fun · multiple roast styles',
    bg: 'var(--card-pink)',
  },
];

const COMING_SOON = [
  { title: 'AI Headline Analyzer', desc: 'Analyze blog headlines for SEO, click-through potential, and readability.' },
  { title: 'AI Slogan Generator', desc: 'Generate catchy slogans and taglines for your brand in seconds.' },
];

export default function Tools() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free AI Tools for Entrepreneurs',
    url: 'https://www.midastools.co/tools',
    description: 'Free AI-powered tools for entrepreneurs and small businesses. Generate prompts, business names, and more — no signup required.',
  };

  return (
    <Layout>
      <Head>
        <title>Free AI Tools for Entrepreneurs (2026) | Midas Tools</title>
        <meta name="description" content="Free AI-powered tools for entrepreneurs. AI Prompt Generator, Business Name Generator, and more. No signup required. Generate instantly." />
        <meta property="og:title" content="Free AI Tools for Entrepreneurs | Midas Tools" />
        <meta property="og:description" content="Free AI tools to grow your business. Prompt generator, business name generator, and more coming soon." />
        <meta property="og:url" content="https://www.midastools.co/tools" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/tools" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .tools-page { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        .tools-hero { text-align: center; margin-bottom: 56px; }
        .tools-hero h1 { font-size: clamp(32px, 5.5vw, 52px); font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .tools-hero h1 span { color: var(--accent); }
        .tools-hero p { font-size: 18px; color: var(--text-secondary); max-width: 540px; margin: 0 auto; line-height: 1.7; }

        .tool-card {
          border: 2px solid var(--border); border-radius: 20px; padding: 40px;
          margin-bottom: 20px; transition: border-color 0.2s, box-shadow 0.2s;
          display: flex; justify-content: space-between; align-items: center; gap: 32px;
        }
        .tool-card:hover { border-color: var(--accent); box-shadow: 0 8px 32px rgba(59,95,255,0.08); }
        .tool-info { flex: 1; }
        .tool-tags { display: flex; gap: 8px; margin-bottom: 12px; align-items: center; }
        .tool-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .tool-tag.free { background: #ECFDF5; color: #059669; }
        .tool-tag.popular { background: rgba(59,95,255,0.08); color: var(--accent); }
        .tool-tag.new { background: #FEF3C7; color: #D97706; }
        .tool-title { font-size: 24px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
        .tool-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
        .tool-meta { font-size: 13px; color: var(--text-tertiary); font-weight: 600; }
        .tool-cta {
          display: inline-block; background: var(--accent); color: #fff; padding: 14px 32px;
          border-radius: 100px; font-weight: 700; font-size: 15px; text-decoration: none;
          white-space: nowrap; flex-shrink: 0; transition: transform 0.15s, box-shadow 0.15s;
        }
        .tool-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(59,95,255,0.25); }

        .coming-section { margin-top: 56px; }
        .coming-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
        .coming-section > p { font-size: 15px; color: var(--text-secondary); margin-bottom: 28px; }
        .coming-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 48px; }
        .coming-card {
          background: var(--surface); border: 1px dashed var(--border); border-radius: 16px; padding: 24px;
          opacity: 0.7; transition: opacity 0.2s;
        }
        .coming-card:hover { opacity: 1; }
        .coming-card h3 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .coming-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        .tools-upsell {
          background: var(--text); color: #fff; border-radius: 20px; padding: 48px;
          text-align: center; margin-top: 48px;
        }
        .tools-upsell h2 { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .tools-upsell p { color: rgba(255,255,255,0.7); font-size: 16px; margin-bottom: 28px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .tools-upsell a {
          display: inline-block; background: #fff; color: var(--text); padding: 16px 36px;
          border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none;
        }

        @media(max-width:700px) {
          .tools-page { padding: 48px 20px; }
          .tool-card { flex-direction: column; padding: 28px; align-items: stretch; }
          .tool-cta { text-align: center; }
        }
      `}</style>

      <div className="tools-page">
        <div className="tools-hero">
          <div className="badge" style={{ marginBottom: 24 }}>100% Free &middot; No Signup</div>
          <h1>Free AI Tools for<br /><span>Entrepreneurs</span></h1>
          <p>Powerful AI tools to help you start and grow your business. Free forever, no account required.</p>
        </div>

        <Link href="/starter-pack" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5FFF 100%)',
            color: '#FFF', borderRadius: 20, padding: '24px 28px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 20, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, opacity: 0.9, marginBottom: 6 }}>
                ★ WANT THE BEST 20 PROMPTS? TRY US FOR $9
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
                Starter Pack — 20 hand-picked AI prompts
              </div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>
                Cold outreach, landing pages, content, AI images, sales, productivity. Instant download. 30-day guarantee.
              </div>
            </div>
            <div style={{
              background: '#FBBF24', color: '#1E3A8A', fontWeight: 800, fontSize: 15,
              padding: '14px 24px', borderRadius: 99, whiteSpace: 'nowrap',
            }}>
              Get 20 Prompts — $9 →
            </div>
          </div>
        </Link>

        {TOOLS.map(tool => (
          <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="tool-card">
              <div className="tool-info">
                <div className="tool-tags">
                  <span className="tool-tag free">Free</span>
                  <span className={`tool-tag ${tool.tag === 'New' ? 'new' : 'popular'}`}>{tool.tag}</span>
                </div>
                <div className="tool-title">{tool.title}</div>
                <div className="tool-desc">{tool.desc}</div>
                <div className="tool-meta">{tool.categories} &middot; Instant results &middot; No signup</div>
              </div>
              <span className="tool-cta">Try it free &rarr;</span>
            </div>
          </Link>
        ))}

        <div className="coming-section" style={{ marginTop: 48 }}>
          <h2>Free Prompt Templates</h2>
          <p>160+ copy-paste prompts organized by use case. No signup required.</p>
          <div className="coming-grid" style={{ marginBottom: 32 }}>
            {[
              { href: '/prompts/chatgpt-coding-prompts', title: 'Coding & Programming', desc: '10 prompts for debugging, code review, refactoring, APIs, and tests.' },
              { href: '/prompts/chatgpt-email-subject-lines', title: 'Email Subject Lines', desc: '10 prompts for subject lines that get 40%+ open rates.' },
              { href: '/prompts/chatgpt-social-media-captions', title: 'Social Media Captions', desc: '10 prompts for Instagram, LinkedIn, Twitter/X, and TikTok.' },
              { href: '/prompts/chatgpt-youtube-video-scripts', title: 'YouTube Video Scripts', desc: '10 prompts for hooks, tutorials, Shorts, and thumbnails.' },
              { href: '/prompts/chatgpt-cold-email', title: 'Cold Emails', desc: '10 prompts for outreach that actually gets replies.' },
              { href: '/prompts/chatgpt-product-descriptions', title: 'Product Descriptions', desc: '10 prompts for e-commerce, Etsy, Amazon, and Shopify.' },
            ].map(t => (
              <Link key={t.href} href={t.href} style={{ textDecoration: 'none' }}>
                <div className="coming-card" style={{ opacity: 1, border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <h3>{t.title} &rarr;</h3>
                  <p>{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Link href="/prompts" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              Browse all 16 categories &rarr;
            </Link>
          </div>
        </div>

        <div className="coming-section">
          <h2>Open-Source Resources</h2>
          <p>Free resources hosted on GitHub. Star them, fork them, or just use them.</p>
          <div className="coming-grid">
            {[
              { href: 'https://manduks.github.io/free-ai-prompts/', title: '100+ Free AI Prompts', desc: 'Copy-paste prompts for ChatGPT, Claude & Midjourney. Business, marketing, sales, images.' },
              { href: 'https://manduks.github.io/ai-prompt-cheatsheet/', title: 'AI Prompt Cheat Sheet', desc: '200+ prompts with the CRAFT framework. The only cheat sheet you need.' },
              { href: 'https://manduks.github.io/ai-job-risk-database/', title: 'AI Job Risk Database', desc: '102 occupations ranked by AI automation risk. Data from BLS, WEF, Goldman Sachs.' },
            ].map(t => (
              <a key={t.href} href={t.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="coming-card" style={{ opacity: 1, border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <h3>{t.title} &#8599;</h3>
                  <p>{t.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="coming-section">
          <h2>Coming Soon</h2>
          <p>More free AI tools launching soon. Want to be notified?</p>
          <div className="coming-grid">
            {COMING_SOON.map(tool => (
              <div key={tool.title} className="coming-card">
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-upsell">
          <h2>Ready for the full toolkit?</h2>
          <p>Our premium AI kits include 1,500+ prompts, templates, and workflows for every business need.</p>
          <a href="/bundle">Get All 16 Kits &mdash; $97 (Save 83%) &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
