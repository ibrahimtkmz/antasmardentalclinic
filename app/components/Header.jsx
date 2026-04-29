'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="page-shell relative z-20 mt-6 rounded-[0_0_26px_26px] border border-[#d9ecea] bg-[#f7fffe] shadow-[0_14px_36px_rgba(8,41,38,0.12)]">
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
            className="group relative flex h-[92px] w-full max-w-[650px] overflow-hidden rounded-[20px] bg-[#c0ab80]"
          >
            <div className="flex flex-[1.25] items-center justify-center gap-4 bg-[#1f3f73] px-8 text-white">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-11 w-11 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5A9.5 9.5 0 0 1 7.4 20L3 21l1.1-4.3A9.5 9.5 0 1 1 21 11.5Z" />
                <path d="M9.3 8.8c.3-.6.7-.6 1-.6h.4c.1 0 .4 0 .5.5l.5 1.5c.1.3.1.5 0 .7l-.4.6c-.2.2-.3.3-.1.7.2.4.9 1.5 2.2 2.1 1.7.9 1.7.6 2 .6.2 0 .9-.4 1-.8l.3-.6c.1-.2.3-.2.5-.2l1.3.6c.3.1.5.2.5.4 0 .3-.2 1.3-.9 1.8-.6.4-1.4.5-1.8.4-.5-.1-1-.3-1.4-.5-.5-.2-2-.8-3.5-2.2-1.2-1.2-1.8-2.4-2-2.8-.3-.4-.5-.9-.5-1.4 0-.6.2-1.2.5-1.6Z" />
              </svg>
              <span className="text-[38px] font-extrabold leading-none tracking-tight">WHATSAPP</span>
            </div>
            <div className="relative flex flex-1 items-center justify-center gap-4 bg-[#c0ab80] px-8 text-white">
              <span className="text-[38px] font-extrabold leading-none tracking-tight">APPOINTMENT</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-11 w-11 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="1.6" />
                <path d="M8 2.5v3M16 2.5v3M7.5 12.8l2.8 2.9 6.2-6.1" />
              </svg>
            </div>
            <span className="absolute left-1/2 top-1/2 z-20 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-[#c6b58e] bg-[#ecece9] text-[#303030]">
              <span className="text-[35px] font-extrabold leading-none lowercase">contact</span>
            </span>
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
