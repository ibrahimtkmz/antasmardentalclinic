export default function Header() {
  return (
    <header className="relative z-20 mx-auto mt-6 w-[96%] max-w-[1440px] rounded-[0_0_26px_26px] border border-[#d9ecea] bg-[#f7fffe] shadow-[0_14px_36px_rgba(8,41,38,0.12)]">
      <div className="grid items-center gap-5 px-4 py-3 md:grid-cols-[auto_1fr_auto] md:px-6">
        <a href="/" className="inline-flex items-center justify-center">
          <img
            src="/Anastamar.Dental.Clinic.png"
            alt="Anastamar Dental Clinic Logo"
            className="h-30 w-auto object-contain md:h-28"
          />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide text-[#1a4743] lg:text-base">
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

        <div className="flex justify-center md:justify-end">
          <button className="h-12 rounded-full bg-gradient-to-b from-[#5fe2d6] to-[#16b3a7] px-8 text-sm font-extrabold uppercase tracking-wide text-[#053e39] shadow-[0_16px_26px_rgba(12,163,152,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(12,163,152,0.5)]">
            Appointment Now
          </button>
        </div>
      </div>
    </header>
  );
}
