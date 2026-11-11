import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";
import FaqSection from "@/components/FaqSection";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <main className="bg-white">
      <section>
        <div className="mx-auto max-w-[900px] px-5 pb-4 pt-16 sm:px-8 md:pt-20">
          <h1 className="text-center text-[34px] font-light leading-[1.1] tracking-[-0.01em] text-black sm:text-[42px] lg:text-[48px]">
            {t.about.title}
          </h1>
          <p className="mx-auto mt-8 max-w-[62ch] text-pretty text-center text-[16px] leading-8 text-black/65 sm:text-[17px] sm:leading-9">
            {t.about.text}
          </p>
        </div>
      </section>

      <FaqSection title={t.faq.title} items={t.faq.items} />
    </main>
  );
}
