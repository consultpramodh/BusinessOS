# Feature specification — <name>

## A. Identity
ID; capability; target users; priority/dependencies; Issue links; version/date. Track specified/designed/implemented/tested/user-validated/production-ready independently, with evidence paths. Distinguish package inventory from approved implementation scope.
## B. Business problem
Observed process, workaround, frequency and consequences. Label supplied experience, interviews, source evidence and assumptions. No invented usage or customer outcomes.
## C. Expected outcome
Decision/work improved; observable acceptance and measurement method. State baseline/target as unknown or hypothesis when unmeasured.
## D. Roles and permissions
Explicit matrix for view/create/modify/approve/cancel/delete/override/export. Specify record/organization scope. Role names in a demo are not implemented authorization.
## E. Entry points
Customer context, command centre, related record, notification or search; keep selection/location/task context.
## F. User journey
Normal path, alternatives, cancel/draft/recovery, completion and next destination. What user sees/decides, system handles and unhappy path at each step.
## G. Data
Required/optional fields, validation/defaults, IDs, owner/source, version, cardinality, time/currency, snapshots, retention and concurrency.
## H. Cross-feature integration contract
Input; validation; outputs and changed IDs/records; consumers; next enabled action; unavailable dependency behavior; actor/permission; audit; idempotency; UI explanation. Each significant workflow needs this complete contract.
## I. Business rules
Eligibility, independent state transitions, exceptions/deadlines, permission boundaries and override controls.
## J. Interface
Identity/context/support layout, controls/one primary action, desktop/mobile, keyboard/focus/labels/reduced motion, loading/empty/error/retry/feedback and draft preservation.
## K. Automation
Immediate deterministic work versus future automation; trigger/conditions/data/action/actor/permission/failure/retry/dedup/audit/success. No unapproved sends.
## L. Edge cases
Duplicates, missing/conflicting data, partial completion, simultaneous updates, cancellations, stale/offline writes, denied permissions, dependency failure and irreversible actions.
## M. Acceptance criteria
Independently verifiable Given/When/Then scenarios for main path, negative paths, concurrency/idempotency and accessibility.
## N. Verification
Automated/manual/visual/financial/security checks; actual evidence separate from test plan. Include six-lens review conclusions.
## O. Release criteria
Evidence gates, rollback, limitations and next task. Completion of code/docs/tests is not user validation or production readiness.
## P. Risks and alternatives
Strongest objections, simplest alternative, chosen tradeoff, building/not-building costs, assumptions and evidence gap.
## Q. Future extensions
Useful possibilities explicitly deferred; triggers for reconsideration, not automatic scope.
