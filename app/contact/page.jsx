'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

const featureCards = [
  {
    title: 'World-Class Dentistry',
    description:
      'At our clinic, we provide safe and high-quality treatment using advanced technology, premium materials, and an expert clinical approach.',
  },
  {
    title: 'Experienced Specialist Team',
    description:
      'Our specialist dentists and patient coordination team support you at every step of your treatment journey.',
  },
  {
    title: 'Continuous Communication and Support',
    description:
      'We offer an accessible support system that responds quickly to your questions before, during, and after treatment.',
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
      </div>

      <main className="page-shell -mt-8 px-3 pb-16 md:px-6">
        <section className="overflow-hidden rounded-[28px] border border-[#d7eeeb] bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 md:p-10">
              <p className="inline-flex rounded-md bg-[#d8f7f3] px-3 py-1 text-sm font-semibold text-[#0f8b80]">Anastamar Contact</p>
              <h1 className="mt-5 text-4xl font-black leading-tight text-[#123f3a] md:text-5xl">{t.contactTitle}</h1>
              <p className="mt-4 text-base text-[#456863] md:text-lg">{t.contactLead}</p>

              <form className="mt-8 space-y-4">
                <input
                  className="h-14 w-full rounded-2xl border border-[#cde5e1] bg-[#f3fbf9] px-5 text-[#123f3a] outline-none placeholder:text-[#5f7f7b]"
                  placeholder="Full Name *"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="h-14 w-full rounded-2xl border border-[#cde5e1] bg-[#f3fbf9] px-5 text-[#123f3a] outline-none placeholder:text-[#5f7f7b]"
                    placeholder="Phone Number *"
                  />
                  <input
                    className="h-14 w-full rounded-2xl border border-[#cde5e1] bg-[#f3fbf9] px-5 text-[#123f3a] outline-none placeholder:text-[#5f7f7b]"
                    placeholder="Email Address"
                  />
                </div>
                <textarea
                  className="min-h-[170px] w-full rounded-2xl border border-[#cde5e1] bg-[#f3fbf9] px-5 py-4 text-[#123f3a] outline-none placeholder:text-[#5f7f7b]"
                  placeholder="Your Message"
                />
                <button
                  type="button"
                  className="h-14 min-w-[170px] rounded-2xl bg-gradient-to-r from-[#14b8aa] to-[#0f8b80] px-8 text-lg font-bold text-white transition hover:shadow-[0_12px_30px_rgba(4,102,92,0.35)]"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="min-h-[520px] border-t border-[#d7eeeb] bg-[#e8f4f2] lg:border-l lg:border-t-0">
              <iframe
                title="Anastamar Clinic Map"
                src="https://maps.google.com/maps?q=Kadikoy%20Istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[520px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-[#eaf3f8] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.2fr]">
            <div>
              <p className="inline-flex rounded-md bg-white px-3 py-1 text-sm font-semibold text-[#0f8b80]">Why Anastamar?</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#123f3a] md:text-5xl">Excellent Patient Experience and Reliable Results</h2>
            </div>
            <p className="self-end text-[17px] leading-8 text-[#466a66]">
              We carefully listen to our patients&apos; expectations and create personalized treatment plans. Thanks to our streamlined organization
              and clinical experience, you enjoy a comfortable and safe process from your arrival in Istanbul until your return.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-[30px] leading-none text-[#16b8ab]">•</h3>
                <h4 className="mt-2 text-2xl font-bold text-[#123f3a]">{card.title}</h4>
                <p className="mt-3 text-base leading-7 text-[#4f6f6b]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[26px] border border-[#cae6e2] bg-white px-7 py-8 md:flex-row md:items-center md:px-10">
            <h3 className="max-w-2xl text-3xl font-black leading-tight text-[#123f3a] md:text-5xl">
            Take the first step toward solving your dental health concerns today.
            </h3>
          <a
            href="https://wa.me/905555555555"
            className="inline-flex h-14 items-center rounded-xl bg-[#0f8b80] px-8 text-lg font-bold text-white transition hover:bg-[#0a7067]"
          >
            WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
