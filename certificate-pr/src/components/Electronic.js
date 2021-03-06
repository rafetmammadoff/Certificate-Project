import React from 'react'
import exportedData from './data'
import OneComponent from './OneComponent'

import e2 from '../assets/img/7.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



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

const Electronic = () => {

  React.stateElectronic= {
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
    <section id="electronic" className="fashion-and-electronics">
        <div className="container custom-container owl-comp">
          <div className="row big-row">
            <div className="col-12 col-lg-10 fashion-items col-md-10">
              <div className="row dark-class">
                <div className="col-lg-2 col-md-2 white-text">Iphone</div>
                <div className="col-lg-2 col-md-2 white-text">Mobile</div>
                <div className="col-lg-2 col-md-2 white-text">Television</div>
                <div className="col-lg-2 col-md-2 white-text">Cameras</div>
                <select>
                  <option value>Iphone</option>
                  <option value>Mobile</option>
                  <option value>Television</option>
                  <option value>Cameras</option>
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
    items={4}
    responsive={React.stateElectronic.responsive} >

                {exportedData.electronics.map((oneDimensionArray,index)=>{
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e11} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e12} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e13} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e11} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e21} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e22} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e23} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e21} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e31} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e32} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e33} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e31} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e41} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e42} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e43} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e41} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e51} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e52} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e53} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e51} alt="" />
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
                      <img src={e6} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e71} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e72} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e73} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e71} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e81} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e82} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e83} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e81} alt="" />
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
                      <div className="box-js">
                        <div className="box-1">
                          <img src={e91} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e92} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={e93} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={e91} alt="" />
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
                      <img src={e10} alt="" />
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
            <div className="col-12 col-lg-2 fashion-img col-md-2">
              <h6 className="tittle">
                ELECTRONICS
              </h6>
              <img src={e2} alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Electronic