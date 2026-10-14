import type { Metadata } from "next";
import { geist } from "@/app/fonts";
import { dictionaries, type Locale } from "@/content";
import "@/app/globals.css";

const siteUrl = "https://davisamasoa.vercel.app";

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: locale === "pt" ? "/" : "/en",
      languages: { "pt-BR": "/", en: "/en" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: locale === "pt" ? "/" : "/en",
      siteName: "Davi Machado",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
  };
}

export function RootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={dictionaries[locale].htmlLang} className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
