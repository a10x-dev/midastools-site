import { useState } from 'react';
import { useRouter } from 'next/router';

const PAGE_CONTEXT = {
  '/action-figure-generator': { heading: 'Get 3 Bonus Action Figure Prompts', sub: 'Exclusive styles not available in the free generator. Instant delivery.', btn: 'Send My Bonus Prompts', source: 'action-figure-capture' },
  '/ghibli-prompt-generator': { heading: 'Get 3 Exclusive Ghibli Art Prompts', sub: 'Secret film styles + advanced techniques. Straight to your inbox.', btn: 'Send Ghibli Prompts', source: 'ghibli-capture' },
  '/pet-portrait-generator': { heading: 'Get 3 Bonus Pet Portrait Prompts', sub: 'Exclusive art styles for your pet. Works with ChatGPT, Midjourney, DALL-E.', btn: 'Send Pet Prompts', source: 'pet-portrait-capture' },
  '/caricature-generator': { heading: 'Get 3 Bonus Caricature Prompts', sub: 'Pro-level styles that crashed ChatGPT. Yours free.', btn: 'Send Caricature Prompts', source: 'caricature-capture' },
  '/lego-prompt-generator': { heading: 'Get 3 Bonus LEGO Prompts', sub: 'Exclusive minifigure + diorama styles. Instant delivery.', btn: 'Send LEGO Prompts', source: 'lego-capture' },
  '/fantasy-map-generator': { heading: 'Get 3 Bonus Fantasy Map Prompts', sub: 'Pro cartography styles for D&D, worldbuilding, and RPGs.', btn: 'Send Map Prompts', source: 'fantasy-map-capture' },
  '/hug-younger-self-generator': { heading: 'Get 3 More Emotional AI Art Prompts', sub: 'Powerful self-portrait concepts that go viral. Free.', btn: 'Send My Prompts', source: 'hug-capture' },
  '/childhood-reimagine-generator': { heading: 'Get 3 Bonus Childhood Reimagine Prompts', sub: 'Exclusive era + style combos for unforgettable portraits.', btn: 'Send My Prompts', source: 'childhood-capture' },
  '/miniature-diorama-generator': { heading: 'Get 3 Bonus Diorama Prompts', sub: 'Pro-level miniature scenes that look impossibly real.', btn: 'Send Diorama Prompts', source: 'diorama-capture' },
  '/image-prompt-builder': { heading: 'Get 5 Pro Image Prompts Free', sub: 'Advanced techniques for photorealistic AI art. Copy-paste ready.', btn: 'Send Image Prompts', source: 'image-builder-capture' },
  '/prompt-generator': { heading: 'Get 5 Expert-Level Prompts Free', sub: 'Battle-tested prompts that produce 10x better AI output.', btn: 'Send My Prompts', source: 'prompt-gen-capture' },
  '/prompt-roaster': { heading: 'Want Prompts That Never Get Roasted?', sub: '5 bulletproof prompts scored 9+/10 by our own roaster. Free.', btn: 'Send Bulletproof Prompts', source: 'roaster-capture' },
};

const CATEGORY_CONTEXT = {
  kit: { heading: 'Get 5 Free AI Prompts — See the Quality First', sub: 'Try before you buy. Same quality as our kits, zero risk.', btn: 'Send Free Samples', source: 'kit-page-capture' },
  blog: { heading: 'Get 5 Free AI Prompts', sub: 'The best prompts from this article + 4 more. Instant delivery.', btn: 'Send My Prompts', source: 'blog-capture' },
  tool: { heading: 'Get 5 Free AI Prompts', sub: 'Pro-level prompts that produce dramatically better results.', btn: 'Send My Prompts', source: 'tool-capture' },
};

function getContext(pathname) {
  if (PAGE_CONTEXT[pathname]) return PAGE_CONTEXT[pathname];
  if (pathname.includes('kit') || pathname === '/bundle' || pathname === '/kits') return CATEGORY_CONTEXT.kit;
  if (pathname.startsWith('/blog')) return CATEGORY_CONTEXT.blog;
  return CATEGORY_CONTEXT.tool;
}

export default function EmailCapture() {
  const router = useRouter();
  const ctx = getContext(router.pathname);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: ctx.source,
          website,
          referrer: document.referrer || '',
          utm_source: params?.get('utm_source') || '',
          utm_medium: params?.get('utm_medium') || '',
          utm_campaign: params?.get('utm_campaign') || '',
        }),
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
          <p className="email-capture-success">Check your inbox — your free prompts are on the way.</p>
        </div>
        <style jsx>{styles}</style>
      </section>
    );
  }

  return (
    <section className="email-capture">
      <div className="email-capture-inner">
        <div className="email-capture-text">
          <h3 className="email-capture-heading">{ctx.heading}</h3>
          <p className="email-capture-sub">{ctx.sub}</p>
        </div>
        <form className="email-capture-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@email.com"
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
            {status === 'loading' ? 'Sending...' : ctx.btn}
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
