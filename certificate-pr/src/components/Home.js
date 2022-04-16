import React from 'react'
import OpenPage from './OpenPage';
import Header1 from './Header1';
import SlideComp from './SlideComp';
import HeaderBottom from './HeaderBottom';
import Component from './Component';
import HeaderBottom1 from './HeaderBottom1';
import SlideComp2 from './SlideComp2';
import Featured from './Featured';
import TodayDeals from './TodayDeals';
import Somewhere from './Somewhere';
import Fashion from './Fashion';
import Electronic from './Electronic';
import Sports from './Sports';
import Portland from './Portland';
import NewProduction from './NewProduction';
import FromOurBlog from './FromOurBlog';
import Partners from './Partners';
import Contact from './Contact';
import FooterTop from './FooterTop';
import SignUp from './SignUp';
import FooterBottom from './FooterBottom';
import Nav from './Nav';

import { CartProvider } from 'react-use-cart';
import Bascet from './Bascet';
const Home = () => {
  return (
    <div className='general-contain dark-class'>
      
      <CartProvider>
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
      
      <SignUp />
      <FooterBottom />
      </CartProvider>
      
    </div>
  )
}

export default Home