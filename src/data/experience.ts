export type Language = 'fr' | 'en';
export type CareerRole = {
  client: string;
  city: string;
  dates: { fr: string; en: string };
  title: { fr: string; en: string };
  highlights: { fr: string[]; en: string[] };
  technologies: string[];
};

export const career: CareerRole[] = [
  {
    client: 'ENGIE', city: 'Colombes',
    dates: { fr: 'Janvier 2026 – aujourd’hui', en: 'January 2026 – present' },
    title: { fr: 'Tech Lead Data', en: 'Data Tech Lead' },
    highlights: {
      fr: [
        'Migration d’une plateforme data Palantir Foundry vers une architecture Lakehouse AWS et Databricks.',
        'Conception des traitements PySpark et de la structuration Bronze / Silver / Gold avec Delta Lake.',
        'Industrialisation DataOps : déploiements, surveillance des pipelines, optimisation Spark et FinOps.',
        'Fiabilisation et gouvernance des jeux de données pour les usages Data Science et IA générative.'
      ],
      en: [
        'Migration from Palantir Foundry to an AWS and Databricks Lakehouse architecture.',
        'PySpark data pipelines and Bronze / Silver / Gold layers on Delta Lake.',
        'DataOps practices for deployments, pipeline monitoring, Spark performance and FinOps.',
        'Reliable, governed datasets supporting Data Science and generative AI use cases.'
      ]
    },
    technologies: ['AWS', 'Databricks', 'PySpark', 'Delta Lake', 'DataOps', 'FinOps']
  },
  {
    client: 'Groupe Alain Afflelou', city: 'Puteaux',
    dates: { fr: 'Janvier 2024 – janvier 2026', en: 'January 2024 – January 2026' },
    title: { fr: 'Tech Lead Architecte Data', en: 'Data Architect & Tech Lead' },
    highlights: {
      fr: [
        'Architecture et déploiement de services cloud et de pipelines d’ingestion et transformation.',
        'Développement d’API et d’intégrations avec Azure Functions et Azure API Management.',
        'Sécurité, gouvernance et conformité RGPD ; suivi FinOps et performances.',
        'Animation d’ateliers techniques avec Data Scientists, Data Stewards et Data Analysts, et structuration des revues de code.'
      ],
      en: [
        'Cloud solution architecture and delivery of robust ingestion and transformation pipelines.',
        'APIs and system integrations using Azure Functions and Azure API Management.',
        'Security, GDPR-aware governance, cost optimization and operational performance.',
        'Technical workshops with data science, stewardship and analytics stakeholders; code-review practices.'
      ]
    },
    technologies: ['Azure', 'Databricks', 'Azure Functions', 'API Management', 'FinOps', 'Governance']
  },
  {
    client: 'iQera', city: 'Paris',
    dates: { fr: 'Juillet 2023 – janvier 2024', en: 'July 2023 – January 2024' },
    title: { fr: 'Senior Cloud Data Engineer', en: 'Senior Cloud Data Engineer' },
    highlights: {
      fr: [
        'Migration des cubes BI et tables décisionnelles depuis plusieurs sources vers Azure Data Lake.',
        'Ingestion et transformations en Python, SQL et PySpark, avec stockage Delta et Parquet.',
        'Mise en place des zones Bronze / Silver / Gold, des ACL et des déploiements Azure DevOps.'
      ],
      en: [
        'Migration of BI cubes, fact and dimension tables from multiple sources to Azure Data Lake.',
        'Python, SQL and PySpark ingestion and transformation using Delta and Parquet.',
        'Bronze / Silver / Gold layers, access controls and Azure DevOps deployment pipelines.'
      ]
    },
    technologies: ['Azure', 'Databricks', 'PySpark', 'Data Factory', 'Azure DevOps']
  },
  {
    client: 'AXA', city: 'Paris',
    dates: { fr: 'Février 2023 – juillet 2023', en: 'February 2023 – July 2023' },
    title: { fr: 'Tech Lead Data', en: 'Data Tech Lead' },
    highlights: {
      fr: [
        'Recueil des besoins de données avec plusieurs directions et parties prenantes.',
        'Amélioration des performances de calcul et de la qualité du code.',
        'Suivi de la fiabilité des pipelines et de la qualité des données produites.'
      ],
      en: [
        'Engaged business departments to understand data requirements.',
        'Improved computational performance and data-processing code quality.',
        'Monitored pipelines for operational reliability and output data quality.'
      ]
    },
    technologies: ['Data leadership', 'Spark', 'Quality', 'Stakeholder collaboration']
  },
  {
    client: 'AXA', city: 'Paris',
    dates: { fr: 'Mars 2022 – juillet 2023', en: 'March 2022 – July 2023' },
    title: { fr: 'Cloud Data Engineer', en: 'Cloud Data Engineer' },
    highlights: {
      fr: [
        'Migration de tables SSAS depuis SQL Server vers Azure Data Lake.',
        'Traitements Scala, Python, SQL et Spark 3 pour les chaînes analytiques Delta / Parquet.',
        'Automatisation de pipelines Azure Data Factory et de déploiements Azure DevOps.',
        'Tests de qualité avec Deequ et tests BDD/Cucumber pour les données Spark.'
      ],
      en: [
        'Migrated SSAS tables from SQL Server to Azure Data Lake.',
        'Built analytics flows with Scala, Python, SQL and Spark 3 using Delta / Parquet.',
        'Automated Azure Data Factory pipelines and Azure DevOps releases.',
        'Implemented data-quality checks with Deequ and BDD/Cucumber Spark testing.'
      ]
    },
    technologies: ['Azure Data Factory', 'Databricks', 'Scala', 'PySpark', 'Deequ', 'Cucumber']
  },
  {
    client: 'Natixis', city: 'Paris',
    dates: { fr: 'Août 2020 – mars 2022', en: 'August 2020 – March 2022' },
    title: { fr: 'Data Engineer Hadoop', en: 'Hadoop Data Engineer' },
    highlights: {
      fr: [
        'Prototypage et mise en place d’une architecture de calcul des réserves de marché sur Hadoop.',
        'Développement Python, PySpark, Scala, Hive SQL et orchestration Control-M.',
        'Tests BDD avec Cucumber/Gherkin, CI/CD Jenkins, XLDeploy et XLRelease.'
      ],
      en: [
        'Prototyped and engineered a Hadoop architecture for market reserve calculations.',
        'Python, PySpark, Scala and Hive SQL processing, scheduled with Control-M.',
        'BDD tests with Cucumber/Gherkin and CI/CD using Jenkins, XLDeploy and XLRelease.'
      ]
    },
    technologies: ['Hadoop', 'Spark', 'Scala', 'Hive', 'Control-M', 'Jenkins']
  },
  {
    client: 'Ingeniance', city: 'Puteaux',
    dates: { fr: 'Février 2020 – août 2020', en: 'February 2020 – August 2020' },
    title: { fr: 'Data Engineer / Scientist — stage', en: 'Data Engineer / Scientist — internship' },
    highlights: {
      fr: [
        'Recherche et prototypage d’un système de parsing de CV : segmentation, classification et reconnaissance d’entités.',
        'Classification en pile avec Naive Bayes, SVM et Random Forest, précision de 89 % indiquée dans le CV.',
        'Intégration au portail de l’entreprise pour faciliter les profils et le rapprochement avec les missions.'
      ],
      en: [
        'Research and prototype for CV parsing, layout segmentation, classification and named-entity recognition.',
        'Stacked classification with Naive Bayes, SVM and Random Forest; résumé reports 89% precision.',
        'Integrated the approach with a company portal supporting candidate ranking and matching.'
      ]
    },
    technologies: ['Python', 'NLP', 'NER', 'Scikit-learn', 'Classification']
  },
  {
    client: 'Edifixio', city: 'Levallois-Perret',
    dates: { fr: 'Février 2019 – août 2019', en: 'February 2019 – August 2019' },
    title: { fr: 'Data Engineer / Scientist — stage', en: 'Data Engineer / Scientist — internship' },
    highlights: {
      fr: [
        'Intégration d’une application Angular / Node.js à l’API REST Salesforce.',
        'Expérimentation en NLP et Deep Learning avec Python, spaCy, Word2Vec et Seq2Seq.',
        'Travaux sur les intégrations, les droits d’accès, les workflows et les tests REST Salesforce.'
      ],
      en: [
        'Integrated an Angular / Node.js application with Salesforce REST APIs.',
        'Explored NLP and deep learning with Python, spaCy, Word2Vec and Seq2Seq.',
        'Contributed to Salesforce integrations, permissions, workflows and REST tests.'
      ]
    },
    technologies: ['Salesforce', 'REST APIs', 'Angular', 'Node.js', 'Python', 'NLP']
  }
];

