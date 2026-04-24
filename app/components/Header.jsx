export default function Header() {
  return (
    <header className="page-shell relative z-20 mt-4 rounded-[0_0_26px_26px] border border-[#d9ecea] bg-[#f7fffe] shadow-[0_14px_36px_rgba(8,41,38,0.12)] md:mt-6">
      <div className="grid items-center gap-4 px-4 py-4 md:gap-5 md:px-6 md:py-6 lg:grid-cols-[250px_1fr_250px]">

        <div className="flex items-center justify-center lg:justify-start">
          <a href="/" className="block">
            <img
              src="/Anastamar.Dental.Clinic.png"
              alt="Anastamar Dental Clinic Logo"
              className="h-[120px] w-auto max-w-none object-contain sm:h-[145px] md:h-[185px] lg:h-[224px]"
            />
          </a>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-wide text-[#1a4743] sm:gap-x-6 sm:text-sm lg:gap-x-8 lg:text-base">
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

        <div className="flex justify-center lg:justify-end">
          <button className="h-10 rounded-full bg-gradient-to-b from-[#5fe2d6] to-[#16b3a7] px-5 text-[11px] font-extrabold uppercase tracking-wide text-[#053e39] shadow-[0_16px_26px_rgba(12,163,152,0.35)] transition hover:-translate-y-0.5 sm:px-6 sm:text-[12px] md:h-12 md:px-8 md:text-sm">
            Appointment Now
          </button>
        </div>
      </div>
    </header>
  );
}
