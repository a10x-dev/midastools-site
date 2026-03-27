import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c';

export default function SmallBusinessKit() {
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
        body: JSON.stringify({ email, source: 'small-business-kit-lead', business: 'Small Business' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Kit for Small Business — Automate Marketing, Email & Operations | Midas Tools</title>
        <meta name="description" content="AI templates and workflows that save small business owners 20+ hours per week. Social media, email marketing, customer service, hiring, and operations — all automated. $39 one-time." />
        <meta property="og:title" content="AI Kit for Small Business — Midas Tools" />
        <meta property="og:description" content="Save 20+ hours per week with AI templates built for small business. Social media, email, customer service, hiring. $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/small-business-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
        <div className="badge" style={{marginBottom:32}}>Built for Small Business Owners</div>
        <h1>Stop Paying $300/mo<br />for AI Tools.<br /><span>Get Everything for $39.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          AI templates for social media, email marketing, customer service, hiring, and daily operations — everything a small business needs to save 20+ hours per week.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Small Business Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The average small business spends $317/month on AI tools</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            That's <strong style={{color:'var(--gold)'}}>$3,800/year</strong> on separate subscriptions for social media, email, customer service, and operations. This kit replaces all of them for a one-time $39.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '20+ hrs', label: 'Saved per week with AI automation' },
            { stat: '$317/mo', label: 'Average cost of separate AI tools' },
            { stat: '73%', label: 'Of small businesses now use AI daily' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:32,fontWeight:900,color:'var(--gold)',marginBottom:4}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's in the kit */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every AI template a small business needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and workflows. Copy, paste, automate your business.</p>

        <div className="kit-grid">
          {[
            { title: 'Social Media Content Engine', desc: 'Generate a month of posts for Instagram, Facebook, LinkedIn, and X in minutes. Includes hooks, hashtags, and scheduling templates for each platform.' },
            { title: 'Email Marketing Templates', desc: 'Welcome sequences, promotional campaigns, re-engagement emails, and newsletter templates. Plug into Mailchimp, ConvertKit, or any email tool.' },
            { title: 'Customer Service Scripts', desc: 'AI-powered responses for FAQs, complaints, review replies, and support tickets. Handle 80% of customer inquiries without typing a word.' },
            { title: 'Hiring & HR Templates', desc: 'Job descriptions, interview questions, offer letters, and onboarding checklists. Hire faster without a recruiter.' },
            { title: 'Business Operations Prompts', desc: 'Meeting summaries, project briefs, SOPs, expense categorization, and weekly reporting templates. Run your business on autopilot.' },
            { title: 'Sales & Lead Follow-Up', desc: 'Cold outreach templates, follow-up sequences, proposal frameworks, and objection-handling scripts that close deals faster.' },
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
        <h2 style={{textAlign:'center'}}>How Business Owners <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>Real workflows. Not theory.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'Monday morning: plan the week\'s social media',
              before: 'You spend 3 hours brainstorming posts, writing captions, and finding hashtags. You give up after 2 platforms.',
              after: 'Paste your business focus into the template. Get 20 platform-specific posts in 10 minutes. Schedule and move on.'
            },
            {
              scenario: 'Customer leaves a 2-star review on Google',
              before: 'You stress about it, draft 5 different responses, and finally post something generic 3 days later.',
              after: 'Paste the review into the response template. Get a professional, empathetic reply in 30 seconds. Post immediately.'
            },
            {
              scenario: 'You need to hire a part-time employee',
              before: 'You Google "how to write a job description" and spend 2 hours copying from templates that don\'t match your business.',
              after: 'Describe the role. AI generates the job description, interview questions, and an onboarding checklist in 5 minutes.'
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
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>Replace $317/month in AI tool subscriptions with one $39 kit.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$39</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Replaces</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>$317/mo</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Annual savings</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>$3,765</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Small Business Edition</div>
          <h2 style={{marginBottom:8}}>Small Business AI Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Social media content engine (all platforms)',
              'Email marketing templates (welcome, promo, re-engage)',
              'Customer service response scripts',
              'Hiring & HR template library',
              'Business operations prompts (SOPs, reports, briefs)',
              'Sales & lead follow-up sequences',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Small Business Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>businesses that move fast</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Local Businesses', desc: 'Restaurants, salons, gyms, retail stores — automate social media, reviews, and customer communication.' },
            { name: 'E-commerce Sellers', desc: 'Product descriptions, customer support, email campaigns, and inventory updates — all AI-powered.' },
            { name: 'Service Businesses', desc: 'Agencies, consultants, contractors — proposals, follow-ups, hiring, and operations on autopilot.' },
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
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Social Media Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you an AI social media post generator &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free social media template is on its way.</div>
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
          {[
            { q: 'Do I need to be technical?', a: 'No. These are text prompts you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this.' },
            { q: 'What type of business is this for?', a: 'Any small business — retail, e-commerce, restaurants, agencies, consulting, coaching, contractors, and more. The templates are designed to be customized for your specific business.' },
            { q: 'How is this different from using ChatGPT directly?', a: 'ChatGPT gives generic outputs. These templates include industry-specific language, proven frameworks, and professional formatting designed specifically for small business workflows.' },
            { q: 'Does this replace my existing tools?', a: 'It replaces the need for separate AI subscriptions for social media, email, and content. You still need your email platform (Mailchimp, etc.) and social media accounts — these templates generate the content that goes into them.' },
            { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
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
        <h2>Small Business <span>Guides</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/ai-small-business-automation-2026', title: 'AI Automation for Small Business in 2026', desc: 'How small businesses are saving 20+ hours/week with AI workflows.' },
            { href: '/blog/ai-tools-small-business-owners-2026', title: 'Best AI Tools for Small Business Owners', desc: 'The complete toolkit for marketing, ops, and customer service.' },
            { href: '/blog/ai-tools-vs-hiring-2026', title: 'AI Tools vs Hiring: When to Use Each', desc: 'The math behind when AI replaces a hire and when you still need humans.' },
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
