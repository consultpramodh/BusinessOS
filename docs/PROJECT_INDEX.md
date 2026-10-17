# Project index — start here

Repository: https://github.com/consultpramodh/BusinessOS

| Need | Read |
|---|---|
| Understand the product | [README](../README.md) |
| See current reality / next action | [CURRENT_STATE](CURRENT_STATE.md) |
| See current tasks | [TASKS](../TASKS.md) and [GitHub Issues](https://github.com/consultpramodh/BusinessOS/issues) |
| See why decisions were made | [DECISIONS](DECISIONS.md) |
| Review recent updates | [CHANGELOG](CHANGELOG.md) and [GitHub commits](https://github.com/consultpramodh/BusinessOS/commits/main/) |
| Follow assistant operating rules | [AGENTS](../AGENTS.md) |
| Follow UI/UX principles | [product principles](product-principles.md) |
| Understand demo caveats | [demo limitations](demo-limitations.md) |
| View frontend | [index.html](../index.html), [styles.css](../styles.css), [script.js](../script.js) |

**Read order for a new chat:** AGENTS → PROJECT_INDEX → CURRENT_STATE → TASKS → relevant source → Issues/commits. Never rely solely on memory of earlier chats.

**Ownership:** GitHub Issues = granular task discussion; TASKS.md = short checklist; CURRENT_STATE.md = factual snapshot; CHANGELOG.md = what changed; DECISIONS.md = why.

## Prompt library
- [Prompt index](../prompts/README.md)
- [Master execution prompt](../prompts/MASTER_PROJECT_PROMPT.md)
- [Feature template](../prompts/FEATURE_TEMPLATE.md)
- [UI/UX standards](../prompts/UI_UX_SYSTEM.md)
- [Verification](../prompts/VERIFICATION.md)
- [Session handoff](../prompts/SESSION_HANDOFF.md)

## Build sequence
- [Dependency-ordered feature roadmap](FEATURE_EXECUTION_ROADMAP.md) — phases, gates, priorities and next three actions.
- [Whole-product architecture](PRODUCT_ARCHITECTURE.md) — six destinations, shared entities, journey and explicit backlog. Read this before interpreting a feature slice as the whole product.
- [Connected workspace contract](../prompts/features/CONNECTED_WORKSPACE.md) — current implementation requirements (#7).

## Current frontend paths
- Connected app shell, routing and views: index.html, styles.css, os.css, script.js
- Shared synthetic records, transitions and financial derivations: model.js
- Preserved legacy dashboard: lifecycle.html, lifecycle.css, lifecycle.js
- Qualification contract: prompts/features/LEAD_QUALIFICATION.md
- Current tests: tests/model.cjs and tests/ui.cjs (model/DOM only); historical browser evidence: tests/archive/qualification-v1.cjs

## Existing working Site
https://businessos-relationship.pramodh7.chatgpt.site (owner-private). Existing identity and deliberate update procedure are in CURRENT_STATE.md. GitHub remains canonical; Site source is a separate synchronized checkout, with no automatic sync.
