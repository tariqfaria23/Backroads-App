import React from 'react'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
    <div className="section-title">
      <h2>featured <span>tours</span></h2>
    </div>

    <div className="section-center featured-center">

      {tours.map((tour)=>{
        return(
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.txt}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.map}
              </p>
              <p>{`${tour.days} days`}</p>
              <p>{`from ${tour.money}`}</p>
            </div>
          </div>
        </article>
        )
      })}

      
    </div>
  </section>
  )
}

export default Tours
