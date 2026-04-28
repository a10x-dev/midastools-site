import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── PET TYPES ──────────────────────────────────────── */
const PET_TYPES = [
  { id: 'dog', label: 'Dog', icon: '🐕', color: '#F59E0B' },
  { id: 'cat', label: 'Cat', icon: '🐈', color: '#8B5CF6' },
  { id: 'bird', label: 'Bird', icon: '🦜', color: '#10B981' },
  { id: 'rabbit', label: 'Rabbit', icon: '🐇', color: '#EC4899' },
  { id: 'hamster', label: 'Hamster', icon: '🐹', color: '#F97316' },
  { id: 'fish', label: 'Fish', icon: '🐠', color: '#3B82F6' },
  { id: 'reptile', label: 'Reptile', icon: '🦎', color: '#22C55E' },
  { id: 'other', label: 'Other', icon: '🐾', color: '#6B7280' },
];

/* ── ART STYLES ─────────────────────────────────────── */
const STYLES = [
  { id: 'royal', label: 'Royal Portrait', icon: '👑', desc: 'Renaissance royalty, velvet robes', color: '#7C3AED' },
  { id: 'ghibli', label: 'Studio Ghibli', icon: '🏯', desc: 'Miyazaki anime style', color: '#059669' },
  { id: 'action-figure', label: 'Action Figure', icon: '🧸', desc: 'Packaged collectible toy', color: '#F97316' },
  { id: 'superhero', label: 'Superhero', icon: '🦸', desc: 'Caped hero, comic style', color: '#EF4444' },
  { id: 'pixel', label: 'Pixel Art', icon: '🎮', desc: 'Retro 16-bit game sprite', color: '#06B6D4' },
  { id: 'watercolor', label: 'Watercolor', icon: '🎨', desc: 'Soft, elegant painting', color: '#F472B6' },
  { id: 'cyberpunk', label: 'Cyberpunk', icon: '🤖', desc: 'Neon-lit, futuristic', color: '#A855F7' },
  { id: 'human', label: 'As a Human', icon: '🧑', desc: 'What they\'d look like as a person', color: '#3B82F6' },
  { id: 'cartoon', label: 'Disney/Pixar', icon: '🏰', desc: '3D animated movie character', color: '#FBBF24' },
  { id: 'trading-card', label: 'Trading Card', icon: '🃏', desc: 'Holographic collectible card', color: '#14B8A6' },
  { id: 'oil-painting', label: 'Oil Painting', icon: '🖼️', desc: 'Classical fine art', color: '#B45309' },
  { id: 'funko', label: 'Funko Pop', icon: '👤', desc: 'Vinyl figure, big head', color: '#DC2626' },
];

/* ── BACKGROUNDS ────────────────────────────────────── */
const BACKGROUNDS = [
  { id: 'throne', label: 'Throne Room', desc: 'Velvet curtains, gold frame' },
  { id: 'garden', label: 'Enchanted Garden', desc: 'Flowers, butterflies, sunlight' },
  { id: 'space', label: 'Outer Space', desc: 'Stars, nebulas, cosmic' },
  { id: 'city', label: 'City Skyline', desc: 'Rooftop at sunset' },
  { id: 'forest', label: 'Magical Forest', desc: 'Ancient trees, fireflies' },
  { id: 'beach', label: 'Tropical Beach', desc: 'Ocean waves, palm trees' },
  { id: 'studio', label: 'Photo Studio', desc: 'Clean backdrop, pro lighting' },
  { id: 'home', label: 'Cozy Home', desc: 'Fireplace, blankets, warm' },
];

/* ── ACCESSORIES ────────────────────────────────────── */
const ACCESSORIES = [
  'Crown', 'Cape', 'Bow Tie', 'Sunglasses', 'Top Hat', 'Scarf',
  'Flower Crown', 'Bandana', 'Sweater', 'Armor', 'Wizard Hat', 'Tiara',
  'Necklace', 'Boots', 'Wings', 'Backpack', 'Guitar', 'Sword',
];

