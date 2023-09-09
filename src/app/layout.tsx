import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-background text-slate-100`}>
        <Navbar />
        <div className=" container mx-auto p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
