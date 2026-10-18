# Service parts and purchasing visibility
## A. Identity
I-01 · inventory/resources · warehouse/purchaser/tech · later expansion · N/F/H · Issue #8 umbrella, implementation Issue required · v1.0 · 2026-10-18. Specified/designed only; unimplemented/deferred.
## B. Business problem
Unavailable parts cause return visits; unrecorded usage hides direct costs. Supplied domain context, demand not measured.
## C. Expected outcome
Know required/available/reserved parts and accountable purchasing need; measure stock-related delays and usage-to-cost reconciliation.
## D. Roles and permissions
Authorized staff view stock; tech requests/records usage; warehouse reserves/receives; purchaser creates PO; manager approves adjustments/overrides/cancel. Delete posted movements denied; export restricted.
## E. Entry points
Job preparation/part-required exception, quote materials estimate, purchase need and asset/warranty context.
## F. Journey
Demand → check location/availability → reserve or request purchase → approval/order → receive → consume/return → job cost. Shortage stays operational blocker, not fake stock.
## G. Data
Part/catalog/vendor/stock-location IDs, quantity/unit, reservations/movements, PO/receipt, cost basis, job/visit links and customer asset serial/warranty history.
## H. Integration contract
Input demand/usage; validate scope/quantity/unit/available balance/version. Output reservation/purchase need/consumption/cost refs; E/F/H consume. Source unavailable means unknown stock and manual review. Movement/event ID dedups; actor/before-after audited; UI distinguishes requested/ordered/received/available.
## I. Rules
Reservation isn't consumption; order isn't receipt. Asset at customer differs from warehouse product. Cost follows explicit estimate/actual source. No negative stock override without permission/reason.
## J. Interface
Task-context parts selector, location/availability, concise shortage action; mobile scan/selection later; keyboard quantities, missing/error/conflict/retry states.
## K. Automation
Low-stock/purchase suggestions only after reliable movements; no automatic vendor order now.
## L. Edge cases
Concurrent reservations, partial receipts, wrong unit/serial, return/warranty part, cancelled job and unavailable vendor.
## M. Acceptance
Given shortage, schedule/prep blocker visible. Given duplicate usage event, cost once. Given partial receipt, remaining purchase need persists. Given cancellation, explicit reservation release.
## N. Verification
Movement/reconciliation/concurrency tests and warehouse/field walkthrough before implementation acceptance.
## O. Release
Validate one parts-related workflow before stock suite; production inventory controls independently tested.
## P. Risks and alternatives
Manual part-request tracking may suffice; avoid warehouse management breadth without operational evidence.
## Q. Extensions
Stock transfers, barcode scanning, replenishment and vendor integrations with scoped specifications.
