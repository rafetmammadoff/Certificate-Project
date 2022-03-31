import React from 'react'
import Fashion1 from '../assets/img/6.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from './data'
import Card from './Card'
import twoDimensionArray from './data'
import OneComponent from './OneComponent'







const Fashion = () => {

  React.stateFashion= {
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
    <section id="fashion" className="fashion-and-electronics responsive">
        <div className="container custom-container owl-comp">
          <div className="row">
            <div className="col-12 col-lg-2 fashion-img col-md-2">
              <h6 className="tittle">
                FASHION
              </h6>
              <img src={Fashion1} alt="" />
            </div>
            <div className="col-12 col-lg-10 fashion-items col-md-10">
              <div className="row">
                <div className="col-lg-2 col-md-2 ">ModernBags</div>
                <div className="col-lg-2 col-md-2 ">Jeans</div>
                <div className="col-lg-2 col-md-2 ">Tshirt</div>
                <div className="col-lg-2 col-md-2 ">Shoes</div>
                <select>
                  <option value>ModernBags</option>
                  <option value>Jeans</option>
                  <option value>Tshirt</option>
                  <option value>Shoes</option>
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
    responsive={React.stateFashion.responsive} >
                  {twoDimensionArray.map((oneDimensionArray,index)=>{
                       return ( 
                       <OneComponent 
                       oneDimensionArray={oneDimensionArray}                                     
                          key={index}
                        />
                        )
                    }
                  )}
                
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
                          <img src={f31} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f32} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f31} alt="" />
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
                          <img src={f41} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f42} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f41} alt="" />
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
                          <img src={f51} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f52} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f51} alt="" />
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
                          <img src={f61} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f62} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f61} alt="" />
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
                          <img src={f7} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f7} alt="" />
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
                          <img src={f81} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f82} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f83} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f81} alt="" />
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
                <div className="one-component item"> */}
                  {/* <div className="card">
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
                          <img src={f91} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f92} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f91} alt="" />
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
                          <img src={f101} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f102} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f103} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f101} alt="" />
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


document.addEventListener("DOMContentLoaded", function(e) {
  var boxarr = document.getElementsByClassName('box-1');

 


  for(var i =0; i < boxarr.length; i++){
    
    let box = boxarr[i]
    box.addEventListener("mouseover", function() {
        var parent = box.closest(".card");
        var imgarea = parent.querySelector('.img-area')
        var img = imgarea.querySelector('img')    
        if(img != null){
            img.remove();
        }
        var boxunicindekiimage = box.querySelector('img');
        var clone = boxunicindekiimage.cloneNode(true);
        imgarea.appendChild(clone)
        
        
    });

  }
});

export default Fashion