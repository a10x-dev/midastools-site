import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const ACCENT = '#3B5FFF';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── PHOTO CATEGORIES ──────────────────────────────── */
const CATEGORIES = [
  { id: 'selfie', label: 'Selfie', icon: '🤳', color: '#F59E0B' },
  { id: 'outfit', label: 'Outfit', icon: '👗', color: '#8B5CF6' },
  { id: 'room', label: 'Room / Space', icon: '🏠', color: '#10B981' },
  { id: 'food', label: 'Food / Cooking', icon: '🍳', color: '#EF4444' },
  { id: 'pet', label: 'Pet', icon: '🐕', color: '#EC4899' },
  { id: 'dating', label: 'Dating Profile', icon: '💘', color: '#F97316' },
  { id: 'linkedin', label: 'LinkedIn Photo', icon: '💼', color: '#3B82F6' },
  { id: 'instagram', label: 'Instagram Post', icon: '📸', color: '#A855F7' },
];

/* ── ROAST STYLES ──────────────────────────────────── */
const ROAST_STYLES = [
  { id: 'brutal', label: 'Brutally Honest', icon: '🔥', desc: 'No filter, no mercy', color: '#EF4444' },
  { id: 'sarcastic', label: 'Sarcastic Comedian', icon: '🎤', desc: 'Stand-up comic energy', color: '#F59E0B' },
  { id: 'ramsay', label: 'Gordon Ramsay', icon: '👨‍🍳', desc: '"It\'s RAW!" vibes', color: '#F97316' },
  { id: 'meangirls', label: 'Mean Girls', icon: '💅', desc: 'Backhanded compliments', color: '#EC4899' },
  { id: 'british', label: 'British Dry Wit', icon: '🫖', desc: 'Devastatingly polite', color: '#6366F1' },
  { id: 'supportive', label: 'Supportive (with a twist)', icon: '🤗', desc: 'Nice... until the end', color: '#10B981' },
];

/* ── INTENSITY LABELS ──────────────────────────────── */
const INTENSITY_LABELS = [
  'Gentle nudge',
  'Light jab',
  'Solid roast',
  'Absolutely brutal',
  'Scorched earth',
];
const INTENSITY_EMOJIS = ['😊', '😏', '😈', '🔥', '💀'];

