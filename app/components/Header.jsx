export default function Header() {
  return (
    <header className="relative z-20 mx-auto mt-6 w-[96%] max-w-[1440px] rounded-[0_0_26px_26px] border border-white/15 bg-[#081a1a]/90 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="grid items-center gap-6 px-4 py-4 md:grid-cols-[320px_1fr_260px] md:px-6">
        <a href="#" className="inline-flex items-center justify-center px-2 py-1 md:-my-2 md:mr-2">
          <img
            src="/Anastamar.Dental.Clinic.png"
            alt="Anastamar Dental Clinic Logo"
            className="h-42 w-auto object-contain sm:h-48 md:h-[216px] lg:h-60"
          />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide text-white/90 lg:text-base">
          <a href="#" className="transition hover:text-[#5fe2d6]">Home</a>
          <a href="#why-us" className="transition hover:text-[#5fe2d6]">About Us</a>
          <a href="#services" className="transition hover:text-[#5fe2d6]">Treatments +</a>
          <a href="#doctors" className="transition hover:text-[#5fe2d6]">Doctors +</a>
          <a href="#contact" className="transition hover:text-[#5fe2d6]">Contact</a>
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
