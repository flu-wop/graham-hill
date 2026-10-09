import type { Metadata } from "next";
import { Bebas_Neue, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const display = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const serif = EB_Garamond({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const description = `${site.album}, the debut album from ${site.artist}. ${site.genre}, ${site.location}. ${site.release}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.artist} — ${site.album}`, template: `%s — ${site.artist}` },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    title: `${site.artist} — ${site.album}`,
    description,
    type: "music.album",
    images: [{ url: "/images/cover-1200.jpg", width: 1200, height: 1200, alt: `${site.album} album cover` }],
  },
  twitter: { card: "summary_large_image", images: ["/images/cover-1200.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-ink text-paper px-3 py-2 label">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