/* ── PROMPT BUILDER ──────────────────────────────────── */
function buildPrompt({ petName, petType, breed, style, background, accessories, extra }) {
  const s = STYLES.find(x => x.id === style);
  const bg = BACKGROUNDS.find(x => x.id === background);

  const petDesc = breed ? `a ${breed} ${PET_TYPES.find(x => x.id === petType)?.label?.toLowerCase() || 'pet'}` : `a ${PET_TYPES.find(x => x.id === petType)?.label?.toLowerCase() || 'pet'}`;
  const petNameText = petName ? ` named "${petName}"` : '';

  const styleInstructions = {
    'royal': `a regal Renaissance-style portrait of ${petDesc}${petNameText} dressed as royalty. The pet should be wearing an ornate velvet robe with gold embroidery, a jeweled crown, and sitting on an elaborate golden throne. Painted in the style of a 17th-century Dutch master portrait — rich oil painting textures, dramatic Rembrandt lighting, dark background with a golden frame visible at the edges. The pet should have a dignified, noble expression. Include a royal crest or coat of arms in the corner`,
    'ghibli': `${petDesc}${petNameText} drawn in the iconic Studio Ghibli animation style by Hayao Miyazaki. Soft watercolor textures, cel-shaded lighting, expressive anime eyes that convey personality. The pet should look like a beloved Ghibli character — warm, magical, full of life. Hand-painted aesthetic with visible brushwork`,
    'action-figure': `a hyper-realistic product photo of ${petDesc}${petNameText} as a collectible action figure in a clear plastic blister pack on a printed cardboard backing. The packaging has the pet's name "${petName || 'Super Pet'}" in bold letters. The figure should capture the pet's personality with miniature accessories in separate compartments. Professional toy photography, clean white background`,
    'superhero': `${petDesc}${petNameText} as a superhero in a dynamic comic book style. The pet should be wearing a custom superhero costume with a cape flowing in the wind, a mask, and a logo on the chest with the letter "${(petName || 'P')[0]}". Action pose, dramatic lighting, comic book halftone dots in the background, speech bubble that says "${petName || 'Super Pet'}!" Bold linework, vibrant colors`,
    'pixel': `${petDesc}${petNameText} as a 16-bit pixel art character, retro video game style. The pet should be rendered in a detailed pixel art style with a small, animated-looking sprite. Include a retro game UI frame with a health bar, the name "${petName || 'PET'}" in pixel font, and a score counter. Nostalgic gaming aesthetic, clean pixel edges, limited color palette`,
    'watercolor': `a delicate watercolor portrait of ${petDesc}${petNameText}. Soft, flowing paint with visible wet-on-wet techniques, gentle color bleeding, white paper showing through. The style should be fine art quality — the kind you'd frame and hang in a gallery. Light, airy composition with botanical elements like pressed flowers around the edges. Elegant and timeless`,
    'cyberpunk': `${petDesc}${petNameText} in a cyberpunk setting. The pet should have subtle neon-lit cybernetic enhancements — a glowing eye, tech-enhanced collar, holographic tag. Futuristic dark city background with rain-slicked streets reflecting neon signs. Blade Runner aesthetic, purple and cyan color palette, atmospheric fog. The pet looks like the coolest creature in the dystopia`,
    'human': `an AI-imagined portrait of what ${petDesc}${petNameText} would look like as a human being. Capture the pet's personality, energy, and distinctive features translated into human characteristics — if the pet is playful, the human version should look fun and energetic. If regal, they should look sophisticated. Match the pet's coloring in hair/eye color. Photorealistic portrait, studio lighting, the human should somehow unmistakably remind you of the original pet`,
    'cartoon': `${petDesc}${petNameText} as a Disney/Pixar 3D animated movie character. Big expressive eyes, soft fur rendering, that signature Pixar subsurface scattering glow. The pet should look like the star of their own animated film — full of personality and emotion. Clean, bright lighting, slightly exaggerated features for cuteness, movie poster quality`,
    'trading-card': `a holographic collectible trading card featuring ${petDesc}${petNameText}. The card should have a shiny holographic border with rainbow light effects, the pet in a dramatic pose in the center, stats at the bottom (Cuteness: 99, Loyalty: 100, Mischief: 87, Speed: 75), the name "${petName || 'Legendary Pet'}" in metallic gold text at the top, a rarity star rating (5 stars), and "LEGENDARY" badge. Pokemon/Yu-Gi-Oh card aesthetic`,
    'oil-painting': `a classical oil painting portrait of ${petDesc}${petNameText} in the style of the Old Masters. Rich, luminous oil paint with visible impasto brushstrokes, dramatic chiaroscuro lighting. The pet should be posed like a subject in a Vermeer or Rembrandt painting — dignified, timeless, with incredible attention to fur/feather texture. Gold ornate frame visible at the edges. Museum-quality fine art`,
    'funko': `a Funko Pop vinyl figure of ${petDesc}${petNameText}. Oversized head, small body, black dot eyes, no mouth — classic Funko Pop proportions but capturing the pet's distinctive features and coloring. Displayed in the classic Funko Pop box with the character window, "${petName || 'Pet'}" on the box header. Clean white background, product photography style`,
  };

  const bgText = bg ? `Background: ${bg.desc}.` : '';
  const accText = accessories.length > 0 ? `The pet is wearing/has: ${accessories.join(', ')}.` : '';
  const extraText = extra ? `Additional details: ${extra}.` : '';

  return `${styleInstructions[style] || styleInstructions.royal}

${bgText}

${accText}

${extraText}

The portrait should capture this specific pet's unique personality, markings, and charm. Every detail should make the owner think "that's MY pet!" High resolution, professional quality, ready to print and frame.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function PetPortraitGenerator() {
  const [step, setStep] = useState(1);
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [style, setStyle] = useState('');
  const [background, setBackground] = useState('');
  const [accessories, setAccessories] = useState([]);
  const [extra, setExtra] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (petType && style) ? buildPrompt({ petName, petType, breed, style, background, accessories, extra }) : '';

  const toggleAccessory = (item) => {
    setAccessories(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : prev.length < 5 ? [...prev, item] : prev
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
        body: JSON.stringify({ email, source: 'pet-portrait-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Pet Portrait Generator — Turn Your Pet Into Art (Free Prompt Builder)';
  const description = 'Create stunning AI pet portraits with the perfect prompt. Royal portraits, Ghibli style, action figures, trading cards, Funko Pops & more. Works with ChatGPT, DALL-E, Midjourney. The #1 pet AI trend of 2026.';
  const url = 'https://www.midastools.co/pet-portrait-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Pet Portrait Prompt Generator',
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
      { '@type': 'Question', name: 'How do I turn my pet into AI art?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free Pet Portrait Generator to create a detailed AI prompt. Then open ChatGPT (GPT-4o), upload a photo of your pet, and paste the prompt. You\'ll get a custom AI portrait in seconds.' } },
      { '@type': 'Question', name: 'What AI tool makes the best pet portraits?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o produces the most realistic and stylized pet portraits. Upload your pet\'s photo and use a detailed prompt describing the art style you want. Midjourney is also excellent for artistic styles.' } },
      { '@type': 'Question', name: 'Can AI turn my pet into a human?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! The pet-to-human transformation trend is going viral on TikTok. Our generator has an "As a Human" style that creates a prompt to imagine what your pet would look like as a person, matching their personality and coloring.' } },
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
        <meta name="keywords" content="ai pet portrait, pet portrait generator, ai pet art, turn pet into art, pet to human ai, royal pet portrait, pet action figure, ai pet trend 2026, chatgpt pet portrait" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🐾</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Pet Portrait Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Turn your pet into a royal portrait, Ghibli character, action figure, or trading card. Get the perfect AI prompt — works with ChatGPT, DALL-E & Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: '#FEF3C7', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#92400E' }}>$14B pet tech market</span>
            <span style={{ padding: '6px 14px', background: '#EDE9FE', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>12 art styles</span>
          </div>
        </div>

        {/* Top Conversion Banner — $9 tripwire (primary, lowest-friction entry) */}
        <div style={{
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          borderRadius: 16,
          padding: '18px 22px',
          marginBottom: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          boxShadow: '0 8px 24px rgba(245,158,11,0.22)',
        }}>
          <div style={{ flex: '1 1 260px', color: '#FFF' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: '#FFF', marginBottom: 4 }}>⚡ SKIP THE GENERATOR &middot; TRY US FOR $9</div>
            <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>20 hand-picked AI prompts (incl. image prompts) — instant download, 30-day refund.</div>
          </div>
          <a href="/starter-pack" data-cta="tripwire-banner-top" style={{
            display: 'inline-block',
            background: '#FFF',
            color: '#92400E',
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
          <a href={STRIPE_IMAGE_PACK} data-cta="image-pack-secondary" style={{ color: '#7C3AED', fontSize: 13, fontWeight: 600, textDecoration: 'none', borderBottom: '1px dashed #A78BFA', paddingBottom: 2 }}>
            Want 150+ image-only prompts instead? Image Pack &mdash; $29 &rarr;
          </a>
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

        {/* Step 1: Pet Info */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Tell Us About Your Pet</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>The more detail, the better the portrait.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Pet Name</label>
            <input
              type="text" value={petName} onChange={e => setPetName(e.target.value)}
              placeholder='e.g. "Luna", "Max", "Sir Whiskers III"'
              maxLength={40}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 20, outline: 'none', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 10 }}>What Kind of Pet? *</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 20 }}>
              {PET_TYPES.map(p => (
                <button
                  key={p.id}
                  onClick={() => setPetType(p.id)}
                  style={{
                    padding: '14px 8px',
                    border: petType === p.id ? `3px solid ${p.color}` : '2px solid #E5E7EB',
                    borderRadius: 12,
                    background: petType === p.id ? `${p.color}15` : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{p.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 12, color: '#111827' }}>{p.label}</div>
                </button>
              ))}
            </div>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Breed (optional)</label>
            <input
              type="text" value={breed} onChange={e => setBreed(e.target.value)}
              placeholder='e.g. "Golden Retriever", "Maine Coon", "Cockatiel"'
              maxLength={50}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            <button
              onClick={() => petType && setStep(2)}
              disabled={!petType}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: petType ? '#7C3AED' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: petType ? 'pointer' : 'default' }}
            >
              Next: Choose Art Style →
            </button>
          </div>
        )}

        {/* Step 2: Art Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Portrait Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>How should {petName || 'your pet'} look in their portrait?</p>

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
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#111827' }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>{s.desc}</div>
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
                Next: Background & Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Background + Accessories */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Customize the Portrait</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Set the scene and dress up {petName || 'your pet'}.</p>

            {/* Background */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Background</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {BACKGROUNDS.map(bg => (
                  <button
                    key={bg.id}
                    onClick={() => setBackground(bg.id)}
                    style={{
                      padding: '12px 14px',
                      border: background === bg.id ? '2px solid #7C3AED' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: background === bg.id ? '#EDE9FE' : '#FFF',
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

            {/* Accessories */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                Accessories ({accessories.length}/5)
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

            {/* Extra */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Special Details</label>
              <input
                type="text" value={extra} onChange={e => setExtra(e.target.value)}
                placeholder='e.g. "orange tabby with green eyes" or "always tilts head to the right"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#7C3AED', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate Portrait Prompt →
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
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🐾</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#C4B5FD', marginBottom: 8 }}>
                {petName ? `${petName.toUpperCase()}'S PORTRAIT` : 'YOUR PET PORTRAIT'}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>
                {PET_TYPES.find(p => p.id === petType)?.icon} {petName || 'Your Pet'}
              </div>
              {breed && <div style={{ fontSize: 16, color: '#DDD6FE', marginBottom: 16 }}>{breed}</div>}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                {background && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {BACKGROUNDS.find(b => b.id === background)?.label}
                </span>}
              </div>

              {accessories.length > 0 && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#C4B5FD', marginBottom: 6 }}>WEARING</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {accessories.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: '#A78BFA' }}>midastools.co/pet-portrait-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Pet Portrait Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get 5 bonus pet portrait style prompts free.
                </p>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>{getPreview(prompt)}</pre>
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
                    {loading ? 'Unlocking...' : `Unlock ${petName ? petName + "'s" : "My Pet's"} Prompt (Free)`}
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
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? '#059669' : '#7C3AED', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: '#EDE9FE', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#4C1D95', margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: '#4C1D95', fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Midjourney</strong></li>
                    <li><strong>Upload a clear photo</strong> of your pet</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Share your pet&apos;s portrait and make everyone jealous!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setPetName(''); setPetType(''); setBreed(''); setStyle(''); setBackground(''); setAccessories([]); setExtra(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#7C3AED', background: '#EDE9FE', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Pet Portrait
                </button>

                <div style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#C4B5FD', margin: '0 0 20px' }}>Pet portraits, Ghibli, action figures, trading cards, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: '#7C3AED', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#A78BFA', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 21 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {!unlocked && (
              <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}>
                ← Back to Customize
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The AI Pet Trend Everyone Loves</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Pet portraits are a $14 billion market — and AI just made it free. Turn your furry friend into a masterpiece with the perfect prompt.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#7C3AED' }}>12</div><div style={{ fontSize: 13, color: '#6B7280' }}>Art Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#7C3AED' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Backgrounds</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#7C3AED' }}>18</div><div style={{ fontSize: 13, color: '#6B7280' }}>Accessories</div></div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I turn my pet into AI art?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator to build a detailed prompt. Then open ChatGPT (GPT-4o works best), upload a clear photo of your pet, and paste the prompt. You&apos;ll get a stunning AI portrait in seconds.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Can AI really turn my pet into a human?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Yes! The pet-to-human transformation is one of the most viral AI trends on TikTok, with videos getting millions of views. Our &quot;As a Human&quot; style imagines what your pet would look like as a person, matching their personality and coloring.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Which style is most popular?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Royal portraits and pet-to-human transformations are the most popular. Royal pet portraits have become a major home decor trend — golden retrievers in velvet robes and cats in full royal regalia make incredible wall art.</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* Related */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/caricature-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              🔥 AI Caricature Generator — The trend that crashed ChatGPT →
            </Link>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy →
            </Link>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style prompts →
            </Link>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25+ styles →
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
