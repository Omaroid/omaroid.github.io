# Omar Laraqui — Data & AI portfolio

Bilingual professional portfolio: [French](https://omaroid.github.io/) · [English](https://omaroid.github.io/en/)

The site presents Data engineering, architecture and applied AI work through six technical case studies, a résumé-based career history, and a clearly labeled roadmap. Private project repositories stay private; the site publishes sanitized summaries only. The current positioning is **Data & AI Tech Lead**. Forward Deployed Engineering is a future direction, not a current job title.

## Stack and structure

- Astro 7 builds a static site; there is no application server or runtime database.
- French and English routes share components and source data.
- Company, technology and project marks are bundled locally. The site does not load remote logos or third-party scripts.
- `src/data/content.ts` — project case studies and selected public foundations.
- `src/data/projects.localized.ts` and `src/data/i18n.ts` — French copy and shared UI translations.
- `src/data/experience.ts` — professional roles, education and certifications.
- `src/components/` and `src/pages/` — shared views and generated routes.
- `public/logos/` and `public/project-icons/` — self-hosted visual assets; see [BRAND_ASSETS.md](BRAND_ASSETS.md).
- `scripts/verify-build.mjs` — generated-page, route, CSP and asset checks.

## Work locally

Use Node.js 24.

```sh
npm ci
npm run dev
```

Build and check the static output with:

```sh
npm run build
npm run check
```

## Publishing and privacy

GitHub Actions builds the static site and runs dependency and output checks before deployment. The site is the only official portfolio; the profile README links here. See [BILINGUAL_CONTENT.md](BILINGUAL_CONTENT.md) for content rules and [ASTRO_MIGRATION.md](ASTRO_MIGRATION.md) for the GitHub Pages publishing workflow.

Do not commit résumé files, real CVs, customer or candidate records, credentials, API tokens, private project code or unlicensed client material. Use synthetic examples in public demonstrations. Before changing a source repository from private to public, scan its full Git history and deployment assets, verify data and employer rights, add an appropriate license and remove or rotate any exposed credentials.

See [PUBLICATION_REVIEW.md](PUBLICATION_REVIEW.md) for the current project-selection and publication-readiness review.
