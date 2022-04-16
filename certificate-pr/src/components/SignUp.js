import React from 'react'

const SignUp = () => {
  return (
    <section className='dark-class' id="sign-up">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-3 about">
              <span className='white-text'>SIGN UP FOR NEWSLETTER</span>
            </div>
            <div className="col-lg-6 inp">
              <form>
                <input type="email" required />
                <button type="submit">SUBSCRIBE</button>
              </form>
            </div>
            <div className="col-lg-3 web">
              <span className='white-text'>FOLLOW US</span>
              <div className="web-icons">
                <div className="box">
                  <i className="fab fa-facebook-f" />
                </div>
                <div className="box">
                  <i className="fab fa-twitter" />
                </div>
                <div className="box">
                  <i className="fab fa-instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SignUp