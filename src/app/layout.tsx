import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://www.robertcoder.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: profile.name }],
  keywords: [
    "Technical Project Manager",
    "AI Solutions Architect",
    "Roberto Vázquez",
    "RobertCoder",
    "Arquitectura de IA",
    "Next.js",
    "DevOps",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
