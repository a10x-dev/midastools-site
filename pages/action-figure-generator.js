import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── FIGURE STYLES ─────────────────────────────────────── */
const STYLES = [
  { id: 'blister', label: 'Blister Pack', icon: '🧸', desc: 'Classic action figure packaging', color: '#f97316' },
  { id: 'barbie', label: 'Barbie / Doll Box', icon: '💖', desc: 'Pink glossy doll box', color: '#ec4899' },
  { id: 'funko', label: 'Funko Pop', icon: '👤', desc: 'Big head, small body vinyl', color: '#8b5cf6' },
  { id: 'starwars', label: 'Vintage Star Wars', icon: '⭐', desc: 'Retro 80s cardback style', color: '#fbbf24' },
  { id: 'anime', label: 'Anime Figure', icon: '🎌', desc: 'Japanese SHFiguarts style', color: '#ef4444' },
  { id: 'lego', label: 'LEGO Minifig', icon: '🧱', desc: 'Brick-style minifigure box', color: '#facc15' },
  { id: 'gi-joe', label: 'Military / G.I. Joe', icon: '🪖', desc: 'Tactical ops packaging', color: '#22c55e' },
  { id: 'superhero', label: 'Superhero Edition', icon: '🦸', desc: 'Marvel/DC collector style', color: '#3b82f6' },
];

/* ── ACCESSORIES BY CATEGORY ──────────────────────────── */
const ACCESSORY_CATEGORIES = [
  {
    label: 'Tech & Work',
    items: ['Laptop', 'Smartphone', 'Coffee Cup', 'Notebook', 'Pen', 'Glasses', 'AirPods', 'Mechanical Keyboard', 'Monitor', 'Standing Desk'],
  },
  {
    label: 'Creative',
    items: ['Camera', 'Guitar', 'Paintbrush', 'Microphone', 'Sketchpad', 'Headphones', 'Film Reel', 'DJ Turntable'],
  },
  {
    label: 'Lifestyle',
    items: ['Skateboard', 'Surfboard', 'Yoga Mat', 'Dumbbells', 'Basketball', 'Bicycle', 'Hiking Boots', 'Backpack'],
  },
  {
    label: 'Fun & Quirky',
    items: ['Pet Dog', 'Pet Cat', 'Pizza Slice', 'Energy Drink', 'Houseplant', 'Sunglasses', 'Trophy', 'Magic Wand', 'Lightsaber', 'Tiny Clone of Yourself'],
  },
  {
    label: 'Professional',
    items: ['Briefcase', 'Stethoscope', 'Chef Knife', 'Wrench', 'Gavel', 'Lab Coat', 'Hard Hat', 'Fire Extinguisher'],
  },
];

/* ── POSES ────────────────────────────────────────────── */
const POSES = [
  { id: 'confident', label: 'Confident Stand', desc: 'Arms at sides, slight smile' },
  { id: 'power', label: 'Power Pose', desc: 'Hands on hips, chin up' },
  { id: 'action', label: 'Action Pose', desc: 'Dynamic, mid-motion' },
  { id: 'casual', label: 'Casual Lean', desc: 'Relaxed, one hand in pocket' },
  { id: 'crossed', label: 'Arms Crossed', desc: 'Boss energy, looking forward' },
  { id: 'wave', label: 'Friendly Wave', desc: 'Waving at the camera' },
  { id: 'thinking', label: 'The Thinker', desc: 'Hand on chin, contemplating' },
  { id: 'pointing', label: 'Pointing at You', desc: '"I want YOU" energy' },
];

