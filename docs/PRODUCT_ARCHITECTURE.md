# BusinessOS architecture · v2

2026-10-18 · Issue #8 · reconciled to user's complete master specification.
Master: ../prompts/MASTER_PROJECT_PROMPT.md. Historical six-route architecture: archive/PRODUCT_ARCHITECTURE_20261017.md. Its existence and code tests never established user approval of the delivered design.

## Capability ownership, not a menu
| Capability | Owns | Receives → produces | Authoritative specification |
|---|---|---|---|
| A Command centre | Attention and accountable decisions | Independent records/action context → role-filtered attention view | COMMAND_CENTRE.md |
| B Relationships | Customer/contact/location/asset continuity | IDs/history → persistent identity and related context | CUSTOMER_RELATIONSHIPS.md |
| C Acquisition | Sources/matching/enquiry qualification | Incoming demand → owned qualified scope or review | ENQUIRY_MANAGEMENT.md |
| D Quotes | Versioned commercial offer/approval | Qualified scope/catalog → immutable accepted terms | QUOTES_ESTIMATES.md |
| E Scheduling | Visits/resources/customer commitments | Eligible scope/availability → appointment/assignments | SCHEDULING_DISPATCH.md |
| F Execution | Preparation/work/closeout/exceptions | Visit/scope → work records/time/materials/review | FIELD_EXECUTION.md |
| G Billing | Receivables/allocations/reconciliation | Billable scope → invoice/balance/receipt request | BILLING_PAYMENTS.md |
| H Economics | Estimate/actual direct contribution | Invoice/cost lineage → transparent job economics | JOB_ECONOMICS.md |
| I Inventory | Catalog/stock/reservations/purchasing | Work demand → resource commitments/consumption cost | INVENTORY_PURCHASING.md |
| J Employees | Skills/availability/work resources | Team policy → eligible assignment/time cost | EMPLOYEES_RESOURCES.md |
| K Engagement | Recipient/purpose/consent/delivery | Business event → deduplicated communication lifecycle | COMMUNICATIONS_RETENTION.md |
| L Automation | Rule and integration execution | Trigger/contracts → observable authorized actions | AUTOMATION_INTEGRATIONS.md |
| M Reporting | Metric lineage and decisions | Versioned operational/financial facts → defined measures | REPORTING_INTELLIGENCE.md |
| N Administration | Organization/industry configuration | Operator policy → validated defaults/permissions | ADMIN_CONFIGURATION.md |

Specs above live under prompts/features/. Foundation and action contracts: DOMAIN_FOUNDATION.md and ACTION_CONTEXT.md. Detailed subfeature inventory and build/defer boundaries: FEATURE_INVENTORY.md. The A–N list is not fourteen sidebar pages. Six previously implemented routes are historical views, not the definition of the business.

## Record architecture
Organization owns IDs. Customer can be individual or organization; contacts are separate. Location belongs to customer; equipment belongs to location. Enquiry/opportunity and commercial records remain independent. QuoteVersion holds scope/price/tax/terms/address snapshot; accepted version is immutable. Quote can fund several jobs; job can have several visits and work/cost records. Invoice/job and payment/invoice allocations may be many-to-many. Interaction/document/follow-up/event links preserve relevant record identity. See DOMAIN_MODEL.md for explicit cardinalities and minimum implemented slice.

## Interaction architecture
Workspace has persistent customer identity plus selected location/task, a dominant contextual work area and progressive supporting records/history. The customer is never labelled with one universal commercial/service/payment stage. Actions explain reason, responsible owner, permissions, deadlines and blockers. Simultaneous actions are ranked transparently; operator can inspect another task without discarding enquiry drafts. Context evaluator is read-only; commands separately validate versions/eligibility/authority and append history. See ACTION_CONTEXT.md and CUSTOMER_WORKSPACE.md.

## Operational contracts
Reference journey: SARAH_REFERENCE_JOURNEY.md. Event/command envelope and exception contracts: INTEGRATION_CONTRACTS.md. Accepted quote plus unresolved technical prerequisite produces a review action, not an appointment. Completion is separate from billability approval; issued invoice separate from confirmed payment and allocation. Communication can be queued/failed/delivered independently of a successful work transition.

## Scope and migration
Existing frontend: browser-memory, hardcoded fireplace assumptions, embedded financial/visit records and stage index. Preserve it as historical implementation, not a release target to broaden. New foundation: dependency-free experimental domain arrays, qualification snapshots/versioned command and deterministic multi-record action evaluator; not wired to the Site yet. No database/schema migration/integration/backend introduced.
Next: migrate Sarah's qualification workspace to foundation, preserving approved visual composition and recoverable drafts; then introduce versioned quote acceptance and technical-review branch before scheduling. Operational expansion remains evidence-ordered. Production security/persistence/audit/recovery requires independent tests and operator evidence.
