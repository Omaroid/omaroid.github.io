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

**Important:** GitHub Pages currently serves the gh-pages branch directly. Astro source must be built for the replacement to go live. The original root index.html and legacy static case-study pages are intentionally left untouched for a reversible rollout.

1. Review the redesign PR and confirm the build workflow is green. PR builds do not deploy.
2. Merge the redesign PR into **gh-pages**. While Pages still serves the branch, the original root HTML continues to work; the deployment action may be skipped or fail until the Pages source is changed.
3. In repository **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab, select **Build & deploy official portfolio**, and choose **Run workflow** on **gh-pages**. This builds and deploys to the **same official GitHub Pages URL**.
5. Verify homepage, all six case studies, /roadmap/, /experience/, sitemap, 404 and mobile layout.
6. **Only after a successful deployment**, remove old Jekyll and legacy HTML in a separate cleanup PR. Keep Git history for rollback.

Changing Pages build source can briefly affect availability. If the Pages source cannot be changed, keep the existing branch-served site; do not delete the old root HTML.

## Updates and verification

Edit src/data/content.ts to add/change featured projects. Keep summaries accurate and differentiate planned, prototype, working application and deployed product.

Local commands: npm install, npm run build, npm run check. Node.js 24 is used in CI. Astro is pinned to 7.0.0.

No private repo contents, API secrets, personal records, customer data or environment tokens should be imported into the public site. Verify rights to screenshots and public material. Check all branches and history with a secret scanner before publishing additions.

## One-site policy

The profile repository (Omaroid/Omaroid) remains a short README introduction, not another website. This repository remains the sole official portfolio and GitHub Pages origin. Avoid new portfolio repositories or divergent copies.

## Two languages, one codebase

**French (primary):** `https://omaroid.github.io/`, `/experience/`, `/roadmap/`, `/projects/<slug>/`  
**English:** `https://omaroid.github.io/en/`, `/en/experience/`, `/en/roadmap/`, `/en/projects/<slug>/`.

The FR/EN switch retains the current page. Both languages are built in the **same** Astro project using shared components, one experience dataset and a translated project catalogue. The source PDF of the résumé is never committed to this public repository.

The professional headline must remain **Tech Lead Data & IA / Data & AI Tech Lead**, with **Forward Deployed Engineering presented solely as a future career direction**. The seven organizations and eight role periods are grounded in the résumé supplied on 23 October 2026. See `BILINGUAL_CONTENT.md` for upkeep.
