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
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
      <h1 className="text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[36px] lg:text-[40px]">{t.services.title}</h1>
      <div className="mt-10 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
        {t.services.items.map((service, index) => (
          <article key={service.title} className="bg-white p-6 sm:p-8">
            <span className="font-serif text-[28px] italic leading-none text-[#CC0000]">0{index + 1}</span>
            <h2 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] sm:text-[21px]">{service.title}</h2>
            <p className="mt-2 text-[14.5px] leading-7">{service.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
