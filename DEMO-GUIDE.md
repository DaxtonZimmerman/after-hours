# After Hours — Demo Guide

## Two- to three-minute walkthrough

1. **Purpose:** “After Hours is a student creative studio concept for businesses, creators, and campus groups. It presents design, photography, and video services.”
2. **Home:** Show the large headline, blue service strip, and clearly labeled OFFLINE concept project. Explain that the cream/black/blue palette is consistent throughout.
3. **About:** Show the story, values, and honest student-project description. There are no invented client reviews or employees.
4. **Services:** Show the three Bootstrap columns. Select “Plan a shoot” and point out that Photography is already selected on Contact.
5. **Contact:** Submit an empty form to show native validation. Fill it with sample details, then demonstrate “Download inquiry instead.” Explain that “Prepare email” opens a draft in an email app and requires the visitor to send it. Do not send a demo inquiry unless you intend to.
6. **Mobile:** Resize to 375px. Open the navigation menu, use it to switch pages, and show how service cards stack. Escape also closes the menu.
7. **AI ownership:** Open AI-DEVELOPMENT-LOG.md. Explain the mobile gutter mistake and how testing found it. Describe why the unearned registered-trademark symbol was removed.

## Code you can explain

Open `dist/services.html` and find `row g-4` and `col-lg-4`:

```html
<div class="row g-4">
  <div class="col-lg-4">
    <article class="service-card">...</article>
  </div>
</div>
```

- `row` creates a Bootstrap grid row.
- `g-4` adds consistent horizontal and vertical spacing.
- `col-lg-4` occupies 4 of 12 columns at large sizes, so three cards fit side by side. Below that breakpoint they stack.
- `article` gives each service a meaningful semantic container.
- `service-card` applies the custom studio styling from `assets/style.css`.

Open `assets/style.css` and find `:root`. Change `--blue` to demonstrate that shared variables control the brand across pages. Undo the change after the demonstration unless you want to keep it.

Open `assets/site.js`. Explain that the navigation button updates both its visual class and `aria-expanded`. The form uses native validation, encodes text for a mailto URL, and never claims a message was delivered.

## Technologies

HTML5, CSS3, Bootstrap 5.3.3, vanilla JavaScript, Git/GitHub, Sites hosting, and OpenAI image generation. No app framework or build step is required. Open `dist/index.html` directly or serve the `dist` directory locally.

## Design reasoning

Oversized headings give a creative studio a distinct voice. The three-color palette keeps the pages coherent. Cream and black carry body content; blue emphasizes actions and key messages. The layout uses generous spacing and simple cards. System fonts and local assets reduce dependencies.

## Before presenting

- Review all files and replace concept content only with your own accurate details.
- Verify that the presentation audience can access the site and repository. Initial hosting and GitHub access are private.
- Know the contact limitation: a mail client is needed for the prepared draft; downloading is the fallback.
- Read the validation report. Cross-browser, assistive-technology, and manual screen-reader testing remain useful follow-ups.
