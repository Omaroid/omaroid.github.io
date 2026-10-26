# Project publication review

This is a portfolio-curation review, not a source-level security audit of private repositories. Public repository READMEs and the material documented in this site were reviewed. No repository visibility settings were changed.

## Keep featured work as public case studies with private source

| Project | Recommendation | Reason |
| --- | --- | --- |
| DossierPro | Keep the source private, as requested. | Candidate CVs and profiles can contain personal data. Use synthetic examples for a walkthrough and never publish real records. |
| Retail Churn Copilot | Keep the source private for now. | The case study describes a warehouse-backed prototype. Before release, confirm no employer data, workspace identifiers, deployment configuration or credentials are present. |
| Mission Radar | Keep the source private for now. | The documented workflow handles professional opportunity, recruiter and enrichment information. Share only synthetic records and a sanitized architecture. |
| SA-OS | Possible open-source candidate after separation. | Publish generic templates, schemas and examples only after removing account-specific material, internal prompts and customer context. |
| Lakehouse Signal | Possible open-source candidate after a source review. | Check stored research notes, feed credentials, integration config, schedules and deployment secrets. Publish representative public-source data only. |
| PokéValue | Possible open-source candidate after a source review. | Check API credentials, personal collection data, image datasets and the terms for catalog and pricing sources. Include synthetic examples and data attribution. |

The recommendations for private repositories are provisional: this checkout contains only their public case-study descriptions, not their private source or complete Git histories. A public summary does not mean the implementation is safe to open.

## Existing public repositories

Hands-on RAG Lab is now public and featured, with a live Vercel demo. Its case study documents local PDF/OCR/E5 processing, hybrid retrieval, consent and source references. CI functional checks are distinguished from the labeled retrieval and answer-quality evaluations that remain to be built. Repository visibility does not establish a reuse license or guarantee abuse protection for the public generation API.

| Repository | Portfolio use | Next improvement |
| --- | --- | --- |
| [InfoVisWorldInequality](https://github.com/Omaroid/InfoVisWorldInequality) | Strongest historical Data visualization example; already selected. | Add a concise problem, data-source/license notes, accessible chart explanation and a reproducible run path. |
| [pilbifarmer](https://github.com/Omaroid/pilbifarmer) | Academic IoT and data project: Raspberry Pi, Arduino and Azure. | Keep the 2018–2019 academic context visible and review the linked school wiki for implementation detail. |
| [IOT-Fireman](https://github.com/Omaroid/IOT-Fireman) | IoT fire-monitoring concept with an Android application. | Describe as a prototype; do not imply certified safety performance or current production use. |
| [BlentOilPriceForcastProphet](https://github.com/Omaroid/BlentOilPriceForcastProphet) | Historical time-series exploration; now selected as a Data foundation. | Correct the repository's `Forcast` spelling when practical, document the dataset source, compare with a naïve baseline and use a time-based holdout before making accuracy claims. |
| [Covid-19-API](https://github.com/Omaroid/Covid-19-API) | Historical, archived API example; retain as an archive rather than a current flagship. | State data provenance, archive status and any service deprecation clearly. |
| [Salesforce-Documents-Retriever](https://github.com/Omaroid/Salesforce-Documents-Retriever) | Do not promote as a current secure example. | Its README instructs users to authenticate with a Salesforce username and password in `.env`. Replace this with supported OAuth flows, least-privilege scopes, token-safe logging, and a documented local-file retention policy before recommending it. |
| [data-engineering-with-databricks](https://github.com/Omaroid/data-engineering-with-databricks) | Do not present as authored project work. | Its README describes instructor courseware and lab solutions. Feature it only if the exact personal contribution and redistribution rights are established. |

The public README for [NaiveBayesPythonEmailClassifier](https://github.com/Omaroid/NaiveBayesPythonEmailClassifier) labels it as historical and avoids unverified performance claims. Keep it in the archive section and review its example email data and complete history for personal information before further promotion.

The private [resumeParser](https://github.com/Omaroid/resumeParser) repository is described as a 2020 Ingeniance internship project. Its CV datasets remain private; the portfolio shares only a sanitized account of the parsing and named-entity-recognition work.

## Gate before opening a private repository

1. Check ownership, client/employer agreements, third-party licenses and data-provider terms.
2. Scan every branch, tag and commit for secrets and personal, customer or candidate data; inspect release artifacts and deployment configuration too.
3. If a secret was ever committed, revoke or rotate it. Removing it from the latest tree is not enough.
4. Remove real data and internal identifiers; use synthetic fixtures and a safe `.env.example`.
5. Add a clear README, license, setup instructions, tests, dependency update policy and a disclosure contact.
6. Make a separate sanitized repository or release branch where appropriate. Keep the production repository private until the review is complete.

These steps are a release checklist, not a statement that every candidate repository has passed them.
