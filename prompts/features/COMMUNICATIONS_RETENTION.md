# Appropriate customer communication and follow-up
## A. Identity
K-01 · engagement · office/customer/owner · simulated P1 then later delivery · B and event producers · Issue #8 umbrella · v1.0 · 2026-10-18. Specified/designed; v1 follow-up date only; no sends.
## B. Business problem
Missed/duplicate notices, inconsistent receipts/feedback and forgotten annual service disrupt relationships. Requirement, no measured retention impact.
## C. Expected outcome
Each relevant event has accountable appropriate communication, transparent delivery and follow-up. Measure missed/duplicate/failed notices, not assumed conversion.
## D. Roles and permissions
Office views/drafts/schedules permitted messages; authorized sender approves sending; customer controls applicable preferences. Manager cancels/retries/overrides within policy. Delete delivery history/export restricted. This specification is not permission to send now.
## E. Entry points
Enquiry/quote/appointment/change/completion/invoice/payment events, customer context and due follow-up.
## F. Journey
Event → purpose/recipient/channel/consent/dedup checks → draft/queue → authorized send → provider status → delivered/failed/suppressed → retry/escalation. Payment receipt, feedback, review invitation and recurring service remain separate intents.
## G. Data
Message/event/customer/contact/record IDs, purpose/template version, recipient snapshot, preference/consent evidence where applicable, channel, scheduledAt, state/provider ID/retry history.
## H. Integration contract
Input validated business event; output communication intent/delivery event/follow-up; B/A/M consume. Failed provider doesn't roll back completed work or mark delivered. Unique purpose+event+recipient key dedups; audit who/why/when/state. UI shows pending/failed/suppressed independently.
## I. Rules
No inferred consent or fake sent state. Transactional receipt differs from marketing/review solicitation. Feedback invitation doesn't guarantee satisfaction; negative/unresolved feedback becomes owned service issue.
## J. Interface
Compact context/history with recipient/purpose/status, preview and explicit send/cancel, retry reason. Mobile/keyboard composition and failure recovery preserve draft; no popups for every automatic intent.
## K. Automation
Simulated intents first; live rule-based acknowledgments/reminders only after authorization/provider/consent and failure contracts.
## L. Edge cases
Shared email, opt-out/changed contact, cancellation after reminder queued, duplicate provider events, bounced invoice, failed receipt, complaint and inappropriate review request.
## M. Acceptance
Given event retry, one intent. Given missing recipient/consent requirement, blocked reason. Given provider failure, failed not delivered. Given unresolved complaint, service resolution precedes inappropriate solicitation.
## N. Verification
Outbox/dedup/suppression/retry/recipient tests plus preview/status/accessibility walkthrough; no external send in tests.
## O. Release
Synthetic intent evidence first; separately authorized live provider and policy review before real delivery.
## P. Risks and alternatives
More automation can create spam/errors. Manual draft with accountable follow-up is the simplest safe starting point.
## Q. Extensions
Two-way email/SMS, service reminders and retention opportunities after preferences and reliable history exist.
