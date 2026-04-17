import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gy90j22B4Cw9UXcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── GENRES ───────────────────────────────────────────── */
const GENRES = [
  { id: 'hiphop', label: 'Hip-Hop/Rap', desc: 'Dark, gritty, urban' },
  { id: 'pop', label: 'Pop', desc: 'Bright, clean, colorful' },
  { id: 'rock', label: 'Rock/Metal', desc: 'Aggressive, dark, textured' },
  { id: 'electronic', label: 'Electronic/EDM', desc: 'Neon, futuristic, abstract' },
  { id: 'rnb', label: 'R&B/Soul', desc: 'Smooth, moody, intimate' },
  { id: 'indie', label: 'Indie/Alternative', desc: 'Artistic, quirky, vintage' },
  { id: 'jazz', label: 'Jazz', desc: 'Classic, sophisticated, warm tones' },
  { id: 'country', label: 'Country/Folk', desc: 'Earthy, rustic, natural' },
  { id: 'classical', label: 'Classical', desc: 'Elegant, timeless, refined' },
  { id: 'lofi', label: 'Lo-Fi/Chill', desc: 'Pastel, dreamy, cozy' },
];

/* ── VISUAL STYLES ───────────────────────────────────── */
const VISUAL_STYLES = [
  { id: 'photography', label: 'Photography', desc: 'Cinematic, moody lighting' },
  { id: 'illustration', label: 'Illustration', desc: 'Hand-drawn, artistic' },
  { id: 'abstract', label: 'Abstract Art', desc: 'Shapes, colors, textures' },
  { id: 'collage', label: 'Collage', desc: 'Mixed media, cut-and-paste' },
  { id: '3d-render', label: '3D Render', desc: 'Glossy, sculptural, dimensional' },
  { id: 'pixel-art', label: 'Pixel Art', desc: 'Retro, 8-bit, nostalgic' },
  { id: 'surrealism', label: 'Surrealism', desc: 'Dreamlike, impossible scenes' },
  { id: 'minimalist', label: 'Minimalist', desc: 'Clean, simple, bold typography' },
  { id: 'psychedelic', label: 'Psychedelic', desc: 'Trippy, kaleidoscopic, vivid' },
  { id: 'anime', label: 'Anime/Manga', desc: 'Japanese animation style' },
];

/* ── MOODS ────────────────────────────────────────────── */
const MOODS = [
  'Euphoric & uplifting',
  'Dark & brooding',
  'Nostalgic & dreamy',
  'Aggressive & intense',
  'Peaceful & ethereal',
  'Romantic & sensual',
  'Melancholy & bittersweet',
  'Chaotic & experimental',
];

/* ── COLOR PALETTES ──────────────────────────────────── */
const PALETTES = [
  'Monochrome (black & white)',
  'Neon/Electric',
  'Earthy/Warm',
  'Pastel/Soft',
  'Dark/Moody',
  'Vibrant/Saturated',
  'Gold & Black',
  'Ice Blue & White',
];

/* ── ADDITIONAL ELEMENTS ─────────────────────────────── */
const ELEMENTS = [
  'Artist portrait/silhouette',
  'Cityscape/skyline',
  'Nature/landscape',
  'Parental advisory label',
  'Vinyl record texture',
  'Glitch/distortion effects',
  'Typography-focused',
  'Smoke/fog effects',
  'Stars/cosmic elements',
  'Vintage film grain',
];

/* ── PROMPT BUILDER ──────────────────────────────────── */
function buildPrompt({ artistName, albumTitle, genre, visualStyle, mood, palette, elements }) {
  const g = GENRES.find(x => x.id === genre);
  const v = VISUAL_STYLES.find(x => x.id === visualStyle);
  const elementsText = elements.length > 0 ? elements.join(', ') : 'no specific additional elements';

  return `Design an album cover for "${albumTitle}" by ${artistName}. Genre: ${g?.label || genre}. Visual style: ${v?.label || visualStyle}. Mood: ${mood}. Color palette: ${palette}. Include: ${elementsText}. The cover should be square format (3000x3000px), suitable for Spotify, Apple Music, and vinyl printing. Professional album artwork quality with clear space for the artist name at top and album title at bottom. ${g?.label || genre}-appropriate aesthetic that captures the ${mood.toLowerCase()} feeling.`;
}

