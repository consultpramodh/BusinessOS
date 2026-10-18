# People, skills and working resources
## A. Identity
J-01 · people/resources · dispatcher/manager/tech · resource subset P1, full feature later · FND/N/E/F · Issue #8 umbrella · v1.0 · 2026-10-18. Specified/designed; v1 fixed names only.
## B. Business problem
Variable working days/skills make fixed technician calendars inaccurate. Supplied three-technician Classic context; no measured utilization benefit.
## C. Expected outcome
Assign eligible available people and explain conflicts. Measure assignment failures/workload clarity without surveillance metrics.
## D. Roles and permissions
Employee views own assigned work/availability; manager creates/edits profile/skills/hours and approves changes; dispatcher sees scheduling minimum. Roles managed by admin. Delete/certification override/export restricted; no payroll authority.
## E. Entry points
Scheduling candidate selection, own work/preparation and manager availability configuration.
## F. Journey
Define resource/skill/certification/variable dates → propose assignment → validate → notify → capture attributable time → review workload. Absence/expiry triggers reassignment review.
## G. Data
Org/resource IDs, skills/certification validity, dated availability/timezone, visit assignments, time entry/cost-source permissions and version history.
## H. Integration contract
Input work requirements/policy; validate permissions/availability/skills/version. Output eligibility/assignment or blocker; E/F/H/A consume. Missing availability is unknown, not available. Assignment/event IDs dedup, before/after/actor audited; UI explains exclusion.
## I. Rules
Variable dates, not fixed weekday assumptions. Assignment independent of employee account authorization. Labor rates need narrower access than work schedules.
## J. Interface
Readable resource choices and workload with reason; technician mobile work view, keyboard date/assignment controls, no decorative performance rankings; empty/error/stale states.
## K. Automation
Eligibility filtering and expiry warnings; auto-assignment/payroll deferred.
## L. Edge cases
Expired skill, split shift/leave, concurrent assignment, substitute, deactivated user with future visits and missing cost rate.
## M. Acceptance
Given unavailable/uncertified resource, no silent assignment. Given valid substitute, traceable change. Given tech actor, unrelated wage data unavailable. Given unknown hours, availability not asserted.
## N. Verification
Resource/date/role/concurrency tests and dispatcher/technician mobile walkthrough.
## O. Release
Minimum scheduling resources only before broad people-management expansion; real role enforcement production-gated.
## P. Risks and alternatives
Light manual availability is sufficient initially. Avoid invasive tracking or employment-performance inference from incomplete job data.
## Q. Extensions
Certification reminders, time capture and workload investigation when user need is validated.
