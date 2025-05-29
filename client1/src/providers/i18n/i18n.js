import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import en from './locales/en/enTranslation.json'
import ru from './locales/ru/ruTranslation.json'

const savedLanguage = localStorage.getItem('language') || 'ru';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        lng: savedLanguage,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false
        }
    });

// Добавляем функцию для изменения языка
export const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
};

export default i18n;