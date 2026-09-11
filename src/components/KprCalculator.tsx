"use client";

import React, { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export default function KprCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(1450000000);
  const [dpPercentage, setDpPercentage] = useState<number>(10);
  const [tenorYears, setTenorYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(4.25);

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
    <section id="kpr" className="py-20 bg-white border-b border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d2e23] tracking-tight mb-10">
          Kalkulator Angsuran KPR
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-7 rounded-2xl border border-[#e5ded4] space-y-6 shadow-sm">
            {/* Property Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#43524b]">
                  Harga Properti
                </label>
                <span className="font-serif text-base font-bold text-[#0d2e23]">
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
                className="w-full h-2 bg-[#dfd7ca] rounded-lg appearance-none cursor-pointer accent-[#0d2e23]"
              />
              <div className="flex justify-between text-[11px] text-[#7d8c85] mt-1 font-medium">
                <span>Rp 500 Jt</span>
                <span>Rp 2,5 M</span>
                <span>Rp 5 M</span>
              </div>
            </div>

            {/* DP */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#43524b]">
                  Uang Muka ({dpPercentage}%)
                </label>
                <span className="text-xs font-bold text-[#8a6829]">
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
                className="w-full h-2 bg-[#dfd7ca] rounded-lg appearance-none cursor-pointer accent-[#0d2e23]"
              />
              <div className="flex justify-between text-[11px] text-[#7d8c85] mt-1 font-medium">
                <span>5%</span>
                <span>20%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Tenor */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#43524b] mb-2">
                Jangka Waktu (Tahun)
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[5, 10, 15, 20, 25].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setTenorYears(year)}
                    className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                      tenorYears === year
                        ? "bg-[#0d2e23] border-[#0d2e23] text-[#f7eed4] shadow-sm"
                        : "bg-white border-[#dcd3c4] text-[#43524b] hover:bg-[#eae4d9]"
                    }`}
                  >
                    {year} Th
                  </button>
                ))}
              </div>
            </div>

            {/* Interest */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#43524b]">
                  Suku Bunga KPR Fixed
                </label>
                <span className="text-xs font-bold text-[#8a6829]">
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
                className="w-full h-2 bg-[#dfd7ca] rounded-lg appearance-none cursor-pointer accent-[#0d2e23]"
              />
              <div className="flex justify-between text-[11px] text-[#7d8c85] mt-1 font-medium">
                <span>3.0%</span>
                <span>6.5%</span>
                <span>10.0%</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0d2e23] text-white p-6 sm:p-7 rounded-2xl border border-[#235342] space-y-6 shadow-md">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#e2c77d] font-bold mb-1">
                  Estimasi Angsuran Bulanan
                </div>
                <div className="font-serif text-3xl font-bold tracking-tight text-[#f7eed4]">
                  {formatRupiah(calculation.monthlyInstallment)}
                  <span className="text-xs font-normal text-[#d4c9b3] ml-1">/bulan</span>
                </div>
                <div className="text-xs text-[#b8ccbf] mt-1">
                  Fixed {tenorYears} Tahun • Suku Bunga {interestRate}%
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#235342] text-xs">
                <div className="flex justify-between">
                  <span className="text-[#b8ccbf]">Harga Properti:</span>
                  <span className="font-semibold text-white">{formatRupiah(propertyPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ccbf]">Uang Muka:</span>
                  <span className="font-semibold text-[#e2c77d]">{formatRupiah(calculation.dpAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ccbf]">Plafon Pinjaman:</span>
                  <span className="font-semibold text-white">{formatRupiah(calculation.loanAmount)}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Halo Marketing Darmawangsa, saya ingin konsultasi KPR untuk rumah ${formatRupiah(
                    propertyPrice
                  )} dengan DP ${formatRupiah(calculation.dpAmount)}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white text-[#0d2e23] font-bold text-xs hover:bg-[#faf8f5] transition-all shadow-sm"
              >
                <span>Konsultasi Pembiayaan KPR</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8a6829]" />
              </a>
            </div>

            {/* Bank list */}
            <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5ded4]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0d2e23] mb-3">
                Bank Rekanan KPR
              </div>
              <div className="space-y-2">
                {COMPANY_PROFILE.partnerBanks.map((bank, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white border border-[#e5ded4] text-xs"
                  >
                    <span className="font-bold text-[#0d2e23]">{bank.name}</span>
                    <span className="text-[#687870] font-medium">{bank.note}</span>
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
