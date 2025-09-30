import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global_component/Navbar";
import { Pacifico } from "next/font/google";
import Footer from "@/components/global_component/Footer";
import { Toaster } from "sonner";

export const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhi Corp",
  description: "developed by Acolyte technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Navbar/>
        {children}
         <Toaster position="top-center" richColors />
        <Footer/>
      </body>
    </html>
  );
}
