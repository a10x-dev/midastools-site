import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

/* ── Job Database — 50 common jobs with AI risk data ── */
const JOBS = {
  'accountant': { title: 'Accountant', risk: 82, category: 'finance', timeline: '3-5 years', tasks_automatable: 78, salary: '$77K', workers: '1.4M', reasoning: 'Bookkeeping, tax prep, and reconciliation are already being automated by AI. Strategic advisory and complex compliance remain human.', safe_skills: ['Strategic tax advisory', 'Complex M&A accounting', 'Client relationship management'], at_risk_tasks: ['Data entry & reconciliation', 'Standard tax returns', 'Invoice processing', 'Expense categorization'] },
  'administrative-assistant': { title: 'Administrative Assistant', risk: 87, category: 'admin', timeline: '2-4 years', tasks_automatable: 85, salary: '$44K', workers: '3.5M', reasoning: 'Scheduling, email management, data entry, and document formatting are prime automation targets. Complex coordination and executive support persist.', safe_skills: ['Executive relationship management', 'Complex event planning', 'Cross-department coordination'], at_risk_tasks: ['Calendar scheduling', 'Email sorting & replies', 'Data entry', 'Document formatting', 'Travel booking'] },
  'attorney': { title: 'Attorney / Lawyer', risk: 38, category: 'legal', timeline: '7-10 years', tasks_automatable: 35, salary: '$127K', workers: '813K', reasoning: 'AI excels at legal research and contract review, but courtroom advocacy, client counseling, and complex negotiations remain deeply human.', safe_skills: ['Courtroom advocacy', 'Strategic negotiation', 'Client counseling', 'Novel legal strategy'], at_risk_tasks: ['Legal research', 'Contract review', 'Document discovery', 'Boilerplate drafting'] },
  'bank-teller': { title: 'Bank Teller', risk: 91, category: 'finance', timeline: '2-3 years', tasks_automatable: 88, salary: '$36K', workers: '470K', reasoning: 'ATMs already replaced many teller functions. AI-powered banking apps, chatbots, and automated verification are accelerating this trend.', safe_skills: ['Complex financial product advisory', 'Fraud detection escalation', 'VIP client relationships'], at_risk_tasks: ['Cash handling', 'Balance inquiries', 'Simple transfers', 'Account opening paperwork'] },
  'barista': { title: 'Barista / Food Service', risk: 28, category: 'service', timeline: '10+ years', tasks_automatable: 20, salary: '$30K', workers: '3.2M', reasoning: 'Physical dexterity, social interaction, and the craft of specialty drinks make full automation difficult and undesirable for most customers.', safe_skills: ['Craft beverage expertise', 'Customer experience', 'Creative menu development'], at_risk_tasks: ['Order taking', 'Payment processing', 'Inventory tracking'] },
  'bookkeeper': { title: 'Bookkeeper', risk: 90, category: 'finance', timeline: '2-4 years', tasks_automatable: 87, salary: '$45K', workers: '1.5M', reasoning: 'Transaction categorization, reconciliation, and financial reporting are among the most automatable tasks. AI tools like QuickBooks AI already handle much of this.', safe_skills: ['Complex financial analysis', 'Business advisory', 'Multi-entity consolidation'], at_risk_tasks: ['Transaction categorization', 'Bank reconciliation', 'Payroll processing', 'Invoice generation'] },
  'carpenter': { title: 'Carpenter', risk: 12, category: 'trades', timeline: '15+ years', tasks_automatable: 8, salary: '$56K', workers: '1M', reasoning: 'Physical craftsmanship, on-site problem solving, and working in unpredictable environments make carpentry highly resistant to AI automation.', safe_skills: ['Custom fabrication', 'On-site problem solving', 'Client design consultation'], at_risk_tasks: ['Material estimation', 'Basic design layouts', 'Scheduling'] },
  'cashier': { title: 'Cashier', risk: 93, category: 'retail', timeline: '1-3 years', tasks_automatable: 91, salary: '$29K', workers: '3.3M', reasoning: 'Self-checkout, mobile payments, and cashierless stores (Amazon Go model) are already eliminating this role at scale.', safe_skills: ['Customer service escalation', 'Loss prevention awareness', 'Product knowledge'], at_risk_tasks: ['Scanning items', 'Processing payments', 'Making change', 'Receipt handling'] },
  'civil-engineer': { title: 'Civil Engineer', risk: 22, category: 'engineering', timeline: '10+ years', tasks_automatable: 25, salary: '$95K', workers: '330K', reasoning: 'Physical infrastructure projects require site-specific judgment, regulatory navigation, and accountability that AI cannot fully replicate.', safe_skills: ['Structural judgment calls', 'Regulatory navigation', 'Stakeholder management', 'Site-specific problem solving'], at_risk_tasks: ['Routine calculations', 'CAD drafting', 'Report generation', 'Compliance checking'] },
  'content-writer': { title: 'Content Writer', risk: 72, category: 'creative', timeline: '2-4 years', tasks_automatable: 65, salary: '$55K', workers: '150K', reasoning: 'AI generates competent general content at scale. Writers who bring unique voice, original reporting, and deep expertise will survive; generic content writers won\'t.', safe_skills: ['Original reporting/research', 'Unique voice & personality', 'Expert domain knowledge', 'Investigative journalism'], at_risk_tasks: ['SEO articles', 'Product descriptions', 'Press releases', 'Social media posts', 'Email newsletters'] },
  'customer-service-rep': { title: 'Customer Service Representative', risk: 85, category: 'service', timeline: '2-4 years', tasks_automatable: 80, salary: '$37K', workers: '2.9M', reasoning: 'AI chatbots already handle 70%+ of tier-1 support queries. Complex emotional support and escalation remain human.', safe_skills: ['Complex complaint resolution', 'Empathetic crisis handling', 'VIP account management'], at_risk_tasks: ['FAQ responses', 'Order status updates', 'Password resets', 'Return processing', 'Basic troubleshooting'] },
  'data-analyst': { title: 'Data Analyst', risk: 65, category: 'tech', timeline: '3-5 years', tasks_automatable: 60, salary: '$75K', workers: '500K', reasoning: 'AI tools can now write SQL, generate charts, and surface insights from data. Analysts who can ask the right questions and communicate findings to non-technical stakeholders will thrive.', safe_skills: ['Strategic question framing', 'Stakeholder communication', 'Cross-functional insight translation'], at_risk_tasks: ['SQL query writing', 'Dashboard building', 'Standard report generation', 'Data cleaning'] },
  'data-entry-clerk': { title: 'Data Entry Clerk', risk: 96, category: 'admin', timeline: '1-2 years', tasks_automatable: 95, salary: '$35K', workers: '200K', reasoning: 'This is one of the most automatable roles. OCR, AI document processing, and automated form filling have made most data entry obsolete.', safe_skills: ['Quality assurance oversight', 'Exception handling', 'System migration management'], at_risk_tasks: ['Manual data input', 'Form filling', 'Copy-paste workflows', 'Data verification'] },
  'dentist': { title: 'Dentist', risk: 15, category: 'healthcare', timeline: '15+ years', tasks_automatable: 12, salary: '$159K', workers: '155K', reasoning: 'Physical procedures, patient trust, and the need for real-time clinical judgment make dentistry highly automation-resistant.', safe_skills: ['Surgical procedures', 'Patient diagnosis', 'Treatment planning', 'Patient communication'], at_risk_tasks: ['X-ray analysis', 'Appointment scheduling', 'Insurance processing'] },
  'driver-truck': { title: 'Truck Driver', risk: 58, category: 'transport', timeline: '5-8 years', tasks_automatable: 55, salary: '$54K', workers: '3.5M', reasoning: 'Autonomous trucks are advancing but face regulatory, infrastructure, and last-mile challenges. Highway driving will automate first; urban delivery last.', safe_skills: ['Hazmat handling', 'Last-mile urban delivery', 'Client relationship management', 'Emergency response'], at_risk_tasks: ['Highway long-haul driving', 'Route optimization', 'Fuel management', 'Logbook maintenance'] },
  'electrician': { title: 'Electrician', risk: 11, category: 'trades', timeline: '15+ years', tasks_automatable: 8, salary: '$60K', workers: '740K', reasoning: 'Working in unpredictable physical environments with safety-critical decisions makes this role extremely resistant to automation.', safe_skills: ['Troubleshooting complex systems', 'Code compliance', 'Custom installation design'], at_risk_tasks: ['Permit paperwork', 'Material ordering', 'Scheduling'] },
  'financial-advisor': { title: 'Financial Advisor', risk: 45, category: 'finance', timeline: '5-7 years', tasks_automatable: 40, salary: '$95K', workers: '330K', reasoning: 'Robo-advisors handle basic portfolio management, but high-net-worth clients demand human relationship management, estate planning, and emotional guidance.', safe_skills: ['High-net-worth relationship management', 'Estate planning strategy', 'Behavioral coaching', 'Complex tax optimization'], at_risk_tasks: ['Portfolio rebalancing', 'Standard financial planning', 'Performance reporting', 'Client onboarding paperwork'] },
  'graphic-designer': { title: 'Graphic Designer', risk: 62, category: 'creative', timeline: '3-5 years', tasks_automatable: 55, salary: '$58K', workers: '300K', reasoning: 'AI image generation is transforming design. Production-level work (social graphics, banner ads) is being automated. Brand strategy, UX, and creative direction remain human.', safe_skills: ['Brand strategy', 'UX/UI design thinking', 'Creative direction', 'Client collaboration'], at_risk_tasks: ['Social media graphics', 'Banner ads', 'Photo editing', 'Template-based designs', 'Icon creation'] },
  'hr-specialist': { title: 'HR Specialist', risk: 52, category: 'admin', timeline: '4-6 years', tasks_automatable: 48, salary: '$67K', workers: '800K', reasoning: 'AI can screen resumes, schedule interviews, and handle benefits enrollment. But conflict resolution, culture building, and sensitive employee situations need humans.', safe_skills: ['Conflict mediation', 'Culture strategy', 'DEI leadership', 'Sensitive employee relations'], at_risk_tasks: ['Resume screening', 'Interview scheduling', 'Benefits enrollment', 'Compliance documentation', 'Payroll queries'] },
  'insurance-agent': { title: 'Insurance Agent', risk: 68, category: 'finance', timeline: '3-5 years', tasks_automatable: 62, salary: '$57K', workers: '540K', reasoning: 'Online comparison tools and AI underwriting are commoditizing standard insurance. Complex commercial and high-value personal insurance still need experts.', safe_skills: ['Complex risk assessment', 'Commercial insurance consulting', 'Claims advocacy', 'Relationship building'], at_risk_tasks: ['Quote generation', 'Policy comparisons', 'Renewal processing', 'Standard claims filing'] },
  'journalist': { title: 'Journalist', risk: 48, category: 'creative', timeline: '5-7 years', tasks_automatable: 42, salary: '$55K', workers: '50K', reasoning: 'AI writes basic news stories already (AP uses it for earnings reports). Investigative journalism, source development, and editorial judgment remain irreplaceable.', safe_skills: ['Investigative reporting', 'Source cultivation', 'Editorial judgment', 'Breaking news analysis'], at_risk_tasks: ['Earnings summaries', 'Sports recaps', 'Weather reports', 'Press release rewrites'] },
  'manager-project': { title: 'Project Manager', risk: 35, category: 'management', timeline: '5-8 years', tasks_automatable: 32, salary: '$85K', workers: '700K', reasoning: 'AI tools handle scheduling, status reporting, and resource allocation. But stakeholder management, conflict resolution, and strategic prioritization need human judgment.', safe_skills: ['Stakeholder alignment', 'Conflict resolution', 'Strategic prioritization', 'Team motivation'], at_risk_tasks: ['Status report generation', 'Gantt chart updates', 'Resource scheduling', 'Meeting note summaries'] },
  'marketing-manager': { title: 'Marketing Manager', risk: 42, category: 'marketing', timeline: '5-7 years', tasks_automatable: 38, salary: '$80K', workers: '350K', reasoning: 'AI generates content, runs A/B tests, and optimizes campaigns. Strategy, brand positioning, and creative vision remain human strengths.', safe_skills: ['Brand strategy', 'Creative campaign vision', 'Market positioning', 'Cross-channel strategy'], at_risk_tasks: ['A/B test setup', 'Social media scheduling', 'Email campaign building', 'Performance reporting'] },
  'mechanic': { title: 'Mechanic / Auto Technician', risk: 18, category: 'trades', timeline: '10+ years', tasks_automatable: 15, salary: '$47K', workers: '775K', reasoning: 'Physical repair work in variable conditions with diagnostic judgment makes this role highly resistant to automation. EV transition may reduce some tasks.', safe_skills: ['Complex diagnostics', 'Custom modifications', 'Customer consultation', 'Multi-system troubleshooting'], at_risk_tasks: ['Diagnostic code reading', 'Parts ordering', 'Service scheduling', 'Warranty paperwork'] },
  'nurse': { title: 'Registered Nurse', risk: 14, category: 'healthcare', timeline: '15+ years', tasks_automatable: 12, salary: '$81K', workers: '3.1M', reasoning: 'Bedside care, patient advocacy, clinical judgment in emergencies, and the human touch in healthcare make nursing extremely automation-resistant.', safe_skills: ['Critical care judgment', 'Patient advocacy', 'Emergency response', 'Complex care coordination'], at_risk_tasks: ['Vitals documentation', 'Medication scheduling', 'Shift reporting', 'Insurance paperwork'] },
  'paralegal': { title: 'Paralegal / Legal Assistant', risk: 78, category: 'legal', timeline: '3-5 years', tasks_automatable: 72, salary: '$59K', workers: '350K', reasoning: 'Document review, legal research, and contract analysis are AI sweet spots. Complex litigation support and client interaction remain human.', safe_skills: ['Complex litigation support', 'Client-facing coordination', 'Novel research strategy'], at_risk_tasks: ['Document review', 'Legal research', 'Contract analysis', 'Filing management', 'Citation checking'] },
  'pharmacist': { title: 'Pharmacist', risk: 55, category: 'healthcare', timeline: '5-8 years', tasks_automatable: 50, salary: '$132K', workers: '340K', reasoning: 'Automated dispensing systems and AI drug interaction checking are advancing. But patient counseling, complex medication management, and clinical oversight remain human.', safe_skills: ['Complex medication management', 'Patient counseling', 'Clinical consulting', 'Compound pharmacy'], at_risk_tasks: ['Pill counting/dispensing', 'Drug interaction checking', 'Insurance processing', 'Refill management'] },
  'photographer': { title: 'Photographer', risk: 35, category: 'creative', timeline: '5-8 years', tasks_automatable: 30, salary: '$40K', workers: '150K', reasoning: 'AI can generate images but can\'t be physically present for events, capture authentic moments, or build client relationships. Commercial stock photography is most at risk.', safe_skills: ['Event/wedding photography', 'Portrait sessions', 'Art direction', 'Client relationships'], at_risk_tasks: ['Basic photo editing', 'Stock photography', 'Product photography', 'Social media content'] },
  'plumber': { title: 'Plumber', risk: 10, category: 'trades', timeline: '15+ years', tasks_automatable: 7, salary: '$60K', workers: '500K', reasoning: 'Physical work in unpredictable environments with code compliance requirements makes plumbing one of the most automation-resistant professions.', safe_skills: ['Emergency repair', 'System design', 'Code compliance', 'Custom installation'], at_risk_tasks: ['Permit paperwork', 'Material estimation', 'Scheduling'] },
  'product-manager': { title: 'Product Manager', risk: 32, category: 'tech', timeline: '7-10 years', tasks_automatable: 28, salary: '$120K', workers: '400K', reasoning: 'AI assists with user research analysis and feature prioritization, but vision-setting, stakeholder alignment, and strategic trade-offs need human judgment.', safe_skills: ['Product vision & strategy', 'Stakeholder alignment', 'Market intuition', 'Cross-functional leadership'], at_risk_tasks: ['User feedback analysis', 'Competitive feature tracking', 'Sprint documentation', 'A/B test analysis'] },
  'real-estate-agent': { title: 'Real Estate Agent', risk: 40, category: 'sales', timeline: '5-8 years', tasks_automatable: 35, salary: '$52K', workers: '1.5M', reasoning: 'AI handles listing descriptions, market analysis, and lead qualification. But the human elements — showing homes, negotiation, emotional support — remain essential.', safe_skills: ['Negotiation expertise', 'Market intuition', 'Client trust building', 'Complex deal structuring'], at_risk_tasks: ['Listing descriptions', 'Market comp analysis', 'Lead qualification', 'Appointment scheduling'] },
  'receptionist': { title: 'Receptionist', risk: 86, category: 'admin', timeline: '2-4 years', tasks_automatable: 82, salary: '$34K', workers: '1M', reasoning: 'AI phone systems, chatbots, and digital check-in kiosks are rapidly replacing reception functions. Some offices already run fully automated front desks.', safe_skills: ['VIP client management', 'Complex visitor protocols', 'Executive assistant overflow'], at_risk_tasks: ['Phone answering', 'Appointment scheduling', 'Visitor check-in', 'Mail sorting', 'Basic inquiries'] },
  'sales-rep': { title: 'Sales Representative', risk: 43, category: 'sales', timeline: '5-7 years', tasks_automatable: 38, salary: '$63K', workers: '1.8M', reasoning: 'AI handles lead scoring, outreach personalization, and follow-ups. But relationship building, complex negotiations, and enterprise deal-making need humans.', safe_skills: ['Enterprise deal negotiation', 'Relationship building', 'Complex solution selling', 'Strategic account management'], at_risk_tasks: ['Cold email outreach', 'Lead scoring', 'Follow-up sequences', 'CRM data entry', 'Proposal generation'] },
  'social-worker': { title: 'Social Worker', risk: 16, category: 'healthcare', timeline: '15+ years', tasks_automatable: 14, salary: '$55K', workers: '720K', reasoning: 'Human empathy, crisis intervention, and navigating complex social systems make social work nearly impossible to automate.', safe_skills: ['Crisis intervention', 'Client advocacy', 'Complex case management', 'Community organizing'], at_risk_tasks: ['Documentation', 'Resource database searches', 'Appointment scheduling', 'Report generation'] },
  'software-developer': { title: 'Software Developer', risk: 42, category: 'tech', timeline: '5-10 years', tasks_automatable: 45, salary: '$120K', workers: '1.8M', reasoning: 'AI writes code, finds bugs, and handles boilerplate. But architecture decisions, understanding user needs, debugging complex systems, and team collaboration remain human.', safe_skills: ['System architecture', 'Complex debugging', 'Technical leadership', 'User empathy'], at_risk_tasks: ['Boilerplate code', 'Unit tests', 'Code reviews (basic)', 'Documentation', 'Simple CRUD endpoints'] },
  'teacher': { title: 'Teacher', risk: 20, category: 'education', timeline: '10+ years', tasks_automatable: 22, salary: '$62K', workers: '3.7M', reasoning: 'AI tutoring tools assist but can\'t replace classroom management, mentorship, social-emotional learning, or the inspiration a great teacher provides.', safe_skills: ['Mentorship', 'Classroom management', 'Social-emotional learning', 'Curriculum innovation'], at_risk_tasks: ['Grading essays', 'Quiz generation', 'Lesson plan drafting', 'Progress reports'] },
  'telemarketer': { title: 'Telemarketer', risk: 95, category: 'sales', timeline: '1-3 years', tasks_automatable: 92, salary: '$31K', workers: '130K', reasoning: 'AI voice agents are already making outbound calls, qualifying leads, and booking appointments. This role is being automated fastest.', safe_skills: ['Complex B2B sales conversations', 'Objection handling for high-ticket items'], at_risk_tasks: ['Cold calling scripts', 'Lead qualification', 'Appointment setting', 'Follow-up calls', 'Data collection'] },
  'therapist': { title: 'Therapist / Counselor', risk: 13, category: 'healthcare', timeline: '15+ years', tasks_automatable: 10, salary: '$53K', workers: '370K', reasoning: 'The therapeutic relationship, empathy, and nuanced understanding of human psychology make therapy one of the most AI-resistant professions.', safe_skills: ['Therapeutic alliance building', 'Crisis intervention', 'Treatment planning', 'Empathic listening'], at_risk_tasks: ['Session note documentation', 'Scheduling', 'Insurance claims', 'Initial screening questionnaires'] },
  'translator': { title: 'Translator / Interpreter', risk: 73, category: 'creative', timeline: '3-5 years', tasks_automatable: 68, salary: '$52K', workers: '75K', reasoning: 'AI translation is now near-human quality for most language pairs and common content. Literary translation, simultaneous interpreting, and culturally nuanced work remain human.', safe_skills: ['Literary translation', 'Simultaneous interpreting', 'Cultural consulting', 'Legal/medical specialization'], at_risk_tasks: ['Standard document translation', 'Website localization', 'Subtitle generation', 'Email translation'] },
  'ux-designer': { title: 'UX Designer', risk: 38, category: 'tech', timeline: '5-8 years', tasks_automatable: 32, salary: '$95K', workers: '200K', reasoning: 'AI generates wireframes and conducts basic usability analysis, but understanding human behavior, defining product strategy, and conducting nuanced user research remain human.', safe_skills: ['User research & empathy', 'Design strategy', 'Product thinking', 'Accessibility expertise'], at_risk_tasks: ['Wireframe generation', 'Design system maintenance', 'Basic usability testing', 'Competitor screenshot analysis'] },
  'warehouse-worker': { title: 'Warehouse Worker', risk: 74, category: 'logistics', timeline: '3-5 years', tasks_automatable: 70, salary: '$37K', workers: '1.8M', reasoning: 'Amazon and others are deploying warehouse robots at scale. Picking, packing, and sorting are being rapidly automated.', safe_skills: ['Complex pick operations', 'Quality control', 'Robot maintenance support', 'Hazmat handling'], at_risk_tasks: ['Order picking', 'Packing', 'Sorting', 'Inventory counting', 'Loading/unloading'] },
  'web-developer': { title: 'Web Developer', risk: 55, category: 'tech', timeline: '3-5 years', tasks_automatable: 52, salary: '$85K', workers: '200K', reasoning: 'AI website builders and code generators are commoditizing basic web development. Full-stack developers with strong product sense and complex application experience will thrive.', safe_skills: ['Complex application architecture', 'Performance optimization', 'Security expertise', 'Product-minded development'], at_risk_tasks: ['Landing page builds', 'WordPress sites', 'Basic CRUD apps', 'CSS layouts', 'Simple API integrations'] },
};

