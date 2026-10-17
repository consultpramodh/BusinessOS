# BusinessOS — feature execution roadmap

**Status:** Planning baseline · 2026-10-17
**Authority:** This document defines build order. GitHub Issues track work; docs/CURRENT_STATE.md records verified completion. A roadmap entry is not evidence of implementation.

## Operating rule
Build the smallest complete vertical slice before expanding horizontally. A phase starts only when its dependencies and exit gate are met. UI/UX quality, accessibility, truthful metrics and minimal engineering apply at every phase. Do not start backend, authentication or integrations merely because they appear later in this roadmap.

## Phase 0 — Product clarity and visual foundation (NOW)
**Outcome:** An understandable, responsive, high-quality shell that can be tested with a real operator.
1. P0.1 Define one target operator, their top task, baseline workflow and three measurable acceptance criteria. [Issue #1](https://github.com/consultpramodh/BusinessOS/issues/1)
2. P0.2 Audit existing static dashboard in an actual browser at mobile and desktop widths; fix broken controls, navigation, labels, financial metric inconsistencies and dialog focus.
3. P0.3 Establish minimal design tokens, reusable navigation, typography, button, form, status and empty/error patterns. No component framework by default. [Issue #2](https://github.com/consultpramodh/BusinessOS/issues/2)
**Exit:** Screens are usable on 360px and desktop; keyboard focus and interaction work; no misleading metric labels; real browser evidence recorded. [Issue #5](https://github.com/consultpramodh/BusinessOS/issues/5)

## Phase 1 — Single job journey (FIRST PRODUCT SLICE)
**Outcome:** A user can demonstrate one lead-to-paid-job story with synthetic data.
4. P1.1 Lead intake and customer details: minimum required fields, clear validation, duplicate warning (demo-only).
5. P1.2 Quote: create, edit and accept an estimated price with visible status and next action.
6. P1.3 Booking: select a date/window and assign a technician in a simplified demo; no route optimization.
7. P1.4 Job execution: work status, completion confirmation and concise notes.
8. P1.5 Invoice and payment: demo invoice and payment status; distinguish invoiced, collected and unpaid.
9. P1.6 Job timeline: readable chronological history of these actions, with consistent identifiers. [Issue #3](https://github.com/consultpramodh/BusinessOS/issues/3)
**Exit:** One realistic scenario can be completed end-to-end; invalid transitions are prevented; data is consistent across screens; no dead-end actions; test evidence captured.

## Phase 2 — Useful economics and owner overview
**Outcome:** Owner understands what each job earned, what it cost, and what remains uncertain.
10. P2.1 Estimated direct cost breakdown: labor, materials, other direct costs, missing values.
11. P2.2 Job contribution: revenue basis − direct costs, clear exclusions, currency/rounding.
12. P2.3 Overview: collected vs invoiced vs quoted amounts, active jobs and next actions; all labels reconcile to sample records. [Issue #4](https://github.com/consultpramodh/BusinessOS/issues/4)
**Exit:** Test fixtures reconcile, negative/missing-cost cases work, and a nontechnical user can explain each displayed number.

## Phase 3 — Customer evidence gate (BEFORE INFRASTRUCTURE)
13. P3.1 Walk through the prototype with target operators and record friction and existing tools.
14. P3.2 Measure task completion and time vs current workflow; distinguish observation from self-report.
15. P3.3 Validate willingness to adopt/pay and prioritize the single most painful missing capability.
**Exit:** Evidence-backed go / revise / stop decision. Do not invent customer validation or commercial viability.

## Phase 4 — Production foundations (CONDITIONAL)
16. P4.1 Choose minimal hosting and persistent storage based on validated requirements.
17. P4.2 Authentication, authorization and tenant isolation; threat model and security tests before real customer data.
18. P4.3 Durable state transitions, validation, audit trail, migrations and backup/recovery.
19. P4.4 Integration boundary for an existing accounting/payment provider rather than rebuilding a ledger.
**Exit:** Security, reliability, and data lifecycle requirements are tested; production readiness is separately assessed.

## Phase 5 — Operational expansion (EVIDENCE-ORDERED)
20. P5.1 Technician availability and scheduling, then rescheduling and customer notifications.
21. P5.2 Materials/parts and purchasing visibility when job-cost evidence justifies it.
22. P5.3 Quote follow-up, repeat service and customer communication.
23. P5.4 Marketing lead-source attribution and campaign-to-job contribution when reliable source data exists.
24. P5.5 Conditional automation for one verified high-frequency cross-entity pain point.
**Exit:** Each feature has a paying/observed user need, feature prompt, acceptance criteria and measured benefit.

## Deferred unless independently justified
Full general ledger, payroll, broad social publishing, paid-ad management, AI agents, generic workflow builder, complex route optimization, advanced forecasting, multi-vertical ERP. These are not promises or scheduled commitments.

## Sequencing and change control
- Only one active build slice at a time; prioritize defects blocking the slice.
- Before implementation: create/link a feature prompt from prompts/FEATURE_TEMPLATE.md and a GitHub Issue.
- At the end of each slice: run prompts/VERIFICATION.md, record actual test evidence and update docs/CURRENT_STATE.md and docs/CHANGELOG.md.
- Reorder only with an explicit decision note: evidence, dependency impact, simplest alternative and reason.
- The UI/UX bar is cross-cutting, not a final cosmetic phase.

## Immediate next three actions
1. Run browser QA of the existing dashboard (P0.2).
2. Correct the UI and misleading demo metrics; define the minimal reusable design primitives (P0.3).
3. Specify and implement lead intake (P1.1) as the first true workflow action.
