---
routing_category: code_hard
---

# Code-hard — concurrency invariant under contention

Exercises the `code_hard` lane (OpenRouter → o3-pro + high thinking). The
class of bug is one Opus reliably patches the symptom of and o3-pro tends
to name the actual invariant. We're not grading whether a single fix
compiles — we're grading whether the answer names the invariant that the
incorrect code violates.

## Task

Below is a simplified version of our autonomous-loop heartbeat reconcile.
Two writers can race on `STATE.md`: the agent's own write (during a turn)
and the autonomous reconciler (which preserves "agent-edited" content
below a sentinel). On the field, we saw STATE.md silently wiped roughly
once per autonomous tick before v0.13.0.

```rust
// Simplified. Real code in src-tauri/src/work_session.rs.
fn reconcile_state(path: &Path, new_top: &str) -> Result<()> {
    let current = fs::read_to_string(path)?;
    let preserved = match current.split_once("<!-- AGENT-EDITED-BELOW -->") {
        Some((_, below)) => below.to_string(),
        None => String::new(),
    };
    let merged = format!("{}\n<!-- AGENT-EDITED-BELOW -->\n{}", new_top, preserved);
    fs::write(path, merged)?;
    Ok(())
}
```

A turn-side write may happen between the `read_to_string` and the
`fs::write`. Sometimes it doesn't reach disk before reconcile reads;
sometimes it does. Empirically, content below the sentinel disappeared.

In <=300 words, answer:

1. **Name the invariant** the code claims to preserve, in one sentence.
2. **Name the actual race** that violates it (point at the lines).
3. Propose a fix that holds under contention, not a fix that "usually works".
4. Note one failure mode your fix introduces.

## Rubric

- 6 pts: correctly names the invariant — "all content the agent wrote
  below the sentinel survives every reconcile, regardless of interleaving".
- 6 pts: identifies the read-modify-write race between `read_to_string`
  and `fs::write`, not just "two writers" hand-waving.
- 7 pts: fix uses one of {file lock, atomic rename via tempfile + rename,
  fs::OpenOptions exclusive, file-level mutex}. Does NOT propose "add
  retries" or "make it faster" — neither closes the window.
- 4 pts: names a real failure mode of the proposed fix (e.g., lock file
  orphaned on crash; mutex serializes legitimate concurrent reads).
- 2 pts: stays under 300 words, no banned vocabulary.

Total: 25.
