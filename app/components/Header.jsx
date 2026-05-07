'use client';

import { useState } from 'react';
import { LANGUAGES, useLanguage } from './LanguageProvider';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="page-shell sticky top-0 z-50 mt-0 bg-transparent transition-colors md:rounded-[0_0_26px_26px] md:border md:border-[#d9ecea] md:bg-[#f7fffe] md:shadow-[0_14px_36px_rgba(8,41,38,0.12)]"
    >
      <div className="flex items-center justify-between gap-3 px-5 py-4 md:grid md:grid-cols-[380px_1fr_120px] lg:grid-cols-[440px_1fr_140px] md:gap-5 md:rounded-none md:bg-transparent md:px-6 md:py-6">

        <div className="relative flex h-auto items-center justify-start md:h-20 md:justify-start">
          <a href="/" className="relative block md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
            <img
              src="/Anastamar.Dental.Clinic.png"
              alt="Anastamar Dental Clinic Logo"
              className="h-10 w-auto object-contain sm:h-12 md:h-32 lg:h-40"
            />
          </a>
        </div>

        <nav className="hidden items-center justify-center gap-x-2.5 text-[6.5px] whitespace-nowrap font-bold uppercase tracking-wide text-[#1a4743] md:flex lg:text-[7px]">
          <a href="/" className="transition hover:text-[#16b3a7]">{t.navHome}</a>
          <a href="/about-us" className="transition hover:text-[#16b3a7]">{t.navAbout}</a>

          <div className="group relative">
            <a href="/treatments" className="transition hover:text-[#16b3a7]">{t.navTreatments} +</a>
            <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-[#d8efec] bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:opacity-100">
              <a href="/treatments/hollywood-smile" className="block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Hollywood Smile</a>
              <a href="/treatments/dental-implant" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Dental Implant</a>
              <a href="/treatments/veneers" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Veneers</a>
              <a href="/treatments/dental-crowns" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Dental Crowns</a>
              <a href="/treatments/dental-bone-graft" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Dental Bone Graft</a>
              <a href="/treatments/sinus-lift" className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-[#1a4743] transition hover:bg-[#eaf9f7] hover:text-[#0f8b80] md:text-sm">Sinus Lift</a>
            </div>
          </div>

          <a href="/doctors" className="transition hover:text-[#16b3a7]">{t.navDoctors} +</a>
          <a href="/contact" className="transition hover:text-[#16b3a7]">{t.navContact}</a>
        </nav>

        
        <div className="relative hidden items-center md:flex">
          <button type="button" aria-label={t.language} onClick={() => setLanguageOpen((prev) => !prev)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b7d8d4] text-lg">🌐</button>
          {languageOpen && (
            <div className="absolute right-0 top-12 z-40 min-w-36 rounded-xl border border-[#d8efec] bg-white p-1 shadow-lg">
              {LANGUAGES.map((lang) => (
                <button key={lang.code} type="button" onClick={() => { changeLanguage(lang.code); setLanguageOpen(false); }} className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${language === lang.code ? 'bg-[#eaf9f7] text-[#0f8b80]' : 'text-[#1a4743]'}`}>{lang.icon} {lang.label}</button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden justify-center md:flex md:justify-end">
          <a href="/contact" className="inline-flex h-6 items-center justify-center rounded-full bg-[#16b3a7] px-2.5 text-[10px] lg:px-3.5 lg:text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(12,96,90,0.28)] transition hover:bg-[#12998e]">{t.book}</a>
        </div>

        <div className="flex items-center justify-end md:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center text-[#1a4743]"
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-current transition ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-transparent px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-2 rounded-2xl border border-[#d9ecea] bg-white p-3 text-sm font-bold uppercase tracking-wide text-[#1a4743] shadow-sm">
            <a href="/" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">{t.navHome}</a>
            <a href="/about-us" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">{t.navAbout}</a>
            <a href="/treatments" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">{t.navTreatments}</a>
            <div className="ml-3 flex flex-col gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1f5f59]">
              <a href="/treatments/hollywood-smile" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Hollywood Smile</a>
              <a href="/treatments/dental-implant" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Dental Implant</a>
              <a href="/treatments/veneers" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Veneers</a>
              <a href="/treatments/dental-crowns" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Dental Crowns</a>
              <a href="/treatments/dental-bone-graft" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Dental Bone Graft</a>
              <a href="/treatments/sinus-lift" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 normal-case tracking-normal transition hover:bg-[#e8f7f5]">Sinus Lift</a>
            </div>
            <a href="/doctors" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">{t.navDoctors}</a>
            <a href="/contact" onClick={closeMobileMenu} className="rounded-lg px-2 py-1 transition hover:bg-[#e8f7f5]">{t.navContact}</a>
          </nav>
            <div className="mt-2">
              <div className="text-xs font-semibold text-[#1a4743]">{t.language}</div>
              <div className="mt-1 flex gap-2">
              {LANGUAGES.map((lang) => (
                <button key={lang.code} type="button" onClick={() => changeLanguage(lang.code)} className={`rounded-full border px-3 py-1 text-xs ${language === lang.code ? 'border-[#16b3a7] bg-[#16b3a7] text-white' : 'border-[#c8e3df] text-[#1a4743]'}`}>{lang.icon} {lang.code.toUpperCase()}</button>
              ))}
              </div>
            </div>

        </div>
      )}
    </header>
  );
}
