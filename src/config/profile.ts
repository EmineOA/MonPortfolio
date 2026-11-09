export interface PendingField<T = string, P = string> {
  /** Valeur réelle une fois renseignée, ou null tant qu'elle est en attente */
  value: T | null;
  /** Texte d'indication explicite affiché lorsque value === null */
  placeholder: P;
}

export interface ProfessionalProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProfessionalProjectSection {
  title: string;
  items: string[];
}

export interface ProfessionalProject {
  code: string;
  title: string;
  subtitle: string;
  workModeBadge: string;
  priority: boolean;
  context: string;
  objective: string;
  sections: ProfessionalProjectSection[];
  deliverablesAndResults: string[];
  statusNote: string;
  metrics?: ProfessionalProjectMetric[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyFullName?: string;
  team?: string;
  location: string;
  exactDates?: string;
  duration?: string;
  contractualTitle?: string;
  summary?: string;
  role: PendingField<string>;
  period: PendingField<string>;
  missions: PendingField<string[], string[]>;
  contextNote: string;
  mainTechnologies?: string[];
  projects?: ProfessionalProject[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  distinction: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  skills: string[];
}

export const profileConfig = {
  identity: {
    fullName: 'Emine AGATT',
    firstName: 'Emine',
    lastName: 'AGATT',
    headline: 'Ingénieur en formation | Data Science & Intelligence Artificielle',
    subheadline:
      "Élève ingénieur à CY Tech, spécialisé en mathématiques appliquées et intelligence artificielle, je développe des solutions associant modélisation, apprentissage automatique et ingénierie logicielle. Je recherche un stage de fin d'études pour contribuer à des projets Data & IA à fort impact.",
    statusBadge: "Recherche de stage de fin d'études",
    targetEnvironments: [
      'Grandes entreprises & groupes technologiques',
      'Banques & institutions financières (CIB, Quantitative & AI teams)',
      'Cabinets de conseil spécialisés Data & IA',
      'Équipes R&D et ingénierie IA corporate',
    ],
  },

  /**
   * Champs de contact et de mobilité :
   * Remplacer `value: null` par la chaîne de caractères correspondante (ex. value: "emine.agatt@email.com")
   * pour activer automatiquement les boutons et liens dans tout le site.
   */
  contact: {
    linkedinUrl: 'https://www.linkedin.com/in/emine-agatt/',
    email: {
      value: null as string | null,
      placeholder: 'Email professionnel à renseigner',
    },
    githubUrl: {
      value: null as string | null,
      placeholder: 'Profil GitHub à renseigner',
    },
    cvPdfPath: {
      value: null as string | null, // Ex: '/cv/CV_Emine_AGATT.pdf' une fois le fichier déposé dans public/cv/
      placeholder: 'CV PDF à déposer dans /public/cv/',
    },
    internshipAvailability: {
      value: null as string | null,
      placeholder: 'Dates et durée de disponibilité à préciser',
    },
    mobility: {
      value: null as string | null,
      placeholder: 'Mobilité géographique à préciser (ex. Île-de-France, International)',
    },
  },

  domains: [
    {
      title: 'Data Science & Analyse de données',
      summary: 'Exploration statistique, préparation de corpus complexes, modélisation prédictive et évaluation rigoureuse.',
    },
    {
      title: 'Machine Learning & Deep Learning',
      summary: 'Apprentissage supervisé, réseaux de neurones convolutifs (CNN), transfert d’apprentissage et optimisation.',
    },
    {
      title: 'Computer Vision',
      summary: 'Détection multi-visages (YOLOv8-Face), classification d’expressions faciales sur flux images et vidéos.',
    },
    {
      title: 'Big Data & Calcul distribué',
      summary: 'Architectures distribuées Apache Spark, traitement batch et temps réel (Spark Streaming), analyse de graphes (GraphX).',
    },
    {
      title: 'Traitement numérique du signal',
      summary: 'Analyse temps-fréquence (FFT, STFT), séparation de sources audio (HPSS) et évaluation acoustique (SDR, SIR, SAR).',
    },
    {
      title: 'Ingénierie logicielle',
      summary: 'Conception orientée objet (Java, UML), architectures web sécurisées (Django, RBAC) et bases de données relationnelles.',
    },
  ],

  education: {
    institution: 'CY Tech (Grande École d’Ingénieurs)',
    degree: 'Diplôme d’Ingénieur',
    specialization: 'Mathématiques Appliquées et Intelligence Artificielle',
    period: '2024 – 2027',
    distinction: 'Classé parmi les deux premiers de sa promotion en première et deuxième années',
    details: [
      'Formation d’ingénieur alliant modélisation mathématique, statistique, algorithmique avancée et intelligence artificielle.',
      'Projets d’ingénierie appliquée en Deep Learning, systèmes distribués Big Data, traitement du signal et génie logiciel.',
    ],
  } satisfies EducationItem,

  experience: [
    {
      id: 'bnp-paribas-cib',
      company: 'BNP Paribas CIB',
      companyFullName: 'BNP Paribas Corporate & Institutional Banking (CIB)',
      team: 'AML IT Detection Team',
      location: 'Montreuil, France',
      exactDates: '4 mai 2026 – 31 août 2026',
      duration: '4 mois',
      contractualTitle: 'Stagiaire Chef de projet AML IT',
      summary:
        "Développement d'un framework d'évaluation d'Entity Resolution et contribution à la modélisation de données de paiement ISO 20022 pour les systèmes de lutte contre le blanchiment d'argent.",
      role: {
        value: 'Stagiaire Data Science & Data Engineering — AML IT',
        placeholder: '',
      },
      period: {
        value: 'Mai – août 2026 · 4 mois',
        placeholder: '',
      },
      missions: {
        value: [
          "Conception et développement d'un framework Python modulaire pour l'évaluation d'un modèle d'Entity Resolution appliqué aux données de paiement AML.",
          "Implémentation de méthodes de similarité textuelle et d'évaluateurs intra/inter-groupes, avec analyse statistique des regroupements et construction de KPI.",
          "Automatisation d'expérimentations reproductibles, analyse des distributions, production de visualisations et documentation technique.",
          "Participation à la conception d'un modèle de données de paiement ISO 20022 : analyse des schémas XML/XSD, extraction, mapping et contrôle des champs.",
          "Contribution en binôme à un modèle relationnel de 14 tables, à partir de l'analyse de 24 versions de messages ISO 20022.",
          "Utilisation d'OpenCode et d'agents IA pour assister l'analyse documentaire, avec vérification des résultats et revue croisée.",
        ],
        placeholder: [],
      },
      contextNote:
        "Expérience au sein de l'AML IT Detection Team de BNP Paribas CIB, consacrée à l'évaluation de modèles d'Entity Resolution et à la modélisation de données de paiement pour la lutte contre le blanchiment.",
      mainTechnologies: [
        'Python',
        'pandas',
        'Polars',
        'NumPy',
        'scikit-learn',
        'SciPy',
        'RapidFuzz',
        'Dataiku',
        'ISO 20022',
        'SWIFT MT/MX',
        'XML/XSD',
        'Modélisation relationnelle',
        'OpenCode & Agents IA',
      ],
      projects: [
        {
          code: 'PROJET 01',
          title: 'Entity Resolution Evaluation (ERE)',
          subtitle:
            "Conception et développement d'un framework Python d'évaluation statistique et textuelle pour l'Entity Resolution sur données de paiement AML",
          workModeBadge: 'Projet principal · Réalisation individuelle majeure',
          priority: true,
          context:
            "Dans les systèmes de paiement, une même personne ou entreprise peut apparaître sous différentes écritures (abréviations, variations orthographiques, formats hétérogènes ou informations réparties entre plusieurs champs). Un modèle d'Entity Resolution vise à regrouper les enregistrements correspondant à une même entité, mais s'expose à deux risques majeurs pour les processus de détection et d'investigation AML : le sur-regroupement (plusieurs entités distinctes fusionnées à tort) et le sous-regroupement (une même entité dispersée dans plusieurs groupes).",
          objective:
            "Concevoir et développer un framework Python permettant d'évaluer la qualité des regroupements produits par un modèle d'Entity Resolution à l'aide d'indicateurs statistiques et de métriques de similarité textuelle, afin de fournir une méthode d'évaluation reproductible, configurable et exploitable par les équipes techniques.",
          sections: [
            {
              title: 'Architecture du framework & Orchestration',
              items: [
                "Conception d'une architecture Python modulaire développée en majeure partie en autonomie avec revues du référent technique.",
                "Développement d'un orchestrateur d'expériences séparant clairement les prétraitements, les fonctions de similarité et les évaluateurs.",
                "Mise en place de registres de composants permettant de tester différentes configurations sans modifier la logique principale.",
                "Automatisation complète des campagnes d'expériences et de la génération des exports CSV.",
              ],
            },
            {
              title: 'Prétraitement & Méthodes de similarité textuelle',
              items: [
                'Nettoyage, normalisation, concaténation et tokenisation des champs textuels de paiement.',
                'Distance de Levenshtein adaptée aux chaînes multi-mots.',
                'Similarité phonétique fondée sur Double Metaphone et la divergence de Jensen-Shannon.',
                'Similarité cosinus couplée à une vectorisation TF-IDF.',
                'Similarité fondée sur des trigrammes de caractères.',
              ],
            },
            {
              title: 'Évaluation statistique des regroupements',
              items: [
                'Intra-group similarity : mesure de la cohésion interne des enregistrements rattachés à un même groupe.',
                'Inter-group separability : identification de groupes distincts présentant des similarités élevées (risque de sous-regroupement).',
                'Calcul d’indicateurs statistiques : moyenne, médiane, écart-type, coefficient de variation, distributions de scores, détection des valeurs atypiques et analyse des paires problématiques.',
                'Comparaison complémentaire avec un sous-ensemble de référence étiqueté manuellement.',
              ],
            },
            {
              title: 'Analyse, KPI & Reporting technique',
              items: [
                "Définition et production de KPI d'évaluation, visualisation des distributions en Python et analyse des anomalies.",
                "Suivi des performances techniques : mesure des temps d'exécution et de la consommation mémoire.",
                "Documentation complète de l'architecture, des méthodes, des hypothèses et des limites, et présentation des résultats à l'équipe.",
              ],
            },
          ],
          deliverablesAndResults: [
            "Framework Python modulaire, réutilisable et protocole d'expérimentation reproductible.",
            "Fichiers de résultats structurés, indicateurs statistiques et visualisations pour l'analyse fine des regroupements.",
            "Documentation technique complète remise à l'équipe AML IT pour faciliter la reprise et les évolutions futures (études amont en vue d'une éventuelle industrialisation).",
          ],
          statusNote:
            "Livrable remis à l'équipe AML IT Detection Team avec sa documentation technique pour de futurs développements (code développé dans l'environnement interne BNP Paribas).",
          technologies: [
            'Python',
            'pandas',
            'Polars',
            'NumPy',
            'scikit-learn',
            'SciPy',
            'RapidFuzz',
            'Dataiku',
            'VS Code',
          ],
        },
        {
          code: 'PROJET 02',
          title: 'ISO 20022 Data Modeling — Data Functional Requirements (DFR)',
          subtitle:
            'Analyse des standards bancaires SWIFT MT / ISO 20022 et conception d’un modèle de données relationnel cible pour les systèmes AML',
          workModeBadge: 'Second projet · Réalisation collaborative en binôme',
          priority: false,
          context:
            "Dans le domaine bancaire, les flux de paiements proviennent de multiples fournisseurs et reposent sur des formats hétérogènes. L'équipe AML IT devait définir une structure commune permettant de conserver l'ensemble des informations indispensables à la détection, à l'investigation et à la traçabilité AML, à partir de l'analyse des messages historiques SWIFT MT et des standards ISO 20022.",
          objective:
            "Participer en binôme à la conception d'un modèle de données cible normalisé destiné à standardiser la représentation des informations de paiement utilisées par les systèmes AML.",
          metrics: [
            {
              label: 'Messages ISO 20022 analysés',
              value: '24 versions',
              detail: 'Familles pain, pacs, camt et head & messages SWIFT MT',
            },
            {
              label: 'Occurrences inventoriées',
              value: '54 855',
              detail: 'Champs extraits et analysés depuis les schémas XSD',
            },
            {
              label: 'Occurrences retenues',
              value: '40 342',
              detail: 'Dont 38 912 occurrences avec un mapping direct',
            },
            {
              label: 'Modèle relationnel cible',
              value: '14 tables',
              detail: '338 champs métier (363 colonnes physiques au total)',
            },
          ],
          sections: [
            {
              title: 'Analyse des standards bancaires SWIFT MT & ISO 20022',
              items: [
                'Étude des messages SWIFT MT103, MT202, MT202 COV, MT54x et MT910.',
                'Analyse approfondie des familles ISO 20022 : pain, pacs, camt et head.',
                'Exploration des schémas XML/XSD et identification des attributs pertinents pour les besoins de détection et de traçabilité AML.',
              ],
            },
            {
              title: 'Extraction automatisée & Mapping',
              items: [
                "Développement de scripts Python d'extraction de champs XSD et analyse des chemins XML, types et cardinalités.",
                'Exploitation de pandas pour structurer les analyses tabulaires à grande échelle.',
                'Construction des mappings entre les champs sources et le modèle cible, assortie de contrôles de cohérence et de traçabilité.',
              ],
            },
            {
              title: 'Modélisation relationnelle normalisée',
              items: [
                "Participation à la conception d'un modèle relationnel normalisé de 14 tables (338 champs métier, 363 colonnes physiques en incluant les champs techniques).",
                'Identification et structuration des entités principales et de leurs relations : paiements, parties, comptes, agents, frais et événements.',
                'Contribution à la formalisation des règles de mapping inter-formats.',
              ],
            },
            {
              title: 'Agents IA & Validation déterministe et humaine',
              items: [
                "Utilisation d'OpenCode et d'agents IA connectés aux modèles internes de BNP Paribas pour assister l'exploration documentaire.",
                "Rédaction d'instructions et de prompts structurés, et participation au développement des scripts et règles de classement.",
                'Vérification rigoureuse et déterministe des sorties générées par les agents à partir des schémas XSD et des règles métier, complétée par une revue croisée systématique en binôme.',
              ],
            },
          ],
          deliverablesAndResults: [
            'Analyse consolidée en binôme de 24 versions de messages ISO 20022 (54 855 occurrences inventoriées, 40 342 retenues, 38 912 mappées directement).',
            'Spécification d’un modèle de données cible de 14 tables couvrant 338 champs métier (363 colonnes physiques).',
            'Présentation du modèle et de sa documentation aux équipes en vue d’une validation métier préalable à une éventuelle exploitation opérationnelle.',
          ],
          statusNote:
            "Résultats quantitatifs issus du travail réalisé en binôme. Le modèle et sa documentation ont été présentés aux équipes pour validation métier.",
          technologies: [
            'Python',
            'pandas',
            'XML',
            'XSD',
            'ISO 20022',
            'SWIFT MT/MX',
            'Modélisation relationnelle',
            'OpenCode',
            'Agents IA',
          ],
        },
      ],
    },
  ] satisfies ExperienceItem[],

  certifications: [
    {
      title: 'IBM Data Science',
      issuer: 'IBM',
      category: 'Data Science & Méthodologie',
    },
    {
      title: 'Applied Data Science Capstone',
      issuer: 'IBM',
      category: 'Projet Appliqué End-to-End',
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      category: 'Machine Learning',
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'IBM',
      category: 'Bases de Données & SQL',
    },
    {
      title: 'Generative AI: Elevate Your Data Science Career',
      issuer: 'IBM',
      category: 'Intelligence Artificielle Générative',
    },
  ] satisfies CertificationItem[],

  skillsByDomain: [
    {
      id: 'ml-dl',
      code: 'DOM-01',
      title: 'Machine Learning & Deep Learning',
      description:
        'Conception, entraînement et évaluation de modèles prédictifs et de vision par ordinateur.',
      skills: [
        'Python',
        'TensorFlow / Keras',
        'scikit-learn',
        'Réseaux de neurones convolutifs (CNN)',
        'YOLOv8-Face',
        'MobileNetV2 (Transfer Learning)',
        'OpenCV',
        'Régression & Random Forest',
        'Augmentation de données',
        'IA Générative appliquée à la Data Science',
      ],
    },
    {
      id: 'big-data',
      code: 'DOM-02',
      title: 'Data Engineering & Big Data',
      description:
        'Pipelines de données distribués, analyse de graphes à grande échelle et traitement de flux.',
      skills: [
        'Apache Spark',
        'Scala',
        'Spark SQL',
        'Spark Streaming',
        'GraphX (Analyse de graphes)',
        'Spark MLlib',
        'Détection d’anomalies en flux',
      ],
    },
    {
      id: 'math-signal',
      code: 'DOM-03',
      title: 'Mathématiques appliquées & Traitement du signal',
      description:
        'Modélisation mathématique, représentations temps-fréquence et évaluation quantitative.',
      skills: [
        'Transformée de Fourier rapide (FFT)',
        'Transformée de Fourier à court terme (STFT)',
        'Séparation harmonique / percussive (HPSS)',
        'NumPy',
        'SciPy',
        'Librosa',
        'Métriques SDR, SIR, SAR',
        'Évaluation statistique (Macro F1-score, Accuracy)',
      ],
    },
    {
      id: 'software-db',
      code: 'DOM-04',
      title: 'Développement logiciel & Bases de données',
      description:
        'Architecture d’applications robustes, modélisation objet, sécurité des accès et persistance.',
      skills: [
        'Python',
        'Java',
        'Scala',
        'Django',
        'JavaFX',
        'SQL & Bases de données relationnelles',
        'MySQL',
        'JDBC',
        'Architecture UML',
        'Contrôle d’accès RBAC (4 niveaux)',
        'HTML / CSS',
      ],
    },
    {
      id: 'analysis-tools',
      code: 'DOM-05',
      title: 'Outils d’analyse et de visualisation',
      description:
        'Exploitation analytique, restitution de résultats expérimentaux et tableaux de bord applicatifs.',
      skills: [
        'Visualisation scientifique & analytique Python',
        'Interfaces de supervision IoT (Django)',
        'Analyse exploratoire de données (EDA)',
        'Comparaison expérimentale de modèles',
        'Prototypage et documentation technique',
      ],
    },
  ] satisfies SkillCategory[],

  languages: [
    { name: 'Français', level: 'Langue principale / Courant' },
    { name: 'Anglais', level: 'Professionnel & technique' },
  ],
};
