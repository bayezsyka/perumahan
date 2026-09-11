import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-gray-200 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Title & Facts */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#09100d] leading-[1.12]">
              Hunian Tapak Modern di Koridor Surabaya Barat &amp; Timur
            </h1>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-gray-800">
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">
                  Legalitas
                </span>
                <span>SHM &amp; PBG Terbit Per Kavling</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">
                  Infrastruktur
                </span>
                <span>Kabel Listrik Bawah Tanah</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">
                  Kawasan
                </span>
                <span>Elevasi +1.5m Bebas Banjir</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">
                  Akses
                </span>
                <span>5-10 Menit Akses Tol &amp; Mall</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#unit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#09100d] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Lihat Unit Tersedia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#kpr"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Kalkulator KPR</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4 text-xs text-gray-500 border-t border-gray-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-700" />
                <span>Barat: Babatan Pratama, Sambikerep, Wiyung</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-700" />
                <span>Timur: Pandugo, Rungkut, Medokan Semampir</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-200 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Show Unit Darmawangsa Living Surabaya"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-serif text-base font-bold">
                  Cluster Darmawangsa Heights
                </div>
                <div className="text-xs text-gray-200">
                  Babatan Pratama, Surabaya Barat
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-gray-200">
          {COMPANY_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="text-center px-2 py-1 first:border-l-0 border-l border-gray-100">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
