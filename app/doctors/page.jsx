import Header from '../components/Header';
import Footer from '../components/Footer';

const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    role: 'Cosmetic Dentist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Elif Kaya',
    role: 'Prosthodontist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Can Demir',
    role: 'Oral Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function DoctorsPage() {
  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="mx-auto mt-10 max-w-6xl px-6 text-white">
          <h1 className="text-4xl font-black md:text-6xl">Doktorlarımız</h1>
        </section>
      </div>
      <main className="mx-auto -mt-8 max-w-6xl px-4 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
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
      </main>
      <Footer />
    </div>
  );
}
