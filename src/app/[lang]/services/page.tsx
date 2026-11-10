import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <main className="min-h-[65vh] bg-[#f7f7f5] text-zinc-900">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-10 lg:py-24">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CC0000]">{t.services.eyebrow}</p>
          <h1 className="mt-3 text-balance text-[34px] font-light leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[52px]">{t.services.title}</h1>
        </header>
        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
          {t.services.items.map((service, index) => (
            <article key={service.title} className="min-h-[220px] border-t-2 border-[#CC0000] bg-white p-6 sm:p-8">
              <span className="text-[12px] font-semibold tracking-[0.14em] text-[#CC0000]">0{index + 1}</span>
              <h2 className="mt-8 text-[20px] font-semibold tracking-[-0.01em] sm:text-[22px]">{service.title}</h2>
              <p className="mt-3 max-w-sm text-[14.5px] leading-7 text-zinc-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
