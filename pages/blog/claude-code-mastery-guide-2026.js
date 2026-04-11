import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_CODE = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ClaudeCodeMasteryGuide() {
  const title = 'The Ultimate Claude Code CLAUDE.md Guide: Templates, Hooks & Workflows (2026)';
  const description = 'Copy-paste CLAUDE.md templates for React, Python, Go + 10 hook recipes + subagent patterns. The complete Claude Code mastery guide with ready-to-use configs.';
  const url = 'https://midastools.co/blog/claude-code-mastery-guide-2026';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Person', name: 'Rey Midas', url: 'https://midastools.co' },
      publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a CLAUDE.md file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A CLAUDE.md file is a markdown file placed in your project root that gives Claude Code context about your project. It defines coding standards, project structure, test patterns, and forbidden actions. Think of it as an onboarding doc that makes Claude Code understand your codebase instantly.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long should a CLAUDE.md file be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep it under 30 lines. The community consensus is that shorter CLAUDE.md files perform better because they reduce token overhead and keep instructions focused. Include only project-specific rules that Claude would otherwise get wrong.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are Claude Code hooks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hooks are automated scripts that run before or after Claude Code actions. They are configured in .claude/settings.json and can automate formatting, enforce security rules, run tests, generate summaries, and more. There are 12 hook events including PreToolUse, PostToolUse, SessionStart, and Stop.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I reduce Claude Code token costs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Key strategies: keep CLAUDE.md under 30 lines (41% token reduction), use line-range prompting instead of reading full files, delegate to subagents for context-heavy tasks, reduce MCP server overhead, use /compact strategically, and choose the right model tier (Haiku for exploration, Sonnet for coding, Opus for architecture).'
          }
        },
        {
          '@type': 'Question',
          name: 'What are Claude Code subagents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Subagents are separate Claude Code instances spawned by the main agent to handle specific tasks in isolation. They get their own context window, preventing the main conversation from getting polluted. Common patterns: Codebase Explorer (gather info), Parallel File Fixer (multi-file changes), Test Runner, and Security Reviewer.'
          }
        }
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        ))}
      </Head>

      <style>{`
        .blog-post { max-width: 720px; margin: 0 auto; padding: 80px 24px 64px; }
        .blog-post h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 900; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
        .blog-meta { font-size: 14px; color: var(--text-secondary); margin-bottom: 32px; }
        .blog-post h2 { font-size: 24px; font-weight: 800; color: var(--text); margin: 40px 0 16px; letter-spacing: -0.5px; }
        .blog-post h3 { font-size: 18px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .blog-post p { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; }
        .blog-post ul, .blog-post ol { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; padding-left: 24px; }
        .blog-post li { margin-bottom: 8px; }
        .blog-post strong { color: var(--text); }
        .blog-post code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
        .blog-code { background: #1a1a2e; border-radius: 12px; padding: 24px; margin: 20px 0; overflow-x: auto; }
        .blog-code pre { color: #e0e0e0; font-size: 13px; line-height: 1.6; margin: 0; font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; }
        .blog-cta { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin: 40px 0; }
        .blog-cta h3 { font-size: 20px; margin: 0 0 8px; color: var(--text); }
        .blog-cta p { font-size: 15px; color: var(--text-secondary); margin: 0 0 20px; }
        .blog-cta-btn { display: inline-block; background: var(--accent); color: white; padding: 14px 32px; border-radius: 100px; font-weight: 700; text-decoration: none; transition: transform 0.2s; }
        .blog-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .blog-tip { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; padding: 20px 24px; margin: 24px 0; }
        .blog-tip p { margin: 0; font-size: 15px; }
      `}</style>

      <article className="blog-post">
        <p className="blog-meta">April 10, 2026 &middot; 12 min read</p>
        <h1>{title}</h1>

        <p>
          Claude Code just shipped <strong>v2.1.98</strong> and developers everywhere are asking the same question:
          <em> "How do I actually set this up properly?"</em>
        </p>
        <p>
          After 75+ sessions using Claude Code to build production applications, here's everything I've learned about
          CLAUDE.md files, hooks, skills, subagents, and token optimization — condensed into actionable templates you
          can copy-paste right now.
        </p>

        <h2>What is a CLAUDE.md File (And Why It Matters)</h2>
        <p>
          A <code>CLAUDE.md</code> file sits in your project root and tells Claude Code how to work with your codebase.
          Without one, Claude Code treats every project like a blank slate — asking about your framework, guessing at
          conventions, and making mistakes it shouldn't.
        </p>
        <p>
          <strong>With a good CLAUDE.md, Claude Code:</strong>
        </p>
        <ul>
          <li>Follows your coding standards from the first prompt</li>
          <li>Knows your test framework and how to run tests</li>
          <li>Respects forbidden patterns (no <code>any</code> types, no force pushes)</li>
          <li>Uses the right file structure without asking</li>
          <li>Avoids destructive commands that could break your project</li>
        </ul>

        <div className="blog-tip">
          <p><strong>The #1 rule:</strong> Keep your CLAUDE.md under 30 lines. Longer files waste tokens and dilute the important rules. Only include things Claude would otherwise get wrong.</p>
        </div>

        <h2>CLAUDE.md Template: React / Next.js</h2>
        <p>This is the template I use for every Next.js project. Drop it in your repo root:</p>
        <div className="blog-code">
          <pre>{`# Project: [Your App Name]

## Stack
React 19 + Next.js 15 (App Router), TypeScript strict, Tailwind CSS
Database: Prisma + PostgreSQL | Auth: NextAuth v5

## Rules
- ALWAYS use Server Components by default. Add "use client" only when needed
- NEVER use \`any\` type. Use \`unknown\` + type narrowing
- Components: /src/components/[Feature]/[Component].tsx
- API routes: /src/app/api/[resource]/route.ts
- All async functions must have try/catch with proper error types
- Prefer named exports over default exports (except pages/layouts)

## Testing
- Vitest + React Testing Library
- Test files: [Component].test.tsx colocated with component
- Run: npm test -- --watch

## Forbidden
- No console.log in committed code (use logger util)
- No direct DOM manipulation
- No git push --force or rm -rf
- No inline styles (use Tailwind classes)`}</pre>
        </div>

        <h2>CLAUDE.md Template: Python / FastAPI</h2>
        <div className="blog-code">
          <pre>{`# Project: [Your API Name]

## Stack
Python 3.12+ | FastAPI | SQLAlchemy 2.0 | Pydantic v2
Database: PostgreSQL | Cache: Redis | Queue: Celery

## Rules
- ALL function parameters and returns must have type hints
- Use Pydantic models for all request/response schemas
- Async by default — use \`async def\` for all endpoints
- Routes in /app/api/v1/[resource].py
- Business logic in /app/services/[service].py (not in routes)

## Testing
- pytest + pytest-asyncio | Fixtures in conftest.py
- Run: pytest -xvs | Coverage: pytest --cov=app

## Forbidden
- No raw SQL queries (use SQLAlchemy ORM)
- No print() statements (use structlog)
- No mutable default arguments
- Never commit .env or secrets`}</pre>
        </div>

        <h2>CLAUDE.md Template: Go</h2>
        <div className="blog-code">
          <pre>{`# Project: [Your Service Name]

## Stack
Go 1.22+ | Chi router | sqlc for queries | pgx for Postgres

## Rules
- Errors: always wrap with fmt.Errorf("%w", err) — never discard
- Interfaces: define where consumed, not where implemented
- Packages: /cmd /internal /pkg structure
- Context: pass ctx as first param, always

## Testing
- Table-driven tests required for all exported functions
- Run: go test ./... -race -count=1

## Forbidden
- No init() functions
- No global mutable state
- No panic() except in main
- No unsafe package without comment explaining why`}</pre>
        </div>

        <div className="blog-cta">
          <h3>Want all 12 stack-specific templates?</h3>
          <p>React, Python, Go, Rust, Rails, Flutter, Django, Vue, Laravel, Swift, Full-Stack Monorepo — plus hooks, skills, and workflows.</p>
          <a href={STRIPE_CODE} className="blog-cta-btn">Get the Claude Code Mastery Kit — $39</a>
        </div>

        <h2>Claude Code Hooks: 10 Recipes That Save Hours</h2>
        <p>
          Hooks are the most underused feature in Claude Code. They run scripts automatically before/after actions —
          configured once in <code>.claude/settings.json</code>, then they work forever. Here are the 10 I use daily:
        </p>

        <h3>1. Security Guard Hook</h3>
        <p>Blocks destructive commands before they execute. This has saved me from accidental <code>rm -rf</code> at least 3 times:</p>
        <div className="blog-code">
          <pre>{`// .claude/settings.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "echo '$TOOL_INPUT' | jq -r '.command' | grep -qE '(rm -rf|git reset --hard|git push.*force|DROP TABLE)' && echo 'BLOCKED: Destructive command' && exit 1 || exit 0"
      }
    ]
  }
}`}</pre>
        </div>

        <h3>2. Auto-Formatter Hook</h3>
        <p>Runs Prettier after every file edit — never commit unformatted code again:</p>
        <div className="blog-code">
          <pre>{`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "npx prettier --write '$FILE_PATH' 2>/dev/null || true"
      }
    ]
  }
}`}</pre>
        </div>

        <h3>3. Session Summary Hook</h3>
        <p>Auto-generates a handoff document when you stop a session, so tomorrow-you knows exactly where to pick up:</p>
        <div className="blog-code">
          <pre>{`{
  "hooks": {
    "Stop": [
      {
        "command": "echo '## Session $(date +%Y-%m-%d_%H:%M)\\n### Files Changed\\n' > .claude/last-session.md && git diff --name-only >> .claude/last-session.md"
      }
    ]
  }
}`}</pre>
        </div>

        <div className="blog-tip">
          <p><strong>Pro tip:</strong> The full kit includes 7 more hook recipes (test runner, commit guard, token budget alert, error logger, auto-approver, notification handler, context loader) — each with copy-paste JSON configs.</p>
        </div>

        <h2>Subagent Patterns: The 10x Multiplier</h2>
        <p>
          Subagents are separate Claude Code instances that handle tasks without polluting your main conversation's
          context window. If you're not using them, you're leaving massive productivity on the table.
        </p>

        <h3>Pattern 1: Codebase Explorer</h3>
        <p>When you need to understand a large codebase without burning main-conversation tokens:</p>
        <div className="blog-code">
          <pre>{`Use a subagent to explore the /src directory.
Find all API endpoints, their HTTP methods, and what
middleware they use. Report back as a markdown table.
Do NOT modify any files.`}</pre>
        </div>
        <p>The subagent reads dozens of files, uses its own context window, and returns a clean summary. Your main conversation stays lean.</p>

        <h3>Pattern 2: Parallel File Fixer</h3>
        <p>When you need the same change across many files (rename a variable, update imports, etc.):</p>
        <div className="blog-code">
          <pre>{`Launch a subagent to rename all instances of
"UserService" to "AccountService" across the entire
/src directory. Update imports, types, and tests.
Run the test suite after changes.`}</pre>
        </div>

        <h3>Pattern 3: Security Reviewer</h3>
        <p>Run a security audit in a subagent before every merge:</p>
        <div className="blog-code">
          <pre>{`Use a subagent to review all files changed in the
current branch (git diff main...HEAD --name-only).
Check for: hardcoded secrets, SQL injection, XSS
vulnerabilities, missing input validation, and
insecure dependencies. Output a security report.`}</pre>
        </div>

        <h2>Token Optimization: Cut Your Costs 40%</h2>
        <p>
          Claude Code Max costs $100-200/month. If you're burning through your allocation in 2 weeks, these strategies
          will stretch it to a full month:
        </p>
        <ol>
          <li><strong>Slim CLAUDE.md (41% reduction):</strong> Every line in your CLAUDE.md is read on every prompt. Cut it from 100 lines to 30 and watch your per-prompt cost drop.</li>
          <li><strong>Line-range prompting:</strong> Instead of "read the file," say "read lines 45-80 of auth.ts." Saves thousands of tokens per file read.</li>
          <li><strong>Strategic /compact:</strong> Don't wait until you hit the limit. Run <code>/compact</code> after every major task completion — it summarizes context and frees tokens.</li>
          <li><strong>Subagent delegation:</strong> If a task touches 10+ files, spawn a subagent. Their tokens don't count against your main conversation.</li>
          <li><strong>MCP overhead reduction:</strong> Each MCP server adds 5-15K tokens at session start. Disconnect servers you're not actively using. Some users report 67K token overhead from MCP alone.</li>
          <li><strong>Model selection:</strong> Use Haiku for exploration/reading, Sonnet for coding, Opus for architecture decisions. Don't use Opus to read files.</li>
        </ol>

        <div className="blog-cta">
          <h3>Get the complete Claude Code toolkit</h3>
          <p>12 CLAUDE.md templates, 10 hook recipes, 8 skill files, 6 subagent patterns, token optimization playbook, and 5 end-to-end workflows. Ready in 15 minutes.</p>
          <a href={STRIPE_CODE} className="blog-cta-btn">Claude Code Mastery Kit — $39</a>
        </div>

        <h2>Custom Skills: Teach Claude Code New Tricks</h2>
        <p>
          Skills are markdown files in <code>.claude/skills/</code> that extend Claude Code's capabilities.
          Here's a practical example — a Code Reviewer skill:
        </p>
        <div className="blog-code">
          <pre>{`# .claude/skills/code-reviewer.md

## Code Review Skill

When asked to review code, follow this checklist:

1. **Correctness**: Does the code do what it claims?
2. **Edge cases**: What inputs could break this?
3. **Performance**: Any N+1 queries, unnecessary re-renders, or O(n^2) loops?
4. **Security**: SQL injection, XSS, hardcoded secrets?
5. **Tests**: Are the changes tested? Are edge cases covered?
6. **Naming**: Are variables/functions named clearly?
7. **DRY**: Is there repeated code that should be extracted?

Output format:
- Start with a 1-line summary (LGTM / Needs Changes / Blocking Issues)
- List issues by severity (Critical > Major > Minor > Nit)
- For each issue, suggest the specific fix`}</pre>
        </div>
        <p>
          Once this file exists in <code>.claude/skills/</code>, you can invoke it with <code>/review</code> and Claude Code
          follows your exact review checklist instead of giving generic feedback.
        </p>

        <h2>The Three-Tier CLAUDE.md System</h2>
        <p>For teams, Claude Code supports three levels of context files:</p>
        <ol>
          <li><strong>Global (<code>~/.claude/CLAUDE.md</code>):</strong> Your personal preferences that apply to every project — preferred editor commands, commit message style, communication preferences.</li>
          <li><strong>Project (<code>.claude/CLAUDE.md</code>):</strong> Shared team standards — coding conventions, test requirements, forbidden patterns. Committed to the repo.</li>
          <li><strong>Local (<code>.claude/local.md</code>):</strong> Your personal overrides for this project — gitignored, for things like "I'm working on the auth module this sprint."</li>
        </ol>

        <div className="blog-tip">
          <p><strong>Team tip:</strong> Put your CLAUDE.md in version control but add <code>.claude/local.md</code> to <code>.gitignore</code>. This gives everyone shared standards while allowing personal customization.</p>
        </div>

        <h2>Quick Reference: Essential Slash Commands</h2>
        <ul>
          <li><code>/compact</code> — Compress conversation context (use after completing major tasks)</li>
          <li><code>/clear</code> — Start fresh conversation (nuclear option)</li>
          <li><code>/model</code> — Switch between Haiku/Sonnet/Opus mid-session</li>
          <li><code>/cost</code> — See current session cost and token usage</li>
          <li><code>/help</code> — See all available commands and skills</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Claude Code is the most powerful agentic coding tool available in 2026. But most developers are using maybe 20% of
          its capabilities. A proper CLAUDE.md file, a few hooks, and an understanding of subagent patterns will
          transform it from "fancy autocomplete" into a genuine 10x multiplier.
        </p>
        <p>
          The templates in this guide are free. If you want the complete set — all 12 stacks, all 10 hooks, 8 skill files,
          6 subagent patterns, the token optimization playbook, and 5 end-to-end workflows — the{' '}
          <Link href="/claude-code-kit" style={{ color: 'var(--accent)', fontWeight: 600 }}>Claude Code Mastery Kit</Link>{' '}
          has everything ready to drop into your projects in 15 minutes.
        </p>

        <div className="blog-cta" style={{ marginBottom: 0 }}>
          <h3>Ship 10x faster with Claude Code</h3>
          <p>80+ templates, hooks, skills, and workflows. One purchase, lifetime updates.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_CODE} className="blog-cta-btn">Get the Kit — $39</a>
            <a href={STRIPE_BUNDLE} className="blog-cta-btn" style={{ background: 'var(--text)' }}>All 20 Kits — $97</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
