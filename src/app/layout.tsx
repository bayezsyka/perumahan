import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#fafaf9] text-[#111827] font-sans antialiased selection:bg-[#0f382c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
