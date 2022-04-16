import React from 'react'
import slide1 from '../assets/img/slide1__57732.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3__55489.jpg'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import $ from 'jquery'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Component = () => {
  React.state= {
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
  }
  
  return (
    <div><section className='dark-class' id="components">
    <div className="container custom-container">
      <div className="row">
        <div className="col-lg-3 none" id="none-opacity">
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fab fa-gitlab" />
                <span>Fashion</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-utensils" />
                <span>Kitchen</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-desktop" />
                <span>Computer</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-shopping-bag" />
                <span>Bags</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-clock" />
                <span>Watches</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-mobile-alt" />
                <span>Smartphone</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-user-md" />
                <span>Health&amp;Beauty</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="far fa-futbol" />
                <span>Sport Clothing</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-heartbeat" />
                <span>Maternity</span>
              </div>
            </div>
          </div>
          <div className="component dark-class">
            <div className="component-contain">
              <div className="text white-text">
                <i className="fas fa-plus-circle" />
                <span>More Categories</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <div className="slide owl-carousel owl-theme">
            <div className="img-area item">
              <img src={slide1} alt="" />
            </div>
            <div className="img-area item">
              <img src={slide2} alt="" />
            </div>
            <div className="img-area item">
              <img src={slide3} alt="" />
            </div>
          </div> */}
          <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={true}
    autoplayTimeout={2000}
    items={4}
    responsive={React.state.responsive} >
    
          <div className="img-area item">
              <img src={slide1} alt="" />
            </div>
            <div className="img-area item">
              <img src={slide2} alt="" />
            </div>
            <div className="img-area item">
              <img src={slide3} alt="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="col-lg-3 reclam-area col-12">
          <div className="reclam">
            <img src={img1} alt="" />
          </div>
          <div className="reclam">
            <img src={img2} alt="" />
          </div>
          <div className="reclam">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Component