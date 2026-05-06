import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_COWORK_KIT = 'https://buy.stripe.com/28E3cu90jePn0mg7RUcMM0n';
const STRIPE_TEAM_KIT = 'https://buy.stripe.com/14A8wOdgz0Yx2uo5JMcMM0o';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function RampAIAdoptionPlaybook() {
  return (
    <Layout>
      <Head>
        <title>Ramp's 99.5% AI Adoption: The 8-Step Playbook (April 2026) | Midas Tools</title>
        <meta name="description" content="How Ramp got 99.5% of employees using AI weekly — and 84% running coding agents. The 8 concrete steps from their adoption playbook, ready to steal." />
        <meta name="keywords" content="AI adoption playbook, enterprise AI adoption, Claude Cowork for teams, AI skills marketplace, Ramp Glass AI" />
        <meta property="og:title" content="Ramp's 99.5% AI Adoption: The 8-Step Playbook (April 2026)" />
        <meta property="og:description" content="How Ramp got 99.5% of employees using AI weekly — and 84% running coding agents. The 8 concrete steps from their playbook, ready to steal." />
        <meta property="og:url" content="https://www.midastools.co/blog/ramp-ai-adoption-playbook-2026" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ramp's 99.5% AI Adoption: The 8-Step Playbook" />
        <meta name="twitter:description" content="Ramp got 99.5% of employees using AI weekly and 84% running coding agents. The 8 concrete steps from their playbook, ready to steal." />
        <link rel="canonical" href="https://www.midastools.co/blog/ramp-ai-adoption-playbook-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ramp's 99.5% AI Adoption: The 8-Step Playbook (April 2026)",
          "datePublished": "2026-04-09",
          "dateModified": "2026-04-09",
          "author": { "@type": "Person", "name": "Rey Midas" },
          "publisher": { "@type": "Organization", "name": "Midas Tools" },
          "description": "Ramp achieved 99.5% AI adoption across the company. Analysis of their 8-step playbook for enterprise AI adoption that any team can replicate."
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How did Ramp achieve 99.5% AI adoption across the company?",
              "acceptedAnswer": { "@type": "Answer", "text": "Ramp achieved 99.5% AI adoption through an 8-step playbook: starting imperfectly rather than waiting, building an L0-L3 proficiency framework, embracing creative destruction of tools, driving adoption from department 'spokes' rather than only top-down, creating an internal skills marketplace with 350+ shared skills, building their own tool (Glass) for fast 'aha' moments, gamifying adoption with leaderboards, and removing all constraints including unlimited budgets and no token limits." }
            },
            {
              "@type": "Question",
              "name": "What is Ramp's L0-L3 AI proficiency framework?",
              "acceptedAnswer": { "@type": "Answer", "text": "Ramp's L0-L3 framework categorizes AI proficiency into four levels: L0 (non-user), L1 (basic chat and summarization), L2 (workflow integration where AI is embedded into daily tasks), and L3 (autonomous delegation where employees hand off entire workflows to AI agents). The goal is to move every employee to at least L2, with power users reaching L3." }
            },
            {
              "@type": "Question",
              "name": "What is Ramp Glass AI and how does it work?",
              "acceptedAnswer": { "@type": "Answer", "text": "Glass is Ramp's internal AI tool — essentially their version of Claude Cowork. It gives every employee a single interface to interact with AI for their specific role. By building a centralized tool, Ramp reduced the friction of adoption. Employees didn't need to figure out which AI tool to use or how to prompt it. Glass handled the complexity and got people to their 'aha' moment within minutes, not days." }
            },
            {
              "@type": "Question",
              "name": "How can small teams replicate Ramp's AI adoption playbook?",
              "acceptedAnswer": { "@type": "Answer", "text": "Small teams can replicate Ramp's playbook by: (1) starting with pre-built prompt kits like the Claude Cowork Kit instead of building custom tools, (2) creating a shared folder of team-specific AI skills and prompts, (3) setting up a simple leaderboard or Slack channel to celebrate AI wins, (4) removing budget constraints on AI tools since the ROI typically exceeds 10x, and (5) focusing on getting each team member to one 'aha' moment rather than mandating broad adoption." }
            },
            {
              "@type": "Question",
              "name": "What ROI does enterprise AI adoption deliver in 2026?",
              "acceptedAnswer": { "@type": "Answer", "text": "Enterprise AI adoption in 2026 delivers significant ROI across multiple dimensions. Ramp reports that non-engineers now ship production code, reducing engineering bottlenecks. Companies using structured AI adoption playbooks report 30-60% productivity gains in knowledge work. The key metric is time-to-value: teams using pre-built AI skill kits see results in days rather than the months it takes to build custom solutions from scratch." }
            }
          ]
        })}} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>← All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          Ramp Made 99.5% of Employees AI Power Users — Here's the Playbook You Can Steal
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '24px' }}>Apr 9, 2026 · Updated May 6, 2026 · Rey Midas</p>

        <div style={{ background: '#F4F6FB', borderLeft: '3px solid #3B5FFF', padding: '14px 16px', borderRadius: '6px', margin: '0 0 32px 0', fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
          <strong>May 2026 update:</strong> Ramp's adoption numbers held through Q1 2026 and they shipped <strong>Glass v2</strong> internally in mid-April — a multi-agent extension of their original AI hub. Public coverage in <em>The Information</em> (Apr 22) and <em>Stratechery</em> (May 1) confirmed the L0–L3 framework is now spreading to other 1000+ employee fintechs. For more 2026 enterprise-AI signal, see <Link href="/blog/best-ai-tools-may-2026" style={{ color: '#3B5FFF' }}>10 Best AI Tools to Try in May 2026</Link>.
        </div>

        <p>Ramp just published their internal AI adoption numbers, and they're staggering: <strong>99.5% of employees actively use AI.</strong> Not "have access to." Not "tried it once." Actively use it, every week, as part of their real work.</p>
        <p>Even more striking: <strong>84% of Ramp employees use coding agents on a weekly basis.</strong> That includes marketers, finance people, and ops teams — not just engineers. Non-engineers are shipping production code. Account managers are building internal tools. The line between "technical" and "non-technical" has effectively dissolved.</p>
        <p>Most companies are still stuck debating which AI tools to approve. Ramp already won the adoption war. And they did it in months, not years.</p>
        <p>Here are the 8 lessons from Ramp's playbook — and how you can apply every one of them to your team this week.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>The 8 Lessons From Ramp's AI Adoption Playbook</h2>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>1. Get Started Now, Not Perfectly</h3>
        <p>Ramp didn't wait for the perfect AI strategy document. They didn't form a committee to evaluate 47 vendors. They picked tools, put them in people's hands, and iterated.</p>
        <p>The biggest enemy of AI adoption isn't choosing the wrong tool — it's choosing nothing. Every week you spend evaluating is a week your competitors spend building AI muscle memory. Ramp's philosophy: <strong>a mediocre AI workflow adopted today beats a perfect one adopted in six months.</strong></p>
        <p>The tools will change. The skills your team builds while using them won't.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>2. AI Proficiency Is a Learning Curve (L0–L3)</h3>
        <p>Ramp created an internal framework to track where every employee sits on the AI proficiency curve:</p>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '24px 0' }}>
          <ul style={{ margin: 0 }}>
            <li><strong>L0 — Non-user:</strong> Hasn't tried AI tools yet</li>
            <li><strong>L1 — Basic:</strong> Uses AI for chat, summarization, simple Q&A</li>
            <li><strong>L2 — Integrated:</strong> AI is embedded into daily workflows, used for drafting, analysis, code review</li>
            <li><strong>L3 — Autonomous:</strong> Delegates entire workflows to AI agents, builds custom automations, ships code via agents</li>
          </ul>
        </div>
        <p>The critical insight: <strong>the jump from L1 to L2 is where the real value lives.</strong> Most employees get stuck at L1 — they ask ChatGPT a question occasionally and call it a day. Moving them to L2, where AI is part of their daily rhythm, is the inflection point. Ramp's goal was to get every single employee to at least L2. They nearly did it.</p>
        <p>You can map your own team against this framework right now. If most of your people are at L0 or L1, you have a massive opportunity sitting untapped.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>3. Embrace Creative Destruction</h3>
        <p>Here's something most companies get catastrophically wrong: they try to standardize on a single AI tool and lock it in for a year. Ramp took the opposite approach. They accept that <strong>any AI tool they adopt today might be obsolete in weeks.</strong></p>
        <p>Their internal tooling team ships fast, breaks things, and replaces tools without sentiment. If a better model drops next Tuesday, they switch. If an internal tool stops delivering value, they kill it. No sunk cost fallacy allowed.</p>
        <p>This mindset is liberating. It means you don't need to make the "right" choice — you just need to make a choice, extract value, and stay ready to pivot. The companies that lock into rigid AI strategies are the ones that fall behind.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>4. Build From the Center, Drive From the Spokes</h3>
        <p>Ramp's AI team provides centralized infrastructure — the models, the APIs, the security layer, the internal tools. But adoption is driven by <strong>department champions</strong>, not top-down mandates.</p>
        <p>Every department has people who naturally gravitate toward AI. Ramp identified these people, gave them resources and recognition, and let them pull their teams forward. A finance analyst who builds an AI workflow for reconciliation is more persuasive to other finance analysts than any CEO memo.</p>
        <p>The center builds the platform. The spokes drive the adoption. This hub-and-spoke model scales in a way that pure top-down mandates never can.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>5. Give People a Stage, Not Just a Mandate</h3>
        <p>This is the lesson most companies miss entirely. Ramp didn't just tell people to use AI — they created an internal <strong>skills marketplace where employees share their AI workflows.</strong> Over 350 skills have been shared across the company.</p>
        <p>Think about what this does psychologically. When a customer support rep builds a clever AI workflow and shares it, they get recognition from the entire company. They become the AI expert on their team. People start asking them for help. Their status rises.</p>
        <p>Now multiply that by hundreds of employees. You get a flywheel: people build skills, share them, get recognition, which motivates more people to build and share. The 350+ skills in Ramp's internal marketplace didn't come from a mandate. They came from giving people a stage.</p>

        <div style={{ background: '#EEF2FF', border: '2px solid #3B5FFF', borderRadius: '12px', padding: '24px', margin: '32px 0', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>Skip Months of Building — Get Pre-Built AI Skills</p>
          <p style={{ color: '#6B7280', margin: '0 0 16px', fontSize: '15px' }}>The Claude Cowork Kit gives your team 50+ ready-to-use AI skills, workflow templates, and prompt chains — the same kind of skills Ramp's employees built internally.</p>
          <a href={STRIPE_COWORK_KIT} data-cta="ramp-blog-cowork-hero" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Claude Cowork Kit — $29 →
          </a>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>6. Get to the "Aha" Moment Fast</h3>
        <p>Ramp built an internal tool called <strong>Glass</strong> — their own AI interface that gives every employee a single, role-aware entry point to AI. Think of it as their internal version of Claude Cowork.</p>
        <p>Why build a custom tool when ChatGPT and Claude already exist? Because <strong>the "aha" moment matters more than the model.</strong> Glass is pre-loaded with context about Ramp's systems, data, and workflows. When a finance analyst opens Glass and asks about Q1 reconciliation, it already knows Ramp's chart of accounts, their ERP structure, and their reporting cadence.</p>
        <p>The result: an employee's first interaction with Glass produces something genuinely useful, not a generic response that requires three follow-ups. That instant value is what converts skeptics into daily users. Ramp measured this — the faster someone hits their "aha" moment, the more likely they are to become an L2+ user.</p>
        <p>You probably can't build a Glass equivalent. But you can achieve the same effect by starting your team with <strong>pre-built, role-specific prompt kits</strong> that deliver value on first use — not blank text boxes that require prompt engineering skills most people don't have.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>7. Make It a Competition</h3>
        <p>Ramp runs internal leaderboards for AI usage. Teams compete on adoption metrics. Individuals get recognized for sharing the most useful skills.</p>
        <p>This sounds like a gimmick, but it's grounded in something real: <strong>social proof is the most powerful adoption driver.</strong> When a sales rep sees that 92% of their peers are using AI daily and they're not, the FOMO kicks in. When a team lead sees their department ranked last on the AI adoption leaderboard, they start paying attention.</p>
        <p>You don't need a fancy dashboard for this. A weekly Slack post showing "Top 5 AI Wins This Week" or a simple spreadsheet tracking which teams have hit L2 adoption will do the job. The key is visibility — make AI usage public, celebrated, and slightly competitive.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '32px' }}>8. Remove Every Constraint</h3>
        <p>This is the lesson that separates Ramp from companies that talk about AI adoption but never achieve it. Ramp removed <strong>every single constraint</strong> that could slow adoption:</p>
        <ul>
          <li><strong>Unlimited AI budgets:</strong> No approval process for AI tool spending. If a team wants to try a tool, they try it.</li>
          <li><strong>No token limits:</strong> Employees don't worry about running out of AI credits mid-task. Artificial scarcity kills experimentation.</li>
          <li><strong>No approval workflows:</strong> Teams don't need to file tickets to get AI access. It's available on day one.</li>
          <li><strong>No "approved vendor" bottleneck:</strong> If a new AI tool is better, use it. The creative destruction principle (Lesson 3) applies here too.</li>
        </ul>
        <p>The math is simple: <strong>the ROI on AI tools dwarfs the cost.</strong> If an employee's $200/month AI subscription saves 10 hours of work per month at a $100/hour fully-loaded cost, that's a 5x return. Ramp understood this from day one and refused to let procurement processes kill the momentum.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>What This Means for Your Team</h2>
        <p>Ramp has 1,000+ employees and a dedicated AI infrastructure team. You probably don't. But every lesson in their playbook can be adapted for a team of 5 or 50.</p>
        <p>The common thread across all 8 lessons is this: <strong>adoption is a human problem, not a technology problem.</strong> The AI models are good enough. The tools are accessible enough. What most teams lack is the structure, the incentives, and the ready-made skills that turn "we should use AI more" into "everyone uses AI every day."</p>
        <p>Here's how to start this week:</p>

        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '24px 0' }}>
          <ol style={{ margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><strong>Map your team against L0–L3.</strong> Where is everyone today? Where do they need to be?</li>
            <li style={{ marginBottom: '12px' }}><strong>Give everyone a pre-built skill kit.</strong> Don't make them start from a blank prompt. Give them role-specific workflows that deliver value on first use.</li>
            <li style={{ marginBottom: '12px' }}><strong>Create a "stage."</strong> Set up a Slack channel or weekly standup where people share their AI wins. Celebrate the small stuff.</li>
            <li style={{ marginBottom: '12px' }}><strong>Remove the constraints.</strong> Kill the approval workflows. Set AI budgets to unlimited (or at least generous). Make it easy to experiment.</li>
            <li style={{ marginBottom: '0' }}><strong>Identify your spokes.</strong> Find the 2-3 people on your team who are naturally curious about AI. Give them resources. Let them lead.</li>
          </ol>
        </div>

        <p>You don't need to build a Glass. You don't need a 1,000-person company. You need the playbook, the skills, and the willingness to start now — not perfectly.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>The Tools to Execute This Playbook</h2>

        <p>We built three products specifically to help teams replicate what Ramp did — without the internal AI team or six months of development.</p>

        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', margin: '24px 0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>Claude Cowork Kit — $29</h3>
          <p style={{ color: '#6B7280', margin: '0 0 12px', fontSize: '15px' }}>50+ pre-built AI skills and prompt chains for Claude. This is your team's "Glass" — a curated set of workflows that deliver value on first use. Perfect for getting every team member from L1 to L2.</p>
          <a href={STRIPE_COWORK_KIT} data-cta="ramp-blog-cowork-inline" style={{ color: '#3B5FFF', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Get the Cowork Kit →</a>
          {' · '}
          <Link href="/claude-cowork-kit" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Learn more</Link>
        </div>

        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', margin: '24px 0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>AI Team Adoption Kit — $49</h3>
          <p style={{ color: '#6B7280', margin: '0 0 12px', fontSize: '15px' }}>The complete adoption playbook: L0–L3 assessment templates, department-specific skill libraries, leaderboard templates, and onboarding sequences. Everything Ramp built internally, packaged for teams of any size.</p>
          <a href={STRIPE_TEAM_KIT} data-cta="ramp-blog-team-inline" style={{ color: '#3B5FFF', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Get the Team Kit →</a>
          {' · '}
          <Link href="/team-adoption-kit" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Learn more</Link>
        </div>

        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', margin: '24px 0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>Full Bundle — $97</h3>
          <p style={{ color: '#6B7280', margin: '0 0 12px', fontSize: '15px' }}>All 16 kits including both the Cowork Kit and Team Adoption Kit, plus prompt packs for marketing, sales, engineering, HR, finance, and more. One purchase, every AI workflow your team needs.</p>
          <a href={STRIPE_BUNDLE} data-cta="ramp-blog-bundle-inline" style={{ color: '#3B5FFF', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Get the Full Bundle →</a>
          {' · '}
          <Link href="/bundle" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Learn more</Link>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>FAQ</h2>

        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>How did Ramp get to 99.5% AI adoption?</h3>
        <p>Through a systematic 8-step playbook that focused on human behavior, not technology. They started imperfectly, tracked proficiency levels, created internal competitions, built a custom tool (Glass) for fast "aha" moments, and removed every constraint from budgets to token limits. The key was making AI adoption a cultural priority, not an IT project.</p>

        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>What is the L0–L3 AI proficiency framework?</h3>
        <p>It's Ramp's internal system for measuring how deeply employees use AI. L0 means non-user, L1 is basic chat usage, L2 is AI integrated into daily workflows, and L3 is autonomous delegation to AI agents. Most companies have employees stuck at L0–L1. The goal is to move everyone to at least L2.</p>

        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>Can small teams replicate Ramp's approach?</h3>
        <p>Absolutely. The principles are team-size agnostic. Start with pre-built skill kits instead of building custom tools, create a Slack channel for AI wins instead of a formal leaderboard, and remove budget friction. A team of 5 can hit 100% AI adoption faster than a company of 1,000 — you just need fewer "spokes" to drive it.</p>

        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>What's the difference between Claude Cowork Kit and the Team Adoption Kit?</h3>
        <p>The <Link href="/claude-cowork-kit" style={{ color: '#3B5FFF' }}>Cowork Kit</Link> is individual-focused — 50+ AI skills and prompt chains for Claude users. The <Link href="/team-adoption-kit" style={{ color: '#3B5FFF' }}>Team Adoption Kit</Link> is manager-focused — adoption playbooks, L0–L3 assessment templates, leaderboard templates, and department-specific onboarding. Use the Cowork Kit to upgrade individuals. Use the Team Kit to upgrade your entire organization.</p>

        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>Is it too late to start AI adoption in 2026?</h3>
        <p>No — but Ramp's first lesson applies: start now, not perfectly. The gap between AI-native teams and everyone else is widening fast. Every month you delay is a month your team falls further behind. The good news is that with pre-built kits and proven playbooks, you can compress months of trial-and-error into days.</p>

        <div style={{ background: '#111827', borderRadius: '12px', padding: '32px', margin: '40px 0', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 8px' }}>Your Team's AI Adoption Starts Here</p>
          <p style={{ color: '#9CA3AF', margin: '0 0 20px', fontSize: '15px' }}>Ramp had a dedicated AI team. You have us. Pre-built skills, adoption playbooks, and prompt kits — everything you need to go from L0 to L3.</p>
          <div>
            <a href={STRIPE_COWORK_KIT} data-cta="ramp-blog-cowork-bottom" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', margin: '6px' }}>
              Cowork Kit — $29
            </a>
            <a href={STRIPE_TEAM_KIT} data-cta="ramp-blog-team-bottom" style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '14px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', margin: '6px' }}>
              Team Kit — $49
            </a>
            <a href={STRIPE_BUNDLE} data-cta="ramp-blog-bundle-bottom" style={{ display: 'inline-block', background: '#10B981', color: '#fff', padding: '14px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', margin: '6px' }}>
              Full Bundle — $97 →
            </a>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>← More articles</Link>
          {' · '}
          <Link href="/" style={{ color: '#3B5FFF', textDecoration: 'none', fontSize: '14px' }}>Explore all tools →</Link>
        </p>
      </div>
    </Layout>
  );
}
