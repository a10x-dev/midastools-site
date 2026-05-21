# Midas Tools — AI Team Adoption Kit
# 08: Legal / Compliance Playbook

Six paste-and-run prompts for the workflows in-house legal + compliance teams spend most of their week on: contract review, NDA drafting, policy audits, risk assessment, regulatory briefs, and vendor security review. Built for a General Counsel, Legal Ops Lead, or Compliance Manager at a 50–1000 person B2B company.

Important: These prompts produce DRAFTS for legal-trained humans to review, edit, and own. They do NOT replace legal counsel. Any output is a starting point, not a finished artifact.

---

## Variables Reference

```
[COMPANY NAME] — Your company name
[JURISDICTION] — Primary governing law (Delaware US / California US / EU + country / UK / Other)
[INDUSTRY] — Regulated industry (Finance / Healthcare / Education / B2B SaaS / Other)
[DATA TYPES] — Categories of data we process (Personal / Health / Financial / etc.)
[CONTRACT TYPE] — MSA / SaaS subscription / NDA / DPA / SOW / etc.
```

---

## Prompt 1: Contract Review (Inbound Vendor / Customer Paper)

### Prompt

```
You are senior in-house counsel at [COMPANY NAME] reviewing a contract sent to us by a counterparty.

ABOUT US:
- Company: [COMPANY NAME]
- Industry: [INDUSTRY]
- We sell: [PRODUCT, 1 line]
- We process: [DATA TYPES]
- Primary jurisdiction: [JURISDICTION]
- Size of company: [STAGE / EMPLOYEES]

ABOUT THIS CONTRACT:
- Contract type: [CONTRACT TYPE]
- Counterparty: [COUNTERPARTY NAME]
- Counterparty's industry: [INDUSTRY]
- Counterparty's role in this deal: [VENDOR TO US / CUSTOMER OF US / PARTNER / etc.]
- Total contract value: $[X] over [TERM]
- Business owner of this contract: [INTERNAL NAME + TITLE]
- Deadline to execute: [DATE if any]

OUR STANDARD POSITIONS (paste your playbook positions on key terms, e.g.):
- Liability cap: 1x annual fees, exclusions for IP indemnity + confidentiality breach
- Indemnification: mutual for third-party IP claims; we indemnify only for our breach
- Auto-renewal: only with 90+ day opt-out window
- Governing law: [JURISDICTION], with [VENUE]
- Data terms: we require [DPA / SCCs / appropriate transfer mechanism]
[etc.]

CONTRACT TEXT:
[PASTE FULL CONTRACT]

Produce a legal review markup in this exact format:

## TL;DR (For the Business Owner)
3 sentences. What this contract obligates, the top 3 issues to negotiate, recommendation.

## Recommendation
SIGN AS-IS / SIGN WITH MINOR REDLINES / NEGOTIATE BEFORE SIGNING / DO NOT SIGN — and why.

## Red Flags (Must Negotiate Before Signing)
For each clause that requires renegotiation:

### Issue [N]: [SHORT NAME]
- Section / Clause: [§ X.Y]
- Current language (verbatim): "[QUOTE]"
- Why this is a problem: [SPECIFIC RISK + DOLLAR / OPERATIONAL EXPOSURE]
- Our position: [WHAT WE ACCEPT INSTEAD]
- Suggested redline (verbatim replacement language):
> "[NEW LANGUAGE]"
- Negotiation leverage we have: [WHY they might agree]
- If they refuse: [FALLBACK POSITION] or [WALK]

(Repeat for each red-flag clause.)

## Yellow Flags (Worth Pushing On)
Clauses that aren't dealbreakers but where standard practice says we should negotiate:
- Clause + 1-line note + suggested ask.

## Green (Acceptable As-Drafted)
1-line confirmation that the remaining material terms are within our playbook.

## Specific Clauses to Scrutinize (Common Trap Areas)
Walk through each and call out the current state:
- Limitation of liability + carve-outs
- Indemnification (mutual? scope? defense + payment vs. payment only?)
- IP ownership + license grants
- Confidentiality (term, definition, return/destroy obligations)
- Data protection (DPA needed? SCCs? sub-processor rights?)
- Term + termination (auto-renew, term length, termination for convenience, termination for cause, post-term obligations)
- Service levels + remedies
- Warranties + disclaimers
- Insurance requirements
- Assignment + change-of-control
- Audit rights
- Governing law + jurisdiction + dispute resolution (arbitration vs. court?)
- Notices (where, how, to whom)
- Force majeure
- Order of precedence (which doc wins in conflict)

## Operational Risks (Non-Legal, Worth Flagging to Business Owner)
- Hidden cost commitments (overage rates, mandatory professional services, etc.)
- Operational obligations on us (reporting, integration maintenance, etc.)
- Reputational risk angles (e.g. counterparty in regulated industry)

## Asks to Send Back to Counterparty
A clean, prioritized list of redlines / asks to send back:
1. [REDLINE WITH SECTION REF + ONE-LINE EXPLANATION]
2. [REDLINE WITH SECTION REF + ONE-LINE EXPLANATION]
3. [...]

## Internal Sign-Off Checklist Before Signing
- [ ] Business owner has read the TL;DR
- [ ] Finance has reviewed total contract value + payment terms
- [ ] Security has reviewed data terms (if applicable)
- [ ] Procurement has confirmed pricing benchmark
- [ ] Final legal sign-off

## Important Disclaimer
This review is a draft analysis to support legal-trained review. Final decisions on commercial terms, redlines, and signing must rest with a qualified attorney. Output should not be relied upon as standalone legal advice.

Tone: In-house counsel skepticism. Counterparty wrote terms in their favor. Your job is to spot what's tilted.
```

