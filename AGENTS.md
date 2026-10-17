# BusinessOS — agent operating instructions

**Canonical source:** https://github.com/consultpramodh/BusinessOS (default branch: main). Never assume a previous chat reflects the latest commit.

## At the beginning of each BusinessOS work session
1. Read README.md, docs/PROJECT_INDEX.md, docs/CURRENT_STATE.md, TASKS.md, and docs/DECISIONS.md from GitHub main.
2. Inspect the relevant source files and open GitHub issues before making a change. Check the current commit/branch; do not overwrite concurrent edits.
3. State which facts are verified from the repository versus assumptions. If GitHub access fails, say so and do not pretend the files are current.
4. Make the smallest coherent change. Test what can actually be tested; never claim browser verification without running a browser.
5. After substantive changes, update docs/CURRENT_STATE.md and docs/CHANGELOG.md, and update TASKS.md or GitHub issues as needed. Keep paths and links accurate.

## Navigation
- docs/PROJECT_INDEX.md: where everything lives, read order, document ownership.
- docs/CURRENT_STATE.md: current capabilities, known defects, next action, latest verified status.
- TASKS.md and GitHub Issues: current work and acceptance criteria.
- docs/DECISIONS.md: durable product/technical decisions and why.
- docs/CHANGELOG.md: chronological meaningful changes.
- docs/product-principles.md: UI/UX and product standards.
- docs/demo-limitations.md: what the prototype cannot do.

## Non-negotiable quality bar
Apple/Wealthsimple-inspired clarity, no copied assets; 4H1W and critical counterarguments for significant decisions; accessible mobile-first UI; no unnecessary framework or infrastructure; synthetic data only until secure storage is deliberately introduced. Avoid fabricated test results, pricing, user feedback, and performance claims.

## Updates and freshness
GitHub main and Issues are the source of truth. Re-read them at the start of every active work session and before significant edits. Update state/change log in the same work session as a meaningful change. This does not imply autonomous continuous syncing or background monitoring.

## Version-controlled prompts
Read prompts/README.md and prompts/MASTER_PROJECT_PROMPT.md at session start; read prompts/UI_UX_SYSTEM.md for UI work, relevant prompts/features/*.md for feature work, and prompts/VERIFICATION.md before completion claims. Update prompts when accepted behavior changes, not on every cosmetic edit.
