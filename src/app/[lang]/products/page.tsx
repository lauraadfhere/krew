import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
      <h1 className="text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[36px] lg:text-[40px]">{t.products.title}</h1>
      <p className="mt-3 max-w-2xl text-[16px] leading-7">{t.products.intro}</p>
      <div className="mt-10 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
        {t.products.items.map((item) => (
          <article key={item.name} className="bg-white p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CC0000]">{item.category}</p>
            <h2 className="mt-3 text-[19px] font-semibold tracking-[-0.01em] sm:text-[21px]">{item.name}</h2>
            <p className="mt-2 text-[14.5px] leading-7">{item.description}</p>
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#CC0000]">{t.products.addToQuote}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
