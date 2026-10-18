# Controlled OpenUI component bridge
## A. Identity
UI-01 · presentation experiment · developer/operator · bounded user-requested spike · ACT/FND and reviewed visual vocabulary · Issue #8 · v1.0 · 2026-10-18. Parser/schema bridge implemented/tested; no renderer/live inference/UI integration/user validation.
## B. Business problem
Contextual work needs reusable presentation without allowing generated layouts to invent actions/financial facts. User requested thesysdev/openui; usefulness remains experiment.
## C. Expected outcome
Real OpenUI parser can represent approved relationship actions without changing authority. Measure schema acceptance/forgery rejection before considering UX value.
## D. Roles and permissions
Bridge is read-only; no create/modify/approve/cancel/delete/override/export. Domain actor authorizes candidate eligibility; eventual click revalidates through command.
## E. Entry points
Development-only context-to-component contract. No new chat surface imposed on the operator.
## F. Journey
Compute deterministic context → serialize allowlisted RelationshipPanel/BusinessAction → parse with installed SDK → validate exact known identity/action data/order → accept display tree or reject. Rendering/fallback not yet implemented.
## G. Data
Versioned schema, customer ID, action ID/label/reason/owner/eligible/blockers. No credentials or real customer data. Dev dependencies pinned by package-lock; exact source version documented in OPENUI_EVALUATION.
## H. Integration contract
Input ACT output; parser and host validate component names/root/meta/no queries/mutations/state/unknown actions and exact authoritative facts. Output read-only parsed tree; future workspace renderer consumes. Invalid stream shows deterministic fallback later. No side effects/audit on parse; domain commands retain idempotency/audit.
## I. Rules
UI cannot change priorities/eligibility/amounts/permission. No Query/Mutation or arbitrary component/tool execution in this experiment. Domain state not sent to a model. Live inference needs separate server/key/data-handling decision.
## J. Interface
Use recovered identity/task/support vocabulary and existing business controls; built-in dashboard/chat library is not the design baseline. Browser rendering/keyboard/focus/mobile/draft preservation explicitly unverified until real renderer exists.
## K. Automation
Deterministic serialization/parsing only; no generative call or external tool path.
## L. Edge cases
Unknown component/customer/action, forged label/eligibility, reordered/missing actions, malformed/incomplete program, extra query/mutation/state, future schema mismatch.
## M. Acceptance
Given approved context, parser returns complete tree. Given altered eligibility/identity/action, host rejects. Given unknown/malformed/mutating program, no domain effect. Given SDK upgrade, rerun schema/contract tests.
## N. Verification
tests/openui.cjs uses real installed @openuidev/lang-core; parser/host tests passed. Browser renderer/streaming/live model not tested or claimed.
## O. Release
Development spike only. Production adopt only after custom renderer/fallback/accessibility/performance review and clear value versus plain components.
## P. Risks and alternatives
OpenUI solves structured generated presentation, not business orchestration or taste. Plain components remain smaller; browser bundle includes React/UI and sizable assets, so not inserted into static app reflexively.
## Q. Extensions
Small custom renderer experiment, controlled model-assisted summaries/exception explanations after data/authorization/evidence gates.
