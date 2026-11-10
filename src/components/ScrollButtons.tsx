"use client";

import { useEffect, useState } from "react";

const btnClass =
  "grid h-11 w-11 place-items-center rounded-full bg-[#CC0000] text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#a60000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0000]";

export default function ScrollButtons() {
  const [y, setY] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    function update() {
      setY(window.scrollY);
      setMax(document.documentElement.scrollHeight - window.innerHeight);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const showTop = y > 400;
  const showDown = max - y > 400;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      {showDown && (
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })}
          className={btnClass}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </button>
      )}
      {showTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={btnClass}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
        </button>
      )}
    </div>
  );
}
