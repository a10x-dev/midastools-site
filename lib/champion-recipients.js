// MidasTools "AI Champion" — per-buyer personalized kit + survey system.
//
// Each entry maps a URL token (the slug in /champion/<token>) to a recipient
// profile that drives:
//   1. The personalized intro on /champion/<token>
//   2. Which prompt pack from lib/champion-prompts.js renders inline
//   3. The competitive 1-pager context (peers list)
//   4. The survey questions (most are shared; some are pack-specific)
//   5. The notification email sent to Armando on survey submit
//
// To onboard a new buyer:
//   1. Add an entry below with a readable token (kebab-case-name-company)
//   2. Confirm the pack_id exists in lib/champion-prompts.js (or add a new pack)
//   3. Send them the URL https://www.midastools.co/champion/<token>
//
// Tokens are obscurity-by-readability; they are NOT secrets. Don't put
// anything in the profile you wouldn't put in a personalized email.

export const RECIPIENTS = {
  'vittoria-juniper-square': {
    name: 'Vittoria',
    full_name: 'Vittoria Reimers',
    company: 'Juniper Square',
    company_employees: 865,
    role: 'VP, People',
    pack_id: 'pe-fund-admin',
    podcast: {
      title: 'Lean In',
      host: 'Tommy Hansen',
      topic: 'AI in Business Transformation',
    },
    company_context: {
      industry: 'Private markets fund administration',
      stage: 'Series D, $1.1B valuation (June 2025)',
      ai_product: 'JunieAI (agentic platform for LP comms, document extraction, accounting exception flagging) + AI CRM for investor relations (Oct 2025)',
      ceo: 'Alex Robinson',
      ceo_thesis: '"Einstein as your intern" — LLMs are powerful but naive; vendor job is glue between LLMs and customer workflows',
      customers: 'GPs in CRE, PE, VC, private credit, wealth advisors',
      scale: '2,100+ GPs, 40,000+ funds, 700,000 LP accounts, ~$1T LP capital',
    },
    competitive_peers: [
      { name: 'Allvue Systems', signal: 'Most aggressive AI competitor — shipped Agentic AI Platform (May 2025), Andi for Fund Accounting, Agentic AI Capital Operating Model with RSM (May 2026)' },
      { name: 'Anduin Transactions', signal: 'Instant Extraction (Apr 2026, OCR sub-docs → structured) + ACA AML/KYC partnership (Jan 2026); $255B raised across 1,305 funds' },
      { name: 'Carta', signal: 'Cap table → fund admin expansion + LP portal AI features' },
      { name: 'DealCloud (Intapp)', signal: 'Relationship intelligence + AI agents for deal sourcing' },
      { name: 'eFront (BlackRock)', signal: 'Incumbent; AI roadmap quiet publicly' },
    ],
    competitive_brief: {
      title: 'Fund-Admin AI Landscape — How Allvue, Anduin & Carta Are Positioning (and How Juniper Square Wins the Adoption Story)',
      summary: '95% of PE firms plan to increase AI investment in next 18 months (WEF). 70% cite manual workflows as top operational pain (Allvue 2026 GP Outlook). Your peers are shipping fast. Your edge isn’t the AI — it’s how your people use it.',
      moves: [
        {
          competitor: 'Allvue Systems',
          their_play: 'Agentic AI Platform (May 2025) → Andi for Fund Accounting → Agentic AI Capital Operating Model with RSM (May 2026). Most aggressive ship-cadence in the category.',
          your_counter: 'They are out-shipping on tooling. Your counter is the people layer — a documented champion program + measured pilot ROI scorecard beats vendor-led adoption every time. GPs who already use Juniper Square don’t want another vendor; they want their existing platform to work end-to-end with trained staff behind it.',
        },
        {
          competitor: 'Anduin Transactions',
          their_play: 'Instant Extraction (Apr 2026, OCR sub-docs → structured data) + ACA AML/KYC partnership (Jan 2026). $255B raised across 1,305 funds.',
          your_counter: 'Their wedge is the sub-doc workflow specifically. JunieAI already covers document term extraction broadly — your story is full-lifecycle, not point-solution. The People-side proof is internal adoption rate: if X% of your fund-admin staff use JunieAI on sub-docs weekly, that’s the GP-facing reference moat.',
        },
        {
          competitor: 'Carta',
          their_play: 'Cap table → fund admin expansion + LP portal AI features. Brand pressure from below.',
          your_counter: 'Carta has the brand but the institutional buyer skepticism on data sovereignty + private-markets-specific workflows is real. Your moat is depth in PE/CRE/credit-specific compliance + an internal AI champion network that GPs can reference as proof you sweat the rollout, not just the launch.',
        },
        {
          competitor: 'DealCloud (Intapp) + eFront (BlackRock)',
          their_play: 'Incumbents. DealCloud quietly shipping relationship-intel AI agents. eFront publicly quiet on AI roadmap.',
          your_counter: 'Both are over-indexed on top-of-funnel deal sourcing or back-office accounting. JunieAI’s LP-comms + IR CRM combo is a flank, not a frontal — and the People rollout story (yours) is where switching costs get built.',
        },
      ],
      strategic_implication: 'The platform race is won by whichever vendor has the highest paid-seat utilization 18 months out. Tooling parity is reached fast. Adoption velocity is not. Your job — VP People owning the rollout — is the single biggest determinant of whether JunieAI sticks at 865 employees AND becomes the GP-reference customers cite when peers ask "did the AI actually work?"',
      sources: 'Allvue 2026 GP Outlook · WEF AI Investment Survey 2026 · PRNewswire (Juniper Square Series D, June 2025; AI CRM launch, Oct 2025) · Allvue / Anduin / Carta / Intapp / BlackRock company press 2025-2026 · Alt Goes Mainstream Ep 167 (Alex Robinson).',
    },
    custom_intro_pretitle: 'Hand-built for Vittoria @ Juniper Square',
    custom_intro_subhead: 'Heard your Lean In podcast on AI in Business Transformation. You’re rolling AI to 865 people while Juniper Square scales JunieAI. Here’s the playbook — calibrated for private markets, VP People-grade.',
    survey_title: 'Help us calibrate next month’s drop',
    survey_intro: 'Three months of your context, distilled into 7 questions. We use this to build the monthly drops that ship to your inbox — not generic AI tips, but the next thing your team actually needs.',
    notify_to: 'iam+champion-vittoria@armando.mx',
  },
};

export function getRecipient(token) {
  if (!token || typeof token !== 'string') return null;
  return RECIPIENTS[token.toLowerCase()] || null;
}

export function listRecipientTokens() {
  return Object.keys(RECIPIENTS);
}
