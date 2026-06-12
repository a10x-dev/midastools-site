// Nurture email sequence — 7-day drip + broadcast + auto-drip
// Manual: GET /api/nurture?key=SECRET&day=1&to=email
// Broadcast: GET /api/nurture?key=SECRET&broadcast=true&template=tools|bundle|trending|flash|flash_lastcall|tripwire
// Auto-drip: GET /api/nurture?key=SECRET&drip=true (sends correct day email to each subscriber based on signup date)

import { Resend } from 'resend';
import { readSubscribers, writeSubscribers } from '../../lib/subscribers';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';

const BUNDLE_LINK = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const MEGA_PACK_LINK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const IMAGE_PACK_LINK = 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i';
const CLAUDE_KIT_LINK = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q'; // Claude Code Kit $39 (was mis-pointed at Mega Pack $29 plink — fixed S42)
const TRIPWIRE_LINK = 'https://buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t';

// Pack nurture-email attribution into Stripe client_reference_id so the webhook
// (lib/stripe-attribution.js decoder) can tag every nurture-driven sale with its
// source template. Without this, nurture clicks go to Stripe with no signal and
// land in the Armando attribution email as "NO ATTRIBUTION".
function tagNurture(link, campaign) {
  try {
    const url = new URL(link);
    if (url.searchParams.has('client_reference_id')) return url.toString();
    const packed = `att|s=nurture|m=email|c=${campaign}|p=email|f=${Math.floor(Date.now() / 1000)}|n=1`;
    url.searchParams.set('client_reference_id', packed);
    return url.toString();
  } catch (_) {
    return link;
  }
}

