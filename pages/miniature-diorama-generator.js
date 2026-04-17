import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gy90j22B4Cw9UXcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── DIORAMA STYLES ───────────────────────────────── */
const STYLES = [
  { id: 'tilt-shift-city', label: 'Tilt-Shift City', icon: '\u{1F3D9}\uFE0F', desc: 'Urban miniature with bokeh blur', color: '#3B82F6' },
  { id: 'tiny-craft-world', label: 'Tiny Craft World', icon: '\u{1F9F6}', desc: 'Handmade felt & paper diorama', color: '#EC4899' },
  { id: 'model-railroad', label: 'Model Railroad', icon: '\u{1F682}', desc: 'Classic HO-scale train layout', color: '#F59E0B' },
  { id: 'terrarium-garden', label: 'Terrarium Garden', icon: '\u{1FAB4}', desc: 'Living miniature ecosystem', color: '#059669' },
  { id: 'snow-globe', label: 'Snow Globe', icon: '\u{1F3D4}\uFE0F', desc: 'Enclosed winter wonderland', color: '#6366F1' },
  { id: 'dollhouse-interior', label: 'Dollhouse Interior', icon: '\u{1F3E0}', desc: 'Perfectly furnished tiny rooms', color: '#F97316' },
  { id: 'pocket-beach', label: 'Pocket Beach Resort', icon: '\u{1F3D6}\uFE0F', desc: 'Tabletop tropical paradise', color: '#06B6D4' },
  { id: 'miniature-tokyo', label: 'Miniature Tokyo Street', icon: '\u{1F3EE}', desc: 'Neon-lit Japanese alleyway', color: '#EF4444' },
];

/* ── SCENE SETTINGS ───────────────────────────────── */
const SCENES = [
  { id: 'cozy-village', label: 'Cozy Village', desc: 'Thatched roofs, winding lanes, chimney smoke' },
  { id: 'bustling-city', label: 'Bustling City Corner', desc: 'Tiny cars, crosswalks, storefronts' },
  { id: 'ocean-cove', label: 'Ocean Cove', desc: 'Rocky shore, lighthouse, crashing waves' },
  { id: 'mountain-cabin', label: 'Mountain Cabin', desc: 'Pine trees, snow-capped peaks, firewood' },
  { id: 'japanese-garden', label: 'Japanese Garden', desc: 'Koi pond, bonsai, stone lanterns' },
  { id: 'european-cafe', label: 'European Caf\u00E9', desc: 'Cobblestone patio, striped awnings' },
  { id: 'tropical-island', label: 'Tropical Island', desc: 'Palm trees, turquoise water, white sand' },
  { id: 'winter-wonderland', label: 'Winter Wonderland', desc: 'Fresh snow, frozen lake, warm lights' },
];

/* ── MINIATURE DETAILS ────────────────────────────── */
const DETAILS = [
  'Tiny People', 'Vintage Cars', 'String Lights', 'Miniature Trees', 'Cobblestone Path',
  'Wooden Bench', 'Flower Boxes', 'Street Lamps', 'Winding River', 'Train Tracks',
  'Moss & Ferns', 'Hanging Laundry', 'Market Stalls', 'Stepping Stones', 'Bird Bath',
  'Mailbox', 'Bicycle', 'Cafe Tables', 'Paper Lanterns', 'Smoke from Chimney',
];

/* ── LIGHTING ─────────────────────────────────────── */
const LIGHTING = [
  { id: 'golden-hour', label: 'Golden Hour Warm', icon: '\u{1F305}' },
  { id: 'overcast-soft', label: 'Overcast Soft', icon: '\u{1F325}\uFE0F' },
  { id: 'night-glow', label: 'Night Glow', icon: '\u{1F303}' },
  { id: 'morning-mist', label: 'Morning Mist', icon: '\u{1F32B}\uFE0F' },
  { id: 'dramatic-sunset', label: 'Dramatic Sunset', icon: '\u{1F307}' },
  { id: 'candlelit', label: 'Candlelit', icon: '\u{1F56F}\uFE0F' },
];