/* ── PROMPT BUILDER ──────────────────────────────────── */
function buildPrompt({ category, roastStyle, description, intensity }) {
  const cat = CATEGORIES.find(x => x.id === category);
  const style = ROAST_STYLES.find(x => x.id === roastStyle);

  const intensityText = {
    1: 'Keep the roast relatively gentle — more playful teasing than actual burns. Think friendly ribbing at a dinner party.',
    2: 'Go for light but noticeable jabs. The kind of roast where the person laughs but also goes "wait... hey!"',
    3: 'Give a solid, well-crafted roast. Funny but pointed. The kind of roast that gets screenshots shared in group chats.',
    4: 'Go hard. This should be brutally funny. Every line should be quotable. No pulling punches but keep it clever, not mean-spirited.',
    5: 'MAXIMUM DEVASTATION. This is a scorched-earth, leave-no-survivors roast. Every sentence should be a standalone burn. The kind of roast that makes people set their phone down and stare at the ceiling. Still clever, never cruel — but absolutely savage.',
  };

  const styleInstructions = {
    'brutal': `You are a brutally honest friend who says what everyone is thinking but nobody dares to say. No sugarcoating. No filter. Just raw, unfiltered truth bombs delivered with zero remorse. Your roasts are painfully accurate observations.`,
    'sarcastic': `You are a sarcastic stand-up comedian doing a crowd-work bit. Every observation is dripping with sarcasm. Use callbacks, misdirection, and the classic "No but seriously..." setup. Your style is witty, rapid-fire, and heavy on irony.`,
    'ramsay': `You are Gordon Ramsay reviewing this photo as if it were a dish served to you in Hell's Kitchen. Start with dramatic disappointment. Use Ramsay-isms like "This is an absolute DISGRACE", "My grandmother could do better and she's DEAD", "It's bloody RAW", and "GET OUT". End every major point with an exasperated chef reference.`,
    'meangirls': `You are Regina George from Mean Girls. Your roasts are backhanded compliments disguised as concern. Start with "Oh sweetie..." or "That's SO brave of you..." Every insult sounds like a compliment on the surface. Use phrases like "I'm not saying this to be mean, but...", "Love that for you", and "You're like, really pretty... for someone who..."`,
    'british': `You are a devastatingly polite British person delivering the most cutting remarks in the most civilized manner possible. Think Hugh Grant crossed with a disappointed professor. Use phrases like "How shall I put this delicately...", "One might suggest...", "Bless your heart" (British edition), and "I'm sure you tried your very best." The politeness makes the burns hit 10x harder.`,
    'supportive': `You are a seemingly supportive, encouraging friend — but every compliment has a devastating twist at the end. Start every observation with genuine warmth and enthusiasm, then stick the landing with an absolutely brutal punchline. The whiplash between support and savagery is the comedy. Example format: "I LOVE how confident you are to post this! Most people would have deleted it immediately, but not you!"`,
  };

  const categoryContext = {
    'selfie': `The user is sharing a selfie photo. Focus your roast on facial expressions, angles, filters (or lack thereof), lighting choices, background details, and the general energy of the selfie. Classic selfie roast territory: duck face, bathroom mirror, "candid" that took 47 takes, etc.`,
    'outfit': `The user is sharing an outfit photo. Roast the fashion choices, color combinations, fit, occasion-appropriateness, accessories (or lack of), and overall style. Reference fashion trends, "who told you that looked good", and whether they dressed in the dark.`,
    'room': `The user is sharing a photo of their room or living space. Roast the decor, cleanliness, furniture choices, organization (or chaos), wall art, lighting, and overall vibes. Target things like LED strip lights, tapestries, cable management nightmares, and suspicious stains.`,
    'food': `The user is sharing a food or cooking photo. Roast it like a food critic from hell. Comment on plating, color, texture, portion size, and whether it actually looks edible. Reference cooking shows, Michelin stars (or lack thereof), and whether the health department should be notified.`,
    'pet': `The user is sharing a pet photo. DO NOT roast the pet (pets are innocent). Instead, roast the OWNER through the pet's perspective. What does the pet's expression say about its owner? The pet is judging them. The pet deserves better. The pet has seen things.`,
    'dating': `The user is sharing a dating profile photo. This is PRIME roast territory. Roast the photo choice, the angle, the expression, what it communicates to potential matches, and why their DMs are empty. Reference swiping left, "holding a fish", "group photo where you can't tell who they are", etc.`,
    'linkedin': `The user is sharing a LinkedIn photo. Roast the corporate energy, the forced professional smile, the background choice, and the overall "I'm a team player" vibes. Reference hustle culture, "thought leaders", and that one person who posts inspirational quotes about synergy.`,
    'instagram': `The user is sharing an Instagram post. Roast the aesthetic choices, filter abuse, caption-worthiness, and the gap between the photo and reality. Reference "doing it for the gram", engagement farming, and the 200 deleted attempts before this one.`,
  };

  return `You are an AI Photo Roast Master. ${styleInstructions[roastStyle]}

ROAST INTENSITY: ${intensity}/5 — ${intensityText[intensity]}

CONTEXT: ${categoryContext[category]}

THE USER DESCRIBES THEIR PHOTO AS:
"${description}"

YOUR TASK:
1. Based on the description above, deliver a hilarious ${style.label}-style roast of this ${cat.label.toLowerCase()} photo
2. Structure your roast with 3-5 distinct burn points, each one building on the last
3. After the roast, deliver ONE backhanded compliment (something that sounds nice but is actually another burn)
4. End with a "Fix Suggestion" section — give 2-3 genuinely funny but surprisingly helpful tips on how they could actually improve the photo
5. Keep the whole thing entertaining, quotable, and screenshot-worthy

FORMAT YOUR RESPONSE LIKE THIS:

🔥 THE ROAST 🔥
[Your 3-5 roast points here, each as its own paragraph]

💐 THE "COMPLIMENT"
[One devastating backhanded compliment]

🛠️ THE FIX
[2-3 actually useful tips delivered with humor]

Remember: The goal is to make them laugh so hard they screenshot this and send it to every group chat. Be creative, specific to what they described, and absolutely merciless (within the intensity level). Never be actually cruel or target things people can't change — roast the CHOICES, not the person.`;
}

function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 3).join('\n') + '\n\n...';
}

