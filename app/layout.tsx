import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "LegalEdge - Premier Legal Services & Counsel",
  description:
    "Award-winning law firm providing expert legal representation in corporate law, litigation, family law, and more. Trusted by clients nationwide.",
  generator: "Nextjs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
