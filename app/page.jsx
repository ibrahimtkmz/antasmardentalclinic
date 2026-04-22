import Header from './components/Header';
import Footer from './components/Footer';

export default function AnastamarDentalClinicHomepage() {
  const journeyDays = [
    {
      day: 'Gün 1',
      items: [
        {
          title: 'Havaalanı Karşılama',
          detail: 'Ekibimiz sizi havaalanında karşılar ve kliniğe güvenli transferinizi sağlar.',
          time: '1 saat',
        },
        {
          title: 'İlk Muayene & 3D Tarama',
          detail: 'Ağız içi tarama, panoramik görüntüleme ve tedavi planlaması tamamlanır.',
          time: '1-2 saat',
        },
      ],
    },
    {
      day: 'Gün 2',
      items: [
        {
          title: 'Hazırlık ve Lokal Anestezi',
          detail: 'İmplant, kaplama veya gülüş tasarımı için hazırlık aşaması uzman ekip tarafından yapılır.',
          time: '1 saat',
        },
        {
          title: 'Ana Diş İşlemi',
          detail: 'Planlanan dental işlem hijyenik ve konfor odaklı klinik ortamında uygulanır.',
          time: '3-5 saat',
        },
      ],
    },
    {
      day: 'Gün 3',
      items: [
        {
          title: 'Kontrol ve Prova',
          detail: 'İyileşme süreci kontrol edilir, gerekiyorsa geçici/prova diş uygulamaları yapılır.',
          time: '1-2 saat',
        },
        {
          title: 'Boş Zaman',
          detail: 'Günlük rahatlama ve şehir deneyimi için planınıza uygun serbest zaman bırakılır.',
          time: 'Opsiyonel',
        },
      ],
    },
    {
      day: 'Gün 4',
      items: [
        {
          title: 'Son Kontrol & Bakım Bilgilendirmesi',
          detail: 'Ağız bakımı, beslenme önerileri ve süreç takibi için net yönlendirme verilir.',
          time: '1 saat',
        },
        {
          title: 'Havaalanı Transferi',
          detail: 'Konaklamanızdan havaalanına transfer planlı şekilde tamamlanır.',
          time: '1 saat',
        },
      ],
    },
  ];

  const services = [
    { title: 'Hollywood Smile', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80' },
    { title: 'Dental Implant', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80' },
    { title: 'Veneers', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80' },
    { title: 'Dental Crowns', image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80' },
    { title: 'Dental Bone Graft', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80' },
    { title: 'Sinus Lift', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1625134673337-519d3d9d9f0d?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  ];

  const doctors = [
    {
      name: 'Doktor Bey',
      role: 'Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Doktor Bey',
      role: 'Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Doktor Bey',
      role: 'Surgical Dentist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'R.',
      country: 'United States',
      flag: '🇺🇸',
      text: 'I’m an American, so here ya go. This facility is state of the art, clean, and perfectly organized. The team cared about my comfort through every stage, and the whole procedure felt smooth and reassuring.',
    },
    {
      name: 'John',
      country: 'United Kingdom',
      flag: '🇬🇧',
      text: 'I was worried before arriving, but from airport transfer to treatment day, everything was managed professionally. Clear communication, kind staff, and a stress-free process made this one of the best healthcare experiences I’ve had.',
    },
    {
      name: 'Zain',
      country: 'United Kingdom',
      flag: '🇬🇧',
      text: 'From hotel to clinic service, every part was planned in detail. The staff were warm and highly skilled, and the final result made the journey absolutely worth it.',
    },
  ];

  const faqs = [
    'Does Anastamar Dental Clinic offer warranty on dental implants?',
    'How can I book an appointment at Anastamar Dental Clinic?',
    'Is it safe to get veneers in Turkey?',
    'Are veneers painful?',
    'How successful are dental implants?',
    'Is a Hollywood smile worth it?',
    'Does a Hollywood smile cause bad breath?',
    'How long does the Hollywood smile last?',
    'Is Hollywood smile permanent?',
    'How many teeth need a Hollywood smile makeover?',
    'How painful are dental implants?',
    'How long does a dental implant last?',
    'How long does a dental implant procedure take in Turkey?',
    'Is dental bone grafting painful?',
  ];

  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#222]">
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_28%,#141414_75%)]">
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <Header />

        <section className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl flex-col justify-center px-6 pb-16 pt-20 text-white">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#89fff3]/40 bg-[#0ea79a]/30 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#a7fff6] md:text-base">
              Premium Smile Design & Implant Solutions
            </p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              From Consultation to Perfection
              <br />
              Your Smile Journey Starts Here
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              Anastamar Dental Clinic delivers advanced cosmetic dentistry, implants and smile makeovers in Istanbul with a trusted team and premium patient experience.
            </p>
          </div>

          <div id="contact" className="mt-12 rounded-[28px] bg-white/92 p-4 shadow-2xl backdrop-blur md:p-5">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_220px]">
              <input
                className="h-14 rounded-full border border-[#c9efe9] bg-[#18b2a6] px-6 text-white placeholder:text-white/85 outline-none"
                placeholder="Enter your full name"
              />
              <input
                className="h-14 rounded-full border border-[#c9efe9] bg-[#18b2a6] px-6 text-white placeholder:text-white/85 outline-none"
                placeholder="Enter your phone number"
              />
              <button className="h-14 rounded-full bg-[#5fe2d6] px-6 font-bold text-[#083a36] transition hover:scale-[1.01] hover:shadow-[0_12px_32px_rgba(3,58,55,0.35)]">
                Submit Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto -mt-6 max-w-6xl px-4 pb-14 md:px-6">
        <section
          id="why-us"
          className="grid overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-8 md:p-12">
            <p className="text-2xl font-semibold text-[#555]">Why</p>
            <h2 className="text-5xl font-black leading-none text-[#222]">Anastamar Clinic</h2>
            <p className="mt-6 text-[15px] leading-7 text-[#666]">
              Anastamar Dental Clinic is a modern dental destination in Istanbul, offering advanced smile design, implants, veneers and aesthetic dentistry solutions for international patients. Our mission is to combine expert care, precision technology and a comfortable clinical journey that helps every patient smile with confidence.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#666]">
              With personalized treatment planning, multilingual support and a highly experienced team, Anastamar Dental Clinic focuses on reliable results, transparent communication and a truly premium treatment experience from start to finish.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#ececec] pt-8">
              <div>
                <div className="text-4xl font-black text-[#222]">11 +</div>
                <div className="mt-2 text-sm text-[#7b7b7b]">Experience Years</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#222]">10547 +</div>
                <div className="mt-2 text-sm text-[#7b7b7b]">Hollywood Smile</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#222]">15246 +</div>
                <div className="mt-2 text-sm text-[#7b7b7b]">Happy Patients</div>
              </div>
            </div>

            <button className="mt-8 font-semibold text-[#109f93]">Learn More</button>
          </div>

          <div className="relative min-h-[520px] bg-[linear-gradient(180deg,#f8f8f8,#ebebeb)]">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
              alt="Dental team"
              className="absolute bottom-0 right-0 h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[28px] bg-[#0d9f93] px-8 py-12 text-white shadow-xl md:px-14">
          <div className="text-center">
            <h3 className="text-4xl font-black">Innovation & Precision In Every Implant</h3>
            <p className="mt-2 text-white/85">We use only implants, high quality implants designed for long term durability.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-center text-lg font-semibold text-white/90 md:grid-cols-5">
            <div>BIOTEC</div>
            <div>Hiossen</div>
            <div>Straumann</div>
            <div>Nobel Biocare</div>
            <div>MEGAGEN</div>
          </div>
        </section>

        <section id="services" className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-xl">
          <div className="grid md:grid-cols-[1.08fr_1.92fr]">
            <div className="p-8 md:p-10">
              <h3 className="text-5xl font-black leading-tight text-[#222]">
                Our Dental Services In Istanbul
              </h3>
              <p className="mt-5 text-[15px] leading-7 text-[#666]">
                With a highly skilled team of certified dentists and cutting-edge technology, we provide exceptional dental services tailored to your needs. Whether you choose Anastamar Dental Clinic, you select a smile that not only looks radiant, but also feels healthy and long lasting.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group relative h-56 overflow-hidden border border-white/20 md:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/35" />
                  <div className="absolute inset-x-0 bottom-4 mx-auto w-max rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#222] backdrop-blur">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-white px-6 py-12 text-center shadow-xl md:px-10">
          <h3 className="text-5xl font-black text-[#222]">Radiant Smiles, Forever Captured</h3>
          <p className="mt-2 text-xl text-[#666]">Real smiles, real words. Our patients’ stories.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {['United States', 'Canada', 'Italy', 'Beware', 'Ukraine'].map((country, i) => (
              <div key={country} className="relative h-72 overflow-hidden rounded-[24px]">
                <img
                  src={`https://images.unsplash.com/photo-${[
                    '1606811971618-4486d14f3f99',
                    '1598256989800-fe5f95da9787',
                    '1517841905240-472988babdf9',
                    '1524504388940-b1c1722653e1',
                    '1545239351-1141bd82e8a6',
                  ][i]}?auto=format&fit=crop&w=900&q=80`}
                  alt={country}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 text-3xl font-black uppercase tracking-wide text-[#89f6d5]">
                  {country}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-10 rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="text-center">
            <h3 className="text-5xl font-black text-[#222]">Feel The Difference</h3>
            <p className="mt-2 text-xl text-[#666]">Our state of the art clinic, our dedicated team, your stunning smile</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-[20px]">
                <img src={image} alt={`Gallery ${index + 1}`} className="h-40 w-full object-cover md:h-44" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-full bg-[#222] px-6 py-3 text-sm font-semibold text-white">Go To Gallery</button>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="text-center">
            <h3 className="text-5xl font-black text-[#222]">Meet The Team Behind Your Beautiful Smile</h3>
            <p className="mt-2 text-xl text-[#666]">Your trusted dental partners. Your smile is our passion</p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="text-center">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-lg">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-5 text-xl font-bold text-[#222]">{doctor.name}</div>
                <div className="text-[#666]">{doctor.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-[#f2f4f7] px-6 py-12 shadow-xl md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-5xl font-black text-[#171b21]">Testimonials</h3>
            <p className="mt-3 text-xl text-[#4a5765]">
              Find out how Anastamar Dental Clinic has helped people boost their confidence and smile happily.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[30px] bg-[#d5edf5] p-7">
                <p className="text-[20px] leading-9 text-[#1f2a37]">{item.text}</p>
                <div className="mt-8 font-bold text-[#1c2430]">{item.name}</div>
                <div className="mt-1 flex items-center gap-2 text-lg text-[#445260]">
                  <span>{item.flag}</span>
                  <span>{item.country}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { source: 'Google', score: '4.9', reviews: '4317 Reviews' },
              { source: 'Trustpilot', score: '4.9', reviews: '6408 Reviews' },
              { source: 'Yandex', score: '5.0', reviews: '251 Reviews' },
              { source: 'Facebook', score: '5.0', reviews: '61 Reviews' },
              { source: 'YouTube', score: '4.96K', reviews: '1000 videos' },
            ].map((rating) => (
              <div key={rating.source} className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm">
                <div className="text-sm text-[#677689]">{rating.source}</div>
                <div className="text-2xl font-black text-[#1f2937]">{rating.score}</div>
                <div className="text-sm text-[#566272]">{rating.reviews}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-[#f2f4f7] px-6 py-12 shadow-xl md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-5xl font-black text-[#171b21]">4 Günlük Dental Tedavi Yolculuğu</h3>
            <p className="mt-3 text-xl text-[#4a5765]">
              Tasarımı dental işlemlere uyarladık: planlama, işlem, kontrol ve transfer adımlarını net şekilde görebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {journeyDays.map((day) => (
              <article key={day.day} className="border border-[#c7e6ef] bg-[#d8e8ef] p-5">
                <div className="border-b border-[#bddae3] pb-3 text-xl font-black text-[#123]">{day.day}</div>
                <div className="mt-4 space-y-3">
                  {day.items.map((item) => (
                    <div key={item.title} className="border border-[#b6d8e2] bg-[#c5e0e8] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-bold leading-tight text-[#101820]">{item.title}</h4>
                        <span className="bg-[#7fd2eb] px-2 py-1 text-xs font-semibold text-[#0d2f3d]">{item.time}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#334155]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-[#6fd4ef] to-[#6aa8f1] px-8 py-3 text-base font-bold text-[#0b2440]">
              Randevu Oluştur
            </button>
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-[28px] bg-[#d5edf5] shadow-xl md:grid md:grid-cols-[1.08fr_0.92fr]">
          <div className="p-8 md:p-12">
            <h3 className="text-6xl font-black leading-none text-[#111827]">Contact Us</h3>
            <p className="mt-6 max-w-xl text-[32px] leading-[1.25] text-[#182433]">
              Begin the journey to improving your self-esteem. Contact us today and let&apos;s discuss how we can help you.
            </p>

            <div className="mt-8 space-y-4">
              <input className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none" placeholder="Name" />
              <input className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none" placeholder="Email" />
              <select className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none">
                <option>Türkiye</option>
                <option>United Kingdom</option>
                <option>United States</option>
              </select>
              <div className="grid grid-cols-[110px_1fr] overflow-hidden rounded-2xl border border-[#c8d9df] bg-[#f4f7f9]">
                <div className="grid place-items-center border-r border-[#c8d9df] text-[#111827]">🇹🇷 +90</div>
                <input className="h-14 bg-transparent px-5 text-[#111827] outline-none" placeholder="0501 234 56 78" />
              </div>
              <select className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#8da0b5] outline-none">
                <option>Select Service</option>
                <option>Hollywood Smile</option>
                <option>Implant</option>
              </select>
              <button className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#6fd4ef] to-[#6aa8f1] text-2xl font-bold text-[#0b2440]">
                Submit
              </button>
            </div>

            <div className="mt-8 flex items-center gap-5 text-[#607286]">
              <span className="h-px flex-1 bg-[#bdd4dd]" />
              <span className="text-sm">or reach us through</span>
              <span className="h-px flex-1 bg-[#bdd4dd]" />
            </div>
            <div className="mt-5 flex gap-3">
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-xl">📞</button>
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-xl">✉️</button>
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-xl">🟢</button>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80"
              alt="Contact representative"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#d5edf5]/5 to-transparent" />
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="text-center">
            <h3 className="text-5xl font-black text-[#222]">Got Questions? We’ve Got Answers</h3>
            <p className="mt-2 text-xl text-[#666]">Explore the most asked questions and get quick solutions</p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq} className="group rounded-2xl border border-[#d8ebe7] px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#333]">
                  <span>{faq}</span>
                  <span className="text-2xl text-[#109f93] transition group-open:rotate-45">+</span>
                </summary>
                <p className="pt-4 text-[15px] leading-7 text-[#666]">
                  At Anastamar Dental Clinic, every treatment is planned individually after consultation. Our team explains the most suitable treatment route, estimated timeline and aftercare details clearly before starting.
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="rounded-full bg-[#5fe2d6] px-6 py-3 text-sm font-semibold text-[#083a36]">Read More FAQs</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
