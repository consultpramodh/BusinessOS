# BusinessOS product architecture

Approved whole-system prototype scope · 2026-10-17 · Issue #7.
Design the complete experience; implement incrementally. The first qualification slice never represented the whole product. This document supersedes that narrower interpretation of the master prompt.

## Operator and purpose
Service coordinator and owner of a small service business. Keep the customer relationship intact from enquiry through service, payment and return service. Sarah Mitchell's synthetic fireplace journey is the reference, not the only customer or a hardcoded product boundary.

## Navigation and ownership
| Destination | Owns the view | Primary next step | Shared source |
|---|---|---|---|
| Today | Open work and scheduled visits, follow-ups | Open the next relevant job | Jobs, appointments, follow-ups |
| Relationships | Searchable customer directory and relationship workspace | Contextual action on selected job | Customer, location, equipment, jobs, events |
| Work | All work and stage filters | Open a job | Same jobs, no copied state |
| Schedule | Booked windows and accepted work awaiting booking | Schedule or start service | Job appointment |
| Money | Invoiced, collected, outstanding, estimated contribution | Open invoice-linked job | Job quote, invoice, payment, costs |
| Settings | Business name, rate defaults, team reference | Save session defaults | Settings |

Narrow desktop sidebar expands on hover/focus and pins open; explicit labelled mobile links. History is inside a relationship. Quotes and invoices are contextual records, not redundant top-level modules.

## Entity relationships
Customer 1→many Locations; Location 1→many Equipment; Customer 1→many Jobs. Jobs reference customer, location and equipment IDs, and contain prototype quote, appointment, invoice, payment, costs and chronological events. Different jobs for one customer have independent stages. Financial entities are embedded for this prototype and should become explicit records if revisions, deposits, partial invoices/payments or persistent audit requirements are approved.

## Reference journey and contextual actions
| Job state | Action | Prerequisite / result |
|---|---|---|
| New enquiry | Qualify lead | Validate contact/location/service; update shared records |
| Qualified | Prepare quote | Positive price, integer CAD cents |
| Quote awaiting response | Record acceptance | Demo acceptance; quote revision available before acceptance |
| Quote accepted | Schedule service | Valid future/today Toronto date, AM/PM, technician, no window collision |
| Scheduled | Start service | Appointment exists |
| In progress | Complete service | Notes and all three direct cost inputs; unknown is not zero |
| Service completed | Prepare invoice | Accepted quote supplies before-tax amount |
| Invoiced | Record demo payment | Full outstanding synthetic invoice only |
| Paid | Review contribution | Invoice minus estimated direct costs; optionally plan follow-up |

## Whole-system design inventory
Implemented prototype: all six destinations, searching/filtering, new customer enquiry with duplicate email warning, contextual journey, linked totals/history, settings defaults, follow-up date. Sarah has a new job and a historical paid job. Separate retained legacy dashboard is not in main navigation.
Next design depth: enquiries for existing customers, editing and duplicate reconciliation; multiple equipment selection; quote line items/rejection/expiry; rescheduling/cancellation; return visits; attachments/communications; payment exceptions; team/catalog editing. These are designed boundaries and backlog, not implemented capabilities.
Conditional production: durable storage, authentication/roles/tenant isolation, audit logs, backups, messaging/calendar/accounting integrations. No backend infrastructure approved by this prototype scope.

## 4H1W and acceptance
What: coherent system with linked records. Why: eliminate disconnected demo modules. Who: coordinator/owner, synthetic roles only. How: common model, contextual actions and derived operational/financial views; failures preserve inputs. When: on explicit operator actions; reload resets demo.
Acceptance: each global route renders; every record link returns to its relationship; Sarah can progress from enquiry to payment; invalid actions leave state unchanged; schedule and money derive from the same records; several customers/jobs can be navigated independently; malformed text is escaped; mobile labels require no hover.

## Adversarial review
Risk: broad navigation can imply mature modules. Mitigation: useful bounded screens and truthful session/demo labelling, explicit incomplete depth above. Risk: simple linear stage cannot model real operational exceptions. Keep production claims blocked; test rejection/cancellation/deposit scenarios before real deployment. Risk: aesthetics can hide no commercial value. Validate task completion and handoff errors with an operator; no time-savings or ROI claim yet.
