import React from 'react'
import sport from '../assets/img/8.jpg'
import q1 from '../assets/img/q1.jpg'
import q2 from '../assets/img/q2.jpg'
import q3 from '../assets/img/q3.jpg'
import q4 from '../assets/img/q4.jpg'
import q5 from '../assets/img/q5.jpg'
import q6 from '../assets/img/q6.jpg'
import q7 from '../assets/img/q7.jpg'
import q8 from '../assets/img/q8.jpg'
import q9 from '../assets/img/q9.jpg'
import q11 from '../assets/img/q11.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Sports = () => {
  React.stateSports= {
    responsive:{
      0:{
        items:1
    },
    400:{
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
    <section id="sports" className="fashion-and-electronics responsive">
        <div className="container custom-container owl-comp">
          <div className="row">
            <div className="col-12 col-lg-2 fashion-img col-md-2">
              <h6 className="tittle">
                SPORTS
              </h6>
              <img src={sport} alt="" />
            </div>
            <div className="col-12 col-lg-10 fashion-items col-md-10">
              <div className="row">
                <div className="col-lg-2 col-md-2 ">SportKet</div>
                <div className="col-lg-2 col-md-2 ">SportBag</div>
                <div className="col-lg-2 col-md-2 ">SportTshirt</div>
                <div className="col-lg-2 col-md-2 ">SportShort</div>
                <select>
                  <option value>SportKet</option>
                  <option value>SportBag</option>
                  <option value>SportTshirt</option>
                  <option value>SportShort</option>
                </select>
              </div>
              <div className="components owl-carousel owl-theme fashion-slide">
              <OwlCarousel className={'owl-theme'}
    loop={true}
    margin={10}
    nav={false}
    dots={false}
    autoplay={false}
    autoplayTimeout={2000}
    
    responsive={React.stateSports.responsive} >
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q1} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q2} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q3} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q4} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q5} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q6} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q7} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q8} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q9} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="my-layer">
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      
                    </div>
                    <div className="img-area">
                      <img src={q11} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="about">
                        <p className="marca">Calvin Clein </p>
                        <span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </span>
                        <p className="price">
                          $300.00
                        </p>
                      </div>
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

export default Sports