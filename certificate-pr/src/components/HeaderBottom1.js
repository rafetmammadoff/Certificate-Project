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
          <i className="fas fa-home white-text mb-1" />
          <p className='white-text'>Home</p>
        </div>
        <div className="col-3">
          <div className="circle mb-1"><a href='/bascet'><i className="fas fa-shopping-cart" /></a></div>
          <p className='white-text'>Cards</p>
        </div>
        <div className="col-3">
          <i className="fas fa-user white-text mb-1" />
          <p className='white-text'>Sign In</p>
        </div>
        <div onClick={myFunction2} className="col-3" id="slider-btn-2">
          <i className="fas fa-ellipsis-h white-text mb-1" />
          <p className='white-text'>More</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeaderBottom1