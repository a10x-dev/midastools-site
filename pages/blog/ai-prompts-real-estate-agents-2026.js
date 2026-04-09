import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const REAL_ESTATE_KIT_URL = 'https://buy.stripe.com/fZueVcb8r6iR5GAfkmcMM08';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AIPromptsRealEstateAgents2026() {
  const title = '20 AI Prompts Every Real Estate Agent Needs in 2026';
  const description = 'The best AI prompts for real estate agents in 2026. 20 copy-paste ChatGPT prompts for listing descriptions, lead generation, social media, market analysis, and business operations. Close more deals faster.';
  const url = 'https://midastools.co/blog/ai-prompts-real-estate-agents-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can real estate agents use ChatGPT for listing descriptions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ChatGPT is excellent for writing MLS listing descriptions, property marketing copy, and neighborhood guides. The key is providing specific details about the property — square footage, unique features, recent upgrades, neighborhood highlights — and instructing the AI to write in a style that matches your market (luxury, first-time buyer, investor-focused). The prompts in this guide are designed to produce ready-to-publish listing copy that highlights the right selling points and includes relevant keywords for online search.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it ethical for realtors to use AI-generated content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Using AI for real estate marketing is no different from using Canva for graphics or hiring a copywriter for your website. The property details, market knowledge, and client relationships are yours — AI helps you communicate them faster and more effectively. NAR has not prohibited AI use, and most brokerages encourage agents to adopt AI tools for efficiency. The important thing is accuracy: always verify facts, numbers, and claims before publishing AI-generated content.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for real estate agents in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (GPT-4o) and Claude are the two most capable general-purpose AI tools for real estate agents. ChatGPT is best for structured outputs like listing descriptions and email sequences. Claude excels at longer, more nuanced content like market reports and client guides. Both work with every prompt in this guide. For real estate-specific tasks, pair these tools with your MLS data and CRM for maximum impact.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much time can AI save a real estate agent per week?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on surveys from Inman and NAR, agents using AI tools report saving 8-12 hours per week on marketing, client communication, and administrative tasks. The biggest time savings come from listing descriptions (30 minutes down to 5), social media content (2 hours down to 20 minutes), and follow-up email sequences (1 hour down to 10 minutes). That is time you can reinvest in showings, prospecting, and closing deals.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will AI replace real estate agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Real estate is fundamentally a relationship and negotiation business. AI cannot attend showings, read a buyer emotional state during a negotiation, or build the trust required for someone to make the biggest purchase of their life. What AI will do is replace agents who refuse to use it. Agents who adopt AI tools will handle more clients, produce better marketing, and respond faster — making them more competitive against agents who are still doing everything manually.'
        }
      }
    ]
  };

  const promptBlockStyle = {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    marginBottom: '24px'
  };

  const ctaBoxStyle = {
    marginTop: '32px',
    marginBottom: '32px',
    padding: '24px',
    background: '#F0F4FF',
    border: '1px solid #93B4FF',
    borderRadius: '8px',
    textAlign: 'center'
  };

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompts real estate, ChatGPT real estate agent, AI real estate marketing, real estate listing descriptions AI, ChatGPT prompts realtors, AI tools real estate 2026" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          20 AI Prompts Every Real Estate Agent Needs in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 27, 2026 &middot; Rey Midas</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p><strong>58% of real estate agents are now using ChatGPT in their business</strong> (Inman, 2026). The other 42% are writing listing descriptions by hand, crafting follow-up emails from scratch, and spending Sunday afternoons creating social media content that gets 12 likes.</p>

        <p>The agents closing the most deals right now are not necessarily better salespeople. They are faster. They respond to leads in minutes instead of hours. They produce listing marketing that looks like it came from a luxury brokerage&rsquo;s in-house team. They post consistently on social media without burning 10 hours a week on content.</p>

        <p>The difference is not talent. It is tooling. And the most important tool is the prompt.</p>

        <p>A bad prompt gives you generic, robotic text that screams &ldquo;AI wrote this.&rdquo; A good prompt gives you copy that sounds like you on your best day &mdash; specific, local, and persuasive.</p>

        <p>Below are 20 prompts built specifically for real estate agents. Every prompt includes <strong>[brackets]</strong> where you fill in your details. Copy the prompt, replace the brackets, paste into ChatGPT (or <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>our free prompt generator</Link>), and get results you can use immediately.</p>

        <p>These prompts are organized into five categories: listing marketing, lead generation, social media, market analysis, and business operations. Together they cover 90% of what you write in a given week.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* WHY REAL ESTATE AGENTS NEED AI PROMPTS       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why Real Estate Agents Need AI Prompts</h2>

        <p>The numbers tell the story:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>58% of agents</strong> already use ChatGPT or similar AI tools in their daily workflow (Inman, 2026).</li>
          <li>Agents using AI for marketing report <strong>saving 8&ndash;12 hours per week</strong> on content creation and client communication.</li>
          <li>Listings with detailed, keyword-rich descriptions receive <strong>27% more online views</strong> than those with generic copy (Zillow Research).</li>
          <li>Agents who respond to new leads within <strong>5 minutes</strong> are 21x more likely to qualify them than those who respond after 30 minutes (InsideSales).</li>
          <li><strong>44% of buyers</strong> start their home search online. Your listing description is your first showing (NAR, 2026).</li>
        </ul>

        <p>Here is the competitive reality: the top-producing agents in your market are already using AI. Not to replace their expertise, but to multiply it. They write one listing description in 3 minutes instead of 30. They create a month of social media content in an hour. They send personalized follow-ups to every lead in their database while you are still drafting the first email.</p>

        <p>AI does not replace what makes a great agent &mdash; relationships, negotiation, local knowledge, hustle. It replaces the busywork that keeps you from doing more of those things.</p>

        <p>Let us get into the prompts.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* CATEGORY 1: LISTING DESCRIPTIONS & MARKETING */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Listing Descriptions &amp; Marketing</h2>
        <p>Your listing description is the first impression for 44% of buyers who start their search online. These four prompts produce marketing copy that sells the lifestyle, not just the specs.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. MLS Listing Description Writer</h3>
        <p>This prompt generates a compelling MLS description that balances emotional storytelling with the hard facts buyers and agents search for. It is optimized for Zillow, Realtor.com, and Redfin search results.</p>
        <div style={promptBlockStyle}>
{`Write an MLS listing description for a residential property. Here are the details:

Property type: [single-family home / condo / townhouse / multi-family]
Address/Neighborhood: [neighborhood name, city, state]
Bedrooms: [number] | Bathrooms: [number]
Square footage: [number]
Lot size: [number, if applicable]
Year built: [year]
List price: $[price]
Key features: [list 5-8 standout features, e.g., "renovated kitchen with quartz countertops, primary suite with walk-in closet, heated floors in bathrooms, new roof 2025, mature landscaping, 2-car attached garage"]
Recent upgrades: [list any updates with year completed]
Neighborhood highlights: [walkability, schools, parks, restaurants, commute times]
Target buyer: [first-time buyer / move-up buyer / luxury buyer / investor / downsizer]

Write the description in 150-200 words. Structure:
1. Open with a hook that sells the lifestyle, not just the house
2. Highlight the top 3 selling points with specific details
3. Mention the neighborhood and location advantages
4. Close with a call to action that creates urgency

Use active, vivid language. Avoid cliches like "move-in ready," "must see," "won't last long." Instead, be specific — "white oak hardwood floors throughout the main level" beats "beautiful flooring." Do not use all caps or excessive exclamation marks.`}
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. Property Highlight Social Post</h3>
        <p>Turn any listing into a scroll-stopping social media post. This prompt creates platform-specific copy that drives clicks to the listing page.</p>
        <div style={promptBlockStyle}>
{`Write a social media post promoting a real estate listing. Details:

Property: [bedrooms/bathrooms, neighborhood, city]
List price: $[price]
Top 3 features: [e.g., "chef's kitchen, private backyard, 5-minute walk to downtown"]
Platform: [Instagram / Facebook / LinkedIn]
My listing link: [URL]

Write the post in this format:
1. Opening hook (first line must stop the scroll — ask a question, make a bold statement, or lead with the most surprising feature)
2. 3-4 short paragraphs highlighting what makes this home special. Focus on lifestyle, not specs. "Host Thanksgiving dinner in a kitchen with a 10-foot island" beats "large kitchen with island."
3. Clear call to action: "DM me for a showing" or "Link in bio for the full tour"
4. 8-10 relevant hashtags (mix of local and real estate hashtags)

Tone: Conversational, confident, local. Write like a top-producing agent who knows the neighborhood inside and out — not like a corporate brochure. Keep it under [150 words for Instagram / 200 words for Facebook / 250 words for LinkedIn].`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. Open House Announcement &amp; Follow-Up</h3>
        <p>Most open house announcements are forgettable. This prompt creates a pre-event buzz post and a follow-up template for every visitor who walks through the door.</p>
        <div style={promptBlockStyle}>
{`Create an open house marketing package for the following listing:

Property: [address, bedrooms/bathrooms, key features]
Open house date/time: [day, date, time range]
List price: $[price]
Target audience: [first-time buyers / families / downsizers / investors]

Generate the following:

PART 1 — Pre-Event Announcement (for social media and email):
Write a short, exciting announcement (100 words max) that gives people a reason to attend beyond just seeing the house. Mention one surprising detail about the property or neighborhood. Include the date, time, and address. End with "Bring a friend who's been thinking about buying."

PART 2 — Open House Sign-In Follow-Up Email:
Write a follow-up email to send within 2 hours of the open house ending. Reference the property. Ask one qualifying question ("Are you currently working with an agent?"). Offer to send the full property disclosure or a CMA for their current home. Keep it under 120 words. Subject line included.

PART 3 — "Didn't Make It" Email:
Write an email for people who expressed interest but did not attend. Create FOMO by mentioning how many people came and one highlight from the event. Offer a private showing. Keep it under 100 words. Subject line included.

Tone: Warm, professional, not pushy.`}
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. Neighborhood Guide Creator</h3>
        <p>Neighborhood guides are the highest-converting content type for real estate SEO. They position you as the local expert and attract buyers before they even contact an agent. Use this to create guides for every neighborhood in your farm area.</p>
        <div style={promptBlockStyle}>
{`Write a neighborhood guide for [Neighborhood Name] in [City, State]. I am a real estate agent farming this area and want to rank on Google for "[Neighborhood Name] homes for sale" and "[Neighborhood Name] neighborhood guide."

Include these sections:
1. Overview (2-3 sentences on the vibe and who lives here)
2. Housing stock (typical home styles, price ranges, lot sizes)
3. Schools (top-rated schools and their ratings if known)
4. Dining & shopping (name 5-8 specific restaurants, cafes, or shops — use [placeholder names] if you don't know real ones, and I'll fill them in)
5. Parks & recreation (green spaces, trails, community amenities)
6. Commute & transportation (drive times to [major employment center], public transit options)
7. What locals love (2-3 insider details that only someone who knows the area would mention)
8. Current market snapshot (instruct me to add current median price, days on market, and inventory from MLS)

Write in a conversational, knowledgeable tone. 600-800 words total. Include the neighborhood name naturally throughout for SEO without keyword stuffing. End with a CTA: "Thinking about buying in [Neighborhood Name]? I sell here every month — let's talk."`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* CATEGORY 2: LEAD GENERATION & FOLLOW-UP      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Lead Generation &amp; Follow-Up</h2>
        <p>Speed to lead wins in real estate. These prompts help you prospect consistently, follow up without being annoying, and turn cold contacts into appointments.</p>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. Cold Outreach for Expired &amp; FSBO Listings</h3>
        <p>Expired and FSBO listings are the most reliable source of motivated sellers. But they are also bombarded by agents. This prompt generates outreach that stands out by leading with value instead of a pitch.</p>
        <div style={promptBlockStyle}>
{`Write a cold outreach message for a [expired listing / FSBO seller]. Details:

Seller situation: [their home has been on the market for X days and expired / they are selling without an agent]
Property address: [address or neighborhood]
Approximate list price: $[price]
My name: [your name]
My brokerage: [brokerage name]
One specific thing I noticed about their listing: [e.g., "photos look dark and don't show the backyard" / "price is above recent comps on the street" / "description doesn't mention the new kitchen renovation"]

Write 3 versions:

VERSION A — Email (150 words max):
Subject line that gets opened (no "I can sell your home!" — be specific). Open by acknowledging their frustration. Share ONE specific, actionable observation about why their listing may not have sold. Offer a free, no-obligation market analysis. Close with a soft CTA.

VERSION B — Voicemail script (30 seconds max):
Same approach but spoken. Natural, not scripted-sounding. Leave my phone number twice.

VERSION C — Text message (under 160 characters):
Direct, casual, reference the specific property.

Tone across all three: Confident expert who notices things other agents missed. Not desperate. Not salesy. I'm offering help, not begging for a listing.`}
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. Lead Follow-Up Drip Sequence</h3>
        <p>80% of sales require 5+ follow-ups, but most agents stop after one. This prompt creates an entire nurture sequence so no lead falls through the cracks.</p>
        <div style={promptBlockStyle}>
{`Create a 6-email follow-up drip sequence for a real estate lead. Details:

Lead source: [Zillow inquiry / open house / website contact form / social media DM / referral]
Lead type: [buyer / seller / investor]
Their situation: [e.g., "first-time buyer looking in the $400K-$500K range" / "homeowner curious about selling in 6 months"]
My market: [city/area]
My name: [your name]

Write 6 emails with the following cadence and goals:

Email 1 (Day 0 — immediate): Thank them, confirm what they're looking for, ask one qualifying question. Under 100 words.
Email 2 (Day 2): Share a relevant resource — a market update, a neighborhood guide, or a recent comparable sale. Position yourself as the knowledgeable local expert. Under 120 words.
Email 3 (Day 5): Social proof — share a brief client success story relevant to their situation. "I just helped a first-time buyer in [area] close $15K under asking." Under 100 words.
Email 4 (Day 10): Value add — offer something specific: a list of new listings matching their criteria, a free home valuation, or a buyer/seller guide. Under 100 words.
Email 5 (Day 17): The honest check-in. "Still looking?" Keep it human and short. Under 60 words.
Email 6 (Day 30): The long-game email. Share a market insight and leave the door open. "Whenever you're ready, I'm here." Under 80 words.

Include subject lines for each. Tone: Helpful, not pushy. Every email should provide value or information, never just "checking in."`}
        </div>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. Referral Request Template</h3>
        <p>Referrals are the highest-converting lead source in real estate, but most agents never ask. This prompt creates natural, non-awkward referral requests for different situations.</p>
        <div style={promptBlockStyle}>
{`Write referral request messages for a real estate agent. My name is [your name] and I specialize in [area/market].

Create 4 versions for different situations:

VERSION A — Post-Closing (send to buyer/seller client 2 weeks after closing):
Thank them for choosing me. Reference one specific thing from their transaction (use [specific detail placeholder]). Ask for a referral naturally — "If anyone in your circle is thinking about buying or selling, I'd love to take care of them the same way." Ask for a Google review with a direct link placeholder. Under 100 words.

VERSION B — Annual Check-In (send to past clients on their home anniversary):
Wish them a happy home anniversary. Include a quick local market stat about their neighborhood ("homes in [neighborhood] are up X% since you bought"). Mention that referrals are the core of my business. Under 80 words.

VERSION C — Sphere of Influence (send to friends, family, past colleagues):
Casual, warm. "I don't know if you know this, but real estate is what I do full-time now." Ask them to keep me in mind. No pressure. Under 80 words.

VERSION D — After a Great Interaction (send when a client compliments your work):
Strike while the iron is hot. Thank them for the kind words. Ask if they'd be willing to share that feedback as a Google review or pass my name along. Under 60 words.

Tone: Genuine and confident, never desperate. These should sound like something a real person would actually send.`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. Buyer Consultation Prep Script</h3>
        <p>The buyer consultation is where you win or lose the client. This prompt generates a customized consultation framework based on the buyer&rsquo;s specific situation, so you walk in prepared and they walk out committed.</p>
        <div style={promptBlockStyle}>
{`Help me prepare for a buyer consultation. Here are the details:

Buyer profile: [first-time buyer / move-up buyer / investor / relocating from out of state]
Budget range: $[min] - $[max]
Target area: [neighborhoods or cities they're interested in]
Timeline: [when they want to be moved in]
Pre-approval status: [pre-approved / not yet / unknown]
Key priorities: [e.g., "good school district, updated kitchen, minimal commute to downtown"]
Concerns I anticipate: [e.g., "worried about interest rates, unsure about the market, nervous about bidding wars"]

Generate:

1. An agenda for the consultation (30-45 minutes, structured so I look organized and professional).
2. Five discovery questions I should ask to understand their real motivation beyond "we want a 3-bedroom."
3. Talking points that address each of their anticipated concerns with current market data placeholders [I'll fill in the latest numbers].
4. A brief explanation of the buying process tailored to their experience level (detailed for first-timers, abbreviated for experienced buyers).
5. A closing script that transitions from "meeting" to "working together" — how to ask for commitment without being pushy.

Tone: Confident advisor, not desperate salesperson. I'm interviewing them as much as they're interviewing me.`}
        </div>

        {/* CTA AFTER PROMPT 8 */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want more prompts built for real estate?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <Link href="/real-estate-kit" style={{ color: '#3B5FFF' }}>AI Real Estate Kit</Link> includes 150+ prompts for listings, lead gen, client communication, market reports, social media, and business planning. Built by agents, for agents.</p>
          <a href={REAL_ESTATE_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Real Estate Kit &mdash; $49 One-Time
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* CATEGORY 3: SOCIAL MEDIA CONTENT             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Social Media Content</h2>
        <p>Consistent social media presence is no longer optional for agents. But creating content every day is a grind. These prompts batch-produce a week of content in under an hour.</p>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. Instagram Carousel Post Script</h3>
        <p>Carousels get 3x more engagement than single-image posts on Instagram. This prompt creates educational or entertaining slide-by-slide content that builds your authority and reach.</p>
        <div style={promptBlockStyle}>
{`Create an Instagram carousel post for a real estate agent. Details:

Topic: [e.g., "5 things first-time buyers always forget" / "What $500K buys you in [city] right now" / "Red flags to watch for at an open house"]
Target audience: [first-time buyers / sellers / investors / general homeowners]
My market: [city/area]
Number of slides: [7-10]

For each slide, write:
- A short, punchy headline (5-8 words max — this is what people read as they swipe)
- 1-2 sentences of supporting text (for the carousel graphic)
- A note in brackets about what visual to use

Slide 1 should be a scroll-stopping hook. Last slide should be a CTA: "Save this post" + "Follow @[your handle] for more [city] real estate tips."

Then write the caption (150 words max):
- First line = hook that makes people want to swipe
- 2-3 sentences expanding on the topic
- CTA: "Which one surprised you? Drop a number in the comments."
- 15-20 hashtags (mix of local + real estate + general)

Tone: Expert friend who lives in the area. Not salesy. Educational and slightly opinionated.`}
        </div>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. Video Tour Script for Reels or TikTok</h3>
        <p>Short-form video is the highest-reach format on every platform. This prompt writes a tight script that makes your listing tours watchable and shareable.</p>
        <div style={promptBlockStyle}>
{`Write a video tour script for a real estate listing. Details:

Property: [bedrooms/bathrooms, neighborhood, city]
Top 3 features: [e.g., "open floor plan, renovated chef's kitchen, backyard with pool"]
List price: $[price]
Video length: [30 seconds for Reels/TikTok / 60 seconds for YouTube Shorts]
My name: [your name]

Write the script in this format:

HOOK (first 3 seconds — this determines if people keep watching):
[Write a specific, attention-grabbing opening line. NOT "Check out this listing!" Instead: "This kitchen has something I've never seen in [city] under $500K" or "I found a hidden gem in [neighborhood] and the backyard is unreal."]

WALKTHROUGH (middle section):
[Write brief, punchy narration for each room/area I'll show. 1-2 sentences per area. Focus on what makes each space special, not just what it is. "The primary bedroom has two closets and looks out over the backyard" not "here's the master bedroom."]

CLOSE (last 5 seconds):
[CTA: "DM me 'TOUR' for a private showing" or "Link in bio for all the details." Keep it simple and actionable.]

Include a text overlay suggestion for each section of the video. Tone: Enthusiastic but authentic. Like you're showing a friend a house you're genuinely excited about.`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. Weekly Market Update Post</h3>
        <p>Market update posts establish you as the data-driven expert. Agents who post weekly updates consistently report that it is the number one content type that generates inbound leads.</p>
        <div style={promptBlockStyle}>
{`Write a weekly market update social media post for a real estate agent. Details:

My market: [city or neighborhood]
Platform: [Instagram / Facebook / LinkedIn]
This week's data (I'll fill in the numbers):
- Active listings: [number]
- New listings this week: [number]
- Median list price: $[price]
- Median days on market: [number]
- Closed sales this week: [number]
- Average sale-to-list ratio: [percentage]

Write the post in this structure:
1. Opening line: A one-sentence takeaway that tells people what the data MEANS, not just what it is. ("Inventory in [city] just hit its lowest point since 2024 — here's what that means if you're thinking about selling.")
2. 3-4 key data points with brief commentary on each (what it means for buyers and sellers).
3. My take: 2-3 sentences with my professional opinion on where the market is heading and what smart buyers/sellers should do right now.
4. CTA: "Want to know what this means for YOUR home? DM me for a free market analysis."

Tone: Data-informed but accessible. No jargon. A homeowner with zero real estate knowledge should understand every sentence. Under [200 words for Instagram / 300 words for Facebook/LinkedIn].`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. Client Success Story Post</h3>
        <p>Social proof is the most powerful marketing tool in real estate. This prompt turns your closed transactions into compelling stories that make future clients think &ldquo;I want that agent.&rdquo;</p>
        <div style={promptBlockStyle}>
{`Write a client success story social media post for a real estate agent. Details:

Transaction type: [buyer / seller]
Client situation: [e.g., "first-time buyer who was outbid 3 times before we won" / "seller who needed to move in 30 days for a job relocation" / "investor buying their 4th rental property"]
Property: [neighborhood, city — no exact address]
Key challenge we overcame: [e.g., "low appraisal, multiple offer situation, tight timeline, needed major repairs negotiated"]
Result: [e.g., "closed $20K under asking with $8K in seller credits" / "sold in 6 days, $15K over asking" / "found a duplex that cash-flows $800/month"]
Client first name (or pseudonym): [name]
Platform: [Instagram / Facebook / LinkedIn]

Write the post as a mini-story:
1. The challenge (1-2 sentences — make the reader feel the tension)
2. What we did differently (2-3 sentences — this is where your expertise shows)
3. The result (specific numbers — this is the payoff)
4. A quote from the client (write a realistic-sounding placeholder I can replace with a real one, or use as-is with permission)
5. CTA: "Thinking about [buying/selling]? Every situation is different — let's talk about yours."

Tone: Proud but not braggy. The client is the hero, you're the guide. Under 200 words.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* CATEGORY 4: MARKET ANALYSIS & CLIENT COMMS   */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Market Analysis &amp; Client Communication</h2>
        <p>Clear, data-driven communication separates top agents from average ones. These prompts help you translate raw MLS data into insights your clients actually understand and trust.</p>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. CMA Summary for Sellers</h3>
        <p>Most CMAs are a stack of MLS printouts that overwhelm sellers. This prompt turns your comp data into a clear, persuasive narrative that helps sellers understand &mdash; and agree with &mdash; your pricing recommendation.</p>
        <div style={promptBlockStyle}>
{`Write a Comparative Market Analysis summary for a seller. I'm presenting this at a listing appointment to support my pricing recommendation.

Subject property: [address, bedrooms/bathrooms, square footage, lot size, condition, notable features]
My recommended list price: $[price]

Comparable sales (I'll provide 3-5):
- Comp 1: [address, sold price, date, beds/baths, sqft, key differences from subject]
- Comp 2: [address, sold price, date, beds/baths, sqft, key differences from subject]
- Comp 3: [address, sold price, date, beds/baths, sqft, key differences from subject]

Active competition (current listings competing with this home):
- Listing 1: [address, list price, beds/baths, sqft, days on market, condition notes]
- Listing 2: [address, list price, beds/baths, sqft, days on market, condition notes]

Write a CMA narrative summary (300-400 words) that includes:
1. A market context paragraph (is the neighborhood trending up, stable, or cooling?)
2. Analysis of the comps — what each one tells us about the subject property's value, and why I adjusted up or down from each
3. Competitive positioning — how the subject compares to current active listings and why my price will attract the right buyers
4. My pricing recommendation with a clear rationale — explain it like I'm talking to a smart person who is not a real estate professional
5. What happens if we price too high (quantify the risk: "homes that sit past 21 days sell for an average of 5% below list price")

Tone: Authoritative, data-driven, but easy to understand. No jargon. This should read like a trusted advisor explaining, not a salesperson convincing.`}
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. Monthly Market Report Email</h3>
        <p>A monthly market report to your database keeps you top-of-mind and positions you as the go-to market expert. This prompt makes it easy to produce one every month without starting from scratch.</p>
        <div style={promptBlockStyle}>
{`Write a monthly market report email for my real estate database. Details:

Market: [city or county]
Month/Year: [month, year]
Key stats (I'll fill in):
- Median sale price: $[price] (up/down [X%] from last month, up/down [X%] year-over-year)
- Total homes sold: [number]
- Average days on market: [number]
- New listings: [number]
- Months of supply: [number] (buyers market = 6+, balanced = 4-6, sellers market = under 4)
- Interest rates: [current 30-year fixed rate]

Write the email in this structure:

Subject line: [Something specific and clickable, not "Monthly Market Update"]

Body:
1. Opening line: One sentence headline takeaway — what's the story this month's data tells?
2. Three key metrics with plain-English commentary. For each: the number, what it means, and who should care (buyers, sellers, or both).
3. My prediction: 2-3 sentences on what I expect next month based on the trends.
4. Action items: One specific thing buyers should do right now, and one specific thing sellers should do right now.
5. CTA: "Reply to this email with any questions — I read every one."

Total length: 250-350 words. Tone: Smart friend who happens to be a real estate expert. No fluff, no filler. Every sentence earns its spot.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. First-Time Buyer Guide Email Series</h3>
        <p>First-time buyers are anxious and overwhelmed. An educational email series builds trust and positions you as their guide before they are ready to write an offer. This prompt creates the complete series.</p>
        <div style={promptBlockStyle}>
{`Create a 5-email educational series for first-time home buyers. I'm a real estate agent in [city/area] and I want to send this to leads who are 3-6 months out from buying.

My name: [your name]
My market: [city/area]
Average home price in my area: $[price]
Current interest rate: [rate]%

Write 5 emails with the following topics:

Email 1 — "How Much Home Can You Actually Afford?"
Explain the difference between what the bank approves and what's comfortable. Include the 28/36 rule. Mention local down payment assistance programs (use [placeholder] for program names). CTA: "Want me to connect you with a lender who won't waste your time? Reply and I'll make an intro."

Email 2 — "The Home Buying Timeline: What to Expect"
Walk through the process from pre-approval to keys in hand. Include typical timelines for each step in [my market]. Demystify the process. CTA: "Questions about any of these steps? Reply — I do this every week."

Email 3 — "How to Win in [City]'s Market Without Overpaying"
Share current market conditions and realistic strategies. No hype. Honest advice about competition, inspections, and escalation clauses. CTA: "Want to see what's on the market in your price range? I'll send you a custom search."

Email 4 — "The Hidden Costs Nobody Tells First-Time Buyers About"
Closing costs, inspections, appraisals, insurance, HOA, property taxes, maintenance reserves. Break down realistic numbers for [my market]. CTA: "I built a full cost breakdown spreadsheet — reply 'COSTS' and I'll send it over."

Email 5 — "Why the Right Agent Matters (and How to Choose One)"
Honest advice about what a buyer's agent does, how to evaluate agents, and what to look for. End with a soft pitch for working together. CTA: "Ready to start looking? Let's grab coffee and make a plan."

Each email: 200-300 words. Subject lines included. Tone: Patient teacher, not pushy salesperson.`}
        </div>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>16. Seller Pre-Listing Newsletter</h3>
        <p>Homeowners think about selling for months before they call an agent. This prompt creates content that reaches them during that decision phase and makes you the obvious choice when they are ready.</p>
        <div style={promptBlockStyle}>
{`Write a newsletter email targeting homeowners who might be thinking about selling in the next 6-12 months. Details:

My market: [city/area]
Current median home price: $[price]
Year-over-year appreciation: [X%]
Average days on market: [number]
Season: [spring/summer/fall/winter]
My name: [your name]

Write the email with these sections:

1. Subject line: Something that makes a homeowner curious about their home's value (NOT "Thinking about selling?")

2. Hook: Open with a specific, surprising local market stat. "Your neighbor on [Street Name] just sold for $X" works — use a placeholder I can fill in.

3. "What Your Home Might Be Worth" section: Explain how appreciation has affected values in their area. Use a simple example: "If you bought in [year] at $[price], your home may now be worth $[estimated current value] based on [X%] annual appreciation." Caveat that every home is different.

4. "Three Things Smart Sellers Do Before Listing": Actionable prep tips specific to [my market] and [current season]. Not generic "declutter and stage" advice — think specific ROI improvements.

5. CTA: "Curious what your home would actually sell for today? I'll run the numbers — no strings attached. Reply 'VALUE' and I'll send you a free, personalized market analysis within 24 hours."

Length: 300-400 words. Tone: Helpful neighbor who happens to have market expertise.`}
        </div>

        {/* CTA AFTER PROMPT 16 */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>These 16 prompts are just the start.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <Link href="/bundle" style={{ color: '#3B5FFF' }}>Complete AI Prompt Bundle</Link> includes 12 specialized kits with 2,000+ prompts covering real estate, marketing, content creation, and more. Everything you need to run your business on AI.</p>
          <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Full Bundle &mdash; $97 One-Time
          </a>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>12 kits &middot; 2,000+ prompts &middot; Free lifetime updates</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* CATEGORY 5: BUSINESS OPERATIONS              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Business Operations</h2>
        <p>The agents who build lasting businesses treat themselves like a CEO, not just a salesperson. These prompts systematize the back-office work that most agents procrastinate on.</p>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>17. New Client Onboarding Checklist &amp; Welcome Email</h3>
        <p>A smooth onboarding experience sets the tone for the entire relationship. This prompt creates a professional welcome package that makes clients feel like they hired the right agent.</p>
        <div style={promptBlockStyle}>
{`Create a new client onboarding package for a real estate agent. Details:

Client type: [buyer / seller]
My name: [your name]
My brokerage: [brokerage name]
My phone: [number]
My email: [email]

Generate:

PART 1 — Welcome Email:
Write a warm, professional welcome email to send immediately after signing a buyer/seller agreement. Include:
- Confirmation of what we agreed to (representation type, timeline, goals)
- "Here's what happens next" — the first 3 steps with expected timelines
- How to reach me (response time commitment: "I respond to calls within 1 hour and texts within 30 minutes during business hours")
- A link placeholder for any documents they need to complete
Under 200 words. Subject line included.

PART 2 — Internal Onboarding Checklist:
A step-by-step checklist I can follow for every new client to make sure nothing falls through the cracks. Include:
- Documents to collect
- Systems to set up (MLS search alerts, CRM entry, transaction folder)
- Key dates to calendar
- Communication preferences to confirm
- Introductions to make (lender, inspector, attorney if applicable)
Format as a numbered checklist. 15-20 items.

PART 3 — "What to Expect" Guide (for the client):
A brief document (200-300 words) I can send as a PDF that walks the client through the [buying/selling] process in plain English. Timeline, key milestones, and what I handle vs. what they need to do.

Tone: Organized, professional, reassuring. The client should feel like they're in expert hands.`}
        </div>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>18. Annual Business Plan Builder</h3>
        <p>Most agents set vague goals and hope for the best. This prompt forces clarity by working backward from your income goal to the daily activities required to hit it.</p>
        <div style={promptBlockStyle}>
{`Help me build an annual business plan for my real estate business. Details:

My gross commission income goal: $[amount]
Average sale price in my market: $[price]
My average commission rate: [X%]
Commission split with brokerage: [X/X split]
My current database size: [number of contacts]
Last year's closed transactions: [number]
Last year's GCI: $[amount]
Lead sources I currently use: [list them, e.g., "SOI referrals, Zillow leads, open houses, Instagram"]
Hours per week I want to work: [number]

Generate:

1. INCOME MATH: Work backward from my GCI goal to determine:
   - How many transactions I need to close
   - How many listings and buyer deals that breaks into
   - My average commission per deal after splits

2. LEAD GENERATION PLAN: Based on my current sources and industry conversion rates:
   - How many leads I need per month (assume [X%] lead-to-close conversion)
   - How many contacts/conversations per week that requires
   - Recommended allocation across my lead sources (with expected ROI for each)

3. QUARTERLY MILESTONES: Break the annual goal into Q1-Q4 targets with specific metrics for each quarter.

4. WEEKLY SCORECARD: A simple tracking template with the 5-7 daily/weekly activities I need to hit consistently (calls made, appointments set, listings taken, offers written, etc.).

5. TOP 3 PRIORITIES: Based on the gap between where I am and where I want to be, what are the 3 highest-leverage changes I should make this year?

Be specific with numbers. No motivational fluff — just math and execution.`}
        </div>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>19. Database Segmentation &amp; Reactivation Campaign</h3>
        <p>Your database is your most valuable asset, but only if you work it. Most agents have hundreds of contacts sitting idle. This prompt helps you segment them and create targeted reactivation campaigns.</p>
        <div style={promptBlockStyle}>
{`Help me segment and reactivate my real estate database. Details:

Total database size: [number of contacts]
CRM system: [name, e.g., Follow Up Boss, KW Command, LionDesk, spreadsheet]
How long since I last contacted most of the database: [e.g., "6+ months for about 60% of them"]
My market: [city/area]

Generate:

PART 1 — Segmentation Framework:
Create a segmentation system with 5-6 categories based on likelihood to transact. For each segment:
- Segment name and definition
- Recommended contact frequency (weekly, monthly, quarterly)
- Best communication channel (call, text, email, social media)
- Example contacts who would fall in this segment

Segments should include at minimum: hot leads, warm leads (likely to transact in 6-12 months), past clients, sphere of influence, cold/dormant leads.

PART 2 — Reactivation Messages:
Write a reactivation message for each segment. These are for contacts I haven't communicated with in 6+ months.

For each segment, write:
- A text message version (under 160 characters)
- An email version (under 100 words, subject line included)

The messages should NOT say "It's been a while" or "I know we haven't talked in a long time" — that highlights the neglect. Instead, lead with value: a market update, a relevant insight, or a reason to reconnect that's about THEM, not me.

PART 3 — 90-Day Reactivation Calendar:
A week-by-week plan for systematically reaching out to my entire database over the next 90 days. Include how many contacts to reach per week and which segment to prioritize first.

Tone: Strategic and practical. This is an operations plan, not a pep talk.`}
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>20. Google Review Request Template</h3>
        <p>Online reviews are the new referral. 87% of consumers read online reviews before choosing a local business. This prompt creates review request messages that actually get responses.</p>
        <div style={promptBlockStyle}>
{`Write review request messages for a real estate agent. My name is [your name] and my Google Business Profile link is [URL placeholder].

Create 4 versions:

VERSION A — Immediate Post-Closing (send same day as closing):
Short, warm, capitalize on the emotional high of closing day. Reference the specific transaction: "You officially own [their new address]!" Ask for a Google review. Make it easy — include the direct link and suggest what they might mention (the process, communication, outcome). Under 80 words.

VERSION B — One Week After Closing (email):
Check in on how they're settling in. Ask if there's anything they need (contractor referrals, utility setup help). Then ask for the review as a natural extension. "If you have 2 minutes, a Google review helps other [buyers/sellers] find an agent they can trust." Under 100 words. Subject line included.

VERSION C — Text Message (send 2-3 days after closing):
Casual, brief. "Hey [name]! How's the new place? If you had a great experience working together, I'd really appreciate a quick Google review — it means the world. [link]" Under 50 words.

VERSION D — For Past Clients (6+ months ago, never left a review):
Reconnect first, then ask. Reference their purchase/sale. Mention that you're building your online presence and reviews from real clients are the most important thing. No guilt. Under 80 words.

For each version, also include:
- The best time/day to send it (based on when people are most likely to complete the action)
- A follow-up message if they don't respond within 5 days

Tone: Grateful, not desperate. Confident, not begging.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FAQ SECTION                                  */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can real estate agents use ChatGPT for listing descriptions?</h3>
        <p>Yes, and the best agents already do. ChatGPT writes compelling MLS descriptions, property marketing copy, and neighborhood guides in minutes. The key is giving it specific details &mdash; square footage, unique features, buyer persona, neighborhood highlights &mdash; rather than asking for a generic description. The prompts in this guide are structured to produce listing copy that is ready to publish with minimal editing.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Is it ethical for realtors to use AI-generated content?</h3>
        <p>Absolutely. Using AI is no different from using Canva for graphics, hiring a copywriter, or using a transaction management system. Your market knowledge, client relationships, and negotiation skills are yours &mdash; AI helps you communicate them faster and at higher quality. NAR has not prohibited AI use, and most brokerages actively encourage it. The important thing is accuracy: always verify property details, market data, and legal claims before publishing.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the best AI tool for real estate agents in 2026?</h3>
        <p>ChatGPT (GPT-4o) and Claude are the two best options. ChatGPT handles structured outputs like listing descriptions and email sequences well. Claude produces more natural, conversational content for social media and client communication. Both work with every prompt in this guide. For building custom prompts on the fly, try our <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>free AI Prompt Generator</Link>.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How much time can AI save a real estate agent per week?</h3>
        <p>Agents report saving 8&ndash;12 hours per week when they systematically use AI for content creation and client communication. The biggest wins: listing descriptions (30 minutes down to 5), social media content (2+ hours down to 20 minutes), follow-up emails (1 hour down to 10 minutes), and market reports (45 minutes down to 10). That is time you can reinvest in prospecting, showings, and closing.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Will AI replace real estate agents?</h3>
        <p>No. Real estate is a relationship, negotiation, and trust business. AI cannot attend a showing, read a buyer&rsquo;s body language, or navigate an emotional negotiation over inspection repairs. What AI will do is widen the gap between agents who use it and agents who do not. The top producers in your market will be the ones who use AI to handle content, follow-up, and admin &mdash; freeing themselves to do more dollar-productive activities.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If these real estate prompts were useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/best-ai-prompts-business-2026" style={{ color: '#3B5FFF' }}>The Best AI Prompts for Business in 2026</Link> &mdash; Prompts for marketing, operations, and growth</li>
          <li><Link href="/blog/ai-tools-small-business-owners-2026" style={{ color: '#3B5FFF' }}>AI Tools for Small Business Owners in 2026</Link> &mdash; The full stack of tools beyond ChatGPT</li>
          <li><Link href="/real-estate-kit" style={{ color: '#3B5FFF' }}>AI Real Estate Kit</Link> &mdash; The full 150+ prompt system for agents</li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link> &mdash; Build custom prompts for any use case</li>
          <li><Link href="/bundle" style={{ color: '#3B5FFF' }}>All Kits Bundle</Link> &mdash; Every AI toolkit we make, one price</li>
          <li><Link href="/prompts/chatgpt-real-estate-prompts" style={{ color: '#3B5FFF' }}>10 Free ChatGPT Prompts for Real Estate Agents</Link> &mdash; copy-paste templates ready to use</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to close more deals with less busywork?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Real Estate Kit</strong> includes 150+ prompts for listing marketing, lead generation, client communication, market reports, social media, and business operations. Built by agents, for agents. $49 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={REAL_ESTATE_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Real Estate Kit &mdash; $49
            </a>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Real Estate Kit plus 11 more specialized kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* EMAIL CAPTURE */}
        <EmailCapture />

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
