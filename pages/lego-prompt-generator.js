import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gy90j22B4Cw9UXcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── LEGO STYLES ──────────────────────────────────── */
const STYLES = [
  { id: 'classic', label: 'Classic Minifigure', icon: '🧱', desc: 'Iconic yellow-head minifig', color: '#F59E0B' },
  { id: 'box-art', label: 'Lego Box Art', icon: '📦', desc: 'Official product packaging', color: '#EF4444' },
  { id: 'movie', label: 'Lego Movie Scene', icon: '🎬', desc: 'Everything is awesome', color: '#3B82F6' },
  { id: 'brickheadz', label: 'BrickHeadz', icon: '🗿', desc: 'Chunky collectible style', color: '#8B5CF6' },
  { id: 'city', label: 'Lego City', icon: '🏙️', desc: 'Everyday heroes & vehicles', color: '#059669' },
  { id: 'fantasy', label: 'Lego Fantasy/Castle', icon: '🏰', desc: 'Knights, dragons, magic', color: '#92400E' },
  { id: 'space', label: 'Lego Space', icon: '🚀', desc: 'Classic space exploration', color: '#1D4ED8' },
  { id: 'anime', label: 'Lego Anime/Manga', icon: '⛩️', desc: 'Anime-inspired brick style', color: '#EC4899' },
];

/* ── SCENE SETTINGS ───────────────────────────────── */
const SCENES = [
  { id: 'toy-store', label: 'Toy Store Shelf', desc: 'Displayed among other sets' },
  { id: 'living-room', label: 'Living Room Floor', desc: 'Play session in progress' },
  { id: 'city-street', label: 'Lego City Street', desc: 'Modular buildings, road plates' },
  { id: 'castle', label: 'Medieval Castle', desc: 'Stone walls, drawbridge, torches' },
  { id: 'space-station', label: 'Space Station', desc: 'Zero gravity, control panels' },
  { id: 'pirate-ship', label: 'Pirate Ship', desc: 'Sails, cannons, open ocean' },
  { id: 'jungle-temple', label: 'Jungle Temple', desc: 'Vines, traps, hidden treasure' },
  { id: 'race-track', label: 'Race Track', desc: 'Checkered flags, speed lines' },
];

/* ── MOOD / RENDER STYLE ─────────────────────────── */
const MOODS = [
  { id: 'playful', label: 'Playful & Colorful', icon: '🎨' },
  { id: 'epic', label: 'Epic & Cinematic', icon: '🎥' },
  { id: 'retro', label: 'Retro 80s', icon: '📼' },
  { id: 'dark', label: 'Dark & Dramatic', icon: '🌑' },
  { id: 'kawaii', label: 'Cute & Kawaii', icon: '🌸' },
  { id: 'realistic', label: 'Realistic Render', icon: '📸' },
];

/* ── ACCESSORIES ──────────────────────────────────── */
const ACCESSORIES = [
  'Cape', 'Lightsaber', 'Shield', 'Crown', 'Jetpack', 'Guitar', 'Skateboard',
  'Magic Wand', 'Surfboard', 'Toolbox', 'Bow & Arrow', 'Trophy', 'Treasure Map',
  'Walkie Talkie', 'Binoculars', 'Camera', 'Pizza Slice', 'Boombox', 'Wrench', 'Paintbrush',
];

