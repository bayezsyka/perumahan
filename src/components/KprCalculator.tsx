"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Landmark, ArrowUpRight, HelpCircle } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export default function KprCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(1450000000);
  const [dpPercentage, setDpPercentage] = useState<number>(10);
  const [tenorYears, setTenorYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(4.25);

  // Mortgage calculations
  const calculation = useMemo(() => {
    const dpAmount = (propertyPrice * dpPercentage) / 100;
    const loanAmount = propertyPrice - dpAmount;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenorYears * 12;

    let monthlyInstallment = 0;
    if (monthlyRate > 0 && totalMonths > 0) {
      monthlyInstallment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    return {
      dpAmount,
      loanAmount,
      monthlyInstallment: Math.round(monthlyInstallment),
      totalPayment: Math.round(monthlyInstallment * totalMonths + dpAmount),
    };
  }, [propertyPrice, dpPercentage, tenorYears, interestRate]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="kpr" className="py-20 bg-[#fafaf9] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Simulasi KPR Surabaya</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Hitung Estimasi Angsuran Rumah Impian Anda
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Sesuaikan harga properti, nominal uang muka, jangka waktu tenor, dan suku bunga untuk mendapatkan gambaran pembiayaan KPR yang transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            {/* Property Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-900">
                  Harga Properti
                </label>
                <span className="font-serif text-base sm:text-lg font-bold text-[#0f382c]">
                  {formatRupiah(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min="500000000"
                max="5000000000"
                step="50000000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f382c]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>Rp 500 Jt</span>
                <span>Rp 2,5 M</span>
                <span>Rp 5 M</span>
              </div>
            </div>

            {/* Down Payment Percentage Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-900">
                  Uang Muka (DP {dpPercentage}%)
                </label>
                <span className="text-sm font-bold text-gray-800">
                  {formatRupiah(calculation.dpAmount)}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={dpPercentage}
                onChange={(e) => setDpPercentage(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f382c]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>5% (Promo)</span>
                <span>20%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Tenor (Years) Buttons */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Jangka Waktu Tenor (Tahun)
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[5, 10, 15, 20, 25].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setTenorYears(year)}
                    className={`py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${
                      tenorYears === year
                        ? "bg-[#0f382c] border-[#0f382c] text-white shadow-sm"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {year} Th
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                  <span>Suku Bunga KPR Efektif / Fixed</span>
                </label>
                <span className="text-sm font-bold text-emerald-800">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="3.0"
                max="10.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f382c]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>3.0% (Promo Khusus)</span>
                <span>6.5%</span>
                <span>10.0%</span>
              </div>
            </div>

            {/* Quick preset note */}
            <div className="flex items-start gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                Simulasi ini bersifat estimasi. Hubungi representatif kami untuk mendapatkan penawaran suku bunga KPR spesial developer dan promo bebas biaya provisi/administrasi bank.
              </span>
            </div>
          </div>

          {/* Result Card & Bank Partners */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f382c] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-emerald-200 font-semibold mb-1">
                  Estimasi Angsuran Bulanan
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {formatRupiah(calculation.monthlyInstallment)}
                  <span className="text-xs font-normal text-emerald-200 ml-1">/bulan</span>
                </div>
                <div className="text-xs text-emerald-300/80 mt-1">
                  Fixed {tenorYears} Tahun • Suku Bunga {interestRate}%
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs">
                <div className="flex justify-between">
                  <span className="text-emerald-100">Harga Rumah:</span>
                  <span className="font-semibold text-white">{formatRupiah(propertyPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-100">Uang Muka ({dpPercentage}%):</span>
                  <span className="font-semibold text-white">{formatRupiah(calculation.dpAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-100">Plafon Pinjaman KPR:</span>
                  <span className="font-semibold text-white">{formatRupiah(calculation.loanAmount)}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Halo Marketing Darmawangsa, saya ingin konsultasi KPR untuk rumah harga ${formatRupiah(
                    propertyPrice
                  )} dengan DP ${formatRupiah(calculation.dpAmount)} (tenor ${tenorYears} tahun).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-[#0f382c] font-semibold text-sm hover:bg-gray-100 transition-all shadow-md active:scale-95"
              >
                <span>Ajukan Konsultasi KPR Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bank Partners List */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                <Landmark className="w-4 h-4 text-emerald-800" />
                <span>Bank Rekanan Resmi Developer</span>
              </div>
              <div className="space-y-2.5">
                {COMPANY_PROFILE.partnerBanks.map((bank, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs"
                  >
                    <span className="font-semibold text-gray-900">{bank.name}</span>
                    <span className="text-gray-500">{bank.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
