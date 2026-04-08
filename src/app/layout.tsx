import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

function getMetadataBase(): URL {
  const fallback = siteConfig.domain;
  const raw = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback).trim();
  const withScheme = /^[a-zA-Z][a-zA-Z\d+.-]*:\/\//.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withScheme);
  } catch {
    try {
      return new URL(fallback);
    } catch {
      return new URL("https://localhost");
    }
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: `${siteConfig.fullName} | ${siteConfig.role}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.fullName} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.fullName,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-full font-sans antialiased`}
        style={{
          backgroundColor: "#020617",
          color: "#e5eefb",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
