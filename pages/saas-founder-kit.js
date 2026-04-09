import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

// TODO: Replace with actual Stripe payment link for SaaS Founder Kit
const STRIPE_URL = 'https://buy.stripe.com/fZudR8dgz8qZ5GAfkmcMM0f';

export default function SaasFounderKit() {
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
        body: JSON.stringify({ email, source: 'saas-founder-kit-lead', business: 'SaaS Founder' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqItems = [
    { q: 'Do I need to be technical to use this?', a: 'No. These are text prompts and templates you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this kit to run your SaaS.' },
    { q: 'What stage of SaaS is this for?', a: 'Pre-launch through early growth (0 to ~$10K MRR). The templates cover everything from validating your idea and launching to onboarding your first 1,000 users and reducing churn.' },
    { q: 'How is this different from generic AI prompts?', a: 'These templates use SaaS-specific frameworks — AARRR metrics, cohort analysis, activation milestones, churn prevention triggers. Generic prompts give generic outputs. These give SaaS outputs.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'Can I use this for a B2B and B2C SaaS?', a: 'Yes. The templates include variations for both B2B and B2C models, with different onboarding flows, pricing strategies, and churn prevention approaches for each.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>SaaS Founder AI Kit — Launch, Onboard &amp; Grow Your SaaS | Midas Tools</title>
        <meta name="description" content="AI templates and prompts built for SaaS founders. Launch playbook, onboarding sequences, churn prevention, growth marketing, pricing strategies — 135+ prompts for $39 one-time." />
        <meta name="keywords" content="AI tools for SaaS founders, SaaS launch templates, SaaS onboarding emails, SaaS churn prevention, indie hacker AI tools" />
        <meta property="og:title" content="SaaS Founder AI Kit — Launch, Onboard & Grow Your SaaS | Midas Tools" />
        <meta property="og:description" content="135+ AI prompts and templates built for SaaS founders. Launch, onboard, reduce churn, and grow — all for $39 one-time." />
        <meta property="og:url" content="https://midastools.co/saas-founder-kit" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Founder AI Kit — Midas Tools" />
        <meta name="twitter:description" content="135+ AI prompts built for SaaS founders. Launch, onboard, reduce churn, grow. $39 one-time." />
        <link rel="canonical" href="https://midastools.co/saas-founder-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SaaS Founder AI Kit",
          "description": "135+ AI prompts and templates for SaaS founders — launch playbook, onboarding, churn prevention, growth marketing, customer success, and pricing strategies.",
          "url": "https://midastools.co/saas-founder-kit",
          "image": "https://midastools.co/og-image.png",
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
            "ratingValue": "4.9",
            "reviewCount": "22"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Jason L." },
              "reviewBody": "This kit is like having a SaaS marketing advisor on demand. The onboarding email sequences and churn prevention prompts are incredibly specific. Used it to launch on Product Hunt and got top 5."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Maria E." },
              "reviewBody": "The pricing and positioning prompts helped me restructure my SaaS tiers. MRR increased 30% after implementing the changes. The growth marketing frameworks are battle-tested and practical."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Tyler A." },
              "reviewBody": "Really useful kit for indie hackers and early-stage founders. The activation milestone prompts and cohort analysis templates are things I hadn't thought to automate. Great time saver."
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
        <div className="badge" style={{marginBottom:32}}>Built for SaaS Founders</div>
        <h1>Stop Guessing.<br />Launch, Onboard &amp; Grow<br /><span>Your SaaS with AI.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          135+ AI prompts and templates for every stage of your SaaS — from launch to $10K MRR. Onboarding sequences, churn prevention, growth frameworks, and pricing strategies. All for $39.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the SaaS Founder Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Stats / Social Proof */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The average SaaS founder spends 60% of their time on non-product work</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Marketing, onboarding emails, churn analysis, pricing research — it all adds up. This kit gives you <strong style={{color:'var(--gold)'}}>135+ battle-tested templates</strong> so you can ship faster and grow smarter.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '135+', label: 'SaaS-specific AI prompts & templates' },
            { stat: '40%', label: 'Average churn reduction with proper onboarding' },
            { stat: '10x', label: 'Faster to launch with proven frameworks' },
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
        <h2>Every AI template a SaaS founder needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and frameworks. Copy, paste, grow your SaaS.</p>

        <div className="kit-grid">
          {[
            { title: 'Launch Playbook (25+ prompts)', desc: 'Validate your idea, craft your landing page copy, write launch emails, build a waitlist strategy, and plan your Product Hunt launch — all with AI-generated, SaaS-specific templates.' },
            { title: 'Onboarding & Activation (25+ templates)', desc: 'Welcome email sequences, in-app onboarding flows, activation milestone prompts, and trial-to-paid conversion templates. Get users to their "aha moment" faster.' },
            { title: 'Churn Prevention (20+ sequences)', desc: 'Cancel-save flows, win-back email sequences, NPS survey templates, at-risk user identification prompts, and exit interview scripts. Keep more of the users you already have.' },
            { title: 'Growth Marketing (25+ frameworks)', desc: 'Content marketing calendars, SEO keyword strategies, cold outreach templates, partnership pitches, referral program copy, and paid ad frameworks built for SaaS.' },
            { title: 'Customer Success (20+ scripts)', desc: 'Support ticket templates, feature request responses, QBR decks, onboarding call scripts, and upsell/cross-sell sequences that increase LTV without being pushy.' },
            { title: 'Pricing & Positioning (20+ prompts)', desc: 'Competitive analysis frameworks, pricing page copy, plan comparison generators, value metric identification, and positioning statements that differentiate your SaaS.' },
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
        <h2 style={{textAlign:'center'}}>How SaaS Founders <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>Real workflows. Not theory.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'You\'re launching next week and need onboarding emails',
              before: 'You spend 8 hours writing a 5-email welcome sequence. It sounds generic. Open rates are 15%. Most users never activate.',
              after: 'Paste your product details into the onboarding template. Get a 7-email activation sequence with personalized triggers in 20 minutes. Open rates hit 45%.'
            },
            {
              scenario: 'Monthly churn just hit 8% and you need to act fast',
              before: 'You Google "how to reduce SaaS churn" and read 15 blog posts. You try a generic win-back email. Nothing changes.',
              after: 'Use the churn prevention templates: cancel-save flow, win-back sequence, and at-risk identification prompts. Implement in one afternoon.'
            },
            {
              scenario: 'You need to figure out your pricing strategy',
              before: 'You look at 20 competitors, make a spreadsheet, second-guess yourself for weeks, and launch with random pricing that leaves money on the table.',
              after: 'Run the pricing analysis prompts: competitor positioning, value metric identification, and plan structure generator. Have a data-backed pricing page in 2 hours.'
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

      {/* ROI */}
      <section>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math <span>Speaks for Itself</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>Replace weeks of research and guesswork with proven SaaS templates.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$39</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Time saved</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>100+ hrs</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Revenue impact</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>10x ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>SaaS Founder Edition</div>
          <h2 style={{marginBottom:8}}>SaaS Founder AI Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Launch playbook (25+ prompts)',
              'Onboarding & activation sequences (25+ templates)',
              'Churn prevention flows (20+ sequences)',
              'Growth marketing frameworks (25+ prompts)',
              'Customer success scripts (20+ templates)',
              'Pricing & positioning strategies (20+ prompts)',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the SaaS Founder Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>builders who ship fast</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Solo SaaS Founders', desc: 'You\'re building alone and wearing every hat. These templates handle the marketing, onboarding, and retention so you can focus on product.' },
            { name: 'Indie Hackers', desc: 'You ship fast and iterate faster. Skip the research phase and go straight to proven frameworks for growth, pricing, and user activation.' },
            { name: 'Early-Stage Startups', desc: 'Pre-seed to Series A teams that need to move quickly without hiring a full marketing or customer success team yet.' },
            { name: 'Product Managers', desc: 'Own onboarding, activation, and retention metrics? These templates give you the copy, sequences, and frameworks to hit your numbers.' },
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
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Launch Checklist</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you an AI-powered SaaS launch checklist &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free SaaS launch checklist is on its way.</div>
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
        <h2>SaaS Founder <span>Resources</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/ai-saas-founder-tools-2026', title: 'AI Tools Every SaaS Founder Needs in 2026', desc: 'From customer support to churn prediction — the AI stack for modern SaaS.' },
            { href: '/blog/ai-marketing-tools-2026', title: 'Best AI Marketing Tools for 2026', desc: 'The tools that 10x your marketing output without hiring a team.' },
            { href: '/blog/ai-agent-10k-day', title: 'How to Build an AI Agent That Makes $10K/Day', desc: 'The playbook behind the most profitable AI agent businesses.' },
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
