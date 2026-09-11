"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/propertyData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Kawasan & Unit", href: "#unit" },
    { name: "Infrastruktur", href: "#infrastruktur" },
    { name: "Kalkulator KPR", href: "#kpr" },
    { name: "Akses Lokasi", href: "#lokasi" },
    { name: "Pengembang", href: "#pengembang" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5ded4] shadow-sm py-3"
          : "bg-[#faf8f5]/85 backdrop-blur-sm border-b border-[#ece6dc] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#0d2e23] border border-[#235342] flex items-center justify-center text-[#e2c77d] font-serif font-bold text-lg shadow-sm group-hover:bg-[#134032] transition-colors">
              D
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-[#0d2e23] leading-tight">
                DARMAWANGSA
              </span>
              <span className="block text-[10px] tracking-[0.22em] uppercase font-bold text-[#8a6829]">
                LIVING SURABAYA
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[#424d47] hover:text-[#0d2e23] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#kunjungan"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0d2e23] hover:bg-[#144234] text-[#f7eed4] text-xs font-bold uppercase tracking-wider border border-[#285b4a] transition-all shadow-sm active:scale-95"
            >
              <span>Jadwal Survey</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#e2c77d]" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-[#ebf3ee] text-[#0d2e23] border border-[#c3ded0]"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#0d2e23] hover:bg-[#ece6dc]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 mt-3 border-t border-[#e5ded4] space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-2 text-sm font-bold text-[#0d2e23] hover:bg-[#ece6dc] rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#kunjungan"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-[#0d2e23] text-[#f7eed4] text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Jadwalkan Kunjungan Lokasi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
