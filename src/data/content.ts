export type ProjectCategory = 'ai' | 'data' | 'systems';
export type Project = {
  slug: string;
  index: string;
  title: string;
  short: string;
  eyebrow: string;
  category: ProjectCategory;
  categoryName: string;
  status: string;
  demoUrl?: string;
  stack: string[];
  problem: string;
  approach: string[];
  decision: string;
  evidence: string;
  next: string[];
  motif: string;
};

export const projects: Project[] = [
  {
    slug: 'retail-churn-copilot',
    index: '01',
    title: 'Retail Churn Copilot',
    short: 'A conversational analytics application on top of a Databricks-native data platform.',
    eyebrow: 'Data platform / AI analytics',
    category: 'data',
    categoryName: 'Data platforms',
    status: 'Private source · Prototype',
    stack: ['Databricks Apps', 'AppKit', 'AI/BI Genie', 'SQL Warehouse', 'React', 'TypeScript'],
    problem: 'Analysts need answers to retention questions, but raw SQL and warehouse schemas are not suitable interfaces for every business stakeholder.',
    approach: [
      'Connect an application client and server through the Databricks AppKit structure.',
      'Use SQL Warehouse queries and AI/BI Genie as the data-interaction layer.',
      'Separate business-facing questions from platform-specific implementation details.',
      'Package the solution with a Databricks bundle configuration.'
    ],
    decision: 'Make governed data accessible through an application interface while keeping the warehouse and semantic layer explicit.',
    evidence: 'The private repository includes React/TypeScript client and server code, AppKit plugins, and Databricks deployment configuration. It does not prove a live customer rollout or retention lift.',
    next: ['Demonstrate a fully traceable question-to-query-to-answer flow.', 'Validate row-level permissions and ambiguous questions.', 'Measure usability against a SQL-only baseline.'],
    motif: 'wave'
  },
  {
    slug: 'dossierpro',
    index: '02',
    title: 'DossierPro',
    short: 'From fragmented candidate information to structured, AI-assisted recruitment workflows.',
    eyebrow: 'Product engineering / Applied AI',
    category: 'ai',
    categoryName: 'AI products',
    status: 'Private source · Public case study',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Redis', 'Apify'],
    problem: 'Recruitment teams work across unstructured CVs, online profiles and client requirements. Turning those inputs into useful candidate records and tailored dossiers requires more than a single model call.',
    approach: [
      'Import candidate data from CVs and supported profile sources via separate ingestion workflows.',
      'Structure profiles, match candidate information to client needs and produce tailored dossier outputs.',
      'Handle long-running processing asynchronously and surface progress to the user.',
      'Build sharing and operational safeguards around the AI-assisted application.'
    ],
    decision: 'Treat AI extraction as one component of a traceable application workflow, not as the whole product.',
    evidence: 'A private implementation and substantial project documentation exist. Production adoption, model extraction accuracy, latency and customer outcomes have not been independently verified.',
    next: ['Evaluate extraction accuracy on consented sample CVs.', 'Test retries, duplicate imports and evidence grounding.', 'Publish a sanitized product walkthrough.'],
    motif: 'orbit'
  },
  {
    slug: 'mission-radar',
    index: '03',
    title: 'Mission Radar',
    short: 'A private research and workflow cockpit connecting sources, enrichment and decisions.',
    eyebrow: 'Integrations / Full-stack systems',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Evolving product',
    stack: ['Next.js', 'TypeScript', 'Integrations', 'Automation', 'Data workflows'],
    problem: 'Finding and qualifying opportunities across disconnected sources is repetitive, error-prone and difficult to track over time.',
    approach: [
      'Bring source discovery and opportunity tracking into one application workflow.',
      'Link recruiter information, enrichment and follow-up actions to relevant records.',
      'Design access control and secure handling around private professional information.',
      'Iterate on deduplication, source reliability and user-driven decision states.'
    ],
    decision: 'Keep the operational data and service credentials private while sharing the integration and product design lessons.',
    evidence: 'A private implementation exists. The available README documents a Notion-backed iteration; newer integrations and delivery state must be revalidated before being described as deployed.',
    next: ['Document the current source-of-truth architecture.', 'Measure duplicate suppression and source freshness.', 'Record how retries and partial source failures are handled.'],
    motif: 'nodes'
  },
  {
    slug: 'sa-os',
    index: '04',
    title: 'SA-OS',
    short: 'A rigorous, evidence-led operating system for customer discovery and solution architecture.',
    eyebrow: 'Field engineering / Technical methodology',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Methodology',
    stack: ['Databricks', 'AI-assisted workflows', 'JSON Schema', 'Validation', 'Architecture'],
    problem: 'Technical discovery, architecture reasoning and experiment results often disappear across documents and conversations instead of becoming reusable evidence.',
    approach: [
      'Connect problem, impact, outcome, metric and requirements before proposing a solution.',
      'Turn uncertain architecture assumptions into recorded experiments.',
      'Keep reusable patterns and validations separate from account-specific private data.',
      'Validate documented workflows with schemas, scripts and regression scenarios.'
    ],
    decision: 'Optimize for repeatable engineering judgment and evidence rather than autonomous decision-making.',
    evidence: 'The private repository documents composable methodology skills, schemas, experiments and tests. This is a process/tooling system, not a deployed SaaS application.',
    next: ['Publish sanitized discovery and architecture examples.', 'Demonstrate one end-to-end evidence-backed workflow.', 'Evaluate whether the methodology improves traceability.'],
    motif: 'grid'
  },
  {
    slug: 'lakehouse-signal',
    index: '05',
    title: 'Lakehouse Signal',
    short: 'A Databricks-first cloud and data intelligence terminal for public updates, research and project watchlists.',
    eyebrow: 'Information systems / Research tooling',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Public demo',
    demoUrl: 'https://bloomxterminal.netlify.app',
    stack: ['JavaScript', 'Node.js', 'Netlify Functions', 'GitHub Actions'],
    problem: 'Relevant cloud and data engineering updates arrive across many publishers and formats, making it easy to lose the connection between news and ongoing projects.',
    approach: [
      'Aggregate public publisher feeds into a focused reading environment.',
      'Support project watchlists, topic filtering, source health and briefing workflows.',
      'Keep local research notes and source links available for follow-up.',
      'Serve the public application through a Netlify Function and a minimal static asset bundle.'
    ],
    decision: 'Favor attributed source material and deterministic signals over unsupported AI-generated assertions.',
    evidence: 'The private repository contains the feed parser, tests and Netlify deployment configuration. A public Netlify deployment is live; source availability and external adoption are not measured.',
    next: ['Measure source availability and feed freshness.', 'Add clearer failure-state reporting.', 'Publish a safe video tour.'],
    motif: 'terminal'
  },
  {
    slug: 'pokevalue',
    index: '06',
    title: 'PokéValue',
    short: 'A mobile-first vision and market-data application, from image to useful portfolio action.',
    eyebrow: 'Computer vision / Consumer product',
    category: 'ai',
    categoryName: 'AI products',
    status: 'Private source · Working application',
    stack: ['Next.js', 'Vision / OCR', 'Market APIs', 'Vercel', 'Data integration'],
    problem: 'A collector wants to recognize physical cards and understand their market context without manually juggling catalogues, variants and price sources.',
    approach: [
      'Use image-assisted recognition with a documented OCR fallback.',
      'Resolve card identity across edition, language, condition and variation.',
      'Integrate market data from multiple sources and explain pricing differences.',
      'Support mobile-first scanning, collection management and historical snapshots.'
    ],
    decision: 'Treat recognition uncertainty and entity resolution as explicit product interactions rather than silently assigning an identity.',
    evidence: 'The private project documentation describes these workflows. Recognition accuracy and price reliability still require independent evaluation.',
    next: ['Benchmark recognition on a varied photo sample.', 'Measure catalogue and price coverage.', 'Improve correction UX and error analysis.'],
    motif: 'scan'
  }
];

