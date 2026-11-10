import Image from "next/image";
import type { Locale } from "@/i18n/dictionaries";

type Feature = { title: string; text: string };
type BandCopy = { title: string; text: string; features: Feature[] };

const icons = [
  <svg key="target" aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="6" /><path d="M20 2v6M20 32v6M2 20h6M32 20h6" /></svg>,
  <svg key="hand" aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M16 36V18a3 3 0 0 1 6 0v8M22 22V12a3 3 0 0 1 6 0v12M28 16a3 3 0 0 1 6 0v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-8-4l-4-6a3 3 0 0 1 4-4l2 2" /></svg>,
  <svg key="people" aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="14" cy="10" r="4" /><circle cx="26" cy="10" r="4" /><path d="M6 34v-6a8 8 0 0 1 16 0v6M18 34v-6a8 8 0 0 1 16 0v6" /></svg>,
  <svg key="phone" aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="12" y="4" width="16" height="32" rx="3" /><path d="M18 30h4" /></svg>,
];

const copy: Record<Locale, BandCopy> = {
  en: {
    title: "Superior tech for better health",
    text: "You can count on accuracy with KREW devices in your clinical toolkit. Because most of the healing happens at home, you can also feel confident recommending blood pressure monitors, nebulizers and other self-care products that help patients make lasting changes.",
    features: [
      { title: "Clinically accurate", text: "Precision-engineered testing technology gives reliable, accurate data you can trust." },
      { title: "User-friendly", text: "Intuitive, easy-to-read interfaces guide your patients to accurate readings without extra work for your team." },
      { title: "Options for any patient", text: "Every patient is different, so KREW offers a wide range of devices to suit any lifestyle." },
      { title: "Connected features", text: "Select monitors sync wirelessly with a patient's smartphone, so they can access their health data easily." },
    ],
  },
  fr: {
    title: "Une technologie supérieure pour une meilleure santé",
    text: "Vous pouvez compter sur la précision des appareils KREW dans votre trousse clinique. La plupart des soins se font à domicile : vous pouvez donc aussi recommander en toute confiance des tensiomètres, nébuliseurs et autres produits d'autosoin.",
    features: [
      { title: "Précision clinique", text: "Une technologie de mesure de haute précision fournit des données fiables sur lesquelles vous pouvez compter." },
      { title: "Facile à utiliser", text: "Des interfaces intuitives et lisibles guident vos patients vers des mesures précises sans charge de travail supplémentaire." },
      { title: "Options pour chaque patient", text: "Chaque patient est différent : KREW propose une large gamme d'appareils adaptés à tous les modes de vie." },
      { title: "Fonctions connectées", text: "Certains tensiomètres se synchronisent sans fil avec le smartphone du patient pour accéder facilement à ses données de santé." },
    ],
  },
  ar: {
    title: "تقنية متفوقة لصحة أفضل",
    text: "يمكنك الاعتماد على دقة أجهزة KREW ضمن أدواتك السريرية. ولأن معظم العلاج يحدث في المنزل، يمكنك أيضًا التوصية بثقة بأجهزة قياس ضغط الدم والأجهزة المحمولة للاستنشاق ومنتجات الرعاية الذاتية الأخرى.",
    features: [
      { title: "دقة سريرية", text: "تقنية اختبار دقيقة توفر بيانات موثوقة يمكنك الاعتماد عليها." },
      { title: "سهلة الاستخدام", text: "واجهات بديهية وواضحة توجه مرضاك إلى قراءات دقيقة دون عبء إضافي على فريقك." },
      { title: "خيارات لكل مريض", text: "كل مريض مختلف، لذلك تقدم KREW مجموعة واسعة من الأجهزة تناسب أي نمط حياة." },
      { title: "ميزات متصلة", text: "تتزامن بعض أجهزة القياس لاسلكيًا مع هاتف المريض، ليتمكن من الوصول إلى بياناته الصحية بسهولة." },
    ],
  },
};

export default function FeatureBand({ lang }: { lang: Locale }) {
  const content = copy[lang];

  return (
    <section
      aria-label="KREW technology"
      className="relative overflow-hidden bg-black text-white"
      style={{ fontFamily: "'KREW Inter', 'DIN Pro', sans-serif" }}
    >
      <Image src="/hero-caregiver.jpg" alt="" fill sizes="100vw" className="object-cover opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-24 lg:px-10">
        <div className="max-w-[520px]">
          <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.01em] sm:text-[44px] lg:text-[52px]">{content.title}</h2>
          <p className="mt-5 text-[15px] leading-7 text-white/90 sm:text-[16px]">{content.text}</p>
        </div>

        <div className="mt-14 bg-white text-black md:mt-20">
          <div className="grid divide-y divide-black/15 md:grid-cols-4 md:divide-x md:divide-y-0">
            {content.features.map((feature, index) => (
              <article key={feature.title} className="p-7 sm:p-8">
                <div className="text-black">{icons[index]}</div>
                <h3 className="mt-5 text-[15px] font-semibold">{feature.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-black/85">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
