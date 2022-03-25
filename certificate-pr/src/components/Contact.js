import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Contact = () => {
    React.stateContact= {
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
      }
  return (
    <section id="contact">
        <div className="container custom-container">
          <div className="row owl-carousel owl-theme contact-slider">
          <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.stateContact.responsive} >
            <div className="col-lg-2 big-component item ">
              <div className="component">
                <div className="icon-area">
                  <i className="fas fa-truck" />
                </div>
                <div className="about">
                  <p>FREE DELIVERY </p>
                  <span>From 275 AED</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-2 big-component item ">
              <div className="component">
                <div className="icon-area">
                  <i className="fas fa-money-bill-alt" />
                </div>
                <div className="about">
                  <p>CASH ON DELIVERY </p>
                  <span>From 275 AED</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-2 big-component item ">
              <div className="component">
                <div className="icon-area">
                  <i className="fas fa-gift" />
                </div>
                <div className="about">
                  <p>FREE GIFT BOX </p>
                  <span>&amp; gift note</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-2 big-component item ">
              <div className="component">
                <div className="icon-area">
                  <i className="fas fa-phone-square-alt" />
                </div>
                <div className="about">
                  <p>CONTACT US</p>
                  <span>123 456 789</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-2 big-component item no-border">
              <div className="component">
                <div className="icon-area">
                  <i className="fas fa-users" />
                </div>
                <div className="about">
                  <p>LOYALTY</p>
                  <span>Rewarded</span>
                </div>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default Contact