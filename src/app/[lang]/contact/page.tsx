import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <main className="bg-[#2a090b] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-200 sm:text-[11px]">LET&apos;S WORK TOGETHER</p>
          <h1 className="mt-3 text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[36px] lg:text-[40px]">{t.contact.title}</h1>
          <p className="mt-3 text-pretty text-[15px] leading-7 text-white/70">{t.contact.text}</p>
          <dl className="mt-7 space-y-4 border-t border-white/15 pt-6 text-sm">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Email</dt>
              <dd>
                <a className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" href={`mailto:${t.contact.email}`}>
                  {t.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Phone</dt>
              <dd className="font-medium text-white">{t.contact.phone}</dd>
            </div>
          </dl>
        </div>
        <ContactForm labels={t.contact.form} email={t.contact.email} />
      </div>
    </main>
  );
}
