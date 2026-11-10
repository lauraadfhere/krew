import Link from "next/link";
import { defaultLocale } from "@/i18n/dictionaries";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center text-black">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#CC0000]">404</p>
      <h1 className="mt-3 text-[30px] font-semibold tracking-[-0.02em] sm:text-[40px]">Page not found</h1>
      <p className="mt-3 max-w-md text-[15px] leading-7">The page you are looking for does not exist or has moved.</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 bg-[#CC0000] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#a60000]"
      >
        Back to home
      </Link>
    </main>
  );
}
