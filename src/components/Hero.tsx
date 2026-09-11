import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2, Building, Award } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-gray-200/60 bg-gradient-to-b from-[#f8faf9] to-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Pengembang Perumahan Terpercaya Surabaya
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09100d] leading-[1.15]">
              Hunian Berkelas di Koridor Emas Surabaya Barat &amp; Timur
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-sans">
              Menghadirkan kawasan residensial modern dengan sirkulasi tropis alami, infrastruktur utilitas bawah tanah, sistem keamanan terpadu 24 jam, dan sertifikat hak milik (SHM) yang telah terpecah.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Legalitas SHM & PBG Terbit Per Kavling",
                "Kawasan Bebas Banjir & Drainase Tertutup",
                "Kabel Listrik & Fiber Optic Bawah Tanah",
                "Akses 5-10 Menit ke Pintu Tol & Mall",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#cluster"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0f382c] hover:bg-[#1b4d3e] text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-95"
              >
                <span>Jelajahi Cluster Perumahan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#kpr"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium text-sm transition-all shadow-sm"
              >
                <span>Hitung Simulasi KPR</span>
              </a>
            </div>

            {/* Mini Region Locator */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200/80 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Surabaya Barat: Babatan, Wiyung, Sambikerep</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Surabaya Timur: Rungkut, MERR, Semampir</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Showcase Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Facade Perumahan Modern Surabaya"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Show Unit Ready
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Cluster Darmawangsa Heights - Tipe Scandinavian 110
                  </div>
                  <div className="text-xs text-gray-200">
                    Jl. Babatan Pratama, Surabaya Barat
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200/80 max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Track Record</div>
                    <div className="text-sm font-bold text-gray-900">1.450+ Rumah Terbangun</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-gray-200/80 hidden sm:block">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <Building className="w-4 h-4 text-emerald-700" />
                  <span>KPR Bunga Spesial 3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
          {COMPANY_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="text-center px-2 py-1 first:border-l-0 border-l border-gray-100">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0f382c]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
