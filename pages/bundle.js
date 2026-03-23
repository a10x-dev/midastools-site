import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function Bundle() {
  return (
    <Layout>
      <Head>
        <title>AI Toolkit Bundle — All 8 Kits for $97 | Midas Tools</title>
        <meta name="description" content="Get every Midas Tools AI kit in one bundle: Prompt Mega Pack, Starter Kit, Real Estate, Content Creator, Freelancer, Small Business, E-commerce, and SaaS Founder Kit — plus all future kits free. $97 one-time. Save 68%." />
        <meta property="og:title" content="AI Toolkit Bundle — All 8 Kits for $97 | Midas Tools" />
        <meta property="og:description" content="Every AI kit we make. One price. $97 one-time — save 68% vs buying separately. Includes all future kits free." />
        <meta property="og:url" content="https://www.midastools.co/bundle" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        h1 { font-size: clamp(34px,5.5vw,58px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; }
        h1 span { color: var(--gold); }
        h2 { font-size: clamp(26px,4vw,40px); font-weight: 900; letter-spacing: -1px; margin-bottom: 16px; }
        h2 span { color: var(--gold); }
        .kits-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin-bottom: 48px; }
        .kit-card { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; transition: border-color 0.2s; }
        .kit-card:hover { border-color: var(--gray-700); }
        .kit-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.12); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: var(--gold); margin-bottom: 16px; letter-spacing: -0.5px; }
        @media(max-width:700px) {
          section { padding: 60px 20px; }
          .kits-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:40}}>
        <div className="badge" style={{marginBottom:32}}>Complete AI Toolkit</div>
        <h1>Every AI Kit.<br /><span>One Price. $97.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 16px',lineHeight:1.7}}>
          Get every Midas Tools AI kit — plus all future kits we release — for one flat price. No subscriptions. No upsells.
        </p>

        <div style={{display:'inline-flex',alignItems:'baseline',gap:16,marginBottom:40}}>
          <span style={{fontSize:22,color:'var(--gray-400)',textDecoration:'line-through',fontWeight:700}}>$224</span>
          <span style={{fontSize:48,fontWeight:900,color:'var(--gold)',letterSpacing:-2}}>$97</span>
        </div>

        <div style={{display:'block'}}>
          <a href={STRIPE_URL} className="btn-primary">Get the Full Bundle &mdash; $97 &rarr;</a>
        </div>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* What's Included */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Included</div>
        <h2>8 complete kits + lifetime updates</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Everything you need to automate your business, your content, and your client pipeline.</p>

        <div className="kits-grid">
          {[
            {
              abbr: 'MP', name: 'AI Prompt Mega Pack', price: '$29',
              desc: '200+ battle-tested AI prompts for copywriting, social media, content creation, business operations, personal branding, and productivity.',
              link: '/ai-prompt-mega-pack',
              items: ['35+ copywriting & sales prompts', '35+ social media prompts', '35+ content creation prompts', '35+ business & ops prompts', '35+ branding & career prompts', '35+ productivity prompts'],
            },
            {
              abbr: 'SK', name: 'OpenClaw Starter Kit', price: '$29',
              desc: 'Deploy your AI entrepreneur. SOUL.md templates, heartbeat system, product launch prompts, revenue ops playbook.',
              link: '/',
              items: ['5 SOUL.md templates', 'Heartbeat workflow system', 'Product launch prompts', 'Revenue ops playbook', 'Complete setup guide'],
            },
            {
              abbr: 'RE', name: 'Real Estate AI Kit', price: '$49',
              desc: 'Automate leads, listings, and follow-ups. Built specifically for agents and brokers.',
              link: '/real-estate-kit',
              items: ['Instant lead response templates', 'Listing description generator', '30-day follow-up sequences', 'Market analysis prompts', 'Open house workflows'],
            },
            {
              abbr: 'CC', name: 'Content Creator Kit', price: '$39',
              desc: 'Turn one piece of content into 10. Repurposing engine for every platform.',
              link: '/content-creator-kit',
              items: ['Content repurposing engine', 'Twitter thread generator', 'YouTube script builder', 'Newsletter writer', '30-day content calendar'],
            },
            {
              abbr: 'FL', name: 'Freelancer Automation Kit', price: '$39',
              desc: 'Win more clients, automate invoices, and protect your margins. Built for service-based freelancers.',
              link: '/freelancer-kit',
              items: ['Client proposal generator', 'Invoice & payment chaser', 'Client onboarding system', 'Scope creep protector', 'Rate calculator & scripts'],
            },
            {
              abbr: 'SB', name: 'Small Business AI Kit', price: '$39',
              desc: 'Automate social media, email marketing, customer service, hiring, and daily operations for any small business.',
              link: '/small-business-kit',
              items: ['Social media content engine', 'Email marketing templates', 'Customer service scripts', 'Hiring & HR templates', 'Sales follow-up sequences'],
            },
            {
              abbr: 'EC', name: 'E-commerce AI Kit', price: '$39',
              desc: 'Product descriptions, email flows, ad copy, and SEO templates for online stores and DTC brands.',
              link: '/ecommerce-kit',
              items: ['Product description generator', 'Email marketing sequences', 'Ad copy templates', 'Social media for e-commerce', 'SEO content strategy'],
            },
            {
              abbr: 'SF', name: 'SaaS Founder AI Kit', price: '$39',
              desc: 'Launch playbooks, onboarding sequences, churn prevention, and growth marketing for SaaS builders.',
              link: '/saas-founder-kit',
              items: ['Launch playbook & Product Hunt copy', 'Onboarding & activation emails', 'Churn prevention sequences', 'Growth marketing frameworks', 'Pricing & positioning copy'],
            },
          ].map(kit => (
            <div key={kit.name} className="kit-card">
              <div className="kit-icon">{kit.abbr}</div>
              <div style={{fontSize:17,fontWeight:800,marginBottom:4}}>{kit.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',marginBottom:12}}>{kit.price} individually</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6,marginBottom:16,flex:1}}>{kit.desc}</div>
              <ul style={{listStyle:'none',marginBottom:16}}>
                {kit.items.map(item => (
                  <li key={item} style={{fontSize:13,color:'var(--gray-200)',padding:'4px 0',display:'flex',gap:8}}>
                    <span style={{color:'var(--gold)',flexShrink:0}}>&#10003;</span> {item}
                  </li>
                ))}
              </ul>
              <Link href={kit.link} style={{fontSize:13,color:'var(--gold)',textDecoration:'none',fontWeight:600}}>View details &rarr;</Link>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div style={{background:'rgba(245,200,66,0.04)',border:'1px solid rgba(245,200,66,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Bundle Bonus</div>
          <div style={{fontSize:20,fontWeight:800,marginBottom:8}}>All future kits — included free</div>
          <p style={{color:'var(--gray-400)',fontSize:15,maxWidth:480,margin:'0 auto',lineHeight:1.7}}>
            We ship new niche AI kits regularly. Bundle buyers get every new kit automatically — at no extra cost.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section>
        <h2 style={{textAlign:'center'}}>Individual vs. <span>Bundle</span></h2>
        <div style={{maxWidth:560,margin:'32px auto 0'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:0,border:'1px solid var(--gray-800)',borderRadius:16,overflow:'hidden'}}>
            <div style={{padding:'14px 20px',background:'var(--gray-900)',borderBottom:'1px solid var(--gray-800)',borderRight:'1px solid var(--gray-800)',fontWeight:700,fontSize:13}}></div>
            <div style={{padding:'14px 20px',background:'var(--gray-900)',borderBottom:'1px solid var(--gray-800)',borderRight:'1px solid var(--gray-800)',fontWeight:700,fontSize:13,textAlign:'center',color:'var(--gray-400)'}}>Individual</div>
            <div style={{padding:'14px 20px',background:'rgba(245,200,66,0.04)',borderBottom:'1px solid var(--gray-800)',fontWeight:700,fontSize:13,textAlign:'center',color:'var(--gold)'}}>Bundle</div>
            {[
              { label: 'Starter Kit', ind: '$29', bun: '\u2713' },
              { label: 'Real Estate Kit', ind: '$49', bun: '\u2713' },
              { label: 'Content Creator Kit', ind: '$39', bun: '\u2713' },
              { label: 'Freelancer Kit', ind: '$39', bun: '\u2713' },
              { label: 'Small Business Kit', ind: '$39', bun: '\u2713' },
              { label: 'E-commerce Kit', ind: '$39', bun: '\u2713' },
              { label: 'SaaS Founder Kit', ind: '$39', bun: '\u2713' },
              { label: 'Future kits', ind: 'Extra cost', bun: 'Included' },
              { label: 'Total', ind: '$302+', bun: '$97' },
            ].map((row, i) => (
              <div key={row.label} style={{display:'contents'}}>
                <div style={{padding:'12px 20px',borderBottom: i < 6 ? '1px solid var(--gray-800)' : 'none',borderRight:'1px solid var(--gray-800)',fontSize:14,fontWeight: row.label === 'Total' ? 800 : 400}}>{row.label}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 6 ? '1px solid var(--gray-800)' : 'none',borderRight:'1px solid var(--gray-800)',fontSize:14,textAlign:'center',color:'var(--gray-400)'}}>{row.ind}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 6 ? '1px solid var(--gray-800)' : 'none',background:'rgba(245,200,66,0.02)',fontSize:14,textAlign:'center',color: row.label === 'Total' ? 'var(--gold)' : '#fff',fontWeight: row.label === 'Total' ? 900 : 600}}>{row.bun}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(245,200,66,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:520,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Best Value</div>
          <h2 style={{marginBottom:8}}>The Complete AI Toolkit</h2>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'center',gap:16,margin:'16px 0 4px'}}>
            <span style={{fontSize:24,color:'var(--gray-400)',textDecoration:'line-through',fontWeight:700}}>$302</span>
            <span style={{fontSize:48,fontWeight:900,color:'var(--gold)'}}>$97</span>
          </div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; All 8 kits + future kits free</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'AI Prompt Mega Pack ($29 value)',
              'OpenClaw Entrepreneur Starter Kit ($29 value)',
              'Real Estate AI Agent Kit ($49 value)',
              'Content Creator AI Kit ($39 value)',
              'Freelancer Automation Kit ($39 value)',
              'Small Business AI Kit ($39 value)',
              'E-commerce AI Kit ($39 value)',
              'SaaS Founder AI Kit ($39 value)',
              'All future niche kits — included free',
              'Lifetime updates on all products',
              '30-day money-back guarantee',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center',fontSize:18}}>
            Get the Full Bundle &mdash; $97 &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe &middot; Instant delivery to your email</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'What exactly do I get?', a: 'Five complete AI kits (Starter, Real Estate, Content Creator, Freelancer, Small Business) delivered as a ZIP file. Each kit contains text-based templates, prompts, and workflows you use with ChatGPT, Claude, or any AI tool. No software to install.' },
            { q: 'What are "future kits"?', a: 'We release new niche AI kits regularly. Bundle buyers get every new kit automatically at no extra cost, delivered to the same email.' },
            { q: 'Do I need all five kits?', a: 'If you only need one specific kit, buy it individually. The bundle makes sense if you want the Starter Kit plus at least one niche kit — or if you want access to every future kit we release.' },
            { q: 'Can I share this with my team?', a: 'The license is for one person. For team licenses, email iam@armando.mx and we will set up a custom plan.' },
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