/* ── PROMPT BUILDER ───────────────────────────────────── */
function buildPrompt({ name, tagline, style, accessories, pose, outfit, extra }) {
  const s = STYLES.find(x => x.id === style);
  const p = POSES.find(x => x.id === pose);

  const styleInstructions = {
    blister: `a premium collectible action figure displayed in a clear plastic blister pack on a printed cardboard backing. The packaging has a header card with the text "${name}" in bold letters and "${tagline}" as a subheading below it.`,
    barbie: `a high-end fashion doll in a glossy pink Barbie-style box with a clear front window. The box has "${name}" in elegant cursive at the top and "${tagline}" printed on a small tag. The packaging is glamorous with sparkle effects.`,
    funko: `a Funko Pop vinyl figure with an oversized head, small body, black dot eyes, and no mouth. Displayed in the classic Funko Pop box with the character window. The box header reads "${name}" and the side reads "${tagline}".`,
    starwars: `a vintage 1977 Star Wars Kenner-style action figure on a cardback. The figure is small (3.75 inches scale) with 5 points of articulation. The cardback has retro space artwork, a starfield background, the text "${name}" in the Star Wars-style logo font, and "${tagline}" below it.`,
    anime: `a Japanese collectible action figure in the style of SHFiguarts or Figma. The figure has detailed articulation at elbows, wrists, knees, and feet, placed on an articulated display base. The box is sleek with Japanese text, "${name}" in English, and "${tagline}" on the side panel.`,
    lego: `a LEGO minifigure in the classic LEGO style — yellow skin, blocky body, claw hands, printed torso detail. Displayed in a small LEGO-style box with "${name}" and "${tagline}" on the front. The box has the classic LEGO aesthetic.`,
    'gi-joe': `a military tactical action figure in G.I. Joe style packaging. Camo/tactical themed box with "${name}" in stencil military font and "${tagline}" below. The figure has detailed tactical gear and a dog tag.`,
    superhero: `a superhero action figure in premium Marvel Legends / DC Multiverse style packaging. Dynamic artwork on the box, "${name}" in comic book title font, and "${tagline}" as the hero tagline. The box has a collector's edition feel.`,
  };

  const accessoryList = accessories.length > 0
    ? `Include these accessories in separate compartments next to the figure: ${accessories.join(', ')}.`
    : 'Include 3-4 accessories that match the character in separate compartments.';

  const poseText = p ? `The figure should be in a ${p.label.toLowerCase()} pose (${p.desc.toLowerCase()}).` : '';
  const outfitText = outfit ? `The figure is wearing: ${outfit}.` : '';
  const extraText = extra ? `Additional details: ${extra}.` : '';

  return `Create a hyper-realistic product photo of ${styleInstructions[style] || styleInstructions.blister}

${poseText} ${outfitText}

${accessoryList}

${extraText}

The image should look like an actual product photograph you'd see on Amazon or in a toy store — professional lighting, slight reflection on the plastic packaging, realistic materials and textures. The figure should capture the likeness and personality of the character. Shot on a clean white/light gray background with soft studio lighting.`;
}

