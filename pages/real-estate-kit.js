import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const STRIPE_URL = 'https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00'; // TODO: Replace with real estate kit Stripe link

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
    <>
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
      </Head>

      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--gold:#F5C842;--black:#0A0A0A;--gray-900:#111;--gray-800:#1A1A1A;--gray-700:#2A2A2A;--gray-400:#888;--gray-200:#CCC;--white:#fff}
        html{scroll-behavior:smooth}
        body{font-family:Inter,sans-serif;background:var(--black);color:var(--white);line-height:1.6;-webkit-font-smoothing:antialiased}
        nav{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid var(--gray-800);position:sticky;top:0;background:rgba(10,10,10,0.95);backdrop-filter:blur(10px);z-index:100}
        .nav-logo{font-size:20px;font-weight:800;color:var(--gold);text-decoration:none}
        .nav-links{display:flex;gap:24px;align-items:center}
        .nav-link{color:#aaa;text-decoration:none;font-size:14px;font-weight:500}
        .nav-link:hover{color:#fff}
        .nav-cta{background:var(--gold);color:var(--black);padding:10px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none}
        section{max-width:820px;margin:0 auto;padding:80px 40px}
        .badge{display:inline-block;background:rgba(245,200,66,0.12);border:1px solid rgba(245,200,66,0.3);color:var(--gold);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:32px}
        h1{font-size:clamp(34px,5.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:var(--gold)}
        .btn-primary{display:inline-block;background:var(--gold);color:var(--black);padding:18px 40px;border-radius:12px;font-size:18px;font-weight:800;text-decoration:none;transition:opacity 0.2s}
        .btn-primary:hover{opacity:0.9}
        footer{text-align:center;padding:40px;border-top:1px solid var(--gray-800);color:var(--gray-400);font-size:14px}
        footer a{color:var(--gray-400);text-decoration:none}
        footer a:hover{color:var(--white)}
        @media(max-width:700px){
          nav{padding:16px 20px}
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Starter Kit</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <a href="#buy" className="nav-cta">Get the Kit — $49</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge">🏡 Built for Real Estate Agents & Brokers</div>
        <h1>Your AI Agent Handles<br /><span>Leads, Follow-Ups<br />& Listings</span> While You Close</h1>
        <p style={{fontSize:20,color:'var(--gray-400)',maxWidth:600,margin:'0 auto 40px',lineHeight:1.6}}>
          Stop losing leads to slow follow-up. Deploy an AI agent that responds to inquiries in seconds, writes listing descriptions, and nurtures prospects 24/7 — so you only talk to serious buyers.
        </p>
        <a href="#buy" className="btn-primary">Get the Real Estate Kit — $49 →</a>
        <p style={{marginTop:12,fontSize:14,color:'var(--gray-400)'}}>One-time payment · Instant download · 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The #1 reason agents lose deals?</h2>
          <p style={{color:'var(--gray-400)',fontSize:18,maxWidth:560,margin:'0 auto'}}>
            <strong style={{color:'var(--gold)'}}>78% of buyers</strong> go with the first agent who responds. If you're not replying within 5 minutes, you're handing commissions to competitors.
          </p>
        </div>

        <div className="pain-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,textAlign:'center'}}>
          {[
            { stat: '5 min', label: 'Max response time before leads go cold' },
            { stat: '$8,400', label: 'Average commission lost per missed lead' },
            { stat: '67%', label: 'Of agents say follow-up is their biggest weakness' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:36,fontWeight:900,color:'var(--gold)',marginBottom:4}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's in the kit */}
      <section>
        <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',letterSpacing:2,textTransform:'uppercase',marginBottom:16}}>What's Inside</div>
        <h2>Everything to deploy your real estate AI agent</h2>
        <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:48}}>Pre-built templates, prompts, and workflows designed specifically for how realtors work.</p>

        <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20,marginBottom:48}}>
          {[
            {
              icon: '⚡',
              title: 'Instant Lead Response Templates',
              desc: 'AI replies to Zillow, Realtor.com, and website leads within seconds. Customized to your brokerage, listings, and market area.'
            },
            {
              icon: '📝',
              title: 'Listing Description Generator',
              desc: 'Feed it property details, get MLS-ready descriptions that sell. Handles luxury, starter homes, investment properties — any style.'
            },
            {
              icon: '🔄',
              title: 'Follow-Up Sequence Builder',
              desc: 'Automated 30-day nurture sequence for leads who aren\'t ready yet. Keeps you top-of-mind without manual effort.'
            },
            {
              icon: '📊',
              title: 'Market Analysis Prompts',
              desc: 'Generate CMA summaries, neighborhood comparisons, and market trend reports your clients will actually read.'
            },
            {
              icon: '📞',
              title: 'Client Communication Scripts',
              desc: 'Pre-built responses for price reductions, inspection issues, low offers, closing delays — the conversations that matter most.'
            },
            {
              icon: '📅',
              title: 'Open House & Showing Workflows',
              desc: 'Automated showing confirmations, feedback collection, and post-showing follow-up sequences.'
            },
          ].map(f => (
            <div key={f.title} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
              <div style={{fontSize:28,marginBottom:16}}>{f.icon}</div>
              <div style={{fontSize:17,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>How Agents <span>Actually Use</span> This</h2>
        <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:48,textAlign:'center',maxWidth:560,margin:'0 auto 48px'}}>Real workflows from real agents. Not theory — practice.</p>

        <div style={{display:'flex',flexDirection:'column',gap:24}}>
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
              <div style={{fontSize:13,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1,marginBottom:12}}>Scenario: {c.scenario}</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:'#ff6b6b',marginBottom:6}}>WITHOUT THE KIT</div>
                  <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{c.before}</div>
                </div>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:'#51cf66',marginBottom:6}}>WITH THE KIT</div>
                  <div style={{fontSize:14,color:'var(--gray-200)',lineHeight:1.6}}>{c.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section>
        <div style={{background:'linear-gradient(135deg,rgba(245,200,66,0.08),rgba(245,200,66,0.02))',border:'1px solid rgba(245,200,66,0.2)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math Is <span>Obvious</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:32}}>One recovered lead pays for this kit 170x over.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:600,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:12,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:0.5,marginBottom:6}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$49</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:12,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:0.5,marginBottom:6}}>Avg commission</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>$8,400</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:12,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:0.5,marginBottom:6}}>ROI</div>
              <div style={{fontSize:28,fontWeight:900,color:'var(--gold)'}}>17,043%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Buy */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid var(--gold)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge">🏡 Real Estate Edition</div>
          <h2 style={{marginBottom:8}}>Real Estate AI Kit</h2>
          <div style={{fontSize:52,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$49</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment · Instant download</div>
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
              <li key={item} style={{padding:'8px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Real Estate Kit →
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee · Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'linear-gradient(135deg,rgba(245,200,66,0.08),rgba(245,200,66,0.02))',border:'1px solid rgba(245,200,66,0.2)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Save 40%</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 3 AI kits for $97</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20}}>This kit + Starter Kit + Content Creator Kit — plus every future kit free. Save $70 vs buying individually.</p>
          <Link href="/bundle" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            See the Bundle →
          </Link>
        </div>
      </section>

      {/* DFY Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:32,textAlign:'center'}}>
          <p style={{fontSize:17,fontWeight:700,marginBottom:8}}>Want us to set it all up for you?</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20}}>Our Done-For-You service deploys your entire AI agent system in 48 hours. You focus on closing — we handle the tech.</p>
          <Link href="/done-for-you" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Learn about Done-For-You setup ($299) →
          </Link>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px'}}>
        <div style={{maxWidth:500,margin:'0 auto',textAlign:'center'}}>
          <div className="badge">🎁 Free Preview</div>
          <h2 style={{fontSize:28,marginBottom:16}}>Get a Free <span>Lead Response Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>See what your AI lead response would look like — customized for real estate. Delivered to your inbox in 24 hours.</p>
          {sent ? (
            <div style={{background:'rgba(245,200,66,0.1)',border:'1px solid rgba(245,200,66,0.3)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>We'll send your free lead response template within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-800)',color:'#fff',fontSize:15,outline:'none'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'var(--gold)',color:'var(--black)',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap'}}
              >
                {loading ? '...' : 'Send It →'}
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
            { q: 'How is this different from the general Starter Kit?', a: 'The general kit teaches you to deploy any AI agent. This kit is pre-built specifically for real estate workflows — lead response timing, MLS descriptions, showing coordination, and deal-stage communication.' },
            { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email rmidas26@gmail.com.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:17,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.6}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Midas Tools · <Link href="/" style={{color:'var(--gray-400)'}}>Home</Link> · <Link href="/services" style={{color:'var(--gray-400)'}}>All Services</Link> · <a href="mailto:rmidas26@gmail.com">Contact</a></p>
      </footer>
    </>
  );
}
