"use client";

import { useId, useState } from "react";

export default function MobileSearch({
  action,
  label,
  placeholder,
}: {
  action: string;
  label: string;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const inputId = `${panelId}-input`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={label}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid h-10 w-10 place-items-center text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
      >
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="10.8" cy="10.8" r="6.6" />
            <path d="m16 16 4.2 4.2" />
          </svg>
        )}
      </button>

      {open && (
        <div id={panelId} className="absolute inset-x-0 top-full border-t border-white/25 bg-[#CC0000] px-5 py-3 xl:hidden">
          <form
            action={action}
            role="search"
            className="mx-auto flex max-w-[1440px] items-center gap-3 rounded-full border border-white px-4 py-2"
          >
            <label htmlFor={inputId} className="sr-only">{label}</label>
            <input
              id={inputId}
              name="q"
              type="search"
              autoFocus
              placeholder={placeholder}
              className="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/80"
            />
            <button type="submit" aria-label={label} className="shrink-0 text-white transition-colors hover:text-white/75">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="10.8" cy="10.8" r="6.6" />
                <path d="m16 16 4.2 4.2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
