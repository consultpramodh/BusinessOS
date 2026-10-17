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

## 2026-10-17 — Relationship-first foundation and qualification
User approved Phase 0 plus New enquiry → Qualify Lead slice. Default entry now centers Sarah's relationship rather than overview metrics. Preserve original lifecycle prototype separately to avoid deleting existing behavior while keeping unaudited financial metrics out of the new workspace. No framework/backend. Quote preparation stops at a reviewable saved qualification; it must not imply a quote exists. Desktop hover/focus rail also has a pin; mobile uses explicit text links. Main risk: visual refinement alone does not demonstrate operator value; real operator testing remains required.

## 2026-10-17 — Full product design, phased implementation
User clarified that BusinessOS requires the whole operating experience and approved the six-destination structure. The prior slice was a milestone, not the product boundary. PRODUCT_ARCHITECTURE.md now owns the full screen/entity/journey map. Today is the entry point; customer relationships own context; operational views read shared records. No single lifecycle stage belongs on a customer. Embedded financial records and linear progression are explicit prototype compromises. Existing backend/security gates remain. Browser QA is unavailable through the supported managed Sites controller; record model/DOM tests separately and keep verification issue open.
