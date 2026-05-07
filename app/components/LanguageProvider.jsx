'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', label: 'English', icon: '🇬🇧' },
  { code: 'ru', label: 'Русский', icon: '🇷🇺' },
  { code: 'uk', label: 'Українська', icon: '🇺🇦' },
];

export const translations = {
  en: {
    navHome: 'Home', navAbout: 'About Us', navTreatments: 'Treatments', navDoctors: 'Doctors', navContact: 'Contact', book: 'Book Appointment',
    why: 'Why', clinic: 'Anastamar Clinic', playVideo: 'Play Video', close: 'Close', learnMore: 'Learn More', expYears: 'Experience Years', happyPatients: 'Happy Patients',
    footerQuick: 'Quick Links', footerServices: 'Popular Services', footerOffer: 'Our patients who want to get an offer from abroad can get a quick response via WhatsApp.',
    language: 'Language', aboutTitle: 'About us', aboutBreadcrumb: 'Home / About Us', contactTitle: 'We Are Here for You', contactLead: 'Fill out the form below, and our treatment consultants will contact you as soon as possible.',
    doctorsTitle: 'Our Doctors', doctorsLead: 'Review our doctors serving at our clinic and get detailed information about their specialties.', viewProfile: 'View detailed profile',
    treatmentsTitle: 'All Treatments', treatmentsLead: 'We have gathered all treatment pages in one place, fully aligned with the homepage design language. You can explore the treatment that best suits your needs on the detail pages.', viewDetails: 'View Details',
  },
  ru: {
    navHome: 'Главная', navAbout: 'О нас', navTreatments: 'Лечение', navDoctors: 'Врачи', navContact: 'Контакты', book: 'Записаться',
    why: 'Почему', clinic: 'Клиника Anastamar', playVideo: 'Смотреть', close: 'Закрыть', learnMore: 'Подробнее', expYears: 'Лет опыта', happyPatients: 'Счастливых пациентов',
    footerQuick: 'Быстрые ссылки', footerServices: 'Популярные услуги', footerOffer: 'Пациенты из-за рубежа могут быстро получить предложение через WhatsApp.',
    language: 'Язык', aboutTitle: 'О нас', aboutBreadcrumb: 'Главная / О нас', contactTitle: 'Мы здесь для вас', contactLead: 'Заполните форму ниже, и наши консультанты свяжутся с вами как можно скорее.',
    doctorsTitle: 'Наши врачи', doctorsLead: 'Ознакомьтесь с нашими врачами и получите подробную информацию об их специализации.', viewProfile: 'Посмотреть профиль',
    treatmentsTitle: 'Все процедуры', treatmentsLead: 'Мы собрали все страницы лечения в одном месте. Изучите детали и выберите подходящий вариант.', viewDetails: 'Подробнее',
  },
  uk: {
    navHome: 'Головна', navAbout: 'Про нас', navTreatments: 'Лікування', navDoctors: 'Лікарі', navContact: 'Контакти', book: 'Записатися',
    why: 'Чому', clinic: 'Клініка Anastamar', playVideo: 'Дивитись', close: 'Закрити', learnMore: 'Детальніше', expYears: 'Років досвіду', happyPatients: 'Щасливих пацієнтів',
    footerQuick: 'Швидкі посилання', footerServices: 'Популярні послуги', footerOffer: 'Пацієнти з-за кордону можуть швидко отримати пропозицію через WhatsApp.',
    language: 'Мова', aboutTitle: 'Про нас', aboutBreadcrumb: 'Головна / Про нас', contactTitle: 'Ми тут для вас', contactLead: 'Заповніть форму нижче, і наші консультанти звʼяжуться з вами якнайшвидше.',
    doctorsTitle: 'Наші лікарі', doctorsLead: 'Ознайомтеся з лікарями нашої клініки та дізнайтеся про їхні спеціалізації.', viewProfile: 'Переглянути профіль',
    treatmentsTitle: 'Усі процедури', treatmentsLead: 'Ми зібрали всі сторінки лікування в одному місці. Перегляньте деталі та оберіть найкращий варіант.', viewDetails: 'Детальніше',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('site-language');
    if (stored && translations[stored]) setLanguage(stored);
  }, []);

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
