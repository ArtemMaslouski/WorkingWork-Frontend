import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(HttpBackend) // загрузка по HTTP
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'ru',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // путь до public
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
