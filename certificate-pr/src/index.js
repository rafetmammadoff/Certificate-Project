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




const App = () => {
  return(
    <div className='general-contain'>
      <OpenPage />
      <Header1 />
      <SlideComp />
      <Nav />
      <HeaderBottom />
      <Component />
      <HeaderBottom1 />
    </div>
  )
}


ReactDOM.render(<App />,document.querySelector("#root"));