### Pro tip

Maintain a "playbook" doc with your standard positions on the 12-15 common contract terms. Paste it into the OUR STANDARD POSITIONS section every time. AI applies your playbook consistently across hundreds of contracts — humans drift.

---

## Prompt 2: NDA Drafting

### Prompt

```
You are in-house counsel at [COMPANY NAME] drafting an NDA for a specific situation.

NDA TYPE: [Mutual / One-way (we disclose) / One-way (we receive)]
PURPOSE OF DISCLOSURE: [Specific business purpose — e.g. "exploring a potential acquisition of CounterpartyCo by us" / "exploring a vendor relationship where CounterpartyCo would be a sub-processor of our customer data" / "exploring a co-marketing partnership"]

COUNTERPARTY:
- Name: [COUNTERPARTY LEGAL NAME]
- Type: [Corporation / LLC / Partnership / Other]
- Jurisdiction: [STATE / COUNTRY]
- Industry: [INDUSTRY]
- Counterparty's likely sensitivities: [e.g. IP-heavy, public-company SEC disclosure rules, regulated industry]

OUR PARAMETERS:
- Term of confidentiality obligation: [3 years / 5 years / Perpetual for trade secrets, [N] years for everything else]
- Governing law: [JURISDICTION]
- Venue: [CITY, STATE / COUNTRY]
- Mutual non-solicit period (if any): [12 months / 24 months / None]
- Permitted disclosures internally: [Employees, advisors, financial / legal / professional advisors on a need-to-know basis under equivalent confidentiality obligations]

SPECIFIC CARVE-OUTS NEEDED (if any):
- Independently developed information
- Already publicly known
- Received from third party without confidentiality obligation
- Required disclosure by law / subpoena / regulator

Produce a complete NDA draft in this exact format:

## NDA Draft

# NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of [DATE] (the "Effective Date") by and between:

**[COMPANY NAME]**, a [JURISDICTION + ENTITY TYPE], with offices at [ADDRESS] ("[ABBREVIATED NAME]"); and

**[COUNTERPARTY LEGAL NAME]**, a [JURISDICTION + ENTITY TYPE], with offices at [ADDRESS] ("Counterparty").

Each, a "Party" and collectively, the "Parties."

WHEREAS the Parties wish to explore [PURPOSE OF DISCLOSURE] (the "Purpose"); and

WHEREAS in furtherance of the Purpose, the Parties may exchange information that is confidential to one or both;

NOW, THEREFORE, the Parties agree as follows:

### 1. Definition of Confidential Information
[STANDARD DEFINITION — include written, oral, marked or reasonably understood as confidential; including but not limited to business plans, financials, customer lists, technical info, IP, etc.]

### 2. Obligations of Receiving Party
[STANDARD — use only for Purpose; protect with at least reasonable care; limit disclosure to need-to-know recipients under equivalent obligations]

### 3. Exclusions from Confidential Information
[Standard 4-5 carve-outs: publicly known, lawfully received, independently developed, generally available, required disclosure with notice]

### 4. Term and Survival
[Specify term of agreement + term of confidentiality obligation, with trade secret protection beyond]

### 5. Return or Destruction
[Upon request or termination, return or destroy and certify in writing]

### 6. No License or Grant of Rights
[Standard — no IP transfer, no obligation to enter further agreement]

### 7. Remedies and Equitable Relief
[Acknowledge that damages may be inadequate; injunctive relief available]

### 8. Non-Solicitation (If Applicable)
[Use only if requested — narrow to direct solicitation of employees with whom Receiving Party has had material contact; standard 12-24 month period]

### 9. Governing Law and Venue
[JURISDICTION + VENUE]

### 10. Dispute Resolution
[Arbitration or court — match company standard]

### 11. Miscellaneous
[Entire agreement, no oral modification, severability, assignment restrictions, counterparts]

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

[SIGNATURE BLOCKS]

---

## Drafting Notes (Internal — Not for Counterparty)

### Key Decisions Made in This Draft
- Term length chosen: [N years] — reasoning: [WHY THIS LENGTH MATCHES THE PURPOSE]
- Mutual vs. one-way: [DECISION + REASONING]
- Carve-outs included: [LIST] — reasoning: [WHY THESE FIT THIS DEAL]
- Non-solicit: [INCLUDED / EXCLUDED] — reasoning

### Likely Counterparty Pushback (Anticipate)
3-4 clauses where the counterparty may ask for changes + your fallback position on each.

### Red Lines (We Don't Compromise On)
- [TERM 1] — minimum acceptable position
- [TERM 2] — minimum acceptable position

### Yellow Lines (Flexible With Justification)
- [TERM 3] — what we'd accept and what we'd ask for in exchange

### Sign-Off Path
- This NDA is within standard parameters — does it need additional review?
- If [DEAL VALUE > THRESHOLD] or [SPECIAL CARVE-OUT REQUESTED], escalate to GC

## Important Disclaimer
This draft is a starting point for review by a qualified attorney with knowledge of [JURISDICTION] law and the specific business context. Do not execute as-drafted without legal review.

Tone: Clean, market-standard, defensible.
```

