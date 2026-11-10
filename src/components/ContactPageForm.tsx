"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/dictionaries";

const copy = {
  en: {
    heading: "Personal details", title: "Select your title", choose: "Please select…", first: "First name", last: "Last name", email: "Email address", facility: "Facility or organisation", message: "How can we help?", send: "Send request", note: "We’ll open your email app with your request ready to send.", sent: "Your email app should now be open with the request ready to send.", titles: ["Mr.", "Ms.", "Mx.", "Dr."],
  },
  fr: {
    heading: "Coordonnées personnelles", title: "Sélectionnez votre titre", choose: "Veuillez sélectionner…", first: "Prénom", last: "Nom de famille", email: "Adresse e-mail", facility: "Établissement ou organisation", message: "Comment pouvons-nous vous aider ?", send: "Envoyer la demande", note: "Votre application e-mail s’ouvrira avec votre demande prête à envoyer.", sent: "Votre application e-mail devrait être ouverte avec votre demande prête à envoyer.", titles: ["M.", "Mme", "Mx", "Dr"],
  },
  ar: {
    heading: "البيانات الشخصية", title: "اختر اللقب", choose: "يرجى الاختيار…", first: "الاسم الأول", last: "اسم العائلة", email: "البريد الإلكتروني", facility: "المنشأة أو المؤسسة", message: "كيف يمكننا مساعدتك؟", send: "إرسال الطلب", note: "سنفتح تطبيق البريد لديك والطلب جاهز للإرسال.", sent: "من المفترض أن يكون تطبيق البريد قد فُتح والطلب جاهز للإرسال.", titles: ["السيد", "السيدة", "د."],
  },
} satisfies Record<Locale, {
  heading: string; title: string; choose: string; first: string; last: string; email: string; facility: string; message: string; send: string; note: string; sent: string; titles: string[];
}>;

const inputClass = "h-12 w-full rounded-lg border border-[#c9c9c9] bg-white px-4 text-[14px] text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 hover:border-zinc-500 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10";
const labelClass = "mb-2 block text-[14px] font-semibold text-zinc-900";

export default function ContactPageForm({ lang, email }: { lang: Locale; email: string }) {
  const t = copy[lang];
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = String(data.get("title") ?? "");
    const first = String(data.get("firstName") ?? "").trim();
    const last = String(data.get("lastName") ?? "").trim();
    const workEmail = String(data.get("email") ?? "").trim();
    const facility = String(data.get("facility") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`KREW enquiry — ${facility || `${first} ${last}`}`);
    const body = encodeURIComponent([
      `${t.title}: ${title}`,
      `${t.first}: ${first}`,
      `${t.last}: ${last}`,
      `${t.email}: ${workEmail}`,
      `${t.facility}: ${facility}`,
      "",
      message,
    ].join("\n"));

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="border-b border-[#c9c9c9] pb-6 text-[24px] font-bold leading-8 text-zinc-900">{t.heading}</h2>
      <div className="mt-5">
        <label htmlFor="contact-title" className={labelClass}>{t.title}</label>
        <select id="contact-title" name="title" defaultValue="" className={`${inputClass} appearance-none`}>
          <option value="">{t.choose}</option>
          {t.titles.map((title) => <option key={title} value={title}>{title}</option>)}
        </select>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className={labelClass}>{t.first}<span className="ml-1 text-[#CC0000]">*</span></label>
          <input id="contact-first-name" name="firstName" autoComplete="given-name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-last-name" className={labelClass}>{t.last}<span className="ml-1 text-[#CC0000]">*</span></label>
          <input id="contact-last-name" name="lastName" autoComplete="family-name" required className={inputClass} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-page-email" className={labelClass}>{t.email}<span className="ml-1 text-[#CC0000]">*</span></label>
        <input id="contact-page-email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>
      <div className="mt-5">
        <label htmlFor="contact-page-facility" className={labelClass}>{t.facility}</label>
        <input id="contact-page-facility" name="facility" autoComplete="organization" className={inputClass} />
      </div>
      <div className="mt-5">
        <label htmlFor="contact-page-message" className={labelClass}>{t.message}<span className="ml-1 text-[#CC0000]">*</span></label>
        <textarea id="contact-page-message" name="message" rows={4} required className="min-h-28 w-full rounded-lg border border-[#c9c9c9] bg-white px-4 py-3 text-[14px] leading-6 text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 hover:border-zinc-500 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10" />
      </div>
      <button type="submit" className="mt-6 flex w-full items-center justify-between rounded-lg bg-[#CC0000] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#a60000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0000]">
        {t.send}<span aria-hidden="true">→</span>
      </button>
      <p aria-live="polite" className="mt-3 text-[12px] leading-5 text-zinc-500">{sent ? t.sent : t.note}</p>
    </form>
  );
}