export default function PhotoRoastGenerator() {
  const [category, setCategory] = useState('');
  const [roastStyle, setRoastStyle] = useState('');
  const [description, setDescription] = useState('');
  const [intensity, setIntensity] = useState(3);
  const [generated, setGenerated] = useState(false);
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const canGenerate = category && roastStyle && description.trim().length > 10;
  const prompt = canGenerate ? buildPrompt({ category, roastStyle, description, intensity }) : '';

  const handleGenerate = () => {
    if (canGenerate) setGenerated(true);
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
        body: JSON.stringify({ email, source: 'photo-roast-generator', referrer: document.referrer || '' }),
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

  const title = 'AI Photo Roast Generator — Get Brutally Funny AI Roasts (Free)';
  const desc = 'Get a hilarious AI-powered roast of any photo. Choose your roast style — Gordon Ramsay, Mean Girls, British Dry Wit & more. Generate the perfect prompt for ChatGPT or Claude. The viral TikTok trend, free.';
  const url = 'https://www.midastools.co/photo-roast-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Photo Roast Generator',
    description: desc,
    url,
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does the AI photo roast generator work?', acceptedAnswer: { '@type': 'Answer', text: 'Describe your photo (selfie, outfit, room, food, etc.), pick a roast style and intensity, and we generate a perfectly crafted prompt. Paste it into ChatGPT or Claude with your photo for a hilarious, personalized roast.' } },
      { '@type': 'Question', name: 'Can ChatGPT roast my photo?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! ChatGPT (especially GPT-4o) can analyze photos and deliver funny roasts. The key is giving it the right prompt — that\'s exactly what our generator creates. Upload your photo and paste the prompt for the best results.' } },
      { '@type': 'Question', name: 'Is the AI photo roast mean or harmful?', acceptedAnswer: { '@type': 'Answer', text: 'Our roasts are designed to be funny, not hurtful. The prompts instruct the AI to roast choices (outfits, angles, decor) rather than unchangeable traits. Think comedy roast, not cyberbullying. You control the intensity from gentle teasing to savage burns.' } },
      { '@type': 'Question', name: 'What roast styles are available?', acceptedAnswer: { '@type': 'Answer', text: 'We offer 6 roast styles: Brutally Honest, Sarcastic Comedian, Gordon Ramsay, Mean Girls, British Dry Wit, and Supportive (with a twist). Each style completely changes the tone and humor of the roast.' } },
      { '@type': 'Question', name: 'Why is AI photo roasting trending on TikTok?', acceptedAnswer: { '@type': 'Answer', text: 'AI photo roasts went viral on TikTok because the results are hilarious, shareable, and surprisingly accurate. People love seeing AI deliver savage commentary on their selfies, outfits, and rooms. The screenshot-worthy format makes it perfect for social media.' } },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="keywords" content="ai photo roast, roast my photo ai, chatgpt roast my photo, ai roast generator, ai photo roast tiktok, funny ai roast, gordon ramsay ai roast, mean girls ai roast" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Photo Roast Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Get a brutally funny AI roast of any photo. Pick your style, describe your pic, and get a savage prompt for ChatGPT or Claude.
          </p>
          <div style={{ display: 'inline-flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', background: '#FEE2E2', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#991B1B' }}>Viral on TikTok</span>
            <span style={{ padding: '6px 14px', background: '#EDE9FE', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#7C3AED' }}>6 roast styles</span>
            <span style={{ padding: '6px 14px', background: '#FEF3C7', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#92400E' }}>5 intensity levels</span>
          </div>
        </div>

        {!generated ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Section 1: Photo Category */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>What Kind of Photo?</h2>
              <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>Pick the photo category so the AI knows exactly what to roast.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {CATEGORIES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    style={{
                      padding: '14px 8px',
                      border: category === c.id ? `3px solid ${c.color}` : '2px solid #E5E7EB',
                      borderRadius: 12,
                      background: category === c.id ? `${c.color}15` : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{c.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#111827' }}>{c.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Section 2: Roast Style */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Your Roast Style</h2>
              <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>Who do you want roasting your photo?</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {ROAST_STYLES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setRoastStyle(s.id)}
                    style={{
                      padding: '16px 14px',
                      border: roastStyle === s.id ? `3px solid ${s.color}` : '2px solid #E5E7EB',
                      borderRadius: 14,
                      background: roastStyle === s.id ? `${s.color}10` : '#FFF',
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
            </div>

            {/* Section 3: Description */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Describe Your Photo</h2>
              <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                The more detail you give, the more specific (and devastating) the roast will be.
              </p>

              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={
                  category === 'selfie' ? 'e.g. "Bathroom mirror selfie with messy hair, no filter, fluorescent lighting, peace sign"' :
                  category === 'outfit' ? 'e.g. "Oversized hoodie with cargo pants, crocs with socks, backwards cap at a fancy restaurant"' :
                  category === 'room' ? 'e.g. "Gaming setup with RGB lights everywhere, energy drink cans on desk, clothes on the floor"' :
                  category === 'food' ? 'e.g. "Attempted homemade sushi that looks like a crime scene, plated on a paper plate"' :
                  category === 'pet' ? 'e.g. "My cat sitting on my laptop keyboard looking annoyed, while I try to work"' :
                  category === 'dating' ? 'e.g. "Holding a fish I caught, wearing sunglasses, standing next to my car"' :
                  category === 'linkedin' ? 'e.g. "Headshot with fake smile, corporate background, wearing a blazer over a t-shirt"' :
                  category === 'instagram' ? 'e.g. "Golden hour photo at a cafe pretending to read a book I\'ve never opened"' :
                  'e.g. "Describe what\'s in your photo — the more detail, the funnier the roast"'
                }
                maxLength={500}
                rows={4}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: 15,
                  border: '2px solid #E5E7EB',
                  borderRadius: 12,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  lineHeight: 1.6,
                }}
              />
              <div style={{ textAlign: 'right', fontSize: 12, color: '#9CA3AF', marginTop: 4 }}>
                {description.length}/500
              </div>
            </div>

            {/* Section 4: Intensity Slider */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Roast Intensity</h2>
              <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>How hard should the AI go?</p>

              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>{INTENSITY_EMOJIS[intensity - 1]}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#111827' }}>Level {intensity}: {INTENSITY_LABELS[intensity - 1]}</div>
              </div>

              <div style={{ padding: '0 8px' }}>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={intensity}
                  onChange={e => setIntensity(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: 8,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    background: `linear-gradient(to right, #FCD34D 0%, #F59E0B 25%, #EF4444 50%, #DC2626 75%, #991B1B 100%)`,
                    borderRadius: 99,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ fontSize: 11, color: '#9CA3AF' }}>Gentle</span>
                  <span style={{ fontSize: 11, color: '#9CA3AF' }}>Savage</span>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: 18,
                fontWeight: 800,
                color: '#FFF',
                background: canGenerate
                  ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)'
                  : '#D1D5DB',
                border: 'none',
                borderRadius: 99,
                cursor: canGenerate ? 'pointer' : 'default',
                boxShadow: canGenerate ? '0 4px 14px rgba(239,68,68,0.4)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {canGenerate ? `Generate My Roast Prompt ${INTENSITY_EMOJIS[intensity - 1]}` : 'Fill in all fields above to generate'}
            </button>
          </div>
        ) : (
          /* ── RESULT SECTION ──────────────────────────────── */
          <div>
            {/* Preview Roast Card — screenshot-worthy */}
            <div style={{
              background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #0F172A 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 100, opacity: 0.06 }}>🔥</div>
              <div style={{ position: 'absolute', bottom: -10, left: -10, fontSize: 80, opacity: 0.04 }}>💀</div>

              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#F87171', marginBottom: 12 }}>
                AI PHOTO ROAST
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 36 }}>{CATEGORIES.find(c => c.id === category)?.icon}</span>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800 }}>
                    {CATEGORIES.find(c => c.id === category)?.label} Roast
                  </div>
                  <div style={{ fontSize: 14, color: '#9CA3AF' }}>
                    {ROAST_STYLES.find(s => s.id === roastStyle)?.icon}{' '}
                    {ROAST_STYLES.find(s => s.id === roastStyle)?.label} Style
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#FCA5A5' }}>
                  Intensity: {intensity}/5 {INTENSITY_EMOJIS[intensity - 1]}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: 99, fontSize: 13, fontWeight: 600, color: '#D1D5DB' }}>
                  {INTENSITY_LABELS[intensity - 1]}
                </span>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                padding: 16,
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#6B7280', marginBottom: 8 }}>PHOTO DESCRIPTION</div>
                <p style={{ fontSize: 14, color: '#E5E7EB', lineHeight: 1.6, margin: 0 }}>
                  &quot;{description.length > 150 ? description.substring(0, 150) + '...' : description}&quot;
                </p>
              </div>

              <div style={{ marginTop: 16, fontSize: 11, color: '#4B5563' }}>midastools.co/photo-roast-generator</div>
            </div>

            {/* Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Roast Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full roast prompt + get 5 bonus roast style prompts free.
                </p>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.6 }}>{getPreview(prompt)}</pre>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(transparent, #F9FAFB 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#EF4444' }}>🔒 Full roast prompt hidden</span>
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
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#FFF',
                      background: loading ? '#FCA5A5' : 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                      border: 'none',
                      borderRadius: 99,
                      cursor: loading ? 'default' : 'pointer',
                    }}
                  >
                    {loading ? 'Unlocking...' : 'Unlock My Roast Prompt (Free)'}
                  </button>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>No spam ever. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              <div style={{ background: '#FFF', border: '2px solid #EF4444', borderRadius: 16, padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#EF4444' }}>Roast Prompt Unlocked!</h3>
                  <button
                    onClick={copyPrompt}
                    style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#FFF', background: copied ? '#059669' : '#EF4444', border: 'none', borderRadius: 99, cursor: 'pointer' }}
                  >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>

                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                  <pre style={{ fontSize: 13, color: '#374151', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.7 }}>{prompt}</pre>
                </div>

                <div style={{ background: '#FEF2F2', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#991B1B', margin: '0 0 6px' }}>How to use this prompt:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, color: '#991B1B', fontSize: 14, lineHeight: 1.8 }}>
                    <li>Open <strong>ChatGPT</strong> (GPT-4o) or <strong>Claude</strong></li>
                    <li><strong>Upload your photo</strong> along with the prompt</li>
                    <li>Paste this prompt and hit send</li>
                    <li>Screenshot the roast and send it to every group chat</li>
                  </ol>
                </div>

                <button
                  onClick={() => { setGenerated(false); setCategory(''); setRoastStyle(''); setDescription(''); setIntensity(3); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#EF4444', background: '#FEF2F2', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Roast Another Photo
                </button>

                <div style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 1000+ AI Prompts?</p>
                  <p style={{ fontSize: 14, color: '#9CA3AF', margin: '0 0 20px' }}>Roasts, image prompts, business tools, coding assistants, and 20+ categories — all copy-paste ready.</p>
                  <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#EF4444', color: '#FFF', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none' }}>
                    Get All 16 Kits — $97
                  </a>
                </div>
              </div>
            )}

            {!unlocked && (
              <button
                onClick={() => setGenerated(false)}
                style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}
              >
                ← Back to Edit
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The AI Roast Trend Taking Over TikTok</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Millions of people are getting AI to roast their photos. The results are hilarious, shareable, and absolutely savage. Your turn.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#EF4444' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Photo Types</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#EF4444' }}>6</div><div style={{ fontSize: 13, color: '#6B7280' }}>Roast Styles</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#EF4444' }}>5</div><div style={{ fontSize: 13, color: '#6B7280' }}>Intensity Levels</div></div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>How does the AI photo roast generator work?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Describe your photo, pick a roast style (like Gordon Ramsay or Mean Girls), set the intensity, and we generate a perfectly crafted prompt. Paste it into ChatGPT or Claude with your photo for a personalized, hilarious roast.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Can ChatGPT actually roast my photo?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Yes! ChatGPT with GPT-4o can analyze uploaded photos and deliver surprisingly accurate roasts. The key is the prompt — our generator creates detailed instructions that get the funniest, most specific results possible.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Is the AI roast mean or harmful?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Our prompts are designed for comedy, not cruelty. The AI roasts choices (outfits, angles, decor) rather than unchangeable traits. Think comedy roast dinner, not cyberbullying. You control the intensity from gentle teasing to savage burns.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Which roast style is the funniest?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>Gordon Ramsay and Mean Girls are the most popular. Gordon Ramsay works especially well for food and room photos, while Mean Girls is perfect for selfies and outfit roasts. British Dry Wit is the sleeper hit — devastatingly polite burns that take a second to land.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Why is AI photo roasting viral on TikTok?</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>AI photo roasts went viral because the results are hilarious, surprisingly accurate, and extremely shareable. The screenshot-worthy format makes it perfect for group chats and social media. People love the mix of self-deprecating humor and AI&apos;s unfiltered honesty.</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-prompt-mega-pack" name="AI Prompt Mega Pack" price="$29" />
        </div>

        {/* Related Tools */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/action-figure-generator" style={{ color: ACCENT, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a toy →
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: ACCENT, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art →
            </Link>
            <Link href="/ghibli-prompt-generator" style={{ color: ACCENT, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Art Generator — Studio Ghibli style prompts →
            </Link>
            <Link href="/tattoo-generator" style={{ color: ACCENT, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Tattoo Generator — Design your next tattoo →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
