import React from 'react'
import sport from '../assets/img/8.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import exportedData from './data'
import OneComponent from './OneComponent'
document.addEventListener("DOMContentLoaded", function(e) {
  var boxarr = document.getElementsByClassName('box-1');

 


  for(var i =0; i < boxarr.length; i++){
    
    let box = boxarr[i]
    
    box.addEventListener("mouseover", function() {
      var boxunicindekiimage = box.querySelector('img');
        if (boxunicindekiimage.getAttribute('src') != null) {
          
            var parent = box.closest(".card");
          var imgarea = parent.querySelector('.img-area')
          var img = imgarea.querySelector('img')    
          if(img != null){
              img.remove();
          }
          
          var clone = boxunicindekiimage.cloneNode(true);
          imgarea.appendChild(clone)
        
        }
        
        
    });

  }
});

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
              <div className="row dark-class">
                <div className="col-lg-2 col-md-2 white-text">SportKet</div>
                <div className="col-lg-2 col-md-2 white-text">SportBag</div>
                <div className="col-lg-2 col-md-2 white-text">SportTshirt</div>
                <div className="col-lg-2 col-md-2 white-text">SportShort</div>
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

                {exportedData.sports.map((oneDimensionArray,index)=>{
                  return(
                    <OneComponent 
                    oneDimensionArray={oneDimensionArray}
                    key={index}
                  />
                  )
                })}



                {/* <div className="one-component item">
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
                </div> */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Sports