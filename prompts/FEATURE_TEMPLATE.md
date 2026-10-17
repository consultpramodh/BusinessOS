# Feature specification template

**Feature:** <name>  
**GitHub Issue:** <link>  
**Status:** proposed / approved / implemented / verified  
**Owner and target user:** <roles>  
**Last updated:** <date>

## 1. User problem and evidence
Describe the observed job-to-be-done, existing workaround, frequency, impact, and source of evidence. Label interviews, analytics, desk research and assumptions distinctly. What does failure cost the user?

## 2. 4H1W decision gate
- WHAT exactly changes for the user? Define the smallest meaningful outcome and non-goals.
- WHY is it valuable now? Why not use an existing screen, manual process or third-party tool?
- WHO can view, create, modify and approve it? Who bears costs or errors?
- HOW does the user discover, complete, reverse and recover from the action? Include data, dependencies and edge cases.
- WHEN is it available, triggered, completed, expired or escalated? What must be true to ship?

## 3. User journey and interface contract
Entry point; primary action; secondary actions; progressive disclosure; expected navigation; desktop and mobile patterns; focus and keyboard behavior; success, loading, empty, invalid, offline and error states; copy tone; accessibility and reduced motion. Every visible control must have a useful behavior. Define confirmation only for destructive/irreversible actions.

## 4. Data and business rules
Entities and required fields; authoritative source; state transitions; validation; time zones; currency; rounding; identifiers; permissions; idempotency; duplicates; persistence; auditability; failure recovery; data retention. Mark future backend requirements separately from demo-only behavior.

## 5. Acceptance criteria
Write 5–10 independently observable Given/When/Then statements, including a negative path and an accessibility path. Avoid acceptance criteria that only say 'looks premium'.

## 6. Alternatives and adversarial review
Strongest customer, business, UX, engineering, skeptic and verifier objections; simplest alternative; risks of building vs not building; rationale for chosen scope. Give decision conclusions, not private thought transcripts.

## 7. Verification plan
Automated tests where feasible; manual browser walkthrough at narrow and wide viewports; keyboard and screen-reader checks; sample-data reconciliation; security boundaries; regression checks. State actual observed results separately from planned tests.

## 8. Release and handoff
Feature flag or demo-only label; rollout/backout; dependencies; documentation updates; GitHub Issue state; known limitations; next validation gate. No production claims without production evidence.
