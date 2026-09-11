# Validation Report

Performed September 11, 2026 using installed Google Chrome through Playwright.

## Current visual-update check

After the visual update, all four pages were checked at 375px, 650px, 768px, 991px, 1024px, and 1440px widths. Every page loaded successfully with no horizontal overflow, one h1, one active navigation item, and no broken images or JavaScript exceptions. Mobile navigation, Escape handling, service preselection, form validation, and inquiry download passed. An axe-core WCAG A/AA scan again reported zero violations on all four pages.

## Passed

- All four pages at 375px, 768px, and 1440px widths: HTTP 200, no horizontal document overflow, one h1 and one active primary navigation item per page.
- Images load and decode successfully.
- No browser JavaScript exceptions during the interaction checks.
- Mobile menu opens; Escape closes it and restores button focus.
- The Photography service link opens Contact with the correct option selected.
- Empty required fields prevent form submission.
- A valid inquiry downloads as a text file containing the supplied details and selected service.
- Primary navigation remains visible with JavaScript disabled.
- JavaScript syntax validation passed.
- axe-core 4.10.3 checks of all four mobile pages using WCAG 2 A/AA and 2.1 AA tags: zero violations reported.
- Desktop and mobile Home screenshots visually inspected.

## Corrections made

The initial mobile Services process row extended beyond the viewport because Bootstrap g-5 produced a 3rem horizontal gutter. A mobile rule reduced that gutter to 1.5rem. All viewport checks passed afterward.

The initial logo contained an unsupported registered-trademark symbol, which was removed.

An early image assertion ran before a lazy-loaded image was decoded. The assertion was corrected; the asset itself was working.

## Limits

No real inquiry was sent, and external email-client behavior is not guaranteed. Safari/Firefox and manual screen-reader testing were not performed. An automated accessibility pass is not a certification. GitHub and hosting access begin as private and must be shared appropriately for judging.
