import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thumbhash Generator by Adi Muhamad Firmansyah",
  description: "Make beautiful thumbhash as small as possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
