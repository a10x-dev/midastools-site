import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import RelatedKitBanner from '../components/RelatedKitBanner';

const STRIPE_IMAGE_PACK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* -- FOOD CHARACTERS ----------------------------------- */
const FOODS = [
  { id: 'tomato', label: 'Tomato', icon: '\uD83C\uDF45', desc: 'Red, round, and ready for drama' },
  { id: 'avocado', label: 'Avocado', icon: '\uD83E\uDD51', desc: 'Trendy, always extra, peak millennial' },
  { id: 'banana', label: 'Banana', icon: '\uD83C\uDF4C', desc: 'Slippery, dramatic, scene-stealer' },
  { id: 'strawberry', label: 'Strawberry', icon: '\uD83C\uDF53', desc: 'Sweet exterior, chaotic interior' },
  { id: 'broccoli', label: 'Broccoli', icon: '\uD83E\uDD66', desc: 'The misunderstood hero nobody asked for' },
  { id: 'egg', label: 'Egg', icon: '\uD83E\uDD5A', desc: 'Fragile, cracks under pressure' },
  { id: 'carrot', label: 'Carrot', icon: '\uD83E\uDD55', desc: 'Tall, confident, always showing off' },
  { id: 'lemon', label: 'Lemon', icon: '\uD83C\uDF4B', desc: 'Sour attitude, sharp tongue' },
  { id: 'pineapple', label: 'Pineapple', icon: '\uD83C\uDF4D', desc: 'Prickly outside, sweet inside' },
  { id: 'mushroom', label: 'Mushroom', icon: '\uD83C\uDF44', desc: 'Mysterious, kept in the dark' },
  { id: 'onion', label: 'Onion (with tears)', icon: '\uD83E\uDDC5', desc: 'Makes everyone cry, layers of secrets' },
  { id: 'custom', label: 'Custom Food', icon: '\u270F\uFE0F', desc: 'Type your own food character' },
];

/* -- DRAMA GENRES -------------------------------------- */
const GENRES = [
  { id: 'betrayal', label: 'Romantic Betrayal', icon: '\uD83D\uDC94', desc: '"I saw you with the Blender..."', color: '#ef4444' },
  { id: 'cooking', label: 'Cooking Competition', icon: '\uD83D\uDD25', desc: 'Who will survive the kitchen?', color: '#f97316' },
  { id: 'office', label: 'Office Drama', icon: '\uD83D\uDCBC', desc: 'Cubicle politics, food-style', color: '#6366f1' },
  { id: 'reality', label: 'Reality TV Confessional', icon: '\uD83C\uDFA5', desc: '"I\'m not here to make friends"', color: '#ec4899' },
  { id: 'crime', label: 'Crime Thriller', icon: '\uD83D\uDD2A', desc: 'Who got sliced? A kitchen noir', color: '#1e293b' },
  { id: 'comedy', label: 'Comedy Sitcom', icon: '\uD83D\uDE02', desc: 'Laugh track, awkward pauses', color: '#eab308' },
  { id: 'telenovela', label: 'Telenovela', icon: '\uD83D\uDE31', desc: 'Maximum drama, dramatic zoom-ins', color: '#dc2626' },
  { id: 'horror', label: 'Horror Kitchen', icon: '\uD83D\uDE28', desc: 'The chef is coming... RUN', color: '#7c3aed' },
];

/* -- SCENE SETTINGS ------------------------------------ */
const SCENES = [
  { id: 'counter', label: 'Kitchen Counter', desc: 'Classic stage for food drama' },
  { id: 'fridge', label: 'Refrigerator Interior', desc: 'Cold, dark, full of secrets' },
  { id: 'grocery', label: 'Grocery Store Aisle', desc: 'Public confrontation territory' },
  { id: 'cutting-board', label: 'Cutting Board (dramatic!)', desc: 'Life or death stakes' },
  { id: 'restaurant', label: 'Restaurant Kitchen', desc: 'High-pressure, Gordon Ramsay vibes' },
  { id: 'farmers-market', label: 'Farmer\'s Market', desc: 'Outdoor drama, organic chaos' },
  { id: 'food-truck', label: 'Food Truck', desc: 'Cramped quarters, big feelings' },
  { id: 'dinner-table', label: 'Dinner Table', desc: 'Formal setting, informal behavior' },
];

