---
kind: concept
slug: principle_failure_never_returns_success
name: Never Let a Failure Path Return Success
tags: [principle,error_handling,reliability,product_safety]
importance: 0.50
last_confirmed_at: 2026-08-05T21:04:56.535582+00:00
updated_at: 2026-08-05T21:04:56.535582+00:00
---

# Never Let a Failure Path Return Success

graceful degradation valid only if output remains useful; guard on substance not truthiness; catch blocks returning empty strings risk silent death at HTTP 200; metered third-party APIs need fallback or alarm

## Aliases

- **name**: Never Let a Failure Path Return Success

---

*This file is auto-maintained by agent-founder's context graph. Agents: treat `authority` as a tie-breaker when values conflict.*
