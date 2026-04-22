import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    title: '1) Muayene ve Dijital Gülüş Analizi',
    detail:
      'Yüz oranları, diş formu, diş eti seviyesi ve kapanış düzeni detaylı incelenir. Fotoğraf + dijital ölçü ile kişiye özel plan hazırlanır.',
  },
  {
    title: '2) Uygun Tedavi Seçimi',
    detail:
      'Hastanın ihtiyacına göre laminate veneer, zirkonyum kaplama, implant destekli çözümler veya diş beyazlatma kombinasyonu belirlenir.',
  },
  {
    title: '3) Hazırlık ve Geçici Prova',
    detail:
      'Minimal aşındırma gerekiyorsa kontrollü şekilde yapılır. Geçici prova dişlerle final tasarıma yakın bir ön izleme sunulur.',
  },
  {
    title: '4) Final Uygulama ve Kontrol',
    detail:
      'Kalıcı restorasyonlar yerleştirilir, kapanış ayarları ve estetik simetri kontrolleri tamamlanır.',
  },
];

const qa = [
  {
    q: 'Hollywood Smile kaç gün sürer?',
    a: 'Planın kapsamına göre ortalama 5-7 gün içinde tamamlanabilir. İmplant gereken vakalarda süre uzayabilir.',
  },
  {
    q: 'İşlem ağrılı mıdır?',
    a: 'Uygulamalar lokal anestezi ile konforlu şekilde yapılır. Çoğu hasta günlük yaşamına hızlıca döner.',
  },
  {
    q: 'Ne kadar kalıcıdır?',
    a: 'Düzenli bakım, doğru ağız hijyeni ve kontrollerle uzun yıllar estetik ve fonksiyonel sonuç korunabilir.',
  },
];

export default function HollywoodSmilePage() {
  return (
    <div className="min-h-screen bg-[#f4fbfa] text-[#15332f]">
      <div className="bg-[linear-gradient(180deg,#0d4d8d_0%,#1066a7_55%,#f4fbfa_100%)] pb-16">
        <Header />
        <section className="mx-auto mt-10 max-w-5xl px-5 text-center text-white md:px-6">
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            Hollywood Smile Nedir? Tedavisi, Adımları ve Fiyatları
          </h1>
          <p className="mt-4 text-base text-white/90 md:text-lg">
            Anastamar Dental Clinic ile doğal, simetrik ve özgüvenli bir gülüş tasarımına ulaşın.
          </p>
        </section>
      </div>

      <main className="mx-auto -mt-10 max-w-5xl space-y-7 px-5 pb-14 md:px-6">
        <section className="overflow-hidden rounded-[26px] bg-white shadow-[0_20px_40px_rgba(7,45,41,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1500&q=80"
            alt="Hollywood smile tedavisi"
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
        </section>

        <section className="rounded-[26px] bg-white p-6 shadow-[0_20px_40px_rgba(7,45,41,0.1)] md:p-9">
          <h2 className="text-3xl font-black text-[#0b355f]">Hollywood Smile Nedir?</h2>
          <p className="mt-4 leading-8 text-[#35514d]">
            Hollywood Smile; diş rengi, diş formu, diş eti görünümü ve dudak hattını bir bütün olarak ele alan estetik gülüş
            tasarımıdır. Amaç yalnızca beyaz dişler değil, yüz hatlarıyla uyumlu, doğal ve sağlıklı bir görünüm elde etmektir.
            Anastamar Dental Clinic&apos;te süreç; dijital analiz, detaylı planlama ve kişiye özel uygulama adımlarıyla yürütülür.
          </p>

          <h3 className="mt-7 text-2xl font-extrabold text-[#0b355f]">Kimler Hollywood Smile Tedavisi İçin Uygundur?</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-[#35514d]">
            <li>Renk, form veya boyut olarak estetik görünümünü iyileştirmek isteyenler.</li>
            <li>Kırık, aşınmış veya aralıklı diş problemi yaşayanlar.</li>
            <li>Ön dişlerinde simetri bozukluğu bulunan hastalar.</li>
            <li>Diş eti gülümsemesi (gummy smile) nedeniyle estetik kaygı yaşayanlar.</li>
          </ul>
        </section>

        <section className="rounded-[26px] bg-white p-6 shadow-[0_20px_40px_rgba(7,45,41,0.1)] md:p-9">
          <h2 className="text-3xl font-black text-[#0b355f]">Hollywood Smile Tedavisi Nasıl Yapılır?</h2>
          <div className="mt-5 space-y-4">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d9ece8] bg-[#f6fbfa] p-5">
                <h3 className="text-lg font-extrabold text-[#155b92]">{step.title}</h3>
                <p className="mt-2 leading-7 text-[#35514d]">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] bg-white p-6 shadow-[0_20px_40px_rgba(7,45,41,0.1)] md:p-9">
          <h2 className="text-3xl font-black text-[#0b355f]">Kullanılan Yöntemler</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9ece8] p-5">
              <h3 className="text-xl font-bold text-[#155b92]">Laminate Veneer</h3>
              <p className="mt-2 leading-7 text-[#35514d]">Doğal ışık geçirgenliği yüksek, minimal dokunuşla estetik görünüm sağlar.</p>
            </div>
            <div className="rounded-2xl border border-[#d9ece8] p-5">
              <h3 className="text-xl font-bold text-[#155b92]">Zirkonyum Kaplama</h3>
              <p className="mt-2 leading-7 text-[#35514d]">Dayanıklılık ve uzun ömür arayan hastalar için güçlü ve estetik bir seçenektir.</p>
            </div>
            <div className="rounded-2xl border border-[#d9ece8] p-5">
              <h3 className="text-xl font-bold text-[#155b92]">Diş Beyazlatma</h3>
              <p className="mt-2 leading-7 text-[#35514d]">Gülüş tasarımını destekleyen, renk tonunu daha canlı hale getiren tamamlayıcı işlemdir.</p>
            </div>
            <div className="rounded-2xl border border-[#d9ece8] p-5">
              <h3 className="text-xl font-bold text-[#155b92]">Diş Eti Düzenleme</h3>
              <p className="mt-2 leading-7 text-[#35514d]">Gülüş hattını dengelemek için lazer destekli şekillendirme uygulanabilir.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] bg-white p-6 shadow-[0_20px_40px_rgba(7,45,41,0.1)] md:p-9">
          <h2 className="text-3xl font-black text-[#0b355f]">Sık Sorulan Sorular</h2>
          <div className="mt-5 space-y-3">
            {qa.map((item) => (
              <details key={item.q} className="rounded-2xl border border-[#d9ece8] px-5 py-4">
                <summary className="cursor-pointer list-none font-bold text-[#155b92]">{item.q}</summary>
                <p className="pt-3 leading-7 text-[#35514d]">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#0fa79b] p-6 text-white">
            <h3 className="text-2xl font-black">Yeni Gülüşünüz İçin İlk Adımı Atın</h3>
            <p className="mt-2 text-white/90">Anastamar Dental Clinic uzman ekibi ile online ön değerlendirme oluşturabilir, size özel planı hemen alabilirsiniz.</p>
            <a
              href="/#contact"
              className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#0b355f]"
            >
              Ücretsiz Ön Görüşme Al
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