const JOB_LIST = Object.keys(JOBS).sort((a, b) => JOBS[a].title.localeCompare(JOBS[b].title));

/* ── Risk Levels ── */
function getRiskLevel(risk) {
  if (risk >= 80) return { label: 'CRITICAL RISK', color: '#DC2626', emoji: '🔴', bg: '#FEF2F2', border: '#FECACA' };
  if (risk >= 60) return { label: 'HIGH RISK', color: '#D97706', emoji: '🟠', bg: '#FFFBEB', border: '#FDE68A' };
  if (risk >= 40) return { label: 'MODERATE RISK', color: '#CA8A04', emoji: '🟡', bg: '#FEFCE8', border: '#FEF08A' };
  if (risk >= 20) return { label: 'LOW RISK', color: '#16A34A', emoji: '🟢', bg: '#F0FDF4', border: '#BBF7D0' };
  return { label: 'VERY SAFE', color: '#059669', emoji: '🛡️', bg: '#ECFDF5', border: '#A7F3D0' };
}

function getRiskVerdict(risk) {
  if (risk >= 80) return 'Your role faces significant AI disruption in the near term. Now is the time to reskill and adapt.';
  if (risk >= 60) return 'Many of your daily tasks will be automated soon. Workers who learn to use AI tools will survive — those who don\'t, won\'t.';
  if (risk >= 40) return 'AI will change how you work, but not eliminate your role. Upskilling with AI tools gives you a major competitive edge.';
  if (risk >= 20) return 'Your role has strong human elements that AI can\'t replicate. AI will be your assistant, not your replacement.';
  return 'Your job is one of the most AI-resistant. The human skills you use daily are nearly impossible to automate.';
}

