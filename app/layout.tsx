import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suitmedia Frontend Test",
  description: "Discover innovative concepts and creative solutions",
  icons: {
    icon: "https://suitmedia.com/favicon.ico",
  },
  openGraph: {
    title: "Suitmedia Frontend Test",
    description: "Discover innovative concepts and creative solutions",
    images: [
      {
        url: "https://suitmedia.com/_nuxt/img/suitmedia-logo.23633f0.png",
        width: 1200,
        height: 630,
        alt: "Suitmedia Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