/* ── PREVIEW (truncated prompt) ──────────────────────── */
function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function AlbumCoverGenerator() {
  const [step, setStep] = useState(1);
  const [artistName, setArtistName] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [visualStyle, setVisualStyle] = useState('');
  const [mood, setMood] = useState('');
  const [palette, setPalette] = useState('');
  const [elements, setElements] = useState([]);
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (artistName && albumTitle && genre && visualStyle && mood && palette)
    ? buildPrompt({ artistName, albumTitle, genre, visualStyle, mood, palette, elements })
    : '';

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
        body: JSON.stringify({ email, source: 'album-cover-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Album Cover Prompt Generator — Free Custom Album Art Prompts';
  const description = 'Create custom AI album cover art prompts for ChatGPT, Midjourney, and DALL-E. Choose genre, style, mood, and elements. Free prompt generator for musicians.';
  const url = 'https://www.midastools.co/album-cover-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Album Cover Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I use AI-generated album covers for commercial releases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most AI image generators like Midjourney, DALL-E, and ChatGPT allow commercial use of generated images. However, always check the specific terms of service for the AI tool you use. The prompts generated by this tool are yours to use freely.',
        },
      },
      {
        '@type': 'Question',
        name: 'What size should an album cover be for Spotify and Apple Music?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The recommended album cover size is 3000x3000 pixels in JPEG or PNG format. This works for Spotify, Apple Music, Amazon Music, and most streaming platforms. Our prompts specify this size to ensure your AI-generated cover meets distribution requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tool works best for generating album covers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT with GPT-4o and DALL-E 3 produces excellent album covers with good text rendering. Midjourney v7 excels at artistic and photographic styles. For the best results, try your prompt in multiple tools and pick the output you like most.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I add text to an AI-generated album cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our prompts include instructions for artist name and album title placement. DALL-E 3 (via ChatGPT) handles text best. For pixel-perfect text, generate the artwork with AI and add text in Canva, Photoshop, or Figma afterward.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I create album covers for different music genres?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. This generator supports 10 music genres from Hip-Hop to Classical, each with genre-appropriate visual aesthetics. Combined with 10 visual styles and 8 mood options, you can create thousands of unique album cover variations.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Album Cover Prompt Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Create stunning album cover art prompts for ChatGPT, Midjourney, and DALL-E. Choose your genre, mood, and visual style — get a ready-to-use prompt.
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

        {/* Step 1: Artist Name & Album Title */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Name Your Album</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Enter the artist/band name and album title for your cover.</p>

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Artist / Band Name *</label>
            <input
              type="text"
              value={artistName}
              onChange={e => setArtistName(e.target.value)}
              placeholder='e.g. "Midnight Echo" or your artist name'
              maxLength={60}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 20, outline: 'none', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Album Title *</label>
            <input
              type="text"
              value={albumTitle}
              onChange={e => setAlbumTitle(e.target.value)}
              placeholder='e.g. "Neon Dreams" or "Lost in Translation"'
              maxLength={80}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            <button
              onClick={() => artistName.trim() && albumTitle.trim() && setStep(2)}
              disabled={!artistName.trim() || !albumTitle.trim()}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: (artistName.trim() && albumTitle.trim()) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (artistName.trim() && albumTitle.trim()) ? 'pointer' : 'default' }}
            >
              Next: Genre & Style →
            </button>
          </div>
        )}

        {/* Step 2: Genre & Visual Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Genre & Visual Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Pick the music genre and the visual style for your cover art.</p>

            {/* Genre */}
            <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Music Genre *</label>
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box', background: '#FFF', color: genre ? '#111827' : '#9CA3AF' }}
            >
              <option value="" disabled>Select a genre...</option>
              {GENRES.map(g => (
                <option key={g.id} value={g.id}>{g.label} — {g.desc}</option>
              ))}
            </select>

            {/* Visual Style */}
            <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Visual Style *</label>
            <select
              value={visualStyle}
              onChange={e => setVisualStyle(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box', background: '#FFF', color: visualStyle ? '#111827' : '#9CA3AF' }}
            >
              <option value="" disabled>Select a visual style...</option>
              {VISUAL_STYLES.map(v => (
                <option key={v.id} value={v.id}>{v.label} — {v.desc}</option>
              ))}
            </select>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => genre && visualStyle && setStep(3)}
                disabled={!genre || !visualStyle}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: (genre && visualStyle) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (genre && visualStyle) ? 'pointer' : 'default' }}
              >
                Next: Mood & Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Mood, Palette, Elements */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Mood & Details</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Set the mood, color palette, and pick up to 3 additional elements.</p>

            {/* Mood */}
            <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Album Mood *</label>
            <select
              value={mood}
              onChange={e => setMood(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box', background: '#FFF', color: mood ? '#111827' : '#9CA3AF' }}
            >
              <option value="" disabled>Select a mood...</option>
              {MOODS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>

            {/* Color Palette */}
            <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Color Palette *</label>
            <select
              value={palette}
              onChange={e => setPalette(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 28, outline: 'none', boxSizing: 'border-box', background: '#FFF', color: palette ? '#111827' : '#9CA3AF' }}
            >
              <option value="" disabled>Select a color palette...</option>
              {PALETTES.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {/* Additional Elements */}
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

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => mood && palette && setStep(4)}
                disabled={!mood || !palette}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: (mood && palette) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (mood && palette) ? 'pointer' : 'default' }}
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
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🎵</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#93C5FD', marginBottom: 8 }}>YOUR CUSTOM ALBUM COVER</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{albumTitle}</div>
              <div style={{ fontSize: 16, color: '#CBD5E1', marginBottom: 20 }}>by {artistName}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {GENRES.find(g => g.id === genre)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {VISUAL_STYLES.find(v => v.id === visualStyle)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {mood}
                </span>
              </div>

              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#93C5FD', marginBottom: 6 }}>COLOR PALETTE</div>
                <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{palette}</span>
              </div>

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

              <div style={{ marginTop: 16, fontSize: 11, color: '#64748B' }}>midastools.co/album-cover-generator</div>
            </div>

            {/* Prompt Preview / Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full AI prompt + get 5 bonus album cover prompts free.
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
                    <li>Open <strong>ChatGPT</strong> (GPT-4o with DALL-E 3 works best)</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Download the square image (3000x3000px recommended)</li>
                    <li>Upload to your distributor (DistroKid, TuneCore, etc.)</li>
                  </ol>
                </div>

                {/* Start Over */}
                <button
                  onClick={() => { setStep(1); setArtistName(''); setAlbumTitle(''); setGenre(''); setVisualStyle(''); setMood(''); setPalette(''); setElements([]); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#3B5FFF', background: '#EEF2FF', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Design Another Cover
                </button>

                {/* Upsell */}
                <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#CBD5E1', margin: '0 0 20px' }}>Album covers, action figures, Ghibli, trading cards, pet portraits, and 20+ more styles — all copy-paste ready.</p>
                  <a
                    href={STRIPE_IMAGE_PACK}
                    style={{ display: 'inline-block', background: '#FFF', color: '#3B5FFF', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}
                  >
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#64748B', margin: '8px 0 0' }}>
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
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Design Album Art in Seconds</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Musicians and designers are using AI to create stunning album covers. This tool builds you the perfect prompt — customized to YOUR genre, YOUR mood, YOUR style.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>10</div><div style={{ fontSize: 13, color: '#6B7280' }}>Music Genres</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>10</div><div style={{ fontSize: 13, color: '#6B7280' }}>Visual Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Color Palettes</div></div>
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

        {/* FAQ Section */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 24px' }}>Frequently Asked Questions</h2>

          {faqJsonLd.mainEntity.map((faq, i) => (
            <div key={i} style={{ marginBottom: 20, padding: 24, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>{faq.name}</h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
