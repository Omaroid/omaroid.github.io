# Portfolio playbook — keep the showcase curated

This repository powers [omaroid.github.io](https://omaroid.github.io/). The separate [Omaroid/Omaroid](https://github.com/Omaroid/Omaroid) repository is the GitHub profile README. Avoid creating a third, competing portfolio.

## Positioning

**Data Engineering foundation → Applied AI delivery → Forward Deployed Engineering.**

Prove an ability to:
1. discover an end-user problem and define measurable success;
2. integrate data, models, tools and real systems;
3. make the solution reliable (evaluations, tests, security, operations);
4. ship a usable interface or integration and observe results.

Keep the homepage focused on **4–6 flagship case studies** and a small historical open-source section. Relevance and evidence matter more than sheer repository count.

## Add or refresh a case study

1. **Pre-publication review:** confirm authorship, license, client/IP permissions, consent for screenshots/datasets, and secret-free content. Never surface repo names, data or operations that should remain confidential.
2. **Document evidence** using [the case-study template](docs/CASE_STUDY_TEMPLATE.md) (path relative to the repository root: `docs/CASE_STUDY_TEMPLATE.md`). Mark demos, prototypes and production systems accurately.
3. **Create** `projects/<slug>/index.html` using the existing project-page layout and `assets/portfolio/portfolio.css`. Do not overwrite existing case pages.
4. **Update** the corresponding project card in the root `index.html`; keep tags, links, categories and filters consistent.
5. **Update** `Omaroid/Omaroid`'s `README.md` when the project belongs in the selected set.
6. **Check** accessibility (mobile width, contrast, keyboard navigation), redirects/URLs, external links, spelling and page metadata.
7. **Add verification** (tests, evaluation data, architecture diagram, sanitized screenshot or live demo) as it becomes available. Prefer fewer accurate claims over impressive but unverifiable ones.

## Safe case-study language

| Evidence available | Recommended wording |
| --- | --- |
| Working implementation in a private repository | “Private implementation; architecture and intended flow documented.” |
| Prototype or local proof of concept | “Prototype” / “Local demo” |
| Public reproducible source with tests | “Open-source implementation” with exact repository URL |
| Internal deployed system without permission to share details | Anonymized high-level pattern, only if permitted |
| Proposed idea | “Planned lab” / “In progress”; never “shipped” |
| Metrics not measured | State what *would* be measured, not a fabricated score or outcome |

## Project maturity rubric

A flagship project should ideally provide:
- **Problem:** user, workflow, failure modes, baseline.
- **Architecture:** data sources, integration boundaries, diagram, security model.
- **Decisions:** trade-offs and alternatives considered.
- **Evidence:** meaningful tests/evals, sample input/output and environment reproducibility.
- **Operations:** deploy steps, monitoring, cost, failure recovery and data lifecycle.
- **Result:** verified numbers or a clearly stated validation gap.

Projects that only show a tutorial, copied starter, notebook without reproducibility or a demo without a clear user problem should not be presented as FDE case studies.

## Repository lifecycle

- **Public showcase:** code is yours or properly attributed, licensed, scrubbed and maintained.
- **Public historical (often archived):** demonstrates past exploration; explicitly note age and scope.
- **Private active:** contains customer details, personal data, secrets, unshipped code, or sensitive operations.
- **Private archived:** experiments and old variants that should remain accessible for history but not receive updates.
- **Delete candidate:** empty or confirmed redundant after checking deployments, links, issues, references and backups. Deletion is never automatic.

## Security gate before changing visibility

Run a secret scanner across all branches and Git history (e.g., Gitleaks), inspect tracked `.env` files, credentials, datasets and configuration backups; rotate exposed live secrets **before** rewriting history. Check data rights and ownership. Never rely solely on a green scan: review client confidentiality and personally identifiable information.

## Suggested release rhythm

- **Per meaningful project:** update the case study and attach evidence.
- **Monthly:** review broken links, external demos, stars/claims, private/public consistency and stale roadmap wording.
- **Quarterly:** re-rank the top projects, archive obvious tutorials and revisit the FDE skills evidence gap.

The site is a curated engineering record — **not** an automatically published mirror of private GitHub repositories.
