"use client";

import { useEffect, useState } from "react";
import BrandLoader from "@/components/BrandLoader";

/**
 * First-load splash: covers the viewport with the diamond loader while
 * the document finishes loading, then fades out. Client-side navigation
 * never remounts the layout, so this only appears on a hard load.
 */
export default function AppLoader({ label }: { label: string }) {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const started = performance.now();
    let timer: number | undefined;

    const hide = () => {
      const wait = Math.max(0, 450 - (performance.now() - started));
      timer = window.setTimeout(() => {
        setFading(true);
        timer = window.setTimeout(() => setRemoved(true), 380);
      }, wait);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });

    return () => {
      window.removeEventListener("load", hide);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (removed) return null;

  return (
    <>
      <noscript>
        <style>{`#app-loader{display:none!important}`}</style>
      </noscript>
      <div
        id="app-loader"
        aria-busy={!fading}
        className={`fixed inset-0 z-[80] flex items-center justify-center bg-white transition-opacity duration-[380ms] ease-out ${
          fading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <BrandLoader label={label} />
      </div>
    </>
  );
}
