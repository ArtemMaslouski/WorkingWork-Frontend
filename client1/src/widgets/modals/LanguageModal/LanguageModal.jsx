import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './LanguageModal.css'

const languages = ['Русский', 'English', 'Español', 'Deutsch'];

const LanguageModal = ({ isOpen, onSelectLanguage }) => {
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
                            key={lang}
                            onClick={() => onSelectLanguage(lang)}
                            className="language-item"
                        >
                            {lang}
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LanguageModal;
