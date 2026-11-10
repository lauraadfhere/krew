import Image from "next/image";
import { dictionaries, locales, type Locale } from "@/i18n/dictionaries";
import MobileMenu from "@/components/MobileMenu";

export default function SiteHeader({ lang }: { lang: Locale }) {
  const t = dictionaries[lang];
  const base = `/${lang}`;
  const navItems = [
    { label: t.nav.products, href: `${base}/products` },
    { label: t.nav.services, href: `${base}/services` },
    { label: t.nav.about, href: `${base}/about` },
    { label: t.nav.contact, href: `${base}/contact` },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#CC0000] text-white">
      <div className="mx-auto flex h-7 max-w-[1440px] items-center justify-end gap-7 px-5 text-[14px] sm:px-8 lg:px-10" style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', system-ui, sans-serif" }}>
        <a href={`${base}/contact`} className="hidden font-bold text-white transition-colors hover:text-white/75 sm:block">
          {t.hero.secondary}
        </a>
        <a href={`${base}/services`} className="hidden font-normal text-white transition-colors hover:text-white/75 sm:block">
          {t.nav.services}
        </a>
      </div>
      <div className="mx-auto flex min-h-[52px] max-w-[1440px] items-center gap-3 px-5 py-0 sm:px-8 lg:gap-8 lg:px-10">
        <a href={base} aria-label="KREW home" className="mr-auto flex shrink-0 items-center gap-3">
          <Image src="/brand/krew-logo.svg" alt="KREW" width={170} height={64} priority className="h-8 w-auto brightness-0 invert sm:h-9 lg:h-10" />
          <span className="hidden border-l border-white/40 pl-3.5 text-[11px] font-medium uppercase leading-tight tracking-[0.04em] text-white xl:block">
            Medical<br /> equipment
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-[17px] font-normal text-white lg:flex xl:gap-11"
          style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', sans-serif" }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-white/75">
              {item.label}
            </a>
          ))}
        </nav>

        <form action={`${base}/products`} role="search" className="hidden w-[230px] items-center rounded-full border border-white/90 px-4 py-2 xl:flex">
          <label htmlFor="site-search" className="sr-only">Search</label>
          <input id="site-search" name="q" type="search" placeholder="Search" className="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/80" />
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4.2 4.2" /></svg>
        </form>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <details className="group relative">
            <summary aria-label="Change language" className="grid h-8 w-8 cursor-pointer list-none place-items-center transition-colors hover:text-white/75 [&::-webkit-details-marker]:hidden">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" /></svg>
            </summary>
            <ul className="absolute right-0 top-full z-40 mt-[14px] min-w-[170px] border border-zinc-200 bg-white py-2 text-[15px] text-zinc-700 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
              {locales.map((code) => (
                <li key={code}>
                  <a
                    href={`/${code}`}
                    lang={code}
                    aria-current={code === lang ? "page" : undefined}
                    className={code === lang ? "block bg-zinc-100 px-5 py-2.5 font-bold text-zinc-900" : "block px-5 py-2.5 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"}
                  >
                    {code === "en" ? "English" : code === "fr" ? "Français" : "العربية"}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <MobileMenu
            items={navItems}
            languages={locales.map((code) => ({ code, href: `/${code}`, current: code === lang }))}
            cta={{ label: t.hero.secondary, href: `${base}/contact` }}
          />
        </div>
      </div>
    </header>
  );
}
