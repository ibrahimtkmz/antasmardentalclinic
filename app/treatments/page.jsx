'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';
import { treatments } from '../data/treatments';


export default function TreatmentsPage() {
  const { t } = useLanguage();

  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#e7fffb]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="page-shell mt-10 px-4 md:px-6 text-white">
          <p className="inline-flex rounded-full border border-[#89fff3]/40 bg-[#0ea79a]/30 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#a7fff6]">
            Anastamar Treatment Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">{t.treatmentsTitle}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            {t.treatmentsLead}
          </p>
        </section>
      </div>

      <main className="page-shell -mt-8 px-3 pb-14 md:px-6">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[28px] border border-white/20 bg-white text-[#1b3b38] shadow-2xl">
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-black text-[#0c4f49]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4d6764]">{item.teaser}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#0ea79a]">Estimated Duration: {item.duration}</p>
                <a
                  href={`/treatments/${item.slug}`}
                  className="mt-5 inline-flex rounded-full bg-[#5fe2d6] px-5 py-2 text-sm font-bold text-[#083a36]"
                >
                  {t.viewDetails}
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
