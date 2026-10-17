# Current state

Last reviewed: 2026-10-17 · main · connected prototype (Issue #7).

## Implemented
- Six destinations: Today, Relationships, Work, Schedule, Money, Settings. Same relationship/job data across all views.
- Three seeded customers, four independent jobs; Sarah has a new enquiry plus historical paid service.
- Search relationships, filter work, create a synthetic enquiry with duplicate-email warning.
- Qualification → quote price/revision → demo acceptance → conflict-checked booking → start → completion notes and estimated costs → invoice → full demo payment → contribution; optional follow-up date.
- Integer CAD cents; separate quoted/invoiced/collected/outstanding totals. Unknown direct costs unavailable; negative contribution visible. Before-tax estimates, not net profit.
- Shared tokens/form primitives and expanding/pinnable desktop rail; six explicit mobile links. Settings edits business name/default rate for current session.
- Architecture: PRODUCT_ARCHITECTURE.md. Active contract: prompts/features/CONNECTED_WORKSPACE.md. Legacy dashboard retained outside main navigation.

## Actual verification
- `node tests/model.cjs`: PASS — lifecycle, independent jobs/shared identities, invalid input leaves state unchanged, booking conflicts/date checks, cents, unknown/negative costs, duplicate payment prevention and new/duplicate enquiry.
- `NODE_PATH=/tmp/businessos-qa/node_modules node tests/ui.cjs`: PASS — LinkeDOM render/form integration for all six routes, search/empty state, qualification through payment via form events, quote revision, cross-screen schedule/money, safe text rendering, missing route, pin state.
- Syntax and `git diff --check`: PASS. Dev-only LinkeDOM 0.18.13; `npm install` then `npm test` reproduces the suites.
- These are model/DOM tests, not browser layout, native validation popup, mobile, keyboard or assistive-technology tests. Earlier Chromium checks apply only to the archived qualification-only UI, not this expanded release.
- Supported browser controller unavailable in managed Sites environment; browser QA skipped per Sites instructions. No browser or preview server improvised.

## Boundaries / open work
Session memory resets on reload; no live email, payment, accounting, auth, permissions, backend or real customer data. One linear path with embedded quote/invoice records; deposits, partial payments, cancellations, rescheduling, quote expiry/rejection and return visits need further work. Existing-customer request creation, independent equipment selection, contact editing after qualification, full team/catalog management remain backlog. No production readiness or commercial benefit established.

## Site continuity
- Existing private Site: https://businessos-relationship.pramodh7.chatgpt.site
- Project: appgprj_6ad36ebf89f88191b65d8532a6578a56 (owner-only audience verified this session).
- Expanded source: 37e8ba5fdedbb70e0d2d7f501af4187d76a50a9e, synchronized from GitHub implementation 3c1db7cc7354e055cbf1b8b51e4e5bfe096538b5. Native private deployment returned succeeded on 2026-10-17. Hosted browser verification remains pending.
- GitHub is canonical; Site dist is deliberately synchronized from approved frontend files. No automatic sync. Reuse the same Site and source helper, preserve audience, publish and record source revision.

## Next action
Browser/device/accessibility verification of the connected experience, then operator walkthrough and exception-flow design. Do not infer unimplemented infrastructure from whole-product design approval.
