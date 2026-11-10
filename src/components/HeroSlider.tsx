"use client";

import type { Locale } from "@/i18n/dictionaries";

type HeroCopy = {
  title: string;
  text: string;
  eyebrow: string;
};

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

function HandDrawing() {
  return (
    <div aria-hidden="true" className="relative flex h-full w-full items-center justify-center bg-[#CC0000]">
      <span className="absolute left-[6%] top-[12%] grid h-14 w-14 place-items-center rounded-full border-2 border-white/80">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v6a4 4 0 0 0 8 0V3" /><path d="M10 13v3a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="12" r="2" /></svg>
      </span>
      <span className="absolute right-[6%] top-[8%] grid h-14 w-14 place-items-center rounded-full border-2 border-white/80">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-4 3 8 2-4h7" /><path d="M3 5h18v14H3z" opacity="0.5" /></svg>
      </span>
      <span className="absolute bottom-[10%] left-[10%] grid h-14 w-14 place-items-center rounded-full border-2 border-white/80">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2l4 4-3 3-4-4z" /><path d="M15 5l-9 9-3 1 1-3 9-9" /><path d="M6 14l-2 6" /></svg>
      </span>
      <span className="absolute bottom-[12%] right-[8%] grid h-14 w-14 place-items-center rounded-full border-2 border-white/80">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18" /><path d="M5 18V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" /><path d="M8 9V6h8v3" /></svg>
      </span>
      <svg viewBox="0 0 300 300" className="h-[220px] w-auto text-white" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "0s" }} d="M100 190 C 80 170, 62 166, 56 150 C 52 140, 64 134, 76 144 L 100 176" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "0.3s" }} d="M100 180 L 100 92 C 100 70, 130 70, 130 92 L 132 166" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "0.5s" }} d="M132 166 L 132 66 C 132 44, 162 44, 162 66 L 164 160" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "0.7s" }} d="M164 160 L 164 82 C 164 62, 192 62, 192 82 L 194 172" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "0.9s" }} d="M194 172 L 194 112 C 194 96, 220 96, 220 112 L 220 204" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "1.1s" }} d="M220 204 C 226 242, 212 270, 190 286 L 118 286 C 104 270, 100 236, 100 190" />
        <path className="hw-draw" pathLength="1" style={{ animationDelay: "1.6s" }} d="M118 236 L 146 236 L 156 214 L 170 258 L 180 236 L 204 236" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default function HeroSlider({ lang }: { lang: Locale }) {
  const content = copy[lang];

  return (
    <section aria-label="KREW medical equipment" className="bg-[#CC0000] text-white" style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', sans-serif" }}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-8 pt-5 sm:px-8 md:grid-cols-2 md:gap-12 md:pb-6 md:pt-5 lg:px-10 lg:pb-6 lg:pt-5">
        <div className="max-w-[620px] md:col-start-1 md:row-start-1">
          <p className="text-[17px] font-medium leading-snug text-white">{content.eyebrow}</p>
          <h1 className="mt-4 text-[40px] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]" style={{ fontFamily: "'DIN Pro Light', 'DIN Pro', sans-serif" }}>
            {content.title}
          </h1>
          <p className="mt-6 max-w-[500px] text-[16.5px] leading-7 text-white/90 sm:text-[17.5px]">{content.text}</p>

        </div>

        <div className="relative w-full md:col-start-2 md:row-start-1 md:h-[260px] lg:h-[280px]">
          <HandDrawing />
        </div>
      </div>
    </section>
  );
}
