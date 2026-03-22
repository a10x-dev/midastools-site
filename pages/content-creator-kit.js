import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const STRIPE_URL = 'https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00'; // TODO: Replace with content creator kit Stripe link

export default function ContentCreatorKit() {
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
        body: JSON.stringify({ email, source: 'content-creator-kit-lead', business: 'Content Creator' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>AI Kit for Content Creators — Repurpose, Schedule & Grow on Autopilot | Midas Tools</title>
        <meta name="description" content="AI templates and workflows that turn one piece of content into 10. Blog to Twitter threads, YouTube scripts, newsletters — all automated. $39 one-time." />
        <meta property="og:title" content="AI Kit for Content Creators — Midas Tools" />
        <meta property="og:description" content="Turn one piece of content into 10 with AI. Blog → Twitter → LinkedIn → Newsletter → YouTube script. $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/content-creator-kit" />
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
          .kit-grid,.flow-steps{grid-template-columns:1fr !important}
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Starter Kit</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <a href="#buy" className="nav-cta">Get the Kit — $39</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge">✍️ Built for YouTubers, Bloggers & Newsletter Writers</div>
        <h1>Turn One Piece of Content<br />Into <span>10 — Automatically</span></h1>
        <p style={{fontSize:20,color:'var(--gray-400)',maxWidth:600,margin:'0 auto 40px',lineHeight:1.6}}>
          AI templates that repurpose your blog post into Twitter threads, LinkedIn posts, YouTube scripts, email newsletters, and carousel slides — in minutes, not hours.
        </p>
        <a href="#buy" className="btn-primary">Get the Creator Kit — $39 →</a>
        <p style={{marginTop:12,fontSize:14,color:'var(--gray-400)'}}>One-time payment · Instant download · 30-day money-back guarantee</p>
      </section>

      {/* The Problem */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>You create great content. Then it dies on one platform.</h2>
          <p style={{color:'var(--gray-400)',fontSize:18,maxWidth:560,margin:'0 auto'}}>
            The average creator spends <strong style={{color:'var(--gold)'}}>5-8 hours per week</strong> on content. Most of that content reaches one audience on one platform. The ROI is brutal unless you repurpose — but repurposing manually takes just as long.
          </p>
        </div>

        {/* The Flow */}
        <div style={{textAlign:'center',marginBottom:48}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',letterSpacing:2,textTransform:'uppercase',marginBottom:16}}>The Repurposing Flow</div>
          <h2>One blog post becomes <span>everything</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>Write once. Let AI adapt it for every platform.</p>
        </div>

        <div className="flow-steps" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:48}}>
          {[
            { platform: 'Blog Post', arrow: '→', outputs: ['Twitter thread (5-10 tweets)', 'LinkedIn post', 'Newsletter intro'] },
            { platform: 'YouTube Video', arrow: '→', outputs: ['Blog transcript', 'Short-form clips script', 'Quote graphics copy'] },
            { platform: 'Newsletter', arrow: '→', outputs: ['Twitter thread', 'LinkedIn article', 'Blog post expansion'] },
          ].map(f => (
            <div key={f.platform} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:24}}>
              <div style={{fontSize:14,fontWeight:800,color:'var(--gold)',marginBottom:12}}>{f.platform}</div>
              {f.outputs.map(o => (
                <div key={o} style={{fontSize:13,color:'var(--gray-200)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)',display:'flex',alignItems:'center',gap:8}}>
                  <span style={{color:'var(--gold)'}}>→</span> {o}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* What's in the kit */}
      <section style={{paddingTop:0}}>
        <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',letterSpacing:2,textTransform:'uppercase',marginBottom:16}}>What's Inside</div>
        <h2>Every template a full-time content team uses</h2>
        <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:48}}>Pre-built prompts and workflows. Copy, paste, publish.</p>

        <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20,marginBottom:48}}>
          {[
            {
              icon: '🔄',
              title: 'Content Repurposing Engine',
              desc: 'Paste any blog post or transcript. Get platform-specific versions for Twitter, LinkedIn, Instagram captions, and email newsletters — each optimized for that platform\'s format and audience.'
            },
            {
              icon: '🧵',
              title: 'Twitter Thread Generator',
              desc: 'Turns long-form content into engaging 5-15 tweet threads with hooks, transitions, and CTAs. Includes templates for educational, storytelling, and contrarian thread styles.'
            },
            {
              icon: '🎬',
              title: 'YouTube Script Builder',
              desc: 'Generate video scripts with hooks, retention bumps, and CTAs from your blog posts or topic ideas. Includes short-form (60s) and long-form (10-15 min) templates.'
            },
            {
              icon: '📧',
              title: 'Newsletter Writer',
              desc: 'Turn your content into weekly newsletter editions. Includes intro hooks, content summaries, personal takes, and CTA templates that drive clicks.'
            },
            {
              icon: '📅',
              title: '30-Day Content Calendar',
              desc: 'AI generates a full month of content ideas based on your niche, audience, and goals. Includes posting schedule, platform assignments, and content pillars.'
            },
            {
              icon: '📊',
              title: 'Headline & Hook Library',
              desc: '50+ proven headline formulas and hook templates for every platform. Scroll-stopping openers that actually get clicks, not just impressions.'
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

      {/* Before/After */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Before vs. <span>After</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginTop:32,maxWidth:700,margin:'32px auto 0'}}>
          <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
            <div style={{fontSize:12,fontWeight:700,color:'#ff6b6b',marginBottom:16}}>WITHOUT THE KIT</div>
            {[
              'Write blog post: 3 hours',
              'Adapt for Twitter: 45 min',
              'Write LinkedIn version: 30 min',
              'Draft newsletter: 1 hour',
              'Create carousel copy: 30 min',
              'Total: 5+ hours per piece',
            ].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-400)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)'}}>{line}</div>
            ))}
          </div>
          <div style={{background:'rgba(245,200,66,0.03)',border:'1px solid rgba(245,200,66,0.2)',borderRadius:14,padding:28}}>
            <div style={{fontSize:12,fontWeight:700,color:'#51cf66',marginBottom:16}}>WITH THE KIT</div>
            {[
              'Write blog post: 3 hours',
              'AI generates Twitter thread: 2 min',
              'AI generates LinkedIn post: 2 min',
              'AI drafts newsletter: 3 min',
              'AI writes carousel copy: 2 min',
              'Total: 3 hours + 10 minutes',
            ].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-200)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)',fontWeight:line.includes('Total') ? 700 : 400}}>{line}</div>
            ))}
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:24,fontSize:15,color:'var(--gold)',fontWeight:700}}>Save 10+ hours per week. Publish 5x more content.</p>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid var(--gold)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge">✍️ Creator Edition</div>
          <h2 style={{marginBottom:8}}>Content Creator AI Kit</h2>
          <div style={{fontSize:52,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$39</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment · Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Content repurposing engine (blog → all platforms)',
              'Twitter thread generator (3 styles)',
              'YouTube script builder (short + long form)',
              'Newsletter writer templates',
              '30-day content calendar generator',
              '50+ headline & hook formulas',
              'Platform-specific formatting guides',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'8px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Creator Kit →
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee · Secure checkout via Stripe</p>
          <div style={{marginTop:24,padding:'16px 20px',background:'rgba(245,200,66,0.08)',borderRadius:10,fontSize:14,color:'var(--gold)',fontWeight:600}}>
            💡 One sponsored post or brand deal covers the cost 100x over
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>creators who ship</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:32}}>
          {[
            { icon: '📹', name: 'YouTubers', desc: 'Turn video content into blog posts, threads, and newsletters without rewriting from scratch.' },
            { icon: '✍️', name: 'Bloggers & Writers', desc: 'Multiply every article into 5-10 platform-native posts. Same ideas, more reach.' },
            { icon: '📧', name: 'Newsletter Writers', desc: 'Repurpose editions into social content. Grow your audience without extra work.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>{c.icon}</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.5}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'linear-gradient(135deg,rgba(245,200,66,0.08),rgba(245,200,66,0.02))',border:'1px solid rgba(245,200,66,0.2)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Save 40%</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 3 AI kits for $97</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20}}>This kit + Starter Kit + Real Estate Kit — plus every future kit free. Save $70 vs buying individually.</p>
          <Link href="/bundle" style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            See the Bundle →
          </Link>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px'}}>
        <div style={{maxWidth:500,margin:'0 auto',textAlign:'center'}}>
          <div className="badge">🎁 Free Sample</div>
          <h2 style={{fontSize:28,marginBottom:16}}>Get a Free <span>Repurposing Template</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>See how the kit works. We will send you a blog-to-Twitter-thread template — free, no strings.</p>
          {sent ? (
            <div style={{background:'rgba(245,200,66,0.1)',border:'1px solid rgba(245,200,66,0.3)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free repurposing template is on its way.</div>
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
            { q: 'Do I need to be technical?', a: 'No. These are text prompts you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this.' },
            { q: 'Does this work for any niche?', a: 'Yes. The templates are designed to be niche-agnostic. Whether you create content about fitness, business, tech, or cooking — the repurposing frameworks work the same way.' },
            { q: 'How is this different from using ChatGPT directly?', a: 'ChatGPT gives generic outputs. These templates are engineered with platform-specific formatting, character limits, hook structures, and engagement patterns. The difference between "write a tweet" and getting a scroll-stopping thread.' },
            { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
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
