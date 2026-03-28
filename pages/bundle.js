import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function Bundle() {
  return (
    <Layout>
      <Head>
        <title>AI Toolkit Bundle — All 15 Kits for $97 | Midas Tools</title>
        <meta name="description" content="Get every Midas Tools AI kit in one bundle: Video Prompt Pack, Image Prompt Pack, Notion Templates, Resume &amp; Career Kit, Email Marketing Kit, Presentation Kit, Prompt Mega Pack, Starter Kit, Real Estate, Content Creator, Freelancer, Small Business, E-commerce, SaaS Founder Kit, and Social Media Kit — plus all future kits free. $97 one-time. Save 82%." />
        <meta property="og:title" content="AI Toolkit Bundle — All 15 Kits for $97 | Midas Tools" />
        <meta property="og:description" content="Every AI kit we make. One price. $97 one-time — save 82% vs buying separately. Includes all future kits free." />
        <meta property="og:url" content="https://www.midastools.co/bundle" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co/bundle" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Toolkit Bundle — All 15 Kits",
          "description": "Every Midas Tools AI kit in one bundle. 2,000+ prompts for ChatGPT, Claude, and any LLM. Covers real estate, freelancing, e-commerce, SaaS, content creation, email marketing, social media, presentations, and more.",
          "url": "https://www.midastools.co/bundle",
          "brand": { "@type": "Brand", "name": "Midas Tools" },
          "offers": {
            "@type": "Offer",
            "price": "97",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
          }
        })}} />
      </Head>

      <style>{`
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        h1 { font-size: clamp(34px,5.5vw,58px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; color: var(--text); }
        h1 span { color: var(--accent); }
        h2 { font-size: clamp(26px,4vw,40px); font-weight: 900; letter-spacing: -1px; margin-bottom: 16px; color: var(--text); }
        h2 span { color: var(--accent); }
        .kits-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin-bottom: 48px; }
        .kit-card { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; transition: border-color 0.2s, box-shadow 0.2s; }
        .kit-card:hover { border-color: var(--text-tertiary); box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .kit-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: var(--text); margin-bottom: 16px; letter-spacing: -0.5px; }
        @media(max-width:700px) {
          section { padding: 60px 20px; }
          .kits-grid { grid-template-columns: 1fr; }
          .stats-row { grid-template-columns: 1fr !important; }
          .outcomes-grid { grid-template-columns: 1fr !important; }
          .persona-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:40}}>
        <div className="badge" style={{marginBottom:32}}>Complete AI Toolkit</div>
        <h1>Every AI Kit.<br /><span>One Price. $97.</span></h1>

        <p style={{fontSize:18,color:'var(--text-secondary)',maxWidth:560,margin:'0 auto 16px',lineHeight:1.7}}>
          Get every Midas Tools AI kit — plus all future kits we release — for one flat price. No subscriptions. No upsells.
        </p>

        <div style={{display:'inline-flex',alignItems:'baseline',gap:16,marginBottom:40}}>
          <span style={{fontSize:22,color:'var(--text-tertiary)',textDecoration:'line-through',fontWeight:700}}>$535</span>
          <span style={{fontSize:48,fontWeight:900,color:'var(--accent)',letterSpacing:-2}}>$97</span>
        </div>

        <div style={{display:'block'}}>
          <a href={STRIPE_URL} className="btn-primary">Get the Full Bundle &mdash; $97 &rarr;</a>
        </div>
        <p style={{marginTop:14,fontSize:14,color:'var(--text-secondary)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Social Proof */}
      <section style={{paddingTop:0,paddingBottom:40}}>
        <div className="stats-row" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:700,margin:'0 auto'}}>
          {[
            { stat: '2,000+', label: 'Prompts & templates included' },
            { stat: '15', label: 'Complete niche kits' },
            { stat: '82%', label: 'Savings vs. buying separately' },
          ].map(s => (
            <div key={s.label} style={{textAlign:'center',padding:24,background:'var(--surface)',borderRadius:16,border:'1px solid var(--border)'}}>
              <div style={{fontSize:32,fontWeight:900,color:'var(--accent)',letterSpacing:-1}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Results / Outcomes */}
      <section style={{paddingTop:0,paddingBottom:40}}>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.12)',borderRadius:20,padding:'40px 32px'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:16,textAlign:'center'}}>What People Are Doing With These Kits</div>
          <div className="outcomes-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
            {[
              { result: 'Generated 3 months of social media content in one afternoon', who: 'Small business owners' },
              { result: 'Wrote 50 property listings in the time it used to take for 5', who: 'Real estate agents' },
              { result: 'Built entire email welcome sequence + 30-day nurture in 2 hours', who: 'Email marketers' },
              { result: 'Created pitch deck, investor memo, and one-pager in a single session', who: 'Startup founders' },
            ].map(r => (
              <div key={r.result} style={{padding:20,background:'var(--bg)',borderRadius:12,border:'1px solid var(--border)'}}>
                <div style={{fontSize:15,fontWeight:700,color:'var(--text)',lineHeight:1.5,marginBottom:8}}>"{r.result}"</div>
                <div style={{fontSize:13,color:'var(--text-tertiary)'}}>— {r.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section style={{paddingTop:0,paddingBottom:40}}>
        <div className="section-label">Who This Is For</div>
        <h2>Stop spending hours on tasks AI can do in <span>minutes</span></h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:32,lineHeight:1.7}}>If any of these sound like you, the bundle pays for itself in the first week:</p>
        <div className="persona-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          {[
            { emoji: '🏠', title: 'Real estate agents', pain: 'Writing listings and follow-ups eats your evenings' },
            { emoji: '📱', title: 'Content creators', pain: 'You know you should post daily but can\'t keep up' },
            { emoji: '💼', title: 'Freelancers & consultants', pain: 'Proposals, invoices, and client emails steal billable hours' },
            { emoji: '🛒', title: 'E-commerce sellers', pain: 'Product descriptions and ad copy take forever' },
            { emoji: '🚀', title: 'Startup founders', pain: 'Pitch decks, investor emails, and onboarding all need to be perfect' },
            { emoji: '📊', title: 'Small business owners', pain: 'You\'re doing marketing, sales, and ops all by yourself' },
          ].map(p => (
            <div key={p.title} style={{padding:20,borderRadius:12,border:'1px solid var(--border)',background:'var(--bg)'}}>
              <div style={{fontSize:24,marginBottom:8}}>{p.emoji}</div>
              <div style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:4}}>{p.title}</div>
              <div style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.6}}>{p.pain}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Included</div>
        <h2>15 complete kits + lifetime updates</h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Everything you need to automate your business, your content, and your client pipeline.</p>

        <div className="kits-grid">
          {[
            {
              abbr: 'VP', name: 'AI Video Prompt Pack', price: '$29', bg: 'var(--card-cyan)',
              desc: '150+ AI video generation prompts for social media, product demos, tutorials, cinematic content, corporate videos, and viral trending styles. Works with Sora, Runway, Pika, Kling AI.',
              link: '/ai-video-prompt-pack',
              items: ['25+ social media video prompts', '25+ product & marketing video prompts', '25+ educational & tutorial prompts', '25+ cinematic & storytelling prompts', '25+ business & corporate prompts', '25+ viral & trending style prompts'],
            },
            {
              abbr: 'IP', name: 'AI Image Prompt Pack', price: '$29', bg: 'var(--card-pink)',
              desc: '150+ AI image generation prompts for social media, brands, products, headshots, and viral aesthetic styles. Works with ChatGPT, Midjourney, DALL-E.',
              link: '/ai-image-prompt-pack',
              items: ['25+ social media image prompts', '25+ brand & marketing prompts', '25+ e-commerce product prompts', '25+ content & blog graphics', '25+ headshot & portrait prompts', '25+ viral aesthetic styles'],
            },
            {
              abbr: 'MP', name: 'AI Prompt Mega Pack', price: '$29', bg: 'var(--card-amber)',
              desc: '200+ battle-tested AI prompts for copywriting, social media, content creation, business operations, personal branding, and productivity.',
              link: '/ai-prompt-mega-pack',
              items: ['35+ copywriting & sales prompts', '35+ social media prompts', '35+ content creation prompts', '35+ business & ops prompts', '35+ branding & career prompts', '35+ productivity prompts'],
            },
            {
              abbr: 'SK', name: 'OpenClaw Starter Kit', price: '$29', bg: 'var(--card-blue)',
              desc: 'Deploy your AI entrepreneur. SOUL.md templates, heartbeat system, product launch prompts, revenue ops playbook.',
              link: '/',
              items: ['5 SOUL.md templates', 'Heartbeat workflow system', 'Product launch prompts', 'Revenue ops playbook', 'Complete setup guide'],
            },
            {
              abbr: 'RE', name: 'Real Estate AI Kit', price: '$49', bg: 'var(--card-green)',
              desc: 'Automate leads, listings, and follow-ups. Built specifically for agents and brokers.',
              link: '/real-estate-kit',
              items: ['Instant lead response templates', 'Listing description generator', '30-day follow-up sequences', 'Market analysis prompts', 'Open house workflows'],
            },
            {
              abbr: 'CC', name: 'Content Creator Kit', price: '$39', bg: 'var(--card-purple)',
              desc: 'Turn one piece of content into 10. Repurposing engine for every platform.',
              link: '/content-creator-kit',
              items: ['Content repurposing engine', 'Twitter thread generator', 'YouTube script builder', 'Newsletter writer', '30-day content calendar'],
            },
            {
              abbr: 'FL', name: 'Freelancer Automation Kit', price: '$39', bg: 'var(--card-pink)',
              desc: 'Win more clients, automate invoices, and protect your margins. Built for service-based freelancers.',
              link: '/freelancer-kit',
              items: ['Client proposal generator', 'Invoice & payment chaser', 'Client onboarding system', 'Scope creep protector', 'Rate calculator & scripts'],
            },
            {
              abbr: 'SB', name: 'Small Business AI Kit', price: '$39', bg: 'var(--card-cyan)',
              desc: 'Automate social media, email marketing, customer service, hiring, and daily operations for any small business.',
              link: '/small-business-kit',
              items: ['Social media content engine', 'Email marketing templates', 'Customer service scripts', 'Hiring & HR templates', 'Sales follow-up sequences'],
            },
            {
              abbr: 'EC', name: 'E-commerce AI Kit', price: '$39', bg: 'var(--card-green)',
              desc: 'Product descriptions, email flows, ad copy, and SEO templates for online stores and DTC brands.',
              link: '/ecommerce-kit',
              items: ['Product description generator', 'Email marketing sequences', 'Ad copy templates', 'Social media for e-commerce', 'SEO content strategy'],
            },
            {
              abbr: 'SF', name: 'SaaS Founder AI Kit', price: '$39', bg: 'var(--card-blue)',
              desc: 'Launch playbooks, onboarding sequences, churn prevention, and growth marketing for SaaS builders.',
              link: '/saas-founder-kit',
              items: ['Launch playbook & Product Hunt copy', 'Onboarding & activation emails', 'Churn prevention sequences', 'Growth marketing frameworks', 'Pricing & positioning copy'],
            },
            {
              abbr: 'NT', name: 'Notion AI Templates Kit', price: '$39', bg: 'var(--card-purple)',
              desc: '150+ ready-made Notion templates with built-in AI prompts for project management, CRM, content planning, and productivity.',
              link: '/notion-templates-kit',
              items: ['Project management templates', 'CRM & sales pipeline', 'Content calendar & planning', 'Personal productivity system', 'Business operations SOPs', 'Freelancer & agency templates'],
            },
            {
              abbr: 'RC', name: 'AI Resume & Career Kit', price: '$29', bg: 'var(--card-green)',
              desc: '125+ prompts for resumes, cover letters, LinkedIn optimization, interviews, job search strategies, and salary negotiation.',
              link: '/resume-career-kit',
              items: ['Resume & CV optimization prompts', 'Cover letter generators', 'LinkedIn profile optimization', 'Interview preparation scripts', 'Job search strategy prompts', 'Salary negotiation templates'],
            },
            {
              abbr: 'SM', name: 'AI Social Media Manager Kit', price: '$39', bg: 'var(--card-cyan)',
              desc: 'Content calendars, caption templates, viral formulas, analytics prompts, community management, and paid ad copy for every major platform.',
              link: '/social-media-kit',
              items: ['30-day content calendar system', 'Caption hooks & templates', 'Viral content formulas', 'Analytics & growth prompts', 'Community management scripts', 'Paid social ad templates'],
            },
            {
              abbr: 'EM', name: 'AI Email Marketing Kit', price: '$29', bg: 'var(--card-amber)',
              desc: '125+ prompts for welcome sequences, sales emails, newsletters, cold outreach, retention campaigns, and subject line copywriting.',
              link: '/email-marketing-kit',
              items: ['Welcome & onboarding sequences', 'Sales & promotional emails', 'Newsletter content templates', 'Cold outreach & follow-ups', 'Retention & re-engagement', 'Subject lines & copywriting'],
            },
            {
              abbr: 'PK', name: 'AI Presentation & Pitch Deck Kit', price: '$29', bg: 'var(--card-purple)',
              desc: '125+ prompts for pitch decks, sales presentations, conference talks, business reports, training workshops, and slide storytelling.',
              link: '/presentation-kit',
              items: ['Pitch deck prompts', 'Sales presentation templates', 'Conference talk outlines', 'Business report frameworks', 'Training & workshop decks', 'Slide design & storytelling'],
            },
          ].map(kit => (
            <div key={kit.name} className="kit-card">
              <div className="kit-icon" style={{ background: kit.bg }}>{kit.abbr}</div>
              <div style={{fontSize:17,fontWeight:800,marginBottom:4,color:'var(--text)'}}>{kit.name}</div>
              <div style={{fontSize:13,color:'var(--text-tertiary)',marginBottom:12}}>{kit.price} individually</div>
              <div style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.6,marginBottom:16,flex:1}}>{kit.desc}</div>
              <ul style={{listStyle:'none',marginBottom:16}}>
                {kit.items.map(item => (
                  <li key={item} style={{fontSize:13,color:'var(--text-secondary)',padding:'4px 0',display:'flex',gap:8}}>
                    <span style={{color:'var(--accent)',flexShrink:0}}>&#10003;</span> {item}
                  </li>
                ))}
              </ul>
              <Link href={kit.link} style={{fontSize:13,color:'var(--accent)',textDecoration:'none',fontWeight:600}}>View details &rarr;</Link>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.12)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Bundle Bonus</div>
          <div style={{fontSize:20,fontWeight:800,marginBottom:8,color:'var(--text)'}}>All future kits — included free</div>
          <p style={{color:'var(--text-secondary)',fontSize:15,maxWidth:480,margin:'0 auto',lineHeight:1.7}}>
            We ship new niche AI kits regularly. Bundle buyers get every new kit automatically — at no extra cost.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section>
        <h2 style={{textAlign:'center'}}>Individual vs. <span>Bundle</span></h2>
        <div style={{maxWidth:560,margin:'32px auto 0'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:0,border:'1px solid var(--border)',borderRadius:16,overflow:'hidden'}}>
            <div style={{padding:'14px 20px',background:'var(--surface)',borderBottom:'1px solid var(--border)',borderRight:'1px solid var(--border)',fontWeight:700,fontSize:13}}></div>
            <div style={{padding:'14px 20px',background:'var(--surface)',borderBottom:'1px solid var(--border)',borderRight:'1px solid var(--border)',fontWeight:700,fontSize:13,textAlign:'center',color:'var(--text-secondary)'}}>Individual</div>
            <div style={{padding:'14px 20px',background:'rgba(59,95,255,0.04)',borderBottom:'1px solid var(--border)',fontWeight:700,fontSize:13,textAlign:'center',color:'var(--accent)'}}>Bundle</div>
            {[
              { label: 'Video Prompt Pack', ind: '$29', bun: '\u2713' },
              { label: 'Starter Kit', ind: '$29', bun: '\u2713' },
              { label: 'Real Estate Kit', ind: '$49', bun: '\u2713' },
              { label: 'Content Creator Kit', ind: '$39', bun: '\u2713' },
              { label: 'Freelancer Kit', ind: '$39', bun: '\u2713' },
              { label: 'Small Business Kit', ind: '$39', bun: '\u2713' },
              { label: 'E-commerce Kit', ind: '$39', bun: '\u2713' },
              { label: 'SaaS Founder Kit', ind: '$39', bun: '\u2713' },
              { label: 'Notion Templates Kit', ind: '$39', bun: '\u2713' },
              { label: 'Resume & Career Kit', ind: '$29', bun: '\u2713' },
              { label: 'Email Marketing Kit', ind: '$29', bun: '\u2713' },
              { label: 'Presentation Kit', ind: '$29', bun: '\u2713' },
              { label: 'Future kits', ind: 'Extra cost', bun: 'Included' },
              { label: 'Total', ind: '$535+', bun: '$97' },
            ].map((row, i) => (
              <div key={row.label} style={{display:'contents'}}>
                <div style={{padding:'12px 20px',borderBottom: i < 13 ? '1px solid var(--border)' : 'none',borderRight:'1px solid var(--border)',fontSize:14,fontWeight: row.label === 'Total' ? 800 : 400,color:'var(--text)'}}>{row.label}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 13 ? '1px solid var(--border)' : 'none',borderRight:'1px solid var(--border)',fontSize:14,textAlign:'center',color:'var(--text-secondary)'}}>{row.ind}</div>
                <div style={{padding:'12px 20px',borderBottom: i < 13 ? '1px solid var(--border)' : 'none',background:'rgba(59,95,255,0.02)',fontSize:14,textAlign:'center',color: row.label === 'Total' ? 'var(--accent)' : 'var(--text)',fontWeight: row.label === 'Total' ? 900 : 600}}>{row.bun}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy">
        <div style={{background:'var(--text)',border:'none',borderRadius:20,padding:48,textAlign:'center',maxWidth:520,margin:'0 auto',color:'#FFFFFF'}}>
          <div className="badge" style={{marginBottom:20,background:'rgba(255,255,255,0.1)',borderColor:'rgba(255,255,255,0.2)',color:'#FFFFFF'}}>Best Value</div>
          <h2 style={{marginBottom:8,color:'#FFFFFF'}}>The Complete AI Toolkit</h2>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'center',gap:16,margin:'16px 0 4px'}}>
            <span style={{fontSize:24,color:'rgba(255,255,255,0.5)',textDecoration:'line-through',fontWeight:700}}>$535</span>
            <span style={{fontSize:48,fontWeight:900,color:'#FFFFFF'}}>$97</span>
          </div>
          <div style={{color:'rgba(255,255,255,0.6)',fontSize:15,marginBottom:32}}>One-time payment &middot; All 15 kits + future kits free</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'AI Video Prompt Pack ($29 value)',
              'AI Image Prompt Pack ($29 value)',
              'AI Prompt Mega Pack ($29 value)',
              'Notion AI Templates Kit ($39 value)',
              'OpenClaw Entrepreneur Starter Kit ($29 value)',
              'Real Estate AI Agent Kit ($49 value)',
              'Content Creator AI Kit ($39 value)',
              'Freelancer Automation Kit ($39 value)',
              'Small Business AI Kit ($39 value)',
              'E-commerce AI Kit ($39 value)',
              'SaaS Founder AI Kit ($39 value)',
              'AI Resume & Career Kit ($29 value)',
              'AI Email Marketing Kit ($29 value)',
              'AI Presentation & Pitch Deck Kit ($29 value)',
              'All future niche kits — included free',
              'Lifetime updates on all products',
              '30-day money-back guarantee',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.1)',fontSize:15,display:'flex',alignItems:'center',gap:10,color:'#FFFFFF'}}>
                <span style={{color:'var(--accent)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center',fontSize:18,background:'#FFFFFF',color:'var(--text)'}}>
            Get the Full Bundle &mdash; $97 &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'rgba(255,255,255,0.5)'}}>Secure checkout via Stripe &middot; Instant delivery to your email</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'What exactly do I get?', a: 'Fifteen complete AI kits — Video Prompt Pack, Image Prompt Pack, Notion Templates, Resume & Career Kit, Email Marketing Kit, Presentation Kit, Social Media Kit, Prompt Mega Pack, Starter, Real Estate, Content Creator, Freelancer, Small Business, E-commerce, and SaaS Founder — delivered as ZIP files. Each kit contains text-based templates, prompts, and workflows you use with ChatGPT, Claude, Sora, Midjourney, or any AI tool. No software to install.' },
            { q: 'What are "future kits"?', a: 'We release new niche AI kits regularly. Bundle buyers get every new kit automatically at no extra cost, delivered to the same email.' },
            { q: 'Do I need all fifteen kits?', a: 'If you only need one specific kit, buy it individually. The bundle makes sense if you want two or more kits — or if you want access to every future kit we release.' },
            { q: 'Can I share this with my team?', a: 'The license is for one person. For team licenses, email iam@armando.mx and we will set up a custom plan.' },
            { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--border)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8,color:'var(--text)'}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--text-secondary)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
