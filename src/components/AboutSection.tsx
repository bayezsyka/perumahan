import React from "react";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export function AboutSection() {
  return (
    <section id="pengembang" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Interior Show Unit Darmawangsa Living"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-serif text-lg font-bold">
                  PT Darmawangsa Graha Mandiri
                </div>
                <div className="text-xs text-gray-300 mt-0.5">
                  Pengembang Kawasan Residensial Surabaya Sejak 2009
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              PT Darmawangsa Graha Mandiri
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-gray-900" />
                  <span>Legalitas &amp; Sertifikat SHM</span>
                </div>
                <p className="text-xs text-gray-600">
                  Sertifikat split per kavling dan izin PBG terbit resmi sebelum pemasaran.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-xs mb-1">
                  <Award className="w-4 h-4 text-gray-900" />
                  <span>Struktur SNI</span>
                </div>
                <p className="text-xs text-gray-600">
                  Pengawasan berkala mutu beton bertulang, tiang pancang, dan instalasi tertutup.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-5 space-y-2 text-xs">
              <div className="font-bold text-gray-900 uppercase tracking-wider">
                Kantor Pemasaran &amp; Galeri Show Unit
              </div>
              <p className="text-gray-700">
                {COMPANY_PROFILE.address}
              </p>
              <p className="text-gray-500 font-medium">
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
    <section className="py-20 bg-[#fafaf9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Ulasan Pemilik Unit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.testimonials.map((testi, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-800 text-[11px] font-semibold border border-gray-200">
                  {testi.location}
                </span>
                <p className="text-xs text-gray-700 italic leading-relaxed font-serif">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="font-bold text-xs text-gray-900">{testi.name}</div>
                <div className="text-[11px] text-gray-500">{testi.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
