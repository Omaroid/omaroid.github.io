import { projects, type Project } from './content';
import type { Lang } from './i18n';

const fr: Record<string, Partial<Project>> = {
  dossierpro: {
    short:'Une plateforme de gestion du recrutement qui transforme CV et informations candidats en workflows structurés et traçables.',
    eyebrow:'Produit métier / IA appliquée',categoryName:'Produits IA',status:'Code privé · Étude de cas publique',
    problem:'Les équipes de recrutement jonglent entre CV non structurés, profils en ligne et besoins clients. Produire des dossiers de compétences adaptés exige une chaîne complète et contrôlable, pas un simple appel à un modèle.',
    approach:[
      'Importer des profils LinkedIn et des CV PDF ou DOCX, extraire les informations de profil et détecter les doublons potentiels.',
      'Créer des dossiers de compétences généraux ou ciblés par mission et rapprocher les profils des besoins clients.',
      'Générer des dossiers PDF professionnels, partager des liens sécurisés et suivre les échanges par e-mail.',
      'Prendre en charge un CRM client, les quotas et la facturation, avec suivi en temps réel des traitements longs.'
    ],
    decision:'Traiter l’extraction IA comme une étape vérifiable d’un workflow métier, plutôt que comme l’ensemble du produit.',
    evidence:'Une implémentation privée et une documentation projet détaillée existent. L’adoption en production, les performances d’extraction et les résultats métiers ne sont pas vérifiés de manière indépendante.',
    next:['Mesurer la qualité de l’extraction sur des CV de test utilisés avec consentement.','Tester les relances, doublons et assertions non sourcées.','Présenter une démonstration anonymisée du parcours utilisateur.']
  },
  'retail-churn-copilot':{
    short:'Une application d’analyse conversationnelle construite sur une plateforme Databricks.',
    eyebrow:'Plateforme Data / Analytics IA',categoryName:'Plateformes Data',status:'Code privé · Prototype',
    problem:'Les analystes souhaitent explorer des questions de fidélisation, alors que les schémas techniques et le SQL brut ne constituent pas une interface adaptée à tous les métiers.',
    approach:[
      'Relier une interface React et un serveur TypeScript dans la structure Databricks AppKit.',
      'Utiliser SQL Warehouse et AI/BI Genie pour interroger et restituer les données.',
      'Séparer les questions métier de la complexité des composants sous-jacents.',
      'Préparer le déploiement via une configuration Databricks Bundle.'
    ],
    decision:'Rendre la donnée gouvernée accessible à travers une application sans masquer l’origine des requêtes et les contrôles d’accès.',
    evidence:'Le dépôt privé contient le client, le serveur, les plugins AppKit et la configuration Databricks. Il ne démontre pas un déploiement chez un client ni un gain de rétention mesuré.',
    next:['Tracer le chemin question → requête → réponse avec données synthétiques.','Valider les droits d’accès et les questions ambiguës.','Mesurer l’utilité face à une approche SQL seule.']
  },
  'mission-radar':{
    short:'Un cockpit privé de recherche d’opportunités reliant missions suivies dans Notion, contexte recruteurs et workflows de suivi.',
    eyebrow:'Intégrations / Full Stack',categoryName:'Systèmes',status:'Code privé · Produit évolutif',
    problem:'Rechercher et qualifier des opportunités dans des sources disparates est répétitif et difficile à tracer dans la durée.',
    approach:[
      'Lire les missions depuis Notion et actualiser l’espace de travail lorsque l’application est utilisée.',
      'Suivre les statuts, favoris, contacts recruteurs et historique des échanges avec les opportunités.',
      'Proposer un enrichissement LinkedIn à la demande comme aide à la recherche, avec vérification par l’utilisateur.',
      'Protéger l’accès par des sessions signées et des contrôles d’origine ; aucun message ou candidature n’est automatisé.'
    ],
    decision:'Conserver privées les données opérationnelles et les clés de services, et documenter publiquement l’architecture sans divulguer leur contenu.',
    evidence:'Le README du dépôt privé documente une application connectée à Notion avec actualisation, suivi des contacts et enrichissement LinkedIn déclenché à la demande. Aucun mécanisme de candidature ou de message automatisé n’est revendiqué.',
    next:['Documenter l’architecture de stockage réellement active.','Mesurer le taux de doublons et la fraîcheur des annonces.','Tester les reprises et les pannes de sources.']
  },
  'sa-os':{
    short:'Un système de méthodes et de preuves pour structurer la découverte client et l’architecture de solutions.',
    eyebrow:'Ingénierie terrain / Méthodologie',categoryName:'Systèmes',status:'Code privé · Méthodologie',
    problem:'Les découvertes client, hypothèses techniques et résultats d’expérimentation se dispersent entre documents et conversations sans devenir un socle réutilisable.',
    approach:[
      'Router les tâches entre 23 compétences méthodologiques composables et 13 commandes.',
      'Relier problème, impact, résultat, métrique, exigence, capacité et validation avant toute recommandation.',
      'Transformer les affirmations incertaines en expériences et les tâches répétées en pratiques réutilisables.',
      'Encadrer les dépôts avec neuf schémas JSON, des scripts de validation et des scénarios de routage.'
    ],
    decision:'Renforcer le jugement technique par la reproductibilité des preuves, sans déléguer aveuglément les décisions à une IA.',
    evidence:'Le dépôt privé documente des compétences méthodologiques composables, des schémas et des tests. Il ne s’agit pas d’un SaaS déployé.',
    next:['Publier un scénario de découverte fictif.','Décrire une architecture de bout en bout vérifiable.','Évaluer la traçabilité obtenue.']
  },
  'lakehouse-signal':{
    short:'Un terminal de veille Databricks, data et cloud pour suivre actualités publiques, projets, notes et lectures.',
    eyebrow:'Veille technologique / Systèmes',categoryName:'Systèmes',status:'Code privé · Démo publique',
    problem:'Les nouveautés cloud et data sont dispersées entre éditeurs et formats ; les relier aux projets en cours prend du temps.',
    approach:[
      'Agréger des flux RSS et Atom publics en conservant l’attribution des éditeurs et des filtres par source ou sujet.',
      'Gérer des listes de veille, articles sauvegardés, notes locales et historique de lecture sans compte utilisateur.',
      'Proposer des flux vidéo éditeurs et une file de visionnage en complément des articles.',
      'Servir les flux par une fonction Netlify avec limites de taille et rejet des schémas d’URL non sûrs.'
    ],
    decision:'Privilégier des sources attribuées et des signaux déterministes aux affirmations IA non vérifiées.',
    evidence:'Le dépôt privé contient le parseur de flux, les tests et la configuration Netlify. Une version publique est déployée sur Netlify ; la fraîcheur des sources et l’adoption externe ne sont pas mesurées.',
    next:['Mesurer la disponibilité et la fraîcheur des sources.','Améliorer les messages d’échec de collecte.','Publier une courte vidéo de démonstration anonymisée.']
  },
  pokevalue:{
    short:'Une application mobile de reconnaissance visuelle et de valorisation de cartes, de la photo aux décisions de collection.',
    eyebrow:'Vision par ordinateur / Produit mobile',categoryName:'Produits IA',status:'Code privé · Application',
    problem:'Un collectionneur doit identifier des cartes physiques, comprendre leurs variantes et comparer des prix sans parcourir manuellement plusieurs catalogues.',
    approach:[
      'Identifier les cartes par photo avec vision assistée, avec Tesseract OCR et OpenCV comme solutions de repli.',
      'Résoudre le catalogue, la langue, la variante, l’état et le grade avant l’enregistrement.',
      'Comparer Cardmarket et TCGplayer, conversions de devise, historique, alertes et statistiques de collection.',
      'Gérer listes de souhaits, ventes et marges, estimations de gradation, classeurs, échanges, CSV, notifications et widget iPhone.'
    ],
    decision:'Faire de l’incertitude de reconnaissance une interaction corrigible plutôt qu’une identification silencieuse.',
    evidence:'La documentation privée décrit ces capacités ; ni la précision de reconnaissance ni la fiabilité des prix ne sont évaluées de manière indépendante.',
    next:['Tester la reconnaissance sur un jeu représentatif de photos.','Mesurer la couverture des catalogues et des prix.','Analyser les corrections et les erreurs utilisateur.']
  },
  'pb-farmer': { short:'Un prototype de ferme connectée et évolutive qui associe capteurs, systèmes embarqués et données cloud.', eyebrow:'IoT / Agriculture / Cloud',categoryName:'IoT et systèmes data',status:'Dépôt public · Projet académique',context:'Projet Ensimag · 2018–2019.',problem:'Explorer comment des objets connectés et des services cloud peuvent soutenir une exploitation agricole pilotée par la donnée.',approach:['Associer des composants Raspberry Pi et Arduino dans un prototype connecté.','Collecter et transmettre les mesures des capteurs.','Intégrer Azure à la plateforme cloud.','Documenter le projet dans le dépôt et le wiki de l’école.'],decision:'Relier les équipements de terrain à une couche cloud dans un prototype IoT concret.',evidence:'Le README public décrit une ferme connectée et évolutive reposant sur Raspberry Pi, Arduino et Azure. Aucun résultat en conditions réelles n’est vérifié indépendamment.',next:['Consulter le wiki du projet pour les détails d’implémentation.','Reproduire le flux appareil-cloud avec du matériel actuel.','Documenter la qualité des données et les contraintes de fiabilité.'] },
  'iot-fireman': { short:'Un concept de supervision connectée d’alarme incendie à domicile, accompagné d’une application Android.',eyebrow:'IoT / Mobile / Supervision',categoryName:'IoT et systèmes data',status:'Dépôt public · Prototype',problem:'Proposer une interface connectée pour superviser un système de détection incendie à domicile.',approach:['Développer une application Android dédiée à la supervision.','Prévoir l’appairage des équipements et leur organisation par pièce.','Présenter le système au moyen d’écrans d’accueil et de suivi.','Limiter les affirmations aux fonctions documentées dans le dépôt.'],decision:'Associer une interface mobile familière à un concept de supervision connectée.',evidence:'Le README public présente une infrastructure IoT de suivi de détecteurs incendie à domicile. Le dépôt contient une application Android ; aucune certification de sécurité incendie ni mise en production n’est revendiquée.',next:['Documenter l’architecture complète des capteurs et communications.','Préciser la livraison des alertes et les comportements en cas de panne.','Vérifier les normes de sécurité applicables avant tout usage réel.'] },
  'cv-parser-internship': { short:'Un projet de stage consacré au parsing de CV, à la préparation des données et à l’extraction d’entités nommées.',eyebrow:'NLP / Préparation de données / Stage',categoryName:'IA et données',status:'Dépôt privé · Projet de stage',context:'Stage chez Ingeniance · février–août 2020.',problem:'Explorer la transformation de CV non structurés en informations candidat organisées.',approach:['Étudier les travaux de recherche et jeux de données liés au parsing de CV.','Préparer et nettoyer les données pour l’expérimentation.','Explorer des méthodes de reconnaissance d’entités nommées et de classification.','Présenter ce travail comme un prototype réalisé pendant un stage, et non comme un produit de recrutement actuel.'],decision:'Mettre l’accent sur les fondations data et l’extraction d’entités pendant le stage.',evidence:'Le dépôt privé contient des jeux de données de CV, un notebook de préparation, des références de recherche et un artefact de reconnaissance d’entités. Cette présentation s’appuie sur ces éléments et sur le contexte de stage ; aucun benchmark n’est présenté comme vérifié indépendamment.',next:['Ne pas exposer les CV source ni les données personnelles.','Reproduire le prétraitement avec des données synthétiques ou consenties.','Décrire la méthode d’évaluation avant de publier des métriques.'] },
  'covid-19-data-api': { short:'Une API Flask historique pour ingérer et exposer des données publiques sur la pandémie.',eyebrow:'Ingénierie data / API Python',categoryName:'Ingénierie data',status:'Dépôt public · Archivé',context:'Projet historique · 2020.',problem:'Rendre accessibles par API des statistiques publiques sur la COVID-19 mises à jour fréquemment.',approach:['Utiliser le jeu de données public Johns Hopkins CSSE.','Actualiser les données selon une fréquence planifiée.','Exposer les données historiques et courantes au moyen d’endpoints Flask.','Conserver le projet comme exemple historique de service data.'],decision:'Séparer la collecte des données de leur accès par API.',evidence:'Le README public documente l’API Flask, la source Johns Hopkins CSSE et une actualisation planifiée d’environ dix minutes. Le dépôt est archivé et ne constitue pas une source sanitaire actuelle.',next:['Orienter les utilisateurs vers les sources sanitaires officielles à jour.','Ajouter les horodatages et la fraîcheur des données en cas de reprise.','Vérifier le comportement historique de l’API avant réutilisation.'] },
  'world-inequality-visuals': { short:'Une exploration interactive des inégalités de revenus à partir de données du World Inequality Database.',eyebrow:'Visualisation data / Recherche',categoryName:'Visualisation de données',status:'Dépôt public · Projet académique',problem:'Faciliter l’exploration et la comparaison d’indicateurs complexes d’inégalité entre pays et dans le temps.',approach:['Extraire et préparer des indicateurs choisis de la base WID.','Créer des visualisations interactives en D3.js, notamment autour des revenus et du Gini.','Explorer des groupes de pays comme les BRICS et des comparaisons associées.','Proposer plusieurs formes graphiques complémentaires.'],decision:'Utiliser la visualisation pour faciliter l’exploration en gardant le contexte des indicateurs visible.',evidence:'Le README public décrit l’extraction et la préparation des données, ainsi que des visualisations D3 interactives portant notamment sur les revenus et le Gini. Il s’agit d’une exploration, pas d’une analyse de politique publique.',next:['Ajouter les sources et limites méthodologiques à chaque indicateur.','Vérifier la comparabilité entre pays et années.','Moderniser les visualisations et leur accessibilité.'] },
  'brent-oil-forecast': { short:'Une exploration de prévision temporelle à partir des cours historiques du Brent et de Prophet.',eyebrow:'Séries temporelles / Prévision',categoryName:'Data science',status:'Dépôt public · Notebook historique',problem:'Explorer une démarche de prévision des cours historiques du pétrole Brent.',approach:['Charger le jeu de données de cours historiques référencé.','Préparer les entrées de série temporelle pour Prophet.','Ajuster et inspecter un modèle dans un notebook.','Présenter le résultat comme exploratoire, sans prétendre à une précision vérifiée.'],decision:'Utiliser un notebook reproductible pour rendre la démarche de préparation et de prévision consultable.',evidence:'Le dépôt public contient un notebook Prophet et référence un jeu de données Kaggle. Il ne démontre ni la précision des prévisions ni leur pertinence pour une décision financière.',next:['Comparer le modèle à des baselines saisonnières et naïves.','Évaluer avec une validation temporelle et publier les erreurs.','Documenter la provenance des données et l’incertitude.'] },
  'email-classifier': { short:'Un prototype pédagogique de 2019 qui classe des messages entre courriers légitimes et spam.',eyebrow:'Machine learning / Classification de texte',categoryName:'Machine learning',status:'Dépôt public · Prototype historique',context:'Projet d’apprentissage historique · 2019.',problem:'Explorer un workflow de classification de texte pour distinguer spam et courrier légitime.',approach:['Transformer le texte en variables de comptage avec CountVectorizer.','Entraîner un classifieur Multinomial Naive Bayes.','Présenter les prédictions dans une petite interface Tkinter.','Préciser qu’il s’agit d’un prototype pédagogique historique.'],decision:'Choisir un modèle de base simple et interprétable pour illustrer le pipeline NLP classique.',evidence:'Le README public documente le prototype de 2019, le vectoriseur, le classifieur et l’interface de bureau. Le code est ancien et ne dispose ni d’une évaluation récente ni d’un déploiement maintenu.',next:['Ajouter un découpage reproductible et des métriques d’évaluation.','Vérifier la provenance et la confidentialité du jeu de données avant réutilisation.','Mettre à jour les dépendances en cas de reprise.'] },
  'salesforce-documents-retriever': { short:'Un utilitaire Node.js pour récupérer localement les documents d’une organisation Salesforce.',eyebrow:'Intégration data / Outil développeur',categoryName:'Intégrations',status:'Dépôt public · Utilitaire',problem:'Rendre reproductible la récupération de documents Salesforce vers un dossier local.',approach:['Se connecter à une organisation Salesforce avec des identifiants configurés localement.','Récupérer les documents de l’organisation au moyen du script.','Écrire les fichiers récupérés dans un répertoire local.','Conserver les identifiants dans la configuration locale, jamais dans le portfolio ou le code source publié.'],decision:'Garder l’utilitaire ciblé sur une tâche d’intégration précise et scriptable.',evidence:'Le README public décrit un script Node.js qui récupère les documents d’une organisation Salesforce dans un dossier local. Aucun volume traité ni niveau de support en production n’est revendiqué.',next:['Documenter une authentification sécurisée adaptée aux usages actuels.','Gérer la pagination, les reprises et les erreurs.','Préciser les types de documents Salesforce pris en charge.'] }
};

export function getProjects(lang: Lang): Project[] {
  return lang === 'fr'
    ? projects.map(project => ({ ...project, ...fr[project.slug] }))
    : projects;
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return getProjects(lang).find(project => project.slug === slug);
}
