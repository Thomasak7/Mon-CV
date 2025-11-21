import { Linkedin, Twitter, Youtube, User } from "lucide-react";

// Informations personnelles
export const personalInfo = {
  name: "Thoma SAK",
  bio: "En première année de BUT MMI, je suis passionné par les technologies numériques et la création. Mon objectif : apprendre rapidement, développer mes compétences et contribuer à des projets créatifs.",
  email: "tonmail@example.com", // remplace par ton email réel
  phone: "07 83 78 76 84",
  location: "France",
};

// Projets (numéros placeholder pour vidéos)
export const projects = [1, 2, 3];

// Réseaux sociaux
export const socialLinks = [
  { name: "Téléphone", icon: User, link: "tel:0783787684", color: "hover:text-green-400" },
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/feed/", color: "hover:text-blue-400" },
  { name: "YouTube", icon: Youtube, link: "#", color: "hover:text-red-400" },
  { name: "Twitter", icon: Twitter, link: "#", color: "hover:text-sky-400" },
];

// Expériences professionnelles
export const experiences = [
  {
    title: "Travail saisonnier",
    company: "Restauration rapide",
    period: "Juillet - Août 2024/2025",
    desc: "Accueil des clients et prise de commandes. Préparation des produits et gestion des flux en cuisine.",
    color: "cyan",
  },
  {
    title: "Stage d’observation",
    company: "Géomètre-Expert",
    period: "2021",
    desc: "Observation et découverte des méthodes de relevés topographiques et du métier de géomètre. Sensibilisation aux techniques de mesure et aux outils spécifiques.",
    color: "violet",
  },
  {
    title: "Travail Occasionnel",
    company: "Restaurant Marcel, Stade de France",
    period: "Depuis Juin 2025",
    desc: "Accueil client et service : Gestion de l'accueil et du placement des clients lors d'événements majeurs. Gestion de flux : Contribution à la fluidité du service et au maintien de la satisfaction client lors des pics d'activité.",
    color: "green",
  },
];

// Outils / compétences
export const tools = [
  "Organisation rigoureuse",
  "Anticipation",
  "Esprit d'équipe",
  "Adaptabilité et autonomie",
  "Créativité et curiosité",
  "Dynamique",
  "Patient",
];

// Centres d'intérêt / objectifs
export const goals = [
  "Musique - Pratique d’instruments",
  "Cinéma et multimédia",
  "Montage vidéo",
  "Sport",
];

// Certificats
export const certificates = [
  "Permis B – Obtenu (2024)",
  "Baccalauréat – Mention Assez Bien (2024)",
  "Certification PSC1 – Collège Saint Didier (2021)",
  "Certification PIX – Collège et Lycée (2021 et 2024)",
];

// Réalisations / SAÉ
export const achievements = [
  {
    value: "SAÉ 1.03",
    title: "Design Graphique",
    desc: "Production de visuels et optimisation de médias selon cahier des charges.",
    color: "cyan",
  },
  {
    value: "SAÉ 1.04",
    title: "Production Audiovisuelle",
    desc: "Réalisation complète (scénario, tournage, montage) d'un tutoriel vidéo.",
    color: "cyan",
  },
  {
    value: "SAÉ 1.05",
    title: "Développement Web",
    desc: "Maîtrise de la production de site web, intégration balisage sémantique.",
    color: "cyan",
  },
  {
    value: "SAÉ 2.02",
    title: "Communication Événementielle",
    desc: "Stratégie multicanale pour un festival.",
    color: "cyan",
  },
];

// Compétences détaillées
export const skills = [
  {
    category: "Développement Web & Code",
    skills: ["HTML", "CSS", "PHP (Initiation / bases solides)", "VS Code"],
  },
  {
    category: "Création Audiovisuelle & Design",
    skills: ["Figma", "Suite Adobe Créative (Photoshop, Illustrator)", "Motion Design", "Caméra (Tournage)", "Montage vidéo"],
  },
  {
    category: "Outils & Productivité",
    skills: ["Microsoft Office", "Google Docs", "Compétences organisationnelles (Rigueur, Anticipation)"],
  },
  {
    category: "Langues & Soft Skills",
    skills: ["Anglais (B2)", "Espagnol (B1)", "Esprit d'équipe", "Adaptabilité", "Dynamisme"],
  },
];

// Blobs animés (inchangés)
export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
