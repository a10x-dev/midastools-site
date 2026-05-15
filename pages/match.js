import Head from 'next/head';
import { useState } from 'react';
import Layout, { DESIGN } from '../components/Layout';
import { QUESTIONS, scorePersona, getResultsForPersona } from '../lib/quiz-engine';
import { DEFAULT_THEME } from '../lib/company-themes';

export default function PromptMatch({ prospect = null, theme = null }) {
  return <PromptMatchInner prospect={prospect} theme={theme} />;
}

export function PromptMatchInner({ prospect = null, theme = null }) {
  const T = theme || DEFAULT_THEME;
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const q = QUESTIONS[stage];
  const isLast = stage === QUESTIONS.length - 1;

  const handleAnswer = (value) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (q.id === 'email') {
      submit(next);
    } else {
      setStage(stage + 1);
    }
  };

  const submit = async (finalAnswers) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/quiz-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: finalAnswers,
          prospect_slug: prospect?.slug || null,
        }),
      });
      if (!res.ok) {
        const errBody = await res.text();
        throw new Error(`Server returned ${res.status}: ${errBody.slice(0, 200)}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const progressPct = Math.round((stage / QUESTIONS.length) * 100);

  return (
    <Layout>
      <Head>
        <title>
          {prospect
            ? `${prospect.firstName} — your custom AI prompt match`
            : 'AI Prompt Match — get 5 prompts tuned to your role | MidasTools'}
        </title>
        <meta
          name="description"
          content="5 questions, 5 custom AI prompts emailed to you. Free."
        />
        {prospect && <meta name="robots" content="noindex,nofollow" />}
      </Head>

      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '48px 24px 96px',
          color: DESIGN.black,
          minHeight: '70vh',
        }}
      >
        {prospect && (
          <div style={{ fontSize: 12, color: T.accent, marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            A match built for {prospect.firstName}
          </div>
        )}
        <h1 style={{ fontSize: prospect ? 36 : 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 12, letterSpacing: '-0.02em' }}>
          {prospect ? `Hi ${prospect.firstName} —` : 'Find your 5.'}
          {prospect && <br />}
          {prospect
            ? `5 questions, then 5 prompts I picked for ${prospect.company}.`
            : ' 5 questions. 5 prompts. Free.'}
        </h1>
        <p style={{ fontSize: 17, color: DESIGN.gray400, lineHeight: 1.6, marginBottom: 32 }}>
          {prospect
            ? `I've already hand-picked 5 prompts based on your role at ${prospect.company} (${prospect.role}). Take this 60-second match and I'll send them to your inbox + a 6th custom one based on your answer to question 4.`
            : `Pick the closest answers — we'll route you to a persona-matched 5-prompt set. Free, sent to your inbox, no drip.`}
        </p>

        {!result && stage < QUESTIONS.length && (
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 999, marginBottom: 32, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progressPct}%`, background: T.accent, transition: 'width 220ms ease' }} />
          </div>
        )}

        {!result && stage < QUESTIONS.length && (
          <div>
            <div style={{ fontSize: 13, color: DESIGN.gray400, marginBottom: 8, fontWeight: 600 }}>
              Question {stage + 1} of {QUESTIONS.length}
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
              {q.prompt}
            </h2>
            {q.helper && (
              <p style={{ fontSize: 14, color: DESIGN.gray400, marginBottom: 20 }}>{q.helper}</p>
            )}

            {q.type === 'choice' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    style={{
                      textAlign: 'left',
                      padding: '16px 20px',
                      borderRadius: 10,
                      border: '1px solid #E5E7EB',
                      background: '#FFFFFF',
                      fontSize: 16,
                      fontWeight: 500,
                      color: DESIGN.black,
                      cursor: 'pointer',
                      transition: 'all 120ms',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = T.accent;
                      e.currentTarget.style.background = T.surface;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {q.type === 'text' && (
              <FreeTextInput accent={T.accent} maxLength={q.maxLength} onSubmit={handleAnswer} disabled={submitting} />
            )}

            {q.type === 'email' && (
              <EmailInput accent={T.accent} onSubmit={handleAnswer} disabled={submitting} prospectName={prospect?.firstName} />
            )}
          </div>
        )}

        {submitting && (
          <div style={{ padding: 24, textAlign: 'center', fontSize: 16, color: DESIGN.gray400 }}>
            Building your custom report...
          </div>
        )}

        {error && (
          <div style={{ padding: 16, borderRadius: 8, background: '#FEE2E2', color: '#991B1B', marginTop: 16, fontSize: 14 }}>
            Something went wrong: {error}. Refresh and try again.
          </div>
        )}

        {result && <ResultBlock result={result} prospect={prospect} theme={T} />}
      </main>
    </Layout>
  );
}

function FreeTextInput({ accent, maxLength, onSubmit, disabled }) {
  const [val, setVal] = useState('');
  return (
    <div>
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value.slice(0, maxLength || 280))}
        placeholder="e.g., 'writing post-mortems takes me 2-3 hours every time'"
        rows={3}
        style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #E5E7EB', fontSize: 16, fontFamily: 'inherit', resize: 'vertical', marginBottom: 12, color: DESIGN.black }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: DESIGN.gray400 }}>{val.length}/{maxLength || 280}</span>
        <button
          onClick={() => val.trim() && onSubmit(val.trim())}
          disabled={disabled || !val.trim()}
          style={{ background: accent, color: '#FFFFFF', padding: '12px 24px', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 16, cursor: disabled || !val.trim() ? 'not-allowed' : 'pointer', opacity: disabled || !val.trim() ? 0.5 : 1 }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function EmailInput({ accent, onSubmit, disabled, prospectName }) {
  const [val, setVal] = useState('');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  return (
    <div>
      <input
        type="email"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={prospectName ? 'work email is fine' : 'you@example.com'}
        style={{ width: '100%', padding: '16px 18px', borderRadius: 10, border: '1px solid #E5E7EB', fontSize: 16, marginBottom: 12, color: DESIGN.black }}
      />
      <button
        onClick={() => isValid && onSubmit(val.trim())}
        disabled={disabled || !isValid}
        style={{ background: accent, color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 16, width: '100%', cursor: disabled || !isValid ? 'not-allowed' : 'pointer', opacity: disabled || !isValid ? 0.5 : 1 }}
      >
        Send my 5 prompts →
      </button>
      <p style={{ fontSize: 12, color: DESIGN.gray400, marginTop: 12, lineHeight: 1.5 }}>
        We send one report email + read every reply. No drip, no daily emails.
      </p>
    </div>
  );
}

function ResultBlock({ result, prospect, theme }) {
  const T = theme;
  return (
    <div>
      <div style={{ fontSize: 12, color: T.accent, marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
        Your match
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>{result.personaTitle}</h2>
      <p style={{ fontSize: 16, color: DESIGN.gray400, lineHeight: 1.6, marginBottom: 24 }}>{result.blurb}</p>
      <p style={{ fontSize: 15, color: DESIGN.black, marginBottom: 32, padding: '14px 16px', background: T.surface, borderLeft: `3px solid ${T.accent}`, borderRadius: 6 }}>
        ✓ Sent to <strong>{result.email}</strong>. Check your inbox in &lt;30 seconds. Reply and I'll send a 6th custom prompt based on your answer to question 4.
      </p>

      {(result.prompts || []).map((p, i) => (
        <div key={i} style={{ border: '1px solid #E5E7EB', borderRadius: 12, padding: '20px 24px', marginBottom: 16, background: '#FFFFFF' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{i + 1}. {p.title}</h3>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 13, lineHeight: 1.6, color: '#374151', background: '#F9FAFB', padding: '12px 14px', borderRadius: 8, margin: 0 }}>
            {p.body}
          </pre>
        </div>
      ))}

      <div style={{ marginTop: 40, padding: 28, background: DESIGN.black, color: DESIGN.white, borderRadius: 16 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: DESIGN.white }}>
          Want all 145+ prompts across 14 kits?
        </h3>
        <p style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 20, lineHeight: 1.5 }}>
          The All Kits Bundle is $97 — 14 niche kits covering cold outreach, ops, email, image gen, and more.
        </p>
        <a
          href="https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q?utm_source=match&utm_medium=result"
          style={{ display: 'inline-block', background: T.accent, color: '#FFFFFF', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
        >
          Get the Bundle — $97
        </a>
        {prospect && (
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 16, marginBottom: 0 }}>
            The hand-picked 5 for your {prospect.role} role:{' '}
            <a href={`/p/${prospect.slug}`} style={{ color: T.accent }}>midastools.co/p/{prospect.slug}</a>.
          </p>
        )}
      </div>
    </div>
  );
}