/* -- EMOTIONAL TONES ----------------------------------- */
const TONES = [
  { id: 'dramatic', label: 'Over-the-top Dramatic', desc: 'Maximum soap opera energy' },
  { id: 'dark-comedy', label: 'Dark Comedy', desc: 'Funny but messed up' },
  { id: 'wholesome', label: 'Wholesome Cute', desc: 'Adorable and heartwarming' },
  { id: 'sarcastic', label: 'Sarcastic / Petty', desc: 'Shade-throwing energy' },
  { id: 'tearful', label: 'Tearful Soap Opera', desc: 'Tissues required' },
  { id: 'thriller', label: 'Thriller Suspense', desc: 'Edge of your seat tension' },
];

/* -- OUTPUT TYPE --------------------------------------- */
const OUTPUT_TYPES = [
  { id: 'image', label: 'Image Prompt', desc: 'For ChatGPT / DALL-E / Midjourney', icon: '\uD83D\uDDBC\uFE0F' },
  { id: 'video', label: 'Video Prompt', desc: 'For Veo 3.1 / Kling 3.0 / Runway', icon: '\uD83C\uDFAC' },
];

/* -- PROMPT BUILDER ------------------------------------ */
function buildPrompt({ char1, char1Custom, char2, char2Custom, genre, scene, tone, outputType }) {
  const food1 = char1 === 'custom' ? (char1Custom || 'Mystery Food') : FOODS.find(f => f.id === char1)?.label || 'Tomato';
  const food2 = char2 === 'custom' ? (char2Custom || 'Mystery Food') : FOODS.find(f => f.id === char2)?.label || 'Avocado';
  const icon1 = char1 === 'custom' ? '\uD83C\uDF7D\uFE0F' : FOODS.find(f => f.id === char1)?.icon || '\uD83C\uDF45';
  const icon2 = char2 === 'custom' ? '\uD83C\uDF7D\uFE0F' : FOODS.find(f => f.id === char2)?.icon || '\uD83E\uDD51';
  const g = GENRES.find(x => x.id === genre);
  const sc = SCENES.find(x => x.id === scene);
  const t = TONES.find(x => x.id === tone);

  const genreInstructions = {
    betrayal: `The scene depicts a romantic betrayal storyline: ${food1} has just discovered ${food2} was secretly seeing another food behind their back. ${food1} is confronting ${food2} with heartbreak and fury. There should be dramatic tears (juice drops), accusatory pointing, and a third food character partially visible in the background looking guilty.`,
    cooking: `The scene is an intense cooking competition: ${food1} and ${food2} are rival contestants on a dramatic cooking show. They stand at opposing prep stations, glaring at each other with competitive fire. A chef judge looms ominously in the background. One is clearly sabotaging the other's dish.`,
    office: `The scene is an office workplace drama: ${food1} and ${food2} work in a tiny food-office cubicle. ${food1} just got the promotion that ${food2} deserved. There are passive-aggressive sticky notes, a "Employee of the Month" photo being torn down, and watercooler gossip happening in the background.`,
    reality: `The scene is a reality TV confessional: ${food1} is sitting in the confessional chair, talking directly to camera about ${food2}. Split screen showing ${food2} doing something shady in the background. Reality TV style graphics, dramatic captions, and a "PREVIOUSLY ON..." banner.`,
    crime: `The scene is a crime thriller / kitchen noir: A dramatic crime scene on the cutting board. ${food1} is the detective investigating, wearing a tiny detective hat and holding a magnifying glass. ${food2} is the prime suspect, sweating nervously. Yellow crime tape, dramatic shadows, and knife marks as evidence.`,
    comedy: `The scene is a comedy sitcom: ${food1} and ${food2} are roommates in a classic sitcom setup. ${food1} just did something ridiculous and ${food2} is doing a deadpan stare at the camera (breaking the fourth wall). Laugh track energy, bright sitcom lighting, a couch, and a live studio audience of tiny foods.`,
    telenovela: `The scene is a dramatic telenovela: ${food1} and ${food2} in an intense close-up confrontation with extreme dramatic zoom. ${food1} is gasping with one hand on their chest. ${food2} is revealing a shocking secret. Rain is falling indoors for no reason. Dramatic Spanish guitar music implied through visual cues. Extreme lighting contrasts.`,
    horror: `The scene is a horror kitchen scenario: ${food1} and ${food2} are hiding behind a pepper grinder, terrified. A giant chef's knife casts a shadow over them. The kitchen is dark with dramatic backlighting from the stove. One of them is whispering "don't move." Horror movie poster composition with unsettling shadows.`,
  };

  const toneInstructions = {
    dramatic: `The emotional tone is MAXIMUM over-the-top dramatic — exaggerated facial expressions, dramatic lighting with rim lights and shadows, wind blowing for no reason, tears glistening, heroic/tragic poses. Think Oscar-bait movie poster energy.`,
    'dark-comedy': `The emotional tone is dark comedy — the situation is objectively terrible but presented in a funny, absurd way. Deadpan expressions mixed with horrifying situations. The humor comes from the contrast between the cute food characters and the dark subject matter.`,
    wholesome: `The emotional tone is wholesome and cute — even the drama is adorable. Big sparkly eyes, soft pastel accents, the conflict is mild and sweet. Both characters are lovable even when arguing. Studio Ghibli meets Pixar warmth.`,
    sarcastic: `The emotional tone is sarcastic and petty — eye-rolling, side-eye glances, crossed arms, smug expressions. The drama is fueled by passive-aggressive behavior and shade-throwing. Think Real Housewives energy but with food.`,
    tearful: `The emotional tone is tearful soap opera — mascara running (or juice dripping), clutching a tiny tissue, dramatic fainting poses, reaching out in despair. Rain on the window. Soft focus. Every emotion is cranked to 11.`,
    thriller: `The emotional tone is tense thriller suspense — tight framing, Dutch angles, shadows hiding half the face, nervous glances, something lurking just off-screen. The mood is uneasy. A clock ticking. Sweat drops on the characters.`,
  };

  const sceneInstructions = {
    counter: `The setting is a kitchen counter — granite or marble surface, everyday kitchen items in the background (salt shaker, olive oil bottle, paper towels). The counter is their stage, their world.`,
    fridge: `The setting is INSIDE a refrigerator — cool blue lighting, shelves visible, condiment bottles as background characters, the fridge light creating dramatic illumination. The door is slightly ajar casting a beam of warm light.`,
    grocery: `The setting is a grocery store aisle — fluorescent overhead lighting, product shelves towering like skyscrapers, a shopping cart in the background, price tags visible. Other foods watch from the shelves like an audience.`,
    'cutting-board': `The setting is on a cutting board — wooden cutting board surface with visible knife marks (scars of fallen foods). A knife looms ominously at the edge of frame. This is where the stakes are literally life and death. Vegetable peels scattered like crime scene evidence.`,
    restaurant: `The setting is a professional restaurant kitchen — stainless steel surfaces, hanging pots, the pass with order tickets, steam rising, the chaos of a dinner rush. Gordon Ramsay energy.`,
    'farmers-market': `The setting is an outdoor farmer's market — striped tent canopies, wooden crates, sunlight streaming through, hand-written price signs, a crowd of other produce watching from their baskets.`,
    'food-truck': `The setting is inside a food truck — cramped space, a tiny service window showing the outside world, menu board visible, sizzling sounds implied. Tight quarters make the drama inescapable.`,
    'dinner-table': `The setting is a formal dinner table — white tablecloth, candles, fine china, wine glasses (filled with vinaigrette). A formal setting for extremely informal, chaotic behavior. Other food guests are frozen mid-gasp.`,
  };

  const isVideo = outputType === 'video';

  if (isVideo) {
    return `Create a short AI-generated video (5-10 seconds) of an anthropomorphic food drama scene in the viral "FoodTok" style.

CHARACTERS:
- Character 1: ${icon1} ${food1} — a fully anthropomorphic ${food1.toLowerCase()} with human-like arms, legs, hands, and an expressive face with large emotional eyes, a mouth capable of speaking, and exaggerated facial expressions. The ${food1.toLowerCase()} retains its natural food shape and color/texture but has a complete humanoid body structure. Wearing small clothing accessories that match their personality.
- Character 2: ${icon2} ${food2} — a fully anthropomorphic ${food2.toLowerCase()} with the same level of humanization. Expressive face, limbs, clothing accessories. Their body is the shape of a ${food2.toLowerCase()} but with full human range of motion and emotion.

SCENE & GENRE:
${genreInstructions[genre] || genreInstructions.betrayal}

SETTING:
${sceneInstructions[scene] || sceneInstructions.counter}

EMOTIONAL TONE:
${toneInstructions[tone] || toneInstructions.dramatic}

VIDEO DIRECTION:
The camera starts with a wide establishing shot, then dramatically zooms into a close-up of ${food1}'s face showing their emotional reaction. ${food2} gestures dramatically. The scene should feel like a viral TikTok/Instagram Reel — punchy, expressive, and meme-worthy.

DIALOGUE SUGGESTIONS (add as text overlays or subtitles):
- ${food1}: "I can't believe you'd do this to me... after everything we've been through in the crisper drawer."
- ${food2}: "You never understood me! You just wanted me for my flavor!"
- ${food1}: "We're DONE. I'm moving to the pantry."

STYLE: Pixar/Illumination quality 3D animation, cinematic dramatic lighting, shallow depth of field, vibrant saturated colors. The food characters should look like they belong in a DreamWorks animated film. Hyper-detailed textures on the food surfaces (visible seeds on the strawberry, bumps on the avocado skin, etc.)

TECHNICAL: 16:9 aspect ratio for TikTok/Reels vertical crop compatibility. 24fps cinematic motion. Dramatic orchestral or telenovela music implied through visual pacing.

This is for the viral FoodTok trend — anthropomorphic fruits and vegetables acting out dramatic soap opera scenes. Make it screenshot-worthy, meme-worthy, and instantly shareable.`;
  }

  return `Create a highly detailed illustration of an anthropomorphic food drama scene in the viral "FoodTok" style — cute food characters with human emotions acting out dramatic scenarios.

CHARACTERS:
- Character 1: ${icon1} ${food1} — a fully anthropomorphic ${food1.toLowerCase()} with human-like arms, legs, hands, and an extremely expressive face. Large emotional eyes (think Pixar-style), a mouth capable of dramatic expressions, tiny eyebrows for maximum emotion. The ${food1.toLowerCase()} retains its natural food shape, color, and texture (visible seeds, skin texture, etc.) but has a complete humanoid body. Wearing small clothing accessories that reflect their personality — maybe a tiny jacket, scarf, or hat.
- Character 2: ${icon2} ${food2} — a fully anthropomorphic ${food2.toLowerCase()} with the same level of humanization. Expressive face with big emotional eyes, limbs, and small clothing accessories. Their body is shaped like a ${food2.toLowerCase()} but with full human range of emotion and gesture. Their outfit contrasts with ${food1}'s personality.

SCENE & GENRE:
${genreInstructions[genre] || genreInstructions.betrayal}

SETTING:
${sceneInstructions[scene] || sceneInstructions.counter}

EMOTIONAL TONE:
${toneInstructions[tone] || toneInstructions.dramatic}

COMPOSITION:
Frame the scene like a movie poster or key dramatic moment. The two food characters should be the clear focal point, with the setting providing context and atmosphere. Include small background details that reward closer inspection (other tiny food characters reacting, relevant props, environmental storytelling).

DIALOGUE SUGGESTIONS (include as speech bubbles or text overlays):
- ${food1}: "I can't believe you'd do this to me... after everything we've been through in the crisper drawer."
- ${food2}: "You never understood me! You just wanted me for my flavor!"
- ${food1}: "We're DONE. I'm moving to the pantry."

STYLE: Pixar/Illumination quality 3D render OR high-quality digital illustration. Cinematic dramatic lighting with rim lights, volumetric atmosphere, and depth of field. Vibrant, saturated colors. The food characters should look like they belong in a DreamWorks or Pixar short film. Hyper-detailed textures on the food surfaces (visible seeds, bumps, skin pores, etc.) contrasted with smooth, expressive cartoon faces.

The overall image should be instantly shareable on TikTok, Instagram, and Twitter. It should make people laugh, screenshot it, and tag their friends. This is for the viral FoodTok trend of anthropomorphic food drama — make it meme-worthy, emotionally intense, and impossibly cute at the same time.`;
}

