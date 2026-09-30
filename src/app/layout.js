import { ViewTransition } from "react";
import { Geist_Mono, Instrument_Serif, Manrope, Syne } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";
import HashLinkScroll from "@/components/common/HashLinkScroll";
import { SpeedInsights } from '@vercel/speed-insights/next';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travellia",
  description: "Travelling site",
};

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior lets Next turn smooth scrolling off during page
    // changes, so a new page starts at the top instead of scrolling there.
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${syne.variable} ${instrumentSerif.variable} ${geistMono.variable} font-sans antialiased min-h-[100vh] bg-background text-foreground`}
      >
        <Banner />
        <Navbar />
        {/* Page changes: the old page steps back and the new one settles in
            (".page-swap" in globals.css). Banner, navbar and footer carry
            their own view-transition names so they never blink. */}
        <ViewTransition update="page-swap" default="none">
          <main>{children}</main>
        </ViewTransition>
        <Footer />
        <HashLinkScroll />
        <SpeedInsights />
      </body>
    </html>
  );
}
