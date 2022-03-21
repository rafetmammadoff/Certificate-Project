import React from 'react'
import Logo from '../assets/img/logo.png'
const Nav = () => {
  return (
   
        <section id="header">
            <div className="container custom-container">
            <div className="row large-screen">
                <div className="col-lg-2 logos col-md-3">
                <img src={Logo} alt="" />
                </div>
                <div className="col-lg-6 menu col-md-6">
                <div className="large-nav">
                    <ul>
                    <li><a href="#">HOME</a></li>
                    <li className="lay-out"><a href="#">LAYOUT <i className="fas fa-angle-down" /></a>
                        <section id="layout-over">
                        <div className="layout-blog">
                            <img src="./img/layout-1.png" alt="" />
                            <p>Home Layout 1</p>
                        </div>
                        <div className="layout-blog">
                            <img src="./img/layout-2.png" alt="" />
                            <p>Home Layout 2</p>
                        </div>
                        <div className="layout-blog">
                            <img src="./img/layout-3.png" alt="" />
                            <p>Home Layout 3</p>
                        </div>
                        <div className="layout-blog">
                            <img src="./img/layout-4.png" alt="" />
                            <p>Home Layout 4</p>
                        </div>
                        </section>
                    </li>
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li className="bon-us"><a href="#">BONUS PAGE <i className="fas fa-angle-down" /></a>
                        <div className="bonus-over">
                        <p className="up">Contact Us</p>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Faqs</p>
                        <p>Photo Gallery</p>
                        <p>Coming Soon</p>
                        <p>Support 24/7 Page</p>
                        <p className="down">Page 404</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-3 contact">
                <div className="tel-mail">
                    <div className="icon">
                    <i className="fas fa-headset" />
                    </div>
                    <div className="tel-text">
                    <strong>Call us now :</strong><span className="tel"> (+84) 4567 421 978</span> <br />
                    <p className="mail">Email : contact@revo.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    
  )
}

export default Nav