import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/cNi6oGgsLfTrfha2xAcMM0g';

export default function AIVideoPromptPack() {
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
        body: JSON.stringify({ email, source: 'video-prompt-pack-lead', business: 'Video Content' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Video Prompt Pack — 150+ Video Generation Prompts | Midas Tools</title>
        <meta name="description" content="150+ ready-to-use AI video prompts for social media, product demos, tutorials, cinematic content, corporate videos, and viral styles. Works with Sora, Runway, Pika, Kling AI, Luma. $29 one-time." />
        <meta name="keywords" content="AI video prompts, Sora prompts, Runway prompts, Pika prompts, AI video generation, Kling AI prompts, Luma Dream Machine prompts, AI video maker, text to video prompts, video generation prompts" />
        <meta property="og:title" content="AI Video Prompt Pack — 150+ Video Generation Prompts" />
        <meta property="og:description" content="150+ battle-tested video generation prompts for social media, products, tutorials, and cinematic content. Works with Sora, Runway, Pika, Kling AI, and more. $29." />
        <meta property="og:url" content="https://midastools.co/ai-video-prompt-pack" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Video Prompt Pack — 150+ Video Generation Prompts | Midas Tools" />
        <meta name="twitter:description" content="150+ ready-to-use AI video generation prompts for social media, products, tutorials, and cinematic content. Works with Sora, Runway, Pika. $29 one-time." />
        <link rel="canonical" href="https://midastools.co/ai-video-prompt-pack" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Video Prompt Pack",
          "description": "150+ ready-to-use AI video generation prompts for social media, product demos, tutorials, cinematic content, corporate videos, and viral trending styles",
          "url": "https://midastools.co/ai-video-prompt-pack",
          "image": "https://midastools.co/og-image.png",
          "offers": {
            "@type": "Offer",
            "price": "29",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": "30",
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
              "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" },
                "transitTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" }
              }
            }
          },
          "brand": "Midas Tools",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "29"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Alex K." },
              "reviewBody": "These video prompts are a game-changer for my TikTok content. The camera movement and lighting instructions built into each prompt make the output look cinematic. Sora + these prompts = unlimited content."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Rachel F." },
              "reviewBody": "I run a small marketing agency and we use these for client product demos and social media videos. The quality difference between these engineered prompts and what we were writing before is night and day."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Marcus D." },
              "reviewBody": "Great variety of video styles and formats. The trending styles section helped me create viral content that actually got views. Wish there were more prompts for longer-form content, but solid pack overall."
            }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What AI video tools do these prompts work with?", "acceptedAnswer": { "@type": "Answer", "text": "Every prompt works with Sora (OpenAI), Runway Gen-3/Gen-4, Pika Labs, Kling AI, Luma Dream Machine, Stable Video Diffusion, HailuoAI (MiniMax), and any AI video generator that accepts text prompts." }},
            { "@type": "Question", "name": "Do I need technical skills to use these prompts?", "acceptedAnswer": { "@type": "Answer", "text": "No. Every prompt is ready to use — just fill in the brackets with your specifics and paste into your AI video tool. The prompts include camera movement, lighting, duration, and aspect ratio instructions so you get professional results without being a filmmaker." }},
            { "@type": "Question", "name": "How is this different from the AI Image Prompt Pack?", "acceptedAnswer": { "@type": "Answer", "text": "The Image Prompt Pack generates still images. The Video Prompt Pack is specifically designed for motion content — it includes camera movement instructions, duration specifications, transition effects, and temporal descriptions that image prompts don't need." }},
            { "@type": "Question", "name": "Can I use the generated videos commercially?", "acceptedAnswer": { "@type": "Answer", "text": "The prompts are yours to use however you want. Commercial usage rights for generated videos depend on the AI tool you use — check your tool's terms of service. Most platforms allow commercial use on paid plans." }},
            { "@type": "Question", "name": "What video formats and aspect ratios are covered?", "acceptedAnswer": { "@type": "Answer", "text": "Every major format: 9:16 vertical (TikTok, Reels, Shorts), 16:9 horizontal (YouTube, websites), 1:1 square (feed posts), and 2.39:1 cinematic widescreen. Each prompt specifies the recommended aspect ratio." }},
            { "@type": "Question", "name": "Is there a money-back guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 30-day money-back guarantee, no questions asked. If the prompts don't level up your AI-generated videos, we'll refund you." }},
          ]
        })}} />
      </Head>

      <style>{`
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        h1, h2 { letter-spacing: -1.5px; }
        h1 span, h2 span { color: var(--accent); }
        .kit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .kit-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 14px;
          padding: 24px; transition: border-color 0.2s ease;
        }
        .kit-card:hover { border-color: var(--text-tertiary); }
        .category-icon { font-size: 28px; margin-bottom: 12px; }
        .prompt-count {
          display: inline-block; background: rgba(59,95,255,0.1); color: var(--accent);
          padding: 2px 10px; border-radius: 100px; font-size: 12px; font-weight: 700; margin-bottom: 8px;
        }
        .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 32px; }
        .before-col, .after-col { padding: 28px; border-radius: 14px; }
        .before-col { background: rgba(255,50,50,0.04); border: 1px solid rgba(255,50,50,0.15); }
        .after-col { background: rgba(59,95,255,0.04); border: 1px solid rgba(59,95,255,0.15); }
        .faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; }
        .faq-q { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
        .faq-a { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }
        .tools-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 20px; }
        .tool-badge { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: var(--text); }
        @media(max-width: 700px) {
          section { padding: 48px 20px; }
          .kit-grid { grid-template-columns: 1fr; }
          .before-after { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section style={{textAlign:'center', paddingBottom: 60}}>
        <div className="badge" style={{marginBottom:24}}>150+ AI Video Prompts · Sora · Runway · Pika · Kling AI</div>
        <h1 style={{fontSize:'clamp(32px, 5vw, 52px)', fontWeight:900, lineHeight:1.1, marginBottom:16}}>
          Stop Scripting.<br/>Start Generating <span>Stunning AI Videos.</span>
        </h1>
        <p style={{fontSize:18, color:'var(--text-secondary)', maxWidth:560, margin:'0 auto 40px', lineHeight:1.7}}>
          150+ battle-tested video generation prompts for social media, product demos, tutorials, cinematic content, and viral trends. Copy. Paste. Generate videos that convert.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Video Pack — $29 →</a>
        <p style={{marginTop:14, fontSize:14, color:'var(--text-secondary)'}}>
          One-time payment · Instant download · 30-day money-back guarantee
        </p>
        <div className="tools-row">
          <div className="tool-badge">Sora (OpenAI)</div>
          <div className="tool-badge">Runway Gen-3/4</div>
          <div className="tool-badge">Pika Labs</div>
          <div className="tool-badge">Kling AI</div>
          <div className="tool-badge">Luma Dream Machine</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:48, textAlign:'center'}}>
          <h2 style={{fontSize:28, fontWeight:900, marginBottom:16}}>
            AI video tools are powerful — but <span>prompting is hard</span>
          </h2>
          <p style={{color:'var(--text-secondary)', fontSize:17, maxWidth:540, margin:'0 auto'}}>
            You type "make a video of my product" and get garbage. The difference between a useless 4-second clip and a <strong style={{color:'var(--accent)'}}>professional-grade video</strong> is the prompt. Our 150+ prompts include camera movement, lighting, duration, composition, and style parameters — everything the AI needs to produce cinematic output.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Inside</div>
        <h2 style={{fontSize:'clamp(24px, 3.5vw, 36px)', fontWeight:900, marginBottom:8}}>
          6 categories. <span>150+ prompts.</span> Every video format.
        </h2>
        <p style={{color:'var(--text-secondary)', fontSize:16, marginBottom:48}}>
          Every prompt is ready to use — just fill in the brackets and paste into your AI video tool.
        </p>

        <div className="kit-grid">
          {[
            {
              icon: '📱', title: 'Social Media Videos',
              count: '25+',
              desc: 'TikTok, Reels, YouTube Shorts, Stories. Product showcases, day-in-the-life montages, unboxing videos, POV clips, loop content, engagement bait, seasonal themes.'
            },
            {
              icon: '🎬', title: 'Product & Marketing',
              count: '25+',
              desc: 'Product reveals, 360° spins, lifestyle demos, problem-solution ads, UGC-style ads, comparison ads, hero banners, email animations, retargeting clips.'
            },
            {
              icon: '📚', title: 'Educational & Tutorials',
              count: '25+',
              desc: 'Step-by-step tutorials, screen recording styles, whiteboard explainers, course content, animated data charts, FAQ videos, myth-busting, process flows.'
            },
            {
              icon: '🎥', title: 'Cinematic & Storytelling',
              count: '25+',
              desc: 'Establishing shots, character intros, chase sequences, flashbacks, trailers, B-roll, mood pieces, transitions, time freeze, light painting, morphing effects.'
            },
            {
              icon: '🏢', title: 'Business & Corporate',
              count: '25+',
              desc: 'Company overviews, pitch deck intros, training videos, webinar openers, employee spotlights, LinkedIn posts, conference booth displays, event recaps.'
            },
            {
              icon: '🔥', title: 'Viral & Trending Styles',
              count: '25+',
              desc: 'Ghibli style, anime openings, Pixar 3D, VHS retro, Wes Anderson, cyberpunk, vaporwave, dark academia, cottagecore, meme formats, AI art experiments.'
            },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div className="category-icon">{f.icon}</div>
              <div className="prompt-count">{f.count} prompts</div>
              <div style={{fontSize:16, fontWeight:700, marginBottom:8, color:'var(--text)'}}>{f.title}</div>
              <div style={{fontSize:14, color:'var(--text-secondary)', lineHeight:1.6}}>{f.desc}</div>
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
            <div style={{fontSize:14, fontWeight:700, color:'rgba(255,100,100,0.8)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>Without the Video Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--text-secondary)', lineHeight:2}}>
              <li>❌ Generic, unusable AI video output</li>
              <li>❌ Hours watching tutorials on prompting</li>
              <li>❌ Expensive videographers and editors</li>
              <li>❌ Wrong aspect ratios and durations</li>
              <li>❌ No camera movement or cinematic feel</li>
            </ul>
          </div>
          <div className="after-col">
            <div style={{fontSize:14, fontWeight:700, color:'var(--accent)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>With the Video Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--text)', lineHeight:2}}>
              <li>✅ Professional-grade videos in minutes</li>
              <li>✅ Every format covered (9:16, 16:9, 1:1, cinematic)</li>
              <li>✅ Built-in camera, lighting, and style instructions</li>
              <li>✅ Organized by use case — find what you need fast</li>
              <li>✅ Trending styles that get views and engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900, marginBottom:32}}>
          Built for <span>video creators</span>
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
          {[
            { title: 'Content Creators', desc: 'TikToks, Reels, Shorts, and Story content that stops the scroll and grows your audience' },
            { title: 'Marketers', desc: 'Product demos, ad creatives, and explainer videos without hiring a production team' },
            { title: 'Course Creators', desc: 'Professional tutorial videos, animated lessons, and engaging educational content' },
            { title: 'E-commerce Brands', desc: 'Product showcases, unboxing videos, and lifestyle demos that convert browsers to buyers' },
            { title: 'Agencies', desc: 'Client deliverables at scale — social content, brand videos, and corporate communications' },
            { title: 'Small Business Owners', desc: 'Professional marketing videos without the $5K+ production budget' },
          ].map(p => (
            <div key={p.title} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:20}}>
              <div style={{fontSize:15, fontWeight:700, marginBottom:6, color:'var(--text)'}}>{p.title}</div>
              <div style={{fontSize:13, color:'var(--text-secondary)', lineHeight:1.6}}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="buy" style={{paddingTop:0}}>
        <div style={{background:'var(--surface)', border:'2px solid rgba(59,95,255,0.4)', borderRadius:20, padding:48, textAlign:'center', maxWidth:500, margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:16}}>AI Video Prompts</div>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:4}}>AI Video Prompt Pack</h2>
          <p style={{color:'var(--text-secondary)', fontSize:15, marginBottom:16}}>150+ prompts across 6 categories</p>
          <div style={{fontSize:48, fontWeight:900, color:'var(--accent)', margin:'16px 0 4px'}}>$29</div>
          <p style={{color:'var(--text-secondary)', fontSize:14, marginBottom:24}}>One-time payment</p>
          <ul style={{listStyle:'none', textAlign:'left', marginBottom:32, maxWidth:360, margin:'0 auto 32px'}}>
            {[
              '150+ ready-to-use video generation prompts',
              '6 categories (social, product, tutorial, cinematic, corporate, viral)',
              'Works with Sora, Runway, Pika, Kling AI, Luma, and more',
              'Camera movement, lighting, and duration built into every prompt',
              'Every aspect ratio: 9:16, 16:9, 1:1, and cinematic widescreen',
              'Free updates as new tools and styles emerge',
            ].map(f => (
              <li key={f} style={{fontSize:15, padding:'6px 0', color:'var(--text-secondary)'}}>
                <span style={{color:'var(--accent)', fontWeight:700, marginRight:10}}>✓</span>{f}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block', textAlign:'center'}}>
            Get the Video Pack — $29 →
          </a>
          <p style={{marginTop:16, fontSize:13, color:'var(--text-secondary)'}}>
            30-day money-back guarantee · Secure checkout via Stripe
          </p>
        </div>
      </section>

      {/* BUNDLE UPSELL */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(59,95,255,0.04)', border:'1px solid rgba(59,95,255,0.15)', borderRadius:16, padding:32, textAlign:'center'}}>
          <div style={{fontSize:12, fontWeight:700, color:'var(--accent)', textTransform:'uppercase', letterSpacing:1}}>Want All Our Prompt Packs?</div>
          <p style={{fontSize:20, fontWeight:800, marginBottom:4, marginTop:8}}>Get all AI kits + prompt packs for $97</p>
          <p style={{fontSize:14, color:'var(--text-secondary)', marginBottom:16}}>All 15 AI kits — $535 value for $97. Save 82%. Plus every future kit free.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--accent)', fontWeight:700, fontSize:15, textDecoration:'none'}}>
            Get the Bundle — $97 →
          </a>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section style={{background:'var(--text)', borderTop:'1px solid var(--border)', padding:'80px 40px', maxWidth:'100%'}}>
        <div style={{maxWidth:480, margin:'0 auto', textAlign:'center'}}>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:8, color:'#FFFFFF'}}>
            Want <span style={{color:'var(--accent)'}}>5 free video prompts</span>?
          </h2>
          <p style={{fontSize:15, color:'rgba(255,255,255,0.6)', marginBottom:24}}>
            Get 5 of our best video generation prompts free — see the quality before you buy.
          </p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)', border:'1px solid rgba(59,95,255,0.2)', borderRadius:12, padding:20}}>
              <p style={{color:'var(--accent)', fontWeight:700, fontSize:16}}>Check your inbox!</p>
              <p style={{color:'rgba(255,255,255,0.6)', fontSize:14, marginTop:6}}>Your free video prompts are on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex', gap:10}}>
              <input
                type="email" placeholder="your@email.com" value={email}
                onChange={e => setEmail(e.target.value)} required
                style={{flex:1, padding:'14px 18px', borderRadius:10, border:'1px solid rgba(255,255,255,0.15)',
                  background:'rgba(255,255,255,0.05)', color:'#FFFFFF', fontSize:15, outline:'none'}}
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
            q: 'What AI video tools do these prompts work with?',
            a: 'Every prompt works with Sora (OpenAI), Runway Gen-3/Gen-4, Pika Labs, Kling AI, Luma Dream Machine, Stable Video Diffusion, HailuoAI (MiniMax), and any other AI video generator that accepts text prompts. The prompts are plain text — copy, paste, and generate.'
          },
          {
            q: 'Do I need filmmaking experience to use these?',
            a: 'No. Each prompt already includes camera movement, lighting, duration, aspect ratio, and style instructions. You just fill in the brackets with your specifics — product name, brand colors, scene details — and paste. The prompts do the heavy lifting.'
          },
          {
            q: 'How is this different from the AI Image Prompt Pack?',
            a: 'Image prompts generate still visuals. Video prompts are designed for motion — they include camera movement directions (pan, zoom, dolly, tracking), duration specifications, transition effects, temporal descriptions ("starts with X, then transitions to Y"), and aspect ratios specific to video platforms. Different tools, different techniques, different output.'
          },
          {
            q: 'Can I use the generated videos commercially?',
            a: 'The prompts are yours to use however you want. Commercial usage rights for generated videos depend on the AI tool you use — most platforms allow commercial use on their paid plans. Check your tool\'s terms of service for specifics.'
          },
          {
            q: 'What aspect ratios and durations are included?',
            a: 'Every major format: 9:16 vertical for TikTok, Reels, and Shorts. 16:9 horizontal for YouTube and websites. 1:1 square for feed posts. 2.39:1 cinematic widescreen for dramatic content. Durations range from 3-second clips to 20-second sequences — specified in each prompt.'
          },
          {
            q: 'Is there a money-back guarantee?',
            a: '30 days, no questions asked. If the prompts don\'t improve your AI-generated videos, email us and we\'ll refund you immediately.'
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
