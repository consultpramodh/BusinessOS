# Domain model and minimum slice

Conceptual relationships do not mandate tables now. Stable opaque IDs are organization-scoped; mutable records have version, owner and timestamps. Record sources are authoritative per capability; adapters do not silently override commercial/financial truth.

| Record | Owner / cardinality | State / historical rule |
|---|---|---|
| Organization, BusinessLocation | N; org 1:N branches and resources | Organization scope on every business record |
| Employee/Resource | J; org 1:N resources; assignments N:M visits | Availability/certification independent of job status |
| Customer | B; org 1:N; individual or organization | Relationship identity, never universal work stage |
| Contact | B; customer 1:N; explicitly designated role/preference | Snapshot recipient identity when relevant |
| ServiceLocation | B; customer 1:N; independent from company branch | Current details mutable; old job address fixed |
| Asset | B/I; location 1:N; job N:M asset references eventually | Serial/model/history; capture work-time snapshot |
| Enquiry/Opportunity | C; customer 1:N independent requirements; opportunity optional first slice | Own qualification/lost/hold state, source, priority and owner |
| Quote/QuoteVersion | D; enquiry 1:N quotes, quote 1:N immutable versions | Acceptance names version/actor/time; no agreed-term rewrite |
| Job/QuoteJobLink | F; accepted quote 1:N jobs; multiple approved scopes via explicit links later | Own work state, fixed scoped commercial/location/asset snapshots |
| Visit/Assignment | E; job 1:N visits; resources N:M | Schedule/cancel/return/arrival independent of invoice/payment |
| WorkRecord/TimeEntry/MaterialUsage/CostEntry | F/J/I/H; job/visit 1:N | Distinguish estimate/actual/source/currency; unknown not zero |
| Invoice/InvoiceJobLink | G; customer 1:N; invoice and jobs N:M when required | Issued versions immutable, adjustments/credits explicit |
| Payment/Allocation | G; customer/org 1:N payments; payment N:M invoice via allocations | Pending/confirmed/reconciled/refunded distinct; no double application |
| Interaction/Document/Communication | B/K; links to customer + relevant records | Recipient/purpose/consent/delivery independent states |
| FollowUp/ActivityEvent | B/K; links and responsible actor | Due/open/completed; append-only event, no fake sent state |

## Minimum implemented foundation
domain/relationship.cjs uses an organization plus in-memory arrays for responsible owners, customers, contacts, locations, assets, enquiries, quotes/quoteVersions, jobs, visits, invoices, payments/allocations, followups and events. Only qualification and current-address update commands are implemented; independent existing records are fixtures for action tests. No CRUD suite, persistence or production authorization.
Enquiry command validates actor/organization, expected version, contact/location/asset relationships and minimum service decision; records immutable qualification snapshot and one event. Retry event ID with the same canonical payload returns recorded result; changed payload/actor/type/record colliding with event ID fails. Current address update creates an event, leaving historical snapshots unchanged.
Fixtures intentionally demonstrate Sarah's new enquiry, separate accepted quote, completed historical job, overdue invoice and due annual reminder simultaneously. Accepted terms and historical job snapshots are fixture definitions; commands for accepting quotes, creating jobs/visits, invoices and allocating payments remain future scope.

## Financial/time boundary
Integer minor units, currency explicit, invoice dueAt/asOf UTC instants; service dates/windows interpreted by organization timezone (America/Toronto initially). Action engine accepts an injected clock; no hidden priority clock. Allocation counts only matching organization/customer confirmed payment. Tax/actual-cost policies and external reconciliation are specified before production; no financial posting by rendering an action.

## Guardrails and migration
Actor checks are executable demo policy examples, not security or tenant-isolation proof: all state is client-accessible if later bundled. Server enforcement and durable optimistic concurrency require production controls. v1 model.js remains separate and stage-based; do not silently convert its financial records or claim new foundation is live. Migrate enquiry-first with an explicit adapter and regression evidence, then retire v1 only after reviewed acceptance.
