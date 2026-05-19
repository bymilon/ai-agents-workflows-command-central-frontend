# Security Policy

## Supported Scope

This repository currently ships a frontend-only prototype. Security reports are most useful when they affect:

- Dependency vulnerabilities in the shipped frontend.
- Client-side injection, XSS, or unsafe rendering paths.
- Sensitive data exposure in committed source, docs, or build output.
- Misleading configuration that could encourage insecure deployment.

Conceptual backend notes in this repo are roadmap material, not a production service commitment.

## Reporting a Vulnerability

Please do not file public GitHub issues for security problems.

Use one of these private paths instead:

1. Open a private GitHub security advisory if the repository has private reporting enabled.
2. Contact the maintainer through the GitHub profile at [github.com/bymilon](https://github.com/bymilon) and include `ai-agents-workflows-command-central-frontend` in the subject or opening line.

Please include:

- A short description of the issue.
- Steps to reproduce.
- Impact assessment.
- Suggested mitigation, if you have one.

## Response Expectations

- Initial triage target: within 7 days.
- Status updates: provided when the report is confirmed and when a fix is planned.
- Public disclosure: after a fix is available or a mitigation is documented.

## Secrets

This repo should not require production secrets for local development. If you discover committed credentials or tokens, report them immediately using the private paths above.
