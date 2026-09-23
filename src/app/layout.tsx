import type { Metadata } from "next";
import "@flu-wop/design-system/core.css";
import "@flu-wop/design-system/compat.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Graham Hill — Self-Titled",
  description:
    "Graham Hill's debut solo album — self-titled. An Alternative record built on restraint, emotion, and authenticity.",
  openGraph: {
    title: "Graham Hill — Self-Titled",
    description: "Debut solo album — Alternative. Managed by Mid City Sound Studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="studio" lang="en" className="dark">
      <body className="bg-studio-black text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
