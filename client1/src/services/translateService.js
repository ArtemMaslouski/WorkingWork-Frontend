import axios from 'axios';

const GOOGLE_TRANSLATE_API = 'https://translate.googleapis.com/translate_a/single';

export const translateText = async (text, targetLanguage) => {
  if (!text) return text;
  
  const cacheKey = `translation_${text}_${targetLanguage}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(GOOGLE_TRANSLATE_API, {
      params: {
        client: 'gtx',
        sl: 'auto',
        tl: targetLanguage,
        dt: 't',
        q: text
      }
    });

    if (response.data && response.data[0]) {
      const translatedText = response.data[0]
        .map(item => item[0])
        .join('');
      
      localStorage.setItem(cacheKey, translatedText);
      return translatedText;
    }
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}; 