/* ── PREVIEW (truncated prompt) ───────────────────────── */
function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function ActionFigureGenerator() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [style, setStyle] = useState('');
  const [accessories, setAccessories] = useState([]);
  const [pose, setPose] = useState('confident');
  const [outfit, setOutfit] = useState('');
  const [extra, setExtra] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (name && style) ? buildPrompt({ name, tagline, style, accessories, pose, outfit, extra }) : '';

  const toggleAccessory = (item) => {
    setAccessories(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : prev.length < 8 ? [...prev, item] : prev
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
        body: JSON.stringify({ email, source: 'action-figure-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Action Figure Generator — Turn Yourself Into a Toy (Free Prompt Builder)';
  const description = 'Create the perfect ChatGPT prompt to turn yourself into an action figure, Barbie doll, Funko Pop, or anime figure. Pick your style, accessories, and pose. The viral trend made easy.';
  const url = 'https://www.midastools.co/action-figure-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Action Figure Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
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
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🧸</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Action Figure Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Turn yourself into a collectible action figure. Pick your style, accessories, and pose — get a perfect ChatGPT prompt to create the viral trend everyone's sharing.
          </p>
        </div>

        {/* Top Conversion Banner — direct path to paid */}
        <div style={{
          background: 'linear-gradient(135deg, #3B5FFF 0%, #1E3AE0 100%)',
          borderRadius: 16,
          padding: '18px 22px',
          marginBottom: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          boxShadow: '0 8px 24px rgba(59,95,255,0.2)',
        }}>
          <div style={{ flex: '1 1 260px', color: '#FFF' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: '#FFF', marginBottom: 4 }}>⚡ SKIP THE GENERATOR &middot; TRY US FOR $9</div>
            <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>20 hand-picked AI prompts (incl. action figure + viral image styles) — instant download.</div>
          </div>
          <a href="/starter-pack" data-cta="tripwire-banner-top" style={{
            display: 'inline-block',
            background: '#FFF',
            color: '#1E3AE0',
            fontWeight: 800,
            fontSize: 14,
            padding: '12px 22px',
            borderRadius: 99,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}>Get 20 Prompts — $9 &rarr;</a>
        </div>

        {/* $29 Image Pack — secondary upsell for image-specific buyers */}
        <div style={{ textAlign: 'center', marginBottom: 28, marginTop: -16 }}>
          <a href={STRIPE_IMAGE_PACK} data-cta="image-pack-secondary" style={{ color: '#1E3AE0', fontSize: 13, fontWeight: 600, textDecoration: 'none', borderBottom: '1px dashed #3B5FFF', paddingBottom: 2 }}>
            Want 150+ image-only prompts instead? Image Pack &mdash; $29 &rarr;
          </a>
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

        {/* Step 1: Name & Tagline */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Name Your Figure</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>This goes on the packaging — make it legendary.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Figure Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='e.g. "Captain Code" or your real name'
              maxLength={40}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 20, outline: 'none', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Tagline</label>
            <input
              type="text"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              placeholder='e.g. "Ships Code, Breaks Hearts" or "CEO of Chaos"'
              maxLength={60}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            <button
              onClick={() => name.trim() && setStep(2)}
              disabled={!name.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: name.trim() ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: name.trim() ? 'pointer' : 'default' }}
            >
              Next: Pick Your Style →
            </button>
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Packaging Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>How should your figure be packaged?</p>

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
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => style && setStep(3)}
                disabled={!style}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Accessories & Pose →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Accessories + Pose + Outfit */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Customize Your Figure</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Pick up to 8 accessories, a pose, and describe the outfit.</p>

            {/* Accessories */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 12 }}>
                Accessories ({accessories.length}/8)
              </label>
              {ACCESSORY_CATEGORIES.map(cat => (
                <div key={cat.label} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.items.map(item => {
                      const sel = accessories.includes(item);
                      return (
                        <button
                          key={item}
                          onClick={() => toggleAccessory(item)}
                          style={{
                            padding: '8px 14px',
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
              ))}
            </div>

            {/* Pose */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Pose</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {POSES.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPose(p.id)}
                    style={{
                      padding: '12px 14px',
                      border: pose === p.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: pose === p.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{p.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Outfit */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Outfit Description</label>
              <input
                type="text"
                value={outfit}
                onChange={e => setOutfit(e.target.value)}
                placeholder='e.g. "Black hoodie, ripped jeans, Jordans" or "Navy suit, no tie"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Extra */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Anything Else?</label>
              <input
                type="text"
                value={extra}
                onChange={e => setExtra(e.target.value)}
                placeholder='e.g. "Tattoo sleeve on left arm" or "Background is a city skyline"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
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
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🧸</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#A5B4FC', marginBottom: 8 }}>YOUR CUSTOM ACTION FIGURE</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{name}</div>
              {tagline && <div style={{ fontSize: 16, color: '#C7D2FE', marginBottom: 20 }}>"{tagline}"</div>}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {POSES.find(p => p.id === pose)?.label}
                </span>
              </div>

              {accessories.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#A5B4FC', marginBottom: 6 }}>ACCESSORIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {accessories.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              {outfit && (
                <div style={{ fontSize: 13, color: '#C7D2FE', marginTop: 8 }}>Outfit: {outfit}</div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#818CF8' }}>midastools.co/action-figure-generator</div>
            </div>

            {/* Prompt Preview / Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full ChatGPT prompt + get 5 bonus AI image prompts free.
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
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>🔒 Full prompt hidden</span>
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
                    <li>Open <strong>ChatGPT</strong> (GPT-4o works best)</li>
                    <li>Upload a photo of yourself (or describe the character)</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Screenshot your result and share it!</li>
                  </ol>
                </div>

                {/* Start Over */}
                <button
                  onClick={() => { setStep(1); setName(''); setTagline(''); setStyle(''); setAccessories([]); setPose('confident'); setOutfit(''); setExtra(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#3B5FFF', background: '#EEF2FF', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Make Another Figure
                </button>

                {/* Upsell */}
                <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#C7D2FE', margin: '0 0 20px' }}>Action figures, Ghibli, trading cards, pet portraits, Funko Pops, and 20+ more styles — all copy-paste ready.</p>
                  <a
                    href={STRIPE_IMAGE_PACK}
                    style={{ display: 'inline-block', background: '#FFF', color: '#3B5FFF', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}
                  >
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#A5B4FC', margin: '8px 0 0' }}>
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
                ← Back to Customize
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The #1 Viral AI Trend of 2026</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Millions of people are turning themselves into action figures with AI. This tool gives you the perfect prompt — customized to YOUR style, YOUR accessories, YOUR personality.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Packaging Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>50+</div><div style={{ fontSize: 13, color: '#6B7280' }}>Accessories</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Poses</div></div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/caricature-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              🔥 AI Caricature Generator — The trend that crashed ChatGPT →
            </Link>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25 styles including Ghibli, Pixel Art, Cyberpunk →
            </Link>
            <Link href="/blog/chatgpt-caricature-trend-2026" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              Blog: ChatGPT Caricature Trend — Free Prompts & Guide →
            </Link>
            <Link href="/ai-image-prompt-pack" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Pack — 150+ prompts for $29 →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
