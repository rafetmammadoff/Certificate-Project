import React from 'react'

const Component = () => {
  return (
    <div><section id="components">
    <div className="container custom-container">
      <div className="row">
        <div className="col-lg-3 none" id="none-opacity">
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fab fa-gitlab" />
                <span>Fashion</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-utensils" />
                <span>Kitchen</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-desktop" />
                <span>Computer</span>
              </div>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-shopping-bag" />
                <span>Bags</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-clock" />
                <span>Watches</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-mobile-alt" />
                <span>Smartphone</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-user-md" />
                <span>Health&amp;Beauty</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="far fa-futbol" />
                <span>Sport Clothing</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-heartbeat" />
                <span>Maternity</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="component-contain">
              <div className="text">
                <i className="fas fa-plus-circle" />
                <span>More Categories</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="slide owl-carousel owl-theme">
            <div className="img-area item">
              <img src="./img/slide1__57732.jpg" alt="" />
            </div>
            <div className="img-area item">
              <img src="./img/slide2.jpg" alt="" />
            </div>
            <div className="img-area item">
              <img src="./img/slide3__55489.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 reclam-area col-12">
          <div className="reclam">
            <img src="./img/1.jpg" alt="" />
          </div>
          <div className="reclam">
            <img src="./img/2.jpg" alt="" />
          </div>
          <div className="reclam">
            <img src="./img/3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Component