export const categories = [
  { id: 'all', label: 'All work' },
  { id: 'ai', label: 'AI products' },
  { id: 'data', label: 'Data platforms' },
  { id: 'systems', label: 'Systems & methods' }
] as const;

export const labs = [
  {
    number: '01',
    title: 'RAG Evaluation Studio',
    focus: 'Retrieval, grounded answers, citations and uncertainty.',
    proof: 'Labeled questions · Recall@k · Citation checks · Cost and latency',
    status: 'Planned'
  },
  {
    number: '02',
    title: 'Production ML Pipeline',
    focus: 'A reproducible path from data quality to serving and monitoring.',
    proof: 'Leakage checks · Baselines · MLflow · Drift signals',
    status: 'Planned'
  },
  {
    number: '03',
    title: 'Applied AI Workflow',
    focus: 'A realistic customer problem solved with scoped tools and human approval.',
    proof: 'Discovery brief · Integration tests · Tracing · Runbook',
    status: 'Planned'
  }
] as const;

export const foundations = [
  {
    title: 'COVID-19 Data API',
    year: 'Historical / Archived',
    summary: 'Public data ingestion and API work.',
    url: 'https://github.com/Omaroid/Covid-19-API'
  },
  {
    title: 'World Inequality Visuals',
    year: 'Historical / D3.js',
    summary: 'Interactive visual analytics and data storytelling.',
    url: 'https://github.com/Omaroid/InfoVisWorldInequality'
  },
  {
    title: 'Brent Oil Price Forecast',
    year: 'Historical / Prophet',
    summary: 'Time-series forecasting exploration on historical Brent prices; model accuracy is not independently benchmarked.',
    url: 'https://github.com/Omaroid/BlentOilPriceForcastProphet'
  }
] as const;
