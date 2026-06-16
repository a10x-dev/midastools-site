import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';
import { submitSubscribe } from '../lib/subscribe';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const ACCENT = '#059669';
const ACCENT_LIGHT = '#D1FAE5';
const ACCENT_DARK = '#065F46';

/* ── MAP TYPES ─────────────────────────────────────── */
const MAP_TYPES = [
  { id: 'world', label: 'World Map', icon: '🌍', desc: 'Full continent layout', color: '#059669' },
  { id: 'regional', label: 'Regional Map', icon: '🏔️', desc: 'Kingdom or province', color: '#2563EB' },
  { id: 'city', label: 'City Map', icon: '🏰', desc: 'Detailed urban layout', color: '#7C3AED' },
  { id: 'dungeon', label: 'Dungeon Map', icon: '⚔️', desc: 'Underground/cave system', color: '#DC2626' },
  { id: 'battle', label: 'Battle Map', icon: '🗡️', desc: 'Tactical grid', color: '#B91C1C' },
  { id: 'island', label: 'Island Map', icon: '🏝️', desc: 'Island or archipelago', color: '#0891B2' },
  { id: 'wilderness', label: 'Wilderness Map', icon: '🌲', desc: 'Forest/mountain terrain', color: '#16A34A' },
  { id: 'treasure', label: 'Treasure Map', icon: '💎', desc: 'Aged parchment style', color: '#D97706' },
];

/* ── ART STYLES ────────────────────────────────────── */
const STYLES = [
  { id: 'tolkien', label: 'Tolkien Classic', icon: '📜', desc: 'Hand-drawn parchment like LOTR', color: '#92400E' },
  { id: 'watercolor', label: 'Watercolor Fantasy', icon: '🎨', desc: 'Painted, colorful', color: '#DB2777' },
  { id: 'medieval', label: 'Medieval Cartography', icon: '🧭', desc: 'Old-world atlas style', color: '#78350F' },
  { id: 'pixel', label: 'Pixel Art RPG', icon: '🎮', desc: 'Retro video game', color: '#7C3AED' },
  { id: 'dark', label: 'Dark Fantasy', icon: '🌑', desc: 'Gothic, ominous', color: '#1F2937' },
  { id: 'steampunk', label: 'Steampunk', icon: '⚙️', desc: 'Brass, gears, Victorian', color: '#B45309' },
  { id: 'anime', label: 'Anime / JRPG', icon: '✨', desc: 'Vibrant, Japanese RPG style', color: '#E11D48' },
  { id: 'satellite', label: 'Photorealistic Satellite', icon: '🛰️', desc: 'Like Google Earth but fantasy', color: '#0284C7' },
];

/* ── TERRAIN ELEMENTS ──────────────────────────────── */
const TERRAIN_OPTIONS = [
  'Mountains', 'Forests', 'Rivers', 'Lakes', 'Deserts', 'Swamps',
  'Volcanoes', 'Ice/Tundra', 'Floating Islands', 'Crystal Caves',
  'Dragon Lairs', 'Ancient Ruins', 'Magic Portals', 'Waterfalls',
  'Coral Reefs', 'Canyons',
];