/* ── PROMPT BUILDER ──────────────────────────────── */
function buildPrompt({ subject, style, scene, lighting, details, custom }) {
  const s = STYLES.find(x => x.id === style);
  const sc = SCENES.find(x => x.id === scene);
  const l = LIGHTING.find(x => x.id === lighting);

  const styleInstructions = {
    'tilt-shift-city': `as a tilt-shift miniature city photograph. The scene appears to be a tiny handcrafted urban model — extreme shallow depth of field with heavy bokeh blur on the top and bottom edges, razor-sharp focus on the center subject. Buildings look like painted wooden blocks, streets like textured paper`,
    'tiny-craft-world': `as a handmade craft diorama made from felt, paper, wire, and clay. Every element looks lovingly hand-cut and assembled — visible stitching on fabric hills, pipe-cleaner trees, cotton-ball clouds, cardboard buildings with painted windows`,
    'model-railroad': `as a classic HO-scale model railroad layout. Incredible attention to miniature detail — ballasted track, static grass, hand-painted figurines, scratch-built structures with weathering. The scene sits on a plywood base with visible scenery edges`,
    'terrarium-garden': `as a living terrarium diorama inside a glass vessel. Real moss, tiny ferns, pebble pathways, and miniature resin figures. Condensation on the glass walls, natural sunlight filtering through. The ecosystem feels alive and self-contained`,
    'snow-globe': `as a snow globe diorama. The scene is enclosed in a glass sphere on an ornate base — tiny snowflakes suspended in mid-air, warm light glowing from miniature windows, the whole world captured in a palm-sized crystal dome`,
    'dollhouse-interior': `as a perfectly furnished dollhouse room photographed from above with one wall removed. 1:12 scale miniature furniture, tiny books on shelves, working-scale light fixtures, handmade rugs and curtains. Every detail is impeccably crafted`,
    'pocket-beach': `as a miniature beach resort diorama that fits on a desk. Resin water with embedded wave texture, real sand, tiny beach umbrellas made from toothpicks and paper, palm trees from twisted wire and green sponge. Warm tropical lighting`,
    'miniature-tokyo': `as a miniature Japanese street alley at night. Tiny neon signs glow in handwritten kanji, matchbox-sized izakaya with warm light spilling out, miniature vending machines, wet cobblestones reflecting colored light. Atmospheric and moody`,
  };

  const sceneText = sc ? `The setting is ${sc.label.toLowerCase()} — ${sc.desc.toLowerCase()}.` : '';
  const lightingText = l ? `Lighting: ${l.label} — this defines the entire atmosphere of the diorama.` : '';
  const detailsText = details.length > 0
    ? `Include these miniature details: ${details.join(', ')}.`
    : '';
  const customText = custom ? `Additional details: ${custom}.` : '';

  return `Create a photograph of ${subject || 'a miniature scene'} ${styleInstructions[style] || styleInstructions['tilt-shift-city']}.

${sceneText}

${lightingText}

${detailsText}

${customText}

Art direction: This must look like a real handcrafted miniature model photographed with a macro lens. Visible craft materials — painted wood, twisted wire, molded clay, cast resin, textured paper. Scale indicators: matchbox-sized buildings, fingertip-sized trees, tabletop-sized world. Tilt-shift photography effect with extremely shallow depth of field — razor-sharp selective focus on the center subject, creamy bokeh blur fading on all edges. The color palette is warm and inviting — "I want to pick this up and put it on my desk" aesthetic.

Technical: Ultra high resolution, macro photography, f/2.8 aperture for shallow DOF, slight lens distortion at edges, natural film grain. The scene should feel tangible, tactile, and impossibly tiny — like peering into a secret little world.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function MiniatureDioramaGenerator() {
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState('');
  const [scene, setScene] = useState('');
  const [lighting, setLighting] = useState('');
  const [details, setDetails] = useState([]);
  const [custom, setCustom] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (subject && style) ? buildPrompt({ subject, style, scene, lighting, details, custom }) : '';

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
        body: JSON.stringify({ email, source: 'miniature-diorama-generator', referrer: document.referrer || '' }),
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

  const ACCENT = '#7C3AED';
  const ACCENT_BG = '#F5F3FF';
  const ACCENT_LIGHT = '#C4B5FD';
  const ACCENT_DARK = '#5B21B6';
  const ACCENT_GRADIENT = 'linear-gradient(135deg, #5B21B6 0%, #6D28D9 50%, #7C3AED 100%)';

  const title = 'AI Miniature Diorama Generator \u2014 Create Tiny Worlds with AI Prompts (Free)';
  const description = 'Build breathtaking miniature diorama AI art prompts. Choose from 8 diorama styles, 8 settings, custom lighting, and 20 tiny details. Works with ChatGPT, DALL-E, Midjourney. Tilt-shift, craft, and macro photography effects.';
  const url = 'https://www.midastools.co/miniature-diorama-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Miniature Diorama Prompt Generator',
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
      { '@type': 'Question', name: 'How do I create miniature diorama AI images?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free generator to build a detailed diorama prompt, then paste it into ChatGPT (GPT-4o), DALL-E, or Midjourney. The prompt instructs the AI to create images that look like real handcrafted miniature models photographed with a macro lens.' } },
      { '@type': 'Question', name: 'What is tilt-shift AI photography?', acceptedAnswer: { '@type': 'Answer', text: 'Tilt-shift photography makes real scenes look like miniature models by using selective focus and shallow depth of field. Our generator creates prompts that replicate this effect in AI-generated images, making any scene look like a tiny handcrafted diorama.' } },
      { '@type': 'Question', name: 'Which AI tool creates the best miniature diorama images?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o and Midjourney v7 both excel at creating realistic miniature diorama images. GPT-4o is best for photorealistic macro photography effects, while Midjourney produces stunning artistic interpretations of tiny worlds.' } },
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
        <meta name="keywords" content="ai miniature diorama, tilt shift ai generator, miniature world ai, ai diorama prompt, miniature photography ai, tiny world generator, macro diorama ai, craft diorama prompt, midjourney diorama, chatgpt miniature" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{'\u{1F3D7}\uFE0F'}</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Miniature Diorama Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Create breathtaking tiny worlds that look like real handcrafted miniatures. Pick a diorama style, set the scene, and get the perfect prompt for ChatGPT, DALL-E, or Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: ACCENT_BG, borderRadius: 99, fontSize: 13, fontWeight: 600, color: ACCENT }}>Trending on TikTok & Instagram</span>
            <span style={{ padding: '6px 14px', background: '#EEF2FF', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#3B5FFF' }}>Works with ChatGPT & Midjourney</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: ACCENT }}>Step {step} of {totalSteps}</span>
            <span style={{ fontSize: 13, color: '#9CA3AF' }}>{Math.round(progress)}% complete</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 99 }}>
            <div style={{ height: 6, background: ACCENT, borderRadius: 99, width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Step 1: Subject / Scene */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>What Tiny World Are You Building?</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Describe your subject or scene — this is the heart of your miniature diorama.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Subject / Scene *</label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder='e.g. "a cozy bookshop on a rainy street corner" or "a Japanese ramen stall at night"'
              maxLength={200}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 12, outline: 'none', boxSizing: 'border-box' }}
            />
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 24px' }}>
              Tip: Be specific about the main focal point. Think about what you'd want to see through a magnifying glass.
            </p>

            <button
              onClick={() => subject.trim() && setStep(2)}
              disabled={!subject.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: subject.trim() ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: subject.trim() ? 'pointer' : 'default' }}
            >
              Next: Choose Diorama Style {'\u2192'}
            </button>
          </div>
        )}

        {/* Step 2: Diorama Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Diorama Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Each style creates a completely different miniature aesthetic.</p>

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
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Details & Atmosphere {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Scene + Lighting + Details */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Details & Atmosphere</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Choose a setting, lighting, and the tiny details that bring your diorama to life.</p>

            {/* Scene Setting */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Scene Setting</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SCENES.map(sc => (
                  <button
                    key={sc.id}
                    onClick={() => setScene(sc.id)}
                    style={{
                      padding: '12px 14px',
                      border: scene === sc.id ? `2px solid ${ACCENT}` : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: scene === sc.id ? ACCENT_BG : '#FFF',
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

            {/* Lighting */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Lighting</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {LIGHTING.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLighting(l.id)}
                    style={{
                      padding: '12px 14px',
                      border: lighting === l.id ? `2px solid ${ACCENT}` : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: lighting === l.id ? ACCENT_BG : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{l.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Miniature Details */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                Miniature Details ({details.length}/6)
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
                        background: sel ? ACCENT : '#FFF',
                        border: sel ? `2px solid ${ACCENT}` : '1.5px solid #D1D5DB',
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
                placeholder='e.g. "a tiny cat sleeping on the roof" or "steam rising from a teacup pond"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: ACCENT, border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Diorama Prompt {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card */}
            <div style={{
              background: ACCENT_GRADIENT,
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>{'\u{1F3D7}\uFE0F'}</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: ACCENT_LIGHT, marginBottom: 8 }}>YOUR TINY WORLD</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>{subject}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                {scene && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {SCENES.find(s => s.id === scene)?.label}
                </span>}
                {lighting && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {LIGHTING.find(l => l.id === lighting)?.icon} {LIGHTING.find(l => l.id === lighting)?.label}
                </span>}
              </div>

              {details.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: ACCENT_LIGHT, marginBottom: 6 }}>MINIATURE DETAILS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {details.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: ACCENT_LIGHT }}>midastools.co/miniature-diorama-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Diorama Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get 5 bonus miniature diorama prompt variations free.
                </p>

                <div style={{
                  background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden',
                }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>
                    {getPreview(prompt)}
                  </pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: ACCENT }}>Full prompt hidden</span>
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
                    style={{ width: '100%', padding: '16px', fontSize: 17, fontWeight: 700, color: '#FFF', background: loading ? ACCENT_LIGHT : ACCENT, border: 'none', borderRadius: 99, cursor: loading ? 'default' : 'pointer' }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Diorama Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>No spam ever. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              <div style={{ background: '#FFF', border: `2px solid ${ACCENT}`, borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: ACCENT }}>Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? ACCENT : '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: ACCENT_BG, borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: ACCENT_DARK, margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: ACCENT_DARK, fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Midjourney</strong></li>
                    <li>Paste this prompt and hit send</li>
                    <li>For extra realism, add &quot;macro photography, tilt-shift&quot; to the prompt</li>
                    <li>Share your tiny world masterpiece!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setSubject(''); setStyle(''); setScene(''); setLighting(''); setDetails([]); setCustom(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: ACCENT, background: ACCENT_BG, border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Diorama
                </button>

                <div style={{ background: ACCENT_GRADIENT, borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: ACCENT_LIGHT, margin: '0 0 20px' }}>Dioramas, Ghibli, action figures, trading cards, pet portraits, Funko Pops, pixel art, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: ACCENT, fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: ACCENT_LIGHT, margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 21 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {!unlocked && (
              <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}>
                {'\u2190'} Back to Details & Atmosphere
              </button>
            )}
          </div>
        )}

        {/* Social Proof & SEO Content */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Tiny Worlds, Massive Detail</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Miniature diorama AI art is the latest obsession on TikTok and Instagram. Create images that look like real handcrafted models — tilt-shift blur, craft materials, and impossibly cute tiny scenes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Diorama Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Scene Settings</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>20</div><div style={{ fontSize: 13, color: '#6B7280' }}>Miniature Details</div></div>
          </div>
        </div>

        {/* FAQ for SEO */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I create miniature diorama AI images?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator above to build a detailed diorama prompt. Then paste it into ChatGPT (GPT-4o works best), DALL-E, or Midjourney. The prompt instructs the AI to create images that look like real handcrafted miniature models photographed with a macro lens.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>What is tilt-shift AI photography?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Tilt-shift photography makes real scenes look like miniature models by using selective focus and shallow depth of field. Our generator creates prompts that replicate this effect in AI-generated images, with creamy bokeh blur on edges and razor-sharp focus on the center subject.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Which AI tool creates the best miniature diorama images?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>ChatGPT with GPT-4o and Midjourney v7 both excel at creating realistic miniature diorama images. GPT-4o is best for photorealistic macro photography effects, while Midjourney produces stunning artistic interpretations of tiny worlds.</p>
          </div>
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style prompts {'\u2192'}
            </Link>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy {'\u2192'}
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