---

## Prompt 3: Policy Audit (Compare Existing Policies vs. Industry Standard / New Regulation)

### Prompt

```
You are the Compliance Lead at [COMPANY NAME] conducting a policy audit.

AUDIT SCOPE: [TOPIC — e.g. "Information security policies vs. SOC 2 Trust Services Criteria" / "Data privacy policies vs. EU AI Act" / "Employee policies vs. new state pay-transparency laws" / "Vendor management policies vs. our customer's MSA requirements"]

INDUSTRY: [INDUSTRY]
JURISDICTIONS APPLICABLE: [LIST]
COMPANY SIZE / STAGE: [STAGE / SIZE]

REGULATORY / STANDARD WE'RE AUDITING AGAINST (paste the framework — could be a law, a standard like SOC 2, an industry framework like ISO 27001, or a customer-imposed requirement):
[PASTE FRAMEWORK SECTIONS]

OUR CURRENT POLICY / POLICIES (paste current internal policies on this topic):
[PASTE]

Produce an audit report in this exact format:

## TL;DR
3 sentences. Compliance posture, top gap, recommended action.

## Compliance Posture
Overall: COMPLIANT / SUBSTANTIALLY COMPLIANT (minor gaps) / MATERIAL GAPS / NON-COMPLIANT

Confidence: HIGH / MEDIUM / LOW (note any areas you can't fully assess from the inputs provided).

## Requirement-by-Requirement Mapping
For each material requirement in the framework, produce a row:

| Requirement | Framework Section | Our Policy Coverage | Gap | Severity | Owner | Remediation |
|-------------|-------------------|----------------------|-----|----------|-------|-------------|

Severity legend:
- CRITICAL: regulatory violation risk, customer contract risk, security risk
- MATERIAL: meaningful gap, should be addressed within 90 days
- MINOR: tightening / wording / process improvement
- NONE: fully covered

## Critical Gaps (Highest Priority)
For each critical gap:

### Gap [N]: [SHORT NAME]
- Framework requirement (verbatim): "[QUOTE]"
- Our current coverage: [STATE — could be "none", "partial language in [POLICY]", etc.]
- Specific risk if unaddressed: [REGULATORY FINE / CUSTOMER CONTRACT BREACH / SECURITY EXPOSURE / etc.]
- Estimated effort to close: [DAYS / WEEKS]
- Owner: [WHO]
- Recommended remediation:
  1. [SPECIFIC ACTION]
  2. [SPECIFIC ACTION]
- Suggested policy language to adopt:
> "[DRAFT LANGUAGE]"

(Repeat for each critical gap.)

## Material Gaps
Shorter version of the above for material (but not critical) gaps.

## Observed Strengths
Areas where our policies exceed the framework or are well-positioned. (Important — auditors note both gaps and strengths.)

## Risks Beyond the Policy
Sometimes the policy is fine but the IMPLEMENTATION is the gap. Flag any areas where:
- The policy exists but isn't operationalized
- Training has not been delivered on this policy
- No monitoring / metrics confirm the policy is being followed
- Records of compliance (logs, attestations) don't exist

## Recommended Remediation Roadmap

### Within 30 days (Critical):
- [ITEMS]

### Within 90 days (Material):
- [ITEMS]

### Within 180 days (Minor / continuous improvement):
- [ITEMS]

## Cross-References
- Related policies that may need parallel updates: [LIST]
- Related controls / procedures: [LIST]
- Required training updates: [LIST]
- External communications needed: [Customer notifications? Regulator filings?]

## Sign-Off Path
- Initial review: [COMPLIANCE LEAD]
- Final approval before adoption: [GC / EXEC SPONSOR]
- Audit trail: This report stored at [LOCATION]

## Important Disclaimer
This audit is an analysis to support compliance review. It does not constitute legal advice on the interpretation of [REGULATION/STANDARD]. Material decisions should be reviewed by qualified counsel or a certified auditor.

Tone: Compliance auditor's report. Specific, evidence-led, actionable.
```

