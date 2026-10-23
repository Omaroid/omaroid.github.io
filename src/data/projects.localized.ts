import { projects, type Project } from './content';
import type { Lang } from './i18n';

const fr: Record<string, Partial<Project>> = {
  dossierpro: {
    short:'Une plateforme de recrutement assistée par IA, de données candidats dispersées à des workflows structurés.',
    eyebrow:'Produit métier / IA appliquée',categoryName:'Produits IA',status:'Code privé · Étude de cas publique',
    problem:'Les équipes de recrutement jonglent entre CV non structurés, profils en ligne et besoins clients. Produire des dossiers de compétences adaptés exige une chaîne complète et contrôlable, pas un simple appel à un modèle.',
    approach:[
      'Importer les données candidats depuis les CV et les sources de profils compatibles.',
      'Structurer les profils, rapprocher les compétences des besoins et générer des dossiers adaptés.',
      'Gérer les traitements longs de façon asynchrone avec un suivi de progression.',
      'Intégrer les exigences de sécurité et de partage au produit.'
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
    short:'Un cockpit privé qui relie découverte de sources, enrichissement, sélection et suivi des opportunités.',
    eyebrow:'Intégrations / Full Stack',categoryName:'Systèmes',status:'Code privé · Produit évolutif',
    problem:'Rechercher et qualifier des opportunités dans des sources disparates est répétitif et difficile à tracer dans la durée.',
    approach:[
      'Centraliser la collecte et la qualification d’opportunités dans une application.',
      'Relier les informations de recruteurs, enrichissements et actions de suivi.',
      'Protéger les informations professionnelles et encadrer les intégrations externes.',
      'Faire évoluer les mécanismes de déduplication, fiabilité des sources et états de suivi.'
    ],
    decision:'Conserver privées les données opérationnelles et les clés de services, et documenter publiquement l’architecture sans divulguer leur contenu.',
    evidence:'Une implémentation privée existe. Le README consulté décrit une version connectée à Notion ; les évolutions d’architecture ultérieures restent à confirmer avant d’être présentées comme déployées.',
    next:['Documenter l’architecture de stockage réellement active.','Mesurer le taux de doublons et la fraîcheur des annonces.','Tester les reprises et les pannes de sources.']
  },
  'sa-os':{
    short:'Un système de méthodes et de preuves pour structurer la découverte client et l’architecture de solutions.',
    eyebrow:'Ingénierie terrain / Méthodologie',categoryName:'Systèmes',status:'Code privé · Méthodologie',
    problem:'Les découvertes client, hypothèses techniques et résultats d’expérimentation se dispersent entre documents et conversations sans devenir un socle réutilisable.',
    approach:[
      'Relier problème, impact, résultat attendu, métrique et exigences avant la solution.',
      'Transformer les hypothèses d’architecture incertaines en expériences documentées.',
      'Séparer les données client des patterns réutilisables.',
      'Vérifier les workflows grâce à des schémas, scripts et scénarios de tests.'
    ],
    decision:'Renforcer le jugement technique par la reproductibilité des preuves, sans déléguer aveuglément les décisions à une IA.',
    evidence:'Le dépôt privé documente des compétences méthodologiques composables, des schémas et des tests. Il ne s’agit pas d’un SaaS déployé.',
    next:['Publier un scénario de découverte fictif.','Décrire une architecture de bout en bout vérifiable.','Évaluer la traçabilité obtenue.']
  },
  'bloom-terminal':{
    short:'Un espace de veille cloud et data reliant sources, projets suivis et notes de recherche.',
    eyebrow:'Veille technologique / Systèmes',categoryName:'Systèmes',status:'Code privé · Application',
    problem:'Les nouveautés cloud et data sont dispersées entre éditeurs et formats ; les relier aux projets en cours prend du temps.',
    approach:[
      'Agréger les flux publics dans une interface dédiée.',
      'Filtrer par source, thématique et projet suivi.',
      'Conserver les notes de recherche et les liens d’origine.',
      'Documenter l’intégration continue et le déploiement éventuel sur Vercel.'
    ],
    decision:'Privilégier des sources attribuées et des signaux déterministes aux affirmations IA non vérifiées.',
    evidence:'Le README privé documente les flux, les tests et la configuration Vercel. La disponibilité réelle du service et l’adoption externe n’ont pas été évaluées.',
    next:['Mesurer la disponibilité et la fraîcheur des sources.','Améliorer les messages d’échec de collecte.','Publier une courte vidéo de démonstration anonymisée.']
  },
  pokevalue:{
    short:'Une application mobile de reconnaissance visuelle et de valorisation de cartes, de la photo aux décisions de collection.',
    eyebrow:'Vision par ordinateur / Produit mobile',categoryName:'Produits IA',status:'Code privé · Application',
    problem:'Un collectionneur doit identifier des cartes physiques, comprendre leurs variantes et comparer des prix sans parcourir manuellement plusieurs catalogues.',
    approach:[
      'Reconnaître les cartes par vision assistée avec un recours OCR documenté.',
      'Résoudre l’identité selon édition, langue, variante et état.',
      'Comparer les données de prix issues de plusieurs sources.',
      'Proposer le scan mobile, le suivi de collection et des historiques de valorisation.'
    ],
    decision:'Faire de l’incertitude de reconnaissance une interaction corrigible plutôt qu’une identification silencieuse.',
    evidence:'La documentation privée décrit ces capacités ; ni la précision de reconnaissance ni la fiabilité des prix ne sont évaluées de manière indépendante.',
    next:['Tester la reconnaissance sur un jeu représentatif de photos.','Mesurer la couverture des catalogues et des prix.','Analyser les corrections et les erreurs utilisateur.']
  }
};

export function getProjects(lang: Lang): Project[] {
  return lang === 'fr'
    ? projects.map(project => ({ ...project, ...fr[project.slug] }))
    : projects;
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return getProjects(lang).find(project => project.slug === slug);
}
