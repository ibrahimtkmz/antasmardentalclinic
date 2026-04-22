export default function Header() {
  return (
    <header className="relative z-20 mx-auto mt-6 w-[96%] max-w-[1440px] rounded-[0_0_26px_26px] border border-white/80 bg-[#f7f7f8] shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      <div className="grid items-center gap-6 px-4 py-4 md:grid-cols-[320px_1fr_300px] md:px-6">
        <div className="rounded-[0_0_18px_18px] bg-[#efeff1] px-5 py-4 md:-my-4 md:mr-2 md:py-8">
          <div className="flex items-center gap-3">
            <div className="grid h-16 w-12 place-items-center text-[#1e5ea8]">
              <svg viewBox="0 0 42 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 4C19 5 10 14 10 26c0 12 8 24 11 31-1-12 4-24 9-31 7-10 7-20 1-22z" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M7 7C2 14 1 23 3 31c3 9 10 18 16 24" stroke="#0f2f58" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-xl font-black text-[#1f67b3] md:text-[22px]">TURKEY DENTAL</div>
              <div className="text-2xl font-black tracking-tight text-[#0f2f58] md:text-[34px]">IMPLANT CLINIC</div>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 text-sm font-extrabold uppercase tracking-wide text-[#122356] lg:text-[20px]">
          <a href="#" className="transition hover:text-[#2566f4]">Home</a>
          <a href="#why-us" className="transition hover:text-[#2566f4]">About Us</a>
          <a href="#services" className="transition hover:text-[#2566f4]">Treatments +</a>
          <a href="#doctors" className="transition hover:text-[#2566f4]">Doctors +</a>
          <a href="#contact" className="transition hover:text-[#2566f4]">Contact</a>
        </nav>

        <div className="flex justify-center md:justify-end">
          <button className="h-14 rounded-full bg-gradient-to-b from-[#5e8dff] to-[#3d70ec] px-10 text-[15px] font-extrabold uppercase tracking-wide text-white shadow-[0_16px_26px_rgba(61,112,236,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(61,112,236,0.5)]">
            Appointment Now
          </button>
        </div>
      </div>
    </header>
  );
}
