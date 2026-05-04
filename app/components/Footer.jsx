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
    <footer className="mt-10 border-t border-white/10 bg-[#031416] footer-hex-pattern text-[#9cc9c5] overflow-hidden">
      <div className="page-shell px-6 py-16 md:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] items-start">
          
         {/* Logo and Contact Column */}
          <div className="flex flex-col items-center text-center pt-2 sm:items-start sm:text-left">
            <div className="relative h-[340px] w-full sm:h-[180px]">
              <img
                src="/logo-beyaz.png"
                alt="Anastamar Dental Clinic Logo"
                className="absolute left-1/2 top-[-52px] h-[250px] w-auto max-w-none -translate-x-1/2 object-contain pointer-events-none sm:left-[-20px] sm:translate-x-0 sm:h-[290px]"
              />
            </div>

            <p className="mt-2 max-w-md text-lg leading-relaxed text-[#9ec8c4] md:text-[21px]">
              Our patients who want to get an offer from abroad can get a quick response via WhatsApp.
            </p>

            <div className="mt-6 space-y-4 text-base text-[#8db7b3] md:text-[20px]">
              <div className="flex items-center gap-3"><span>📍</span> Bakirkoy - Istanbul</div>
              <div className="flex items-center gap-3"><span>✉️</span> hello@anastamarsmile.com</div>
              <div className="flex items-center gap-3"><span>📞</span> +90 555 321 67 89</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Quick Links</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-8 space-y-5 text-base md:text-[22px]">
              {quickLinks.map((item) => (
                <li key={item.label} className="hover:text-white transition-colors">
                  <a href={item.href}>› {item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Popular Services</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-8 space-y-4 text-base md:text-[21px]">
              {services.map((item) => (
                <li key={item} className="hover:text-white transition-colors">› {item}</li>
              ))}
            </ul>
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
