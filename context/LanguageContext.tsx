"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '../lib/translations';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'slo',
  setLanguage: () => {},
  t: translations.slo,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('slo');

  useEffect(() => {
    const saved = localStorage.getItem('site_lang') as Language;
    if (saved && (saved === 'slo' || saved === 'eng' || saved === 'ger')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
