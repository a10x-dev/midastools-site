import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const KITS = {
  'starter': {
    name: 'OpenClaw Starter Kit',
    file: 'openclaw-starter-kit.zip',
    items: ['5 SOUL.md identity templates', 'Heartbeat workflow system', 'Daily review template', '5 product launch prompts', 'Revenue ops playbook', 'Complete setup guide'],
  },
  'real-estate': {
    name: 'Real Estate AI Kit',
    file: 'real-estate-kit.zip',
    items: ['Instant lead response templates', 'Listing description generator', '30-day follow-up sequences', 'Market analysis & CMA prompts', 'Client communication scripts', 'Open house & showing workflows'],
  },
  'content-creator': {
    name: 'Content Creator AI Kit',
    file: 'content-creator-kit.zip',
    items: ['Content repurposing engine', 'Twitter/X thread generator', 'YouTube script builder', 'Newsletter writer templates', '30-day content calendar generator', '50+ headline & hook formulas'],
  },
  'freelancer': {
    name: 'Freelancer AI Kit',
    file: 'freelancer-kit.zip',
    items: ['Client proposal generator', 'Invoice & payment chaser', 'Client onboarding system', 'Scope protector templates', 'Rate calculator & negotiation scripts', 'Weekly client update templates'],
  },
  'small-business': {
    name: 'Small Business AI Kit',
    file: 'small-business-kit.zip',
    items: ['Social media content engine', 'Email marketing templates', 'Customer service scripts', 'Hiring & HR template library', 'Business operations prompts', 'Sales & lead follow-up sequences'],
  },
  'prompt-mega-pack': {
    name: 'AI Prompt Mega Pack',
    file: 'ai-prompt-mega-pack.zip',
    items: ['35+ Copywriting & Sales prompts', '35+ Social Media & Growth prompts', '35+ Content Creation prompts', '35+ Business Operations prompts', '35+ Personal Branding prompts', '35+ Productivity & Automation prompts'],
  },
  'ecommerce': {
    name: 'E-commerce AI Kit',
    file: 'ecommerce-kit.zip',
    items: ['Product description generator (30+ prompts)', 'Email marketing sequences (25+ templates)', 'Ad copy templates (25+ prompts)', 'Social media for e-commerce (25+ prompts)', 'Customer communication scripts (20+)', 'SEO content strategy (20+ frameworks)'],
  },
  'saas-founder': {
    name: 'SaaS Founder AI Kit',
    file: 'saas-founder-kit.zip',
    items: ['Launch playbook & Product Hunt copy (25+ prompts)', 'Onboarding & activation sequences (25+ templates)', 'Churn prevention campaigns (20+ sequences)', 'Growth marketing frameworks (25+ prompts)', 'Customer success scripts (20+)', 'Pricing & positioning copy (20+ prompts)'],
  },
  'notion-templates': {
    name: 'Notion AI Templates Kit',
    file: 'notion-templates-kit.zip',
    items: ['Project management templates (25+)', 'Content calendar & planning (25+)', 'CRM & sales pipeline (25+)', 'Personal productivity system (25+)', 'Business operations SOPs (25+)', 'Freelancer & agency templates (25+)'],
  },
  'video-prompt-pack': {
    name: 'AI Video Prompt Pack',
    file: 'ai-video-prompt-pack.zip',
    items: ['25+ Social media video prompts', '25+ Product & marketing video prompts', '25+ Educational & tutorial prompts', '25+ Cinematic & storytelling prompts', '25+ Business & corporate prompts', '25+ Viral & trending style prompts'],
  },
  'resume-career-kit': {
    name: 'AI Resume & Career Kit',
    file: 'resume-career-kit.zip',
    items: ['Resume & CV optimization prompts (25+)', 'Cover letter generators (20+)', 'LinkedIn profile optimization (20+)', 'Interview preparation scripts (20+)', 'Job search strategy prompts (20+)', 'Salary negotiation templates (20+)'],
  },
  'social-media-kit': {
    name: 'AI Social Media Manager Kit',
    file: 'social-media-kit.zip',
    items: ['Content calendar system (25+ prompts)', 'Caption hooks & templates (30+)', 'Viral content formulas (25+ prompts)', 'Analytics & growth frameworks (25+)', 'Community management scripts (20+)', 'Paid social ad templates (25+)'],
  },
  'email-marketing-kit': {
    name: 'AI Email Marketing Kit',
    file: 'email-marketing-kit.zip',
    items: ['Welcome & onboarding sequences (25+ prompts)', 'Sales & promotional emails (25+ prompts)', 'Newsletter content templates (20+ prompts)', 'Cold outreach & follow-ups (20+ prompts)', 'Retention & re-engagement campaigns (20+ prompts)', 'Subject lines & copywriting frameworks (20+ prompts)'],
  },
  'presentation-kit': {
    name: 'AI Presentation & Pitch Deck Kit',
    file: 'presentation-kit.zip',
    items: ['Pitch deck prompts (25+ prompts)', 'Sales presentation templates (25+ prompts)', 'Conference talk outlines (20+ prompts)', 'Business report frameworks (20+ prompts)', 'Training & workshop decks (20+ prompts)', 'Slide design & storytelling (20+ prompts)'],
  },
  'bundle': {
    name: 'Complete AI Toolkit Bundle',
    file: null,
    files: [
      { name: 'AI Video Prompt Pack', file: 'ai-video-prompt-pack.zip' },
      { name: 'AI Image Prompt Pack', file: 'ai-image-prompt-pack.zip' },
      { name: 'AI Prompt Mega Pack', file: 'ai-prompt-mega-pack.zip' },
      { name: 'Notion AI Templates Kit', file: 'notion-templates-kit.zip' },
      { name: 'OpenClaw Starter Kit', file: 'openclaw-starter-kit.zip' },
      { name: 'Real Estate AI Kit', file: 'real-estate-kit.zip' },
      { name: 'Content Creator AI Kit', file: 'content-creator-kit.zip' },
      { name: 'Freelancer AI Kit', file: 'freelancer-kit.zip' },
      { name: 'Small Business AI Kit', file: 'small-business-kit.zip' },
      { name: 'E-commerce AI Kit', file: 'ecommerce-kit.zip' },
      { name: 'SaaS Founder AI Kit', file: 'saas-founder-kit.zip' },
      { name: 'AI Resume & Career Kit', file: 'resume-career-kit.zip' },
      { name: 'AI Social Media Manager Kit', file: 'social-media-kit.zip' },
      { name: 'AI Email Marketing Kit', file: 'email-marketing-kit.zip' },
      { name: 'AI Presentation & Pitch Deck Kit', file: 'presentation-kit.zip' },
    ],
    items: ['AI Video Prompt Pack (150+ video prompts)', 'AI Image Prompt Pack (150+ image prompts)', 'AI Prompt Mega Pack (200+ text prompts)', 'Notion AI Templates Kit (150+ templates)', 'AI Resume & Career Kit (125+ prompts)', 'AI Social Media Manager Kit (150+ prompts)', 'AI Email Marketing Kit (125+ prompts)', 'AI Presentation & Pitch Deck Kit (125+ prompts)', 'OpenClaw Starter Kit', 'Real Estate AI Kit', 'Content Creator AI Kit', 'Freelancer AI Kit', 'Small Business AI Kit', 'E-commerce AI Kit', 'SaaS Founder AI Kit', 'All future kits — free, forever'],
  },
};

