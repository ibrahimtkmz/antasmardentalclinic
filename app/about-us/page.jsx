import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Hakkımızda | Anastamar Dental Clinic',
};

export default function AboutUsPage() {
  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="mx-auto mt-10 max-w-5xl px-6 text-white">
          <h1 className="text-4xl font-black md:text-6xl">Hakkımızda</h1>
          <p className="mt-4 text-lg text-white/90">Anastamar Dental Clinic; estetik, cerrahi ve dijital diş hekimliğini tek çatı altında birleştirir.</p>
        </section>
      </div>
      <main className="mx-auto -mt-8 max-w-5xl space-y-6 px-4 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black text-[#0c4f49]">Vizyonumuz</h2>
          <p className="mt-4 leading-8 text-[#426360]">Uluslararası hastalara güvenli, şeffaf ve yüksek standartlarda dental deneyim sunarak kalıcı gülüşler tasarlamak.</p>
          <h2 className="mt-8 text-3xl font-black text-[#0c4f49]">Misyonumuz</h2>
          <p className="mt-4 leading-8 text-[#426360]">Kişiselleştirilmiş tedavi planları, ileri teknoloji ve deneyimli ekip ile her hastanın fonksiyonel ve estetik ihtiyacına en uygun çözümü üretmek.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
