import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/fZueVcb8r6iR5GAfkmcMM08';

export default function RealEstateKit() {
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
        body: JSON.stringify({ email, source: 'real-estate-kit-lead', business: 'Real Estate' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Agent Kit for Real Estate — Automate Leads, Follow-Ups & Listings | Midas Tools</title>
        <meta name="description" content="Deploy an AI agent that handles your real estate leads, follow-ups, listing descriptions, and client communication 24/7. Templates + workflows for $49." />
        <meta property="og:title" content="AI Agent Kit for Real Estate — Midas Tools" />
        <meta property="og:description" content="AI agent templates built for realtors. Automate lead follow-up, listing descriptions, and client communication. $49 one-time." />
        <meta property="og:url" content="https://www.midastools.co/real-estate-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co/real-estate-kit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Real Estate AI Kit",
          "description": "AI agent templates built for realtors. Automate lead follow-up, listing descriptions, market analysis, and client communication. 50+ templates and workflows.",
          "url": "https://www.midastools.co/real-estate-kit",
          "image": "https://www.midastools.co/og-image.png",
          "brand": "Midas Tools",
          "offers": {
            "@type": "Offer",
            "price": "49",
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
            "reviewCount": "31"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Robert K." },
              "reviewBody": "As a solo agent doing 30+ transactions a year, this kit is a lifesaver. The instant lead response templates alone have recovered at least 5 leads that would have gone cold. Worth 100x the price."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Diana M." },
              "reviewBody": "The listing description generator is incredible. I used to spend 30 minutes per listing — now it takes 2 minutes and the descriptions are better than what I was writing. My sellers love them."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Greg W." },
              "reviewBody": "Great templates for lead follow-up and client communication. The 30-day nurture sequence keeps prospects engaged without me having to remember to follow up. Would recommend to any agent."
            }
          ]
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
        <div className="badge" style={{marginBottom:32}}>Built for Real Estate Agents & Brokers</div>
        <h1>Your AI Agent Handles<br /><span>Leads, Follow-Ups<br />& Listings</span> While You Close</h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          Stop losing leads to slow follow-up. Deploy an AI agent that responds to inquiries in seconds, writes listing descriptions, and nurtures prospects 24/7.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Real Estate Kit &mdash; $49 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        <p style={{marginTop:12,fontSize:14,color:'var(--text-tertiary)'}}>Secure Stripe checkout &middot; Works with ChatGPT, Claude, Gemini</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The #1 reason agents lose deals?</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            <strong style={{color:'var(--gold)'}}>78% of buyers</strong> go with the first agent who responds. If you're not replying within 5 minutes, you're handing commissions to competitors.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '5 min', label: 'Max response time before leads go cold' },
            { stat: '$8,400', label: 'Average commission lost per missed lead' },
            { stat: '67%', label: 'Of agents say follow-up is their biggest weakness' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:32,fontWeight:900,color:'var(--gold)',marginBottom:4}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)'}}>{ s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's in the kit */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Everything to deploy your real estate AI agent</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built templates, prompts, and workflows designed specifically for how realtors work.</p>

        <div className="kit-grid">
          {[
            { title: 'Instant Lead Response Templates', desc: 'AI replies to Zillow, Realtor.com, and website leads within seconds. Customized to your brokerage, listings, and market area.' },
            { title: 'Listing Description Generator', desc: 'Feed it property details, get MLS-ready descriptions that sell. Handles luxury, starter homes, investment properties.' },
            { title: 'Follow-Up Sequence Builder', desc: 'Automated 30-day nurture sequence for leads who aren\'t ready yet. Keeps you top-of-mind without manual effort.' },
            { title: 'Market Analysis Prompts', desc: 'Generate CMA summaries, neighborhood comparisons, and market trend reports your clients will actually read.' },
            { title: 'Client Communication Scripts', desc: 'Pre-built responses for price reductions, inspection issues, low offers, closing delays — the conversations that matter.' },
            { title: 'Open House & Showing Workflows', desc: 'Automated showing confirmations, feedback collection, and post-showing follow-up sequences.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>How Agents <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>Real workflows from real agents. Not theory — practice.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'Lead comes in at 11 PM from Zillow',
              before: 'You see it the next morning. By then they\'ve already called 3 other agents.',
              after: 'AI responds in 30 seconds with a personalized message, asks qualifying questions, and schedules a showing.'
            },
            {
              scenario: 'You need 5 listing descriptions this week',
              before: 'You spend 2 hours writing mediocre copy, or pay a marketing VA $50/listing.',
              after: 'Feed the AI property details. Get 5 polished, MLS-ready descriptions in 10 minutes.'
            },
            {
              scenario: 'A buyer from 3 months ago goes quiet',
              before: 'They fell off your radar. You forgot to follow up. They bought with someone else.',
              after: 'Your AI follow-up sequence kept sending market updates. They re-engage when they\'re ready.'
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
          <h2>The Math Is <span>Obvious</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>One recovered lead pays for this kit 170x over.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$49</div>
            </div>
            <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Avg commission</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>$8,400</div>
            </div>
            <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>ROI</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>17,043%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Real Estate Edition</div>
          <h2 style={{marginBottom:8}}>Real Estate AI Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$49</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Instant lead response templates (Zillow, Realtor.com, web)',
              'Listing description generator (MLS-ready)',
              '30-day follow-up sequence builder',
              'Market analysis & CMA prompt library',
              'Client communication scripts for every scenario',
              'Open house & showing automation workflows',
              'Setup guide (no coding required)',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Real Estate Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Save 83%</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 16 AI kits for $97</p>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 15 more AI kits &mdash; $564 value for $97. Save 83%. Plus every future kit free.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* DFY Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:32,textAlign:'center'}}>
          <p style={{fontSize:17,fontWeight:700,marginBottom:8}}>Want us to set it all up for you?</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20,lineHeight:1.6}}>Our Done-For-You service deploys your entire AI agent system in 48 hours.</p>
          <Link href="/done-for-you" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Learn about Done-For-You setup ($299) &rarr;
          </Link>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Preview</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Lead Response Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See what your AI lead response would look like &mdash; customized for real estate.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>We'll send your free template within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-900)',color:'var(--text)',fontSize:15,outline:'none',fontFamily:'inherit'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'var(--gold)',color:'var(--black)',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
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
          {[
            { q: 'Do I need to be technical?', a: 'No. The templates are text files and prompts you copy-paste. If you can use ChatGPT, you can use this kit.' },
            { q: 'Does this work with my CRM?', a: 'The templates work with any AI tool (ChatGPT, Claude, OpenClaw). The follow-up sequences can be used in any email tool — Mailchimp, Gmail, Follow Up Boss, etc.' },
            { q: 'Is this for buyer\'s agents or listing agents?', a: 'Both. The kit includes templates for buyer lead nurture, listing descriptions, seller follow-up, and general client communication.' },
            { q: 'How is this different from the general Starter Kit?', a: 'The general kit teaches you to deploy any AI agent. This kit is pre-built specifically for real estate workflows — lead response, MLS descriptions, showing coordination, and deal-stage communication.' },
            { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section>
        <h2>Learn More About <span>AI for Real Estate</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/ai-prompts-real-estate-agents-2026', title: '20 AI Prompts Every Real Estate Agent Needs in 2026', desc: 'Copy-paste prompts for listings, follow-ups, and lead nurture.' },
            { href: '/blog/ai-tools-by-profession-2026', title: 'Best AI Tools by Profession', desc: 'How top agents are using AI to close more deals, faster.' },
            { href: '/blog/best-ai-prompts-business-2026', title: 'Best AI Prompts for Business in 2026', desc: '50+ prompts that save hours across every business function.' },
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
