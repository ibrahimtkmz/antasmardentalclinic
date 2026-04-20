export default function Header() {
  return (
    <header className="relative z-10 mx-auto mt-5 flex w-[94%] max-w-6xl items-center justify-between rounded-full bg-[#0f9c90] px-6 py-4 text-white shadow-2xl">
      <div>
        <div className="text-3xl font-black leading-none tracking-tight">ANASTAMAR</div>
        <div className="text-xs tracking-[0.35em] text-white/85">DENTAL CLINIC</div>
      </div>

      <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
        <a href="#" className="rounded-full bg-[#5fe2d6] px-5 py-2 text-[#083a36]">
          Home
        </a>
        <a href="#services">Services</a>
        <a href="#why-us">Why Us</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="flex items-center gap-3 text-sm">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/15">ig</div>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[#2ec4b6]">☎</div>
      </div>
    </header>
  );
}
