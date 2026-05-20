import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getRecipient } from '../../lib/champion-recipients';
import { getPack } from '../../lib/champion-prompts';

const MONTHLY_SUB_URL = process.env.NEXT_PUBLIC_CHAMPION_MONTHLY_URL || 'https://buy.stripe.com/fZubJ01xR8qZed6goqcMM0z';
const MONTHLY_PRICE_LABEL = '$199/mo';

const SURVEY = [
  {
    id: 'blocker',
    label: 'What’s the #1 blocker to AI adoption at your company right now?',
    type: 'textarea',
    placeholder: 'Be specific. Vague answers produce vague drops.',
    required: true,
  },
  {
    id: 'weekly_users',
    label: 'How many of your employees use an AI tool at work in a typical week?',
    type: 'select',
    options: ['<10%', '10-25%', '25-50%', '50-75%', '>75%', 'I don’t know'],
    required: true,
  },
  {
    id: 'champion_team',
    label: 'Which team should be the first AI champion cohort?',
    type: 'select',
    options: ['Investor Services / IR', 'Fund Accounting', 'Sales / GTM', 'Engineering / Product', 'People / L&D', 'Marketing', 'Other'],
    required: true,
  },
  {
    id: 'timeline',
    label: 'What’s your timeline for company-wide AI literacy?',
    type: 'select',
    options: ['Next 90 days', '6 months', '12 months', '18+ months', 'No timeline yet'],
    required: true,
  },
  {
    id: 'policy_status',
    label: 'Have you launched an internal AI usage policy?',
    type: 'select',
    options: ['Yes — published + enforced', 'Yes — published, light enforcement', 'In progress', 'Not yet, on the roadmap', 'Not on the roadmap'],
    required: true,
  },
  {
    id: 'worries',
    label: 'Biggest worries about rolling AI internally? (pick up to 3)',
    type: 'multi',
    options: [
      'Hallucinations on customer-facing work',
      'Compliance / regulatory exposure',
      'Data security / leakage',
      'Productivity loss during rollout',
      'Employee resistance / fear',
      'Vendor lock-in',
      'Cost / ROI uncertainty',
      'Skill gap in middle management',
    ],
    required: false,
  },
  {
    id: 'wishlist',
    label: 'If we built ONE thing for you next month, what would have the biggest impact?',
    type: 'textarea',
    placeholder: 'A prompt pack? A weekly digest? A policy template? A workshop? Be specific — your answer shapes next month’s drop.',
    required: true,
  },
];

function CopyBlock({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="copy-block">
      <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
      <pre className="copy-body">{text}</pre>
    </div>
  );
}

