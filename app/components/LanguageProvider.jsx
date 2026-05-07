'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', icon: '🇹🇷' },
  { code: 'en', label: 'English', icon: '🇬🇧' },
  { code: 'ru', label: 'Русский', icon: '🇷🇺' },
  { code: 'uk', label: 'Українська', icon: '🇺🇦' },
];

export const translations = {
  tr: {
    navHome: 'Ana Sayfa', navAbout: 'Hakkımızda', navTreatments: 'Tedaviler', navDoctors: 'Doktorlar', navContact: 'İletişim', book: 'Randevu Al',
    why: 'Neden', clinic: 'Anastamar Clinic', playVideo: 'Videoyu Oynat', close: 'Kapat', learnMore: 'Daha Fazla', expYears: 'Yıllık Deneyim', happyPatients: 'Mutlu Hasta',
    footerQuick: 'Hızlı Linkler', footerServices: 'Popüler Hizmetler', footerOffer: 'Yurt dışından teklif almak isteyen hastalarımız WhatsApp üzerinden hızlı yanıt alabilir.',
    language: 'Dil', aboutTitle: 'Hakkımızda', aboutBreadcrumb: 'Ana Sayfa / Hakkımızda', contactTitle: 'Sizin İçin Buradayız', contactLead: 'Aşağıdaki formu doldurun, tedavi danışmanlarımız en kısa sürede sizinle iletişime geçsin.',
    doctorsTitle: 'Doktorlarımız', doctorsLead: 'Kliniğimizde hizmet veren doktorlarımızı inceleyin ve uzmanlık alanları hakkında detaylı bilgi alın.', viewProfile: 'Detaylı profili görüntüle',
    treatmentsTitle: 'Tüm Tedaviler', treatmentsLead: 'Tüm tedavi sayfalarını tek bir yerde topladık. Detay sayfalarından size en uygun tedaviyi keşfedebilirsiniz.', viewDetails: 'Detayları Görüntüle',
    homeHeadline1: 'Danışmadan Mükemmelliğe', homeHeadline2: 'Gülüş Yolculuğunuz Burada Başlıyor', homeLead: 'Anastamar Dental Clinic, İstanbul’da ileri estetik diş hekimliği, implant ve gülüş tasarımı hizmetlerini güvenilir ekip ve premium hasta deneyimiyle sunar.',
    formName: 'Ad soyadınızı girin', formPhone: 'Telefon numaranızı girin', submitNow: 'Şimdi Gönder',
    aboutHeading: 'Hakkımızda', getPrice: 'Hemen Fiyat Al', freeConsultation: 'Ücretsiz Danışmanlık',
  },
  en: {
    navHome: 'Home', navAbout: 'About Us', navTreatments: 'Treatments', navDoctors: 'Doctors', navContact: 'Contact', book: 'Book Appointment',
    why: 'Why', clinic: 'Anastamar Clinic', playVideo: 'Play Video', close: 'Close', learnMore: 'Learn More', expYears: 'Experience Years', happyPatients: 'Happy Patients',
    footerQuick: 'Quick Links', footerServices: 'Popular Services', footerOffer: 'Our patients who want to get an offer from abroad can get a quick response via WhatsApp.',
    language: 'Language', aboutTitle: 'About us', aboutBreadcrumb: 'Home / About Us', contactTitle: 'We Are Here for You', contactLead: 'Fill out the form below, and our treatment consultants will contact you as soon as possible.',
    doctorsTitle: 'Our Doctors', doctorsLead: 'Review our doctors serving at our clinic and get detailed information about their specialties.', viewProfile: 'View detailed profile',
    treatmentsTitle: 'All Treatments', treatmentsLead: 'We have gathered all treatment pages in one place, fully aligned with the homepage design language. You can explore the treatment that best suits your needs on the detail pages.', viewDetails: 'View Details',
    homeHeadline1: 'From Consultation to Perfection', homeHeadline2: 'Your Smile Journey Starts Here', homeLead: 'Anastamar Dental Clinic delivers advanced cosmetic dentistry, implants and smile makeovers in Istanbul with a trusted team and premium patient experience.',
    formName: 'Enter your full name', formPhone: 'Enter your phone number', submitNow: 'Submit Now',
    aboutHeading: 'About Us', getPrice: 'Get Price Now', freeConsultation: 'Free Consultation',
  },
  ru: {
    navHome: 'Главная', navAbout: 'О нас', navTreatments: 'Лечение', navDoctors: 'Врачи', navContact: 'Контакты', book: 'Записаться',
    why: 'Почему', clinic: 'Клиника Anastamar', playVideo: 'Смотреть', close: 'Закрыть', learnMore: 'Подробнее', expYears: 'Лет опыта', happyPatients: 'Счастливых пациентов',
    footerQuick: 'Быстрые ссылки', footerServices: 'Популярные услуги', footerOffer: 'Пациенты из-за рубежа могут быстро получить предложение через WhatsApp.',
    language: 'Язык', aboutTitle: 'О нас', aboutBreadcrumb: 'Главная / О нас', contactTitle: 'Мы здесь для вас', contactLead: 'Заполните форму ниже, и наши консультанты свяжутся с вами как можно скорее.',
    doctorsTitle: 'Наши врачи', doctorsLead: 'Ознакомьтесь с нашими врачами и получите подробную информацию об их специализации.', viewProfile: 'Посмотреть профиль',
    treatmentsTitle: 'Все процедуры', treatmentsLead: 'Мы собрали все страницы лечения в одном месте. Изучите детали и выберите подходящий вариант.', viewDetails: 'Подробнее',
    homeHeadline1: 'От консультации к совершенству', homeHeadline2: 'Ваш путь к улыбке начинается здесь', homeLead: 'Клиника Anastamar в Стамбуле предлагает современную эстетическую стоматологию, имплантацию и преображение улыбки с надежной командой и премиальным сервисом.',
    formName: 'Введите ваше полное имя', formPhone: 'Введите ваш номер телефона', submitNow: 'Отправить',
    aboutHeading: 'О нас', getPrice: 'Узнать цену', freeConsultation: 'Бесплатная консультация',
  },
  uk: {
    navHome: 'Головна', navAbout: 'Про нас', navTreatments: 'Лікування', navDoctors: 'Лікарі', navContact: 'Контакти', book: 'Записатися',
    why: 'Чому', clinic: 'Клініка Anastamar', playVideo: 'Дивитись', close: 'Закрити', learnMore: 'Детальніше', expYears: 'Років досвіду', happyPatients: 'Щасливих пацієнтів',
    footerQuick: 'Швидкі посилання', footerServices: 'Популярні послуги', footerOffer: 'Пацієнти з-за кордону можуть швидко отримати пропозицію через WhatsApp.',
    language: 'Мова', aboutTitle: 'Про нас', aboutBreadcrumb: 'Головна / Про нас', contactTitle: 'Ми тут для вас', contactLead: 'Заповніть форму нижче, і наші консультанти звʼяжуться з вами якнайшвидше.',
    doctorsTitle: 'Наші лікарі', doctorsLead: 'Ознайомтеся з лікарями нашої клініки та дізнайтеся про їхні спеціалізації.', viewProfile: 'Переглянути профіль',
    treatmentsTitle: 'Усі процедури', treatmentsLead: 'Ми зібрали всі сторінки лікування в одному місці. Перегляньте деталі та оберіть найкращий варіант.', viewDetails: 'Детальніше',
    homeHeadline1: 'Від консультації до досконалості', homeHeadline2: 'Ваш шлях до усмішки починається тут', homeLead: 'Клініка Anastamar у Стамбулі пропонує сучасну естетичну стоматологію, імплантацію та перетворення усмішки з надійною командою і преміальним сервісом.',
    formName: 'Введіть ваше повне ім’я', formPhone: 'Введіть ваш номер телефону', submitNow: 'Надіслати',
    aboutHeading: 'Про нас', getPrice: 'Дізнатися ціну', freeConsultation: 'Безкоштовна консультація',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr');

  useEffect(() => {
    const stored = window.localStorage.getItem('site-language');
    if (stored && translations[stored]) setLanguage(stored);
  }, []);

  useEffect(() => {
    const translateTo = (target) => {
      const combo = document.querySelector('.goog-te-combo');
      if (!combo) return false;
      combo.value = target;
      combo.dispatchEvent(new Event('change'));
      return true;
    };

    document.documentElement.lang = language;
    const targetLang = language === 'tr' ? 'tr' : language;

    if (language === 'tr') {
      document.cookie = 'googtrans=/tr/tr;path=/';
    } else {
      document.cookie = `googtrans=/tr/${targetLang};path=/`;
    }

    if (!translateTo(targetLang)) {
      const timer = window.setInterval(() => {
        if (translateTo(targetLang)) window.clearInterval(timer);
      }, 300);
      window.setTimeout(() => window.clearInterval(timer), 6000);
    }
  }, [language]);

  const changeLanguage = (code) => {
    setLanguage(code);
    window.localStorage.setItem('site-language', code);
    document.documentElement.lang = code;
  };

  const value = useMemo(() => ({ language, changeLanguage, t: translations[language] || translations.en }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
