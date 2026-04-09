import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_KIT = 'https://buy.stripe.com/28E3cu90jePn0mg7RUcMM0n';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const ROLES = [
  {
    id: 'marketing',
    label: 'Marketing Manager',
    icon: 'MK',
    color: '#3B5FFF',
    claudemd: `# CLAUDE.md — Marketing Manager

## Role
You are a senior marketing manager responsible for campaign strategy, content planning, competitive intelligence, and performance reporting.

## Rules
- Always cite data sources when referencing metrics
- Use our brand voice: professional but approachable, never corporate jargon
- Default to markdown tables for comparison data
- Flag any claims that need verification before publishing

## Workflows
- /campaign-brief [url] — Analyze a competitor's campaign and draft a brief for our response
- /content-calendar [month] — Generate a 30-day content calendar with topics, platforms, and CTAs
- /competitor-report [company] — Deep dive on a competitor's marketing strategy
- /email-sequence [goal] — Draft a 5-email nurture sequence for a specific conversion goal
- /performance-report [period] — Compile marketing KPIs into an executive summary`,
    globalInstructions: `When drafting content:
- Lead with the value proposition, not the feature
- Use the PAS framework (Problem → Agitation → Solution) for persuasive copy
- Include 1 data point per major claim
- Keep paragraphs under 3 sentences
- End every piece with a clear, single CTA`,
    samplePrompt: `Analyze our top 3 competitors' landing pages and create a comparison matrix covering:

1. Value proposition clarity (1-10 score with reasoning)
2. Social proof elements (testimonials, logos, stats)
3. CTA strategy (number, placement, copy)
4. Pricing transparency
5. Unique differentiators

Then recommend 3 specific changes we should make to our landing page based on what's working for them.

Format as a markdown table with a "Recommendations" section below.`,
  },
  {
    id: 'sales',
    label: 'Sales Rep / BDR',
    icon: 'SL',
    color: '#059669',
    claudemd: `# CLAUDE.md — Sales Rep / BDR

## Role
You are a senior sales development representative focused on outbound prospecting, lead qualification, proposal creation, and pipeline management.

## Rules
- Never use generic sales language ("touch base", "circle back", "synergize")
- Keep outreach emails under 120 words
- Always personalize with at least 2 prospect-specific details
- Proposals must include ROI calculations

## Workflows
- /research [company] — Deep research on a prospect company for personalized outreach
- /outreach [prospect_info] — Draft a 3-email outreach sequence with follow-ups
- /objection [objection] — Generate 3 response frameworks for a specific objection
- /proposal [deal_details] — Create a proposal with pricing, timeline, and ROI
- /pipeline-summary — Compile current pipeline status with next actions`,
    globalInstructions: `For all sales communications:
- Lead with the prospect's problem, not our product
- Use specific numbers instead of vague claims
- Include social proof from similar companies/industries
- Keep subject lines under 6 words
- Always end with a specific, low-friction CTA (not "let me know")`,
    samplePrompt: `Research this company and prepare outreach:

Company: [COMPANY NAME]
Website: [URL]
My product: [YOUR PRODUCT]
Target persona: [TITLE]

Create:
1. Company research summary (industry, size, recent news, challenges)
2. 3 personalized email drafts (different angles: pain point, social proof, direct)
3. LinkedIn connection request message
4. Follow-up sequence (day 3, day 7, day 14)
5. Likely objections and responses

Each email must reference something specific about their company.`,
  },
  {
    id: 'pm',
    label: 'Product Manager',
    icon: 'PM',
    color: '#8B5CF6',
    claudemd: `# CLAUDE.md — Product Manager

## Role
You are a senior product manager responsible for PRDs, user stories, sprint planning, feature prioritization, and stakeholder communication.

## Rules
- User stories must follow "As a [persona], I want [action], so that [outcome]"
- Acceptance criteria must be testable and specific
- Always consider edge cases and error states
- Prioritization must use a consistent framework (RICE, MoSCoW, or ICE)

## Workflows
- /prd [feature_description] — Generate a complete PRD from a feature idea
- /user-stories [epic] — Break an epic into user stories with acceptance criteria
- /sprint-plan [goals] — Create a sprint plan with story points and assignments
- /prioritize [features_list] — Score and rank features using RICE framework
- /release-notes [changes] — Write user-facing release notes from technical changes`,
    globalInstructions: `For all product documents:
- Start with the "why" before the "what"
- Include success metrics for every feature
- Consider technical feasibility alongside user value
- Use diagrams (described in text) for complex flows
- Flag dependencies and risks explicitly`,
    samplePrompt: `Write a PRD for this feature:

Feature: [DESCRIBE THE FEATURE]
Target user: [WHO IS THIS FOR]
Problem: [WHAT PROBLEM DOES IT SOLVE]

Include:
1. Executive summary (3 sentences max)
2. Problem statement with data/evidence
3. Proposed solution with user flow
4. User stories (5-8) with acceptance criteria
5. Success metrics (3-5 KPIs)
6. Technical considerations
7. Out of scope (what this is NOT)
8. Open questions
9. Timeline estimate (T-shirt sizing)`,
  },
  {
    id: 'founder',
    label: 'Executive / Founder',
    icon: 'EX',
    color: '#DC2626',
    claudemd: `# CLAUDE.md — Executive / Founder

## Role
You are a chief of staff to a startup founder, responsible for strategic analysis, investor communications, team briefings, and operational efficiency.

## Rules
- Recommendations must include trade-offs and risk assessment
- Always provide 2-3 options with a clear recommendation
- Use data to support every strategic claim
- Keep executive summaries under 200 words
- Flag decisions that are reversible vs. irreversible

## Workflows
- /weekly-briefing — Compile this week's key metrics, wins, blockers, and priorities
- /investor-update [month] — Draft a monthly investor update email
- /strategic-memo [topic] — Write a structured analysis of a strategic decision
- /meeting-prep [topic] [attendees] — Prepare talking points, agenda, and background docs
- /decision-framework [decision] — Structure a decision with options, criteria, and recommendation`,
    globalInstructions: `For all executive communications:
- Use the Minto Pyramid: conclusion first, then supporting evidence
- Quantify impact in terms of revenue, time, or user metrics
- Distinguish between facts, assumptions, and opinions
- Keep slides to 1 idea per page
- Always include "So what?" and "Now what?" sections`,
    samplePrompt: `I need to decide: [DESCRIBE YOUR DECISION]

Create a decision framework with:
1. Clear framing of the decision and why it matters now
2. 3 options (including "do nothing")
3. Evaluation criteria (5 max, weighted by importance)
4. Scorecard for each option
5. Risk analysis for top 2 options
6. My recommendation with reasoning
7. Implementation plan for recommended option
8. Reversal plan if it doesn't work

Be direct. Tell me what to do and why.`,
  },
  {
    id: 'support',
    label: 'Customer Support',
    icon: 'CS',
    color: '#F59E0B',
    claudemd: `# CLAUDE.md — Customer Support Lead

## Role
You are a senior customer support manager responsible for ticket triage, response quality, escalation workflows, and customer satisfaction analysis.

## Rules
- Always acknowledge the customer's frustration before problem-solving
- Response tone: warm, competent, never robotic
- Include specific next steps with timelines
- Escalate if: involves billing disputes > $100, legal threats, or data privacy

## Workflows
- /triage [ticket] — Categorize, prioritize, and suggest response for a support ticket
- /respond [ticket] [context] — Draft a customer response with the right tone and detail
- /escalate [issue] — Create escalation brief for management
- /faq-gen [topic] — Generate FAQ entries from common ticket patterns
- /csat-report [period] — Analyze satisfaction scores and identify improvement areas`,
    globalInstructions: `For all customer communications:
- Use the customer's name
- Mirror their language level (technical/non-technical)
- Provide step-by-step instructions with numbers
- Offer a workaround even if the full fix takes time
- Close with a specific check-in ("I'll follow up Thursday at 2pm")`,
    samplePrompt: `A customer sent this ticket:

"[PASTE CUSTOMER MESSAGE HERE]"

Create:
1. Ticket triage: category, priority (P1-P4), estimated resolution time
2. Root cause analysis (what likely happened)
3. Draft response (empathetic, solution-focused)
4. Internal notes (what to investigate, who to loop in)
5. Follow-up template for after resolution
6. FAQ entry if this is a recurring issue`,
  },
  {
    id: 'ops',
    label: 'Operations Manager',
    icon: 'OP',
    color: '#0EA5E9',
    claudemd: `# CLAUDE.md — Operations Manager

## Role
You are a senior operations manager responsible for process optimization, SOP creation, vendor management, and capacity planning.

## Rules
- SOPs must be testable by someone with no context
- Always include time estimates for each step
- Vendor comparisons must use consistent criteria
- Flag single points of failure in any process

## Workflows
- /sop [process] — Create a standard operating procedure from a process description
- /process-audit [workflow] — Identify bottlenecks and improvement opportunities
- /vendor-compare [category] — Build a comparison matrix for vendor evaluation
- /capacity-plan [team] [period] — Model capacity needs based on growth projections
- /postmortem [incident] — Write a blameless incident postmortem`,
    globalInstructions: `For all operations documents:
- Number every step sequentially
- Include "If X, then Y" decision points
- Specify who is responsible for each step (RACI)
- Add time estimates and SLA targets
- Include a "Common mistakes" section at the end`,
    samplePrompt: `Create an SOP for this process:

Process: [DESCRIBE THE PROCESS]
Team: [WHO DOES THIS]
Frequency: [HOW OFTEN]
Current pain points: [WHAT'S NOT WORKING]

Include:
1. Purpose and scope
2. Prerequisites and tools needed
3. Step-by-step procedure with time estimates
4. Decision points and escalation paths
5. Quality checks and validation steps
6. Common mistakes and how to avoid them
7. Metrics to track (efficiency, error rate)
8. Review schedule (when to update this SOP)`,
  },
];

