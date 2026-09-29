// Données mock des CERs (à remplacer par des appels fetch vers le backend)
export const initialCers = [
  {
    id: 1,
    titre: "Prosit 2.1 UML et Modélisation",
    auteur: "Chris-Erwan Nga",
    image: "/assets/images/uml.png",
    description:
      "Le Langage de Modélisation Unifié, de l'anglais Unified Modeling Language, est un langage de modélisation graphique à base de pictogrammes conçu comme une méthode normalisée de visualisation dans les domaines du développement logiciel.",
    categorie: "Modélisation",
    date: "2024-01-15",
  },
  {
    id: 2,
    titre: "Prosit 3.3 API et Webservice",
    auteur: "Daryl Noupik",
    image: "/assets/images/microservices.png",
    description:
      "Les API sont principalement axées sur la communication entre applications pour l'accès aux fonctionnalités. L'EDI se concentre sur l'échange de documents commerciaux entre entreprises de manière automatisée et standardisée.",
    categorie: "API",
    date: "2024-02-10",
  },
  {
    id: 3,
    titre: "Prosit 4.1 Développement avancé",
    auteur: "Providence Djekoun",
    image: "/assets/images/uml.png",
    description:
      "Advance Web Development fait référence au processus de création de sites Web dynamiques et interactifs qui vont au-delà des pages Web statiques. Cela implique l'utilisation de techniques et de technologies de codage avancées.",
    categorie: "Développement",
    date: "2024-03-05",
  },
  {
    id: 4,
    titre: "Prosit 4.3 Microservices",
    auteur: "Sadjo Mamadou",
    image: "/assets/images/microservices.png",
    description:
      "Les microservices sont une approche architecturale qui structure une application comme un ensemble de services faiblement couplés, déployables indépendamment.",
    categorie: "Architecture",
    date: "2024-03-20",
  },
  {
    id: 5,
    titre: "Prosit 4.5 Architecture distribuée",
    auteur: "Sadjo Mamadou",
    image: "/assets/images/active-directory.png",
    description:
      "L'architecture distribuée ou l'informatique distribuée désigne un système d'information ou un réseau pour lequel l'ensemble des ressources disponibles ne se trouvent pas au même endroit ou sur la même machine.",
    categorie: "Architecture",
    date: "2024-04-01",
  },
  {
    id: 6,
    titre: "Prosit 3.1 Active Directory",
    auteur: "Chris-Erwan Nga",
    image: "/assets/images/active-directory.png",
    description:
      "Active Directory est un service d'annuaire développé par Microsoft pour les réseaux de domaine Windows. Il stocke les informations sur les objets du réseau.",
    categorie: "Système",
    date: "2024-01-28",
  },
];

export const extraCers = [
  {
    id: 7,
    titre: "Prosit 2.4 Diagrammes de séquence",
    auteur: "Chris-Erwan Nga",
    image: "/assets/images/uml.png",
    description:
      "Le diagramme de séquence UML représente les échanges de messages entre objets au fil du temps, utile pour modéliser les scénarios d'utilisation d'un système.",
    categorie: "Modélisation",
    date: "2024-05-01",
  },
  {
    id: 8,
    titre: "Prosit 3.5 Sécurisation des API REST",
    auteur: "Chris-Erwan Nga",
    image: "/assets/images/microservices.png",
    description:
      "Panorama des mécanismes d'authentification et d'autorisation (JWT, OAuth2) permettant de protéger une API REST exposée sur Internet.",
    categorie: "API",
    date: "2024-05-10",
  },
  {
    id: 9,
    titre: "Prosit 4.6 Conteneurisation avec Docker",
    auteur: "Chris-Erwan Nga",
    image: "/assets/images/microservices.png",
    description:
      "Introduction à la conteneurisation : images, conteneurs et orchestration, appliquée au déploiement d'une architecture microservices.",
    categorie: "DevOps",
    date: "2024-05-15",
  },
];
