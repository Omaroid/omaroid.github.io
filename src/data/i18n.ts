export type Lang = 'fr' | 'en';

export const pathFor = (lang: Lang, path: string): string =>
  (lang === 'en' ? '/en' : '') + (path === '/' ? '/' : path);

export const opposite = (lang: Lang): Lang => lang === 'fr' ? 'en' : 'fr';

export const nav = {
  fr: {work:'Projets', approach:'À propos', experience:'Expériences', labs:'Feuille de route', github:'GitHub', skip:'Aller au contenu', logo:'Accueil'},
  en: {work:'Projects', approach:'About', experience:'Experience', labs:'Roadmap', github:'GitHub', skip:'Skip to content', logo:'Home'}
} as const;

export const homeText = {
  fr: {
    eyebrow:'TECH LEAD DATA & IA', hero1:'La data complexe.', hero2:'Des solutions utiles',
    heroLead:'Tech Lead Data & IA. Je conçois des plateformes de données et des produits qui rapprochent la technique des besoins métiers.',
    heroDirection:'Je conçois et livre des systèmes Data & IA utiles, robustes et adaptés à leurs utilisateurs, de la première architecture à l’exploitation.',
    heroPrimary:'Découvrir mes projets', heroSecondary:'Mon parcours', factsYears:'ans de pratique data',
    factsCore:'socle cloud et lakehouse', factsMethod:'comprendre, concevoir, valider, livrer',
    heroNote:'PARCOURS TECHNIQUE / 001', heroVisual:'DU PROBLÈME À LA SOLUTION',
    tagDiscovery:'Comprendre le besoin', tagEngineering:'Intégrer et fiabiliser', tagDelivery:'Délivrer et apprendre',
    visualProblem:'PROBLÈME', visualProduct:'SOLUTION', scroll:'DÉCOUVRIR', mantra:'LA PREUVE AVANT LES PROMESSES',
    workId:'01 / PROJETS SÉLECTIONNÉS', workTitle1:'Des réalisations',workTitle2:'pas seulement du code',
    workIntro:'Projets et études de cas autour de la Data, de l’IA et des intégrations. Chaque dépôt indique clairement s’il est public ou accessible sur demande.',
    count:'PROJETS', private:'ÉTUDE DE CAS / CODE PRIVÉ', view:'VOIR LE PROJET',
    disclosure:'Ces études de cas s’appuient sur la documentation des dépôts. Elles ne constituent pas une preuve d’adoption en production ni de résultats métier mesurés.',
    approachId:'02 / MA DÉMARCHE', approachTitle1:'Du besoin flou', approachTitle2:'au système fiable',
    approachIntro:'Mon approche associe compréhension du métier, architecture Data, développement, tests et validation concrète des usages.',
    discoverTitle:'Comprendre le besoin',discoverDesc:'Utilisateurs, objectifs, contraintes, risques et critères de succès avant le choix des outils.',
    designTitle:'Choisir l’architecture adaptée',designDesc:'Définir les interfaces, les données et les composants IA en assumant les compromis.',
    validateTitle:'Éprouver les hypothèses',validateDesc:'Tests reproductibles, jeux de données réalistes, évaluations et observabilité.',
    deliverTitle:'Livrer et améliorer',deliverDesc:'Des solutions opérationnelles, sécurisées et utilisables, avec un suivi dans la durée.',
    careerId:'03 / PARCOURS PROFESSIONNEL', careerTitle1:'L’expérience terrain',careerTitle2:'comme fondation',
    careerIntro:'Des missions Data de la banque à l’énergie, de la conception à la mise en production, avec une progression vers les rôles de Tech Lead.',
    careerView:'Voir toutes mes expériences', careerRole:'RÔLE', careerClient:'CLIENT',
    labsId:'04 / PROJETS EN CONSTRUCTION', labsTitle1:'Mon prochain chapitre',labsTitle2:'se construit',
    labsIntro:'Des expérimentations publiques reproductibles autour de la Data, de l’IA et des intégrations : hypothèses, code, évaluations et limites documentées. Ces travaux sont planifiés, pas encore livrés.',
    labsView:'Consulter la feuille de route', planned:'Prévu',
    historyId:'05 / SOCLE OPEN SOURCE',historyTitle:'Un parcours construit dans le temps',
    historyIntro:'Quelques projets historiques publics qui montrent la diversité de mes premières expérimentations.',
    historyLink:'Voir les dépôts publics',
    closeId:'CONSTRUIRE DES SOLUTIONS UTILES', closeTitle:'Le prochain projet commence par un vrai problème', closeLink:'Mon GitHub'
  },
  en: {
    eyebrow:'DATA & AI TECH LEAD',hero1:'Complex data.',hero2:'Useful products',
    heroLead:'I am a Data & AI Tech Lead, building reliable data platforms and practical products that connect engineering with business needs.',
    heroDirection:'I design and deliver practical Data & AI systems, from initial architecture through integration, deployment and real-world use.',
    heroPrimary:'Explore my projects',heroSecondary:'Professional background', factsYears:'years in data engineering',
    factsCore:'cloud and lakehouse foundation',factsMethod:'discover, design, validate, deliver',
    heroNote:'ENGINEERING NOTES / 001', heroVisual:'FROM PROBLEM TO SOLUTION',
    tagDiscovery:'Real user needs',tagEngineering:'Reliable integration',tagDelivery:'Useful delivery',
    visualProblem:'PROBLEM',visualProduct:'PRODUCT',scroll:'SCROLL TO EXPLORE',mantra:'EVIDENCE BEFORE HYPE',
    workId:'01 / SELECTED PROJECTS',workTitle1:'Proof of work',workTitle2:'not just code',
    workIntro:'Projects and case studies across data engineering, AI and integrations. Each repository is clearly marked as public or available by request.',
    count:'PROJECTS',private:'CASE STUDY / PRIVATE CODE',view:'VIEW PROJECT',
    disclosure:'These case studies are grounded in repository documentation; they do not independently verify production adoption or measured business impact.',
    approachId:'02 / MY APPROACH',approachTitle1:'From messy brief',approachTitle2:'to reliable system',
    approachIntro:'My process combines business understanding, data architecture, hands-on development, testing and pragmatic validation.',
    discoverTitle:'Understand the need',discoverDesc:'Users, goals, constraints, risks and success criteria before choosing tools.',
    designTitle:'Choose the right architecture',designDesc:'Define integrations, data and AI components with clear trade-offs.',
    validateTitle:'Test the assumptions',validateDesc:'Reproducible tests, realistic data, evaluations and observability.',
    deliverTitle:'Deliver and improve',deliverDesc:'Useful, secure operational systems with a feedback loop.',
    careerId:'03 / PROFESSIONAL EXPERIENCE',careerTitle1:'Real-world experience',careerTitle2:'as a foundation',
    careerIntro:'Data engineering engagements across banking, insurance, retail and energy — from implementation through architecture and technical leadership.',
    careerView:'Explore my experience',careerRole:'ROLE',careerClient:'CLIENT',
    labsId:'04 / DATA & AI LABS',labsTitle1:'The next chapter',labsTitle2:'is in progress',
    labsIntro:'Planned, reproducible Data & AI experiments with integrations, code, evaluations and documented limitations. These are not yet shipped.',
    labsView:'Explore the roadmap',planned:'Planned',
    historyId:'05 / OPEN-SOURCE FOUNDATIONS',historyTitle:'Built over time',
    historyIntro:'Earlier public experiments that show the breadth of my engineering journey.',
    historyLink:'Browse public repositories',
    closeId:'BUILDING USEFUL SYSTEMS',closeTitle:'Every good project starts with a real problem',closeLink:'My GitHub'
  }
} as const;

