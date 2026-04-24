'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="page-shell relative z-20 mt-6 rounded-[0_0_26px_26px] border border-[#d9ecea] bg-[#f7fffe] shadow-[0_14px_36px_rgba(8,41,38,0.12)]">
      <div className="grid items-center gap-5 px-5 py-4 md:grid-cols-[250px_1fr_250px] md:px-6 md:py-6">
        <div className="flex h-12 items-center justify-start md:justify-start">
          <a href="/" className="inline-flex items-center">
            <img
              src="/Anastamar.Dental.Clinic.png"
              alt="Anastamar Dental Clinic Logo"
              className="h-[88px] w-auto max-w-none object-contain md:h-[224px]"
            />
          </a>
        </div>

        <nav className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide text-[#1a4743] md:flex lg:text-base">
          <a href="/" className="transition hover:text-[#16b3a7]">Home</a>
          <a href="/about-us" className="transition hover:text-[#16b3a7]">About Us</a>

          <div className="group relative">
            <a href="/treatments" className="transition hover:text-[#16b3a7]">Treatments +</a>
            <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-[#d8efec] bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:opacity-100">
              <a href="/treatments/hollywood-smile" className="block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">
                Hollywood Smile
              </a>
              <a href="/treatments/dental-implant" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">
                Dental Implant
              </a>
              <a href="/treatments/veneers" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">
                Veneers
              </a>
            </div>
          </div>

          <a href="/doctors" className="transition hover:text-[#16b3a7]">Doctors +</a>
          <a href="/contact" className="transition hover:text-[#16b3a7]">Contact</a>
        </nav>

        <div className="hidden justify-center md:flex md:justify-end">
          <button className="h-10 rounded-full bg-gradient-to-b from-[#5fe2d6] to-[#16b3a7] px-6 text-[12px] font-extrabold uppercase tracking-wide text-[#053e39] shadow-[0_16px_26px_rgba(12,163,152,0.35)] transition hover:-translate-y-0.5 md:h-12 md:px-8 md:text-sm">
            Appointment Now
          </button>
        </div>

        <div className="flex justify-end md:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b5ddda] bg-white text-[#1a4743] shadow-sm"
          >
            <span className="relative block h-5 w-5">
              {mobileMenuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              ) : (
                <img src="/logo-beyaz.png" alt="Menu" className="h-5 w-5 object-contain" />
              )}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#d9ecea] px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide text-[#1a4743]">
            <a href="/" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">Home</a>
            <a href="/about-us" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">About Us</a>
            <a href="/treatments" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">Treatments</a>
            <a href="/doctors" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">Doctors</a>
            <a href="/contact" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">Contact</a>
          </nav>
          <button
            type="button"
            className="mt-4 h-11 w-full rounded-full bg-gradient-to-b from-[#5fe2d6] to-[#16b3a7] px-6 text-[12px] font-extrabold uppercase tracking-wide text-[#053e39] shadow-[0_16px_26px_rgba(12,163,152,0.35)]"
          >
            Appointment Now
          </button>
        </div>
      )}
    </header>
  );
}
