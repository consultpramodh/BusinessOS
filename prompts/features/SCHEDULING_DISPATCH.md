# Visits and dispatch
## A. Identity
E-01 · scheduling · dispatcher/technician · P1 · eligible D/FND, J resource subset, K confirmations · Issues #3/#8 · v1.0 · 2026-10-18. Specified/designed; legacy AM/PM conflict demo only.
## B. Business problem
Variable technician days/customer windows/travel/overruns make manual calendar coordination fragile. Supplied Classic workflow context; no BusinessOS timing study.
## C. Expected outcome
Explain who can perform scope, where/when and blockers; measure double-booking/rework and scheduling time.
## D. Roles and permissions
Dispatcher views/creates/modifies/assigns/reschedules; manager approves override/cancellation policy; tech views assigned visits/availability. Customer only chooses permitted windows. Delete/export denied by default.
## E. Entry points
Accepted quote action, technical-review resolution, selected job/visit, dispatch queue.
## F. Journey
Review prerequisites → choose customer window/location → inspect eligible resources/skills/availability → book → confirmation queue. Reschedule/cancel keeps old event/history and handles notification failure; return visit is another visit on job.
## G. Data
Job/quote/visit/location IDs, resource assignments, date/window/timezone/duration, variable working days/skills/territory, customer preferences, travel/buffer/resource requirements and versions.
## H. Integration contract
Input eligible accepted scope/resources. Validate no blockers/conflict and current versions. Output Visit/Assignment/event; F/K/A/M consume. Unknown availability blocks certainty; manual review can propose but not assert availability. Booking event dedups, old/new schedule audited; UI preserves selected proposal on failure.
## I. Rules
One job may have many visits; appointment status independent of job/invoice. No booking solely because quote accepted. No advanced optimization before reliable basic calendar.
## J. Interface
Selection-oriented dates/windows/resources in customer context; optional shared dispatch view. Distinguish available/unknown/ineligible; keyboard calendar alternative/native date, mobile touch, cancel recovery/error states.
## K. Automation
Conflict/eligibility checks and confirmation request; route optimization/calendar sync deferred adapters.
## L. Edge cases
DST/timezones, variable shifts, two users booking, drive buffers, cancellation/overrun/no access, absent resource, partial job and return visit.
## M. Acceptance
Given technical blocker, no appointment created. Given conflict/stale version, proposed values retained. Given reschedule, old visit history remains. Given job needing another visit, no duplicate job required.
## N. Verification
Deterministic time/conflict/resource/notification-idempotency tests and real desktop/mobile/keyboard booking; legacy checks insufficient.
## O. Release
Basic job/visit contract and prerequisite/conflict browser flow first; external calendar later.
## P. Risks and alternatives
Manual dispatcher remains valid when eligibility data missing; fake optimal slots create operational risk.
## Q. Extensions
Territory/day grouping, travel prediction, drag-and-drop, two-week views and route optimization when measured value justifies.
