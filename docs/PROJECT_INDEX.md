# BusinessOS project index

Canonical repository: https://github.com/consultpramodh/BusinessOS · main.
Start: AGENTS → this index → current state → master/reconciliation → roadmap/tasks → relevant spec/source/Issues/recent commits. Do not treat prior conversation or deployed Site as current source of truth.

| Need | Authoritative file |
|---|---|
| Current facts, test evidence, next task, Site identity | [CURRENT_STATE](CURRENT_STATE.md) |
| Complete controlling product requirements | [Master v2](../prompts/MASTER_PROJECT_PROMPT.md) |
| What changed and why | [Reconciliation](RECONCILIATION_20261018.md), [decisions](DECISIONS.md), [changelog](CHANGELOG.md) |
| A–N scope and integration ownership | [Product architecture](PRODUCT_ARCHITECTURE.md) |
| All feature packages, subcapability inventory and dependencies | [Feature inventory/DAG](FEATURE_INVENTORY.md) |
| Immediate build order and gates | [Roadmap](FEATURE_EXECUTION_ROADMAP.md), [tasks](../TASKS.md) |
| IDs/cardinality/history/minimum slice | [Domain model](DOMAIN_MODEL.md) |
| Identity/task/support interaction | [Customer workspace](CUSTOMER_WORKSPACE.md) |
| Actual visual concepts and exclusions | [Visual reference review](VISUAL_REFERENCE_REVIEW.md) |
| Shared event/command envelope and dependencies | [Integration contracts](INTEGRATION_CONTRACTS.md) |
| 18-step trigger/data/owner/failure/finance/verification map | [Sarah journey](SARAH_REFERENCE_JOURNEY.md) |
| Feature definitions and A–Q standard | [Prompt index](../prompts/README.md), [template](../prompts/FEATURE_TEMPLATE.md) |
| OpenUI source, installed versions, fit and actual spike | [OpenUI evaluation](OPENUI_EVALUATION.md) |
| Supplied video's exact 12 GitHub links and provenance | [Video repository extraction](VIDEO_GITHUB_REFERENCES.md) |
| Design/evidence/continuity instructions | [UI/UX](../prompts/UI_UX_SYSTEM.md), [verification](../prompts/VERIFICATION.md), [handoff](../prompts/SESSION_HANDOFF.md) |
| Previous interpretation for traceability | [Archived architecture](archive/PRODUCT_ARCHITECTURE_20261017.md), [master](archive/MASTER_PROJECT_PROMPT_20261017.md), [roadmap](archive/FEATURE_EXECUTION_ROADMAP_20261017.md) |

## Source ownership
New isolated foundation: domain/relationship.cjs; tests/relationship.cjs. OpenUI experiment: experiments/openui/context-library.cjs; tests/openui.cjs. Existing rejected-direction frontend: index.html, styles.css, os.css, script.js, model.js; regression tests/model.cjs and tests/ui.cjs. Historical earlier dashboard: lifecycle.*; first-slice browser evidence tests/archive/qualification-v1.cjs. No new foundation UI integration yet.

Issues track granular work; roadmap controls sequencing; specifications define behavior; current state records evidence; decisions preserve rationale; changelog records milestones. User's rejection and later master clarification override old design approval assumptions.
