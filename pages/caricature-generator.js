import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* -- CARICATURE STYLES ---------------------------------- */
const STYLES = [
  { id: 'classic', label: 'Classic Exaggerated', icon: '\u270D\uFE0F', desc: 'Big head, tiny body, exaggerated features', color: '#f97316' },
  { id: 'pixar', label: 'Pixar / 3D', icon: '\u2728', desc: 'Smooth 3D render, Pixar-style character', color: '#8b5cf6' },
  { id: 'manga', label: 'Manga / Anime', icon: '\uD83C\uDF1F', desc: 'Japanese anime style with big expressive eyes', color: '#ef4444' },
  { id: 'bobblehead', label: 'Bobblehead', icon: '\uD83E\uDDD2', desc: 'Oversized wobbling head on a spring', color: '#22c55e' },
  { id: 'newspaper', label: 'Vintage Newspaper', icon: '\uD83D\uDCF0', desc: 'Classic editorial cartoon ink style', color: '#78716c' },
  { id: 'popart', label: 'Pop Art (Warhol)', icon: '\uD83C\uDFA8', desc: 'Bold colors, halftone dots, Warhol grid', color: '#ec4899' },
  { id: 'watercolor', label: 'Watercolor Sketch', icon: '\uD83D\uDDD2\uFE0F', desc: 'Loose watercolor with ink outlines', color: '#3b82f6' },
  { id: 'digital', label: 'Digital Cartoon', icon: '\uD83D\uDCBB', desc: 'Clean vector art, modern flat style', color: '#facc15' },
];

/* -- EXPRESSIONS ---------------------------------------- */
const EXPRESSIONS = [
  { id: 'confident', label: 'Confident Smile', desc: 'Warm, self-assured grin' },
  { id: 'laughing', label: 'Laughing', desc: 'Head back, mouth open, pure joy' },
  { id: 'serious', label: 'Serious Boss', desc: 'Stern, focused, in-charge look' },
  { id: 'thinking', label: 'Thinking', desc: 'Hand on chin, one eyebrow raised' },
  { id: 'surprised', label: 'Surprised', desc: 'Wide eyes, open mouth, shocked' },
  { id: 'winking', label: 'Winking', desc: 'Playful wink with a half-smile' },
  { id: 'determined', label: 'Determined', desc: 'Clenched jaw, laser-focused eyes' },
  { id: 'peace', label: 'Peace Sign', desc: 'Big smile with a peace sign pose' },
];

/* -- BACKGROUNDS ---------------------------------------- */
const BACKGROUNDS = [
  { id: 'desk', label: 'At Your Desk', desc: 'Surrounded by work tools' },
  { id: 'boardroom', label: 'Boardroom', desc: 'Long table, big screen, power vibes' },
  { id: 'coffee', label: 'Coffee Shop', desc: 'Cozy cafe with laptop glow' },
  { id: 'homeoffice', label: 'Home Office', desc: 'Messy desk, cat on keyboard' },
  { id: 'cityscape', label: 'Cityscape', desc: 'Skyline behind you, sunset light' },
  { id: 'nature', label: 'Nature', desc: 'Mountains, trees, fresh air' },
  { id: 'abstract', label: 'Abstract Swirls', desc: 'Colorful abstract shapes and swirls' },
  { id: 'studio', label: 'Blank / Studio', desc: 'Clean white or gradient backdrop' },
];

