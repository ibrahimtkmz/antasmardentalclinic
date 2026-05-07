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
    footerQuick: 'Quick Links', footerServices: 'Popular Services',
  },
  ru: {
    navHome: 'Главная', navAbout: 'О нас', navTreatments: 'Лечение', navDoctors: 'Врачи', navContact: 'Контакты', book: 'Записаться',
    why: 'Почему', clinic: 'Клиника Anastamar', playVideo: 'Смотреть', close: 'Закрыть', learnMore: 'Подробнее', expYears: 'Лет опыта', happyPatients: 'Счастливых пациентов',
    footerQuick: 'Быстрые ссылки', footerServices: 'Популярные услуги',
  },
  uk: {
    navHome: 'Головна', navAbout: 'Про нас', navTreatments: 'Лікування', navDoctors: 'Лікарі', navContact: 'Контакти', book: 'Записатися',
    why: 'Чому', clinic: 'Клініка Anastamar', playVideo: 'Дивитись', close: 'Закрити', learnMore: 'Детальніше', expYears: 'Років досвіду', happyPatients: 'Щасливих пацієнтів',
    footerQuick: 'Швидкі посилання', footerServices: 'Популярні послуги',
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
