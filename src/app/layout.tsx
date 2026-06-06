export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Serenity Source — Readings, Counseling & Clearings",
  description:
    "Tarot and oracle readings, spiritual counseling, chakra and aura clearings, home blessings, and wedding officiation. Mon–Sat 11am–7pm.",
  openGraph: {
    title: "Serenity Source — Readings, Counseling & Clearings",
    description:
      "Tarot and oracle readings, spiritual counseling, chakra and aura clearings, home blessings, and wedding officiation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="relative min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
