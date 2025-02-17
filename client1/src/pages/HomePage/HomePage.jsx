import React from 'react'
import './HomePage.css'
import HomeIntro from '../../widgets/home/HomeIntro/HomeIntro'
import ProcessSteps from '../../widgets/home/ProcessSteps/ProcessSteps'
import ActionBut from '../../widgets/home/ActionButComponent/ActionButComponent'
import ServicesList from '../../features/ServicesList/ui/ServicesList'
import SearchBar from '../../widgets/home/SearchBar/SearchBar' 
import ReviewComponent from '../../widgets/home/ReviewComponent/ReviewComponent'

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