# Mobile service execution and closeout
## A. Identity
F-01 · field work · assigned technician/coordinator/reviewer · P1 · E/B/D, I/J subsets · Issues #3/#8 · v1.0 · 2026-10-18. Specified/designed; v1 start/notes/costs only, target unimplemented.
## B. Business problem
Technicians lack context, record on paper and repeat visits when parts/approval/access fail. User-supplied experience; frequency unmeasured.
## C. Expected outcome
Complete assigned work with minimum entry and accountable closeout. Measure first-time resolution, re-entry and closeout completeness with defined denominators.
## D. Roles and permissions
Tech views assigned minimum, creates work/time/parts/notes/photos, modifies own draft. Reviewer approves closeout; manager overrides/cancels with reason. Additional work needs customer/authorized commercial approval. Delete/export restricted; no payroll/monitoring authority.
## E. Entry points
Assigned visit/mobile work list, preparation notification, customer/job context.
## F. Journey
Prepare instructions/assets/safety → arrive → checklist/time/parts → resolve or report exception → completion notes/acknowledgment → reviewer approves billability. Parts needed/no access/warranty/return visit branches stay owned; don't mark resolved automatically.
## G. Data
Visit/job/asset snapshot, assignments, checklist versions, time/material/cost entries with estimate/actual source, photos/doc refs, notes, safety outcomes, approvals and closeout status.
## H. Integration contract
Input scheduled scope/assignment; validate authority/prerequisites/safety. Output work/usage/time/closeout events; G/H/I/J/K consume. Missing parts/approval emits blocker/return plan. Completion command dedups and audits actor/time; unavailable upload preserves local draft, never claims attachment saved.
## I. Rules
Visit completion ≠ job resolution ≠ billability approval. Warranty/additional scope requires correct review. Completed service address/equipment snapshot remains historical.
## J. Interface
Mobile-first choices/checklists/exception entry, explicit preparation/complete task, optional photos/notes, gloves/touch-friendly sizes, labels/focus and offline/error/retry feedback.
## K. Automation
Carry forward scope and total time/usage; billability review remains explicit. No automatic added-work charge.
## L. Edge cases
No access/cancel/unsafe condition, missing part, return visit, warranty, duplicate completion, interrupted network and changed assignment.
## M. Acceptance
Given unresolved part, job remains unresolved with next owner. Given completed visit, invoice not automatic before review. Given repeat completion event, time/parts not duplicated. Given offline save, no false success.
## N. Verification
State/permission/usage/event tests, mobile browser field walkthrough, photo failure and accessibility checks; none claimed target-complete yet.
## O. Release
Preparation→exception→reviewed completion demonstrated before billing integration; real field operator evidence required.
## P. Risks and alternatives
Long checklists become admin burden; use service-specific essentials and exception entry, not universal form.
## Q. Extensions
Warranty workflows, customer signature, richer time capture and offline synchronization after evidence/security review.
