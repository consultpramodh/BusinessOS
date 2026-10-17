# Demo limitations

Default entry is Today, with six connected destinations and three seeded customers. Sarah's synthetic path runs from qualification through quote, booking, service, invoice, full demo payment and estimated direct contribution. Reload resets everything. Native Site hosting is private, but the frontend does not implement application authentication, roles, backend, real messaging, payments or accounting.

The original simplified dashboard remains at lifecycle.html. Its financial semantics and full stage transitions have not been audited; do not present it as production functionality.

Current tests are `npm test`: deterministic model and DOM integration. They do not test browser layout/native validation, keyboard, mobile or screen readers. Historical qualification-only browser suite is archived under tests/archive. Follow the supported Sites preview/browser workflow for current visual QA. Product architecture lists operational exception and depth backlog; whole-system design does not imply production completeness.
