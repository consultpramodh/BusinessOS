# Master reconciliation — 2026-10-18

Baseline inspected: main bc73ed635a025146b66eb1149f731b510cb4b3da; recent implementation 3c1db7c. Issue #8. User rejected delivered design on 2026-10-17 and supplied the full architecture on 2026-10-18. Live GitHub code/docs/Issues checked; clean separate worktree preserves previous local edits.

| Requirement | Baseline fact | Reconciliation / disposition |
|---|---|---|
| Full A–N operating scope | Six-route prototype, four feature prompts, broad backlog | Add capability inventory and A–Q package contracts; scope is not a menu |
| Premium relationship workspace | v1 pages use beige serif headings, repeated record lists and long form | User-rejected direction; recovered original images; no further styling by inference |
| Parallel relationship states | Multiple jobs, but one stage index per work item mixes enquiry/quote/visit/invoice/payment | Independent record foundation and read-only action evaluation; v1 not migrated yet |
| Historical accuracy | Qualification mutates shared address/asset/contact read by old jobs | Immutable qualification snapshots and versioned location updates tested in new foundation |
| Contacts/organizations/IDs/cardinality | Flat personal contact fields, one equipment/visit/quote embedded | Document explicit organization scope, contacts, versioned quote, jobs/visits and allocations |
| Action relevance and ownership | First pending seeded job, no actor/deadline/blocker reasoning | Deterministic ranked actions expose reason, owner, eligibility and permission |
| Accepted quote exceptions | Every accepted quote goes to scheduling | Technical-review blocker prevents eligible schedule action |
| Once-only reliable commands | UI progression/partial duplicate protection | Enquiry command event ID, expected version, payload collision guard and event record |
| Financial truth | CAD cents and estimated costs tested; no tax/partial allocations | Preserve useful v1 evidence but define separate invoice/cash/contribution and future allocation contract |
| Communications/receipt/feedback | No delivery system; follow-up date only | Define simulated-first outbox contracts; no false sent state or external sends |
| Industry reuse | Fireplace strings and fixed technician names | Config contract with per-service intake requirements; no generic ERP engine |
| Feature completeness evidence | Old docs call architecture implemented; browser QA still pending | Separate specified/designed/implemented/tested/user-validated/production-ready; user acceptance not passed |
| Roadmap | Broad UI before domain exceptions; production gates retained | Foundation → reference workspace → quote exception → visits/billing → operator gate; record decision below |
| OpenUI addition | No OpenUI dependency or inference backend | User-requested bounded parser/component-contract spike; domain commands stay authoritative; no model call/backend introduced |

## Preserved decisions
Simple static frontend, synthetic data only, no framework migration for styling, no ledger/payroll/AI prioritization, no production infrastructure without evidence, separate browser verification, GitHub continuity and explicit source/deployment mapping. Existing Site not overwritten in this milestone; this is a domain/specification reconciliation, not another claimed visual redesign.

## Missing versus delivered now
Now: master/template, A–N inventory/contracts, minimum domain/cardinality map, transition contracts, Sarah walkthrough, workspace/action requirements, recovered-reference review, independent enquiry/snapshot/action tests, OpenUI bridge experiment.
Next: reference-based workspace integration, browser/mobile/keyboard/error/draft evidence, quote-version/acceptance command and actual operator walkthrough. Production auth/persistence/communications remain absent.

## Six-lens verdict
Customer: contextual simultaneous work addresses the stated problem; no measured user benefit. Business: baseline and willingness-to-pay unknown. UX: original visual references recovered; v1 rejected. Engineering: isolate small reusable foundation, do not rewrite frontend prematurely. Skeptic: A–N feature scope can become ERP bloat; package/backlog is not implementation approval. Verifier: automated domain/legacy tests separately reported; no visual completion claim.
