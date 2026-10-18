# Current state · 2026-10-18

Issue #8 · master v2.0. Inspected live baseline main bc73ed6 and implementation 3c1db7c before this milestone. User rejected the delivered frontend direction; no claims of design approval, validated benefit or production readiness.

## Current reconciliation
Full capability map, 17 A–Q feature-package specifications, inventory/DAG, minimum domain/cardinality/snapshot model, shared integration contracts, 18-step Sarah journey and workspace/action contract. Master/template/roadmap reconciled explicitly; 2026-10-17 decisions preserved in archive and marked superseded where conflicting. These are specified/contract-designed, not shipped capabilities or validated pixel design.

## Implemented this milestone
- domain/relationship.cjs: independent normalized synthetic records and owners; qualification command with org/permission/ref/version validation, immutable contact/location/equipment scope snapshot, canonical retry fingerprint and audit event. Current-address update preserves history and records event.
- Read-only deterministic context derives simultaneous enquiry, accepted quote, completed work, overdue invoice, visit and follow-up actions with reason/owner/permission/blocker/explicit rank. Technical review blocks scheduling. Confirmed matching payment allocations affect outstanding action; pending payment does not.
- experiments/openui/context-library.cjs: real @openuidev/lang-core 1.0.1 + Zod 4.6.7 custom parser/schema bridge with domain-fact validation. Read-only experiment, no renderer/LLM/backend/tool execution. Exact dev dependencies pinned; no frontend framework migration.
- Recovered and inspected original Sarah scheduler and two enquiry mockups. VISUAL_REFERENCE_REVIEW identifies retained composition and unsupported claims excluded.
- Extracted 12 exact repository links directly from the supplied YouTube watch-page description, verified repository identities and documented relevance; not bulk-installed. OpenUI source/fit separately documented.

## Actual verification
`OPENUI_TELEMETRY_DISABLED=1 npm test` passes four suites:
1. Legacy model: basic lifecycle/financial arithmetic/duplicate enquiry and booking checks.
2. Legacy LinkeDOM: six routes/form-driven journey/search/quote revision/schedule/money and safe text.
3. New relationship domain: simultaneous actions/rank/purity/permission/technical blockers, unchanged snapshots, stale writes, repeated/conflicting events, atomic invalid commands and confirmed/pending balance behavior.
4. OpenUI real parser: correct allowlisted context accepted; forged identity/label/eligibility, unknown components and queries rejected.
Syntax and whitespace checks pass. No new browser/mobile/keyboard/screen-reader/performance/visual tests; no live model/gateway/rendering tests. Legacy tests are regressions, not current product acceptance.

## Existing UI and deployment
v1 index.html/styles.css/os.css/script.js/model.js still implement six routes and stage-index embedded quote/visit/invoice/payment. Rejected visual direction; experimental foundation is NOT wired into that UI. No screen or Site deployment changed in this milestone. All state synthetic/session-memory.
Existing owner-private Site: https://businessos-relationship.pramodh7.chatgpt.site · project appgprj_6ad36ebf89f88191b65d8532a6578a56. Last deployed source 37e8ba5fdedbb70e0d2d7f501af4187d76a50a9e maps to implementation 3c1db7c (2026-10-17); audience not refreshed this non-deployment session. GitHub canonical source is separate from Site checkout; no automatic synchronization. Follow Sites skill before any future update; preserve audience.

## Limits and next action
Foundation is tested domain code, not a replacement application. No persistence, real tenant isolation/auth, external messaging/payments/accounting, quote acceptance command, job/visit creation command, inventory/people suite or generalized automation. A–N inventories describe long-term scope, not implementation approval. Actor checks on client data are not production security.
Next approved item: B-01/C-01 reference-aligned Sarah New enquiry → Qualify lead workspace wired to independent foundation, preserving drafts and task context with real browser/keyboard/mobile evidence; then D-01 versioned quote acceptance/technical-review branch. OpenUI renderer adoption remains a bounded experiment evaluated against plain components. Real operator testing and production gates remain open.
