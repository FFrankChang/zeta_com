import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

import zhMessages from "@/messages/zh.json";
import enMessages from "@/messages/en.json";

const messagesMap: Record<string, typeof zhMessages> = {
  zh: zhMessages,
  en: enMessages,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "zh" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = messagesMap[locale] ?? messagesMap[routing.defaultLocale];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
