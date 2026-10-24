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
        'Migration de Palantir Foundry vers une architecture Lakehouse AWS et Databricks pour moderniser la plateforme Data.',
        'Conception d’une architecture Data Lake et Delta Lake pour centraliser les sources et renforcer la gouvernance des jeux de données.',
        'Développement de pipelines PySpark industrialisés et structuration Medallion Bronze / Silver / Gold.',
        'Optimisation des traitements Spark et des clusters Databricks, des déploiements DataOps et des coûts cloud (FinOps).',
        'Préparation de jeux de données fiables, traçables et gouvernés pour les équipes Data Science et les cas d’usage d’IA générative.'
      ],
      en: [
        'Migrating Palantir Foundry to an AWS and Databricks Lakehouse architecture to modernize the data platform.',
        'Designing Data Lake and Delta Lake foundations to centralize sources and strengthen dataset governance.',
        'Developing industrialized PySpark pipelines and Bronze / Silver / Gold Medallion layers.',
        'Optimizing Spark jobs and Databricks clusters, DataOps deployments and cloud costs (FinOps).',
        'Preparing reliable, traceable and governed datasets for Data Science teams and generative AI use cases.'
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
        'Conception et déploiement de services cloud et de pipelines robustes d’ingestion et de transformation.',
        'Développement d’API et d’intégrations avec Azure Functions et Azure API Management.',
        'Renforcement de la sécurité cloud, de la gouvernance des données et de la conformité RGPD, avec audits et suivi FinOps.',
        'Structuration des pratiques de développement : Git Flow, revues de code et ateliers techniques.',
        'Travail avec les équipes Data Science, Data Stewards et Data Analysts sur les jeux de données pour les usages analytiques et prédictifs.'
      ],
      en: [
        'Designed and delivered cloud services and robust data-ingestion and transformation pipelines.',
        'Developed APIs and integrations with Azure Functions and Azure API Management.',
        'Strengthened cloud security, data governance and GDPR compliance through audits and FinOps tracking.',
        'Structured development practices through Git Flow, code reviews and technical workshops.',
        'Worked with Data Science, Data Steward and Data Analyst teams on datasets for analytics and predictive use cases.'
      ]
    },
    technologies: ['Azure', 'Databricks', 'Informatica', 'Azure Functions', 'API Management', 'Git Flow', 'FinOps']
  },
  {
    client: 'iQera', city: 'Paris',
    dates: { fr: 'Juillet 2023 – janvier 2024', en: 'July 2023 – January 2024' },
    title: { fr: 'Senior Cloud Data Engineer', en: 'Senior Cloud Data Engineer' },
    highlights: {
      fr: [
        'Migration de cubes BI et de tables de faits et de dimensions depuis plusieurs sources (IBM, PostgreSQL) vers Azure Data Lake.',
        'Ingestion et transformations avec Python, SQL et PySpark 3, en formats Delta et Parquet.',
        'Transferts depuis les serveurs internes avec AZCopy et usage d’Azure Databricks, Data Factory et Storage Gen2.',
        'Mise en place des zones Bronze / Silver / Gold, des ACL et des déploiements d’artefacts via Azure DevOps.'
      ],
      en: [
        'Migrated BI cubes and fact and dimension tables from multiple sources (IBM, PostgreSQL) to Azure Data Lake.',
        'Built ingestion and transformation workflows with Python, SQL and PySpark 3, using Delta and Parquet formats.',
        'Transferred data from internal servers with AZCopy and used Azure Databricks, Data Factory and Storage Gen2.',
        'Implemented Bronze / Silver / Gold layers, ACLs and artifact deployments through Azure DevOps.'
      ]
    },
    technologies: ['Azure', 'Databricks', 'PySpark', 'AZCopy', 'Data Factory', 'Storage Gen2', 'Azure DevOps']
  },
  {
    client: 'AXA', city: 'Paris',
    dates: { fr: 'Février 2023 – juillet 2023', en: 'February 2023 – July 2023' },
    title: { fr: 'Tech Lead Data', en: 'Data Tech Lead' },
    highlights: {
      fr: [
        'Recueil des besoins de données avec plusieurs directions et parties prenantes.',
        'Amélioration des performances de calcul et de la qualité du code de traitement.',
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
        'Automatisation des pipelines Azure Data Factory et des déploiements Azure DevOps, avec gestion des ACL.',
        'Suivi de production et tests de qualité avec Deequ et Cucumber pour les traitements Spark.'
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
        'Prototypage et conception d’une architecture Hadoop pour le calcul des réserves de marché.',
        'Développements Python, PySpark, Scala et Hive SQL ; planification quotidienne des traitements avec Control-M.',
        'Tests fonctionnels BDD avec Cucumber / Gherkin et chaînes CI/CD avec Jenkins, XLDeploy et XLRelease.',
        'Documentation technique sur Confluence et suivi des travaux avec Jira et ServiceNow.'
      ],
      en: [
        'Prototyped and designed a Hadoop architecture for market-reserve calculations.',
        'Developed with Python, PySpark, Scala and Hive SQL; scheduled daily processing with Control-M.',
        'Added BDD functional tests with Cucumber / Gherkin and CI/CD pipelines with Jenkins, XLDeploy and XLRelease.',
        'Wrote technical documentation in Confluence and tracked work in Jira and ServiceNow.'
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
        'Étude et prototypage d’un système de parsing de CV combinant segmentation, classification et reconnaissance d’entités nommées.',
        'Classification en pile avec Naive Bayes, SVM et Random Forest ; le CV indique une précision de 89 %.',
        'Intégration au portail de l’entreprise pour la saisie des CV et le rapprochement des profils avec les missions.'
      ],
      en: [
        'Researched and prototyped CV parsing with layout segmentation, classification and named-entity recognition.',
        'Stacked Naive Bayes, SVM and Random Forest classifiers; the résumé reports 89% precision.',
        'Integrated the work into the company portal for CV entry and matching profiles to assignments.'
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
        'Intégration d’une application Angular / Node.js à l’API REST Salesforce et développement sur la plateforme (SOQL, Apex, Visualforce).',
        'Expérimentation en NLP et Deep Learning avec Python, spaCy, Word2Vec et Seq2Seq.',
        'Tests REST des restrictions de champs, processus et workflows Salesforce.'
      ],
      en: [
        'Integrated an Angular / Node.js application with Salesforce REST APIs and developed on the platform (SOQL, Apex, Visualforce).',
        'Explored NLP and deep learning with Python, spaCy, Word2Vec and Seq2Seq.',
        'Used REST tests to validate Salesforce field restrictions, processes and workflows.'
      ]
    },
    technologies: ['Salesforce', 'REST APIs', 'Angular', 'Node.js', 'Python', 'NLP']
  }
];