/* ── PROMPT BUILDER ──────────────────────────────── */
function buildPrompt({ subject, style, scene, mood, accessories, custom }) {
  const s = STYLES.find(x => x.id === style);
  const sc = SCENES.find(x => x.id === scene);
  const m = MOODS.find(x => x.id === mood);

  const styleInstructions = {
    'classic': `as a classic LEGO minifigure. Yellow cylindrical head with printed facial expression, C-shaped claw hands, short blocky legs, smooth rounded torso. Authentic LEGO proportions: oversized head, no neck, stubby arms with right-angle elbows`,
    'box-art': `as official LEGO product box art. Include a product number (e.g. 76XXX), age rating badge (Ages 8+), piece count badge, the LEGO logo in the top-left corner, dynamic action pose of the minifigure build, and a vibrant illustrated background. The box should look like a real retail product you'd find on a shelf`,
    'movie': `in the style of The LEGO Movie — everything is made of bricks. Scratched and slightly worn plastic surfaces, visible fingerprints on pieces, dynamic motion blur, cinematic camera angle. The entire world — ground, sky, explosions, water — is built from LEGO bricks`,
    'brickheadz': `as a LEGO BrickHeadz collectible figure. Large cubic head (roughly 4x4x4 studs), small square body, stubby legs, oversized eyes using round plate elements. Displayed on a green BrickHeadz baseplate with a nameplate`,
    'city': `in LEGO City style. Modern everyday setting with realistic proportions for a LEGO set. Clean, bright colors, smooth baseplates, modular building elements. The minifigure wears a role-appropriate uniform with printed torso detail`,
    'fantasy': `in LEGO Castle / Fantasy style. Medieval stone walls built from grey bricks, heraldic shield prints, helmets with visors and plumes, dragon elements, treasure chests with gold studs. Rich browns, greys, and jewel tones`,
    'space': `in classic LEGO Space style. Retro 1980s space theme with the iconic blue/grey color scheme, transparent neon-orange visors, the classic LEGO Space logo printed on the torso, crater baseplates, and modular spacecraft elements`,
    'anime': `in a LEGO Anime/Manga crossover style. Minifigure with anime-inspired printed face (large expressive eyes, small mouth), dynamic hair piece in vibrant color, action pose with speed-line background elements, all built from LEGO bricks`,
  };

  const sceneText = sc ? `The scene is set on a ${sc.label.toLowerCase()} — ${sc.desc.toLowerCase()}.` : '';
  const moodText = m ? `The overall mood and render style is ${m.label.toLowerCase()}.` : '';
  const accessoriesText = accessories.length > 0
    ? `The minifigure holds or wears these accessories: ${accessories.join(', ')}.`
    : '';
  const customText = custom ? `Additional details: ${custom}.` : '';

  return `Create an image of ${subject || 'a character'} ${styleInstructions[style] || styleInstructions.classic}.

${sceneText}

${moodText}

${accessoriesText}

${customText}

LEGO-specific details: The figure must look like an actual LEGO minifigure made of ABS plastic. Include visible injection mold seams along the sides of the legs and torso. The surface should have that characteristic ABS plastic sheen — slightly glossy but not mirror-reflective. Show the hollow underside of the cylindrical head visible at the neck joint. C-shaped hands that can grip accessories. Visible stud connections on shoulders and top of hair/hat piece. The iconic LEGO logo subtly embossed on each stud.

Materials and lighting: Authentic LEGO brick texture with micro-scratches from play wear. Soft studio lighting that highlights the plastic material. Slight depth-of-field blur to make the minifigure feel like a real toy photograph. The colors should match official LEGO color palette (bright red, blue, yellow, green, black, white).

Technical: High resolution, product photography style, shallow depth of field, 4:5 aspect ratio for portrait or 16:9 for scene. The image should be indistinguishable from a professional photo of a real LEGO set.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function LegoPromptGenerator() {
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState('');
  const [scene, setScene] = useState('');
  const [mood, setMood] = useState('');
  const [accessories, setAccessories] = useState([]);
  const [custom, setCustom] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (subject && style) ? buildPrompt({ subject, style, scene, mood, accessories, custom }) : '';

  const toggleAccessory = (item) => {
    setAccessories(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : prev.length < 6 ? [...prev, item] : prev
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
        body: JSON.stringify({ email, source: 'lego-prompt-generator', referrer: document.referrer || '' }),
      });
      if (res.ok) setUnlocked(true);
      else setError('Something went wrong. Try again.');
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

  const title = 'AI Lego Prompt Generator — Turn Anyone Into a Lego Minifigure (Free)';
  const description = 'Create stunning LEGO minifigure AI art with the perfect prompt. Choose from 8 Lego styles, scenes, and accessories. Works with ChatGPT, DALL-E, Midjourney. Turn yourself into a Lego minifig instantly.';
  const url = 'https://www.midastools.co/lego-prompt-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Lego Minifigure Prompt Generator',
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
      { '@type': 'Question', name: 'How do I turn myself into a LEGO minifigure with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free Lego prompt generator to create a detailed prompt, then paste it into ChatGPT (GPT-4o), DALL-E, or Midjourney. Upload a photo of yourself for the most accurate minifigure likeness.' } },
      { '@type': 'Question', name: 'Which AI tool makes the best LEGO-style images?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o and DALL-E 3 produce the most realistic LEGO minifigure images with accurate ABS plastic textures and stud details. Midjourney v7 is also excellent for cinematic LEGO scenes.' } },
      { '@type': 'Question', name: 'Can I create LEGO box art with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Select the "Lego Box Art" style in our generator. The prompt includes product number, age rating, piece count, and the official box layout so the AI creates realistic-looking LEGO packaging.' } },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content="lego ai generator, ai lego minifigure, chatgpt lego prompt, turn yourself into lego, lego minifig ai, lego box art generator, lego style ai art, midjourney lego" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🧱</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            {`AI Lego Prompt Generator`}
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Turn anyone into a LEGO minifigure with AI. Pick a brick style, set the scene, add accessories, and get the perfect prompt for ChatGPT, DALL-E, or Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: '#FEF3C7', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#92400E' }}>500M+ LEGO fans worldwide</span>
            <span style={{ padding: '6px 14px', background: '#EEF2FF', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Works with ChatGPT & Midjourney</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#F59E0B' }}>{`Step ${step} of ${totalSteps}`}</span>
            <span style={{ fontSize: 13, color: '#9CA3AF' }}>{`${Math.round(progress)}% complete`}</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 99 }}>
            <div style={{ height: 6, background: '#F59E0B', borderRadius: 99, width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Step 1: Subject */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Who Is Your Minifigure?</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Describe the person or character you want to turn into a LEGO minifigure.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Subject *</label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder='e.g. "me wearing a blue hoodie and glasses" or "a pirate captain with a big beard"'
              maxLength={200}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 12, outline: 'none', boxSizing: 'border-box' }}
            />
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 24px' }}>
              Tip: For personalized minifigures, upload your photo to ChatGPT along with the prompt. Describe clothing, hair color, and defining features.
            </p>

            <button
              onClick={() => subject.trim() && setStep(2)}
              disabled={!subject.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: subject.trim() ? '#F59E0B' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: subject.trim() ? 'pointer' : 'default' }}
            >
              Next: Choose Lego Style →
            </button>
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Lego Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Each style creates a completely different LEGO look. Which brick world do you want?</p>

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
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? '#F59E0B' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Scene & Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Scene + Mood + Accessories */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Set the Scene</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Choose a setting, render style, and accessories for your minifigure.</p>

            {/* Scene */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Scene Setting</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SCENES.map(sc => (
                  <button
                    key={sc.id}
                    onClick={() => setScene(sc.id)}
                    style={{
                      padding: '12px 14px',
                      border: scene === sc.id ? '2px solid #F59E0B' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: scene === sc.id ? '#FEF3C7' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{sc.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{sc.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Render Style</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {MOODS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    style={{
                      padding: '12px 14px',
                      border: mood === m.id ? '2px solid #F59E0B' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: mood === m.id ? '#FEF3C7' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{m.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                {`Accessories (${accessories.length}/6)`}
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ACCESSORIES.map(item => {
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
                        background: sel ? '#F59E0B' : '#FFF',
                        border: sel ? '2px solid #F59E0B' : '1.5px solid #D1D5DB',
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

            {/* Custom Details */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Custom Details</label>
              <input
                type="text"
                value={custom}
                onChange={e => setCustom(e.target.value)}
                placeholder='e.g. "holding a coffee mug" or "dual-molded legs with printing"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#F59E0B', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Lego Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card (screenshot-worthy) */}
            <div style={{
              background: 'linear-gradient(135deg, #92400E 0%, #B45309 50%, #D97706 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🧱</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#FDE68A', marginBottom: 8 }}>YOUR LEGO MINIFIGURE</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>{subject}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                {scene && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {SCENES.find(s => s.id === scene)?.label}
                </span>}
                {mood && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {MOODS.find(m => m.id === mood)?.icon} {MOODS.find(m => m.id === mood)?.label}
                </span>}
              </div>

              {accessories.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#FDE68A', marginBottom: 6 }}>ACCESSORIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {accessories.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#FDE68A' }}>midastools.co/lego-prompt-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Lego Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get 5 bonus LEGO-style prompt variations free.
                </p>

                <div style={{
                  background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden',
                }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>
                    {getPreview(prompt)}
                  </pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#F59E0B' }}>🔒 Full prompt hidden</span>
                  </div>
                </div>

                <form onSubmit={handleUnlock}>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email to unlock"
                    required
                    style={{ width: '100%', padding: '16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 12, outline: 'none', boxSizing: 'border-box' }}
                  />
                  {error && <p style={{ color: '#EF4444', fontSize: 14, margin: '0 0 12px' }}>{error}</p>}
                  <button
                    type="submit" disabled={loading}
                    style={{ width: '100%', padding: '16px', fontSize: 17, fontWeight: 700, color: '#FFF', background: loading ? '#FDE68A' : '#F59E0B', border: 'none', borderRadius: 99, cursor: loading ? 'default' : 'pointer' }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Lego Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>No spam ever. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              <div style={{ background: '#FFF', border: '2px solid #F59E0B', borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#F59E0B' }}>Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? '#F59E0B' : '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: '#FEF3C7', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#92400E', margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: '#92400E', fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Midjourney</strong></li>
                    <li>For personalized minifigs: upload your photo first</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Share your LEGO creation!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setSubject(''); setStyle(''); setScene(''); setMood(''); setAccessories([]); setCustom(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#92400E', background: '#FEF3C7', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Lego Minifigure
                </button>

                <div style={{ background: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#FDE68A', margin: '0 0 20px' }}>LEGO, action figures, Ghibli, trading cards, pet portraits, Funko Pops, pixel art, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: '#92400E', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#FDE68A', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 21 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {!unlocked && (
              <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}>
                ← Back to Scene Settings
              </button>
            )}
          </div>
        )}

        {/* Social Proof & SEO Content */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The Brick That Built the World</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            LEGO is the most popular toy brand on the planet. Now you can turn anyone into a minifigure with AI — no brick-sorting required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#F59E0B' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Lego Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#F59E0B' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Scene Settings</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#F59E0B' }}>20</div><div style={{ fontSize: 13, color: '#6B7280' }}>Accessories</div></div>
          </div>
        </div>

        {/* FAQ for SEO */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I turn myself into a LEGO minifigure with AI?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator above to build a detailed prompt. Then paste it into ChatGPT (GPT-4o works best), DALL-E, or Midjourney. For personalized results, upload your photo along with the prompt.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Which AI tool makes the best LEGO-style images?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>ChatGPT with GPT-4o and DALL-E 3 produce the most realistic LEGO minifigure images with accurate ABS plastic textures, stud details, and injection mold seams. Midjourney v7 is also excellent for cinematic LEGO scenes and box art.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Can I create LEGO box art with AI?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Yes! Select the &quot;Lego Box Art&quot; style in our generator. The prompt includes a product number, age rating, piece count, and the official box layout so the AI creates realistic-looking LEGO packaging — perfect for custom gift ideas.</p>
          </div>
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy →
            </Link>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style prompts →
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art →
            </Link>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25+ styles →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