### Pro tip

Run this annually against your top 3 frameworks (SOC 2, your customer contractual requirements, primary jurisdiction regulation). Pre-empts the painful "we have an audit in 60 days" panic.

---

## Prompt 4: Risk Assessment (New Product / Feature / Initiative)

### Prompt

```
You are the General Counsel + Chief Risk Officer at [COMPANY NAME] conducting a structured risk assessment for a proposed initiative.

INITIATIVE: [DESCRIBE IN 1-2 SENTENCES — e.g. "Launching a new feature that uses customer data to train a model" / "Entering a new geographic market" / "Acquiring a competitor" / "Building a self-serve product that processes financial information"]

CONTEXT:
- Initiative owner: [NAME + TITLE]
- Business rationale (1 paragraph): [PASTE]
- Target launch / completion: [DATE]
- Resources committed: [BUDGET / HEADCOUNT]
- Customer / user audience: [DESCRIPTION]
- Data involved: [DATA TYPES]
- Third parties involved: [VENDORS / PARTNERS / CUSTOMERS]
- Markets / jurisdictions: [LIST]

KEY DOCUMENTS (paste any of: PRD, business case, technical architecture, partner agreements, target market analysis):
[PASTE]

OUR INDUSTRY CONTEXT:
- Industry: [INDUSTRY]
- Existing compliance posture: [e.g. "SOC 2 Type II", "HIPAA-compliant", "ISO 27001"]
- Customer / contractual obligations we already carry: [SUMMARIZE]

Produce a risk assessment in this exact format:

## TL;DR
3 sentences. Top 3 risks, recommended posture (PROCEED / PROCEED WITH MITIGATIONS / RECONSIDER / DO NOT PROCEED).

## Risk Register
For each risk identified, score it:

| Risk | Category | Likelihood (1-5) | Impact (1-5) | Risk Score (L×I) | Owner | Mitigation |
|------|----------|------------------|---------------|-------------------|-------|-------------|

Categories to systematically consider:
1. Regulatory / Legal
2. Data privacy / data protection
3. Security / cyber
4. Customer / contractual
5. IP / licensing
6. Financial / commercial
7. Operational / execution
8. Reputational
9. Employment / HR
10. Tax / structural
11. Antitrust / competition (if M&A or partnership)
12. Cross-border / geopolitical

For each category, identify the top 1-3 specific risks.

## High-Severity Risks (Detail Each)

### Risk [N]: [SHORT NAME]
- Category: [CATEGORY]
- What could go wrong (specific scenario, not generic): [DESCRIBE]
- Likelihood: [SCORE + reasoning]
- Impact: [SCORE + reasoning — quantify in $ or operational terms where possible]
- Indicators we'd see early (leading): [LIST]
- Indicators we'd see when realized (lagging): [LIST]
- Mitigation:
  - Preventive: [ACTIONS TO REDUCE LIKELIHOOD]
  - Detective: [WHAT TO MONITOR]
  - Responsive: [WHAT WE'D DO IF IT HAPPENS]
- Residual risk after mitigation: [LOW / MEDIUM / HIGH]
- Owner: [WHO]
- Decision needed by exec / board: [Y/N — and what]

(Repeat for each high-severity risk.)

## Regulatory Hot Spots
Surface any specific regulations / laws that materially apply:
- [REGULATION]: Why it applies + key obligations + estimated effort to comply
- [REGULATION]: ...

## Required Approvals Before Launch
Specific gates that must be cleared:
- [ ] DPIA / Privacy review (if personal data)
- [ ] Security review (architecture + threat model)
- [ ] IP clearance (any new dependencies or licensing terms)
- [ ] Tax structuring review (if cross-border or new entity)
- [ ] Marketing / communications review (claims, disclosures)
- [ ] External communications plan (customer notice, regulator filings if needed)

## Recommended Posture
PROCEED / PROCEED WITH MITIGATIONS / RECONSIDER / DO NOT PROCEED

Justification: 2-3 sentences linking the recommendation to the highest-scoring risks.

## Conditions for Proceeding
If recommendation is PROCEED WITH MITIGATIONS, list the specific conditions:
1. [CONDITION] — owner, deadline
2. [CONDITION] — owner, deadline
3. [CONDITION] — owner, deadline

## Re-Assessment Triggers
Events that would cause us to re-run this risk assessment:
- [TRIGGER 1]
- [TRIGGER 2]
- [TRIGGER 3]

## Important Disclaimer
This risk assessment provides analysis to inform legal and business decisions. Material legal, regulatory, or tax conclusions must be reviewed and signed off by qualified counsel and professional advisors familiar with the relevant jurisdictions and the specific facts.

Tone: Senior counsel's risk memo. Specific, quantified, decision-supportive (not decision-evading).
```

