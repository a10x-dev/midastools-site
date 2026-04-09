import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/aFa14mfoH8qZ6KEgoqcMM0h';

export default function NotionTemplatesKit() {
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
        body: JSON.stringify({ email, source: 'notion-templates-kit-lead' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Notion AI Templates — 150+ Ready-Made Templates for Teams &amp; Freelancers | Midas Tools</title>
        <meta name="description" content="150+ Notion templates for project management, CRM, content calendar, and personal productivity. AI-powered, ready to duplicate. $39 one-time." />
        <meta property="og:title" content="Notion AI Templates — 150+ Ready-Made Templates | Midas Tools" />
        <meta property="og:description" content="150+ Notion templates for project management, CRM, content calendar, and personal productivity. AI-powered. $39 one-time." />
        <meta property="og:url" content="https://www.midastools.co/notion-templates-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co/notion-templates-kit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Notion AI Templates Kit",
          "description": "150+ ready-made Notion templates with built-in AI prompts for project management, CRM, content planning, personal productivity, business operations, and freelancer workflows.",
          "url": "https://www.midastools.co/notion-templates-kit",
          "image": "https://www.midastools.co/og-image.png",
          "brand": "Midas Tools",
          "offers": {
            "@type": "Offer",
            "price": "39",
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
            "ratingValue": "4.7",
            "reviewCount": "56"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Alyssa T." },
              "reviewBody": "These Notion templates are beautifully organized. The CRM and sales pipeline template replaced a $50/month tool for my team. Having AI prompts built into each template makes them 10x more useful than plain templates."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Derek H." },
              "reviewBody": "The content calendar template is exactly what I needed. I plan my entire month of blog posts, social media, and newsletters in one Notion dashboard. The AI prompts generate content ideas on demand."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Kira S." },
              "reviewBody": "Great collection of Notion templates. The project management and personal productivity systems are my favorites. Some templates could use more customization options, but the foundation is solid."
            }
          ]
        })}} />
      </Head>

      <style>{`
        section{max-width:820px;margin:0 auto;padding:80px 40px}
        h1{font-size:clamp(34px,5.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--accent)}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:var(--accent)}
        .kit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
        .kit-card{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:28px;transition:border-color 0.2s,box-shadow 0.2s}
        .kit-card:hover{border-color:var(--text-tertiary);box-shadow:0 4px 16px rgba(0,0,0,0.06)}
        .pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center}
        @media(max-width:700px){
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Notion Power Users</div>
        <h1>Stop Building Notion<br />from Scratch.<br /><span>150+ AI Templates. $39.</span></h1>
        <p style={{fontSize:18,color:'var(--text-secondary)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          Project management, CRM, content calendar, and personal productivity templates — all AI-powered and ready to duplicate into your Notion workspace.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Notion Templates Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--text-secondary)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>The average professional spends 4+ hours/week building Notion pages from scratch</h2>
          <p style={{color:'var(--text-secondary)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            That's <strong style={{color:'var(--accent)'}}>200+ hours/year</strong> designing layouts, writing templates, and configuring databases. This kit gives you everything pre-built for a one-time $39.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '150+', label: 'Ready-made Notion templates' },
            { stat: '6 categories', label: 'From CRM to personal productivity' },
            { stat: 'AI-powered', label: 'Built-in AI prompts in every template' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:24}}>
              <div style={{fontSize:32,fontWeight:900,color:'var(--accent)',marginBottom:4}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--text-secondary)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every Notion template you'll ever need</h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built pages, databases, and dashboards. Duplicate and customize in minutes.</p>

        <div className="kit-grid">
          {[
            { title: 'Project Management Templates', count: '25+ templates', desc: 'Sprint boards, roadmaps, OKRs, meeting notes, and project trackers. Built for agile teams and solo operators alike.', color: 'var(--card-blue)' },
            { title: 'Content Calendar & Planning', count: '25+ templates', desc: 'Social media calendars, blog editorial pipelines, newsletter planning, and content repurposing workflows.', color: 'var(--card-purple)' },
            { title: 'CRM & Sales Pipeline', count: '25+ templates', desc: 'Lead tracking databases, sales kanban boards, client onboarding checklists, and deal pipeline dashboards.', color: 'var(--card-green)' },
            { title: 'Personal Productivity', count: '25+ templates', desc: 'Second brain system, daily journaling, habit tracker, weekly reviews, reading lists, and goal setting frameworks.', color: 'var(--card-amber)' },
            { title: 'Business Operations', count: '25+ templates', desc: 'SOPs and process docs, employee onboarding, KPI dashboards, company wiki, and resource planning templates.', color: 'var(--card-cyan)' },
            { title: 'Freelancer & Agency', count: '25+ templates', desc: 'Client portals, proposal templates, time tracking databases, deliverable trackers, and invoice logs.', color: 'var(--card-pink)' },
          ].map(f => (
            <div key={f.title} className="kit-card" style={{borderTop:`3px solid ${f.color}`}}>
              <div style={{fontSize:12,fontWeight:700,color:f.color,marginBottom:6}}>{f.count}</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Before vs. <span>After</span></h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:48,textAlign:'center',maxWidth:540,margin:'0 auto 48px',lineHeight:1.7}}>What changes when you stop building from scratch.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              scenario: 'Setting up a new project workspace',
              before: 'You spend 4+ hours building pages from scratch — designing layouts, creating databases, writing property names.',
              after: 'Duplicate a template in 2 minutes. Databases, views, and automations are already configured.'
            },
            {
              scenario: 'Creating content for the week',
              before: 'You use generic templates that don\'t fit your workflow. No AI integration. Everything is manual.',
              after: 'AI prompts are built into every template. Generate ideas, outlines, and drafts without leaving Notion.'
            },
            {
              scenario: 'Onboarding a new client or team member',
              before: 'You cobble together docs from Google, old emails, and memory. Important steps get missed.',
              after: 'Customized onboarding workflows with checklists, timelines, and resource links — ready to duplicate and assign.'
            },
          ].map((c, i) => (
            <div key={i} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,padding:32}}>
              <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:12}}>{c.scenario}</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'var(--text-tertiary)',marginBottom:8,letterSpacing:0.5}}>BEFORE</div>
                  <div style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.6}}>{c.before}</div>
                </div>
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',marginBottom:8,letterSpacing:0.5}}>AFTER</div>
                  <div style={{fontSize:14,color:'var(--text)',lineHeight:1.6}}>{c.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section>
        <h2 style={{textAlign:'center'}}>Built for <span>people who live in Notion</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Solopreneurs & Freelancers', desc: 'Run your entire business from Notion — clients, projects, invoices, and content in one workspace.' },
            { name: 'Small Teams & Startups', desc: 'Onboard teammates, track sprints, manage OKRs, and keep everyone aligned without expensive PM tools.' },
            { name: 'Content Creators & Marketers', desc: 'Plan, create, and schedule content across platforms with AI-powered editorial calendars.' },
            { name: 'Project Managers', desc: 'Sprint boards, roadmaps, meeting notes, and stakeholder updates — all templated and ready to go.' },
            { name: 'Students & Researchers', desc: 'Second brain systems, reading trackers, study planners, and research databases for academic workflows.' },
            { name: 'Anyone Who Lives in Notion', desc: 'If Notion is your operating system, these templates make it 10x more powerful overnight.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample AI Prompts */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Sample <span>AI Prompts</span> from the Kit</h2>
        <p style={{color:'var(--text-secondary)',fontSize:16,marginBottom:32,textAlign:'center',maxWidth:540,margin:'0 auto 32px',lineHeight:1.7}}>Every template includes built-in AI prompts like these. Just paste and go.</p>

        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          {[
            {
              label: 'Project Brief Generator',
              prompt: `You are a senior project manager. Based on the following project details, generate a comprehensive Notion project brief including: objectives, scope, key milestones, team roles, risks, and success metrics.\n\nProject: [PASTE PROJECT NAME]\nTeam size: [NUMBER]\nTimeline: [WEEKS/MONTHS]\nBudget: [AMOUNT]\n\nFormat the output as a structured Notion page with headers, bullet points, and a timeline table.`
            },
            {
              label: 'Weekly Content Calendar',
              prompt: `Generate a 7-day content calendar for [BRAND/NICHE]. For each day, provide:\n- Platform (Instagram, LinkedIn, X, Newsletter)\n- Content type (carousel, thread, story, long-form)\n- Hook/headline\n- 3 key talking points\n- Suggested hashtags\n- Best posting time\n\nTone: [PROFESSIONAL/CASUAL/BOLD]\nTarget audience: [DESCRIBE]`
            },
            {
              label: 'Client Onboarding Checklist',
              prompt: `Create a detailed client onboarding checklist for a [SERVICE TYPE] business. Include:\n- Pre-kickoff tasks (contracts, payments, access)\n- Kickoff meeting agenda\n- Week 1 deliverables and milestones\n- Communication cadence\n- Tools and login setup\n- Success metrics to track\n\nFormat as a Notion checklist with due date suggestions and assignee fields.`
            },
          ].map((p, i) => (
            <div key={i}>
              <div style={{fontSize:13,fontWeight:700,color:'var(--accent)',marginBottom:8}}>{p.label}</div>
              <pre style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:24,fontSize:13,fontFamily:'monospace',color:'var(--text-secondary)',lineHeight:1.7,whiteSpace:'pre-wrap',overflowX:'auto',margin:0}}>
                {p.prompt}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--surface)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Not ready to buy? Get <span>3 free Notion templates</span></h2>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See the quality for yourself. We'll send you a project tracker, content calendar, and CRM template &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--text-secondary)',fontSize:15}}>Your 3 free Notion templates are on their way.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--border)',background:'var(--bg)',color:'var(--text)',fontSize:15,outline:'none',fontFamily:'inherit'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'var(--accent)',color:'#FFFFFF',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
              >
                {loading ? '...' : 'Send It \u2192'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Bundle Upsell */}
      <section>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Best Value</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 16 AI kits for $97</p>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 15 more AI kits &mdash; $564 value for $97. Save 83%. Plus every future kit free.</p>
          <Link href="/bundle" style={{color:'var(--accent)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{background:'var(--surface)',borderTop:'1px solid var(--border)',padding:'80px 40px',maxWidth:'100%',textAlign:'center'}}>
        <h2>Ready to 10x your <span>Notion workspace</span>?</h2>
        <p style={{color:'var(--text-secondary)',fontSize:17,maxWidth:480,margin:'0 auto 32px',lineHeight:1.7}}>
          150+ templates. AI prompts built in. One-time $39. Start building faster today.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Notion Templates Kit &mdash; $39 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--text-secondary)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Related Articles */}
      <section>
        <h2>Notion & Productivity <span>Guides</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>
          {[
            { href: '/blog/notion-templates-business-2026', title: '12 Notion Templates Every Business Needs in 2026', desc: 'The essential templates for project management, CRM, and team ops.' },
            { href: '/blog/ai-productivity-tools-2026', title: 'Best AI Productivity Tools for 2026', desc: 'The tools that save 10+ hours per week on repetitive work.' },
            { href: '/blog/ai-tools-project-managers-2026', title: 'AI Tools for Project Managers', desc: 'How PMs are using AI to ship faster and communicate better.' },
          ].map(a => (
            <Link key={a.href} href={a.href} style={{display:'block',padding:24,borderRadius:14,border:'1px solid var(--border)',textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8,lineHeight:1.4}}>{a.title}</div>
              <div style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.6}}>{a.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
