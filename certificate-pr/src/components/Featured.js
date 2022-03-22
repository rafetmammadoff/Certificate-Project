import React from 'react'
import cate1 from '../assets/img/cate1.jpg'
import cate2 from '../assets/img/cate2.jpg'
import cate3 from '../assets/img/cate3.jpg'
import cate4 from '../assets/img/cate4.jpg'
import cate5 from '../assets/img/cate5.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Featured = () => {

    React.state= {
        responsive:{
            0:{
                items:1
            },
            450 :{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:4
            },
            1146:{
                items:5
            }
        },
      }
  return (
    <section id="featured">
        <div className="container custom-container">
          <div className="head">
            <h5>FEATURED CATEGORIES</h5>
            <div className="line">
              <div className="sm-line">
              </div>
            </div>
          </div>
          <div className="row owl-carousel owl-theme slider-owl">
          <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={true}
    autoplayTimeout={2000}
    items={4}
    responsive={React.state.responsive} >
            <div className="col-12 item">
              <div className="cart">
                <div className="img-area">
                  <img src={cate1} alt="" />
                </div>
                <div className="about">
                  WATCHES
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="cart">
                <div className="img-area">
                  <img src={cate2} alt="" />
                </div>
                <div className="about">
                  BAGS
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="cart">
                <div className="img-area">
                  <img src={cate3} alt="" />
                </div>
                <div className="about">
                  ACCESSORIES
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="cart">
                <div className="img-area">
                  <img src={cate4} alt="" />
                </div>
                <div className="about">
                  SHOES
                </div>
              </div>
            </div>
            <div className="col-12 item">
              <div className="cart">
                <div className="img-area">
                  <img src={cate5} alt="" />
                </div>
                <div className="about">
                  FASHION
                </div>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default Featured