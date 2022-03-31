import React from 'react'
import { Link } from 'react-router-dom';
import Bascet from './Bascet';
const HeaderBottom = () => {


    function myFunction1(){
        var element1 =document.getElementById('none-opacity');
        element1.classList.toggle('style-2')
    }


  return (
    <section id="header-bottom">
        <div className="container custom-container">
          <div className="row">
            <div onClick={myFunction1} className="col-lg-3" id="category-btn">
              <div className="text">
                <i className="fas fa-align-left" />
                <span>ALL CATEGORIES</span>
              </div>
              <div className="icon">
                <i className="fas fa-arrow-circle-down" />
              </div>
            </div>
            <div className="col-lg-7">
              <form>
                <input type="text" placeholder="Search the store" />
                <button type="button"><i className="fas fa-search" /></button>
              </form>
            </div>
            <div className="col-lg-2">
              <div className="circle"><i className="far fa-heart" /></div>
              <div className="circle"><a href='/b'><i className="fas fa-shopping-cart" /></a></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeaderBottom