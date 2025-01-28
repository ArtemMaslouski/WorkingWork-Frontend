import React from 'react'
import './HomePage.css'
import HomeIntro from '../HomeComponent/HomeIntro/HomeIntro'
import ProcessSteps from '../HomeComponent/ProcessSteps/ProcessSteps'
import ActionBut from '../HomeComponent/ActionButComponent/ActionButComponent'
import ServicesList from '../../features/ServicesList/ui/ServicesList'
import SearchBar from '../HomeComponent/SearchBar/SearchBar' 
import ReviewComponent from '../HomeComponent/ReviewComponent/ReviewComponent'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HomeIntro/>
      <ServicesList/>
      <ProcessSteps/>
      
      <SearchBar/>
      <ActionBut/>
      <ReviewComponent/>
    </div>
  )
}

export default HomePage