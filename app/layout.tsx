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
  title: "Bring Wine Country to Thanksgiving | Wine Spectator x Hestan",
  description: "From turkey to sides and festive favorites, these recipes and wine pairings are curated to complement one another. Bring the flavors of wine country straight to your table.",
  openGraph: {
    title: "Bring Wine Country to Thanksgiving | Wine Spectator x Hestan",
    description: "Nine curated wine pairings and recipes to elevate your Thanksgiving table.",
    images: [
      {
        url: "/images/hero/hestan-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wine Country Thanksgiving",
      },
    ],
    type: "website",
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
