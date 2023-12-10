import React from 'react'
import { services } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        {services.map((service)=>{
          return(
            <article className="service" id={service.id}>
              <span className="service-icon"><i className={service.icn}></i></span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">
                 {service.txt}
                </p>
              </div>
            </article>
          ) 
        })}
      </div>
    </section>
  )
}

export default Services