export const education = [
  {
    school: 'ENSIMAG',
    dates: '2019–2020',
    degree: {
      fr: 'Master de recherche en Intelligence Artificielle et Web Sémantique',
      en: 'Research Master’s degree in Artificial Intelligence and Semantic Web'
    }
  },
  {
    school: 'ENSIMAG',
    dates: '2018–2019',
    degree: {
      fr: 'Diplôme d’ingénieur d’État en Ingénierie des Systèmes d’Information',
      en: 'Engineering degree in Information Systems Engineering'
    }
  },
  {
    school: 'ENSIAS',
    dates: '2016–2018',
    degree: {
      fr: 'Diplôme d’ingénieur d’État en E-Management et Business Intelligence',
      en: 'Engineering degree in E-Management and Business Intelligence'
    }
  }
] as const;

export const certifications = [
  'Databricks Certified Data Engineer Professional',
  'Databricks Certified Data Engineer Associate',
  'Azure Databricks Platform Architect',
  'Databricks Certified Associate Developer for Apache Spark',
  'Microsoft Azure Data Engineer Associate (DP-203)',
  'Astronomer DAG Authoring for Apache Airflow 3',
  'Microsoft Azure Data Fundamentals (DP-900)',
  'Microsoft Azure Fundamentals (AZ-900)'
] as const;
