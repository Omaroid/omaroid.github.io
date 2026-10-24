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
  repositoryUrl?: string;
  repositoryVisibility?: 'public' | 'private';
  section?: 'featured' | 'archive';
  context?: string;
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
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/corner-retail-churn-copilot',
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
    short: 'A recruitment operations platform for turning CVs and candidate information into structured, traceable workflows.',
    eyebrow: 'Product engineering / Applied AI',
    category: 'ai',
    categoryName: 'AI products',
    status: 'Private source · Public case study',
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/dossierpro',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Redis', 'Apify'],
    problem: 'Recruitment teams work across unstructured CVs, online profiles and client requirements. Turning those inputs into useful candidate records and tailored dossiers requires more than a single model call.',
    approach: [
      'Import LinkedIn profiles and PDF or DOCX CVs, extract profile information, and detect potential duplicates.',
      'Create general or role-specific competency dossiers and match candidate profiles to client requirements.',
      'Generate professional dossier PDFs, share secure links and track email activity.',
      'Support customer CRM workflows, quotas and billing, with long-running jobs surfaced through real-time progress updates.'
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
    short: 'A private opportunity research cockpit that connects a Notion-backed mission tracker, contact context and follow-up workflows.',
    eyebrow: 'Integrations / Full-stack systems',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Evolving product',
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/Missions',
    stack: ['Next.js', 'TypeScript', 'Integrations', 'Automation', 'Data workflows'],
    problem: 'Finding and qualifying opportunities across disconnected sources is repetitive, error-prone and difficult to track over time.',
    approach: [
      'Read mission records from Notion and refresh the visible workspace while the application is active.',
      'Track statuses, favorites, recruiter contacts and interaction history alongside opportunities.',
      'Offer optional, on-demand LinkedIn enrichment as a research aid, with signals reviewed by the user.',
      'Protect access with signed sessions and origin checks; the tool does not automate applications or messages.'
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
    short: 'A Databricks Solutions Architect methodology system for discovery, architecture, experiments and reusable field evidence.',
    eyebrow: 'Field engineering / Technical methodology',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Methodology',
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/sa-os',
    stack: ['Databricks', 'AI-assisted workflows', 'JSON Schema', 'Validation', 'Architecture'],
    problem: 'Technical discovery, architecture reasoning and experiment results often disappear across documents and conversations instead of becoming reusable evidence.',
    approach: [
      'Route work across 23 composable methodology skills and 13 command entry points.',
      'Connect problem, impact, outcome, metric, requirement, capability and validation before recommending a solution.',
      'Turn uncertain claims into experiments and build reusable patterns from repeated work.',
      'Enforce repository contracts with nine JSON Schemas, validation scripts and routing scenarios.'
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
    short: 'A Databricks-first cloud and data intelligence terminal for public updates, research, watchlists and reading workflows.',
    eyebrow: 'Information systems / Research tooling',
    category: 'systems',
    categoryName: 'Systems',
    status: 'Private source · Public demo',
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/bloom-terminal',
    demoUrl: 'https://bloomxterminal.netlify.app',
    stack: ['JavaScript', 'Node.js', 'Netlify Functions', 'GitHub Actions'],
    problem: 'Relevant cloud and data engineering updates arrive across many publishers and formats, making it easy to lose the connection between news and ongoing projects.',
    approach: [
      'Aggregate attributed public RSS and Atom feeds, with source and topic filters.',
      'Support project watchlists, saved stories, local notes and reading history without requiring an account.',
      'Offer publisher video feeds and a viewing queue alongside article research.',
      'Serve feeds through a size-limited Netlify Function that rejects unsafe URL schemes.'
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
    repositoryVisibility: 'private',
    repositoryUrl: 'https://github.com/Omaroid/pokedex',
    stack: ['Next.js', 'Vision / OCR', 'Market APIs', 'Vercel', 'Data integration'],
    problem: 'A collector wants to recognize physical cards and understand their market context without manually juggling catalogues, variants and price sources.',
    approach: [
      'Identify cards from photos with configured vision assistance, with Tesseract OCR and OpenCV fallback paths.',
      'Resolve catalog, language, variant, condition and grade before saving a scan.',
      'Combine Cardmarket and TCGplayer price context, currency conversion, history, alerts and collection analytics.',
      'Support wishlists, sales and profit tracking, grading estimates, binders, exchanges, CSV workflows, push alerts and an iPhone widget.'
    ],
    decision: 'Treat recognition uncertainty and entity resolution as explicit product interactions rather than silently assigning an identity.',
    evidence: 'The private project documentation describes these workflows. Recognition accuracy and price reliability still require independent evaluation.',
    next: ['Benchmark recognition on a varied photo sample.', 'Measure catalogue and price coverage.', 'Improve correction UX and error analysis.'],
    motif: 'scan'
  },
  {
    slug: 'pb-farmer', index: '07', title: 'PB Farmer', short: 'A connected, scalable farm prototype combining sensing, embedded systems and cloud data.',
    eyebrow: 'IoT / Agriculture / Cloud', category: 'systems', categoryName: 'IoT & data systems', status: 'Public repository · Academic project', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/pilbifarmer', context: 'Ensimag project, 2018–2019.',
    stack: ['Raspberry Pi', 'Arduino', 'Azure', 'Sensors', 'Embedded systems'],
    problem: 'Explore how connected devices and cloud services can support a scalable, data-informed farming setup.',
    approach: ['Combine Raspberry Pi and Arduino components in a connected prototype.', 'Collect and relay sensor readings across the system.', 'Use Azure as part of the cloud platform.', 'Document the project through its source repository and school wiki.'],
    decision: 'Bring the device layer and cloud layer together in a practical IoT prototype.',
    evidence: 'The public README describes the project as a connected, scalable farm using Raspberry Pi, Arduino and Azure. The repository does not provide independently verified field results.',
    next: ['Review the original project wiki for implementation details.', 'Reproduce the device-to-cloud flow with current hardware.', 'Document data quality and reliability constraints.'], motif: 'nodes'
  },
  {
    slug: 'iot-fireman', index: '08', title: 'IoT Fireman', short: 'A connected fire-detection monitoring concept with an Android application.',
    eyebrow: 'IoT / Mobile / Monitoring', category: 'systems', categoryName: 'IoT & data systems', status: 'Public repository · Prototype', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/IOT-Fireman',
    stack: ['IoT', 'Android', 'Java', 'Fire detection', 'Mobile application'],
    problem: 'Provide a way to monitor a home fire-detection system through a connected application.',
    approach: ['Build an Android application for the fire-monitoring concept.', 'Support device pairing and room-oriented organization.', 'Present the system through home and monitoring screens.', 'Keep the scope grounded in the implementation documented by the repository.'],
    decision: 'Pair a familiar mobile interface with a connected safety-monitoring concept.',
    evidence: 'The public README describes an IoT infrastructure for monitoring home fire-detection systems. The repository includes an Android application; no certified fire-safety capability or production deployment is claimed.',
    next: ['Document the full sensor and communications architecture.', 'Clarify alert delivery and failure behavior.', 'Validate the concept with appropriate safety standards before any real-world use.'], motif: 'wave'
  },
  {
    slug: 'cv-parser-internship', index: '09', title: 'CV Parser', short: 'An internship project exploring resume parsing, data preparation and named-entity recognition.',
    eyebrow: 'NLP / Data preparation / Internship', category: 'ai', categoryName: 'AI & data', status: 'Private repository · Internship project', repositoryVisibility: 'private', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/resumeParser', context: 'Ingeniance internship · February–August 2020.',
    stack: ['Python', 'NLP', 'Named-entity recognition', 'Data preparation', 'Resume parsing'],
    problem: 'Explore how unstructured resumes can be prepared and parsed into structured candidate information.',
    approach: ['Review resume-parsing research and existing datasets.', 'Prepare and clean resume data for experimentation.', 'Explore named-entity recognition and classification approaches.', 'Treat the work as an internship-era prototype, not a current recruiting product.'],
    decision: 'Focus the internship exploration on the data and entity-extraction foundations behind resume parsing.',
    evidence: 'The private repository contains resume datasets, a preparation notebook, research references and an entity-recognition artifact. This portfolio description is based on those materials and the internship context; no benchmark is presented as independently validated.',
    next: ['Keep source CV data private and out of public examples.', 'Reproduce the preprocessing with synthetic or consented records.', 'Document evaluation methodology before reporting metrics.'], motif: 'orbit'
  },
  {
    slug: 'covid-19-data-api', index: '10', title: 'COVID-19 Data API', short: 'A historical Flask API that ingested public pandemic data and exposed it through endpoints.',
    eyebrow: 'Data engineering / Python API', category: 'data', categoryName: 'Data engineering', status: 'Public repository · Archived', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/Covid-19-API', context: 'Historical project · 2020.',
    stack: ['Python', 'Flask', 'REST API', 'Scheduled ingestion', 'JHU CSSE'],
    problem: 'Make frequently updated public COVID-19 statistics accessible through a simple API.',
    approach: ['Use the Johns Hopkins CSSE public dataset as a source.', 'Refresh the dataset on a scheduled interval.', 'Expose historical and current data through Flask endpoints.', 'Archive the project as a snapshot of an early data-service implementation.'],
    decision: 'Separate data collection from API access so consumers can query a consistent service interface.',
    evidence: 'The public README documents the Flask API, JHU CSSE source and a scheduled refresh roughly every ten minutes. The repository is archived and is not presented as a current public-health source.',
    next: ['Point users to current authoritative public-health sources.', 'Add source timestamps and data freshness indicators if revived.', 'Review historical API behavior before reuse.'], motif: 'grid'
  },
  {
    slug: 'world-inequality-visuals', index: '11', title: 'World Inequality Visuals', short: 'An interactive exploration of income inequality data using D3.js.',
    eyebrow: 'Data visualization / Research', category: 'data', categoryName: 'Data visualization', status: 'Public repository · Academic project', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/InfoVisWorldInequality',
    stack: ['World Inequality Database', 'Data preparation', 'D3.js', 'Interactive charts'],
    problem: 'Make complex inequality indicators easier to explore and compare across countries and time.',
    approach: ['Extract and prepare selected World Inequality Database indicators.', 'Build interactive D3.js views for measures such as income and Gini.', 'Explore country groups including BRICS and related comparisons.', 'Present the data through several complementary chart forms.'],
    decision: 'Use visual encodings to support exploration while keeping the indicator and comparison context visible.',
    evidence: 'The public README documents data extraction, preprocessing and interactive D3 visualizations, including income and Gini comparisons. The project is exploratory rather than a policy analysis.',
    next: ['Add source notes and methodological caveats alongside each measure.', 'Check comparability across countries and years.', 'Modernize the visualizations and accessibility.'], motif: 'scan'
  },
  {
    slug: 'brent-oil-forecast', index: '12', title: 'Brent Oil Price Forecast', short: 'A time-series forecasting exploration using historical Brent prices and Prophet.',
    eyebrow: 'Time series / Forecasting', category: 'data', categoryName: 'Data science', status: 'Public repository · Historical notebook', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/BlentOilPriceForcastProphet',
    stack: ['Python', 'Prophet', 'Time series', 'Jupyter', 'Kaggle dataset'],
    problem: 'Explore a forecasting workflow for historical Brent crude oil prices.',
    approach: ['Load the referenced historical price dataset.', 'Prepare a time-series input for Prophet.', 'Fit and inspect a forecasting model in a notebook.', 'Treat the result as an exploratory exercise without a verified accuracy claim.'],
    decision: 'Use a reproducible notebook to make the data and forecasting workflow inspectable.',
    evidence: 'The public repository contains a Prophet notebook and references a Kaggle dataset. It does not establish forecast accuracy or suitability for financial decisions.',
    next: ['Compare against seasonal-naive and other baseline forecasts.', 'Use time-based backtesting and report error ranges.', 'Document data provenance and forecast uncertainty.'], motif: 'wave'
  },
  {
    slug: 'email-classifier', index: '13', title: 'Naive Bayes Email Classifier', short: 'A 2019 learning prototype for classifying email text as ham or spam.',
    eyebrow: 'Machine learning / Text classification', category: 'ai', categoryName: 'Machine learning', status: 'Public repository · Legacy prototype', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/NaiveBayesPythonEmailClassifier', context: 'Historical learning project · 2019.',
    stack: ['Python', 'scikit-learn', 'CountVectorizer', 'Multinomial Naive Bayes', 'Tkinter'],
    problem: 'Explore a basic text-classification workflow for distinguishing spam from legitimate email.',
    approach: ['Convert email text to count-based features with CountVectorizer.', 'Train a Multinomial Naive Bayes classifier.', 'Expose predictions through a small Tkinter interface.', 'Keep the example explicitly framed as a historical learning prototype.'],
    decision: 'Choose a simple, interpretable baseline to make the classical NLP pipeline easy to follow.',
    evidence: 'The public README documents the 2019 prototype and its vectorizer, classifier and desktop UI. It is legacy code with no current benchmark or maintained deployment.',
    next: ['Add a reproducible train/test split and evaluation metrics.', 'Review privacy and dataset provenance before reuse.', 'Update dependencies if the prototype is revived.'], motif: 'orbit'
  },
  {
    slug: 'salesforce-documents-retriever', index: '14', title: 'Salesforce Documents Retriever', short: 'A small Node.js utility to retrieve documents from a Salesforce organization to a local folder.',
    eyebrow: 'Data integration / Developer tooling', category: 'systems', categoryName: 'Integrations', status: 'Public repository · Utility', repositoryVisibility: 'public', section: 'archive', repositoryUrl: 'https://github.com/Omaroid/Salesforce-Documents-Retriever',
    stack: ['Node.js', 'Salesforce', 'API integration', 'File retrieval'],
    problem: 'Make document retrieval from a Salesforce organization available as a repeatable local utility.',
    approach: ['Connect to a Salesforce organization using configured credentials.', 'Retrieve organization documents through the script.', 'Write retrieved files to a local directory.', 'Keep credentials in local configuration rather than in source or portfolio content.'],
    decision: 'Keep the utility narrow and scriptable for a focused data-integration task.',
    evidence: 'The public README describes a Node.js script that retrieves Salesforce documents into a local folder. No throughput, scale or production-support claim is made.',
    next: ['Replace credential-based setup with a documented secure authentication flow.', 'Add pagination, retries and clear error handling.', 'Document supported Salesforce document types.'], motif: 'grid'
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
