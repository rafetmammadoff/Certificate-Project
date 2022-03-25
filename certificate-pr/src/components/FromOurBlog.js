import React from 'react'
import fob1 from '../assets/img/fob1.jpg'
import fob2 from '../assets/img/fob2.jpg'
import fob3 from '../assets/img/fob1.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const FromOurBlog = () => {
    React.stateOurBlog= {
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
      }

  return (
    <section id="from-our-blog">
        <div className="container custom-container">
          <div className="head">
            <h5>FEATURED CATEGORIES</h5>
            <div className="line">
              <div className="sm-line">
              </div>
            </div>
          </div>
          <div className="row big-slide-contain owl-carousel owl-theme from-our-blog-slide">
          <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.stateOurBlog.responsive} >
            <div className="col-lg-4 first-blog item">
              <div className="sm-blog">
                <img src={fob1} alt="" />
                <p className="head">At vero eos et accusam</p>
                <div className="big-content">
                  <span className="content first-cont"><i className="fas fa-user" /> bigecommerce</span>
                  <span className="content"><i className="far fa-clock" /> 5th Feb 2018</span>
                </div>
                <p className="foot"><i className="fas fa-caret-right" /> Read More</p>
              </div>
            </div>
            <div className="col-lg-4 first-blog item">
              <div className="sm-blog">
                <img src={fob2} alt="" />
                <p className="head">At vero eos et accusam</p>
                <div className="big-content">
                  <span className="content first-cont"><i className="fas fa-user" /> bigecommerce</span>
                  <span className="content"><i className="far fa-clock" /> 5th Feb 2018</span>
                </div>
                <p className="foot"><i className="fas fa-caret-right" /> Read More</p>
              </div>
            </div>
            <div className="col-lg-4 first-blog item">
              <div className="sm-blog">
                <img src={fob3} alt="" />
                <p className="head">At vero eos et accusam</p>
                <div className="big-content">
                  <span className="content first-cont"><i className="fas fa-user" /> bigecommerce</span>
                  <span className="content"><i className="far fa-clock" /> 5th Feb 2018</span>
                </div>
                <p className="foot"><i className="fas fa-caret-right" /> Read More</p>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default FromOurBlog