---

## Prompt 5: Regulatory Brief (Summarize a New Regulation for Internal Stakeholders)

### Prompt

```
You are in-house counsel at [COMPANY NAME] preparing a regulatory brief on a new (or recently updated) law / regulation / standard.

REGULATION TO BRIEF: [FULL NAME + JURISDICTION + EFFECTIVE DATE — e.g. "EU AI Act, effective February 2026" / "California SB 261 climate disclosures, effective Jan 1, 2026" / "SEC cybersecurity disclosure rules effective Dec 18, 2025"]

OUR CONTEXT:
- Industry: [INDUSTRY]
- Where we operate: [JURISDICTIONS]
- Customers we serve: [DESCRIPTION]
- Data we process: [TYPES]
- Existing compliance frameworks we maintain: [LIST]

REGULATION SOURCE TEXT (paste either the full text or our most authoritative summary — official agency guidance preferred):
[PASTE]

AUDIENCE FOR THIS BRIEF: [EXEC TEAM / BOARD / SPECIFIC FUNCTION — e.g. Engineering / Legal Ops / All-hands]

Produce a regulatory brief in this exact format:

## TL;DR (For the CEO)
3 sentences:
1. What changes
2. Whether it applies to us (and which parts)
3. The top action we need to take and by when

## Applicability to Us
- Does this regulation apply to [COMPANY NAME]? [Y/N/PARTIALLY] — with reasoning
- Which of our business activities trigger applicability?
- Which jurisdictions / business lines / data types are in scope?
- Are we subject to it directly, or indirectly (e.g. as a vendor to in-scope customers)?

## What the Regulation Requires (Plain English)
Bullet the 5-10 most material obligations in plain language. Cite the specific section / article for each.

## What It Doesn't Require (Important — Reduces Overcorrection)
2-4 things that are commonly misread as obligations but actually aren't. (Prevents overreaction in execution.)

## Timeline
- Adoption / publication date: [DATE]
- Effective date: [DATE]
- Compliance grace period: [DETAILS]
- Phased obligations (if any): [TIMELINE]
- Enforcement effective date: [DATE]

## Penalties / Enforcement
- Range of penalties (fines, injunctions, corrective orders)
- Enforcement body
- Known enforcement posture (active enforcement immediately? grace period in practice?)
- Private right of action: [Y/N]

## How We Currently Stand
For each material obligation, score:
| Obligation | Our current state | Gap | Severity | Owner | Remediation timeline |
|------------|--------------------|-----|----------|-------|-----------------------|

## Recommended Actions
Time-phased plan:

### Immediate (within 30 days)
- [ACTION] — owner — deliverable

### Short-term (within 90 days)
- [ACTION] — owner — deliverable

### By compliance deadline
- [ACTION] — owner — deliverable

### Ongoing / steady-state
- [ACTION] — owner — cadence

## Cross-Functional Impact
Identify which functions are touched and how:
- Engineering: [WHAT CHANGES]
- Product: [WHAT CHANGES]
- Marketing: [WHAT CHANGES — claims, disclosures]
- Sales: [WHAT CHANGES — talking points, customer responses]
- Customer Support: [WHAT CHANGES — anticipate customer Qs]
- HR / People: [WHAT CHANGES]
- Finance: [WHAT CHANGES]

## Anticipated Customer / Stakeholder Questions
6-10 questions our customers / investors / employees might ask + draft answers.

## Communication Plan
- Internal: [WHEN, WHO, HOW we brief teams]
- External (customers): [DO WE NOTIFY? WHEN? HOW?]
- External (regulator/auditor): [ANY FILING OR ATTESTATION REQUIRED]
- External (press / public statement): [IF NEEDED]

## Resources & References
- Official regulation text: [LINK]
- Primary regulator guidance: [LINK]
- Industry association response (if any): [LINK]
- Comparable enforcement actions to study: [LINK]

## Important Disclaimer
This brief is an internal analysis to support compliance and operational planning. It does not constitute legal advice. Material interpretations and specific compliance decisions should be reviewed by qualified counsel with jurisdictional expertise.

Tone: GC's executive brief. Honest about applicability + uncertainty.
```

