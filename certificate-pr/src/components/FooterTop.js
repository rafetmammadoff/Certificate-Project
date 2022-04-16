import React from 'react'
import cu1 from '../assets/img/cu1.png'
import cu2 from '../assets/img/cu2.png'
import cu3 from '../assets/img/cu3.png'
const FooterTop = () => {
  return (
    <section className='dark-class' id="footer-top">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-2 first-component">
              <div className="tittle white-text">
                OUR SHOPS
              </div>
              <p className='white-text'><i className="fas fa-chevron-right" /> Product Support</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> PC Setup &amp; Support</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Services</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Term &amp; Conditions</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Privacy Policy</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle white-text">
                INFORMATION
              </div>
              <p className='white-text'><i className="fas fa-chevron-right" /> Layout</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Features</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Blog</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Bonus Page</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Site</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle white-text">
                BRANDS
              </div>
              <p className='white-text'><i className="fas fa-chevron-right" /> Layout</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Features</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Blog</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Bonus Page</p>
            </div>
            <div className="col-lg-2 first-component">
              <div className="tittle white-text">
                ALL CATEGORIES
              </div>
              <p className='white-text'><i className="fas fa-chevron-right" /> Fashion</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Kitchen</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Computer</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Bag</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Watch</p>
              <p className='white-text'><i className="fas fa-chevron-right" /> Site</p>
            </div>
            <div className="col-lg-4 second-component">
              <div className="tittle white-text">
                CONTACT US
              </div>
              <div className="column">
                <span className="icon white-text">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="about white-text">
                  Addresses : 685 Market Street San Francisco, CA 94105
                </span>
              </div>
              <div className="column">
                <span className="icon white-text">
                  <i className="fas fa-phone" />
                </span>
                <span className="about white-text">
                  Call us now : Call us at (+84) 4567 421 978
                </span>
              </div>
              <div className="column">
                <span className="icon white-text">
                  <i className="fas fa-envelope" />
                </span>
                <span className="about white-text">
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