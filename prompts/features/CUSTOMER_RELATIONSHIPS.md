# Customer relationship context
## A. Identity
B-01 · relationships · office/owner/authorized technician · P0 · FND/ACT · Issues #6/#8 · v1.0 · 2026-10-18. Contract specified/designed; legacy directory exists, corrected UI not implemented/validated.
## B. Business problem
Disconnected records cause repeated entry and lost customer context. User-supplied operating experience; no BusinessOS study.
## C. Expected outcome
Find identity/history and act on parallel work without losing place. Measure record-finding/re-entry/errors against operator baseline.
## D. Roles and permissions
View scoped identity/work; office creates/edits current contact/location, manager approves merge/override, technician sees assigned minimum. Cancel via source feature; delete/export denied until policy. Demo checks not production authorization.
## E. Entry points
Search, enquiry match, job/quote/invoice selection and attention item.
## F. Journey
Resolve customer → relevant contact/location/asset → select outstanding task → inspect support panel → act → related history updates. Ambiguous match requires review; draft retained on panel close/Back.
## G. Data
Individual/org, separate contacts, many locations/assets, independent requirements/quotes/jobs/invoices/payments, interactions/documents/follow-ups. IDs/cardinality/snapshots in DOMAIN_MODEL. Current edit never rewrites historical work.
## H. Integration contract
Input identity and linked refs; validate org/access/matching. Output selected context/current edits, not lifecycle transition. C–M consume IDs, not copied customer objects. Missing contact/location yields recoverable task; event/version on edit; merge retry keyed and reviewed later; UI shows ambiguity/history provenance.
## I. Rules
No global customer work stage. Several enquiries/invoices/jobs may coexist. Contact matching is evidence, not automatic merge by name or email alone.
## J. Interface
Persistent identity, contextual task, compact support/history. Selection-first; missing-only fields. Dark expandable/pinnable rail; no hover dependence mobile. Focus/draft/error/empty states per CUSTOMER_WORKSPACE.
## K. Automation
Carry forward verified data; suggest matching only. Merges/deletions need explicit authorization and audit.
## L. Edge cases
Shared email, changed address, org with many contacts, duplicate customers, asset moved location, simultaneous task edits, denied documents and deleted source refs.
## M. Acceptance
Given address update, completed-job address unchanged. Given parallel enquiry/quote/invoice, each selectable without pretending one customer stage. Given side-panel inspection, draft intact. Given ambiguous match, no silent merge.
## N. Verification
Snapshot/domain tests implemented; full context/draft/keyboard/mobile walkthrough pending.
## O. Release
Reference-aligned browser-tested workspace plus role/data/history acceptance; no production identity claim.
## P. Risks and alternatives
Full-profile forms add burden. Keep small identity and task context; richer data only on demand.
## Q. Extensions
Organization contact roles, safe merge, attachment/communication history and customer portal after evidence.
