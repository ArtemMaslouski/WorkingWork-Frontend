import React from 'react'
import services from '../model/servicesData'
import './ServicesList.css'

const ServicesList = () => {
  return (
    <div className='services_component'>
      {services.map((service,index) => (
        <div className="service_item" key={index}>
            <a href={service.link}>
              {service.name}
              {service.icon}
            </a>
        </div>
      ))}
      
    </div>
  )
}

export default ServicesList