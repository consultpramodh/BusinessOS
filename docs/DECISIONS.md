# Decision log

## 2026-10-17 — Smallest demonstrable workflow
**Decision:** Build a service-business job lifecycle demo first, rather than a complete ERP.
**Why:** Validate usefulness and navigation with minimal complexity.
**Alternative rejected for now:** accounting engine, AI agents, full ERP modules.
**Revisit when:** real customer workflow evidence and validated technical requirements justify expansion.

## 2026-10-17 — No-framework UI prototype
**Decision:** Plain HTML, CSS and JavaScript for the initial frontend.
**Why:** Low setup cost, inspectable code, quick iteration.
**Risk:** State handling will become harder as features grow.
**Revisit when:** requirements exceed simple static interactions and tests justify a framework.

## 2026-10-17 — UX direction
**Decision:** Apple-inspired interaction quality and Wealthsimple-inspired calm presentation, without copying proprietary designs.
**Evidence needed:** mobile and desktop usability tests, accessible interaction verification.

## 2026-10-17 — GitHub as source of truth
**Decision:** Keep a short project index, factual state snapshot, decision log, changelog and GitHub Issues. Read current GitHub content at each work session; update documentation with meaningful changes.
**Why:** Reduce cross-chat confusion without creating unnecessary automation or duplicate project management systems.
**Constraint:** No claim of continuous background sync without an actual scheduled process.
