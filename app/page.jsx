export default function AnastamarDentalClinicHomepage() {
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
      name: 'Dr. Abdurrahman Salih Coşkun',
      role: 'Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. Gökşin Rumane',
      role: 'Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. Cavlan Kutlu',
      role: 'Surgical Dentist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Bendansoune Larbi',
      text: 'For my first visit, I was well received. The clinic team made everything smooth and comfortable from consultation to treatment. I left with much more confidence in my smile.',
    },
    {
      name: 'Aurim',
      text: 'Excellent organization, friendly staff and a very clean clinic. Anastamar Dental Clinic explained every step clearly and the final smile design looks amazing.',
    },
    {
      name: 'Marta K.',
      text: 'I came for implants and was impressed by the planning, professionalism and aftercare. The whole experience felt premium and reassuring.',
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
    <div className="min-h-screen bg-[#111111] text-[#222]">
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_28%,#141414_75%)]">
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#0f9c90] px-6 py-4 text-white shadow-2xl mt-5 w-[94%]">
          <div>
            <div className="text-3xl font-black tracking-tight leading-none">
              ANASTAMAR
            </div>
            <div className="text-xs tracking-[0.35em] text-white/85">DENTAL CLINIC</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#" className="rounded-full bg-[#5fe2d6] px-5 py-2 text-[#083a36]">Home</a>
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

        <section className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl flex-col justify-center px-6 pb-16 pt-20 text-white">
          <div className="max-w-3xl">
            <p className="mb-4 text-lg font-medium text-[#7af3e8]">Premium Smile Design & Implant Solutions</p>
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
              <button className="h-14 rounded-full bg-[#5fe2d6] px-6 font-bold text-[#083a36] transition hover:scale-[1.01]">
                Submit Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto -mt-6 max-w-6xl px-4 pb-14 md:px-6">
        <section
          id="why-us"
          className="grid overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:grid-cols-[1.1fr_0.9fr]"
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

        <section className="mt-10 rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="text-center">
            <h3 className="text-5xl font-black text-[#222]">Discover What Our Patients Are Saying</h3>
            <p className="mt-2 text-xl text-[#666]">Happy Patients, Beautiful Smiles.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[280px_1fr_280px]">
            <div className="rounded-[24px] border border-[#e9e9e9] p-6">
              <div className="text-[#7a7a7a]">Google Logo</div>
              <div className="mt-6 text-2xl font-black text-[#222]">4.8/5.0 stars based on</div>
              <div className="mt-2 text-[#666]">1701 reviews</div>
            </div>
            <div className="rounded-[24px] border border-[#e9e9e9] p-6">
              <div className="space-y-5">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-[18px] bg-[#fafafa] p-4">
                    <p className="text-[15px] leading-7 text-[#444]">“{item.text}”</p>
                    <div className="mt-3 font-semibold text-[#222]">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[#e9e9e9] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-[#109f93]">Anastamar Dental Clinic</div>
              <div className="mt-4 text-[15px] leading-7 text-[#666]">
                International patient focused, premium smile design and implant treatments in Istanbul.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-white p-4 shadow-xl md:p-5">
          <div className="text-center text-2xl font-semibold text-[#222]">Fill it out to get your free consultation</div>
          <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_220px]">
            <input
              className="h-14 rounded-full border border-[#c9efe9] bg-[#18b2a6] px-6 text-white placeholder:text-white/85 outline-none"
              placeholder="Enter your full name"
            />
            <input
              className="h-14 rounded-full border border-[#c9efe9] bg-[#18b2a6] px-6 text-white placeholder:text-white/85 outline-none"
              placeholder="Enter your phone number"
            />
            <button className="h-14 rounded-full bg-[#5fe2d6] px-6 font-bold text-[#083a36]">Submit Now</button>
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

      <footer className="mx-auto mb-8 max-w-6xl px-4 md:px-6">
        <div className="rounded-[28px] bg-[#0b8b80] px-8 py-10 text-white shadow-2xl md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
            <div>
              <div className="text-3xl font-black leading-none">ANASTAMAR</div>
              <div className="text-xs tracking-[0.35em] text-white/80">DENTAL CLINIC</div>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
                Anastamar Dental Clinic is a leading dental clinic in Istanbul for aesthetic and restorative dental care, known for premium service, advanced technology and patient-focused treatment planning.
              </p>
              <div className="mt-6 flex gap-4 text-sm text-white/85">
                <span>IG</span>
                <span>FB</span>
                <span>TIKTOK</span>
                <span>YT</span>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold">Useful Links</div>
              <div className="mt-5 space-y-3 text-white/85">
                <div>Home</div>
                <div>Services</div>
                <div>Papers and Documents</div>
                <div>Why Us</div>
                <div>Contact</div>
                <div>FAQs</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold">Support</div>
              <div className="mt-5 space-y-3 text-white/85">
                <div>+90 850 000 00 00</div>
                <div>info@anastamar.com</div>
                <div className="pt-3 text-xl font-bold text-white">Join Us</div>
                <div>Vacancies</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-white/70">
            © 2026 Anastamar Dental Clinic. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
