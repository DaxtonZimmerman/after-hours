# After Hours

A four-page student creative studio concept built for the AI Web Design Hackathon.

## Open and edit

Open `dist/index.html` in your browser. All assets are local, so no install or build is required. For a local server, run `python3 -m http.server 4173 --directory dist` from this folder and open http://localhost:4173.

- `dist/index.html`: Home
- `dist/about.html`: About
- `dist/services.html`: Services
- `dist/contact.html`: Contact
- `dist/assets/style.css`: shared theme, layouts, breakpoints
- `dist/assets/site.js`: mobile navigation, inquiry draft and download
- `dist/assets/bootstrap.min.css`: Bootstrap 5.3.3 (MIT), stored locally
- `dist/assets/offline-studio.png`: AI-generated concept image

## Technologies and design

Semantic HTML5, CSS3, Bootstrap 5.3.3, and vanilla JavaScript. Bootstrap supplies the responsive grid, spacing utilities, and form foundations. Custom CSS supplies the studio's visual identity. The palette is warm cream, near-black, and soft blue. Large headings convey creative confidence; restrained layouts keep the content readable. Navigation and footers are intentionally repeated in four HTML files so each page is independently understandable. Keep them consistent when editing.

## Contact behavior

The form validates required fields and prepares a mailto draft addressed to daxtonmz0021@gmail.com. The visitor must send it from their email app. There is no backend, delivery guarantee, analytics, or inquiry database. A downloadable text-file fallback works without a configured email app. Never change the success text to claim a message was sent unless a real delivery service confirms it.

## Content honesty

The studio and OFFLINE work are concepts, not completed client engagements. The image is AI-generated. There are no invented team members, testimonials, metrics, or registered trademark claims. Email is supplied by the creator.

## Accessibility

Skip link, semantic landmarks, one h1 per page, active navigation with aria-current, explicit form labels, native input validation, visible keyboard focus, mobile-menu aria-expanded state and Escape handling, descriptive image alt text, and reduced-motion support. Navigation works without JavaScript.

## GitHub and publication

The project uses a dedicated private GitHub repository: https://github.com/DaxtonZimmerman/after-hours. Sites hosting metadata is in `.openai/hosting.json`; keep its existing project identity. See the demo guide and AI log for presentation preparation.

## Third-party assets

Bootstrap 5.3.3: https://getbootstrap.com/ — MIT license retained in the vendored CSS header. The concept image was generated with OpenAI image generation for this project. Inter is used when installed, followed by system sans-serif fonts; Georgia is a system serif fallback. No external font requests are made.
