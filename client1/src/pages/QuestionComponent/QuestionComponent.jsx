import {React, useState} from 'react'
import './QuestionComponent.css'
import Button from '../../components/Button/Button'
import question from './questions'

const QuestionComponent = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };
  return (
    <div className='question_component'>
        <div className="question_item">
            <div className="support_button">
                <Button
                    text='Заказ'
                    style={{backgroundColor:'white', height:'5vh'}}
                    />
                <Button
                    text='Поддержка'
                    style={{backgroundColor:'white', height:'5vh'}}
                />
            </div>

            <div className="answers_questions">
            <h1>Вопросы и ответы</h1>
                <ul>
                    {question.map((item, index) => (
                    <li key={index}>
                        <h2 onClick={() => toggleQuestion(index)}>{item.question}</h2>
                        {activeQuestion === index && (
                        <div>
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
        </div>
    </div>
  )
}

export default QuestionComponent