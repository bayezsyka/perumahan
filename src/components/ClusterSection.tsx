"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Bed,
  Bath,
  Car,
  Maximize2,
  MapPin,
  FileCheck2,
  Check,
  ChevronRight,
  Info,
  X,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { PROPERTY_CLUSTERS, PropertyCluster, COMPANY_PROFILE } from "@/data/propertyData";

export default function ClusterSection() {
  const [selectedRegion, setSelectedRegion] = useState<"Semua" | "Surabaya Barat" | "Surabaya Timur">("Semua");
  const [activeClusterModal, setActiveClusterModal] = useState<PropertyCluster | null>(null);

  const filteredClusters = PROPERTY_CLUSTERS.filter((item) => {
    if (selectedRegion === "Semua") return true;
    return item.region === selectedRegion;
  });

  return (
    <section id="unit" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Lean and Direct */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Kawasan &amp; Unit Tersedia
          </h2>

          <div className="inline-flex p-1 bg-gray-100 rounded-lg border border-gray-200 self-start md:self-auto">
            {(["Semua", "Surabaya Barat", "Surabaya Timur"] as const).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedRegion === region
                    ? "bg-[#09100d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Cluster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClusters.map((cluster) => (
            <div
              key={cluster.id}
              className="bg-[#fafaf9] rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] bg-gray-200">
                  <Image
                    src={cluster.featuredImage}
                    alt={cluster.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-gray-900 border border-gray-200 shadow-sm">
                      {cluster.region}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-gray-900 text-white shadow-sm">
                      {cluster.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 rounded text-[11px] font-semibold bg-white/90 text-gray-900 flex items-center gap-1 border border-gray-200">
                      <FileCheck2 className="w-3.5 h-3.5 text-gray-900" />
                      <span>SHM Split</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                    <span className="truncate">{cluster.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug">
                    {cluster.name}
                  </h3>

                  <div className="grid grid-cols-4 gap-2 py-3 my-4 border-y border-gray-200 text-center bg-white rounded-lg">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-400 text-[11px]">
                        <Maximize2 className="w-3 h-3 text-gray-600" />
                        <span>LT/LB</span>
                      </div>
                      <div className="font-bold text-xs text-gray-900 mt-0.5">
                        {cluster.landArea}/{cluster.buildingArea}m²
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-400 text-[11px]">
                        <Bed className="w-3 h-3 text-gray-600" />
                        <span>KT</span>
                      </div>
                      <div className="font-bold text-xs text-gray-900 mt-0.5">
                        {cluster.bedrooms}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-400 text-[11px]">
                        <Bath className="w-3 h-3 text-gray-600" />
                        <span>KM</span>
                      </div>
                      <div className="font-bold text-xs text-gray-900 mt-0.5">
                        {cluster.bathrooms}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-400 text-[11px]">
                        <Car className="w-3 h-3 text-gray-600" />
                        <span>Carport</span>
                      </div>
                      <div className="font-bold text-xs text-gray-900 mt-0.5">
                        {cluster.carport}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-2">
                    {cluster.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-gray-200/60 mt-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                    Harga Mulai
                  </div>
                  <div className="font-serif text-lg font-bold text-gray-900">
                    {cluster.priceFormatted}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveClusterModal(cluster)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 text-xs font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Spesifikasi</span>
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Halo Marketing Darmawangsa, saya tertarik dengan unit di ${cluster.name} (${cluster.region}) harga ${cluster.priceFormatted}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-[#09100d] hover:bg-black text-white text-xs font-semibold transition-colors"
                  >
                    <span>Hubungi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Spesifikasi */}
      {activeClusterModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between z-10">
              <div>
                <span className="text-[11px] font-semibold uppercase text-gray-500 tracking-wider">
                  {activeClusterModal.region} • {activeClusterModal.status}
                </span>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  {activeClusterModal.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveClusterModal(null)}
                className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 text-gray-900"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeClusterModal.gallery.map((imgUrl, i) => (
                  <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={imgUrl}
                      alt={`${activeClusterModal.name} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Spesifikasi Teknis
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Pondasi</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.pondasi}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Struktur</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.struktur}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Dinding</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.dinding}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Lantai</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.lantai}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Rangka &amp; Atap</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.atap}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Sanitair</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.sanitasi}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Kelistrikan</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.listrik}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Suplai Air</span>
                      <span className="font-semibold text-gray-900">{activeClusterModal.specs.air}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Fasilitas Terintegrasi
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeClusterModal.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-800">
                      <Sparkles className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="font-serif text-lg font-bold text-gray-900">
                {activeClusterModal.priceFormatted}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveClusterModal(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Halo Marketing Darmawangsa, saya ingin jadwal survey di ${activeClusterModal.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#09100d] text-white text-xs font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Jadwal Survey</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
