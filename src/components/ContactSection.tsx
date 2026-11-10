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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  );
}

export default function ContactSection({ lang, standalone = false }: { lang: Locale; standalone?: boolean }) {
  const t = dictionaries[lang];
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#2a090b] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-56 -z-10 h-[520px] w-[520px] rounded-full border border-white/[0.08]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[360px] w-[360px] rounded-full border border-white/[0.08]" />

      <div className="mx-auto max-w-[980px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-[600px]">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-200 sm:text-[11px]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#CC0000]" />
            <span>KREW</span><span className="text-white/35">/</span><span>{t.contact.details.eyebrow}</span>
          </div>

          <Heading className="mt-4 text-balance text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[50px]">{t.contact.title}</Heading>
          <p className="mt-4 text-pretty text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">{t.contact.text}</p>

          <dl className="mt-8 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div className="min-w-0">
              <dt className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                <ContactIcon type="email" />{t.contact.details.email}
              </dt>
              <dd className="mt-1.5 break-all text-[13px] text-white sm:text-[14px]" dir="ltr">
                <a className="underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                <ContactIcon type="phone" />{t.contact.details.phone}
              </dt>
              <dd className="mt-1.5 text-[13px] text-white sm:text-[14px]" dir="ltr">{t.contact.phone}</dd>
            </div>
            <div id="location" className="scroll-mt-28">
              <dt className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                <ContactIcon type="location" />{t.contact.details.support}
              </dt>
              <dd className="mt-1.5 text-[13px] leading-6 text-white/80 sm:text-[14px]">{t.contact.details.supportText}</dd>
            </div>
          </dl>

          <div className="relative mt-10">
            <div aria-hidden="true" className="absolute -inset-3 border border-white/10 sm:-inset-4" />
            <ContactForm labels={t.contact.form} email={t.contact.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
