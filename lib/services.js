// Services data structure
export const services = [
  {
    "id": 1,
    "title": {
      "en": "Web Development",
      "fr": "Développement Web",
      "ar": "تطوير المواقع"
    },
    "description": {
      "en": "Designing attractive websites and applications to convert visitors into customers.",
      "fr": "Conception de sites et d'applications attrayants pour convertir les visiteurs en clients.",
      "ar": "تصميم مواقع وتطبيقات جذابة لتحويل الزوار إلى عملاء."
    },
    "image": "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=687&auto=format&fit=crop",
    "price": "€500",
    "basePrice": "€450",
    "reviews": 150,
    "rating": 4.6,
    "targetAudience": {
      "en": "Businesses & Startups",
      "fr": "Entreprises et startups",
      "ar": "الأعمال والشركات الناشئة"
    }
  },
  {
    "id": 2,
    "title": {
      "en": "Web Design",
      "fr": "Design Web",
      "ar": "تصميم المواقع"
    },
    "description": {
      "en": "Producing premium content (videos, stories, reels) to attract and engage your audience.",
      "fr": "Production de contenu premium (vidéos, stories, reels) pour attirer et engager votre audience.",
      "ar": "إنتاج محتوى متميز (فيديوهات، قصص، ريلز) لجذب جمهورك والتفاعل معه."
    },
    "image": "https://images.unsplash.com/photo-1720411270946-7a530fd12dc9?q=80&w=2070&auto=format&fit=crop",
    "price": "€400",
    "basePrice": "€350",
    "reviews": 120,
    "rating": 4.5,
    "targetAudience": {
      "en": "Content Creators & Brands",
      "fr": "Créateurs de contenu et marques",
      "ar": "صناع المحتوى والعلامات التجارية"
    }
  },
  {
    "id": 3,
    "title": {
      "en": "Marketing",
      "fr": "Marketing",
      "ar": "التسويق"
    },
    "description": {
      "en": "Managing your social platforms to ensure continuous interaction and brand growth.",
      "fr": "Gestion de vos plateformes sociales pour assurer une interaction continue et la croissance de la marque.",
      "ar": "إدارة منصاتك الاجتماعية لضمان التفاعل المستمر ونمو العلامة التجارية."
    },
    "image": "https://images.unsplash.com/photo-1675352161865-27816c76141a?q=80&w=1032&auto=format&fit=crop",
    "price": "€300",
    "basePrice": "€270",
    "reviews": 90,
    "rating": 4.4,
    "targetAudience": {
      "en": "Small Businesses & Influencers",
      "fr": "Petites entreprises et influenceurs",
      "ar": "الأعمال الصغيرة والمؤثرون"
    }
  },
  {
    "id": 4,
    "title": {
      "en": "Google Ads",
      "fr": "Google Ads",
      "ar": "إعلانات جوجل"
    },
    "description": {
      "en": "Creating custom visual content for products, advertisements, and branding.",
      "fr": "Création de contenu visuel personnalisé pour les produits, les publicités et l'image de marque.",
      "ar": "إنشاء محتوى مرئي مخصص للمنتجات والإعلانات والعلامات التجارية."
    },
    "image": "https://images.unsplash.com/photo-1611652969195-63733071b45c?q=80&w=870&auto=format&fit=crop",
    "price": "€600",
    "basePrice": "€550",
    "reviews": 180,
    "rating": 4.7,
    "targetAudience": {
      "en": "E-commerce & Marketing Teams",
      "fr": "E-commerce et équipes marketing",
      "ar": "التجارة الإلكترونية وفرق التسويق"
    }
  }
];

