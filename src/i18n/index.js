import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources, supportedLanguages } from './resources.js';

const storedLanguage =
  typeof window === 'undefined'
    ? undefined
    : window.localStorage.getItem('language');
const initialLanguage = supportedLanguages.includes(storedLanguage)
  ? storedLanguage
  : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage;
}

export default i18n;
