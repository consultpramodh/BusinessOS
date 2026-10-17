# BusinessOS

Connected prototype: Today, Relationships, Work, Schedule, Money and Settings. Read [Product architecture](docs/PRODUCT_ARCHITECTURE.md) for the whole system and [Current state](docs/CURRENT_STATE.md) for implemented behavior and verification limits.

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
Serve this directory with a static server and open index.html. Today is the default entry. Open Sarah from Today or Relationships to follow qualification through quote, booking, service, invoice, payment and contribution. All data is synthetic and resets on reload. Original dashboard remains separately at lifecycle.html. See docs/CURRENT_STATE.md for verification limits.

Development checks: `npm install` then `npm test` (model and DOM tests, no browser claims). Historical qualification-only browser suite is archived in tests/archive. Follow the Sites skill's supported preview/browser workflow for current visual QA.
