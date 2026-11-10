import Image from "next/image";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/i18n/dictionaries";
import HeroSlider from "@/components/HeroSlider";
import ContactForm from "@/components/ContactForm";
import MobileMenu from "@/components/MobileMenu";
import NewsletterSection from "@/components/NewsletterSection";
import StatsBar from "@/components/StatsBar";
import FeaturedCTA from "@/components/FeaturedCTA";
import FeatureBand from "@/components/FeatureBand";
import CookieBanner from "@/components/CookieBanner";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir} className="min-h-screen bg-white text-black">
      {/* ════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════ */}
      <header className="relative z-30 bg-[#CC0000] text-white">
        <div className="mx-auto flex h-7 max-w-[1440px] items-center justify-end gap-7 px-5 text-[14px] sm:px-8 lg:px-10" style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', system-ui, sans-serif" }}>
          <a href={`/${lang}#contact`} className="hidden font-bold text-white transition-colors hover:text-white/75 sm:block">
            {t.hero.secondary}
          </a>
          <a href={`/${lang}#services`} className="hidden font-normal text-white transition-colors hover:text-white/75 sm:block">
            {t.nav.services}
          </a>
        </div>
        <div className="mx-auto flex min-h-[52px] max-w-[1440px] items-center gap-3 px-5 py-0 sm:px-8 lg:gap-8 lg:px-10">
          <a href={`/${lang}`} aria-label="KREW home" className="mr-auto flex shrink-0 items-center gap-3">
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
            <a href="#products" className="group flex shrink-0 items-center gap-2 whitespace-nowrap transition-colors hover:text-white/75">
              {t.nav.products}
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 6 5 5 5-5" /></svg>
            </a>
            <a href="#services" className="whitespace-nowrap transition-colors hover:text-white/75">{t.nav.services}</a>
            <a href="#about" className="whitespace-nowrap transition-colors hover:text-white/75">{t.nav.about}</a>
            <a href="#contact" className="whitespace-nowrap transition-colors hover:text-white/75">{t.nav.contact}</a>
          </nav>

          <form action={`/${lang}#products`} role="search" className="hidden w-[230px] items-center rounded-full border border-white/90 px-4 py-2 xl:flex">
            <label htmlFor="site-search" className="sr-only">Search</label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search"
              className="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/80"
            />
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4.2 4.2" /></svg>
          </form>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href="#contact"
            aria-label="Find a store"
            className="hidden h-8 w-8 place-items-center transition-colors hover:text-white/75 lg:grid"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
          </a>
          <a
            href="#products"
            aria-label="Search equipment"
            className="grid h-8 w-8 place-items-center transition-colors hover:text-white/75 xl:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4.2 4.2" /></svg>
          </a>
          <span aria-hidden="true" className="hidden h-5 border-l border-white/40 sm:block" />
          <details className="group relative">
                  <summary
                    aria-label="Change language"
                    className="grid h-8 w-8 cursor-pointer list-none place-items-center transition-colors hover:text-white/75 [&::-webkit-details-marker]:hidden"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" /></svg>
                  </summary>
                  <span aria-hidden="true" className="absolute right-3 top-full z-40 mt-[5px] h-0 w-0 border-x-[8px] border-b-[9px] border-x-transparent border-b-[#CC0000]" />
                  <ul className="absolute right-0 top-full z-40 mt-[14px] min-w-[170px] bg-[#CC0000] py-2 text-[15px] text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
                    {locales.map((code) => (
                      <li key={code}>
                        <a
                          href={`/${code}`}
                          lang={code}
                          aria-current={code === lang ? "page" : undefined}
                          className={
                            code === lang
                              ? "block px-5 py-2.5 font-bold text-white"
                              : "block px-5 py-2.5 text-white transition-colors hover:bg-white/10 hover:text-white"
                          }
                        >
                          {code === "en" ? "English" : code === "fr" ? "Français" : "العربية"}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
                <MobileMenu
                  items={[
                    { label: t.nav.products, href: "#products" },
                    { label: t.nav.services, href: "#services" },
                    { label: t.nav.about, href: "#about" },
                    { label: t.nav.contact, href: "#contact" },
                  ]}
                  languages={locales.map((code) => ({ code, href: `/${code}`, current: code === lang }))}
                  cta={{ label: t.hero.secondary, href: "#contact" }}
                />
              </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          HERO — with hand-drawn white medical art on right
          ════════════════════════════════════════════ */}
      <HeroSlider lang={lang} />

      <FeatureBand lang={lang} />

      {/* ════════════════════════════════════════════
          FEATURED CTA — OMRON "Help Us Shape the Future" style
          rounded image + large light heading + outlined button
          ════════════════════════════════════════════ */}
      <FeaturedCTA />

      {/* ════════════════════════════════════════════
          STATS BAR — OMRON-style dark navy with 3 icons + stats
          ════════════════════════════════════════════ */}
      <StatsBar />

      {/* ════════════════════════════════════════════
          ABOUT SECTION
          ════════════════════════════════════════════ */}
      <section id="about" className="border-y border-zinc-200 bg-[#faf8f7]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14 md:py-20 lg:px-10">
          <div>
            <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CC0000] sm:text-[11px]">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#CC0000]" />
              WHY KREW
            </p>
            <h2 className="mt-3 max-w-[18ch] text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">Equipment is only the beginning.</h2>
          </div>
          <p className="max-w-2xl text-pretty border-l-2 border-[#CC0000]/25 pl-5 text-[16px] leading-8 text-black sm:text-[17px] sm:leading-9">
            From choosing the right device to installation, maintenance and training, our team helps healthcare facilities build dependable equipment programs around the needs of their people.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES SECTION
          ════════════════════════════════════════════ */}
      <section id="services" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CC0000] sm:text-[11px]">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#CC0000]" />
          SUPPORT THAT STAYS WITH YOU
        </p>
        <h2 className="mt-3 max-w-[24ch] text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">{t.services.title}</h2>

        <div className="mt-8 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article key={service.title} className="group bg-white p-6 transition-colors duration-200 hover:bg-[#fffafa] sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-[28px] italic leading-none text-[#CC0000]">0{index + 1}</span>
                <span aria-hidden="true" className="h-2 w-2 bg-[#CC0000]/20 transition-colors group-hover:bg-[#CC0000]" />
              </div>
              <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] sm:text-[21px]">{service.title}</h3>
              <p className="mt-2 text-[14.5px] leading-7 text-black">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTACT SECTION
          ════════════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden bg-[#2a090b] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[#faf8f7] lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-[1440px] gap-9 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10 lg:py-16">
          <div className="max-w-[420px]">
            <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-200 sm:text-[11px]">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-red-200" />
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]">{t.contact.title}</h2>
            <p className="mt-3 text-pretty text-[15px] leading-7 text-white/70">{t.contact.text}</p>

            <dl className="mt-7 space-y-4 border-t border-white/15 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border border-white/25 text-[11px]">@</span>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Email</dt>
                  <dd>
                    <a className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white" href={`mailto:${t.contact.email}`}>
                      {t.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border border-white/25 text-[11px]">☎</span>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Phone</dt>
                  <dd className="font-medium text-white">{t.contact.phone}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="relative lg:pl-4">
            <ContactForm labels={t.contact.form} email={t.contact.email} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          NEWSLETTER — OMRON-style dark blue subscription
          ════════════════════════════════════════════ */}
      <NewsletterSection />

      {/* ════════════════════════════════════════════
          FOOTER — OMRON-style, KREW Inter font (matches OMRON sans-serif)
          ════════════════════════════════════════════ */}
      <footer className="bg-[#CC0000] text-white" style={{ fontFamily: "'DIN Pro Medium', 'DIN Pro', system-ui, sans-serif" }}>
        <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-12 sm:px-8 lg:px-10">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-[15px] font-medium text-white">Products</h3>
              <ul className="mt-5 space-y-3 text-[14px] font-normal text-white/85">
                {t.products.items.map((item) => (
                  <li key={item.name}>
                    <a href="#products" className="transition-colors hover:text-white hover:underline">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-medium text-white">Accessories</h3>
              <ul className="mt-5 space-y-3 text-[14px] font-normal text-white/85">
                <li><a href="#products" className="transition-colors hover:text-white hover:underline">Device accessories</a></li>
                <li><a href="#products" className="transition-colors hover:text-white hover:underline">Replacement parts</a></li>
                <li><a href="#products" className="transition-colors hover:text-white hover:underline">Cables &amp; connectors</a></li>
                <li><a href="#products" className="transition-colors hover:text-white hover:underline">Carrying cases</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-medium text-white">Health resources</h3>
              <ul className="mt-5 space-y-3 text-[14px] font-normal text-white/85">
                <li><a href="#" className="transition-colors hover:text-white hover:underline">All articles</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Cardiovascular</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Pain management</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Respiratory</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-medium text-white">Support</h3>
              <ul className="mt-5 space-y-3 text-[14px] font-normal text-white/85">
                <li><a href="#contact" className="transition-colors hover:text-white hover:underline">Customer support</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Where to buy</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Registration</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Warranty</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Developers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-medium text-white">Why KREW</h3>
              <ul className="mt-5 space-y-3 text-[14px] font-normal text-white/85">
                <li><a href="#about" className="transition-colors hover:text-white hover:underline">About us</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">KREW connect app</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Going for Zero</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Clinical validation</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Press room</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Middle: Logo + Social icons row ─── */}
        <div className="border-t border-white/20">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-7 sm:px-8 lg:px-10">
            <Image src="/brand/krew-logo.svg" alt="KREW" width={150} height={56} className="h-9 w-auto brightness-0 invert" />
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#003b73] transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#003b73] transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#003b73] transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#003b73] transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#003b73] transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom: Legal links bar ─── */}
        <div className="border-t border-white/20">
          <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">Privacy policy</a>
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">Terms of use</a>
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">Accessibility</a>
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">Trademarks</a>
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">Cookie policy</a>
              <a href="#" className="text-[12px] font-normal text-white/80 transition-colors hover:text-white">KREW careers</a>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-[12px] font-normal leading-5 text-white/60">
                The products, prices, and promotions on this website are subject to change.
              </p>
              <p className="shrink-0 text-[12px] font-normal text-white/70">
                KREW Healthcare, Inc. © 2026 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}
