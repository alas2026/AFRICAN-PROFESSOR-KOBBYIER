export interface ConsultationService {
  id: string;
  icon: string;
  title: {
    en: string;
    fr: string;
  };
  category: {
    en: string;
    fr: string;
  };
  shortDescription: {
    en: string;
    fr: string;
  };
  detailedDescription: {
    en: string;
    fr: string;
  };
  clientConcerns: {
    en: string[];
    fr: string[];
  };
}

export const CONSULTATION_SERVICES: ConsultationService[] = [
  {
    id: "love-relationships",
    icon: "❤️",
    title: {
      en: "Love & Relationships",
      fr: "Amour & Sentiments"
    },
    category: {
      en: "Personal & Emotional",
      fr: "Vie Affective"
    },
    shortDescription: {
      en: "Guidance on relationship dynamics, mutual understanding, emotional harmony, and overcoming marital tension.",
      fr: "Éclairage sur les dynamiques de couple, l'harmonie affective, le retour à l'entente et les tensions conjugales."
    },
    detailedDescription: {
      en: "Prof. Kobbyier provides personalized spiritual consultation for individuals facing obstacles in their romantic unions, marriage uncertainties, communication breakdowns, or emotional separation.",
      fr: "Le Professeur Kobbyier offre une consultation spirituelle personnalisée pour surmonter les crises conjugales, les ruptures de communication, l'éloignement d'un partenaire et le renforcement des liens amoureux."
    },
    clientConcerns: {
      en: [
        "Navigating relationship crises and doubts",
        "Understanding partner energies & intentions",
        "Strengthening commitment and mutual trust",
        "Resolving recurring misunderstandings and conflicts"
      ],
      fr: [
        "Surmonter les crises et doutes au sein du couple",
        "Comprendre les intentions et énergies du partenaire",
        "Renforcer la fidélité, l'engagement et la confiance mutuelle",
        "Apaiser les conflits récurrents et les malentendus"
      ]
    }
  },
  {
    id: "business-career",
    icon: "💼",
    title: {
      en: "Business & Career",
      fr: "Affaires & Travail"
    },
    category: {
      en: "Vocation & Enterprise",
      fr: "Vie Professionnelle"
    },
    shortDescription: {
      en: "Spiritual insight into professional crossroads, business opportunities, stagnant enterprises, and workplace decisions.",
      fr: "Clarté spirituelle pour vos choix de carrière, projets commerciaux, déblocage d'entreprises et ambiance professionnelle."
    },
    detailedDescription: {
      en: "For entrepreneurs, professionals, and job seekers looking for spiritual clarity on career pathways, business partnerships, professional stagnation, and financial enterprise decisions.",
      fr: "Pour entrepreneurs, cadres, commerçants ou personnes en recherche d'emploi souhaitant identifier les freins invisibles, saisir de nouvelles opportunités et clarifier leurs choix d'affaires."
    },
    clientConcerns: {
      en: [
        "Career stagnation or crossroads transition",
        "Navigating business competition & partnership alignment",
        "Decision-making on commercial ventures",
        "Revitalizing personal drive and motivation"
      ],
      fr: [
        "Stagnation professionnelle ou reconversion",
        "Face à la concurrence et choix d'associés",
        "Prise de décision sur investissements ou commerces",
        "Retrouver dynamisme et réussite dans ses projets"
      ]
    }
  },
  {
    id: "astrology-destiny",
    icon: "🔮",
    title: {
      en: "Astrology & Destiny Reading",
      fr: "Astrologie & Lecture de Destinée"
    },
    category: {
      en: "Astrological Insight",
      fr: "Astronomie Spirituelle"
    },
    shortDescription: {
      en: "African astrological charts and planetary readings to reveal innate life cycles, strengths, and spiritual pathways.",
      fr: "Calculs astrologiques traditionnels pour comprendre vos cycles de vie, vos périodes favorables et vos potentiels."
    },
    detailedDescription: {
      en: "Drawing on deep astronomical traditions and destiny calculations, Prof. Kobbyier examines birth patterns and cosmic alignments to shed light on your life's purpose and upcoming favorable periods.",
      fr: "Issu d'une longue tradition d'astronomie sacrée, le Professeur Kobbyier étudie vos alignements pour éclairer votre mission de vie et identifier les moments propices aux grandes décisions."
    },
    clientConcerns: {
      en: [
        "Life path and purpose discovery",
        "Favorable periods for major life decisions",
        "Understanding cyclical challenges",
        "Personal strengths and celestial alignments"
      ],
      fr: [
        "Découverte de sa voie et mission de vie",
        "Périodes favorables pour entreprendre",
        "Compréhension des cycles d'épreuves récurrentes",
        "Énergies astrales personnelles et équilibre"
      ]
    }
  },
  {
    id: "spiritual-guidance",
    icon: "✨",
    title: {
      en: "Spiritual Guidance",
      fr: "Guidance Spirituelle"
    },
    category: {
      en: "Spiritual Wellbeing",
      fr: "Éveil & Sérénité"
    },
    shortDescription: {
      en: "Individual spiritual support and orientation for personal growth, inner tranquility, and navigating moral crossroads.",
      fr: "Soutien et orientation spirituelle pour retrouver la sérénité intérieure, l'harmonie et surmonter le désarroi moral."
    },
    detailedDescription: {
      en: "A supportive sanctuary for deep spiritual counseling. Prof. Kobbyier assists clients in reconnecting with their inner balance, resolving existential turbulence, and cultivating peace of mind.",
      fr: "Un espace bienveillant d'écoute et de discernement pour surmonter le vide intérieur, se reconnecter à son essence et retrouver la paix de l'esprit."
    },
    clientConcerns: {
      en: [
        "Personal spiritual awakening & grounding",
        "Restoring inner peace & moral direction",
        "Overcoming feelings of spiritual emptiness",
        "Aligning everyday actions with higher purpose"
      ],
      fr: [
        "Éveil spirituel et ancrage personnel",
        "Restauration de la paix intérieure et morale",
        "Surmonter le sentiment de vide ou de confusion",
        "Harmonisation de ses actes avec sa conscience"
      ]
    }
  },
  {
    id: "clairvoyance-future",
    icon: "👁️",
    title: {
      en: "Clairvoyance & Future Guidance",
      fr: "Voyance & Clairvoyance"
    },
    category: {
      en: "Intuitive Seership",
      fr: "Vision Spirituelle"
    },
    shortDescription: {
      en: "Clairvoyant perception and visionary foresight to prepare you for upcoming developments and crossroads.",
      fr: "Vision et perceptions intuitives pour anticiper les tournants majeurs et éclairer les situations complexes."
    },
    detailedDescription: {
      en: "As an experienced seer, Prof. Kobbyier utilizes traditional clairvoyance to explore unseen dynamics surrounding current situations, helping clients anticipate potential future developments.",
      fr: "En qualité de voyant reconnu, le Professeur Kobbyier sonde les influences invisibles d'une situation pour vous apporter des réponses claires sur les événements à venir."
    },
    clientConcerns: {
      en: [
        "Clarity on impending major choices",
        "Uncovering unseen factors in complex situations",
        "Insight into future family or personal events",
        "Preparing for personal turning points"
      ],
      fr: [
        "Clarté sur des choix déterminants à venir",
        "Compréhension des aspects cachés d'une situation",
        "Perspectives sur l'évolution familiale ou personnelle",
        "Préparation aux carrefours importants de l'existence"
      ]
    }
  },
  {
    id: "legal-judicial",
    icon: "⚖️",
    title: {
      en: "Legal & Judicial Concerns",
      fr: "Affaires Juridiques & Conflits"
    },
    category: {
      en: "Consultation & Calmness",
      fr: "Soutien & Clarté"
    },
    shortDescription: {
      en: "Spiritual support, moral fortitude, and mental serenity during stressful legal or administrative disputes.",
      fr: "Apaisement, force morale et soutien spirituel lors de litiges, procédures administratives ou conflits judiciaires."
    },
    detailedDescription: {
      en: "Litigation and legal uncertainties create intense mental strain. Prof. Kobbyier offers traditional spiritual consultation to help clients maintain emotional stability, clarity, and perseverance during judicial proceedings. (Note: Spiritual consultation does not substitute for qualified legal representation).",
      fr: "Les litiges provoquent angoisse et épuisement moral. Le praticien apporte un appui spirituel pour conserver lucidité et sérénité. (Note : ce soutien spirituel ne remplace en aucun cas un avocat ou conseil juridique)."
    },
    clientConcerns: {
      en: [
        "Stress management during trials & hearings",
        "Clarity and calm before key legal depositions",
        "Moral endurance through prolonged litigation",
        "Harmonious resolution seeking"
      ],
      fr: [
        "Gestion du stress face aux audiences et procédures",
        "Calme et clarté d'esprit lors d'échéances décisives",
        "Endurance morale dans les litiges longs",
        "Favoriser une issue apaisée"
      ]
    }
  },
  {
    id: "relationship-reconciliation",
    icon: "🤝",
    title: {
      en: "Relationship Reconciliation",
      fr: "Rapprochement & Réconciliation"
    },
    category: {
      en: "Union & Family",
      fr: "Retour Affectif & Entente"
    },
    shortDescription: {
      en: "Consultation focused on soothing bitterness, facilitating mutual forgiveness, and opening pathways to dialogue.",
      fr: "Consultation visant à désamorcer l'amertume, favoriser le pardon mutuel et rouvrir les portes du dialogue."
    },
    detailedDescription: {
      en: "Designed for couples, estranged partners, or family members seeking to heal fractured bonds, rebuild trust, and overcome pride or deep misunderstandings.",
      fr: "Spécifiquement conçu pour les couples ou membres de famille séparés souhaitant renouer le dialogue, restaurer la tendresse et surmonter les rancœurs passées."
    },
    clientConcerns: {
      en: [
        "Rebuilding trust after betrayal or estrangement",
        "Softening resentment between family members",
        "Fostering open and honest dialogue",
        "Long-term harmony preservation"
      ],
      fr: [
        "Rétablir la confiance après éloignement ou rupture",
        "Apaiser les rancunes familiales tenaces",
        "Faciliter la reprise de contact bienveillante",
        "Préserver la paix au foyer sur le long terme"
      ]
    }
  },
  {
    id: "evil-eye-envy",
    icon: "🧿",
    title: {
      en: "Evil Eye & Envy Concerns",
      fr: "Mauvais Œil & Jalousies"
    },
    category: {
      en: "Spiritual Protection",
      fr: "Protection & Purification"
    },
    shortDescription: {
      en: "Traditional African methods and spiritual guidance to address perceived negative intentions, envy, and spiritual heaviness.",
      fr: "Méthodes traditionnelles africaines pour dissiper les ondes négatives, les jalousies et les lourdeurs inexpliquées."
    },
    detailedDescription: {
      en: "Consultation on traditional African practices for dispelling malevolent scrutiny, shielding personal energy from ill-wishers, and purifying one's personal and residential atmosphere.",
      fr: "Étude et conseils spirituels traditionnels pour repousser les influences néfastes, assainir votre cadre de vie et vous protéger des jalousies de l'entourage."
    },
    clientConcerns: {
      en: [
        "Feelings of persistent unexplained negative energy",
        "Dealing with toxic envy in personal or professional circles",
        "Restoring household harmony and peace",
        "Traditional spiritual cleansing methods"
      ],
      fr: [
        "Impression de lourdeur ou d'ondes négatives récurrentes",
        "Jalousies toxiques dans le milieu professionnel ou familial",
        "Purification et harmonie du domicile",
        "Rituels traditionnels de désenvoûtement et protection"
      ]
    }
  },
  {
    id: "traditional-spiritual",
    icon: "🌿",
    title: {
      en: "Traditional Spiritual Consultation",
      fr: "Consultation Spirituelle Traditionnelle"
    },
    category: {
      en: "Ancestral Heritage",
      fr: "Tradition Ancestrale"
    },
    shortDescription: {
      en: "Authentic consultations rooted in time-honored African spiritual science and ancestral wisdom.",
      fr: "Consultations authentiques puisées dans la sagesse ancestrale et la science spirituelle africaine séculaire."
    },
    detailedDescription: {
      en: "Grounded in centuries-old African spiritual methodologies, Prof. Kobbyier applies ancestral knowledge, geomancy, and traditional spiritual diagnostic methods tailored to the seeker's heritage and situation.",
      fr: "Fidèle aux rites ancestraux, le Professeur Kobbyier recourt à la géomancie et aux principes traditionnels pour rétablir l'équilibre énergétique et le lien avec vos racines."
    },
    clientConcerns: {
      en: [
        "Reconnecting with ancestral equilibrium",
        "Traditional energetic diagnostics",
        "Understanding cultural-spiritual roots",
        "Honoring lineage and spiritual balance"
      ],
      fr: [
        "Retrouver l'équilibre et la bénédiction des ancêtres",
        "Diagnostic spirituel traditionnel approfondi",
        "Comprendre ses racines et influences culturelles",
        "Rétablissement de l'harmonie intérieure"
      ]
    }
  },
  {
    id: "misfortune-difficulties",
    icon: "🍀",
    title: {
      en: "Misfortune & Life Difficulties",
      fr: "Malchance & Blocages de Vie"
    },
    category: {
      en: "Life Obstacles",
      fr: "Déblocage de Situation"
    },
    shortDescription: {
      en: "Investigation of repetitive setbacks, chronic misfortune, and spiritual blockages hindering progress.",
      fr: "Analyse des échecs à répétition, de la malchance persistante et des blocages qui freinent votre réussite."
    },
    detailedDescription: {
      en: "When an individual experiences a sequence of unexpected failures, unexplained hurdles, or feeling permanently blocked, Prof. Kobbyier conducts a detailed spiritual inquiry into potential underlying spiritual imbalances.",
      fr: "Si vous avez le sentiment que vos projets échouent systématiquement au dernier moment, le Professeur Kobbyier examine les causes spirituelles sous-jacentes pour dégager votre horizon."
    },
    clientConcerns: {
      en: [
        "Breaking patterns of repetitive setbacks",
        "Identifying unseen spiritual hindrances",
        "Cultivating renewed hope and perseverance",
        "Revitalizing personal momentum"
      ],
      fr: [
        "Briser l'enchaînement des revers inexpliqués",
        "Identifier les blocages invisibles qui vous freinent",
        "Retrouver chance, opportunités et optimisme",
        "Débloquer sa trajectoire personnelle ou financière"
      ]
    }
  },
  {
    id: "personal-problems",
    icon: "💬",
    title: {
      en: "Personal Problems & Life Guidance",
      fr: "Problèmes Personnels & Soutien"
    },
    category: {
      en: "Emotional Support",
      fr: "Écoute Bienveillante"
    },
    shortDescription: {
      en: "Spiritual support and consultation for people experiencing personal or emotional difficulties in everyday life.",
      fr: "Accompagnement spirituel pour les personnes traversant des épreuves personnelles, familiales ou affectives."
    },
    detailedDescription: {
      en: "A compassionate, completely judgment-free space to discuss sensitive personal burdens, emotional dilemmas, and existential disorientation with an experienced practitioner.",
      fr: "Une écoute sans jugement pour confier vos soucis les plus intimes, dissiper la solitude morale et trouver des pistes de réconfort et de clarté."
    },
    clientConcerns: {
      en: [
        "Confidential listening for deep dilemmas",
        "Managing emotional turbulence and loneliness",
        "Objective, compassionate spiritual perspective",
        "Rebuilding personal confidence and self-respect"
      ],
      fr: [
        "Écoute confidentielle de dilemmes délicats",
        "Faire face aux tourments intérieurs et à l'isolement",
        "Regard spirituel bienveillant et apaisant",
        "Retrouver confiance en soi et estime de soi"
      ]
    }
  },
  {
    id: "long-distance",
    icon: "🌍",
    title: {
      en: "Long-Distance Consultation",
      fr: "Consultation à Distance"
    },
    category: {
      en: "Remote Consultations",
      fr: "France & International"
    },
    shortDescription: {
      en: "Complete consultation services conducted via phone or WhatsApp worldwide without requiring travel.",
      fr: "Consultations complètes par téléphone ou WhatsApp dans le monde entier sans nécessité de déplacement."
    },
    detailedDescription: {
      en: "Prof. Kobbyier provides consultations to clients residing across Europe, Africa, the Americas, and worldwide. Through voice calls, WhatsApp messages, and dedicated remote sessions, distance is never a barrier.",
      fr: "Le Professeur Kobbyier consulte pour des personnes résidant en France, Suisse, Belgique, Canada, Afrique et partout ailleurs. Par appels audio ou WhatsApp, la distance ne limite en rien la qualité de la voyance."
    },
    clientConcerns: {
      en: [
        "Remote consultations from home",
        "Time zone flexibility",
        "Private, discrete digital communication",
        "Immediate contact for urgent guidance"
      ],
      fr: [
        "Consultation en toute intimité depuis chez soi",
        "Prise en compte des fuseaux horaires internationaux",
        "Échanges discrets et sécurisés par WhatsApp",
        "Contact rapide pour les situations urgentes"
      ]
    }
  }
];
