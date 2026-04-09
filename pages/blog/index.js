import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const posts = [
  { slug: 'claude-openclaw-pricing-change-2026', title: 'Claude Just Made OpenClaw 50x More Expensive — What It Means for AI Agents', date: 'Apr 8, 2026', desc: 'Anthropic cut OpenClaw from Claude subscriptions. Costs could jump 50x. Here\'s what it means for AI agents like Felix Craft ($300K/month), and 5 ways to keep your agent profitable.' },
  { slug: 'will-ai-replace-my-job-2026', title: 'Will AI Replace My Job? 40+ Jobs Ranked by AI Risk (2026 Data)', date: 'Mar 29, 2026', desc: 'We analyzed 40+ common jobs for AI replacement risk using real 2026 data. Data entry clerks face 96% risk while plumbers face only 10%. See where your job ranks and how to future-proof your career.' },
  { slug: 'ai-tools-content-creators-2026', title: '10 AI Tools Content Creators Are Using to 10x Their Output in 2026', date: 'Mar 27, 2026', desc: 'The best AI tools for content creators in 2026. 10 tested tools for writing, video, design, and distribution — with pricing, honest reviews, and copy-paste prompts.' },
  { slug: 'notion-templates-business-2026', title: '12 Notion Templates Every Business Needs in 2026 (+ AI Prompts to Power Them)', date: 'Mar 27, 2026', desc: 'The 12 essential Notion templates for running a business in 2026. Project management, CRM, budgets, SOPs, and more — plus AI prompts to set up each one in minutes.' },
  { slug: 'ai-prompts-real-estate-agents-2026', title: '20 AI Prompts Every Real Estate Agent Needs in 2026', date: 'Mar 27, 2026', desc: 'The best AI prompts for real estate agents. 20 copy-paste ChatGPT prompts for listing descriptions, lead generation, social media, market analysis, and business operations.' },
  { slug: 'cold-email-templates-2026', title: '25 Cold Email Templates That Actually Get Replies in 2026 (Copy & Paste)', date: 'Mar 27, 2026', desc: '25 proven cold email templates for B2B sales, freelancers, SaaS founders, and job seekers. Copy-paste templates with subject lines, follow-up sequences, and strategy guide.' },
  { slug: 'best-instagram-hashtags-2026', title: '150+ Best Instagram Hashtags for 2026 (By Niche + Strategy Guide)', date: 'Mar 27, 2026', desc: 'The ultimate list of Instagram hashtags for 2026. 150+ hashtags organized by niche, Reels-specific tags, strategy guide, common mistakes, and a 30-day hashtag challenge.' },
  { slug: 'ai-presentation-prompts-2026', title: '15 AI Prompts That Will Make Your Presentations 10x Better in 2026', date: 'Mar 26, 2026', desc: '15 copy-paste AI prompts for presentations. Pitch decks, sales presentations, conference talks, business reports & slide storytelling frameworks.' },
  { slug: 'ai-email-marketing-prompts-2026', title: '20 AI Prompts That Will Transform Your Email Marketing in 2026', date: 'Mar 26, 2026', desc: '20 copy-paste AI prompts for email marketing. Welcome sequences, sales emails, newsletters, cold outreach, retention campaigns & subject lines that convert.' },
  { slug: 'ai-social-media-prompts-2026', title: '20 AI Prompts That Will Transform Your Social Media in 2026', date: 'Mar 26, 2026', desc: '20 copy-paste AI prompts for social media management. Content calendars, captions, viral formulas, analytics, community management & paid ads for every platform.' },
  { slug: 'ai-resume-prompts-chatgpt-2026', title: '15 ChatGPT Prompts to Write a Perfect Resume in 2026', date: 'Mar 26, 2026', desc: 'The best ChatGPT resume prompts for 2026. 15 copy-paste AI prompts for resume writing, cover letters, LinkedIn optimization, interview prep, and salary negotiation.' },
  { slug: 'chatgpt-ghibli-style-prompts-2026', title: '25 Best ChatGPT Ghibli-Style Prompts (Copy & Paste) — Turn Any Photo into Ghibli Art', date: 'Mar 28, 2026', desc: 'The best Studio Ghibli-style prompts for ChatGPT. 25 copy-paste prompts for portraits, landscapes, pets, food, and magical scenes. Step-by-step guide with pro tips.' },
  { slug: 'free-ai-prompt-generator-2026', title: 'Free AI Prompt Generator: Build Perfect Prompts in Seconds (2026)', date: 'Mar 26, 2026', desc: 'Generate custom AI prompts for sales emails, social media, product descriptions, blog outlines, cold outreach, and more. Free, instant, no signup required.' },
  { slug: 'how-to-make-money-selling-ai-art-2026', title: 'How to Make Money Selling AI Art in 2026: 7 Proven Methods ($500\u2013$10K/Month)', date: 'Mar 26, 2026', desc: '7 proven methods to make money selling AI art. Print-on-demand, stock photography, commissions, prompt packs, and more. Real income numbers and copy-paste prompts.' },
  { slug: 'best-midjourney-prompts-2026', title: '40+ Best Midjourney Prompts for Stunning AI Art in 2026 (Copy & Paste)', date: 'Mar 26, 2026', desc: 'The best Midjourney prompts for 2026. 40+ copy-paste prompts for photorealistic portraits, product photography, cinematic art, anime, architecture, and abstract design. Includes v6.1 parameters.' },
  { slug: 'how-to-make-money-with-ai-2026', title: 'How to Make Money with AI in 2026: 12 Proven Methods (With Real Examples)', date: 'Mar 25, 2026', desc: '12 proven methods to make money with AI in 2026. Real income examples, tools needed, and step-by-step guides. From selling prompt packs to AI consulting.' },
  { slug: 'chatgpt-prompts-students-2026', title: '30 ChatGPT Prompts Every Student Needs in 2026 (Study Smarter, Not Harder)', date: 'Mar 25, 2026', desc: 'The best ChatGPT prompts for students. Copy-paste prompts for essays, studying, note-taking, exam prep, and time management.' },
  { slug: 'chatgpt-action-figure-prompt-2026', title: 'How to Create Your Own ChatGPT Action Figure (Best Prompts + Tips)', date: 'Mar 25, 2026', desc: 'The viral trend explained. 15+ copy-paste prompts for action figures, doll boxes, and collectible toys.' },
  { slug: 'chatgpt-image-prompts-2026', title: '50 Viral ChatGPT Image Prompts That Broke the Internet in 2026', date: 'Mar 25, 2026', desc: 'The exact image prompts going viral on social media right now. 50 copy-paste prompts for portraits, products, social media, cinematic art, and trending aesthetic styles.' },
  { slug: 'ai-productivity-tools-2026', title: '10 AI Productivity Tools That Actually Save Time in 2026 (Tested)', date: 'Mar 24, 2026', desc: '10 AI productivity tools tested and ranked. Notion AI, ChatGPT, Claude, Perplexity, Otter.ai, and 5 more — with honest pricing, time savings, and 3 copy-paste prompts.' },
  { slug: 'ai-email-templates-2026', title: '21 AI Email Templates That Get Replies (Copy, Paste, Send)', date: 'Mar 24, 2026', desc: '21 ready-to-use AI email templates for cold outreach, client management, internal comms, and follow-ups. Copy, paste, customize, send — cut email time by 60%.' },
  { slug: 'ai-tools-project-managers-2026', title: '8 AI Tools for Project Managers That Eliminate 10+ Hours of Admin Per Week', date: 'Mar 24, 2026', desc: 'The best AI tools for project managers in 2026. Task prioritization, meeting notes, status reports, and scheduling — with 3 copy-paste prompts for common PM tasks.' },
  { slug: 'ai-tools-hr-recruiting-2026', title: '9 AI Tools for HR and Recruiting That Cut Hiring Time in Half (2026)', date: 'Mar 24, 2026', desc: 'The best AI tools for HR and recruiting in 2026. Sourcing, screening, onboarding — with pricing, pro tips, and 3 copy-paste prompts for hiring managers.' },
  { slug: 'ai-marketing-tools-2026', title: '12 AI Marketing Tools That Actually Drive Revenue in 2026', date: 'Mar 24, 2026', desc: 'The best AI marketing tools in 2026 across content, analytics, automation, and ads. 12 tools with pricing, use cases, and 3 copy-paste marketing prompts.' },
  { slug: 'ai-tools-students-2026', title: '11 AI Tools Every Student Needs in 2026 (Most Are Free)', date: 'Mar 24, 2026', desc: 'The best AI tools for students in 2026. Study aids, writing helpers, research tools, and productivity apps — with honest reviews of free tiers and 3 copy-paste prompts.' },
  { slug: 'chatgpt-tips-tricks-2026', title: '25 ChatGPT Tips and Tricks Most People Don\'t Know in 2026', date: 'Mar 24, 2026', desc: 'Advanced ChatGPT tips, tricks, and hacks for 2026. 25 techniques for better outputs, productivity hacks, and advanced strategies — with copy-paste prompts for each.' },
  { slug: 'best-free-ai-tools-2026', title: '15 Best Free AI Tools in 2026 (That Are Actually Worth Using)', date: 'Mar 24, 2026', desc: 'The best free AI tools in 2026, tested and ranked. ChatGPT, Claude, Gemini, Perplexity, Canva AI, and 10 more — with honest reviews of what each free tier actually gives you.' },
  { slug: 'ai-tools-by-profession-2026', title: 'AI Tools by Profession: The Complete 2026 Guide (12 Industries)', date: 'Mar 24, 2026', desc: 'The best AI tools for every profession in 2026. Healthcare, teachers, lawyers, accountants, HR, project managers, small business, freelancers, real estate, e-commerce, creators, and SaaS — with time savings data for each.' },
  { slug: 'ai-tools-healthcare-2026', title: '7 AI Tools for Healthcare Workers That Reduce Burnout and Save Hours Daily', date: 'Mar 24, 2026', desc: 'The best AI tools for healthcare workers in 2026. Clinical documentation, patient communication, scheduling, and training — with HIPAA-compliant prompt templates.' },
  { slug: 'ai-tools-lawyers-2026', title: '8 AI Tools for Lawyers That Are Changing Legal Practice in 2026', date: 'Mar 24, 2026', desc: 'The best AI tools for lawyers and law firms in 2026. Contract review, legal research, client intake, billing optimization, and document drafting — with exact prompts.' },
  { slug: 'ai-tools-accountants-2026', title: '7 AI Tools for Accountants and Bookkeepers That Save 15+ Hours Per Week', date: 'Mar 24, 2026', desc: 'The best AI tools for accountants in 2026. Automate data entry, categorize transactions, draft client communications, generate reports, and streamline tax prep.' },
  { slug: 'ai-tools-teachers-2026', title: '9 AI Tools for Teachers That Save 10+ Hours Per Week in 2026', date: 'Mar 24, 2026', desc: 'The best AI tools for teachers in 2026. Create lesson plans, grade faster, generate worksheets, write report card comments, and differentiate instruction — all with copy-paste prompts.' },
  { slug: 'ai-second-income-2026', title: 'How to Build a Second Income with AI in 2026 (Step-by-Step Guide)', date: 'Mar 24, 2026', desc: 'A practical guide to building a second income stream using AI tools in 2026. 7 proven methods with exact prompts, realistic income ranges, and time investments required.' },
  { slug: 'ai-tools-vs-hiring-2026', title: 'AI Tools vs. Hiring: What Small Businesses Should Automate (and What They Shouldn\'t)', date: 'Mar 24, 2026', desc: 'A practical comparison of AI tools vs. hiring for 10 common business functions. With cost breakdowns, time savings, and honest recommendations.' },
  { slug: 'best-ai-prompt-packs-2026', title: '7 Best AI Prompt Packs Worth Buying in 2026 (Honest Comparison)', date: 'Mar 24, 2026', desc: 'We compared the top AI prompt packs on the market. Here are the 7 worth your money — with an honest breakdown of price, quality, and what each one is best for.' },
  { slug: 'how-to-price-freelance-services-ai-2026', title: 'How to Price Your Freelance Services with AI in 2026 (Complete Guide)', date: 'Mar 24, 2026', desc: 'Learn how to price freelance services using AI tools in 2026. Includes market rate research prompts, value-based pricing frameworks, tier templates, objection scripts, and rate increase strategies.' },
  { slug: 'ai-saas-founder-tools-2026', title: '6 AI Tools SaaS Founders Are Using to Hit $10K MRR Faster in 2026', date: 'Mar 23, 2026', desc: 'The AI tools and prompts SaaS founders are actually using in 2026 to launch faster, onboard better, and reduce churn — with exact templates you can steal today.' },
  { slug: 'chatgpt-side-hustle-2026', title: '7 ChatGPT Side Hustles Actually Making Money in 2026 (With Exact Prompts)', date: 'Mar 23, 2026', desc: 'Not theoretical. These are the 7 AI-powered side hustles people are actually earning from right now — with the exact ChatGPT prompts to get started today.' },
  { slug: 'ai-ecommerce-product-descriptions-2026', title: 'How to Write Product Descriptions That Actually Sell (Using AI)', date: 'Mar 23, 2026', desc: 'Most product descriptions are terrible. Here are 6 AI prompts that turn boring feature lists into copy that converts — with before/after examples.' },
  { slug: 'best-ai-prompts-business-2026', title: '50 AI Prompts That Are Actually Making People Money in 2026', date: 'Mar 23, 2026', desc: 'The best AI prompts for business in 2026. Tested prompts for sales emails, social media, content creation, operations, and productivity that save 15+ hours per week.' },
  { slug: 'ai-small-business-automation-2026', title: '9 AI Automations That Save Small Businesses 20+ Hours Per Week', date: 'Mar 22, 2026', desc: 'The specific AI templates and workflows small business owners are using in 2026 to automate social media, email, hiring, customer service, and daily operations.' },
  { slug: 'ai-tools-small-business-owners-2026', title: '5 AI Tools That Are Printing Money for Small Business Owners in 2026', date: 'Mar 22, 2026', desc: 'Small business owners using AI report 20-40% productivity gains. Here are the 5 tools actually driving revenue — with real numbers, not hype.' },
  { slug: 'automate-client-follow-up-ai', title: 'How to Automate Client Follow-Up with AI (No Code Required)', date: 'Mar 22, 2026', desc: 'Every slow follow-up is a lost sale. Here is how to deploy an AI agent that responds to every lead in under 2 minutes — 24/7, no code needed.' },
  { slug: 'ai-freelancer-automation-2026', title: '7 AI Automations Every Freelancer Needs in 2026 (Save 15+ Hours/Week)', date: 'Mar 22, 2026', desc: '77% of freelancers now use AI tools. The ones who automate proposals, invoicing, and client management are earning more while working less. Here are the 7 automations that matter most.' },
  { slug: 'ai-content-repurposing-2026', title: 'How to Repurpose One Blog Post into 10 Pieces of Content with AI (2026 Guide)', date: 'Mar 22, 2026', desc: 'The creators growing fastest publish everywhere but write once. Here is the exact AI-powered repurposing workflow that turns a single blog post into threads, newsletters, scripts, and more.' },
  { slug: 'ai-tools-real-estate-agents-2026', title: '7 AI Tools Real Estate Agents Are Using to Close More Deals in 2026', date: 'Mar 22, 2026', desc: 'The top agents are using AI to respond to leads faster, write better listings, and automate follow-up. Here are the 7 tools actually moving the needle — with real impact numbers.' },
  { slug: 'vapi-vs-bland-vs-retell', title: 'Vapi vs Bland AI vs Retell AI: Which Voice AI Platform Should You Use? (2026)', date: 'Feb 26, 2026', desc: 'Honest comparison after deploying all three for clients. Feature table, pricing, latency, HIPAA compliance, and a clear decision framework.', external: 'https://dev.to/midastools/vapi-vs-bland-ai-vs-retell-ai-which-voice-ai-platform-should-you-use-2026-2n9n' },
  { slug: 'vapi-voice-agent-guide', title: 'How to Build a Vapi Voice Agent from Scratch (Complete 2026 Guide)', date: 'Feb 26, 2026', desc: 'Complete hands-on guide: assistant config, FastAPI tool server, phone number setup, webhook handling, and cost breakdown. Working code for a dental receptionist.', external: 'https://dev.to/midastools/how-to-build-a-vapi-voice-agent-from-scratch-complete-2026-guide-52jb' },
  { slug: 'chatgpt-small-business', title: 'How to Use ChatGPT for Your Small Business (10 Practical Use Cases)', date: 'Feb 26, 2026', desc: '10 specific, prompt-included ChatGPT use cases for small businesses — writing, content repurposing, review responses, data analysis, job posts, and social media batching.', external: 'https://dev.to/midastools/how-to-use-chatgpt-for-your-small-business-10-practical-use-cases-that-save-real-time-2nk3' },
  { slug: 'website-chatbot-leads', title: 'How to Build a Website Chatbot That Qualifies Leads 24/7 (No Code)', date: 'Feb 26, 2026', desc: 'Full Tidio setup: qualification flow tree, Cal.com booking, Lyro AI, page-level personalization. Real results: 5\u20138 qualified calls/week vs 1\u20132 without a bot.', external: 'https://dev.to/midastools/how-to-build-a-website-chatbot-that-qualifies-leads-247-no-code-required-305a' },
  { slug: 'appointment-reminders-no-shows', title: 'How to Set Up Automated Appointment Reminders That Cut No-Shows by 30%', date: 'Feb 26, 2026', desc: '3-touch system (48h, 24h, 2h before). Three implementation paths: Cal.com+Make (free), Calendly+Zapier ($25/mo), custom Python+OpenAI ($10/mo). ROI table included.', external: 'https://dev.to/midastools/how-to-set-up-automated-appointment-reminders-that-cut-no-shows-by-30-5hh8' },
  { slug: 'ai-sales-agent', title: 'How to Build an AI Sales Agent That Books Meetings While You Sleep', date: 'Feb 26, 2026', desc: 'Full outbound stack: ICP targeting, Apollo lists, GPT-4o personalization code, 3-touch email sequence, reply handling. Real numbers: 3\u201310 meetings per 500 emails.', external: 'https://dev.to/midastools/how-to-build-an-ai-sales-agent-that-books-meetings-while-you-sleep-1185' },
  { slug: 'ai-customer-support', title: 'How to Use AI to Handle Customer Support Without Hiring Anyone', date: 'Feb 26, 2026', desc: 'Two-layer approach: instant answers + action-capable agent. Tidio setup guide, OpenAI Assistants code, escalation rules, 5 common mistakes. Real metrics included.', external: 'https://dev.to/midastools/how-to-use-ai-to-handle-customer-support-without-hiring-anyone-229i' },
  { slug: 'ai-phone-receptionist', title: 'How to Build an AI Phone Receptionist for Your Business', date: 'Feb 26, 2026', desc: 'Vapi step-by-step: voice, system prompt, calendar integration, phone number. Cost: ~$12/month. ROI for dental practice: $3,000/month recovered from missed calls.', external: 'https://dev.to/midastools/how-to-build-an-ai-phone-receptionist-for-your-business-no-technical-skills-required-24b4' },
  { slug: 'openclaw-setup-guide-2026', title: 'OpenClaw Setup Guide 2026: Deploy Your First AI Agent in 30 Minutes', date: 'Mar 28, 2026', desc: 'Complete beginner\'s guide to OpenClaw — 100K GitHub stars, acquired by Meta. Step-by-step setup, SOUL.md configuration, and 6 industry templates.' },
  { slug: 'ai-agent-10k-day', title: "AI Agents Made $10,000 in a Single Day \u2014 Here's the Architecture Behind It", date: 'Feb 24, 2026', desc: "FelixCraftAI crossed $10K in a single day and $38K lifetime in 30 days. Here's the exact architecture that makes AI agents generate real revenue autonomously." },
  { slug: 'openclaw-entrepreneur-setup-guide', title: 'OpenClaw Setup Guide: Deploy Your AI Entrepreneur in Under an Hour', date: 'Feb 23, 2026', desc: 'Step-by-step: install OpenClaw, write your SOUL.md, set up heartbeat + cron jobs, connect Stripe/GitHub/email. Autonomous operation in under an hour.' },
  { slug: 'validate-startup-idea-24-hours', title: 'How to Validate a Startup Idea in 24 Hours Using AI', date: 'Feb 23, 2026', desc: 'Most founders build for 6 months before talking to customers. The 24-hour framework tests your idea before you build a single line of code.' },
  { slug: 'ai-entrepreneur-stack', title: 'The Solo Founder AI Stack: Tools That Actually Help You Make Money', date: 'Feb 23, 2026', desc: 'Not 50 tools. Five. The exact stack a solo founder needs to go from idea to revenue \u2014 and why everything else is noise.' },
  { slug: 'felix-craft-story', title: 'How to Make Money with AI Agents: $200K Revenue Case Study (2026)', date: 'Feb 20, 2026', desc: "Real case study: an AI agent went from $0 to $200K+ in revenue — building products, launching marketplaces, and running businesses autonomously. Step-by-step breakdown." },
  { slug: 'openclaw-vs-chatgpt-autonomous-agent', title: 'OpenClaw vs ChatGPT: Why Autonomous Agents Beat Chatbots for Revenue', date: 'Feb 22, 2026', desc: "ChatGPT answers questions. OpenClaw agents run businesses. Here's why the shift from chatbot to autonomous agent changes everything for indie entrepreneurs." },
  { slug: 'deploy-openclaw-ai-entrepreneur', title: 'How to Deploy an OpenClaw AI Entrepreneur (Step by Step)', date: 'Feb 22, 2026', desc: 'A complete guide to setting up an OpenClaw agent with a revenue-focused identity, heartbeat system, and the tools to build and sell products autonomously.' },
  { slug: 'ai-agents-break-unsupervised', title: '5 Things That Break When You Run AI Agents Unsupervised (and How to Fix Them)', date: 'Feb 25, 2026', desc: 'Scope creep on credentials, missing action gates, mission drift, hallucination loops \u2014 the failure modes that actually bite you when running agents without supervision.', external: 'https://dev.to/midastools/5-things-that-break-when-you-run-ai-agents-unsupervised-and-how-to-fix-them-32ip' },
  { slug: 'replace-va-with-ai-agent', title: 'How to Replace a $5,000/Month VA with an AI Agent (Step-by-Step)', date: 'Feb 25, 2026', desc: '75% of typical VA work can be automated today. Email triage, research, content scheduling, daily reporting \u2014 all autonomous. Real cost breakdown: $44\u201389/month vs $5,000/month.', external: 'https://dev.to/midastools/how-to-replace-a-5000month-va-with-an-ai-agent-step-by-step-4pk9' },
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog — Midas Tools | AI Automation Guides &amp; Playbooks</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://midastools.co/blog" />
        <meta name="description" content="How-to guides, case studies, and playbooks for solopreneurs building AI agents that automate their business. Free resources from Midas Tools." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — Midas Tools" />
        <meta name="twitter:description" content="How-to guides, case studies, and playbooks for solopreneurs building AI agents that automate their business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://midastools.co/blog" />
        <meta property="og:title" content="Blog — Midas Tools" />
        <meta property="og:description" content="How-to guides, case studies, and playbooks for solopreneurs building AI agents that automate their business." />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:site_name" content="Midas Tools" />
      </Head>
      <style>{`
        .container{max-width:720px;margin:0 auto;padding:80px 40px}
        h1{font-size:40px;font-weight:900;letter-spacing:-1px;margin-bottom:48px}
        .post{padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .post:last-child{border-bottom:none}
        .post-date{font-size:12px;color:var(--gray-400);margin-bottom:8px;font-weight:500}
        .post-title{font-size:20px;font-weight:800;margin-bottom:8px;letter-spacing:-0.3px}
        .post-title a{color:var(--text);text-decoration:none;transition:color 0.15s}
        .post-title a:hover{color:var(--accent)}
        .post-desc{font-size:15px;color:var(--gray-400);line-height:1.7;margin-bottom:16px}
        .read-more{font-size:14px;color:var(--accent);text-decoration:none;font-weight:600}
        @media(max-width:600px){.container{padding:48px 20px}h1{font-size:32px}}
      `}</style>
      <div className="container">
        <div className="section-label">Blog</div>
        <h1>AI Entrepreneur Playbooks</h1>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 28px', marginBottom: 48, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Free Tools</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Try before you buy — no account needed.</div>
          </div>
          <Link href="/quiz" style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>Find Your Kit &rarr;</Link>
          <Link href="/ai-roi-calculator" style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>ROI Calculator &rarr;</Link>
          <Link href="/free-prompts" style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>Free Prompts &rarr;</Link>
        </div>

        {posts.map(p => (
          <div className="post" key={p.slug}>
            <div className="post-date">{p.date}</div>
            <div className="post-title">
              {p.external ? (
                <a href={p.external} target="_blank" rel="noopener noreferrer">{p.title}</a>
              ) : (
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              )}
            </div>
            <p className="post-desc">{p.desc}</p>
            {p.external ? (
              <a href={p.external} target="_blank" rel="noopener noreferrer" className="read-more">Read more &rarr;</a>
            ) : (
              <Link href={`/blog/${p.slug}`} className="read-more">Read more &rarr;</Link>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
