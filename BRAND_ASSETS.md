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
| BLOOM Terminal | No favicon was found in the project's repository | `bloom-terminal.svg` — an original editorial fallback, **not** a source favicon |

Only visual assets, **not private source code or secrets**, are included in the portfolio. The original PNG files are stored losslessly as checked-in Base64 under `src/assets/project-icons/`. GitHub's text-only connector required this representation. The zero-dependency `scripts/materialize-project-favicons.mjs` restores the exact PNG bytes before `astro build` and `astro dev`. All six project icons are self-hosted and accessible without a third-party dependency.

## Client and employer logos: CDN delivery

The site renders logo images from the free, keyless [AnyLogo CDN](https://anylogo.dev/docs/logos/) by **company website domain**:

- ENGIE: `engie.com`
- Groupe Alain Afflelou: `afflelou.com`
- iQera: `iqera.com`
- AXA: `axa.com`
- Natixis: `natixis.com`
- Ingeniance: `ingeniance.fr`
- Edifixio: `edifixio.com`

Each remote image uses `https://img.anylogo.dev/{domain}?size=128&fallback=monogram` and is accompanied by the real company name as plain HTML text so the identity remains understandable if image requests fail. Logo availability, brand choice, correctness and freshness depend on the CDN; a monogram fallback is possible. Employer references are not an endorsement claim. Old invented client-logo assets have been removed.

**Privacy and availability trade-off:** Loading company images from a third-party CDN causes the visitor's browser to contact `img.anylogo.dev`, sharing an IP address with that image host. The image elements use `referrerpolicy="no-referrer"`. The site does not call the provider API in JavaScript and does not embed third-party scripts. A restrictive CSP allows precisely this logo image host in `img-src`; other external images, fonts, trackers and executable scripts remain blocked.

## Technology logos

The existing 23 technology marks under `public/logos/technology/` are locally hosted SVG assets selected from [Simple Icons](https://github.com/simple-icons/simple-icons), distributed under [CC0 1.0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). They identify technologies used in projects; their brand rights remain with their owners.

All project icon files and generated FR/EN pages are checked in CI. These tests are safety checks, not a security certification.
