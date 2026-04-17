import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function Bundle() {
  return (
    <Layout>
      <Head>
        <title>Done-For-You AI Business Kit — Your Marketing, Sales & Content, Written | Midas Tools</title>
        <meta name="description" content="Stop writing prompts. Get the actual work done. 2,000+ ready-to-use templates for marketing, sales, emails, social media, pitch decks — copy, paste, publish. $97 one-time." />
        <meta property="og:title" content="Done-For-You AI Business Kit — Your Work, Actually Done | Midas Tools" />
        <meta property="og:description" content="Not prompts. Not tools. The actual deliverables — emails written, social posts ready, pitch decks built, listings done. $97 one-time." />
        <meta property="og:url" content="https://www.midastools.co/bundle" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co/bundle" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Done-For-You AI Business Kit — All 16 Areas Covered",
          "description": "Your marketing, sales, email, social media, and business operations — done. 2,000+ ready-to-use deliverables covering 16 business areas. Not prompts. Output.",
          "url": "https://www.midastools.co/bundle",
          "brand": "Midas Tools",
          "offers": {
            "@type": "Offer",
            "price": "97",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b",
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
          "image": "https://www.midastools.co/og-image.png",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Sarah M." },
              "reviewBody": "This bundle is insane value. I use the real estate kit and freelancer kit daily — they've saved me easily 10 hours a week. Having all future kits included sealed the deal."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "James T." },
              "reviewBody": "Bought the bundle instead of individual kits and it was the right call. The prompt quality is way above what I was writing myself. My email open rates jumped 40% using the email marketing kit."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Priya K." },
              "reviewBody": "Great collection of prompts across every category. I primarily use the SaaS founder and content creator kits. Would love even more advanced prompts for technical writing, but overall excellent value for $97."
            }
          ]
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
        <div className="badge" style={{marginBottom:32}}>Done-For-You AI Business Kit</div>
        <h1>Your Work, Done.<br /><span>Not Prompts. Output.</span></h1>

        <p style={{fontSize:18,color:'var(--text-secondary)',maxWidth:560,margin:'0 auto 16px',lineHeight:1.7}}>
          Listings written. Emails drafted. Social posts ready. Pitch decks built. Sales copy done. You don't learn how to prompt — you copy, paste, and publish.
        </p>

        <div style={{display:'inline-flex',alignItems:'baseline',gap:16,marginBottom:40}}>
          <span style={{fontSize:22,color:'var(--text-tertiary)',textDecoration:'line-through',fontWeight:700}}>$564</span>
          <span style={{fontSize:48,fontWeight:900,color:'var(--accent)',letterSpacing:-2}}>$97</span>
        </div>

        <div style={{display:'block'}}>
          <a href={STRIPE_URL} className="btn-primary">Get the Full Bundle &mdash; $97 &rarr;</a>
        </div>
        <p style={{marginTop:14,fontSize:14,color:'var(--text-secondary)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        <p style={{marginTop:12,fontSize:14,color:'var(--text-tertiary)'}}>Secure Stripe checkout &middot; Works with ChatGPT, Claude, Gemini</p>
      </section>

      {/* Social Proof */}
      <section style={{paddingTop:0,paddingBottom:40}}>
        <div className="stats-row" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:700,margin:'0 auto'}}>
          {[
            { stat: '2,000+', label: 'Ready-to-use deliverables' },
            { stat: '16', label: 'Business areas covered' },
            { stat: '40hrs', label: 'Of work done for you' },
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
          <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:16,textAlign:'center'}}>The Work That's Already Done For You</div>
          <div className="outcomes-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
            {[
              { result: '90 days of social media posts — written, formatted, ready to paste into any scheduler', who: 'Opened the kit, copied 30 posts, scheduled them in Buffer. Done by lunch.' },
              { result: '50 property listings with descriptions, follow-up emails, and market analysis', who: 'One agent closed 3 deals using the pre-written follow-up sequences.' },
              { result: 'Complete email welcome sequence + 30-day nurture — just paste into Mailchimp', who: 'Set up the entire funnel in 2 hours. No copywriter needed.' },
              { result: 'Investor pitch deck, one-pager, and cold outreach emails — all written', who: 'Sent the pitch deck that afternoon. Got a meeting the next day.' },
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
        <h2>You don't need more tools.<br />You need the <span>work done</span>.</h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:32,lineHeight:1.7}}>For every $1 companies spend on software, they spend $6 on services. You're buying the service — at software prices:</p>
        <div className="persona-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          {[
            { emoji: '🏠', title: 'Real estate agents', pain: 'Your listings, follow-ups, and market reports — written and ready to send tonight' },
            { emoji: '📱', title: 'Content creators', pain: 'Your next 90 days of posts — written, formatted, ready to schedule right now' },
            { emoji: '💼', title: 'Freelancers & consultants', pain: 'Your proposals, onboarding emails, and invoicing scripts — done, not DIY' },
            { emoji: '🛒', title: 'E-commerce sellers', pain: 'Your product descriptions, email sequences, and ad copy — finished, not half-started' },
            { emoji: '🚀', title: 'Startup founders', pain: 'Your pitch deck, investor emails, and launch plan — built, not blank-paged' },
            { emoji: '📊', title: 'Small business owners', pain: 'Your marketing, hiring posts, and customer emails — handled like you have a team' },
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
        <div className="section-label">What You Get (Done For You)</div>
        <h2>16 business areas. All the work <span>finished</span>.</h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Each kit delivers ready-to-use output — not tutorials, not tools. Open it, copy it, use it. The work is done.</p>

        <div className="kits-grid">
          {[
            {
              abbr: 'VP', name: 'AI Video Content Pack', price: '$29', bg: 'var(--card-cyan)',
              desc: '150+ ready-to-use video scripts and production briefs. Paste into Veo 3.1, Kling 3.0, Runway, or Pika — get professional videos without hiring a videographer.',
              link: '/ai-video-prompt-pack',
              items: ['25 social media video scripts ready to produce', '25 product demo & marketing videos', '25 tutorial & educational videos', '25 cinematic & storytelling videos', '25 corporate & business videos', '25 viral trending-style videos'],
            },
            {
              abbr: 'IP', name: 'AI Image Content Pack', price: '$29', bg: 'var(--card-pink)',
              desc: '150+ ready-to-generate image briefs for social media, branding, product shots, and viral styles. Paste into ChatGPT or Midjourney — no designer needed.',
              link: '/ai-image-prompt-pack',
              items: ['25 social media graphics ready to generate', '25 brand & marketing images', '25 e-commerce product shots', '25 blog & content graphics', '25 professional headshots & portraits', '25 viral aesthetic images'],
            },
            {
              abbr: 'MP', name: 'AI Business Writing Pack', price: '$29', bg: 'var(--card-amber)',
              desc: '200+ ready-to-use business documents — sales copy, social posts, blog drafts, SOPs, and career materials. Open, customize 2-3 words, publish.',
              link: '/ai-prompt-mega-pack',
              items: ['35 sales & copywriting pieces done', '35 social media posts written', '35 content pieces drafted', '35 business SOPs & ops docs', '35 personal brand assets', '35 productivity workflows built'],
            },
            {
              abbr: 'SK', name: 'OpenClaw Starter Kit', price: '$29', bg: 'var(--card-blue)',
              desc: 'Deploy your AI entrepreneur. SOUL.md templates, heartbeat system, product launch prompts, revenue ops playbook.',
              link: '/',
              items: ['5 SOUL.md templates', 'Heartbeat workflow system', 'Product launch prompts', 'Revenue ops playbook', 'Complete setup guide'],
            },
            {
              abbr: 'RE', name: 'Real Estate AI Kit', price: '$49', bg: 'var(--card-green)',
              desc: 'Your listings written, follow-ups drafted, market reports done. Built for agents who want the work handled, not another tool to learn.',
              link: '/real-estate-kit',
              items: ['50 listing descriptions ready to post', '30-day follow-up email sequences written', 'Market analysis reports pre-built', 'Open house email & social campaigns done', 'Lead response scripts ready to send'],
            },
            {
              abbr: 'CC', name: 'Content Creator Kit', price: '$39', bg: 'var(--card-purple)',
              desc: 'Your next 90 days of content — written, formatted, and ready to post. Twitter threads, YouTube scripts, newsletters, all done.',
              link: '/content-creator-kit',
              items: ['30 Twitter threads written', '10 YouTube scripts drafted', '12 newsletter editions ready', '90-day content calendar filled out', 'Cross-platform repurposing done'],
            },
            {
              abbr: 'FL', name: 'Freelancer Automation Kit', price: '$39', bg: 'var(--card-pink)',
              desc: 'Your proposals written, onboarding emails drafted, invoice reminders ready. Close more clients without the admin grind.',
              link: '/freelancer-kit',
              items: ['10 client proposals pre-written', 'Invoice & payment reminder emails done', 'Client onboarding email sequence ready', 'Scope creep response scripts written', 'Rate negotiation scripts prepared'],
            },
            {
              abbr: 'SB', name: 'Small Business AI Kit', price: '$39', bg: 'var(--card-cyan)',
              desc: 'Your social media, emails, hiring posts, and customer replies — all written and ready to use. Like having a marketing team for $39.',
              link: '/small-business-kit',
              items: ['60 social media posts pre-written', 'Email marketing campaigns drafted', 'Customer service reply scripts done', 'Job postings & HR emails written', 'Sales follow-up sequences ready'],
            },
            {
              abbr: 'EC', name: 'E-commerce AI Kit', price: '$39', bg: 'var(--card-green)',
              desc: 'Your product descriptions written, email sequences built, ad copy ready to run. Launch products faster without hiring a copywriter.',
              link: '/ecommerce-kit',
              items: ['50 product descriptions written', 'Email marketing sequences done', 'Ad copy for Facebook/Google ready', 'Social media product posts drafted', 'SEO product pages pre-written'],
            },
            {
              abbr: 'SF', name: 'SaaS Founder AI Kit', price: '$39', bg: 'var(--card-blue)',
              desc: 'Your Product Hunt launch copy, onboarding emails, churn-prevention sequences — all written. Ship your SaaS faster.',
              link: '/saas-founder-kit',
              items: ['Product Hunt launch copy written', 'Onboarding & activation emails done', 'Churn prevention email sequences ready', 'Growth marketing campaigns drafted', 'Pricing page & positioning copy finished'],
            },
            {
              abbr: 'NT', name: 'Notion AI Templates Kit', price: '$39', bg: 'var(--card-purple)',
              desc: '150+ Notion templates pre-built with AI workflows. Your project management, CRM, and content systems — set up and ready to use.',
              link: '/notion-templates-kit',
              items: ['Project management system built', 'CRM & sales pipeline configured', 'Content calendar filled out', 'Productivity dashboard ready', 'Business SOPs documented', 'Freelancer workflow set up'],
            },
            {
              abbr: 'RC', name: 'AI Resume & Career Kit', price: '$29', bg: 'var(--card-green)',
              desc: 'Your resume rewritten, cover letters drafted, LinkedIn optimized, interview answers prepared. Land the job, not learn a tool.',
              link: '/resume-career-kit',
              items: ['Resume & CV rewrite done', 'Cover letters for 10+ industries written', 'LinkedIn profile sections optimized', 'Interview answers for 50+ questions prepared', 'Job search strategy mapped out', 'Salary negotiation scripts ready'],
            },
            {
              abbr: 'SM', name: 'AI Social Media Manager Kit', price: '$39', bg: 'var(--card-cyan)',
              desc: 'Your entire social media operation — 90 days of captions, ad copy, engagement replies, and analytics reports. Done, not DIY.',
              link: '/social-media-kit',
              items: ['90-day content calendar filled out', 'Caption hooks for every post written', 'Viral content scripts ready to shoot', 'Community management replies drafted', 'Paid ad copy for all platforms done', 'Analytics report templates filled'],
            },
            {
              abbr: 'EM', name: 'AI Email Marketing Kit', price: '$29', bg: 'var(--card-amber)',
              desc: 'Your entire email funnel — welcome sequence, sales emails, newsletters, cold outreach — written and ready to paste into any email tool.',
              link: '/email-marketing-kit',
              items: ['7-email welcome sequence written', 'Sales & promotional emails drafted', '12 newsletter editions ready to send', 'Cold outreach sequences with follow-ups', 'Retention & win-back campaigns done', '50+ subject lines pre-written'],
            },
            {
              abbr: 'PK', name: 'AI Presentation & Pitch Deck Kit', price: '$29', bg: 'var(--card-purple)',
              desc: 'Your pitch deck content, sales presentations, and conference talk outlines — structured, written, ready to drop into slides.',
              link: '/presentation-kit',
              items: ['Pitch deck — all 10 slides written', 'Sales presentation scripts ready', 'Conference talk outlines done', 'Business reports pre-structured', 'Training workshop decks built', 'Slide storytelling frameworks filled'],
            },
            {
              abbr: 'CW', name: 'Claude Cowork Mastery Kit', price: '$29', bg: 'var(--card-blue)',
              desc: 'Your Claude Cowork setup — done. CLAUDE.md files configured, playbooks installed, prompts loaded. Start delegating to Claude immediately.',
              link: '/claude-cowork-kit',
              badge: 'NEW',
              items: ['115 tasks you can delegate to Claude right now', '10 role playbooks installed (Marketing, Sales, HR...)', '5 CLAUDE.md files ready to drop in', '5 Global Instructions pre-configured', '5 connector setups done', 'Quick-start — working in 5 minutes'],
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
          <div style={{fontSize:20,fontWeight:800,marginBottom:8,color:'var(--text)'}}>Every future kit — included free, forever</div>
          <p style={{color:'var(--text-secondary)',fontSize:15,maxWidth:480,margin:'0 auto',lineHeight:1.7}}>
            We ship new done-for-you kits for emerging business needs. Bundle buyers get every new kit automatically — more work done for you, at no extra cost.
          </p>
        </div>
      </section>

      {/* The Shift */}
      <section style={{paddingBottom:40}}>
        <div style={{background:'var(--text)',borderRadius:20,padding:'48px 32px',color:'#FFFFFF',textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:1.5,marginBottom:16,color:'rgba(255,255,255,0.5)'}}>The Shift</div>
          <h2 style={{color:'#FFFFFF',marginBottom:24}}>Tools vs. Work</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:24,maxWidth:600,margin:'0 auto',alignItems:'center'}}>
            <div style={{padding:24,background:'rgba(255,255,255,0.05)',borderRadius:16,border:'1px solid rgba(255,255,255,0.1)'}}>
              <div style={{fontSize:14,fontWeight:700,marginBottom:12,color:'rgba(255,255,255,0.5)'}}>What Others Sell</div>
              <div style={{fontSize:15,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>
                "Here are prompts to<br/>write your emails"<br/>
                "Templates to build<br/>your pitch deck"<br/>
                "A tool to help you<br/>create content"
              </div>
            </div>
            <div style={{fontSize:32,color:'var(--accent)'}}>&#8594;</div>
            <div style={{padding:24,background:'rgba(59,95,255,0.15)',borderRadius:16,border:'1px solid rgba(59,95,255,0.3)'}}>
              <div style={{fontSize:14,fontWeight:700,marginBottom:12,color:'var(--accent)'}}>What You Get Here</div>
              <div style={{fontSize:15,lineHeight:1.8,color:'#FFFFFF'}}>
                "Your emails,<br/>already written"<br/>
                "Your pitch deck,<br/>already built"<br/>
                "Your content,<br/>ready to post"
              </div>
            </div>
          </div>
          <p style={{marginTop:24,fontSize:15,color:'rgba(255,255,255,0.6)',maxWidth:480,margin:'24px auto 0'}}>
            For every $1 spent on software tools, businesses spend $6 on getting the work done. We sell the work.
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
              { label: 'Total', ind: '$564+', bun: '$97' },
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
          <h2 style={{marginBottom:8,color:'#FFFFFF'}}>Your Entire Business Output, Done</h2>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'center',gap:16,margin:'16px 0 4px'}}>
            <span style={{fontSize:24,color:'rgba(255,255,255,0.5)',textDecoration:'line-through',fontWeight:700}}>$564</span>
            <span style={{fontSize:48,fontWeight:900,color:'#FFFFFF'}}>$97</span>
          </div>
          <div style={{color:'rgba(255,255,255,0.6)',fontSize:15,marginBottom:32}}>One-time payment &middot; All 16 kits + future kits free</div>
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

      {/* DFY Services Upsell */}
      <section style={{paddingBottom:40}}>
        <div style={{background:'#ECFDF5',border:'2px solid #A7F3D0',borderRadius:20,padding:40,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:800,color:'#065F46',textTransform:'uppercase',letterSpacing:1.5,marginBottom:12}}>Don&rsquo;t want to DIY at all?</div>
          <p style={{fontSize:22,fontWeight:900,marginBottom:8,color:'#111827'}}>We&rsquo;ll do the entire thing for you.</p>
          <p style={{color:'#4B5563',fontSize:15,marginBottom:24,lineHeight:1.7,maxWidth:520,margin:'0 auto 24px'}}>Send us a 5-minute brief. We deliver professional content, branding, or optimized listings &mdash; using the same AI that powers these kits. From $149.</p>
          <a href="/services" style={{display:'inline-block',background:'#065F46',color:'#fff',padding:'14px 32px',borderRadius:100,textDecoration:'none',fontWeight:800,fontSize:15}}>
            See Done-For-You Services &rarr;
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'What exactly do I get?', a: 'Sixteen business kits covering every area — marketing, sales, content, email, social media, presentations, hiring, real estate, e-commerce, SaaS, freelancing, and more. Each kit contains ready-to-use output: pre-written emails, social posts, sales copy, scripts, and templates. Open, customize a few details to your business, and use immediately. No AI expertise required.' },
            { q: 'How is this different from ChatGPT?', a: 'ChatGPT is a blank canvas. This is the painting. We\'ve already done the work of crafting, testing, and optimizing every piece of content. You get the finished output — not a tool to figure it out yourself. Think of it as hiring a marketing team that already did 40 hours of work for you.' },
            { q: 'What are "future kits"?', a: 'We release new kits for emerging business needs regularly. Bundle buyers get every new kit automatically at no extra cost, delivered to the same email.' },
            { q: 'Do I need all sixteen kits?', a: 'If you only need one area covered, buy it individually. The bundle makes sense if you want your marketing, sales, email, and content all handled — or if you want every future kit we release.' },
            { q: 'Can I share this with my team?', a: 'The license is for one person. For team licenses, email iam@armando.mx and we\'ll set up a custom plan.' },
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
