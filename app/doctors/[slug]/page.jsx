import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const doctorProfiles = {
  'osman-binan': {
    name: 'Dt. Osman Binan',
    title: 'Protetik, Restoratif ve Estetik Diş Hekimliği',
    image: '/osman-binan.png',
    content: [
      'Dt. Osman Binan 1964 yılında İstanbul’da doğmuştur. Lise eğitimini 1984 yılında Avusturya Lisesi’nde tamamlamış, 1991 yılında Marmara Üniversitesi Diş Hekimliği Bölümü’nden mezun olmuştur.',
      'Bugüne kadar mesleki birçok eğitim, seminer ve kongreye katılmıştır.',
      'Çok iyi derecede İngilizce ve Almanca bilgisine sahip olan Dt. Osman Binan; protetik diş tedavisi, restoratif diş tedavisi, implantoloji, estetik diş hekimliği ve e-max lamina üzerine tedaviler uygulamaktadır.',
      '33 yıllık hekimlik tecrübesiyle 2020 yılından itibaren ekibimize dahil olmuş olan Dt. Osman Binan, halen kliniğimizde hizmet vermeye devam etmektedir.',
    ],
  },
  'yusuf-yuca': {
    name: 'Dr. Yusuf Yuca',
    title: 'Ağız, Diş ve Çene Cerrahisi Uzmanı',
    image: '/yusuf-yuca.png',
    content: [
      '1988 yılında İstanbul’da doğan Dr. Yusuf Yuca, lise eğitimini Yeşilköy Anadolu Lisesi’nde tamamladı. 2007 yılında akademik eğitimine başladığı Yeditepe Üniversitesi Diş Hekimliği Fakültesi’nden 2014 yılında yüksek lisans diplomasını alarak mezun oldu.',
      '2014 yılında Bezmialem Vakıf Üniversitesi Diş Hekimliği Fakültesi Ağız, Diş ve Çene Cerrahisi Anabilim Dalı’nda doktora eğitimine hak kazandı.',
      '2019 yılında “Travmatik Fasiyal Sinir Hasarı Modelinde Ozon Terapi ve Düşük Seviye Lazer Terapinin Etkinliğinin Karşılaştırılması” konulu doktora tezini sunarak Doktor Diş Hekimi unvanını aldı. Aynı yıl San Francisco, Kaliforniya’da yapılan Dünya Diş Hekimliği (FDI) Kongresi’nde tez çalışması en iyi araştırma ödülüne layık görüldü.',
      'Meslek hayatı boyunca birçok kongre, sempozyum, eğitim ve seminere katılan Dr. Yusuf Yuca; yenilikçi ve koruyucu yaklaşımıyla hizmet vermektedir.',
      '2020 yılında Dr. Tuğçe Yuca Öztürk ile birlikte Urban Dental Clinic’i kuran ve hastalarını burada kabul etmeye devam eden Dr. Yusuf Yuca; Türk Oral ve Maksillofasiyal Cerrahi Derneği (TAOMS) ve Ağız ve Çene-Yüz Cerrahisi Birliği Derneği (AÇBİD) üyesidir.',
    ],
  },
};

export default function DoctorDetailPage({ params }) {
  const profile = doctorProfiles[params.slug];

  if (!profile) {
    return (
      <div className="sharp-theme min-h-screen bg-[#111111] text-white">
        <Header />
        <main className="page-shell px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Doktor bulunamadı</h1>
          <Link href="/doctors" className="mt-6 inline-block text-[#22c5b6]">
            Doktorlar sayfasına dön
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="sharp-theme min-h-screen bg-[#111111] text-[#173a36]">
      <div className="bg-[radial-gradient(circle_at_top,#22c5b6_0%,#0f8b80_32%,#141414_76%)] pb-16">
        <Header />
        <section className="page-shell mt-10 px-4 text-white md:px-6">
          <Link href="/doctors" className="text-sm text-white/80 hover:text-white">
            ← Doktorlar
          </Link>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-base text-white/90 md:text-lg">{profile.title}</p>
        </section>
      </div>

      <main className="page-shell -mt-8 px-3 pb-14 md:px-6">
        <section className="rounded-[28px] bg-white px-6 py-12 shadow-xl md:px-10">
          <div className="grid gap-10 md:grid-cols-[300px,1fr] md:items-start">
            <div className="mx-auto h-[360px] w-full max-w-[300px] overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-lg">
              <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4 text-[#333]">
              {profile.content.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
