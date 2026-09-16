# Adiba Ibnat Hossain — Portfolio

A responsive, multi-page academic portfolio designed for GitHub Pages.

## Pages

- `index.html` — landing page
- `research.html` — research interests and methodology
- `publications.html` — searchable/filterable publications
- `experience.html` — education, work, and awards
- `projects.html` — filterable research/software projects
- `contact.html` — email, GitHub, LinkedIn, and mailto contact form

## Interactive features

- responsive mobile navigation
- automatic active-page navigation state
- light/dark theme toggle saved in `localStorage`
- scroll reveal animations with reduced-motion support
- publication search and year filters
- project category filters
- expandable project details
- back-to-top control
- static contact form that opens an email draft (no backend required)

## Deploy on GitHub Pages

1. Copy all files in this folder into the root of the `portfolio` repository.
2. Keep `assets/images/dp5.jpeg` (the current profile photo) at that exact path.
3. Commit and push the changes to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch** and select `main` / `(root)` if it is not already configured.
6. The site should be available at `https://adiba1604041.github.io/portfolio/` after GitHub Pages rebuilds it.

## Editing content

All content is plain HTML. The shared styling is in `assets/css/styles.css`, and interactions are in `assets/js/script.js`.

If you add a new page, copy the header/footer from an existing page and add the new link to the `.nav-links` list on every page.
