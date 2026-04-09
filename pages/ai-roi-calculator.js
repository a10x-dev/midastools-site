import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const ROLES = [
  { id: 'freelancer', label: 'Freelancer / Consultant', hourlyRate: 75, kitUrl: '/freelancer-kit', kitName: 'Freelancer Automation Kit', kitPrice: 39 },
  { id: 'realEstate', label: 'Real Estate Agent', hourlyRate: 50, kitUrl: '/real-estate-kit', kitName: 'Real Estate AI Kit', kitPrice: 49 },
  { id: 'ecommerce', label: 'E-commerce Seller', hourlyRate: 40, kitUrl: '/ecommerce-kit', kitName: 'E-commerce AI Kit', kitPrice: 39 },
  { id: 'creator', label: 'Content Creator', hourlyRate: 45, kitUrl: '/content-creator-kit', kitName: 'Content Creator Kit', kitPrice: 39 },
  { id: 'saas', label: 'SaaS Founder', hourlyRate: 100, kitUrl: '/saas-founder-kit', kitName: 'SaaS Founder AI Kit', kitPrice: 39 },
  { id: 'smallBiz', label: 'Small Business Owner', hourlyRate: 55, kitUrl: '/small-business-kit', kitName: 'Small Business AI Kit', kitPrice: 39 },
  { id: 'teacher', label: 'Teacher / Educator', hourlyRate: 35, kitUrl: '/ai-prompt-mega-pack', kitName: 'AI Prompt Mega Pack', kitPrice: 29 },
  { id: 'other', label: 'Other Professional', hourlyRate: 50, kitUrl: '/ai-prompt-mega-pack', kitName: 'AI Prompt Mega Pack', kitPrice: 29 },
];

const TASKS = [
  { id: 'emails', label: 'Writing emails & follow-ups', hoursPerWeek: 5, automationRate: 0.7 },
  { id: 'content', label: 'Creating content (social, blog, copy)', hoursPerWeek: 8, automationRate: 0.6 },
  { id: 'proposals', label: 'Writing proposals & pitches', hoursPerWeek: 4, automationRate: 0.65 },
  { id: 'research', label: 'Research & market analysis', hoursPerWeek: 6, automationRate: 0.5 },
  { id: 'admin', label: 'Admin & data entry', hoursPerWeek: 4, automationRate: 0.8 },
  { id: 'customer', label: 'Customer support responses', hoursPerWeek: 6, automationRate: 0.6 },
  { id: 'reports', label: 'Reports & documentation', hoursPerWeek: 3, automationRate: 0.65 },
  { id: 'scheduling', label: 'Scheduling & planning', hoursPerWeek: 3, automationRate: 0.5 },
];

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

