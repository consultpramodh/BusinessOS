# Context-aware actions
## A. Identity
ACT-01 · cross-capability action engine · office/dispatcher/owner/technician · P0 · FND-01 · Issue #8 · v1.0 · 2026-10-18. Minimum evaluator implemented/tested in isolation; no UI/production approval.
## B. Business problem
Stage-number buttons cannot represent an enquiry, accepted quote and overdue invoice together. v1 picks first seeded work rather than justified attention.
## C. Expected outcome
Explain what/why/who/blocker and choose one eligible recommendation without suppressing simultaneous work. Measure deterministic coverage/reason accuracy; productivity benefit unmeasured.
## D. Roles and permissions
View requires relationship.view and org match. Per-action permissions control eligibility (enquiry.qualify, quote.edit, schedule.edit, job.prepare, invoice.prepare, payment.review, communication.draft). Evaluator cannot create/modify/approve/cancel/delete/override/export records. Command revalidates authorization.
## E. Entry points
Customer workspace, selected task, future command centre or field context.
## F. User journey
Read scoped independent facts with injected clock → derive candidates → attach blockers/owner/reason → rank → show recommendation and alternatives → operator selects → command validates again. No eligible action yields null primary plus explained blockers.
## G. Data
Org/customer IDs, actor permissions, record owners, statuses, acceptedVersionId/technicalReview, deadlines, completed/reviewed work, issued invoice/confirmed allocations and follow-up. Unknown owner is not inferred from customer.
## H. Cross-feature contract
Input read-only domain facts/clock/actor; validate context. Output stable action ID, record ID, kind/label, owner, rank, reason, dueAt, permission, eligible, blockers. B/A/UI consume; unavailable facts block affected action instead of inventing completion. No writes/audit on reading; commands audit actual action. Repeated evaluation idempotent.
## I. Rules
Current ranks: overdue balance 90, visit preparation 80, accepted-scope planning/review 75, completion review 70, new enquiry 60, due quote follow-up 55, pricing 50, service follow-up 45, current receivable 40. Rank then deadline then ID. This policy is provisional, transparent and configurable later. Technical prerequisite blocks scheduling. Confirmed same-customer/org allocation reduces balance; pending payment doesn't. Selected enquiry can remain task primary even if relationship recommendation differs.
## J. Interface
One primary per task, others compact; always why/owner/blocker. No forced task switch or erased draft on recomputation; explain denied action. Browser/keyboard/mobile presentation not yet implemented here.
## K. Automation
Deterministic read derivation only; no AI decisions or irreversible auto-actions.
## L. Edge cases
Expired/missing data, no permitted action, absent owner, record from other org, unstable ordering, clock changes and parallel concerns.
## M. Acceptance
Given Sarah's parallel concerns, each relevant action exists. Given overdue invoice, it outranks normal enquiry under current policy. Given required technical review, schedule isn't eligible. Given view-only actor, primary null. Given reordered input/same clock, identical result.
## N. Verification
tests/relationship.cjs covers purity, rank, simultaneous concerns, denial, blockers, payment status and stable ordering. Deadline urgency refinements/operator task selection are next tests, not passed UI claims.
## O. Release
Unit-tested evaluator can commit; UI/role usefulness needs real walkthrough; durable authorization is separate production gate.
## P. Alternatives
Manual first-item queue is simpler but cannot explain urgency/dependencies. AI ranking would obscure rules before evidence; defer.
## Q. Extensions
Explicit escalation/customer commitments, due-soon tiers, user-configured impact policy and validated predictive assistance.
