# BusinessOS

A calm, focused workspace for service businesses: lead → quote → booking → job → invoice → payment → job profitability.

## First release
One complete demonstrable workflow with synthetic data. No accounting engine, AI agents, microservices or speculative modules.

## Product principles
- Wealthsimple-inspired visual restraint and clear financial information; Apple-inspired navigation and interaction quality. Do not copy proprietary assets.
- One obvious primary action per screen. Show details progressively.
- Accessible, responsive, keyboard-friendly and fast.
- Never invent validation: distinguish demo data, hypotheses and tested functionality.

See [TASKS.md](TASKS.md) and [design principles](docs/product-principles.md).

## Run the prototype
Serve this directory with `python -m http.server 8000`, then open http://localhost:8000. Default entry is Sarah Mitchell's enquiry qualification workspace. Data is synthetic and resets on reload; quote creation is not implemented. Original dashboard remains at lifecycle.html. See docs/CURRENT_STATE.md for verified behavior and outstanding checks.

Browser checks: with Playwright/Chromium installed, run `node tests/workspace.cjs` against the server. `CHROMIUM_PATH` optionally selects an existing browser.
