import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/dictionaries";
import SiteHeader from "@/components/SiteHeader";
import ScrollButtons from "@/components/ScrollButtons";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir} className="min-h-screen bg-white text-black">
      <SiteHeader lang={lang} />
      {children}
      <ScrollButtons />
    </div>
  );
}
