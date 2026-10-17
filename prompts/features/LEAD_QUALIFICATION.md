# Enquiry qualification — approved slice
Issue #6 · 2026-10-17. Synthetic Sarah Mitchell scenario; no customer validation claimed.

## 4H1W
- What: operator turns an enquiry into a complete, reviewable qualification before quote preparation.
- Why: replace disconnected module navigation with customer context and one next action.
- Who: service coordinator; no implemented permissions or real customer data.
- How: confirm service, issue, contact and location; equipment identifiers optional; invalid submission retains input and focuses first error. Saved data remains in memory, editable without duplicate events.
- When: New enquiry → qualification complete → quote preparation. This does not mean a quote exists or was sent.

## Contract and acceptance
1. Desktop rail expands on hover/focus, explicit pin keeps it open. Mobile uses labelled navigation without hover.
2. Relationship identifies Sarah, synthetic enquiry source, service and next action.
3. Required: name, valid email, phone with 10–15 digits, street/city/postal code, service, equipment count (1–10 integer), issue. Canadian postal format; equipment brand/model optional and unknown shown honestly.
4. Submit invalid data: inline errors, summary, focus first invalid; no stage transition.
5. Valid submit: immutable qualification snapshot, summary, one timeline entry, quote-preparation empty state; no invented price or quote.
6. Edit and save updates snapshot; one current timeline entry. Text rendered with textContent.
7. Reload resets synthetic data; no persistence implied. No network/loading state because save is synchronous in memory.
8. 360px/1440px, keyboard, reduced motion and text zoom must remain usable.

## Alternatives and risks
One long CRM form would be simpler but adds irrelevant entry. Use native controls and optional equipment disclosure. No framework or backend. Phone/postal validation confirms shape, not deliverability. Legacy demo preserved at lifecycle.html, with its unverified economics explicitly separated. Production requires secure persistence and permissions. Real operator value and screen-reader usability remain separate validation gates.