/* -- PREVIEW (truncated prompt) ------------------------- */
function getPreview(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim());
  return lines.slice(0, 2).join('\n') + '\n\n...';
}

export default function FoodDramaGenerator() {
  const [step, setStep] = useState(1);
  const [char1, setChar1] = useState('');
  const [char1Custom, setChar1Custom] = useState('');
  const [char2, setChar2] = useState('');
  const [char2Custom, setChar2Custom] = useState('');
  const [genre, setGenre] = useState('');
  const [scene, setScene] = useState('');
  const [tone, setTone] = useState('');
  const [outputType, setOutputType] = useState('image');
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const prompt = (char1 && char2 && genre && scene && tone) ? buildPrompt({ char1, char1Custom, char2, char2Custom, genre, scene, tone, outputType }) : '';

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setError('Enter a valid email'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'food-drama-generator', referrer: document.referrer || '' }),
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

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const title = 'Free AI Food Drama Generator - Create Viral FoodTok Prompts';
  const description = 'Generate AI prompts for the viral FoodTok trend — anthropomorphic fruits and vegetables acting out soap opera dramas. Create AI food drama images and videos for ChatGPT, DALL-E, Midjourney, Sora, and Runway.';
  const url = 'https://www.midastools.co/food-drama-generator';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Food Drama Prompt Generator',
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the FoodTok AI drama trend?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The FoodTok AI drama trend involves using AI to create images and videos of anthropomorphic fruits and vegetables acting out dramatic soap opera scenes — betrayals, breakups, cooking competitions, and more. These AI food drama images go viral on TikTok, Instagram, and Twitter because they are hilarious, cute, and extremely shareable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I create AI food drama images with ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use our free AI Food Drama Generator to build a detailed prompt. Pick your two food characters, choose a drama genre (betrayal, cooking competition, horror kitchen, etc.), select a scene and emotional tone, then paste the generated prompt into ChatGPT with GPT-4o or DALL-E 3. The AI will create a dramatic scene with anthropomorphic food characters.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I create AI food drama videos for TikTok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our generator creates prompts for both images (ChatGPT, DALL-E, Midjourney v7) and videos (Google Veo 3.1, Kling AI 3.0, Runway Gen-4). Select "Video Prompt" as the output type to get a prompt optimized for AI video generation tools. The video prompts include camera direction, pacing, and dialogue overlay suggestions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tools work best for food drama images?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (GPT-5 or GPT-4o) produces the best anthropomorphic food characters. Midjourney v7 excels at artistic quality and dramatic lighting. For videos, Google Veo 3.1 and Kling AI 3.0 create the most realistic food drama animations. Our prompts are optimized to work with all of these tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the AI Food Drama Generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our AI Food Drama Generator is completely free. Enter your email to unlock your custom prompt. You can generate unlimited food drama prompts with different characters, genres, scenes, and tones at no cost.',
        },
      },
    ],
  };

  const food1Label = char1 === 'custom' ? (char1Custom || 'Custom') : FOODS.find(f => f.id === char1)?.label || '';
  const food2Label = char2 === 'custom' ? (char2Custom || 'Custom') : FOODS.find(f => f.id === char2)?.label || '';
  const food1Icon = char1 === 'custom' ? '\uD83C\uDF7D\uFE0F' : FOODS.find(f => f.id === char1)?.icon || '';
  const food2Icon = char2 === 'custom' ? '\uD83C\uDF7D\uFE0F' : FOODS.find(f => f.id === char2)?.icon || '';

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{'\uD83C\uDF45\uD83D\uDCA5\uD83E\uDD51'}</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
            AI Food Drama Generator
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Create viral FoodTok prompts — anthropomorphic fruits and veggies acting out soap opera dramas. Pick your characters, choose the drama, get the perfect AI prompt.
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

        {/* Step 1: Character 1 */}
        {step === 1 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Pick Character 1</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Who is the protagonist of your food drama?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {FOODS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setChar1(f.id)}
                  style={{
                    padding: '16px 14px',
                    border: char1 === f.id ? '3px solid #3B5FFF' : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: char1 === f.id ? '#EEF2FF' : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{f.desc}</div>
                </button>
              ))}
            </div>

            {char1 === 'custom' && (
              <input
                type="text"
                value={char1Custom}
                onChange={e => setChar1Custom(e.target.value)}
                placeholder='Type your food character, e.g. "Croissant", "Sushi Roll"'
                maxLength={40}
                style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginTop: 16, outline: 'none', boxSizing: 'border-box' }}
              />
            )}

            <button
              onClick={() => char1 && (char1 !== 'custom' || char1Custom.trim()) && setStep(2)}
              disabled={!char1 || (char1 === 'custom' && !char1Custom.trim())}
              style={{ width: '100%', padding: '16px', fontSize: 16, fontWeight: 700, color: '#FFF', background: (char1 && (char1 !== 'custom' || char1Custom.trim())) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (char1 && (char1 !== 'custom' || char1Custom.trim())) ? 'pointer' : 'default', marginTop: 24 }}
            >
              Next: Pick Character 2 {'\u2192'}
            </button>
          </div>
        )}

        {/* Step 2: Character 2 */}
        {step === 2 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Pick Character 2</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Who is the other character in this food drama? {food1Icon} {food1Label} needs a scene partner.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {FOODS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setChar2(f.id)}
                  style={{
                    padding: '16px 14px',
                    border: char2 === f.id ? '3px solid #3B5FFF' : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: char2 === f.id ? '#EEF2FF' : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{f.desc}</div>
                </button>
              ))}
            </div>

            {char2 === 'custom' && (
              <input
                type="text"
                value={char2Custom}
                onChange={e => setChar2Custom(e.target.value)}
                placeholder='Type your food character, e.g. "Croissant", "Sushi Roll"'
                maxLength={40}
                style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, marginTop: 16, outline: 'none', boxSizing: 'border-box' }}
              />
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => char2 && (char2 !== 'custom' || char2Custom.trim()) && setStep(3)}
                disabled={!char2 || (char2 === 'custom' && !char2Custom.trim())}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: (char2 && (char2 !== 'custom' || char2Custom.trim())) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (char2 && (char2 !== 'custom' || char2Custom.trim())) ? 'pointer' : 'default' }}
              >
                Next: Drama Genre {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Drama Genre */}
        {step === 3 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose the Drama</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>What kind of drama are {food1Icon} {food1Label} and {food2Icon} {food2Label} getting into?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {GENRES.map(g => (
                <button
                  key={g.id}
                  onClick={() => setGenre(g.id)}
                  style={{
                    padding: '16px 14px',
                    border: genre === g.id ? `3px solid ${g.color}` : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: genre === g.id ? `${g.color}10` : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{g.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{g.label}</div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{g.desc}</div>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => genre && setStep(4)}
                disabled={!genre}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: genre ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: genre ? 'pointer' : 'default' }}
              >
                Next: Scene & Tone {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Scene + Tone */}
        {step === 4 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Set the Scene</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Where does the drama go down, and what is the vibe?</p>

            {/* Scene */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Scene Setting</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SCENES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setScene(s.id)}
                    style={{
                      padding: '12px 14px',
                      border: scene === s.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: scene === s.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tone */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 10 }}>Emotional Tone</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {TONES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    style={{
                      padding: '12px 14px',
                      border: tone === t.id ? '2px solid #3B5FFF' : '1.5px solid #E5E7EB',
                      borderRadius: 10,
                      background: tone === t.id ? '#EEF2FF' : '#FFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{t.label}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(3)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => scene && tone && setStep(5)}
                disabled={!scene || !tone}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: (scene && tone) ? '#3B5FFF' : '#D1D5DB', border: 'none', borderRadius: 99, cursor: (scene && tone) ? 'pointer' : 'default' }}
              >
                Next: Output Type {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Output Type */}
        {step === 5 && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Choose Output Type</h2>
            <p style={{ color: '#6B7280', margin: '0 0 24px', fontSize: 15 }}>Do you want an image prompt or a video prompt?</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {OUTPUT_TYPES.map(o => (
                <button
                  key={o.id}
                  onClick={() => setOutputType(o.id)}
                  style={{
                    padding: '24px 14px',
                    border: outputType === o.id ? '3px solid #3B5FFF' : '2px solid #E5E7EB',
                    borderRadius: 14,
                    background: outputType === o.id ? '#EEF2FF' : '#FFF',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 8 }}>{o.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{o.label}</div>
                  <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>{o.desc}</div>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button onClick={() => setStep(4)} style={{ flex: 1, padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer' }}>{'\u2190'} Back</button>
              <button
                onClick={() => setStep(6)}
                style={{ flex: 2, padding: '14px', fontSize: 15, fontWeight: 700, color: '#FFF', background: '#3B5FFF', border: 'none', borderRadius: 99, cursor: 'pointer' }}
              >
                Generate My Prompt {'\u2192'}
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Result -- email gated */}
        {step === 6 && (
          <div>
            {/* Summary Card (always visible -- screenshot-worthy) */}
            <div style={{
              background: 'linear-gradient(135deg, #7C2D12 0%, #DC2626 50%, #7C2D12 100%)',
              borderRadius: 20,
              padding: 32,
              marginBottom: 24,
              color: '#FFF',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 120, opacity: 0.08 }}>{'\uD83C\uDF45'}</div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: '#FCA5A5', marginBottom: 8 }}>YOUR FOOD DRAMA</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{food1Icon} {food1Label} vs {food2Icon} {food2Label}</div>
              <div style={{ fontSize: 16, color: '#FECACA', marginBottom: 20 }}>{GENRES.find(g => g.id === genre)?.label || 'Drama'}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {GENRES.find(g => g.id === genre)?.icon} {GENRES.find(g => g.id === genre)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {SCENES.find(s => s.id === scene)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {TONES.find(t => t.id === tone)?.label}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  {outputType === 'video' ? '\uD83C\uDFAC Video' : '\uD83D\uDDBC\uFE0F Image'}
                </span>
              </div>

              <div style={{ marginTop: 16, fontSize: 11, color: '#FCA5A5' }}>midastools.co/food-drama-generator</div>
            </div>

            {/* Prompt Preview / Email Gate */}
            {!unlocked ? (
              <div style={{ background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Your Prompt is Ready</h3>
                <p style={{ color: '#6B7280', margin: '0 0 20px', fontSize: 15 }}>
                  Enter your email to unlock the full {outputType === 'video' ? 'video' : 'image'} prompt + get 5 bonus AI image prompts free.
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
              /* Unlocked -- full prompt */
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
                    {outputType === 'image' ? (
                      <>
                        <li>Open <strong>ChatGPT</strong> (GPT-4o), <strong>Midjourney</strong>, or <strong>DALL-E</strong></li>
                        <li>Paste this prompt and hit send</li>
                        <li>Screenshot your food drama and share on TikTok!</li>
                        <li>Tag #FoodTok #AIFoodDrama for maximum reach</li>
                      </>
                    ) : (
                      <>
                        <li>Open <strong>Veo 3.1</strong>, <strong>Kling AI 3.0</strong>, or <strong>Runway Gen-4</strong></li>
                        <li>Paste this prompt as the video description</li>
                        <li>Generate your food drama video clip</li>
                        <li>Post to TikTok with #FoodTok #AIFoodDrama</li>
                      </>
                    )}
                  </ol>
                </div>

                {/* Start Over */}
                <button
                  onClick={() => { setStep(1); setChar1(''); setChar1Custom(''); setChar2(''); setChar2Custom(''); setGenre(''); setScene(''); setTone(''); setOutputType('image'); }}
                  style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#3B5FFF', background: '#EEF2FF', border: 'none', borderRadius: 99, cursor: 'pointer', marginBottom: 20 }}
                >
                  Create Another Food Drama
                </button>

                {/* Upsell */}
                <div style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #DC2626 100%)', borderRadius: 16, padding: 28, textAlign: 'center', color: '#FFF' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Want 150+ Image Prompts?</p>
                  <p style={{ fontSize: 14, color: '#FECACA', margin: '0 0 20px' }}>Food dramas, action figures, Ghibli, caricatures, pet portraits, and 20+ more styles — all copy-paste ready.</p>
                  <a
                    href={STRIPE_IMAGE_PACK}
                    style={{ display: 'inline-block', background: '#FFF', color: '#DC2626', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 99, textDecoration: 'none', marginBottom: 12 }}
                  >
                    Get Image Prompt Pack — $29
                  </a>
                  <p style={{ fontSize: 13, color: '#FCA5A5', margin: '8px 0 0' }}>
                    Or grab <a href={STRIPE_BUNDLE} style={{ color: '#FFF', fontWeight: 600 }}>all 21 kits for $97</a> (save 85%)
                  </p>
                </div>
              </div>
            )}

            {/* Back button */}
            {!unlocked && (
              <button
                onClick={() => setStep(5)}
                style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 600, color: '#6B7280', background: '#FFF', border: '2px solid #E5E7EB', borderRadius: 99, cursor: 'pointer', marginTop: 16 }}
              >
                {'\u2190'} Back to Output Type
              </button>
            )}
          </div>
        )}

        {/* Social Proof */}
        <div style={{ textAlign: 'center', marginTop: 48, padding: '32px 20px', background: '#F9FAFB', borderRadius: 16 }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>The FoodTok Trend is Exploding</p>
          <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Millions of people are creating AI food drama content — anthropomorphic fruits and veggies in dramatic soap opera scenes. This tool gives you the perfect prompt for any food drama scenario.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>12</div><div style={{ fontSize: 13, color: '#6B7280' }}>Food Characters</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Drama Genres</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 800, color: '#3B5FFF' }}>8</div><div style={{ fontSize: 13, color: '#6B7280' }}>Scene Settings</div></div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <RelatedKitBanner kit="ai-image-prompt-pack" name="AI Image Prompt Pack" price="$29" />
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: 40, padding: 28, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 24px', color: '#111827' }}>Frequently Asked Questions</h2>
          {faqData.mainEntity.map((faq, i) => (
            <div key={i} style={{ marginBottom: i < faqData.mainEntity.length - 1 ? 20 : 0 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>{faq.name}</h3>
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Related content */}
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #E5E7EB', borderRadius: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>More AI Image Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/action-figure-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Action Figure Generator — Turn yourself into a collectible toy {'\u2192'}
            </Link>
            <Link href="/caricature-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Caricature Generator — Create your job caricature {'\u2192'}
            </Link>
            <Link href="/pet-portrait-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Pet Portrait Generator — Turn your pet into art {'\u2192'}
            </Link>
            <Link href="/ghibli-prompt-generator" style={{ color: '#3B5FFF', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
              AI Ghibli Generator — Studio Ghibli style prompts {'\u2192'}
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
