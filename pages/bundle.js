import Head from 'next/head';
import Link from 'next/link';

const STRIPE_URL = 'https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00'; // TODO: Replace with bundle Stripe link

export default function Bundle() {
  return (
    <>
      <Head>
        <title>AI Toolkit Bundle — All Kits for $97 (Save 40%) | Midas Tools</title>
        <meta name="description" content="Get every Midas Tools AI kit in one bundle: Starter Kit, Real Estate Kit, Content Creator Kit — plus all future kits free. $97 one-time, save 40%." />
        <meta property="og:title" content="AI Toolkit Bundle — All Kits for $97 | Midas Tools" />
        <meta property="og:description" content="Every AI kit we make. One price. $97 one-time — save 40% vs buying separately. Includes all future kits free." />
        <meta property="og:url" content="https://www.midastools.co/bundle" />
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
          .kits-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">👑 Midas Tools</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Starter Kit</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <a href="#buy" className="nav-cta">Get the Bundle — $97</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:40}}>
        <div className="badge">🎁 Save 40% — Limited Bundle</div>
        <h1>Every AI Kit.<br /><span>One Price. $97.</span></h1>
        <p style={{fontSize:20,color:'var(--gray-400)',maxWidth:580,margin:'0 auto 16px',lineHeight:1.6}}>
          Get every Midas Tools AI kit — plus all future kits we release — for one flat price. No subscriptions. No upsells.
        </p>

        {/* Price Comparison */}
        <div style={{display:'inline-flex',alignItems:'center',gap:16,marginBottom:40}}>
          <span style={{fontSize:24,color:'var(--gray-400)',textDecoration:'line-through',fontWeight:700}}>$167</span>
          <span style={{fontSize:48,fontWeight:900,color:'var(--gold)',letterSpacing:-2}}>$97</span>
          <span style={{background:'rgba(81,207,102,0.15)',border:'1px solid rgba(81,207,102,0.3)',color:'#51cf66',padding:'4px 12px',borderRadius:100,fontSize:13,fontWeight:700}}>SAVE $70</span>
        </div>

        <div style={{display:'block'}}>
          <a href="#buy" className="btn-primary">Get the Full Bundle — $97 →</a>
        </div>
        <p style={{marginTop:12,fontSize:14,color:'var(--gray-400)'}}>One-time payment · Instant download · 30-day money-back guarantee</p>
      </section>

      {/* What's Included */}
      <section style={{paddingTop:0}}>
        <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',letterSpacing:2,textTransform:'uppercase',marginBottom:16}}>What's Included</div>
        <h2>3 complete kits + lifetime updates</h2>
        <p style={{color:'var(--gray-400)',fontSize:17,marginBottom:48}}>Everything you need to automate your business, your content, and your client pipeline.</p>

        <div className="kits-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginBottom:48}}>
          {[
            {
              icon: '🚀',
              name: 'OpenClaw Starter Kit',
              price: '$29',
              desc: 'Deploy your AI entrepreneur. SOUL.md templates, heartbeat system, product launch prompts, revenue ops playbook.',
              link: '/',
              items: ['5 SOUL.md templates', 'Heartbeat workflow system', 'Product launch prompts', 'Revenue ops playbook', 'Complete setup guide'],
            },
            {
              icon: '🏡',
              name: 'Real Estate AI Kit',
              price: '$49',
              desc: 'Automate leads, listings, and follow-ups. Built specifically for agents and brokers.',
              link: '/real-estate-kit',
              items: ['Instant lead response templates', 'Listing description generator', '30-day follow-up sequences', 'Market analysis prompts', 'Open house workflows'],
            },
            {
              icon: '✍️',
              name: 'Content Creator Kit',
              price: '$39',
              desc: 'Turn one piece of content into 10. Repurposing engine for every platform.',
              link: '/content-creator-kit',
              items: ['Content repurposing engine', 'Twitter thread generator', 'YouTube script builder', 'Newsletter writer', '30-day content calendar'],
            },
          ].map(kit => (
            <div key={kit.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:28,display:'flex',flexDirection:'column'}}>
              <div style={{fontSize:32,marginBottom:12}}>{kit.icon}</div>
              <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>{kit.name}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',textDecoration:'line-through',marginBottom:12}}>{kit.price} individually</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6,marginBottom:16,flex:1}}>{kit.desc}</div>
              <ul style={{listStyle:'none',marginBottom:16}}>
                {kit.items.map(item => (
                  <li key={item} style={{fontSize:13,color:'var(--gray-200)',padding:'4px 0',display:'flex',gap:8}}>
                    <span style={{color:'var(--gold)',flexShrink:0}}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href={kit.link} style={{fontSize:13,color:'var(--gold)',textDecoration:'none',fontWeight:600}}>View details →</Link>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div style={{background:'linear-gradient(135deg,rgba(245,200,66,0.08),rgba(245,200,66,0.02))',border:'1px solid rgba(245,200,66,0.2)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Bundle Bonus</div>
          <div style={{fontSize:20,fontWeight:800,marginBottom:8}}>All future kits — free</div>
          <p style={{color:'var(--gray-400)',fontSize:15,maxWidth:500,margin:'0 auto'}}>
            We ship new niche AI kits regularly. Bundle buyers get every new kit automatically — at no extra cost. Your toolkit grows while you sleep.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section>
        <h2 style={{textAlign:'center'}}>Individual vs. <span>Bundle</span></h2>
        <div style={{maxWidth:600,margin:'32px auto 0'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:0,border:'1px solid var(--gray-800)',borderRadius:16,overflow:'hidden'}}>
            {/* Header */}
            <div style={{padding:'16px 20px',background:'var(--gray-900)',borderBottom:'1px solid var(--gray-800)',borderRight:'1px solid var(--gray-800)',fontWeight:700,fontSize:14}}></div>
            <div style={{padding:'16px 20px',background:'var(--gray-900)',borderBottom:'1px solid var(--gray-800)',borderRight:'1px solid var(--gray-800)',fontWeight:700,fontSize:14,textAlign:'center',color:'var(--gray-400)'}}>Individual</div>
            <div style={{padding:'16px 20px',background:'rgba(245,200,66,0.05)',borderBottom:'1px solid var(--gray-800)',fontWeight:700,fontSize:14,textAlign:'center',color:'var(--gold)'}}>Bundle</div>
            {/* Rows */}
            {[
              { label: 'Starter Kit', ind: '$29', bun: '✓' },
              { label: 'Real Estate Kit', ind: '$49', bun: '✓' },
              { label: 'Content Creator Kit', ind: '$39', bun: '✓' },
              { label: 'Future kits', ind: 'Extra cost', bun: 'Free' },
              { label: 'Total', ind: '$117+', bun: '$97' },
            ].map((row, i) => (
              <div key={row.label} style={{display:'contents'}}>
                <div style={{padding:'12px 20px',borderBottom: i < 4 ? '1px solid var(--gray-800)' : 'none',borderRight:'1px solid var(--gray-800)',fontSize:14,fontWeight: row.label === 'Total' ? 800 : 400}}>{row.label}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 4 ? '1px solid var(--gray-800)' : 'none',borderRight:'1px solid var(--gray-800)',fontSize:14,textAlign:'center',color:'var(--gray-400)'}}>{row.ind}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 4 ? '1px solid var(--gray-800)' : 'none',background:'rgba(245,200,66,0.03)',fontSize:14,textAlign:'center',color: row.label === 'Total' ? 'var(--gold)' : '#fff',fontWeight: row.label === 'Total' ? 900 : 600}}>{row.bun}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid var(--gold)',borderRadius:20,padding:48,textAlign:'center',maxWidth:520,margin:'0 auto'}}>
          <div className="badge">🎁 Best Value</div>
          <h2 style={{marginBottom:8}}>The Complete AI Toolkit</h2>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16,margin:'16px 0 4px'}}>
            <span style={{fontSize:28,color:'var(--gray-400)',textDecoration:'line-through',fontWeight:700}}>$167</span>
            <span style={{fontSize:52,fontWeight:900,color:'var(--gold)'}}>$97</span>
          </div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment · All 3 kits + future kits free</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'OpenClaw Entrepreneur Starter Kit ($29 value)',
              'Real Estate AI Agent Kit ($49 value)',
              'Content Creator AI Kit ($39 value)',
              'All future niche kits — free forever',
              'Lifetime updates on all products',
              '30-day money-back guarantee',
            ].map(item => (
              <li key={item} style={{padding:'8px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center',fontSize:20}}>
            Get the Full Bundle — $97 →
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe · Instant delivery to your email</p>
          <div style={{marginTop:24,padding:'16px 20px',background:'rgba(245,200,66,0.08)',borderRadius:10,fontSize:14,color:'var(--gold)',fontWeight:600}}>
            💡 Save $70+ vs buying individually — and get every future kit free
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'What exactly do I get?', a: 'Three complete AI kits (Starter, Real Estate, Content Creator) delivered as a ZIP file. Each kit contains text-based templates, prompts, and workflows you use with ChatGPT, Claude, or any AI tool. No software to install.' },
            { q: 'What are "future kits"?', a: 'We release new niche AI kits regularly (Freelancer Kit, E-commerce Kit, etc.). Bundle buyers get every new kit automatically at no extra cost, delivered to the same email.' },
            { q: 'Do I need all three kits?', a: 'If you only need one specific kit, buy it individually. The bundle makes sense if you want the Starter Kit plus at least one niche kit — or if you want access to every future kit we release.' },
            { q: 'Can I share this with my team?', a: 'The license is for one person. For team licenses, email rmidas26@gmail.com and we will set up a custom plan.' },
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
