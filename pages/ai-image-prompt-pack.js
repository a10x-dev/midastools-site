import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';

export default function AIImagePromptPack() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'image-prompt-pack-lead', business: 'Visual Content' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Image Prompt Pack — 150+ Visual AI Prompts | Midas Tools</title>
        <meta name="description" content="150+ ready-to-use AI image prompts for social media, branding, e-commerce, content graphics, headshots, and viral aesthetics. Works with ChatGPT (DALL-E), Midjourney, Stable Diffusion, Leonardo AI, Ideogram. $29 one-time." />
        <meta name="keywords" content="AI image prompts, ChatGPT image prompts, Midjourney prompts, AI art prompts, DALL-E prompts, Stable Diffusion prompts, Leonardo AI prompts, AI photography prompts, AI product photography, AI headshots" />
        <meta property="og:title" content="AI Image Prompt Pack — 150+ Visual AI Prompts" />
        <meta property="og:description" content="150+ battle-tested image generation prompts for social media, brands, products, and content. Works with ChatGPT, Midjourney, DALL-E, and more. $29." />
        <meta property="og:url" content="https://www.midastools.co/ai-image-prompt-pack" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Image Prompt Pack — 150+ Visual AI Prompts | Midas Tools" />
        <meta name="twitter:description" content="150+ ready-to-use AI image prompts for social media, branding, e-commerce, and content. Works with ChatGPT, Midjourney, DALL-E. $29 one-time." />
        <link rel="canonical" href="https://www.midastools.co/ai-image-prompt-pack" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Image Prompt Pack",
          "description": "150+ ready-to-use AI image generation prompts for social media, branding, e-commerce, content, headshots, and viral aesthetics",
          "offers": { "@type": "Offer", "price": "29", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "brand": { "@type": "Brand", "name": "Midas Tools" },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What AI image tools do these prompts work with?", "acceptedAnswer": { "@type": "Answer", "text": "Every prompt works with ChatGPT (DALL-E), Midjourney, Stable Diffusion, Leonardo AI, Ideogram, and any other AI image generator that accepts text prompts." }},
            { "@type": "Question", "name": "Will the images look professional enough for commercial use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. These prompts are engineered with detailed style, lighting, composition, and quality parameters to produce professional-grade visuals suitable for marketing, social media, and e-commerce." }},
            { "@type": "Question", "name": "How is this different from text AI prompt packs?", "acceptedAnswer": { "@type": "Answer", "text": "Text prompt packs are for generating written content (copy, emails, blogs). The Image Prompt Pack is specifically designed for visual content — product photos, social media graphics, headshots, brand assets, and artistic styles." }},
            { "@type": "Question", "name": "Can I use the generated images commercially?", "acceptedAnswer": { "@type": "Answer", "text": "The prompts themselves are yours to use however you want. Commercial usage rights for generated images depend on the AI tool you use — most platforms (Midjourney, DALL-E, Leonardo AI) allow commercial use on paid plans." }},
            { "@type": "Question", "name": "Will I get updates when new prompts are added?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we regularly add new prompts as AI image tools evolve. You'll get an email when major updates drop, and you can re-download anytime." }},
            { "@type": "Question", "name": "Is there a money-back guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 30-day money-back guarantee, no questions asked. If the prompts don't level up your visuals, we'll refund you." }},
          ]
        })}} />
      </Head>

      <style>{`
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        h1, h2 { letter-spacing: -1.5px; }
        h1 span, h2 span { color: var(--gold); }
        .kit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .kit-card {
          background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 14px;
          padding: 24px; transition: border-color 0.2s ease;
        }
        .kit-card:hover { border-color: var(--gray-700); }
        .category-icon { font-size: 28px; margin-bottom: 12px; }
        .prompt-count {
          display: inline-block; background: rgba(59,95,255,0.1); color: var(--gold);
          padding: 2px 10px; border-radius: 100px; font-size: 12px; font-weight: 700; margin-bottom: 8px;
        }
        .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 32px; }
        .before-col, .after-col { padding: 28px; border-radius: 14px; }
        .before-col { background: rgba(255,50,50,0.04); border: 1px solid rgba(255,50,50,0.15); }
        .after-col { background: rgba(59,95,255,0.04); border: 1px solid rgba(59,95,255,0.15); }
        .faq-item { border-bottom: 1px solid var(--gray-800); padding: 20px 0; }
        .faq-q { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .faq-a { font-size: 15px; color: var(--gray-400); line-height: 1.7; }
        .tools-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 20px; }
        .tool-badge { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: var(--gray-200); }
        @media(max-width: 700px) {
          section { padding: 48px 20px; }
          .kit-grid { grid-template-columns: 1fr; }
          .before-after { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section style={{textAlign:'center', paddingBottom: 60}}>
        <div className="badge" style={{marginBottom:24}}>150+ AI Image Prompts · ChatGPT · Midjourney · DALL-E</div>
        <h1 style={{fontSize:'clamp(32px, 5vw, 52px)', fontWeight:900, lineHeight:1.1, marginBottom:16}}>
          Stop Guessing.<br/>Start Creating <span>Stunning AI Images.</span>
        </h1>
        <p style={{fontSize:18, color:'var(--gray-400)', maxWidth:560, margin:'0 auto 40px', lineHeight:1.7}}>
          150+ battle-tested image generation prompts for social media, brands, products, and content. Copy. Paste. Create visuals that stop the scroll.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Image Pack — $29 →</a>
        <p style={{marginTop:14, fontSize:14, color:'var(--gray-400)'}}>
          One-time payment · Instant download · 30-day money-back guarantee
        </p>
        <div className="tools-row">
          <div className="tool-badge">ChatGPT (DALL-E)</div>
          <div className="tool-badge">Midjourney</div>
          <div className="tool-badge">Stable Diffusion</div>
          <div className="tool-badge">Leonardo AI</div>
          <div className="tool-badge">Ideogram</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)', border:'1px solid var(--gray-800)', borderRadius:16, padding:48, textAlign:'center'}}>
          <h2 style={{fontSize:28, fontWeight:900, marginBottom:16}}>
            Your AI images look like <span>everyone else's</span>
          </h2>
          <p style={{color:'var(--gray-400)', fontSize:17, maxWidth:540, margin:'0 auto'}}>
            Generic prompts produce generic results. "A photo of a product on a table" gives you the same bland output as everyone else. The difference between forgettable AI images and <strong style={{color:'var(--gold)'}}>scroll-stopping visuals</strong> is the prompt. Our 150+ prompts are engineered with precise style, lighting, composition, and mood parameters.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Inside</div>
        <h2 style={{fontSize:'clamp(24px, 3.5vw, 36px)', fontWeight:900, marginBottom:8}}>
          6 categories. <span>150+ prompts.</span> Zero generic output.
        </h2>
        <p style={{color:'var(--gray-400)', fontSize:16, marginBottom:48}}>
          Every prompt is ready to use — just fill in the brackets and paste into your AI image tool.
        </p>

        <div className="kit-grid">
          {[
            {
              icon: '📸', title: 'Social Media Content',
              count: '25+',
              desc: 'Instagram posts, TikTok thumbnails, YouTube cover art, Twitter/X header images, Pinterest pins, Story graphics, carousel visuals, and platform-optimized formats.'
            },
            {
              icon: '🎨', title: 'Brand & Marketing',
              count: '25+',
              desc: 'Logo concepts, brand mockups, hero images, ad creatives, banner designs, presentation backgrounds, packaging mockups, and marketing collateral visuals.'
            },
            {
              icon: '🛍️', title: 'E-commerce Product Images',
              count: '25+',
              desc: 'Product photography styles, lifestyle shots, flat lays, white background studio shots, seasonal mockups, size comparison visuals, and packaging renders.'
            },
            {
              icon: '📝', title: 'Content & Blog Graphics',
              count: '25+',
              desc: 'Featured images, infographic layouts, data visualization styles, quote graphics, step-by-step illustrations, comparison visuals, and newsletter header images.'
            },
            {
              icon: '👤', title: 'Professional Headshots',
              count: '25+',
              desc: 'Corporate headshots, creative portraits, LinkedIn profile photos, team page photos, author headshots, speaker promo images, and personal brand portraits.'
            },
            {
              icon: '✨', title: 'Viral Aesthetic Styles',
              count: '25+',
              desc: 'Studio Ghibli style, cinematic film looks, neon cyberpunk, 3D renders, watercolor art, retro vintage, minimalist flat design, and trending aesthetic styles.'
            },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div className="category-icon">{f.icon}</div>
              <div className="prompt-count">{f.count} prompts</div>
              <div style={{fontSize:16, fontWeight:700, marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14, color:'var(--gray-400)', lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900}}>
          Before vs. <span>After</span>
        </h2>
        <div className="before-after">
          <div className="before-col">
            <div style={{fontSize:14, fontWeight:700, color:'rgba(255,100,100,0.8)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>Without the Image Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--gray-400)', lineHeight:2}}>
              <li>❌ Generic stock photo vibes from AI</li>
              <li>❌ Hours searching for the right visual</li>
              <li>❌ Expensive photographers and designers</li>
              <li>❌ Inconsistent brand look across platforms</li>
              <li>❌ Same AI art style as everyone else</li>
            </ul>
          </div>
          <div className="after-col">
            <div style={{fontSize:14, fontWeight:700, color:'var(--gold)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>With the Image Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--gray-200)', lineHeight:2}}>
              <li>✅ Unique, branded images in seconds</li>
              <li>✅ Consistent visual identity across everything</li>
              <li>✅ Professional-grade visuals without a designer</li>
              <li>✅ Organized by use case — find what you need fast</li>
              <li>✅ Trending styles that get engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900, marginBottom:32}}>
          Built for <span>visual creators</span>
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
          {[
            { title: 'Content Creators', desc: 'Thumbnails, cover art, and scroll-stopping social media visuals on demand' },
            { title: 'E-commerce Sellers', desc: 'Product photography, lifestyle shots, and packaging mockups without a studio' },
            { title: 'Social Media Managers', desc: 'Platform-optimized graphics for every channel, every day' },
            { title: 'Freelance Designers', desc: 'Quick concept visuals, mood boards, and client presentation mockups' },
            { title: 'Small Business Owners', desc: 'Professional marketing visuals without hiring a designer or photographer' },
            { title: 'Personal Brands', desc: 'Headshots, brand assets, and consistent visual identity across platforms' },
          ].map(p => (
            <div key={p.title} style={{background:'var(--gray-900)', border:'1px solid var(--gray-800)', borderRadius:12, padding:20}}>
              <div style={{fontSize:15, fontWeight:700, marginBottom:6}}>{p.title}</div>
              <div style={{fontSize:13, color:'var(--gray-400)', lineHeight:1.6}}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="buy" style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)', border:'2px solid rgba(59,95,255,0.4)', borderRadius:20, padding:48, textAlign:'center', maxWidth:500, margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:16}}>Visual AI Prompts</div>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:4}}>AI Image Prompt Pack</h2>
          <p style={{color:'var(--gray-400)', fontSize:15, marginBottom:16}}>150+ prompts across 6 categories</p>
          <div style={{fontSize:48, fontWeight:900, color:'var(--gold)', margin:'16px 0 4px'}}>$29</div>
          <p style={{color:'var(--gray-400)', fontSize:14, marginBottom:24}}>One-time payment</p>
          <ul style={{listStyle:'none', textAlign:'left', marginBottom:32, maxWidth:320, margin:'0 auto 32px'}}>
            {[
              '150+ ready-to-use image prompts',
              '6 categories (social, brand, product, content, headshots, aesthetics)',
              'Works with ChatGPT, Midjourney, DALL-E, Stable Diffusion, Leonardo AI',
              'Fill-in-the-bracket format — zero learning curve',
              'Style, lighting, and composition parameters built in',
              'Free updates as we add new prompts',
            ].map(f => (
              <li key={f} style={{fontSize:15, padding:'6px 0', color:'var(--text-secondary)'}}>
                <span style={{color:'var(--gold)', fontWeight:700, marginRight:10}}>✓</span>{f}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block', textAlign:'center'}}>
            Get the Image Pack — $29 →
          </a>
          <p style={{marginTop:16, fontSize:13, color:'var(--gray-400)'}}>
            30-day money-back guarantee · Secure checkout via Stripe
          </p>
        </div>
      </section>

      {/* BUNDLE UPSELL */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(59,95,255,0.04)', border:'1px solid rgba(59,95,255,0.15)', borderRadius:16, padding:32, textAlign:'center'}}>
          <div style={{fontSize:12, fontWeight:700, color:'var(--gold)', textTransform:'uppercase', letterSpacing:1}}>Want Text Prompts Too?</div>
          <p style={{fontSize:20, fontWeight:800, marginBottom:4, marginTop:8}}>Get all AI kits + prompt packs for $97</p>
          <p style={{fontSize:14, color:'var(--text-secondary)', marginBottom:16}}>All 15 AI kits — $535 value for $97. Save 82%. Plus every future kit free.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)', fontWeight:700, fontSize:15, textDecoration:'none'}}>
            Get the Bundle — $97 →
          </a>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section style={{background:'var(--gray-900)', borderTop:'1px solid var(--gray-800)', padding:'80px 40px', maxWidth:'100%'}}>
        <div style={{maxWidth:480, margin:'0 auto', textAlign:'center'}}>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:8}}>
            Want <span>5 free image prompts</span>?
          </h2>
          <p style={{fontSize:15, color:'var(--gray-400)', marginBottom:24}}>
            Get 5 of our best image prompts free — see the quality before you buy.
          </p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)', border:'1px solid rgba(59,95,255,0.2)', borderRadius:12, padding:20}}>
              <p style={{color:'var(--gold)', fontWeight:700, fontSize:16}}>Check your inbox!</p>
              <p style={{color:'var(--gray-400)', fontSize:14, marginTop:6}}>Your free image prompts are on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex', gap:10}}>
              <input
                type="email" placeholder="your@email.com" value={email}
                onChange={e => setEmail(e.target.value)} required
                style={{flex:1, padding:'14px 18px', borderRadius:10, border:'1px solid var(--gray-700)',
                  background:'var(--gray-900)', color:'var(--text)', fontSize:15, outline:'none'}}
              />
              <button type="submit" disabled={loading} className="btn-primary" style={{padding:'14px 24px', border:'none', cursor:'pointer', fontSize:15}}>
                {loading ? '...' : 'Send Free Sample'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900, marginBottom:32}}>Questions</h2>
        {[
          {
            q: 'What AI image tools do these prompts work with?',
            a: 'Every prompt works with ChatGPT (DALL-E), Midjourney, Stable Diffusion, Leonardo AI, Ideogram, and any other AI image generator that accepts text prompts. The prompts are plain text — copy, paste, and generate.'
          },
          {
            q: 'Will the images look professional enough to use?',
            a: 'Yes. Each prompt is engineered with specific style directions, lighting parameters, composition guidance, camera angles, and quality modifiers. The output is professional-grade — suitable for social media, marketing, and e-commerce.'
          },
          {
            q: 'How is this different from text AI prompt packs?',
            a: 'Text prompt packs generate written content — copy, emails, blog posts. The Image Prompt Pack is built specifically for visual content — product photos, social media graphics, headshots, brand visuals, and artistic styles. Different tools, different prompts, different output.'
          },
          {
            q: 'Can I use the generated images commercially?',
            a: 'The prompts are yours to use however you want. Commercial usage rights for the generated images depend on the AI tool you use — most platforms like Midjourney, DALL-E, and Leonardo AI allow commercial use on their paid plans. Check your tool\'s terms of service.'
          },
          {
            q: 'Will I get updates when new prompts are added?',
            a: 'Yes — we regularly add new prompts as AI image tools evolve and new styles trend. You\'ll get an email when major updates are available, and you can re-download anytime.'
          },
          {
            q: 'Is there a money-back guarantee?',
            a: '30 days, no questions asked. If the prompts don\'t level up your AI-generated visuals, email us and we\'ll refund you immediately.'
          },
        ].map(faq => (
          <div key={faq.q} className="faq-item">
            <div className="faq-q">{faq.q}</div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
