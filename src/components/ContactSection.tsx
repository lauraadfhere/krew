import type { Locale } from "@/i18n/dictionaries";
import { dictionaries } from "@/i18n/dictionaries";
import ContactForm from "@/components/ContactForm";

function ContactIcon({ type }: { type: "email" | "phone" | "location" }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3h10v18H7zM10 18h4" />,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#CC0000]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  );
}

export default function ContactSection({ lang, standalone = false }: { lang: Locale; standalone?: boolean }) {
  const t = dictionaries[lang];
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="contact" className="border-t border-black/10 bg-[#f2f2f2] text-black">
      <div className="mx-auto max-w-[1270px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">
              {t.contact.details.eyebrow}
            </p>

            <Heading className="mt-5 text-balance text-[34px] font-light leading-[1.08] tracking-[-0.02em] text-black sm:text-[44px] lg:text-[52px]">
              {t.contact.title}
            </Heading>
            <p className="mt-5 max-w-[46ch] text-pretty text-[15px] leading-7 text-black/65 sm:text-[16px] sm:leading-8">
              {t.contact.text}
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-7 border-t border-black/10 pt-8 sm:grid-cols-2">
              <div className="min-w-0">
                <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-black/45">
                  <ContactIcon type="email" />{t.contact.details.email}
                </dt>
                <dd className="mt-2 break-all text-[15px] text-black" dir="ltr">
                  <a className="transition-colors hover:text-[#CC0000]" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-black/45">
                  <ContactIcon type="phone" />{t.contact.details.phone}
                </dt>
                <dd className="mt-2 text-[15px] text-black" dir="ltr">{t.contact.phone}</dd>
              </div>
              <div id="location" className="scroll-mt-28 sm:col-span-2">
                <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-black/45">
                  <ContactIcon type="location" />{t.contact.details.support}
                </dt>
                <dd className="mt-2 max-w-[42ch] text-[15px] leading-7 text-black/70">{t.contact.details.supportText}</dd>
              </div>
            </dl>
          </div>

          <div className="md:pt-2">
            <ContactForm labels={t.contact.form} email={t.contact.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
