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
