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
      icon: <FileBadge2 className="w-6 h-6 text-emerald-800" />,
      title: "Legalitas SHM & PBG Terjamin",
      desc: "Sertifikat Hak Milik (SHM) sudah berstatus split per kavling dan izin PBG terbit resmi sebelum proyek dipasarkan.",
    },
    {
      icon: <Cable className="w-6 h-6 text-emerald-800" />,
      title: "Underground Infrastructure",
      desc: "Saluran instalasi kabel listrik PLN, fiber optic internet, dan drainase air tertanam rapi di bawah tanah.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-emerald-800" />,
      title: "Zero Flood Guarantee",
      desc: "Ketinggian tanah dinaikkan 1.5 meter di atas muka jalan raya dilengkapi sistem resapan biopori dan bozem pengendali.",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-800" />,
      title: "One Gate System & RFID Security",
      desc: "Akses gerbang otomatis kartu RFID, pos keamanan 24 jam dengan integrasi kamera CCTV beresolusi tinggi di setiap sudut jalan.",
    },
    {
      icon: <Trees className="w-6 h-6 text-emerald-800" />,
      title: "40% Ruang Terbuka Hijau",
      desc: "Kawasan dilengkapi taman tematik, jogging track berkanopi pepohonan rindang, dan children playground yang aman.",
    },
    {
      icon: <Car className="w-6 h-6 text-emerald-800" />,
      title: "Row Jalan Lebar Hingga 12 Meter",
      desc: "Jalan lingkungan menggunakan paving heavy-duty K-300 yang memungkinkan papasan dua mobil leluasa dengan pedestrian ramah pejalan kaki.",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Standar Kualitas Kawasan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Fondasi Kehidupan Berkualitas &amp; Investasi Bernilai Tinggi
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Kami mengintegrasikan perencanaan arsitektur kontemporer dengan infrastruktur kawasan yang kokoh dan ramah lingkungan.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#fafaf9] border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Banner */}
        <div className="mt-12 rounded-2xl bg-[#0f382c] text-white p-8 lg:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Komitmen Pengembang
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Jaminan Serah Terima Tepat Waktu dengan Sertifikat Siap Balik Nama
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Setiap unit rumah dibangun dengan pengawasan mandor dan insinyur struktur bersertifikasi, memastikan ketepatan dimensi, kualitas finishing, dan kepastian legalitas tanpa sengketa.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-emerald-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Garansi Bangunan 12 Bulan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Biaya AJB &amp; BPHTB (Promo Tahap 1)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#konsultasi"
                className="px-6 py-3.5 rounded-xl bg-white text-[#0f382c] font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95"
              >
                Konsultasi dengan Property Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationGuide() {
  const westHubs = [
    { title: "Pakuwon Mall & PTC", duration: "7 Menit", desc: "Lifestyle, dining, bioskop, dan department store internasional" },
    { title: "Gerbang Tol Gunungsari / Satelit", duration: "5 Menit", desc: "Akses langsung menuju Tol Surabaya-Gempol & Mojokerto" },
    { title: "National Hospital & RS Mayapada", duration: "8 Menit", desc: "Fasilitas medis terkemuka dengan layanan darurat 24 jam" },
    { title: "Sekolah Ciputra & Spazu", duration: "10 Menit", desc: "Pendidikan bertaraf internasional dari TK hingga SMA" },
  ];

  const eastHubs = [
    { title: "Akses MERR & OERR", duration: "3 Menit", desc: "Arteri utama penghubung Surabaya Timur, Bandara, dan Pusat Kota" },
    { title: "Galaxy Mall 1, 2, & 3", duration: "10 Menit", desc: "Pusat perbelanjaan premium kawasan Surabaya Timur" },
    { title: "Bandara Internasional Juanda", duration: "22 Menit", desc: "Akses lancar melalui Tol Tambak Sumur & Juanda" },
    { title: "Kampus ITS, UNAIR C, & UBAYA", duration: "12 Menit", desc: "Sentra institusi pendidikan tinggi unggulan Jawa Timur" },
  ];

  return (
    <section id="lokasi" className="py-20 bg-[#fafaf9] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Konektivitas Strategis
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Lokasi Premium di Koridor Pertumbuhan Surabaya
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Nikmati kemudahan mobilitas harian berkat kedekatan klaster dengan jaringan jalan arteri, pusat perbelanjaan, rumah sakit, dan bandara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Surabaya Barat Hub */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                Kawasan Eksklusif Barat
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                Surabaya Barat: Babatan, Wiyung, &amp; Sambikerep
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Pusat gaya hidup urban, hunian berbukit asri, dan perkembangan komersial tercepat di Jawa Timur.
              </p>
            </div>

            <div className="space-y-4">
              {westHubs.map((hub, i) => (
                <div key={i} className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{hub.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{hub.desc}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-900 font-semibold text-xs shrink-0">
                    {hub.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Surabaya Timur Hub */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                Kawasan Dinamis Timur
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                Surabaya Timur: Rungkut, Pandugo, &amp; MERR
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Koneksi langsung ke bandara dan sentra pendidikan tinggi, dengan nilai apresiasi investasi yang konsisten.
              </p>
            </div>

            <div className="space-y-4">
              {eastHubs.map((hub, i) => (
                <div key={i} className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{hub.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{hub.desc}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-900 font-semibold text-xs shrink-0">
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
