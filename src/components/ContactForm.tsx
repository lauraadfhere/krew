"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Labels = Dictionary["contact"]["form"];

const fieldClass =
  "w-full border border-zinc-300 bg-white px-4 py-3 text-[15px] leading-6 text-black outline-none transition-colors duration-150 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-[#CC0000] focus:ring-4 focus:ring-[#CC0000]/10";
const labelClass = "mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black";

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-[#CC0000]">
      *
    </span>
  );
}

export default function ContactForm({ labels, email }: { labels: Labels; email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const workEmail = String(data.get("email") ?? "").trim();
    const facility = String(data.get("facility") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Quote request — ${facility || name || "KREW"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${workEmail}`, `Facility: ${facility}`, "", message].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative border border-zinc-200 bg-white p-5 shadow-[0_24px_60px_rgba(30,0,0,0.08)] sm:p-8"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#CC0000]" />

      <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-black sm:text-[22px]">{labels.heading}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className={labelClass}>
            {labels.name}
            <RequiredMark />
          </label>
          <input id="quote-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="quote-email" className={labelClass}>
            {labels.email}
            <RequiredMark />
          </label>
          <input id="quote-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="quote-facility" className={labelClass}>
          {labels.facility}
        </label>
        <input id="quote-facility" name="facility" type="text" autoComplete="organization" className={fieldClass} />
      </div>

      <div className="mt-5">
        <label htmlFor="quote-message" className={labelClass}>
          {labels.message}
          <RequiredMark />
        </label>
        <textarea id="quote-message" name="message" rows={4} required className={`${fieldClass} min-h-[124px] resize-y`} />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 bg-[#CC0000] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#a60000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0000] sm:w-auto sm:self-start"
        >
          {labels.submit}
          <span aria-hidden="true" className="text-[15px] leading-none">→</span>
        </button>
        <p
          aria-live="polite"
          className={`text-xs leading-5 ${sent ? "border-l-2 border-[#CC0000] bg-[#fff5f5] px-3 py-2 font-medium text-[#a60000]" : "text-black/80"}`}
        >
          {sent ? labels.sent : labels.note}
        </p>
      </div>
    </form>
  );
}
