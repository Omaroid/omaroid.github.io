# Bilingual portfolio maintenance — FR / EN

**One official site:** https://omaroid.github.io/  
**French:** `/` (default); `/experience/`, `/roadmap/`, `/projects/<slug>/`  
**English:** `/en/`; `/en/experience/`, `/en/roadmap/`, `/en/projects/<slug>/`

The language switch is a normal hyperlink, not a cookie dependency. It retains the current page and slug. Every generated page sets the correct HTML language, canonical URL and reciprocal `hreflang` links.

## Accurate professional positioning

**Today:** Tech Lead Data & IA / Data & AI Tech Lead.  
**Career direction:** building toward Forward Deployed Engineering (FDE).  
Never label the current position “Forward Deployed Engineer” or assert that the transition is already complete.

## Edit professional experience

- **File:** `src/data/experience.ts`
- The content was prepared from the French résumé supplied on **23 October 2026**; the source PDF is **not committed** or published.
- There are eight role periods and seven named client organizations, including two distinct AXA roles, both described.
- Keep employer/client roles and date ranges as written in the source. Mark actual responsibilities, not marketing claims.
- Translate `title`, `dates` and `highlights` in both languages. Tech stack terms need not be translated.
- When a new assignment begins, update the career entries, homepage preview and future CV; never fabricate impact statistics.

## Add or update a project

- **English canonical data:** `src/data/content.ts`
- **French translations:** `src/data/projects.localized.ts`
- **Homepage UI text:** `src/data/i18n.ts`
- **Shared views:** `src/components/Home.astro`, `ProjectCase.astro`, `Experience.astro`, `Roadmap.astro`
- Both locale routes are generated from the same data and view components. **Do not copy the site into two independent repositories.**
- Add to both locales at once and verify the language link retains the case-study slug.
- Preserve privacy: the selected product repos are private. Only public-safe summaries may appear, and any demos must use anonymized or synthetic data.

## Build and quality checks

```sh
npm install
npm run build
npm run check
```

GitHub Actions verifies both language versions, canonical URL alternates, 15 case studies (seven featured and eight earlier projects), eight experience entries, EN sitemap entries and the correct present-versus-aspirational job title. The Hands-on RAG Lab checks cover public source/demo links, bilingual navigation and its locally hosted icon. Preview and mobile-browser QA are still required prior to publication.

## Single-site deployment

Continue using **only** `Omaroid/omaroid.github.io` as the official GitHub Pages source. The profile README at `Omaroid/Omaroid` is only an introduction and index.

Follow `ASTRO_MIGRATION.md` for the safe release sequence. Do not delete the old HTML pages until the Astro-generated bilingual site has been deployed successfully to the existing domain.
