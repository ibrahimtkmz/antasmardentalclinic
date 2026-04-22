export default function Header() {
  return (
    <header className="relative z-20 mx-auto mt-6 w-[96%] max-w-[1440px] rounded-[0_0_26px_26px] border border-white/20 bg-[#041112] shadow-lg">
  {/* grid-cols-auto sayesinde logo ne kadar büyürse alan o kadar genişler */}
  <div className="grid items-center gap-8 px-6 py-4 md:grid-cols-[auto_1fr_auto]">
    
    <a href="#" className="flex items-center justify-center rounded-xl bg-white/95 p-2 transition-all hover:scale-105">
      <img
        src="/Anastamar.Dental.Clinic.png"
        alt="Logo"
        /* Boyutu sadece buradan yönetin: */
        className="h-16 w-auto object-contain md:h-24 lg:h-28" 
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