// Detailed services data
export const servicesDetails = [
  {
    "id": 1,
    "title": {
      "en": "Web Development",
      "fr": "Développement Web",
      "ar": "تطوير المواقع"
    },
    "description": {
      "en": "Designing attractive websites and applications to convert visitors into customers. We focus on user-centric designs that blend aesthetics with functionality for maximum engagement.",
      "fr": "Conception de sites et applications attrayants pour transformer les visiteurs en clients. Nous nous concentrons sur des conceptions centrées sur l'utilisateur qui allient esthétique et fonctionnalité pour un engagement maximal.",
      "ar": "تصميم مواقع وتطبيقات جذابة لتحويل الزوار إلى عملاء. نركز على التصاميم الموجهة للمستخدم التي تجمع بين الجماليات والوظائف لتحقيق أقصى قدر من التفاعل."
    },
    "image": "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "reviews": 150,
    "rating": 4.6,
    "targetAudience": {
      "en": "Businesses & Startups",
      "fr": "Entreprises & Startups",
      "ar": "الشركات الناشئة والأعمال"
    },
    "features": [
      {
        "title": {
          "en": "Custom UI/UX",
          "fr": "UI/UX personnalisé",
          "ar": "واجهة وتجربة مستخدم مخصصة"
        },
        "description": {
          "en": "Tailored interfaces that enhance user experience and drive conversions.",
          "fr": "Interfaces adaptées qui améliorent l'expérience utilisateur et augmentent les conversions.",
          "ar": "واجهات مخصصة تعزز تجربة المستخدم وتزيد التحويلات."
        }
      },
      {
        "title": {
          "en": "Responsive Design",
          "fr": "Design réactif",
          "ar": "تصميم متجاوب"
        },
        "description": {
          "en": "Seamless viewing on desktops, tablets, and mobiles.",
          "fr": "Affichage fluide sur ordinateurs, tablettes et mobiles.",
          "ar": "عرض سلس على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف."
        }
      },
      {
        "title": {
          "en": "CMS Integration",
          "fr": "Intégration CMS",
          "ar": "تكامل نظام إدارة المحتوى"
        },
        "description": {
          "en": "Easy content management with platforms like WordPress or custom solutions.",
          "fr": "Gestion facile du contenu avec des plateformes comme WordPress ou des solutions personnalisées.",
          "ar": "إدارة محتوى سهلة مع منصات مثل ووردبريس أو حلول مخصصة."
        }
      },
      {
        "title": {
          "en": "Performance Optimization",
          "fr": "Optimisation des performances",
          "ar": "تحسين الأداء"
        },
        "description": {
          "en": "Fast-loading pages with SEO-friendly structures.",
          "fr": "Pages à chargement rapide avec des structures optimisées pour le SEO.",
          "ar": "صفحات سريعة التحميل مع هياكل صديقة لمحركات البحث."
        }
      }
    ],
    "process": {
      "en": [
        "Initial consultation to understand your goals and audience.",
        "Wireframing and prototyping for visual approval.",
        "Development and iteration based on feedback.",
        "Testing, launch, and post-launch support."
      ],
      "fr": [
        "Consultation initiale pour comprendre vos objectifs et votre audience.",
        "Wireframing et prototypage pour validation visuelle.",
        "Développement et itérations selon les retours.",
        "Tests, lancement et support post-lancement."
      ],
      "ar": [
        "استشارة أولية لفهم أهدافك وجمهورك.",
        "إنشاء إطارات ونماذج أولية للموافقة البصرية.",
        "التطوير والتعديلات بناءً على الملاحظات.",
        "الاختبار والإطلاق والدعم بعد الإطلاق."
      ]
    },
    "benefits": {
      "en": [
        "Increased user retention and conversion rates.",
        "Scalable designs that grow with your business.",
        "Professional branding that stands out in the market."
      ],
      "fr": [
        "Amélioration de la rétention et du taux de conversion.",
        "Design évolutif qui grandit avec votre entreprise.",
        "Branding professionnel qui se démarque sur le marché."
      ],
      "ar": [
        "زيادة الاحتفاظ بالمستخدمين ومعدلات التحويل.",
        "تصاميم قابلة للتوسع تنمو مع عملك.",
        "علامة تجارية احترافية تبرز في السوق."
      ]
    },
    "packages": [
      {
        "name": {
          "en": "Basic",
          "fr": "Basique",
          "ar": "أساسي"
        },
        "duration": {
          "en": "2-4 weeks",
          "fr": "2-4 semaines",
          "ar": "2-4 أسابيع"
        }
      },
      {
        "name": {
          "en": "Standard",
          "fr": "Standard",
          "ar": "عادي"
        },
        "duration": {
          "en": "4-6 weeks",
          "fr": "4-6 semaines",
          "ar": "4-6 أسابيع"
        }
      },
      {
        "name": {
          "en": "Premium",
          "fr": "Premium",
          "ar": "متميز"
        },
        "duration": {
          "en": "6-8 weeks",
          "fr": "6-8 semaines",
          "ar": "6-8 أسابيع"
        }
      }
    ],
    "addons": {
      "en": ["E-commerce Integration", "API Connections", "Animation Effects"],
      "fr": ["Intégration e-commerce", "Connexions API", "Effets d'animation"],
      "ar": ["تكامل التجارة الإلكترونية", "اتصالات API", "تأثيرات الرسوم المتحركة"]
    },
    "additionalImages": [
      "https://plus.unsplash.com/premium_photo-1721225465014-cba692ada75c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589700329490-73e2a07a9c51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    "id": 2,
    "title": {
      "en": "Web Design",
      "fr": "Design Web",
      "ar": "تصميم المواقع"
    },
    "description": {
      "en": "Producing premium content (videos, stories, reels) to attract and engage your audience. Our strategies are data-driven to maximize reach and impact.",
      "fr": "Production de contenu premium (vidéos, stories, reels) pour attirer et engager votre audience. Nos stratégies sont basées sur les données pour maximiser la portée et l'impact.",
      "ar": "إنتاج محتوى متميز (فيديوهات، قصص، ريلز) لجذب جمهورك والتفاعل معه. استراتيجياتنا مدفوعة بالبيانات لتعظيم الوصول والتأثير."
    },
    "image": "https://images.unsplash.com/photo-1720411270946-7a530fd12dc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "reviews": 120,
    "rating": 4.5,
    "targetAudience": {
      "en": "Content Creators & Brands",
      "fr": "Créateurs de contenu & Marques",
      "ar": "منشئو المحتوى والعلامات التجارية"
    },
    "features": [
      {
        "title": {
          "en": "Video Production",
          "fr": "Production vidéo",
          "ar": "إنتاج الفيديو"
        },
        "description": {
          "en": "High-quality videos tailored for platforms like YouTube and TikTok.",
          "fr": "Vidéos de haute qualité adaptées aux plateformes comme YouTube et TikTok.",
          "ar": "فيديوهات عالية الجودة مصممة خصيصًا لمنصات مثل يوتيوب وتيك توك."
        }
      },
      {
        "title": {
          "en": "Storytelling Reels",
          "fr": "Reels narratifs",
          "ar": "ريلز سرد القصص"
        },
        "description": {
          "en": "Short-form content that captivates and converts.",
          "fr": "Contenu court qui captive et convertit.",
          "ar": "محتوى قصير يجذب ويحول."
        }
      },
      {
        "title": {
          "en": "Content Calendar",
          "fr": "Calendrier de contenu",
          "ar": "تقويم المحتوى"
        },
        "description": {
          "en": "Planned strategies for consistent posting.",
          "fr": "Stratégies planifiées pour une publication constante.",
          "ar": "استراتيجيات مخططة للنشر المتسق."
        }
      },
      {
        "title": {
          "en": "Analytics Integration",
          "fr": "Intégration d'analytiques",
          "ar": "تكامل التحليلات"
        },
        "description": {
          "en": "Track performance and refine approaches.",
          "fr": "Suivre les performances et affiner les approches.",
          "ar": "تتبع الأداء وتحسين الأساليب."
        }
      }
    ],
    "process": {
      "en": [
        "Audience analysis and content brainstorming.",
        "Scripting and production shooting.",
        "Editing and optimization for platforms.",
        "Distribution and performance review."
      ],
      "fr": [
        "Analyse de l'audience et brainstorming de contenu.",
        "Scénarisation et tournage.",
        "Montage et optimisation pour les plateformes.",
        "Distribution et revue des performances."
      ],
      "ar": [
        "تحليل الجمهور والعصف الذهني للمحتوى.",
        "كتابة السيناريو والتصوير.",
        "التعديل والتحسين للمنصات.",
        "التوزيع ومراجعة الأداء."
      ]
    },
    "benefits": {
      "en": [
        "Boosted engagement and follower growth.",
        "Higher ROI through targeted content.",
        "Creative narratives that build brand loyalty."
      ],
      "fr": [
        "Engagement accru et croissance des abonnés.",
        "ROI plus élevé grâce à un contenu ciblé.",
        "Récits créatifs qui bâtissent la fidélité à la marque."
      ],
      "ar": [
        "زيادة التفاعل ونمو المتابعين.",
        "عائد استثمار أعلى من خلال المحتوى المستهدف.",
        "روايات إبداعية تبني الولاء للعلامة التجارية."
      ]
    },
    "packages": [
      {
        "name": {
          "en": "Starter",
          "fr": "Débutant",
          "ar": "المبتدئ"
        },
        "duration": {
          "en": "1 month",
          "fr": "1 mois",
          "ar": "شهر واحد"
        }
      },
      {
        "name": {
          "en": "Growth",
          "fr": "Croissance",
          "ar": "النمو"
        },
        "duration": {
          "en": "3 months",
          "fr": "3 mois",
          "ar": "3 أشهر"
        }
      },
      {
        "name": {
          "en": "Enterprise",
          "fr": "Entreprise",
          "ar": "المؤسسة"
        },
        "duration": {
          "en": "6 months",
          "fr": "6 mois",
          "ar": "6 أشهر"
        }
      }
    ],
    "addons": {
      "en": ["SEO Optimization", "Collaborations", "Trend Analysis"],
      "fr": ["Optimisation SEO", "Collaborations", "Analyse des tendances"],
      "ar": ["تحسين محركات البحث", "التعاونات", "تحليل الاتجاهات"]
    },
    "additionalImages": [
      "https://images.unsplash.com/photo-1720411270946-7a530fd12dc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681487794038-efe7b1a8f538?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683121989734-66f568283fbb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    "id": 3,
    "title": {
      "en": "Marketing",
      "fr": "Marketing",
      "ar": "التسويق"
    },
    "description": {
      "en": "Managing your social platforms to ensure continuous interaction and brand growth. We handle posting, engagement, and growth hacking.",
      "fr": "Gestion de vos plateformes sociales pour assurer une interaction continue et une croissance de la marque. Nous gérons la publication, l'engagement et les stratégies de croissance.",
      "ar": "إدارة منصاتك الاجتماعية لضمان التفاعل المستمر ونمو العلامة التجارية. نحن نتولى النشر والتفاعل واستراتيجيات النمو."
    },
    "image": "https://images.unsplash.com/photo-1675352161865-27816c76141a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "reviews": 90,
    "rating": 4.4,
    "targetAudience": {
      "en": "Small Businesses & Influencers",
      "fr": "Petites entreprises & Influenceurs",
      "ar": "الشركات الصغيرة والمؤثرين"
    },
    "features": [
      {
        "title": {
          "en": "Daily Posting",
          "fr": "Publication quotidienne",
          "ar": "النشر اليومي"
        },
        "description": {
          "en": "Curated content scheduled across platforms.",
          "fr": "Contenu sélectionné programmé sur toutes les plateformes.",
          "ar": "محتوى منسق يتم جدولته عبر المنصات."
        }
      },
      {
        "title": {
          "en": "Community Engagement",
          "fr": "Engagement communautaire",
          "ar": "التفاعل مع المجتمع"
        },
        "description": {
          "en": "Responding to comments and messages promptly.",
          "fr": "Réponse rapide aux commentaires et messages.",
          "ar": "الرد السريع على التعليقات والرسائل."
        }
      },
      {
        "title": {
          "en": "Growth Strategies",
          "fr": "Stratégies de croissance",
          "ar": "استراتيجيات النمو"
        },
        "description": {
          "en": "Hashtag research and audience targeting.",
          "fr": "Recherche de hashtags et ciblage d'audience.",
          "ar": "بحث الهاشتاغ واستهداف الجمهور."
        }
      },
      {
        "title": {
          "en": "Reporting Dashboard",
          "fr": "Tableau de bord de rapports",
          "ar": "لوحة تقارير الأداء"
        },
        "description": {
          "en": "Monthly insights on performance metrics.",
          "fr": "Rapports mensuels sur les métriques de performance.",
          "ar": "تقارير شهرية حول مقاييس الأداء."
        }
      }
    ],
    "process": {
      "en": [
        "Platform audit and strategy development.",
        "Content creation and scheduling.",
        "Monitoring interactions and adjustments.",
        "Monthly reviews and optimizations."
      ],
      "fr": [
        "Audit des plateformes et développement de la stratégie.",
        "Création et planification de contenu.",
        "Suivi des interactions et ajustements.",
        "Examens mensuels et optimisations."
      ],
      "ar": [
        "تدقيق المنصات وتطوير الاستراتيجية.",
        "إنشاء المحتوى وجدولته.",
        "مراقبة التفاعلات والتعديلات.",
        "مراجعات شهرية وتحسينات."
      ]
    },
    "benefits": {
      "en": [
        "Increased brand visibility and loyalty.",
        "Time savings for your team.",
        "Data-backed decisions for better results."
      ],
      "fr": [
        "Visibilité et fidélité accrues de la marque.",
        "Gain de temps pour votre équipe.",
        "Décisions basées sur les données pour de meilleurs résultats."
      ],
      "ar": [
        "زيادة رؤية العلامة التجارية والولاء لها.",
        "توفير الوقت لفريقك.",
        "قرارات مدعومة بالبيانات لنتائج أفضل."
      ]
    },
    "packages": [
      {
        "name": {
          "en": "Essential",
          "fr": "Essentiel",
          "ar": "أساسي"
        },
        "duration": {
          "en": "Monthly",
          "fr": "Mensuel",
          "ar": "شهري"
        }
      },
      {
        "name": {
          "en": "Pro",
          "fr": "Pro",
          "ar": "محترف"
        },
        "duration": {
          "en": "Quarterly",
          "fr": "Trimestriel",
          "ar": "ربع سنوي"
        }
      },
      {
        "name": {
          "en": "Ultimate",
          "fr": "Ultime",
          "ar": "نهائي"
        },
        "duration": {
          "en": "Annual",
          "fr": "Annuel",
          "ar": "سنوي"
        }
      }
    ],
    "addons": {
      "en": ["Ad Management", "Influencer Outreach", "Crisis Handling"],
      "fr": ["Gestion des publicités", "Contact avec les influenceurs", "Gestion de crise"],
      "ar": ["إدارة الإعلانات", "التواصل مع المؤثرين", "التعامل مع الأزمات"]
    },
    "additionalImages": [
      "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1675352161865-27816c76141a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1724754608847-afa768169635?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    "id": 4,
    "title": {
      "en": "Google Ads",
      "fr": "Google Ads",
      "ar": "إعلانات جوجل"
    },
    "description": {
      "en": "Managing paid ad campaigns on search engines and social platforms (Facebook, Instagram, TikTok). Precision targeting for optimal results.",
      "fr": "Gestion des campagnes publicitaires payantes sur les moteurs de recherche et les plateformes sociales (Facebook, Instagram, TikTok). Ciblage précis pour des résultats optimaux.",
      "ar": "إدارة الحملات الإعلانية المدفوعة على محركات البحث والمنصات الاجتماعية (فيسبوك، إنستغرام، تيك توك). استهداف دقيق للحصول على أفضل النتائج."
    },
    "image": "https://plus.unsplash.com/premium_photo-1733342572346-5420c95f7556?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "reviews": 130,
    "rating": 4.6,
    "targetAudience": {
      "en": "Online Businesses & Retailers",
      "fr": "Entreprises en ligne & Détaillants",
      "ar": "الأعمال التجارية عبر الإنترنت وتجار التجزئة"
    },
    "features": [
      {
        "title": {
          "en": "Keyword Research",
          "fr": "Recherche de mots-clés",
          "ar": "بحث الكلمات المفتاحية"
        },
        "description": {
          "en": "Identifying high-ROI search terms.",
          "fr": "Identification des termes de recherche à haut ROI.",
          "ar": "تحديد المصطلحات البحثية ذات العائد العالي."
        }
      },
      {
        "title": {
          "en": "Ad Creative Design",
          "fr": "Conception créative d'annonces",
          "ar": "تصميم إبداعي للإعلانات"
        },
        "description": {
          "en": "Compelling visuals and copy.",
          "fr": "Visuels et textes accrocheurs.",
          "ar": "صور بصرية ونصوص جذابة."
        }
      },
      {
        "title": {
          "en": "Bid Management",
          "fr": "Gestion des enchères",
          "ar": "إدارة العروض"
        },
        "description": {
          "en": "Optimizing costs for maximum exposure.",
          "fr": "Optimisation des coûts pour une exposition maximale.",
          "ar": "تحسين التكاليف لتحقيق أقصى قدر من الظهور."
        }
      },
      {
        "title": {
          "en": "Conversion Tracking",
          "fr": "Suivi des conversions",
          "ar": "تتبع التحويلات"
        },
        "description": {
          "en": "Measuring clicks to sales.",
          "fr": "Mesure des clics jusqu'aux ventes.",
          "ar": "قياس النقرات حتى المبيعات."
        }
      }
    ],
    "process": {
      "en": [
        "Account setup and keyword planning.",
        "Ad creation and targeting setup.",
        "Campaign launch and daily monitoring.",
        "Optimization and detailed reporting."
      ],
      "fr": [
        "Configuration du compte et planification des mots-clés.",
        "Création d'annonces et configuration du ciblage.",
        "Lancement de la campagne et suivi quotidien.",
        "Optimisation et rapports détaillés."
      ],
      "ar": [
        "إعداد الحساب وتخطيط الكلمات المفتاحية.",
        "إنشاء الإعلانات وإعداد الاستهداف.",
        "إطلاق الحملة والمراقبة اليومية.",
        "التحسين والتقارير المفصلة."
      ]
    },
    "benefits": {
      "en": [
        "Immediate traffic and leads.",
        "Controlled budgeting with high returns.",
        "Scalable campaigns for growth."
      ],
      "fr": [
        "Trafic et prospects immédiats.",
        "Budget maîtrisé avec des retours élevés.",
        "Campagnes évolutives pour la croissance."
      ],
      "ar": [
        "زيادة فورية في الحركة والعملاء المحتملين.",
        "ميزانية مضبوطة مع عوائد عالية.",
        "حملات قابلة للتوسع للنمو."
      ]
    },
    "packages": [
      {
        "name": {
          "en": "Basic PPC",
          "fr": "PPC de base",
          "ar": "إعلانات PPC أساسية"
        },
        "duration": {
          "en": "Monthly",
          "fr": "Mensuel",
          "ar": "شهري"
        }
      },
      {
        "name": {
          "en": "Advanced",
          "fr": "Avancé",
          "ar": "متقدم"
        },
        "duration": {
          "en": "Quarterly",
          "fr": "Trimestriel",
          "ar": "ربع سنوي"
        }
      },
      {
        "name": {
          "en": "Full-Service",
          "fr": "Service complet",
          "ar": "خدمة كاملة"
        },
        "duration": {
          "en": "Ongoing",
          "fr": "Continu",
          "ar": "مستمر"
        }
      }
    ],
    "addons": {
      "en": ["Remarketing", "Video Ads", "A/B Testing"],
      "fr": ["Reciblage", "Annonces vidéo", "Tests A/B"],
      "ar": ["إعادة الاستهداف", "إعلانات الفيديو", "اختبارات A/B"]
    },
    "additionalImages": [
      "https://images.unsplash.com/photo-1712455766000-2b5a82f19c73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624268526201-df144d532ec5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1687134287259-55a6cb1af12e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];

// API functions
export async function getServices() {
  return services;
}

export async function getServiceById(id) {
  const service = servicesDetails.find(s => s.id.toString() === id.toString());
  return service;
}

export async function getServiceDetailsById(id) {
  const service = servicesDetails.find(s => s.id.toString() === id.toString());
  return service;
}
