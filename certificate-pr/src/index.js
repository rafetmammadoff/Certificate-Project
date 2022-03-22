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
    </div>
  )
}


ReactDOM.render(<App />,document.querySelector("#root"));