---

## Prompt 6: Vendor Security & Privacy Review

### Prompt

```
You are the InfoSec + Privacy Reviewer at [COMPANY NAME] assessing a new vendor before signing a contract.

VENDOR: [VENDOR NAME]
PURPOSE: [WHAT WE'RE USING THEM FOR — 1 sentence]
DATA THEY'LL ACCESS / PROCESS: [SPECIFIC DATA TYPES]
HOW WE'LL INTEGRATE: [API / SSO / Hosted / On-prem connector / etc.]
NUMBER OF EMPLOYEES OR USERS WHO WILL USE THE VENDOR: [N]
CONTRACT VALUE: $[X]

VENDOR-PROVIDED MATERIALS (paste any of: security questionnaire responses, SOC 2 Type II report summary, ISO 27001 certificate, GDPR/CCPA compliance attestations, sub-processor list, penetration test summary, security white paper):
[PASTE]

OUR REQUIREMENTS (paste your security/privacy minimum bar):
- Encryption at rest + in transit: [REQUIREMENT]
- Authentication: [MFA / SSO requirements]
- Sub-processor approval rights: [REQUIREMENT]
- Data residency: [REQUIREMENTS]
- Incident notification SLA: [REQUIREMENT]
- Right to audit: [REQUIREMENT]
- Data return / destruction: [REQUIREMENT]
- DPA: [REQUIRED Y/N]

OUR CUSTOMER COMMITMENTS (paste anything we've promised to OUR customers that this vendor must support):
[PASTE]

Produce a vendor review in this exact format:

## TL;DR
3 sentences. Vendor maturity, top risks, recommended posture.

## Recommendation
APPROVE / APPROVE WITH CONDITIONS / DECLINE — with rationale.

## Security Posture Assessment
| Domain | Vendor's State | Our Requirement | Gap | Severity |
|--------|----------------|------------------|-----|----------|
| Encryption at rest | | | | |
| Encryption in transit | | | | |
| Authentication / SSO | | | | |
| Access control / least privilege | | | | |
| Logging + monitoring | | | | |
| Vulnerability management | | | | |
| Pen testing cadence | | | | |
| Incident response process | | | | |
| Business continuity / disaster recovery | | | | |
| Employee background checks + training | | | | |
| Sub-processor management | | | | |

For any GAP marked CRITICAL or MATERIAL, expand below in "Issues to Address."

## Privacy / Data Protection Assessment
| Domain | Vendor's State | Our Requirement | Gap | Severity |
|--------|----------------|------------------|-----|----------|
| Data minimization | | | | |
| Purpose limitation | | | | |
| Data residency / cross-border transfers | | | | |
| Lawful transfer mechanism (SCCs / DPF / etc.) | | | | |
| DPA available + reasonable terms | | | | |
| Sub-processor disclosure + flow-down obligations | | | | |
| Data subject rights handling (access, deletion, etc.) | | | | |
| Breach notification SLA | | | | |
| Data return / destruction on termination | | | | |
| Training data use restriction (for AI vendors) | | | | |

## Issues to Address (Before Approval)
For each material issue:

### Issue [N]: [SHORT NAME]
- What the vendor's current state is
- Why this is a gap against our requirement / our customer commitments
- Specific ask (with suggested contract language or process change):
> "[DRAFT LANGUAGE OR REQUEST]"
- Negotiation leverage: [WHY they may agree]
- If they refuse: [FALLBACK OR DECLINE TRIGGER]

## Sub-Processor Concentration Risk
If the vendor relies on hyperscale infra (AWS / GCP / Azure) plus other sub-processors we already use, flag concentration risk + redundancy gaps.

## Customer Notification Required?
If we're a B2B with customer contracts requiring sub-processor notice / consent:
- Are we obligated to notify our customers of this vendor before / after onboarding?
- Lead time required: [N DAYS]
- Format: [public sub-processor page / email / both]

## Operational Considerations (Not Just Security)
- SSO integration cost / effort
- Support quality (response SLA observed during sales process)
- Roadmap risk (will they ship the X we need?)
- Vendor financial viability (public? funded?)

## Renewal / Ongoing Review Plan
- Frequency of re-review: [ANNUAL / EVERY 2 YEARS / TRIGGERED BY EVENT]
- Trigger events that force re-review: [BREACH ANNOUNCED / ACQUISITION / MAJOR PRODUCT CHANGE]
- Required artifacts to refresh annually: [SOC 2 Type II report, pen test summary, sub-processor list]

## Final Verdict
| Decision | Conditions | Owner | Deadline |
|----------|------------|-------|----------|

## Important Disclaimer
This review supports a security / privacy decision. Definitive conclusions on regulatory compliance, contractual liability, and risk acceptance must be made by appropriate legal, security, and business owners.

Tone: Vendor-skeptic. Trust but verify. Default to "decline" if material gaps are uncloseable.
```

### Pro tip

Standardize the OUR REQUIREMENTS section into a stable boilerplate. Then every vendor review takes 15 minutes instead of 2 hours, AND your bar is consistent across the company.

---

## Pro Tips for Legal / Compliance Adoption

- **Treat AI as a junior associate.** It drafts. Senior counsel reviews, edits, and signs. The signature is on the human, always.
- **Maintain a "playbook" doc with standard positions.** Paste it into every contract review prompt. This is what makes the AI sound like YOUR legal team, not generic counsel.
- **Confidentiality of the input matters.** Use enterprise / private-tenant AI deployments only. Don't paste contracts or HR data into public consumer chatbots.
- **The Disclaimer section is non-negotiable.** Every output includes it. Drafts are starting points, never finished artifacts.
- **Run the vendor security review on every new SaaS tool.** Including the ones the marketing / engineering teams "already started using." Backwards audits catch the holes.
- **Calendar your regulatory brief refreshes.** Pick the 5 regulations most material to your business, re-run the prompt quarterly. Pre-empts crisis-mode "we need a brief by Monday" panic.

---

© 2026 Midas Tools — www.midastools.co
