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
      <div className="page-shell px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] items-start">
          
         {/* Logo and Contact Column */}
          <div className="flex flex-col pt-2">
            <div className="relative h-[135px] sm:h-[150px]">
              <img
                src="/logo-beyaz.png"
                alt="Anastamar Dental Clinic Logo"
                className="absolute left-[-12px] top-[-24px] h-[145px] w-auto max-w-none object-contain pointer-events-none sm:h-[220px]"
              />
            </div>

            <p className="mt-2 max-w-md text-base leading-relaxed text-[#9ec8c4] md:text-[21px]">
              Our patients who want to get an offer from abroad can get a quick response via WhatsApp.
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#8db7b3] sm:text-base md:text-[20px]">
              <div className="flex items-center gap-3"><span>📍</span> Bakirkoy - Istanbul</div>
              <div className="flex items-center gap-3"><span>✉️</span> hello@anastamarsmile.com</div>
              <div className="flex items-center gap-3"><span>📞</span> +90 555 321 67 89</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white md:text-3xl">Quick Links</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-6 space-y-4 text-base md:mt-8 md:space-y-5 md:text-[22px]">
              {quickLinks.map((item) => (
                <li key={item.label} className="hover:text-white transition-colors">
                  <a href={item.href}>› {item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold text-white md:text-3xl">Popular Services</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-6 space-y-4 text-base md:mt-8 md:text-[21px]">
              {services.map((item) => (
                <li key={item} className="hover:text-white transition-colors">› {item}</li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative min-h-[280px] overflow-hidden rounded-[24px] bg-[#010f1f] p-2 shadow-2xl md:min-h-[430px]">
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
