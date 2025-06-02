import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('language') || 'ru';
const basePath = process.env.PUBLIC_URL || '';

i18n
  .use(HttpBackend) 
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'ru',
    backend: {
      loadPath: `${basePath}/locales/{{lng}}/translation.json`,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    },
  });

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
};

export default i18n;
