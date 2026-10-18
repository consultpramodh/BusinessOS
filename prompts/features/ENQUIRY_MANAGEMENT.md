# Demand capture and qualification
## A. Identity
C-01 · acquisition · coordinator/sales · P0 · FND/B/ACT and minimum N config · Issues #6/#8 · v1.0 · 2026-10-18. Qualification command implemented/tested in isolation; capture integrations/UI migration planned.
## B. Business problem
Phone/paper/email/form intake fragments source/requirements and causes follow-up. Supplied Classic context; volume and lost-revenue baseline unknown.
## C. Expected outcome
One owned requirement with enough information for the next decision, less re-entry. Measure qualification completion/rework, not invented conversion uplift.
## D. Roles and permissions
Office view/create/modify/qualify scoped enquiries; manager approves overrides/lost/reopen. Cancel with reason; delete/merge/export denied until policy. Public submission cannot approve eligibility.
## E. Entry points
Manual/form/phone/email/referral/returning-customer adapters; selected relationship/attention item.
## F. Journey
Capture source/requirement → match candidates → select/resolve identity → choose service/quantity/location/symptoms/timing → assign owner/eligibility → save draft or qualify → quote/review. Unclear match/review stays owned and open.
## G. Data
ID/org/version/source/receivedAt/customer/contact/location/assets/owner/requirements/status. Configuration sets required intake by industry; optional equipment identifiers may be unknown. Minimum command validates contact method/address/service/owner and eligibility; no automatic customer merge.
## H. Integration contract
Input raw demand+source and verified refs. Validate matching/version/config/permission. Output independent enquiry and immutable qualification snapshot/event; D/ACT/K/M consume. Unavailable matching allows reviewed manual capture, not invented identity. eventId/canonical payload dedups; actor/time recorded; UI preserves input on error.
## I. Rules
Google discovery source differs from website submission channel. Outside-area/technical-review scope cannot silently schedule. Requalification creates traceable new snapshot after policy, not overwriting accepted terms.
## J. Interface
Service choices/quantity/timing selections, carried-forward contact and optional equipment. Clear primary qualify/continue; secondary save draft; inline errors/focus, panel continuity and touch layout.
## K. Automation
Normalize inputs and suggest duplicates; acknowledgement queue only after consent/purpose contract. No unapproved sends.
## L. Edge cases
Existing customer new enquiry, shared email, unknown model, several fireplaces, conflicting source, stale save, incomplete/offline submission and denied actor.
## M. Acceptance
Given valid new enquiry, qualification writes one snapshot/event. Given stale or invalid refs, no mutation. Given technical review, quote/schedule action blocked appropriately. Given repeat intake event, no duplicate enquiry.
## N. Verification
Qualification unit tests pass; channel/matching/draft/mobile/browser tests planned, not implemented evidence.
## O. Release
Minimum manual/relationship enquiry path, reference-aligned UX and negative cases; live intake adapter separately reviewed.
## P. Risks and alternatives
Asking all future fields harms intake. Require only next-decision data; manually resolve ambiguous matches initially.
## Q. Extensions
Form/email/API adapters, territory lookup, configurable triage and response SLA after validated demand.
