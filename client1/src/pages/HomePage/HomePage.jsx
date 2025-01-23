import React from 'react'
import './HomePage.css'
import HomeIntro from '../../HomeComponent/HomeIntro/HomeIntro'
import ProcessSteps from '../../HomeComponent/ProcessSteps/ProcessSteps'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HomeIntro/>
      
      <ProcessSteps/>
    </div>
  )
}

export default HomePage