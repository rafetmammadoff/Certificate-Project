import React from 'react'
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import p3 from '../assets/img/p3.png'
import p4 from '../assets/img/p4.png'
import p5 from '../assets/img/p5.png'
import p6 from '../assets/img/p6.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Partners = () => {
    React.statePartner= {
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        },
      }
  return (
    <section id="partner">
        <div className="container custom-container">
          <div className="slide-contain owl-carousel owl-theme partner-slide">
          <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.statePartner.responsive} >
            <div className="slide-item item">
              <img src={p1} alt="" />
            </div>
            <div className="slide-item item">
              <img src={p2} alt="" />
            </div>
            <div className="slide-item item">
              <img src={p3} alt="" />
            </div>
            <div className="slide-item item">
              <img src={p4} alt="" />
            </div>
            <div className="slide-item item">
              <img src={p5} alt="" />
            </div>
            <div className="slide-item item">
              <img src={p6} alt="" />
            </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default Partners