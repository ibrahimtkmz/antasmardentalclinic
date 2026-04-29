'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="page-shell sticky top-0 z-40 mt-6 rounded-[0_0_26px_26px] border border-[#d9ecea] bg-[#f7fffe] shadow-[0_14px_36px_rgba(8,41,38,0.12)]">
      <div className="grid items-center gap-5 px-5 py-6 md:grid-cols-[250px_1fr_320px] md:px-6">

        <div className="relative flex h-12 items-center justify-center md:justify-start">
          <a href="/" className="absolute top-1/2 -translate-y-1/2 md:left-0">
            <img
              src="/Anastamar.Dental.Clinic.png"
              alt="Anastamar Dental Clinic Logo"
              className="h-[200px] w-auto max-w-none object-contain md:h-[224px]"
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
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#16b3a7] px-8 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(12,96,90,0.28)] transition hover:bg-[#12998e]"
          >
            Book Appointment
          </a>
        </div>

        <div className="flex justify-end md:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b5ddda] bg-white text-[#1a4743] shadow-sm"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
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
        </div>
      )}
    </header>
  );
}
