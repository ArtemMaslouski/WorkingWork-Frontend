export const translateText = async (text, targetLanguage) => {
    const cacheKey = `${text}_${targetLanguage}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
        const response = await axios.post('https://libretranslate.de/translate', {
            q: text,
            source: 'auto',
            target: getLangCode(targetLanguage),
            format: 'text'
        });

        const translated = response.data.translatedText;
        localStorage.setItem(cacheKey, translated);
        return translated;
    } catch (error) {
        console.error('Ошибка перевода:', error);
        return text;
    }
};

const getLangCode = (lang) => {
    switch (lang) {
        case 'English': return 'en';
        case 'Español': return 'es';
        case 'Deutsch': return 'de';
        case 'Русский': return 'ru';
        default: return 'en';
    }
};
