// Nurture email sequence — 7-day drip + broadcast + auto-drip
// Manual: GET /api/nurture?key=SECRET&day=1&to=email
// Broadcast: GET /api/nurture?key=SECRET&broadcast=true&template=tools|bundle|trending
// Auto-drip: GET /api/nurture?key=SECRET&drip=true (sends correct day email to each subscriber based on signup date)

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';
const SUBSCRIBERS_BLOB = 'https://jsonblob.com/api/jsonBlob/019d7730-bd31-79cb-86f4-4b76dac3786b';

const BUNDLE_LINK = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const MEGA_PACK_LINK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const IMAGE_PACK_LINK = 'https://buy.stripe.com/8x24gy90j22B4Cw9UXcMM0i';
const CLAUDE_KIT_LINK = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';

function wrapEmail(content) {
  return `
    <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
      ${content}
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;"/>
      <p style="font-size:12px;color:#9CA3AF;text-align:center;">
        MidasTools — AI kits that make you money<br/>
        <a href="https://midastools.co" style="color:#9CA3AF;">midastools.co</a>
      </p>
    </div>
  `;
}

function blueBox(title, content) {
  return `<div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
    ${title ? `<h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">${title}</h3>` : ''}
    <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">${content}</p>
  </div>`;
}

function ctaButton(text, link, subtitle) {
  return `<div style="text-align:center;margin:32px 0;">
    <a href="${link}" style="display:inline-block;background:#3B5FFF;color:#FFF;font-weight:700;font-size:16px;padding:14px 36px;border-radius:100px;text-decoration:none;">${text}</a>
    ${subtitle ? `<p style="font-size:13px;color:#6B7280;margin-top:8px;">${subtitle}</p>` : ''}
  </div>`;
}

// Source-specific bonus content for Day 3
function getSourceBonus(source) {
  if (source && source.includes('pet')) {
    return {
      hook: "Since you loved the Pet Portrait Generator",
      bonus: `Here are 3 exclusive pet portrait prompts you won't find on the site:`,
      prompts: [
        { title: "Renaissance Royal Pet", prompt: "Transform my [pet type] into a Renaissance-era royal portrait. Full oil painting style, ornate gold frame visible, velvet backdrop in deep burgundy, the pet wearing a miniature crown and regal collar with jewels. Soft Rembrandt lighting from the left, dramatic shadows. The expression should be dignified and noble. 4K, museum-quality detail." },
        { title: "Pet as Pixar Main Character", prompt: "Create my [pet type] as the lead character in a Pixar movie poster. Big expressive eyes, slightly exaggerated proportions. Standing heroically on a hilltop at golden hour. Title text at top: '[PET NAME]: The Adventure Begins'. Include a tiny sidekick character (a mouse or bird) on their shoulder. Pixar's signature subsurface scattering lighting, vibrant colors." },
        { title: "Cyberpunk Street Pet", prompt: "My [pet type] as a cyberpunk street warrior in a neon-lit alley. Wearing a tiny leather jacket with glowing circuit patterns, one eye replaced with a red cybernetic implant. Rain-slicked streets reflecting neon signs in Japanese and English. Holographic advertisements floating above. Blade Runner meets cute animal. Cinematic, moody, detailed." },
      ],
      cta: { text: "Get 150+ Image Prompts — $29", link: IMAGE_PACK_LINK },
    };
  }
  if (source && source.includes('ghibli')) {
    return {
      hook: "Since you loved the Ghibli Art Generator",
      bonus: "Here are 3 exclusive Studio Ghibli prompts not available on the site:",
      prompts: [
        { title: "Ghibli Secret Garden", prompt: "A hidden garden behind an old Japanese wooden gate, Studio Ghibli art style. Overgrown with wildflowers, a stone path winding through, small kodama spirits peeking from behind mossy rocks. A single ray of golden sunlight breaking through the canopy. Hand-painted watercolor feel, soft pastel colors, the magical realism of Miyazaki. A child's red bicycle parked by the entrance." },
        { title: "Ghibli Flying Scene", prompt: "A young person riding on the back of a giant white heron, soaring above a sea of clouds at sunset. Studio Ghibli animation style. Below the clouds, glimpses of a patchwork countryside with tiny villages. The rider's hair and scarf flowing in the wind. Warm golden hour lighting, the sky painted in layers of orange, pink, and purple. The feeling of freedom and wonder that defines Miyazaki's flying scenes." },
        { title: "Ghibli Cozy Kitchen", prompt: "A cluttered but cozy witch's kitchen, Kiki's Delivery Service style. Dried herbs hanging from wooden beams, a black cat sleeping on a flour-dusted counter, bread rising in the oven with warm light glowing through the glass door. Morning light streaming through a small window with flower boxes outside. Every surface tells a story — recipe books, mysterious jars, a broom leaning in the corner. Warm, inviting, lived-in." },
      ],
      cta: { text: "Get 150+ Image Prompts — $29", link: IMAGE_PACK_LINK },
    };
  }
  if (source && source.includes('action-figure')) {
    return {
      hook: "Since you loved the Action Figure Generator",
      bonus: "Here are 3 exclusive action figure prompts not on the site:",
      prompts: [
        { title: "Villain Origin Box", prompt: "A premium villain action figure in a dramatic matte black box with red accents. The figure wears a long dark coat with glowing red energy crackling from their hands. Accessories: a hovering dark orb, a cracked hero mask as trophy, and a throne-like display stand. Box text: 'NEMESIS EDITION — Includes Destruction Effects'. Cinematic villain energy, premium collectible packaging." },
        { title: "Retro 80s Cartoon Figure", prompt: "An action figure in vintage 1980s cartoon style packaging — bright yellow card backing with comic-style explosion graphics. The figure has exaggerated muscles, a wild mohawk, and wears neon armor. Accessories: a laser sword, a jetpack, and a tiny robot sidekick. 'MEGA FORCE' logo across the top in chrome gradient text. Nostalgic, fun, Saturday morning cartoon energy." },
        { title: "Anime Mech Pilot Figure", prompt: "A detailed anime-style mech pilot action figure in a sleek Japanese-style box. The pilot in a white and blue flight suit with gold accents, holding a helmet under one arm. Behind them in the packaging: a translucent holographic card showing their giant mech robot. Box has Japanese text alongside English: 'STELLAR WING — Limited First Edition'. Clean, premium, anime collectible aesthetic." },
      ],
      cta: { text: "Get 150+ Image Prompts — $29", link: IMAGE_PACK_LINK },
    };
  }
  // Default: general business prompts
  return {
    hook: "Here's something exclusive for subscribers",
    bonus: "3 premium prompts not available anywhere on the site. Each one uses a technique that produces dramatically better AI output:",
    prompts: [
      { title: "The 'Hidden Revenue' Audit", prompt: "I'm going to describe my business, and I want you to find money I'm leaving on the table — but NOT the obvious stuff (raise prices, sell more). I want the non-obvious revenue levers that require zero new customers.\n\nMy business: [DESCRIBE — what you sell, to whom, how much revenue, how you deliver]\n\nAnalyze these 5 hidden revenue zones:\n1. PRICING ARCHITECTURE — Am I accidentally anchoring too low? Could I restructure the same offering into tiers that capture more willingness-to-pay?\n2. BACK-END OFFERS — What could I sell to existing customers that I'm not? What's the natural 'what next?' after they buy from me?\n3. PARTNERSHIP MATH — Who already has my ideal customers' attention? What would a revenue-share deal look like with them?\n4. PACKAGING ARBITRAGE — Am I selling ingredients when I should be selling meals? (e.g. selling prompts vs. selling 'the complete system')\n5. SPEED PREMIUM — What would people pay 2-3x more for if they could get it faster or with done-for-you implementation?\n\nFor each zone: state the opportunity in one sentence, estimate the revenue impact (conservative), and give me the exact first action to take tomorrow morning." },
      { title: "The 'Objection Destroyer' Sales Script", prompt: "I need to handle sales objections for [YOUR PRODUCT/SERVICE at PRICE]. But I don't want generic rebuttals — I want to understand the psychology behind each objection and disarm it before it's even raised.\n\nFirst, list the 8 most common objections for a product like mine (ranked by how often they kill the sale). For each one:\n- THE REAL OBJECTION: What they say vs. what they actually mean (these are always different)\n- THE REFRAME: A single sentence that shifts their perspective without being pushy\n- THE PROOF POINT: What evidence, story, or demonstration would eliminate this objection permanently?\n- THE PREEMPTIVE STRIKE: How do I address this in my marketing/copy so they never even think it?\n\nThen write a 60-second elevator pitch for my product that preemptively destroys the top 3 objections before anyone can raise them. The pitch should sound conversational, not salesy." },
      { title: "The 'Content Engine' System Prompt", prompt: "I want to set up a system where I spend 30 minutes per day on content and get 10x the output of someone spending 3 hours. Build me the complete system.\n\nMy niche: [YOUR NICHE]\nMy goal: [LEADS / BRAND / SALES / AUTHORITY]\nPlatforms I'm on: [LIST THEM]\nMy unfair advantage: [WHAT DO YOU KNOW THAT MOST PEOPLE DON'T?]\n\nDesign a system with:\n1. IDEA BANK — 20 content ideas I can execute this month, categorized by platform and format. Each idea should have the hook, the main point, and the CTA pre-written in one sentence each.\n2. THE DAILY WORKFLOW — A step-by-step 30-minute routine: minute 0-10 (create), minute 10-20 (repurpose), minute 20-30 (distribute + engage). Be specific about what tool to use at each step.\n3. THE RECYCLING SYSTEM — How to take my best-performing content and turn it into 5 new pieces without it feeling repetitive.\n4. THE MEASUREMENT CHEAT SHEET — The only 3 metrics I should track (ignore everything else), what 'good' looks like for each, and when to pivot vs. double down.\n\nI don't want theory. I want a system I can start using tomorrow morning at 8am." },
    ],
    cta: { text: "Get 500+ Prompts Like These — $29", link: MEGA_PACK_LINK },
  };
}

