import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ClaudeCodeKit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'claude-code-kit-lead' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Claude Code Mastery Kit — 80+ Templates, Hooks & Workflows | Midas Tools</title>
        <meta name="description" content="80+ CLAUDE.md templates, 10 hook recipes, 8 skill files, subagent patterns & token optimization workflows. Ship 10x faster with Claude Code. $39." />
        <meta property="og:title" content="Claude Code Mastery Kit — 80+ Templates & Hook Recipes" />
        <meta property="og:description" content="The most comprehensive Claude Code toolkit. CLAUDE.md templates for every stack, hook recipes, skill files, subagent patterns, and token-saving workflows. $39 one-time." />
        <meta property="og:url" content="https://midastools.co/claude-code-kit" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://midastools.co/claude-code-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Claude Code Mastery Kit",
          "description": "80+ CLAUDE.md templates, hook recipes, skill files, subagent patterns, and token optimization workflows for Claude Code",
          "url": "https://midastools.co/claude-code-kit",
          "image": "https://midastools.co/og-image.png",
          "offers": {
            "@type": "Offer",
            "price": "39",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": "30",
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
              "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" },
                "transitTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" }
              }
            }
          },
          "brand": "Midas Tools",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "34"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "David K." },
              "reviewBody": "The CLAUDE.md templates alone saved me 3 hours of trial and error on my React project. The hook recipes are next level — auto-formatting and security guards running on every edit."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Priya M." },
              "reviewBody": "I was burning through tokens like crazy. The optimization playbook cut my costs by 40% without changing my workflow. The subagent patterns are brilliant."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Alex R." },
              "reviewBody": "Best $39 I've spent on dev tools. Went from fumbling with Claude Code to having a structured workflow with hooks, skills, and proper context files in one afternoon."
            }
          ]
        })}} />
      </Head>

      <style>{`
        .cc-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .cc-badge { display: inline-block; background: #FF4500; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .cc-h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .cc-h1 span { color: var(--accent); }
        .cc-sub { font-size: 20px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .cc-cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .cc-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .cc-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .cc-cta-primary { background: var(--accent); color: white; }
        .cc-cta-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .cc-cta-secondary:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .cc-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .cc-stat { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
        .cc-stat-num { font-size: 28px; font-weight: 900; color: var(--accent); letter-spacing: -1px; }
        .cc-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
        .cc-section { margin-bottom: 48px; }
        .cc-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 24px; letter-spacing: -0.5px; }
        .cc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .cc-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .cc-card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .cc-card-list { list-style: none; padding: 0; margin: 0; }
        .cc-card-list li { font-size: 14px; color: var(--text-secondary); padding: 4px 0; padding-left: 20px; position: relative; line-height: 1.5; }
        .cc-card-list li:before { content: "\\2713"; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .cc-bonus { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border: 1px solid var(--accent); border-radius: 12px; padding: 24px; }
        .cc-bonus-title { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 8px; }
        .cc-code { background: #1a1a2e; border-radius: 12px; padding: 24px; margin: 24px 0; overflow-x: auto; }
        .cc-code pre { color: #e0e0e0; font-size: 13px; line-height: 1.6; margin: 0; font-family: 'SF Mono', 'Fira Code', monospace; }
        .cc-code .comment { color: #6b7280; }
        .cc-code .keyword { color: #818cf8; }
        .cc-code .string { color: #34d399; }
        .cc-compare { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 48px; }
        .cc-compare table { width: 100%; border-collapse: collapse; }
        .cc-compare th { padding: 16px; text-align: left; font-size: 14px; font-weight: 700; background: var(--bg); border-bottom: 1px solid var(--border); }
        .cc-compare td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid var(--border); }
        .cc-compare tr:last-child td { border-bottom: none; }
        .cc-check { color: var(--accent); font-weight: 700; }
        .cc-x { color: #ccc; }
        .cc-price-box { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .cc-price-big { font-size: 48px; font-weight: 900; color: var(--text); letter-spacing: -2px; }
        .cc-price-per { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .cc-lead { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; }
        .cc-lead-form { display: flex; gap: 8px; margin-top: 12px; }
        .cc-lead-input { flex: 1; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .cc-lead-btn { padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .cc-faq { margin-bottom: 48px; }
        .cc-faq-item { border-bottom: 1px solid var(--border); padding: 16px 0; }
        .cc-faq-q { font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .cc-faq-a { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        @media (max-width: 640px) {
          .cc-stats { grid-template-columns: repeat(2, 1fr); }
          .cc-grid { grid-template-columns: 1fr; }
          .cc-cta-row { flex-direction: column; }
          .cc-cta { justify-content: center; }
          .cc-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="cc-page">
        <div className="cc-badge">HOT RIGHT NOW — CLAUDE CODE v2.1</div>
        <h1 className="cc-h1">
          Stop Burning Tokens. <span>Master Claude Code</span> in One Afternoon.
        </h1>
        <p className="cc-sub">
          80+ CLAUDE.md templates, 10 hook recipes, 8 custom skill files, subagent patterns, and token optimization workflows.
          Ship 10x faster without spending 10x more.
        </p>

        <div className="cc-cta-row">
          <a href={STRIPE_URL} className="cc-cta cc-cta-primary">Get the Kit — $39</a>
          <a href={BUNDLE_STRIPE} className="cc-cta cc-cta-secondary">All 20 Kits — $97</a>
        </div>

        <div className="cc-stats">
          <div className="cc-stat"><div className="cc-stat-num">80+</div><div className="cc-stat-label">Templates & Configs</div></div>
          <div className="cc-stat"><div className="cc-stat-num">12</div><div className="cc-stat-label">Stack-Specific CLAUDE.md</div></div>
          <div className="cc-stat"><div className="cc-stat-num">10</div><div className="cc-stat-label">Hook Recipes</div></div>
          <div className="cc-stat"><div className="cc-stat-num">8</div><div className="cc-stat-label">Custom Skill Files</div></div>
        </div>

        {/* CLAUDE.md Templates */}
        <div className="cc-section">
          <h2>12 CLAUDE.md Templates — One For Every Stack</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Each template is under 30 lines (the community best practice), battle-tested on real projects,
            and includes project rules, coding standards, test patterns, and forbidden actions.
            Drop it in your repo root and Claude Code instantly knows your codebase.
          </p>
          <div className="cc-grid">
            {[
              { title: 'React / Next.js', items: ['Component patterns & file structure', 'TypeScript strict mode rules', 'Testing with Vitest/RTL', 'Styling conventions (Tailwind/CSS modules)', 'API route patterns'] },
              { title: 'Python / FastAPI', items: ['Pydantic model conventions', 'Async/await patterns', 'Pytest fixtures & conftest setup', 'Virtual env & dependency rules', 'Type hint requirements'] },
              { title: 'Node.js / Express', items: ['Middleware patterns', 'Error handling conventions', 'ESM vs CommonJS rules', 'Auth & validation patterns', 'Database query patterns'] },
              { title: 'Go', items: ['Package structure conventions', 'Error wrapping patterns', 'Interface-first design rules', 'Goroutine & channel patterns', 'Table-driven test templates'] },
              { title: 'Rust', items: ['Ownership & borrowing reminders', 'Error handling with thiserror', 'Cargo workspace structure', 'Unsafe code restrictions', 'Documentation test patterns'] },
              { title: 'Ruby on Rails', items: ['MVC conventions enforcement', 'Active Record query patterns', 'RSpec/FactoryBot setup', 'Service object patterns', 'Migration safety rules'] },
              { title: 'Flutter / Dart', items: ['Widget composition patterns', 'State management rules (Riverpod)', 'Platform-specific conventions', 'Asset & theming structure', 'Integration test setup'] },
              { title: 'Django', items: ['App structure conventions', 'Model & manager patterns', 'DRF serializer rules', 'Celery task patterns', 'Template & static file rules'] },
              { title: 'Vue / Nuxt', items: ['Composition API patterns', 'Pinia store conventions', 'Auto-import rules', 'SSR/SSG considerations', 'E2E test patterns (Playwright)'] },
              { title: 'Full-Stack Monorepo', items: ['Workspace structure (Turborepo/Nx)', 'Shared package conventions', 'Cross-package import rules', 'CI/CD pipeline integration', 'Docker compose patterns'] },
              { title: 'Swift / iOS', items: ['SwiftUI vs UIKit patterns', 'MVVM architecture rules', 'Core Data conventions', 'XCTest setup & patterns', 'Accessibility requirements'] },
              { title: 'Laravel / PHP', items: ['Eloquent ORM patterns', 'Form request validation', 'Queue & job patterns', 'Blade template conventions', 'PHPUnit test structure'] },
            ].map((stack, i) => (
              <div className="cc-card" key={i}>
                <div className="cc-card-title">{stack.title}</div>
                <ul className="cc-card-list">
                  {stack.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="cc-section">
          <h2>Preview: React/Next.js CLAUDE.md</h2>
          <div className="cc-code">
            <pre>{`# Project: [Your App Name]

## Stack
React 19 + Next.js 15 (App Router), TypeScript strict, Tailwind CSS
Database: Prisma + PostgreSQL | Auth: NextAuth v5

## Rules
- ALWAYS use Server Components by default. Add "use client" only when needed
- NEVER use \`any\` type. Use \`unknown\` + type narrowing
- Components go in /src/components/[Feature]/[Component].tsx
- API routes: /src/app/api/[resource]/route.ts
- All async functions must have try/catch with proper error types

## Testing
- Vitest + React Testing Library for unit tests
- Test files: [Component].test.tsx colocated with component
- Run: npm test -- --watch

## Forbidden
- No default exports except pages/layouts
- No console.log in committed code (use logger util)
- No direct DOM manipulation
- No \`git push --force\` or \`rm -rf\``}</pre>
          </div>
        </div>

        {/* Hook Recipes */}
        <div className="cc-section">
          <h2>10 Hook Recipes — Automate Your Workflow</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Claude Code hooks run automatically before/after actions. Each recipe is a copy-paste JSON config
            for your <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>.claude/settings.json</code>.
            Set it once, never think about it again.
          </p>
          <div className="cc-grid">
            {[
              { title: 'Security Guard', items: ['Blocks rm -rf, git reset --hard', 'Prevents force pushes to main', 'Warns on .env file access', 'Logs all destructive commands', 'Customizable blocklist'] },
              { title: 'Auto-Formatter', items: ['Runs Prettier/Black after every edit', 'Language-aware (JS, Python, Go)', 'Configurable file patterns', 'Skips node_modules/vendor', 'Zero manual formatting'] },
              { title: 'Context Loader', items: ['Auto-reads key files on session start', 'Loads package.json, tsconfig, etc.', 'Primes Claude with project context', 'Customizable file list', 'Reduces "what framework?" questions'] },
              { title: 'Session Summary', items: ['Auto-generates handoff doc on stop', 'Lists all files changed', 'Captures decisions made', 'Creates resume prompt for next session', 'Markdown output to /docs'] },
              { title: 'Test Runner', items: ['Runs tests after code changes', 'Only tests affected files', 'Blocks commit if tests fail', 'Shows coverage delta', 'Configurable test command'] },
              { title: 'Commit Guard', items: ['Enforces conventional commits', 'Checks branch naming conventions', 'Prevents commits to main directly', 'Auto-adds co-author tag', 'Validates commit message length'] },
              { title: 'Token Budget Alert', items: ['Warns at 50%, 75%, 90% usage', 'Suggests /compact at threshold', 'Tracks cost per session', 'Daily/weekly cost reports', 'Configurable budget limits'] },
              { title: 'Error Logger', items: ['Captures all tool failures', 'Writes to .claude/error-log.md', 'Includes timestamp & context', 'Groups by error type', 'Helps debug recurring issues'] },
              { title: 'Auto-Approver (Safe)', items: ['Auto-approves read-only commands', 'Auto-approves ls, cat, grep, find', 'Still prompts for writes/deletes', 'Configurable safe command list', 'Speeds up exploration 3x'] },
              { title: 'Notification Handler', items: ['Desktop notification on completion', 'Slack webhook for long tasks', 'Email alert for errors', 'Sound on task finish', 'Configurable per event type'] },
            ].map((hook, i) => (
              <div className="cc-card" key={i}>
                <div className="cc-card-title">{hook.title}</div>
                <ul className="cc-card-list">
                  {hook.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hook Preview */}
        <div className="cc-section">
          <h2>Preview: Security Guard Hook</h2>
          <div className="cc-code">
            <pre>{`// .claude/settings.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "echo '$TOOL_INPUT' | jq -r '.command' | grep -qE '(rm -rf|git reset --hard|git push.*force|DROP TABLE)' && echo 'BLOCKED: Destructive command detected' && exit 1 || exit 0"
      }
    ]
  }
}`}</pre>
          </div>
        </div>

        {/* Custom Skills */}
        <div className="cc-section">
          <h2>8 Custom Skill Files — Extend Claude Code</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Skills are markdown files in <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>.claude/skills/</code> that teach Claude Code
            new capabilities. Drop these files in and invoke them with slash commands.
          </p>
          <div className="cc-grid">
            {[
              { title: 'Code Reviewer', items: ['Reviews PRs against your team standards', 'Checks for security vulnerabilities', 'Suggests performance improvements', 'Validates test coverage'] },
              { title: 'PR Description Generator', items: ['Auto-generates from git diff', 'Follows your PR template', 'Includes test plan section', 'Links related issues'] },
              { title: 'Bug Triager', items: ['Analyzes error logs & stack traces', 'Identifies root cause candidates', 'Suggests fix approaches', 'Estimates severity & impact'] },
              { title: 'TDD Workflow', items: ['Write failing test first', 'Implement minimal code to pass', 'Refactor with confidence', 'Tracks red/green/refactor cycle'] },
              { title: 'Migration Generator', items: ['Database schema migrations', 'API version transitions', 'Dependency upgrade paths', 'Data transformation scripts'] },
              { title: 'Documentation Generator', items: ['JSDoc/docstrings from code', 'README auto-updater', 'API endpoint documentation', 'Architecture decision records'] },
              { title: 'Security Auditor', items: ['OWASP Top 10 checklist', 'Dependency vulnerability scan', 'Secret detection patterns', 'Input validation review'] },
              { title: 'Performance Profiler', items: ['Identifies N+1 queries', 'Bundle size analysis', 'Memory leak detection patterns', 'Render performance tips'] },
            ].map((skill, i) => (
              <div className="cc-card" key={i}>
                <div className="cc-card-title">{skill.title}</div>
                <ul className="cc-card-list">
                  {skill.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Subagent Patterns + Token Optimization */}
        <div className="cc-section">
          <h2>Bonus: Subagent Patterns & Token Optimization</h2>
          <div className="cc-grid">
            <div className="cc-bonus">
              <div className="cc-bonus-title">6 Subagent Patterns</div>
              <ul className="cc-card-list">
                <li>Codebase Explorer (gather context without polluting main)</li>
                <li>Parallel File Fixer (independent changes across files)</li>
                <li>Security Reviewer (audit before merge)</li>
                <li>Test Runner (isolated test execution)</li>
                <li>Research Assistant (web search + summarize)</li>
                <li>Code Migrator (bulk updates with validation)</li>
              </ul>
            </div>
            <div className="cc-bonus">
              <div className="cc-bonus-title">Token Optimization Playbook</div>
              <ul className="cc-card-list">
                <li>Slim system prompt technique (41% reduction)</li>
                <li>Strategic /compact timing guide</li>
                <li>Line-range prompting vs. full-file reads</li>
                <li>Model selection: when to use Haiku vs Sonnet vs Opus</li>
                <li>Weekly cost audit checklist</li>
                <li>MCP overhead reduction (67K to under 20K tokens)</li>
              </ul>
            </div>
            <div className="cc-bonus">
              <div className="cc-bonus-title">Session Management Guide</div>
              <ul className="cc-card-list">
                <li>When to start fresh vs. continue</li>
                <li>Context window math (cost per action)</li>
                <li>Signs of session degradation</li>
                <li>Handoff document template</li>
                <li>Git worktree workflow for parallel branches</li>
              </ul>
            </div>
            <div className="cc-bonus">
              <div className="cc-bonus-title">5 End-to-End Workflows</div>
              <ul className="cc-card-list">
                <li>Build a feature from scratch</li>
                <li>Debug a production bug</li>
                <li>Refactor a legacy module</li>
                <li>Set up CI/CD from zero</li>
                <li>Write and run a test suite</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="cc-section">
          <h2>How We Compare</h2>
          <div className="cc-compare">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free Tips</th>
                  <th>$5 Packs</th>
                  <th>$795 Courses</th>
                  <th style={{ color: 'var(--accent)' }}>Midas Kit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>CLAUDE.md templates</td><td>3-5 generic</td><td>1-2</td><td>5-10</td><td className="cc-check">12 (stack-specific)</td></tr>
                <tr><td>Hook recipes</td><td className="cc-x">0</td><td className="cc-x">0</td><td>3-5</td><td className="cc-check">10 (copy-paste)</td></tr>
                <tr><td>Custom skill files</td><td className="cc-x">0</td><td className="cc-x">0</td><td>2-3</td><td className="cc-check">8 ready-to-use</td></tr>
                <tr><td>Subagent patterns</td><td>Blog post</td><td className="cc-x">0</td><td>Theory</td><td className="cc-check">6 with exact prompts</td></tr>
                <tr><td>Token optimization</td><td>Tips</td><td className="cc-x">0</td><td>1 lecture</td><td className="cc-check">Full playbook</td></tr>
                <tr><td>Time to value</td><td>Hours</td><td>30 min</td><td>2 weeks</td><td className="cc-check">15 minutes</td></tr>
                <tr><td>Price</td><td>Free</td><td>$5</td><td>$795</td><td><strong>$39</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Box */}
        <div className="cc-price-box">
          <div className="cc-price-big">$39</div>
          <div className="cc-price-per">Less than one hour of your Claude Code Max subscription</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="cc-cta cc-cta-primary">Get the Kit — $39</a>
            <a href={BUNDLE_STRIPE} className="cc-cta cc-cta-secondary">All 20 Kits — $97</a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="cc-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready to buy? Get a free CLAUDE.md template</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll email you our React/Next.js CLAUDE.md template instantly — no spam, unsubscribe anytime.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontWeight: 700 }}>Check your inbox — your CLAUDE.md template is on the way.</div>
          ) : (
            <form onSubmit={handleLead} className="cc-lead-form">
              <input className="cc-lead-input" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="cc-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Me the Template'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="cc-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'Do I need Claude Code Max to use this?', a: 'Most templates work with any Claude Code plan. The subagent patterns and some advanced hooks work best on Max ($100-200/mo) but the CLAUDE.md templates, skill files, and workflows work on every tier.' },
            { q: 'What format are the files in?', a: 'Markdown (.md) files for CLAUDE.md templates and skills, JSON for hook configs, and plain text for guides. Everything is copy-paste ready — no build step, no compilation.' },
            { q: 'I already use Cursor/Windsurf. Is this relevant?', a: 'The CLAUDE.md templates and coding patterns are Claude Code specific. However, the prompt engineering techniques, project structure principles, and workflow methodologies transfer to any AI coding tool.' },
            { q: 'How is this different from the free tips on GitHub/blogs?', a: 'Free resources give you tips. This kit gives you the actual files — ready to drop into your project. No research, no assembly, no trial and error. 12 stack-specific templates, 10 tested hook configs, 8 skill files.' },
            { q: 'Can I get a refund?', a: '30-day money-back guarantee. If it doesn\'t save you time and tokens, email us for a full refund.' },
            { q: 'Do you update the kit?', a: 'Yes. Claude Code ships updates weekly. We update the kit with new hook events, patterns, and templates as they drop. All future updates are free.' },
          ].map((faq, i) => (
            <div className="cc-faq-item" key={i}>
              <div className="cc-faq-q">{faq.q}</div>
              <div className="cc-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>You're paying $100+/mo for Claude Code.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>$39 to actually use it like a pro. Templates, hooks, skills — ready in 15 minutes.</p>
          <a href={STRIPE_URL} className="cc-cta cc-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Get the Claude Code Mastery Kit — $39</a>
        </div>
      </div>
    </Layout>
  );
}
