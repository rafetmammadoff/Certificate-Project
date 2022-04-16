import React from 'react'
import td1 from '../assets/img/td1.jpg'
import td2 from '../assets/img/td2.jpg'
import td3 from '../assets/img/td3.jpg'
import td5 from '../assets/img/td5.png'
import ss1 from '../assets/img/ss1.jpg'
import ss2 from '../assets/img/ss2.jpg'
import ss3 from '../assets/img/ss3.jpg'
import ss4 from '../assets/img/ss4.jpg'
import ss6 from '../assets/img/ss6.jpg'
import ss7 from '../assets/img/ss7.jpg'
import ss8 from '../assets/img/ss8.jpg'
import bs1 from '../assets/img/bs1.jpg'
import bs2 from '../assets/img/bs2.jpg'
import bs3 from '../assets/img/bs3.jpg'
import bs4 from '../assets/img/bs4.jpg'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const TodayDeals = () => {
    React.state= {
        responsive:{
            0:{
                items:1
            },
            450 :{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:1
            },
            1146:{
                items:1
            }
        },
      }
      React.stateTwo= {
        responsive:{
            0:{
                items:2
            },
            400:{
                items:2
    
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        },
      }
      React.stateThree= {
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
    <section id="today-deals">
        <div className="container custom-container">
          <div className="row big-row white-back">
            <div className="col-lg-9 first-slide-area ">
              <div className="marca">TODAY DEALS</div>
              <div className="my-slider owl-carousel owl-theme">
              <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.state.responsive} >
                <div className="row small-row item">
                  <div className="col-lg-6 left-img ">
                    <div className="flag">
                      <img src={td5} alt="" />
                    </div>
                    <div className="discount">-17%</div>
                    <img src={td1} alt="" />
                  </div>
                  <div className="col-lg-6 right-text">
                    <div className="big-text">
                      <p className="tittle">Crochet Lace Dress</p>
                      <span>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <p className="content">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis.
                        Pellentesque diam dolor, elementum et lobortis at,...
                      </p>
                      <p className="price">$360.00</p>
                    </div>
                  </div>
                </div>
                <div className="row small-row item">
                  <div className="col-lg-6 left-img ">
                    <div className="discount">-30%</div>
                    <img src={td2} alt="" />
                  </div>
                  <div className="col-lg-6 right-text">
                    <div className="big-text">
                      <p className="tittle">Crochet Lace Dress</p>
                      <span>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <p className="content">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis.
                        Pellentesque diam dolor, elementum et lobortis at,...
                      </p>
                      <p className="price">$400.00</p>
                    </div>
                  </div>
                </div>
                <div className="row small-row item">
                  <div className="col-lg-6 left-img ">
                    <div className="discount">-25%</div>
                    <img src={td3} alt="" />
                  </div>
                  <div className="col-lg-6 right-text">
                    <div className="big-text">
                      <p className="tittle">Crochet Lace Dress</p>
                      <span>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <p className="content">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis.
                        Pellentesque diam dolor, elementum et lobortis at,...
                      </p>
                      <p className="price">$450.00</p>
                    </div>
                  </div>
                  <img style={{width: '20px'}} src={td5} alt="" />
                </div>
            </OwlCarousel>
                
              </div>
              <div className="second-slider owl-carousel owl-theme today-slide">
              <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.stateTwo.responsive} >
                <div className="blog item">
                  <div className="discount1">-17%</div>
                  <img src={ss1} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-21%</div>
                  <img src={ss2} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-8%</div>
                  <img src={ss3} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-30%</div>
                  <img src={ss4} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-25%</div>
                  <img src={ss8} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-12%</div>
                  <img src={ss7} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-43%</div>
                  <img src={ss4} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-50%</div>
                  <img src={ss2} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-32%</div>
                  <img src={ss6} alt="" />
                </div>
                <div className="blog item">
                  <div className="discount1">-24%</div>
                  <img src={ss3} alt="" />
                </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-3 second-slide-area">
              <span className="tittle">BEST SELLER</span>
              <div className="third-slider owl-carousel owl-theme">
              <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    items={4}
    responsive={React.stateThree.responsive} >
                <div className="third-slide-item item">
                  <div className="component">
                    <div className="img-zone">
                      <img src={bs1} alt="" />
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
                      <img src={bs2} alt="" />
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
                      <img src={bs3} alt="" />
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
                      <img src={bs4} alt="" />
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
                <div className="third-slide-item item">
                  <div className="component">
                    <div className="img-zone">
                      <img src={bs4} alt="" />
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
                      <img src={bs3} alt="" />
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
                      <img src={bs2} alt="" />
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
                      <img src={bs1} alt="" />
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
      </section>
  )
}

export default TodayDeals