export default function ChampionPage({ recipient, pack, token, monthlyUrl }) {
  const [answers, setAnswers] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const setAnswer = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));
  const toggleMulti = (id, value) => {
    setAnswers((prev) => {
      const curr = Array.isArray(prev[id]) ? prev[id] : [];
      const next = curr.includes(value) ? curr.filter((v) => v !== value) : [...curr, value].slice(0, 3);
      return { ...prev, [id]: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const q of SURVEY) {
      if (!q.required) continue;
      const v = answers[q.id];
      if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) {
        setSubmitError(`Missing: ${q.label}`);
        return;
      }
    }
    setSubmitStatus('loading');
    setSubmitError('');
    try {
      const res = await fetch('/api/champion-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, answers }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'submit failed');
      }
      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus('idle');
      setSubmitError(err.message || 'submit failed');
    }
  };

  // Group prompts by section
  const sections = {};
  pack.prompts.forEach((p) => {
    const s = p.section || 'PROMPTS';
    if (!sections[s]) sections[s] = [];
    sections[s].push(p);
  });

  const title = `${recipient.name}’s AI Champion Kit | MidasTools`;
  const description = `Hand-built personalized AI rollout playbook for ${recipient.name} at ${recipient.company}.`;
  const url = `https://www.midastools.co/champion/${token}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href={url} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .champ-hero{max-width:820px;margin:0 auto;padding:80px 40px 48px;text-align:center}
        .champ-pre{display:inline-block;padding:6px 14px;background:rgba(59,95,255,0.08);color:var(--accent);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:24px;letter-spacing:1.5px;border:1px solid rgba(59,95,255,0.18);text-transform:uppercase}
        .champ-hero h1{font-size:clamp(32px,5vw,52px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px;color:var(--text)}
        .champ-hero h1 .gold{color:var(--accent)}
        .champ-sub{font-size:18px;color:var(--text-secondary);max-width:640px;margin:0 auto 16px;line-height:1.65}
        .champ-signed{font-size:13px;color:var(--text-tertiary);letter-spacing:0.5px;margin-top:24px}
        section.champ{max-width:820px;margin:0 auto;padding:56px 40px}
        section.champ h2{font-size:clamp(24px,3.4vw,34px);font-weight:900;letter-spacing:-1px;margin-bottom:16px;line-height:1.15;color:var(--text)}
        .section-label{display:inline-block;font-size:11px;font-weight:800;color:var(--accent);letter-spacing:1.5px;margin-bottom:14px;text-transform:uppercase}
        .section-tag{display:inline-block;padding:5px 12px;background:rgba(59,95,255,0.10);color:var(--accent);font-size:11px;font-weight:800;border-radius:99px;letter-spacing:1px;margin-bottom:18px;text-transform:uppercase}
        .prompt-card{background:#FFFFFF;border:1px solid var(--border);border-radius:14px;padding:28px;margin-bottom:18px;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
        .prompt-tag{display:inline-block;padding:4px 10px;background:rgba(59,95,255,0.10);color:var(--accent);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:14px;letter-spacing:1px}
        .prompt-title{font-size:19px;font-weight:800;margin-bottom:8px;color:var(--text);line-height:1.35}
        .prompt-use{font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px;font-style:italic}
        /* Code/copy block stays dark — matches code-editor convention, easy paste-to-AI */
        .copy-block{position:relative;background:#0F172A;border:1px solid #1F2937;border-radius:10px;padding:20px;margin:0}
        .copy-body{font-family:'SF Mono',Menlo,monospace;font-size:13px;line-height:1.65;color:#E5E7EB;white-space:pre-wrap;overflow-x:auto;margin:0;padding-right:60px}
        .copy-btn{position:absolute;top:10px;right:10px;font-size:11px;font-weight:700;padding:6px 12px;background:var(--accent);color:#FFFFFF;border:none;border-radius:6px;cursor:pointer;font-family:inherit}
        .copy-btn:hover{opacity:0.92}
        .brief-card{background:#FFFFFF;border:1px solid var(--border);border-radius:14px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
        .brief-summary{font-size:15px;color:var(--text-secondary);line-height:1.7;margin-bottom:24px}
        .brief-move{padding:18px 0;border-top:1px solid var(--border)}
        .brief-move:first-of-type{border-top:none;padding-top:0}
        .brief-move .name{font-size:15px;font-weight:800;color:var(--accent);margin-bottom:8px;letter-spacing:0.3px}
        .brief-move .row{margin-bottom:10px;font-size:14px;line-height:1.65;color:var(--text-secondary)}
        .brief-move .row strong{color:var(--text);font-weight:700}
        .brief-implication{margin-top:22px;padding:18px;background:rgba(59,95,255,0.05);border:1px solid rgba(59,95,255,0.18);border-radius:10px;font-size:14px;color:var(--text);line-height:1.7}
        .brief-implication strong{color:var(--accent)}
        .brief-sources{margin-top:18px;font-size:11px;color:var(--text-tertiary);line-height:1.5}
        .survey-card{background:#FFFFFF;border:1px solid var(--border);border-radius:14px;padding:36px;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
        .survey-intro{font-size:15px;color:var(--text-secondary);line-height:1.65;margin-bottom:28px}
        .q-block{margin-bottom:24px}
        .q-label{display:block;font-size:14px;font-weight:700;color:var(--text);margin-bottom:10px;line-height:1.45}
        .q-input,.q-select,.q-text{width:100%;font-size:14px;padding:12px 14px;border:1.5px solid var(--border);background:#FFFFFF;border-radius:10px;outline:none;color:var(--text);font-family:inherit;line-height:1.5}
        .q-text{min-height:96px;resize:vertical}
        .q-input::placeholder,.q-text::placeholder{color:var(--text-tertiary)}
        .q-input:focus,.q-select:focus,.q-text:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(59,95,255,0.10)}
        .multi-row{display:flex;flex-wrap:wrap;gap:8px}
        .multi-pill{padding:8px 14px;background:#FFFFFF;border:1.5px solid var(--border);border-radius:99px;font-size:13px;color:var(--text-secondary);cursor:pointer;user-select:none;transition:all 0.12s}
        .multi-pill:hover{border-color:var(--accent);color:var(--text)}
        .multi-pill.active{background:var(--accent);border-color:var(--accent);color:#FFFFFF;font-weight:700}
        .submit-btn{display:inline-block;padding:14px 32px;background:var(--accent);color:#FFFFFF;font-size:15px;font-weight:800;border-radius:99px;border:none;cursor:pointer;font-family:inherit;margin-top:8px;transition:opacity 0.15s,transform 0.15s}
        .submit-btn:hover:not(:disabled){opacity:0.92;transform:translateY(-1px)}
        .submit-btn:disabled{opacity:0.6;cursor:not-allowed}
        .submit-err{margin-top:14px;font-size:13px;color:#DC2626}
        .submit-ok{margin-top:18px;padding:20px;background:rgba(59,95,255,0.05);border:1px solid rgba(59,95,255,0.18);border-radius:10px;font-size:15px;color:var(--text);line-height:1.65}
        .submit-ok strong{color:var(--accent)}
        .upsell-box{background:linear-gradient(135deg,rgba(59,95,255,0.06),rgba(59,95,255,0.03));border:1px solid rgba(59,95,255,0.18);border-radius:18px;padding:48px 36px;text-align:center}
        .upsell-box h2{margin:0 0 14px;color:var(--text)}
        .upsell-box p{font-size:16px;color:var(--text-secondary);margin:0 auto 24px;line-height:1.65;max-width:560px}
        .upsell-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:560px;margin:0 auto 28px;text-align:left}
        .upsell-li{font-size:13px;color:var(--text-secondary);line-height:1.5;padding:10px 14px;background:#FFFFFF;border:1px solid var(--border);border-radius:8px}
        .upsell-li strong{color:var(--text)}
        .upsell-btn{display:inline-block;padding:14px 32px;background:var(--accent);color:#FFFFFF;font-size:16px;font-weight:800;border-radius:99px;text-decoration:none;transition:opacity 0.15s,transform 0.15s}
        .upsell-btn:hover{opacity:0.92;transform:translateY(-1px)}
        .upsell-small{margin-top:18px;font-size:13px;color:var(--text-tertiary)}
        @media(max-width:640px){.champ-hero{padding:48px 20px}section.champ{padding:40px 20px}.upsell-list{grid-template-columns:1fr}}
      `}</style>

      {/* HERO */}
      <div className="champ-hero">
        <div className="champ-pre">{recipient.custom_intro_pretitle}</div>
        <h1>
          AI Team Adoption Kit — <span className="gold">{recipient.company} Edition</span>
        </h1>
        <p className="champ-sub">{recipient.custom_intro_subhead}</p>
        <p className="champ-signed">Built by Armando @ MidasTools · Last updated {new Date().toISOString().slice(0, 10)}</p>
      </div>

      {/* INSIDE THE KIT */}
      <section className="champ">
        <div className="section-label">Inside the kit — {pack.prompts.length} prompts</div>
        <h2>{pack.name}</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{pack.intro}</p>

        {Object.entries(sections).map(([section, prompts]) => (
          <div key={section} style={{ marginTop: 32 }}>
            <div className="section-tag">{section}</div>
            {prompts.map((p, idx) => (
              <div className="prompt-card" key={`${section}-${idx}`}>
                <div className="prompt-tag">PROMPT</div>
                <div className="prompt-title">{p.title}</div>
                <div className="prompt-use">{p.use}</div>
                <CopyBlock text={p.body} />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* COMPETITIVE 1-PAGER */}
      {recipient.competitive_brief && (
        <section className="champ">
          <div className="section-label">Competitive 1-Pager</div>
          <h2>{recipient.competitive_brief.title}</h2>
          <div className="brief-card">
            <div className="brief-summary">{recipient.competitive_brief.summary}</div>
            {recipient.competitive_brief.moves.map((m, i) => (
              <div className="brief-move" key={i}>
                <div className="name">{m.competitor}</div>
                <div className="row"><strong>What they’re shipping:</strong> {m.their_play}</div>
                <div className="row"><strong>Your counter:</strong> {m.your_counter}</div>
              </div>
            ))}
            <div className="brief-implication">
              <strong>Strategic implication → </strong>{recipient.competitive_brief.strategic_implication}
            </div>
            <div className="brief-sources">Sources: {recipient.competitive_brief.sources}</div>
          </div>
        </section>
      )}

      {/* SURVEY */}
      <section className="champ">
        <div className="section-label">Your turn — 7 questions</div>
        <h2>{recipient.survey_title}</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 28 }}>{recipient.survey_intro}</p>

        {submitStatus === 'success' ? (
          <div className="survey-card">
            <div className="submit-ok">
              <strong>Got it.</strong> Your answers landed on Armando’s desk. We’ll calibrate next month’s drop to your inputs and send it within 30 days. If anything in the answers needs a faster reply, expect an email from Armando inside 24h.
            </div>
          </div>
        ) : (
          <div className="survey-card">
            <p className="survey-intro">Takes 3-4 min. Saved to our system the moment you hit submit — we don’t track partial answers.</p>
            <form onSubmit={handleSubmit}>
              {SURVEY.map((q) => (
                <div className="q-block" key={q.id}>
                  <label className="q-label" htmlFor={`q-${q.id}`}>{q.label}{q.required && <span style={{ color: 'var(--gold)' }}> *</span>}</label>
                  {q.type === 'textarea' && (
                    <textarea
                      id={`q-${q.id}`}
                      className="q-text"
                      placeholder={q.placeholder || ''}
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                    />
                  )}
                  {q.type === 'select' && (
                    <select
                      id={`q-${q.id}`}
                      className="q-select"
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                    >
                      <option value="">Choose one…</option>
                      {q.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}
                  {q.type === 'multi' && (
                    <div className="multi-row">
                      {q.options.map((o) => {
                        const active = Array.isArray(answers[q.id]) && answers[q.id].includes(o);
                        return (
                          <span
                            key={o}
                            className={`multi-pill${active ? ' active' : ''}`}
                            onClick={() => toggleMulti(q.id, o)}
                          >{o}</span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <button type="submit" className="submit-btn" disabled={submitStatus === 'loading'}>
                {submitStatus === 'loading' ? 'Submitting…' : 'Submit →'}
              </button>
              {submitError && <div className="submit-err">{submitError}</div>}
            </form>
          </div>
        )}
      </section>

      {/* MONTHLY SUB UPSELL */}
      <section className="champ">
        <div className="upsell-box">
          <div className="section-label" style={{ marginBottom: 14 }}>Next month, and the month after</div>
          <h2 style={{ margin: '0 0 14px' }}>MidasTools Champion — {MONTHLY_PRICE_LABEL}</h2>
          <p>Personalized monthly drop calibrated to your survey above. Cancel anytime. Built for one human at one company, not a generic newsletter.</p>
          <div className="upsell-list">
            <div className="upsell-li"><strong>Weekly tip</strong> calibrated to your role + company context</div>
            <div className="upsell-li"><strong>Monthly prompt drop</strong> targeting your next team pain</div>
            <div className="upsell-li"><strong>Prompt validator</strong> — paste any prompt, get critique + rewrite</div>
            <div className="upsell-li"><strong>Personalized search</strong> tool seeded with your context</div>
            <div className="upsell-li"><strong>Idea validator</strong> — paste an idea, get pushback + alternatives</div>
            <div className="upsell-li"><strong>Monthly competitive brief</strong> for your industry, 1-page</div>
          </div>
          <a href={monthlyUrl} className="upsell-btn" target="_blank" rel="noopener noreferrer">Start MidasTools Champion →</a>
          <p className="upsell-small">Cancel anytime. First month full refund if it doesn’t earn its keep.</p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="champ" style={{ paddingTop: 0, paddingBottom: 80, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'var(--text-tertiary)', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
          Questions, or want a faster reply? Email <a href="mailto:iam@armando.mx" style={{ color: 'var(--accent)' }}>iam@armando.mx</a> — a real human reads every one. Usually back within 4 hours, weekdays.
        </p>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params, res }) {
  const token = (params.token || '').toLowerCase();
  const recipient = getRecipient(token);
  if (!recipient) {
    res.statusCode = 404;
    return { notFound: true };
  }
  const pack = getPack(recipient.pack_id);
  if (!pack) {
    res.statusCode = 500;
    return { notFound: true };
  }
  return {
    props: {
      token,
      recipient,
      pack,
      monthlyUrl: process.env.NEXT_PUBLIC_CHAMPION_MONTHLY_URL || 'https://buy.stripe.com/fZubJ01xR8qZed6goqcMM0z',
    },
  };
}
