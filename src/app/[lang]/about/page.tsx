import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
      <h1 className="text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[36px] lg:text-[40px]">{t.about.title}</h1>
      <p className="mt-6 max-w-3xl border-l-2 border-[#CC0000]/25 pl-5 text-[16px] leading-8 sm:text-[17px] sm:leading-9">{t.about.text}</p>
    </main>
  );
}
