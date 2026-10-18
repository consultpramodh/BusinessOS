# Connected BusinessOS workspace — Issue #7

Historical implemented prototype; user rejected delivered direction. Superseded as design authority by the 2026-10-18 master, PRODUCT_ARCHITECTURE, CUSTOMER_WORKSPACE and current feature inventory. Preserve this file as evidence of what v1 attempted, not approval to extend its six routes or stage-index model. New foundation/OpenUI experiments are not wired into it.

Status: implemented prototype; model/DOM tests run, browser layout QA pending. Approved 2026-10-17.
Read docs/PRODUCT_ARCHITECTURE.md first. Whole-system design and phased implementation are separate responsibilities. Do not substitute one customer's form for the entire operating system.

## 4H1W
WHAT: six coherent destinations with customer-linked work. WHY: one record must connect enquiry, quote, schedule, work, invoice, payment and contribution. WHO: coordinator/owner, synthetic roles only. HOW: shared model.js, route-driven views, validation before mutation, derived totals, escaped input, accessible native forms and explicit actions. WHEN: explicit operator actions, session only.

## Functional contract
- Today prioritizes first open seeded job (deterministic, not intelligent ranking); shows pending work, scheduled visits and follow-ups.
- Relationships searches name/email/city, creates synthetic enquiry with duplicate email warning, opens customers and independently selected jobs. Qualification updates shared contact/location/equipment details.
- Work filters all records by lifecycle state; opens same relationship/job.
- Schedule shows AM/PM visits and accepted jobs; booking checks real date >= Toronto today, technician and collision within active appointments. No route optimization, technician availability calendar or reschedule UI yet.
- Money derives CAD integer-cent quoted/invoiced/collected/outstanding amounts. Invoice basis is before tax. Contribution is invoice minus three estimated direct costs. No overhead/net-profit claim; unknown costs unavailable and negative values visible.
- Settings edits session business name and default quote rate; shows fixed sample team. Does not alter accepted quotes.
- New enquiry → qualify → quote → record acceptance → schedule → start → complete with notes/costs → invoice → full demo payment → contribution and optional follow-up.
- Quote price editable only while awaiting response. No actual sending, signing, payments or persistent audit.
- History records explicit actions on selected job. Sarah's new and historical jobs have independent states.

## Acceptance and adversarial checks
All six routes and record links render; initial no-hash route is Today; unknown route recovers to Today. Search/filter empty states explain next step. Invalid domain input preserves state and visible inputs; native required/type/min constraints remain. No duplicate full payment; booking conflict rejected; null cost not zero; sample totals reconcile; untrusted text escaped. Keyboard labels, focus, mobile nav and responsive CSS implemented; current browser/screen-reader verification must be reported separately from DOM tests.

## Boundaries and future design
No backend, roles, tenant isolation, real customer data, production tax/ledger/payment behavior. Broader creation/editing and workflow exceptions appear in architecture backlog. Customers may have many jobs; the data model must not put a single stage on a customer. Preserve synthetic truth and maintain source/deployment revision mapping.
