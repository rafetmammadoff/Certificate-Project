import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/styles/style.css'
import OpenPage from './components/OpenPage';
import Header1 from './components/Header1';
import SlideComp from './components/SlideComp';
import HeaderBottom from './components/HeaderBottom';
import Component from './components/Component';
import HeaderBottom1 from './components/HeaderBottom1';
import SlideComp2 from './components/SlideComp2';
import Featured from './components/Featured';
import TodayDeals from './components/TodayDeals';
import Somewhere from './components/Somewhere';
import Fashion from './components/Fashion';
import Electronic from './components/Electronic';
import Sports from './components/Sports';
import Portland from './components/Portland';
import './main'
import NewProduction from './components/NewProduction';
import FromOurBlog from './components/FromOurBlog';
import Partners from './components/Partners';
import Contact from './components/Contact';
import FooterTop from './components/FooterTop';
import FooterNav from './components/FooterNav';
import SignUp from './components/SignUp';
import FooterBottom from './components/FooterBottom';



const App = () => {
  return(
    <div className='general-contain'>
      <OpenPage />
      <Header1 />
      <SlideComp />
      <Nav />
      <HeaderBottom />
      <HeaderBottom1 />
      <Component />
      <SlideComp2 />
      <Featured />
      <TodayDeals />
      <Somewhere />
      <Fashion />
      <Electronic />
      <Sports />
      <Portland />
      <NewProduction />
      <FromOurBlog />
      <Partners />
      <Contact />
      <FooterTop />
      <FooterNav />
      <SignUp />
      <FooterBottom />
    </div>
  )
}


ReactDOM.render(<App />,document.querySelector("#root"));