/* ── PROMPT BUILDER ────────────────────────────────── */
function buildPrompt({ mapName, mapType, style, terrain, compassRose, scaleLegend, extra }) {
  const mt = MAP_TYPES.find(x => x.id === mapType);
  const nameText = mapName ? `called "${mapName}"` : '';

  const mapTypeDescriptions = {
    world: `a sprawling world map ${nameText} showing multiple continents, vast oceans, and interconnected landmasses. Include coastlines with realistic inlets and peninsulas, island chains, and continental shelves visible beneath shallow waters`,
    regional: `a detailed regional map ${nameText} depicting a single kingdom or province. Show borders with neighboring territories, major roads and trade routes connecting settlements, and varied terrain throughout the region`,
    city: `a detailed top-down city map ${nameText} showing a fantasy urban settlement. Include distinct districts (market quarter, noble quarter, slums, temple district), winding streets, a central castle or keep, city walls with gates, a harbor or river dock, and individual building footprints`,
    dungeon: `an underground dungeon map ${nameText} viewed from above. Show interconnected chambers and corridors, secret passages, trap rooms, a boss chamber, treasure vaults, underground rivers, and collapsed tunnels. Include grid squares for tabletop play`,
    battle: `a tactical battle map ${nameText} with a clear grid overlay for tabletop RPG combat. Show terrain features that affect gameplay — elevated positions, cover objects, chokepoints, and flanking routes. Include a scale indicator and directional arrows`,
    island: `a fantasy island map ${nameText} showing a single island or small archipelago surrounded by ocean. Include beaches, cliffs, a central mountain or volcano, hidden coves, shipwrecks offshore, and a small settlement or port town`,
    wilderness: `a wilderness exploration map ${nameText} showing untamed frontier terrain. Include dense forest canopy, mountain passes, hidden clearings, animal trails, ranger camps, and points of interest marked with hand-drawn icons`,
    treasure: `an aged treasure map ${nameText} on worn parchment with burnt edges and coffee stains. Include a dotted path leading to an X marking the treasure location, cryptic landmarks, compass directions, a riddle or verse in the corner, and skull-and-crossbones warnings for dangerous areas`,
  };

  const styleInstructions = {
    tolkien: `A hand-drawn fantasy map in the style of J.R.R. Tolkien's Middle-earth maps by Christopher Tolkien. Aged parchment texture with a warm sepia tone, detailed ink linework in brown and black. Mountains drawn as small shaded triangles in clusters, forests shown as tiny individual tree icons, rivers flowing with elegant calligraphic curves. Elegant hand-lettered calligraphy for all place names and labels. Decorative border with Celtic knotwork or vine patterns. The overall feel should be of a cartographer's masterwork discovered in an ancient library.`,
    watercolor: `A beautiful watercolor-painted fantasy map with rich, vibrant colors bleeding softly into one another. Oceans in deep cerulean and turquoise with visible brushstrokes, landmasses in warm greens, golden yellows, and terracotta browns. Mountains painted as purple-blue peaks with snow-white caps, forests as lush emerald clusters. Soft edges where land meets water, visible paper texture underneath. Labels written in an elegant serif font with gold ink. The style of a fine art illustration you would frame on a wall.`,
    medieval: `A medieval cartography-style map inspired by real 15th-century portolan charts and mappa mundi. Ornate compass roses with fleur-de-lis pointing north, rhumb lines crossing the ocean, sea monsters and sailing ships drawn in the waters. Landmasses colored in muted earth tones with gold leaf accents. Text in blackletter gothic script. Decorative cartouche containing the map title. Wind-head cherubs blowing from the corners. Aged vellum texture with ink splatters and foxing.`,
    pixel: `A pixel art fantasy map in the style of classic 16-bit RPG video games like Final Fantasy or Chrono Trigger. Clean, crisp pixel tiles for each terrain type — grass tiles, water tiles with simple animation frames, mountain tiles that stack vertically. A retro game UI border with the map name in pixel font at the top. Limited color palette with dithering for gradients. Icons for towns shown as tiny pixel buildings, dungeons as cave entrances. The nostalgic look of exploring a SNES-era world map.`,
    dark: `A dark fantasy map with a gothic, ominous atmosphere. Deep blacks, dark purples, and blood reds dominate the color palette. The parchment appears scorched and torn, as if retrieved from a cursed library. Terrain features look threatening — jagged mountain peaks like teeth, twisted dead forests, rivers of dark water or lava. Place names written in angular, sinister lettering. Skull motifs, thorny vines, and occult symbols decorate the borders. Eerie fog or mist effects around the edges. The map of a world you would fear to enter.`,
    steampunk: `A steampunk-style fantasy map with Victorian-era cartographic precision mixed with fantastical mechanical elements. Drawn on blueprint-style paper with copper, brass, and aged gold tones. Mechanical compass rose with spinning gears, airship routes marked with dotted lines, steam-powered cities shown with smokestacks and gear symbols. Clockwork borders with rivets and pipes. Labels in a typewriter font mixed with hand-drawn annotations. Includes technical cross-section diagrams of interesting locations in the margins.`,
    anime: `A vibrant anime/JRPG-style fantasy world map bursting with color and energy. Bold outlines, cel-shaded terrain with high saturation — crystal-blue oceans, emerald forests, snow-white peaks. Chibi-style icons marking towns and dungeons. Cherry blossom trees scattered across the landscape, floating islands with waterfalls, a massive crystal tower visible on the horizon. Sparkle effects and magical aura glows around points of interest. The map feels like the opening screen of an epic Japanese RPG adventure. Clean, modern digital art style.`,
    satellite: `A photorealistic satellite-view fantasy map as if photographed from space, like Google Earth but of a fictional fantasy world. Realistic terrain rendering — actual-looking mountain ranges with shadows, dense realistic forest canopy, rivers reflecting sunlight, desert sand dunes with wind patterns visible. But with fantasy elements seamlessly integrated: a massive crater from an ancient magical explosion, an unnaturally perfect circle of crystal-clear lake, cities visible as geometric patterns of lights, and a giant magical barrier wall glowing faintly from orbit. Atmospheric haze at the edges, cloud wisps partially obscuring terrain.`,
  };

  const terrainText = terrain.length > 0
    ? `Key terrain features to include: ${terrain.join(', ')}. Ensure each terrain element is distinctly rendered and labeled where appropriate.`
    : '';

  const compassText = compassRose ? 'Include an ornate compass rose indicating cardinal directions.' : '';
  const scaleText = scaleLegend ? 'Include a scale bar and map legend explaining all symbols used.' : '';
  const extraText = extra ? `Additional details: ${extra}.` : '';

  return `Create ${mapTypeDescriptions[mapType] || mapTypeDescriptions.world}.

${styleInstructions[style] || styleInstructions.tolkien}

${terrainText}

${compassText}

${scaleText}

${extraText}

The map should feel like a complete, professional cartographic work — the kind a game master would proudly display at the table or a fantasy author would include in their novel's first pages. High resolution, rich in detail, inviting the viewer to explore every corner.`.replace(/\n{3,}/g, '\n\n').trim();
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function FantasyMapGenerator() {
  const [step, setStep] = useState(1);
  const [mapName, setMapName] = useState('');
  const [mapType, setMapType] = useState('');
  const [style, setStyle] = useState('');
  const [terrain, setTerrain] = useState([]);
  const [compassRose, setCompassRose] = useState(true);
  const [scaleLegend, setScaleLegend] = useState(true);
  const [extra, setExtra] = useState('');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (mapType && style) ? buildPrompt({ mapName, mapType, style, terrain, compassRose, scaleLegend, extra }) : '';

  const toggleTerrain = (item) => {
    setTerrain(prev =>
      prev.includes(item) ? prev.filter(t => t !== item) : prev.length < 6 ? [...prev, item] : prev
    );
  };

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Enter a valid email'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await submitSubscribe({ email, source: 'fantasy-map-generator', referrer: document.referrer || '' });
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

  const title = 'AI Fantasy Map Generator — Create D&D, RPG & World-Building Maps (Free)';
  const description = 'Generate detailed AI prompts for stunning fantasy maps. World maps, dungeon maps, battle maps, treasure maps & more. Works with ChatGPT, Midjourney, DALL-E. Perfect for D&D, Pathfinder, and world-building.';
  const url = 'https://www.midastools.co/fantasy-map-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Fantasy Map Prompt Generator',
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
      { '@type': 'Question', name: 'How do I create a fantasy map with AI?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free Fantasy Map Generator to build a detailed AI prompt describing your ideal map. Choose a map type (world, dungeon, battle, etc.), an art style (Tolkien, watercolor, pixel art, etc.), and terrain features. Then paste the prompt into ChatGPT (GPT-4o), Midjourney, or DALL-E to generate your map.' } },
      { '@type': 'Question', name: 'What\'s the best AI tool for D&D maps?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT with GPT-4o and Midjourney both produce excellent D&D maps. For battle maps and dungeon maps with grid overlays, ChatGPT works best because you can iterate on the layout. For artistic world maps and regional maps, Midjourney produces stunning results. Our generator creates prompts optimized for both tools.' } },
      { '@type': 'Question', name: 'Can AI make battle maps for tabletop RPGs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! AI can generate tactical battle maps with grid overlays suitable for D&D, Pathfinder, and other tabletop RPGs. Our generator includes a Battle Map type that creates prompts with grid squares, terrain features that affect gameplay (cover, elevation, chokepoints), and scale indicators.' } },
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
        <meta name="keywords" content="fantasy map generator, ai d&d map, fantasy map maker, rpg map generator, ai world building map, dungeon map generator, battle map ai, tolkien map style, fantasy cartography ai" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🗺️</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Fantasy Map Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Create stunning fantasy maps for D&amp;D, RPGs, and world-building. Get the perfect AI prompt — works with ChatGPT, Midjourney &amp; DALL-E.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: ACCENT_LIGHT, borderRadius: 99, fontSize: 13, fontWeight: 600, color: ACCENT_DARK }}>8 map types</span>
            <span style={{ padding: '6px 14px', background: '#FEF3C7', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#92400E' }}>8 art styles</span>
            <span style={{ padding: '6px 14px', background: '#EDE9FE', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>16 terrain features</span>
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

        {/* Step 1: Map Type */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Map Type</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>What kind of fantasy map do you need?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {MAP_TYPES.map(m => (
                <button
                  key={m.id}
                  onClick={() => setMapType(m.id)}
                  style={{
                    padding: '16px 14px',
                    border: mapType === m.id ? `3px solid ${m.color}` : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: mapType === m.id ? `${m.color}10` : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{m.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#111827' }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>{m.desc}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => mapType && setStep(2)}
              disabled={!mapType}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: mapType ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: mapType ? 'pointer' : 'default', marginTop: 24 }}
            >
              Next: Choose Art Style →
            </button>
          </div>
        )}

        {/* Step 2: Art Style */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Art Style</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>How should your {MAP_TYPES.find(m => m.id === mapType)?.label?.toLowerCase() || 'map'} look?</p>

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
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: style ? ACCENT : '#D1D5DB', border: 'none', borderRadius: 99, cursor: style ? 'pointer' : 'default' }}
              >
                Next: Terrain & Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Terrain + Details */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Customize Your Map</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Add terrain, name your world, and fine-tune the details.</p>

            {/* Map Name */}
            <label style={{ display: 'block', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Map Name</label>
            <input
              type="text" value={mapName} onChange={e => setMapName(e.target.value)}
              placeholder='e.g. "The Realm of Eldoria", "Shadowfell Depths"'
              maxLength={60}
              style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginBottom: 24, outline: 'none', boxSizing: 'border-box' }}
            />

            {/* Terrain */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>
                Terrain Elements ({terrain.length}/6)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TERRAIN_OPTIONS.map(item => {
                  const sel = terrain.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleTerrain(item)}
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

            {/* Toggles */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Map Features</label>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => setCompassRose(!compassRose)}
                  style={{
                    padding: '10px 18px',
                    fontSize: 14,
                    fontWeight: 600,
                    color: compassRose ? '#FFF' : '#374151',
                    background: compassRose ? ACCENT : '#FFF',
                    border: compassRose ? `2px solid ${ACCENT}` : '1.5px solid #D1D5DB',
                    borderRadius: 99,
                    cursor: 'pointer',
                  }}
                >
                  🧭 Compass Rose
                </button>
                <button
                  onClick={() => setScaleLegend(!scaleLegend)}
                  style={{
                    padding: '10px 18px',
                    fontSize: 14,
                    fontWeight: 600,
                    color: scaleLegend ? '#FFF' : '#374151',
                    background: scaleLegend ? ACCENT : '#FFF',
                    border: scaleLegend ? `2px solid ${ACCENT}` : '1.5px solid #D1D5DB',
                    borderRadius: 99,
                    cursor: 'pointer',
                  }}
                >
                  📏 Scale / Legend
                </button>
              </div>
            </div>

            {/* Extra Details */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 6 }}>Extra Details</label>
              <input
                type="text" value={extra} onChange={e => setExtra(e.target.value)}
                placeholder='e.g. "Two warring kingdoms separated by a cursed river"'
                style={{ width: '100%', padding: '14px 16px', fontSize: 15, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>← Back</button>
              <button
                onClick={() => setStep(4)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: ACCENT, border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate Map Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result — email gated */}
        {step === 4 && (
          <div>
            {/* Summary Card */}
            <div style={{
              background: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #059669 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>🗺️</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#A7F3D0', marginBottom: 8 }}>
                {mapName ? mapName.toUpperCase() : 'YOUR FANTASY MAP'}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>
                {MAP_TYPES.find(m => m.id === mapType)?.icon} {mapName || 'Fantasy Map'}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {MAP_TYPES.find(m => m.id === mapType)?.icon} {MAP_TYPES.find(m => m.id === mapType)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {STYLES.find(s => s.id === style)?.icon} {STYLES.find(s => s.id === style)?.label}
                </span>
              </div>

              {terrain.length > 0 && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#A7F3D0', marginBottom: 6 }}>TERRAIN</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {terrain.map(t => (
                      <span key={t} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 99, fontSize: 12 }}>{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                {compassRose && <span style={{ fontSize: 12, color: '#A7F3D0' }}>🧭 Compass Rose</span>}
                {scaleLegend && <span style={{ fontSize: 12, color: '#A7F3D0' }}>📏 Scale &amp; Legend</span>}
              </div>

              <div style={{ marginTop: 16, fontSize: 11, color: '#6EE7B7' }}>midastools.co/fantasy-map-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Fantasy Map Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full prompt + get bonus map-making tips free.
                </p>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>{getPreview(prompt)}</pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: ACCENT }}>🔒 Full prompt hidden</span>
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
                    style={{ width: '100%', padding: '16px', fontSize: 17, fontWeight: 700, color: '#FFF', background: loading ? '#6EE7B7' : ACCENT, border: 'none', borderRadius: 99, cursor: loading ? 'default' : 'pointer' }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Map Prompt (Free)'}
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
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? '#7C3AED' : ACCENT, border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: ACCENT_LIGHT, borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: ACCENT_DARK, margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: ACCENT_DARK, fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Midjourney</strong></li>
                    <li>Paste this prompt and hit send</li>
                    <li>For best results, ask the AI to <strong>refine specific areas</strong> in follow-up messages</li>
                    <li>Print your map and bring it to game night!</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setStep(1); setMapName(''); setMapType(''); setStyle(''); setTerrain([]); setCompassRose(true); setScaleLegend(true); setExtra(''); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: ACCENT, background: ACCENT_LIGHT, border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Map
                </button>

                <div style={{ background: `linear-gradient(135deg, #064E3B 0%, #047857 100%)`, borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ AI Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#A7F3D0', margin: '0 0 20px' }}>Fantasy maps, character portraits, landscapes, architecture, and 20+ more styles — all copy-paste ready.</p>
                  <a href={STRIPE_IMAGE_PACK} style={{ display: 'inline-block', background: '#FFF', color: ACCENT, fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}>
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#6EE7B7', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 16 kits for $97</a> (save 85%)
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
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Build Worlds Your Players Will Never Forget</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Whether you&apos;re a DM prepping a campaign, a novelist building a world, or just love fantasy cartography — AI makes it effortless.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Map Types</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Art Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>16</div><div style={{ fontSize: 13, color: '#6B7280' }}>Terrain Features</div></div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How do I create a fantasy map with AI?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Use our free generator to build a detailed prompt describing your ideal map — choose the map type, art style, terrain features, and name your world. Then paste the prompt into ChatGPT (GPT-4o works best for maps), Midjourney, or DALL-E to generate your map instantly.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>What&apos;s the best AI tool for D&amp;D maps?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>ChatGPT with GPT-4o and Midjourney both produce excellent D&amp;D maps. For battle maps and dungeon maps with grid overlays, ChatGPT is great because you can iterate on the layout. For artistic world maps and regional maps, Midjourney produces stunning results.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Can AI make battle maps for tabletop RPGs?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Yes! AI can generate tactical battle maps with grid overlays suitable for D&amp;D, Pathfinder, and other tabletop RPGs. Our generator includes a Battle Map type that creates prompts with terrain features, cover positions, chokepoints, and scale indicators — everything you need for combat encounters.</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* Related */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/image-prompt-builder" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Image Prompt Builder — 25+ styles →
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art →
            </Link>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style prompts →
            </Link>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy →
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
