# Versioned estimates and acceptance
## A. Identity
D-01 · commercial proposal · estimator/authorized customer/manager · P1 · C/FND/N, K for delivery · Issues #3/#8 · v1.0 · 2026-10-18. Specified/designed; v1 price/revise/accept demo lacks target version contract.
## B. Business problem
Changed prices/terms and unclear approvals break scheduling/billing continuity. Master requirement, not measured customer study.
## C. Expected outcome
Accepted scope/price remains attributable and immutable; measure revision/approval errors and time-to-quote with source timestamps.
## D. Roles and permissions
Estimator view/create/modify drafts, manager approves discount/override, customer or authorized office records acceptance with evidence. Void/cancel traceably; delete/export restricted. No generated UI acceptance authority.
## E. Entry points
Qualified requirement/customer context and quote follow-up task.
## F. Journey
Choose services/estimate labor/materials → terms/taxes/discount → review version → deliver → follow up/expire/reject/accept → eligibility/technical review → job planning. Revision never overwrites an accepted version.
## G. Data
Quote/enquiry/customer/location IDs, currency, integer cents, line items/estimates, tax basis, terms/exclusions, expiresAt, versions, acceptance actor/time/evidence/version ID; agreed location snapshot.
## H. Integration contract
Input qualified scope/catalog/policy and acceptance event. Validate version/expiry/authority/prerequisites. Output immutable acceptedVersion + event; E/F/G/H/K/M consume. Missing review produces blocker, not appointment. Retry acceptance event never duplicates jobs. UI explains accepted version and next owner; audit who/when/terms.
## I. Rules
Draft/sent/accepted/rejected/expired/void independent states. Explicit additional-work/revised agreement after acceptance. Quote may produce multiple jobs; allocation of scope explicit.
## J. Interface
Contextual estimate editor and approval detail, dominant decision action; optional cost/terms disclosure; no irrelevant dashboard. Keyboard line controls, mobile summary, validation/loading/delivery errors and recoverable draft.
## K. Automation
Deterministic totals and eligible next action; delivery/follow-up queued separately, never fake 'sent'.
## L. Edge cases
Expired acceptance, simultaneous revision, duplicate webhook, tax rounding, discount denial, multiple jobs and review-needed service.
## M. Acceptance
Given accepted version, later catalog/customer edits do not alter terms. Given duplicate acceptance, one outcome. Given unresolved review, scheduling unavailable. Given expired/stale version, preserve draft and reject acceptance.
## N. Verification
Version/snapshot/tax/authorization/idempotency tests plus browser acceptance workflow. v1 tests are not evidence for these target rules.
## O. Release
Versioned command and review exception gate before scheduling integration; real signing/delivery separately authorized.
## P. Risks and alternatives
Single price is a useful initial estimate but no substitute for agreed-version identity; full CPQ unnecessary.
## Q. Extensions
Templates, negotiated scope, expiry policies, e-signing and deposits after validated requirements.
