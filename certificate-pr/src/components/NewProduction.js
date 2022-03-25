import React from 'react'
import np1 from '../assets/img/np-1.jpg'
import np2 from '../assets/img/np2.jpg'
import np3 from '../assets/img/np3.jpg'
import np4 from '../assets/img/np4.jpg'
import np5 from '../assets/img/np5.jpg'
import np6 from '../assets/img/np6.jpg'
import np7 from '../assets/img/np7.jpg'
import np8 from '../assets/img/np8.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const NewProduction = () => {
    React.state= {
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
      }
  return (
    <section id="new-production">
        <div className="container custom-container">
          <div className="row big-row">
            <div className="col-lg-6 col-12 left-blog">
              <div className="tittle">
                NEWS PRODUCTS
              </div>
              <div className="row small-row">
                <div className="col-12 col-sm-6  sm-left-img">
                  <img src={np1} alt="" />
                </div>
                <div className="col-12 col-sm-6 sm-right-slide">
                  <div className="slide-contain owl-carousel owl-theme">
                  <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.state.responsive} >
                    <div className="slide-item item">
                      <div className="component">
                        <div className="img-zone">
                        <img src={np2} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np3} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np4} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item item">
                      <div className="component">
                        <div className="img-zone">
                          <img src={np5} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np6} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np7} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                    </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 left-blog">
              <div className="tittle">
                FEATURED PRODUCTS
              </div>
              <div className="row small-row">
                <div className="col-12 col-sm-6  sm-left-img">
                  <img src={np8} alt="" />
                </div>
                <div className="col-12 col-sm-6 sm-right-slide">
                  <div className="slide-contain owl-carousel owl-theme">
                  <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.state.responsive} >
                    <div className="slide-item item">
                      <div className="component">
                        <div className="img-zone">
                          <img src={np4} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np3} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np4} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item item">
                      <div className="component">
                        <div className="img-zone">
                          <img src={np5} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np6} alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                      <div className="component">
                        <div className="img-zone">
                          <img src={np7}alt="" />
                        </div>
                        <div className="text-zone">
                          <p className="about">EcoSmart Fleece H..</p>
                          <span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </span>
                          <p className="price">$350.00</p>
                        </div>
                      </div>
                    </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewProduction