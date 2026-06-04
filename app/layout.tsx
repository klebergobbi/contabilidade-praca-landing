import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { seo, business } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { LgpdBanner } from "@/components/LgpdBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
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
  themeColor: "#0E1116",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body>
        {children}
        <JsonLd />
        <LgpdBanner />
        <Analytics />
      </body>
    </html>
  );
}