const emails = {
  // Day 1: Value email — teach the R-C-O framework, soft CTA
  1: {
    subject: "The #1 mistake people make with AI prompts (and the fix)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Most AI prompts are useless. Here's why.</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Hey — quick follow-up on those 5 prompts I sent yesterday.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Here's what I see 90% of people do wrong with AI:</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>They write prompts like this:</strong><br/>
      <em style="color:#6B7280;">"Write me a sales email"</em></p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>And get garbage back.</strong> Generic, robotic, sounds like every other AI-generated email.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">The fix? <strong>The R-C-O framework:</strong></p>

      ${blueBox(null, `
        <strong style="color:#3B5FFF;">R</strong>ole — Tell the AI WHO to be<br/>
        <strong style="color:#3B5FFF;">C</strong>ontext — Give it YOUR specific situation<br/>
        <strong style="color:#3B5FFF;">O</strong>utput — Define the EXACT format you want
      `)}

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>Before (bad):</strong><br/>
      <em style="color:#6B7280;">"Write me a sales email"</em></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>After (R-C-O):</strong><br/>
      <em style="color:#3B5FFF;">"You are a B2B SaaS copywriter who's generated $2M+ in pipeline. I sell project management software to marketing agencies with 10-50 employees. Write a 3-paragraph cold email that leads with their #1 pain (missed deadlines), includes a specific metric, and ends with a soft CTA. Under 150 words."</em></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Night and day difference. Every prompt in our kits uses this framework — that's why they actually work.</p>

      ${ctaButton("Get 500+ R-C-O Prompts — $29", MEGA_PACK_LINK, "Works with ChatGPT, Claude, Gemini, and any LLM")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Talk tomorrow,<br/>The MidasTools Team</p>
    `),
  },

  // Day 2: Quick win — a free prompt they can use RIGHT NOW to get results
  2: {
    subject: "Open ChatGPT and paste this (takes 30 seconds)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">One prompt. Try it right now.</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">I'm going to give you one prompt. Don't save it for later — open ChatGPT or Claude right now, fill in the brackets, and paste it. You'll have a usable result in 30 seconds.</p>

      <div style="background:#111827;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:13px;line-height:1.9;color:#E5E7EB;margin:0;font-family:monospace;">
          I run [YOUR BUSINESS/ROLE]. Today I need to make progress on [YOUR BIGGEST CURRENT CHALLENGE].<br/><br/>
          Don't give me generic advice. Instead:<br/><br/>
          1. Ask me 3 sharp diagnostic questions about my specific situation (things I probably haven't considered)<br/>
          2. Based on my answers, give me ONE high-leverage action I can complete in under 2 hours today that moves the needle the most<br/>
          3. Write the actual deliverable for me — the email, the plan, the script, the analysis, whatever it is. Not a template. The real thing, using my specific details.<br/>
          4. Tell me the ONE thing most people in my position waste time on that I should stop doing immediately<br/><br/>
          Start with the 3 questions. Wait for my answers before proceeding.
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>Why this works:</strong> Most prompts ask AI to monologue at you. This one forces a conversation — the AI diagnoses before prescribing, so the output is hyper-specific to YOUR situation. No generic advice possible.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Try it once and you'll never go back to basic prompting.</p>

      ${ctaButton("Get 500+ Prompts This Good — $29", MEGA_PACK_LINK, "Each one designed for specific, actionable results")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Try it now. Seriously.<br/>The MidasTools Team</p>
    `),
  },

  // Day 3: Exclusive content based on signup source — PERSONALIZED
  3: {
    subject: (source) => {
      if (source && source.includes('pet')) return "3 exclusive pet portrait prompts (subscriber only)";
      if (source && source.includes('ghibli')) return "3 exclusive Ghibli prompts (subscriber only)";
      if (source && source.includes('action-figure')) return "3 exclusive action figure prompts (subscriber only)";
      return "3 exclusive prompts you can't get anywhere else";
    },
    html: (source) => {
      const bonus = getSourceBonus(source);
      return wrapEmail(`
        <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">${bonus.hook}</h1>
        <p style="font-size:16px;line-height:1.7;color:#374151;">${bonus.bonus}</p>
        <p style="font-size:14px;line-height:1.5;color:#6B7280;">These are subscriber-only — not on the website, not in the free tools. Just for you.</p>

        ${bonus.prompts.map(p => blueBox(p.title, p.prompt)).join('\n')}

        <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>Copy any of these into ChatGPT, Midjourney, or DALL-E and watch the magic happen.</strong></p>

        <p style="font-size:16px;line-height:1.7;color:#374151;">Want ${source && source.includes('pet') || source && source.includes('ghibli') || source && source.includes('action-figure') ? '150+' : '500+'} more like these?</p>

        ${ctaButton(bonus.cta.text, bonus.cta.link, "Instant download. Works with any AI tool.")}

        <p style="font-size:14px;color:#6B7280;line-height:1.6;">More good stuff tomorrow,<br/>The MidasTools Team</p>
      `);
    },
  },

  // Day 4: Social proof — real results, Felix Craft case study
  4: {
    subject: "This guy made $300K with AI prompts (here's how)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">From side project to $300K</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Quick story that'll change how you think about AI:</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Felix Craft built an AI-powered claw machine game. <strong>Not a SaaS. Not an app. A claw machine.</strong></p>

      <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:20px;font-weight:700;color:#16A34A;margin:0 0 8px;">$300,000+ revenue</p>
        <p style="font-size:14px;color:#374151;margin:0;">Built with AI tools. Mostly one person. Started from scratch.</p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">The lesson? <strong>The money isn't in the AI — it's in what you BUILD with the AI.</strong></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Every dollar Felix made started with a prompt. A prompt to write code. A prompt to design assets. A prompt to write marketing copy. A prompt to analyze his data.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">That's exactly what our kits give you — <strong>the prompts that power real businesses.</strong></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><a href="https://midastools.co/blog/ai-agent-10k-day" style="color:#3B5FFF;font-weight:600;">Read Felix's full story here</a></p>

      ${ctaButton("Get the Same Toolkit — $29", MEGA_PACK_LINK, "500+ prompts for building, selling, and growing")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Your turn,<br/>The MidasTools Team</p>
    `),
  },

  // Day 5: Free tools showcase — pure value, builds trust
  5: {
    subject: "17 free AI tools (my gift to you)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">I built 17 free tools. Use them all.</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">No catch. No paywall. No "free trial" BS. These are permanently free:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:15px;line-height:2.2;color:#374151;margin:0;">
          <strong>Create:</strong><br/>
          <a href="https://midastools.co/prompt-generator" style="color:#3B5FFF;">AI Prompt Generator</a> — any prompt, any task<br/>
          <a href="https://midastools.co/prompt-enhancer" style="color:#3B5FFF;">Prompt Enhancer</a> — make bad prompts great<br/>
          <a href="https://midastools.co/image-prompt-builder" style="color:#3B5FFF;">Image Prompt Builder</a> — Midjourney/DALL-E ready<br/>
          <a href="https://midastools.co/prompt-roaster" style="color:#3B5FFF;">Prompt Roaster</a> — brutal honest feedback<br/><br/>
          <strong>Trending:</strong><br/>
          <a href="https://midastools.co/ghibli-prompt-generator" style="color:#3B5FFF;">Ghibli Art Generator</a> — 8 Miyazaki film styles<br/>
          <a href="https://midastools.co/pet-portrait-generator" style="color:#3B5FFF;">Pet Portrait Generator</a> — 12 art styles<br/>
          <a href="https://midastools.co/action-figure-generator" style="color:#3B5FFF;">Action Figure Generator</a> — Barbie Box, Funko Pop & more<br/><br/>
          <strong>Business:</strong><br/>
          <a href="https://midastools.co/business-name-generator" style="color:#3B5FFF;">Business Name Generator</a><br/>
          <a href="https://midastools.co/ai-income-blueprint" style="color:#3B5FFF;">AI Income Blueprint</a><br/>
          <a href="https://midastools.co/buyer-intent-generator" style="color:#3B5FFF;">Buyer Intent Generator</a> — find Reddit leads<br/>
          <a href="https://midastools.co/ai-job-risk" style="color:#3B5FFF;">AI Job Risk Calculator</a><br/><br/>
          <strong>Dev Tools:</strong><br/>
          <a href="https://midastools.co/soul-generator" style="color:#3B5FFF;">SOUL.md Generator</a><br/>
          <a href="https://midastools.co/cowork-setup-wizard" style="color:#3B5FFF;">Claude Cowork Wizard</a><br/>
          <a href="https://midastools.co/openclaw-cost-calculator" style="color:#3B5FFF;">OpenClaw Cost Calculator</a><br/>
          <a href="https://midastools.co/muse-spark-prompt-generator" style="color:#3B5FFF;">Muse Spark Generator</a><br/><br/>
          <strong>Marketing:</strong><br/>
          <a href="https://midastools.co/hashtag-generator" style="color:#3B5FFF;">Hashtag Generator</a><br/>
          <a href="https://midastools.co/email-subject-tester" style="color:#3B5FFF;">Email Subject Tester</a>
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Bookmark these. Share them. They're yours forever.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">And when you're ready for the full artillery — 500+ prompts, 21 kits, templates for every business function:</p>

      ${ctaButton("Get Everything — $97 (85% off)", BUNDLE_LINK, "21 kits, normally $661. One purchase, lifetime access.")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Keep building,<br/>The MidasTools Team</p>
    `),
  },

  // Day 6: Bundle math — the value proposition, close the sale
  6: {
    subject: "21 AI kits, one price (85% off ends soon)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Quick math</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">I'll keep this short because the numbers speak for themselves:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#374151;">21 individual kits</td>
            <td style="padding:8px 0;text-align:right;color:#374151;"><s>$661</s></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:700;">All Kits Bundle</td>
            <td style="padding:8px 0;text-align:right;color:#3B5FFF;font-weight:700;font-size:20px;">$97</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#16A34A;font-weight:600;" colspan="2">You save $564 (85% off)</td>
          </tr>
        </table>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>What's inside:</strong></p>
      <ul style="font-size:15px;line-height:2;color:#374151;">
        <li>500+ copy-paste AI prompts (sales, marketing, content, ops)</li>
        <li>Industry kits: real estate, e-commerce, SaaS, freelancing</li>
        <li>Image & video prompt packs (Midjourney, DALL-E, Sora, Runway)</li>
        <li>Claude Code & Cowork mastery prompts</li>
        <li>Reddit lead generation playbook</li>
        <li>Resume, presentation, email marketing templates</li>
        <li>Notion AI workspace templates</li>
        <li>Team AI adoption framework</li>
        <li>Meta Muse Spark prompt kit</li>
      </ul>

      <p style="font-size:16px;line-height:1.7;color:#374151;">That's <strong>$97 for everything we've ever built.</strong> One purchase, lifetime access, instant download.</p>

      ${ctaButton("Get All 21 Kits — $97", BUNDLE_LINK, "Instant download. Works with any AI tool. Lifetime access.")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Build something great,<br/>The MidasTools Team</p>
    `),
  },

  // Day 7: Final email — honest, personal, last CTA + survey
  7: {
    subject: "Last one from me (unless you want more)",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Real talk for a second</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">This is my last scheduled email. After this, I'll only email you when I ship something genuinely worth your time.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Over the past week I've shared:</p>
      <ul style="font-size:15px;line-height:2;color:#374151;">
        <li>The R-C-O framework (the only prompt structure that matters)</li>
        <li>A daily productivity prompt that saves 2-3 hours</li>
        <li>3 exclusive prompts just for subscribers</li>
        <li>Felix Craft's $300K AI story</li>
        <li>17 free tools you can use forever</li>
        <li>The full kit bundle breakdown</li>
      </ul>

      <p style="font-size:16px;line-height:1.7;color:#374151;">If any of that was useful, great — that's why I do this.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">If you want to go all in, the bundle is still live:</p>

      ${ctaButton("Get All 21 Kits — $97", BUNDLE_LINK, "This link stays active. No fake urgency.")}

      <div style="background:#FEF3C7;border:1px solid #FDE68A;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:16px;font-weight:700;color:#92400E;margin:0 0 8px;">One quick ask:</p>
        <p style="font-size:14px;line-height:1.6;color:#92400E;margin:0;">What's the ONE thing you wish an AI tool could do for you that nothing does well right now? Just hit reply — I read every response and build tools based on what you tell me.</p>
      </div>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Thanks for being here,<br/>The MidasTools Team</p>
    `),
  },
};

