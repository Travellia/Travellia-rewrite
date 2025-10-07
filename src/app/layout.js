import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/common/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] w-[100vw] bg-background text-foreground`}
      > 
        <Banner/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
