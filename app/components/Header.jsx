export default function Header() {
  return (
<header className="relative z-20 mx-auto mt-2 w-[96%] max-w-[1440px] rounded-[0_0_20px_20px] border border-[#d9ecea] bg-[#f7fffe]/90 backdrop-blur-md shadow-md">
  <div className="grid items-center gap-5 px-4 py-0 md:grid-cols-[auto_1fr_auto] md:px-8">
    
    <a href="#" className="flex items-center py-0">
      <img
        src="/Anastamar.Dental.Clinic.png"
        alt="Anastamar Dental Clinic Logo"
        /* Yüksekliği biraz düşürdük ki beyaz şerit incelsin, 
           ama h-16 (64px) hala büyük ve okunaklıdır. */
        className="h-12 w-auto object-contain md:h-16" 
      />
    </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide text-[#1a4743] lg:text-base">
          <a href="#" className="transition hover:text-[#16b3a7]">Home</a>
          <a href="#why-us" className="transition hover:text-[#16b3a7]">About Us</a>
          <a href="#services" className="transition hover:text-[#16b3a7]">Treatments +</a>
          <a href="#doctors" className="transition hover:text-[#16b3a7]">Doctors +</a>
          <a href="#contact" className="transition hover:text-[#16b3a7]">Contact</a>
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
