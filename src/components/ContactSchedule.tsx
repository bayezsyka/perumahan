"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Send,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_PROFILE, PROPERTY_CLUSTERS } from "@/data/propertyData";

export function ContactSchedule() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cluster: PROPERTY_CLUSTERS[0].name,
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Halo Marketing Darmawangsa, saya ingin jadwal survey show unit:%0A- Nama: ${encodeURIComponent(
      formData.name
    )}%0A- WhatsApp: ${encodeURIComponent(
      formData.phone
    )}%0A- Cluster: ${encodeURIComponent(
      formData.cluster
    )}%0A- Tanggal: ${encodeURIComponent(
      formData.date || "Hari ini / segera"
    )}%0A- Catatan: ${encodeURIComponent(formData.notes || "-")}`;

    const waUrl = `https://wa.me/${COMPANY_PROFILE.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${message}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section id="kunjungan" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Jadwal Kunjungan &amp; Survey Unit
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs text-gray-900 uppercase tracking-wider">
                  Marketing Gallery
                </div>
                <div className="text-xs text-gray-700 mt-1 leading-relaxed">
                  {COMPANY_PROFILE.address}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <Clock className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs text-gray-900 uppercase tracking-wider">
                  Jam Buka Show Unit
                </div>
                <div className="text-xs text-gray-700 mt-1 leading-relaxed">
                  {COMPANY_PROFILE.operationalHours}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(COMPANY_PROFILE.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Langsung Marketing</span>
            </a>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-[#fafaf9] p-6 sm:p-7 rounded-2xl border border-gray-200">
            {submitted ? (
              <div className="p-6 bg-white border border-gray-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-gray-900 mx-auto" />
                <h4 className="font-serif text-base font-bold text-gray-900">
                  Data Reservasi Diteruskan
                </h4>
                <p className="text-xs text-gray-600">
                  Membuka WhatsApp representatif marketing gallery.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-gray-900 underline"
                >
                  Kirim data lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Cluster Pilihan
                    </label>
                    <select
                      value={formData.cluster}
                      onChange={(e) =>
                        setFormData({ ...formData, cluster: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      {PROPERTY_CLUSTERS.map((cl) => (
                        <option key={cl.id} value={cl.name}>
                          {cl.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Tanggal Rencana Survey
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Catatan
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Jadwal survey sore hari atau konsultasi KPR."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#09100d] hover:bg-black text-white text-xs font-semibold transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Konfirmasi Jadwal Survey</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#09100d] text-gray-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-2 md:col-span-2">
            <span className="font-serif text-base font-bold text-white tracking-tight">
              PT DARMAWANGSA GRAHA MANDIRI
            </span>
            <p className="text-gray-400 text-xs max-w-md">
              Pengembang properti terpadu di Surabaya Barat dan Surabaya Timur.
            </p>
            <div className="text-[11px] text-gray-500">
              NIB: 9120003418291 • Izin Bangunan Gedung (PBG) Pemkot Surabaya
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Kawasan
            </div>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>Darmawangsa Heights (Barat)</li>
              <li>Royal Heritage Rungkut (Timur)</li>
              <li>Citra Laguna Dian (Barat)</li>
              <li>Graha Asri Semampir (Timur)</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Kontak
            </div>
            <p className="text-xs text-gray-400">
              {COMPANY_PROFILE.phone}
              <br />
              {COMPANY_PROFILE.email}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 text-gray-500 text-[11px]">
          &copy; {new Date().getFullYear()} PT Darmawangsa Graha Mandiri Surabaya.
        </div>
      </div>
    </footer>
  );
}
