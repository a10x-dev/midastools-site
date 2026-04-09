import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const POWER_WORDS = ['free','new','secret','proven','exclusive','limited','guaranteed','discover','unlock','instant','urgent','breaking','shocking','revealed','insider','ultimate','hack','mistake','warning','deadline','last chance','don\'t miss','how to','why you','you need','stop','save','boost','double','triple','transform','skyrocket','explode','crush','dominate','effortless','simple','easy','fast','quick','now','today','tonight','this week','behind the scenes','truth','myth','lie','real','actual','exactly','step-by-step'];

const SPAM_WORDS = ['buy now','click here','act now','limited time','once in a lifetime','free money','no cost','100% free','risk free','no obligation','winner','congratulations','you\'ve been selected','earn money','make money fast','$$','!!!','???','all caps','RE:','FW:','urgent!!!','apply now','order now','sign up free','no credit card','as seen on','double your','miracle','amazing deal'];

const EMOJI_PATTERN = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

function analyzeSubjectLine(subject) {
  if (!subject.trim()) return null;

  const s = subject.trim();
  const lower = s.toLowerCase();
  const words = s.split(/\s+/);
  const wordCount = words.length;

  const scores = {};
  const tips = [];
  const warnings = [];
  const strengths = [];

  // 1. Length score (optimal: 6-10 words, 30-50 chars)
  const charLen = s.length;
  if (charLen >= 30 && charLen <= 50) {
    scores.length = 100;
    strengths.push('Perfect length for mobile and desktop');
  } else if (charLen >= 20 && charLen <= 60) {
    scores.length = 75;
    tips.push('Aim for 30-50 characters for optimal open rates');
  } else if (charLen < 20) {
    scores.length = 50;
    tips.push('Subject line is very short — add more context to improve open rates');
  } else {
    scores.length = 40;
    warnings.push(`At ${charLen} chars, this will be cut off on mobile (shows ~40 chars)`);
  }

  // 2. Word count
  if (wordCount >= 6 && wordCount <= 10) {
    scores.wordCount = 100;
  } else if (wordCount >= 4 && wordCount <= 12) {
    scores.wordCount = 75;
  } else {
    scores.wordCount = 45;
    tips.push('6-10 words is the sweet spot for email subject lines');
  }

  // 3. Power words
  const foundPower = POWER_WORDS.filter(w => lower.includes(w));
  if (foundPower.length >= 2) {
    scores.power = 100;
    strengths.push(`Uses power words: "${foundPower.slice(0, 3).join('", "')}"`);
  } else if (foundPower.length === 1) {
    scores.power = 70;
    tips.push('Add another power word to increase urgency or curiosity');
  } else {
    scores.power = 30;
    tips.push('Add power words like "proven", "secret", "free", or "instant" to boost opens');
  }

  // 4. Spam check
  const foundSpam = SPAM_WORDS.filter(w => lower.includes(w));
  const hasExcessiveCaps = (s.match(/[A-Z]/g) || []).length > s.length * 0.5 && s.length > 5;
  const hasExcessivePunctuation = (s.match(/[!?]{2,}/g) || []).length > 0;

  if (foundSpam.length === 0 && !hasExcessiveCaps && !hasExcessivePunctuation) {
    scores.spam = 100;
    strengths.push('No spam triggers detected');
  } else {
    let spamScore = 100;
    if (foundSpam.length > 0) {
      spamScore -= foundSpam.length * 25;
      warnings.push(`Spam trigger words found: "${foundSpam.join('", "')}"`);
    }
    if (hasExcessiveCaps) {
      spamScore -= 30;
      warnings.push('Excessive capitalization triggers spam filters');
    }
    if (hasExcessivePunctuation) {
      spamScore -= 20;
      warnings.push('Multiple !!! or ??? looks spammy — use one at most');
    }
    scores.spam = Math.max(spamScore, 10);
  }

  // 5. Personalization & Curiosity
  const hasQuestion = s.includes('?');
  const hasNumber = /\d/.test(s);
  const hasYou = /\byou\b|\byour\b/i.test(s);
  const hasBrackets = /\[.*?\]|\{.*?\}/.test(s);
  const hasColon = s.includes(':');

  let engageScore = 40;
  if (hasQuestion) { engageScore += 15; strengths.push('Questions boost curiosity and open rates'); }
  if (hasNumber) { engageScore += 15; strengths.push('Numbers make subject lines specific and credible'); }
  if (hasYou) { engageScore += 15; strengths.push('Using "you/your" makes it personal'); }
  if (hasBrackets) { engageScore += 10; strengths.push('Brackets add context (e.g., [Video], [Free])'); }
  if (hasColon) { engageScore += 5; }
  scores.engagement = Math.min(engageScore, 100);

  if (!hasQuestion && !hasNumber) {
    tips.push('Try adding a number or question mark to increase curiosity');
  }
  if (!hasYou) {
    tips.push('Use "you" or "your" to make it feel personal');
  }

  // 6. Emoji check
  const emojis = s.match(EMOJI_PATTERN);
  if (emojis && emojis.length === 1) {
    scores.emoji = 85;
    strengths.push('Single emoji can boost open rates by 5-10%');
  } else if (emojis && emojis.length > 1) {
    scores.emoji = 50;
    tips.push('One emoji is good — multiple emojis can look unprofessional');
  } else {
    scores.emoji = 70; // neutral
  }

  // 7. Readability (first word capitalized, not all caps)
  const firstCharUpper = s[0] === s[0].toUpperCase();
  if (firstCharUpper && !hasExcessiveCaps) {
    scores.readability = 90;
  } else {
    scores.readability = 60;
    if (!firstCharUpper) tips.push('Capitalize the first word for a professional look');
  }

  // Overall score (weighted)
  const overall = Math.round(
    scores.length * 0.15 +
    scores.wordCount * 0.1 +
    scores.power * 0.2 +
    scores.spam * 0.25 +
    scores.engagement * 0.2 +
    (scores.emoji || 70) * 0.05 +
    scores.readability * 0.05
  );

  return {
    overall,
    scores,
    tips: tips.slice(0, 4),
    warnings: warnings.slice(0, 3),
    strengths: strengths.slice(0, 4),
    stats: { charLen, wordCount, powerWords: foundPower.length, spamWords: foundSpam.length },
  };
}

