import React from 'react'
import cu1 from '../assets/img/cu1.png'
import cu2 from '../assets/img/cu2.png'
import cu3 from '../assets/img/cu3.png'
const FooterTop = () => {
  return (
    <section id="footer-top">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-2 first-component">
              <div className="tittle">
                OUR SHOPS
              </div>
              <p><i className="fas fa-chevron-right" /> Product Support</p>
              <p><i className="fas fa-chevron-right" /> PC Setup &amp; Support</p>
              <p><i className="fas fa-chevron-right" /> Services</p>
              <p><i className="fas fa-chevron-right" /> Term &amp; Conditions</p>
              <p><i className="fas fa-chevron-right" /> Privacy Policy</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle">
                INFORMATION
              </div>
              <p><i className="fas fa-chevron-right" /> Layout</p>
              <p><i className="fas fa-chevron-right" /> Features</p>
              <p><i className="fas fa-chevron-right" /> Blog</p>
              <p><i className="fas fa-chevron-right" /> Bonus Page</p>
              <p><i className="fas fa-chevron-right" /> Site</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle">
                BRANDS
              </div>
              <p><i className="fas fa-chevron-right" /> Layout</p>
              <p><i className="fas fa-chevron-right" /> Features</p>
              <p><i className="fas fa-chevron-right" /> Blog</p>
              <p><i className="fas fa-chevron-right" /> Bonus Page</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle">
                ALL CATEGORIES
              </div>
              <p><i className="fas fa-chevron-right" /> Fashion</p>
              <p><i className="fas fa-chevron-right" /> Kitchen</p>
              <p><i className="fas fa-chevron-right" /> Computer</p>
              <p><i className="fas fa-chevron-right" /> Bag</p>
              <p><i className="fas fa-chevron-right" /> Watch</p>
              <p><i className="fas fa-chevron-right" /> Site</p>
            </div>
            <div className="col-lg-4 second-component">
              <div className="tittle">
                CONTACT US
              </div>
              <div className="column">
                <span className="icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="about">
                  Addresses : 685 Market Street San Francisco, CA 94105
                </span>
              </div>
              <div className="column">
                <span className="icon">
                  <i className="fas fa-phone" />
                </span>
                <span className="about">
                  Call us now : Call us at (+84) 4567 421 978
                </span>
              </div>
              <div className="column">
                <span className="icon">
                  <i className="fas fa-envelope" />
                </span>
                <span className="about">
                  Email : contact@revo.com
                </span>
              </div>
              <div className="sm-foot">
                <img src={cu1} alt="" />
                <img src={cu2} alt="" />
                <img src={cu3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FooterTop