# BusinessOS — product and execution master

Version 2.0 · 2026-10-18 · user-supplied complete specification reconciled in Issue #8.
This is the controlling product direction. Historical 2026-10-17 master and architecture are retained under docs/archive; they describe previous assumptions, not current design approval.

## 1. Mission
Design, develop, validate and improve a premium, intelligent, context-aware operating environment for service businesses. Connect customer acquisition, needs, conversion, staff/resources, service delivery, collections, economic understanding, retention and growth. Reduce administrative work rather than add another data-entry layer. Begin with fireplace/field service; support HVAC/plumbing/electrical and other service businesses through configuration and reusable capabilities. Do not prematurely build a generic ERP.

## 2. Source of truth
Repository https://github.com/consultpramodh/BusinessOS, main. Before work read AGENTS.md; PROJECT_INDEX, CURRENT_STATE, FEATURE_EXECUTION_ROADMAP, DECISIONS, CHANGELOG; TASKS; prompt index, this master, FEATURE_TEMPLATE, UI_UX_SYSTEM, VERIFICATION, SESSION_HANDOFF; relevant feature specifications, Issues and source. Inspect recent commits. Reconcile new requirements explicitly, preserving decision history. A document, mockup, test, prototype and production system are different evidence states.

## 3. Principles
One connected business through shared independently identified records. Context determines relevant actions. Enter data once but preserve accepted terms and historical service snapshots. Automation follows reliable, observable rules and human authority. Financial measures have separate trustworthy definitions. Complexity requires a user problem and measured outcome. Deterministic rules precede opaque AI.

## 4. Full capability scope
Architecture and detailed ownership: docs/PRODUCT_ARCHITECTURE.md. Inventory and dependency DAG: docs/FEATURE_INVENTORY.md. Every package below has an A–Q feature specification under prompts/features/.
A Business command centre: attention, appointments, unassigned/delayed work, outstanding quotes/invoices, workload and relevant decisions.
B Relationships: individual/organization customer, contacts, locations, equipment, parallel enquiries/work, interactions, documents and follow-ups.
C Acquisition: website/phone/email/manual/referral/returning demand, attribution, matching, duplicates, classification, eligibility, priority, ownership, qualification.
D Quotes: services/labor/materials, price/tax/discount/terms, revisions, expiry, approval and follow-up; preserve agreed version.
E Scheduling: variable days, availability/skills/territory, customer windows, duration/travel/buffers/resources, reschedule/cancel/return visit; optimize only after reliable basics.
F Execution: preparation/instructions/checklists, mobile arrival/completion, time, parts, photos, notes, safety, acknowledgment, additional-work approval, closeout/return visit.
G Billing: invoices/tax/terms, deposits/partial payments/refunds, reconciliation, receivables/receipts/accounting integration; no default ledger rebuild.
H Economics: separate revenue/invoice/cash/estimated and actual direct costs; job contribution before overhead; explain variance and service/customer/location economics.
I Resources: catalog, stock locations/availability/reservations, vendors/POs/receipts, consumption, warranty/serial/service history; no premature warehouse suite.
J Employees: profiles/roles/skills/certifications, availability/assignments/time/workload; no default payroll or intrusive surveillance.
K Engagement: acknowledgments, quote/booking/reminder/change/completion/invoice/receipt/feedback/review/retention communications, with recipient, purpose, consent where applicable and delivery state.
L Automation/integrations: trigger, conditions, data, action, actor, permissions, failure, retry/deduplication, audit and measurable success.
M Reporting: metric definitions, sources, periods and decision ownership for conversion, time-to-quote/schedule, completion/resolution, utilization, invoices/cash/contribution/AR, repeat business and source.
N Administration: organization/business locations/territories/catalog/pricing/team/roles/hours/notifications/integrations/industry/workflow/audit configuration.
This scope describes long-term direction, not approval to implement every capability now or one sidebar item per capability.

## 5. Domain and historical accuracy
Use explicit organization-scoped identifiers and cardinalities from docs/DOMAIN_MODEL.md. Customer may have multiple contacts, locations, assets and unrelated active enquiries. Quote can produce multiple jobs; job can require multiple visits; invoice/payment allocation may be many-to-many. No universal customer/job status advances all commercial, service and financial state. Preserve contact/address/equipment/accepted-terms snapshots when downstream history must not change. Do not create every conceptual table now.

