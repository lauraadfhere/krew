import { notFound } from "next/navigation";
import { isLocale, locales, dictionaries } from "@/i18n/dictionaries";
import ContactPageForm from "@/components/ContactPageForm";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const labels = {
  en: { email: "Email", phone: "Phone", location: "Location", support: "Hospitals, clinics and laboratories", coverage: "Contact us for regional coverage." },
  fr: { email: "E-mail", phone: "Téléphone", location: "Localisation", support: "Hôpitaux, cliniques et laboratoires", coverage: "Contactez-nous pour notre couverture régionale." },
  ar: { email: "البريد الإلكتروني", phone: "الهاتف", location: "الموقع", support: "المستشفيات والعيادات والمختبرات", coverage: "تواصل معنا لمعرفة التغطية الإقليمية." },
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  const l = labels[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <main dir={dir} className="bg-[#f2f2f2] px-5 py-10 text-zinc-900 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-[980px]">
        <header className="mb-9 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#CC0000]">KREW / CONTACT</p>
          <h1 className="mt-2 text-[32px] font-extralight leading-[1.1] tracking-[-0.02em] sm:text-[46px]">{t.contact.title}</h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-6 text-zinc-600 sm:text-[15px]">{t.contact.text}</p>
        </header>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-9">
          <aside className="w-full max-w-[600px] border-t-2 border-zinc-900 bg-white lg:w-[260px] lg:shrink-0">
            <dl>
              <div className="border-b border-[#e3e3e3] px-5 py-5 sm:px-6">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{l.email}</dt>
                <dd className="mt-1.5 break-all text-[15px] text-zinc-900">
                  <a className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-[#CC0000]" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                </dd>
              </div>
              <div className="border-b border-[#e3e3e3] px-5 py-5 sm:px-6">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{l.phone}</dt>
                <dd className="mt-1.5 text-[15px] text-zinc-900">{t.contact.phone}</dd>
              </div>
              <div id="location" className="px-5 py-5 sm:px-6 scroll-mt-28">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{l.location}</dt>
                <dd className="mt-1.5 text-[14px] leading-6 text-zinc-800">{l.support}</dd>
                <dd className="mt-1 text-[13px] leading-6 text-zinc-500">{l.coverage}</dd>
              </div>
            </dl>
          </aside>

          <div className="w-full max-w-[600px] bg-white px-5 py-7 sm:px-8 sm:py-9 lg:w-[600px] lg:shrink-0">
            <ContactPageForm lang={lang} email={t.contact.email} />
          </div>
        </div>
      </div>
    </main>
  );
}
