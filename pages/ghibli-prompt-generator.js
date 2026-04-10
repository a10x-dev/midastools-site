import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── ART STYLES ─────────────────────────────────────── */
const STYLES = [
  { id: 'ghibli', label: 'Studio Ghibli', icon: '🏯', desc: 'Miyazaki\'s magical realism', color: '#059669' },
  { id: 'ghibli-portrait', label: 'Ghibli Portrait', icon: '👤', desc: 'Your face, Ghibli style', color: '#10B981' },
  { id: 'totoro', label: 'My Neighbor Totoro', icon: '🌳', desc: 'Countryside whimsy', color: '#34D399' },
  { id: 'spirited', label: 'Spirited Away', icon: '🏮', desc: 'Mystical bathhouse vibes', color: '#8B5CF6' },
  { id: 'howl', label: 'Howl\'s Moving Castle', icon: '🏰', desc: 'Steampunk fantasy', color: '#F59E0B' },
  { id: 'mononoke', label: 'Princess Mononoke', icon: '🐺', desc: 'Epic nature warrior', color: '#EF4444' },
  { id: 'kiki', label: 'Kiki\'s Delivery', icon: '🧹', desc: 'Cozy European town', color: '#EC4899' },
  { id: 'ponyo', label: 'Ponyo', icon: '🐟', desc: 'Ocean magic, bright colors', color: '#3B82F6' },
];

/* ── SCENE SETTINGS ────────────────────────────────── */
const SCENES = [
  { id: 'countryside', label: 'Rolling Countryside', desc: 'Green hills, wildflowers, blue sky' },
  { id: 'forest', label: 'Enchanted Forest', desc: 'Ancient trees, dappled sunlight' },
  { id: 'town', label: 'European Town', desc: 'Cobblestone streets, bakeries' },
  { id: 'ocean', label: 'Seaside Cliff', desc: 'Waves crashing, lighthouse' },
  { id: 'sky', label: 'Flying Through Clouds', desc: 'Soaring above the world' },
  { id: 'bathhouse', label: 'Spirit Bathhouse', desc: 'Lanterns, steam, magic' },
  { id: 'castle', label: 'Moving Castle', desc: 'Steampunk machinery, brass' },
  { id: 'garden', label: 'Secret Garden', desc: 'Hidden flowers, stone walls' },
];

/* ── MOOD / ATMOSPHERE ─────────────────────────────── */
const MOODS = [
  { id: 'peaceful', label: 'Peaceful & Warm', icon: '☀️' },
  { id: 'magical', label: 'Magical & Dreamy', icon: '✨' },
  { id: 'adventurous', label: 'Adventurous & Bold', icon: '⚡' },
  { id: 'melancholy', label: 'Melancholy & Beautiful', icon: '🌧️' },
  { id: 'whimsical', label: 'Whimsical & Playful', icon: '🎈' },
  { id: 'epic', label: 'Epic & Grand', icon: '🏔️' },
];

/* ── MAGICAL ELEMENTS ──────────────────────────────── */
const ELEMENTS = [
  'Spirit creatures', 'Floating lanterns', 'Soot sprites', 'Giant tree', 'Flying machine',
  'Cat bus', 'Magical doorway', 'Falling leaves', 'Cherry blossoms', 'Fireflies',
  'Rain puddles', 'Wind in hair', 'Trailing clouds', 'Ancient ruins', 'Glowing mushrooms',
  'Paper airplanes', 'Bicycle', 'Red umbrella', 'Train on water', 'Moving clouds',
];

