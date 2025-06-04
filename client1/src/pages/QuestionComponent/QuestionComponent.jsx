import React, { useState } from 'react';
import './QuestionComponent.css';
import question from './questions';

const QuestionComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className='question-component'>
      <h1 className='question-title'>Вопросы и ответы</h1>
      <ul className='question-list'>
        {question.map((item, index) => (
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
