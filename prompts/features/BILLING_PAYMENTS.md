# Receivables and payment resolution
## A. Identity
G-01 · billing · billing staff/owner/customer · P1 · D/F, K delivery · Issues #3/#8 · v1.0 · 2026-10-18. Specified/designed; legacy before-tax invoice/full demo payment only.
## B. Business problem
Completed work remains unbilled/uncollected; lumping quote/invoice/cash misleads owner. Master requirement, no measured AR study.
## C. Expected outcome
Trace billable scope to invoice/balance and reconciled collection; measure invoice turnaround/aging/exception resolution using defined periods.
## D. Roles and permissions
Billing views/prepares/edits drafts/issues/allocates; manager approves refunds/credits/overrides/void policy. Customer pays through provider. Delete issued record denied; export role-scoped; tech cannot record receipt of money by default.
## E. Entry points
Reviewed completion, outstanding invoice action, accounting/provider event and customer financial support panel.
## F. Journey
Review scope/billability → invoice draft/taxes/terms → issue → delivery status → pending/confirmed payment → allocate/reconcile → receipt request. Partial/deposit/credit/refund remains explicit balance event.
## G. Data
Invoice IDs/job links/customer/currency, issued version/line items/tax/terms/due date; payment/provider IDs/state; many-to-many allocations, credits/refunds and reconciliation evidence. Integer minor units.
## H. Integration contract
Input approved billable terms or payment event; validate authority/version/currency/amount/provider evidence. Output invoice/payment/allocation/audit and receipt intent; B/H/K/M consume. Provider unavailable leaves pending, not paid. Unique provider/event ID prevents duplicate allocation; UI shows outstanding and failure separately from delivery.
## I. Rules
Quote ≠ invoice ≠ collected cash ≠ earned revenue. Issued terms immutable except traceable correction. No double allocation/over-application or cross-customer/currency application without explicit policy. Avoid ledger rebuild.
## J. Interface
Contextual invoice/balance resolution, clear amount/basis/period, separate pending/confirmed/reconciled and delivery; keyboard amounts, mobile review, errors/retry preserve draft.
## K. Automation
Deterministic invoice math/aging/receipt intent. Actual issue/refund/charge requires authority; no external sends now.
## L. Edge cases
Deposits/partial payments/multi-invoice payment, refund/dispute, duplicate webhook, tax rounding, wrong currency/customer, stale issuance and failed receipt.
## M. Acceptance
Given pending payment, outstanding remains. Given confirmed allocation, balance decreases exactly once. Given over-allocation/cross-customer, reject. Given changed customer address, issued invoice snapshot unchanged.
## N. Verification
Financial fixtures reconcile all cases, permission/provider signature tests when integrating; real UI acceptance. Legacy full-payment tests insufficient.
## O. Release
Synthetic invoice/confirmed-allocation contracts first; live providers gated by production security/reconciliation evidence.
## P. Risks and alternatives
Full accounting engine duplicates mature tools. Start clear receivable records and provider boundary.
## Q. Extensions
Payment links, accounting synchronization, refunds/deposits and credit notes in separately approved subfeatures.
