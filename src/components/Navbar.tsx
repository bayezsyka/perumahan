"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
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
    { name: "Cluster Pilihan", href: "#cluster" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Simulasi KPR", href: "#kpr" },
    { name: "Lokasi Strategis", href: "#lokasi" },
    { name: "Tentang Kami", href: "#tentang" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0f382c] flex items-center justify-center text-white font-serif font-bold text-xl tracking-wider shadow-sm group-hover:bg-[#1b4d3e] transition-colors">
              D
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-[#0f382c] leading-tight">
                DARMAWANGSA
              </span>
              <span className="block text-[11px] tracking-[0.2em] uppercase font-semibold text-gray-500">
                LIVING SURABAYA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#0f382c] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Sertifikat SHM Terjamin</span>
            </div>
            <a
              href="#konsultasi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f382c] hover:bg-[#1b4d3e] text-white text-sm font-medium transition-all shadow-sm active:scale-95"
            >
              <span>Jadwalkan Survey</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                COMPANY_PROFILE.whatsappText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200"
              aria-label="Kontak WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-gray-100 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#0f382c]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-[#0f382c] text-white text-sm font-medium shadow-sm"
              >
                Jadwalkan Kunjungan Show Unit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
