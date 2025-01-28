import React from 'react'
import './ProcessSteps.css'
import cardsData from './data'

const ProcessSteps = () => {
  return (
    <div className='processSteps_component'>
        <h2>Как это работает</h2>
            <div className="cards_container">
                {cardsData.map(card => (
                    <div className="card" key={card.id}>
                        <div className="text_content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.title} />
                </div>
                ))}
            </div>
    </div>
  )
}

export default ProcessSteps