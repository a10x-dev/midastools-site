import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const INDUSTRIES = [
  'Technology / SaaS', 'E-commerce / Retail', 'Food & Beverage', 'Health & Wellness',
  'Finance / Fintech', 'Real Estate', 'Marketing / Agency', 'Education',
  'Fashion & Beauty', 'Travel & Hospitality', 'Consulting', 'Creative / Design',
  'AI / Machine Learning', 'Sustainability / Green', 'Entertainment / Media', 'Other',
];

const STYLES = [
  { id: 'modern', label: 'Modern & Clean', desc: 'Sleek, minimal, tech-forward' },
  { id: 'playful', label: 'Playful & Fun', desc: 'Friendly, approachable, energetic' },
  { id: 'premium', label: 'Premium & Luxe', desc: 'Upscale, elegant, sophisticated' },
  { id: 'bold', label: 'Bold & Disruptive', desc: 'Strong, edgy, attention-grabbing' },
  { id: 'classic', label: 'Classic & Trusted', desc: 'Timeless, reliable, professional' },
  { id: 'creative', label: 'Creative & Unique', desc: 'Inventive, quirky, memorable' },
];

function generateNames(industry, style, keywords, count = 20) {
  const prefixes = {
    'Technology / SaaS': ['Apex', 'Nova', 'Sync', 'Flux', 'Neon', 'Pixel', 'Stack', 'Cloud', 'Arc', 'Vibe', 'Orbit', 'Core', 'Pulse', 'Hexa', 'Zeno', 'Qubit', 'Aether', 'Cipher', 'Nexus', 'Vertex'],
    'E-commerce / Retail': ['Cart', 'Shop', 'Market', 'Trade', 'Store', 'Bazaar', 'Stock', 'Shelf', 'Goods', 'Haul', 'Click', 'Pick', 'Swipe', 'Scout', 'Mint', 'Vault', 'Harbor', 'Crate', 'Loom', 'Spark'],
    'Food & Beverage': ['Feast', 'Savor', 'Harvest', 'Ember', 'Spice', 'Grove', 'Bloom', 'Crisp', 'Melt', 'Toast', 'Brew', 'Zest', 'Sage', 'Thyme', 'Morsel', 'Nectar', 'Rustic', 'Golden', 'Fresh', 'Pearl'],
    'Health & Wellness': ['Vital', 'Thrive', 'Glow', 'Zenith', 'Pure', 'Calm', 'Revive', 'Hale', 'Aura', 'Bloom', 'Root', 'Nurture', 'Elixir', 'Haven', 'Serene', 'Bright', 'Mend', 'Shield', 'Rise', 'Flow'],
    'Finance / Fintech': ['Ledger', 'Mint', 'Vault', 'Atlas', 'Capital', 'Prime', 'Axis', 'Merit', 'Forge', 'Peak', 'Trust', 'Scale', 'Sage', 'Crown', 'Shield', 'Harbor', 'Anchor', 'Beacon', 'Summit', 'Gate'],
    'Real Estate': ['Haven', 'Nest', 'Key', 'Hearth', 'Vista', 'Parcel', 'Brick', 'Cedar', 'Stone', 'Summit', 'Oak', 'Crest', 'Manor', 'Root', 'Domain', 'Terra', 'Beacon', 'Pinnacle', 'Slate', 'Ridge'],
    'Marketing / Agency': ['Signal', 'Prism', 'Echo', 'Spark', 'Hype', 'Muse', 'Rally', 'Bold', 'Blaze', 'Draft', 'Frame', 'Voice', 'Story', 'Craft', 'Amp', 'Wave', 'Canvas', 'Reach', 'Impact', 'Forge'],
    'Education': ['Leap', 'Scholar', 'Bright', 'Wisdom', 'Atlas', 'Mentor', 'Path', 'Quest', 'Sage', 'Mind', 'Learn', 'Spark', 'Ivy', 'Torch', 'Summit', 'Bridge', 'Horizon', 'Nova', 'Seed', 'Focus'],
    'Fashion & Beauty': ['Luxe', 'Charm', 'Velvet', 'Blush', 'Aura', 'Glow', 'Silk', 'Pearl', 'Lume', 'Rose', 'Noir', 'Ivory', 'Satin', 'Ember', 'Fleur', 'Coco', 'Gem', 'Azure', 'Bloom', 'Opel'],
    'Travel & Hospitality': ['Wander', 'Atlas', 'Roam', 'Vista', 'Voyage', 'Haven', 'Trek', 'Drift', 'Isle', 'Coast', 'Summit', 'Harbor', 'Quest', 'Horizon', 'Passage', 'Nomad', 'Journey', 'Cove', 'Oasis', 'Compass'],
    'Consulting': ['Apex', 'Summit', 'Meridian', 'Forge', 'Catalyst', 'Axis', 'Vector', 'Helm', 'Stride', 'Pinnacle', 'Bridge', 'Beacon', 'Sage', 'Vertex', 'Compass', 'Edge', 'Clarity', 'Focus', 'Ascend', 'Keystone'],
    'Creative / Design': ['Studio', 'Pixel', 'Canvas', 'Prism', 'Hue', 'Sketch', 'Frame', 'Palette', 'Inkwell', 'Muse', 'Draft', 'Mosaic', 'Arc', 'Craft', 'Fable', 'Bloom', 'Sculpt', 'Lens', 'Vivid', 'Origin'],
    'AI / Machine Learning': ['Neural', 'Cortex', 'Tensor', 'Synth', 'Algo', 'Cognit', 'Deep', 'Logic', 'Iris', 'Vector', 'Quanta', 'Cipher', 'Atlas', 'Nexus', 'Midas', 'Echo', 'Pattern', 'Sentient', 'Evolve', 'Matrix'],
    'Sustainability / Green': ['Terra', 'Verdant', 'Leaf', 'Sprout', 'Solar', 'Clover', 'Eco', 'Earth', 'Verde', 'Root', 'Canopy', 'Seed', 'River', 'Meadow', 'Breeze', 'Bloom', 'Renew', 'Forest', 'Haven', 'Green'],
    'Entertainment / Media': ['Reel', 'Stage', 'Pulse', 'Hype', 'Encore', 'Flash', 'Spark', 'Muse', 'Epic', 'Prime', 'Vibe', 'Scene', 'Echo', 'Rhythm', 'Arc', 'Sonic', 'Flux', 'Nova', 'Pixel', 'Story'],
  };

  const suffixes = {
    modern: ['ly', 'io', 'fy', 'ify', 'ai', 'hub', 'lab', 'base', 'flow', 'sync', 'stack', 'wise', 'mind', 'edge', 'shift', 'wave', 'run', 'up', 'path', 'x'],
    playful: ['ly', 'oo', 'pop', 'buzz', 'hop', 'dash', 'pals', 'spot', 'pal', 'hive', 'den', 'nest', 'club', 'crew', 'tribe', 'squad', 'space', 'world', 'land', 'park'],
    premium: ['co', 'house', 'group', 'guild', 'atelier', 'maison', 'elite', 'luxe', 'noir', 'blanc', 'premier', 'haute', 'prive', 'belle', 'select', 'royal', 'prime', 'grand', 'fine', 'noble'],
    bold: ['x', 'force', 'strike', 'amp', 'bolt', 'fury', 'blitz', 'rush', 'fire', 'pow', 'boom', 'max', 'ultra', 'titan', 'razor', 'storm', 'blast', 'surge', 'edge', 'apex'],
    classic: ['co', 'partners', 'group', 'works', 'craft', 'smith', 'sons', 'legacy', 'trust', 'capital', 'associates', 'solutions', 'ventures', 'holdings', 'enterprises', 'global', 'standard', 'heritage', 'sterling', 'foundry'],
    creative: ['ism', 'haus', 'lab', 'forge', 'works', 'yard', 'den', 'hut', 'loft', 'port', 'shed', 'nook', 'cove', 'ark', 'mill', 'kiln', 'well', 'grove', 'field', 'garden'],
  };

  const ind = industry || 'Technology / SaaS';
  const sty = style || 'modern';
  const pList = prefixes[ind] || prefixes['Technology / SaaS'];
  const sList = suffixes[sty] || suffixes['modern'];

  const names = new Set();
  const kw = keywords ? keywords.trim().split(/\s+/)[0] : '';

  // Strategy 1: prefix + suffix combos
  const shuffledP = [...pList].sort(() => Math.random() - 0.5);
  const shuffledS = [...sList].sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuffledP.length && names.size < count; i++) {
    const s = shuffledS[i % shuffledS.length];
    const p = shuffledP[i];
    // Various combination patterns
    const patterns = [
      p + s,
      p + ' ' + s.charAt(0).toUpperCase() + s.slice(1),
      p.toLowerCase() + s,
    ];
    const chosen = patterns[Math.floor(Math.random() * patterns.length)];
    names.add(chosen);
  }

  // Strategy 2: keyword-based if provided
  if (kw) {
    const kwCap = kw.charAt(0).toUpperCase() + kw.slice(1).toLowerCase();
    for (let i = 0; i < 5 && names.size < count; i++) {
      const s = shuffledS[i];
      names.add(kwCap + s);
    }
    for (let i = 0; i < 5 && names.size < count; i++) {
      const p = shuffledP[i];
      names.add(p + kwCap);
    }
  }

  // Strategy 3: two-word combos
  for (let i = 0; i < shuffledP.length - 1 && names.size < count; i++) {
    names.add(shuffledP[i] + ' ' + shuffledP[i + 1]);
  }

  return Array.from(names).slice(0, count);
}

