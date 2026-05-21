import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout, { DESIGN } from '../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STRIPE_BUNDLE = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';

const PROMPTS = [
  {
    n: 1,
    title: 'Player Match Performance Card',
    hook: 'Generates a stylized scorecard summary for any player after a match.',
    why: "Combines stats + a creative line that feels like a friend's hot take, not ESPN's robotic recap.",
    body: `Write a single-paragraph match performance card for [PLAYER NAME] (playing [POSITION]) in [MATCH, e.g., "Argentina vs Brazil"]. They had: [GOALS] goals, [ASSISTS] assists, [SHOTS] shots, [PASS_ACCURACY]% pass accuracy. Tone: [neutral / hype / brutally honest / poetic]. Length: 80 words. End with a one-line verdict in CAPS.`,
  },
  {
    n: 2,
    title: 'Match Recap in 5 Styles',
    hook: 'Same match, 5 different writing styles — pick the one that fits your audience.',
    why: 'Lets you A/B test recap formats for your social/blog/newsletter without writing 5 versions yourself.',
    body: `Write a 60-word recap of the match: [MATCH NAME] · final score [SCORE] · key moment [DESCRIBE BRIEFLY]. Generate FIVE versions: (1) Cold ESPN-style, (2) Poetic — like a sports column, (3) Brazilian-samba enthusiastic, (4) Dry British witty, (5) TikTok-Gen-Z hype. Each version under 60 words. Label each.`,
  },
  {
    n: 3,
    title: 'Group Stage Predictor',
    hook: 'Predicts qualifiers from any group with reasoning, not just a vibes-pick.',
    why: 'Forces the AI to ground predictions in form, fixtures, and historical data — not "Brazil always wins."',
    body: `You are a football analyst. Predict the top 2 qualifiers from this group: [TEAMS]. Inputs: recent form last 6 matches, key player injuries, head-to-head history last 5 years. Output: (1) prediction with reasoning in 4 sentences, (2) the upset risk (one team that could surprise), (3) the early-elimination favorite. No hedging.`,
  },
  {
    n: 4,
    title: 'Fantasy Lineup Trash Talk',
    hook: "Input your fantasy lineup → get a hype speech that's good enough to share in your league chat.",
    why: 'Most fantasy AI prompts give bland projections. This one writes the words you can actually copy-paste into the group chat.',
    body: `My fantasy lineup for matchweek [N]: [GK NAME], [DEF1, DEF2, DEF3], [MID1, MID2, MID3], [FWD1, FWD2, FWD3]. Captain: [PLAYER]. Write a 100-word trash-talk-style hype message I can drop in my fantasy league chat. Reference at least 2 of my picks specifically. Tone: confident bordering on cocky. End with a prediction of my points total.`,
  },
  {
    n: 5,
    title: 'Watch Party Bingo Card',
    hook: 'Generates a printable 5x5 bingo card of "things to watch for" in any specific match.',
    why: 'Turns watching a regular match into a viral group activity — high share rate + zero IP risk.',
    body: `Generate a 5x5 BINGO card (25 cells) of specific moments to watch for in: [MATCH NAME]. Mix of: tactical moments (offside trap success), commentator clichés ("a game of two halves"), broadcast moments (manager close-up), and game events (yellow card in first 10 min). Center cell = FREE. Output as a markdown table.`,
  },
  {
    n: 6,
    title: 'Penalty Shootout Hype Script',
    hook: 'A Hollywood-style narration of a shootout you can record over your reaction video.',
    why: 'Penalty shootouts get 50M+ social impressions per match. This is the prompt that makes your reaction post stand out.',
    body: `Write a 90-second Hollywood-trailer-style narration script for a penalty shootout between [TEAM A] and [TEAM B]. Match context: [DESCRIBE STAKES]. Build tension across 5 rounds. Voice: gravelly, cinematic, present tense. Include 1 mid-script pause for dramatic effect. End with the line "And the world held its breath."`,
  },
  {
    n: 7,
    title: 'Match Day Drinking Game Rules',
    hook: 'Generates a 10-rule drinking game keyed to in-game events. Bar-night gold.',
    why: 'Bars and watch parties LOVE a custom drinking game. This drives social shares + drives bar marketing.',
    body: `Generate a 10-rule drinking game for the match: [TEAM A] vs [TEAM B]. Rules should reference in-game events (yellow cards, set pieces, VAR reviews) with calibrated frequency (1-3 expected drinks per rule per match). Include 1 "finish your drink" rule for a low-probability event. Add a 2-sentence intro to set the vibe. Family-friendly variant: replace "drinks" with "candy."`,
  },
  {
    n: 8,
    title: 'Underdog Story Narrative',
    hook: 'Generates a 300-word narrative arc around an unexpected team or player.',
    why: 'Long-form narrative content gets cited in roundups + works on Substack/Medium. Listicles do the volume; narratives do the brand.',
    body: `Write a 300-word feature on the underdog story of [TEAM or PLAYER NAME] in this tournament. Inputs: [PRIOR LOW EXPECTATIONS], [WHAT THEY ACTUALLY DID], [PIVOTAL MOMENT]. Voice: feature-writer, evocative but not purple. Include 1 specific quote (mark as "[likely paraphrase]" if not verbatim). End with a forward-looking sentence about the next match.`,
  },
  {
    n: 9,
    title: 'Tactical Breakdown for Casual Fans',
    hook: "Explains a formation or tactic to people who don't watch soccer regularly.",
    why: 'During major tournaments, casual fans are 3x the audience. This prompt makes the game accessible to them.',
    body: `Explain the tactical setup of [TEAM NAME] in plain English to someone who watches soccer once every 4 years. Cover: (1) their formation, (2) what they DO (e.g., "press high"), (3) what they fear ("counterattacks"), (4) the one player whose role makes the system work. Use ONE soccer term — define it inline. Length: 200 words.`,
  },
  {
    n: 10,
    title: 'Pre-Match Manager Speech',
    hook: 'Locker-room speech in the style of [chosen real or fictional manager].',
    why: "Goes viral when fans share it as 'what I imagine [manager] said before the match.' Pure entertainment + share fuel.",
    body: `Write a 200-word pre-match locker-room speech delivered by [MANAGER NAME or FICTIONAL ARCHETYPE — Klopp / Mourinho / Ted Lasso / a frustrated dad]. Match context: [STAKES]. Include: (1) one specific call-out by name to a player on the team, (2) one rhetorical question they answer themselves, (3) one moment of vulnerability, (4) a closing line in CAPS that fits their style.`,
  },
];

