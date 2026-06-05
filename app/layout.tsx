import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { seo, business } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { LgpdBanner } from "@/components/LgpdBanner";
import "./globals.css";

/**
 * Stack de duas famílias (modelo Revolut):
 * - Sora (geométrica) para o display, substituta da Aeonik Pro, pesos 500/600
 *   em tamanhos gigantes com tracking negativo e line-height 1.0
 * - Inter para corpo, botões e legendas (peso 400/600), tracking levemente positivo
 */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://contabilidadepraca.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [
    "contabilidade Floriano",
    "contador Floriano PI",
    "abertura de empresa Floriano",
    "trocar de contador",
    "MEI Simples Nacional",
    "planejamento tributário",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body>
        {children}
        <JsonLd />
        <LgpdBanner />
        <Analytics />
      </body>
    </html>
  );
}
