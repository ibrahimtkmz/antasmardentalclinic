import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us | Anastamar Dental Clinic',
};

export default function AboutUsPage() {
  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="page-shell mt-10 px-4 md:px-6 text-white">
          <h1 className="text-4xl font-black md:text-6xl">About Us</h1>
          <p className="mt-4 text-lg text-white/90">Anastamar Dental Clinic combines aesthetic, surgical, and digital dentistry under one roof.</p>
        </section>
      </div>
      <main className="page-shell -mt-8 space-y-6 px-3 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black text-[#0c4f49]">Our Vision</h2>
          <p className="mt-4 leading-8 text-[#426360]">To design lasting smiles by providing international patients with safe, transparent, and high-standard dental care.</p>
          <h2 className="mt-8 text-3xl font-black text-[#0c4f49]">Our Mission</h2>
          <p className="mt-4 leading-8 text-[#426360]">To deliver the most suitable solution for each patient’s functional and aesthetic needs through personalized treatment plans, advanced technology, and an experienced team.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
