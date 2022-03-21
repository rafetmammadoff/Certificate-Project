import React from 'react'

const SlideComp2 = () => {

    function myFunction2(){
        var element2 =document.getElementById('slide-component-2');
        element2.classList.toggle('style-3')
    }
  return (
    <section id="slide-component-2">
    <div className="container">
      <button onClick={myFunction2} type="button"><i className="fas fa-times" /></button>
      <div className="component-item">
        <div className="component-contain">
          <div className="text-area">
            <span>HOME</span>
          </div>
        </div>
      </div>
      <div className="component-item">
        <div className="component-contain">
          <div className="text-area">
            <span>LAYOUT</span>
          </div>
          <i className="fas fa-chevron-up" />
        </div>
      </div>
      <div className="component-item">
        <div className="component-contain">
          <div className="text-area">
            <span>FEATURES</span>
          </div>
        </div>
      </div>
      <div className="component-item">
        <div className="component-contain">
          <div className="text-area">
            <span>BLOG</span>
          </div>
        </div>
      </div>
      <div className="component-item">
        <div className="component-contain">
          <div className="text-area">
            <span>BONUS PAGE</span>
          </div>
          <i className="fas fa-chevron-up" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default SlideComp2