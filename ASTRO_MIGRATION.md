# One official portfolio — Astro static migration

**Public URL:** https://omaroid.github.io/  
**Source:** Omaroid/omaroid.github.io  
**GitHub profile README:** Omaroid/Omaroid — links to this site, not a second portfolio.

Original design and code. No starter, theme fork, runtime backend or private repository integrations.

## Technology
- Astro 7 in static prerender mode.
- Semantic HTML, responsive original CSS, native TypeScript for project filters.
- GitHub Actions to build and deploy static HTML.
- Single editable project catalogue at src/data/content.ts.
- Preserved URLs: the six project case studies, roadmap, background, and 404.

## Safe launch

**Important:** GitHub Pages currently serves the gh-pages branch directly. This new Astro code is not a browser-ready site until it is built. The original root index.html and legacy static case-study pages are therefore intentionally left untouched.

1. Review the redesign PR and confirm the build workflow is green. It builds on PRs but does not deploy them.
2. In the GitHub repository open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Switching sources can cause a short publication interruption.
3. Merge the redesign PR into **gh-pages**. The Actions workflow builds and deploys to the **same existing GitHub Pages URL**.
4. Verify homepage, six project URLs, /roadmap/, /experience/, sitemap, 404 and mobile layout.
5. **Only after a successful deployment**, remove old Jekyll and legacy HTML files in a separate cleanup PR. Keep Git history for rollback.

If the Pages source cannot be switched, keep the PR unmerged and keep the legacy site live. Do not attempt to serve unbuilt Astro source as plain branch HTML.

## Updates and verification

Edit src/data/content.ts to add/change the portfolio projects. Keep summaries accurate and differentiate planned, prototype, working application and deployed product. Each change should build and pass smoke tests.

Local workflow: npm install, npm run build, npm run check. Node.js 24 is used in CI. The currently pinned Astro release is 7.0.0.

No private repo contents, API secrets, personal records, customer data or environment tokens should be imported into the public site. Verify rights to screenshots and public material. Check all branches and history with a secret scanner before publishing additional materials.

## One-site policy

The user profile repository (Omaroid/Omaroid) remains a short introduction, not a separate website. This repository remains the sole official portfolio and GitHub Pages origin. Avoid creating additional portfolio repositories or diverging copies.
