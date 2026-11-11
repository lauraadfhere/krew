"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Link = { label: string; href: string };
type LanguageLink = { code: string; label: string; current: boolean };

export default function MobileMenu({
  items,
  languages,
  languageLabel,
  cta,
  homeHref,
  homeLabel,
  closeLabel,
}: {
  items: Link[];
  languages: LanguageLink[];
  languageLabel: string;
  cta: Link;
  homeHref: string;
  homeLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const rest = pathname.split("/").slice(2).join("/");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => media.matches && setOpen(false);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="group relative ms-1 grid h-10 w-10 place-items-center overflow-hidden text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true" className="absolute right-0 top-0 h-2 w-2 bg-[#CC0000] group-hover:bg-[#a60000]" />

        <span className="relative block h-[15px] w-[20px]">
          <span className="absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-all duration-300 ease-out group-hover:w-[70%]" />
          <span className="absolute left-0 top-1/2 block h-[1.5px] w-[60%] -translate-y-1/2 bg-current transition-all duration-300 ease-out group-hover:w-full" />
          <span className="absolute bottom-0 left-0 block h-[1.5px] w-full bg-current transition-all duration-300 ease-out group-hover:w-[70%]" />
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label={closeLabel}
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="krew-backdrop fixed inset-0 z-40 cursor-default bg-black/45 backdrop-blur-[1px]"
          />

          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="krew-drawer fixed inset-y-0 end-0 z-50 flex w-full max-w-[430px] flex-col bg-[#CC0000] text-white shadow-[-24px_0_60px_rgba(0,0,0,0.28)]"
          >
            <div className="flex items-center justify-between border-b border-white/25 px-5 py-4 sm:px-7">
              <a href={homeHref} onClick={() => setOpen(false)} aria-label={homeLabel} className="flex items-center">
                <Image src="/brand/krew-logo-final.png" alt="KREW" width={2172} height={724} className="h-7 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={closeLabel}
                className="-me-2 grid h-10 w-10 place-items-center text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M5 5l14 14M19 5 5 19" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-6 pt-2 sm:px-7">
              <ul className="divide-y divide-white/25">
                {items.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-4 text-[21px] font-medium leading-none tracking-[-0.01em] text-white transition-opacity hover:opacity-70 sm:text-[23px]"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-[10px] font-normal tabular-nums tracking-[0.14em] text-white/55">
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{languageLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <a
                      key={language.code}
                      href={rest ? `/${language.code}/${rest}` : `/${language.code}`}
                      lang={language.code}
                      aria-current={language.current ? "page" : undefined}
                      className={`border px-3.5 py-2 text-[13px] font-medium transition-colors ${
                        language.current
                          ? "border-white bg-white text-[#CC0000]"
                          : "border-white/45 text-white hover:border-white hover:bg-white/10"
                      }`}
                    >
                      {language.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={cta.href}
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-between bg-white px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#CC0000] transition-colors hover:bg-white/90"
              >
                {cta.label}
                <span aria-hidden="true" className="text-[16px] leading-none">→</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
