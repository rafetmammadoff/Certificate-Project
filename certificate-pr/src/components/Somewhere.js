import React from 'react'
import sw1 from '../assets/img/sw1.jpg'
import sw2 from '../assets/img/sw2.jpg'
const Somewhere = () => {
  return (
    <section id="somewhere">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-6 left-img">
              <img src={sw1} alt="" />
            </div>
            <div className="col-lg-6  right-img">
            <img src={sw2} alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Somewhere