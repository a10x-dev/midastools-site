import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gy90j22B4Cw9UXcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── PHOTO STYLES ─────────────────────────────────── */
const STYLES = [
  { id: 'cinematic', label: 'Cinematic Film', icon: '🎬', desc: 'Movie-quality, dramatic lighting', color: '#7C3AED' },
  { id: 'polaroid', label: 'Vintage Polaroid', icon: '📸', desc: 'Faded colors, white border', color: '#F59E0B' },
  { id: 'golden-hour', label: 'Golden Hour', icon: '🌅', desc: 'Warm sunset backlight glow', color: '#F97316' },
  { id: 'film-grain', label: '35mm Film Grain', icon: '🎞️', desc: 'Analog film texture, soft focus', color: '#6B7280' },
  { id: 'watercolor', label: 'Watercolor Painting', icon: '🎨', desc: 'Soft brushstrokes, dreamy', color: '#3B82F6' },
  { id: 'studio-portrait', label: 'Studio Portrait', icon: '💡', desc: 'Clean backdrop, pro lighting', color: '#10B981' },
  { id: 'anime', label: 'Anime / Manga', icon: '✨', desc: 'Japanese animation style', color: '#EC4899' },
  { id: 'oil-painting', label: 'Oil Painting', icon: '🖼️', desc: 'Rich textures, classic art', color: '#B45309' },
];

/* ── SETTINGS ────────────────────────────────── */
const SETTINGS = [
  { id: 'childhood-home', label: 'Childhood Home', desc: 'Living room, backyard, front porch' },
  { id: 'park', label: 'Park / Playground', desc: 'Swings, slides, green grass' },
  { id: 'beach', label: 'Beach at Sunset', desc: 'Waves, sand, golden light' },
  { id: 'garden', label: 'Flower Garden', desc: 'Blooming flowers, butterflies' },
  { id: 'street', label: 'Quiet Street', desc: 'Tree-lined sidewalk, neighborhood' },
  { id: 'field', label: 'Open Field', desc: 'Tall grass, wildflowers, sky' },
  { id: 'studio', label: 'White Background', desc: 'Clean, focused on the hug' },
  { id: 'rain', label: 'Rainy Day', desc: 'Puddles, soft rain, umbrella' },
];

/* ── EMOTIONS / MOOD ─────────────────────────────── */
const MOODS = [
  { id: 'warm', label: 'Warm & Comforting', icon: '🤗' },
  { id: 'tearful', label: 'Tearful & Emotional', icon: '🥹' },
  { id: 'joyful', label: 'Joyful & Laughing', icon: '😊' },
  { id: 'protective', label: 'Protective & Strong', icon: '💪' },
  { id: 'peaceful', label: 'Peaceful & Quiet', icon: '☁️' },
  { id: 'bittersweet', label: 'Bittersweet & Nostalgic', icon: '💫' },
];

/* ── DETAILS ──────────────────────────────── */
const DETAILS = [
  'Matching outfits', 'Favorite childhood toy', 'Family pet nearby', 'Tears of joy',
  'Sun flare behind', 'Fallen autumn leaves', 'Cherry blossoms', 'Butterflies',
  'Old family photo in hand', 'School backpack', 'Childhood bicycle', 'Fireflies at dusk',
  'Dandelion seeds floating', 'Rainbow in background', 'Wind in hair', 'Holding hands',
  'Piggyback ride', 'Sitting on bench together', 'Whispering in ear', 'Looking at each other',
];

