import React from 'react'
import e11 from '../assets/img/e11.jpg'
import e from '../assets/img/e.jpg'
import e6 from '../assets/img/e6.jpg'
import e10 from '../assets/img/e10.jpg'
import e12 from '../assets/img/e12.jpg'
import e13 from '../assets/img/e13.jpg'
import e21 from '../assets/img/e21.jpg'
import e22 from '../assets/img/e22.jpg'
import e23 from '../assets/img/e23.jpg'
import e31 from '../assets/img/e31.jpg'
import e32 from '../assets/img/e32.jpg'
import e33 from '../assets/img/e33.jpg'
import e41 from '../assets/img/e41.jpg'
import e42 from '../assets/img/e42.jpg'
import e43 from '../assets/img/e43.jpg'
import e51 from '../assets/img/e51.jpg'
import e52 from '../assets/img/e52.jpg'
import e53 from '../assets/img/e53.jpg'
import e71 from '../assets/img/e71.jpg'
import e72 from '../assets/img/e72.jpg'
import e73 from '../assets/img/e73.jpg'
import e81 from '../assets/img/e81.jpg'
import e82 from '../assets/img/e82.jpg'
import e83 from '../assets/img/e83.jpg'
import e91 from '../assets/img/e91.jpg'
import e92 from '../assets/img/e92.jpg'
import e93 from '../assets/img/e93.jpg'
import ee from '../assets/img/ee.jpg'
import e2 from '../assets/img/7.jpg'

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

const Electronic = () => {
  return (
    <section id="electronic" className="fashion-and-electronics">
        <div className="container custom-container owl-comp">
          <div className="row big-row">
            <div className="col-12 col-lg-10 fashion-items col-md-10">
              <div className="row">
                <div className="col-lg-2 col-md-2 ">Iphone</div>
                <div className="col-lg-2 col-md-2 ">Mobile</div>
                <div className="col-lg-2 col-md-2 ">Television</div>
                <div className="col-lg-2 col-md-2 ">Cameras</div>
                <select>
                  <option value>Iphone</option>
                  <option value>Mobile</option>
                  <option value>Television</option>
                  <option value>Cameras</option>
                </select>
              </div>
              <div className="components owl-carousel owl-theme fashion-slide">
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
                </div>
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