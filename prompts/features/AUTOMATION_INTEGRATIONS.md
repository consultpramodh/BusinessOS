# Observable business rules and integration boundaries
## A. Identity
L-01 · automation · operator/admin/developer · expansion after tested manual contracts · FND/source capabilities/production gate · Issue #8 umbrella · v1.0 · 2026-10-18. Specified/designed, no rule runner/adapters implemented.
## B. Business problem
Repeated cross-system entry wastes time, but unclear automation duplicates work and hides failure. Supplied Striven/calendar examples, not validated BusinessOS demand.
## C. Expected outcome
One repeatable workflow with fewer verified manual steps and explicit exceptions. Measure success/failure/retry/duplicate rate and administrative time versus baseline.
## D. Roles and permissions
Admin views/configures connections/rules; responsible operator approves high-impact action/override/cancel; service actor has least privilege. Delete/export credentials denied; secrets never visible in frontend.
## E. Entry points
Business event, scheduled approved rule or explicit operator command—not arbitrary model instruction.
## F. Journey
Configure scoped trigger/if-else/data/action → dry-run → authorize → execute → audit → retry/reconcile/escalate. Missing prerequisites route to owner, not silent success.
## G. Data
Rule/version/trigger/event/correlation IDs, conditions/input schema, action command, actor/permission, credentials reference, dedup key, attempts/error/delivery/audit/result and success criteria.
## H. Integration contract
Input validated event+rule version; output command result or failure/task. Verify ownership/source/current state. Unique event+rule/action dedup with conflict guard; bounded retry/backoff/dead-letter. Unavailable provider leaves queued/failed, no fake downstream record. UI explains action and responsible owner; audit exact trigger/decision/result.
## I. Rules
Quote accepted → eligible scheduling action or technical-review task; never automatic appointment. Reversible defaults and explicit human authority for irreversible financial/customer actions. Adapter mapping respects existing source of truth.
## J. Interface
Operator-language rule summary/dry-run/result/history, progressive technical detail, keyboard/mobile review, loading/error/retry and credential-free feedback.
## K. Automation
Contract itself defines trigger, conditions, data, action, actor, permissions, failure, retry/dedup, audit, success. Start one validated flow; no generic visual builder now.
## L. Edge cases
Repeated/out-of-order events, schema drift, rate limits, expired access, conflicting sources, partial success, actor revocation and changed rule mid-retry.
## M. Acceptance
Given repeated event, one business effect. Given blocked technical review, no booking. Given provider outage, accountable pending/failure. Given revoked actor, retry cannot execute unauthorized action.
## N. Verification
Contract/adapter mocks, idempotency/concurrency/replay/failure tests; real sandbox round-trip and security review before live scope.
## O. Release
Manual source/consumer flows validated first; production secret/permission/audit/recovery gate required for live integrations.
## P. Risks and alternatives
Manual action may be cheaper than complex sync. Automation must remove measured repeated work; source mapping is not autonomous judgment.
## Q. Extensions
Calendar/accounting/CRM/ERP/forms/email/SMS/payment adapters, conditional builder and agent assistance only with approved contracts.
