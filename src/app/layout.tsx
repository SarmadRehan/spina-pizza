import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { spina } from "@/data/spina";

import "./globals.css";

// The elegant serif the brief asks for, for menu-style headings.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const title = `${spina.name} | ${spina.tagline}`;

export const metadata: Metadata = {
  title,
  description: spina.description,
  // Demo build, shared only with Spina: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: spina.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
