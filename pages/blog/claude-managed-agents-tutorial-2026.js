import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ClaudeManagedAgentsTutorial() {
  const title = 'Claude Managed Agents: The Complete Getting Started Guide (2026)';
  const description = 'Learn how to build autonomous AI agents with Claude Managed Agents. Step-by-step tutorial with code examples in Python, TypeScript, and bash.';
  const url = 'https://midastools.co/blog/claude-managed-agents-tutorial-2026';

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
          name: 'What are Claude Managed Agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Claude Managed Agents are composable, cloud-hosted AI agents from Anthropic. Launched in public beta on April 8, 2026, they provide a pre-built agent harness with container-based environments, built-in tools (bash, file operations, web search), and SSE streaming — so you can deploy autonomous agents without building your own agent loop from scratch.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much do Claude Managed Agents cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Claude Managed Agents cost $0.08 per hour of compute time plus standard model token costs. For example, a coding agent running 12 sessions per day at roughly 10 minutes each would cost approximately $2.40 per day in compute, plus whatever tokens the model consumes during those sessions.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Managed Agents and the Messages API?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Messages API gives you raw model access where you build your own agent loop, tool handling, and state management. Managed Agents provide a complete pre-built harness with container environments, built-in tools, automatic session management, and SSE streaming. Use Messages API when you need full control; use Managed Agents when you want to ship faster with less infrastructure code.'
          }
        },
        {
          '@type': 'Question',
          name: 'What tools are built into Claude Managed Agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Managed Agents include several built-in tools: bash command execution, file read/write/edit operations, web search and URL fetching, and MCP (Model Context Protocol) server integration. You can also add custom tools via MCP servers connected to the agent environment.'
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
        <meta name="keywords" content="claude managed agents, anthropic managed agents, ai agents tutorial, claude agent api, build ai agent 2026" />
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
        .blog-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px; }
        .blog-table th { background: #f3f4f6; text-align: left; padding: 12px 16px; font-weight: 700; color: var(--text); border-bottom: 2px solid #e5e7eb; }
        .blog-table td { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: var(--text-secondary); line-height: 1.5; }
        .blog-table tr:last-child td { border-bottom: none; }
      `}</style>

      <article className="blog-post">
        <p className="blog-meta">April 10, 2026 &middot; 14 min read</p>
        <h1>{title}</h1>

        <p>
          On April 8, 2026, Anthropic launched <strong>Managed Agents</strong> in public beta — and it changes how
          developers build with Claude. Instead of wiring up your own agent loop with the Messages API, you now get
          a fully hosted agent runtime with container environments, built-in tools, and SSE streaming out of the box.
        </p>
        <p>
          This guide walks through everything you need to go from zero to a working managed agent: core concepts,
          setup, code examples, pricing, and when to use it versus the raw Messages API.
        </p>

        <div className="blog-tip">
          <p><strong>Beta notice:</strong> Managed Agents require the <code>managed-agents-2026-04-01</code> beta header. The API surface may change before GA. All examples in this guide use the April 2026 beta version.</p>
        </div>

        <h2>1. What Are Claude Managed Agents?</h2>
        <p>
          Managed Agents are composable APIs for deploying cloud-hosted AI agents. Think of them as <strong>Claude-as-a-service
          with an agent harness built in</strong>. You define an agent (model, system prompt, tools), spin up a sandboxed
          environment, create a session, and send messages. Anthropic handles the agent loop, tool execution, and
          container lifecycle.
        </p>
        <p>
          <strong>The key difference from the Messages API:</strong> with Messages, you build your own agent loop —
          you call the model, parse tool_use blocks, execute tools locally, and feed results back. With Managed Agents,
          that entire loop runs server-side in a managed container. You just send a message and stream events back.
        </p>

        <h2>2. Core Concepts</h2>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>What It Is</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agent</strong></td>
              <td>A reusable configuration: model, system prompt, tool set. Created once, used across many sessions.</td>
            </tr>
            <tr>
              <td><strong>Environment</strong></td>
              <td>A sandboxed container (Debian-based) with a filesystem, network access, and installed tools. Persists across turns within a session.</td>
            </tr>
            <tr>
              <td><strong>Session</strong></td>
              <td>A conversation thread that binds an Agent to an Environment. Maintains message history and state.</td>
            </tr>
            <tr>
              <td><strong>Events</strong></td>
              <td>Server-Sent Events (SSE) streamed back as the agent works: text deltas, tool calls, tool results, errors, and completion signals.</td>
            </tr>
          </tbody>
        </table>

        <h2>3. Getting Started</h2>

        <h3>Step 1: Install the SDK</h3>
        <p>Choose your preferred method:</p>
        <div className="blog-code">
          <pre>{`# CLI tool
brew install anthropics/tap/ant

# Python SDK (v1.x+ includes managed agents)
pip install anthropic

# Node.js / TypeScript SDK
npm install @anthropic-ai/sdk`}</pre>
        </div>

        <h3>Step 2: Create an Agent</h3>
        <p>An agent is your reusable config. You define it once and spin up sessions against it:</p>
        <div className="blog-code">
          <pre>{`from anthropic import Anthropic

client = Anthropic()

agent = client.beta.agents.create(
    name="Coding Assistant",
    model="claude-sonnet-4-6",
    system="You are a helpful coding assistant. Write clean, tested code.",
    tools=[{"type": "agent_toolset_20260401"}],
    # beta header is set automatically by the SDK
)

print(f"Agent ID: {agent.id}")
# => agent_01J...`}</pre>
        </div>
        <p>
          The <code>agent_toolset_20260401</code> tool type gives your agent access to all built-in tools (bash, file operations, web search). You can also specify individual tools if you want finer control.
        </p>

        <h3>Step 3: Create an Environment</h3>
        <p>The environment is the sandbox where your agent does its work:</p>
        <div className="blog-code">
          <pre>{`environment = client.beta.agents.environments.create(
    agent_id=agent.id,
)

print(f"Environment ID: {environment.id}")
# => env_01J...`}</pre>
        </div>

        <div className="blog-tip">
          <p><strong>Note:</strong> Environments persist filesystem state across turns. If your agent writes a file in turn 1, it can read that file in turn 5. The container stays warm while the session is active.</p>
        </div>

        <h3>Step 4: Create a Session</h3>
        <p>A session binds your agent to an environment and tracks conversation history:</p>
        <div className="blog-code">
          <pre>{`session = client.beta.agents.sessions.create(
    agent_id=agent.id,
    environment_id=environment.id,
)

print(f"Session ID: {session.id}")
# => session_01J...`}</pre>
        </div>

        <h3>Step 5: Send a Message and Stream the Response</h3>
        <p>This is where the magic happens. You send a message, and the agent autonomously works through the problem — executing tools, reading results, iterating — and streams events back to you:</p>
        <div className="blog-code">
          <pre>{`import json

# Send a message and stream the response
with client.beta.agents.sessions.turn.stream(
    session_id=session.id,
    agent_id=agent.id,
    messages=[{
        "role": "user",
        "content": "Create a Python script that fetches the top 5 HN stories and saves them to stories.json"
    }],
) as stream:
    for event in stream:
        if event.type == "content_block_delta":
            if hasattr(event.delta, "text"):
                print(event.delta.text, end="", flush=True)
        elif event.type == "tool_use":
            print(f"\\n[Tool: {event.name}]")
        elif event.type == "tool_result":
            print(f"[Result: {event.content[:100]}...]")

print("\\n--- Agent finished ---")`}</pre>
        </div>

        <h2>4. What Happens Under the Hood</h2>
        <p>
          When you send a message to a managed agent, here is what happens inside Anthropic's infrastructure:
        </p>
        <ol>
          <li><strong>Container provisioning:</strong> If the environment is cold, a Debian-based container spins up with your configured tools and any previously persisted filesystem state.</li>
          <li><strong>Agent loop starts:</strong> The model receives your message plus the conversation history and system prompt. It decides whether to respond directly or use a tool.</li>
          <li><strong>Tool execution:</strong> If the model calls a tool (e.g., bash to run a command), the harness executes it inside the container and feeds the result back to the model. This loop repeats until the model produces a final text response.</li>
          <li><strong>SSE streaming:</strong> Throughout the entire process, events are streamed back to your client in real-time — text deltas, tool calls, tool results, and status changes.</li>
          <li><strong>Idle state:</strong> After the turn completes, the container enters an idle state. It stays warm for subsequent turns but is not consuming compute. You are billed only for active compute time.</li>
        </ol>

        <h2>5. Built-in Tools</h2>
        <p>
          When you use the <code>agent_toolset_20260401</code> tool type, your agent gets access to these capabilities:
        </p>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>What It Does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bash</strong></td>
              <td>Execute shell commands in the container. Install packages, run scripts, compile code, manage files.</td>
            </tr>
            <tr>
              <td><strong>File Read/Write/Edit</strong></td>
              <td>Read, create, and modify files in the container filesystem. Supports targeted edits (search-and-replace) and full file writes.</td>
            </tr>
            <tr>
              <td><strong>Web Search</strong></td>
              <td>Search the web for current information. Useful for looking up docs, checking APIs, finding examples.</td>
            </tr>
            <tr>
              <td><strong>Web Fetch</strong></td>
              <td>Fetch the contents of a specific URL. Great for reading documentation pages, API responses, or any public URL.</td>
            </tr>
            <tr>
              <td><strong>MCP Servers</strong></td>
              <td>Connect external tools via Model Context Protocol. Add databases, APIs, or custom tools to your agent{"'"}s toolkit.</td>
            </tr>
          </tbody>
        </table>

        <h2>6. When to Use Managed Agents vs. Messages API</h2>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>Managed Agents</th>
              <th>Messages API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agent loop</strong></td>
              <td>Handled by Anthropic</td>
              <td>You build it</td>
            </tr>
            <tr>
              <td><strong>Tool execution</strong></td>
              <td>Server-side in sandbox</td>
              <td>Client-side (your infra)</td>
            </tr>
            <tr>
              <td><strong>Setup time</strong></td>
              <td>Minutes</td>
              <td>Hours to days</td>
            </tr>
            <tr>
              <td><strong>Customization</strong></td>
              <td>Good (MCP, system prompts)</td>
              <td>Full control</td>
            </tr>
            <tr>
              <td><strong>Latency control</strong></td>
              <td>Limited (server-side)</td>
              <td>Full control</td>
            </tr>
            <tr>
              <td><strong>Cost</strong></td>
              <td>$0.08/hr + tokens</td>
              <td>Tokens only</td>
            </tr>
            <tr>
              <td><strong>Best for</strong></td>
              <td>Coding agents, research bots, data pipelines</td>
              <td>Chatbots, RAG, custom UIs, latency-sensitive apps</td>
            </tr>
          </tbody>
        </table>

        <div className="blog-tip">
          <p><strong>Rule of thumb:</strong> If your agent needs to execute code, touch a filesystem, or run multi-step tool chains, Managed Agents will save you weeks of infrastructure work. If you need sub-second responses or a custom UI with tight control, stick with Messages API.</p>
        </div>

        <h2>7. Pricing</h2>
        <p>
          Managed Agents pricing has two components:
        </p>
        <ul>
          <li><strong>Compute:</strong> $0.08 per hour of active container time</li>
          <li><strong>Model tokens:</strong> Standard Claude pricing (varies by model tier)</li>
        </ul>
        <p>
          <strong>Quick cost estimate:</strong> Say you run a coding agent that handles 12 sessions per day, each lasting
          about 10 minutes. That is 2 hours of compute per day, or <strong>$0.16/day in compute</strong> ($4.80/month).
          Add model costs on top — for Claude Sonnet at typical coding-agent usage, expect roughly $2-5/day in tokens.
          Total: around <strong>$5-8/day for a fully autonomous coding assistant</strong>.
        </p>
        <p>
          Compare that to building your own agent infrastructure: container orchestration, tool execution sandboxing,
          state persistence, streaming — easily weeks of engineering time worth tens of thousands of dollars.
        </p>

        <h2>8. Who Is Already Using It</h2>
        <p>
          Anthropic highlighted several early adopters at launch:
        </p>
        <ul>
          <li><strong>Notion</strong> — Using managed agents to power their AI assistant{"'"}s multi-step task execution, allowing it to search, synthesize, and create content across workspaces.</li>
          <li><strong>Rakuten</strong> — Deploying managed agents for automated code review and migration workflows across their engineering teams.</li>
          <li><strong>Sentry</strong> — Building agent-powered debugging workflows that can reproduce issues, analyze stack traces, and suggest fixes autonomously.</li>
        </ul>

        <h2>9. Full Working Example</h2>
        <p>Here is a complete, end-to-end script you can save and run right now:</p>
        <div className="blog-code">
          <pre>{`"""
managed_agent_demo.py
Full working example of a Claude Managed Agent.
Requires: pip install anthropic
Set ANTHROPIC_API_KEY in your environment.
"""
from anthropic import Anthropic

client = Anthropic()

# 1. Create the agent
agent = client.beta.agents.create(
    name="Research Assistant",
    model="claude-sonnet-4-6",
    system="""You are a research assistant. When asked a question:
1. Search the web for current information
2. Synthesize findings into a clear summary
3. Save the summary to a markdown file""",
    tools=[{"type": "agent_toolset_20260401"}],
)

# 2. Create an environment
env = client.beta.agents.environments.create(agent_id=agent.id)

# 3. Create a session
session = client.beta.agents.sessions.create(
    agent_id=agent.id,
    environment_id=env.id,
)

# 4. Send a message and stream the response
with client.beta.agents.sessions.turn.stream(
    session_id=session.id,
    agent_id=agent.id,
    messages=[{
        "role": "user",
        "content": "Research the latest developments in quantum computing from the past week. Save a summary to quantum_update.md"
    }],
) as stream:
    for event in stream:
        if event.type == "content_block_delta":
            if hasattr(event.delta, "text"):
                print(event.delta.text, end="", flush=True)

print("\\nDone! The agent searched the web, synthesized findings,"
      " and saved quantum_update.md in its environment.")`}</pre>
        </div>

        <h2>Where to Go Next</h2>
        <p>
          The official docs are at{' '}
          <a href="https://platform.claude.com/docs/agents" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
            platform.claude.com/docs/agents
          </a>. They cover advanced topics like custom MCP server integration, environment snapshots, multi-agent orchestration, and token budget controls.
        </p>
        <p>
          If you are building agents that need well-structured system prompts and configurations, our{' '}
          <Link href="/soul-generator" style={{ color: 'var(--accent)', fontWeight: 600 }}>SOUL.md Generator</Link>{' '}
          creates agent configuration files tuned for Claude{"'"}s instruction-following patterns. And if you want to
          go deeper on Claude Code itself — hooks, CLAUDE.md templates, subagent workflows — the{' '}
          <Link href="/claude-code-kit" style={{ color: 'var(--accent)', fontWeight: 600 }}>Claude Code Mastery Kit</Link>{' '}
          covers all of it.
        </p>

      </article>
    </Layout>
  );
}
