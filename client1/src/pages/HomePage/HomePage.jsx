import React from 'react'
import './HomePage.css'
import HomeIntro from '../../HomeComponent/HomeIntro/HomeIntro'
import ProcessSteps from '../../HomeComponent/ProcessSteps/ProcessSteps'
import ActionBut from '../../HomeComponent/ActionButComponent/ActionButComponent'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HomeIntro/>
      
      <ProcessSteps/>
      
      <ActionBut/>
    </div>
  )
}

export default HomePage