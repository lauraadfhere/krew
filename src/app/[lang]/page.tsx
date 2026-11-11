import Image from "next/image";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";
import HeroSlider from "@/components/HeroSlider";
import ContactSection from "@/components/ContactSection";
import DiamondCluster from "@/components/DiamondCluster";

import NewsletterSection from "@/components/NewsletterSection";
import StatsBar from "@/components/StatsBar";
import FeaturedCTA from "@/components/FeaturedCTA";
import FeatureBand from "@/components/FeatureBand";
import CookieBanner from "@/components/CookieBanner";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <>

      {/* ════════════════════════════════════════════
          HERO — with hand-drawn white medical art on right
          ════════════════════════════════════════════ */}
      <HeroSlider lang={lang} />

      <FeatureBand lang={lang} />

      {/* ════════════════════════════════════════════
          FEATURED CTA — OMRON "Help Us Shape the Future" style
          rounded image + large light heading + outlined button
          ════════════════════════════════════════════ */}
      <FeaturedCTA />

      {/* ════════════════════════════════════════════
          STATS BAR — OMRON-style dark navy with 3 icons + stats
          ════════════════════════════════════════════ */}
      <StatsBar />

      {/* ════════════════════════════════════════════
          ABOUT SECTION
          ════════════════════════════════════════════ */}
      <section id="about" className="border-y border-zinc-200 bg-[#faf8f7]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14 md:py-20 lg:px-10">
          <div>
            <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CC0000] sm:text-[11px]">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#CC0000]" />
              WHY KREW
            </p>
            <h2 className="mt-3 max-w-[18ch] text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">Equipment is only the beginning.</h2>
          </div>
          <p className="max-w-2xl text-pretty border-l-2 border-[#CC0000]/25 pl-5 text-[16px] leading-8 text-black sm:text-[17px] sm:leading-9">
            From choosing the right device to installation, maintenance and training, our team helps healthcare facilities build dependable equipment programs around the needs of their people.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES SECTION
          ════════════════════════════════════════════ */}
      <section id="services" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CC0000] sm:text-[11px]">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#CC0000]" />
          SUPPORT THAT STAYS WITH YOU
        </p>
        <h2 className="mt-3 max-w-[24ch] text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">{t.services.title}</h2>

        <div className="mt-8 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article key={service.title} className="group bg-white p-6 transition-colors duration-200 hover:bg-[#fffafa] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <DiamondCluster className="w-[44px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:w-[48px]" />
                <span aria-hidden="true" className="text-[11px] font-medium tabular-nums tracking-[0.16em] text-black/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.01em] sm:text-[21px]">{service.title}</h3>
              <p className="mt-2 text-[14.5px] leading-7 text-black">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection lang={lang} />

      {/* ════════════════════════════════════════════
          NEWSLETTER — OMRON-style dark blue subscription
          ════════════════════════════════════════════ */}
      <NewsletterSection />

      {/* ════════════════════════════════════════════
          FOOTER — OMRON-style, KREW Inter font (matches OMRON sans-serif)
          ════════════════════════════════════════════ */}
      <footer className="relative isolate overflow-hidden bg-[#15171B] text-white">
        {/* Decorative diamond art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -end-20 -top-16 w-[220px] text-white/[0.06] sm:w-[320px]"
        >
          <DiamondCluster tint="" className="w-full" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 end-[22%] hidden w-[130px] text-[#CC0000]/30 lg:block"
        >
          <DiamondCluster tint="" className="w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-16 lg:px-10">
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/40">{t.contact.details.eyebrow}</p>
              <p className="mt-5 max-w-[32ch] text-[15px] leading-7 text-white/70">{t.contact.text}</p>
              <p className="mt-6 text-[13px] text-white/45">{t.contact.details.supportText}</p>
            </div>

            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">{t.nav.products}</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                <li>
                  <a href={`/${lang}/products`} className="transition-colors hover:text-white">TH100</a>
                </li>
                <li>
                  <a href={`/${lang}/products`} className="transition-colors hover:text-white">{t.hero.cta}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">{t.nav.services}</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                {t.services.items.map((item) => (
                  <li key={item.title}>
                    <a href={`/${lang}/services`} className="transition-colors hover:text-white">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">{t.nav.contact}</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                <li>
                  <a href={`mailto:${t.contact.email}`} className="transition-colors hover:text-white">{t.contact.email}</a>
                </li>
                <li>
                  <a href={`tel:${t.contact.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-white">{t.contact.phone}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </>
  );
}