function ScoreRing({ score }) {
  const color = score >= 80 ? '#059669' : score >= 60 ? '#D97706' : '#DC2626';
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: 130, height: 130, flexShrink: 0 }}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r="54" fill="none" stroke="#E5E7EB" strokeWidth="8" />
        <circle cx="65" cy="65" r="54" fill="none" stroke={color} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          transform="rotate(-90 65 65)" style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 36, fontWeight: 900, color, letterSpacing: -2 }}>{score}</span>
        <span style={{ fontSize: 11, color: '#6B7280', fontWeight: 600 }}>/ 100</span>
      </div>
    </div>
  );
}

export default function EmailSubjectLineTester() {
  const [subject, setSubject] = useState('');
  const [result, setResult] = useState(null);

  function handleTest() {
    const r = analyzeSubjectLine(subject);
    setResult(r);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleTest();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Email Subject Line Tester',
    url: 'https://www.midastools.co/email-subject-line-tester',
    description: 'Free email subject line tester. Score your subject lines for open rate, spam triggers, and emotional appeal. Get actionable tips to improve.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>Free Email Subject Line Tester (2026) | Midas Tools</title>
        <meta name="description" content="Test your email subject lines before you send. Get an instant score for open rate potential, spam risk, and engagement. Free, no signup required." />
        <meta property="og:title" content="Free Email Subject Line Tester | Midas Tools" />
        <meta property="og:description" content="Score your email subject lines for open rate, spam triggers, and engagement. Actionable tips included. Free tool." />
        <meta property="og:url" content="https://www.midastools.co/email-subject-line-tester" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/email-subject-line-tester" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .tester-page { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        .tester-hero { text-align: center; margin-bottom: 48px; }
        .tester-hero h1 { font-size: clamp(32px, 5.5vw, 52px); font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .tester-hero h1 span { color: var(--accent); }
        .tester-hero p { font-size: 18px; color: var(--text-secondary); max-width: 540px; margin: 0 auto; line-height: 1.7; }

        .input-box { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
        .input-row { display: flex; gap: 12px; }
        .input-row input {
          flex: 1; padding: 16px 20px; border: 2px solid var(--border); border-radius: 14px;
          font-size: 17px; font-family: inherit; color: var(--text); background: var(--bg);
          outline: none; transition: border-color 0.15s;
        }
        .input-row input:focus { border-color: var(--accent); }
        .input-row input::placeholder { color: var(--text-tertiary); }
        .test-btn {
          padding: 16px 32px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; white-space: nowrap; transition: transform 0.15s, box-shadow 0.15s;
        }
        .test-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }

        .result-card { background: var(--bg); border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin-bottom: 24px; }
        .result-header { display: flex; align-items: center; gap: 32px; margin-bottom: 32px; }
        .result-grade { text-align: center; }
        .grade-label { font-size: 14px; font-weight: 700; margin-top: 8px; }
        .result-subject { flex: 1; }
        .result-subject h2 { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 8px; word-break: break-word; }
        .result-stats { display: flex; gap: 20px; flex-wrap: wrap; }
        .stat { font-size: 13px; color: var(--text-secondary); }
        .stat strong { color: var(--text); }

        .breakdown { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 28px; }
        .metric-card { background: var(--surface); border-radius: 12px; padding: 16px; }
        .metric-label { font-size: 12px; font-weight: 700; color: var(--text-secondary); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
        .metric-bar { height: 6px; background: #E5E7EB; border-radius: 3px; overflow: hidden; }
        .metric-fill { height: 100%; border-radius: 3px; transition: width 0.6s ease; }
        .metric-score { font-size: 13px; font-weight: 700; margin-top: 6px; }

        .feedback-section { margin-bottom: 20px; }
        .feedback-section h3 { font-size: 15px; font-weight: 700; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .feedback-item { font-size: 14px; color: var(--text-secondary); line-height: 1.7; padding: 8px 0; border-bottom: 1px solid var(--border); }
        .feedback-item:last-child { border-bottom: none; }

        .examples { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 40px; }
        .examples h3 { font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 16px; }
        .example-item {
          padding: 12px 16px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px;
          margin-bottom: 8px; cursor: pointer; transition: border-color 0.15s; font-size: 14px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .example-item:hover { border-color: var(--accent); }

        .upsell { background: var(--text); color: #fff; border-radius: 20px; padding: 48px; text-align: center; margin-bottom: 48px; }
        .upsell h2 { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .upsell p { color: rgba(255,255,255,0.7); font-size: 16px; margin-bottom: 28px; max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .upsell-cta { display: inline-block; background: #fff; color: var(--text); padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none; transition: transform 0.15s; }
        .upsell-cta:hover { transform: translateY(-2px); }

        .seo-content { margin-bottom: 48px; }
        .seo-content h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 16px; }
        .seo-content h3 { font-size: 20px; font-weight: 700; color: var(--text); margin: 24px 0 12px; }
        .seo-content p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
        .seo-content ul, .seo-content ol { padding-left: 24px; margin-bottom: 16px; }
        .seo-content li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; }

        @media(max-width:700px) {
          .tester-page { padding: 48px 20px; }
          .input-row { flex-direction: column; }
          .result-header { flex-direction: column; text-align: center; }
          .breakdown { grid-template-columns: repeat(2, 1fr); }
          .upsell { padding: 32px 24px; }
        }
      `}</style>

      <div className="tester-page">
        <div className="tester-hero">
          <div className="badge" style={{ marginBottom: 24 }}>100% Free Tool</div>
          <h1>Email Subject Line<br /><span>Tester</span></h1>
          <p>Score your subject lines before you hit send. Get instant feedback on open rate potential, spam risk, and engagement.</p>
        </div>

        <div className="input-box">
          <div className="input-row">
            <input
              type="text"
              placeholder="Type your email subject line here..."
              value={subject}
              onChange={e => setSubject(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={200}
            />
            <button className="test-btn" onClick={handleTest}>
              Test it &rarr;
            </button>
          </div>
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text-tertiary)' }}>
            {subject.length}/200 characters
          </div>
        </div>

        {result && (
          <div className="result-card">
            <div className="result-header">
              <div className="result-grade">
                <ScoreRing score={result.overall} />
                <div className="grade-label" style={{ color: result.overall >= 80 ? '#059669' : result.overall >= 60 ? '#D97706' : '#DC2626' }}>
                  {result.overall >= 80 ? 'Great' : result.overall >= 60 ? 'Good' : 'Needs Work'}
                </div>
              </div>
              <div className="result-subject">
                <h2>"{subject}"</h2>
                <div className="result-stats">
                  <span className="stat"><strong>{result.stats.charLen}</strong> chars</span>
                  <span className="stat"><strong>{result.stats.wordCount}</strong> words</span>
                  <span className="stat"><strong>{result.stats.powerWords}</strong> power words</span>
                  {result.stats.spamWords > 0 && <span className="stat" style={{ color: '#DC2626' }}><strong>{result.stats.spamWords}</strong> spam triggers</span>}
                </div>
              </div>
            </div>

            <div className="breakdown">
              {[
                { label: 'Length', score: result.scores.length },
                { label: 'Power Words', score: result.scores.power },
                { label: 'Spam Safety', score: result.scores.spam },
                { label: 'Engagement', score: result.scores.engagement },
                { label: 'Readability', score: result.scores.readability },
                { label: 'Word Count', score: result.scores.wordCount },
              ].map(m => (
                <div key={m.label} className="metric-card">
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{
                      width: `${m.score}%`,
                      background: m.score >= 80 ? '#059669' : m.score >= 60 ? '#D97706' : '#DC2626',
                    }} />
                  </div>
                  <div className="metric-score" style={{ color: m.score >= 80 ? '#059669' : m.score >= 60 ? '#D97706' : '#DC2626' }}>{m.score}/100</div>
                </div>
              ))}
            </div>

            {result.strengths.length > 0 && (
              <div className="feedback-section">
                <h3 style={{ color: '#059669' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ECFDF5"/><path d="M5 8l2 2 4-4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Strengths
                </h3>
                {result.strengths.map((s, i) => <div key={i} className="feedback-item">{s}</div>)}
              </div>
            )}

            {result.warnings.length > 0 && (
              <div className="feedback-section">
                <h3 style={{ color: '#DC2626' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#FEF2F2"/><path d="M8 5v3m0 2h.01" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Warnings
                </h3>
                {result.warnings.map((w, i) => <div key={i} className="feedback-item">{w}</div>)}
              </div>
            )}

            {result.tips.length > 0 && (
              <div className="feedback-section">
                <h3 style={{ color: '#D97706' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#FFFBEB"/><path d="M8 5v4m0 2h.01" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Tips to Improve
                </h3>
                {result.tips.map((t, i) => <div key={i} className="feedback-item">{t}</div>)}
              </div>
            )}
          </div>
        )}

        {/* Example subject lines */}
        <div className="examples">
          <h3>Try These Examples</h3>
          {[
            'Your competitors are using AI — here\'s what they know that you don\'t',
            '7 email templates that generated $50K in sales last month',
            'Quick question about your marketing strategy',
            'FREE!!! AMAZING DEAL — ACT NOW BEFORE IT\'S GONE!!!',
            '[Case Study] How Sarah doubled her revenue in 30 days',
          ].map((ex, i) => (
            <div key={i} className="example-item" onClick={() => { setSubject(ex); setResult(analyzeSubjectLine(ex)); }}>
              <span>{ex}</span>
              <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>Test &rarr;</span>
            </div>
          ))}
        </div>

        {/* Upsell */}
        <div className="upsell">
          <h2>Want 125+ email prompts that convert?</h2>
          <p>Our AI Email Marketing Kit includes proven subject line formulas, welcome sequences, cold outreach templates, and newsletter frameworks.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/email-marketing-kit" className="upsell-cta">Email Marketing Kit &mdash; $29 &rarr;</Link>
            <a href="/bundle" className="upsell-cta" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: '#fff' }}>All 16 Kits &mdash; $97 &rarr;</a>
          </div>
        </div>

        {/* SEO Content */}
        <div className="seo-content">
          <h2>How to Write Email Subject Lines That Get Opened</h2>
          <p>The average person receives 121 emails per day. Your subject line has about 3 seconds to convince someone to open yours instead of deleting it. Here's what the data says works.</p>

          <h3>The Science Behind Great Subject Lines</h3>
          <p>Research from over 12 billion emails shows that the best-performing subject lines share common traits: they're between 30-50 characters, use specific numbers, create curiosity without being clickbaity, and feel personal. Our email subject line tester scores against all of these factors.</p>

          <h3>5 Proven Subject Line Formulas</h3>
          <ol>
            <li><strong>The Number Formula:</strong> "[Number] ways to [achieve desired outcome]" — e.g., "7 ways to double your email open rates this week"</li>
            <li><strong>The Curiosity Gap:</strong> "The [unexpected thing] about [familiar topic]" — e.g., "The surprising truth about cold email outreach"</li>
            <li><strong>The How-To:</strong> "How to [achieve goal] without [common pain point]" — e.g., "How to grow your list without paid ads"</li>
            <li><strong>The Social Proof:</strong> "How [person/company] [achieved result]" — e.g., "How Sarah generated $12K from one email sequence"</li>
            <li><strong>The Question:</strong> Ask something your reader is already wondering — e.g., "Are you making these 3 email marketing mistakes?"</li>
          </ol>

          <h3>What to Avoid in Subject Lines</h3>
          <p>Spam filters have gotten sophisticated, but certain patterns still trigger them. Avoid ALL CAPS, excessive punctuation (!!!), spam trigger words like "free money" or "act now", and misleading RE: or FW: prefixes. Our tester checks for all of these.</p>

          <h2>More Free AI Tools</h2>
          <p>This subject line tester is part of our free tool suite. Try our <Link href="/prompt-generator" style={{ color: 'var(--accent)', fontWeight: 600 }}>AI Prompt Generator</Link> for any business task, our <Link href="/business-name-generator" style={{ color: 'var(--accent)', fontWeight: 600 }}>Business Name Generator</Link> for your next venture, or browse <Link href="/tools" style={{ color: 'var(--accent)', fontWeight: 600 }}>all free tools</Link>.</p>
        </div>
      </div>
    </Layout>
  );
}