// Broadcast templates
const broadcasts = {
  tools: emails[5], // free tools showcase
  bundle: emails[6], // bundle math
  trending: {
    subject: "New AI tools just dropped",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Fresh tools, hot off the press</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">I just shipped new AI generators based on what's trending right now:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:15px;line-height:2.2;color:#374151;margin:0;">
          <a href="https://midastools.co/ghibli-prompt-generator" style="color:#3B5FFF;font-weight:600;">Studio Ghibli Art Generator</a> — 8 Miyazaki film styles, magical elements<br/>
          <a href="https://midastools.co/pet-portrait-generator" style="color:#3B5FFF;font-weight:600;">Pet Portrait Generator</a> — 12 art styles including Pet-as-Human<br/>
          <a href="https://midastools.co/action-figure-generator" style="color:#3B5FFF;font-weight:600;">Action Figure Generator</a> — Barbie Box, Funko Pop, Anime & more<br/>
          <a href="https://midastools.co/muse-spark-prompt-generator" style="color:#3B5FFF;font-weight:600;">Meta Muse Spark Generator</a> — Prompts for Meta's new AI
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">All free. All instant. Go play with them.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">And if you want the full creative arsenal:</p>

      ${ctaButton("Get 150+ Image Prompts — $29", IMAGE_PACK_LINK, "Midjourney, DALL-E, Stable Diffusion, Flux ready")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Keep creating,<br/>The MidasTools Team</p>
    `),
  },
};

function daysBetween(dateStr) {
  const signup = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - signup) / (1000 * 60 * 60 * 24));
}

export default async function handler(req, res) {
  const { key, day, to, broadcast, template, drip } = req.query;

  if (key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // ==========================================
    // AUTO-DRIP MODE: Send correct day email to each subscriber based on signup date
    // Call daily: GET /api/nurture?key=SECRET&drip=true
    // ==========================================
    if (drip === 'true') {
      const blobRes = await fetch(SUBSCRIBERS_BLOB);
      const blobData = await blobRes.json();
      const subscribers = (blobData.subscribers || []).filter(s => !s.unsubscribed);

      if (subscribers.length === 0) {
        return res.status(200).json({ success: true, sent: 0, message: 'No active subscribers' });
      }

      const results = [];
      for (const sub of subscribers) {
        const daysIn = daysBetween(sub.date);
        // Day 0 = signup (welcome email already sent by subscribe.js)
        // Day 1-7 = nurture sequence
        const emailDay = daysIn;

        if (emailDay < 1 || emailDay > 7) continue; // Skip day 0 (already sent) and day 8+ (sequence complete)

        // Check if already sent this day's email
        const sentKey = `sent_day_${emailDay}`;
        if (sub[sentKey]) continue;

        const emailTemplate = emails[emailDay];
        if (!emailTemplate) continue;

        const subject = typeof emailTemplate.subject === 'function'
          ? emailTemplate.subject(sub.source)
          : emailTemplate.subject;

        try {
          await resend.emails.send({
            from: FROM_EMAIL,
            to: sub.email,
            subject,
            html: emailTemplate.html(sub.source),
          });

          // Mark as sent
          sub[sentKey] = new Date().toISOString();
          results.push({ email: sub.email, day: emailDay, status: 'sent' });
        } catch (err) {
          results.push({ email: sub.email, day: emailDay, status: 'failed', error: err.message });
        }
      }

      // Save updated sent markers back to blob
      if (results.length > 0) {
        await fetch(SUBSCRIBERS_BLOB, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subscribers }),
        });

        // Notify founder
        await resend.emails.send({
          from: FROM_EMAIL,
          to: 'iam+midas@armando.mx',
          subject: `Auto-drip: ${results.filter(r => r.status === 'sent').length} emails sent`,
          html: `<h2>Auto-Drip Report</h2>
            <ul>${results.map(r => `<li>${r.email} — Day ${r.day} — ${r.status}${r.error ? ` (${r.error})` : ''}</li>`).join('')}</ul>`,
        });
      }

      return res.status(200).json({
        success: true,
        processed: subscribers.length,
        sent: results.filter(r => r.status === 'sent').length,
        skipped: subscribers.length - results.length,
        results,
      });
    }

    // ==========================================
    // BROADCAST MODE: Send to all subscribers
    // GET /api/nurture?key=SECRET&broadcast=true&template=tools|bundle|trending
    // ==========================================
    if (broadcast === 'true') {
      const templateName = template || 'tools';
      const broadcastTemplate = broadcasts[templateName] || broadcasts.tools;

      const blobRes = await fetch(SUBSCRIBERS_BLOB);
      const blobData = await blobRes.json();
      const activeContacts = (blobData.subscribers || []).filter(s => !s.unsubscribed);

      if (activeContacts.length === 0) {
        return res.status(200).json({ success: true, sent: 0, message: 'No active subscribers' });
      }

      const subject = typeof broadcastTemplate.subject === 'function'
        ? broadcastTemplate.subject(null)
        : broadcastTemplate.subject;

      const results = [];
      for (const contact of activeContacts) {
        try {
          await resend.emails.send({
            from: FROM_EMAIL,
            to: contact.email,
            subject,
            html: broadcastTemplate.html(contact.source),
          });
          results.push({ email: contact.email, status: 'sent' });
        } catch (err) {
          results.push({ email: contact.email, status: 'failed', error: err.message });
        }
      }

      // Notify founder
      await resend.emails.send({
        from: FROM_EMAIL,
        to: 'iam+midas@armando.mx',
        subject: `Broadcast "${subject}" → ${results.filter(r => r.status === 'sent').length} subscribers`,
        html: `<h2>Broadcast Report</h2>
          <p><strong>Template:</strong> ${templateName}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Sent:</strong> ${results.filter(r => r.status === 'sent').length}</p>
          <p><strong>Failed:</strong> ${results.filter(r => r.status === 'failed').length}</p>
          <ul>${results.map(r => `<li>${r.email} — ${r.status}${r.error ? ` (${r.error})` : ''}</li>`).join('')}</ul>`,
      });

      return res.status(200).json({
        success: true,
        template: templateName,
        sent: results.filter(r => r.status === 'sent').length,
        failed: results.filter(r => r.status === 'failed').length,
        results,
      });
    }

    // ==========================================
    // SINGLE SEND MODE: Send specific day email to specific address
    // GET /api/nurture?key=SECRET&day=1&to=email
    // ==========================================
    const emailDay = day;
    const emailTemplate = emails[emailDay];

    if (!emailTemplate) {
      return res.status(400).json({ error: `Invalid day: ${emailDay}. Use 1-7 or broadcast=true or drip=true` });
    }

    if (!to) {
      return res.status(400).json({ error: 'Missing "to" param for single send' });
    }

    const subject = typeof emailTemplate.subject === 'function'
      ? emailTemplate.subject(null)
      : emailTemplate.subject;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: decodeURIComponent(to),
      subject,
      html: emailTemplate.html(null),
    });

    return res.status(200).json({ success: true, to, day: emailDay });
  } catch (error) {
    console.error('Nurture error:', error);
    return res.status(500).json({ error: error.message });
  }
}
