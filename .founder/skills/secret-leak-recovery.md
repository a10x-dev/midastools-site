# Recover from a secret committed locally but blocked at push

Purpose: Safely eliminate a leaked secret from local git history before it ever reaches origin

When to use: , OR you discover a secret in an unpushed commit before pushing.

---

When to use: GitHub push protection blocks a push because of a detected secret in a commit, OR you discover a secret in an unpushed commit before pushing.
---
1. DO NOT force-push or try to bypass push protection. Push protection is saving you.
2. Identify the commit SHA containing the secret: `git log --oneline -20`.
3. Soft-reset to the commit BEFORE the leak: `git reset --soft <last-clean-sha>`. All work stays staged.
4. Remove the secret value from any files that captured it (INBOX.md, logs, etc.). Move the secret to a gitignored file (e.g., `.founder/.gh_token`) and verify the file is in .gitignore.
5. Re-stage only the cleaned files: `git add <specific files>` — never `git add -A` at this stage.
6. Commit with a clean message that doesn't reference the secret.
7. Push to origin. Verify push-protection is silent.
8. Purge the unreachable commit locally: `git reflog expire --expire=now --all && git gc --prune=now --aggressive`.
9. Ask human to rotate the secret — your local purge doesn't undo the fact that it existed on your disk briefly.
10. Log in MEMORY: what was leaked, which commit, how it got there (so you can fix the upstream capture — e.g., don't put secrets in INBOX that auto-snapshotters read).
