import React from "react";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Interior Show Unit Darmawangsa Living"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  Sejak 2009
                </span>
                <h4 className="font-serif text-xl font-bold mt-1">
                  Membangun dengan Komitmen &amp; Integritas Struktural
                </h4>
                <p className="text-xs text-gray-200 mt-1">
                  Telah dipercaya oleh ribuan keluarga di Kota Surabaya.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Profil Pengembang
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-1">
                PT Darmawangsa Graha Mandiri
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                Berdiri lebih dari 15 tahun di Jawa Timur, kami mendedikasikan diri pada penciptaan kawasan hunian terpadu yang memadukan keindahan arsitektur modern, kelestarian lingkungan hijau, dan kepastian legalitas bagi seluruh pemilik unit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2.5 font-bold text-gray-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Legalitas &amp; Sertifikat Clean</span>
                </div>
                <p className="text-xs text-gray-600">
                  Lahan bukan sengketa, izin persetujuan bangunan gedung (PBG) lengkap, dan sertifikat SHM split siap balik nama.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2.5 font-bold text-gray-900 text-sm mb-1">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>Struktur Berstandar SNI</span>
                </div>
                <p className="text-xs text-gray-600">
                  Uji laboratorium berkala pada beton bertulang, pondasi tiang pancang, dan instalasi kelistrikan bergaransi.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                Kantor Pemasaran &amp; Galeri Show Unit:
              </div>
              <p className="text-sm text-gray-700 font-medium">
                {COMPANY_PROFILE.address}
              </p>
              <p className="text-xs text-emerald-800 font-semibold">
                {COMPANY_PROFILE.operationalHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-[#fafaf9] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Ulasan Pemilik Unit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-1">
            Pengalaman Tinggal Bersama Darmawangsa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.testimonials.map((testi, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                  {testi.location}
                </span>
                <p className="text-sm text-gray-700 italic leading-relaxed font-serif">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <div className="font-bold text-sm text-gray-900">{testi.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{testi.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
