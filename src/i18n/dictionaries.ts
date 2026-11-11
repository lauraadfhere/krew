export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export type Dictionary = {
  nav: { products: string; services: string; about: string; contact: string };
  hero: { title: string; subtitle: string; cta: string; secondary: string };
  products: {
    title: string;
    intro: string;
    addToQuote: string;
    items: { name: string; category: string; description: string }[];
  };
  services: { title: string; eyebrow: string; items: { title: string; text: string }[] };
  contact: {
    title: string;
    text: string;
    email: string;
    phone: string;
    details: {
      eyebrow: string;
      email: string;
      phone: string;
      support: string;
      supportText: string;
    };
    form: {
      heading: string;
      name: string;
      email: string;
      facility: string;
      message: string;
      submit: string;
      note: string;
      sent: string;
    };
  };
  about: { title: string; text: string };
  faq: { title: string; items: { q: string; a: string }[] };
  common: {
    medicalEquipment: string;
    search: string;
    changeLanguage: string;
    location: string;
    home: string;
  };
  footer: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: { products: "Equipment", services: "Services", about: "About", contact: "Contact" },
    hero: {
      title: "Medical devices and hardware equipment, delivered with care.",
      subtitle:
        "KREW supplies hospitals, clinics and laboratories with certified medical devices and reliable hardware equipment.",
      cta: "Browse equipment",
      secondary: "Request a quote",
    },
    products: {
      title: "Featured equipment",
      intro: "Certified devices and hardware for clinical and laboratory use.",
      addToQuote: "Add to quote",
      items: [
        { name: "Patient monitor", category: "Medical device", description: "Multi-parameter monitoring with a clear 12-inch display." },
        { name: "Digital X-ray unit", category: "Imaging", description: "High-resolution digital radiography for daily clinical use." },
        { name: "Infusion pump", category: "Medical device", description: "Precise volumetric infusion with dose-error alerts." },
        { name: "Industrial workstation", category: "Hardware", description: "Rugged, high-performance computer for lab and hospital networks." },
        { name: "Laboratory centrifuge", category: "Laboratory", description: "Quiet, balanced rotor for routine sample preparation." },
        { name: "Network server rack", category: "Hardware", description: "Secure, cooled rack for clinical data and imaging systems." },
      ],
    },
    services: {
      title: "Our services",
      eyebrow: "KREW / SUPPORT",
      items: [
        { title: "Installation", text: "On-site installation and calibration by trained technicians." },
        { title: "Maintenance", text: "Preventive maintenance plans that keep equipment running." },
        { title: "Training", text: "Hands-on training for clinical and technical staff." },
      ],
    },
    contact: {
      title: "Contact us",
      text: "Tell us what your facility needs and we will prepare a quote.",
      email: "sales@krew.example",
      phone: "+1 000 000 0000",
      details: {
        eyebrow: "Let’s work together",
        email: "Email",
        phone: "Phone",
        support: "Support",
        supportText: "Hospitals, clinics and laboratories",
      },
      form: {
        heading: "Request a quote",
        name: "Full name",
        email: "Work email",
        facility: "Facility or organisation",
        message: "What equipment do you need?",
        submit: "Send request",
        note: "We reply within one business day.",
        sent: "Your email app should open with the request ready to send.",
      },
    },
    about: {
      title: "About KREW",
      text: "KREW supplies hospitals, clinics and laboratories with certified medical devices and reliable hardware equipment. From choosing the right device to installation, maintenance and training, our team helps healthcare facilities build dependable equipment programs around the needs of their people.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "I have just purchased KREW equipment. How do I activate the service and warranty plan?",
          a: "Contact our support team with your order number and the serial numbers of the devices. We register the equipment, confirm the warranty period and schedule the first preventive maintenance visit with your facility.",
        },
        {
          q: "Is KREW support free of charge?",
          a: "Remote advice by phone or email is included with every purchase. On-site visits, spare parts and out-of-warranty repairs are always quoted and approved before any work begins.",
        },
        {
          q: "I have a question about an order — where do I find the answer?",
          a: "Your account manager can confirm delivery dates, invoices and order status. For anything urgent, call the support line listed on our contact page and quote your order number.",
        },
        {
          q: "Why do I need an account to request a quote?",
          a: "Quotes are tied to your facility's pricing and equipment history. An account keeps your quotes, delivery documents and service records in one place, so repeat orders take minutes rather than days.",
        },
        {
          q: "How long do delivery and installation take?",
          a: "Stocked devices usually ship within five business days. Configured or imported equipment takes three to six weeks. Installation and calibration are scheduled directly with your team once the order is confirmed.",
        },
        {
          q: "Do you train clinical and technical staff?",
          a: "Yes. Every installation includes a hands-on session for the staff who will use the device, and refresher training can be booked at any time through our services team.",
        },
      ],
    },
    common: {
      medicalEquipment: "Medical equipment",
      search: "Search",
      changeLanguage: "Change language",
      location: "Location and contact details",
      home: "KREW home",
    },
    footer: "© KREW. All rights reserved.",
  },
  fr: {
    nav: { products: "Équipements", services: "Services", about: "À propos", contact: "Contact" },
    hero: {
      title: "Dispositifs médicaux et équipements matériels, livrés avec soin.",
      subtitle:
        "KREW fournit aux hôpitaux, cliniques et laboratoires des dispositifs médicaux certifiés et des équipements matériels fiables.",
      cta: "Voir les équipements",
      secondary: "Demander un devis",
    },
    products: {
      title: "Équipements en vedette",
      intro: "Dispositifs et matériels certifiés pour un usage clinique et en laboratoire.",
      addToQuote: "Ajouter au devis",
      items: [
        { name: "Moniteur patient", category: "Dispositif médical", description: "Surveillance multiparamétrique avec un écran 12 pouces lisible." },
        { name: "Appareil de radiographie numérique", category: "Imagerie", description: "Radiographie numérique haute résolution pour un usage quotidien." },
        { name: "Pompe à perfusion", category: "Dispositif médical", description: "Perfusion volumétrique précise avec alertes d'erreur de dose." },
        { name: "Poste de travail industriel", category: "Matériel", description: "Ordinateur robuste et performant pour laboratoires et réseaux hospitaliers." },
        { name: "Centrifugeuse de laboratoire", category: "Laboratoire", description: "Rotor silencieux et équilibré pour la préparation d'échantillons." },
        { name: "Baie serveur réseau", category: "Matériel", description: "Baie sécurisée et refroidie pour les systèmes cliniques et d'imagerie." },
      ],
    },
    services: {
      title: "Nos services",
      eyebrow: "KREW / ASSISTANCE",
      items: [
        { title: "Installation", text: "Installation et étalonnage sur site par des techniciens formés." },
        { title: "Maintenance", text: "Plans de maintenance préventive pour garder vos équipements opérationnels." },
        { title: "Formation", text: "Formation pratique pour le personnel clinique et technique." },
      ],
    },
    contact: {
      title: "Contactez-nous",
      text: "Indiquez-nous les besoins de votre établissement et nous préparerons un devis.",
      email: "sales@krew.example",
      phone: "+1 000 000 0000",
      details: {
        eyebrow: "Travaillons ensemble",
        email: "E-mail",
        phone: "Téléphone",
        support: "Assistance",
        supportText: "Hôpitaux, cliniques et laboratoires",
      },
      form: {
        heading: "Demander un devis",
        name: "Nom complet",
        email: "E-mail professionnel",
        facility: "Établissement ou organisation",
        message: "De quels équipements avez-vous besoin ?",
        submit: "Envoyer la demande",
        note: "Nous répondons sous un jour ouvré.",
        sent: "Votre application e-mail devrait s'ouvrir avec la demande prête à envoyer.",
      },
    },
    about: {
      title: "À propos de KREW",
      text: "KREW fournit aux hôpitaux, cliniques et laboratoires des dispositifs médicaux certifiés et des équipements matériels fiables. Du choix de l'appareil adapté à l'installation, la maintenance et la formation, notre équipe aide les établissements de santé à bâtir des programmes d'équipement fiables.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Je viens d'acheter des équipements KREW. Comment activer le contrat de service et la garantie ?",
          a: "Contactez notre équipe d'assistance avec votre numéro de commande et les numéros de série des appareils. Nous enregistrons le matériel, confirmons la durée de garantie et planifions la première visite de maintenance préventive.",
        },
        {
          q: "L'assistance KREW est-elle gratuite ?",
          a: "Le conseil à distance par téléphone ou par e-mail est inclus avec chaque achat. Les visites sur site, les pièces détachées et les réparations hors garantie font toujours l'objet d'un devis approuvé avant toute intervention.",
        },
        {
          q: "J'ai une question sur une commande — où trouver la réponse ?",
          a: "Votre chargé de compte peut confirmer les dates de livraison, les factures et l'état de la commande. Pour toute urgence, appelez la ligne d'assistance indiquée sur notre page de contact en précisant votre numéro de commande.",
        },
        {
          q: "Pourquoi créer un compte pour demander un devis ?",
          a: "Les devis dépendent des tarifs et de l'historique d'équipement de votre établissement. Un compte conserve vos devis, vos documents de livraison et vos rapports d'intervention au même endroit.",
        },
        {
          q: "Quels sont les délais de livraison et d'installation ?",
          a: "Les appareils en stock partent généralement sous cinq jours ouvrés. Les équipements configurés ou importés demandent trois à six semaines. L'installation et l'étalonnage sont planifiés directement avec votre équipe dès la confirmation de la commande.",
        },
        {
          q: "Formez-vous le personnel clinique et technique ?",
          a: "Oui. Chaque installation comprend une séance pratique pour le personnel qui utilisera l'appareil, et des formations de rappel peuvent être réservées à tout moment auprès de notre équipe services.",
        },
      ],
    },
    common: {
      medicalEquipment: "Équipement médical",
      search: "Rechercher",
      changeLanguage: "Changer de langue",
      location: "Localisation et coordonnées",
      home: "Accueil KREW",
    },
    footer: "© KREW. Tous droits réservés.",
  },
  ar: {
    nav: { products: "المعدات", services: "الخدمات", about: "من نحن", contact: "اتصل بنا" },
    hero: {
      title: "أجهزة طبية ومعدات عتادية، تُسلَّم بعناية.",
      subtitle:
        "توفّر KREW للمستشفيات والعيادات والمختبرات أجهزة طبية معتمدة ومعدات عتادية موثوقة.",
      cta: "تصفح المعدات",
      secondary: "طلب عرض سعر",
    },
    products: {
      title: "معدات مختارة",
      intro: "أجهزة ومعدات معتمدة للاستخدام السريري ومختبرات التحليل.",
      addToQuote: "أضف إلى عرض السعر",
      items: [
        { name: "جهاز مراقبة المريض", category: "جهاز طبي", description: "مراقبة متعددة المعايير مع شاشة واضحة مقاس 12 بوصة." },
        { name: "وحدة الأشعة السينية الرقمية", category: "التصوير", description: "تصوير إشعاعي رقمي عالي الدقة للاستخدام اليومي." },
        { name: "مضخة التسريب الوريدي", category: "جهاز طبي", description: "تسريب حجمي دقيق مع تنبيهات لأخطاء الجرعة." },
        { name: "محطة عمل صناعية", category: "عتاد", description: "حاسوب متين عالي الأداء لشبكات المختبرات والمستشفيات." },
        { name: "جهاز الطرد المركزي للمختبر", category: "مختبر", description: "دوار هادئ ومتوازن لتحضير العينات بشكل روتيني." },
        { name: "خزانة خوادم الشبكة", category: "عتاد", description: "خزانة آمنة ومبردة لأنظمة البيانات السريرية والتصوير." },
      ],
    },
    services: {
      title: "خدماتنا",
      eyebrow: "KREW / الدعم",
      items: [
        { title: "التركيب", text: "تركيب ومعايرة في الموقع بواسطة فنيين مدربين." },
        { title: "الصيانة", text: "خطط صيانة وقائية تحافظ على عمل المعدات." },
        { title: "التدريب", text: "تدريب عملي للكوادر السريرية والفنية." },
      ],
    },
    contact: {
      title: "تواصل معنا",
      text: "أخبرنا باحتياجات منشأتك وسنعد لك عرض سعر.",
      email: "sales@krew.example",
      phone: "+1 000 000 0000",
      details: {
        eyebrow: "لنعمل معًا",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        support: "الدعم",
        supportText: "المستشفيات والعيادات والمختبرات",
      },
      form: {
        heading: "طلب عرض سعر",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        facility: "المنشأة أو المؤسسة",
        message: "ما المعدات التي تحتاجها؟",
        submit: "إرسال الطلب",
        note: "نرد خلال يوم عمل واحد.",
        sent: "سيُفتح تطبيق البريد لديك مع الطلب جاهزًا للإرسال.",
      },
    },
    about: {
      title: "من نحن",
      text: "توفّر KREW للمستشفيات والعيادات والمختبرات أجهزة طبية معتمدة ومعدات عتادية موثوقة. من اختيار الجهاز المناسب إلى التركيب والصيانة والتدريب، يساعد فريقنا المنشآت الصحية على بناء برامج معدات موثوقة.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "اشتريت معدات KREW مؤخرًا. كيف أفعّل خطة الخدمة والضمان؟",
          a: "تواصل مع فريق الدعم مع رقم الطلب والأرقام التسلسلية للأجهزة. نسجّل المعدات ونؤكد مدة الضمان ونحدد موعد أول زيارة صيانة وقائية لمنشأتك.",
        },
        {
          q: "هل دعم KREW مجاني؟",
          a: "الاستشارة عن بُعد عبر الهاتف أو البريد الإلكتروني مشمولة مع كل عملية شراء. أما الزيارات الميدانية وقطع الغيار والإصلاحات خارج الضمان فتُقدَّر بعرض سعر يُعتمد قبل بدء أي عمل.",
        },
        {
          q: "لدي سؤال حول طلب — أين أجد الإجابة؟",
          a: "يمكن لمدير حسابك تأكيد مواعيد التسليم والفواتير وحالة الطلب. وللحالات العاجلة اتصل بخط الدعم المذكور في صفحة الاتصال مع ذكر رقم الطلب.",
        },
        {
          q: "لماذا أحتاج إلى حساب لطلب عرض سعر؟",
          a: "ترتبط عروض الأسعار بأسعار منشأتك وسجل معداتها. ويحفظ الحساب عروض الأسعار ومستندات التسليم وسجلات الخدمة في مكان واحد.",
        },
        {
          q: "كم يستغرق التسليم والتركيب؟",
          a: "تُشحن المعدات المتوفرة عادةً خلال خمسة أيام عمل، بينما تستغرق المعدات المُهيأة أو المستوردة من ثلاثة إلى ستة أسابيع. ويُحدد موعد التركيب والمعايرة مباشرة مع فريقك بعد تأكيد الطلب.",
        },
        {
          q: "هل تدرّبون الكوادر السريرية والفنية؟",
          a: "نعم. يشمل كل تركيب جلسة تدريب عملية للكوادر التي ستستخدم الجهاز، ويمكن حجز تدريب تنشيطي في أي وقت عبر فريق الخدمات.",
        },
      ],
    },
    common: {
      medicalEquipment: "معدات طبية",
      search: "بحث",
      changeLanguage: "تغيير اللغة",
      location: "الموقع وبيانات الاتصال",
      home: "الصفحة الرئيسية KREW",
    },
    footer: "© KREW. جميع الحقوق محفوظة.",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
