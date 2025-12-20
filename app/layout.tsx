import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchBanner from "@/components/LaunchBanner";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "AnkVidya",
    template: "%s | AnkVidya",
  },
  description:
    "AnkVidya is a digital workbench for Vedic Numerologists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        
      >
         <LenisProvider>
        <LaunchBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
