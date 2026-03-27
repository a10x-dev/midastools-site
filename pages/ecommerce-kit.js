import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

// TODO: Replace with actual Stripe payment link for E-commerce AI Kit
const STRIPE_URL = 'https://buy.stripe.com/cNi14mfoH0Yxb0Uc8acMM0e';

export default function EcommerceKit() {
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
        body: JSON.stringify({ email, source: 'ecommerce-kit-lead', business: 'E-commerce' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqItems = [
    { q: 'Do I need to be technical?', a: 'No. These are text prompts you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this.' },
    { q: 'What platforms does this work for?', a: 'Shopify, Etsy, Amazon, WooCommerce, BigCommerce, Squarespace, and any other e-commerce platform. The templates generate content you paste into your store or marketing tools.' },
    { q: 'How is this different from using ChatGPT directly?', a: 'ChatGPT gives generic outputs. These templates include e-commerce-specific language, conversion-tested frameworks, and professional formatting designed to drive sales and improve customer experience.' },
    { q: 'Will this work for my product niche?', a: 'Yes. The templates are designed to be customized for any product category — fashion, electronics, home goods, beauty, food, digital products, and more. You fill in your details and the AI handles the rest.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>E-commerce AI Kit — Product Descriptions, Email Flows &amp; Ad Copy | Midas Tools</title>
        <meta name="description" content="AI templates for e-commerce: product descriptions, email marketing sequences, ad copy, social media, and SEO content. Built for Shopify, Etsy & Amazon sellers. $39 one-time." />
        <meta name="keywords" content="AI tools for e-commerce, AI product descriptions, e-commerce email templates, AI ad copy, Shopify AI tools, Etsy AI templates" />
        <meta property="og:title" content="E-commerce AI Kit — Product Descriptions, Email Flows & Ad Copy | Midas Tools" />
        <meta property="og:description" content="AI templates that save online sellers 15+ hours per week. Product descriptions, email flows, ad copy, social media & SEO. $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/ecommerce-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-commerce AI Kit — Midas Tools" />
        <meta name="twitter:description" content="AI templates for product descriptions, email flows, ad copy & more. Built for online sellers. $39 one-time." />
        <link rel="canonical" href="https://www.midastools.co/ecommerce-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "E-commerce AI Kit",
          "description": "AI templates for e-commerce: product descriptions, email marketing sequences, ad copy, social media, and SEO content strategy.",
          "brand": { "@type": "Brand", "name": "Midas Tools" },
          "offers": {
            "@type": "Offer",
            "price": "39",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.midastools.co/ecommerce-kit"
          }
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
        <div className="badge" style={{marginBottom:32}}>Built for E-commerce Sellers</div>
        <h1>Stop Writing Product Descriptions<br />One at a Time.<br /><span>Automate Your Entire Store for $39.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          AI templates for product descriptions, email sequences, ad copy, social media, customer communication, and SEO — everything an online seller needs to scale faster.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the E-commerce Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points / Stats */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The average e-commerce seller spends 25+ hours/week on content</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Product descriptions, email campaigns, ad copy, social posts — it never ends. This kit gives you <strong style={{color:'var(--gold)'}}>AI-powered templates</strong> that cut that time by 80%.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '15+ hrs', label: 'Saved per week on content creation' },
            { stat: '3x', label: 'Faster product listing turnaround' },
            { stat: '145+', label: 'Ready-to-use prompts & templates' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:32,fontWeight:900,color:'var(--gold)',marginBottom:4}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every AI template an online seller needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and workflows. Copy, paste, sell more.</p>

        <div className="kit-grid">
          {[
            { title: 'Product Descriptions', count: '30+ prompts', desc: 'Generate compelling, SEO-optimized product descriptions for any platform. Includes templates for Shopify, Etsy, Amazon, and general e-commerce — with variations for different tones and audiences.' },
            { title: 'Email Marketing Sequences', count: '25+ templates', desc: 'Welcome flows, abandoned cart recovery, post-purchase follow-ups, win-back campaigns, and product launch sequences. Plug into Klaviyo, Mailchimp, or any email platform.' },
            { title: 'Ad Copy Templates', count: '25+ prompts', desc: 'Facebook ads, Instagram ads, Google Shopping copy, and retargeting campaigns. Includes headline formulas, body copy frameworks, and A/B testing variations that convert.' },
            { title: 'Social Media for E-commerce', count: '25+ prompts', desc: 'Product launch posts, user-generated content prompts, seasonal campaigns, and platform-specific templates for Instagram, TikTok, Pinterest, and Facebook.' },
            { title: 'Customer Communication', count: '20+ scripts', desc: 'Order confirmation messages, shipping updates, return/refund responses, review requests, and complaint resolution scripts that protect your brand reputation.' },
            { title: 'SEO Content Strategy', count: '20+ frameworks', desc: 'Collection page copy, blog post outlines for product-led content, meta descriptions, category descriptions, and keyword-rich content frameworks that drive organic traffic.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:4}}>{f.title}</div>
              <div style={{fontSize:12,fontWeight:600,color:'var(--gold)',marginBottom:8}}>{f.count}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>How Sellers <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>Real workflows. Not theory.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'You just sourced 50 new products to list',
              before: 'You spend 3 full days writing descriptions one by one. Half are generic. You burn out after product #20.',
              after: 'Paste your product details into the template. Get 50 optimized descriptions in under 2 hours. List everything and move on.'
            },
            {
              scenario: 'Black Friday is next week and you have no email campaign',
              before: 'You panic, write a single blast email at midnight, and hope for the best. Open rate: 12%.',
              after: 'Use the seasonal campaign sequence. Generate a 5-email Black Friday flow in 30 minutes — teaser, launch, reminder, last chance, and follow-up.'
            },
            {
              scenario: 'Your Facebook ad spend is burning cash with no conversions',
              before: 'You keep tweaking the same ad copy, guessing what might work. You\'ve wasted $500 this month.',
              after: 'Use the ad copy templates to generate 10 variations with proven frameworks. Test them, find your winner, and scale.'
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

      {/* ROI / Stats */}
      <section>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math <span>Speaks for Itself</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>One kit. Endless content. No monthly fees.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$39</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Time saved</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>15+ hrs/wk</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Templates</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>145+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>E-commerce Edition</div>
          <h2 style={{marginBottom:8}}>E-commerce AI Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Product description generator (30+ prompts)',
              'Email marketing sequences (welcome, cart, launch)',
              'Ad copy templates (Facebook, Instagram, Google)',
              'Social media content for e-commerce',
              'Customer communication scripts',
              'SEO content strategy frameworks',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the E-commerce Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>sellers who want to scale</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Shopify Store Owners', desc: 'Product descriptions, email flows, ad copy, and social content — everything you need to grow your Shopify store without hiring a copywriter.' },
            { name: 'Etsy & Amazon Sellers', desc: 'SEO-optimized listings, keyword-rich descriptions, and review request templates built for marketplace algorithms.' },
            { name: 'DTC Brands & Dropshippers', desc: 'Launch faster with ad copy that converts, email sequences that retain, and product pages that sell — all AI-powered.' },
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
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Product Description Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you an AI product description generator &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free product description template is on its way.</div>
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

      {/* Related Articles */}
      <section>
        <h2>E-commerce <span>Guides</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/ai-ecommerce-product-descriptions-2026', title: 'AI Product Descriptions That Actually Convert', desc: 'How top Shopify stores use AI to write descriptions that sell.' },
            { href: '/blog/ai-marketing-tools-2026', title: 'Best AI Marketing Tools for 2026', desc: 'The complete marketing stack for e-commerce brands.' },
            { href: '/blog/ai-email-templates-2026', title: 'AI Email Templates for 2026', desc: 'Welcome sequences, abandoned cart, and post-purchase emails that drive repeat revenue.' },
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
