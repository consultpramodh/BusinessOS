# Independent records and snapshots
## A. Identity
FND-01 · cross-capability foundation · coordinator/developer · P0 · dependencies none · Issue #8 · v1.0 · 2026-10-18. Specified/designed; minimum implementation and automated tests in domain/relationship.cjs. Not UI-integrated/user-validated/production-ready.
## B. Business problem
v1 shared address/asset edits can rewrite old work context. One embedded work object couples unrelated lifecycle states. Evidence: inspected model.js, not a user study.
## C. Expected outcome
Current details can change without changing captured scope/history. Measure snapshot integrity and independent record behavior; staff time baseline unknown.
## D. Roles and permissions
View relationship: relationship.view; qualify: enquiry.qualify; edit current address: customer.edit. Org must match. Create other record types/approve/cancel/delete/override/export not implemented; production policy remains default-deny until specified.
## E. Entry points
Qualification save and contextual evaluator; future workspace command adapter. No added global module.
## F. User journey
Confirm source records → validate owner/eligibility/version → capture scope → save one event → expose next eligible action. Invalid/stale command retains draft; repeat identical command returns same result. Address update affects current record only.
## G. Data
DOMAIN_MODEL defines IDs/cardinalities. Required org, actor, permission, record version, event ID, time, contact/location/service/requirement/owner/eligibility; equipment optional. Snapshots deep-cloned/frozen. Existing accepted/job snapshots in fixture, acceptance commands deferred.
## H. Cross-feature contract
Input qualified decision + record refs; validate identity/ownership/version/eligibility. Output enquiry snapshot/version/event; C/B/ACT consume. Missing dependency fails before mutation. Audit actor/time/record; canonical payload plus event ID dedups; changed payload collision fails. UI reports success only after return.
## I. Rules
Independent new/qualified enquiry, not customer stage. Contact/location must belong to selected customer; assets to location. One contact method and service address required. No delete/financial posting side effects.
## J. Interface
Future UI preserves identity/drafts, shows changed-record error and links to missing data. No renderer in current foundation. Keyboard/mobile errors tested at UI migration gate.
## K. Automation
Snapshot and event creation immediate deterministic command work; no automatic external sends or database writes.
## L. Edge cases
Cross-customer refs, stale versions, same event ID/different payload, no owner, duplicate assets, denied actors and invalid clocks fail safely.
## M. Acceptance
Given new enquiry, valid qualification creates one snapshot/event. Given retry, identical payload returns same result. Given address edit, old snapshot unchanged. Given stale/unauthorized/cross-customer command, state unchanged.
## N. Verification
tests/relationship.cjs covers these cases, nested immutability and organization denial. Legacy suites regress separately. No server isolation claim.
## O. Release
Foundation may commit with unit evidence; UI adoption requires adapter + real browser checks. Production needs durable transactional versions/event uniqueness/security tests.
## P. Alternatives
Embedding everything is smaller but breaks history/parallel work. Full database now adds premature infrastructure; arrays plus contracts prove minimum semantics.
## Q. Extensions
Durable commands/outbox, merging contacts/locations and explicit quote/job/invoice/allocation commands after current migration.
