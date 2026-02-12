import type { Metadata } from "next";
import "./globals.css";
import { Source_Serif_4 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashIntro from "@/components/SplashIntro";

const brandFont = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mackpost Management Group LLC",
    template: "%s | Mackpost Management Group LLC",
  },
  description:
    "Veteran-owned property management in Texas delivering disciplined oversight, structured reporting, and mission-focused performance.",
  keywords: [
    "Texas property management",
    "veteran-owned",
    "asset management",
    "property operations",
    "tenant relations",
    "maintenance coordination",
    "real estate management",
  ],
  openGraph: {
    title: "Mackpost Management Group LLC",
    description:
      "Mission-forward property management built on disciplined operations and transparent reporting.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${brandFont.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SplashIntro />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
