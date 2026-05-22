import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const STRIPE_AI_AUDIT = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

export default function IntuitLayoffsB2BRestructuring2026() {
  const title = "Intuit Cut 3,000 Jobs (17% of Staff). Here's What B2B Operators Should Actually Do in May 2026.";
  const description = "Intuit laid off 3,000 employees on May 20, 2026 — 17% of its 18,200-person workforce — and signed multi-year AI partnerships with Anthropic and OpenAI the same week. CEO Sasan Goodarzi insists 'none of it had to do with AI.' The Klarna and Salesforce precedents say otherwise. Here's the pattern across all three, and the 5-question framework B2B operators (VP People, Heads of Ops, Chiefs of Staff) should actually use in 2026.";
  const url = 'https://www.midastools.co/blog/intuit-3000-layoffs-b2b-ai-restructuring-2026';
  const datePublished = '2026-05-22';
  const dateModified = '2026-05-22';

  const lessons = [
    {
      n: 1,
      headline: 'Intuit cut 3,000 jobs on May 20, 2026 — 17% of its 18,200-person workforce.',
      claim: "On May 20, 2026, Intuit (the $190B-market-cap maker of TurboTax, QuickBooks, Credit Karma, and Mailchimp) cut 3,000 jobs — approximately 17% of its 18,200-person global headcount. CEO Sasan Goodarzi delivered the news in an internal memo on the same day Intuit released its Q3 FY26 earnings. The stated rationale in the memo: 'reducing complexity and simplifying our structure to become a faster, leaner, and more focused company.'",
      why: "17% is not a normal workforce adjustment — it's a top-decile cut. For comparison, Microsoft's much-discussed January 2023 layoff was about 5% of headcount. Salesforce's February 2025 round was approximately 1% (1,000 of ~76,000). Intuit's cut is 3-17x larger in proportion. The size signals a strategic re-org, not a rolling efficiency program.",
      action: "If you're a B2B operator reading announcements like this for signal, anchor on the percentage, not the absolute number. 17% means org-redesign; 1-3% usually means routine performance management with a marketing budget for the press release."
    },
    {
      n: 2,
      headline: '"None of it had to do with AI," the Intuit CEO told CNBC.',
      claim: "Sasan Goodarzi told CNBC's Jim Cramer on Mad Money: 'None of it had to do with AI. Everything was about how do we become more effective.' On the earnings call, he repeated: 'This was not about AI.' He told investors management had spent the prior year studying 'beyond the tools that we are putting in place across the company, what is actually the biggest blocker and what is getting in our way?'",
      why: "The denial is doing real work. AI-driven layoffs carry regulatory risk (WARN Act timing, state-level AI-bias disclosures) and PR risk (every reporter wants to write the 'CEO admitted AI replaced our staff' story). The cleanest legal posture is to frame the cut as org-design, not technology-displacement — even if the underlying decision is enabled by AI productivity gains. Notice what Goodarzi did NOT say: he didn't say AI had no role in making the new org viable.",
      action: "When you read an executive denial of AI involvement in workforce changes, listen for the asymmetric framing. 'We didn't lay people off BECAUSE of AI' is compatible with 'we couldn't run with this many people IF we hadn't built our AI capacity.' Both can be true. Don't trust the soundbite; read the org-design rationale in the memo."
    },
    {
      n: 3,
      headline: 'Intuit signed multi-year partnerships with Anthropic AND OpenAI the same week.',
      claim: "Within days of the layoff announcement, Intuit disclosed multi-year deals to integrate Anthropic's Claude models and OpenAI's GPT models across the TurboTax, QuickBooks, Credit Karma, and Mailchimp product lines. The deals are reported across HR Director, Layoffhedge, and Mirror Review as part of Intuit's 'AI restructuring' arc, even as the CEO publicly delinked the layoff from AI.",
      why: "Signing two frontier-model partnerships in the same news cycle as a 17% headcount cut is the strongest possible signal that org-design and AI investment are paired bets, regardless of the CEO's framing. Intuit is doing what every B2B SaaS leadership team is debating in 2026: trim middle layers, route the saved budget into model spend + AI-product engineering, and accept the press headline.",
      action: "If you're the VP People, Chief of Staff, or Head of Ops at a growing B2B SaaS, treat the Intuit move as the playbook your CEO is reading right now. Two questions to bring to your next planning meeting: (1) which roles in our current org will be re-shaped by Claude/GPT capability we'll have in 6-9 months? (2) what AI partnership budget would let us trim the 15-20% of headcount our CEO secretly thinks is replaceable?"
    },
    {
      n: 4,
      headline: 'Klarna already ran this play in 2024 — 853 agents replaced — then partially reversed.',
      claim: "Klarna CEO Sebastian Siemiatkowski announced in February 2024 that the company's OpenAI-powered assistant was doing the work of 700 customer service agents and had taken 75% of the company's chats (about 2.3 million conversations) in its first month. By early 2025 the number was 853 agents. Klarna's overall headcount went from 5,500 to 3,400 over the same period — a 38% workforce reduction. Then in mid-2025, Klarna reversed course. Siemiatkowski publicly acknowledged that the company had 'overestimated AI's capabilities and underappreciated the human aspects of service delivery' and began hiring human agents again under a hybrid model.",
      why: "This is the most-cited B2B AI-restructuring case study, and the hybrid reversal is the part most CEOs will quietly study. The lesson isn't 'AI doesn't work.' The lesson is: a 38% workforce cut bought into AI ahead of capability matured for nuanced cases produced a measurable quality drop in CX metrics, which then forced a corrective hire-back. Speed of the swing matters: Klarna moved faster than its operational systems could absorb.",
      action: "If your company is considering an Intuit-style restructure, pull the Klarna case from public reporting (CBS News, Customer Experience Dive, Entrepreneur, AI Business) and walk your exec team through the reversal arc. Build a quality-monitoring tripwire BEFORE you cut headcount, not after — net promoter score, complaint volume, time-to-resolution. If the tripwire triggers, you reverse before it shows up in retention numbers."
    },
    {
      n: 5,
      headline: 'Salesforce cut 1,000 jobs in February 2025 while hiring 2,000 to sell Agentforce.',
      claim: "In February 2025, Salesforce conducted its first mass layoff of the year — approximately 1,000 roles — months after CEO Marc Benioff announced plans to hire 2,000 new salespeople to sell Agentforce, Salesforce's autonomous AI-agent product. Agentforce had already been sold to 1,000 paying customers by December 2024 (including Disney, Saks, Wiley, and OpenTable) at $2 per agent interaction. Displaced workers were invited to apply for internal roles. Net effect: the company added headcount overall, but redistributed it — out of legacy support and ops, into AI-product sales.",
      why: "Salesforce's framing is the most strategically honest of the three. Benioff didn't deny AI involvement; he reframed the layoff as 'capacity reallocation' — same total headcount budget, redistributed from old workflows to AI distribution. This is exactly what Coase predicted (and what John Collison cited at Stripe Sessions 2026): firms are reorganizing their internal coordination toward AI-leveraged structures. Salesforce's model — cut + hire in adjacent skill — is what most CFOs will pitch on the next earnings call.",
      action: "If you're the operator inside a B2B SaaS, watch your finance team's planning deck for the phrase 'capacity reallocation.' That's the corporate-finance term for the Salesforce model. The honest version of your CEO's plan is probably: cut 10-15% of legacy roles, fund 10-15% growth in AI-adjacent roles, net zero on headcount. The displaced employees who survive transition are the ones who can credibly speak agent-capability."
    },
    {
      n: 6,
      headline: "The 2026 B2B AI-restructuring pattern: cut headcount, sign frontier-model partnerships, claim the two are unrelated.",
      claim: "Across Intuit (3,000 cut + Anthropic/OpenAI deals + 'not about AI'), Klarna (853 agents replaced + reversed), Salesforce (1,000 cut + 2,000 hired for Agentforce), and the broader cohort the Stripe Sessions 2026 data captured (575% YoY AI-revenue growth, 17x faster than global GDP), the same three-step pattern recurs: announce headcount reduction, simultaneously expand AI capacity (model partnerships, agent products, infrastructure), publicly frame the two decisions as independent. The press tracks the cut; the strategy is the pairing.",
      why: "Two things are true at once. (1) AI productivity gains are real — Stripe's data shows them ($371/mo top consumer wallet, 575% revenue growth, 24% jump in iOS releases after AI coding tools arrived). (2) Most companies are bolting AI onto existing org structures rather than redesigning around it, which is why headline productivity stats lag the technology by years (the Solow paradox John Collison invoked at Stripe Sessions). Companies that succeed at the redesign get the 10-30x productivity unlock. Companies that don't get the worst of both worlds: AI spend without the headcount-leverage payoff.",
      action: "If you're at a company doing layoffs and integrating AI in parallel, the question to bring to your manager isn't 'are we doing AI layoffs?' (which they will deny). It's 'what's our workflow-redesign plan, and where do I fit in it?' The Intuit-Klarna-Salesforce pattern says the people who survive these waves are the ones who proactively redesign their own role around AI capability — they don't wait for the org chart to do it for them."
    },
    {
      n: 7,
      headline: "The 5-question framework B2B operators should actually use in 2026.",
      claim: "If you're a VP People, Head of Operations, Chief of Staff, or solo SaaS founder reading the Intuit news and wondering how to respond inside your own company, work through these five questions before your next 1:1 with the CEO or board: (1) Which of our current workflows would be redesigned, not just sped up, by a Claude- or GPT-class model? (2) What does our 'cut + reallocate' ratio look like — are we trimming 15% to fund a 15% AI-adjacent hire, or just trimming? (3) Where is our Klarna tripwire — what quality metric tells us we cut too fast? (4) What's the framing our CEO needs to deliver: org-design rationale (Intuit), capacity reallocation (Salesforce), or hybrid model (Klarna v2)? (5) Who on our team is best positioned to lead the workflow-redesign work — not the AI-tool selection, the actual process rebuild?",
      why: "The five questions force the strategic conversation that the press headline obscures. They distinguish operators who are reacting to AI from operators who are designing for AI. The latter is who gets promoted in the 2026-2027 wave; the former is who gets restructured into the 2027 cohort of Intuit-style announcements.",
      action: "Before your next exec meeting, write down your honest answer to all five. Bring them to your CEO or board. If your CEO can't answer questions 2 and 4, you have a strategic gap to surface — politely, in writing, with the Intuit/Klarna/Salesforce examples as cover. (If you need template prompts for the redesign work itself — workflow audit, AI usage policy, 90-day rollout, pilot ROI scorecard, vendor evaluation — our AI Team Adoption Kit is the structured starting point we built for exactly this moment.)"
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: 'https://www.midastools.co/og-image.png',
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'Midas Tools',
      url: 'https://www.midastools.co'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Midas Tools',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.midastools.co/og-image.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Intuit 3,000 layoff lessons for B2B operators',
    itemListElement: lessons.map((l) => ({
      '@type': 'ListItem',
      position: l.n,
      name: l.headline,
      description: l.claim,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why did Intuit lay off 3,000 employees in May 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Intuit cut 3,000 jobs (17% of its 18,200-person workforce) on May 20, 2026. CEO Sasan Goodarzi's stated rationale in the internal memo was 'reducing complexity and simplifying our structure to become a faster, leaner, and more focused company.' On the earnings call and on CNBC's Mad Money, Goodarzi publicly denied that AI drove the decision, saying 'none of it had to do with AI' and 'everything was about how do we become more effective.' At the same time, Intuit signed multi-year partnerships with Anthropic and OpenAI to integrate frontier AI models across TurboTax, QuickBooks, Credit Karma, and Mailchimp."
        }
      },
      {
        '@type': 'Question',
        name: 'Did Intuit blame AI for the 3,000 layoffs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No — explicitly the opposite. CEO Sasan Goodarzi repeatedly denied AI involvement. On CNBC Mad Money he told Jim Cramer: 'None of it had to do with AI.' On the earnings call he said: 'This was not about AI.' Industry coverage (TechCrunch, The Register, CNBC) noted the denial alongside the simultaneous Anthropic and OpenAI partnership announcements, with several outlets treating the denial skeptically. The most defensible interpretation: AI didn't directly displace the 3,000 roles, but the AI capacity Intuit is building made the new leaner org structure viable."
        }
      },
      {
        '@type': 'Question',
        name: 'How does Intuit\'s 2026 restructuring compare to Klarna and Salesforce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Three different framings of the same underlying pattern. Klarna (2024-2025) cut its workforce from 5,500 to 3,400 (38% reduction) on the back of an OpenAI-powered assistant doing the work of 700-853 customer service agents — then reversed and began hiring humans back in 2025 after quality issues. Salesforce (Feb 2025) cut 1,000 jobs while simultaneously hiring 2,000 new salespeople to sell Agentforce, framing the move as 'capacity reallocation.' Intuit (May 2026) cut 17% of headcount and signed two frontier-model partnerships in the same week while publicly denying AI involvement. Pattern: cut headcount, expand AI capacity, frame the two as unrelated."
        }
      },
      {
        '@type': 'Question',
        name: 'What should B2B operators (VP People, Chief of Staff, Head of Ops) do in response?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Run the 5-question framework before your next exec or board meeting: (1) Which workflows would be redesigned, not just sped up, by Claude- or GPT-class models? (2) What's our cut-plus-reallocate ratio — are we trimming legacy roles and funding AI-adjacent hires, or just trimming? (3) Where's our Klarna tripwire — which quality metric tells us we cut too fast? (4) What public framing fits our culture: org-design rationale (Intuit), capacity reallocation (Salesforce), or hybrid model (Klarna v2)? (5) Who on our team is best positioned to lead workflow redesign — not AI-tool selection, the actual process rebuild? Write down answers in advance; bring them to your CEO with the Intuit/Klarna/Salesforce examples as cover."
        }
      },
      {
        '@type': 'Question',
        name: 'How can I tell if my company is planning an AI-driven restructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Watch for three concurrent signals in the next 6-12 months: (a) new multi-year contracts with Anthropic, OpenAI, Google, or other frontier-model providers — usually disclosed in press releases or 10-K filings; (b) finance-team language pivoting to 'capacity reallocation,' 'simplification,' 'organizational design,' or 'reducing complexity' in earnings calls or all-hands updates; (c) a sudden uptick in AI-adjacent open roles (AI engineer, AI product manager, AI ops lead, AI training data manager) coinciding with hiring freezes or reductions in legacy functions. Any one signal is noise; all three together is the pattern."
        }
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between AI-driven layoffs and AI-enabled simplification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The legal and PR distinction CEOs are leaning on in 2026 goes like this: an AI-driven layoff says 'we cut 3,000 jobs because AI replaced them' — which triggers WARN Act concerns, state-level AI-bias disclosure requirements, and the worst possible press framing. An AI-enabled simplification says 'we redesigned our org to be leaner and more focused; the AI tools we've been investing in make this new structure viable.' Both descriptions can be true of the same decision. The Intuit framing is the second — the AI capacity makes the leaner org possible, but the org redesign itself is the cause. Whether you find that framing honest or evasive is a judgment call; either way, it's the playbook every B2B SaaS executive team is reading right now."
        }
      },
      {
        '@type': 'Question',
        name: 'Where can I get prompts and tools for an AI rollout at my company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We built the AI Team Adoption Kit specifically for VP People, Chief of Staff, and Head of Ops roles tasked with leading an AI rollout. It includes a workflow-audit prompt, an AI usage policy template, a 90-day rollout plan, pilot ROI scorecard, vendor evaluation framework, and skeptical-staff talking points — all designed for Claude Opus 4.7 / GPT-5 / Gemini 3+ and ready to paste into your stack. For broader B2B prompt coverage (sales, marketing, content ops, financial reporting), the AI Prompt Mega Pack ($29) and All Kits Bundle ($97) are the lower-tier entry points. For a done-for-you workflow rebuild on a specific function, see the AI Clarity Assessment ($997)."
        }
      }
    ]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 80px', color: '#111827' }}>
        <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 8 }}>
          Published May 22, 2026 · Updated May 22, 2026 · 11-min read
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Intuit Cut 3,000 Jobs (17% of Staff). Here&apos;s What B2B Operators Should Actually Do in May 2026.
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.6, marginBottom: 24 }}>
          <strong>Intuit cut 3,000 employees on May 20, 2026 — 17% of its global workforce — and signed multi-year AI partnerships with Anthropic and OpenAI the same week.</strong>{' '}
          CEO Sasan Goodarzi insists the two decisions are unrelated. The pattern across Klarna and Salesforce
          in 2024-2025 says otherwise. Here&apos;s what&apos;s actually happening, and the 5-question framework
          B2B operators should bring to their next exec meeting.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.65, marginBottom: 24 }}>
          Why this story matters more than the average layoff press release: <strong>Intuit is a B2B SaaS bellwether</strong>.
          It serves 100M+ customers across TurboTax, QuickBooks, Credit Karma, and Mailchimp. When a $190B-market-cap
          software company cuts 17% of its workforce while signing two frontier-model partnerships in the same news
          cycle, every B2B SaaS leadership team in the Bay Area gets the deck on Monday. The 3,000 jobs are real;
          the pattern is the bigger story.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.65, marginBottom: 24 }}>
          We&apos;re writing this for the people who have to respond to the deck inside their own company in
          May-June 2026: <strong>VP People, Head of Operations, Chief of Staff, Director of Talent, solo SaaS
          founders running 5-50 person teams.</strong> The Intuit news isn&apos;t background context for these
          roles — it&apos;s the framing your CEO is going to use in the next planning meeting. Reading it before
          the meeting is the leverage.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 32, padding: '14px 16px', borderLeft: '3px solid #3B5FFF', background: '#F4F6FB', borderRadius: 6 }}>
          For the financial backdrop on why AI restructuring is happening this fast, see our companion piece <Link href="/blog/stripe-ai-economy-2026-data" style={{ color: '#3B5FFF' }}>Stripe&apos;s AI Economy Data 2026: 15 Numbers That Reframe Every Strategy Deck</Link> (AI-native companies on Stripe grew 575% YoY; the top consumer wallet is $371/month on AI products). For the agent-economy companion, see <Link href="/blog/agentic-commerce-stripe-2026" style={{ color: '#3B5FFF' }}>Agentic Commerce Is Here — 15 Signals From Stripe Sessions 2026</Link>.
        </p>

        <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

        {lessons.map((l) => (
          <section key={l.n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: 36, marginBottom: 12, lineHeight: 1.3 }}>
              {l.n}. {l.headline}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: 12, color: '#111827' }}>
              {l.claim}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: 12, color: '#374151' }}>
              <strong>Why it matters:</strong> {l.why}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#374151', margin: 0 }}>
              <strong>What to do:</strong> {l.action}
            </p>
          </section>
        ))}

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
          The Solow paradox in real time
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: 16 }}>
          John Collison invoked Robert Solow&apos;s productivity paradox at Stripe Sessions 2026: Edison lit
          Manhattan in 1882, but factory productivity barely moved for 30 years because plants were still
          designed around steam engines. AI gains, John argued, only appear after firms{' '}
          <em>rebuild workflows around AI</em>, not when they bolt AI tools onto existing processes. He suspects
          the gap won&apos;t take 30 years this time.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: 16 }}>
          Intuit&apos;s 17% cut, paired with two frontier-model partnerships, is the visible operational tax of
          this rebuild. The company is admitting (without saying so) that the old org chart can&apos;t metabolize
          the AI infrastructure it&apos;s buying. Klarna already learned this lesson the hard way and reversed.
          Salesforce learned it earlier and reframed. The companies that haven&apos;t learned it yet are the
          backlog of 2027 announcements.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
          What to do this week if you&apos;re a B2B operator
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: 16 }}>
          Three concrete actions before Friday:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: 1.75, color: '#374151', paddingLeft: 22, marginBottom: 24 }}>
          <li><strong>Map your own role&apos;s redesign vector.</strong> Write down the 5 workflows you spend the most time on. For each, write one sentence on how a Claude- or GPT-class model would change it. Bring the list to your next 1:1.</li>
          <li><strong>Identify your team&apos;s &quot;Klarna tripwire&quot; metric.</strong> What quality signal tells you the org cut too fast? Customer NPS, complaint volume, escalation rate, internal handoff latency. Establish a baseline this week so the tripwire exists before any restructure conversation starts.</li>
          <li><strong>Pre-write the framing.</strong> Read the Intuit, Klarna, Salesforce coverage linked below. Pick which of the three framings (org-design, capacity-reallocation, hybrid-model) fits your company culture. When your CEO opens the conversation, you&apos;re not improvising; you&apos;re selecting from a menu you&apos;ve already studied.</li>
        </ol>

        <div style={{ marginTop: 40, padding: '32px', background: '#111827', color: '#FFFFFF', borderRadius: 16 }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8, color: '#FFFFFF' }}>
            The tools we built for B2B AI rollouts
          </h3>
          <p style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 24, lineHeight: 1.6 }}>
            We made the <strong>AI Team Adoption Kit</strong> for exactly the VP People / Head of Ops / Chief of Staff
            role tasked with the post-Intuit-news rebuild — workflow audit, AI usage policy, 90-day rollout plan,
            pilot ROI scorecard, vendor evaluation framework, skeptical-staff talking points. The <strong>AI Prompt
            Mega Pack</strong> ($29) covers 145+ Claude Opus 4.7 / GPT-5 / Gemini 3 prompts across sales,
            marketing, content ops, and financial reporting — the underlying B2B workflows that
            need redesign first. The <strong>All Kits Bundle</strong> ($97) adds vertical packs for SaaS founders,
            freelancers, real estate, and small business ops.
          </p>
          <a
            href={STRIPE_MEGA_PACK}
            data-cta="intuit-layoffs-megapack"
            style={{ display: 'inline-block', background: '#3B5FFF', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginRight: 12, marginBottom: 8 }}
          >
            Get the Mega Pack — $29
          </a>
          <a
            href={STRIPE_BUNDLE}
            data-cta="intuit-layoffs-bundle"
            style={{ display: 'inline-block', background: '#FFFFFF', color: '#111827', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginRight: 12, marginBottom: 8 }}
          >
            All Kits Bundle — $97
          </a>
          <a
            href={STRIPE_AI_AUDIT}
            data-cta="intuit-layoffs-audit"
            style={{ display: 'inline-block', background: 'transparent', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid #FFFFFF' }}
          >
            AI Clarity Assessment — $997
          </a>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          Frequently asked questions
        </h2>
        {faqSchema.mainEntity.map((q, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{q.name}</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#374151', margin: 0 }}>
              {q.acceptedAnswer.text}
            </p>
          </div>
        ))}

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
          Sources &amp; related reading
        </h2>
        <ul style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#374151', paddingLeft: 20 }}>
          <li><a href="https://techcrunch.com/2026/05/20/intuit-to-lay-off-over-3000-employees-to-refocus-on-ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>TechCrunch (May 20, 2026)</a> — Intuit to lay off over 3,000 employees to refocus on AI. Primary source for the 17% / 3,000 / May 20 / 18,200 workforce figures.</li>
          <li><a href="https://www.cnbc.com/2026/05/20/intuit-ceo-says-companys-17percent-workforce-cut-had-nothing-to-do-with-ai.html" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>CNBC (May 20, 2026)</a> — Intuit CEO says company&apos;s 17% workforce cut had &apos;nothing to do with AI&apos;. Source for the Sasan Goodarzi denial quotes (Mad Money, earnings call).</li>
          <li><a href="https://www.theregister.com/saas/2026/05/21/intuit-axes-3000-without-blaming-ai/5243807" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>The Register (May 21, 2026)</a> — Intuit axes 3,000 without blaming AI. Skeptical industry coverage of the denial.</li>
          <li><a href="https://www.hcamag.com/us/specialization/transformation/intuit-slashes-staff-signs-deals-with-anthropic-and-open-ai/576021" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>HR Director (2026)</a> — Intuit slashes staff, signs deals with Anthropic and OpenAI. Source for the simultaneous multi-year AI partnership disclosure.</li>
          <li><a href="https://layoffhedge.com/company/intuit" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Layoffhedge (2026)</a> — Intuit Layoffs 2026: 3,000 Jobs Cut, 17% of Workforce as CEO Sasan Goodarzi Bets on Anthropic and OpenAI.</li>
          <li><a href="https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Entrepreneur</a> — Klarna Is Hiring Customer Service Agents After AI Couldn&apos;t Cut It on Calls. Klarna reversal coverage.</li>
          <li><a href="https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/805987/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Customer Experience Dive</a> — Klarna says its AI agent is doing the work of 853 employees. Source for the 853-agent figure.</li>
          <li><a href="https://openai.com/index/klarna/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>OpenAI Klarna case study</a> — Original AI-handles-700-agents announcement (Feb 2024).</li>
          <li><a href="https://www.cbsnews.com/news/klarna-ceo-ai-chatbot-replacing-workers-sebastian-siemiatkowski/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>CBS News</a> — Klarna CEO says AI can do the job of 700 workers. Sebastian Siemiatkowski direct interview.</li>
          <li><a href="https://www.salesforceben.com/salesforce-lays-off-over-1000-workers-to-make-room-for-ai-focused-roles/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Salesforce Ben (Feb 2025)</a> — Salesforce lays off over 1,000 workers to make room for AI-focused roles. Source for the 1,000 cut + 2,000 Agentforce hire model.</li>
          <li><Link href="/blog/stripe-ai-economy-2026-data" style={{ color: '#3B5FFF' }}>Stripe&apos;s AI Economy Data 2026: 15 Numbers That Reframe Every Strategy Deck</Link> — The financial backdrop. 575% YoY AI revenue growth on Stripe; $371/mo top consumer wallet.</li>
          <li><Link href="/blog/agentic-commerce-stripe-2026" style={{ color: '#3B5FFF' }}>Agentic Commerce Is Here — 15 Signals From Stripe Sessions 2026</Link> — The agent-economy companion piece.</li>
          <li><Link href="/blog/anthropic-spacex-claude-higher-limits-may-2026" style={{ color: '#3B5FFF' }}>Anthropic + SpaceX: Claude&apos;s new higher limits</Link> — Frontier-model capacity context.</li>
          <li><Link href="/blog/claude-opus-4-7-prompts-guide-2026" style={{ color: '#3B5FFF' }}>Claude Opus 4.7 prompts guide</Link> — Workflow-rebuild templates for the strongest reasoning model.</li>
          <li><Link href="/ai-audit" style={{ color: '#3B5FFF' }}>AI Clarity Assessment ($997)</Link> — Done-for-you workflow rebuild for B2B operators tasked with the Solow-paradox closure.</li>
        </ul>

        <p style={{ marginTop: 32, fontSize: 14, color: '#6B7280', lineHeight: 1.6, textAlign: 'center' }}>
          Last updated May 22, 2026. We refresh this page as Intuit&apos;s post-layoff AI integration plays out
          and as peer-company announcements provide new comparison points.
        </p>
      </article>
    </Layout>
  );
}
