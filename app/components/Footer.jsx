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

const collageItems = [
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
    alt: 'Smiling patient',
    className: 'absolute left-6 top-6 h-[95px] w-[150px] rotate-[-15deg] [clip-path:polygon(12%_0,100%_5%,78%_100%,0_86%)]',
  },
  {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80',
    alt: 'Patient portrait',
    className: 'absolute left-[155px] top-8 h-[112px] w-[118px] rotate-[7deg] [clip-path:polygon(8%_0,100%_0,87%_100%,0_93%)]',
  },
  {
    src: 'https://images.unsplash.com/photo-1609840112855-9a32a5fba00f?auto=format&fit=crop&w=900&q=80',
    alt: 'Dental treatment',
    className: 'absolute right-5 top-[34px] h-[95px] w-[157px] rotate-[-10deg] [clip-path:polygon(0_12%,88%_0,100%_74%,12%_100%)]',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    alt: 'Laser whitening',
    className: 'absolute left-4 top-[115px] h-[170px] w-[190px] rotate-[7deg] [clip-path:polygon(3%_16%,100%_0,80%_100%,0_84%)]',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Happy smile',
    className: 'absolute left-[128px] top-[150px] h-[260px] w-[245px] rotate-[7deg] [clip-path:polygon(18%_0,100%_16%,58%_100%,0_86%)]',
  },
  {
    src: 'https://images.unsplash.com/photo-1588774069410-84ae30757c8e?auto=format&fit=crop&w=900&q=80',
    alt: 'Dental care close-up',
    className: 'absolute right-[12px] top-[202px] h-[210px] w-[145px] rotate-[-7deg] [clip-path:polygon(6%_8%,100%_0,83%_100%,0_88%)]',
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#031416] footer-hex-pattern text-[#9cc9c5] overflow-hidden">
      <div className="page-shell px-6 py-16 md:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] items-start">
          
          {/* Logo ve İletişim Kolonu */}
          <div className="flex flex-col pt-2"> {/* Başlıklarla hizalanması için hafif bir üst boşluk verdik */}
  <div className="relative h-[130px] sm:h-[150px]"> {/* Boşluğu daraltmak için yüksekliği azalttık */}
    <img
      src="/footer-image.png"
      alt="Anastamar Dental Clinic Footer Image"
      /* - top-[-100px] değeri logoyu daha yukarı çeker. 
         - left-[-50px] ile logonun solundaki boşluğu traşladık.
         - scale-125 ile logoyu daha da heybetli yapabilirsin.
      */
      className="absolute left-[-12px] top-[-34px] h-[190px] w-auto object-contain sm:h-[220px] pointer-events-none"
    />
  </div>

  {/* Metin kısmı artık logoya daha yakın başlayacak */}
  <p className="mt-2 max-w-md text-lg leading-relaxed text-[#9ec8c4] md:text-[21px]">
    Our patients who want to get an offer from abroad can get a quick response via WhatsApp.
  </p>

  <div className="mt-6 space-y-4 text-base text-[#8db7b3] md:text-[20px]">
    <div className="flex items-center gap-3"><span>📍</span> Bakirkoy - Istanbul</div>
    <div className="flex items-center gap-3"><span>✉️</span> hello@anastamarsmile.com</div>
    <div className="flex items-center gap-3"><span>📞</span> +90 555 321 67 89</div>
  </div>
</div>

          {/* Quick Links Kolonu */}
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

          {/* Services Kolonu */}
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Popular Services</h3>
            <div className="mt-4 h-1 w-24 rounded bg-[#5fe2d6]" />
            <ul className="mt-8 space-y-4 text-base md:text-[21px]">
              {services.map((item) => (
                <li key={item} className="hover:text-white transition-colors">› {item}</li>
              ))}
            </ul>
          </div>

          {/* Collage Kolonu */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-[#010f1f] p-2 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c2f4a_0%,#010b18_45%,#000914_100%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(#1f3b55_1px,transparent_1px),linear-gradient(90deg,#1f3b55_1px,transparent_1px)] [background-size:58px_58px]" />

            <div className="relative h-full w-full">
              {collageItems.map((item) => (
                <img key={item.alt} src={item.src} alt={item.alt} className={`${item.className} object-cover shadow-lg border border-white/10`} />
              ))}

              {/* Award Tag */}
              <div className="absolute right-[22px] top-[130px] h-[230px] w-[2px] rotate-[16deg] bg-[#d9a54b]" />
              <div className="absolute right-[36px] top-[143px] rotate-[76deg] text-[11px] font-extrabold tracking-[0.28em] text-[#d9a54b] sm:text-xs">
                AWARD-WINNING DENTISTRY
              </div>

              {/* Dekoratif Şekiller */}
              <div className="absolute left-2 top-[84px] h-0 w-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-[#5f9cff]" />
              <div className="absolute right-1 top-10 h-0 w-0 border-y-[10px] border-y-transparent border-l-[15px] border-l-[#2fd8a8]" />
              <div className="absolute left-[175px] top-[268px] h-0 w-0 border-x-[11px] border-x-transparent border-t-[16px] border-t-[#3fd7b8]" />
              <div className="absolute right-[66px] top-[206px] h-0 w-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-[#5f9cff]" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