export default function ThankYou() {
  const router = useRouter();
  const kitKey = router.query.kit || 'starter';
  const kit = KITS[kitKey] || KITS['starter'];
  const isBundle = kit.file === null;

  return (
    <Layout>
      <Head>
        <title>Thank You — {kit.name} | Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="robots" content="noindex" />
      </Head>

      <style>{`
        .ty-wrap { max-width: 560px; margin: 0 auto; padding: 80px 20px; text-align: center; }
        .ty-wrap h1 { font-size: 36px; font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; }
        .ty-sub { font-size: 18px; color: var(--gray-400); margin-bottom: 40px; }
        .dl-box { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 32px; margin-bottom: 32px; }
        .dl-box h2 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .dl-box p { font-size: 14px; color: var(--gray-400); margin-bottom: 24px; }
        .dl-btn { display: inline-block; background: var(--gold); color: #FFFFFF; padding: 16px 36px; border-radius: 10px; font-size: 16px; font-weight: 800; text-decoration: none; }
        .dl-btn:hover { opacity: 0.9; }
        .bundle-link { display: block; background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 10px; padding: 14px 20px; margin-bottom: 8px; color: var(--gold); font-weight: 700; font-size: 15px; text-decoration: none; text-align: left; transition: border-color 0.2s; }
        .bundle-link:hover { border-color: var(--gold); }
        .checklist { text-align: left; background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 28px; margin-bottom: 32px; }
        .checklist h3 { font-size: 15px; font-weight: 700; color: var(--gray-400); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .checklist ul { list-style: none; }
        .checklist li { font-size: 15px; padding: 6px 0; color: var(--text-secondary); }
        .checklist li::before { content: "\\2713  "; color: var(--gold); font-weight: 700; }
        .ty-note { font-size: 13px; color: var(--gray-500); }
        .ty-note a { color: var(--gray-400); }
      `}</style>

      <div className="ty-wrap">
        <h1>You're in.</h1>
        <p className="ty-sub">Your {kit.name} is ready. A download link is also on its way to your email.</p>

        <div className="dl-box">
          <h2>Download Your Kit</h2>
          {isBundle ? (
            <>
              <p>Download each kit below:</p>
              {kit.files.map(f => (
                <a key={f.file} href={`/${f.file}`} className="bundle-link" download>⬇ {f.name}</a>
              ))}
            </>
          ) : (
            <>
              <p>Click below to download all files (ZIP)</p>
              <a href={`/${kit.file}`} className="dl-btn" download>⬇ Download {kit.name}</a>
            </>
          )}
        </div>

        <div className="checklist">
          <h3>What&apos;s inside</h3>
          <ul>
            {kit.items.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>

        {!isBundle && (
          <div style={{background:'rgba(59,95,255,0.06)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'20px 24px',marginBottom:24,textAlign:'left'}}>
            <p style={{fontSize:14,fontWeight:700,color:'var(--gold)',marginBottom:6}}>Want all 16 kits? Save 83%</p>
            <p style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.5}}>Get the <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)',fontWeight:700}}>Complete Bundle for $97</a> — includes every kit plus all future releases free.</p>
          </div>
        )}

        <p className="ty-note">Questions? <a href="mailto:iam@armando.mx">iam@armando.mx</a> — we reply within 24h.</p>
      </div>
    </Layout>
  );
}
