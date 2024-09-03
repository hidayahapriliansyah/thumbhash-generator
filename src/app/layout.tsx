import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thumbhash Generator by Adi Muhamad Firmansyah",
  description: "Effortless beautiful tiny image placeholder",
  openGraph: {
    title: 'Thumbhash Generator by Adi Muhamad Firmansyah',
    description: 'Effortless beautiful tiny image placeholder',
    url: 'https://thumbhash-generator.vercel.app',
    siteName: 'Thumbhash Generator',
    images: [
      {
        url: 'https://thumbhash-generator.vercel.app/og-image.png',
        width: 1600,
        height: 900,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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
