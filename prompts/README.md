# Prompt and feature specification index

Controlling authority: [Master v2](MASTER_PROJECT_PROMPT.md), [reconciliation](../docs/RECONCILIATION_20261018.md), [architecture](../docs/PRODUCT_ARCHITECTURE.md), [inventory/DAG](../docs/FEATURE_INVENTORY.md). Current sequencing: [roadmap](../docs/FEATURE_EXECUTION_ROADMAP.md). Use [A–Q template](FEATURE_TEMPLATE.md), [UI/UX](UI_UX_SYSTEM.md), [verification](VERIFICATION.md) and [handoff](SESSION_HANDOFF.md).

| ID | Package contract |
|---|---|
| FND-01 | [Independent domain/snapshots](features/DOMAIN_FOUNDATION.md) |
| ACT-01 | [Contextual actions](features/ACTION_CONTEXT.md) |
| A-01 | [Command centre](features/COMMAND_CENTRE.md) |
| B-01 | [Relationships](features/CUSTOMER_RELATIONSHIPS.md) |
| C-01 | [Enquiries](features/ENQUIRY_MANAGEMENT.md) |
| D-01 | [Quotes](features/QUOTES_ESTIMATES.md) |
| E-01 | [Scheduling](features/SCHEDULING_DISPATCH.md) |
| F-01 | [Field execution](features/FIELD_EXECUTION.md) |
| G-01 | [Billing/payments](features/BILLING_PAYMENTS.md) |
| H-01 | [Job economics](features/JOB_ECONOMICS.md) |
| I-01 | [Inventory/purchasing](features/INVENTORY_PURCHASING.md) |
| J-01 | [People/resources](features/EMPLOYEES_RESOURCES.md) |
| K-01 | [Communications/retention](features/COMMUNICATIONS_RETENTION.md) |
| L-01 | [Automation/integrations](features/AUTOMATION_INTEGRATIONS.md) |
| M-01 | [Reporting/intelligence](features/REPORTING_INTELLIGENCE.md) |
| N-01 | [Admin/configuration](features/ADMIN_CONFIGURATION.md) |
| UI-01 | [OpenUI bridge experiment](features/OPENUI_ADAPTER.md) |

Each package inventories connected capabilities; extract an independently shippable subfeature into its own A–Q specification/Issue before implementing it. Historical CONNECTED_WORKSPACE, LEAD_QUALIFICATION, JOB_LIFECYCLE and JOB_PROFITABILITY files are marked superseded; preserve evidence but do not extend rejected scope from them. A specification isn't implemented functionality. Update current state/changelog/Issue alongside material change; no secrets/PII in prompts.
