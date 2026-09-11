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
    <section id="cluster" className="py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
              Koleksi Cluster Pilihan
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Kawasan Residensial Unggulan di Surabaya
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl text-sm sm:text-base">
              Setiap cluster dibangun dengan standar arsitektur premium, sertifikat tanah telah dipecah (SHM), dan berada di lokasi strategis bebas banjir.
            </p>
          </div>

          {/* Region Tabs Filter */}
          <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 self-start md:self-auto">
            {(["Semua", "Surabaya Barat", "Surabaya Timur"] as const).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? "bg-[#0f382c] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClusters.map((cluster) => (
            <div
              key={cluster.id}
              className="bg-[#fafaf9] rounded-2xl border border-gray-200/80 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image & Status Badge */}
              <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden">
                <Image
                  src={cluster.featuredImage}
                  alt={cluster.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200 shadow-sm">
                    {cluster.region}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold shadow-sm ${
                      cluster.status === "Sisa 3 Unit"
                        ? "bg-amber-600 text-white"
                        : cluster.status === "Tahap 2 Launching"
                        ? "bg-blue-700 text-white"
                        : "bg-emerald-700 text-white"
                    }`}
                  >
                    {cluster.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 backdrop-blur-sm text-white flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SHM Ready</span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">{cluster.location}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {cluster.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium italic mt-0.5 mb-3">
                    {cluster.tagline}
                  </p>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {cluster.description}
                  </p>

                  {/* Spec Chips */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-gray-200 text-center bg-white rounded-lg mb-4">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>LT/LB</span>
                      </div>
                      <div className="font-semibold text-xs text-gray-900 mt-0.5">
                        {cluster.landArea}/{cluster.buildingArea} m²
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                        <Bed className="w-3.5 h-3.5 text-emerald-700" />
                        <span>KT</span>
                      </div>
                      <div className="font-semibold text-xs text-gray-900 mt-0.5">
                        {cluster.bedrooms} Kamar
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                        <Bath className="w-3.5 h-3.5 text-emerald-700" />
                        <span>KM</span>
                      </div>
                      <div className="font-semibold text-xs text-gray-900 mt-0.5">
                        {cluster.bathrooms} Toilet
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                        <Car className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Carport</span>
                      </div>
                      <div className="font-semibold text-xs text-gray-900 mt-0.5">
                        {cluster.carport} Mobil
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {cluster.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                      Harga Mulai
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-bold text-[#0f382c]">
                      {cluster.priceFormatted}
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium">
                      {cluster.installmentFormatted}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveClusterModal(cluster)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <Info className="w-3.5 h-3.5 text-gray-600" />
                      <span>Spesifikasi</span>
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Halo Marketing Darmawangsa, saya tertarik dengan unit di ${cluster.name} (${cluster.region}) harga ${cluster.priceFormatted}. Mohon info ketersediaan dan jadwal survey show unit.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#0f382c] hover:bg-[#1b4d3e] text-white text-xs font-medium transition-colors shadow-sm"
                    >
                      <span>Tanya Unit</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cluster Details Modal */}
      {activeClusterModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-200 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  {activeClusterModal.region} • {activeClusterModal.status}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                  {activeClusterModal.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveClusterModal(null)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Photo Gallery Grid */}
              <div>
                <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Galeri Foto Unit &amp; Lingkungan
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeClusterModal.gallery.map((imgUrl, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src={imgUrl}
                        alt={`${activeClusterModal.name} view ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Spesifikasi Teknis &amp; Material Bangunan
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-500 block">Pondasi:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.pondasi}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Struktur:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.struktur}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Dinding:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.dinding}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Lantai:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.lantai}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-500 block">Rangka &amp; Penutup Atap:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.atap}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Sanitair:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.sanitasi}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Kelistrikan:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.listrik}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Suplai Air:</span>
                      <span className="font-medium text-gray-900">{activeClusterModal.specs.air}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cluster Exclusive Perks */}
              <div>
                <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Fasilitas &amp; Keunggulan Cluster
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeClusterModal.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-800">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-500">Harga Perdana Mulai:</div>
                <div className="font-serif text-xl font-bold text-[#0f382c]">
                  {activeClusterModal.priceFormatted}
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveClusterModal(null)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Halo Marketing Darmawangsa, saya ingin jadwalkan survey show unit di ${activeClusterModal.name} Surabaya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f382c] hover:bg-[#1b4d3e] text-white text-xs font-semibold shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Jadwalkan Survey</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
