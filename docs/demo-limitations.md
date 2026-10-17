# Demo limitations

Default entry is the synthetic Sarah Mitchell qualification workspace. Saving means an in-memory qualification snapshot, not durable storage or a created/sent quote. Reload resets all input and state. No real customer data, authentication, roles, backend, scheduling engine, payments or accounting.

The original simplified dashboard remains at lifecycle.html. Its financial semantics and full stage transitions have not been audited; do not present it as production functionality.

Browser checks and remaining gaps are recorded in CURRENT_STATE.md. Run a static server (`python -m http.server 8000`) and `node tests/workspace.cjs` with Playwright/Chromium installed. Optional CHROMIUM_PATH selects an existing Chromium binary. Tests write temporary screenshots under /tmp; these are verification aids, not product assets.
