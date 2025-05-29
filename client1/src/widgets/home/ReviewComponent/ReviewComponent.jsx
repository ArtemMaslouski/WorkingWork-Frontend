import React from 'react'
import './ReviewComponent.css'
import { useTranslation } from 'react-i18next';

const ReviewComponent = () => {
  const {t} = useTranslation();

  return (
    <div className='review_component'>
        <h2>{t('Reviews')}</h2>
    </div>
  )
}

export default ReviewComponent