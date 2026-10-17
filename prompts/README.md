# Prompt library — BusinessOS

These are version-controlled **working specifications**, not substitutes for current code, customer evidence, tests, or GitHub Issues.

## Reading order
1. [Master project prompt](MASTER_PROJECT_PROMPT.md) — product mission, constraints, execution standard.
2. [Feature prompt template](FEATURE_TEMPLATE.md) — use for every new feature or substantial revision.
3. [UI/UX system prompt](UI_UX_SYSTEM.md) — consistent Apple/Wealthsimple-inspired quality.
4. [Workflow feature](features/JOB_LIFECYCLE.md) — first product workflow.
5. [Profitability feature](features/JOB_PROFITABILITY.md) — calculations and financial truthfulness.
6. [Verification prompt](VERIFICATION.md) — adversarial review and evidence requirements.
7. [Session handoff prompt](SESSION_HANDOFF.md) — resume safely from GitHub in a new conversation.

## Prompt governance
- Prompts describe desired behavior. Code, actual tests, and verified business evidence describe reality.
- Never silently expand scope based on a prompt. Link implementation to an Issue.
- Update a feature prompt when its accepted behavior changes; record significant choices in docs/DECISIONS.md.
- For each significant implementation, update docs/CURRENT_STATE.md and docs/CHANGELOG.md.
- Keep prompts detailed enough to avoid ambiguity, but prefer clear requirements over long inspirational language.
- Never put secrets, credentials, customer PII or private business data into prompts or repository.

Current active contract: [Connected workspace](features/CONNECTED_WORKSPACE.md) (#7), with [whole-product architecture](../docs/PRODUCT_ARCHITECTURE.md). Qualification (#6) and legacy lifecycle prompts are historical narrower slices; follow the connected contract when they conflict.