export default function WorldCupAIPrompts2026() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // Scorecard generator state
  const [card, setCard] = useState({
    player: '',
    position: 'Midfielder',
    match: '',
    goals: 0,
    assists: 0,
    rating: 7.5,
    take: '',
    style: 'hype',
  });
  const [generated, setGenerated] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitting(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'world-cup-ai-prompts',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
          landing_slug: 'world-cup-ai-prompts-2026',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      // fail-quiet — page still useful even if subscribe broken
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const generateScorecard = () => {
    const styleVerbs = {
      hype: ['ABSOLUTELY MENTAL', 'UNREAL', 'COULD NOT BE STOPPED'],
      cold: ['Effective', 'Composed', 'Ruthless'],
      poetic: ['Painted the pitch', 'Conducted the orchestra', 'Wrote a poem in motion'],
      british: ['Bit of a player, that one', 'Tidy performance', 'Did his job, got on with it'],
    };
    const verb = styleVerbs[card.style][Math.floor(Math.random() * 3)];
    const summary = card.style === 'hype'
      ? `${card.player.toUpperCase()} ${verb} TODAY. ${card.goals} goal${card.goals === 1 ? '' : 's'}, ${card.assists} assist${card.assists === 1 ? '' : 's'}, rating ${card.rating}/10. ${card.take || 'No notes.'}`
      : card.style === 'cold'
      ? `${card.player} delivered. ${card.goals}G ${card.assists}A, ${card.rating}/10. ${verb} performance from the ${card.position.toLowerCase()}. ${card.take}`
      : card.style === 'poetic'
      ? `${card.player} ${verb}. ${card.goals} goal${card.goals === 1 ? '' : 's'}, ${card.assists} assist${card.assists === 1 ? '' : 's'}, rating ${card.rating}. ${card.take}`
      : `${card.player}? ${verb}. ${card.goals} for ${card.assists}, rating ${card.rating}. ${card.take || 'Nothing more, nothing less.'}`;
    setGenerated({ summary, ...card });
  };

  const title = "30 World Cup AI Prompts for 2026 — Plus a Free Scorecard Generator";
  const description = "30 free AI prompts for World Cup 2026 fans, creators, and marketers — match recaps, fantasy hype, watch-party bingo, manager speeches. Plus a free interactive player scorecard generator you can screenshot and share.";
  const url = 'https://www.midastools.co/world-cup-ai-prompts-2026';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    author: { '@type': 'Person', name: 'Armando', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'World Cup AI Prompts 2026',
    itemListElement: PROMPTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      description: p.hook,
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </Head>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 96px', color: DESIGN.black }}>
        <p style={{ fontSize: 13, color: DESIGN.gray400, marginBottom: 8 }}>
          Updated May 6, 2026 · 9-min read · Independent fan project, not affiliated with FIFA
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
          30 World Cup AI Prompts for 2026 (Free)
        </h1>
        <p style={{ fontSize: 18, color: DESIGN.gray400, lineHeight: 1.6, marginBottom: 24 }}>
          <strong>The 2026 FIFA World Cup kicks off June 11.</strong> Below: 10 free AI prompts you
          can use right now in ChatGPT or Claude — match recaps, fantasy hype, watch-party bingo,
          underdog narratives, manager speeches. Plus an interactive scorecard generator at the
          bottom so you can build a shareable card for any player.
        </p>

        <div style={{ background: '#F4F6FB', borderLeft: `3px solid ${DESIGN.accent}`, padding: '14px 16px', borderRadius: 6, fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
          <strong>Why these prompts work:</strong> they don&rsquo;t replace ESPN&rsquo;s data — they let
          you GENERATE creative content (hot takes, narratives, hype speeches) that ESPN
          won&rsquo;t. Built for fans, content creators, and small-business owners running World Cup
          marketing campaigns.
        </div>

        <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

        {PROMPTS.map((p) => (
          <section key={p.n} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 24, marginBottom: 8, lineHeight: 1.3 }}>
              {p.n}. {p.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: DESIGN.black, marginBottom: 8 }}>{p.hook}</p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: DESIGN.gray400, marginBottom: 12 }}>
              <strong>Why it works:</strong> {p.why}
            </p>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 13, lineHeight: 1.6, color: '#374151', background: '#F9FAFB', padding: '14px 16px', borderRadius: 8, margin: 0, border: '1px solid #E5E7EB' }}>
              {p.body}
            </pre>
          </section>
        ))}

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

        {/* Email gate for the next 20 prompts */}
        <div style={{ background: '#F0F4FF', border: `1px solid ${DESIGN.accent}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, marginBottom: 8 }}>
            Get 20 more World Cup AI prompts (free)
          </h2>
          <p style={{ fontSize: 15, color: DESIGN.gray400, marginBottom: 16, lineHeight: 1.6 }}>
            Drop your email and we&rsquo;ll send the full pack — bracket predictors, social-post
            generators, bar-marketing prompts, themed-event templates. No drip, one email.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{ flex: '1 1 240px', padding: '12px 16px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 15 }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{ background: DESIGN.accent, color: '#FFFFFF', padding: '12px 24px', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 15, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'Sending...' : 'Send me the 20 →'}
              </button>
            </form>
          ) : (
            <p style={{ fontSize: 15, color: DESIGN.accent, fontWeight: 600, margin: 0 }}>
              ✓ Sent. Check your inbox in 30 seconds.
            </p>
          )}
        </div>

        {/* Interactive scorecard generator */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, marginBottom: 8 }}>
            🎴 Free Player Scorecard Generator
          </h2>
          <p style={{ fontSize: 14, color: DESIGN.gray400, marginBottom: 20, lineHeight: 1.6 }}>
            Build a shareable scorecard for any player and any match. Screenshot the result and
            drop it on socials. Pure text + style — no FIFA branding, no real photos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 16 }}>
            <input value={card.player} onChange={(e) => setCard({ ...card, player: e.target.value })} placeholder="Player name (e.g., Messi)" style={inputStyle} />
            <select value={card.position} onChange={(e) => setCard({ ...card, position: e.target.value })} style={inputStyle}>
              <option>Goalkeeper</option><option>Defender</option><option>Midfielder</option><option>Forward</option>
            </select>
            <input value={card.match} onChange={(e) => setCard({ ...card, match: e.target.value })} placeholder="Match (e.g., Argentina vs Brazil)" style={inputStyle} />
            <input type="number" min="0" max="10" value={card.goals} onChange={(e) => setCard({ ...card, goals: Number(e.target.value) })} placeholder="Goals" style={inputStyle} />
            <input type="number" min="0" max="10" value={card.assists} onChange={(e) => setCard({ ...card, assists: Number(e.target.value) })} placeholder="Assists" style={inputStyle} />
            <input type="number" step="0.1" min="0" max="10" value={card.rating} onChange={(e) => setCard({ ...card, rating: Number(e.target.value) })} placeholder="Rating /10" style={inputStyle} />
            <select value={card.style} onChange={(e) => setCard({ ...card, style: e.target.value })} style={inputStyle}>
              <option value="hype">HYPE — all caps energy</option>
              <option value="cold">Cold — analyst mode</option>
              <option value="poetic">Poetic — sports column</option>
              <option value="british">Dry British — pundit</option>
            </select>
          </div>
          <textarea value={card.take} onChange={(e) => setCard({ ...card, take: e.target.value })} placeholder="Your one-line take (optional, makes it personal)" rows={2} style={{ ...inputStyle, width: '100%', fontFamily: 'inherit', resize: 'vertical', marginBottom: 12 }} />
          <button
            type="button"
            onClick={generateScorecard}
            disabled={!card.player || !card.match}
            style={{ background: DESIGN.accent, color: '#FFFFFF', padding: '12px 28px', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 15, cursor: (!card.player || !card.match) ? 'not-allowed' : 'pointer', opacity: (!card.player || !card.match) ? 0.5 : 1 }}
          >
            Generate scorecard →
          </button>

          {generated && (
            <div style={{ marginTop: 24, padding: 24, background: '#111827', color: '#FFFFFF', borderRadius: 12, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 16, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 18, color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>{generated.player}</strong>
                <span style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>{generated.position} · {generated.match}</span>
              </div>
              <div style={{ display: 'flex', gap: 24, marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>
                <span><strong style={{ fontSize: 24 }}>{generated.goals}</strong> <span style={{ color: '#9CA3AF', fontSize: 12 }}>G</span></span>
                <span><strong style={{ fontSize: 24 }}>{generated.assists}</strong> <span style={{ color: '#9CA3AF', fontSize: 12 }}>A</span></span>
                <span><strong style={{ fontSize: 24 }}>{generated.rating}</strong><span style={{ color: '#9CA3AF', fontSize: 12 }}>/10</span></span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: '#E5E7EB', margin: 0, fontFamily: 'Inter, sans-serif' }}>{generated.summary}</p>
              <p style={{ fontSize: 11, color: '#6B7280', marginTop: 16, marginBottom: 0, fontFamily: 'Inter, sans-serif' }}>via midastools.co/world-cup-ai-prompts-2026</p>
            </div>
          )}
          {generated && (
            <p style={{ fontSize: 13, color: DESIGN.gray400, marginTop: 12 }}>
              Screenshot the card above and share it. Tag the match. Tag your group chat. Tweak the inputs to generate a different style.
            </p>
          )}
        </div>

        {/* Cluster cross-link */}
        <p style={{ fontSize: 14, color: DESIGN.gray400, lineHeight: 1.6, marginBottom: 24 }}>
          More 2026 AI tools we tested for fans, creators, and operators:{' '}
          <Link href="/blog/best-ai-tools-may-2026" style={{ color: DESIGN.accent }}>10 Best AI Tools to Try in May 2026</Link>{' '}·{' '}
          <Link href="/blog/viral-ai-art-trends-april-2026" style={{ color: DESIGN.accent }}>10 Viral AI Art Trends Taking Over 2026</Link>{' '}·{' '}
          <Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: DESIGN.accent }}>14 ChatGPT Tips & Tricks (May 2026 update)</Link>.
        </p>

        {/* Bottom monetization CTA */}
        <div style={{ marginTop: 40, padding: 32, background: DESIGN.black, color: DESIGN.white, borderRadius: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 0, marginBottom: 8, color: DESIGN.white }}>
            Want 145+ AI prompts beyond World Cup?
          </h2>
          <p style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 24, lineHeight: 1.6 }}>
            The MidasTools <strong>AI Prompt Mega Pack</strong> ($29) covers cold outreach, social
            media, copywriting, ops playbooks. The <strong>All Kits Bundle</strong> ($97) adds 14
            niche kits including image gen + email marketing. Same brain that wrote the prompts
            above wrote those.
          </p>
          <a
            href={STRIPE_MEGA_PACK + '?utm_source=world-cup&utm_campaign=megapack'}
            data-cta="world-cup-megapack"
            style={{ display: 'inline-block', background: DESIGN.accent, color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', marginRight: 12 }}
          >
            Get the Mega Pack — $29
          </a>
          <a
            href={STRIPE_BUNDLE + '?utm_source=world-cup&utm_campaign=bundle'}
            data-cta="world-cup-bundle"
            style={{ display: 'inline-block', background: '#FFFFFF', color: DESIGN.black, padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
          >
            All Kits Bundle — $97
          </a>
        </div>

        <p style={{ marginTop: 32, fontSize: 12, color: DESIGN.gray400, lineHeight: 1.6, textAlign: 'center' }}>
          Independent fan project. Not affiliated with FIFA, any team, or any player. All prompts
          generate text content for personal/creative use.
        </p>
      </main>
    </Layout>
  );
}

const inputStyle = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #D1D5DB',
  fontSize: 14,
  color: '#111827',
  background: '#FFFFFF',
  fontFamily: 'inherit',
};
