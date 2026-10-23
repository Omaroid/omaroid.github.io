# Visual identity and artwork provenance

## Design direction

This portfolio uses a clean, original premium editorial design with generous whitespace, system typography, tactile cards, soft gradients, and purposeful contrast. It is **not an Apple template or an Apple-branded website**. Every visual component is implemented in the static Astro project, without a client-side framework, tracking code, remote font, or third-party CDN.

## Client and employer identity marks

Seven static SVG **original typographic reference marks** appear in the same French and English site:

- ENGIE
- Groupe Alain Afflelou
- iQera
- AXA
- Natixis
- Ingeniance
- Edifixio

The source files live under `public/logos/clients/`. They are original editorial nameplates designed for portfolio presentation, **not official corporate logos**. They should not be represented as client-approved branding, endorsements or official marketing assets. To replace a mark with a corporate logo later, obtain a reliable official source and verify trademark and redistribution conditions first.

## Technology logos

Under `public/logos/technology/`, the site includes locally bundled SVG marks selected from [Simple Icons](https://github.com/simple-icons/simple-icons) under [CC0 1.0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md).

The 23 bundled technology icons are: Databricks, Apache Spark, Python, TypeScript, Next.js, PostgreSQL, Redis, React, GitHub, Docker, Terraform, Apache Airflow, Vercel, Supabase, GitLab, Apache Hadoop, JavaScript, Node.js, Scala, MLflow, scikit-learn, Kubernetes, PyTorch.

The logos identify referenced technologies. This does not imply partnership or endorsement, and applicable trademark rights remain with the owners.

## Security and accessibility

- The output contains static HTML/CSS/SVG, with only the pre-existing, tiny project-filter interaction.
- Logos are served from the same HTTPS origin and do not create external browser requests.
- SVGs are checked by CI for basic unsafe constructs; this is defense in depth, not a formal security certification.
- Images have dimensions, lazy loading and alternative text, and the site supports reduced motion.
- No client confidential information, brand assets from private applications, or personal CV files are committed.
