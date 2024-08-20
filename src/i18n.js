import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

const lang = localStorage.getItem('locales');


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lang || 'fr', // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export const changeLanguage = (language) => {
i18n.changeLanguage(language);
};


export default i18n;
