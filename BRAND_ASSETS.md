# Portfolio logo and favicon provenance

## Positioning

The portfolio presents Omar Laraqui as a **Data & AI Tech Lead**. The six project pages describe their own user problems, architectures, implementation approaches and evidence. Forward Deployed Engineering is discussed only in the separate career roadmap; it is an aspiration, not a claimed current position or the purpose of every project.

## Real project favicons served from this repository

The portfolio ships six favicon-sized project marks under `public/project-icons/`:

| Project | Origin | Asset served |
| --- | --- | --- |
| DossierPro | Existing original project favicon (`public/favicon-512x512.png`) | `dossierpro.png` |
| Retail Churn Copilot | Existing original application favicon (`client/public/favicon-192x192.png`) | `retail-churn-copilot.png` |
| Mission Radar | Existing original dashboard favicon (`public/favicon.svg`) | `mission-radar.svg` |
| PokéValue | Existing original app favicon (`public/favicon.svg`) | `pokevalue.svg` |
| SA-OS | No favicon was found in the project's repository | `sa-os.svg` — an original editorial fallback, **not** a source favicon |
| Lakehouse Signal | Original selected project mark | `lakehouse-signal.png` — generated project identity used by the portfolio |

Only visual assets, **not private source code or secrets**, are included in the portfolio. The original PNG files are stored losslessly as checked-in Base64 under `src/assets/project-icons/`. GitHub's text-only connector required this representation. The zero-dependency `scripts/materialize-project-favicons.mjs` restores the exact PNG bytes before `astro build` and `astro dev`. All six project icons are self-hosted and accessible without a third-party dependency.

## Client and employer marks: local assets

All company marks are served from `public/logos/clients/`, with the company name retained as visible text. This avoids a third-party request for logos, fixes the former AnyLogo `403 Forbidden` responses, and keeps the image policy self-hosted. Employer references identify past work and do not claim endorsement.

| Company | Local asset | Source / note |
| --- | --- | --- |
| ENGIE | `engie.png` | Favicon snapshot for `engie.com`, fetched through Google's favicon service |
| Groupe Alain Afflelou | `afflelou.png` | Favicon snapshot for `afflelou.com`, fetched through Google's favicon service |
| iQera | `iqera.png` | Favicon snapshot for `iqera.com`, fetched through Google's favicon service |
| AXA | `axa.png` | Favicon snapshot for `axa.com`, fetched through Google's favicon service |
| Natixis | `natixis.svg` | Cropped mark from [Natixis.svg on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Natixis.svg); the visible company name is separate HTML text. |
| Ingeniance | `ingeniance.png` | Favicon snapshot for `ingeniance.fr`, fetched through Google's favicon service |
| Edifixio | `edifixio.png` | Mark cropped from the high-resolution company logo in the [Edifixio Salesforce AppExchange listing](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B5c6fEAB). |

Company marks may be trademarks of their owners. The site does not imply endorsement. Favicon snapshots are static local files, not dynamically updated; replace them if a company changes its mark. The strict CSP now allows images only from the site itself and `data:`.

## Technology logos

The existing 23 technology marks under `public/logos/technology/` are locally hosted SVG assets selected from [Simple Icons](https://github.com/simple-icons/simple-icons), distributed under [CC0 1.0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). They identify technologies used in projects; their brand rights remain with their owners.

All project icon files and generated FR/EN pages are checked in CI. These tests are safety checks, not a security certification.