export const otherCopy = {
 fr: {
   back:'RETOUR AUX PROJETS', case:'ÉTUDE DE CAS TECHNIQUE', sensitive:'SANS DONNÉES CLIENT',
   problemId:'01 / CONTEXTE', problemTitle:'Le problème à résoudre',
   approachId:'02 / INGÉNIERIE', approachTitle:'Du besoin au système',
   decisionId:'03 / CHOIX TECHNIQUE', decisionTitle:'Un choix structurant',
   evidenceId:'04 / PREUVES ET LIMITES', evidenceTitle:'Ce qui est réellement documenté',
   nextId:'05 / PROCHAINES VALIDATIONS', nextTitle:'Comment renforcer la démonstration',
   nextNote:'Ces points sont des pistes de validation, pas des résultats déjà mesurés.',
   projectView:'Découvrir les autres projets',sidebar:'En résumé',
   area:'Domaine',visibility:'Visibilité',visibilityValue:'Dépôt privé, synthèse technique publique',
   validation:'Validation',validationValue:'Pas de métriques inventées',
   expHero:'Mes expériences professionnelles',expIntro:'Des missions concrètes, du développement Data à l’architecture et au leadership technique, dans des environnements cloud, bancaires et industriels.',
   expSub:'CLIENTS, RÔLES ET MISSIONS',expRoles:'Missions et responsabilités',
   expEducation:'Formation',expCert:'Certifications',
   roadmapHero:'Construire mon chemin vers le FDE',
   roadmapIntro:'Je suis aujourd’hui Tech Lead Data & IA. Je développe progressivement les compétences complémentaires du Forward Deployed Engineering à travers des projets publics à construire, évaluer et documenter.',
   roadmapId:'LABORATOIRES PUBLICS / À VENIR',proof:'Preuves à publier',
   roadmapStandards:'Mes critères avant de dire « livré »',
   roadmapStandardsText:'Du code reproductible, des tests, une architecture expliquée, des limites explicites et des mesures lorsque les données sont disponibles. Aucun projet planifié n’est présenté comme déployé.',
   notFound:'Cette page n’existe pas',goHome:'Retour à l’accueil'
 },
 en: {
   back:'BACK TO PROJECTS',case:'ENGINEERING CASE STUDY',sensitive:'NO CLIENT DATA',
   problemId:'01 / CONTEXT',problemTitle:'The problem to solve',
   approachId:'02 / ENGINEERING',approachTitle:'From need to system',
   decisionId:'03 / DESIGN DECISION',decisionTitle:'A meaningful choice',
   evidenceId:'04 / EVIDENCE AND LIMITATIONS',evidenceTitle:'What is actually documented',
   nextId:'05 / NEXT VALIDATIONS',nextTitle:'How I would strengthen the proof',
   nextNote:'These are planned validation steps, not already measured results.',
   projectView:'Explore more work',sidebar:'At a glance',
   area:'Area',visibility:'Visibility',visibilityValue:'Private repository, public technical summary',
   validation:'Validation',validationValue:'No fabricated success metrics',
   expHero:'Professional experience',expIntro:'Client engagements across Data engineering, cloud architecture and technical leadership, from implementation through production delivery.',
   expSub:'CLIENTS, ROLES AND ENGAGEMENTS',expRoles:'Work and responsibilities',
   expEducation:'Education',expCert:'Certifications',
   roadmapHero:'Building my path toward FDE',
   roadmapIntro:'I am currently a Data & AI Tech Lead. I am progressively developing the additional skills of Forward Deployed Engineering through public projects to build, evaluate and document.',
   roadmapId:'PUBLIC LABS / UPCOMING',proof:'Evidence to publish',
   roadmapStandards:'My standard before calling a project shipped',
   roadmapStandardsText:'Reproducible code, tests, architectural decisions, explicit limitations and measured evidence when available. Planned work is not represented as deployed.',
   notFound:'Page not found',goHome:'Back to home'
 }
} as const;