/* ── PROMPT BUILDER ───────────────────────────────── */
function buildPrompt({ subject, style, scene, mood, elements, custom }) {
  const s = STYLES.find(x => x.id === style);
  const sc = SCENES.find(x => x.id === scene);
  const m = MOODS.find(x => x.id === mood);

  const styleInstructions = {
    'ghibli': `in the iconic Studio Ghibli animation style by Hayao Miyazaki. Hand-painted watercolor aesthetic with soft edges, cel-shaded lighting, and that signature Ghibli warmth`,
    'ghibli-portrait': `as a Studio Ghibli character portrait in the style of Hayao Miyazaki. The subject should look like they belong in a Ghibli film — soft features, expressive eyes, hand-painted watercolor skin tones, wind-blown hair`,
    'totoro': `in the style of My Neighbor Totoro — lush countryside, oversized magical forest creatures, soft pastoral colors, the gentle wonder of childhood discovery. Earthy greens and warm yellows dominate`,
    'spirited': `in the style of Spirited Away — rich reds and golds, glowing paper lanterns, mystical atmosphere, intricate Japanese bathhouse architecture, otherworldly spirits and magical beings`,
    'howl': `in the style of Howl's Moving Castle — European steampunk fantasy, brass and copper machinery, ornate Victorian-era architecture, magical flames, flowing fabrics and dramatic capes`,
    'mononoke': `in the style of Princess Mononoke — epic and primal, ancient forests, warrior energy, nature spirits, luminous night forest scenes, dramatic lighting with deep greens and vivid reds`,
    'kiki': `in the style of Kiki's Delivery Service — warm European coastal town, cozy bakery interiors, charming cobblestone streets, a sense of youthful independence, soft pinks and warm oranges`,
    'ponyo': `in the style of Ponyo — vibrant ocean colors, bold simplified shapes, childlike wonder, magical sea creatures, waves with personality, bright saturated palette`,
  };

  const sceneText = sc ? `The scene is set in ${sc.desc.toLowerCase()}.` : '';
  const moodText = m ? `The overall mood is ${m.label.toLowerCase()} — capture that feeling in every detail.` : '';
  const elementsText = elements.length > 0
    ? `Include these magical elements: ${elements.join(', ')}.`
    : '';
  const customText = custom ? `Additional details: ${custom}.` : '';

  return `Create an illustration of ${subject || 'a scene'} ${styleInstructions[style] || styleInstructions.ghibli}.

${sceneText}

${moodText}

${elementsText}

${customText}

Art direction: Signature Ghibli attention to detail in clouds, grass, and wind movement. Rich hand-painted textures visible in every surface. Dramatic yet gentle lighting with god rays or golden hour warmth. The color palette should feel like a watercolor painting come to life. Cinematic composition with depth — foreground detail, clear midground subject, atmospheric background fading into soft distance. Studio Ghibli's trademark: making the mundane feel magical.

Technical: High resolution, 16:9 aspect ratio, illustration style (NOT photorealistic), cel animation aesthetic with visible brushwork and paint texture.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function GhibliPromptGenerator() {
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState('');
  const [scene, setScene] = useState('');
  const [mood, setMood] = useState('');
  const [elements, setElements] = useState([]);
  const [custom, setCustom] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (subject && style) ? buildPrompt({ subject, style, scene, mood, elements, custom }) : '';

  const toggleElement = (item) => {
    setElements(prev =>
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
        body: JSON.stringify({ email, source: 'ghibli-prompt-generator' }),
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

  const title = 'AI Ghibli Art Generator — Free Studio Ghibli Style Prompt Builder (ChatGPT & Midjourney)';
  const description = 'Create stunning Studio Ghibli-style AI art with the perfect prompt. Choose from 8 Ghibli film styles, magical scenes, and moods. Works with ChatGPT, DALL-E, Midjourney. The viral trend that broke the internet.';
  const url = 'https://midastools.co/ghibli-prompt-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Ghibli Art Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I create Studio Ghibli-style AI art?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free Ghibli prompt generator to create a detailed prompt, then paste it into ChatGPT (GPT-4o), DALL-E, or Midjourney. Upload a photo for portrait-style results.' } },
      { '@type': 'Question', name: 'Is the Ghibli AI art trend still popular in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! The Studio Ghibli AI art trend that started in early 2025 continues to be one of the most popular AI image trends, with millions of people creating Ghibli-style portraits and scenes.' } },
      { '@type': 'Question', name: 'Which AI tool works best for Ghibli-style images?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o produces the most authentic Ghibli-style results. Midjourney v6 is also excellent. DALL-E 3 works but may require more specific prompting.' } },
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
        <meta name="keywords" content="studio ghibli ai, ghibli prompt generator, chatgpt ghibli style, ai ghibli art, miyazaki ai art, ghibli filter chatgpt, ghibli ai trend 2026, midjourney ghibli" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🏯</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Ghibli Art Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Create breathtaking Studio Ghibli-style AI art. Pick a Miyazaki film style, set the scene, and get the perfect prompt for ChatGPT, DALL-E, or Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: '#ECFDF5', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#059669' }}>150M+ users tried this trend</span>
            <span style={{ padding: '6px 14px', background: '#EEF2FF', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Works with ChatGPT & Midjourney</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#059669' }}>Step {step} of {totalSteps}</span>
            <span style={{ fontSize: 13, color: '#9CA3AF' }}>{Math.round(progress)}% complete</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 99 }}>
            <div style={{ height: 6, background: '#059669', borderRadius: 99, width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Step 1: Subject */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>What Are You Creating?</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Describe your subject — this is the star of your Ghibli art.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Subject *</label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder='e.g. "a young woman with brown hair reading on a hilltop" or "my cat sitting by the window"'
              maxLength={200}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 12, outline: 'none', boxSizing: 'border-box' }}
            />
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 24px' }}>
              Tip: For portraits, upload your photo to ChatGPT along with the prompt. For scenes, describe what you want to see.
            </p>

            <button
              onClick={() => subject.trim() && setStep(2)}
              disabled={!subject.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: subject.trim() ? '#059669' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: subject.trim() ? 'pointer' : 'default' }}
            >
              Next: Choose Ghibli Style →
            </button>
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Ghibli Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Each film has a unique visual signature. Which world do you want?</p>

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
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? '#059669' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Scene & Mood →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Scene + Mood + Elements */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Set the Scene</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Choose a setting, mood, and magical details.</p>

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
                      border: scene === sc.id ? '2px solid #059669' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: scene === sc.id ? '#ECFDF5' : '#FFF',
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
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Mood & Atmosphere</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {MOODS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    style={{
                      padding: '12px 14px',
                      border: mood === m.id ? '2px solid #059669' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: mood === m.id ? '#ECFDF5' : '#FFF',
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

            {/* Magical Elements */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                Magical Elements ({elements.length}/6)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ELEMENTS.map(item => {
                  const sel = elements.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleElement(item)}
                      style={{
                        padding: '8px 14px',
                        fontSize: 13,
                        fontWeight: sel ? 700 : 500,
                        color: sel ? '#FFF' : '#374151',
                        background: sel ? '#059669' : '#FFF',
                        border: sel ? '2px solid #059669' : '1.5px solid #D1D5DB',
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
                placeholder='e.g. "golden hour lighting" or "cat sleeping on the windowsill"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#059669', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Ghibli Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card (screenshot-worthy) */}
            <div style={{
              background: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🏯</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#6EE7B7', marginBottom: 8 }}>YOUR GHIBLI MASTERPIECE</div>
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

              {elements.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#6EE7B7', marginBottom: 6 }}>MAGICAL ELEMENTS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {elements.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#34D399' }}>midastools.co/ghibli-prompt-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Ghibli Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get 5 bonus Ghibli-style prompt variations free.
                </p>

                <div style={{
                  background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden',
                }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>
                    {getPreview(prompt)}
                  </pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#059669' }}>🔒 Full prompt hidden</span>
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
                    style={{ width: '100%', padding: '16px', fontSize: 17, fontWeight: 700, color: '#FFF', background: loading ? '#6EE7B7' : '#059669', border: 'none', borderRadius: 99, cursor: loading ? 'default' : 'pointer' }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Ghibli Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>No spam ever. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              <div style={{ background: '#FFF', border: '2px solid #059669', borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#059669' }}>Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? '#059669' : '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: '#ECFDF5', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#065F46', margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: '#065F46', fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Midjourney</strong></li>
                    <li>For portraits: upload your photo first</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Share your Ghibli masterpiece!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setSubject(''); setStyle(''); setScene(''); setMood(''); setElements([]); setCustom(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#059669', background: '#ECFDF5', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Ghibli Scene
                </button>

                <div style={{ background: 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#6EE7B7', margin: '0 0 20px' }}>Ghibli, action figures, trading cards, pet portraits, Funko Pops, pixel art, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: '#059669', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#34D399', margin: '8px 0 0' }}>
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
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The Trend That Broke ChatGPT</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Studio Ghibli-style AI art pushed ChatGPT past 150 million weekly users. Create your own with the perfect prompt — customized to YOUR vision.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#059669' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Ghibli Film Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#059669' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Scene Settings</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#059669' }}>20</div><div style={{ fontSize: 13, color: '#6B7280' }}>Magical Elements</div></div>
          </div>
        </div>

        {/* FAQ for SEO */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I create Studio Ghibli-style AI art?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator above to build a detailed prompt. Then paste it into ChatGPT (GPT-4o works best), DALL-E, or Midjourney. For portraits, upload your photo along with the prompt.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Which AI tool creates the best Ghibli images?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>ChatGPT with GPT-4o produces the most authentic Ghibli-style results. The image generation model understands Miyazaki&apos;s watercolor aesthetic, cel-shading, and atmospheric details. Midjourney v6 is also excellent for landscapes.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Is the Ghibli AI art trend still popular?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Absolutely. The trend that started in early 2025 continues to grow. CNN, NBC, and Newsweek all covered it. ChatGPT hit 150 million weekly users during the peak, and it remains one of the most popular AI image generation styles.</p>
          </div>
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy →
            </Link>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25+ styles →
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art →
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