/* ── PROMPT BUILDER ───────────────────────────────── */
function buildPrompt({ adultDesc, childDesc, style, setting, mood, details, custom }) {
  const s = STYLES.find(x => x.id === style);
  const st = SETTINGS.find(x => x.id === setting);
  const m = MOODS.find(x => x.id === mood);

  const styleInstructions = {
    'cinematic': `Cinematic film photography quality. Dramatic three-point lighting with soft key light and warm fill. Shallow depth of field (f/1.4), lens bokeh in background. Color graded with warm tones, slight desaturation in shadows. Shot as if from a high-end movie — emotional, intimate, and beautifully composed`,
    'polaroid': `Vintage Polaroid instant photo aesthetic. Slightly faded colors with warm yellow-green cast. Soft focus edges, slightly overexposed highlights. White Polaroid border frame visible. Colors slightly muted like a photo from the 1990s. The feeling of finding an old photo in a shoebox`,
    'golden-hour': `Golden hour photography at its most beautiful. Warm backlight creating a halo glow around the subjects. Sun flares and light rays. Long shadows. Everything bathed in amber and honey tones. The kind of magic-hour light that makes everything look divine`,
    'film-grain': `Shot on 35mm analog film. Visible film grain texture, slightly soft focus. Kodak Portra 400 color palette — warm skin tones, pastel backgrounds. Slight light leak on one edge. The authentic, imperfect beauty of analog photography`,
    'watercolor': `Beautiful watercolor painting style. Soft wet-on-wet technique with paint bleeding at edges. Delicate brushstrokes visible. Paper texture shows through in lighter areas. Dreamy and ethereal, like an illustration in a children's book about love`,
    'studio-portrait': `Professional studio portrait photography. Clean gradient backdrop (warm gray to white). Soft Rembrandt lighting with a large softbox. Catch lights in eyes. Sharp focus on faces, gentle skin retouching. Magazine-quality but emotionally raw`,
    'anime': `Japanese anime art style, Studio Ghibli-inspired warmth. Soft cel-shading, big expressive eyes glistening with emotion. Hand-painted watercolor backgrounds. Cherry blossoms or light particles floating in the air. Beautiful, emotional anime scene`,
    'oil-painting': `Classical oil painting style reminiscent of Rembrandt or Vermeer. Rich, layered paint textures visible on canvas. Dramatic chiaroscuro lighting from one side. Deep, warm color palette with golden undertones. Museum-quality fine art`,
  };

  const settingText = st ? `Setting: ${st.label} — ${st.desc.toLowerCase()}.` : '';
  const moodText = m ? `The emotional tone is ${m.label.toLowerCase()} — this should be felt in their expressions, body language, and the overall atmosphere.` : '';
  const detailsText = details.length > 0 ? `Include these details: ${details.join(', ')}.` : '';
  const customText = custom ? `Additional details: ${custom}.` : '';

  return `Create a deeply emotional photograph/image of an adult version of a person hugging their younger childhood self.

THE ADULT: ${adultDesc || 'A person in their 30s'}
THE CHILD: ${childDesc || 'The same person as a young child (around 5-7 years old)'}

The adult is kneeling down or bending to embrace the child version of themselves. Their eyes are closed, holding the child tightly as if they could protect them from everything that's coming. The child hugs back, small arms wrapped around the adult's neck. This is the hug you wish you could give your younger self.

${styleInstructions[style] || styleInstructions.cinematic}

${settingText}

${moodText}

${detailsText}

${customText}

Composition: The two figures should be the clear focal point, filling most of the frame. Shot from a slightly low angle to emphasize the emotional weight. The background should complement but not distract — slightly blurred or simplified. Leave some negative space above for breathing room.

CRITICAL: The adult and child must look like the SAME person at different ages. Similar facial features, same hair color, similar mannerisms. The child should look exactly how you'd imagine the adult looked as a kid. This detail is what makes the image emotionally devastating.

Technical: High resolution, photorealistic (unless artistic style selected), 3:4 portrait aspect ratio. If using ChatGPT/DALL-E, upload a current photo of yourself for the best results — the AI will age-regress your features for the child version.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 3).join('\n') + '\n\n...';
}

export default function HugYoungerSelfGenerator() {
  const [step, setStep] = useState(1);
  const [adultDesc, setAdultDesc] = useState('');
  const [childDesc, setChildDesc] = useState('');
  const [style, setStyle] = useState('');
  const [setting, setSetting] = useState('');
  const [mood, setMood] = useState('');
  const [details, setDetails] = useState([]);
  const [custom, setCustom] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (adultDesc && style) ? buildPrompt({ adultDesc, childDesc, style, setting, mood, details, custom }) : '';

  const toggleDetail = (item) => {
    setDetails(prev =>
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
        body: JSON.stringify({ email, source: 'hug-younger-self-generator', referrer: document.referrer || '' }),
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

  const title = 'AI "Hug My Younger Self" Generator — Create the Viral AI Photo Trend (Free)';
  const description = 'Generate the perfect AI prompt for the viral "Hug My Younger Self" trend. Choose your style, setting, and mood. Works with ChatGPT, Gemini, DALL-E, and Midjourney. The most emotional AI trend of 2026.';
  const url = 'https://www.midastools.co/hug-younger-self-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Hug My Younger Self Prompt Generator',
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
      { '@type': 'Question', name: 'How do I create a "Hug My Younger Self" AI photo?', acceptedAnswer: { '@type': 'Answer', text: 'Upload a current photo of yourself to ChatGPT (GPT-4o) or Google Gemini along with a childhood photo. Use a detailed prompt describing the scene — our generator creates the perfect prompt for you. The AI will create an image of your adult self hugging your childhood self.' } },
      { '@type': 'Question', name: 'Which AI tool works best for the Hug My Younger Self trend?', acceptedAnswer: { '@type': 'Answer', text: 'Google Gemini currently produces the most viral results for this trend. ChatGPT with GPT-4o is also excellent, especially when you upload both a current and childhood photo. Midjourney v7 works for artistic interpretations but cannot use reference photos.' } },
      { '@type': 'Question', name: 'Is the Hug My Younger Self AI trend still popular?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! The "Hug My Younger Self" trend exploded in early 2026 and continues to be one of the most shared AI image trends on TikTok, Instagram, and X. It resonates because it triggers genuine emotion — nostalgia, self-compassion, and the universal wish to comfort our younger selves.' } },
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
        <meta name="keywords" content="hug my younger self ai, hug younger self prompt, ai hug childhood photo, gemini hug younger self, chatgpt hug myself as child, viral ai photo trend 2026, hug your inner child ai, ai nostalgia photo generator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🤗</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            &ldquo;Hug My Younger Self&rdquo; AI Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Create the viral AI photo of you hugging your childhood self. Pick your style, set the mood, and get the perfect prompt for ChatGPT, Gemini, or Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: '#FDF2F8', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#DB2777' }}>The #1 viral AI trend of 2026</span>
            <span style={{ padding: '6px 14px', background: '#EEF2FF', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Works with Gemini, ChatGPT & Midjourney</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>Step {step} of {totalSteps}</span>
            <span style={{ fontSize: 13, color: '#9CA3AF' }}>{Math.round(progress)}% complete</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 99 }}>
            <div style={{ height: 6, background: '#7C3AED', borderRadius: 99, width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Step 1: Describe Yourself */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Describe Yourself</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Tell us about you now and as a child — this makes the image feel real.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>You Now (Adult) *</label>
            <input
              type="text"
              value={adultDesc}
              onChange={e => setAdultDesc(e.target.value)}
              placeholder='e.g. "a 32-year-old woman with curly brown hair, glasses, wearing a blue sweater"'
              maxLength={200}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 16, outline: 'none', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>You as a Child (optional)</label>
            <input
              type="text"
              value={childDesc}
              onChange={e => setChildDesc(e.target.value)}
              placeholder='e.g. "same person at age 6, pigtails, missing front tooth, striped t-shirt"'
              maxLength={200}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 12, outline: 'none', boxSizing: 'border-box' }}
            />
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 24px' }}>
              Pro tip: Upload both a current photo AND a childhood photo to Gemini or ChatGPT for the most realistic results.
            </p>

            <button
              onClick={() => adultDesc.trim() && setStep(2)}
              disabled={!adultDesc.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: adultDesc.trim() ? '#7C3AED' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: adultDesc.trim() ? 'pointer' : 'default' }}
            >
              Next: Choose Photo Style →
            </button>
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Photo Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Each style creates a completely different emotional feel.</p>

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
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? '#7C3AED' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Setting & Mood →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Setting + Mood + Details */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Set the Scene</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Where does this moment happen? How does it feel?</p>

            {/* Setting */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Setting</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SETTINGS.map(st => (
                  <button
                    key={st.id}
                    onClick={() => setSetting(st.id)}
                    style={{
                      padding: '12px 14px',
                      border: setting === st.id ? '2px solid #7C3AED' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: setting === st.id ? '#F5F3FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{st.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{st.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Emotional Tone</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {MOODS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    style={{
                      padding: '12px 14px',
                      border: mood === m.id ? '2px solid #7C3AED' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: mood === m.id ? '#F5F3FF' : '#FFF',
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

            {/* Details */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                Emotional Details ({details.length}/6)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {DETAILS.map(item => {
                  const sel = details.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleDetail(item)}
                      style={{
                        padding: '8px 14px',
                        fontSize: 13,
                        fontWeight: sel ? 700 : 500,
                        color: sel ? '#FFF' : '#374151',
                        background: sel ? '#7C3AED' : '#FFF',
                        border: sel ? '2px solid #7C3AED' : '1.5px solid #D1D5DB',
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

            {/* Custom */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Custom Details</label>
              <input
                type="text"
                value={custom}
                onChange={e => setCustom(e.target.value)}
                placeholder={'e.g. "we both have our grandmother\'s necklace" or "autumn, back-to-school season"'}
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#7C3AED', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card */}
            <div style={{
              background: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #7C3AED 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🤗</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#C4B5FD', marginBottom: 8 }}>YOUR MOMENT</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>Hugging Your Younger Self</div>
              <div style={{ fontSize: 15, color: '#DDD6FE', marginBottom: 12 }}>{adultDesc}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                {setting && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {SETTINGS.find(s => s.id === setting)?.label}
                </span>}
                {mood && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {MOODS.find(m => m.id === mood)?.icon} {MOODS.find(m => m.id === mood)?.label}
                </span>}
              </div>

              {details.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#C4B5FD', marginBottom: 6 }}>DETAILS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {details.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#A78BFA' }}>midastools.co/hug-younger-self-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get 5 bonus &ldquo;hug your younger self&rdquo; prompt variations free.
                </p>

                <div style={{
                  background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden',
                }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>
                    {getPreview(prompt)}
                  </pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>🔒 Full prompt hidden</span>
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
                    style={{ width: '100%', padding: '16px', fontSize: 17, fontWeight: 700, color: '#FFF', background: loading ? '#C4B5FD' : '#7C3AED', border: 'none', borderRadius: 99, cursor: loading ? 'default' : 'pointer' }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>No spam ever. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              <div style={{ background: '#FFF', border: '2px solid #7C3AED', borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#7C3AED' }}>Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{ padding: '8px 20px', fontSize: 14, fontWeight: 600, color: '#FFF', background: copied ? '#059669' : '#7C3AED', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? '✓ Copied!' : 'Copy Prompt'}
                  </button>
                </div>
                <pre style={{ fontSize: 14, color: '#374151', whiteSpace: 'pre-wrap', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, lineHeight: 1.6 }}>
                  {prompt}
                </pre>

                <div style={{ marginTop: 24, padding: 20, background: '#F5F3FF', borderRadius: 12, border: '1px solid #DDD6FE' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#7C3AED', margin: '0 0 8px' }}>How to use this prompt:</h4>
                  <ol style={{ fontSize: 14, color: '#374151', margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
                    <li><strong>Google Gemini:</strong> Upload a current photo + childhood photo, then paste the prompt</li>
                    <li><strong>ChatGPT (GPT-4o):</strong> Upload your photo and paste the prompt — it will create the child version</li>
                    <li><strong>Midjourney:</strong> Paste the prompt as-is (no photo upload, but great artistic results)</li>
                  </ol>
                </div>

                {/* Upsell */}
                <div style={{ marginTop: 24, padding: 24, background: '#FFF', borderRadius: 12, border: '1px solid #E5E7EB', textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: 16, margin: '0 0 4px' }}>Want 150+ more AI image prompts?</p>
                  <p style={{ color: '#6B7280', fontSize: 14, margin: '0 0 16px' }}>Pet portraits, action figures, Ghibli art, headshots, and more</p>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href={STRIPE_IMAGE_PACK} style={{ padding: '12px 24px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#7C3AED', borderRadius: 99, textDecoration: 'none' }}>
                      Image Pack — $29
                    </a>
                    <a href={STRIPE_BUNDLE} style={{ padding: '12px 24px', fontSize: 15, fontWeight: 700, color: '#7C3AED', background: '#FFF', border: '2px solid #7C3AED', borderRadius: 99, textDecoration: 'none' }}>
                      All 21 Kits — $97
                    </a>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}
            >
              ← Back to Settings
            </button>
          </div>
        )}

        {/* Social Proof Section */}
        <div style={{ marginTop: 48, padding: 40, background: '#FDF2F8', borderRadius: 20, textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#111827' }}>The Trend That Made the Internet Cry</h2>
          <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            The &ldquo;Hug My Younger Self&rdquo; AI trend went viral because it touches something deeply human — the wish to comfort the child you once were. Create yours with the perfect prompt.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#7C3AED' }}>8</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>Photo Styles</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#7C3AED' }}>8</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>Scene Settings</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#7C3AED' }}>20</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>Emotional Details</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {faqLd.mainEntity.map((q, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 6px' }}>{q.name}</h3>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Cross-links */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>More AI Image Tools</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            {[
              { href: '/ghibli-prompt-generator', text: 'AI Ghibli Art Generator — Create Miyazaki-style art' },
              { href: '/pet-portrait-generator', text: 'AI Pet Portrait Generator — Turn your pet into art' },
              { href: '/action-figure-generator', text: 'AI Action Figure Generator — Turn yourself into a toy' },
              { href: '/image-prompt-builder', text: 'AI Image Prompt Builder — 25+ styles' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', padding: '14px 18px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, textDecoration: 'none', color: '#3B5FFF', fontWeight: 600, fontSize: 14 }}>
                {link.text} →
              </Link>
            ))}
            <a href={STRIPE_IMAGE_PACK} style={{ display: 'block', padding: '14px 18px', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 10, textDecoration: 'none', color: '#3B5FFF', fontWeight: 600, fontSize: 14 }}>
              AI Image Prompt Pack — 150+ prompts for $29 →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
