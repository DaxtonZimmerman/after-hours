# After Hours — AI Development Log

Date: September 11, 2026

These entries summarize actual conversation and implementation interactions. User prompts are quoted where short; longer prompts and internal AI review steps are explicitly summarized. Review and personalize this log before submitting it; do not claim you personally performed the automated checks.

| Interaction / prompt | AI suggestion or output | What was used or changed |
| --- | --- | --- |
| User: “lets plan this first then make it” (with the hackathon brief) | Proposed a four-page outdoor company and a staged build, test, and publish plan. | Kept the four-page plan; changed the business concept. |
| User: “what are some other cocnepts” | Suggested a student creative studio called After Hours among other concepts. | Selected After Hours because brand design, photography, and video fit a visual four-page site. |
| User: “adter hours” | Proposed cream, black, electric blue, oversized headings, three services, and concept-work labeling. | Adopted this direction; avoided fictional testimonials and staff biographies. |
| User: “build it” | Built semantic HTML pages with Bootstrap, shared custom CSS, and a small JavaScript file. | Used four real HTML documents and locally stored Bootstrap so the site works without a package build or external stylesheet request. |
| User: “buil dit in my websites folder” | Located the existing Websites directory. | Created the project at Desktop / Web Dev / Websites / After Hours instead of the initially selected task folder. |
| AI asked which email should receive inquiries; user supplied daxtonmz0021@gmail.com. | Initially proposed a clearly labeled download-only demo until a real address was provided. | Added a mailto draft addressed to the supplied email and kept the downloadable inquiry as a fallback. The site explicitly says it does not send the message. |
| Internal image-generation brief: cobalt and cream OFFLINE music-event print materials on brushed metal, hard flash, no website UI. | Generated a landscape editorial concept image. | Inspected and used the image with descriptive alt text and an AI-assisted concept-work caption. |
| Internal implementation review: inspect branding and responsive layouts. | The first AI draft included a registered-trademark symbol; browser checks also detected horizontal overflow on Services at 375px. | Removed the unsupported registration claim. Reduced the process grid’s mobile gutter from 3rem to 1.5rem, then repeated the layout checks successfully. |
| Internal validation review: verify all four routes, navigation, form behavior, and accessibility. | The first image test counted a not-yet-loaded lazy image as broken. | Fixed the test to decode the image before judging it. Verified all 12 route/viewport combinations and ran axe-core with zero reported WCAG A/AA violations. |

## Ownership and limits

AI assisted with planning, copy, code, imagery, and automated checking. The creator remains responsible for reviewing and understanding the deliverable. The studio and portfolio piece are concepts. Form delivery relies on the visitor's email client. Automated accessibility checks do not prove complete accessibility or replace testing with people.
