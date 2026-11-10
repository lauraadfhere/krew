"use client";

import { useEffect, useState } from "react";

type Link = { label: string; href: string };
type LanguageLink = { code: string; href: string; current: boolean };

export default function MobileMenu({
  items,
  languages,
  cta,
}: {
  items: Link[];
  languages: LanguageLink[];
  cta: Link;
}) {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="group relative ml-1 grid h-10 w-10 place-items-center overflow-hidden text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span
          aria-hidden="true"
          className={`absolute right-0 top-0 h-2 w-2 transition-colors duration-300 ${open ? "bg-[#CC0000]" : "bg-[#CC0000] group-hover:bg-[#a60000]"}`}
        />

        <span className="relative block h-[15px] w-[20px]">
          <span
            className={`absolute left-0 block h-[1.5px] bg-current transition-all duration-300 ease-out ${
              open ? "top-1/2 w-full -translate-y-1/2 rotate-45" : "top-0 w-full group-hover:w-[70%]"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[1.5px] -translate-y-1/2 bg-current transition-all duration-300 ease-out ${
              open ? "w-full opacity-0" : "w-[60%] group-hover:w-full"
            }`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] bg-current transition-all duration-300 ease-out ${
              open ? "top-1/2 w-full -translate-y-1/2 -rotate-45" : "bottom-0 w-full group-hover:w-[70%]"
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-black/15 bg-white text-black shadow-[0_24px_40px_rgba(0,0,0,0.15)]"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-[1440px] px-5 pb-5 pt-2 sm:px-8">
            <ul className="divide-y divide-black/10">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[-0.01em] text-black transition-colors hover:text-[#CC0000]"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-[10px] tabular-nums tracking-[0.1em] text-black/40">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <details className="group mt-4 border-t border-black/15 pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium text-black [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" /></svg>
                  Language
                </span>
                <span aria-hidden="true" className="text-black/50 transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <ul className="mt-2 divide-y divide-black/10">
                {languages.map((language) => (
                  <li key={language.code}>
                    <a
                      href={language.href}
                      lang={language.code}
                      aria-current={language.current ? "page" : undefined}
                      className={
                        language.current
                          ? "block py-2.5 font-medium text-[#CC0000]"
                          : "block py-2.5 text-black transition-colors hover:text-[#CC0000]"
                      }
                    >
                      {language.code === "en" ? "English" : language.code === "fr" ? "Français" : "العربية"}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between bg-[#CC0000] px-4 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#a60000]"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
