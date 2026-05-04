const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Contact Us', href: '/contact' },
];

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
    <footer className="mt-8 border-t border-white/10 bg-[#031416] footer-hex-pattern text-[#9cc9c5] overflow-hidden sm:mt-10">
      <div className="page-shell px-6 py-10 md:px-8 md:py-14 lg:py-20">
        <div className="grid gap-8 text-center lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:items-start lg:text-left">
          
         {/* Logo and Contact Column */}
          <div className="flex flex-col items-center pt-1 lg:items-start">
            <div className="relative h-[220px] w-full sm:h-[250px] lg:h-[180px]">
              <img
                src="/logo-beyaz.png"
                alt="Anastamar Dental Clinic Logo"
                className="absolute left-1/2 top-[-28px] h-[250px] w-auto max-w-none -translate-x-1/2 object-contain pointer-events-none sm:top-[-36px] sm:h-[220px] lg:left-[-20px] lg:top-[-52px] lg:h-[290px] lg:translate-x-0"
              />
            </div>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9ec8c4] sm:text-base md:text-[21px]">
              Our patients who want to get an offer from abroad can get a quick response via WhatsApp.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#8db7b3] sm:text-base md:mt-6 md:space-y-4 md:text-[20px]">
              <div className="flex items-center gap-3"><span>📍</span> Bakirkoy - Istanbul</div>
              <div className="flex items-center gap-3"><span>✉️</span> hello@anastamarsmile.com</div>
              <div className="flex items-center gap-3"><span>📞</span> +90 555 321 67 89</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-left lg:contents">
          {/* Quick Links Column */}
          <div className="mx-auto w-full max-w-[180px] lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Quick Links</h3>
            <div className="mt-3 h-1 w-16 rounded bg-[#5fe2d6] md:mt-4 md:w-24" />
            <ul className="mt-4 space-y-2 text-sm sm:text-base md:mt-8 md:space-y-5 md:text-[22px]">
              {quickLinks.map((item) => (
                <li key={item.label} className="hover:text-white transition-colors">
                  <a href={item.href}>› {item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="mx-auto w-full max-w-[180px] lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Popular Services</h3>
            <div className="mt-3 h-1 w-16 rounded bg-[#5fe2d6] md:mt-4 md:w-24" />
            <ul className="mt-4 space-y-2 text-sm sm:text-base md:mt-8 md:space-y-4 md:text-[21px]">
              {services.map((item) => (
                <li key={item} className="hover:text-white transition-colors">› {item}</li>
              ))}
            </ul>
          </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden min-h-[215px] w-1/2 justify-self-center overflow-hidden rounded-[24px] bg-[#010f1f] p-2 shadow-2xl lg:block">
            <img
              src="/footer-image.png"
              alt="Anastamar Dental Clinic Footer Image"
              className="h-full w-full rounded-[18px] object-cover"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
