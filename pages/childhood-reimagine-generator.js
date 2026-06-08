import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const ACCENT = '#D97706';
const ACCENT_BG = '#FFFBEB';
const ACCENT_DARK = '#92400E';
const ACCENT_GRADIENT_START = '#78350F';
const ACCENT_GRADIENT_MID = '#92400E';
const ACCENT_GRADIENT_END = '#B45309';
const ACCENT_LIGHT = '#FDE68A';
const ACCENT_MUTED = '#F59E0B';

/* -- REIMAGINE STYLES ---------------------------------- */
const STYLES = [
  { id: 'ghibli-kid', label: 'Studio Ghibli Kid', icon: '\u{1F3EF}', desc: 'Miyazaki animated child', color: '#059669' },
  { id: 'renaissance', label: 'Renaissance Painting', icon: '\u{1F5BC}\uFE0F', desc: 'Classical oil painting child portrait', color: '#7C3AED' },
  { id: 'pixar', label: 'Pixar Character', icon: '\u{1F3AC}', desc: '3D animated movie star', color: '#3B82F6' },
  { id: 'vintage-film', label: 'Vintage Film Photo', icon: '\u{1F4F7}', desc: '1950s-70s film grain aesthetic', color: '#B45309' },
  { id: 'superhero', label: 'Superhero Origin', icon: '\u{1F9B8}', desc: 'Comic book origin story', color: '#EF4444' },
  { id: 'fairy-tale', label: 'Fairy Tale Illustration', icon: '\u{1F9DA}', desc: 'Storybook watercolor', color: '#EC4899' },
  { id: 'anime', label: 'Anime Protagonist', icon: '\u2728', desc: 'Japanese anime style', color: '#6366F1' },
  { id: 'royal', label: 'Royal Portrait', icon: '\u{1F451}', desc: 'Baroque, velvet robes', color: '#7C3AED' },
  { id: 'cyberpunk', label: 'Cyberpunk Future', icon: '\u{1F916}', desc: 'Neon-lit future version', color: '#A855F7' },
  { id: 'pop-art', label: 'Pop Art', icon: '\u{1F3A8}', desc: 'Warhol/Lichtenstein style', color: '#F97316' },
  { id: 'fantasy', label: 'Fantasy Adventurer', icon: '\u2694\uFE0F', desc: 'D&D/RPG character', color: '#059669' },
  { id: 'polaroid', label: 'Nostalgic Polaroid', icon: '\u{1F4F8}', desc: 'Washed-out 80s/90s aesthetic', color: '#D97706' },
];

/* -- ERA / SETTING ------------------------------------- */
const ERAS = [
  { id: '1920s', label: '1920s Jazz Age', desc: 'Flappers, speakeasies, Art Deco' },
  { id: '1950s', label: '1950s Americana', desc: 'Diners, Cadillacs, suburbia' },
  { id: '1970s', label: '1970s Disco', desc: 'Bell-bottoms, funk, groovy' },
  { id: '1980s', label: '1980s Neon', desc: 'Arcade, synthwave, bright colors' },
  { id: '1990s', label: '1990s Grunge', desc: 'Flannel, skateboards, mixtapes' },
  { id: '2000s', label: '2000s Y2K', desc: 'Frosted tips, flip phones, low-rise' },
  { id: 'medieval', label: 'Medieval Times', desc: 'Castles, knights, tapestries' },
  { id: 'egypt', label: 'Ancient Egypt', desc: 'Pyramids, pharaohs, gold' },
  { id: 'victorian', label: 'Victorian Era', desc: 'Corsets, gaslight, elegance' },
  { id: 'future', label: 'The Future (2100)', desc: 'Holograms, flying cars, utopia' },
  { id: 'forest', label: 'Enchanted Forest', desc: 'Fairy lights, ancient trees, magic' },
  { id: 'space', label: 'Outer Space', desc: 'Stars, nebulas, zero gravity' },
];

/* -- AGES ---------------------------------------------- */
const AGES = [
  { id: 'toddler', label: 'Toddler (1-3)' },
  { id: 'little-kid', label: 'Little Kid (4-6)' },
  { id: 'kid', label: 'Kid (7-9)' },
  { id: 'preteen', label: 'Pre-teen (10-12)' },
];

/* -- GENDERS ------------------------------------------- */
const GENDERS = [
  { id: 'boy', label: 'Boy' },
  { id: 'girl', label: 'Girl' },
  { id: 'nonbinary', label: 'Non-binary' },
];

