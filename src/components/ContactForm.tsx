"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Labels = Dictionary["contact"]["form"];

const fieldClass =
  "w-full rounded-md border border-[#c9c9c9] bg-white px-4 py-3 text-[15px] leading-6 text-black outline-none transition-colors duration-150 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15";
const labelClass = "mb-2 block text-[13px] font-bold text-black";

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-[#CC0000]">
      {" "}*
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
    <form onSubmit={handleSubmit} className="w-full">
      <h3 className="pb-6 text-[24px] font-bold tracking-[-0.01em] text-black">{labels.heading}</h3>

      <div className="grid gap-5 sm:grid-cols-2">
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

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-[#CC0000] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a60000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0000]"
      >
        {labels.submit}
      </button>

      <p
        aria-live="polite"
        className={`mt-4 text-[13px] leading-6 ${sent ? "font-medium text-[#a60000]" : "text-black/55"}`}
      >
        {sent ? labels.sent : labels.note}
      </p>
    </form>
  );
}
