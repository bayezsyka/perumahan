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

    // Direct to WhatsApp
    const message = `Halo Marketing Darmawangsa, saya ingin reservasi jadwal survey show unit:%0A- Nama: ${encodeURIComponent(
      formData.name
    )}%0A- No. HP/WA: ${encodeURIComponent(
      formData.phone
    )}%0A- Cluster Tujuan: ${encodeURIComponent(
      formData.cluster
    )}%0A- Rencana Tanggal Survey: ${encodeURIComponent(
      formData.date || "Segera / Hari Ini"
    )}%0A- Catatan: ${encodeURIComponent(formData.notes || "-")}`;

    const waUrl = `https://wa.me/${COMPANY_PROFILE.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${message}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 400);
  };

  return (
    <section id="konsultasi" className="py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & Marketing Gallery info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Reservasi Show Unit
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-1">
                Kunjungi Show Unit &amp; Konsultasikan Kebutuhan Anda
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                Marketing Gallery dan Show Unit kami buka setiap hari. Tim konsultan properti kami siap membantu perhitungan KPR, pemilihan unit kavling terbaik, dan penjelasan spesifikasi.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-gray-900 uppercase tracking-wider">
                    Marketing Gallery &amp; Kantor Pusat
                  </div>
                  <div className="text-sm text-gray-700 mt-1">
                    {COMPANY_PROFILE.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-gray-900 uppercase tracking-wider">
                    Jam Operasional
                  </div>
                  <div className="text-sm text-gray-700 mt-1">
                    {COMPANY_PROFILE.operationalHours}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(
                  /[^0-9]/g,
                  ""
                )}?text=${encodeURIComponent(COMPANY_PROFILE.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp Marketing</span>
              </a>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#fafaf9] p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Formulir Reservasi Jadwal Survey
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Isi data di bawah ini untuk konfirmasi kehadiran Anda di lokasi cluster.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-gray-900">
                  Reservasi Anda Sedang Diteruskan
                </h4>
                <p className="text-xs text-gray-600">
                  Anda akan diarahkan ke WhatsApp representatif kami untuk konfirmasi jadwal survey show unit.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-800 underline"
                >
                  Kirim reservasi lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bpk. Irwan Saputra"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f382c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f382c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Cluster Pilihan
                    </label>
                    <select
                      value={formData.cluster}
                      onChange={(e) =>
                        setFormData({ ...formData, cluster: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f382c]"
                    >
                      {PROPERTY_CLUSTERS.map((cl) => (
                        <option key={cl.id} value={cl.name}>
                          {cl.name} ({cl.region})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Rencana Tanggal Kunjungan
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f382c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Ingin melihat tipe hook di Surabaya Barat atau info promo DP 0%."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f382c]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#0f382c] hover:bg-[#1b4d3e] text-white text-sm font-semibold transition-all shadow-sm active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim &amp; Konfirmasi Jadwal Survey</span>
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
    <footer className="bg-[#09100d] text-gray-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#1b4d3e] text-white font-serif font-bold text-base flex items-center justify-center">
                D
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                PT DARMAWANGSA GRAHA MANDIRI
              </span>
            </div>
            <p className="text-gray-400 text-xs max-w-md leading-relaxed">
              Pengembang properti terintegrasi di Jawa Timur yang berfokus pada pembangunan perumahan tapak eksklusif, ramah lingkungan, dan bernilai investasi tinggi di Surabaya.
            </p>
            <div className="text-[11px] text-gray-500">
              NIB: 9120003418291 • Izin Bangunan Gedung (PBG) Pemkot Surabaya
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Kawasan Cluster
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#cluster" className="hover:text-white transition-colors">
                  Darmawangsa Heights (Surabaya Barat)
                </a>
              </li>
              <li>
                <a href="#cluster" className="hover:text-white transition-colors">
                  Royal Heritage Rungkut (Surabaya Timur)
                </a>
              </li>
              <li>
                <a href="#cluster" className="hover:text-white transition-colors">
                  Citra Laguna Dian (Surabaya Barat)
                </a>
              </li>
              <li>
                <a href="#cluster" className="hover:text-white transition-colors">
                  Graha Asri Semampir (Surabaya Timur)
                </a>
              </li>
            </ul>
          </div>

          {/* Operational & Contact */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Layanan Konsumen
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Telp: {COMPANY_PROFILE.phone}
              <br />
              Email: {COMPANY_PROFILE.email}
              <br />
              {COMPANY_PROFILE.address}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} PT Darmawangsa Graha Mandiri. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div>
            Kawasan Perumahan Surabaya Barat &amp; Surabaya Timur
          </div>
        </div>
      </div>
    </footer>
  );
}
