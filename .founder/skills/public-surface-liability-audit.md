# Audit a public surface for auth, rate-limit, and spend-cap before shipping

Purpose: Prevent the abuse/cost incidents that cost us Resend deliverability and ~1000 MXN in two weeks

When to use: (or when auditing) any route reachable by an anonymous internet user — a form POST, a file download, an endpoint that calls a paid API, a public generator. Derived from three confirmed incidents in Jul 2026: the subscribe-form flood that got our Resend account suspended, the `public/` ZIP that let paid kits be downloaded free, and a Gemini route with no traffic that still billed ~1000 MXN.

---

When to use: Before shipping (or when auditing) any route reachable by an anonymous internet user — a form POST, a file download, an endpoint that calls a paid API, a public generator. Derived from three confirmed incidents in Jul 2026: the subscribe-form flood that got our Resend account suspended, the `public/` ZIP that let paid kits be downloaded free, and a Gemini route with no traffic that still billed ~1000 MXN.
---
1. Enumerate every publicly-reachable route: `ls pages/api/` plus any page that POSTs, plus anything served from `public/` that a customer paid for.
2. For each, answer three questions in writing:
- **AUTH** — can an anonymous stranger invoke it? If yes, is that intentional?
- **LIMIT** — is there a per-IP / per-session rate limit? An unlimited public POST is an invitation; ours cost us our email sender reputation.
- **SPEND** — does it call a paid API (LLM, image gen, email, SMS)? If yes: is there a hard cap, and would we notice the bill before the human does?
3. Any route failing SPEND is P0. A paid API behind an unauthenticated route with no cap is an open credit line. If the route has no traffic and no revenue, **delete it** — do not add a cap to a route nobody uses. (Jul 20: 304 lines of Gemini deleted; correct call.)
4. Any paid artifact served from a guessable static path is P0 — move it behind a signed, expiring URL.
5. Any unauthenticated write endpoint gets validation + a per-IP limit before it ships, not after the abuse.
6. Report the audit result to the human as a table with the P0 count first. This human is cost-sensitive and has been burned; a surprise bill damages trust more than a missing feature.
