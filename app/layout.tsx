import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Win a Hestan Culinary Holiday Prize Package | Wine Spectator",
  description: "Enter for your chance to win a $465 Hestan Culinary Holiday Prize Package featuring professional-grade cookware. Plus, discover nine curated wine pairings and Thanksgiving recipes. October 14 - December 14, 2025.",
  keywords: "thanksgiving recipes, wine pairings, hestan, wine spectator, holiday cooking, sweepstakes, giveaway, thanksgiving sweepstakes",
  openGraph: {
    title: "Win a Hestan Culinary Holiday Prize Package | Wine Spectator",
    description: "Professional-grade cookware perfect for Thanksgiving. Enter to win $465 in prizes plus get nine curated wine pairings and recipes!",
    images: [
      {
        url: "/images/hero/hestan-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wine Country Thanksgiving - Win Hestan Prize Package",
      },
    ],
    type: "website",
    siteName: "Wine Spectator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Win a Hestan Culinary Holiday Prize Package",
    description: "Enter to win $465 in professional cookware from Wine Spectator & Hestan. Plus get nine curated Thanksgiving wine pairings!",
    images: ["/images/hero/hestan-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
