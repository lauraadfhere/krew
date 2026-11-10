/* ─── OMRON-style dark navy stats bar with icons ─── */

export default function StatsBar() {
  const stats = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10 sm:h-12 sm:w-12">
          {/* Monitor / device icon */}
          <rect x="6" y="8" width="36" height="24" rx="2" />
          <line x1="16" y1="36" x2="32" y2="36" />
          <line x1="24" y1="32" x2="24" y2="36" />
          {/* Screen content */}
          <path d="M12 18 L16 18 L18 14 L22 24 L26 16 L28 20 L32 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      text: (
        <>
          More than <strong>10,000 units</strong> delivered worldwide for medical & healthcare use
        </>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10 sm:h-12 sm:w-12">
          {/* Person with checkmark — trusted brand */}
          <circle cx="24" cy="14" r="7" />
          <path d="M10 40 Q10 28 24 28 Q38 28 38 40" strokeLinecap="round" />
          {/* Checkmark badge */}
          <circle cx="37" cy="14" r="7" fill="none" />
          <path d="M33 14 L36 17 L41 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      text: (
        <>
          <strong>#1 trusted</strong> medical equipment supplier for clinics & hospitals
        </>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10 sm:h-12 sm:w-12">
          {/* Globe icon */}
          <circle cx="24" cy="24" r="18" />
          <ellipse cx="24" cy="24" rx="8" ry="18" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <line x1="6" y1="30" x2="42" y2="30" />
        </svg>
      ),
      text: (
        <>
          World&apos;s <strong>leading certified</strong> medical device distributor
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#003b73]">
      <div className="mx-auto grid max-w-[1440px] divide-y divide-white/15 px-5 py-8 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-0 lg:px-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 px-6 py-6 text-center text-white md:py-10"
          >
            <div className="text-white/90">{stat.icon}</div>
            <p className="max-w-[260px] text-[13px] leading-6 text-white/85 sm:text-[14px]">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
