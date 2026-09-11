import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darmawangsa Graha Mandiri | Pengembang Perumahan Eksklusif Surabaya",
  description:
    "Pengembang kawasan hunian terpadu dan perumahan modern di Surabaya Barat & Surabaya Timur. Legalitas terjamin SHM, bebas banjir, dan berkonsep green living.",
  keywords: [
    "Perumahan Surabaya",
    "Rumah Surabaya Barat",
    "Rumah Surabaya Timur",
    "Darmawangsa Graha Mandiri",
    "Developer Properti Surabaya",
    "Cluster Hunian Modern Surabaya",
    "Rumah Mewah Surabaya",
  ],
  openGraph: {
    title: "Darmawangsa Graha Mandiri - Hunian Eksklusif Surabaya",
    description: "Kawasan hunian modern, asri, dan bernilai investasi tinggi di koridor utama Surabaya.",
    url: "https://perumahan.sangkolo.my.id",
    siteName: "Darmawangsa Graha Mandiri",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${instrumentSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fafaf9] text-[#111827] font-sans antialiased selection:bg-[#0f382c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
