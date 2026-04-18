# Claude Code Prompts I Actually Use Every Day — 18 Battle-Tested Templates (April 2026)

Published: https://gist.github.com/manduks/edeadfd933d284d6f0903459891b2e61

> **Free generator:** [midastools.co/prompt-generator](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — pick a task, get a Claude-Code-ready prompt.
> **Full kit ($39):** [Claude Code Kit](https://www.midastools.co/claude-code-kit?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — 120+ prompts + workflows for Claude Code / Claude 3.6 agentic tasks.

I've been running Claude Code full-time since January 2026. Below are the 18 prompt patterns that earned their place — the ones I copy-paste daily for real shipped work, not the "50 ChatGPT prompts for productivity" listicle kind.

Every prompt here is tested on **Claude 3.6 Sonnet** and **Claude Opus 4.7** via the Claude Code CLI. They also work via the API and on the web app.

---

## The 18 prompts by category

| Category             | Prompts |
|----------------------|---------|
| Planning a feature   | 3       |
| Writing code         | 4       |
| Code review          | 3       |
| Debugging            | 3       |
| Refactoring          | 2       |
| Tests                | 2       |
| Committing + PRs     | 1       |

---

## Planning a feature (3)

### 1. The "before you write any code" prompt

```
I want to add {feature} to {codebase}.

Before writing any code, give me:
1. The minimum set of files that need to change.
2. The trickiest edge case I'm likely to miss.
3. The single architectural decision I need to commit to up front.
4. A 3-step build order that keeps the system runnable after each step.

Do not write code. Answer in bullet points.
```

This one prompt has saved me more refactors than any other template.

### 2. Constraint-lock planning

```
I'm building {feature}. Hard constraints:
- {constraint 1}
- {constraint 2}
- {constraint 3}

Propose 2 designs. For each: explain how it respects the constraints, what trade-off it accepts, and what existing code in this repo it would touch or replace.

Don't recommend a winner. I'll pick.
```

### 3. Risk surface scan

```
I'm about to change {file_or_module}.
Map the blast radius: what else depends on this, what tests cover it, and what behavior changes might leak to users. Stop before proposing a solution.
```

---

## Writing code (4)

### 4. Minimal viable implementation

```
Implement {feature} in the smallest possible diff.

Rules:
- Do NOT add abstractions for hypothetical future needs.
- Do NOT add comments explaining what the code does.
- Do NOT handle errors that can't actually occur here.
- DO match existing code style exactly (read 2-3 neighboring files to calibrate).

Show me the diff only. I'll ask if I want explanation.
```

### 5. Adapt from neighbor pattern

```
Open {existing_file_path} and read it carefully.
Now build {new_feature} following the same pattern — same file layout, same naming conventions, same test style. The ONLY thing different is {specific_difference}.
```

### 6. Performance-sensitive implementation

```
Implement {function_signature}.
Constraints: must handle {size_N} inputs in under {time_ms}ms.

Walk through the algorithmic complexity before writing. Then implement. Then profile with a realistic benchmark and report the actual number.
```

### 7. Typed from interface

```
Here is the interface: {paste interface}
Here is a test that will call it: {paste test}

Implement the function so the test passes, without modifying the test or interface.
```

---

## Code review (3)

### 8. Ruthless review

```
Review this diff as if I'm a junior dev submitting to a strict staff engineer.

For each issue, tag it P0/P1/P2:
- P0: will cause a bug or security issue
- P1: will cause maintenance pain or obvious perf problem
- P2: style / polish

Do NOT list things that are fine. Only issues.
```

### 9. What would break

```
Here is a PR diff. In which situations does this break?
Think about: concurrency, null/undefined, empty collections, very large inputs, unicode, timezone, retries, network failures, auth boundaries.
Cite file:line when you claim a problem.
```

### 10. Compare against standard

```
Here's my implementation of {thing}. Compare it to the standard way this is solved in {language/framework}. Flag anywhere I'm reinventing something the stdlib or a well-known library already does better.
```

---

## Debugging (3)

### 11. Minimum repro

```
I'm seeing {bug}. Here's the stack trace and the code that triggered it: {paste}.

Before proposing a fix: what is the smallest code snippet that reproduces this? I want to commit a regression test before touching the fix.
```

### 12. Hypothesis tree

```
Bug: {describe}.
Observed: {what you see}.
Expected: {what should happen}.

Generate 5 hypotheses ranked by probability, with the minimum experiment to confirm each. Don't pick a winner — I'll run the experiments.
```

### 13. Binary-search the commit history

```
This test passed on commit {sha_good} and fails on commit {sha_bad}.
What's the most efficient commit to git-bisect next, and what do I check when I'm on it? Explain how to distinguish "this is the breaking commit" from "this commit surfaced an already-broken state."
```

---

## Refactoring (2)

### 14. Extract without behavior change

```
Extract {concept} from {file} into its own module.

Rules:
- Do NOT change any behavior.
- Do NOT rename anything unless the new location demands it.
- Run the test suite before and after. Paste both outputs.

Show the diff and the test output.
```

### 15. Simplify this function

```
Here's a function: {paste}.
Rewrite it to be simpler — fewer branches, fewer levels of nesting, same public behavior. If you can't make it simpler without changing behavior, say so and stop.
```

---

## Tests (2)

### 16. Characterize before changing

```
I'm about to refactor {function}. Before I touch it, write a test suite that pins down every branch of its current behavior, including the weird edge cases. Use the real input/output I give you — don't invent.

Tests must pass on the current code, unchanged. If any fail, that means you misunderstood the behavior — ask me.
```

### 17. Mutation-style test generation

```
Here's a function {paste}.
Write tests that would fail if someone mutated:
- a boolean comparison operator (==/!=)
- an arithmetic operator (+/-)
- a boundary constant (off-by-one)
- a conditional direction (< / >)

For each mutation type, describe the test and why it catches it.
```

---

## Committing + PRs (1)

### 18. The one-sentence PR description

```
Here's the diff I'm about to push: {paste}
Write the PR title (under 70 chars) and a one-paragraph description that explains WHY this change, not WHAT it does. Assume the reviewer can read the diff — they want context and trade-offs, not a narration.
```

---

## 5 common Claude Code mistakes I see

1. **Not reading neighboring files first.** Claude Code is best when you explicitly tell it which files to read. A prompt that says "read these 2 files, match their style exactly, then..." produces 3x better code than "write a function that..."
2. **Asking for "best practices."** There is no universal best. Ask for trade-offs and constraints instead — you get a useful answer.
3. **Writing one mega-prompt with 5 goals.** Break it into sequential prompts. Plan → implement → test → review → commit. Each step's output is context for the next.
4. **Letting it add comments.** Claude loves to explain code with inline comments. They rot. Tell it "no comments unless WHY is non-obvious" and your diffs stay clean.
5. **Skipping the "show me the diff only" rule.** Without it, Claude will produce 500 words of explanation wrapped around 20 lines of code. Show me the diff and I'll ask if I want more.

---

## Resources

- **Free prompt generator:** [Prompt Generator](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — pick a task type (planning, debugging, refactor) and get a Claude-Code-ready prompt
- **Free prompt enhancer:** [Prompt Enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — paste a bad prompt, get it rewritten with structure
- **Starter pack ($9):** [20 Best AI Prompts](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — the 20 prompts I use weekly across text/image/video, not just code
- **Claude Code Kit ($39):** [Claude Code Kit](https://www.midastools.co/claude-code-kit?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) — 120+ Claude Code prompts + full agentic workflow playbook

If you want the full library — 120+ Claude Code prompts organized by task type, plus the agentic workflow playbook I use on client work — the [**Claude Code Kit**](https://www.midastools.co/claude-code-kit?utm_source=gist&utm_medium=github&utm_campaign=08-claude-code-prompts) is $39 with a 30-day refund. Everything on this page is a free subset of what's in the kit.