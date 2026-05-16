import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── TATTOO STYLES ───────────────────────────────────── */
const STYLES = [
  { id: 'traditional', label: 'Traditional / Old School', icon: '⚓', desc: 'Bold lines, bright colors, anchors & roses' },
  { id: 'japanese', label: 'Japanese / Irezumi', icon: '🐉', desc: 'Koi fish, dragons, waves, cherry blossoms' },
  { id: 'blackwork', label: 'Blackwork / Geometric', icon: '◼', desc: 'Patterns, sacred geometry, dotwork' },
  { id: 'watercolor', label: 'Watercolor', icon: '🎨', desc: 'Paint splashes, soft edges, vibrant bleeds' },
  { id: 'minimalist', label: 'Minimalist / Fine Line', icon: '✨', desc: 'Delicate, simple, elegant' },
  { id: 'realism', label: 'Realism / Portrait', icon: '📷', desc: 'Photorealistic, faces, nature' },
  { id: 'neotraditional', label: 'Neo-Traditional', icon: '🌹', desc: 'Modern twist on classic, bold & detailed' },
  { id: 'tribal', label: 'Tribal', icon: '🔱', desc: 'Bold black patterns, cultural motifs' },
  { id: 'biomechanical', label: 'Biomechanical', icon: '⚙️', desc: 'Machine meets flesh, gears & circuits' },
  { id: 'trashpolka', label: 'Trash Polka', icon: '🔴', desc: 'Black & red, collage style, chaotic beauty' },
  { id: 'dotwork', label: 'Dotwork / Stipple', icon: '🔘', desc: 'Thousands of dots, meditative detail' },
  { id: 'chicano', label: 'Chicano', icon: '🙏', desc: 'Fine line, religious imagery, lowrider culture' },
];

/* ── BODY PLACEMENTS ─────────────────────────────────── */
const PLACEMENTS = [
  'Forearm sleeve', 'Upper arm / shoulder', 'Full back piece', 'Chest',
  'Ribcage', 'Thigh', 'Calf', 'Wrist', 'Behind ear', 'Neck', 'Hand', 'Ankle', 'Spine',
];

/* ── SIZES ───────────────────────────────────────────── */
const SIZES = [
  { id: 'small', label: 'Small (2-3 inches)' },
  { id: 'medium', label: 'Medium (4-6 inches)' },
  { id: 'large', label: 'Large (8+ inches)' },
  { id: 'sleeve', label: 'Full Sleeve' },
];

/* ── MOODS ───────────────────────────────────────────── */
const MOODS = [
  'Fierce & powerful', 'Peaceful & zen', 'Dark & mysterious', 'Playful & whimsical',
  'Elegant & refined', 'Raw & rebellious', 'Spiritual & sacred', 'Memorial & meaningful',
];

/* ── ADDITIONAL ELEMENTS ─────────────────────────────── */
const ELEMENTS = [
  'Flowers / botanicals', 'Skulls / bones', 'Celestial (moon, stars, sun)',
  'Water / waves', 'Fire / flames', 'Animals / creatures',
  'Sacred geometry', 'Quotes / lettering', 'Mandalas', 'Feathers / wings',
];

/* ── PROMPT BUILDER ──────────────────────────────────── */
function buildPrompt({ style, placement, subject, size, mood, elements }) {
  const s = STYLES.find(x => x.id === style);
  const sz = SIZES.find(x => x.id === size);
  const elemText = elements.length > 0 ? elements.join(', ') : 'none specified';

  return `Design a tattoo in ${s?.label || 'custom'} style for ${placement || 'unspecified placement'}. The subject is ${subject || 'a custom design'}. Size: ${sz?.label || 'medium'}. The mood should be ${mood || 'balanced and striking'}. Include these elements: ${elemText}. Create a detailed, tattoo-artist-ready design with clean lines suitable for skin. Show the design both as a standalone illustration and as a mockup on the body placement. High detail, professional tattoo flash sheet quality.

Additional style notes for ${s?.label || 'this style'}:
${style === 'traditional' ? 'Use bold black outlines, limited but vibrant color palette (red, green, yellow, blue), classic Sailor Jerry aesthetic. Iconic motifs like banners, hearts, and bold shading.' : ''}${style === 'japanese' ? 'Follow traditional Irezumi conventions — flowing composition that wraps with the body, wind bars, clouds, background waves. Rich colors with black outlines, storytelling composition.' : ''}${style === 'blackwork' ? 'Pure black ink only. Emphasis on geometric precision, negative space, and pattern repetition. Can include sacred geometry, mandalas, or abstract forms.' : ''}${style === 'watercolor' ? 'Simulate watercolor paint effects — soft color bleeds, splashes, drips at the edges. Minimal or no black outlines. Vibrant, dreamy color palette.' : ''}${style === 'minimalist' ? 'Ultra-thin single-needle lines, minimal shading, maximum whitespace. Elegant and understated. Think single continuous line art.' : ''}${style === 'realism' ? 'Photorealistic rendering with detailed shading, smooth gradients, and lifelike textures. Black and gray or full color. Reference photograph quality.' : ''}${style === 'neotraditional' ? 'Bold outlines like traditional but with a wider color palette, more detail, and illustrative flair. Art Nouveau influences, decorative elements.' : ''}${style === 'tribal' ? 'Bold solid black shapes and patterns. Flowing curves that follow body contours. Polynesian, Maori, or abstract tribal influences.' : ''}${style === 'biomechanical' ? 'Hyper-detailed mechanical components (gears, pistons, circuits) appearing beneath torn skin. H.R. Giger inspired. Organic meets mechanical.' : ''}${style === 'trashpolka' ? 'Strictly black and red ink. Collage composition mixing realistic imagery with abstract smears, geometric shapes, and typography. Chaotic but composed.' : ''}${style === 'dotwork' ? 'Entire design built from individual dots of varying density. Stipple shading creates gradients. Meditative, precise, and hypnotic patterns.' : ''}${style === 'chicano' ? 'Fine single-needle black and gray work. Smooth shading, religious iconography (praying hands, Virgin Mary), script lettering, roses, and cultural symbolism.' : ''}

Render as a high-resolution tattoo flash sheet illustration on a clean white background. Include a second view showing the tattoo mockup on the specified body placement with realistic skin texture.`;
}

