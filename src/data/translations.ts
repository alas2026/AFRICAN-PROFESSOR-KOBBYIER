export interface TranslationSchema {
  nav: {
    brand: string;
    home: string;
    about: string;
    services: string;
    howItWorks: string;
    consultation: string;
    contact: string;
    book: string;
    whatsAppNow: string;
  };
  hero: {
    badge: string;
    professorName: string;
    titles: string;
    headline: string;
    supportingText: string;
    tagline: string;
    bookBtn: string;
    whatsAppBtn: string;
    telLabel: string;
    confidentiality: string;
    remote: string;
    tradition: string;
  };
  about: {
    kicker: string;
    title: string;
    portraitLabel: string;
    portraitSub: string;
    portraitCaption: string;
    p1: string;
    p2: string;
    pillars: {
      confidentialityTitle: string;
      confidentialityDesc: string;
      attentionTitle: string;
      attentionDesc: string;
      respectTitle: string;
      respectDesc: string;
      remoteTitle: string;
      remoteDesc: string;
    };
    scheduleBtn: string;
    whatsAppInquire: string;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    healthNoticeTitle: string;
    healthNoticeText: string;
    filters: {
      all: string;
      personal: string;
      vocation: string;
      spiritual: string;
      protection: string;
    };
    learnDetails: string;
    consultBtn: string;
    modalBookArea: string;
    modalWhatsApp: string;
    modalSituations: string;
    specificConcern: string;
    directInquiry: string;
  };
  howItWorks: {
    kicker: string;
    title: string;
    desc: string;
    trustQuestion: string;
    trustSub: string;
    bookBtn: string;
    whatsAppBtn: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      action: string;
    }[];
  };
  longDistance: {
    kicker: string;
    title: string;
    desc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    startBtn: string;
    connectWhatsApp: string;
  };
  whyChoose: {
    kicker: string;
    title: string;
    desc: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  payment: {
    title: string;
    suppliedText: string;
    clarifyText: string;
    contactBtn: string;
    inquireWhatsApp: string;
    disclaimerHeader: string;
    disclaimerQuote: string;
    viewDisclaimer: string;
    viewPrivacy: string;
    bankTransfer: {
      title: string;
      intro: string;
      accountHolderLabel: string;
      accountHolderValue: string;
      ibanLabel: string;
      ibanValue: string;
      copyBtn: string;
      copiedSuccess: string;
      verifyNotice: string;
      confirmBtn: string;
      confirmWhatsAppMessage: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    immediateTitle: string;
    directTel: string;
    whatsAppLabel: string;
    callNow: string;
    chatWhatsApp: string;
    bookConsultation: string;
    privacyCardTitle: string;
    privacyCardDesc: string;
    availabilityTitle: string;
    availabilityDesc: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    methodLabel: string;
    methodWhatsApp: string;
    methodPhone: string;
    areaLabel: string;
    timeLabel: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    timeUrgent: string;
    concernLabel: string;
    concernPlaceholder: string;
    notice: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMsg: string;
    directWhatsAppBtn: string;
    submitAnother: string;
    validation: {
      name: string;
      phone: string;
      country: string;
      concern: string;
    };
  };
  footer: {
    role: string;
    titles: string;
    quote: string;
    desc: string;
    navTitle: string;
    contactTitle: string;
    worldwideNotice: string;
    rights: string;
    disclaimer: string;
    privacy: string;
  };
  legal: {
    titleDisclaimer: string;
    titlePrivacy: string;
    closeBtn: string;
    understandBtn: string;
    disclaimer: {
      title: string;
      quote: string;
      scopeTitle: string;
      scopeDesc: string;
      healthTitle: string;
      healthDesc: string;
      legalTitle: string;
      legalDesc: string;
      paymentTitle: string;
      paymentDesc: string;
    };
    privacy: {
      title: string;
      intro: string;
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
  };
}

export const TRANSLATIONS: Record<"en" | "fr", TranslationSchema> = {
  en: {
    nav: {
      brand: "PROFESSOR KOBBYIER",
      home: "Home",
      about: "About",
      services: "Services",
      howItWorks: "How It Works",
      consultation: "Consultation",
      contact: "Contact",
      book: "Book",
      whatsAppNow: "WhatsApp: 920 755 945"
    },
    hero: {
      badge: "African Spiritual Science & Sacred Astronomy",
      professorName: "AFRICAN PROFESSOR KOBBYIER",
      titles: "Grande · Astrologer · Seer · African Spiritual Scientist",
      headline: "Guidance, Spiritual Consultation & Clairvoyant Services",
      supportingText: "Prof. Kobbyier provides spiritual consultation, astrology, clairvoyance, and traditional spiritual services for people seeking guidance through difficult situations.",
      tagline: "“YOUR FRANKNESS, YOUR COMPETENCE, YOUR SERIOUSNESS WILL HELP YOU OVERCOME ALL YOUR PROBLEMS.”",
      bookBtn: "BOOK A CONSULTATION",
      whatsAppBtn: "WHATSAPP NOW",
      telLabel: "Tel.:",
      confidentiality: "Strict Confidentiality",
      remote: "Global Remote Consultations",
      tradition: "Ancestral Wisdom & Astrology"
    },
    about: {
      kicker: "Ancestral Knowledge & Modern Clarity",
      title: "Meet African Professor Kobbyier",
      portraitLabel: "Professor Kobbyier",
      portraitSub: "Grande · Seer · African Spiritual Scientist",
      portraitCaption: "Dedicated one-on-one private sessions & strict confidentiality",
      p1: "Professor Kobbyier is an experienced African spiritual practitioner specializing in astrology, clairvoyance, spiritual consultation, and traditional spiritual practices. Drawing on ancestral knowledge passed down through generations, he combines his understanding of life cycles, celestial influences, and traditional spiritual wisdom to provide guidance and support to individuals facing uncertainty, personal transitions, and life’s challenges.",
      p2: "According to the practitioner, every human being carries an innate destiny path that can occasionally be clouded by unforeseen life setbacks, emotional turmoil, or unseen spiritual burdens. Prof. Kobbyier’s work is characterized by solemn dedication, frank evaluation, and profound respect for every client’s personal journey.",
      pillars: {
        confidentialityTitle: "Absolute Confidentiality",
        confidentialityDesc: "Your personal circumstances, discussions, and identity are safeguarded with strict professional discretion.",
        attentionTitle: "Individual Attention",
        attentionDesc: "Personalized consultation focused entirely on your unique situation rather than generic assessments.",
        respectTitle: "Serious & Respectful Approach",
        respectDesc: "Truthfulness, competence, and dignity form the foundation of every consultation dialogue.",
        remoteTitle: "Remote & Long-Distance",
        remoteDesc: "Accessible from anywhere in the world via confidential phone and WhatsApp consultations."
      },
      scheduleBtn: "Schedule A Private Session",
      whatsAppInquire: "Inquire on WhatsApp →"
    },
    services: {
      kicker: "Spiritual Counsel & Seership",
      title: "Areas of Consultation",
      intro: "Prof. Kobbyier provides personalized spiritual consultation, astrology readings, and traditional spiritual guidance across key spheres of human existence.",
      healthNoticeTitle: "Note on Health & Wellbeing:",
      healthNoticeText: "Spiritual support and consultation are offered for people experiencing personal or emotional difficulties. Spiritual services do not claim to medically treat, diagnose, or cure clinical diseases.",
      filters: {
        all: "All Areas",
        personal: "Love & Relationships",
        vocation: "Business & Career",
        spiritual: "Astrology & Seership",
        protection: "Protection & Traditional"
      },
      learnDetails: "Learn Details",
      consultBtn: "Consult",
      modalBookArea: "Book Consultation for this Area",
      modalWhatsApp: "WhatsApp",
      modalSituations: "Common Situations Clients Seek Guidance For:",
      specificConcern: "Have a specific concern not listed above? Prof. Kobbyier listens to all genuine personal situations with confidentiality.",
      directInquiry: "Direct WhatsApp Inquiry: 920 755 945"
    },
    howItWorks: {
      kicker: "Consultation Protocol",
      title: "How It Works",
      desc: "A discreet, straightforward 4-step process designed to ensure clarity, mutual respect, and tailored spiritual attention from the very first contact.",
      trustQuestion: "Prepared to discuss your personal situation in complete privacy?",
      trustSub: "Prof. Kobbyier reviews inquiries personally with sincerity and confidentiality.",
      bookBtn: "Book Consultation",
      whatsAppBtn: "WhatsApp Now",
      steps: [
        {
          num: "01",
          title: "Contact",
          desc: "Call or message Prof. Kobbyier directly via WhatsApp (920 755 945) or telephone (920 370 153) to initiate contact.",
          action: "Call or WhatsApp"
        },
        {
          num: "02",
          title: "Consultation",
          desc: "Explain your situation privately and honestly in a confidential, supportive, and non-judgmental environment.",
          action: "Speak in Private"
        },
        {
          num: "03",
          title: "Guidance",
          desc: "Receive a personalized spiritual consultation, destiny analysis, and tailored guidance addressing your concerns.",
          action: "Receive Insight"
        },
        {
          num: "04",
          title: "Follow-Up",
          desc: "Continue respectful communication according to the agreed consultation arrangement and spiritual evaluation.",
          action: "Continuous Support"
        }
      ]
    },
    longDistance: {
      kicker: "Worldwide Accessibility",
      title: "Consultations From Anywhere",
      desc: "Distance is never an impediment to spiritual perception. Clients can consult Prof. Kobbyier remotely through WhatsApp voice notes, live telephone calls, or secure private messaging—without needing to travel or visit in person.",
      card1Title: "Direct Phone Calls",
      card1Desc: "Real-time spoken dialogue where you can detail your questions and receive immediate astrological and spiritual responses.",
      card2Title: "WhatsApp Audio & Chat",
      card2Desc: "Discrete, encrypted voice notes and messaging for clients across different international time zones.",
      card3Title: "Equal Depth & Efficacy",
      card3Desc: "Traditional African spiritual diagnostics and destiny readings do not diminish across distance; energetic clarity remains intact.",
      startBtn: "START YOUR CONSULTATION",
      connectWhatsApp: "Connect on WhatsApp"
    },
    whyChoose: {
      kicker: "Guiding Principles",
      title: "Why Choose Professor Kobbyier",
      desc: "Spiritual counseling grounded in frankness, competence, and profound respect for every client’s individual life journey.",
      items: [
        {
          title: "Confidential Consultation",
          desc: "Every discussion, personal circumstance, and identity remains strictly private, held in the highest standard of spiritual discretion."
        },
        {
          title: "Personal Attention",
          desc: "No generic advice or mass readings. Each client receives devoted one-on-one time tailored directly to their specific circumstances."
        },
        {
          title: "African Spiritual Tradition",
          desc: "Authentic, time-tested knowledge derived from centuries of African spiritual science, ancestral wisdom, and sacred traditions."
        },
        {
          title: "Astrology & Clairvoyance",
          desc: "Clear and deep perception combining celestial planetary calculations with intuitive seership for precise life perspective."
        },
        {
          title: "Remote Consultations",
          desc: "Accessible anywhere in the world via WhatsApp and direct telephone—receive guidance directly from the comfort of your home."
        },
        {
          title: "Professional & Respectful Service",
          desc: "A dignified, solemn, and non-judgmental approach honoring each person's culture, beliefs, and human dignity."
        }
      ]
    },
    payment: {
      title: "Consultation & Payment",
      suppliedText: "“Payment arrangements can be discussed directly with Professor Kobbyier before beginning a consultation. Any claim regarding payment after results should be understood as the practitioner’s stated policy and should be confirmed directly before proceeding.”",
      clarifyText: "Every consultation inquiry is treated transparently. Clarify your specific expectations, required time, and consultation terms directly with Prof. Kobbyier prior to initiating services.",
      contactBtn: "VIEW CONTACT OPTIONS",
      inquireWhatsApp: "INQUIRE ON WHATSAPP",
      disclaimerHeader: "Official Client Notice & Ethical Disclaimer",
      disclaimerQuote: "“Spiritual consultation and traditional spiritual practices are offered for personal, cultural, and spiritual purposes. They should not be considered a substitute for qualified medical, psychological, legal, or financial advice. Results are not guaranteed, and individual experiences may vary.”",
      viewDisclaimer: "View Full Ethical Disclaimer & Terms",
      viewPrivacy: "Client Data Privacy Policy",
      bankTransfer: {
        title: "Bank Transfer",
        intro: "For clients who prefer to make payments by bank transfer, please use the official banking details provided below.",
        accountHolderLabel: "Account Holder",
        accountHolderValue: "Samsoudine Gassama",
        ibanLabel: "IBAN",
        ibanValue: "PT50001000005777255000115",
        copyBtn: "Copy IBAN",
        copiedSuccess: "IBAN copied successfully",
        verifyNotice: "Please verify the payment details before making any transfer.",
        confirmBtn: "Payment Confirmation / Contact Us",
        confirmWhatsAppMessage: "Hello Prof. Kobbyier, I have completed a bank transfer payment and would like to confirm my consultation details."
      }
    },
    contact: {
      kicker: "Confidential Inquiries",
      title: "Contact Professor Kobbyier",
      subtitle: "Reach out directly by telephone or WhatsApp, or complete the confidential consultation request form below for personal guidance.",
      immediateTitle: "Immediate Direct Contact",
      directTel: "Direct Telephone",
      whatsAppLabel: "WhatsApp Consultation",
      callNow: "CALL NOW",
      chatWhatsApp: "CHAT ON WHATSAPP",
      bookConsultation: "BOOK A CONSULTATION",
      privacyCardTitle: "Strict Privacy Assurance:",
      privacyCardDesc: "Submitted information should be treated confidentially. Prof. Kobbyier handles all communications personally; client records, identity, and shared dilemmas remain strictly protected and are never shared.",
      availabilityTitle: "Consultation Availability",
      availabilityDesc: "Daily sessions available by appointment. Inquiries received via WhatsApp are answered in order of arrival, typically within a few hours.",
      formTitle: "Book a Consultation Session",
      formDesc: "Complete the request below to present your situation directly to Professor Kobbyier.",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Samuel Mensah",
      phoneLabel: "Phone / WhatsApp Number *",
      phonePlaceholder: "e.g. +351 920 755 945",
      countryLabel: "Country / City *",
      countryPlaceholder: "e.g. Portugal, France, UK, Angola, USA",
      methodLabel: "Preferred Contact Method",
      methodWhatsApp: "WhatsApp (Voice & Text)",
      methodPhone: "Direct Phone Call",
      areaLabel: "Consultation Area",
      timeLabel: "Preferred Consultation Time",
      timeMorning: "Morning (09:00 - 12:00)",
      timeAfternoon: "Afternoon (12:00 - 17:00)",
      timeEvening: "Evening (17:00 - 21:00)",
      timeUrgent: "Urgent / First Available Window",
      concernLabel: "Brief Description of Your Concern *",
      concernPlaceholder: "Briefly describe your situation, questions, or the difficulties you are facing in your relationship, career, or spiritual life...",
      notice: "Confidentiality Notice: Submitted information is treated with strict professional discretion and is never disclosed to any third party.",
      submitBtn: "Submit Consultation Request",
      submittingBtn: "Registering confidential request...",
      successTitle: "Request Received in Confidence",
      successMsg: "Your consultation request has been registered. You can also send this summary directly to Prof. Kobbyier via WhatsApp below.",
      directWhatsAppBtn: "Send Directly via WhatsApp",
      submitAnother: "Submit Another Request",
      validation: {
        name: "Please enter your full name",
        phone: "Please provide a valid phone or WhatsApp number",
        country: "Please indicate your country or location",
        concern: "Please provide a brief outline of your concern (min 10 characters)"
      }
    },
    footer: {
      role: "African Spiritual Practitioner",
      titles: "Grande · Astrologer · Seer",
      quote: "“Confidential Spiritual Consultation & Guidance”",
      desc: "Offering astrology, clairvoyance, and traditional African spiritual consultation for individuals navigating personal, relational, and vocational crossroads worldwide.",
      navTitle: "Navigation",
      contactTitle: "Direct Contact",
      worldwideNotice: "Consultations available remotely worldwide. Private calls, voice notes, and messaging handled in absolute confidentiality.",
      rights: "All rights reserved.",
      disclaimer: "Disclaimer",
      privacy: "Privacy Policy"
    },
    legal: {
      titleDisclaimer: "Ethical Disclaimer",
      titlePrivacy: "Privacy & Confidentiality",
      closeBtn: "Close",
      understandBtn: "I Understand & Close",
      disclaimer: {
        title: "Full Ethical & Practice Disclaimer",
        quote: "“Spiritual consultation and traditional spiritual practices are offered for personal, cultural, and spiritual purposes. They should not be considered a substitute for qualified medical, psychological, legal, or financial advice. Results are not guaranteed, and individual experiences may vary.”",
        scopeTitle: "Scope of Services",
        scopeDesc: "African Professor Kobbyier provides consultations based on traditional African spiritual knowledge, astrology, and clairvoyant insight. All assessments, readings, and traditional practices reflect spiritual, philosophical, and cultural perspectives.",
        healthTitle: "Medical & Psychological Health",
        healthDesc: "No consultation or spiritual recommendation is intended to diagnose, cure, mitigate, or treat physiological or clinical mental illnesses. Individuals suffering from clinical conditions or emotional crises should always consult licensed medical practitioners or therapists.",
        legalTitle: "Legal & Financial Matters",
        legalDesc: "Guidance offered regarding business, career, or legal proceedings represents spiritual orientation for personal morale and discernment; it does not constitute licensed legal, accounting, investment, or banking advice.",
        paymentTitle: "Payment Terms",
        paymentDesc: "Payment arrangements can be discussed directly with Professor Kobbyier before beginning a consultation. Any claim regarding payment after results should be understood as the practitioner’s stated policy and should be confirmed directly before proceeding."
      },
      privacy: {
        title: "Client Data Protection & Confidentiality",
        intro: "Respect for your identity and private life is fundamental. All interactions between clients and Professor Kobbyier are governed by strict confidentiality:",
        p1Title: "Personal Information",
        p1Desc: "Names, contact numbers, and consultation descriptions are utilized exclusively for direct communication and spiritual evaluation between you and the practitioner.",
        p2Title: "No Data Sharing",
        p2Desc: "Your information is never sold, shared, rented, or made accessible to third-party marketing companies.",
        p3Title: "Encrypted Channels",
        p3Desc: "Consultations conducted via WhatsApp utilize end-to-end encryption for voice calls and text messaging.",
        p4Title: "Right to Deletion",
        p4Desc: "You may at any point request the deletion of your contact records by informing Professor Kobbyier directly via WhatsApp or phone."
      }
    }
  },
  fr: {
    nav: {
      brand: "PROFESSEUR KOBBYIER",
      home: "Accueil",
      about: "À Propos",
      services: "Domaines",
      howItWorks: "Fonctionnement",
      consultation: "Tarifs & Modalités",
      contact: "Contact",
      book: "Réserver",
      whatsAppNow: "WhatsApp : 920 755 945"
    },
    hero: {
      badge: "Science Spirituelle Africaine & Astronomie Sacrée",
      professorName: "PROFESSEUR AFRICAIN KOBBYIER",
      titles: "Grand · Astrologue · Voyant · Savant Spirituel Africain",
      headline: "Orientation, Consultation Spirituelle & Voyance",
      supportingText: "Le Professeur Kobbyier offre des consultations spirituelles, l'astrologie, la voyance et des pratiques traditionnelles pour guider les personnes traversant des épreuves difficiles.",
      tagline: "« VOTRE FRANCHISE, VOTRE COMPÉTENCE, VOTRE SÉRIEUX VOUS AIDERONT À SURMONTER TOUS VOS PROBLÈMES. »",
      bookBtn: "PRENDRE RENDEZ-VOUS",
      whatsAppBtn: "WHATSAPP DIRECT",
      telLabel: "Tél. :",
      confidentiality: "Discrétion Absolue",
      remote: "Consultations à Distance Monde",
      tradition: "Sagesse Ancestrale & Astrologie"
    },
    about: {
      kicker: "Savoir Ancestral & Écoute Attentive",
      title: "Faites Connaissance avec le Professeur Kobbyier",
      portraitLabel: "Professeur Kobbyier",
      portraitSub: "Grand · Voyant · Savant Spirituel Africain",
      portraitCaption: "Séances individuelles privées & discrétion absolue",
      p1: "Le Professeur Kobbyier est un praticien spirituel africain expérimenté, spécialisé en astrologie, voyance, consultation spirituelle et pratiques spirituelles traditionnelles. S'appuyant sur des savoirs ancestraux transmis de génération en génération, il associe sa compréhension des cycles de vie, des influences célestes et de la sagesse spirituelle traditionnelle pour guider et accompagner les personnes confrontées aux incertitudes, transitions personnelles et défis de la vie.",
      p2: "Selon le praticien, chaque être humain possède une voie de destinée qui peut être entravée par des blocages imprévus, des tourments affectifs ou des difficultés invisibles. Son approche repose sur un engagement sincère, un diagnostic sans complaisance et un respect profond de chaque personne.",
      pillars: {
        confidentialityTitle: "Confidentialité Absolue",
        confidentialityDesc: "Vos situations privées, confidences et coordonnées sont protégées par le secret professionnel le plus rigoureux.",
        attentionTitle: "Attention Personnalisée",
        attentionDesc: "Une écoute attentive dédiée à votre situation personnelle, sans réponses préconçues.",
        respectTitle: "Sérieux & Bienveillance",
        respectDesc: "Franchise, compétence et dignité sont au cœur de chaque échange.",
        remoteTitle: "Consultations à Distance",
        remoteDesc: "Accessible partout dans le monde par téléphone et WhatsApp en toute simplicité."
      },
      scheduleBtn: "Prendre un Rendez-vous Privé",
      whatsAppInquire: "Écrire sur WhatsApp →"
    },
    services: {
      kicker: "Conseil Spirituel & Clairvoyance",
      title: "Domaines de Consultation",
      intro: "Le Professeur Kobbyier propose des consultations personnalisées, des lectures astrologiques et une orientation spirituelle traditionnelle dans les étapes clés de votre vie.",
      healthNoticeTitle: "Note sur la santé & le bien-être :",
      healthNoticeText: "Le soutien spirituel s'adresse aux personnes vivant des difficultés personnelles ou émotionnelles. Les consultations ne se substituent aucunement à un suivi médical ou psychologique qualifié.",
      filters: {
        all: "Tous les Domaines",
        personal: "Amour & Sentiments",
        vocation: "Affaires & Travail",
        spiritual: "Astrologie & Voyance",
        protection: "Protection & Tradition"
      },
      learnDetails: "En savoir plus",
      consultBtn: "Consulter",
      modalBookArea: "Consulter sur ce Domaine",
      modalWhatsApp: "WhatsApp",
      modalSituations: "Situations fréquentes pour lesquelles les personnes consultent :",
      specificConcern: "Vous avez une préoccupation particulière non listée ? Le Professeur Kobbyier étudie chaque situation avec discrétion.",
      directInquiry: "Contact WhatsApp direct : 920 755 945"
    },
    howItWorks: {
      kicker: "Démarche et Étapes",
      title: "Fonctionnement de la Consultation",
      desc: "Un processus simple et discret en 4 étapes garantissant clarté, respect mutuel et écoute personnalisée dès votre premier contact.",
      trustQuestion: "Prêt à exposer votre situation en toute intimité ?",
      trustSub: "Le Professeur Kobbyier traite personnellement chaque message avec sincérité et bienveillance.",
      bookBtn: "Réserver une Consultation",
      whatsAppBtn: "Écrire sur WhatsApp",
      steps: [
        {
          num: "01",
          title: "Prise de Contact",
          desc: "Appelez ou envoyez un message à Prof. Kobbyier sur WhatsApp (920 755 945) ou par téléphone (920 370 153).",
          action: "Appel ou WhatsApp"
        },
        {
          num: "02",
          title: "Exposé Privé",
          desc: "Expliquez votre situation en toute franchise et confidentialité dans un cadre bienveillant et sans jugement.",
          action: "Échange en Privé"
        },
        {
          num: "03",
          title: "Guidance & Analyse",
          desc: "Bénéficiez d'une analyse astrologique, d'une voyance personnalisée et de conseils adaptés à vos interrogations.",
          action: "Recevoir l'Éclairage"
        },
        {
          num: "04",
          title: "Suivi & Échange",
          desc: "Poursuivez les échanges selon les modalités convenues pour le suivi de votre situation.",
          action: "Accompagnement Suivi"
        }
      ]
    },
    longDistance: {
      kicker: "Accessible dans le Monde Entier",
      title: "Consultations à Distance de Partout",
      desc: "La distance n'est aucunement un obstacle à la clairvoyance spirituelle. Vous pouvez consulter le Professeur Kobbyier via notes vocales WhatsApp, appel direct ou message sécurisé, sans avoir besoin de vous déplacer.",
      card1Title: "Appels Téléphoniques Directs",
      card1Desc: "Un dialogue vivant pour poser vos questions et recevoir immédiatement une orientation astrologique et spirituelle.",
      card2Title: "Audio & Messages WhatsApp",
      card2Desc: "Notes vocales et échanges cryptés, adaptés à votre rythme et aux décalages horaires internationaux.",
      card3Title: "Même Rigueur & Profondeur",
      card3Desc: "Les méthodes traditionnelles et l'analyse de destinée conservent toute leur précision spirituelle à distance.",
      startBtn: "COMMENCER VOTRE CONSULTATION",
      connectWhatsApp: "Contacter sur WhatsApp"
    },
    whyChoose: {
      kicker: "Nos Engagements",
      title: "Pourquoi Choisir le Professeur Kobbyier",
      desc: "Une pratique spirituelle guidée par la franchise, la compétence et le respect scrupuleux de votre chemin de vie.",
      items: [
        {
          title: "Consultation Confidentielle",
          desc: "Chaque échange et votre identité restent rigoureusement protégés selon les exigences les plus strictes de la discrétion."
        },
        {
          title: "Attention Personnalisée",
          desc: "Pas de généralités. Chaque personne bénéficie d'une étude dédiée et adaptée à sa situation réelle."
        },
        {
          title: "Tradition Spirituelle Africaine",
          desc: "Un savoir authentique issu de siècles de science spirituelle africaine, de sagesse ancestrale et de coutumes sacrées."
        },
        {
          title: "Astrologie & Clairvoyance",
          desc: "Une perception alliant calculs planétaires et intuition pour éclairer avec justesse vos périodes de vie."
        },
        {
          title: "Consultations à Distance",
          desc: "Accessible partout en France, en Europe, en Afrique et dans le monde par WhatsApp et téléphone."
        },
        {
          title: "Respect & Professionnalisme",
          desc: "Une attitude digne, sérieuse et humaine dans le respect de vos croyances et de votre dignité."
        }
      ]
    },
    payment: {
      title: "Consultation & Modalités de Paiement",
      suppliedText: "« Les modalités de paiement peuvent être discutées directement avec le Professeur Kobbyier avant le début d'une consultation. Toute mention concernant un règlement après résultats doit être comprise comme la politique déclarée du praticien et doit être confirmée directement avant tout engagement. »",
      clarifyText: "Chaque demande est traitée avec transparence. Précisez vos attentes et convenez directement des modalités avec le Professeur Kobbyier avant d'entamer une démarche.",
      contactBtn: "VOIR LES OPTIONS DE CONTACT",
      inquireWhatsApp: "SE RENSEIGNER SUR WHATSAPP",
      disclaimerHeader: "Avertissement Déontologique & Légal",
      disclaimerQuote: "« La consultation spirituelle et les pratiques traditionnelles sont proposées à des fins personnelles, culturelles et spirituelles. Elles ne sauraient en aucun cas se substituer à un avis médical, psychologique, juridique ou financier qualifié. Les résultats ne sont pas garantis et dépendent de la réceptivité de chacun. »",
      viewDisclaimer: "Consulter la charte déontologique complète",
      viewPrivacy: "Politique de confidentialité des données",
      bankTransfer: {
        title: "Virement Bancaire",
        intro: "Pour les clients qui préfèrent effectuer un règlement par virement bancaire, veuillez utiliser les coordonnées bancaires officielles indiquées ci-dessous.",
        accountHolderLabel: "Titulaire du compte",
        accountHolderValue: "Samsoudine Gassama",
        ibanLabel: "IBAN",
        ibanValue: "PT50001000005777255000115",
        copyBtn: "Copier l'IBAN",
        copiedSuccess: "IBAN copié avec succès",
        verifyNotice: "Veuillez vérifier les coordonnées de paiement avant d'effectuer tout virement.",
        confirmBtn: "Confirmation de paiement / Nous contacter",
        confirmWhatsAppMessage: "Bonjour Professeur Kobbyier, j'ai effectué un règlement par virement bancaire et je souhaite vous transmettre la confirmation pour ma consultation."
      }
    },
    contact: {
      kicker: "Demandes Confidentielles",
      title: "Contacter le Professeur Kobbyier",
      subtitle: "Joignez-le directement par téléphone ou WhatsApp, ou remplissez le formulaire confidentiel ci-dessous.",
      immediateTitle: "Contacts Directs Immédiats",
      directTel: "Téléphone Direct",
      whatsAppLabel: "Consultation WhatsApp",
      callNow: "APPELER",
      chatWhatsApp: "ÉCRIRE SUR WHATSAPP",
      bookConsultation: "RÉSERVER UNE CONSULTATION",
      privacyCardTitle: "Garantie de Discrétion Absolue :",
      privacyCardDesc: "Les informations transmises sont strictement confidentielles. Le Professeur Kobbyier traite tous les messages en personne. Aucune donnée n'est partagée.",
      availabilityTitle: "Disponibilité pour Consultation",
      availabilityDesc: "Consultations quotidiennes sur rendez-vous. Les messages WhatsApp sont traités par ordre d'arrivée, généralement sous quelques heures.",
      formTitle: "Demande de Consultation Confidentielle",
      formDesc: "Remplissez ce formulaire pour soumettre directement votre situation au Professeur Kobbyier.",
      nameLabel: "Nom & Prénom *",
      namePlaceholder: "ex. Jean-Marc Konan",
      phoneLabel: "Numéro de Téléphone / WhatsApp *",
      phonePlaceholder: "ex. +33 6 12 34 56 78 ou +351 920 755 945",
      countryLabel: "Pays / Ville de Résidence *",
      countryPlaceholder: "ex. France, Belgique, Suisse, Sénégal, Côte d'Ivoire, Portugal",
      methodLabel: "Moyen de Contact Préféré",
      methodWhatsApp: "WhatsApp (Notes vocales & Messages)",
      methodPhone: "Appel Téléphonique Direct",
      areaLabel: "Domaine de Consultation",
      timeLabel: "Créneau Souhaité",
      timeMorning: "Matin (09h00 - 12h00)",
      timeAfternoon: "Après-midi (12h00 - 17h00)",
      timeEvening: "Soirée (17h00 - 21h00)",
      timeUrgent: "Urgent / Premier créneau disponible",
      concernLabel: "Brève Description de Votre Situation *",
      concernPlaceholder: "Décrivez brièvement vos interrogations, les difficultés que vous rencontrez sur le plan affectif, professionnel ou spirituel...",
      notice: "Avis de Confidentialité : Vos données sont protégées par le secret professionnel et ne font l'objet d'aucun partage tiers.",
      submitBtn: "Envoyer la Demande de Consultation",
      submittingBtn: "Envoi en cours...",
      successTitle: "Demande Reçue en Toute Confidentialité",
      successMsg: "Votre demande a bien été enregistrée. Vous pouvez également la transmettre directement au Professeur Kobbyier via WhatsApp ci-dessous.",
      directWhatsAppBtn: "Transmettre Directement sur WhatsApp",
      submitAnother: "Envoyer une Autre Demande",
      validation: {
        name: "Veuillez renseigner votre nom",
        phone: "Veuillez fournir un numéro de téléphone ou WhatsApp valide",
        country: "Veuillez indiquer votre pays ou ville",
        concern: "Veuillez décrire brièvement votre situation (minimum 10 caractères)"
      }
    },
    footer: {
      role: "Praticien Spirituel Africain",
      titles: "Grand · Astrologue · Voyant",
      quote: "« Consultation Spirituelle & Orientation Confidentielle »",
      desc: "Astrologie, clairvoyance et consultation spirituelle traditionnelle africaine pour guider les personnes dans leurs choix personnels, sentimentaux et professionnels.",
      navTitle: "Navigation",
      contactTitle: "Contact Direct",
      worldwideNotice: "Consultations à distance dans le monde entier. Appels privés et messages WhatsApp protégés par une stricte discrétion.",
      rights: "Tous droits réservés.",
      disclaimer: "Avertissement Légal",
      privacy: "Politique de Confidentialité"
    },
    legal: {
      titleDisclaimer: "Avertissement Déontologique",
      titlePrivacy: "Confidentialité & Données",
      closeBtn: "Fermer",
      understandBtn: "J'ai Compris & Fermer",
      disclaimer: {
        title: "Charte Déontologique & Avertissement Légal",
        quote: "« La consultation spirituelle et les pratiques traditionnelles sont proposées à des fins personnelles, culturelles et spirituelles. Elles ne sauraient en aucun cas se substituer à un avis médical, psychologique, juridique ou financier qualifié. Les résultats ne sont pas garantis et dépendent de la réceptivité de chacun. »",
        scopeTitle: "Cadre de la Pratique",
        scopeDesc: "Le Professeur Kobbyier propose des consultations fondées sur la tradition spirituelle africaine, l'astrologie et la clairvoyance. Les échanges relèvent d'une démarche d'écoute, de conseil spirituel et de culture traditionnelle.",
        healthTitle: "Santé Médicale & Psychologique",
        healthDesc: "Aucune consultation ne saurait diagnostiquer, guérir ou traiter une affection clinique ou pathologique. Toute personne souffrant de troubles physiques ou psychologiques est impérativement invitée à consulter des médecins ou psychiatres qualifiés.",
        legalTitle: "Domaines Juridiques & Financiers",
        legalDesc: "Les conseils relatifs à la vie professionnelle, financière ou judiciaire apportent un soutien de discernement et d'apaisement moral ; ils ne constituent nullement des conseils d'avocat, d'expert-comptable ou d'analyste financier agréé.",
        paymentTitle: "Modalités de Règlement",
        paymentDesc: "Les modalités de paiement peuvent être discutées directement avec le Professeur Kobbyier avant le début d'une consultation. Toute mention concernant un règlement après résultats doit être comprise comme la politique déclarée du praticien et doit être confirmée directement avant tout engagement."
      },
      privacy: {
        title: "Protection des Données & Confidentialité",
        intro: "Le respect de votre vie privée est une priorité absolue. Toutes les interactions avec le Professeur Kobbyier sont régies par une discrétion totale :",
        p1Title: "Données Personnelles",
        p1Desc: "Votre nom, numéro de téléphone et la description de votre situation sont strictement utilisés pour le dialogue direct et l'évaluation spirituelle entre vous et le praticien.",
        p2Title: "Non-Divulgation",
        p2Desc: "Aucune donnée n'est cédée, louée, vendue ou transmise à des tiers ou des partenaires commerciaux.",
        p3Title: "Canaux Sécurisés",
        p3Desc: "Les échanges par WhatsApp bénéficient du chiffrement de bout en bout pour les appels vocaux et les messages.",
        p4Title: "Droit à l'Oubli",
        p4Desc: "Vous pouvez à tout moment demander l'effacement de vos coordonnées en le signalant au Professeur Kobbyier sur WhatsApp ou par téléphone."
      }
    }
  }
};
