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
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-200/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-serif text-xl font-bold tracking-tight text-[#09100d]">
              DARMAWANGSA
            </span>
            <span className="text-[11px] tracking-widest font-semibold text-gray-500 uppercase border-l border-gray-300 pl-2.5">
              SURABAYA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#kunjungan"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#09100d] hover:bg-black text-white text-xs font-semibold transition-all"
            >
              <span>Jadwal Survey</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${COMPANY_PROFILE.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-gray-100 text-gray-800"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 mt-3 border-t border-gray-200 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#kunjungan"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-[#09100d] text-white text-xs font-semibold"
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
