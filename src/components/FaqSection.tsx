"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function FaqSection({ title, items }: { title: string; items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto max-w-[900px] px-5 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
        <h2
          id="faq-heading"
          className="text-center text-[34px] font-light leading-none tracking-[-0.01em] text-black sm:text-[42px] lg:text-[48px]"
        >
          {title}
        </h2>

        <ul className="mt-10 border-t border-[#e5e5e5] sm:mt-14">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <li key={item.q} className="border-b border-[#e5e5e5]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-start justify-between gap-6 py-6 text-start text-[17px] font-normal leading-[1.45] text-black transition-colors hover:text-[#CC0000] sm:text-[19px]"
                  >
                    <span className="max-w-[62ch]">{item.q}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!isOpen}
                  className="max-w-[62ch] pb-7 text-[15px] leading-7 text-black/65"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
