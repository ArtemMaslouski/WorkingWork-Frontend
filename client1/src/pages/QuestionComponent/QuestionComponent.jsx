import React, { useState } from 'react';
import './QuestionComponent.css';
import { useTranslation } from 'react-i18next';

const QuestionComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const { t } = useTranslation();

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: t('questions.howItWorks.question'),
      answer: t('questions.howItWorks.answer')
    },
    {
      question: t('questions.howToChooseSpecialist.question'),
      answer: t('questions.howToChooseSpecialist.answer')
    },
    {
      question: t('questions.howToChooseSpecialistProcess.question'),
      answer: t('questions.howToChooseSpecialistProcess.answer')
    },
    {
      question: t('questions.howToChooseSpecialistReviews.question'),
      answer: t('questions.howToChooseSpecialistReviews.answer')
    },
    {
      question: t('questions.serviceResponsibility.question'),
      answer: t('questions.serviceResponsibility.answer')
    },
    {
      question: t('questions.whoCanLeaveReview.question'),
      answer: t('questions.whoCanLeaveReview.answer')
    },
    {
      question: t('questions.howToLeaveReview.question'),
      answer: t('questions.howToLeaveReview.answer')
    },
    {
      question: t('questions.reviewsNotPublished.question'),
      answer: t('questions.reviewsNotPublished.answer', { returnObjects: true })
    },
    {
      question: t('questions.unsatisfiedWithWork.question'),
      answer: t('questions.unsatisfiedWithWork.answer', { returnObjects: true })
    },
    {
      question: t('questions.howToEditOrder.question'),
      answer: t('questions.howToEditOrder.answer')
    },
    {
      question: t('questions.howToCancelOrder.question'),
      answer: t('questions.howToCancelOrder.answer')
    },
    {
      question: t('questions.whyLeavePhone.question'),
      answer: t('questions.whyLeavePhone.answer')
    }
  ];

  return (
    <div className='question-component'>
      <h1 className='question-title'>{t('questions.title')}</h1>
      <ul className='question-list'>
        {questions.map((item, index) => (
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