/* -- PROMPT BUILDER ------------------------------------- */
function buildPrompt({ name, job, style, expression, background, props, traits }) {
  const s = STYLES.find(x => x.id === style);
  const exp = EXPRESSIONS.find(x => x.id === expression);
  const bg = BACKGROUNDS.find(x => x.id === background);

  const styleInstructions = {
    classic: `a classic hand-drawn caricature with wildly exaggerated features — oversized head (at least 3x body proportion), comically emphasized defining facial features, tiny body with stubby limbs. Drawn in the style of a boardwalk caricature artist using bold ink lines with colored marker fills.`,
    pixar: `a Pixar/Disney-style 3D rendered caricature with smooth subsurface scattering on the skin, stylized proportions (large head, big expressive eyes, small body), rendered in Pixar's signature warm lighting with soft ambient occlusion. The character looks like they belong in a Pixar short film.`,
    manga: `a Japanese manga/anime style caricature with large sparkling eyes, dynamic hair, exaggerated expressions, and speed lines for energy. Drawn in clean ink linework with cel-shading and vibrant anime color palette. The character radiates main-character energy.`,
    bobblehead: `a hyper-realistic bobblehead figurine sitting on a desk. The head is comically oversized (5x the body), attached by a visible spring to a tiny suited body on a round base. The figurine has a glossy painted finish with slight specular highlights, like an actual collectible bobblehead toy. The base has a small nameplate reading "${name}".`,
    newspaper: `a vintage editorial newspaper caricature in the style of political cartoons from The New Yorker or Wall Street Journal. Drawn in crosshatched black ink with subtle gray washes, exaggerated features that capture personality, with the subject's name "${name}" in serif type below. The style is witty, sophisticated, and slightly satirical.`,
    popart: `a bold Andy Warhol-inspired pop art caricature arranged in a 2x2 grid of the same face in different vivid color combinations (hot pink/cyan, yellow/purple, green/orange, blue/red). Flat colors, Ben-Day halftone dots, thick black outlines, and screen-print texture. The name "${name}" appears in a comic book speech bubble.`,
    watercolor: `a loose, expressive watercolor sketch caricature with visible brushstrokes, ink outlines that bleed slightly into wet watercolor washes, splashes of color that extend beyond the lines, and white paper showing through. The style is artistic and editorial, like a feature illustration in a premium magazine.`,
    digital: `a modern digital cartoon caricature in clean flat vector style with bold outlines, minimal gradients, vibrant saturated colors, and simplified geometric shapes. The proportions are playfully distorted with an oversized head and expressive features. Looks like a premium avatar illustration for a tech company or social media profile.`,
  };

  const expressionText = exp ? `The character's expression is ${exp.label.toLowerCase()} — ${exp.desc.toLowerCase()}.` : '';

  const backgroundInstructions = {
    desk: `The background shows their workspace — a desk cluttered with tools of their trade, monitors, sticky notes, and personal touches that reflect their profession as a ${job}.`,
    boardroom: `The background is a sleek corporate boardroom with a long conference table, a presentation screen showing charts, and floor-to-ceiling windows with a city view.`,
    coffee: `The background is a cozy coffee shop with warm ambient lighting, a laptop open on the table, a latte with foam art, and other blurred patrons in the back.`,
    homeoffice: `The background is a relatable home office setup — dual monitors, a messy desk, houseplants, maybe a cat walking across the keyboard, and a motivational poster on the wall.`,
    cityscape: `The background is a dramatic cityscape at golden hour — towering skyscrapers, warm sunset light casting long shadows, with the character standing confidently in the foreground.`,
    nature: `The background is a beautiful natural landscape — rolling mountains, lush green trees, a clear blue sky — creating an unexpected contrast with their professional persona.`,
    abstract: `The background is an explosion of colorful abstract shapes, swirling patterns, geometric forms, and dynamic brushstrokes that represent creative energy and professional passion.`,
    studio: `The background is a clean, minimal studio setup — solid white or subtle gradient backdrop with professional soft-box lighting, making the caricature the sole focus.`,
  };

  const bgText = bg ? backgroundInstructions[background] : backgroundInstructions.studio;
  const propsText = props ? `Include these props and objects related to their profession: ${props}. These items should be exaggerated in size or quantity for comedic effect.` : `Include 3-4 props and tools commonly associated with a ${job}, exaggerated in size or quantity for comedic caricature effect.`;
  const traitsText = traits ? `The character's personality traits (${traits}) should be visually conveyed through body language, clothing details, and subtle visual cues.` : '';

  return `Create ${styleInstructions[style] || styleInstructions.classic}

The subject is ${name}, a ${job}. ${expressionText}

${bgText}

${propsText}

${traitsText}

The caricature should capture the essence of what it means to be a ${job} — the daily routine, the tools, the struggles, and the pride. Exaggerate the most recognizable aspects of the profession for humor while keeping the portrayal affectionate and respectful. The overall mood should be fun, shareable, and instantly recognizable as "that's definitely a ${job}."

Make the image highly detailed, vibrant, and social-media-ready — something the subject would proudly share on LinkedIn, Instagram, or TikTok. The composition should work well as both a profile picture and a full poster.`;
}

