"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email && email === confirmEmail && agreed) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-[#003b73] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-16 lg:px-10">
        <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.01em] sm:text-[26px]">
          Stay in the know with KREW Healthcare Newsletter
        </h2>
        <p className="mt-4 max-w-[700px] text-[14px] leading-7 text-white/80">
          Subscribe to our healthcare newsletter to stay informed via email about product updates,
          new equipment, special offers and pricing.
          Please see our{" "}
          <a href="#" className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/90">
            Financial Incentive Terms
          </a>{" "}
          for more information.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-lg border border-white/20 bg-white/10 px-6 py-5">
            <p className="text-[15px] font-medium">✓ Thank you for subscribing! We&apos;ll keep you updated.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-wrap gap-6">
              <div className="min-w-[240px] flex-1">
                <label className="mb-2 block text-[13px] font-semibold">
                  Email address* (required)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-white/30 bg-white px-4 py-3 text-[14px] text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div className="min-w-[240px] flex-1">
                <label className="mb-2 block text-[13px] font-semibold">
                  Confirm email* (required)
                </label>
                <input
                  type="email"
                  required
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-white/30 bg-white px-4 py-3 text-[14px] text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[13px] font-semibold">Terms and conditions* (required)</p>
              <label className="mt-2 flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/40 bg-transparent accent-white"
                />
                <span className="text-[13px] leading-5 text-white/90">
                  I agree to the KREW Healthcare, Inc.{" "}
                  <a href="#" className="font-semibold underline underline-offset-2">Privacy Policy</a>
                  {" "}&{" "}
                  <a href="#" className="font-semibold underline underline-offset-2">Terms of Use Policy</a>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full border border-white bg-transparent px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-[#003b73] sm:w-auto sm:min-w-[280px]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
