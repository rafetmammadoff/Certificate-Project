import React from 'react'

const HeaderBottom1 = () => {
    function myFunction2(){
        var element2 =document.getElementById('slide-component-2');
        element2.classList.toggle('style-3')
    }
    
  return (
    <section id="header-bottom-1">
    <div className="container custom-container">
      <div className="row">
        <div className="col-3">
          <i className="fas fa-home" />
          <p>Home</p>
        </div>
        <div className="col-3">
          <i className="fas fa-shopping-cart" />
          <p>Cart</p>
        </div>
        <div className="col-3">
          <i className="fas fa-user" />
          <p>Sign In</p>
        </div>
        <div onClick={myFunction2} className="col-3" id="slider-btn-2">
          <i className="fas fa-ellipsis-h" />
          <p>More</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeaderBottom1