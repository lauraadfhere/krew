/* ─── OMRON-style featured CTA section — rounded image + text ─── */

export default function FeaturedCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20 lg:px-10">
        {/* ─── Left: Rounded image ─── */}
        <div className="relative mx-auto w-full max-w-[480px]">
          {/* Rounded container matching OMRON's pill/oval shape */}
          <div className="overflow-hidden rounded-[40%_4%_4%_40%] sm:rounded-[45%_4%_4%_45%]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
              alt="Healthcare professional using KREW medical technology"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating accent dot */}
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-[#CC0000]" />
        </div>

        {/* ─── Right: Text content ─── */}
        <div className="max-w-[520px]">
          <p className="text-[13px] font-bold tracking-wide text-black sm:text-[14px]">
            Exclusive Opportunity for Healthcare Providers
          </p>
          <h2 className="mt-4 text-[32px] font-light leading-[1.15] tracking-[-0.02em] text-black sm:text-[38px] lg:text-[44px]" style={{ fontFamily: "'KREW Inter', 'DIN Pro', Arial, sans-serif" }}>
            Help Us Shape the Future with the KREW Equipment Study
          </h2>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-black px-7 py-3 text-[14px] font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
