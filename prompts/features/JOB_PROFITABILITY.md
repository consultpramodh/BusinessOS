# Feature prompt — job contribution visibility (v0.1)

Historical financial spec. Current authority: JOB_ECONOMICS.md and BILLING_PAYMENTS.md. Preserve earlier fixture evidence; do not confuse before-tax estimated contribution with net profit, cash or recognized revenue.

**Issue:** https://github.com/consultpramodh/BusinessOS/issues/4  
**Status:** simplified sample calculation exists; business definition and QA pending.

## User problem
An owner can see booked work or revenue but may not see whether individual jobs contribute enough after direct labor, materials and travel. Actual demand and willingness to pay remain unverified.

## Definition and honesty
Estimated direct contribution = recognized or eligible job revenue − estimated direct labor − estimated materials − other estimated direct job costs. This is **not net profit**: it excludes unallocated overhead, taxes, financing and other company expenses. The current demo computes amount minus one synthetic cost field and must not be described as actual net profit. Collected cash, invoiced revenue and recognized revenue are different measures; never interchange them.

## 4H1W
WHAT: readable job economics and transparent definitions. WHY: make pricing and operational decisions better informed. WHO: owner/manager, with eventual role controls. HOW: show revenue basis, cost components, calculation, missing data and assumptions. WHEN: update after validated changes to quote, job cost, invoice or payment data; in demo only on sample state changes.

## Financial rules for future implementation
- Currency is explicit (CAD default for prototype); store integer minor units rather than floats when adding persistent financial data.
- Use consistent rounding and tax treatment; taxes collected are not operating revenue.
- Separate estimated from actual direct costs and do not silently mix them.
- Refunds, partial payments, discounts, write-offs, multiple invoices, deposits and multi-currency need deliberate future specifications, not implicit assumptions.
- Unknown cost should show 'Not available', not zero; negative contribution should remain visible.
- Any aggregate must disclose inclusion criteria, period and whether values are estimates.

## Acceptance criteria
1. Given sample amount 2450 and estimated direct cost 1470, show estimated contribution 980 CAD.
2. Given zero amount and unknown costs, do not imply real profit.
3. Given unpaid job, do not count its quote as collected revenue.
4. Given paid job, collected revenue reflects the sample paid amount exactly once.
5. Given cost greater than revenue, show negative contribution without hiding it.
6. Given a dashboard metric, its label and inclusion rule are understandable without a separate explanation.
7. Given narrow screen, currency amounts remain legible and associated with the correct job.

## Counterarguments
Detailed cost accounting adds data-entry burden and may be unreliable before technician time/material capture exists. Start with a clearly labeled estimate; defer detailed cost tracking until a real business validates the effort and decision value. Do not build a ledger.

## Verification
Reconcile fixtures manually or in small deterministic tests; check zero, negative, missing, refunded and unpaid cases before claiming correctness. Existing prototype does not yet cover all these cases.
