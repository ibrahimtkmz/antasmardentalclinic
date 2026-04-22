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
    <footer className="mt-10 border-t border-white/10 bg-[#031416] footer-hex-pattern text-[#9cc9c5]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center rounded-2xl bg-white/95 px-5 py-3">
              <img
                src="/Anastamar.Dental.Clinic.png"
                alt="Anastamar Dental Clinic Logo"
                className="h-16 w-auto object-contain sm:h-20"
              />
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#9ec8c4] md:text-[21px]">
              Our patients who want to get an offer from abroad can get a quick response via whatsapp.
            </p>

            <div className="mt-8 space-y-5 text-base text-[#8db7b3] md:text-[20px]">
              <div>📍 Bakırkoy - İstanbul</div>
              <div>✉️ info@turkeydentalimplants.net</div>
              <div>📞 +905401330000</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Quick Links</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-8 space-y-5 text-base md:text-[22px]">
              {quickLinks.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Popular Service</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-8 space-y-4 text-base md:text-[21px]">
              {services.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/10 bg-[#08282a] p-3">
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
            <div className="absolute bottom-4 right-2 rotate-[-74deg] text-xs font-bold tracking-[0.2em] text-[#5fe2d6]">
              AWARD WINNING DENTISTRY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