/* -- INTERESTS ----------------------------------------- */
const INTERESTS = [
  'Dinosaurs', 'Space', 'Animals', 'Music', 'Sports', 'Art/Drawing',
  'Reading', 'Video Games', 'Dancing', 'Cooking', 'Nature/Outdoors',
  'Superheroes', 'Science', 'Building/Legos',
];

/* -- PROMPT BUILDER ------------------------------------ */
function buildPrompt({ name, age, gender, style, era, interests, memory }) {
  const s = STYLES.find(x => x.id === style);
  const e = ERAS.find(x => x.id === era);
  const ageLabel = AGES.find(x => x.id === age)?.label || 'a child';
  const genderLabel = GENDERS.find(x => x.id === gender)?.label?.toLowerCase() || 'child';
  const nameText = name ? `named ${name}` : '';

  const interestMap = {
    'Dinosaurs': 'tiny friendly dinosaurs peeking from behind bushes and perching on their shoulder',
    'Space': 'miniature planets and stars orbiting around them like a personal galaxy',
    'Animals': 'a parade of gentle woodland creatures gathered at their feet like old friends',
    'Music': 'musical notes drifting visibly through the air like golden butterflies',
    'Sports': 'a glowing trophy and well-worn ball resting beside them like treasured artifacts',
    'Art/Drawing': 'paintbrushes and colored pencils scattered around, their drawings coming alive off the paper',
    'Reading': 'open storybooks with characters climbing out of the pages into the scene',
    'Video Games': 'pixelated power-ups and 8-bit companions floating alongside them',
    'Dancing': 'a trail of sparkling light following their feet mid-twirl',
    'Cooking': 'a tiny magical kitchen with ingredients floating and mixing themselves',
    'Nature/Outdoors': 'wildflowers blooming in their footsteps and butterflies resting on their fingertips',
    'Superheroes': 'a flowing cape catching the wind and a faint heroic glow around their silhouette',
    'Science': 'beakers bubbling with luminous potions and tiny atoms orbiting their head',
    'Building/Legos': 'an impossible, whimsical tower they built reaching toward the sky behind them',
  };

  const interestDetails = interests.map(i => interestMap[i] || i.toLowerCase()).join(', ');

  const memoryText = memory ? `The scene subtly captures the feeling of this memory: "${memory}".` : '';

  const eraDetails = e ? `The setting is the ${e.label} era — ${e.desc.toLowerCase()}.` : '';

  const styleInstructions = {
    'ghibli-kid': `A warm, magical Studio Ghibli-style portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText}, reimagined as a character in a Hayao Miyazaki film. The child has bright, expressive anime eyes full of wonder and curiosity. They are surrounded by ${interestDetails || 'magical floating spirits and glowing fireflies'}. Soft watercolor textures, golden hour lighting filtering through trees, dust motes and tiny spirits floating in the air. The scene captures the pure joy and innocence of childhood. Hand-painted cel animation aesthetic with visible brushwork. ${eraDetails}`,

    'renaissance': `A magnificent Renaissance oil painting portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText}, painted in the style of Raphael and Vermeer. The child is dressed in period-appropriate fine clothing with lace collars and rich fabrics. Their expression carries both the seriousness of a classical portrait and the irrepressible spark of childhood mischief. ${interestDetails ? `Cleverly hidden in the background: ${interestDetails}.` : ''} Rich, luminous oil paint with dramatic chiaroscuro lighting, visible impasto brushstrokes, and a gilded frame effect at the edges. ${eraDetails}`,

    'pixar': `A stunning Pixar-quality 3D render of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as the star of their own animated movie. Big, soulful eyes with that signature Pixar subsurface scattering glow on the skin. Expressive, slightly exaggerated features that radiate personality. They are posed heroically with ${interestDetails || 'their favorite things scattered around them'}. Clean, bright Pixar lighting, soft depth of field, movie poster composition. The kind of character you instantly root for. ${eraDetails}`,

    'vintage-film': `A nostalgic vintage film photograph of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText}, shot on Kodachrome with authentic 1960s film grain and warm color tones. Slightly faded edges, subtle light leaks, and that beautiful analog softness. The child is captured in a candid moment of pure joy — ${interestDetails ? `surrounded by ${interestDetails}` : 'laughing in golden afternoon light'}. The image feels like a rediscovered treasure from a family photo album. ${eraDetails} Authentic period details in clothing and setting.`,

    'superhero': `A dynamic comic book-style origin story splash page featuring a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as a young superhero. Bold linework, dramatic perspective from below, cape billowing in the wind. Their superpower comes from ${interestDetails ? `their love of ${interests.join(' and ')}` : 'pure childhood imagination'}. Halftone dots, action lines, vibrant primary colors, comic book lettering. The moment they first discovered their powers. ${eraDetails}`,

    'fairy-tale': `A dreamy, ethereal storybook watercolor illustration of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as the hero of their own fairy tale. Soft, translucent watercolor washes with delicate ink linework. The child wanders through an enchanted scene where ${interestDetails || 'flowers whisper secrets and woodland creatures offer gifts'}. Whimsical, slightly oversized proportions like a classic children\'s book illustration. Gentle pastel palette with touches of gold leaf. ${eraDetails}`,

    'anime': `A vibrant Japanese anime key visual of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as the protagonist of a new anime series. Dynamic pose, wind-swept hair, determined eyes gleaming with inner light. Cherry blossom petals or energy particles swirling around them. ${interestDetails ? `Their power manifests through ${interestDetails}.` : ''} Clean cel-shaded coloring, dramatic backlighting, speed lines for energy. A character card feel — their name in stylized Japanese typography at the bottom. ${eraDetails}`,

    'royal': `A grand baroque royal portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as a young monarch. Seated on an ornate golden throne, wearing velvet robes with ermine trim and a jeweled crown slightly too large for their head (adding charm). Despite the formal setting, their eyes sparkle with childlike mischief. ${interestDetails ? `Royal symbols include ${interestDetails}.` : ''} Dramatic Rembrandt lighting, rich oil painting textures, deep burgundy and gold color palette. An ornate frame with royal crest. ${eraDetails}`,

    'cyberpunk': `A neon-drenched cyberpunk portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} reimagined in the year 2099. Holographic interface elements floating around them, LED-lit clothing, cybernetic accessories that look cool but age-appropriate. ${interestDetails ? `Their tech augmentations relate to ${interestDetails}.` : ''} Rain-slicked streets reflecting neon signs, towering megastructures in the background, cyan and magenta color palette. Blade Runner meets childhood wonder. ${eraDetails}`,

    'pop-art': `A bold Andy Warhol / Roy Lichtenstein pop art portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText}. Flat, saturated colors in a grid of 4 variations (like Warhol\'s Marilyn). Ben-Day dots, thick black outlines, comic-strip speech bubble saying something a kid would say. ${interestDetails ? `Surrounded by pop art versions of ${interestDetails}.` : ''} High contrast, screen-print aesthetic, primary colors against bold backgrounds. Pure 1960s pop art energy with childhood innocence. ${eraDetails}`,

    'fantasy': `An epic fantasy RPG character portrait of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText} as a young adventurer in a D&D-inspired world. Wearing age-appropriate but impressive gear — a small leather satchel, a wooden practice sword, maybe a wizard\'s hat too big for their head. ${interestDetails ? `Their adventurer class is inspired by their love of ${interests.join(', ')} — reflected as ${interestDetails}.` : ''} Magical ambient lighting, detailed fantasy environment, warm campfire glow. Character sheet border with fun stats. ${eraDetails}`,

    'polaroid': `A nostalgic Polaroid photograph of a ${ageLabel.toLowerCase()} ${genderLabel} ${nameText}, complete with the white Polaroid border and slightly washed-out colors characteristic of late 80s/early 90s instant film. Soft focus, warm amber tones, authentic period clothing and hairstyle. The child is captured in a perfectly imperfect candid moment — ${interestDetails ? `playing with ${interestDetails}` : 'mid-laugh, eyes crinkled with pure joy'}. Handwritten caption at the bottom in marker. The image radiates warmth and nostalgia. ${eraDetails}`,
  };

  return `${styleInstructions[style] || styleInstructions['ghibli-kid']}

${memoryText}

This portrait should feel deeply personal and emotionally resonant — the kind of image that makes you smile and maybe tear up a little. It captures not just what childhood looked like, but what it FELT like. Every detail should evoke warmth, wonder, and the bittersweet beauty of growing up.

Technical: High resolution, rich detail, emotionally evocative lighting. The image should feel like a love letter to childhood.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function ChildhoodReimagineGenerator() {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState('');
  const [era, setEra] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [memory, setMemory] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (style && age && gender) ? buildPrompt({ name, age, gender, style, era, interests, memory }) : '';

  const toggleInterest = (item) => {
    setInterests(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : prev.length < 4 ? [...prev, item] : prev
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
        body: JSON.stringify({ email, source: 'childhood-reimagine-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Childhood Photo Reimaginer \u2014 Turn Old Photos Into Magic (Free)';
  const description = 'Reimagine your childhood photos with AI. Turn old photos into Studio Ghibli art, Pixar characters, Renaissance paintings, anime, and more. Free nostalgic AI portrait prompt generator for ChatGPT, DALL-E, and Midjourney.';
  const url = 'https://www.midastools.co/childhood-reimagine-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Childhood Photo Reimaginer',
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
      { '@type': 'Question', name: 'How do I reimagine my childhood photo with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free Childhood Photo Reimaginer to build a custom AI prompt based on your art style, era, and personal details. Then open ChatGPT (GPT-4o), upload your childhood photo, and paste the prompt. You\'ll get a stunning reimagined portrait in seconds.' } },
      { '@type': 'Question', name: 'Can AI turn old photos into art?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! AI tools like ChatGPT, DALL-E, and Midjourney can transform old photos into any art style \u2014 Studio Ghibli, Renaissance oil paintings, Pixar 3D, anime, and more. Upload your photo with a detailed prompt for the best results.' } },
      { '@type': 'Question', name: 'What\'s the nostalgia AI photo trend?', acceptedAnswer: { '@type': 'Answer', text: 'The nostalgia AI photo trend involves using AI to reimagine childhood photos in different art styles and eras. People are turning their old photos into Ghibli characters, vintage film shots, superhero origins, and more \u2014 then sharing the emotional results on social media.' } },
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
        <meta name="keywords" content="ai childhood photo, reimagine childhood photo ai, nostalgic ai portrait, turn old photo into art, childhood memory ai generator, ai nostalgia trend 2026, chatgpt childhood photo" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{'\u{1F476}'}</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Childhood Photo Reimaginer
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Turn your childhood photos into magical AI art. Pick a style, set the era, add personal details, and get the perfect prompt for ChatGPT, DALL-E, or Midjourney.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: ACCENT_BG, borderRadius: 99, fontSize: 13, fontWeight: 600, color: ACCENT }}>Deeply emotional AI portraits</span>
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

        {/* Step 1: Reimagine Style */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Reimagine Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>How do you want to see your childhood self reimagined?</p>

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

            <button
              onClick={() => style && setStep(2)}
              disabled={!style}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: style ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default', marginTop: 24 }}
            >
              Next: Choose Era / Setting {'\u2192'}
            </button>
          </div>
        )}

        {/* Step 2: Era / Setting */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Pick an Era or Setting</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>When and where should your childhood scene take place?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {ERAS.map(e => (
                <button
                  key={e.id}
                  onClick={() => setEra(e.id)}
                  style={{
                    padding: '12px 14px',
                    border: era === e.id ? `2px solid ${ACCENT}` : '1.5px solid #E5E7EB',
                    borderRadius: 10,
                    background: era === e.id ? ACCENT_BG : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{e.label}</div>
                  <div style={{ fontSize: 11, color: '#9CA3AF' }}>{e.desc}</div>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => era && setStep(3)}
                disabled={!era}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: era ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: era ? 'pointer' : 'default' }}
              >
                Next: Your Details {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Tell Us About Little You</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>The more details, the more personal and emotional your prompt will be.</p>

            {/* Name */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Alex, Maria, Sam..."
                maxLength={50}
                style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Age in Photo */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Age in Photo *</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {AGES.map(a => (
                  <button
                    key={a.id}
                    onClick={() => setAge(a.id)}
                    style={{
                      padding: '12px 14px',
                      border: age === a.id ? `2px solid ${ACCENT}` : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: age === a.id ? ACCENT_BG : '#FFF',
                      cursor: 'pointer',
                      fontWeight: age === a.id ? 700 : 500,
                      fontSize: 14,
                      color: '#111827',
                    }}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Gender *</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {GENDERS.map(g => (
                  <button
                    key={g.id}
                    onClick={() => setGender(g.id)}
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      border: gender === g.id ? `2px solid ${ACCENT}` : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: gender === g.id ? ACCENT_BG : '#FFF',
                      cursor: 'pointer',
                      fontWeight: gender === g.id ? 700 : 500,
                      fontSize: 14,
                      color: '#111827',
                    }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                What You Loved ({interests.length}/4)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {INTERESTS.map(item => {
                  const sel = interests.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleInterest(item)}
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

            {/* Special Memory */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Favorite Childhood Memory</label>
              <input
                type="text"
                value={memory}
                onChange={e => setMemory(e.target.value)}
                placeholder={'e.g. "Building blanket forts with my sister" or "Catching fireflies at grandma\'s house"'}
                maxLength={200}
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
              <p style={{ fontSize: 13, color: '#9CA3AF', margin: '6px 0 0' }}>This makes your prompt deeply personal and emotional.</p>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => age && gender && setStep(4)}
                disabled={!age || !gender}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: (age && gender) ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (age && gender) ? 'pointer' : 'default' }}
              >
                Generate My Childhood Prompt {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result -- email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card */}
            <div style={{
              background: `linear-gradient(135deg, ${ACCENT_GRADIENT_START} 0%, ${ACCENT_GRADIENT_MID} 50%, ${ACCENT_GRADIENT_END} 100%)`,
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>{'\u{1F476}'}</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: ACCENT_LIGHT, marginBottom: 8 }}>YOUR CHILDHOOD REIMAGINED</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>{name || 'Little You'}, Reimagined</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
                {era && <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {ERAS.find(e => e.id === era)?.label}
                </span>}
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {AGES.find(a => a.id === age)?.label}
                </span>
              </div>

              {interests.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: ACCENT_LIGHT, marginBottom: 6 }}>CHILDHOOD LOVES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {interests.map(a => (
                      <span key={a} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{a}</span>
                    ))}
                  </div>
                </div>
              )}

              {memory && (
                <div style={{ marginTop: 12, fontSize: 13, fontStyle: 'italic', color: ACCENT_LIGHT, opacity: 0.9 }}>
                  &quot;{memory}&quot;
                </div>
              )}

              <div style={{ marginTop: 16, fontSize: 11, color: ACCENT_LIGHT }}>midastools.co/childhood-reimagine-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Childhood Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get bonus nostalgic prompt variations free.
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
                    {loading ? 'Unlocking...' : 'Unlock My Childhood Prompt (Free)'}
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
                    <li>Upload your childhood photo</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Share your reimagined childhood portrait!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setStyle(''); setEra(''); setName(''); setAge(''); setGender(''); setInterests([]); setMemory(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: ACCENT, background: ACCENT_BG, border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Reimagine Another Childhood Photo
                </button>

                <div style={{ background: `linear-gradient(135deg, ${ACCENT_GRADIENT_START} 0%, ${ACCENT_GRADIENT_MID} 100%)`, borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: ACCENT_LIGHT, margin: '0 0 20px' }}>Childhood, Ghibli, action figures, pet portraits, Funko Pops, pixel art, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: ACCENT, fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: ACCENT_LIGHT, margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 16 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {!unlocked && (
              <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}>
                {'\u2190'} Back to Your Details
              </button>
            )}
          </div>
        )}

        {/* Social Proof & SEO Content */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Relive Your Childhood Through AI</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            The nostalgia AI photo trend is taking over social media. Reimagine your childhood in any art style — from Studio Ghibli to Renaissance paintings. Deeply personal, incredibly shareable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>12</div><div style={{ fontSize: 13, color: '#6B7280' }}>Art Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>12</div><div style={{ fontSize: 13, color: '#6B7280' }}>Era Settings</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>14</div><div style={{ fontSize: 13, color: '#6B7280' }}>Childhood Interests</div></div>
          </div>
        </div>

        {/* FAQ for SEO */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I reimagine my childhood photo with AI?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator above to build a personalized prompt. Choose an art style (Ghibli, Pixar, Renaissance, etc.), pick an era, and add your childhood details. Then paste the prompt into ChatGPT (GPT-4o) along with your childhood photo for a stunning reimagined portrait.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Can AI turn old photos into art?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Yes! AI tools like ChatGPT, DALL-E, and Midjourney can transform old photos into virtually any art style. Upload your childhood photo with a detailed prompt and the AI will reimagine it while preserving the emotional essence of the original moment.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>What&apos;s the nostalgia AI photo trend?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>The nostalgia AI photo trend involves using AI to reimagine childhood and vintage photos in different art styles. People are turning old family photos into Ghibli characters, superhero origins, vintage film shots, and more — then sharing the emotional results. It&apos;s one of the most shared AI trends because of its deep personal and emotional resonance.</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style art {'\u2192'}
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
