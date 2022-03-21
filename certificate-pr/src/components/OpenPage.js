import React from 'react'
import fl1 from '../assets/img/fl1.jpg'


function login12(){
  var loginsec=document.getElementById('fixed-login')
    loginsec.classList.toggle('removes')
}

const OpenPage = () => {
  return (
    <section id="fixed-login">
    <div className="container custom-container">
      <div className="login-area row">
        <div className="col-lg-9 log-zone">
          <div className="row sm-row">
            <div onClick={login12} id="remove"><i className="fas fa-times" /></div>
            <div className="left-img col-sm-6 col-lg-6">
              <img src={fl1} alt="" />
            </div>
            <div className="right-text col-12 col-sm-6 col-lg-6">
              <div className="contain">
                <div className="tittle">
                  NEWSLETTER
                </div>
                <div className="content">
                  Subscribe to the Furnicom mailing list to receive updates on new arrivals,
                  special offers and other discount information.
                </div>
                <div className="form-area">
                  <form>
                    <input type="email" required />
                    <button type="submit">SUBSCRIBE</button>
                  </form>
                </div>
                <div className="foot">
                  <input type="checkbox" />
                  Don't show this popup again
                </div>
                <div className="links">
                  <i className="fab fa-facebook-f" />
                  <i className="fab fa-twitter" />
                  <i className="fab fa-instagram" />
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

export default OpenPage