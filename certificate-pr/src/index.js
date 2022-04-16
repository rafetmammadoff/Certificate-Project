import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/styles/style.css'
import './components/Bascet'
import './main'

import Home from './components/Home';
import { BrowserRouter,Route } from 'react-router-dom';
import Bascet from './components/Bascet';
import Sports from './components/Sports';
import { CartProvider } from 'react-use-cart';




const AppRouter = () => {
  return(
   

      <CartProvider>
    <BrowserRouter>
    <Route path="/" exact component={Home}></Route>
    <Route path="/bascet" component={Bascet}></Route>
    </BrowserRouter>
    </CartProvider>
    
    
  )
}


ReactDOM.render(<AppRouter />,document.querySelector("#root"))
