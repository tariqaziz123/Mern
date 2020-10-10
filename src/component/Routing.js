import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

/**
* @author
* @function Routing
**/

const Routing = () => {
  return(
    <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}></Route>
        <Footer/>
    </BrowserRouter>
   )

 }

export default Routing