export const education = [
  {
    school: 'ENSIMAG',
    dates: '09/2019 – 08/2020',
    degree: {
      fr: 'Master de recherche en Intelligence Artificielle et Web Sémantique',
      en: 'Research Master’s degree in Artificial Intelligence and Semantic Web'
    }
  },
  {
    school: 'ENSIMAG',
    dates: '09/2018 – 08/2019',
    degree: {
      fr: 'Diplôme d’ingénieur d’État en Ingénierie des Systèmes d’Information',
      en: 'Engineering degree in Information Systems Engineering'
    }
  },
  {
    school: 'ENSIAS',
    dates: '09/2016 – 08/2018',
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
  'Databricks Certified Associate Developer for Apache Spark 3.0',
  'Microsoft Azure Data Engineer Associate (DP-203)',
  'Astronomer DAG Authoring for Apache Airflow 3',
  'Microsoft Azure Data Fundamentals (DP-900)',
  'Microsoft Azure Fundamentals (AZ-900)',
  'TPM1x: Creative Problem Solving and Decision Making — Delft University of Technology'
] as const;

export const languages: { name: { fr: string; en: string }; level?: string }[] = [
  { name: { fr: 'Français', en: 'French' } },
  { name: { fr: 'Anglais', en: 'English' }, level: 'TOEIC C2' }
] as const;
