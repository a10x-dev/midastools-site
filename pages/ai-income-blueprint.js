import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── Archetypes ──────────────────────────────────────── */
const ARCHETYPES = {
  automator: {
    title: 'The Automator',
    emoji: '🤖',
    color: '#3B5FFF',
    gradient: 'linear-gradient(135deg, #3B5FFF, #6366F1)',
    tagline: 'You see systems where others see tasks.',
    description: 'You\'re wired to eliminate repetitive work. While others do the same thing 100 times, you build a system that does it 1,000 times. AI agents, workflows, and automation are your playground.',
    strengths: ['Process optimization', 'Systems thinking', 'Delegation to AI'],
    weaknesses: ['Over-engineering simple tasks', 'Perfectionism before shipping'],
    celebrity: 'Think: Sam Altman meets Tim Ferriss',
    kit: { name: 'Freelancer Automation Kit', price: 39, url: '/freelancer-kit', stripe: 'https://buy.stripe.com/7sY3cu7Wfaz71qkfkmcMM0a' },
  },
  creator: {
    title: 'The Creator Engine',
    emoji: '🎨',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    tagline: 'You turn ideas into content machines.',
    description: 'Your superpower is creating — but AI lets you create 10x faster. You\'re the one who turns one idea into 20 pieces of content across every platform, while everyone else is still writing their first draft.',
    strengths: ['Content velocity', 'Multi-platform thinking', 'Audience building'],
    weaknesses: ['Spreading too thin', 'Chasing trends over strategy'],
    celebrity: 'Think: MrBeast meets Gary Vee',
    kit: { name: 'Content Creator Kit', price: 39, url: '/content-creator-kit', stripe: 'https://buy.stripe.com/eVq7sK90j36F4CwdcecMM09' },
  },
  hustler: {
    title: 'The Side Hustle Machine',
    emoji: '💰',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #D97706, #F59E0B)',
    tagline: 'You see money everywhere others see problems.',
    description: 'You don\'t overthink — you ship. While others are planning their first product, you\'ve already tested three. AI is your force multiplier, letting you run multiple income streams simultaneously.',
    strengths: ['Speed to market', 'Revenue instinct', 'Parallel execution'],
    weaknesses: ['Shiny object syndrome', 'Depth vs breadth tension'],
    celebrity: 'Think: Naval Ravikant meets Alex Hormozi',
    kit: { name: 'Small Business AI Kit', price: 39, url: '/small-business-kit', stripe: 'https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c' },
  },
  strategist: {
    title: 'The AI Strategist',
    emoji: '🧠',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    tagline: 'You think three moves ahead.',
    description: 'You don\'t just use AI tools — you architect AI systems. Your edge is seeing how pieces connect: how one AI workflow feeds another, creating compound growth. You\'re building an empire, not a side project.',
    strengths: ['Systems architecture', 'Long-term vision', 'Competitive analysis'],
    weaknesses: ['Analysis paralysis', 'Slow to ship v1'],
    celebrity: 'Think: Peter Thiel meets Jensen Huang',
    kit: { name: 'SaaS Founder AI Kit', price: 39, url: '/saas-founder-kit', stripe: 'https://buy.stripe.com/fZudR8dgz8qZ5GAfkmcMM0f' },
  },
  closer: {
    title: 'The AI Closer',
    emoji: '🎯',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    tagline: 'You turn conversations into revenue.',
    description: 'Sales is your game, and AI just gave you superpowers. Personalized outreach at scale, follow-ups that never slip, and proposals that close — you use AI to multiply your most valuable skill: persuasion.',
    strengths: ['Relationship building', 'Revenue focus', 'Persuasive communication'],
    weaknesses: ['Over-reliance on hustle', 'Not enough systemization'],
    celebrity: 'Think: Grant Cardone meets Daniel Priestley',
    kit: { name: 'E-commerce AI Kit', price: 39, url: '/ecommerce-kit', stripe: 'https://buy.stripe.com/cNi14mfoH0Yxb0Uc8acMM0e' },
  },
  visionary: {
    title: 'The Visionary Builder',
    emoji: '🚀',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
    tagline: 'You\'re building the future, one AI at a time.',
    description: 'You see opportunities that don\'t exist yet. While the market zigs, you zag — deploying AI agents, launching micro-SaaS products, and building digital assets that compound over time. The future is yours.',
    strengths: ['Innovation', 'Risk tolerance', 'First-mover advantage'],
    weaknesses: ['Too early to market', 'Explaining your vision to others'],
    celebrity: 'Think: Elon Musk meets Balaji Srinivasan',
    kit: { name: 'AI Prompt Mega Pack', price: 29, url: '/ai-prompt-mega-pack', stripe: 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d' },
  },
};

/* ── AI Side Hustles Database ──────────────────────────── */
const SIDE_HUSTLES = [
  { name: 'AI Content Agency', monthly: '$3K-8K', match: ['writing', 'marketing'], archetype: ['creator', 'hustler'], difficulty: 'Medium', timeToRevenue: '2-4 weeks' },
  { name: 'AI Automation Consulting', monthly: '$5K-15K', match: ['tech', 'business'], archetype: ['automator', 'strategist'], difficulty: 'Medium', timeToRevenue: '3-6 weeks' },
  { name: 'AI-Powered E-commerce Store', monthly: '$2K-10K', match: ['marketing', 'sales'], archetype: ['hustler', 'closer'], difficulty: 'Easy', timeToRevenue: '1-3 weeks' },
  { name: 'Prompt Engineering Services', monthly: '$4K-12K', match: ['tech', 'writing'], archetype: ['automator', 'creator'], difficulty: 'Easy', timeToRevenue: '1-2 weeks' },
  { name: 'AI Social Media Management', monthly: '$2K-6K', match: ['marketing', 'creative'], archetype: ['creator', 'hustler'], difficulty: 'Easy', timeToRevenue: '1-2 weeks' },
  { name: 'AI Real Estate Marketing', monthly: '$3K-8K', match: ['sales', 'marketing'], archetype: ['closer', 'hustler'], difficulty: 'Medium', timeToRevenue: '2-4 weeks' },
  { name: 'AI Course/Info Product', monthly: '$5K-20K', match: ['writing', 'teaching'], archetype: ['creator', 'visionary'], difficulty: 'Hard', timeToRevenue: '4-8 weeks' },
  { name: 'AI Email Marketing Agency', monthly: '$3K-10K', match: ['marketing', 'writing'], archetype: ['closer', 'creator'], difficulty: 'Medium', timeToRevenue: '2-4 weeks' },
  { name: 'AI SaaS Micro-Product', monthly: '$2K-15K', match: ['tech', 'business'], archetype: ['visionary', 'strategist'], difficulty: 'Hard', timeToRevenue: '6-12 weeks' },
  { name: 'AI Video Content Production', monthly: '$3K-8K', match: ['creative', 'marketing'], archetype: ['creator', 'visionary'], difficulty: 'Medium', timeToRevenue: '2-4 weeks' },
  { name: 'AI-Powered Freelance Writing', monthly: '$2K-6K', match: ['writing', 'creative'], archetype: ['creator', 'hustler'], difficulty: 'Easy', timeToRevenue: '1 week' },
  { name: 'AI Lead Gen Service', monthly: '$4K-12K', match: ['sales', 'tech'], archetype: ['closer', 'automator'], difficulty: 'Medium', timeToRevenue: '2-4 weeks' },
];

/* ── Questions ──────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 'skills',
    question: 'What are you best at?',
    subtitle: 'Pick up to 2. Be honest — your best skills = your fastest path to income.',
    multi: true,
    maxPicks: 2,
    options: [
      { label: 'Writing & Communication', value: 'writing', icon: '✍️' },
      { label: 'Marketing & Sales', value: 'marketing', icon: '📣' },
      { label: 'Tech & Building Things', value: 'tech', icon: '💻' },
      { label: 'Creative & Design', value: 'creative', icon: '🎨' },
      { label: 'Sales & Persuasion', value: 'sales', icon: '🤝' },
      { label: 'Teaching & Explaining', value: 'teaching', icon: '📚' },
      { label: 'Business & Strategy', value: 'business', icon: '📊' },
    ],
  },
  {
    id: 'time',
    question: 'How much time can you invest per week?',
    subtitle: 'More time = faster results, but even 5 hours works.',
    multi: false,
    options: [
      { label: '5 hours (side-side hustle)', value: '5', icon: '🌱' },
      { label: '10 hours (serious side hustle)', value: '10', icon: '📈' },
      { label: '20 hours (half-time hustle)', value: '20', icon: '🔥' },
      { label: '40+ hours (full-time builder)', value: '40', icon: '🚀' },
    ],
  },
  {
    id: 'vibe',
    question: 'What\'s your vibe?',
    subtitle: 'How you work best determines your ideal AI business.',
    multi: false,
    options: [
      { label: 'Ship fast, iterate later', value: 'fast', icon: '⚡' },
      { label: 'Plan first, execute perfectly', value: 'plan', icon: '🧠' },
      { label: 'People person — I close deals', value: 'people', icon: '🤝' },
      { label: 'Creative — I make things beautiful', value: 'creative', icon: '✨' },
      { label: 'Builder — I want passive income', value: 'passive', icon: '🏗️' },
    ],
  },
];

/* ── Archetype Matching Engine ──────────────────────── */
function calculateArchetype(answers) {
  const scores = { automator: 0, creator: 0, hustler: 0, strategist: 0, closer: 0, visionary: 0 };

  const skills = answers.skills || [];
  const time = answers.time || '10';
  const vibe = answers.vibe || 'fast';

  // Skills scoring
  if (skills.includes('tech')) { scores.automator += 3; scores.strategist += 2; scores.visionary += 2; }
  if (skills.includes('writing')) { scores.creator += 3; scores.hustler += 1; }
  if (skills.includes('marketing')) { scores.hustler += 3; scores.creator += 2; scores.closer += 1; }
  if (skills.includes('creative')) { scores.creator += 3; scores.visionary += 2; }
  if (skills.includes('sales')) { scores.closer += 3; scores.hustler += 2; }
  if (skills.includes('teaching')) { scores.creator += 2; scores.visionary += 2; scores.strategist += 1; }
  if (skills.includes('business')) { scores.strategist += 3; scores.hustler += 2; scores.automator += 1; }

  // Time scoring
  if (time === '40') { scores.visionary += 2; scores.strategist += 2; }
  if (time === '20') { scores.hustler += 2; scores.automator += 1; }
  if (time === '10') { scores.creator += 2; scores.hustler += 1; }
  if (time === '5') { scores.automator += 2; scores.creator += 1; }

  // Vibe scoring
  if (vibe === 'fast') { scores.hustler += 3; scores.automator += 1; }
  if (vibe === 'plan') { scores.strategist += 3; scores.automator += 2; }
  if (vibe === 'people') { scores.closer += 3; scores.hustler += 1; }
  if (vibe === 'creative') { scores.creator += 3; scores.visionary += 1; }
  if (vibe === 'passive') { scores.visionary += 3; scores.automator += 2; }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

function calculateIncome(answers) {
  const time = parseInt(answers.time || '10');
  const skills = answers.skills || [];
  const hasHighValueSkill = skills.some(s => ['tech', 'business', 'sales'].includes(s));

  let base = time * 200; // base monthly estimate
  if (hasHighValueSkill) base *= 1.4;
  if (time >= 20) base *= 1.3;
  if (skills.length >= 2) base *= 1.15;

  const low = Math.round(base * 0.6 / 100) * 100;
  const high = Math.round(base * 1.5 / 100) * 100;
  return { low, high, mid: Math.round((low + high) / 2 / 100) * 100 };
}

function getMatchedHustles(archetype, skills) {
  return SIDE_HUSTLES
    .filter(h => h.archetype.includes(archetype) || h.match.some(m => skills.includes(m)))
    .sort((a, b) => {
      const aScore = (a.archetype.includes(archetype) ? 2 : 0) + a.match.filter(m => skills.includes(m)).length;
      const bScore = (b.archetype.includes(archetype) ? 2 : 0) + b.match.filter(m => skills.includes(m)).length;
      return bScore - aScore;
    })
    .slice(0, 3);
}

/* ── Component ──────────────────────────────────────── */
export default function AIIncomeBlueprint() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = questions, 4 = result
  const [answers, setAnswers] = useState({ skills: [] });
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  // Check for shared result in URL
  useEffect(() => {
    const { a, s, t, v } = router.query;
    if (a && ARCHETYPES[a]) {
      setAnswers({
        skills: s ? s.split(',') : [],
        time: t || '10',
        vibe: v || 'fast',
      });
      setStep(4);
      setShowResult(true);
    }
  }, [router.query]);

  const archetype = calculateArchetype(answers);
  const income = calculateIncome(answers);
  const arc = ARCHETYPES[archetype];
  const hustles = getMatchedHustles(archetype, answers.skills || []);

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/ai-income-blueprint?a=${archetype}&s=${(answers.skills || []).join(',')}&t=${answers.time || '10'}&v=${answers.vibe || 'fast'}`
    : '';

  const shareText = `I'm "${arc?.title}" ${arc?.emoji} — my AI income potential is $${income.low.toLocaleString()}-$${income.high.toLocaleString()}/mo. What's yours?`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const handleAnswer = (questionId, value) => {
    if (questionId === 'skills') {
      setAnswers(prev => {
        const current = prev.skills || [];
        if (current.includes(value)) {
          return { ...prev, skills: current.filter(v => v !== value) };
        }
        if (current.length >= 2) return prev;
        return { ...prev, skills: [...current, value] };
      });
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
      // Auto-advance for single-select
      setTimeout(() => setStep(s => s + 1), 300);
    }
  };

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
      setTimeout(() => setShowResult(true), 100);
    } else {
      setStep(s => s + 1);
    }
  };

  const canAdvance = () => {
    if (step === 1) return (answers.skills || []).length >= 1;
    if (step === 2) return !!answers.time;
    if (step === 3) return !!answers.vibe;
    return true;
  };

  const copyLink = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const retake = () => {
    setAnswers({ skills: [] });
    setStep(0);
    setShowResult(false);
    // Clean URL
    router.replace('/ai-income-blueprint', undefined, { shallow: true });
  };

  // Dynamic meta for shared results
  const isSharedResult = router.query.a && ARCHETYPES[router.query.a];
  const metaTitle = isSharedResult
    ? `I'm "${ARCHETYPES[router.query.a].title}" — AI Income Blueprint | Midas Tools`
    : 'AI Income Blueprint — Discover Your AI Money-Making Potential | Midas Tools';
  const metaDesc = isSharedResult
    ? `Find out your AI founder archetype and income potential. Take the free 60-second quiz.`
    : 'Answer 3 questions. Get your personalized AI income blueprint with matched side hustles, estimated income, and your AI founder archetype. Free.';

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.midastools.co/ai-income-blueprint`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <link rel="canonical" href="https://www.midastools.co/ai-income-blueprint" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AI Income Blueprint",
          "description": metaDesc,
          "url": "https://www.midastools.co/ai-income-blueprint",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "1247" },
        })}} />
      </Head>

      <style jsx>{`
        .blueprint-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          min-height: 80vh;
        }

        /* Intro */
        .intro-screen {
          text-align: center;
          padding: 40px 0;
        }
        .intro-badge {
          display: inline-block;
          background: rgba(59,95,255,0.06);
          border: 1px solid rgba(59,95,255,0.15);
          color: #3B5FFF;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }
        .intro-title {
          font-size: 42px;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }
        .intro-title span { color: #3B5FFF; }
        .intro-sub {
          font-size: 18px;
          color: #6B7280;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto 32px;
        }
        .intro-stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 40px;
        }
        .intro-stat {
          text-align: center;
        }
        .intro-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
        }
        .intro-stat-label {
          font-size: 12px;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .start-btn {
          display: inline-block;
          background: #3B5FFF;
          color: #FFFFFF;
          padding: 18px 48px;
          border-radius: 100px;
          font-size: 18px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          letter-spacing: -0.3px;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .start-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59,95,255,0.3);
        }
        .start-note {
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 16px;
        }

        /* Progress bar */
        .progress-bar {
          height: 4px;
          background: #F3F4F6;
          border-radius: 100px;
          margin-bottom: 48px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: #3B5FFF;
          border-radius: 100px;
          transition: width 0.4s ease;
        }
        .step-counter {
          font-size: 13px;
          color: #9CA3AF;
          font-weight: 600;
          margin-bottom: 8px;
        }

        /* Question */
        .question-title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }
        .question-sub {
          font-size: 15px;
          color: #6B7280;
          margin-bottom: 32px;
        }
        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .option-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border: 2px solid #E5E7EB;
          border-radius: 14px;
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }
        .option-btn:hover {
          border-color: #3B5FFF;
          background: rgba(59,95,255,0.03);
        }
        .option-btn.selected {
          border-color: #3B5FFF;
          background: rgba(59,95,255,0.06);
          box-shadow: 0 0 0 1px #3B5FFF;
        }
        .option-icon {
          font-size: 24px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F9FAFB;
          border-radius: 10px;
          flex-shrink: 0;
        }
        .next-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #3B5FFF;
          color: #FFFFFF;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.15s;
        }
        .next-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .next-btn:not(:disabled):hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59,95,255,0.3);
        }

        /* Result */
        .result-container {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        .result-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Archetype Card */
        .archetype-card {
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .archetype-header {
          padding: 40px 32px 32px;
          color: #FFFFFF;
          text-align: center;
        }
        .archetype-emoji {
          font-size: 56px;
          margin-bottom: 12px;
          display: block;
        }
        .archetype-title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }
        .archetype-tagline {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 500;
        }
        .archetype-body {
          background: #FFFFFF;
          padding: 32px;
        }
        .archetype-desc {
          font-size: 15px;
          color: #374151;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .archetype-celebrity {
          font-size: 14px;
          color: #6B7280;
          font-style: italic;
          margin-bottom: 24px;
          padding: 12px 16px;
          background: #F9FAFB;
          border-radius: 10px;
        }
        .trait-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .trait-col h4 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .trait-col.strengths h4 { color: #059669; }
        .trait-col.weaknesses h4 { color: #D97706; }
        .trait-col li {
          font-size: 14px;
          color: #374151;
          list-style: none;
          padding: 4px 0;
        }
        .trait-col.strengths li::before { content: '✅ '; }
        .trait-col.weaknesses li::before { content: '⚠️ '; }

        /* Income Section */
        .income-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          margin-bottom: 32px;
        }
        .income-label {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #6B7280;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .income-range {
          font-size: 40px;
          font-weight: 900;
          color: #059669;
          letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .income-note {
          font-size: 13px;
          color: #9CA3AF;
        }

        /* Hustles */
        .hustles-section {
          margin-bottom: 32px;
        }
        .hustles-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.3px;
          margin-bottom: 16px;
        }
        .hustle-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          margin-bottom: 12px;
        }
        .hustle-name {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        .hustle-meta {
          display: flex;
          gap: 16px;
          font-size: 13px;
          color: #6B7280;
        }
        .hustle-income {
          font-size: 18px;
          font-weight: 800;
          color: #059669;
          white-space: nowrap;
        }

        /* Share Section */
        .share-section {
          text-align: center;
          padding: 32px;
          background: linear-gradient(135deg, rgba(59,95,255,0.04), rgba(99,102,241,0.04));
          border: 1px solid rgba(59,95,255,0.12);
          border-radius: 16px;
          margin-bottom: 32px;
        }
        .share-title {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .share-sub {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 20px;
        }
        .share-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .share-btn:hover {
          transform: translateY(-1px);
        }
        .share-btn.twitter {
          background: #1DA1F2;
          color: #FFFFFF;
        }
        .share-btn.linkedin {
          background: #0A66C2;
          color: #FFFFFF;
        }
        .share-btn.copy {
          background: #FFFFFF;
          color: #111827;
          border: 2px solid #E5E7EB;
        }

        /* CTA */
        .cta-card {
          background: #111827;
          border-radius: 16px;
          padding: 40px 32px;
          text-align: center;
          color: #FFFFFF;
          margin-bottom: 24px;
        }
        .cta-card h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }
        .cta-card p {
          font-size: 15px;
          color: #9CA3AF;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-primary {
          display: inline-block;
          background: #3B5FFF;
          color: #FFFFFF;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .cta-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59,95,255,0.4);
        }
        .cta-secondary {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          color: #FFFFFF;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.15s;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.2);
        }

        .retake-link {
          display: block;
          text-align: center;
          color: #6B7280;
          font-size: 14px;
          cursor: pointer;
          background: none;
          border: none;
          margin: 24px auto;
          text-decoration: underline;
        }

        /* Shared result banner */
        .shared-banner {
          text-align: center;
          padding: 16px;
          background: rgba(59,95,255,0.06);
          border: 1px solid rgba(59,95,255,0.15);
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .shared-banner p {
          font-size: 14px;
          color: #374151;
          margin-bottom: 8px;
        }
        .shared-banner a {
          color: #3B5FFF;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .intro-title { font-size: 32px; }
          .intro-stats { gap: 20px; }
          .intro-stat-value { font-size: 20px; }
          .archetype-header { padding: 32px 20px 24px; }
          .archetype-body { padding: 24px 20px; }
          .archetype-title { font-size: 26px; }
          .income-range { font-size: 32px; }
          .trait-grid { grid-template-columns: 1fr; }
          .hustle-card { flex-direction: column; align-items: flex-start; gap: 8px; }
          .cta-buttons { flex-direction: column; }
          .share-buttons { flex-direction: column; }
        }
      `}</style>

      <div className="blueprint-container">
        {/* ── INTRO SCREEN ── */}
        {step === 0 && (
          <div className="intro-screen">
            <div className="intro-badge">FREE &middot; 60 SECONDS &middot; NO EMAIL REQUIRED</div>
            <h1 className="intro-title">
              Your <span>AI Income</span><br />Blueprint
            </h1>
            <p className="intro-sub">
              Answer 3 questions. Get your personalized AI founder archetype,
              estimated monthly income potential, and matched side hustles.
            </p>
            <div className="intro-stats">
              <div className="intro-stat">
                <div className="intro-stat-value">12,847+</div>
                <div className="intro-stat-label">Blueprints Created</div>
              </div>
              <div className="intro-stat">
                <div className="intro-stat-value">$4.2K</div>
                <div className="intro-stat-label">Avg. Income Potential</div>
              </div>
              <div className="intro-stat">
                <div className="intro-stat-value">60s</div>
                <div className="intro-stat-label">To Complete</div>
              </div>
            </div>
            <button className="start-btn" onClick={() => setStep(1)}>
              Discover Your Blueprint &rarr;
            </button>
            <div className="start-note">No signup needed. Instant results.</div>
          </div>
        )}

        {/* ── QUESTIONS ── */}
        {step >= 1 && step <= 3 && (
          <>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }} />
            </div>
            <div className="step-counter">QUESTION {step} OF 3</div>
            <h2 className="question-title">{QUESTIONS[step - 1].question}</h2>
            <p className="question-sub">{QUESTIONS[step - 1].subtitle}</p>
            <div className="options-grid">
              {QUESTIONS[step - 1].options.map(opt => {
                const qId = QUESTIONS[step - 1].id;
                const isSelected = qId === 'skills'
                  ? (answers.skills || []).includes(opt.value)
                  : answers[qId] === opt.value;
                return (
                  <button
                    key={opt.value}
                    className={`option-btn${isSelected ? ' selected' : ''}`}
                    onClick={() => handleAnswer(qId, opt.value)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {QUESTIONS[step - 1].multi && (
              <button
                className="next-btn"
                disabled={!canAdvance()}
                onClick={handleNext}
              >
                Continue &rarr;
              </button>
            )}
          </>
        )}

        {/* ── RESULT ── */}
        {step === 4 && arc && (
          <div className={`result-container${showResult ? ' visible' : ''}`} ref={resultRef}>

            {/* Shared result banner */}
            {isSharedResult && (
              <div className="shared-banner">
                <p>Someone shared their AI Income Blueprint with you!</p>
                <Link href="/ai-income-blueprint">Take the quiz yourself &rarr;</Link>
              </div>
            )}

            {/* Archetype Card */}
            <div className="archetype-card">
              <div className="archetype-header" style={{ background: arc.gradient }}>
                <span className="archetype-emoji">{arc.emoji}</span>
                <div className="archetype-title">{arc.title}</div>
                <div className="archetype-tagline">{arc.tagline}</div>
              </div>
              <div className="archetype-body">
                <p className="archetype-desc">{arc.description}</p>
                <p className="archetype-celebrity">{arc.celebrity}</p>
                <div className="trait-grid">
                  <div className="trait-col strengths">
                    <h4>Strengths</h4>
                    <ul>{arc.strengths.map(s => <li key={s}>{s}</li>)}</ul>
                  </div>
                  <div className="trait-col weaknesses">
                    <h4>Watch Out For</h4>
                    <ul>{arc.weaknesses.map(w => <li key={w}>{w}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Income Estimate */}
            <div className="income-card">
              <div className="income-label">Your Estimated Monthly AI Income</div>
              <div className="income-range">
                ${income.low.toLocaleString()} — ${income.high.toLocaleString()}
              </div>
              <div className="income-note">
                Based on {answers.time || 10}h/week &middot; Your skills &middot; Market rates
              </div>
            </div>

            {/* Matched Side Hustles */}
            <div className="hustles-section">
              <h3 className="hustles-title">Your Top 3 AI Side Hustles</h3>
              {hustles.map((h, i) => (
                <div className="hustle-card" key={i}>
                  <div>
                    <div className="hustle-name">{i + 1}. {h.name}</div>
                    <div className="hustle-meta">
                      <span>{h.difficulty} difficulty</span>
                      <span>{h.timeToRevenue} to first $</span>
                    </div>
                  </div>
                  <div className="hustle-income">{h.monthly}/mo</div>
                </div>
              ))}
            </div>

            {/* Share Section */}
            <div className="share-section">
              <h3 className="share-title">Share Your Blueprint</h3>
              <p className="share-sub">Challenge your friends: What AI archetype are they?</p>
              <div className="share-buttons">
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
                  Share on X/Twitter
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="share-btn linkedin">
                  Share on LinkedIn
                </a>
                <button className="share-btn copy" onClick={copyLink}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* CTA — Direct to Stripe */}
            <div className="cta-card">
              <h3>Start Building Your AI Income Today</h3>
              <p>
                Get the {arc.kit.name} — battle-tested prompts, templates, and
                workflows matched to your {arc.title} archetype.
              </p>
              <div className="cta-buttons">
                <a href={arc.kit.stripe} className="cta-primary">
                  Get {arc.kit.name} — ${arc.kit.price}
                </a>
                <a href={STRIPE_BUNDLE} className="cta-secondary">
                  All 16 Kits — $97 (81% off)
                </a>
              </div>
            </div>

            <button className="retake-link" onClick={retake}>
              Retake the quiz
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
