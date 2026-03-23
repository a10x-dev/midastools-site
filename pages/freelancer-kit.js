import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/7sY3cu7Wfaz71qkfkmcMM0a';

export default function FreelancerKit() {
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
        body: JSON.stringify({ email, source: 'freelancer-kit-lead', business: 'Freelancer' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Kit for Freelancers — Automate Clients, Invoices & Proposals | Midas Tools</title>
        <meta name="description" content="AI templates that write proposals, chase invoices, and manage clients. Built for freelancers who want to earn more and admin less. $39 one-time." />
        <meta property="og:title" content="AI Kit for Freelancers — Midas Tools" />
        <meta property="og:description" content="AI templates that write proposals, chase invoices, and manage clients. Built for freelancers who want to earn more and admin less. $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/freelancer-kit" />
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
        .flow-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px}
        @media(max-width:700px){
          section{padding:60px 20px}
          .kit-grid,.flow-steps{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Freelancers, Consultants & Solopreneurs</div>
        <h1>Win More Clients.<br />Do Less Admin. <span>Automatically.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          AI templates that write proposals, chase invoices, onboard clients, and manage projects — so you spend time on billable work, not busywork.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Freelancer Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* The Problem */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>Freelancers lose $10,000+/year to unbilled hours, slow proposals, and admin overhead</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            The average freelancer spends <strong style={{color:'var(--gold)'}}>15+ hours/week</strong> on non-billable admin tasks.
          </p>
        </div>
      </section>

      {/* What's in the kit */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Inside</div>
        <h2>Every template a top-earning freelancer needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and workflows. Copy, paste, close more clients.</p>

        <div className="kit-grid">
          {[
            { title: 'Client Proposal Generator', desc: 'Paste a project brief, get a polished proposal with scope, timeline, pricing, and terms. Win more projects with proposals that close.' },
            { title: 'Invoice & Payment Chaser', desc: 'Generate professional invoices and follow-up emails. Automated reminder sequences for 7/14/30 day overdue payments.' },
            { title: 'Client Onboarding System', desc: 'Welcome emails, project kickoff questionnaires, expectation-setting templates. Make every client feel like your only client.' },
            { title: 'Project Scope Protector', desc: 'Scope creep kills margins. Templates for change requests, scope amendments, and professional boundary-setting emails.' },
            { title: 'Rate Calculator & Negotiation Scripts', desc: 'Calculate your true hourly rate (including overhead). Scripts for raising rates, handling objections, and negotiating retainers.' },
            { title: 'Weekly Client Update Templates', desc: 'Professional status update emails that keep clients informed, reduce check-in calls, and build trust for repeat work.' },
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
        <h2 style={{textAlign:'center'}}>Before vs. <span>After</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:32,maxWidth:680,margin:'32px auto 0'}}>
          <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--gray-400)',marginBottom:16,letterSpacing:0.5}}>BEFORE</div>
            {['Write proposal: 2 hours','Create invoice: 30 min','Chase payment: 45 min','Client onboarding: 1 hour','Scope change email: 30 min','Total: 5+ hours per client'].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-400)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)'}}>{line}</div>
            ))}
          </div>
          <div style={{background:'rgba(245,200,66,0.04)',border:'1px solid rgba(245,200,66,0.15)',borderRadius:14,padding:28}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:16,letterSpacing:0.5}}>AFTER</div>
            {['AI writes proposal: 5 min','AI generates invoice: 2 min','AI sends payment reminders: Auto','AI creates onboarding docs: 3 min','AI drafts scope response: 2 min','Total: 12 minutes per client'].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-200)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)',fontWeight:line.includes('Total') ? 700 : 400}}>{line}</div>
            ))}
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:24,fontSize:15,color:'var(--gold)',fontWeight:700}}>Save 5+ hours per client. Focus on billable work.</p>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(245,200,66,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Freelancer Edition</div>
          <h2 style={{marginBottom:8}}>Freelancer Automation Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Client proposal generator (scope, timeline, pricing)',
              'Invoice & payment chaser (7/14/30 day sequences)',
              'Client onboarding system',
              'Project scope protector templates',
              'Rate calculator & negotiation scripts',
              'Weekly client update templates',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Freelancer Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>freelancers who mean business</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Web Developers & Designers', desc: 'Stop undercharging and over-delivering. AI handles the business side so you focus on craft.' },
            { name: 'Copywriters & Marketers', desc: 'Win more retainers with professional proposals. Keep clients longer with structured communication.' },
            { name: 'Consultants & Coaches', desc: 'Systematize your practice. From intake to invoicing, every touchpoint feels premium.' },
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
        <div style={{background:'rgba(245,200,66,0.04)',border:'1px solid rgba(245,200,66,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Save 50%+</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 5 AI kits for $97</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + Starter Kit + Real Estate Kit + Content Creator Kit &mdash; plus every future kit free.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Proposal Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you an AI proposal generator template &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free proposal template is on its way.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-800)',color:'#fff',fontSize:15,outline:'none',fontFamily:'inherit'}}
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
            { q: 'Do I need to be technical?', a: 'No. These are text prompts you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this.' },
            { q: 'Will these work for my type of freelancing?', a: 'Yes. The templates are designed for any service-based freelancer — design, development, writing, marketing, consulting, coaching, and more.' },
            { q: 'How is this different from using ChatGPT directly?', a: 'ChatGPT gives generic outputs. These templates include industry-specific language, proven frameworks (like value-based pricing), and professional formatting that wins clients.' },
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
    </Layout>
  );
}
