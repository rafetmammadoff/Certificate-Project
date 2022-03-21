import React from 'react'
import Logo from '../assets/img/logo.png'
const Header1 = () => {

    function myFunction(){
        var element=document.getElementById('slide-component');
       
        element.classList.toggle('style-1')
    }
  return (
    <section id="header-1">
        <div className="custom-container container">
          <div className="row medium-screen">
            <div className="col-2">
              <div onClick={myFunction} id="sm-btn">
                <i className="fas fa-align-left" />
              </div>
            </div>
            <div className="col-3">
              <img src={Logo} alt="" />
            </div>
            <div className="col-7">
              <div className="medium-text-area">
                <form>
                  <input className="first" type="text" />
                  <button className="form-button" type="button">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Header1