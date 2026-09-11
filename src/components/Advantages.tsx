import React from "react";
import {
  Shield,
  Cable,
  Trees,
  FileBadge2,
  Car,
  Droplets,
  CheckCircle,
} from "lucide-react";

export function Advantages() {
  const pillars = [
    {
      icon: <FileBadge2 className="w-5 h-5 text-gray-900" />,
      title: "Legalitas SHM & PBG Terbit",
      desc: "Sertifikat Hak Milik sudah split per kavling dan izin PBG terbit resmi sebelum proyek dipasarkan.",
    },
    {
      icon: <Cable className="w-5 h-5 text-gray-900" />,
      title: "Infrastruktur Bawah Tanah",
      desc: "Kabel listrik PLN, serat optik internet, dan drainase air tertanam di bawah tanah.",
    },
    {
      icon: <Droplets className="w-5 h-5 text-gray-900" />,
      title: "Elevasi Tanah Bebas Banjir",
      desc: "Ketinggian lahan dinaikkan 1.5 meter di atas jalan raya dengan bozem dan biopori mandiri.",
    },
    {
      icon: <Shield className="w-5 h-5 text-gray-900" />,
      title: "Keamanan RFID & CCTV 24 Jam",
      desc: "Akses gerbang otomatis kartu RFID dengan pos satpam dan pemantauan CCTV menyeluruh.",
    },
    {
      icon: <Trees className="w-5 h-5 text-gray-900" />,
      title: "Ruang Terbuka Hijau",
      desc: "Kawasan dilengkapi taman lingkungan asri, jogging path, dan area bermain anak.",
    },
    {
      icon: <Car className="w-5 h-5 text-gray-900" />,
      title: "Row Jalan 10-12 Meter",
      desc: "Jalan paving heavy-duty K-300 yang leluasa untuk papasan kendaraan roda empat.",
    },
  ];

  return (
    <section id="infrastruktur" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Infrastruktur &amp; Standar Bangunan
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#fafaf9] border border-gray-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Banner */}
        <div className="mt-10 rounded-2xl bg-[#09100d] text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold">
              Garansi Pemeliharaan Bangunan 12 Bulan
            </h3>
            <div className="flex flex-wrap gap-4 pt-1 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span>Inspeksi Struktural SNI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span>Sertifikat Hak Milik Siap Balik Nama</span>
              </div>
            </div>
          </div>
          <a
            href="#kunjungan"
            className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold text-xs whitespace-nowrap"
          >
            Konsultasi Teknis
          </a>
        </div>
      </div>
    </section>
  );
}

export function LocationGuide() {
  const westHubs = [
    { title: "Pakuwon Mall & PTC", duration: "7 Menit", desc: "Pusat perbelanjaan dan kuliner Surabaya Barat" },
    { title: "Gerbang Tol Satelit / Gunungsari", duration: "5 Menit", desc: "Akses Tol Surabaya-Gempol & Mojokerto" },
    { title: "National Hospital & RS Mayapada", duration: "8 Menit", desc: "Fasilitas layanan kesehatan 24 jam" },
    { title: "Sekolah Ciputra Surabaya", duration: "10 Menit", desc: "Institusi pendidikan internasional" },
  ];

  const eastHubs = [
    { title: "Arteri MERR & OERR", duration: "3 Menit", desc: "Jalur utama penghubung Surabaya Timur dan Bandara" },
    { title: "Galaxy Mall 1, 2, & 3", duration: "10 Menit", desc: "Pusat lifestyle dan perbelanjaan" },
    { title: "Bandara Internasional Juanda", duration: "22 Menit", desc: "Akses via Tol Tambak Sumur" },
    { title: "Kampus ITS & UNAIR Kampus C", duration: "12 Menit", desc: "Kawasan pendidikan tinggi" },
  ];

  return (
    <section id="lokasi" className="py-20 bg-[#fafaf9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Aksesibilitas &amp; Waktu Tempuh
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Surabaya Barat */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
              Surabaya Barat (Babatan, Wiyung, Sambikerep)
            </h3>

            <div className="space-y-3">
              {westHubs.map((hub, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                  <div>
                    <div className="font-bold text-gray-900">{hub.title}</div>
                    <div className="text-gray-500 mt-0.5">{hub.desc}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-gray-200 text-gray-900 font-semibold shrink-0">
                    {hub.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Surabaya Timur */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
              Surabaya Timur (Pandugo, Rungkut, MERR)
            </h3>

            <div className="space-y-3">
              {eastHubs.map((hub, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                  <div>
                    <div className="font-bold text-gray-900">{hub.title}</div>
                    <div className="text-gray-500 mt-0.5">{hub.desc}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-gray-200 text-gray-900 font-semibold shrink-0">
                    {hub.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
