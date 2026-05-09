import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "504 Entertainment — Bağımsız Müzik & Üretim Kültürü",
  description:
    "504 Entertainment, 2025'te İstanbul Küçükçekmece'de kurulan bağımsız bir müzik ve görsel üretim kültürüdür. Tuco, Noire ve Kahn ile özgün işler.",
  keywords: [
    "504 Entertainment",
    "504 Music",
    "Türkçe Rap",
    "T-Rap",
    "Plak Şirketi",
    "Tuco",
    "Noire",
    "Kahn",
    "İstanbul",
  ],
  openGraph: {
    title: "504 Entertainment",
    description:
      "Müzik ve görsel üretim odağında ilerleyen bağımsız bir üretim kültürü.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
