import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/6oUcN40tN0Yxgle0pscMM0l';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function EmailMarketingKit() {
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
        body: JSON.stringify({ email, source: 'email-marketing-kit-lead', business: 'Email Marketing' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqItems = [
    { q: 'Do I need email marketing experience to use this?', a: 'No. These are copy-paste AI prompts you put into ChatGPT, Claude, or any AI tool. Whether you\'re writing your first welcome sequence or optimizing a mature list, the templates guide you step by step.' },
    { q: 'Which email platforms does this work with?', a: 'Any email platform — Mailchimp, ConvertKit, Klaviyo, ActiveCampaign, HubSpot, Beehiiv, Substack, and more. The prompts generate email copy you paste into any tool.' },
    { q: 'Can I use this for client work?', a: 'Yes. The templates are designed to be customized with different brand voices, audiences, and industries. Freelancers and agencies use this kit across all their client accounts.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'How is this different from email templates?', a: 'Static email templates give you the same copy everyone else uses. AI prompt templates generate unique, tailored content every time — customized to your brand, audience, and offer. You never send generic emails again.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>AI Email Marketing Kit — Welcome Sequences, Sales Emails, Newsletters & Cold Outreach | Midas Tools</title>
        <meta name="description" content="125+ AI prompts and templates for email marketing. Welcome sequences, sales emails, newsletter content, cold outreach, retention campaigns, and subject line formulas. $29 one-time." />
        <meta name="keywords" content="AI email marketing, email templates, welcome sequence AI, sales email prompts, newsletter generator, cold outreach templates, email copywriting AI" />
        <meta property="og:title" content="AI Email Marketing Kit — Welcome Sequences, Sales Emails & Newsletter Prompts | Midas Tools" />
        <meta property="og:description" content="125+ AI prompts and templates for email marketing. Welcome sequences, sales emails, newsletters, cold outreach, and subject lines — all for $29 one-time." />
        <meta property="og:url" content="https://www.midastools.co/email-marketing-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Email Marketing Kit — Midas Tools" />
        <meta name="twitter:description" content="125+ AI prompts for email marketing. Welcome sequences, sales emails, newsletters, cold outreach, and subject lines. $29 one-time." />
        <link rel="canonical" href="https://www.midastools.co/email-marketing-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Email Marketing Kit",
          "description": "125+ AI prompts and templates for email marketing — welcome sequences, sales emails, newsletter content, cold outreach, retention campaigns, and subject line formulas.",
          "url": "https://www.midastools.co/email-marketing-kit",
          "brand": { "@type": "Brand", "name": "Midas Tools" },
          "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": STRIPE_URL
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
        h1 span{color:#E8920B}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:#E8920B}
        .kit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
        .kit-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;transition:border-color 0.2s}
        .kit-card:hover{border-color:var(--gray-700)}
        .pain-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;text-align:center}
        .stat-accent{color:#E8920B}
        @media(max-width:700px){
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Email Marketers</div>
        <h1>Write Emails That Convert.<br />Sequences That Sell.<br /><span>On Autopilot.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          125+ AI prompts and templates for email marketing — welcome sequences, sales emails, newsletters, cold outreach, retention campaigns, and subject line formulas. All for $29.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,maxWidth:560,margin:'0 auto 40px'}}>
          {[
            { stat: '125+', label: 'Prompts' },
            { stat: '6', label: 'Categories' },
            { stat: '$29', label: 'One-time' },
            { stat: 'Any LLM', label: 'Compatible' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:16}}>
              <div style={{fontSize:22,fontWeight:900,color:'#E8920B'}}>{s.stat}</div>
              <div style={{fontSize:12,color:'var(--gray-400)',marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>

        <a href={STRIPE_URL} className="btn-primary">Get the Email Marketing Kit &mdash; $29 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>Email Marketing Takes Too Much Time</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Welcome sequences, newsletters, sales funnels, subject lines, cold outreach — the writing never stops. This kit gives you <strong style={{color:'#E8920B'}}>125+ battle-tested templates</strong> so you can send high-converting emails in minutes, not hours.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '73%', label: 'of marketers say email is their #1 ROI channel' },
            { stat: '4+ hrs/week', label: 'Average time spent writing marketing emails' },
            { stat: '+26%', label: 'Higher open rates with AI-assisted email copy' },
            { stat: '$36 return', label: 'For every $1 spent on email marketing' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:20,fontWeight:900,color:'#E8920B',marginBottom:8}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside — 6 category grid */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every AI template an email marketer needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and frameworks. Copy, paste, send emails that convert.</p>

        <div className="kit-grid">
          {[
            { title: 'Welcome Sequences (20+ prompts)', desc: 'New subscriber welcome series, onboarding sequences, lead magnet follow-ups, free trial nurture flows, SaaS activation sequences, and course enrollment drips.' },
            { title: 'Sales Emails (25+ templates)', desc: 'Product launch sequences, flash sale campaigns, cart abandonment emails, upsell/cross-sell flows, webinar invitation sequences, and deadline-driven urgency emails.' },
            { title: 'Newsletter Content (20+ prompts)', desc: 'Weekly newsletter frameworks, curated roundup templates, personal story formulas, educational email series, industry news digests, and engagement-driving formats.' },
            { title: 'Cold Outreach (20+ templates)', desc: 'Cold email sequences, follow-up cadences, partnership pitches, PR and media outreach, influencer collaboration requests, and B2B lead generation emails.' },
            { title: 'Retention & Re-engagement (20+ prompts)', desc: 'Win-back campaigns, re-engagement sequences, feedback request emails, loyalty reward announcements, churn prevention flows, and milestone celebration emails.' },
            { title: 'Subject Lines & Copywriting (20+ formulas)', desc: 'Subject line generators by type, A/B test frameworks, preview text optimizers, CTA formulas, emotional trigger templates, and personalization frameworks.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Preview */}
      <section>
        <div className="section-label">Prompt Preview</div>
        <h2>See what's inside</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,lineHeight:1.7}}>3 real prompts from the kit. Copy-paste ready.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              title: '5-Email Welcome Sequence',
              prompt: 'I run [BUSINESS/NICHE] and just got a new email subscriber from [LEAD MAGNET/SIGNUP SOURCE]. Create a 5-email welcome sequence sent over 7 days. For each email provide: Subject line (+ 2 A/B variants) | Preview text | Email body (150-250 words) | CTA. Email 1: Deliver value + introduce brand. Email 2: Share origin story + build trust. Email 3: Educate on key problem. Email 4: Social proof + case study. Email 5: Soft pitch with clear CTA. Tone: [BRAND VOICE]. Goal: [CONVERSION GOAL].',
            },
            {
              title: 'Cart Abandonment Recovery Sequence',
              prompt: 'I sell [PRODUCT] at [PRICE POINT] to [TARGET AUDIENCE]. Create a 3-email cart abandonment sequence. Email 1 (sent 1 hour after): Friendly reminder with product image reference. Email 2 (sent 24 hours after): Address top 3 objections + social proof. Email 3 (sent 48 hours after): Urgency + small incentive. For each email include: Subject line (+ A/B variant) | Preview text | Body copy (100-200 words) | CTA button text. Tone: helpful, not pushy.',
            },
            {
              title: 'Cold Outreach Email + Follow-Up Cadence',
              prompt: 'I\'m reaching out to [TARGET ROLE] at [COMPANY TYPE] to offer [YOUR SERVICE/PRODUCT]. Create a 4-email cold outreach sequence. Email 1: Pattern interrupt + value prop in under 80 words. Email 2 (3 days later): Quick follow-up with a relevant case study or stat. Email 3 (5 days later): Different angle — address a specific pain point. Email 4 (7 days later): Breakup email with soft CTA. For each email: Subject line | Body (under 100 words) | CTA. No fluff. No "I hope this finds you well."',
            },
          ].map((p, i) => (
            <div key={i} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
              <div style={{fontSize:12,fontWeight:700,color:'#E8920B',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Example Prompt</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:12}}>{p.title}</div>
              <div style={{background:'var(--gray-800)',borderRadius:10,padding:20,fontSize:14,color:'var(--gray-400)',lineHeight:1.7,fontFamily:'monospace'}}>{p.prompt}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section>
        <h2 style={{textAlign:'center'}}>Built for <span>anyone who sends emails</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Entrepreneurs & Founders', desc: 'You know email matters but never have time to write sequences. These templates turn your ideas into high-converting emails in minutes.' },
            { name: 'Marketers', desc: 'You manage email campaigns across multiple products or brands. Skip the blank page and generate professional copy instantly with AI.' },
            { name: 'E-commerce Owners', desc: 'Welcome series, cart abandonment, product launches, retention — get every email sequence your store needs, ready to customize and send.' },
            { name: 'SaaS Founders', desc: 'Onboarding sequences, trial-to-paid conversions, feature announcements, and churn prevention flows — all built for subscription businesses.' },
            { name: 'Freelancers & Consultants', desc: 'Cold outreach that actually gets replies. Nurture sequences that build trust. Pitch emails that land clients. All templated and ready to go.' },
            { name: 'Agencies', desc: 'Use these templates across every client account. Customize the brand voice, plug in the details, and deliver professional email marketing faster.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI / Stats */}
      <section>
        <div style={{background:'rgba(232,146,11,0.04)',border:'1px solid rgba(232,146,11,0.15)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math <span>Speaks for Itself</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>Replace hours of email writing with proven AI templates.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$29</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Time saved</div>
              <div style={{fontSize:28,fontWeight:900,color:'#E8920B'}}>60+ hrs</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Email ROI</div>
              <div style={{fontSize:28,fontWeight:900,color:'#E8920B'}}>36x</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(232,146,11,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Email Marketing Edition</div>
          <h2 style={{marginBottom:8}}>AI Email Marketing Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'#E8920B',margin:'16px 0 4px'}}>$29</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Welcome sequences (20+ prompts)',
              'Sales email templates (25+ prompts)',
              'Newsletter content frameworks (20+ prompts)',
              'Cold outreach sequences (20+ templates)',
              'Retention & re-engagement flows (20+ prompts)',
              'Subject line & copywriting formulas (20+ templates)',
              'Works with any email platform',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'#E8920B',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Email Marketing Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(232,146,11,0.04)',border:'1px solid rgba(232,146,11,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'#E8920B',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Best Value</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 15 AI kits for $97</p>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 14 more AI kits &mdash; $535 value for $97. Save 82%. Plus every future kit free.</p>
          <a href={BUNDLE_URL} style={{color:'#E8920B',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Subject Line Swipe File</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you 10 high-converting subject line formulas &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(232,146,11,0.08)',border:'1px solid rgba(232,146,11,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free subject line swipe file is on its way.</div>
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
                style={{background:'#E8920B',color:'#FFFFFF',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
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

      {/* Free Tool Callout */}
      <section style={{paddingTop:0}}>
        <a href="/email-subject-line-tester" style={{
          display:'block',background:'linear-gradient(135deg, #FFFBEB, #FEF3C7)',border:'2px solid rgba(217,119,6,0.2)',
          borderRadius:16,padding:'24px 28px',textDecoration:'none',transition:'transform 0.15s',
        }}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
            <div>
              <div style={{fontSize:11,fontWeight:700,color:'#D97706',letterSpacing:1,textTransform:'uppercase',marginBottom:4}}>Free Tool</div>
              <div style={{fontSize:17,fontWeight:700,color:'var(--text)'}}>Test Your Subject Lines Before You Send</div>
              <div style={{fontSize:14,color:'var(--text-secondary)',marginTop:4}}>Score for open rate, spam risk, and engagement. Instant results, no signup.</div>
            </div>
            <span style={{background:'#D97706',color:'#fff',padding:'10px 20px',borderRadius:100,fontWeight:700,fontSize:14,whiteSpace:'nowrap'}}>Try free &rarr;</span>
          </div>
        </a>
      </section>

      {/* Free Tools & Blog */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center',marginBottom:32}}>Free Email Marketing Resources</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
          <a href="/email-subject-line-tester" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Free Tool</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>Email Subject Line Tester</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Score your subject lines for open rates, spam risk & engagement before you send.</div>
          </a>
          <a href="/blog/cold-email-templates-2026" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Blog</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>25 Cold Email Templates</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Copy-paste templates for B2B sales, freelancers, SaaS founders & job seekers.</div>
          </a>
          <a href="/blog/ai-email-marketing-prompts-2026" style={{background:'linear-gradient(135deg,#EEF2FF,#F0F5FF)',border:'2px solid rgba(59,95,255,0.15)',borderRadius:16,padding:24,textDecoration:'none',color:'inherit'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',marginBottom:6}}>Blog</div>
            <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>20 AI Email Marketing Prompts</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>Welcome sequences, sales emails, newsletters, cold outreach & subject lines.</div>
          </a>
        </div>
      </section>

      {/* Related Products */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center',marginBottom:32}}>Related Kits</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          {[
            { name: 'AI Social Media Manager Kit', price: '$39', desc: 'Content calendars, caption hooks, viral formulas, analytics, and paid ad copy for every platform.', href: '/social-media-kit' },
            { name: 'Content Creator Kit', price: '$39', desc: 'Repurposing templates, headline formulas, and a 30-day content calendar generator.', href: '/content-creator-kit' },
            { name: 'Small Business AI Kit', price: '$39', desc: 'Social media, email marketing, customer service, hiring, and operations templates.', href: '/small-business-kit' },
            { name: 'E-commerce AI Kit', price: '$39', desc: 'Product descriptions, email sequences, ad copy, and SEO templates for online stores.', href: '/ecommerce-kit' },
          ].map(k => (
            <a key={k.name} href={k.href} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:15,fontWeight:700,marginBottom:4}}>{k.name} <span style={{color:'#E8920B'}}>{k.price}</span></div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{k.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{textAlign:'center',paddingBottom:100}}>
        <h2>Ready to send emails that <span>actually convert?</span></h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,maxWidth:480,margin:'0 auto 32px',lineHeight:1.7}}>
          125+ prompts. Every email type. One price. Stop staring at blank drafts and start sending emails that drive revenue.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Email Marketing Kit &mdash; $29 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>
    </Layout>
  );
}
