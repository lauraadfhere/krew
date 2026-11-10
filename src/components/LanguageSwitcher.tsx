"use client";

import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/dictionaries";

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  const segments = pathname.split("/");
  const rest = segments.slice(2).join("/");

  return (
    <details className="group relative">
      <summary
        aria-label={label}
        title={label}
        className="grid h-8 w-8 cursor-pointer list-none place-items-center transition-colors hover:text-white/75 [&::-webkit-details-marker]:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
        </svg>
      </summary>
      <ul className="absolute end-0 top-full z-40 mt-[14px] min-w-[170px] border border-zinc-200 bg-white py-2 text-[15px] text-zinc-700 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
        {locales.map((code) => {
          const href = rest ? `/${code}/${rest}` : `/${code}`;
          const isCurrent = code === lang;
          return (
            <li key={code}>
              <a
                href={href}
                lang={code}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "block bg-zinc-100 px-5 py-2.5 font-bold text-zinc-900"
                    : "block px-5 py-2.5 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                }
              >
                {localeLabels[code]}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
