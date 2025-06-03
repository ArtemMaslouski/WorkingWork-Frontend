import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { changeLanguage } from '../../../providers/i18n/i18n';
import './LanguageModal.css'

const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' }
];

const LanguageModal = ({ isOpen, onSelectLanguage }) => {
    const handleLanguageSelect = (langCode) => {
        changeLanguage(langCode);
        onSelectLanguage(langCode);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="language-modal" 
                >
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className="language-item"
                        >
                            {lang.name}
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LanguageModal;
