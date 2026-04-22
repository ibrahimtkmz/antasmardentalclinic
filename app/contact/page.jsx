import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="mx-auto mt-10 max-w-5xl px-6 text-white">
          <h1 className="text-4xl font-black md:text-6xl">İletişim</h1>
          <p className="mt-4 text-lg text-white/90">Tedavi planı ve fiyatlandırma için formu doldurun, ekibimiz size hızlıca dönüş yapsın.</p>
        </section>
      </div>
      <main className="mx-auto -mt-8 max-w-5xl px-4 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white p-8 shadow-xl">
          <div className="space-y-4">
            <input className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none" placeholder="Ad Soyad" />
            <input className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none" placeholder="Telefon" />
            <input className="h-14 w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 text-[#111827] outline-none" placeholder="E-posta" />
            <textarea className="min-h-[120px] w-full rounded-2xl border border-[#c8d9df] bg-[#f4f7f9] px-5 py-4 text-[#111827] outline-none" placeholder="Mesajınız" />
            <button className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#6fd4ef] to-[#6aa8f1] text-xl font-bold text-[#0b2440]">Gönder</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
