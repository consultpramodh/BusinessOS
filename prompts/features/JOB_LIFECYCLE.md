# Feature prompt — job lifecycle (v0.1)

**Issue:** https://github.com/consultpramodh/BusinessOS/issues/3  
**Status:** demo implemented in simplified form; browser verification pending.

## Problem
Service operators lose context when enquiries, quotes, appointments, work and payment statuses live in different tools. This is a hypothesis based on workflow experience, not yet a verified BusinessOS customer study.

## Intended outcome
A user opens one job, sees its customer, service, amount, current stage and next action, and can move a synthetic record through lead → quote → scheduled → in progress → invoiced → paid. The prototype is a walkthrough, not a production state machine.

## 4H1W
WHAT: single readable job lifecycle. WHY: reduce cross-system navigation and ambiguous status. WHO: dispatcher/owner; eventually technician and billing staff with distinct permissions. HOW: job list, detail view, explicit transition, state-dependent actions, deterministic recalculation. WHEN: stages change only on user action in demo; eventual transitions require validated prerequisites.

## Required interaction
- Entry: overview job list with readable title, service, amount, stage.
- Detail: job identity, status, quoted value, estimated cost and contribution.
- Primary action: progress to the next stage; label should describe the actual transition, not generic 'next'.
- Prevent advancing past paid; provide feedback and preserve focus when closing detail.
- New job: eventually a compact form with validated customer, service and amount; current prototype only inserts a placeholder sample record and must be labeled as such.
- Mobile: no clipped labels, usable touch targets, accessible dialog focus behavior.
- Empty/error: helpful next action, no silent failures.

## Data model (conceptual, not implemented backend)
Job { id, customer_id, service_type, status, quoted_amount, currency, estimated_direct_cost, created_at, updated_at }. Event { job_id, actor_id, event_type, timestamp, previous_status, next_status }. Quote, booking, invoice and payment become distinct entities only when real requirements justify them. Demo uses in-memory simplified objects and has no event log.

## State transition policy
Lead → Quoted → Scheduled → In progress → Invoiced → Paid. Production must later validate quote acceptance, scheduling constraints, work completion, invoice issuance and payment reconciliation. No automatic financial posting on a UI-only stage change.

## Acceptance criteria
1. Given a job in the list, when selected, its details and current stage are shown.
2. Given an eligible job, when advanced, exactly one stage change occurs.
3. Given a paid job, no further advancement is offered.
4. Given stage change, visible summaries recalculate consistently.
5. Given an empty list, a meaningful creation action is available.
6. Given keyboard navigation, every interactive control can be reached and activated.
7. Given a 360px viewport, no key controls or job labels become unusable.
8. Given a reload, demo data reset is clearly documented; persistence is not implied.

## Risks and alternatives
A single status field is easier but conflates independent quoting, scheduling, invoicing and payment events. Keep it only for prototype. A production workflow should model those boundaries explicitly and verify permissions and auditability. Do not add a general workflow engine for this demo.

## Verification
Manual browser walkthrough, keyboard/dialog focus, screen reader, mobile/desktop checks, event transition count, summary consistency, empty and invalid states. Record actual results in docs/CURRENT_STATE.md. Current status: not visually verified.
