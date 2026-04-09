import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const PRODUCTS = {
  freelancer: { name: 'Freelancer Automation Kit', price: 39, url: '/freelancer-kit', stripe: 'https://buy.stripe.com/7sY3cu7Wfaz71qkfkmcMM0a', color: '#8B5CF6', emoji: '💼', tagline: 'Win more clients. Deliver faster. Get paid on time.' },
  realEstate: { name: 'Real Estate AI Kit', price: 49, url: '/real-estate-kit', stripe: 'https://buy.stripe.com/fZueVcb8r6iR5GAfkmcMM08', color: '#059669', emoji: '🏠', tagline: 'Close more deals with AI-powered listings, follow-ups, and market analysis.' },
  ecommerce: { name: 'E-commerce AI Kit', price: 39, url: '/ecommerce-kit', stripe: 'https://buy.stripe.com/cNi14mfoH0Yxb0Uc8acMM0e', color: '#D97706', emoji: '🛒', tagline: 'Write descriptions that sell. Automate your store operations.' },
  creator: { name: 'Content Creator Kit', price: 39, url: '/content-creator-kit', stripe: 'https://buy.stripe.com/eVq7sK90j36F4CwdcecMM09', color: '#EC4899', emoji: '🎬', tagline: 'Create more content in less time. Repurpose everything.' },
  saas: { name: 'SaaS Founder AI Kit', price: 39, url: '/saas-founder-kit', stripe: 'https://buy.stripe.com/fZudR8dgz8qZ5GAfkmcMM0f', color: '#3B82F6', emoji: '🚀', tagline: 'Launch faster. Onboard better. Reduce churn.' },
  smallBiz: { name: 'Small Business AI Kit', price: 39, url: '/small-business-kit', stripe: 'https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c', color: '#10B981', emoji: '🏪', tagline: 'Run your business smarter with AI-powered operations.' },
  megaPack: { name: 'AI Prompt Mega Pack', price: 29, url: '/ai-prompt-mega-pack', stripe: 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d', color: '#3B5FFF', emoji: '⚡', tagline: '200+ prompts for every business task. The Swiss Army knife of AI.' },
};

const BUNDLE = { name: 'All 8 Kits Bundle', price: 97, value: 302, stripe: 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b', url: '/bundle' };

const QUESTIONS = [
  {
    id: 'role',
    question: 'What best describes you?',
    subtitle: 'Pick the closest match — we\'ll fine-tune from here.',
    options: [
      { label: 'Freelancer or Consultant', value: 'freelancer', icon: '💼' },
      { label: 'Small Business Owner', value: 'smallBiz', icon: '🏪' },
      { label: 'Content Creator', value: 'creator', icon: '🎬' },
      { label: 'E-commerce Seller', value: 'ecommerce', icon: '🛒' },
      { label: 'Real Estate Agent', value: 'realEstate', icon: '🏠' },
      { label: 'SaaS Founder / Tech', value: 'saas', icon: '🚀' },
      { label: 'Something else', value: 'other', icon: '✨' },
    ],
  },
  {
    id: 'pain',
    question: 'What\'s eating most of your time?',
    subtitle: 'Pick the one that makes you groan the most.',
    options: [
      { label: 'Writing emails, proposals & follow-ups', value: 'writing', icon: '✍️' },
      { label: 'Creating content (social, blog, video scripts)', value: 'content', icon: '📝' },
      { label: 'Admin, invoicing & repetitive tasks', value: 'admin', icon: '📋' },
      { label: 'Finding and closing clients/customers', value: 'sales', icon: '🎯' },
      { label: 'Running operations & managing people', value: 'operations', icon: '⚙️' },
      { label: 'All of the above (seriously)', value: 'everything', icon: '🔥' },
    ],
  },
  {
    id: 'experience',
    question: 'How much have you used AI tools?',
    subtitle: 'No wrong answer — this helps us calibrate.',
    options: [
      { label: 'Never really tried them', value: 'none', icon: '🌱' },
      { label: 'Played around a bit (ChatGPT, etc.)', value: 'beginner', icon: '🔰' },
      { label: 'Use them regularly but want better results', value: 'intermediate', icon: '📈' },
      { label: 'Power user — I want advanced prompts', value: 'advanced', icon: '⚡' },
    ],
  },
  {
    id: 'goal',
    question: 'What would make the biggest difference right now?',
    subtitle: 'If you could only fix one thing this month.',
    options: [
      { label: 'Save 10+ hours per week', value: 'time', icon: '⏰' },
      { label: 'Make more money from what I already do', value: 'revenue', icon: '💰' },
      { label: 'Look more professional to clients', value: 'professional', icon: '👔' },
      { label: 'Stop doing tasks I hate', value: 'automate', icon: '🤖' },
      { label: 'All of the above', value: 'all', icon: '🎯' },
    ],
  },
  {
    id: 'budget',
    question: 'What\'s your investment comfort zone?',
    subtitle: 'One-time purchase. No subscriptions. Yours forever.',
    options: [
      { label: 'Under $30 — just get me started', value: 'low', icon: '🟢' },
      { label: '$30–50 — worth it if it saves real time', value: 'mid', icon: '🔵' },
      { label: '$50–100 — I want the full arsenal', value: 'high', icon: '🟣' },
    ],
  },
];

function getRecommendation(answers) {
  const { role, pain, experience, goal, budget } = answers;

  // Bundle recommendation for "everything" pain or "all" goal with high budget
  if (budget === 'high' || (pain === 'everything' && budget !== 'low')) {
    return { primary: 'bundle', secondary: roleToKit(role) };
  }

  // Role-specific recommendations
  const kitId = roleToKit(role);

  // Pain-based overrides
  if (pain === 'content' && role !== 'creator') {
    return { primary: kitId, secondary: 'creator' };
  }
  if (pain === 'writing' && experience === 'none') {
    return { primary: 'megaPack', secondary: kitId };
  }
  if (pain === 'everything') {
    return { primary: kitId, secondary: 'megaPack' };
  }

  // Budget-based adjustments
  if (budget === 'low') {
    return { primary: 'megaPack', secondary: kitId };
  }

  return { primary: kitId, secondary: 'megaPack' };
}

function roleToKit(role) {
  const map = { freelancer: 'freelancer', smallBiz: 'smallBiz', creator: 'creator', ecommerce: 'ecommerce', realEstate: 'realEstate', saas: 'saas', other: 'megaPack' };
  return map[role] || 'megaPack';
}

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSelect = (questionId, value) => {
    setSelectedOption(value);
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      setSelectedOption(null);
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
    setSelectedOption(null);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'quiz', answers: JSON.stringify(answers) }),
      });
      setEmailSent(true);
    } catch (err) { setEmailSent(true); }
  };

  const recommendation = showResult ? getRecommendation(answers) : null;
  const primaryProduct = recommendation ? (recommendation.primary === 'bundle' ? null : PRODUCTS[recommendation.primary]) : null;
  const secondaryProduct = recommendation ? PRODUCTS[recommendation.secondary] : null;
  const isBundle = recommendation?.primary === 'bundle';

  const progress = ((currentQ + (showResult ? 1 : 0)) / QUESTIONS.length) * 100;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Tools Quiz — What AI Kit Do You Need?',
    description: 'Take this 60-second quiz to find the perfect AI prompt kit for your role, goals, and experience level.',
    url: 'https://midastools.co/quiz',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>What AI Kit Do You Need? Free Quiz — Midas Tools</title>
        <link rel="canonical" href="https://midastools.co/quiz" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Take this 60-second quiz to find the perfect AI prompt kit for your role. Personalized recommendations based on your goals, experience, and budget." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="What AI Kit Do You Need? Free 60-Second Quiz" />
        <meta property="og:description" content="Answer 5 questions. Get a personalized AI toolkit recommendation. Free, no account required." />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:url" content="https://midastools.co/quiz" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <style>{`
        .quiz-container{max-width:680px;margin:0 auto;padding:80px 40px 120px}
        .quiz-hero{text-align:center;margin-bottom:48px}
        .quiz-hero h1{font-size:42px;font-weight:900;letter-spacing:-1.5px;line-height:1.1;margin-bottom:16px}
        .quiz-hero p{font-size:18px;color:var(--text-secondary);line-height:1.6}
        .progress-bar{width:100%;height:6px;background:var(--border);border-radius:100px;margin-bottom:40px;overflow:hidden}
        .progress-fill{height:100%;background:var(--accent);border-radius:100px;transition:width 0.4s ease}
        .question-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:40px;margin-bottom:24px}
        .question-number{font-size:13px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
        .question-text{font-size:24px;font-weight:800;letter-spacing:-0.5px;margin-bottom:8px}
        .question-subtitle{font-size:15px;color:var(--text-secondary);margin-bottom:28px}
        .options-grid{display:grid;gap:12px}
        .option-btn{display:flex;align-items:center;gap:14px;padding:16px 20px;border:2px solid var(--border);border-radius:12px;background:white;cursor:pointer;font-size:16px;font-weight:600;color:var(--text);transition:all 0.2s;text-align:left;width:100%}
        .option-btn:hover{border-color:var(--accent);background:#F0F4FF;transform:translateY(-1px)}
        .option-btn.selected{border-color:var(--accent);background:var(--accent);color:white;transform:scale(0.98)}
        .option-icon{font-size:24px;flex-shrink:0;width:36px;text-align:center}
        .back-btn{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--text-secondary);cursor:pointer;border:none;background:none;padding:8px 0;margin-top:16px;transition:color 0.15s}
        .back-btn:hover{color:var(--text)}
        .result-card{background:white;border:2px solid var(--accent);border-radius:20px;padding:48px 40px;text-align:center;margin-bottom:24px;position:relative;overflow:hidden}
        .result-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--accent)}
        .result-badge{display:inline-block;background:var(--accent);color:white;font-size:13px;font-weight:700;padding:6px 16px;border-radius:100px;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px}
        .result-title{font-size:28px;font-weight:900;letter-spacing:-0.5px;margin-bottom:8px}
        .result-tagline{font-size:16px;color:var(--text-secondary);margin-bottom:28px;line-height:1.6}
        .result-price{font-size:48px;font-weight:900;color:var(--accent);margin-bottom:4px}
        .result-price-note{font-size:14px;color:var(--text-tertiary);margin-bottom:28px}
        .cta-btn{display:inline-block;background:var(--accent);color:white;font-size:17px;font-weight:700;padding:16px 40px;border-radius:100px;text-decoration:none;transition:all 0.2s;border:none;cursor:pointer}
        .cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(59,95,255,0.3)}
        .alt-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:32px;text-align:center;margin-bottom:24px}
        .alt-card h3{font-size:18px;font-weight:800;margin-bottom:6px}
        .alt-card p{font-size:14px;color:var(--text-secondary);margin-bottom:16px}
        .alt-btn{display:inline-block;background:white;color:var(--accent);font-size:14px;font-weight:700;padding:10px 24px;border-radius:100px;text-decoration:none;border:2px solid var(--accent);transition:all 0.2s}
        .alt-btn:hover{background:var(--accent);color:white}
        .bundle-card{background:linear-gradient(135deg,#1E1B4B,#312E81);border-radius:20px;padding:48px 40px;text-align:center;color:white;margin-bottom:24px}
        .bundle-card h2{font-size:32px;font-weight:900;margin-bottom:8px}
        .bundle-card .savings{font-size:18px;color:#A5B4FC;margin-bottom:24px}
        .bundle-card .price{font-size:56px;font-weight:900;margin-bottom:4px}
        .bundle-card .price-note{font-size:14px;color:#A5B4FC;margin-bottom:28px}
        .bundle-cta{display:inline-block;background:white;color:#312E81;font-size:17px;font-weight:700;padding:16px 40px;border-radius:100px;text-decoration:none;transition:all 0.2s}
        .bundle-cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.3)}
        .email-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:32px;text-align:center;margin-bottom:24px}
        .email-card h3{font-size:18px;font-weight:800;margin-bottom:6px}
        .email-card p{font-size:14px;color:var(--text-secondary);margin-bottom:16px}
        .email-form{display:flex;gap:8px;max-width:400px;margin:0 auto}
        .email-input{flex:1;padding:12px 16px;border:2px solid var(--border);border-radius:100px;font-size:15px;outline:none;font-family:Inter,sans-serif}
        .email-input:focus{border-color:var(--accent)}
        .email-submit{background:var(--accent);color:white;border:none;padding:12px 24px;border-radius:100px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap}
        .restart-link{display:inline-block;margin-top:32px;font-size:14px;color:var(--text-secondary);cursor:pointer;text-decoration:underline}
        .restart-link:hover{color:var(--text)}
        .share-row{display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap}
        .share-btn{font-size:13px;font-weight:600;padding:8px 16px;border-radius:100px;border:1px solid var(--border);background:white;color:var(--text);cursor:pointer;text-decoration:none;transition:all 0.15s}
        .share-btn:hover{border-color:var(--accent);color:var(--accent)}
        @media(max-width:600px){
          .quiz-container{padding:48px 20px 80px}
          .quiz-hero h1{font-size:32px}
          .question-card{padding:28px 20px}
          .result-card{padding:32px 20px}
          .bundle-card{padding:32px 20px}
          .email-form{flex-direction:column}
          .result-price{font-size:40px}
          .bundle-card .price{font-size:44px}
        }
      `}</style>
      <div className="quiz-container">
        {!showResult ? (
          <>
            <div className="quiz-hero">
              <h1>What AI Kit Do You Need?</h1>
              <p>5 questions. 60 seconds. Get a personalized recommendation.</p>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="question-card">
              <div className="question-number">Question {currentQ + 1} of {QUESTIONS.length}</div>
              <div className="question-text">{QUESTIONS[currentQ].question}</div>
              <div className="question-subtitle">{QUESTIONS[currentQ].subtitle}</div>
              <div className="options-grid">
                {QUESTIONS[currentQ].options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`option-btn${selectedOption === opt.value ? ' selected' : ''}`}
                    onClick={() => handleSelect(QUESTIONS[currentQ].id, opt.value)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
              {currentQ > 0 && (
                <button className="back-btn" onClick={handleBack}>
                  ← Back
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="quiz-hero">
              <h1>Your Perfect AI Kit</h1>
              <p>Based on your answers, here's what we recommend:</p>
            </div>

            {isBundle ? (
              <div className="bundle-card">
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#A5B4FC', marginBottom: 16 }}>Best Value — Recommended for You</div>
                <h2>All 13 AI Kits Bundle</h2>
                <div className="savings">$467 value — save 79%</div>
                <div className="price">${BUNDLE.price}</div>
                <div className="price-note">One-time payment. Yours forever.</div>
                <a href={BUNDLE.stripe} className="bundle-cta">Get the Bundle →</a>
              </div>
            ) : primaryProduct ? (
              <div className="result-card">
                <div className="result-badge">Your Match</div>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{primaryProduct.emoji}</div>
                <div className="result-title">{primaryProduct.name}</div>
                <div className="result-tagline">{primaryProduct.tagline}</div>
                <div className="result-price">${primaryProduct.price}</div>
                <div className="result-price-note">One-time payment. No subscription.</div>
                <a href={primaryProduct.stripe} className="cta-btn">Get {primaryProduct.name} →</a>
              </div>
            ) : null}

            {/* Secondary recommendation */}
            {secondaryProduct && !isBundle && (
              <div className="alt-card">
                <h3>Also great for you: {secondaryProduct.name}</h3>
                <p>{secondaryProduct.tagline}</p>
                <a href={secondaryProduct.stripe} className="alt-btn">${secondaryProduct.price} — View Kit →</a>
              </div>
            )}

            {/* Bundle upsell if not already bundle */}
            {!isBundle && (
              <div className="bundle-card">
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#A5B4FC', marginBottom: 12 }}>Want it all?</div>
                <h2>Get All 13 Kits for ${BUNDLE.price}</h2>
                <div className="savings">$467 value — save 79%</div>
                <a href={BUNDLE.stripe} className="bundle-cta">Get the Bundle →</a>
              </div>
            )}

            {/* Email capture */}
            <div className="email-card">
              {!emailSent ? (
                <>
                  <h3>Get 5 Free AI Prompts</h3>
                  <p>Not ready to buy? Try 5 of our best prompts free — no credit card needed.</p>
                  <form className="email-form" onSubmit={handleEmailSubmit}>
                    <input
                      type="email"
                      className="email-input"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="email-submit">Send Prompts</button>
                  </form>
                </>
              ) : (
                <>
                  <h3>Check your inbox!</h3>
                  <p>5 free prompts are on their way. Meanwhile, check out our <Link href="/free-prompts" style={{ color: 'var(--accent)', fontWeight: 700 }}>free prompts page</Link>.</p>
                </>
              )}
            </div>

            {/* Share results */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8 }}>Share your result</div>
              <div className="share-row">
                <a
                  className="share-btn"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just took the AI Kit Quiz and got recommended the ${isBundle ? 'All 8 Kits Bundle' : primaryProduct?.name}! Find your perfect AI toolkit:`)}%0A%0Ahttps://midastools.co/quiz`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on X
                </a>
                <a
                  className="share-btn"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://midastools.co/quiz')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on LinkedIn
                </a>
                <button
                  className="share-btn"
                  onClick={() => { navigator.clipboard?.writeText('https://midastools.co/quiz'); }}
                >
                  Copy Link
                </button>
              </div>
              <div className="restart-link" onClick={handleRestart}>
                ↻ Retake quiz
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
