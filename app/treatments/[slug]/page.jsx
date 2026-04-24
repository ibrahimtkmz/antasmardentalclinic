import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getTreatmentBySlug, treatments } from '../../data/treatments';

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export default function TreatmentDetailPage({ params }) {
  const treatment = getTreatmentBySlug(params.slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#12332f]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_30%,#141414_74%)] pb-16">
        <Header />
        <section className="page-shell mt-10 px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{treatment.title}</h1>
          <p className="mt-4 text-lg text-white/90">{treatment.teaser}</p>
        </section>
      </div>

      <main className="page-shell -mt-8 space-y-7 px-3 pb-14 md:px-6">
        <section className="overflow-hidden rounded-[26px] bg-white shadow-[0_20px_40px_rgba(7,45,41,0.12)]">
          <img src={treatment.image} alt={treatment.title} className="h-[280px] w-full object-cover md:h-[420px]" />
        </section>

        <section className="rounded-[26px] bg-white p-6 shadow-[0_20px_40px_rgba(7,45,41,0.1)] md:p-9">
          <h2 className="text-3xl font-black text-[#0c4f49]">Treatment Overview</h2>
          <p className="mt-4 leading-8 text-[#35514d]">{treatment.overview}</p>

          <h3 className="mt-8 text-2xl font-black text-[#0c4f49]">What&apos;s included in this treatment?</h3>
          <ul className="mt-4 space-y-3">
            {treatment.includes.map((item) => (
              <li key={item} className="rounded-xl border border-[#d8ebe7] bg-[#f4fbfa] px-4 py-3 text-[#35514d]">
                • {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-[#0fa79b] p-6 text-white">
            <h3 className="text-2xl font-black">Estimated Treatment Duration: {treatment.duration}</h3>
            <p className="mt-2 text-white/90">The final treatment plan and timeline will be confirmed by your doctor after your personal examination.</p>
            <a href="/contact" className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#0c4f49]">
              Free Initial Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
