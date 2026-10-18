# Dependency-ordered execution roadmap · v2

2026-10-18 · Issue #8. Supersedes current priorities in the archived 2026-10-17 roadmap; phase safety gates retained. User rejected the delivered direction, then supplied the complete master specification. This reordering corrects domain/interaction assumptions before further screen expansion.

| Order | Deliverable / IDs | Exit evidence | Current status |
|---|---|---|---|
| 0 | Reconciliation, inventory, A–N contracts and recovered references | Conflicts/unknowns explicit, links and scope reviewed | Specified this milestone |
| 1 | FND-01 independent IDs/snapshots; ACT-01 multi-record actions | Immutable history, stale write/dedup, simultaneous actions/blockers/permission unit tests | Implemented and automated-tested in isolated foundation |
| 2 | B-01/C-01 Sarah New enquiry → Qualify lead workspace migration | Reference-based desktop/mobile rendering, keyboard/draft/error behavior; real browser evidence | Next; current Site is not approved design |
| 3 | D-01 versioned quote/acceptance with technical-review exception | Snapshot invariants, authorized acceptance, idempotent accepted event; no auto appointment | Planned |
| 4 | E-01/F-01 basic visits and closeout | Resource/availability/conflict tests, preparation/return-visit branch | Planned; v1 happy-path demo exists only |
| 5 | G-01/H-01 billability, invoice, allocation and economic lineage | Reconciliation and unknown/partial/negative cases; truthful UI | Planned; v1 synthetic calculations exist |
| 6 | K-01 simulated acknowledgment/confirmation/receipt/feedback/follow-up | Recipient/purpose/consent/delivery/dedup tests; no external sends | Planned |
| 7 | A-01/M-01 owner decisions and trustworthy metrics | Every action/metric explains source/owner/period | Planned; no dashboard expansion first |
| 8 | Operator validation gate | Task completion, exceptions, baseline comparison, adoption evidence | Pending, no fabricated targets |
| 9 | Conditional production foundation | Auth/roles/tenant isolation, durable commands/outbox/audit, backups/recovery/security tests | Not authorized by conceptual scope |
| 10 | I/J/K/L/N deeper operations/integrations | Each subfeature gets evidence-backed scope/spec/Issue | Deferred per feature inventory |
| 11 | Predictive/AI intelligence | Demonstrated value beyond deterministic alternative | Deferred |

## Decision rationale
Earlier sequencing treated a broad menu and a linear journey as sufficient architecture. The supplied master requires simultaneous records, historical snapshots, prerequisite-aware actions and a relationship-centred experience. Building more routes on the stage-index model compounds rework. Isolate and test the smallest foundation first; do not replace the working v1 code or publish a speculative redesign during reconciliation.

## Gates remain active
One active implementation slice; no frameworks or production infrastructure for appearance. Specify all capabilities now without building them. No real customer data, automatic external communications or live financial actions. Browser/visual/accessibility evidence is separate from model and DOM tests. Existing Issues #1–#7 are historical work with unresolved acceptance; Issue #8 records this correction. Run relevant regressions after actual code changes. Continuous improvement occurs within active sessions; no autonomous monitoring implied.