## 6. Contextual actions
Answer: what needs to happen next, why, and who may do it? Evaluate independent records, urgency/deadline/commitment/impact, prerequisites and permissions. Keep simultaneous enquiry, accepted quote, completed job, overdue invoice and future reminder visible without equal prominence. Explain blockers and priority. At most one primary action in a selected task context; supporting actions are available progressively. See ACTION_CONTEXT.md and CUSTOMER_RELATIONSHIPS.md.

## 7. Experience and visual direction
Apple-inspired interaction consistency and Wealthsimple-inspired restraint, no copied proprietary assets. Persistent identity; contextual work; supporting records/history. Dark icon-first sidebar expands on hover and focus, pins explicitly, has labels/tooltips and must not obscure active work. Mobile uses explicit controls without hover. Minimal typing, selection controls, preserved drafts, validation/recovery, optional side panels, restrained/reduced motion and accessible responsive layouts. No unnecessary checkboxes, card grids/charts/gradients/badges, decorative hero areas or repeated customer data. Recovered visual evidence and exclusions: docs/VISUAL_REFERENCE_REVIEW.md. Existing six-route Site is a rejected-direction implementation, not the design authority.

## 8. Feature definitions
Every feature package uses prompts/FEATURE_TEMPLATE.md sections A–Q: identity; problem; outcome; permissions; entry; journey; data; cross-feature I/O; business rules; interface; automation; edge cases; Given/When/Then acceptance; verification; release; alternatives; extensions. Define independently shippable subfeatures in their own specification before implementing them; package inventories are not blanket implementation authorization. Define what is verified evidence versus hypothesis and measurable criteria versus observed benefit.

## 9. Integration contracts
For significant transitions define input, validation, output/changed records, connected consumers, exception/failure path, actor/permission, audit, idempotency and UI behavior. Acceptance of a quote may yield technical review instead of scheduling, never silently creates an appointment. See docs/INTEGRATION_CONTRACTS.md and SARAH_REFERENCE_JOURNEY.md.

## 10. Reference scenario
Sarah discovers via Google, enquires, is matched, qualifies, retains location/equipment, receives a quote, accepts, is scheduled/notified, receives service, costs are captured, invoice issued, payment reconciled, receipt delivered, feedback and follow-up planned, future opportunity considered, owner reviews history/economics. Every transition must list reused data, changes, responsible user, next action, failure, communication, financial implications and verification. This journey proves connected architecture before broader implementation; it does not force all relationships into one path.

## 11. Execution dependencies
Follow current roadmap: foundation → customer workflow → economic/operational intelligence → operator validation → conditional production foundations → evidence-ordered expansion → evidence-backed intelligence. Record reordering rationale and dependencies. First assignment: recover current code/docs/references; reconcile gaps; create inventory/DAG; separate built/planned/deferred; define minimum domain/workspace/actions; begin the smallest reusable priority item. No endless planning, speculative infrastructure or broad UI expansion.

## 12. Engineering
Retain simple HTML/CSS/JavaScript until requirements justify components, storage or a service layer. Isolate experimental foundation code with explicit migration status. Evaluate state, identifiers, relationships, audit, events, permissions, concurrency, recovery and tests before persistence. Never expose secrets or put real customer data into the prototype. Financial transitions require stronger production controls. No claim that client-side permission tests establish tenant isolation.

## 13. Six-lens QA and evidence
Review customer usefulness, benefit/cost, UX coherence, engineering reliability/security, skeptical alternatives and observable verification. Run VERIFICATION. Track specified, designed, implemented, tested, user-validated and production-ready separately. Browser evidence cannot be inferred from DOM tests; code commitment is not release acceptance.

## 14. Continuity
Maintain AGENTS, project index, current state, roadmap, decisions/changelog, tasks, master/UI/template/feature/verification/handoff prompts. After each meaningful milestone inspect live head; identify Issue/spec; implement; test; commit; update state/changelog/Issue; record changed decisions; identify next dependency. Update the authoritative document rather than duplicate conflicting specifications. GitHub freshness occurs at session/meaningful-change boundaries; no continuous background monitoring implied.

## 15. Success
Operator sees attention, waiting customers, scheduled work, blockers, responsibility, completed work, invoice/cash/economics and next action. Technician sees only necessary assigned work. Customer experiences communication and continuity. Owner gains visibility without redundant staff entry. Validate effectiveness with real workflows; feature count is not success.

## 16. Current assignment boundary
Reconciliation and a tested independent enquiry/snapshot/action foundation are the first milestone. Rejected frontend remains available only as historical implementation. Restore the approved visual relationship interaction through a separate reviewed migration after foundation contracts; do not redesign the entire product into module dashboards or deploy unreviewed screen changes merely to demonstrate activity.