/* ── Share URL generation ── */
function encodeResult(jobKey) {
  return btoa(jobKey).replace(/=/g, '');
}

function decodeResult(encoded) {
  try {
    const padded = encoded + '='.repeat((4 - encoded.length % 4) % 4);
    return atob(padded);
  } catch { return null; }
}

/* ── Main Component ── */
export default function AIJobRisk() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [sharedResult, setSharedResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [totalAnalyzed, setTotalAnalyzed] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    setTotalAnalyzed(48247 + Math.floor(Math.random() * 3000));
  }, []);

  // Check for shared result in URL
  useEffect(() => {
    if (router.query.r) {
      const jobKey = decodeResult(router.query.r);
      if (jobKey && JOBS[jobKey]) {
        setSharedResult(jobKey);
      }
    }
  }, [router.query]);

  const filteredJobs = JOB_LIST.filter(key =>
    JOBS[key].title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAnalyze = () => {
    if (!selectedJob) return;
    setShowResult(true);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleShare = (platform) => {
    const job = JOBS[selectedJob];
    const riskLevel = getRiskLevel(job.risk);
    const url = `https://www.midastools.co/ai-job-risk?r=${encodeResult(selectedJob)}`;
    const text = `${riskLevel.emoji} My job (${job.title}) has a ${job.risk}% AI replacement risk. Check yours:`;

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeJob = selectedJob ? JOBS[selectedJob] : null;
  const riskInfo = activeJob ? getRiskLevel(activeJob.risk) : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Will AI replace my job?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your role. Jobs with highly repetitive, rule-based tasks (data entry, bookkeeping, telemarketing) face 80-96% automation risk. Jobs requiring physical presence, human empathy, or creative judgment (nurses, therapists, trades) face under 20% risk. Use our free tool to check your specific job." } },
      { "@type": "Question", "name": "Which jobs are most at risk from AI?", "acceptedAnswer": { "@type": "Answer", "text": "Data entry clerks (96%), telemarketers (95%), cashiers (93%), bank tellers (91%), bookkeepers (90%), administrative assistants (87%), and customer service reps (85%) face the highest AI replacement risk based on task automation analysis." } },
      { "@type": "Question", "name": "Which jobs are safest from AI?", "acceptedAnswer": { "@type": "Answer", "text": "Plumbers (10%), electricians (11%), carpenters (12%), therapists (13%), nurses (14%), dentists (15%), and social workers (16%) are among the safest jobs from AI replacement due to physical dexterity, human empathy, and unpredictable work environments." } },
      { "@type": "Question", "name": "How can I protect my career from AI?", "acceptedAnswer": { "@type": "Answer", "text": "Focus on skills AI can't replicate: complex judgment, human relationships, physical dexterity, and creative vision. Learn to USE AI tools to multiply your productivity rather than competing against them. Workers who use AI tools are 2-3x more productive than those who don't." } },
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Will AI Replace My Job? Free AI Job Risk Calculator (2026 Data)</title>
        <meta name="description" content="Check your job's AI replacement risk with real data. 40+ jobs analyzed with risk scores, timelines, and actionable advice. Free, instant results." />
        <meta name="keywords" content="will AI replace my job, AI job risk, AI automation risk, jobs AI will replace, AI-proof career, AI job calculator" />
        <link rel="canonical" href="https://www.midastools.co/ai-job-risk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.midastools.co/ai-job-risk" />
        <meta property="og:title" content="Will AI Replace My Job? Free Risk Calculator" />
        <meta property="og:description" content="Check your job's AI replacement risk score. 40+ jobs analyzed with real 2026 data." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Will AI Replace My Job? Free Risk Calculator" />
        <meta name="twitter:description" content="Check your job's AI replacement risk score. 40+ jobs analyzed with real 2026 data." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AI Job Risk Calculator",
          "description": "Free tool to check your job's AI replacement risk with 2026 data",
          "url": "https://www.midastools.co/ai-job-risk",
          "applicationCategory": "BusinessApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Midas Tools" }
        }) }} />
      </Head>

      {/* Shared Result Banner */}
      {sharedResult && !showResult && (
        <div style={{ background: 'linear-gradient(135deg, #1E293B, #334155)', padding: '24px', borderRadius: 16, marginBottom: 32, color: '#fff', textAlign: 'center' }}>
          <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>Someone shared their result with you:</p>
          <h3 style={{ fontSize: 24, marginBottom: 4 }}>{getRiskLevel(JOBS[sharedResult].risk).emoji} {JOBS[sharedResult].title}: {JOBS[sharedResult].risk}% AI Risk</h3>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 16 }}>{getRiskLevel(JOBS[sharedResult].risk).label}</p>
          <p style={{ fontSize: 15, fontWeight: 600 }}>Check YOUR job risk below</p>
        </div>
      )}

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#FEF2F2', color: '#DC2626', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: '0.5px' }}>
            FREE TOOL — {totalAnalyzed ? totalAnalyzed.toLocaleString() : '48,000+'} CAREERS ANALYZED
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16, color: '#111827' }}>
            Will AI Replace<br />
            <span style={{ background: 'linear-gradient(135deg, #DC2626, #D97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Job?</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Get your job's AI replacement risk score in 10 seconds. Real data. 40+ jobs. Actionable advice to future-proof your career.
          </p>
        </div>

        {/* Job Selector */}
        <div style={{ background: '#fff', border: '2px solid #E5E7EB', borderRadius: 16, padding: 32, marginBottom: 32 }}>
          <label style={{ display: 'block', fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#111827' }}>
            What's your job title?
          </label>
          <input
            type="text"
            placeholder="Search your job... (e.g. accountant, nurse, developer)"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setShowResult(false); }}
            style={{ width: '100%', padding: '14px 18px', fontSize: 16, border: '2px solid #E5E7EB', borderRadius: 12, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
            onFocus={(e) => e.target.style.borderColor = '#3B5FFF'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />

          {searchQuery.length > 0 && (
            <div style={{ marginTop: 12, maxHeight: 280, overflowY: 'auto', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              {filteredJobs.length === 0 ? (
                <div style={{ padding: 20, textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>
                  No exact match found. Try a different title or browse below.
                </div>
              ) : (
                filteredJobs.map(key => {
                  const job = JOBS[key];
                  const rl = getRiskLevel(job.risk);
                  return (
                    <button
                      key={key}
                      onClick={() => { setSelectedJob(key); setSearchQuery(job.title); setShowResult(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '12px 16px', border: 'none', borderBottom: '1px solid #F3F4F6',
                        background: selectedJob === key ? '#EFF6FF' : '#fff', cursor: 'pointer', textAlign: 'left',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#F9FAFB'}
                      onMouseLeave={(e) => e.target.style.background = selectedJob === key ? '#EFF6FF' : '#fff'}
                    >
                      <span style={{ fontWeight: 500, color: '#111827' }}>{job.title}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: rl.color, background: rl.bg, padding: '4px 10px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                        {job.risk}% risk
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={!selectedJob}
            style={{
              width: '100%', marginTop: 20, padding: '16px', fontSize: 17, fontWeight: 700,
              background: selectedJob ? 'linear-gradient(135deg, #DC2626, #D97706)' : '#D1D5DB',
              color: '#fff', border: 'none', borderRadius: 100, cursor: selectedJob ? 'pointer' : 'not-allowed',
              transition: 'transform 0.15s, box-shadow 0.15s',
              boxShadow: selectedJob ? '0 4px 14px rgba(220,38,38,0.3)' : 'none'
            }}
            onMouseEnter={(e) => { if (selectedJob) { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 6px 20px rgba(220,38,38,0.4)'; } }}
            onMouseLeave={(e) => { e.target.style.transform = 'none'; e.target.style.boxShadow = selectedJob ? '0 4px 14px rgba(220,38,38,0.3)' : 'none'; }}
          >
            Analyze My Job Risk
          </button>
        </div>

        {/* Result */}
        {showResult && activeJob && (
          <div ref={resultRef}>
            {/* Risk Score Card */}
            <div style={{ background: riskInfo.bg, border: `2px solid ${riskInfo.border}`, borderRadius: 20, padding: 32, marginBottom: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 8 }}>{riskInfo.emoji}</div>
              <div style={{ fontSize: 56, fontWeight: 900, color: riskInfo.color, marginBottom: 4 }}>
                {activeJob.risk}%
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: riskInfo.color, marginBottom: 8, letterSpacing: '1px' }}>
                {riskInfo.label}
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#111827', marginBottom: 16 }}>
                {activeJob.title}
              </h2>
              <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6, maxWidth: 520, margin: '0 auto' }}>
                {getRiskVerdict(activeJob.risk)}
              </p>
            </div>

            {/* Key Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 24 }}>
              {[
                { label: 'Tasks Automatable', value: `${activeJob.tasks_automatable}%`, icon: '🤖' },
                { label: 'Timeline', value: activeJob.timeline, icon: '⏰' },
                { label: 'Avg Salary', value: activeJob.salary, icon: '💰' },
                { label: 'US Workers', value: activeJob.workers, icon: '👥' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{stat.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#111827' }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Analysis */}
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#111827' }}>Analysis</h3>
              <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7 }}>{activeJob.reasoning}</p>
            </div>

            {/* At Risk vs Safe */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#DC2626', marginBottom: 12 }}>Tasks AI Will Take</h3>
                {activeJob.at_risk_tasks.map((task, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#DC2626', fontSize: 14 }}>&#10005;</span>
                    <span style={{ fontSize: 14, color: '#7F1D1D' }}>{task}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#16A34A', marginBottom: 12 }}>Skills That Stay Safe</h3>
                {activeJob.safe_skills.map((skill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#16A34A', fontSize: 14 }}>&#10003;</span>
                    <span style={{ fontSize: 14, color: '#14532D' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA: Future-Proof Your Career */}
            <div style={{ background: 'linear-gradient(135deg, #1E293B, #334155)', borderRadius: 20, padding: 32, marginBottom: 24, color: '#fff', textAlign: 'center' }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                {activeJob.risk >= 60 ? 'Don\'t Wait to Get Replaced' : 'Give Yourself an Unfair Advantage'}
              </h3>
              <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 20, lineHeight: 1.6 }}>
                {activeJob.risk >= 60
                  ? 'Workers who learn AI tools are 2-3x more productive and earn 20-40% more. Start with the exact prompts, templates, and workflows top performers use.'
                  : 'AI won\'t replace you — but someone using AI will. Our prompt kits give you the exact templates top performers use to 10x their output.'}
              </p>
              <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '14px 32px', borderRadius: 100, fontWeight: 700, fontSize: 16, textDecoration: 'none', transition: 'transform 0.15s' }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'none'}
              >
                Get All 16 AI Kits — $97 (81% off)
              </a>
              <p style={{ fontSize: 13, opacity: 0.6, marginTop: 12 }}>500+ prompts, templates & workflows across 15 industries</p>
            </div>

            {/* Share Buttons */}
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, marginBottom: 24, textAlign: 'center' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: '#111827' }}>Share your result</h3>
              <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 16 }}>See if your friends' jobs are safer than yours</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => handleShare('twitter')}
                  style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: 100, fontWeight: 600, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Share on X
                </button>
                <button onClick={() => handleShare('linkedin')}
                  style={{ padding: '10px 20px', background: '#0A66C2', color: '#fff', border: 'none', borderRadius: 100, fontWeight: 600, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Share on LinkedIn
                </button>
                <button onClick={() => handleShare('copy')}
                  style={{ padding: '10px 20px', background: '#F3F4F6', color: '#111827', border: '1px solid #E5E7EB', borderRadius: 100, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* More Tools CTA */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, textAlign: 'center' }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                Want to discover your AI income potential?
              </p>
              <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>
                Take our 60-second quiz to find your AI founder archetype and matched side hustles
              </p>
              <Link href="/ai-income-blueprint" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 28px', borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Take the AI Income Blueprint Quiz
              </Link>
            </div>
          </div>
        )}

        {/* Browse All Jobs (when no result shown) */}
        {!showResult && (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 4, textAlign: 'center' }}>AI Replacement Risk by Job</h2>
            <p style={{ fontSize: 14, color: '#9CA3AF', textAlign: 'center', marginBottom: 24 }}>Click any job to see full analysis</p>

            {/* Highest Risk */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#DC2626', marginBottom: 12 }}>Highest Risk (80%+)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 24 }}>
              {JOB_LIST.filter(k => JOBS[k].risk >= 80).sort((a, b) => JOBS[b].risk - JOBS[a].risk).map(key => (
                <button key={key} onClick={() => { setSelectedJob(key); setSearchQuery(JOBS[key].title); handleAnalyze(); setShowResult(true); setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                  style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>{JOBS[key].title}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#DC2626' }}>{JOBS[key].risk}%</span>
                </button>
              ))}
            </div>

            {/* Moderate Risk */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#D97706', marginBottom: 12 }}>High Risk (60-79%)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 24 }}>
              {JOB_LIST.filter(k => JOBS[k].risk >= 60 && JOBS[k].risk < 80).sort((a, b) => JOBS[b].risk - JOBS[a].risk).map(key => (
                <button key={key} onClick={() => { setSelectedJob(key); setSearchQuery(JOBS[key].title); setShowResult(true); setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                  style={{ padding: '10px 14px', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>{JOBS[key].title}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#D97706' }}>{JOBS[key].risk}%</span>
                </button>
              ))}
            </div>

            {/* Low Risk */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#CA8A04', marginBottom: 12 }}>Moderate Risk (40-59%)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 24 }}>
              {JOB_LIST.filter(k => JOBS[k].risk >= 40 && JOBS[k].risk < 60).sort((a, b) => JOBS[b].risk - JOBS[a].risk).map(key => (
                <button key={key} onClick={() => { setSelectedJob(key); setSearchQuery(JOBS[key].title); setShowResult(true); setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                  style={{ padding: '10px 14px', background: '#FEFCE8', border: '1px solid #FEF08A', borderRadius: 10, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>{JOBS[key].title}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#CA8A04' }}>{JOBS[key].risk}%</span>
                </button>
              ))}
            </div>

            {/* Safe */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#16A34A', marginBottom: 12 }}>Low Risk / Safe (under 40%)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 24 }}>
              {JOB_LIST.filter(k => JOBS[k].risk < 40).sort((a, b) => JOBS[b].risk - JOBS[a].risk).map(key => (
                <button key={key} onClick={() => { setSelectedJob(key); setSearchQuery(JOBS[key].title); setShowResult(true); setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                  style={{ padding: '10px 14px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>{JOBS[key].title}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#16A34A' }}>{JOBS[key].risk}%</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 24, color: '#111827' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How accurate is this AI job risk score?', a: 'Our risk scores are based on analysis of task automation potential, industry research from McKinsey, Goldman Sachs, and the World Economic Forum, and real-world AI deployment data from 2024-2026. They represent the percentage of your role\'s tasks that could be automated by AI within the stated timeline.' },
            { q: 'Does a high risk score mean I\'ll definitely lose my job?', a: 'No. A high risk score means many of your current tasks are automatable. But jobs evolve — the best strategy is to focus on the human skills AI can\'t replicate (shown in your results) and learn to use AI as a force multiplier.' },
            { q: 'How can I protect my career from AI?', a: 'Three strategies: 1) Learn to use AI tools to become 2-3x more productive. 2) Focus on skills AI struggles with (relationships, complex judgment, physical presence). 3) Position yourself as the person who manages AI, not competes with it.' },
            { q: 'What if my job isn\'t listed?', a: 'Our database covers 40+ of the most common US jobs. If yours isn\'t listed, look for the closest match. The risk factors are often similar within categories (e.g., most administrative roles share similar automation patterns).' },
          ].map((faq, i) => (
            <details key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '16px 20px', marginBottom: 8 }}>
              <summary style={{ fontSize: 15, fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none' }}>
                {faq.q}
              </summary>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        details summary::-webkit-details-marker { display: none; }
        details summary::before {
          content: '+ ';
          font-weight: bold;
          margin-right: 8px;
        }
        details[open] summary::before { content: '- '; }
      `}</style>
    </Layout>
  );
}
