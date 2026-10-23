# Case study template — Forward Deployed / AI Engineering

> Internal authoring template. Replace bracketed notes and remove sections that cannot be substantiated before publication.

## [Project name]
**Status:** [Planned / Prototype / Working local demo / Deployed; provide date if relevant]  
**Source code:** [Public link / Private — summarized with permission]  
**Stack:** [Technologies confirmed by the source and implementation]

### 1. The user problem
- **Who:** [end user / customer persona, anonymized if needed]
- **Workflow:** [steps currently taken]
- **Pain:** [failure, delay, quality, cost or risk]
- **Success criterion:** [specific measurable outcome or planned evaluation]

### 2. Constraints and discovery
- [Data sources, permissions, latency, scale, security, budget, integration requirements]
- [What was unknown and how it was investigated]
- [What belongs outside project scope]

### 3. Architecture and implementation
[One clear diagram showing input → processing/inference → tools/data → output → human review.]

- **Data:** [ingestion, storage, quality, access controls]
- **AI/ML:** [model role, grounding, tools, prompts, fallback logic if used]
- **Application:** [API, interface, workflow, auth]
- **Delivery:** [deployment, CI/CD, observability, rollback]

### 4. Engineering decisions
| Decision | Why | Trade-off / limitation |
| --- | --- | --- |
| [choice] | [reason] | [cost/failure mode] |

### 5. Verification and outcomes
Separate **observed** from **planned** evidence:

| Metric or test | Dataset / methodology | Result | Status |
| --- | --- | --- | --- |
| [e.g., extraction accuracy, p95 latency, cost/request, grounded-answer rate] | [reproducible procedure] | [number, if measured] | [Measured / Planned] |

Explicitly disclose missing baselines, lack of production validation, and any uncertainty. Do not invent customer impact, adoption, latency or model accuracy.

### 6. Operations, security and privacy
- [Secrets management, scopes, consent, redaction, data retention]
- [Retries, idempotency, monitoring, human approval, failure handling]
- [Cost and performance risks]
- [What cannot be published and why]

### 7. What I would improve next
1. [Smallest verifiable next step]
2. [Next operational hardening step]
3. [Next measured user outcome]

### 8. Artifacts
- [Sanitized screenshots or 60–90s demo]
- [Public source / reproducible mock implementation if IP restricted]
- [Architecture decision records and tests]
- [Instructions to reproduce with a safe sample dataset]

---

## Publication checklist
- [ ] The repository, screenshot and narrative are cleared for public disclosure
- [ ] No API tokens, cookies, credentials, contact info or client data
- [ ] Production status is accurate
- [ ] Descriptions match code and documented functionality
- [ ] Quantitative claims have methodology and dates
- [ ] Public links work; private code is labelled private
- [ ] All diagrams are legible on mobile
- [ ] At least one engineering decision and one limitation are documented
- [ ] The project contributes real evidence toward AI/FDE work
