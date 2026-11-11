import { notFound } from "next/navigation";
import { dictionaries, isLocale } from "@/i18n/dictionaries";
import SiteHeader from "@/components/SiteHeader";
import ScrollButtons from "@/components/ScrollButtons";
import AppLoader from "@/components/AppLoader";

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
    <div lang={lang} dir={dir} className="min-h-screen bg-white text-black">
      <AppLoader label={dictionaries[lang].common.loading} />
      <SiteHeader lang={lang} />
      {children}
      <ScrollButtons />
    </div>
  );
}
