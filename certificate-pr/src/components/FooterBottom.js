import React from 'react'

const FooterBottom = () => {
  return (
    <section id="footer-bottom">
        <div className="container custom-container">
          <div className="tittle">
            © 2021 Ecommerce SB Revo Powered by <span>BigCommerce.</span> Designed by <span>Revotheme.com</span>
          </div>
          <div className="cards">
            <div className="card">
              <i className="fab fa-cc-amex" />
              <i className="fab fa-cc-discover" />
              <i className="fab fa-cc-mastercard" />
              <i className="fab fa-cc-paypal" />
              <i className="fab fa-cc-visa" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default FooterBottom