export const categoryLabels: Record<Lang,Record<string,string>> = {
 fr:{all:'Tous les projets',ai:'Produits IA',data:'Plateformes Data',systems:'Systèmes et méthodes'},
 en:{all:'All projects',ai:'AI products',data:'Data platforms',systems:'Systems & methods'}
};

export const foundationTranslations: Record<Lang,{title:string;summary:string}[]> = {
 fr:[
  {title:'PB Farmer',summary:'Prototype de ferme connectée combinant Raspberry Pi, Arduino et Azure.'},
  {title:'IoT Fireman',summary:'Prototype IoT de supervision de détection incendie avec application Android.'},
  {title:'Parsing de CV — stage 2020',summary:'Projet de stage chez Ingeniance autour de la préparation de CV et de la reconnaissance d’entités nommées.'},
  {title:'API de données COVID-19',summary:'Collecte de données publiques et API Flask — projet historique archivé.'},
  {title:'Visualisation des inégalités',summary:'Indicateurs du World Inequality Database explorés au moyen de visualisations D3.js.'},
  {title:'Prévision du prix du Brent',summary:'Exploration avec Prophet sur des cours historiques ; aucune précision n’est revendiquée.'},
  {title:'Classifieur d’e-mails Naive Bayes',summary:'Prototype pédagogique de classification spam/courrier légitime réalisé en 2019.'},
  {title:'Salesforce Documents Retriever',summary:'Petit utilitaire Node.js de récupération de documents Salesforce vers un dossier local.'}
 ],
 en:[
  {title:'PB Farmer',summary:'Connected-farm prototype combining Raspberry Pi, Arduino and Azure.'},
  {title:'IoT Fireman',summary:'IoT fire-detection monitoring prototype with an Android application.'},
  {title:'CV Parser — 2020 internship',summary:'Ingeniance internship project exploring resume preparation and named-entity recognition.'},
  {title:'COVID-19 Data API',summary:'Public data ingestion and Flask API — historical archived project.'},
  {title:'World Inequality Visuals',summary:'World Inequality Database indicators explored through D3.js visualizations.'},
  {title:'Brent Oil Price Forecast',summary:'Prophet exploration on historical prices; no accuracy claim is made.'},
  {title:'Naive Bayes Email Classifier',summary:'2019 learning prototype for spam and legitimate-email classification.'},
  {title:'Salesforce Documents Retriever',summary:'Small Node.js utility that retrieves Salesforce documents into a local folder.'}
 ]
};

export const labTranslations = {
 fr:[
  {title:'Atelier d’évaluation RAG',focus:'Recherche documentaire, réponses sourcées, citations et gestion de l’incertitude.',proof:'Jeu de questions · Recall@k · Vérification des citations · Coûts / latence'},
  {title:'Pipeline ML industrialisé',focus:'Un pipeline reproductible de la qualité des données au serving et à la supervision.',proof:'Contrôles de fuite · Baselines · MLflow · Signaux de dérive'},
  {title:'Workflow IA métier',focus:'Un besoin client réaliste traité avec des outils délimités et une validation humaine.',proof:'Cadrage · Tests d’intégration · Traçage · Runbook'}
 ],
 en:[
  {title:'RAG Evaluation Studio',focus:'Retrieval, grounded answers, citations and uncertainty.',proof:'Labeled questions · Recall@k · Citation checks · Cost and latency'},
  {title:'Production ML Pipeline',focus:'A reproducible path from data quality to serving and monitoring.',proof:'Leakage checks · Baselines · MLflow · Drift signals'},
  {title:'Applied AI Workflow',focus:'A realistic client problem solved with scoped tools and human approval.',proof:'Discovery brief · Integration tests · Tracing · Runbook'}
 ]
} as const;
