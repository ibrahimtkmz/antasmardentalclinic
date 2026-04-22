const quickLinks = ['Home', 'About Us', 'Contact Us'];
const services = [
  'Dental Implants Turkey',
  'Laminate Veneers Turkey',
  'Zirconium Crowns Turkey',
  'Hollywood Smile Turkey',
  'Teeth Whitening Turkey',
  'Composite Filling Turkey',
  'Root Canal Turkey',
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#020d20] footer-hex-pattern text-[#9ca9bf]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-10 place-items-center text-[#1f67b3]">
                <svg viewBox="0 0 42 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 4C19 5 10 14 10 26c0 12 8 24 11 31-1-12 4-24 9-31 7-10 7-20 1-22z" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M7 7C2 14 1 23 3 31c3 9 10 18 16 24" stroke="#3b8ee9" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-extrabold text-[#2d7fda]">TURKEY DENTAL</div>
                <div className="text-2xl font-black text-[#0d3b73]">IMPLANT CLINIC</div>
              </div>
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#99a8be] md:text-[22px]">
              Our patients who want to get an offer from abroad can get a quick response via whatsapp.
            </p>

            <div className="mt-8 space-y-5 text-base text-[#92a4be] md:text-[22px]">
              <div>📍 Bakırkoy - İstanbul</div>
              <div>✉️ info@turkeydentalimplants.net</div>
              <div>📞 +905401330000</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Quick Links</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#01e1c6]" />
            <ul className="mt-8 space-y-5 text-base md:text-[22px]">
              {quickLinks.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Popular Service</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#01e1c6]" />
            <ul className="mt-8 space-y-4 text-base md:text-[21px]">
              {services.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/10 bg-[#06152f] p-3">
            <div className="grid h-full grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80"
                alt="Smiling patient"
                className="h-full w-full rounded-xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80"
                alt="Clinic team"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-2 rotate-[-74deg] text-xs font-bold tracking-[0.2em] text-[#f5c75e]">
              AWARD WINNING DENTISTRY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
