# Decision-linked business measures
## A. Identity
M-01 · reporting · owner/manager/authorized analyst · P2+ · reliable C–K/H facts · Issues #4/#8 · v1.0 · 2026-10-18. Specified/designed; legacy all-record totals only.
## B. Business problem
Unclear measures lead to wrong priorities; decorative charts do not resolve operational decisions. Master requirement, no user metric study.
## C. Expected outcome
Operator can explain a metric's source/basis/period and choose an action. Measure correctness/comprehension and decision use; no invented business uplift.
## D. Roles and permissions
Role-scoped aggregate/drilldown view; admin defines approved metric policy; source owners correct facts. No report create/approve/cancel/delete/override of business records. Export separately scoped/masked; employee costs restricted.
## E. Entry points
Owner attention decision, job economics or operational investigation; not another default chart dashboard.
## F. Journey
Choose decision/period → inspect defined measure → drill source records/exclusions → act through source feature → compare later. Missing data shows coverage, not confident trend.
## G. Data
Metric ID/version/name, source/timestamps/calculation/units/currency/numerator/denominator/inclusion/exclusion/timezone/period/asOf/owner. Conversion, quote acceptance, time-to-quote/schedule, completion, first resolution/utilization, invoice/cash/contribution/AR/repeat/source definitions require approved denominators.
## H. Integration contract
Input source facts/metric version/access/time; validate completeness and basis. Output read-only result/coverage/source refs; A/H consume. Missing source unavailable, not zero. Recompute idempotent; export audit; no metric writeback to commercial facts. UI names source/period and useful next investigation.
## I. Rules
Distinguish events/cohorts, calendar period/timezone, quotes/invoices/cash and estimate/actual. No unsupported conversion/industry benchmark or causal attribution from correlation.
## J. Interface
Readable value/definition then optional comparison/drilldown. Charts only when decision benefits; keyboard data alternative, mobile amount association, empty/partial/error states.
## K. Automation
Deterministic aggregation; scheduled delivery later authorized, no auto pricing/employee judgment.
## L. Edge cases
Small denominator, zero/missing data, late events, cancellations/refunds, merged customers, timezone shifts, inconsistent costs and restricted drilldown.
## M. Acceptance
Given fixture facts, figures reconcile to included records. Given missing cost, coverage disclosed. Given unpaid invoice, not collected. Given denied record, no drilldown leakage.
## N. Verification
Metric fixture reconciliation, cohort/timezone/access tests and owner explanation task; no current full metric framework implementation.
## O. Release
Every displayed metric needs definition/source/period and decision; user comprehension before broad reporting.
## P. Risks and alternatives
One source-backed figure may outperform a dashboard. Defer forecasting until history and definitions reliable.
## Q. Extensions
Service/source/customer cohorts, utilization/variance and evidence-backed predictive advice.
