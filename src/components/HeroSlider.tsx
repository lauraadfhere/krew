import Image from "next/image";
import type { Locale } from "@/i18n/dictionaries";

type HeroCopy = { title: string; text: string; eyebrow: string };

const copy: Record<Locale, HeroCopy> = {
  en: {
    eyebrow: "Advancing care with trusted medical equipment",
    title: "Medical equipment for better care.",
    text: "Trusted medical devices and healthcare equipment for hospitals, clinics and the people who care for patients.",
  },
  fr: {
    eyebrow: "Faire progresser les soins avec des équipements fiables",
    title: "Des équipements médicaux pour de meilleurs soins.",
    text: "Des dispositifs médicaux et équipements fiables pour les hôpitaux, les cliniques et leurs équipes.",
  },
  ar: {
    eyebrow: "تطوير الرعاية بمعدات طبية موثوقة",
    title: "معدات طبية لرعاية أفضل.",
    text: "أجهزة ومعدات رعاية صحية موثوقة للمستشفيات والعيادات وفرق رعاية المرضى.",
  },
};

export default function HeroSlider({ lang }: { lang: Locale }) {
  const content = copy[lang];

  return (
    <section aria-label="KREW medical equipment" className="bg-[#CC0000] text-white" style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', sans-serif" }}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-10 pt-6 sm:px-8 md:grid-cols-2 md:gap-12 md:pb-8 md:pt-6 lg:px-10 lg:pb-8 lg:pt-6">
        <div className="max-w-[620px] md:col-start-1 md:row-start-1">
          <p className="text-[17px] font-medium leading-snug text-white">{content.eyebrow}</p>
          <h1 className="mt-4 text-[40px] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]" style={{ fontFamily: "'DIN Pro Light', 'DIN Pro', sans-serif" }}>
            {content.title}
          </h1>
          <p className="mt-6 max-w-[500px] text-[16.5px] leading-7 text-white/90 sm:text-[17.5px]">{content.text}</p>
        </div>

        <div className="relative w-full overflow-hidden rounded-[150px] bg-[#a60000] sm:rounded-[200px] md:col-start-2 md:row-start-1 md:h-[360px] lg:h-[380px]">
          <Image
            src="/hero-medical.jpg"
            alt="Caregiver supporting an older adult with medical equipment"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
