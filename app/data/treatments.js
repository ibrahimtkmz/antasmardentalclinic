export const treatments = [
  {
    slug: 'hollywood-smile',
    title: 'Hollywood Smile',
    teaser: 'Dijital gülüş tasarımı ile daha beyaz, simetrik ve doğal bir gülüş.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Hollywood Smile; diş formu, renk tonu, diş eti simetrisi ve dudak hattını birlikte değerlendiren kapsamlı bir estetik gülüş tasarımıdır.',
    includes: ['Dijital analiz ve mock-up', 'Lamina veneer / zirkonyum seçenekleri', 'Diş eti estetiği düzenlemeleri'],
    duration: '4-7 gün',
  },
  {
    slug: 'dental-implant',
    title: 'Dental Implant',
    teaser: 'Eksik dişlerin yerine uzun ömürlü, fonksiyonel ve estetik implant çözümleri.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Dental implant tedavisi, kaybedilen dişlerin yerine çene kemiğine yerleştirilen titanyum kökler ile doğal görünümlü sabit restorasyonlar sağlar.',
    includes: ['3D tomografi ile planlama', 'Tekli veya çoklu implant uygulamaları', 'Geçici ve kalıcı üst yapı protokolü'],
    duration: '1 gün operasyon + 3-4 ay iyileşme',
  },
  {
    slug: 'veneers',
    title: 'Veneers',
    teaser: 'Minimal aşındırma ile doğal, parlak ve estetik ön diş görünümü.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Porselen veneerler, dişlerin ön yüzeyine uygulanan ince seramik yapılarla renk, form ve boyut düzensizliklerini düzeltir.',
    includes: ['Dijital ölçü ve tasarım', 'Renk ve form kişiselleştirme', 'Minimal invaziv uygulama'],
    duration: '5-6 gün',
  },
  {
    slug: 'dental-crowns',
    title: 'Dental Crowns',
    teaser: 'Hasarlı dişlerde dayanıklı ve estetik tam kaplama çözümleri.',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Zirkonyum ve E-max kronlar, ileri madde kaybı yaşayan dişlerde hem fonksiyon hem de estetik açıdan güçlü sonuçlar sunar.',
    includes: ['Fonksiyonel kapanış analizi', 'Zirkonyum / E-max seçenekleri', 'Kişiye özel laboratuvar üretimi'],
    duration: '5-7 gün',
  },
  {
    slug: 'dental-bone-graft',
    title: 'Dental Bone Graft',
    teaser: 'İmplant öncesi kemik hacmini artırmaya yönelik güvenli greft işlemleri.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Kemik grefti, implant için yetersiz çene kemiği bulunan hastalarda kemik hacmini desteklemek amacıyla uygulanan hazırlayıcı cerrahidir.',
    includes: ['Kemik yoğunluğu değerlendirmesi', 'Otogreft / sentetik greft seçenekleri', 'İmplantla entegre planlama'],
    duration: '1 gün operasyon',
  },
  {
    slug: 'sinus-lift',
    title: 'Sinus Lift',
    teaser: 'Üst çenede implant için gerekli kemik yüksekliğini artıran ileri cerrahi.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Sinüs lifting, üst arka bölgede implant uygulanabilmesi için sinüs tabanını yükselterek kemik desteği sağlayan işlemdir.',
    includes: ['Açık veya kapalı sinüs lifting', 'Kemik grefti ile destekleme', 'İmplantla kombine tedavi seçenekleri'],
    duration: '1 gün operasyon + iyileşme süreci',
  },
];

export function getTreatmentBySlug(slug) {
  return treatments.find((item) => item.slug === slug);
}
