'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';


const principleCards = [
  {
    title: 'Mission',
    text: 'By combining ethical values with advanced dental technology, we deliver personalized treatments that prioritize comfort, trust, and lasting outcomes for every patient.',
  },
  {
    title: 'Vision',
    text: 'To be recognized as a global destination for modern dentistry by integrating preventive care, aesthetics, surgery, and digital planning under one roof.',
  },
  {
    title: 'Our Value',
    text: 'We embrace a patient-first approach, transparent communication, scientific care protocols, and continuous innovation in all clinical and hospitality services.',
  },
];

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="sharp-theme min-h-screen bg-[#f3fffd] text-[#173a36]">
      <Header />
      <main className="page-shell space-y-8 px-3 pb-14 pt-8 md:px-6">
        <section className="rounded-[22px] bg-gradient-to-br from-[#0f6f68] to-[#1aa69b] px-6 py-14 text-center text-white shadow-lg md:py-16">
          <h1 className="text-4xl font-black md:text-6xl">{t.aboutTitle}</h1>
          <p className="mt-4 text-sm text-white/90 md:text-base">{t.aboutBreadcrumb}</p>
        </section>

        <section className="grid gap-6 rounded-[22px] bg-white p-5 shadow-lg md:grid-cols-2 md:p-8">
          <img
            src="/right-home.webp"
            alt="Anastamar Dental Clinic lobby"
            className="h-full min-h-[260px] w-full rounded-[18px] object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-black text-[#0f4e49]">About Us</h2>
            <p className="mt-5 text-base leading-8 text-[#3e6f6a]">
              We deliver hospital-level dental care with a multidisciplinary team and contemporary clinical infrastructure. Every treatment plan is carefully designed for functionality, aesthetics, and long-term oral health.
            </p>
            <p className="mt-4 text-base leading-8 text-[#3e6f6a]">
              From consultation to smile design, we maintain clear communication and personalized care to ensure a safe, comfortable, and confident treatment journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-full bg-[#17c964] px-5 py-3 text-sm font-bold text-white">Get Price Now</a>
              <a href="/contact" className="rounded-full bg-[#159f95] px-5 py-3 text-sm font-bold text-white">Free Consultation</a>
            </div>
          </div>
        </section>

        <section className="rounded-[22px] bg-[#e7f8f6] px-4 py-10 md:px-8">
          <h3 className="text-center text-4xl font-black text-[#0f4e49]">A Global Standard in Modern Dentistry</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principleCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-xl font-black text-[#0f4e49]">{card.title}</h4>
                <p className="mt-4 text-sm leading-7 text-[#3f6c68]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
