import React from 'react'
import './ProcessSteps.css'
import cardsData from './data'
import { useTranslation } from 'react-i18next';

const ProcessSteps = () => {

  const {t} = useTranslation();

  return (
    <div className='processSteps_component'>
        <h2>{t('HowItWork')}</h2>
            <div className="cards_container">
                {cardsData.map(card => (
                    <div className="card" key={card.id}>
                        <div className="text_content">
                            <h3>{t(card.title)}</h3>
                            <p>{t(card.description)}</p>
                        </div>
                        <img src={card.image} alt={card.title} />
                </div>
                ))}
            </div>
    </div>
  )
}

export default ProcessSteps