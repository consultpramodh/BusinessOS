# Organization and industry configuration
## A. Identity
N-01 · administration · operator/admin · minimal config P0, production controls conditional · FND · Issue #8 umbrella · v1.0 · 2026-10-18. Specified/designed; legacy session name/rate only.
## B. Business problem
Hardcoded fireplace/team assumptions prevent reuse, while technical settings overwhelm operator. Requirement, not proof of multi-industry demand.
## C. Expected outcome
Reusable services/intake/hours/policies without separate applications; measure operator configuration comprehension and invalid-policy prevention.
## D. Roles and permissions
Admin views/creates/modifies configuration/roles; authorized owner approves sensitive policies; cancel draft/revert via version; delete referenced config denied; override/export limited. Employees view relevant defaults only.
## E. Entry points
Organization setup, contextual missing-service/territory rule, admin workspace—not daily task interruption.
## F. Journey
Choose business locations/territories/services/hours/team/notifications → review implications → validate/version/save → apply future defaults. Existing accepted/completed records retain snapshots; failure retains draft.
## G. Data
Org/business location IDs, timezone/currency, service catalog/pricing/tax-policy references, roles, availability/skills, intake field config, workflow/notification/integration references and audit version.
## H. Integration contract
Input operator policy; validate references/permission/version. Output versioned defaults consumed by C/D/E/J/K/L; unavailable config blocks affected decision rather than guessing. Idempotent save/retry and audited before/after; UI explains future-versus-historical effect. Secrets stay server-side after production gate.
## I. Rules
Industry flexibility through selected configuration, not universal mandatory fields. Policy change cannot rewrite accepted quote, invoice or completed service. Permission settings must be enforced server-side before real users.
## J. Interface
Plain business language, selection controls, progressive advanced settings, keyboard/mobile inputs, scoped validation and empty/loading/stale/error states; no unimplemented 'connect' buttons.
## K. Automation
Validation/default propagation only. External connection setup and role provisioning separately authorized.
## L. Edge cases
Removed referenced service, changed tax/rate/hours, deactivated tech with bookings, invalid territory, concurrent admins and denied export.
## M. Acceptance
Given default rate change, future draft updates only. Given referenced service removal, preserve historical name/value. Given missing required config, clear blocker. Given non-admin change, denied without mutation.
## N. Verification
Config/version/reference/snapshot tests plus operator-language walkthrough; current target not implemented.
## O. Release
Minimal intake/service/resource config first; auth/integration secrets only after production gate.
## P. Risks and alternatives
Configuration can become programming. Keep first vertical sensible defaults, allow only proven variation.
## Q. Extensions
Approved industry templates, multi-location policies, integration mapping and operator workflow settings.
