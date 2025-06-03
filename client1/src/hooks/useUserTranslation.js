import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translateText } from '../services/translateService';

const getLanguageCode = (language) => {
  const languageMap = {
    'en': 'en',
    'ru': 'ru',
    'es': 'es',
    'de': 'de'
  };
  return languageMap[language] || 'en';
};

export const useUserTranslation = (userInfo) => {
  const { i18n } = useTranslation();
  const [translatedInfo, setTranslatedInfo] = useState({
    name: '',
    surname: '',
    description: '',
    city: '',
    sex: ''
  });

  useEffect(() => {
    const translateUserInfo = async () => {
      if (!userInfo) {
        setTranslatedInfo({
          name: '',
          surname: '',
          description: '',
          city: '',
          sex: ''
        });
        return;
      }

      const targetLanguage = getLanguageCode(i18n.language);
      
      // Если язык русский, используем оригинальные данные
      if (targetLanguage === 'ru') {
        setTranslatedInfo({
          name: userInfo?.userInfo?.Name || '',
          surname: userInfo?.userInfo?.Surname || '',
          description: userInfo?.userInfo?.Description || '',
          city: userInfo?.userInfo?.City || '',
          sex: userInfo?.userInfo?.Sex || ''
        });
        return;
      }

      console.log('Translating to:', targetLanguage);
      
      try {
        const [translatedName, translatedSurname, translatedDescription, translatedCity, translatedSex] = await Promise.all([
          translateText(userInfo?.userInfo?.Name || '', targetLanguage),
          translateText(userInfo?.userInfo?.Surname || '', targetLanguage),
          translateText(userInfo?.userInfo?.Description || '', targetLanguage),
          translateText(userInfo?.userInfo?.City || '', targetLanguage),
          translateText(userInfo?.userInfo?.Sex || '', targetLanguage)
        ]);

        console.log('Translation results:', {
          name: translatedName,
          surname: translatedSurname,
          description: translatedDescription,
          city: translatedCity,
          sex: translatedSex
        });

        setTranslatedInfo({
          name: translatedName,
          surname: translatedSurname,
          description: translatedDescription,
          city: translatedCity,
          sex: translatedSex
        });
      } catch (error) {
        console.error('Translation failed:', error);
        // В случае ошибки используем оригинальные данные
        setTranslatedInfo({
          name: userInfo?.userInfo?.Name || '',
          surname: userInfo?.userInfo?.Surname || '',
          description: userInfo?.userInfo?.Description || '',
          city: userInfo?.userInfo?.City || '',
          sex: userInfo?.userInfo?.Sex || ''
        });
      }
    };

    translateUserInfo();
  }, [userInfo, i18n.language]);

  return { translatedInfo };
}; 