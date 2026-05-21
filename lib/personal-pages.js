// Personal landing pages — one per cold-outreach prospect.
//
// Each entry generates a unique URL at /p/{slug} with:
// - Personalized hero ("Hi {firstName},")
// - "Why I built this for you" reasoning tied to their actual role
// - 5 hand-picked prompts from the All Kits Bundle that match their domain
// - Stripe checkout with prefilled email + UTM-tagged source
// - Reply CTA to replies@midastools.co for the inbound webhook
//
// Pages are statically generated at build time. Adding/removing an entry
// requires a redeploy. All Stripe links use the $97 All Kits Bundle plink
// per .founder/MEMORY.md (plink_1TDwTmAdkDx8xZMkmxB9yn55).
//
// SLUGS MUST be url-safe lowercase. firstName is what's rendered in the hero.

const ALL_KITS_BUNDLE_STRIPE = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';

export const PERSONAL_PAGES = {
  'donnie-wooten': {
    slug: 'donnie-wooten',
    firstName: 'Donnie',
    fullName: 'Donnie Wooten',
    role: 'Senior Director, Information Technology & Operations',
    company: 'Hearst Television',
    linkedinUrl: 'https://www.linkedin.com/in/donnie-wooten-228968280/',
    sourceMemo: 'Found via Firecrawl /v2/search 2026-05-05; persona match to Shantae Clinton (Director IT End User Experience, Dotdash Meredith)',
    whyThisFits:
      "You lead IT & Operations at Hearst Television — onboarding/offboarding, network infrastructure, PC standardization, broadcast production. Every one of those workflows generates repetitive policy docs, runbooks, vendor comms, and ticket-response writing. The bundle below has kits specifically tuned to compress that surface.",
    pickedPrompts: [
      {
        title: 'IT Vendor RFP Response Drafter',
        kit: 'Email & Marketing Kit',
        body: 'You are a senior IT operations leader writing a vendor RFP response. The vendor is asking about [TOPIC]. Draft a 5-paragraph response that: (1) confirms scope, (2) flags 2 risks honestly, (3) references our existing standards (PC standardization, network compliance), (4) lists 3 mitigations, (5) ends with the next-step ask. Tone: confident, factual, no hedging.',
      },
      {
        title: 'Onboarding Runbook Generator',
        kit: 'Operations Kit',
        body: 'You are creating a Day-1 IT onboarding runbook for a new hire in [ROLE] at [DEPARTMENT]. List the 12 steps in chronological order, each with: (a) who owns it (IT/HR/Manager), (b) target SLA, (c) one common failure mode + fix. End with a 3-question "Day-1 health check" the new hire should be able to answer.',
      },
      {
        title: 'Broadcast Production Incident Post-Mortem',
        kit: 'Operations Kit',
        body: 'Generate a post-incident review for a broadcast production outage. Inputs: [TIMELINE], [SYSTEMS_AFFECTED], [DURATION], [VIEWER_IMPACT]. Output: (1) timeline with PT/UTC, (2) root cause (3-sentences max), (3) what went well, (4) what went wrong, (5) 5 specific action items with owners + dates, (6) follow-up review date. No blame language.',
      },
      {
        title: 'Policy Update Comms (to non-tech employees)',
        kit: 'Email & Marketing Kit',
        body: 'Draft a company-wide email announcing a new IT policy: [POLICY]. Audience: non-technical employees who treat IT comms as noise. Hook: lead with what they can do less of, not more. Limit jargon. End with single deadline + single action. Subject line: under 60 chars, no fear-words.',
      },
      {
        title: 'Quarterly IT Roadmap to Exec Team',
        kit: 'Saas Founder Kit',
        body: 'You are presenting Q3 IT priorities to the executive team. Audience cares about: (a) revenue protection, (b) compliance posture, (c) employee productivity. Output 1 slide of bullet copy: 3 priorities, each with the ONE business-language outcome metric (no "uptime %" — translate to revenue-day-equivalent). End with one ask: budget, headcount, or political support.',
      },
    ],
  },

  'frank-lodestro': {
    slug: 'frank-lodestro',
    firstName: 'Frank',
    fullName: 'Frank LoDestro',
    role: 'Director, Information Technology Compliance Management',
    company: 'Hearst',
    linkedinUrl: 'https://www.linkedin.com/in/frank-lodestro-418ab6259',
    sourceMemo: 'Found via Firecrawl /v2/search 2026-05-05; Hearst corporate IT compliance, NYC metro',
    whyThisFits:
      "You run IT compliance at Hearst — that means audit response narratives, vendor risk write-ups, control documentation, and SOC/SOX/etc evidence packets. Every one of those is a high-volume writing task with templated structure. The bundle below has 5 prompts specifically tuned to that surface.",
    pickedPrompts: [
      {
        title: 'SOC 2 Control Evidence Narrative',
        kit: 'Operations Kit',
        body: 'You are documenting evidence for SOC 2 control [CONTROL_ID]. Inputs: [WHAT_THE_CONTROL_REQUIRES], [HOW_WE_DO_IT], [WHO_OWNS_IT]. Output a 4-paragraph narrative: (1) control intent, (2) our process, (3) who reviews + cadence, (4) where the audit can find evidence (system + path). Tone: factual, audit-ready, no hedging.',
      },
      {
        title: 'Vendor Risk Assessment Summary',
        kit: 'Operations Kit',
        body: 'Summarize the risk profile of vendor [NAME], who provides [SERVICE]. Inputs: [SOC2_STATUS], [DATA_TYPES_HANDLED], [GEO]. Output: (1) data flow in 3 sentences, (2) top 3 risks, (3) top 3 mitigations, (4) red-yellow-green recommendation for procurement. Length: under 350 words.',
      },
      {
        title: 'Audit Response Draft (regulator)',
        kit: 'Email & Marketing Kit',
        body: 'Draft a response to a regulator request asking about our [TOPIC]. Inputs: [REGULATOR], [SPECIFIC_QUESTION], [INTERNAL_TRUTH]. Output: 3 paragraphs. (1) Acknowledge the question precisely. (2) State our position with 2 specific facts. (3) Offer next-step (additional docs / call). Avoid corporate hedging — regulators read it as obfuscation.',
      },
      {
        title: 'Policy Exception Justification',
        kit: 'Operations Kit',
        body: 'Document the justification for granting an exception to [POLICY] for [USE_CASE]. Inputs: [BUSINESS_NEED], [COMPENSATING_CONTROL], [REVIEW_DATE]. Output: 5 sentences max. Include: who approved, why business outcome > policy intent here, what compensating control protects against the original risk, when the exception expires, who reviews next.',
      },
      {
        title: 'Compliance Training Reminder (to engineers)',
        kit: 'Email & Marketing Kit',
        body: 'Engineers ignore compliance training emails. Write one they will actually read. Topic: [TRAINING]. Hook: lead with one concrete production incident (real or anonymized) where this knowledge mattered. Length: under 120 words. Subject line: a question, not a command. End with the one-click link.',
      },
    ],
  },

  'kris-smith': {
    slug: 'kris-smith',
    firstName: 'Kris',
    fullName: 'Kris Smith',
    role: 'Vice President, Identity & Collaboration (formerly Sr Director IT)',
    company: 'Hearst Technology',
    linkedinUrl: 'https://www.linkedin.com/in/krisasmith',
    sourceMemo: 'Found via Firecrawl /v2/search 2026-05-05; promoted from Sr Director IT to VP Sep 2023',
    whyThisFits:
      "You lead Identity & Collaboration at Hearst Technology — IAM rollouts, SSO migrations, Slack/Teams governance, change management to 20K+ users. Identity changes touch every employee, which means a LOT of policy-comms writing. The bundle below has prompts specifically for that comms-at-scale surface.",
    pickedPrompts: [
      {
        title: 'IAM Migration Announcement (to all employees)',
        kit: 'Email & Marketing Kit',
        body: 'Announce an IAM migration to ~20,000 employees who do not care about identity protocols. Inputs: [WHAT_CHANGES_FOR_THEM], [DATE], [WHAT_BREAKS_IF_THEY_IGNORE]. Output: 5-paragraph email. Hook: "What you need to do, in one sentence." Then: when, how (3 steps max), what to do if it breaks, who to contact. No mention of OAuth/SAML/SSO acronyms unless absolutely required.',
      },
      {
        title: 'SSO Vendor Evaluation Summary',
        kit: 'Operations Kit',
        body: 'You evaluated 3 SSO vendors: [VENDOR_A], [VENDOR_B], [VENDOR_C]. Output a 1-page exec summary: (1) need in 2 sentences, (2) vendor table with 4 columns: cost / integration time / 1-year TCO / our team\'s ranking, (3) recommendation with 2-sentence rationale, (4) decision date + decision-makers. No marketing fluff from the vendor sites.',
      },
      {
        title: 'MFA Rollout Comms Sequence (3-email)',
        kit: 'Email & Marketing Kit',
        body: 'Design a 3-email sequence rolling out MFA. Email 1 (T-14d): why + what to expect. Email 2 (T-3d): your action item, in one sentence. Email 3 (T-0): "today is the day, here is the link." Each email under 100 words. Subject lines: progressively urgent, never alarmist. End with a single one-click link.',
      },
      {
        title: 'Slack/Teams Governance Policy (1-page)',
        kit: 'Operations Kit',
        body: 'Write a 1-page Slack/Teams governance policy that humans will actually read. Inputs: [DATA_RETENTION], [WHO_CAN_CREATE_CHANNELS], [GUEST_RULES]. Output: 5 numbered sections, each with: (a) the rule in one sentence, (b) the rationale in one sentence, (c) what the consequence is if violated. No legalese.',
      },
      {
        title: 'IT Exec One-Pager (board)',
        kit: 'Saas Founder Kit',
        body: 'Prepare a 1-page IT update for the board. Inputs: [LAST_QUARTER_WINS], [LAST_QUARTER_INCIDENTS], [Q3_PRIORITIES]. Output: 4 sections (wins, incidents, priorities, ask). Wins stated as business outcomes (revenue protected, employee hours saved, audit findings closed). Incidents include root cause + status, not blame. Priorities link to revenue/risk. End with one ask: budget, hiring slot, or political support.',
      },
    ],
  },

  'alexander-sage': {
    slug: 'alexander-sage',
    firstName: 'Alexander',
    fullName: 'Alexander Sage',
    role: 'Director, IT',
    company: 'Penske Media Corporation',
    linkedinUrl: 'https://www.linkedin.com/in/alexander-sage-06b15429',
    sourceMemo: 'Found via Firecrawl /v2/search 2026-05-05; Penske portfolio includes Variety, Rolling Stone, Billboard, Hollywood Reporter, Deadline, IndieWire, Robb Report — IT supports all of them on shared backbone',
    whyThisFits:
      "You run IT for one of the largest privately-held US publishers — Variety, Rolling Stone, Billboard, Hollywood Reporter and a dozen more brands all running on a shared backbone. Multi-brand editorial support, traveling reporters, breaking-news IT response, vendor consolidation — that's a wide writing surface. The bundle below has 5 prompts specifically tuned to portfolio-publisher IT work.",
    pickedPrompts: [
      {
        title: 'Multi-Brand IT Vendor Consolidation Memo',
        kit: 'Saas Founder Kit',
        body: 'You are recommending consolidation of duplicate vendors across [N] brands at a portfolio publisher. Inputs: [VENDOR_CATEGORY] (e.g., DAM, video transcode, freelancer payouts), [CURRENT_VENDORS] across brands, [PROPOSED_SINGLE_VENDOR]. Output: 1-page memo to executives. (1) Annual cost differential (current vs consolidated). (2) 3 risks of moving (operational, contractual, brand-political). (3) Mitigations. (4) Migration timeline by brand. (5) The one ask (budget approval, brand-political support, deadline).',
      },
      {
        title: 'Breaking-News IT Incident Comms (to editorial)',
        kit: 'Email & Marketing Kit',
        body: 'A CMS / publishing-system / live-blog tool just broke during a breaking news cycle. Editors are panicking. Write the IT comms message. Inputs: [WHAT_BROKE], [IMPACT_PER_BRAND], [ETA]. Output: 4-sentence Slack/email. (1) What is broken in plain English. (2) Workaround they can use NOW (cite a specific tool or path). (3) ETA on real fix. (4) Single point of contact. No tech-jargon, no apologies-paragraph, no "we are investigating."',
      },
      {
        title: 'Editor Onboarding Across Brands (cross-brand IT runbook)',
        kit: 'Operations Kit',
        body: 'A new editor is joining at brand [BRAND_A] but will also need access to shared portfolio tools (analytics, DAM, video, freelancer mgmt). Generate a Day-1 IT onboarding runbook. Inputs: [BRAND], [ROLE], [BRAND_SPECIFIC_TOOLS], [PORTFOLIO_TOOLS]. Output: 14-step checklist with owner + SLA per step. End with a "Day-1 health check" the editor should be able to confirm.',
      },
      {
        title: 'CMS / Publishing-System Outage Post-Mortem',
        kit: 'Operations Kit',
        body: 'Generate a post-mortem for a CMS outage at [BRAND]. Inputs: [TIMELINE], [PUBLISHING_IMPACT] (stories blocked, SLA breaches, traffic loss), [ROOT_CAUSE], [ACTIONS]. Output: (1) brand-impact in 3 sentences, (2) timeline UTC, (3) root cause 2-sentences max, (4) what worked, (5) what failed, (6) 5 specific action items with owners + dates, (7) follow-up review. No blame language; editorial reads these.',
      },
      {
        title: 'IT Update to Portfolio Brand Publishers (1-pager)',
        kit: 'Saas Founder Kit',
        body: 'Quarterly IT update going to publishers/GMs of all [N] portfolio brands. Each cares about their own P&L, not corporate IT. Output a 4-section 1-pager: (1) wins translated per-brand (uptime, traffic protected, editor-hours saved by brand), (2) incidents with brand-by-brand impact + status, (3) Q3 priorities each scored against revenue / risk / editorial productivity, (4) the one ask per brand publisher. Tone: peer-to-peer, not IT-explaining-to-business.',
      },
    ],
  },

  'brian-lee': {
    slug: 'brian-lee',
    firstName: 'Brian',
    fullName: 'Brian Lee',
    role: 'Senior Director Of Engineering (12+ years tenure)',
    company: 'BuzzFeed',
    linkedinUrl: 'https://www.linkedin.com/in/brianglee',
    sourceMemo: 'Found via Firecrawl /v2/search 2026-05-05; 12 years 9 months at BuzzFeed; spans pre/during/post AI cycle',
    whyThisFits:
      "You've led Engineering at BuzzFeed for 12+ years — through the entire AI hype-then-disillusion-then-real-utility cycle. Engineering at a content publisher means: incident reviews, deploy comms, tech-debt prioritization, cross-functional alignment with editorial. The bundle below has 5 prompts specifically for senior-engineering writing surfaces. (Honest note: most are tuned to IT-ops; engineering uses a subset, but the one-pagers + post-mortems translate.)",
    pickedPrompts: [
      {
        title: 'Engineering Incident Post-Mortem (no-blame)',
        kit: 'Operations Kit',
        body: 'Generate a post-mortem for an engineering incident. Inputs: [SERVICE], [TIMELINE], [USER_IMPACT], [ROOT_CAUSE]. Output: (1) impact in business terms (revenue, ad views, content stories blocked), (2) timeline UTC, (3) root cause 2-sentences max, (4) what worked, (5) what failed, (6) 5 specific action items with owners + dates, (7) follow-up review date. Voice: factual, no-blame, but does NOT minimize.',
      },
      {
        title: 'Tech-Debt Prioritization Memo',
        kit: 'Saas Founder Kit',
        body: 'Senior engineering team has a list of [N] tech-debt items competing with feature work for next quarter. Output a 1-page memo. (1) Top 3 by RICE score (Reach × Impact × Confidence / Effort) — show the math. (2) For each: business cost of not addressing in 6mo. (3) For each: estimated eng-weeks. (4) Recommended cut line + rationale. (5) The trade-off the leadership team is implicitly accepting if they cut below the line.',
      },
      {
        title: 'Deploy Comms (to editorial / non-engineering)',
        kit: 'Email & Marketing Kit',
        body: 'Engineering is shipping a change that affects editorial (CMS feature, analytics break, freelancer tool change). Most editors think "deploy" means "you broke something." Write the comms email. Inputs: [WHAT_CHANGES], [IF_BAD_HAPPENS], [WHEN]. Output: 5-sentence email. Lead with what gets BETTER for them. Then when (timezone-spelled-out). Then the one thing they should test post-deploy. Then the rollback plan in plain English. Subject: under 60 chars, not "[ENG] Deploy".',
      },
      {
        title: 'RFC Drafter (engineering proposal)',
        kit: 'Saas Founder Kit',
        body: 'Draft an RFC for [PROPOSAL]. Inputs: [PROBLEM], [PROPOSED_APPROACH], [ALTERNATIVES_CONSIDERED]. Output sections: (1) Problem in 3 sentences (no jargon — exec readable). (2) Proposed approach with specific architecture. (3) 2 alternatives considered + why rejected. (4) Risks + mitigations. (5) Decision needed by [DATE]. (6) One-line ask. Length: under 700 words. Voice: senior engineer talking to peers, not selling.',
      },
      {
        title: 'Hiring Rubric for Senior Engineer Role',
        kit: 'Saas Founder Kit',
        body: 'Build a hiring rubric for a Senior Engineer role at [COMPANY]. Inputs: [TEAM], [SCOPE], [CRITICAL_SKILLS]. Output: 5-area rubric (technical depth, judgment, communication, collaboration, ownership). For each: 4 levels with concrete behavioral evidence (NOT subjective adjectives). End with: 3 dealbreakers (specific behaviors, not vibes). Voice: pragmatic, anti-bias.',
      },
    ],
  },
};

export function getPersonalPage(slug) {
  return PERSONAL_PAGES[slug] || null;
}

export function getAllPersonalPageSlugs() {
  return Object.keys(PERSONAL_PAGES);
}
