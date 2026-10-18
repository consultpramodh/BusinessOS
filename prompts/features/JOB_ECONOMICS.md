# Explainable direct contribution
## A. Identity
H-01 · economics · owner/manager/authorized billing · P2 · D/F/G, I/J actual costs later · Issues #4/#8 · v1.0 · 2026-10-18. Specified/designed; legacy estimate arithmetic tested; actual economics not implemented.
## B. Business problem
Revenue visibility hides labor/parts/travel overruns and unreliable pricing. Hypothesis from service operations; no BusinessOS observed ROI.
## C. Expected outcome
Explain a job's invoice basis, estimated/actual direct costs and uncertainty. Measure reconciliation correctness and owner comprehension before optimization claims.
## D. Roles and permissions
Owner views economics/exports; designated staff create/edit attributable cost drafts; manager approves adjustment/override. Operational users don't gain wage visibility by default. Cancel/delete through source correction policy, never erase issued history.
## E. Entry points
Job closeout, invoice/customer support panel and decision-linked owner investigation.
## F. Journey
Choose revenue/cost basis → inspect missing/source data → compare estimate/actual → explain variance → authorized source correction/pricing review. Unknown remains unavailable.
## G. Data
Accepted/invoiced/collected amounts separate, currency/period, labor/material/travel/subcontract/other direct costs, estimate/actual provenance, discounts/adjustments and allocation basis.
## H. Integration contract
Input immutable commercial and issued/reconciled facts plus costs; validate currency/basis/completeness. Output derived contribution/variance with source refs; A/M consume. Unavailable cost blocks confident result; no source mutation on report. Recompute idempotent; corrections audited by owning command; UI reveals exclusions.
## I. Rules
Direct contribution = selected before-tax eligible revenue − matching direct costs; overhead/tax/financing excluded. Never net profit, never add quoted+invoiced+cash, never silently mix estimates/actuals or unknown/zero.
## J. Interface
One readable explanation then source breakdown, negative/missing labels and tabular amounts; progressive comparison, keyboard/mobile source links, unavailable/error states.
## K. Automation
Deterministic derivation and missing-input checks; no autonomous pricing/wage changes.
## L. Edge cases
Negative contribution, zero/unknown costs, credits/refunds, shared materials/travel, multiple jobs/invoices, currency mismatch and backdated adjustment.
## M. Acceptance
Given 245000 revenue and 147000 costs, contribution 98000 minor units. Given unknown cost, no false zero. Given unpaid invoice, cash distinct. Given cost above revenue, negative visible.
## N. Verification
Calculation fixtures/source-lineage tests and nontechnical comprehension review; actual finance/accounting validation separate.
## O. Release
Definitions and sample figures reconcile before UI metric; no profit guarantee or commercial ROI claim.
## P. Risks and alternatives
Unreliable capture can make precise-looking numbers harmful. Explicit estimates preferable to invented actuals.
## Q. Extensions
Service/customer/location economics, estimate-vs-actual variance and evidence-backed price recommendations.
