import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/6oU5kC6SbdLj4CwegicMM0k';

export default function SocialMediaKit() {
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
        body: JSON.stringify({ email, source: 'social-media-kit-lead', business: 'Social Media Manager' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqItems = [
    { q: 'Do I need social media marketing experience to use this?', a: 'No. These are copy-paste AI prompts you put into ChatGPT, Claude, or any AI tool. Whether you\'re a beginner or a seasoned social media manager, the templates give you a head start on every task.' },
    { q: 'Which social media platforms does this cover?', a: 'Instagram, TikTok, LinkedIn, X/Twitter, YouTube, and Facebook. Each template specifies which platform(s) it\'s designed for, so you always get platform-native content.' },
    { q: 'Can I use this for multiple client accounts?', a: 'Yes. The templates are designed to be customized with different brand voices, audiences, and niches. Freelancers and agencies use this kit across all their client accounts.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'How is this different from generic social media templates?', a: 'These are AI prompt templates, not static templates. You customize them with your brand details and the AI generates unique, tailored content every time. Plus they cover the full workflow — calendars, captions, analytics, community management, and paid ads.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>AI Social Media Manager Kit — Content Calendars, Captions, Viral Formulas &amp; Ad Copy | Midas Tools</title>
        <meta name="description" content="150+ AI prompts and templates for social media managers. Content calendars, caption hooks, viral formulas, analytics prompts, community management, and paid ad copy for every major platform. $39 one-time." />
        <meta name="keywords" content="AI social media manager, social media templates, content calendar AI, caption generator, viral content prompts, social media ad copy templates" />
        <meta property="og:title" content="AI Social Media Manager Kit — Content Calendars, Captions & Viral Formulas | Midas Tools" />
        <meta property="og:description" content="150+ AI prompts and templates for social media managers. Calendars, captions, viral formulas, analytics, and ad copy — all for $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/social-media-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Social Media Manager Kit — Midas Tools" />
        <meta name="twitter:description" content="150+ AI prompts for social media managers. Calendars, captions, viral content, analytics, and paid ads. $39 one-time." />
        <link rel="canonical" href="https://www.midastools.co/social-media-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Social Media Manager Kit",
          "description": "150+ AI prompts and templates for social media managers — content calendars, caption hooks, viral formulas, analytics, community management, and paid ad copy for every major platform.",
          "url": "https://www.midastools.co/social-media-kit",
          "image": "https://www.midastools.co/og-image.png",
          "brand": "Midas Tools",
          "offers": {
            "@type": "Offer",
            "price": "39.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": STRIPE_URL,
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
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "41"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Brittany N." },
              "reviewBody": "I manage social media for 4 clients and this kit cut my content planning from a full day to 2 hours. The 30-day content calendar system alone is worth it. Viral hook formulas actually work."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Omar J." },
              "reviewBody": "The caption templates and hashtag strategy prompts helped me grow my Instagram from 2K to 8K followers in two months. These aren't generic prompts — they're engineered for each platform."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Stephanie H." },
              "reviewBody": "Solid kit for social media managers. The paid ad templates are a nice bonus. Would love more TikTok-specific prompts, but the overall quality is excellent for the price."
            }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}} />
      </Head>

      <style>{`
        section{max-width:820px;margin:0 auto;padding:80px 40px}
        h1{font-size:clamp(34px,5.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:var(--gold)}
        .kit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
        .kit-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;transition:border-color 0.2s}
        .kit-card:hover{border-color:var(--gray-700)}
        .pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center}
        @media(max-width:700px){
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Social Media Managers</div>
        <h1>Stop the Content Burnout.<br />Plan, Post &amp; Grow<br /><span>on Every Platform.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          150+ AI prompts and templates for social media — content calendars, caption hooks, viral formulas, analytics, community management, and paid ad copy. All for $39.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Social Media Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The average social media manager spends 6+ hours per day creating content</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Content calendars, captions, hashtags, engagement, analytics, ads — it never ends. This kit gives you <strong style={{color:'var(--gold)'}}>150+ battle-tested templates</strong> so you can manage any account faster and smarter.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: 'Content Burnout', label: 'Staring at a blank screen every morning wondering what to post' },
            { stat: 'Inconsistent Posting', label: 'No system, no calendar, no batch workflow — just winging it daily' },
            { stat: 'Low Engagement', label: 'Posts get views but no comments, saves, or shares that drive growth' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:20,fontWeight:900,color:'var(--gold)',marginBottom:8}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside — 6 category grid */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every AI template a social media manager needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and frameworks. Copy, paste, manage any platform.</p>

        <div className="kit-grid">
          {[
            { title: 'Content Calendar System (25+ prompts)', desc: '30-day content calendars for Instagram, TikTok, LinkedIn, X/Twitter, and YouTube. Weekly themes, batch creation workflows, repurposing calendars, and posting schedule optimizers.' },
            { title: 'Caption Hooks & Templates (30+ templates)', desc: '50+ caption templates by platform, scroll-stopping hook formulas, hashtag strategies, CTA templates, engagement boosters, and A/B testing generators for captions.' },
            { title: 'Viral Content Formulas (25+ prompts)', desc: 'Trend jacking frameworks, carousel post structures, thread templates, Reel and TikTok scripts, duet/stitch ideas, and meme marketing strategies.' },
            { title: 'Analytics & Growth (25+ frameworks)', desc: 'Audience persona builders, competitor analysis, engagement rate optimizers, posting time analyzers, algorithm strategies, and A/B testing frameworks.' },
            { title: 'Community Management (20+ scripts)', desc: 'Comment response libraries, DM sales sequences, crisis management playbooks, FAQ templates, UGC campaign generators, and ambassador program builders.' },
            { title: 'Paid Social Ads (25+ templates)', desc: 'Ad copy for Meta, TikTok, and LinkedIn. Audience targeting strategies, A/B test frameworks, budget allocation guides, and complete retargeting funnel sequences.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>How Social Media Managers <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>Real workflows. Not theory.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'It\'s Monday morning and you have nothing planned for the week',
              before: 'You scramble for ideas, scroll competitors for inspiration, and stress-post something mediocre at 2pm. Repeat daily.',
              after: 'Paste your brand details into the content calendar prompt. Get a full 30-day calendar with hooks, hashtags, and posting times in 15 minutes.'
            },
            {
              scenario: 'Your engagement rate dropped from 4% to 1.5% and the client is asking questions',
              before: 'You Google "how to increase engagement" and try random tactics. Post more, post less, change hashtags. Nothing sticks.',
              after: 'Use the analytics prompts: engagement rate optimizer, algorithm strategy guide, and A/B testing framework. Diagnose the issue and build a data-backed recovery plan in one afternoon.'
            },
            {
              scenario: 'You need to launch paid ads but have never written ad copy before',
              before: 'You stare at the Meta Ads Manager for an hour. Write one headline. Delete it. Watch a 45-minute YouTube tutorial. Still stuck.',
              after: 'Use the paid social ad templates: 3 ad sets with 3 variations each, audience targeting strategy, and a retargeting funnel — all generated in 30 minutes. Launch same day.'
            },
          ].map((c, i) => (
            <div key={i} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:32}}>
              <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:12}}>{c.scenario}</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'var(--gray-400)',marginBottom:8,letterSpacing:0.5}}>BEFORE</div>
                  <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{c.before}</div>
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:8,letterSpacing:0.5}}>AFTER</div>
                  <div style={{fontSize:14,color:'var(--gray-200)',lineHeight:1.6}}>{c.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Preview */}
      <section>
        <div className="section-label">Prompt Preview</div>
        <h2>See what's inside</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,lineHeight:1.7}}>4 real prompts from the kit. Copy-paste ready.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              title: '30-Day Instagram Content Calendar',
              prompt: 'I run an Instagram account for [BUSINESS/NICHE] targeting [AUDIENCE]. Create a 30-day content calendar with: 2 carousel posts, 1 Reel, 1 static post, and 1 promotional post per week. For each post provide: Day | Type | Topic | Caption Hook | Hashtags (mix of small/medium/large) | Best Time. Include daily Story themes and 3 Reels per week.',
            },
            {
              title: 'Scroll-Stopping Hook Generator',
              prompt: 'I\'m writing a social media post about [TOPIC] for [PLATFORM]. Generate 10 scroll-stopping hooks using these formulas: Controversial opinion, Number + curiosity, Story hook, Direct challenge, Social proof, FOMO, Question hook, Myth buster, Before/After, Prediction. For each, provide the complete hook line, why it works, and a full caption built around it.',
            },
            {
              title: 'Meta Ad Campaign Generator',
              prompt: 'I\'m running Meta ads for [BUSINESS]. Product: [DESCRIBE]. Target audience: [DESCRIBE]. Campaign goal: [CONVERSIONS]. Create 3 ad sets (pain point, benefit, social proof) with 3 copy variations each (short, medium, long). Include primary text, headline, description, CTA button, visual direction, and A/B testing priority for each ad.',
            },
            {
              title: 'Competitor Analysis Framework',
              prompt: 'Analyze my competitors on [PLATFORM] in [NICHE]. Competitors: [LIST 3]. For each, analyze: content types, posting frequency, engagement patterns, hooks they use, and reply strategy. Then identify: topics they cover poorly, content formats they don\'t use, audience segments they ignore, and 10 content ideas that position me differently.',
            },
          ].map((p, i) => (
            <div key={i} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
              <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Example Prompt</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:12}}>{p.title}</div>
              <div style={{background:'var(--gray-800)',borderRadius:10,padding:20,fontSize:14,color:'var(--gray-400)',lineHeight:1.7,fontFamily:'monospace'}}>{p.prompt}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math <span>Speaks for Itself</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>Replace hours of daily content creation with proven AI templates.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$39</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Time saved</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>80+ hrs</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Content output</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>10x</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Social Media Manager Edition</div>
          <h2 style={{marginBottom:8}}>AI Social Media Manager Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Content calendar system (25+ prompts)',
              'Caption hooks & templates (30+ templates)',
              'Viral content formulas (25+ prompts)',
              'Analytics & growth frameworks (25+ prompts)',
              'Community management scripts (20+ templates)',
              'Paid social ad templates (25+ prompts)',
              'Covers Instagram, TikTok, LinkedIn, X, YouTube',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Social Media Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>anyone managing social media</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Social Media Managers', desc: 'You juggle multiple accounts and platforms. These templates handle the content planning, caption writing, and analytics so you can manage more clients in less time.' },
            { name: 'Small Business Owners', desc: 'You\'re doing your own social media between running everything else. Skip the guesswork and get a system that keeps your accounts active and growing.' },
            { name: 'Content Creators', desc: 'You need to post consistently across Instagram, TikTok, YouTube, and more. These templates give you a repeatable engine for content creation at scale.' },
            { name: 'Freelancers & Agencies', desc: 'Use these templates across all your client accounts. Customize the brand voice for each client and deliver professional social media management faster.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Best Value</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 15 AI kits for $97</p>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 14 more AI kits &mdash; $535 value for $97. Save 82%. Plus every future kit free.</p>
          <a href="https://buy.stripe.com/aEUbJ01xR0YxgligkocMM0g" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Caption Hook Guide</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you 10 scroll-stopping hook formulas &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free caption hook guide is on its way.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-800)',color:'var(--text)',fontSize:15,outline:'none',fontFamily:'inherit'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'var(--gold)',color:'#FFFFFF',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
              >
                {loading ? '...' : 'Send It \u2192'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {faqItems.map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Tools & Blog */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center',marginBottom:32}}>Free Social Media Resources</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
          <a href="/hashtag-generator" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Free Tool</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>AI Hashtag Generator</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Generate optimized hashtags for Instagram, TikTok & more. 22 niches.</div>
          </a>
          <a href="/blog/best-instagram-hashtags-2026" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Blog</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>150+ Best Instagram Hashtags 2026</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Complete guide by niche with strategy tips and mistakes to avoid.</div>
          </a>
          <a href="/blog/ai-social-media-prompts-2026" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Blog</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>20 AI Social Media Prompts</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Copy-paste prompts for content calendars, captions, viral formulas & more.</div>
          </a>
        </div>
      </section>

      {/* Related Products */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center',marginBottom:32}}>Related Kits</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          {[
            { name: 'Content Creator Kit', price: '$39', desc: 'Repurposing templates, headline formulas, and a 30-day content calendar generator.', href: '/content-creator-kit' },
            { name: 'Small Business AI Kit', price: '$39', desc: 'Social media, email marketing, customer service, hiring, and operations templates.', href: '/small-business-kit' },
            { name: 'E-commerce AI Kit', price: '$39', desc: 'Product descriptions, email sequences, ad copy, and SEO templates for online stores.', href: '/ecommerce-kit' },
            { name: 'AI Prompt Mega Pack', price: '$29', desc: '200+ battle-tested AI prompts for copywriting, social media, content, and productivity.', href: '/ai-prompt-mega-pack' },
          ].map(k => (
            <a key={k.name} href={k.href} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:15,fontWeight:700,marginBottom:4}}>{k.name} <span style={{color:'var(--gold)'}}>{k.price}</span></div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{k.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{textAlign:'center',paddingBottom:100}}>
        <h2>Ready to 10x your <span>social media output?</span></h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,maxWidth:480,margin:'0 auto 32px',lineHeight:1.7}}>
          150+ prompts. Every major platform. One price. Stop creating from scratch and start using proven AI templates.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Social Media Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Related Articles */}
      <section>
        <h2>Social Media <span>Guides</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/ai-social-media-prompts-2026', title: 'AI Social Media Prompts That Actually Drive Engagement', desc: 'Stop guessing what to post. Proven prompts for every platform.' },
            { href: '/blog/best-instagram-hashtags-2026', title: 'Best Instagram Hashtags for 2026', desc: 'The hashtag strategy that gets your content seen by the right audience.' },
            { href: '/blog/ai-tools-content-creators-2026', title: '10 AI Tools Content Creators Use to 10x Output', desc: 'The exact tools for writing, scheduling, and repurposing at scale.' },
          ].map(a => (
            <Link key={a.href} href={a.href} style={{display:'block',padding:24,borderRadius:14,border:'1px solid var(--gray-800)',textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8,lineHeight:1.4}}>{a.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{a.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
