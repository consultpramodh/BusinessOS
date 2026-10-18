# OpenUI integration evaluation and bounded experiment

User addition 2026-10-18: https://github.com/thesysdev/openui. Read upstream README, lang-core/browser-bundle READMEs and linked official OpenUI skill plus existing-app/component-library/language references. Inspected upstream checkout 8d9c4c3b108a7b5352192a6a9d7327bdf7ea19b5. Installed package/types and executable tests take precedence over main-branch docs if they differ.

## Fit and decision
OpenUI offers a structured language/parser, component-library contracts and framework renderers for generated presentation. It does not supply BusinessOS's domain model, authorization, financial rules, reliable event processing or design taste. Use custom identity/action/support components, not generic chat/dashboard layouts. BusinessOS keeps deterministic action decisions and validates commands outside generated content.

## Actual use in this milestone
- Pinned development-only @openuidev/lang-core 1.0.1 and zod 4.6.7 with package-lock.json. npm package API matches inspected main 1.0.1 for used definitions/parser. No React/frontend framework added.
- experiments/openui/context-library.cjs defines RelationshipPanel and BusinessAction via real defineComponent/createLibrary APIs. Serializes already-computed action context, parses with real createParser, then verifies exact customer/action IDs, labels/reasons/owner/eligibility/blockers/order.
- Rejects malformed/incomplete/unknown/extra/missing/reordered data and any query/mutation/state. Parser success alone is not domain authorization. A future click must call a separately validating domain command.
- tests/openui.cjs checks valid context and forged identity/label/blocked eligibility/unknown component/query paths. No UI renderer, stream, LLM, gateway, model billing, network tool or live data path implemented.
- Install used --ignore-scripts with telemetry disabled; no API credentials created or handled. OpenUI runtime telemetry is opt-in upstream; no inference/backend introduced.

## Adoption gate
Next bounded experiment: custom renderer with exact approved visual vocabulary, fallback to deterministic controls, preserved drafts, keyboard/focus/mobile/reduced-motion, SDK version compatibility and measured asset/runtime cost. Do not embed a broad CDN bundle or scaffold a chat application just because available. Existing static app remains unmodified by this experiment. Live generative model calls require server-only credentials/data boundary, explicit tools and reliability/security review. No generated financial values, autonomous approvals or AI prioritization.

## Sources
- https://github.com/thesysdev/openui/blob/8d9c4c3b108a7b5352192a6a9d7327bdf7ea19b5/README.md
- https://github.com/thesysdev/openui/tree/8d9c4c3b108a7b5352192a6a9d7327bdf7ea19b5/packages/lang-core
- https://github.com/thesysdev/openui/tree/8d9c4c3b108a7b5352192a6a9d7327bdf7ea19b5/packages/browser-bundle
- https://github.com/thesysdev/skills/tree/main/skills/openui

Browser-bundle is an optional no-build packaging route containing React/renderers/UI/styles; that fact does not justify replacing the current frontend. Upstream performance/marketing comparisons are not independently verified BusinessOS evidence.
