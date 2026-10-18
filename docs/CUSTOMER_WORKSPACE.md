# Customer workspace and contextual interaction contract

Visual evidence: VISUAL_REFERENCE_REVIEW.md. Product contract: CUSTOMER_RELATIONSHIPS.md + ACTION_CONTEXT.md under prompts/features/. This defines behavior, not a claim of completed pixel design.

1. Persistent identity: customer, relevant contact/location, relationship context, source where relevant. Active task can be enquiry, quote, visit or invoice; keep its ID/type visible. Do not duplicate all contact fields in each panel or call a customer 'Invoiced'.
2. Contextual work: one primary action with why/owner/deadline. New enquiry starts with classification/quantity/symptoms/preferred timing selections; carry forward known contact/location. Ask for missing decision-critical information, not all hypothetical future fields. Save draft separately from qualification; preserve it across support-panel inspection.
3. Supporting information: compact selectable records, equipment/location, related quotes/jobs/invoices, history/communication/documents. Secondary tasks are grouped by urgency/status and can be selected without losing primary-task draft. Prefer side panel for inspection, not redundant global navigation or routine modals.

## Context selection
Actions operate on independent records. Relationship scope ranks actionable candidates and shows blockers separately. Explicitly selecting an enquiry keeps qualification primary in that task context while an overdue invoice remains visible as another concern. Default relationship recommendation may prioritize the overdue balance; never force the customer into a single linear journey or silently switch task after a background recomputation. No model-generated priority or financial amount.

## Navigation
Capabilities are not menu items. Existing Today/Relationships/Work/Schedule/Money/Settings routes are implementation history, not approved final information architecture. Preserve narrow dark icon rail, hover/focus expansion and pin, active context, accessible labels/tooltips. Reserve sufficient space or expand away from work so it does not obscure controls; mobile uses explicit compact nav/drawer and focus return. Final destinations need workflow validation, not another speculative menu.

## States and recovery
Selection controls expose chosen state semantically; field labels/errors and summary link/focus to invalid inputs. Save/continue responds only after successful command; eligibility/technical-review blockers route to an accountable review. Stale version retains input and offers reload/reconcile; retry uses same event ID only for unchanged command. Empty equipment is 'not recorded', no fabricated model. Permission-denied work stays non-actionable; no fake disabled controls with no explanation. No data loss on side panel close, Back or responsive reflow. Error and loading states are real rather than decorative spinners.

## Verification gate for next UI slice
Given Sarah's new enquiry, an operator identifies owner/reason/action and completes minimum qualification; valid command records snapshot once. Given another simultaneous invoice/quote, inspection preserves draft and doesn't alter historical data. Given keyboard/360px/tablet/1440px, sidebar, selections, panels, errors and focus work in a real browser. Compare against recovered enquiry/scheduler references; exclude unsupported statistics, decorative hero imagery and duplicate labels. No aesthetic or production completion claim from DOM tests alone.
