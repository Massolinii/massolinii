"use client";
import "./globals.css";

import type { Metadata } from "next";
import { Major_Mono_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Massolini Portfolio",
  description: 'Massimiliano "Massolini" Esposito web developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-slate-200 flex flex-col h-screen`}
      >
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <div className="flex-grow overflow-y-auto flex flex-col justify-between">
          {children}
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