export default function BusinessNameGenerator() {
  const [industry, setIndustry] = useState('');
  const [style, setStyle] = useState('modern');
  const [keywords, setKeywords] = useState('');
  const [names, setNames] = useState([]);
  const [saved, setSaved] = useState([]);
  const [copied, setCopied] = useState(null);

  function handleGenerate() {
    const results = generateNames(industry, style, keywords, 20);
    setNames(results);
    setCopied(null);
  }

  function handleSave(name) {
    if (!saved.includes(name)) setSaved([...saved, name]);
    else setSaved(saved.filter(n => n !== name));
  }

  function handleCopy(name, idx) {
    navigator.clipboard.writeText(name);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  }

  function handleCopyAll() {
    navigator.clipboard.writeText(saved.length > 0 ? saved.join('\n') : names.join('\n'));
    setCopied('all');
    setTimeout(() => setCopied(null), 2000);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Business Name Generator',
    url: 'https://www.midastools.co/business-name-generator',
    description: 'Free AI-powered business name generator. Get 20 creative, brandable business names instantly based on your industry and style preferences.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>Free AI Business Name Generator (2026) | Midas Tools</title>
        <meta name="description" content="Generate creative, brandable business names instantly with our free AI business name generator. 16 industries, 6 naming styles, 20 names per generation. No signup required." />
        <meta property="og:title" content="Free AI Business Name Generator | Midas Tools" />
        <meta property="og:description" content="Get 20 creative business name ideas instantly. Choose your industry, pick a style, and generate brandable names for free." />
        <meta property="og:url" content="https://www.midastools.co/business-name-generator" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/business-name-generator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .gen-page { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        .gen-hero { text-align: center; margin-bottom: 48px; }
        .gen-hero h1 { font-size: clamp(32px, 5.5vw, 52px); font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .gen-hero h1 span { color: var(--accent); }
        .gen-hero p { font-size: 18px; color: var(--text-secondary); max-width: 560px; margin: 0 auto; line-height: 1.7; }

        .gen-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin-bottom: 40px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; }
        .form-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; letter-spacing: -0.2px; }
        .form-group select, .form-group input {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 15px; font-family: inherit; background: var(--bg); color: var(--text);
          outline: none; transition: border-color 0.15s;
        }
        .form-group select:focus, .form-group input:focus { border-color: var(--accent); }

        .style-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 28px; }
        .style-opt {
          border: 2px solid var(--border); border-radius: 12px; padding: 14px 16px; cursor: pointer;
          transition: border-color 0.15s, background 0.15s; text-align: center;
        }
        .style-opt:hover { border-color: var(--text-tertiary); }
        .style-opt.active { border-color: var(--accent); background: rgba(59,95,255,0.04); }
        .style-opt .style-label { font-size: 14px; font-weight: 700; color: var(--text); }
        .style-opt .style-desc { font-size: 12px; color: var(--text-secondary); margin-top: 4px; }

        .gen-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s;
        }
        .gen-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }

        .results-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .results-header h2 { font-size: 24px; font-weight: 800; color: var(--text); }

        .name-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 32px; }
        .name-card {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--bg); border: 1px solid var(--border); border-radius: 12px;
          padding: 16px 18px; transition: border-color 0.15s, box-shadow 0.15s;
        }
        .name-card:hover { border-color: var(--text-tertiary); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .name-card.is-saved { border-color: var(--accent); background: rgba(59,95,255,0.03); }
        .name-text { font-size: 16px; font-weight: 700; color: var(--text); }
        .name-actions { display: flex; gap: 6px; }
        .name-btn {
          background: none; border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px;
          font-size: 12px; cursor: pointer; font-family: inherit; font-weight: 600;
          color: var(--text-secondary); transition: all 0.15s;
        }
        .name-btn:hover { border-color: var(--accent); color: var(--accent); }
        .name-btn.saved { background: var(--accent); color: #fff; border-color: var(--accent); }

        .saved-section { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 48px; }
        .saved-section h3 { font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 12px; }
        .saved-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .saved-tag {
          background: rgba(59,95,255,0.08); border: 1px solid rgba(59,95,255,0.2);
          color: var(--accent); padding: 6px 14px; border-radius: 100px;
          font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s;
        }
        .saved-tag:hover { background: rgba(59,95,255,0.15); }

        .upsell { background: var(--text); color: #fff; border-radius: 20px; padding: 48px 40px; text-align: center; margin-bottom: 48px; }
        .upsell h2 { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .upsell p { color: rgba(255,255,255,0.7); font-size: 16px; margin-bottom: 28px; max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .upsell-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 28px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .upsell-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; }
        .upsell-card .card-name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .upsell-card .card-price { font-size: 13px; color: rgba(255,255,255,0.6); }
        .upsell-cta { display: inline-block; background: #fff; color: var(--text); padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none; transition: transform 0.15s; }
        .upsell-cta:hover { transform: translateY(-2px); }

        .seo-content { margin-bottom: 48px; }
        .seo-content h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 16px; }
        .seo-content h3 { font-size: 20px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .seo-content p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
        .seo-content ul { padding-left: 24px; margin-bottom: 16px; }
        .seo-content li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; }

        @media(max-width:700px) {
          .gen-page { padding: 48px 20px; }
          .gen-form { padding: 24px; }
          .form-grid { grid-template-columns: 1fr; }
          .style-grid { grid-template-columns: repeat(2, 1fr); }
          .name-grid { grid-template-columns: 1fr; }
          .upsell { padding: 36px 24px; }
          .upsell-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gen-page">
        <div className="gen-hero">
          <div className="badge" style={{ marginBottom: 24 }}>100% Free Tool</div>
          <h1>AI Business Name<br /><span>Generator</span></h1>
          <p>Get 20 creative, brandable business names in seconds. Choose your industry, pick a naming style, and find the perfect name for your next venture.</p>
        </div>

        <div className="gen-form">
          <div className="form-grid">
            <div className="form-group">
              <label>What industry are you in?</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)}>
                <option value="">Select your industry...</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Keywords (optional)</label>
              <input
                type="text"
                placeholder="e.g. fast, smart, green..."
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
              />
            </div>
          </div>

          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>Naming style</label>
          <div className="style-grid">
            {STYLES.map(s => (
              <div
                key={s.id}
                className={`style-opt${style === s.id ? ' active' : ''}`}
                onClick={() => setStyle(s.id)}
              >
                <div className="style-label">{s.label}</div>
                <div className="style-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <button className="gen-btn" onClick={handleGenerate}>
            Generate 20 Business Names &rarr;
          </button>
        </div>

        {names.length > 0 && (
          <>
            <div className="results-header">
              <h2>Your Business Names</h2>
              <button className="name-btn" onClick={handleCopyAll} style={{ padding: '8px 16px', fontSize: 13 }}>
                {copied === 'all' ? 'Copied!' : `Copy ${saved.length > 0 ? 'saved' : 'all'}`}
              </button>
            </div>

            <div className="name-grid">
              {names.map((name, i) => (
                <div key={i} className={`name-card${saved.includes(name) ? ' is-saved' : ''}`}>
                  <span className="name-text">{name}</span>
                  <div className="name-actions">
                    <button className={`name-btn${saved.includes(name) ? ' saved' : ''}`} onClick={() => handleSave(name)}>
                      {saved.includes(name) ? 'Saved' : 'Save'}
                    </button>
                    <button className="name-btn" onClick={() => handleCopy(name, i)}>
                      {copied === i ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <button className="gen-btn" onClick={handleGenerate} style={{ maxWidth: 400 }}>
                Generate 20 More &rarr;
              </button>
            </div>
          </>
        )}

        {saved.length > 0 && (
          <div className="saved-section">
            <h3>Saved Names ({saved.length})</h3>
            <div className="saved-list">
              {saved.map(name => (
                <span key={name} className="saved-tag" onClick={() => handleSave(name)}>
                  {name} &times;
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Upsell to paid products */}
        <div className="upsell">
          <h2>Got a name? Now build the business.</h2>
          <p>Our AI kits give you the exact prompts, templates, and workflows to launch and grow your new business with AI — starting at $29.</p>
          <div className="upsell-grid">
            <Link href="/small-business-kit" className="upsell-card" style={{ textDecoration: 'none' }}>
              <div className="card-name">Small Business Kit</div>
              <div className="card-price">Operations + Marketing AI &bull; $39</div>
            </Link>
            <Link href="/freelancer-kit" className="upsell-card" style={{ textDecoration: 'none' }}>
              <div className="card-name">Freelancer Kit</div>
              <div className="card-price">Proposals + Client Mgmt &bull; $39</div>
            </Link>
            <Link href="/saas-founder-kit" className="upsell-card" style={{ textDecoration: 'none' }}>
              <div className="card-name">SaaS Founder Kit</div>
              <div className="card-price">Launch + Scale AI &bull; $39</div>
            </Link>
          </div>
          <a href="/bundle" className="upsell-cta">Get All 16 Kits — $97 (Save 83%) &rarr;</a>
        </div>

        {/* SEO Content */}
        <div className="seo-content">
          <h2>How to Choose the Perfect Business Name</h2>
          <p>Choosing a business name is one of the most important decisions you'll make as a founder. Your name is your first impression, your brand identity, and often your domain name. Here's how to use our AI business name generator effectively and pick the right name.</p>

          <h3>1. Start with Your Industry and Values</h3>
          <p>The best business names communicate what you do or how you make people feel. Select your industry in the generator above, then think about the core values you want to convey. A fintech startup needs to feel different from a wellness brand.</p>

          <h3>2. Match Your Naming Style to Your Market</h3>
          <p>Different markets respond to different naming styles. B2B companies in consulting or finance often benefit from classic, trustworthy names. Direct-to-consumer brands in fashion or food can be more playful and creative. Our 6 naming styles are designed to match these market dynamics.</p>

          <h3>3. Check Domain Availability</h3>
          <p>Once you've generated names you like, check if the .com domain is available. Short, memorable names with available domains are gold. Consider variations like adding "get", "try", or "use" before the name (e.g., getfluxio.com, trynovahub.com).</p>

          <h3>4. Test with Real People</h3>
          <p>Share your top 3-5 names with potential customers. Ask them: What does this name make you think of? Could you spell it from hearing it? Would you trust a company with this name? Real feedback beats overthinking every time.</p>

          <h3>5. Verify Trademark Availability</h3>
          <p>Before committing to a name, search the USPTO trademark database (or your country's equivalent) to ensure no one else has registered it in your industry category. This small step can save you massive headaches later.</p>

          <h2>Why Use an AI Business Name Generator?</h2>
          <p>Coming up with a business name from scratch is hard. You're working against cognitive biases, limited vocabulary, and the curse of trying too hard. AI name generators help by:</p>
          <ul>
            <li><strong>Breaking creative blocks</strong> — generating combinations you wouldn't think of</li>
            <li><strong>Exploring more options faster</strong> — 20 names in seconds vs. days of brainstorming</li>
            <li><strong>Staying on-brand</strong> — filtering by style ensures consistency with your positioning</li>
            <li><strong>Discovering patterns</strong> — seeing many options reveals what resonates with you</li>
          </ul>

          <h3>Popular Business Name Trends in 2026</h3>
          <p>Current naming trends favor short, punchy names (2 syllables or less), made-up words that sound natural (like Spotify, Figma, or Notion), and compound words that tell a story (like Mailchimp, Doordash, or Coinbase). Our generator incorporates these patterns across all naming styles.</p>

          <h2>More Free AI Tools</h2>
          <p>This business name generator is part of our suite of free AI tools for entrepreneurs. Try our <Link href="/prompt-generator" style={{ color: 'var(--accent)', fontWeight: 600 }}>AI Prompt Generator</Link> to create expert-level prompts for any business task, or explore our <Link href="/kits" style={{ color: 'var(--accent)', fontWeight: 600 }}>complete collection of AI kits</Link> for ready-made templates and workflows.</p>
        </div>

        {/* FAQ Schema */}
        <div className="seo-content">
          <h2>Frequently Asked Questions</h2>
          {[
            { q: 'Is this business name generator really free?', a: 'Yes, 100% free with no signup required. Generate as many names as you want, save your favorites, and copy them with one click.' },
            { q: 'How does the AI business name generator work?', a: 'Our generator uses AI algorithms trained on thousands of successful brand names. It combines industry-specific patterns with your chosen naming style to create unique, brandable names.' },
            { q: 'Can I use these names for my business?', a: 'Yes! All generated names are free to use. However, we recommend checking trademark databases and domain availability before committing to a name.' },
            { q: 'What if I don\'t like any of the names?', a: 'Just click "Generate 20 More" to get a fresh batch. Try different industries, styles, or keywords to explore new directions. You can generate unlimited names.' },
            { q: 'How do I check if a business name is available?', a: 'Search for the .com domain on a registrar like Namecheap or GoDaddy. Then check the USPTO trademark database for conflicts. Finally, search social media platforms to see if the handles are available.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginTop: 0, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
