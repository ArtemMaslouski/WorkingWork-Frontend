import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './QuestionComponent.css';
import questions from './questions';

const QuestionComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const currentQuestions = questions[currentLanguage] || questions.ru;

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className='question-component'>
      <h1 className='question-title'>{currentLanguage === 'ru' ? 'Вопросы и ответы' : 
        currentLanguage === 'en' ? 'Questions and Answers' :
        currentLanguage === 'es' ? 'Preguntas y Respuestas' :
        'Fragen und Antworten'}</h1>
      <ul className='question-list'>
        {currentQuestions.map((item, index) => (
          <li key={index} className='question-item'>
            <h2
              className='question-text'
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
            </h2>
            {activeQuestion === index && (
              <div className='answer'>
                {Array.isArray(item.answer) ? (
                  <ul>
                    {item.answer.map((ans, ansIndex) => (
                      <li key={ansIndex}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
