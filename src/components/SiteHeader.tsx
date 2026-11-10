import Image from "next/image";
import { localeLabels, locales, dictionaries, type Locale } from "@/i18n/dictionaries";
import MobileMenu from "@/components/MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
        <a href={base} aria-label={t.common.home} className="mr-auto flex shrink-0 items-center gap-3">
          <Image src="/brand/krew-logo.svg" alt="KREW" width={170} height={64} priority className="h-8 w-auto brightness-0 invert sm:h-9 lg:h-10" />
          <span className="hidden border-l border-white/40 pl-3.5 text-[11px] font-medium uppercase leading-tight tracking-[0.04em] text-white xl:block">
            {t.common.medicalEquipment}
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

        <form action={`${base}/products`} role="search" aria-label={t.common.search} className="hidden w-[230px] items-center rounded-full border border-white/90 px-4 py-2 xl:flex">
          <label htmlFor="site-search" className="sr-only">{t.common.search}</label>
          <input id="site-search" name="q" type="search" placeholder={t.common.search} className="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/80" />
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4.2 4.2" /></svg>
        </form>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <LanguageSwitcher lang={lang} label={t.common.changeLanguage} />
          <a
            href={`${base}/contact#location`}
            aria-label={t.common.location}
            title={t.common.location}
            className="hidden h-8 w-8 place-items-center text-white transition-colors hover:text-white/75 lg:grid"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </a>
          <MobileMenu
            items={navItems}
            languages={locales.map((code) => ({ code, label: localeLabels[code], current: code === lang }))}
            languageLabel={t.common.changeLanguage}
            cta={{ label: t.hero.secondary, href: `${base}/contact` }}
          />
        </div>
      </div>
    </header>
  );
}
