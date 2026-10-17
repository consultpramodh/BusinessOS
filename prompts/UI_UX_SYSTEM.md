# UI/UX execution prompt — calm, precise, effortless

## Design intent
BusinessOS should feel as calm and legible as a high-quality personal finance product and as predictable as a polished native operating-system interface. Inspiration: Wealthsimple's information restraint and Apple's interaction quality; do not clone screens, brand marks, illustrations, icons or proprietary styling. Prioritize clarity and accessibility over aesthetic imitation.

## Layout and hierarchy
Use a responsive content grid and a restrained spacing scale (4, 8, 12, 16, 24, 32, 48, 64 px as appropriate). Avoid wasting large areas of screen while also avoiding cramped cards. Prefer compact grouped information over nested cards. Establish clear page title, contextual subtitle, primary action and next-step content. Use a consistent max content width and intentional mobile stacking. Keep high-value information visible without unnecessary scrolling.

## Typography and color
Use platform fonts or a carefully justified single web font; strong typographic hierarchy, readable line heights, tabular numerals for money, sufficient contrast. Neutral backgrounds, dark readable foreground, one restrained accent for primary actions; use semantic status colors only when status is meaningful. Never rely on color alone. Avoid gradients, ornamental shadows, excessive borders, and decorative badges.

## Navigation and actions
Persistent but unobtrusive desktop navigation; thumb-reachable mobile navigation where appropriate. One clear primary action per page; secondary actions visibly secondary. Avoid dead buttons and placeholder controls. Provide clear active/hover/focus/disabled states. Support keyboard navigation, Escape for dialogs, focus return, appropriate semantic roles and touch targets around 44px or larger where possible.

## Data presentation
Every number needs an explicit definition and time period. Distinguish collected revenue from invoiced revenue and estimated contribution from net profit. Do not present invented metrics as real. Empty states should explain the next useful action. Error states should say what happened and how to recover. Keep tables readable on mobile using intentional layouts rather than uncontrolled horizontal overflow.

## Interaction quality
Fast perceived response; clear feedback after an action; reversible actions where possible; no surprise navigation; no forced modal for routine inspection if an inline panel works better. Animations should explain change and respect reduced-motion settings. Do not add motion solely to signal 'premium'. Use short human-readable labels and avoid internal ERP jargon.

## Evaluation rubric (score each 1–5 with evidence)
1. Task clarity: can a new operator identify the next action?
2. Visual hierarchy: is the important information dominant?
3. Information density: enough context without clutter?
4. Consistency: do repeated controls behave the same way?
5. Accessibility: contrast, focus, labels, keyboard and responsive text?
6. Responsiveness: 360–390px phone, tablet and 1440px desktop?
7. Error recovery: can users fix mistakes without losing work?
8. Truthfulness: are statuses and financial numbers clearly defined?

Aesthetic approval alone is not release approval. Record observed evidence and unresolved failures.

## Current implementation guidance
Existing files: index.html, styles.css, script.js. Improve incrementally rather than introducing a framework for styling alone. Verify actual rendering before claiming a polished result.