export default function AIROICalculator() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [customRate, setCustomRate] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [customHours, setCustomHours] = useState({});
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const hourlyRate = customRate ? parseFloat(customRate) : (role ? role.hourlyRate : 50);

  const toggleTask = (taskId) => {
    setSelectedTasks(prev =>
      prev.includes(taskId) ? prev.filter(t => t !== taskId) : [...prev, taskId]
    );
  };

  const getHoursForTask = (task) => {
    return customHours[task.id] !== undefined ? customHours[task.id] : task.hoursPerWeek;
  };

  const totalWeeklyHours = selectedTasks.reduce((sum, id) => {
    const task = TASKS.find(t => t.id === id);
    return sum + getHoursForTask(task);
  }, 0);

  const totalSavedHours = selectedTasks.reduce((sum, id) => {
    const task = TASKS.find(t => t.id === id);
    return sum + (getHoursForTask(task) * task.automationRate);
  }, 0);

  const weeklySavings = totalSavedHours * hourlyRate;
  const monthlySavings = weeklySavings * 4.33;
  const yearlySavings = weeklySavings * 52;
  const kitPrice = role ? role.kitPrice : 29;
  const roiMultiple = kitPrice > 0 ? Math.round(yearlySavings / kitPrice) : 0;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'roi-calculator',
          role: role?.label || 'Unknown',
          weeklySavings: weeklySavings.toFixed(0),
          yearlySavings: yearlySavings.toFixed(0),
        }),
      });
      setEmailSent(true);
    } catch {}
  };

  const title = 'Free AI ROI Calculator — See How Much AI Saves You';
  const description = 'Calculate your potential ROI from AI automation. Enter your role, tasks, and hourly rate to see exactly how much time and money AI tools can save you per week, month, and year.';
  const url = 'https://midastools.co/ai-roi-calculator';

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <link rel="canonical" href="https://midastools.co/ai-roi-calculator" />
        <meta name="description" content={description} />
        <meta name="keywords" content="AI ROI calculator, AI automation savings, AI tools ROI, how much does AI save, AI productivity calculator 2026" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'AI ROI Calculator',
          description: description,
          url: url,
          applicationCategory: 'BusinessApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How accurate is this AI ROI calculator?', acceptedAnswer: { '@type': 'Answer', text: 'Our calculations are based on industry research showing 40-80% automation rates for common business tasks using AI tools like ChatGPT, Claude, and Gemini. Actual savings depend on your specific workflow and how consistently you use AI tools.' }},
            { '@type': 'Question', name: 'What tasks can AI actually automate?', acceptedAnswer: { '@type': 'Answer', text: 'AI can automate or significantly speed up email writing, content creation, research, data entry, customer support responses, report generation, proposal writing, and scheduling. The automation rate varies by task complexity — routine tasks see 70-80% time savings while creative tasks see 50-60%.' }},
            { '@type': 'Question', name: 'How quickly will I see ROI from AI tools?', acceptedAnswer: { '@type': 'Answer', text: 'Most professionals see measurable time savings within the first week of using AI prompts and templates. Our customers typically report the kit paying for itself within 1-2 days of use, with compounding returns as they integrate AI into more of their workflow.' }},
          ]
        })}} />
      </Head>

      <style jsx>{`
        .calc-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 80px 24px;
        }
        .calc-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .calc-header h1 {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 16px;
        }
        .calc-header h1 span { color: #3B5FFF; }
        .calc-header p {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: #6B7280;
          line-height: 1.6;
          max-width: 560px;
          margin: 0 auto;
        }
        .step-indicator {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
        }
        .step-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #E5E7EB;
          transition: background 0.2s;
        }
        .step-dot.active { background: #3B5FFF; }
        .step-dot.done { background: #059669; }

        .step-card {
          background: #fff;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 40px 32px;
          margin-bottom: 32px;
        }
        .step-card h2 {
          font-family: 'Inter', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 8px;
        }
        .step-card .step-sub {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #6B7280;
          margin-bottom: 24px;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .role-btn {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
          color: #374151;
          transition: all 0.15s;
          text-align: left;
        }
        .role-btn:hover { border-color: #3B5FFF; background: #F5F7FF; }
        .role-btn.selected { border-color: #3B5FFF; background: #EEF2FF; color: #3B5FFF; }

        .rate-input {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #F3F4F6;
        }
        .rate-input label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #6B7280;
          font-weight: 500;
        }
        .rate-input input {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          width: 80px;
          padding: 8px 12px;
          border: 2px solid #E5E7EB;
          border-radius: 8px;
          outline: none;
          color: #111827;
        }
        .rate-input input:focus { border-color: #3B5FFF; }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .task-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .task-item:hover { border-color: #3B5FFF; background: #F5F7FF; }
        .task-item.selected { border-color: #3B5FFF; background: #EEF2FF; }
        .task-label {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .task-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 2px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: #fff;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .task-item.selected .task-check {
          background: #3B5FFF;
          border-color: #3B5FFF;
        }
        .hours-input {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          width: 52px;
          padding: 6px 8px;
          border: 2px solid #E5E7EB;
          border-radius: 6px;
          text-align: center;
          outline: none;
          color: #111827;
        }
        .hours-input:focus { border-color: #3B5FFF; }
        .hours-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin-left: 4px;
        }

        .nav-btns {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
        }
        .btn-next {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 32px;
          background: #3B5FFF;
          color: #fff;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .btn-next:hover { opacity: 0.9; }
        .btn-next:disabled { opacity: 0.4; cursor: not-allowed; }
        .btn-back {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 24px;
          background: none;
          color: #6B7280;
          border: 2px solid #E5E7EB;
          border-radius: 100px;
          cursor: pointer;
        }
        .btn-back:hover { border-color: #D1D5DB; }

        /* Results */
        .results-hero {
          text-align: center;
          margin-bottom: 40px;
        }
        .results-hero h2 {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 8px;
        }
        .big-number {
          font-family: 'Inter', sans-serif;
          font-size: clamp(3rem, 8vw, 4.5rem);
          font-weight: 900;
          color: #059669;
          letter-spacing: -2px;
          line-height: 1;
          margin: 16px 0;
        }
        .big-label {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #6B7280;
        }

        .savings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin: 32px 0;
        }
        .savings-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .savings-card .num {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #111827;
          letter-spacing: -0.5px;
        }
        .savings-card .label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #6B7280;
          margin-top: 4px;
          font-weight: 500;
        }

        .breakdown {
          margin: 32px 0;
        }
        .breakdown h3 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .breakdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #F3F4F6;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
        }
        .breakdown-item .task-name { color: #374151; }
        .breakdown-item .task-saved { color: #059669; font-weight: 700; }

        .roi-banner {
          background: #111827;
          border-radius: 16px;
          padding: 40px 32px;
          text-align: center;
          margin: 40px 0;
        }
        .roi-banner h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 8px;
        }
        .roi-banner p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #9CA3AF;
          margin-bottom: 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .roi-banner .roi-stat {
          font-family: 'Inter', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          color: #3B5FFF;
          letter-spacing: -1px;
        }
        .roi-banner .roi-label {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 24px;
        }
        .cta-btn {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 40px;
          background: #3B5FFF;
          color: #fff;
          border-radius: 100px;
          text-decoration: none;
          transition: opacity 0.15s;
          margin: 8px;
        }
        .cta-btn:hover { opacity: 0.9; }
        .cta-btn.secondary {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.3);
        }
        .cta-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #6B7280;
          margin-top: 16px;
        }

        .email-capture {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          margin: 32px 0;
        }
        .email-capture h4 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        .email-capture p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 16px;
        }
        .email-row {
          display: flex;
          gap: 8px;
          max-width: 400px;
          margin: 0 auto;
        }
        .email-row input {
          flex: 1;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          padding: 12px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 100px;
          outline: none;
          color: #111827;
        }
        .email-row input:focus { border-color: #3B5FFF; }
        .email-row button {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 20px;
          background: #3B5FFF;
          color: #fff;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          white-space: nowrap;
        }

        .faq-section {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid #E5E7EB;
        }
        .faq-section h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 24px;
          text-align: center;
        }
        .faq-item {
          margin-bottom: 20px;
        }
        .faq-item h4 {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }
        .faq-item p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
        }

        .related {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid #E5E7EB;
        }
        .related h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .related a {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #3B5FFF;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .related a:hover { text-decoration: underline; }

        @media (max-width: 640px) {
          .calc-container { padding: 48px 16px; }
          .step-card { padding: 24px 20px; }
          .role-grid { grid-template-columns: 1fr; }
          .savings-grid { grid-template-columns: 1fr; }
          .nav-btns { flex-direction: column; }
          .btn-next, .btn-back { width: 100%; text-align: center; }
          .roi-banner { padding: 32px 20px; }
          .email-row { flex-direction: column; }
        }
      `}</style>

      <div className="calc-container">
        <div className="calc-header">
          <h1>How Much Could <span>AI Save You</span>?</h1>
          <p>Answer 2 quick questions and see your personalized savings estimate in under 60 seconds.</p>
        </div>

        {/* Step Indicator */}
        <div className="step-indicator">
          {[1, 2, 3].map(s => (
            <div key={s} className={`step-dot${s === step ? ' active' : ''}${s < step ? ' done' : ''}`} />
          ))}
        </div>

        {/* Step 1: Role */}
        {step === 1 && (
          <div className="step-card">
            <h2>What best describes you?</h2>
            <p className="step-sub">We'll tailor the estimate to your industry and typical hourly value.</p>
            <div className="role-grid">
              {ROLES.map(r => (
                <button
                  key={r.id}
                  className={`role-btn${role?.id === r.id ? ' selected' : ''}`}
                  onClick={() => setRole(r)}
                >
                  {r.label}
                </button>
              ))}
            </div>
            {role && (
              <div className="rate-input">
                <label>Your hourly rate (or value of your time):</label>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>$</span>
                <input
                  type="number"
                  value={customRate || role.hourlyRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  min="10"
                  max="500"
                />
                <span style={{ fontSize: 13, color: '#9CA3AF' }}>/hr</span>
              </div>
            )}
            <div className="nav-btns">
              <button className="btn-next" disabled={!role} onClick={() => setStep(2)}>
                Next: Select Your Tasks &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Tasks */}
        {step === 2 && (
          <div className="step-card">
            <h2>What tasks eat up your time?</h2>
            <p className="step-sub">Select all that apply. Adjust hours per week for each task.</p>
            <div className="task-list">
              {TASKS.map(task => (
                <div
                  key={task.id}
                  className={`task-item${selectedTasks.includes(task.id) ? ' selected' : ''}`}
                  onClick={() => toggleTask(task.id)}
                >
                  <div className="task-label">
                    <div className="task-check">
                      {selectedTasks.includes(task.id) ? '✓' : ''}
                    </div>
                    {task.label}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      className="hours-input"
                      type="number"
                      min="1"
                      max="40"
                      value={getHoursForTask(task)}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        e.stopPropagation();
                        setCustomHours(prev => ({ ...prev, [task.id]: parseInt(e.target.value) || 0 }));
                        if (!selectedTasks.includes(task.id)) toggleTask(task.id);
                      }}
                    />
                    <span className="hours-label">hrs/wk</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="nav-btns">
              <button className="btn-back" onClick={() => setStep(1)}>&larr; Back</button>
              <button className="btn-next" disabled={selectedTasks.length === 0} onClick={() => setStep(3)}>
                See My Results &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && (
          <>
            <div className="step-card">
              <div className="results-hero">
                <h2>Your AI Savings Estimate</h2>
                <div className="big-number">{formatCurrency(yearlySavings)}</div>
                <div className="big-label">estimated savings per year</div>
              </div>

              <div className="savings-grid">
                <div className="savings-card">
                  <div className="num">{totalSavedHours.toFixed(1)} hrs</div>
                  <div className="label">Saved per week</div>
                </div>
                <div className="savings-card">
                  <div className="num">{formatCurrency(monthlySavings)}</div>
                  <div className="label">Saved per month</div>
                </div>
                <div className="savings-card">
                  <div className="num">{(totalSavedHours * 52).toFixed(0)} hrs</div>
                  <div className="label">Saved per year</div>
                </div>
              </div>

              <div className="breakdown">
                <h3>Task-by-task breakdown</h3>
                {selectedTasks.map(id => {
                  const task = TASKS.find(t => t.id === id);
                  const hours = getHoursForTask(task);
                  const saved = hours * task.automationRate;
                  return (
                    <div key={id} className="breakdown-item">
                      <span className="task-name">{task.label}</span>
                      <span className="task-saved">
                        {saved.toFixed(1)} hrs/wk saved ({Math.round(task.automationRate * 100)}% automated)
                      </span>
                    </div>
                  );
                })}
                <div className="breakdown-item" style={{ borderBottom: 'none', fontWeight: 700 }}>
                  <span style={{ color: '#111827' }}>Total</span>
                  <span style={{ color: '#059669' }}>
                    {totalSavedHours.toFixed(1)} hrs/wk = {formatCurrency(weeklySavings)}/wk
                  </span>
                </div>
              </div>
            </div>

            {/* ROI Banner */}
            <div className="roi-banner">
              <h3>Your recommended kit</h3>
              <p>Based on your role as a {role?.label.toLowerCase()}, we recommend:</p>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8, fontFamily: "'Inter', sans-serif" }}>
                {role?.kitName} — ${role?.kitPrice}
              </div>
              <div className="roi-stat">{roiMultiple}x</div>
              <div className="roi-label">return on investment in year 1</div>
              <div>
                <a href={STRIPE_BUNDLE} className="cta-btn">
                  Get the Full Bundle — $97
                </a>
                <Link href={role?.kitUrl || '/ai-prompt-mega-pack'} className="cta-btn secondary">
                  Get {role?.kitName} — ${role?.kitPrice}
                </Link>
              </div>
              <p className="cta-note">One-time purchase. Instant download. 30-day guarantee.</p>
            </div>

            {/* Email capture */}
            {!emailSent ? (
              <div className="email-capture">
                <h4>Get your full report + 5 free AI prompts</h4>
                <p>We'll email your personalized savings breakdown plus 5 free prompts to get started.</p>
                <form className="email-row" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Send My Report</button>
                </form>
              </div>
            ) : (
              <div className="email-capture" style={{ background: '#ECFDF5', borderColor: '#A7F3D0' }}>
                <h4 style={{ color: '#059669' }}>Check your inbox!</h4>
                <p>Your personalized report and free prompts are on the way.</p>
              </div>
            )}

            {/* Recalculate */}
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <button className="btn-back" onClick={() => { setStep(1); setSelectedTasks([]); setCustomHours({}); }}>
                &larr; Start Over
              </button>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>How accurate is this AI ROI calculator?</h4>
                <p>Our calculations are based on industry research showing 40-80% automation rates for common business tasks using AI tools like ChatGPT, Claude, and Gemini. Actual savings depend on your specific workflow and how consistently you use AI tools.</p>
              </div>
              <div className="faq-item">
                <h4>What tasks can AI actually automate?</h4>
                <p>AI can automate or significantly speed up email writing, content creation, research, data entry, customer support responses, report generation, proposal writing, and scheduling. The automation rate varies by task complexity — routine tasks see 70-80% time savings while creative tasks see 50-60%.</p>
              </div>
              <div className="faq-item">
                <h4>How quickly will I see ROI from AI tools?</h4>
                <p>Most professionals see measurable time savings within the first week of using AI prompts and templates. Our customers typically report the kit paying for itself within 1-2 days of use, with compounding returns as they integrate AI into more of their workflow.</p>
              </div>
            </div>

            {/* Related links */}
            <div className="related">
              <h3>Related resources</h3>
              <Link href="/blog/ai-tools-vs-hiring-2026">AI Tools vs. Hiring: What to Automate and What Not To</Link>
              <Link href="/blog/ai-second-income-2026">How to Build a Second Income with AI in 2026</Link>
              <Link href="/blog/best-free-ai-tools-2026">15 Best Free AI Tools in 2026</Link>
              <Link href="/free-prompts">Get 5 Free AI Prompts</Link>
              <Link href="/bundle">View All 8 AI Kits — $97 Bundle</Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
