import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'site-wide-capture', website }),
      });
      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="email-capture">
        <div className="email-capture-inner">
          <p className="email-capture-success">Check your inbox — your 5 free AI prompts are on the way.</p>
        </div>
        <style jsx>{styles}</style>
      </section>
    );
  }

  return (
    <section className="email-capture">
      <div className="email-capture-inner">
        <div className="email-capture-text">
          <h3 className="email-capture-heading">Get 5 Free AI Prompts That Make Money</h3>
          <p className="email-capture-sub">Join 1,000+ founders using AI to build faster. No spam, unsubscribe anytime.</p>
        </div>
        <form className="email-capture-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-capture-input"
            disabled={status === 'loading'}
          />
          {/* Honeypot field — hidden from humans, bots fill it */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
            tabIndex={-1}
            autoComplete="off"
          />
          <button type="submit" className="email-capture-btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send My Prompts'}
          </button>
          {status === 'error' && <p className="email-capture-error">{errorMsg}</p>}
        </form>
      </div>
      <style jsx>{styles}</style>
    </section>
  );
}

const styles = `
  .email-capture {
    background: var(--surface, #F9FAFB);
    border-top: 1px solid var(--border, #E5E7EB);
    border-bottom: 1px solid var(--border, #E5E7EB);
    padding: 32px 24px;
  }
  .email-capture-inner {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
  .email-capture-text {
    flex: 1 1 auto;
  }
  .email-capture-heading {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--text, #111827);
    margin: 0 0 4px;
  }
  .email-capture-sub {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--text-secondary, #6B7280);
    margin: 0;
  }
  .email-capture-form {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .email-capture-input {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    padding: 10px 16px;
    border: 1px solid var(--border, #E5E7EB);
    border-radius: 100px;
    outline: none;
    width: 240px;
    color: var(--text, #111827);
    background: var(--bg, #FFFFFF);
  }
  .email-capture-input:focus {
    border-color: var(--accent, #3B5FFF);
    box-shadow: 0 0 0 2px rgba(59, 95, 255, 0.15);
  }
  .email-capture-btn {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 24px;
    background: var(--accent, #3B5FFF);
    color: #FFFFFF;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.15s;
  }
  .email-capture-btn:hover {
    opacity: 0.9;
  }
  .email-capture-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .email-capture-success {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #059669;
    margin: 0;
    text-align: center;
  }
  .email-capture-error {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #DC2626;
    margin: 4px 0 0;
    width: 100%;
  }
  @media (max-width: 640px) {
    .email-capture-inner {
      flex-direction: column;
      text-align: center;
    }
    .email-capture-form {
      width: 100%;
      flex-direction: column;
    }
    .email-capture-input {
      width: 100%;
    }
    .email-capture-btn {
      width: 100%;
    }
  }
`;
