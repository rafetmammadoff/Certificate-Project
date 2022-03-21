import React from 'react'

const SlideComp = () => {
  function myFunction(){
    var element=document.getElementById('slide-component');
   
    element.classList.toggle('style-1')
}
  return (

    
    <section id="slide-component"> 
        <div className="container">
          <button onClick={myFunction} type="button"><i className="fas fa-times" /></button>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fab fa-gitlab" /> <span>FASHION</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-utensils" />
                <span>Kitchen</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-desktop" />
                <span>Computer</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-shopping-bag" />
                <span>Bags</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-clock" />
                <span>Watches</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-mobile-alt" />
                <span>Smartphone</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-user-md" />
                <span>Health&amp;Beauty</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="far fa-futbol" />
                <span>Sport Clothing</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-heartbeat" />
                <span>Maternity</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item">
            <div className="component-contain">
              <div className="text-area">
                <i className="fas fa-plus-circle" />
                <span>More Categories</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="component-item bor-none">
            <div className="component-contain">
              <div className="text-area">
                <i className="fab fa-gitlab" /> <span>Jewelery</span>
              </div>
              <i className="fas fa-chevron-up" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SlideComp