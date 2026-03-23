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
  'bundle': {
    name: 'Complete AI Toolkit Bundle',
    file: null,
    files: [
      { name: 'OpenClaw Starter Kit', file: 'openclaw-starter-kit.zip' },
      { name: 'Real Estate AI Kit', file: 'real-estate-kit.zip' },
      { name: 'Content Creator AI Kit', file: 'content-creator-kit.zip' },
      { name: 'Freelancer AI Kit', file: 'freelancer-kit.zip' },
      { name: 'Small Business AI Kit', file: 'small-business-kit.zip' },
    ],
    items: ['OpenClaw Starter Kit', 'Real Estate AI Kit', 'Content Creator AI Kit', 'Freelancer AI Kit', 'Small Business AI Kit', 'All future kits — free, forever'],
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
        .dl-btn { display: inline-block; background: var(--gold); color: #000; padding: 16px 36px; border-radius: 10px; font-size: 16px; font-weight: 800; text-decoration: none; }
        .dl-btn:hover { opacity: 0.9; }
        .bundle-link { display: block; background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 10px; padding: 14px 20px; margin-bottom: 8px; color: var(--gold); font-weight: 700; font-size: 15px; text-decoration: none; text-align: left; transition: border-color 0.2s; }
        .bundle-link:hover { border-color: var(--gold); }
        .checklist { text-align: left; background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 28px; margin-bottom: 32px; }
        .checklist h3 { font-size: 15px; font-weight: 700; color: var(--gray-400); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .checklist ul { list-style: none; }
        .checklist li { font-size: 15px; padding: 6px 0; color: #ccc; }
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
          <div style={{background:'rgba(245,200,66,0.06)',border:'1px solid rgba(245,200,66,0.2)',borderRadius:12,padding:'20px 24px',marginBottom:24,textAlign:'left'}}>
            <p style={{fontSize:14,fontWeight:700,color:'var(--gold)',marginBottom:6}}>Want all 5 kits? Save 50%</p>
            <p style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.5}}>Get the <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)',fontWeight:700}}>Complete Bundle for $97</a> — includes every kit plus all future releases free.</p>
          </div>
        )}

        <p className="ty-note">Questions? <a href="mailto:iam@armando.mx">iam@armando.mx</a> — we reply within 24h.</p>
      </div>
    </Layout>
  );
}
