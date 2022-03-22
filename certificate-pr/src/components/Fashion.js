import React from 'react'
import Fashion1 from '../assets/img/6.jpg'
import f1 from '../assets/img/f1.jpg'
import f7 from '../assets/img/f7.jpg'
import f12 from '../assets/img/f12.jpg'
import f13 from '../assets/img/f13.jpg'
import f21 from '../assets/img/f21.jpg'
import f22 from '../assets/img/f22.jpg'
import f23 from '../assets/img/f23.jpg'
import f31 from '../assets/img/f31.jpg'
import f32 from '../assets/img/f32.jpg'
import f41 from '../assets/img/f41.jpg'
import f42 from '../assets/img/f42.jpg'
import f51 from '../assets/img/f51.jpg'
import f52 from '../assets/img/f52.jpg'
import f61 from '../assets/img/f61.jpg'
import f62 from '../assets/img/f62.jpg'
import f81 from '../assets/img/f81.jpg'
import f82 from '../assets/img/f82.jpg'
import f83 from '../assets/img/f83.jpg'
import f91 from '../assets/img/f91.jpg'
import f92 from '../assets/img/f92.jpg'
import f101 from '../assets/img/f101.jpg'
import f102 from '../assets/img/f102.jpg'
import f103 from '../assets/img/f103.jpg'

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
const Fashion = () => {
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
                <div className="one-component item">
                  <div className="card">
                    <div className="my-layer">
                      <div className="box">
                        <i className="fas fa-search" />
                      </div>
                      <div className="box-js">
                        <div className="box-1">
                          <img src={f1} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f12} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f13} alt="" />
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="box-b1">
                          Add to card
                        </div>
                        <div className="box-b2">
                          <i className="fas fa-heart" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f1} alt="" />
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
                          <img src={f21} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f22} alt="" />
                        </div>
                        <div className="box-1">
                          <img src={f23} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src={f21} alt="" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Fashion