/* ── PREVIEW (truncated prompt) ──────────────────────── */
function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function TattooGenerator() {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState('');
  const [placement, setPlacement] = useState('');
  const [subject, setSubject] = useState('');
  const [size, setSize] = useState('medium');
  const [mood, setMood] = useState('');
  const [elements, setElements] = useState([]);
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (subject && style) ? buildPrompt({ style, placement, subject, size, mood, elements }) : '';

  const toggleElement = (item) => {
    setElements(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : prev.length < 3 ? [...prev, item] : prev
    );
  };

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Enter a valid email'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'tattoo-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Tattoo Design Prompt Generator — Free Custom Tattoo Prompts';
  const description = 'Create custom AI tattoo design prompts for ChatGPT, Midjourney, and DALL-E. Choose style, placement, size, and elements. Free prompt generator — no login required.';
  const url = 'https://www.midastools.co/tattoo-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Tattoo Design Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can AI design a real tattoo?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI tools like ChatGPT (with DALL-E), Midjourney, and Stable Diffusion can generate detailed tattoo design concepts. These serve as excellent references and starting points for professional tattoo artists to refine into skin-ready designs.' },
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for tattoo design?',
        acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o and DALL-E 3 produces high-quality tattoo designs. Midjourney excels at artistic styles, while Stable Diffusion offers the most customization. This generator creates optimized prompts for all three platforms.' },
      },
      {
        '@type': 'Question',
        name: 'How do I use an AI tattoo prompt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Copy the generated prompt, paste it into ChatGPT, Midjourney, or DALL-E, and the AI will create a visual tattoo design based on your specifications. You can then show the result to your tattoo artist as a reference.' },
      },
      {
        '@type': 'Question',
        name: 'Are AI-generated tattoo designs safe to use?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI-generated designs are great for inspiration and concept development. Always work with a professional tattoo artist who can adapt the design for proper placement, skin type, and long-term aging. A skilled artist will refine the AI concept into a tattoo that works beautifully on your body.' },
      },
      {
        '@type': 'Question',
        name: 'What tattoo styles work best with AI?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI excels at generating blackwork, geometric, watercolor, neo-traditional, and Japanese-style tattoo designs. Realism and fine-line styles also produce impressive results. The key is using detailed, specific prompts — which is exactly what this generator creates for you.' },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🖋️</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Tattoo Design Prompt Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Create stunning custom tattoo design prompts for ChatGPT, Midjourney, and DALL-E. Choose your style, placement, and elements — get a ready-to-use prompt.
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

        {/* Step 1: Style & Placement */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Tattoo Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Pick the artistic style that speaks to you.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {STYLES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  style={{
                    padding: '16px 14px',
                    border: style === s.id ? '3px solid #3B5FFF' : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: style === s.id ? '#EEF2FF' : '#FFF',
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

            <div style={{ marginTop: 24 }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Body Placement *</label>
              <select
                value={placement}
                onChange={e => setPlacement(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box', background: '#FFF', color: placement ? '#111827' : '#9CA3AF' }}
              >
                <option value="" disabled>Select body placement...</option>
                {PLACEMENTS.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => style && placement && setStep(2)}
              disabled={!style || !placement}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: (style && placement) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (style && placement) ? 'pointer' : 'default', marginTop: 24 }}
            >
              Next: Describe Your Tattoo →
            </button>
          </div>
        )}

        {/* Step 2: Subject, Size, Mood */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Describe Your Tattoo</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>What should the tattoo depict? Be as specific as you like.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Subject / Theme *</label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder='e.g. "Wolf howling at moon", "Phoenix rising from ashes", "Memorial for my grandmother"'
              maxLength={120}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            {/* Size */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Size</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SIZES.map(sz => (
                  <button
                    key={sz.id}
                    onClick={() => setSize(sz.id)}
                    style={{
                      padding: '12px 14px',
                      border: size === sz.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: size === sz.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{sz.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Mood / Vibe</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {MOODS.map(m => {
                  const sel = mood === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      style={{
                        padding: '8px 16px',
                        fontSize: 13,
                        fontWeight: sel ? 700 : 500,
                        color: sel ? '#FFF' : '#374151',
                        background: sel ? '#3B5FFF' : '#FFF',
                        border: sel ? '2px solid #3B5FFF' : '1.5px solid #D1D5DB',
                        borderRadius: 99,
                        cursor: 'pointer',
                        transition: 'all 0.1s',
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => subject.trim() && setStep(3)}
                disabled={!subject.trim()}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: subject.trim() ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: subject.trim() ? 'pointer' : 'default' }}
              >
                Next: Extra Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Elements */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Add Extra Elements</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Pick up to 3 additional elements to weave into your design.</p>

            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 12 }}>
                Additional Elements ({elements.length}/3)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ELEMENTS.map(item => {
                  const sel = elements.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleElement(item)}
                      style={{
                        padding: '10px 16px',
                        fontSize: 13,
                        fontWeight: sel ? 700 : 500,
                        color: sel ? '#FFF' : '#374151',
                        background: sel ? '#3B5FFF' : '#FFF',
                        border: sel ? '2px solid #3B5FFF' : '1.5px solid #D1D5DB',
                        borderRadius: 99,
                        cursor: 'pointer',
                        transition: 'all 0.1s',
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card (always visible — screenshot-worthy) */}
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #111827 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🖋️</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#93C5FD', marginBottom: 8 }}>YOUR CUSTOM TATTOO DESIGN</div>
              <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>{subject}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, marginTop: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {placement}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {SIZES.find(s => s.id === size)?.label}
                </span>
              </div>

              {mood && (
                <div style={{ fontSize: 14, color: '#BFDBFE', marginBottom: 8 }}>Mood: {mood}</div>
              )}

              {elements.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#93C5FD', marginBottom: 6 }}>ELEMENTS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {elements.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#60A5FA' }}>midastools.co/tattoo-generator</div>
            </div>

            {/* Prompt Preview / Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full tattoo design prompt + get 5 bonus AI image prompts free.
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
              /* Unlocked — full prompt */
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
                    <li>Open <strong>ChatGPT</strong> (GPT-4o), <strong>Midjourney</strong>, or <strong>DALL-E</strong></li>
                    <li>Paste this prompt and hit send</li>
                    <li>Download your tattoo design concept</li>
                    <li>Show it to your tattoo artist as a reference!</li>
                  </ol>
                </div>

                {/* Start Over */}
                <button
                  onClick={() => { setStep(1); setStyle(''); setPlacement(''); setSubject(''); setSize('medium'); setMood(''); setElements([]); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#3B5FFF', background: '#EEF2FF', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Design Another Tattoo
                </button>

                {/* Upsell */}
                <div style={{ background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#BFDBFE', margin: '0 0 20px' }}>Tattoo designs, action figures, Ghibli, pet portraits, and 20+ more styles — all copy-paste ready.</p>
                  <a
                    href={STRIPE_IMAGE_PACK}
                    style={{ display: 'inline-block', background: '#FFF', color: '#3B5FFF', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}
                  >
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#93C5FD', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 21 kits for $97</a> (save 85%)
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
                ← Back to Elements
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Design Your Next Tattoo with AI</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Millions of people are using AI to visualize tattoo ideas before going to the artist. This tool gives you the perfect prompt — customized to YOUR style, YOUR placement, YOUR vision.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>12</div><div style={{ fontSize: 13, color: '#6B7280' }}>Tattoo Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>13</div><div style={{ fontSize: 13, color: '#6B7280' }}>Placements</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Moods</div></div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25 styles including Ghibli, Pixel Art, Cyberpunk →
            </Link>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a collectible toy →
            </Link>
            <Link href="/ai-image-prompt-pack" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Pack — 150+ prompts for $29 →
            </Link>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>
          {faqLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ marginBottom: i < faqLd.mainEntity.length - 1 ? 20 : 0 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>{faq.name}</h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