/* -- PREVIEW (truncated prompt) ------------------------- */
function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function CaricatureGenerator() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [style, setStyle] = useState('');
  const [expression, setExpression] = useState('confident');
  const [background, setBackground] = useState('desk');
  const [props, setProps] = useState('');
  const [traits, setTraits] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (name && job && style) ? buildPrompt({ name, job, style, expression, background, props, traits }) : '';

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Enter a valid email'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'caricature-generator', referrer: document.referrer || '' }),
      });
      if (res.ok) {
        setUnlocked(true);
      } else {
        setError('Something went wrong. Try again.');
      }
    } catch {
      setError('Network error. Try again.');
    }
    setLoading(false);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const title = 'Free AI Caricature Generator | Create Your Job Caricature Prompt';
  const description = 'Generate the perfect ChatGPT prompt to create a caricature of you and your job. 8 art styles, custom expressions, backgrounds, and props. The viral AI caricature trend made easy.';
  const url = 'https://www.midastools.co/caricature-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Caricature Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I create a caricature of myself with ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use our free AI Caricature Generator to build a detailed prompt. Enter your name, job, choose a caricature style, expression, and background. Then paste the generated prompt into ChatGPT (GPT-4o works best) along with a photo of yourself. ChatGPT will create a personalized caricature based on your profession.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the ChatGPT caricature trend?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ChatGPT caricature trend involves asking AI to create a humorous, exaggerated cartoon version of you based on your job and personality. People upload a photo and ask ChatGPT to "create a caricature of me and my job." The results are funny, shareable illustrations that have gone viral on TikTok, Instagram, and LinkedIn.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tool makes the best caricatures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT with GPT-4o and DALL-E 3 produces the best AI caricatures. Midjourney is also excellent for artistic styles. Our generator creates optimized prompts that work with ChatGPT, DALL-E, Midjourney, and other AI image generators.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the AI caricature generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our AI Caricature Generator is completely free. Enter your email to unlock your custom prompt. You can generate unlimited caricature prompts for different styles, expressions, and backgrounds at no cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the AI caricature for my LinkedIn profile or social media?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! AI caricatures make great profile pictures, LinkedIn banners, and social media content. The caricature trend is especially popular on LinkedIn where professionals share fun illustrations of their job roles. Our generator creates prompts optimized for social-media-ready images.',
        },
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{'\u270D\uFE0F'}</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Caricature Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Create a hilarious AI caricature of you and your job. Pick your style, expression, and scene — get the perfect ChatGPT prompt for the viral caricature trend.
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Step {step} of {totalSteps}</span>
            <span style={{ fontSize: 13, color: '#9CA3AF' }}>{Math.round(progress)}% complete</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 99 }}>
            <div style={{ height: 6, background: '#3B5FFF', borderRadius: 99, width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Step 1: Name & Job */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Who Are You?</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Tell us your name and what you do — the AI will build your caricature around your profession.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Your Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='e.g. "Sarah" or "Dr. Mike"'
              maxLength={40}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 20, outline: 'none', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Your Job / Profession *</label>
            <input
              type="text"
              value={job}
              onChange={e => setJob(e.target.value)}
              placeholder='e.g. "Software Engineer", "Dentist", "Real Estate Agent"'
              maxLength={60}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            <button
              onClick={() => name.trim() && job.trim() && setStep(2)}
              disabled={!name.trim() || !job.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: (name.trim() && job.trim()) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (name.trim() && job.trim()) ? 'pointer' : 'default' }}
            >
              Next: Pick Your Style {'\u2192'}
            </button>
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Caricature Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>What art style should your caricature be?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {STYLES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  style={{
                    padding: '16px 14px',
                    border: style === s.id ? `3px solid ${s.color}` : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: style === s.id ? `${s.color}10` : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{s.desc}</div>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => style && setStep(3)}
                disabled={!style}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Customize {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Expression + Background + Props + Traits */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Customize Your Caricature</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Pick your expression, background, and add personal details.</p>

            {/* Expression */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Expression</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {EXPRESSIONS.map(exp => (
                  <button
                    key={exp.id}
                    onClick={() => setExpression(exp.id)}
                    style={{
                      padding: '12px 14px',
                      border: expression === exp.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: expression === exp.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{exp.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{exp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Background Scene */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Background Scene</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {BACKGROUNDS.map(bg => (
                  <button
                    key={bg.id}
                    onClick={() => setBackground(bg.id)}
                    style={{
                      padding: '12px 14px',
                      border: background === bg.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: background === bg.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{bg.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{bg.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Props */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Props Related to Your Job</label>
              <input
                type="text"
                value={props}
                onChange={e => setProps(e.target.value)}
                placeholder='e.g. "stethoscope, medical charts, coffee IV drip" or "laptop, 47 browser tabs, energy drinks"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Personality Traits */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Personality Traits</label>
              <input
                type="text"
                value={traits}
                onChange={e => setTraits(e.target.value)}
                placeholder='e.g. "perfectionist, always caffeinated, secretly a nerd" or "loud, charismatic, always late"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Prompt {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result -- email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card (always visible -- screenshot-worthy) */}
            <div style={{
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>{'\u270D\uFE0F'}</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#A5B4FC', marginBottom: 8 }}>YOUR AI CARICATURE</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 16, color: '#C7D2FE', marginBottom: 20 }}>{job}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {EXPRESSIONS.find(e => e.id === expression)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {BACKGROUNDS.find(b => b.id === background)?.label}
                </span>
              </div>

              {props && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#A5B4FC', marginBottom: 6 }}>PROPS</div>
                  <div style={{ fontSize: 13, color: '#C7D2FE' }}>{props}</div>
                </div>
              )}

              {traits && (
                <div style={{ fontSize: 13, color: '#C7D2FE', marginTop: 8 }}>Personality: {traits}</div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#818CF8' }}>midastools.co/caricature-generator</div>
            </div>

            {/* Prompt Preview / Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full ChatGPT caricature prompt + get 5 bonus AI image prompts free.
                </p>

                {/* Blurred preview */}
                <div style={{
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 20,
                  marginBottom: 24,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>
                    {getPreview(prompt)}
                  </pre>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '70%',
                    background: 'linear-gradient(transparent, #F9FAFB 70%)',
                  }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Full prompt hidden</span>
                  </div>
                </div>

                {/* Email form */}
                <form onSubmit={handleUnlock}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email to unlock"
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: 16,
                      border: '2px solid #E5E7EB',
                      borderRadius: 12,
                      marginBottom: 12,
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  {error && <p style={{ color: '#EF4444', fontSize: 14, margin: '0 0 12px' }}>{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#FFF',
                      background: loading ? '#93C5FD' : '#3B5FFF',
                      border: 'none',
                      borderRadius: 99,
                      cursor: loading ? 'default' : 'pointer',
                    }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>
                    No spam ever. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            ) : (
              /* Unlocked -- full prompt */
              <div style={{ background: '#FFF', border: '2px solid #3B5FFF', borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#059669' }}>Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{
                      padding: '10px 20px',
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#FFF',
                      background: copied ? '#059669' : '#3B5FFF',
                      border: 'none',
                      borderRadius: 99,
                      cursor: 'pointer',
                    }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>
                    {prompt}
                  </pre>
                </div>

                <div style={{ background: '#FEF3C7', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#92400E', margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: '#92400E', fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o works best)</li>
                    <li>Upload a photo of yourself</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Screenshot your caricature and share it!</li>
                  </ol>
                </div>

                {/* Start Over */}
                <button
                  onClick={() => { setStep(1); setName(''); setJob(''); setStyle(''); setExpression('confident'); setBackground('desk'); setProps(''); setTraits(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#3B5FFF', background: '#EEF2FF', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Make Another Caricature
                </button>

                {/* Upsell */}
                <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#C7D2FE', margin: '0 0 20px' }}>Caricatures, action figures, Ghibli, trading cards, pet portraits, and 20+ more styles — all copy-paste ready.</p>
                  <a
                    href={STRIPE_IMAGE_PACK}
                    style={{ display: 'inline-block', background: '#FFF', color: '#3B5FFF', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}
                  >
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#A5B4FC', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 16 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {/* Back button */}
            {!unlocked && (
              <button
                onClick={() => setStep(3)}
                style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}
              >
                {'\u2190'} Back to Customize
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The Hottest AI Trend Right Now</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Millions of people are creating AI caricatures of themselves and their jobs. This tool gives you the perfect prompt — customized to YOUR profession, YOUR personality, YOUR style.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Art Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Expressions</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Backgrounds</div></div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: 40, padding: 28, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 24px', color: '#111827' }}>Frequently Asked Questions</h2>
          {faqData.mainEntity.map((faq, i) => (
            <div key={i} style={{ marginBottom: i < faqData.mainEntity.length - 1 ? 20 : 0 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>{faq.name}</h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a collectible toy {'\u2192'}
            </Link>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25 styles including Ghibli, Pixel Art, Cyberpunk {'\u2192'}
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art {'\u2192'}
            </Link>
            <Link href="/ai-image-prompt-pack" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Pack — 150+ prompts for $29 {'\u2192'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
