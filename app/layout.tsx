import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/ReactQueryProvider";

const Tajawal_font = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajwal",
});

export const metadata: Metadata = {
  title: "solve Team",
  description: "Impact Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ReactQueryProvider>
<html lang="ar" dir="rtl">
        <body className={Tajawal_font.className}>{children}</body>
      </html>
</ReactQueryProvider>
    

  );
}