function wrapEmail(content) {
  return `
    <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
      ${content}
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;"/>
      <p style="font-size:12px;color:#9CA3AF;text-align:center;">
        MidasTools — AI kits that make you money<br/>
        <a href="https://www.midastools.co" style="color:#9CA3AF;">midastools.co</a>
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
  if (source && source.includes('hug-younger-self')) {
    return {
      hook: "Since you loved the Hug My Younger Self Generator",
      bonus: "Here are 3 exclusive nostalgic AI photo prompts not on the site:",
      prompts: [
        { title: "Letter to My Younger Self", prompt: "Create an emotional photograph of an adult sitting at a desk, writing a letter. Behind them, translucent and ghost-like, stands their 7-year-old self reading over their shoulder with wide, curious eyes. Warm lamp light, evening, the letter visible with the words 'Dear little me...' Cinematic, shallow depth of field, tears on the adult's cheek. The child version is smiling. Bittersweet, beautiful, museum-quality portrait." },
        { title: "Walking Side by Side", prompt: "An adult and their 5-year-old self walking hand-in-hand down a tree-lined path in autumn. Golden leaves falling around them. Shot from behind so we see them walking into the warm light ahead. The child is looking up at the adult with trust; the adult is looking down with tenderness. Same hair color, same walk. 35mm film photography, Kodak Portra colors, soft bokeh." },
        { title: "Teaching My Younger Self", prompt: "An adult kneeling in a sunlit room, teaching their younger self (age 6) to tie their shoes. The adult's hands gently guide the child's hands. Morning light streaming through curtains. Both laughing at a failed attempt. The warmth of patience, the beauty of becoming your own parent. Studio portrait quality, soft focus background, tears-in-your-eyes emotional." },
      ],
      cta: { text: "Get 150+ Image Prompts — $29", link: IMAGE_PACK_LINK },
    };
  }
  if (source && source.includes('lego')) {
    return {
      hook: "Since you loved the Lego Minifigure Generator",
      bonus: "Here are 3 exclusive Lego prompts not on the site:",
      prompts: [
        { title: "Lego Wedding Scene", prompt: "A Lego wedding scene in a tiny chapel made of white and gold bricks. The bride and groom minifigures at the altar, guests seated in rows. Stained glass windows made of transparent colored bricks casting rainbow light. Flowers made of small round pieces. A Lego organist playing. Product photography style, shallow DOF, warm lighting. Every detail is brick-perfect." },
        { title: "Lego Office Chaos", prompt: "A Lego office scene in total chaos — minifigures having a Nerf war, coffee spilling, papers flying, one figure hiding under a desk. A boss minifigure walks in through the door with a shocked expression. Tiny Lego computers, water cooler, motivational poster on the wall. Shot like a dramatic movie still with cinematic lighting. Comedy meets corporate life in brick form." },
        { title: "Lego Album Cover", prompt: "Recreate a classic album cover in Lego style. A Lego minifigure version of a rock band on stage, with tiny brick instruments, amplifiers made of 2x4 bricks, and a crowd of minifigure fans. Stage lighting from colored transparent bricks. The band name written in Lego letters above. Shot like an actual album cover — square format, dramatic lighting, iconic pose." },
      ],
      cta: { text: "Get 150+ Image Prompts — $29", link: IMAGE_PACK_LINK },
    };
  }
  if (source && source.includes('diorama')) {
    return {
      hook: "Since you loved the Miniature Diorama Generator",
      bonus: "Here are 3 exclusive diorama prompts not on the site:",
      prompts: [
        { title: "Miniature Ramen Shop", prompt: "A tiny, handcrafted miniature ramen shop at night. Warm light spilling from the tiny doorway, a miniature noren curtain, steam rising from bowls visible through the window. Tiny lanterns outside, a wooden bench, a bicycle parked beside it. Everything made of painted wood, clay, and paper. Macro lens photography, f/2.8, extreme shallow depth of field. The warm glow makes you want to shrink down and walk inside." },
        { title: "Desktop Terrarium World", prompt: "A complete tiny world inside a glass terrarium on a desk. Miniature waterfalls flowing over moss-covered rocks, tiny handmade trees with wire trunks, a small wooden bridge crossing a resin river. Tiny LED fairy lights woven through. Morning mist effect with dry ice. Shot with a macro lens — the glass jar edges visible, a laptop blurred in the background for scale. Magical, cozy, impossibly detailed." },
        { title: "Snow Globe Living Room", prompt: "A miniature living room scene inside a snow globe. Tiny Christmas tree with LED lights, a fireplace with real orange glow, a miniature armchair with a tiny knitted blanket. Snowflakes frozen mid-fall inside the glass. The snow globe sits on a real wooden shelf with books. Tilt-shift macro photography, warm vs cool contrast between the cozy interior and the glass exterior. Heartwarming, holiday magic." },
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
    cta: { text: "Get 145+ Prompts Like These — $29", link: MEGA_PACK_LINK },
  };
}

const emails = {
  // Day 1: Quick, punchy, one technique that changes everything
  1: {
    subject: "90% of people use AI wrong (here's the 3-word fix)",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Hey — quick one.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Yesterday I sent you 5 prompts. Here's the technique behind all of them, in 3 words:</p>
      <p style="font-size:24px;font-weight:700;color:#3B5FFF;margin:24px 0;text-align:center;">Role → Context → Output</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>Bad:</strong> <em style="color:#6B7280;">"Write a product description"</em><br/><strong>Good:</strong> <em style="color:#3B5FFF;">"You're an Etsy SEO expert. I sell Ghibli-style cozy cottage art prints (digital download, 5 sizes). Write a listing title + 13 tags + a description for cottagecore buyers."</em></p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Night and day. Try it on your next prompt — you'll feel the difference instantly.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">That Ghibli print example? The hard part isn't the listing — it's creating art that actually sells. Want to make one free, right now?</p>
      ${ctaButton("Make Ghibli-style art — Free", "https://www.midastools.co/ghibli-prompt-generator?utm_source=email&utm_medium=day1&utm_campaign=nurture_bridge", "No sign-up. Generate in ~10 seconds.")}
      <p style="font-size:15px;line-height:1.7;color:#6B7280;">Selling services, not products? The <a href="https://www.midastools.co/outreach-machine?utm_source=email&utm_medium=day1&utm_campaign=nurture_bridge" style="color:#3B5FFF;font-weight:600;">Outreach Machine</a> writes cold emails &amp; DMs that book calls.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Prefer to write your own? 145+ prompts using this exact framework 👇</p>
      ${ctaButton("Grab the Mega Pack — $29", tagNurture(MEGA_PACK_LINK, 'day1'), "Worth a look, or totally off base?")}
      <p style="font-size:14px;color:#6B7280;">— MidasTools</p>
    `),
  },

  // Day 2: One prompt, try it NOW, make them feel the value
  2: {
    subject: "Paste this into ChatGPT right now (30 sec)",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Don't save this for later. Open ChatGPT or Claude right now and paste this:</p>
      <div style="background:#111827;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:13px;line-height:1.9;color:#E5E7EB;margin:0;font-family:monospace;">
          I run [YOUR BUSINESS]. My biggest challenge today is [CHALLENGE].<br/><br/>
          Ask me 3 sharp diagnostic questions I probably haven't considered. Wait for my answers. Then give me ONE action I can finish in 2 hours that moves the needle the most — and write the actual deliverable (the email, the plan, the script). Not a template. The real thing.
        </p>
      </div>
      <p style="font-size:16px;line-height:1.7;color:#374151;">This works because it forces AI to diagnose before prescribing. No generic advice possible.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">If that felt useful — imagine 145 more like it.</p>
      ${ctaButton("145+ Prompts Like This — $29", tagNurture(MEGA_PACK_LINK, 'day2'), "2 min to browse. You'll know if it's for you.")}
      <p style="font-size:14px;color:#6B7280;">— MidasTools</p>
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

        <p style="font-size:16px;line-height:1.7;color:#374151;">Want ${source && source.includes('pet') || source && source.includes('ghibli') || source && source.includes('action-figure') ? '150+' : '145+'} more like these?</p>

        ${ctaButton(bonus.cta.text, tagNurture(bonus.cta.link, 'day3'), "Instant download. Works with any AI tool.")}

        <p style="font-size:14px;color:#6B7280;line-height:1.6;">More good stuff tomorrow,<br/>The MidasTools Team</p>
      `);
    },
  },

  // Day 4: Social proof — short, punchy, Felix Craft story
  4: {
    subject: "He made $300K with AI. One person. No app.",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Quick one.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Felix Craft built an AI-powered claw machine game. Not a SaaS. Not an app. <strong>A claw machine.</strong></p>
      <p style="font-size:28px;font-weight:700;color:#16A34A;margin:20px 0;">$300,000+</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Every dollar started with a prompt — to write code, design assets, write copy, analyze data.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><a href="https://www.midastools.co/blog/ai-agent-10k-day" style="color:#3B5FFF;font-weight:600;">Full story here</a> (5 min read, worth it).</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">The toolkit that powers businesses like this:</p>
      ${ctaButton("145+ Prompts — $29", tagNurture(MEGA_PACK_LINK, 'day4'), "Same techniques Felix used. Your turn.")}
      <p style="font-size:14px;color:#6B7280;">— MidasTools</p>
    `),
  },

  // Day 5: Pure value — all free tools, no pressure
  5: {
    subject: "20 free AI tools. No catch. Bookmark this.",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">I built 20 free tools. No paywall. No "free trial." Permanently free.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">The ones people love most:</p>
      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:20px;margin:20px 0;">
        <p style="font-size:15px;line-height:2;color:#374151;margin:0;">
          🎨 <a href="https://www.midastools.co/ghibli-prompt-generator?utm_source=email&utm_medium=day5&utm_campaign=tools_roundup" style="color:#3B5FFF;font-weight:700;">Ghibli Art Generator</a> — 8 Miyazaki film styles<br/>
          <a href="https://www.midastools.co/pet-portrait-generator" style="color:#3B5FFF;">Pet Portrait Generator</a> — 12 art styles<br/>
          <a href="https://www.midastools.co/action-figure-generator" style="color:#3B5FFF;">Action Figure Generator</a> — Barbie Box, Funko Pop<br/>
          <a href="https://www.midastools.co/prompt-generator" style="color:#3B5FFF;">AI Prompt Generator</a> — any task, any AI<br/>
          <a href="https://www.midastools.co/prompt-enhancer" style="color:#3B5FFF;">Prompt Enhancer</a> — make bad prompts great<br/>
          <a href="https://www.midastools.co/outreach-machine?utm_source=email&utm_medium=day5&utm_campaign=tools_roundup" style="color:#3B5FFF;">The Outreach Machine</a> — cold emails &amp; DMs that book calls<br/>
          <a href="https://www.midastools.co/buyer-intent-generator" style="color:#3B5FFF;">Buyer Intent Finder</a> — find people ready to buy on Reddit
        </p>
      </div>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><a href="https://www.midastools.co/tools" style="color:#3B5FFF;font-weight:600;">See all 20 →</a></p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">When you're ready for the full arsenal:</p>
      ${ctaButton("All 16 AI Kits — $97 (85% off)", tagNurture(BUNDLE_LINK, 'day5'), "Worth a quick look?")}
      <p style="font-size:14px;color:#6B7280;">— MidasTools</p>
    `),
  },

  // Day 6: Bundle — sell the OUTPUT, not the tools
  6: {
    subject: "What if 40 hours of work was already done for you?",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Real talk.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">You don't need another tool. You don't need to "learn prompting." You need the work done.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">That's what this is:</p>
      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:20px 0;">
        <p style="font-size:15px;line-height:2;color:#374151;margin:0;">
          Your social media posts — <strong>written</strong><br/>
          Your email sequences — <strong>drafted</strong><br/>
          Your pitch deck — <strong>built</strong><br/>
          Your sales copy — <strong>finished</strong><br/>
          Your product descriptions — <strong>done</strong><br/>
          Your customer service scripts — <strong>ready</strong>
        </p>
      </div>
      <p style="font-size:16px;line-height:1.7;color:#374151;">16 business areas. 1,500+ prompts and templates. Open, customize 2-3 details, use.</p>
      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:20px 0;text-align:center;">
        <p style="font-size:14px;color:#6B7280;margin:0;">Hiring someone to do this work?</p>
        <p style="font-size:36px;font-weight:700;color:#EF4444;margin:4px 0;text-decoration:line-through;">$3,000+</p>
        <p style="font-size:36px;font-weight:700;color:#3B5FFF;margin:4px 0;">$97</p>
        <p style="font-size:14px;color:#16A34A;font-weight:600;margin:0;">One-time. Not a subscription.</p>
      </div>
      ${ctaButton("Get It All Done — $97", tagNurture(BUNDLE_LINK, 'day6'), "Instant download. 30-day money-back guarantee.")}
      <p style="font-size:14px;color:#6B7280;">— MidasTools</p>
    `),
  },

  // Day 7: The "close this out" — honest, easy exit, powerful close
  7: {
    subject: "Last one. Then I'll shut up.",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Last email from me. Promise.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">This week you got free tools, exclusive content, and a peek at what we've built. If any of it made your work easier — that was the whole point.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Here's the honest pitch:</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">For $97, you get 40+ hours of business work already done — marketing, sales, content, email, presentations, hiring, everything. Not tools to figure it out. The actual output.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Most people spend that on a single freelancer hour.</p>
      ${ctaButton("Get Your Work Done — $97", tagNurture(BUNDLE_LINK, 'day7'), "No fake urgency. No countdown timer. Link stays active.")}
      <div style="background:#FEF3C7;border:1px solid #FDE68A;border-radius:12px;padding:20px;margin:24px 0;">
        <p style="font-size:15px;color:#92400E;margin:0;"><strong>One ask:</strong> What's the ONE piece of work you wish was just... done? Hit reply — I read every response and build exactly that.</p>
      </div>
      <p style="font-size:14px;color:#6B7280;">Thanks for being here.<br/>— MidasTools</p>
    `),
  },
};

// Helper: one method block for The Midas Memo
function memoMethod(n, headline, whoFor, play, startNow, sourceUrl) {
  return `<div style="margin:30px 0;padding-bottom:26px;border-bottom:1px solid #E5E7EB;">
    <h3 style="font-size:18px;color:#111827;margin:0 0 6px;line-height:1.35;">${n}. ${headline}</h3>
    <p style="font-size:13px;color:#6B7280;margin:0 0 12px;line-height:1.5;"><strong style="color:#374151;">Who it's for:</strong> ${whoFor}</p>
    <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 12px;">${play}</p>
    <p style="font-size:14px;line-height:1.6;color:#374151;margin:0 0 8px;"><strong>Start this week:</strong> ${startNow}</p>
    <p style="font-size:13px;margin:0;"><a href="${sourceUrl}" style="color:#3B5FFF;text-decoration:none;">Read the source &rarr;</a></p>
  </div>`;
}

// Broadcast templates
const broadcasts = {
  tools: emails[5], // free tools showcase
  bundle: emails[6], // bundle math

  // The Midas Memo — weekly newsletter. Overwritten each issue; git history +
  // the blog cross-post keep the archive. Send: ?broadcast=true&template=memo
  memo: {
    subject: "5 ways people are making AI money this week",
    html: () => wrapEmail(`
      <p style="font-size:13px;font-weight:700;color:#3B5FFF;letter-spacing:0.5px;text-transform:uppercase;margin:0 0 4px;">The Midas Memo · Issue #1</p>
      <h1 style="font-size:26px;line-height:1.25;color:#111827;margin:0 0 16px;">5 ways people are actually making money with AI right now</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 8px;">No "10x your productivity" fluff. Real names, real numbers, and the honest part most newsletters skip. The fastest AI money in 2026 isn't a clever prompt — it's selling a small, specific service (or doing the grunt-work the AI labs pay for) <em>before</em> you build anything. Fastest cash first, a faceless asset you own last.</p>

      ${memoMethod(1, "Get paid this week to grade AI's homework",
        "Capital-thin, English-writing people who want money THIS week — zero audience, zero product. Best paid in the US/UK/CA/AU; coding & STEM expertise earns more.",
        "AI labs need humans to rate chatbot answers and review AI-written code. DataAnnotation.tech, Outlier (Scale AI) and Alignerr (Labelbox) are all confirmed paying in June 2026 — generalist work $15–20/hr, coding/STEM $40+/hr (1,184+ Glassdoor reports). One worker logged ~$14,000 in year one, but that's a self-reported outlier; a realistic part-time outcome is $200–600/mo. Honest catch: onboarding can take weeks and tasks are lumpy — treat it as supplemental.",
        "Sign up at DataAnnotation.tech (Outlier + Alignerr as backups) and carefully complete the Starter Assessment — you get ONE attempt, graded on thoroughness, not speed. Then grab the highest-paying tasks (code review, complex reasoning) first.",
        "https://breakingeven.online/blog/is-data-annotation-legit-everything-you-need-to-know-in-2026")}

      ${memoMethod(2, "Sell a $300 FAQ chatbot to the business down the street",
        "No-code-friendly solo earners who can wire up ManyChat, Voiceflow or Make + GPT over a weekend. Fully remote, international-friendly.",
        "Small businesses can't staff 24/7 support, so they'll pay for a bot that answers FAQs and books appointments. Documented 2026 rate: $300–$800 setup + a $50–$150/mo maintenance retainer. Not a fad — Upwork's audited In-Demand Skills 2026 report shows AI chatbot development demand grew <strong>+71% YoY</strong> (completed, paid jobs only). The retainer is the real prize: 10 clients ≈ a $500–$1,500/mo base before any new setups.",
        "Build ONE demo bot for a fictional local business (a dentist's FAQ + booking bot) in Voiceflow or ManyChat, record a 60-second Loom of it working, then approach local businesses leading with the demo — not a pitch.",
        "https://www.panstag.com/2026/05/ai-freelancing-skills-businesses-pay-for.html")}

      ${memoMethod(3, "Sell faceless videos before you build anything",
        "Solo creators with no on-camera presence and no audience who can learn one AI video app. Tools have free/cheap tiers — capital-thin friendly.",
        "Faceless short-form sells as a done-for-you service: beginners charge $150–$300 per video; the consistent ones reach $5,000–$15,000/mo on repeat brand work. Proof of demand: Samuel Rondot built StoryShort ('type text, get a video') to ~$20,000/mo MRR — but the lesson is his <em>move</em>, not his number. He validated demand by manually fulfilling orders with tools FIRST, before writing any code. Do the service version: be the human who delivers.",
        "Pick ONE faceless-video AI tool, make 3 sample shorts in a single niche (local restaurants, or finance tips), then offer '4 short-form videos for $X/mo' to 10–20 small businesses. Fulfill manually with AI — prove people pay before you productize.",
        "https://www.indiehackers.com/post/tech/learning-to-code-and-building-a-28k-mo-portfolio-of-saas-products-OA5p18fXtvHGxP9xTAwG")}

      ${memoMethod(4, "Start the niche newsletter nobody can deplatform",
        "Writers and curators with no audience who want a durable owned asset and will publish weekly. Strong for international creators — it's text and global. A build, not fast cash.",
        "A niche email list is an asset you own outright, and the platform money is real: beehiiv pays creators over <strong>$1M/month</strong> collectively via its ad network (Variety + eMarketer, 2026). Named solo cases: Geekout (Matt Navarra) made $25K purely from Boosts; Cyber Corsairs (Yaroslav Sobko) reached ~$16.6K/mo. Ignore the splashy '47K subs in 14 days' figures — those are unaudited self-reports. The honest framing: 5,000 subscribers isn't this week, but it compounds and can't be taken from you.",
        "Pick a sharp niche ('AI tools for accountants'), start a free beehiiv account, ship issue #1 this week (Claude drafts a roundup in ~30 min). Turn on Boosts + the Ad Network from day one; add a $5–8/mo premium tier past ~1,000 subs.",
        "https://www.beehiiv.com/blog/how-to-make-money-from-your-newsletter")}

      ${memoMethod(5, "The faceless YouTube channel people fall asleep to",
        "Capital-thin solo earners who can tolerate a 6–12 month ramp and want a high-ceiling faceless asset. Eyes open: most channels run at a loss early — this is the long game.",
        "Adavia Davis, a 22-year-old Mississippi State dropout, runs faceless channels — flagship 'Boring History,' 6-hour 'history to sleep to' docs. Scripts/visuals from Claude, narration from ElevenLabs; each video costs as little as $60. Fortune (Dec 2025) independently reviewed his AdSense records and verified <strong>$40,000–$60,000/month</strong> on ~2 hrs/day. That's a top-of-distribution outlier — $0 is the norm early, and YouTube tightened demonetization on copy-paste AI channels in March 2026, so a real niche and original assembly matter.",
        "Pick ONE high-RPM, low-competition niche (sleep/ambient history, finance explainers, true crime). Write one long-form script with Claude, narrate on the free ElevenLabs tier, assemble in CapCut (free), publish 2–3 toward Partner Program eligibility (1K subs / 4K watch hours).",
        "https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content/")}

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:28px 0;">
        <h3 style="margin:0 0 10px;font-size:16px;color:#3B5FFF;">🛠️ This week's Midas tool: Buyer-Radar</h3>
        <p style="font-size:14px;line-height:1.7;color:#374151;margin:0 0 4px;">Three of these five plays (local chatbots, faceless-video DFY, automation builds) live or die on one thing: <strong>finding businesses actively hiring for what you sell.</strong> Our free tool, Buyer-Radar, scans Reddit for exactly those people — point it at "need a chatbot" or "looking for video editor" and it surfaces real posts with someone's hand already up, plus a drafted reply. Skip the cold-spray.</p>
      </div>
      ${ctaButton("Find people hiring right now — Free", 'https://www.midastools.co/buyer-radar?utm_source=memo&utm_medium=email&utm_campaign=memo1', "No signup to start. Try 'video editing' or 'chatbot'.")}

      <div style="border:1px dashed #C7D2FE;border-radius:12px;padding:20px 24px;margin:28px 0;">
        <p style="font-size:14px;line-height:1.7;color:#374151;margin:0;">🗳️ <strong>Help pick what we build next.</strong> Four of this week's methods bottleneck on the same beginner problem: knowing <em>what</em> to sell, to <em>whom</em>, and how to pitch it. We're considering a <strong>Local-Biz Pitch Builder</strong> — type a business type + city, get the 3 highest-ROI AI services that vertical pays for, the hours/dollars each saves, and a ready-to-send cold DM + a scoped price. <a href="mailto:hello@midastools.co?subject=Build%20the%20Local-Biz%20Pitch%20Builder&body=Yes%2C%20build%20it." style="color:#3B5FFF;font-weight:700;text-decoration:none;">Tap here to vote "build it" &rarr;</a></p>
      </div>

      <p style="font-size:15px;line-height:1.7;color:#374151;margin:24px 0 0;">That's the Memo. One real method beats ten saved-for-later ideas — pick the one that fits your week and take the first step today.</p>
      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:14px 0 0;">— The MidasTools team<br/><em>P.S. Yes, method #4 is literally what you're reading. We practice what we print.</em></p>
    `),
  },
  outreach: {
    subject: "I built you a free tool that writes cold emails (real AI)",
    html: (source) => wrapEmail(`
      <p style="font-size:16px;line-height:1.7;color:#374151;">Quick one — I made something I think you'll actually use.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">You're on this list because you want AI to do real work. So here's a real tool, not another prompt to copy-paste: <strong>The Outreach Machine.</strong></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">You paste two things — <em>what you sell</em> and <em>who you're reaching out to</em> — and it writes a personalized cold email, a LinkedIn DM, and a 3-touch follow-up sequence engineered to get replies. Real AI (Claude), about 10 seconds, genuinely good.</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:20px 24px;margin:24px 0;">
        <p style="font-size:14px;line-height:1.7;color:#374151;margin:0;">
          ✅ Personalized opener that proves you did your homework<br/>
          ✅ Short enough to read on a phone<br/>
          ✅ A reply-getting ask, not a "book a 30-min call"<br/>
          ✅ Email + LinkedIn DM + follow-ups, all at once
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">It's <strong>free</strong>. No signup, no catch. I'd genuinely love to know if the output is good enough to send.</p>

      ${ctaButton("Try the Outreach Machine — Free", 'https://www.midastools.co/outreach-machine?utm_source=email&utm_medium=broadcast&utm_campaign=outreach_launch', "Paste your offer + a prospect. See what it writes.")}

      <p style="font-size:14px;line-height:1.7;color:#6B7280;">If you do try it — hit reply and tell me what you'd change. I read every one.<br/>— The MidasTools Team</p>
    `),
  },
  // Midas Memo — Mon Jun 8 2026. The Art Machine launch (free image-gen, art-audience match).
  // Send: ?broadcast=true&template=art_launch  (preview: &to=email)
  art_launch: {
    subject: "It's live: turn your pet (or yourself) into real art — free 🎨",
    html: (source) => wrapEmail(`
      <p style="font-size:13px;font-weight:700;color:#3B5FFF;letter-spacing:0.5px;text-transform:uppercase;margin:0 0 4px;">The Midas Memo</p>
      <h1 style="font-size:26px;line-height:1.25;color:#111827;margin:0 0 16px;">Make the actual art — not another prompt to copy-paste</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">Every Monday I build you something you can actually use. This week it's the one I'm most excited about — and it's <strong>live right now</strong>.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 8px;">Meet <strong>The Art Machine.</strong> Describe your pet, yourself, or any scene in plain English, pick a style, and it makes the <em>real image</em> — not a prompt you have to take somewhere else. Ghibli, 3D Pixar, watercolor, pop-art, anime, oil painting, and more.</p>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:0 0 8px;">All four of these were made with it, from one line of text each:</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 20px;">
        <tr>
          <td width="50%" style="padding:4px;"><img src="https://www.midastools.co/art-samples/sample-ghibli.jpg" width="100%" style="border-radius:10px;display:block;" alt="Ghibli-style cat on a windowsill"/></td>
          <td width="50%" style="padding:4px;"><img src="https://www.midastools.co/art-samples/sample-3d.jpg" width="100%" style="border-radius:10px;display:block;" alt="3D animated puppy"/></td>
        </tr>
        <tr>
          <td width="50%" style="padding:4px;"><img src="https://www.midastools.co/art-samples/sample-watercolor.jpg" width="100%" style="border-radius:10px;display:block;" alt="Watercolor portrait"/></td>
          <td width="50%" style="padding:4px;"><img src="https://www.midastools.co/art-samples/sample-popart.jpg" width="100%" style="border-radius:10px;display:block;" alt="Pop-art cat"/></td>
        </tr>
      </table>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 6px;"><strong>How it works — about 10 seconds:</strong></p>
      <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 18px;">
        1. Pick a style (Ghibli, 3D, watercolor, pop-art…)<br/>
        2. Describe it — <em>"my orange tabby on a sunny windowsill"</em><br/>
        3. Hit generate and download your image. Your first one is <strong>free</strong>.
      </p>

      ${ctaButton("Make your first image — Free", 'https://www.midastools.co/ai-art-generator?utm_source=email&utm_medium=broadcast&utm_campaign=art_launch', "No sign-up to start. Try your pet, yourself, or anything you can picture.")}

      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:24px 0 0;">Try it and hit reply with what you made — I read every one, and it tells me what to build next Monday.</p>
      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:10px 0 0;">— Armando, MidasTools</p>
    `),
  },
  // Midas Memo #1 of the list-monetization era — per revenue-audit-2026-06-10 item A.
  // Money-method: selling AI art (Etsy/POD). CTAs = our free tools; affiliate slot reserved for Printify.
  // Send: ?broadcast=true&template=memo_art_money  (preview: &to=email). Cadence: Mon Jun 15.
  memo_art_money: {
    subject: "People sell AI art for $15–50 a pop. Here's the playbook (free)",
    html: (source) => wrapEmail(`
      <p style="font-size:13px;font-weight:700;color:#3B5FFF;letter-spacing:0.5px;text-transform:uppercase;margin:0 0 4px;">The Midas Memo</p>
      <h1 style="font-size:25px;line-height:1.28;color:#111827;margin:0 0 16px;">How people are selling AI art for real money</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">Every Monday I break down one way people are actually making money with AI right now — and give you the tools to do it. This week: the one closest to home.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 8px;"><strong>The method.</strong> Custom AI portraits — pets, couples, "you as a Ghibli character" — sell on Etsy every day for <strong>$15&ndash;50 each</strong>. Print-on-demand shops put the same art on prints, mugs and canvases at <strong>$19&ndash;49</strong>, with zero inventory: the POD service prints and ships, you keep the margin.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 6px;"><strong>The whole loop is three steps, and the first two are free:</strong></p>
      <p style="font-size:15px;line-height:1.8;color:#374151;margin:0 0 18px;">
        1. <strong>Make the art</strong> — describe it, pick a style, download the image. <a href="https://www.midastools.co/ai-art-generator?utm_source=email&utm_medium=broadcast&utm_campaign=memo_art_money" style="color:#3B5FFF;font-weight:600;">The Art Machine</a> does this in ~10 seconds, free.<br/>
        2. <strong>Write the listing</strong> — title, tags, description that ranks on Etsy. <a href="https://www.midastools.co/listing-machine?utm_source=email&utm_medium=broadcast&utm_campaign=memo_art_money" style="color:#3B5FFF;font-weight:600;">The Listing Machine</a> writes it for you, free.<br/>
        3. <strong>List it</strong> — Etsy for digital downloads, or a print-on-demand shop like <a href="https://try.printify.com/g84tb0f40uy0" style="color:#3B5FFF;font-weight:600;">Printify</a> for physical products (they print + ship, you keep the margin — no inventory).
      </p>

      ${ctaButton("Start step 1 — make the art (free)", 'https://www.midastools.co/ai-art-generator?utm_source=email&utm_medium=broadcast&utm_campaign=memo_art_money', "10 seconds from description to downloadable image. No sign-up to start.")}

      <p style="font-size:15px;line-height:1.7;color:#374151;margin:24px 0 0;">Want the longer version &mdash; niches that sell, pricing, where the buyers are? I wrote the full guide here: <a href="https://www.midastools.co/blog/how-to-make-money-selling-ai-art-2026?utm_source=email&utm_medium=broadcast&utm_campaign=memo_art_money" style="color:#3B5FFF;font-weight:600;">How to make money selling AI art</a>.</p>

      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:24px 0 0;">Doing this already, or stuck on a step? Hit reply and tell me &mdash; I read every one, and it decides what I build next Monday.</p>
      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:10px 0 0;">&mdash; Armando, MidasTools</p>
    `),
  },
  // Midas Memo — Mon Jun 8 2026. Flywheel tool #1 launch (Chatbot Builder, $39/mo).
  // Send: ?broadcast=true&template=chatbot_launch
  chatbot_launch: {
    subject: "The $300/mo AI side-business you can start this week (no code)",
    html: (source) => wrapEmail(`
      <p style="font-size:13px;font-weight:700;color:#3B5FFF;letter-spacing:0.5px;text-transform:uppercase;margin:0 0 4px;">The Midas Memo</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">Hey — every Monday I dig into how people are <em>actually</em> making money with AI right now, then build you a tool to do one of those methods. Here's this week's.</p>

      <h1 style="font-size:24px;line-height:1.3;color:#111827;margin:0 0 16px;">Sell AI chatbots to local businesses</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">Every dentist, law firm, gym, and contractor in your town has the same problem — customers ask the same 20 questions (hours, pricing, booking, services) and someone has to answer them, or the lead leaves. A chatbot trained on the business's own website answers those 24/7 and captures the lead's name + contact.</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:18px 22px;margin:20px 0;">
        <p style="font-size:14px;line-height:1.8;color:#374151;margin:0;">The numbers are real:<br/>
        • White-label chatbot platforms charge resellers <strong>$70–399/mo</strong>.<br/>
        • Those resellers charge each local business <strong>$300–2,000/mo</strong>.<br/>
        • One person on Reddit runs 8 of these on retainer — <strong>$2,400/mo recurring</strong> plus setup fees.</p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">The catch has always been: building the bot took technical work. Not anymore.</p>

      <p style="font-size:16px;line-height:1.7;color:#111827;margin:0 0 8px;"><strong>The tool: the Chatbot Builder.</strong> Here's the whole workflow:</p>
      <div style="background:#F9FAFB;border-radius:8px;padding:18px 22px;margin:0 0 20px;">
        <p style="font-size:15px;line-height:1.9;color:#374151;margin:0;">
          <strong>1.</strong> Paste a business's website. It reads their real info — hours, services, pricing, FAQs.<br/>
          <strong>2.</strong> Get a working chatbot in ~30 seconds. Test it right on the page — it only answers from the real info, so no made-up prices.<br/>
          <strong>3.</strong> Put it live with one line of code — a <code>&lt;script&gt;</code> tag that drops onto any site.<br/>
          <strong>4.</strong> It captures leads — every visitor who leaves a name + contact gets emailed straight to you (or your client).</p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;margin:0 0 16px;">Build and preview as many as you want for free. When you're ready to put one live for a client and keep the recurring revenue, <strong>Pro is $39/mo</strong> — it removes our badge (fully white-label, looks like <em>your</em> product), emails you every captured lead, and unlocks unlimited live bots.</p>

      <p style="font-size:16px;line-height:1.7;color:#111827;margin:0 0 20px;">So the math is simple: <strong>$39/mo in, one local client at $300/mo out.</strong> Every client after that is margin.</p>

      ${ctaButton("Build your first chatbot — Free", 'https://www.midastools.co/chatbot-builder?utm_source=email&utm_medium=broadcast&utm_campaign=chatbot_launch', "No sign-up to start. Paste a website (try a local restaurant or dentist) and watch it work.")}

      <p style="font-size:14px;line-height:1.7;color:#6B7280;margin:24px 0 0;">Reply and tell me what business you'd sell it to first — I read every reply, and it tells me what to build next Monday.<br/>— Armando, MidasTools</p>
    `),
  },
  flash_lastcall: {
    subject: "⏰ 24h left — then the $29 Image Pack goes back to $49",
    html: (source) => wrapEmail(`
      <div style="background:#FEE2E2;border:2px solid #DC2626;border-radius:12px;padding:16px 20px;margin:0 0 24px;text-align:center;">
        <div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:#991B1B;margin-bottom:4px;">⏰ FINAL 24 HOURS</div>
        <div style="font-size:18px;font-weight:800;color:#7F1D1D;">$29 Image Pack — expires soon</div>
      </div>

      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Quick note — the flash sale ends tomorrow.</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;">I sent you the Image Pack offer yesterday. Didn't want you to miss it.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Here's what you get for <strong>$29</strong> (vs. the normal $49):</p>

      <div style="background:#F9FAFB;border-radius:8px;padding:18px 22px;margin:20px 0;">
        <p style="font-size:15px;line-height:1.9;color:#374151;margin:0;">
          • 150+ ready-to-paste image prompts<br/>
          • 20+ viral styles (pet portraits, Ghibli, action figures, trading cards, Funko)<br/>
          • Works with ChatGPT, Midjourney, DALL-E, Flux<br/>
          • Instant download — no subscription<br/>
          • 30-day money-back guarantee
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">That's less than what a single custom commissioned pet portrait costs on Etsy. And you can make 150 different styles, as many times as you want.</p>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:24px 0 8px;"><strong style="color:#111827;">Here's an actual prompt from inside</strong> — paste into ChatGPT or Midjourney right now:</p>

      <div style="background:#0F172A;border-radius:10px;padding:18px 20px;margin:8px 0 24px;">
        <p style="font-size:12px;line-height:1.7;color:#E5E7EB;margin:0;font-family:'SF Mono',Monaco,monospace;">
          A <span style="color:#FCD34D;">[PRODUCT]</span> presented in a Studio Ghibli-inspired scene. The product sits on <span style="color:#FCD34D;">[SURFACE]</span>. Surrounding details: tiny mushrooms growing around the base, a small bird perched nearby, sunbeams filtering through leaves. Warm, golden-hour lighting. Hand-painted anime style with soft edges and visible brushstrokes. The product is rendered realistically while the environment is in full Ghibli animation style — creating a magical hybrid. Aspect ratio 1:1.
        </p>
      </div>

      <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 24px;font-style:italic;">149 more like this in the pack.</p>

      ${ctaButton("Grab the Pack — $29 →", tagNurture(IMAGE_PACK_LINK, 'flash_lastcall'), "Price goes back to $49 tomorrow · 30-day refund if you don't love it")}

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">— The MidasTools Team</p>

      <p style="font-size:13px;color:#9CA3AF;line-height:1.6;font-style:italic;">P.S. If $29 still isn't for you, no stress — the free generators stay free. But this is the last time you'll see this price.</p>
    `),
  },
  flash: {
    subject: "48h only: $29 Image Pack (pet, Ghibli, action figures)",
    html: (source) => wrapEmail(`
      <div style="background:linear-gradient(135deg,#7C3AED,#4C1D95);border-radius:16px;padding:20px 24px;margin:0 0 24px;color:#FFF;text-align:center;">
        <div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:#FCD34D;margin-bottom:4px;">⏰ 48 HOURS ONLY</div>
        <div style="font-size:22px;font-weight:800;line-height:1.2;">AI Image Prompt Pack — $29</div>
        <div style="font-size:13px;color:#DDD6FE;margin-top:6px;">150+ ready-to-paste prompts. Usually $49.</div>
      </div>

      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">You've been using the free generators. Here's what's on the other side.</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;">You played with the Pet Portrait, Ghibli, and Action Figure generators. They each do ONE thing well.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>The AI Image Prompt Pack has 150+ prompts across every viral style</strong> — no generator, no steps, just copy and paste:</p>

      <div style="background:#F3F4F6;border-left:4px solid #7C3AED;border-radius:8px;padding:20px 24px;margin:24px 0;">
        <p style="font-size:14px;line-height:2;color:#374151;margin:0;">
          ✅ <strong>Pet portraits</strong> — Royal, Ghibli, Action Figure, Trading Card, Funko (12 styles)<br/>
          ✅ <strong>Yourself as a character</strong> — Superhero, Cyberpunk, Anime, Pixar, Oil Painting<br/>
          ✅ <strong>Product shots</strong> — For your e-commerce, Etsy, DTC brand<br/>
          ✅ <strong>Social content</strong> — Thumbnails, hooks, viral templates<br/>
          ✅ <strong>Ghibli worlds</strong> — 8 Miyazaki film styles, landscape + character<br/>
          ✅ <strong>Trending hooks</strong> — Barbie Box, Pet-as-Human, Tokyo drift swaps
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Works with <strong>ChatGPT, Midjourney, DALL-E, Flux, Stable Diffusion</strong>. Instant download. No subscription.</p>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:24px 0 8px;"><strong style="color:#111827;">One of the 150 — try it right now:</strong></p>

      <div style="background:#0F172A;border-radius:10px;padding:18px 20px;margin:8px 0 20px;">
        <p style="font-size:12px;line-height:1.7;color:#E5E7EB;margin:0;font-family:'SF Mono',Monaco,monospace;">
          A Studio Ghibli-style anime portrait of a <span style="color:#FCD34D;">[GENDER]</span> <span style="color:#FCD34D;">[AGE RANGE]</span> person with <span style="color:#FCD34D;">[HAIR]</span>. Wearing <span style="color:#FCD34D;">[OUTFIT]</span>. They are <span style="color:#FCD34D;">[ACTION]</span>. Expressive, large eyes with a gentle, contemplative expression. Soft, hand-painted animation style with delicate linework. Warm, natural lighting — golden hour. Background: <span style="color:#FCD34D;">[SETTING]</span>. Ghibli's signature warmth, nostalgia, and humanity. Aspect ratio 3:4.
        </p>
      </div>

      <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 24px;font-style:italic;">149 more like this in the pack — pet portraits, action figures, cyberpunk, trading cards, Funko, and more.</p>

      ${ctaButton("Grab the Pack — $29 →", tagNurture(IMAGE_PACK_LINK, 'flash'), "48h only · 30-day money-back guarantee · Instant download")}

      <p style="font-size:15px;line-height:1.7;color:#374151;">After 48 hours it's back to $49. You've been getting free value from us for weeks — this is the easiest way to say thanks.</p>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">— The MidasTools Team<br/><em>P.S. If you want everything, the <a href="${tagNurture(BUNDLE_LINK, 'flash-ps')}" style="color:#3B5FFF;">All Kits Bundle is $97</a> (normally $661).</em></p>
    `),
  },
  tripwire: {
    subject: "Just $9 — our 20 best AI prompts (instant access)",
    html: (source) => wrapEmail(`
      <div style="background:linear-gradient(135deg,#F59E0B,#D97706);border-radius:16px;padding:22px 24px;margin:0 0 24px;color:#FFF;text-align:center;">
        <div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:#FEF3C7;margin-bottom:6px;">🎯 STARTER PACK</div>
        <div style="font-size:26px;font-weight:900;line-height:1.1;">20 battle-tested AI prompts — $9</div>
        <div style="font-size:13px;color:#FEF3C7;margin-top:8px;">The 20 best of our 145+ prompt Mega Pack.</div>
      </div>

      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Small ask: $9 for the 20 prompts we'd pick first.</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;">I've been sending you free tools for weeks. No pressure — they stay free.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">But if you want the <strong>shortcut</strong> — the 20 prompts we reach for before anything else — here's the fastest way to grab them:</p>

      <div style="background:#FFFBEB;border:1px solid #FCD34D;border-radius:10px;padding:18px 22px;margin:24px 0;">
        <p style="font-size:14px;line-height:1.9;color:#78350F;margin:0;">
          <strong>What's inside the $9 Starter Pack:</strong><br/>
          ✉️ 4 cold outreach prompts (email + LinkedIn + warm intros)<br/>
          📄 3 landing page copy rewriters (pricing, headlines, hero)<br/>
          📱 4 social content engines (calendar, hooks, carousels, Reels)<br/>
          🖼️ 3 AI image prompts (Ghibli, product shots, Pinterest pins)<br/>
          💰 3 sales &amp; offer builders (Hormozi-style stack)<br/>
          ⚡ 3 productivity prompts (brain dump, meetings, decisions)
        </p>
      </div>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:24px 0 8px;"><strong style="color:#111827;">Here's one — paste it into ChatGPT right now:</strong></p>

      <div style="background:#0F172A;border-radius:10px;padding:18px 20px;margin:8px 0 20px;">
        <p style="font-size:12px;line-height:1.7;color:#E5E7EB;margin:0;font-family:'SF Mono',Monaco,monospace;">
          You are a world-class cold email copywriter.<br/><br/>
          Write a 5-sentence cold email to <span style="color:#FCD34D;">[PROSPECT_NAME]</span>, a <span style="color:#FCD34D;">[ROLE]</span> at <span style="color:#FCD34D;">[COMPANY]</span>.<br/><br/>
          Constraints: subject line must reference something specific they did recently. First line proves I paid attention (never "I hope this finds you well"). Close with a single low-commitment ask. No buzzwords.<br/><br/>
          My offer: <span style="color:#FCD34D;">[WHAT_I_DO_IN_ONE_SENTENCE]</span>.<br/><br/>
          Return 3 complete email versions + which one to send first and why.
        </p>
      </div>

      <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 24px;font-style:italic;">19 more like this — all copy-paste ready, variables in [BRACKETS].</p>

      ${ctaButton("Get the 20 Prompts — $9 →", tagNurture(TRIPWIRE_LINK, 'tripwire'), "Instant access · 30-day money-back guarantee · Less than a coffee run")}

      <p style="font-size:15px;line-height:1.7;color:#374151;">If you like these, the full <strong>145+ prompt Mega Pack is $29</strong> and the <strong>All-Kits Bundle is $97</strong>. But $9 is the honest starting point. No upsell pressure after.</p>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">— The MidasTools Team</p>

      <p style="font-size:13px;color:#9CA3AF;line-height:1.6;font-style:italic;">P.S. If $9 still isn't for you, no problem — the free generators stay free forever. You'll never get another email about this particular offer.</p>
    `),
  },
  coach_pivot: {
    subject: "We're going all-in on coaches & consultants (founder note)",
    html: (source) => wrapEmail(`
      <div style="background:linear-gradient(135deg,#FCD34D,#F59E0B);border-radius:16px;padding:22px 24px;margin:0 0 24px;color:#0F172A;text-align:center;">
        <div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:#7C2D12;margin-bottom:6px;">📣 PIVOT NOTE FROM THE FOUNDER</div>
        <div style="font-size:24px;font-weight:900;line-height:1.15;">We're going all-in on coaches &amp; consultants.</div>
      </div>

      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Quick honest note.</h1>

      <p style="font-size:16px;line-height:1.7;color:#374151;">When you signed up to Midas Tools, we were "AI prompts for everyone." That was too broad. The people who get the most value out of our kits all have one thing in common: <strong>they sell their expertise</strong> — coaches, consultants, course creators, solo experts.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">So we're focusing. New positioning: <strong>the AI productivity stack for coaches and consultants.</strong> Same kits, sharper purpose. Done-for-you content, branding, and lead-gen so you can stop trading hours for dollars.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">If any of these fit — life coach, business coach, fitness coach, executive coach, consultant, course creator, solo expert, agency-of-one — this is built for you.</p>

      <div style="background:#FFFBEB;border:1px solid #FCD34D;border-radius:10px;padding:18px 22px;margin:24px 0;">
        <p style="font-size:15px;line-height:1.7;color:#78350F;margin:0 0 10px;font-weight:700;">🎁 Founder-cohort gift: $9 starter pack</p>
        <p style="font-size:14px;line-height:1.7;color:#78350F;margin:0;">
          You're on the list before we niched down. The cleanest thank-you: our <strong>$9 Starter Pack</strong> — the 20 prompts we'd reach for first as a coach. Niche definition, content calendars, sales call scripts, lead-magnet ideas, landing-page rewriters. Less than a coffee, lifetime ownership, instant download.
        </p>
      </div>

      <p style="font-size:14px;line-height:1.6;color:#6B7280;margin:24px 0 8px;"><strong style="color:#111827;">Or skip ahead — full pricing for coaches:</strong></p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:10px;padding:18px 22px;margin:8px 0 24px;">
        <p style="font-size:14px;line-height:1.85;color:#374151;margin:0;">
          🟢 <a href="https://www.midastools.co/for-coaches?utm_source=email&amp;utm_campaign=coach_pivot" style="color:#3B5FFF;font-weight:700;">See coach pricing &amp; sample prompts</a><br/>
          📦 <strong>Coach Mega Pack</strong> $97 lifetime — 145+ prompts<br/>
          📅 <strong>AI Content Month DFY</strong> $199 — 30 days of content shipped in 48h<br/>
          🎨 <strong>Coach Brand Starter Pack DFY</strong> $299 — full brand voice + sales page in 72h
        </p>
      </div>

      ${ctaButton("Get the $9 Starter Pack →", tagNurture(TRIPWIRE_LINK, 'coach_pivot'), "20 prompts · Lifetime · Less than a coffee · 30-day refund")}

      <p style="font-size:15px;line-height:1.7;color:#374151;">If you're <em>not</em> a coach or consultant — totally fine. The free tools stay free, the kits still work for any AI use case, and you'll keep getting value. Just know what we're building toward.</p>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Building this for you,<br/>Armando &amp; the MidasTools Team</p>

      <p style="font-size:13px;color:#9CA3AF;line-height:1.6;font-style:italic;">P.S. Replying to this email goes straight to me. If you have a specific niche pain (content engine, sales pages, lead magnets, niching down) hit reply and tell me — I read every one.</p>
    `),
  },
  trending: {
    subject: "New AI tools just dropped",
    html: (source) => wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Fresh tools, hot off the press</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">I just shipped new AI generators based on what's trending right now:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:15px;line-height:2.2;color:#374151;margin:0;">
          <a href="https://www.midastools.co/ghibli-prompt-generator" style="color:#3B5FFF;font-weight:600;">Studio Ghibli Art Generator</a> — 8 Miyazaki film styles, magical elements<br/>
          <a href="https://www.midastools.co/pet-portrait-generator" style="color:#3B5FFF;font-weight:600;">Pet Portrait Generator</a> — 12 art styles including Pet-as-Human<br/>
          <a href="https://www.midastools.co/action-figure-generator" style="color:#3B5FFF;font-weight:600;">Action Figure Generator</a> — Barbie Box, Funko Pop, Anime & more<br/>
          <a href="https://www.midastools.co/muse-spark-prompt-generator" style="color:#3B5FFF;font-weight:600;">Meta Muse Spark Generator</a> — Prompts for Meta's new AI
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">All free. All instant. Go play with them.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">And if you want the full creative arsenal:</p>

      ${ctaButton("Get 150+ Image Prompts — $29", tagNurture(IMAGE_PACK_LINK, 'trending'), "Midjourney, DALL-E, Stable Diffusion, Flux ready")}

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
  const { key, day, to, broadcast, template, drip, min_days } = req.query;

  if (key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // ==========================================
    // AUTO-DRIP MODE: Send correct day email to each subscriber based on signup date
    // Call daily: GET /api/nurture?key=SECRET&drip=true
    // ==========================================
    if (drip === 'true') {
      const allSubs = await readSubscribers();
      const subscribers = allSubs.filter(s => !s.unsubscribed);

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

      // Save updated sent markers
      if (results.length > 0) {
        await writeSubscribers(subscribers);

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

      // PREVIEW: ?broadcast=true&template=memo&to=email — send ONE copy, skip
      // the subscriber blast + founder report. Use to proof every issue.
      if (to) {
        const subj = typeof broadcastTemplate.subject === 'function' ? broadcastTemplate.subject(null) : broadcastTemplate.subject;
        await resend.emails.send({ from: FROM_EMAIL, to, subject: `[PREVIEW] ${subj}`, html: broadcastTemplate.html(null) });
        return res.status(200).json({ success: true, preview: true, template: templateName, to });
      }

      const allSubs = await readSubscribers();
      let activeContacts = allSubs.filter(s => !s.unsubscribed);

      // Optional cohort filter: only subs signed up at least N days ago.
      // Use to skip subs still in active nurture window (avoid email fatigue).
      if (min_days) {
        const minDaysNum = parseInt(min_days, 10);
        if (Number.isFinite(minDaysNum) && minDaysNum > 0) {
          activeContacts = activeContacts.filter(s => daysBetween(s.date) >= minDaysNum);
        }
      }

      if (activeContacts.length === 0) {
        return res.status(200).json({ success: true, sent: 0, message: 'No active subscribers in cohort' });
      }

      const subject = typeof broadcastTemplate.subject === 'function'
        ? broadcastTemplate.subject(null)
        : broadcastTemplate.subject;

      const results = [];
      for (const contact of activeContacts) {
        try {
          const sendRes = await resend.emails.send({
            from: FROM_EMAIL,
            to: contact.email,
            subject,
            html: broadcastTemplate.html(contact.source),
          });
          // Capture the Resend message id. Without it, a 0-conversion broadcast
          // cannot be distinguished from a deliverability failure (delivered/spam/bounce).
          // The id makes each send queryable via the Resend events API or dashboard.
          const msgId = sendRes?.data?.id || sendRes?.id || null;
          results.push({ email: contact.email, status: 'sent', id: msgId });
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
          <ul>${results.map(r => `<li>${r.email} — ${r.status}${r.id ? ` [${r.id}]` : ''}${r.error ? ` (${r.error})` : ''}</li>`).join('')}</ul>`,
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
      to,
      subject,
      html: emailTemplate.html(null),
    });

    return res.status(200).json({ success: true, to, day: emailDay });
  } catch (error) {
    console.error('Nurture error:', error);
    return res.status(500).json({ error: error.message });
  }
}