export default function CoworkSetupWizard() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const role = ROLES.find(r => r.id === selectedRole);

  return (
    <Layout>
      <Head>
        <title>Claude Cowork Setup Wizard — Free CLAUDE.md Generator | Midas Tools</title>
        <meta name="description" content="Free Claude Cowork setup wizard. Generate role-specific CLAUDE.md files, global instructions, and starter prompts. Pick your role, copy, paste, deploy." />
        <meta property="og:title" content="Claude Cowork Setup Wizard — Free CLAUDE.md Generator" />
        <meta property="og:description" content="Set up Claude Cowork in 5 minutes. Free CLAUDE.md templates, global instructions, and starter prompts for 6 roles." />
        <meta property="og:url" content="https://midastools.co/cowork-setup-wizard" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Claude Cowork Setup Wizard",
          "description": "Free Claude Cowork CLAUDE.md generator with role-specific templates and prompts",
          "url": "https://midastools.co/cowork-setup-wizard",
          "applicationCategory": "Productivity",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "operatingSystem": "Web"
        })}} />
      </Head>

      <style>{`
        .cw-page { max-width: 860px; margin: 0 auto; padding: 80px 24px 64px; }
        .cw-h1 { font-size: clamp(28px, 4.5vw, 44px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 12px; }
        .cw-h1 span { color: var(--accent); }
        .cw-sub { font-size: 18px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; max-width: 600px; }
        .cw-roles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 40px; }
        .cw-role-btn {
          padding: 20px 16px; border-radius: 12px; border: 2px solid var(--border);
          background: var(--bg); cursor: pointer; text-align: center; transition: all 0.2s;
        }
        .cw-role-btn:hover { border-color: var(--text-tertiary); transform: translateY(-2px); }
        .cw-role-btn.active { border-color: var(--accent); background: #f0f4ff; }
        .cw-role-icon { width: 40px; height: 40px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; color: white; margin-bottom: 8px; }
        .cw-role-label { font-size: 14px; font-weight: 700; color: var(--text); }
        .cw-output { margin-bottom: 32px; }
        .cw-output-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .cw-output-title { font-size: 16px; font-weight: 700; color: var(--text); }
        .cw-copy-btn {
          padding: 6px 16px; border-radius: 100px; border: 1px solid var(--border);
          background: var(--bg); cursor: pointer; font-size: 13px; font-weight: 600;
          color: var(--text-secondary); transition: all 0.2s;
        }
        .cw-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
        .cw-copy-btn.copied { background: var(--accent); color: white; border-color: var(--accent); }
        .cw-code {
          background: #1a1a2e; color: #e0e0e0; border-radius: 12px; padding: 20px;
          font-family: 'SF Mono', 'Fira Code', monospace; font-size: 13px; line-height: 1.7;
          overflow-x: auto; white-space: pre-wrap; word-break: break-word;
        }
        .cw-upsell {
          background: var(--surface); border: 2px solid var(--accent); border-radius: 16px;
          padding: 32px; text-align: center; margin-top: 48px;
        }
        .cw-upsell h3 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
        .cw-upsell p { color: var(--text-secondary); margin-bottom: 20px; font-size: 15px; }
        .cw-upsell-cta {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          border-radius: 100px; background: var(--accent); color: white;
          font-weight: 700; font-size: 15px; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cw-upsell-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .cw-free-label { display: inline-block; background: #22c55e; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
        @media (max-width: 640px) {
          .cw-roles { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="cw-page">
        <div className="cw-free-label">FREE TOOL</div>
        <h1 className="cw-h1">Claude Cowork <span>Setup Wizard</span></h1>
        <p className="cw-sub">
          Pick your role. Get a ready-to-use CLAUDE.md file, global instructions,
          and a starter prompt. Copy, paste into your project, and go.
        </p>

        <div className="cw-roles">
          {ROLES.map(r => (
            <button
              key={r.id}
              className={`cw-role-btn ${selectedRole === r.id ? 'active' : ''}`}
              onClick={() => setSelectedRole(r.id)}
            >
              <div className="cw-role-icon" style={{ background: r.color }}>{r.icon}</div>
              <div className="cw-role-label">{r.label}</div>
            </button>
          ))}
        </div>

        {role && (
          <>
            <div className="cw-output">
              <div className="cw-output-header">
                <div className="cw-output-title">CLAUDE.md — {role.label}</div>
                <button
                  className={`cw-copy-btn ${copied === 'claudemd' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(role.claudemd, 'claudemd')}
                >
                  {copied === 'claudemd' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="cw-code">{role.claudemd}</div>
            </div>

            <div className="cw-output">
              <div className="cw-output-header">
                <div className="cw-output-title">Global Instructions</div>
                <button
                  className={`cw-copy-btn ${copied === 'global' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(role.globalInstructions, 'global')}
                >
                  {copied === 'global' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="cw-code">{role.globalInstructions}</div>
            </div>

            <div className="cw-output">
              <div className="cw-output-header">
                <div className="cw-output-title">Starter Prompt — Try This First</div>
                <button
                  className={`cw-copy-btn ${copied === 'prompt' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(role.samplePrompt, 'prompt')}
                >
                  {copied === 'prompt' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="cw-code">{role.samplePrompt}</div>
            </div>
          </>
        )}

        {!role && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-secondary)' }}>
            Select a role above to generate your Claude Cowork setup files.
          </div>
        )}

        <div className="cw-upsell">
          <h3>Want all 10 roles + 115 prompts?</h3>
          <p>
            This free tool gives you 6 roles with 1 prompt each. The full Claude Cowork Mastery Kit
            includes 10 role playbooks, 50 workflow prompts, 5 CLAUDE.md templates, 5 connector
            cheatsheets, and a complete setup guide.
          </p>
          <a href={STRIPE_KIT} className="cw-upsell-cta">Get the Full Kit — $29</a>
          <div style={{ marginTop: 12 }}>
            <Link href="/claude-cowork-kit" style={{ fontSize: 14, color: 'var(--text-secondary)' }}>See everything included</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}