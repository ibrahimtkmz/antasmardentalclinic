import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const doctors = [
  {
    slug: 'osman-binan',
    name: 'Dt. Osman Binan',
    role: 'Protetik ve Estetik Diş Hekimliği',
    image: '/osman-binan.png',
  },
  {
    slug: 'yusuf-yuca',
    name: 'Dr. Yusuf Yuca',
    role: 'Ağız, Diş ve Çene Cerrahisi',
    image: '/yusuf-yuca.png',
  },
];

export default function DoctorsPage() {
  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="page-shell mt-10 px-4 text-white md:px-6">
          <h1 className="text-4xl font-black md:text-6xl">Doktorlarımız</h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Kliniğimizde hizmet veren hekimlerimizi inceleyin ve uzmanlık alanları hakkında detaylı bilgi alın.
          </p>
        </section>
      </div>
      <main className="page-shell -mt-8 px-3 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="group rounded-2xl border border-[#e9ecef] p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-lg">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-5 text-2xl font-bold text-[#222]">{doctor.name}</div>
                <div className="text-[#666]">{doctor.role}</div>
                <div className="mt-4 text-sm font-semibold text-[#0f8b80]">Detaylı profili görüntüle</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
